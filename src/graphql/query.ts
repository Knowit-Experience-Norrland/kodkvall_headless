import { gql } from 'graphql-request';

// WARN: Do not hardcode API urls
export const API_URL =
	'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cldmuilqw1ji601tcbw7sbcmh/master';

const IMAGE_FRAGMENT = gql`
	fragment Image on Image {
		id
		image {
			url
			width
			size
			mimeType
			height
			fileName
		}
	}
`;
const TEXT_FRAGMENT = gql`
	fragment Text on Text {
		heading
		id
		stage
		text {
			html
			markdown
			raw
			text
		}
	}
`;
const CONTENT_FRAGMENT = gql`
	fragment Content on PagecontentUnion {
		__typename
		... on Text {
			...Text
		}
		... on Image {
			...Image
		}
	}
	${IMAGE_FRAGMENT}
	${TEXT_FRAGMENT}
`;

export const PAGE_QUERY = gql`
	query Page($where: PageWhereUniqueInput!) {
		page(where: $where) {
			id
			slug
			title
			subtitle
			hero {
				id
				url
			}
			content {
				...Content
			}
		}
	}
	${CONTENT_FRAGMENT}
`;

export const ALL_BLOGS_QUERY = gql`
	query AllBlogs($stage: Stage!) {
		blogs(stage: $stage) {
			id
			slug
			createdBy {
				id
				name
			}
			title
			preamble
			publishedAt
		}
	}
`;

export const SINGLE_BLOG_QUERY = gql`
	query SingleBlog($where: BlogWhereUniqueInput!, $stage: Stage!) {
		blog(where: $where, stage: $stage) {
			id
			title
			preamble
			text {
				markdown
			}
			createdBy {
				id
				name
				picture
			}
			publishedAt
		}
	}
`;

export const BLOG_COMMENTS_QUERY = gql`
	query BlogComments($blog_id: ID!) {
		comments(where: { blog: { Blog: { id: $blog_id } } }) {
			id
			text
			createdAt
		}
	}
`;

export const COMMENTS_ON_BLOG_MUTATION = gql`
	mutation CommentOnBlog($data: CommentCreateInput!) {
		createComment(data: $data) {
			id
		}
	}
`;

export const PUBLISH_BLOG_AND_COMMENT_MUTATION = gql`
	mutation PublishAndBlogAndComment($blog_id: ID!, $comment_id: ID!) {
		publishBlog(to: PUBLISHED, where: { id: $blog_id }) {
			id
		}
		publishComment(to: PUBLISHED, where: { id: $comment_id }) {
			id
		}
	}
`;

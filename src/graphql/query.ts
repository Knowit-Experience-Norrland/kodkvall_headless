import { gql } from 'graphql-request';

// WARN: Do not hardcode API urls
export const API_URL =
	'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cldmuilqw1ji601tcbw7sbcmh/master';

export const PORTFOLIO_QUERY = gql`
	query Portfolio($where: ProjectWhereUniqueInput!) {
		project(where: $where) {
			id
			slug
			title
			subtitle
			hero {
				id
				url
			}
			content {
				... on Text {
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
				... on Image {
					id
					alt
					image {
						url
					}
				}
			}
		}
	}
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

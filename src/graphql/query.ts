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

export const ALL_BLOGS_QUERY = gql``;

export const SINGLE_BLOG_QUERY = gql``;

export const BLOG_COMMENTS_QUERY = gql``;

export const COMMENTS_ON_BLOG_MUTATION = gql``;

export const PUBLISH_BLOG_AND_COMMENT_MUTATION = gql``;

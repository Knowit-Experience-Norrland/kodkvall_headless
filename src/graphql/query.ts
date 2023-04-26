import { gql } from 'graphql-request';

// WARN: Do not hardcode API urls
export const API_URL =
	'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cldmuilqw1ji601tcbw7sbcmh/master';

const IMAGE_FRAGMENT = gql``;

const TEXT_FRAGMENT = gql``;

const CONTENT_FRAGMENT = gql`
	${IMAGE_FRAGMENT}
	${TEXT_FRAGMENT}
`;

export const PORTFOLIO_QUERY = gql`
	${CONTENT_FRAGMENT}
`;

export const ALL_BLOGS_QUERY = gql``;

export const SINGLE_BLOG_QUERY = gql``;

export const BLOG_COMMENTS_QUERY = gql``;

export const COMMENTS_ON_BLOG_MUTATION = gql``;

export const PUBLISH_BLOG_AND_COMMENT_MUTATION = gql``;

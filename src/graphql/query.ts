import { gql } from 'graphql-request';

export const PORTFOLIO_QUERY = gql`
	query Portfolio($where: ProjectWhereUniqueInput!) {
		project(where: $where) {
			id
			slug
			title
			subtitle
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
	query Blog($where: BlogWhereUniqueInput!, $stage: Stage!) {
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

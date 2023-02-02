import { gql } from "graphql-request";

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

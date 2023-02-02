// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

import { request } from 'graphql-request';
import { PORTFOLIO_QUERY, type PortfolioQuery, type PortfolioQueryVariables } from '../graphql';

export const load = async () => {
	const { project } = await request<PortfolioQuery, PortfolioQueryVariables>({
		url: 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cldmuilqw1ji601tcbw7sbcmh/master',
		document: PORTFOLIO_QUERY,
		variables: {
			where: {
				slug: 'test-projekt'
			}
		}
	});

	return {
		portfolio: project
	};
};

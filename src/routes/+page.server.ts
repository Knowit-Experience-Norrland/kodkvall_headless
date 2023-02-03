export const prerender = true;

import { request } from 'graphql-request';
import { PORTFOLIO_QUERY, type PortfolioQuery, type PortfolioQueryVariables } from '../graphql';
import type { PageServerLoad } from './$types';

export const load = (async () => {
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
}) satisfies PageServerLoad;

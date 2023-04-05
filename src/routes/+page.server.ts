export const prerender = true;

import { request } from 'graphql-request';
import { API_URL, PORTFOLIO_QUERY, type PortfolioQuery, type PortfolioQueryVariables } from '../graphql';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const { project } = await request<PortfolioQuery, PortfolioQueryVariables>({
		url: API_URL,
		document: PORTFOLIO_QUERY,
		variables: {
			where: {
				slug: 'home'
			}
		}
	});

	return {
		portfolio: project
	};
}) satisfies PageServerLoad;

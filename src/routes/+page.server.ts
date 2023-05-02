export const prerender = true;

import { request } from 'graphql-request';
import { API_URL, PAGE_QUERY, type PageQuery, type PageQueryVariables } from '../graphql';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const { page } = await request<PageQuery, PageQueryVariables>({
		url: API_URL,
		document: PAGE_QUERY,
		variables: {
			where: {
				slug: 'home'
			}
		}
	});

	return {
		page
	};
}) satisfies PageServerLoad;

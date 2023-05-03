export const prerender = true;

import { request } from 'graphql-request';
import type { PageServerLoad } from './$types';
import { API_URL, PAGE_QUERY, type PageQuery, type PageQueryVariables } from '../graphql';

export const load = (async () => {
	// TODO: request page query

	const {page} = await request<PageQuery, PageQueryVariables>({
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

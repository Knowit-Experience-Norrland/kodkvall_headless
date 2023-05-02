export const prerender = true;

import { request } from 'graphql-request';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	// TODO: request page query

	return {
		page: null
	};
}) satisfies PageServerLoad;

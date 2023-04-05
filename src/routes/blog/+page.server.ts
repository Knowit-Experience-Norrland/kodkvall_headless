export const prerender = true;

import { request } from 'graphql-request';
import {
	ALL_BLOGS_QUERY,
	API_URL,
	Stage,
	type AllBlogsQuery,
	type AllBlogsQueryVariables
} from '../../graphql';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const { blogs } = await request<AllBlogsQuery, AllBlogsQueryVariables>({
		url: API_URL,
		document: ALL_BLOGS_QUERY,
		variables: {
			stage: Stage.Published
		}
	});

	return {
		blogs
	};
}) satisfies PageServerLoad;

export const prerender = true;

import { request } from 'graphql-request';
import {
	ALL_BLOGS_QUERY,
	Stage,
	type AllBlogsQuery,
	type AllBlogsQueryVariables
} from '../../graphql';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const { blogs } = await request<AllBlogsQuery, AllBlogsQueryVariables>({
		url: 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cldmuilqw1ji601tcbw7sbcmh/master',
		document: ALL_BLOGS_QUERY,
		variables: {
			stage: Stage.Published
		}
	});

	return {
		blogs
	};
}) satisfies PageServerLoad;
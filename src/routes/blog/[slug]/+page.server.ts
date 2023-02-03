export const prerender = true;
import type { PageServerLoad } from './$types';
import { request } from 'graphql-request';
import {
	SINGLE_BLOG_QUERY,
	Stage,
	type SingleBlogQuery,
	type SingleBlogQueryVariables
} from '../../../graphql';

export const load = (async ({ params }) => {
	const { blog } = await request<SingleBlogQuery, SingleBlogQueryVariables>({
		url: 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cldmuilqw1ji601tcbw7sbcmh/master',
		document: SINGLE_BLOG_QUERY,
		variables: {
			stage: Stage.Published,
			where: {
				slug: params.slug
			}
		}
	});

	return {
		blog
	};
}) satisfies PageServerLoad;

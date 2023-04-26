export const prerender = false;

import type { PageServerLoad } from './$types';
import type { Actions } from './$types';

export const load = (async ({ params }) => {
  // TODO: request SingleBlog query

  // TODO: request BlogComments query

	return {
		blog: null,
		comments: []
	};
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const text = data.get('text');
		const blogId = data.get('blogId');
		if (!text) return { error: 'No text provided' };
		if (!blogId) return { error: 'No blogId provided' };

		try {
			const { createComment } = {} as any; // TODO: request CommentOnBlog mutation

			if (!createComment?.id) {
				throw new Error('Create comment mutation was not successfull');
			}

			const { publishBlog, publishComment } = {} as any // TODO: request PublishAndBlogAndComment mutation


			if (!publishBlog?.id) {
				throw new Error('Publishing blog was not successfull');
			}

			if (!publishComment?.id) {
				throw new Error('Publishing comment was not successfull');
			}

			return { error: null };
		} catch (e) {
			console.error(e);
			return { error: 'Something went wrong' };
		}
	}
} satisfies Actions;

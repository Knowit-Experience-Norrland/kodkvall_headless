export const prerender = false;

import type { PageServerLoad } from './$types';
import type { Actions } from './$types';
import { request as gqlRequest } from 'graphql-request';
import {
	API_URL,
	BLOG_COMMENTS_QUERY,
	COMMENTS_ON_BLOG_MUTATION,
	PUBLISH_BLOG_AND_COMMENT_MUTATION,
	SINGLE_BLOG_QUERY,
	Stage,
	type BlogCommentsQuery,
	type BlogCommentsQueryVariables,
	type CommentOnBlogMutation,
	type CommentOnBlogMutationVariables,
	type PublishAndBlogAndCommentMutation,
	type PublishAndBlogAndCommentMutationVariables,
	type SingleBlogQuery,
	type SingleBlogQueryVariables
} from '../../../graphql';

export const load = (async ({ params }) => {
	const { blog } = await gqlRequest<SingleBlogQuery, SingleBlogQueryVariables>({
		url: API_URL,
		document: SINGLE_BLOG_QUERY,
		variables: {
			stage: Stage.Published,
			where: {
				slug: params.slug
			}
		}
	});

	const { comments } = await gqlRequest<BlogCommentsQuery, BlogCommentsQueryVariables>({
		url: API_URL,
		document: BLOG_COMMENTS_QUERY,
		variables: {
			blog_id: blog?.id || ''
		}
	});

	return {
		blog,
		comments
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
			const { createComment } = await gqlRequest<
				CommentOnBlogMutation,
				CommentOnBlogMutationVariables
			>({
				url: API_URL,
				document: COMMENTS_ON_BLOG_MUTATION,
				variables: {
					data: {
						text: text.toString(),
						blog: { connect: { Blog: { id: blogId.toString() } } }
					}
				}
			});

			if (!createComment?.id) {
				throw new Error('Create comment mutation was not successfull');
			}

			const { publishBlog, publishComment } = await gqlRequest<
				PublishAndBlogAndCommentMutation,
				PublishAndBlogAndCommentMutationVariables
			>({
				url: API_URL,
				document: PUBLISH_BLOG_AND_COMMENT_MUTATION,
				variables: {
					blog_id: blogId.toString(),
					comment_id: createComment.id
				}
			});

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

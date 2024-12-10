import { WordPressPostProps } from "@/interfaces/wp_post";
import { errorToast } from "../_components/toastify";
import { wpquery } from "../services/wordpress";

export const getPosts = async () => {
  try {
    const {
      posts: { nodes },
    } = await wpquery({
      query: `
	query GetPosts {
		posts {
			nodes {
				id
				slug
				title
				author {
					node {
						name
					}
				}
				content
				featuredImage {
					node {
						altText
						mediaItemUrl
					}
				}
			}
		}
	}
		`,
    });
    if (!nodes) throw new Error();
    return nodes;
  } catch (e) {
    errorToast("Error obteniendo posts. Prueba de nuevo más tarde.");
    console.log(e);
  }
};

export const getPost = async (slug: string): Promise<WordPressPostProps | undefined> => {
  try {
    const { post } = await wpquery({
      query: `
  query GetPost($idType: PostIdType = SLUG) {
    post(
      idType: $idType
      id: "${slug}"
    ) {
      content
      title
      seo {
        metaDesc
        metaKeywords
        opengraphTitle
      }
      featuredImage {
        node {
          altText
          mediaItemUrl
        }
      }
    }
  }
    `,
    });
    return post;
  } catch (e) {
    errorToast("Error obteniendo posts. Prueba de nuevo más tarde.");
    console.log(e);
    return undefined
  }
};

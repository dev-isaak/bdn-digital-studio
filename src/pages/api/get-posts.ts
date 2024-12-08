import { wpquery } from '@/app/services/wordpress';
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  nodes?: any
  message?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {

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

    res.status(200).json({ nodes })
  } catch (error) {
    console.log("Error obteniendo los posts de wordpress:", error);
    res.status(500).json({ message: 'Error obteniendo los posts.' })
  }
}

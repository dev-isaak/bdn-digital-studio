import { wpquery } from '@/app/services/wordpress';
import { WordPressPostProps } from '@/interfaces/wp_post';
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  post?: WordPressPostProps
  message?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { slug } = req.query

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
    res.status(200).json({ post })
  } catch (error) {
    console.log("Error obteniendo el post de wordpress:", error);
    res.status(500).json({ message: 'Error obteniendo los posts.' })
  }
}

import { wpquery } from '@/app/services/wordpress';
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  post: any
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
    console.log("Error enviando correos:", error);
    return false
  }
}

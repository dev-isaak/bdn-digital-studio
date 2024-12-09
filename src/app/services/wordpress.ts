import { HEADLESS_CMS_GQL } from "@/lib/constants";

interface WPGraphQLParams {
  query: string;
  variables?: object
}

export async function wpquery({ query, variables = {} }: WPGraphQLParams) {
  const res = await fetch(HEADLESS_CMS_GQL, {
    cache: 'force-cache',
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query,
      variables
    })
  })

  if (!res.ok) {
    console.error(res)
    return {}
  }

  const { data } = await res.json()

  return data
}
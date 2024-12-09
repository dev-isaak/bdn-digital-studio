export interface WordPressPostProps {
  title: string;
  content: string;
  slug: string;
  seo: {
    metaDesc: string;
  };
  featuredImage: {
    node: {
      mediaItemUrl: string;
      altText: string;
    };
  };
}

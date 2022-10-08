import { contentfulQuery } from './Query';

export async function getPosts() {
  const query = /* GRAPHQL */ `
    query PostsQuery {
      postCollection (limit: 100) {
        items {
          title
          slug
          body {
            json
          }
          imagesCollection(limit: 10) {
            items {
              url
              title
              width
              height
            }
          }
          color
          backgroundColor
        }
      }
    }`;
  const { data } = await contentfulQuery(query);
  return data.postCollection.items;
}

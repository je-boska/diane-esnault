import { contentfulQuery } from './Query';

export async function getPosts() {
  const query = /* GRAPHQL */ `
    query PostsQuery {
      postCollection (limit: 10) {
        items {
          title
          slug
          body {
            json
            links {
              assets {
                block {
                  sys {
                      id
                  }
                  contentType
                  title
                  description
                  url
                  width
                  height
                }
              }
            }
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
  const data = await contentfulQuery(query);
  return data.postCollection.items;
}

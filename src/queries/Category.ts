import { contentfulQuery } from './Query';

export async function getCategories() {
  const query = /* GRAPHQL */ `
    query CategoryQuery {
      categoryCollection (
        limit: 3
      ) {
        items {
          title
          slug
          body {
            json
          }
          linkedFrom {
            postCollection(limit: 100) {
                items {
                    sys {
                      firstPublishedAt
                    }
                    title
                    slug
                    imagesCollection(limit: 1) {
                        items {
                          url
                          title
                          width
                          height
                        }
                    }
                }
            }
          }
        }
      }
    }`;
  const { data } = await contentfulQuery(query);
  return data.categoryCollection.items;
}

export async function getCategoryNames() {
  const query = /* GRAPHQL */ `
    query CategoryQuery {
      categoryCollection (limit: 3) {
        items {
          title
          slug
        }
      }
    }`;
  const { data } = await contentfulQuery(query);
  return data.categoryCollection.items;
}

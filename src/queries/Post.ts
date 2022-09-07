export async function getPosts() {
  const response = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${
      import.meta.env.PUBLIC_CONTENTFUL_SPACE_ID
    }`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          import.meta.env.PUBLIC_CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({
        query: `
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
                  }
                }
              }
            }
          }
          `,
      }),
    }
  );

  const json = await response.json();
  return json.data.postCollection.items;
}

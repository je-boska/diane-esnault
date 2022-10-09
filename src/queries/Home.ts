import { contentfulQuery } from './Query';

export async function getHomePage() {
  const query = /* GRAPHQL */ `
    query HomePageQuery {
      page (id: "3lEvinRZ5kVVrFQm28HEui") {
        title
        body {
          json
        }
        backgroundImage {
          url
          title
          width
          height
        }
        color
        backgroundColor
      }
      categoryCollection (limit: 3) {
        items {
          title
          slug
        }
      }
    }`;
  const { data } = await contentfulQuery(query);
  return data;
}

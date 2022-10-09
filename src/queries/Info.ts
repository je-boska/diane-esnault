import { contentfulQuery } from './Query';

export async function getInfoPage() {
  const query = /* GRAPHQL */ `
    query InfoPageQuery {
      page (id: "3m2KSU6kLarD2QOlUKofra") {
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
    }`;
  const { data } = await contentfulQuery(query);
  return data.page;
}

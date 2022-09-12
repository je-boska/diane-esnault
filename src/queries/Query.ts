export async function contentfulQuery(query) {
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
        query,
      }),
    }
  );

  const json = await response.json();
  return json.data;
}

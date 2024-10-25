export const getLatestRepos = async () => {
  let latestFourRepos = [];
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${import.meta.env.GITHUB_TOKEN}`,
    },
    body: JSON.stringify({
      query: `
      query {
        viewer {
          repositories(first: 4, orderBy: {field: UPDATED_AT, direction: DESC}, privacy: PUBLIC) {
            nodes {
              name
              description
              updatedAt
              url
            }
          }
        }
      }
    `,
    }),
  });

  if (response.ok) {
    const data = await response.json();
    latestFourRepos = data.data.viewer.repositories.nodes;
  }

  return latestFourRepos;
};

// api/githubAPI.js
const getUserRepos = async (token, page = 1) => {
  const response = await fetch(`https://api.github.com/user/repos?page=${page}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return data;
};

const getIssues = async (token, owner, repo) => {
  const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/issues`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return data;
};

export { getUserRepos, getIssues };

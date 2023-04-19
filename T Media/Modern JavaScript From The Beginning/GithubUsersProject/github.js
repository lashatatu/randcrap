class Github {
  constructor () {
    this.client_id = process.env.GITHUB_CLIENT_ID2;
    this.client_secret = process.env.GITHUB_CLIENT_SECRET2;
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser (user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    };
  }

}
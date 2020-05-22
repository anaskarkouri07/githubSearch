class GitHub {
  constructor() {
    this.client_id = "4768e2a4cd445d9f2279";
    this.client_secret = "42206d2433eb967fced55fb45023b076967d3f02";
  }
  async getUser(user) {
    const res = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const data = await res.json();

    return {
      data,
    };
  }
  async getRepos(user) {
    const res = await fetch(
      `https://api.github.com/users/${user}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const data = await res.json();

    return {
      data,
    };
  }

  //   getUser(user) {
  //     return new Promise((resolve, reject) => {
  //       fetch(
  //         `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
  //       )
  //         .then((res) => res.json())
  //         .then((data) => resolve(data))
  //         .catch((err) => reject(err));
  //     });
  //   }
}

class UI {
  constructor(profile, repos) {
    this.profile = profile;
    this.repos = repos;
  }
  showProfile() {
    return `
                <div class="img">
                    <img src="${this.profile.avatar_url}" alt="">
                    <div class="content">
                        <h3>${this.profile.name}</h3>
                        <button>show Repos</button>
                    </div>
                </div>
                <div class="info">
                    <div class="info-followers">
                        <div>public repos :<span>${this.profile.public_repos}</span></div>

                        <div>public gists :<span>${this.profile.public_gists}</span></div>

                        <div>followers :<span>${this.profile.followers}</span></div>

                        <div>following :<span>${this.profile.followers}</span></div>
                    </div>
                    <ul class="info-list">
                        <li>company : ${this.profile.company}</li>
                        <li>location : ${this.profile.location}</li>
                        <li>blog : ${this.profile.blog}</li>
                        <li>member : ${this.profile.created_at}</li>
                    </ul>
                </div>
    `;
  }

  showRepos() {
    return `
    <h2>Latest Repos</h2>
        <ul>
    ${this.repos
      .map((repo) => {
        return `   
        <li><a href="${repo.html_url}">${repo.full_name}</a>
            <div class="info-repo">
                <div>star : ${repo.stargazers_count}</div>
                <div>watcher : ${repo.watchers_count}</div>
                <div>fork : ${repo.forks}</div>
            </div>
        </li>
    `;
      })
      .join("")}
      </ul>
      `;
  }
}

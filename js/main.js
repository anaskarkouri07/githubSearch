const gitHub = new GitHub();
const profile = document.querySelector("section.content");
const repos = document.querySelector("section.repos");

const searchUser = document.querySelector('input[type="text"]');
searchUser.addEventListener("keyup", (e) => {
  repos.innerHTML = "";
  const valueSearch = e.target.value;
  if (valueSearch !== "") {
    gitHub.getUser(valueSearch).then((data) => {
      if (data.data.message === "Not Found") {
        profile.innerHTML = "<h2 style='color:red'> not found </h2>";
      } else {
        const ui = new UI(data.data);
        profile.innerHTML = ui.showProfile();
      }
    });
  } else {
    profile.innerHTML = "";
  }
});

profile.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    gitHub.getRepos(searchUser.value).then((data) => {
      const ui = new UI(null, data.data);
      repos.innerHTML = ui.showRepos();
    });
  }
});

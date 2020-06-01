const ghpages = require("gh-pages");

ghpages.publish(
  "__sapper__/export",
  {
    branch: "master",
    repo: "https://github.com/EdwinIwan/EdwinIwan.github.io",
    user: {
      name: "edwiniwan",
      email: "edwiniwan@github.com",
    },
  },
  () => {
    console.log("Deploy Complete!");
  }
);

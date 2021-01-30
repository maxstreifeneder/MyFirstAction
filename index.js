const { Toolkit } = require("actions-toolkit");

const tools = new Toolkit({
  secrets: ["GITHUB_TOKEN"],
});

// Run your GitHub Action!
Toolkit.run(async (tools) => {
  tools.log.info(tools.token);
  /*const newIssue = await tools.github.issues.create({
    repo: tools.context.repo,
    title: "New issue!",
    body: "Hello Universe!",
  });*/
  let repos = tools.github.repos.listForOrg({
    org: "sap-samples",
    type: "public",
  })
  .then(({ data }) => {
    console.log(repos);
  });
  tools.log.info("this is a log output");
 // tools.log(newIssue);

  tools.exit.success("We did it!");
});

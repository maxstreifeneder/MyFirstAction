const { Toolkit } = require("actions-toolkit");

// Run your GitHub Action!
Toolkit.run(async (tools) => {
  const newIssue = await tools.github.issues.create({
    repo: tools.context.repo,
    title: "New issue!",
    body: "Hello Universe!",
  });
  tools.log.info("this is a log output");
  tools.log(newIssue);

  tools.exit.success("We did it!");
});

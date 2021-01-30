const { Toolkit } = require("actions-toolkit");

const newIssue = await tools.github.issues.create({
  ...tools.context.repo,
  title: "New issue!",
  body: "Hello Universe!",
});
tools.log.info("this is a log output");
tools.log(newIssue);

// Run your GitHub Action!
Toolkit.run(async (tools) => {
  tools.exit.success("We did it!");
});

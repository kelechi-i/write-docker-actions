import { getInput, setFailed } from "@actions/core";
import { GitHub, context } from "@actions/github";

async function run() {
  const issueTitle = getInput("issueTitle");
  const catFact = getInput("catFact");

  const token = getInput("repoToken");
  try {
    const octokit = new GitHub(token);

    const newIssue = await octokit.issues.create({
      repo: context.repo.repo,
      owner: context.repo.owner,
      title: issueTitle,
      body: catFact
    });
  } catch (error) {
    setFailed(error.message);
  }
}

run();
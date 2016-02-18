'use strict';
/**
function validateFullFormat (issue) {
  return !!issue.match(/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+\#[0-9]+/);
}
function validateRepoFormat (issue) {
  return !!issue.match(/[a-zA-Z0-9_-]+\#[0-9]+/);
}
function validateIssueFormat (issue) {
  return !!issue.match(/^(([a-zA-Z0-9_-]+)?\/)?\#[0-9]+$/);
}
*/
function issuetoLink(issue) {
  // should be user/repo#issue
  if (!issue.match(/.+\/.+#[0-9]+/)) {
    return null;
  }

  // parse and split into username, reponame, issuenumber
  var info = issue.split(/[¥/#]/);
  var
    username = info[0],
    reponame = info[1],
    issuenum = info[2];

  // return url
  return `https://github.com/${username}/${reponame}/issues/${issuenum}`;
}

module.exports = issuetoLink;

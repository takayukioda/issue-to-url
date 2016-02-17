'use strict';

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

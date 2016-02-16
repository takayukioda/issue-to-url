'use strict';

var
  issueToUrl = require(`${__dirname}/../lib/main.js`),
  url = require('url');

describe("issue-to-link", () => {
  var
    username = 'takayukioda',
    reponame = 'github-link',
    issuenum = 4;
  it("should return with url form when succeed", () => {
    var issue = `${username}/${reponame}#${issuenum}`;
    var uri = url.parse(issueToUrl(issue));
    assert.isDefined(uri);
  });
});

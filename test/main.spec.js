'use strict';

var
  githublink = require(`${__dirname}/../lib/githublink`),
  url = require('url');

describe("githublink", () => {
  var
    username = 'takayukioda',
    reponame = 'github-link',
    issuenum = 4;
  it("should return with url form when succeed", () => {
    var issue = `${username}/${reponame}#${issuenum}`;
  });
});
'use strict';

var
  url = require('url'),
  assert = require('chai').assert,
  issueToUrl = require(`${__dirname}/../lib/main.js`);

describe('issue-to-link', () => {
  var
    username = 'takayukioda',
    reponame = 'github-link',
    issuenum = 4;

  it('should return null if format incorrect', () => {
    var issue = `${username}/${reponame}#non-number-here`
    assert.isNull(issueToUrl(issue));
  });

  it('should return with url form when succeed', () => {
    var issue = `${username}/${reponame}#${issuenum}`;
    var uri = url.parse(issueToUrl(issue));
    assert.isNotNull(uri.host);
  });

  it('should be form of github link', () => {
    var issue = `${username}/${reponame}#${issuenum}`;
    var uri = url.parse(issueToUrl(issue));

    var reg = new RegExp(`https://github.com/${username}/${reponame}/issues/${issuenum}`);
    assert.match(uri.path, reg);
  })
});

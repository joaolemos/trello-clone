// spec.js
// This is just a placeholder spec to make sure Protactor is running
// Trello clone should have its own e2e tests
describe('Protractor Demo App', function() {
  it('should have a title', function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
    expect(browser.getTitle()).toEqual('Super Calculator');
  });
});

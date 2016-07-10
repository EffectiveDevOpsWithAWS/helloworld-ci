var app = require('../../helloworld');
var Browser = require('zombie');
var assert = require('assert');

describe('main page', function() {
  before(function() {
    this.browser = new Browser({ site: 'http://localhost:3000' });
  });

  before(function(done) {
    this.browser.visit('/', done);
  });

it('should give more info', function(done) {
    this.timeout(30000);

    setTimeout(function () {
      run.anotherMethod(global, function(err, result) {
        expect(result).to.be.an('object');
        done();
      });
    }, 30000);
 });

  it('should say hello world', function() {
    assert.ok(this.browser.success);
    assert.equal(this.browser.text(), "Hello World");
  })

});

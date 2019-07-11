var libTesting = require('/lib/xp/testing');
var assertEquals = libTesting.assertEquals;
var assertJson = libTesting.assertJson;

var libGalimatias = require('/lib/galimatias');
var normalize = libGalimatias.normalize;
var parse = libGalimatias.parse;
var resolve = libGalimatias.resolve;
var URL = libGalimatias.URL;


const TESTS = [{
  in: 'http://www.example.com',
  parsed: 'http://www.example.com/'
},{
  in: 'http://www.example.com/',
  parsed: 'http://www.example.com/'
},{
  in: 'http://www.example.com:80',
  parsed: 'http://www.example.com/'
},{
  in: 'http://www.example.com:80/',
  parsed: 'http://www.example.com/'
},{
  in: 'https://user:pasw@www.example.com:8080/path/file.extention?param1=value1&param2=value2#fragment',
  parsed: 'https://user:pasw@www.example.com:8080/path/file.extention?param1=value1&param2=value2#fragment'
}]; // TESTS


const RESOLVE_TESTS = [{
  base: 'http://www.example.com',
  path: '/path',
  resolved: 'http://www.example.com/path'
}]; // RESOLVE_TESTS


TESTS.forEach(function (t, i) {
  exports['testParse' + i] = function() {
    assertEquals(
      t.parsed,
      parse(t.in)
    );
  }
  exports['testStaticParse' + i] = function() {
    assertEquals(
      t.parsed,
      URL.parse(t.in)
    );
  }
  exports['testNew' + i] = function() {
    assertEquals(
      t.parsed,
      new URL(t.in).toString()
    );
  }

  exports['testNormalize' + i] = function() {
    assertEquals(
      t.parsed,
      normalize(t.in)
    );
  }

  exports['testStaticNormalize' + i] = function() {
    assertEquals(
      t.parsed,
      URL.normalize(t.in)
    );
  }

  exports['testNormalizeMethod' + i] = function() {
    assertEquals(
      t.parsed,
      new URL(t.in).normalize()
    );
  }
}); // TESTS.forEach


RESOLVE_TESTS.forEach(function (t, i) {
  exports['testResolve' + i] = function() {
    assertEquals(
      t.resolved,
      resolve(t.base, t.path)
    );
  }

  exports['testStaticResolve' + i] = function() {
    assertEquals(
      t.resolved,
      URL.resolve(t.base, t.path)
    );
  }

  exports['testResolveMethod' + i] = function() {
    assertEquals(
      t.resolved,
      new URL(t.base).resolve(t.path)
    );
  }
}); // RESOLVE_TESTS.forEach

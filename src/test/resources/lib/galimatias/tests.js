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

exports.testGetFragment = function() {
  assertEquals(
    'fragment',
    new URL('https://www.example.com#fragment').getFragment()
  );
};

exports.testSetFragment = function() {
  assertEquals(
    'https://www.example.com/',
    new URL('https://www.example.com#fragment').setFragment().normalize() // Testing chain too.
  );
  assertEquals(
    '',
    new URL('https://www.example.com#fragment').setFragment().getFragment() // Testing chain too.
  );
  assertEquals(
    '',
    new URL('https://www.example.com#fragment').setFragment('').getFragment() // Testing chain too.
  );
  assertEquals(
    'changed',
    new URL('https://www.example.com#fragment').setFragment('changed').getFragment() // Testing chain too.
  );
};

exports.testGetHost = function() {
  assertEquals(
    'www.example.com',
    new URL('https://www.example.com').getHost()
  );
};

exports.testSetHost = function() {
  // java.lang.RuntimeException: io.mola.galimatias.GalimatiasParseException: empty host
  assertEquals(
    'https://a/',
    new URL('https://www.example.com').setHost('a').normalize()
  );
  assertEquals(
    'a',
    new URL('https://www.example.com').setHost('a').getHost()
  );
};

exports.testFromString = function() {
  assertEquals(
    'ftp://ftp.example.com/',
    new URL('https://user:pasw@www.example.com:8080/path/file.extention?param1=value1&param2=value2#fragment').fromString('ftp://ftp.example.com').toString()
  );
};

exports.testGetScheme = function() {
  assertEquals(
    'https',
    new URL('https://www.example.com').getScheme()
  );
};

exports.testSetScheme = function() {
  // java.lang.RuntimeException: io.mola.galimatias.GalimatiasParseException: empty scheme
  assertEquals(
    'a://www.example.com/',
    new URL('https://www.example.com').setScheme('a').normalize()
  );
  assertEquals(
    'a',
    new URL('https://www.example.com').setScheme('a').getScheme()
  );
};

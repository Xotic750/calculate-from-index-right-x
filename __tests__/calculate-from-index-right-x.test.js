let calcFromIndexRight;

if (typeof module === 'object' && module.exports) {
  require('es5-shim');
  require('es5-shim/es5-sham');

  if (typeof JSON === 'undefined') {
    JSON = {};
  }

  require('json3').runInContext(null, JSON);
  require('es6-shim');
  const es7 = require('es7-shim');
  Object.keys(es7).forEach(function(key) {
    const obj = es7[key];

    if (typeof obj.shim === 'function') {
      obj.shim();
    }
  });
  calcFromIndexRight = require('../../index.js');
} else {
  calcFromIndexRight = returnExports;
}

describe('calcFromIndexRight', function() {
  it('is a function', function() {
    expect(typeof calcFromIndexRight).toBe('function');
  });

  it('should throw when target not undefined', function() {
    expect(function() {
      calcFromIndexRight();
    }).toThrow();

    expect(function() {
      calcFromIndexRight(void 0);
    }).toThrow();

    expect(function() {
      calcFromIndexRight(null);
    }).toThrow();
  });

  it('should return the correct values for array-like objects', function() {
    const subjects = [
      'abc',
      [1, 2, 3],
      {
        0: 1,
        1: 2,
        2: 3,
        length: 3,
      },
    ];

    const values = [-Infinity, -1, 0, 1, Infinity, NaN, void 0, null, '', '10', false, true];

    const exs = [-Infinity, 2, 0, 1, 2, 0, 0, 0, 0, 2, 0, 1];

    const expected = subjects.map(function(subject) {
      return values.map(function(value) {
        return calcFromIndexRight(subject, value);
      });
    });

    const actual = subjects.map(function() {
      return exs;
    });

    expect(actual).toStrictEqual(expected);
  });

  it('should return the correct values non array-like objects', function() {
    const subjects = [
      1,
      true,
      function(a, b) {
        return b;
      },
      /abc/i,
      new Date(),
    ];

    const values = [-Infinity, -1, 0, 1, Infinity, NaN, void 0, null, '', '10', false, true];

    const expected = subjects.map(function() {
      return values.map(function() {
        return 0;
      });
    });

    const actual = subjects.map(function(subject) {
      return values.map(function(value) {
        return calcFromIndexRight(subject, value);
      });
    });

    expect(actual).toStrictEqual(expected);
  });
});
/**
 * @file Calculates a fromIndexRight of a given value for an array.
 * @version 2.2.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module calculate-from-index-right-x
 */

'use strict';

var toObject = require('to-object-x');
var toLength = require('to-length-x').toLength2018;
var toInteger = require('to-integer-x').toInteger2018;
var isArrayLike = require('is-array-like-x');

var getMin = function _getMin(a, b) {
  return a <= b ? a : b;
};

/**
 * This method calculates a fromIndexRight of a given value for an array.
 *
 * @param {Array} array - The array on which to calculate the starting index.
 * @throws {TypeError} If array is null or undefined.
 * @param {number} fromIndex - The position in this array at which to begin. A
 *  negative value gives the index of array.length + fromIndex by asc.
 * @returns {number} The calculated fromIndex. Default is 0.
 * @example
 * var calcFromIndexRight = require('calculate-from-index-right-x');
 *
 * calcFromIndexRight([1, 2, 3], 1); // 1
 * calcFromIndexRight([1, 2, 3], Infinity); // 2
 * calcFromIndexRight([1, 2, 3], -Infinity); // -Infinity
 * calcFromIndexRight([1, 2, 3], -1); // 2
 */
module.exports = function calcFromIndexRight(array, fromIndex) {
  var object = toObject(array);
  if (isArrayLike(object) === false) {
    return 0;
  }

  var length = toLength(object.length);
  var index = getMin(toInteger(fromIndex), length - 1);

  return index >= 0 ? index : length + index;
};

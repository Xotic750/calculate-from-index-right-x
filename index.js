/**
 * @file Calculates a fromIndexRight of a given value for an array.
 * @version 1.0.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module calculate-from-index-right-x
 */

'use strict';

var toObject = require('to-object-x');
var toLength = require('to-length-x');
var toInteger = require('to-integer-x');
var isArrayLike = require('is-array-like-x');

var $calcFromIndexRight = function calcFromIndexRight(array, fromIndex) {
  var object = toObject(array);
  if (isArrayLike(object) === false) {
    return 0;
  }

  var length = toLength(object.length);
  var index = toInteger(fromIndex);
  return index >= 0 ? Math.min(index, length - 1) : length - Math.abs(index);
};

/**
 * This method calculates a fromIndexRight of a given value for an array.
 *
 * @param {array} array The array on which to calculate the starting index.
 * @throws {TypeError} If array is null or undefined.
 * @param {number} fromIndex The position in this array at which to begin. A
 *  negative value gives the index of array.length + fromIndex by asc.
 * @return {number} The calculated fromIndex. Default is 0.
 * @example
 * var calcFromIndexRight = require('calculate-from-index-right-x');
 *
 * calcFromIndexRight([1, 2, 3], 1); // 1
 * calcFromIndexRight([1, 2, 3], Infinity); // 2
 * calcFromIndexRight([1, 2, 3], -Infinity); // -Infinity
 * calcFromIndexRight([1, 2, 3], -1); // 2
 */
module.exports = $calcFromIndexRight;

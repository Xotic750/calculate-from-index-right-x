import toObject from 'to-object-x';
import toLength from 'to-length-x';
import toInteger from 'to-integer-x';
import isArrayLike from 'is-array-like-x';

var getMin = function getMin(a, b) {
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
 */


var calcFromIndexRight = function calcFromIndexRight(array, fromIndex) {
  var object = toObject(array);

  if (isArrayLike(object) === false) {
    return 0;
  }

  var length = toLength(object.length);
  var index = getMin(toInteger(fromIndex), length - 1);
  return index >= 0 ? index : length + index;
};

export default calcFromIndexRight;

//# sourceMappingURL=calculate-from-index-right-x.esm.js.map
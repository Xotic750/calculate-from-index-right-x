<a
  href="https://travis-ci.org/Xotic750/calculate-from-index-right-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/calculate-from-index-right-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a
  href="https://david-dm.org/Xotic750/calculate-from-index-right-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/calculate-from-index-right-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/calculate-from-index-right-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/calculate-from-index-right-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a
  href="https://badge.fury.io/js/calculate-from-index-right-x"
  title="npm version">
<img src="https://badge.fury.io/js/calculate-from-index-right-x.svg"
  alt="npm version" height="18">
</a>
<a
  href="https://www.jsdelivr.com/package/npm/calculate-from-index-right-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/calculate-from-index-right-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>
<a
  href="https://bettercodehub.com/results/Xotic750/calculate-from-index-right-x"
  title="bettercodehub score">
<img src="https://bettercodehub.com/edge/badge/Xotic750/calculate-from-index-right-x?branch=master"
  alt="bettercodehub score" height="18">
</a>
<a
  href="https://coveralls.io/github/Xotic750/calculate-from-index-right-x?branch=master"
  title="Coverage Status">
<img src="https://coveralls.io/repos/github/Xotic750/calculate-from-index-right-x/badge.svg?branch=master"
  alt="Coverage Status" height="18">
</a>

<a name="module_calculate-from-index-right-x"></a>

## calculate-from-index-right-x

Calculates a fromIndexRight of a given value for an array.

<a name="exp_module_calculate-from-index-right-x--module.exports"></a>

### `module.exports(array, fromIndex)` ⇒ <code>number</code> ⏏

This method calculates a fromIndexRight of a given value for an array.

**Kind**: Exported function  
**Returns**: <code>number</code> - The calculated fromIndex. Default is 0.  
**Throws**:

- <code>TypeError</code> If array is null or undefined.

| Param     | Type                | Description                                                                                                        |
| --------- | ------------------- | ------------------------------------------------------------------------------------------------------------------ |
| array     | <code>Array</code>  | The array on which to calculate the starting index.                                                                |
| fromIndex | <code>number</code> | The position in this array at which to begin. A negative value gives the index of array.length + fromIndex by asc. |

**Example**

```js
import calcFromIndexRight from 'calculate-from-index-right-x';

calcFromIndexRight([1, 2, 3], 1); // 1
calcFromIndexRight([1, 2, 3], Infinity); // 2
calcFromIndexRight([1, 2, 3], -Infinity); // -Infinity
calcFromIndexRight([1, 2, 3], -1); // 2
```

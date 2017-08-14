<a href="https://travis-ci.org/Xotic750/calculate-from-index-right-x"
   title="Travis status">
<img
   src="https://travis-ci.org/Xotic750/calculate-from-index-right-x.svg?branch=master"
   alt="Travis status" height="18"/>
</a>
<a href="https://david-dm.org/Xotic750/calculate-from-index-right-x"
   title="Dependency status">
<img src="https://david-dm.org/Xotic750/calculate-from-index-right-x.svg"
   alt="Dependency status" height="18"/>
</a>
<a href="https://david-dm.org/Xotic750/calculate-from-index-right-x#info=devDependencies"
   title="devDependency status">
<img src="https://david-dm.org/Xotic750/calculate-from-index-right-x/dev-status.svg"
   alt="devDependency status" height="18"/>
</a>
<a href="https://badge.fury.io/js/calculate-from-index-right-x" title="npm version">
<img src="https://badge.fury.io/js/calculate-from-index-right-x.svg"
   alt="npm version" height="18"/>
</a>
<a name="module_calculate-from-index-right-x"></a>

## calculate-from-index-right-x
Calculates a fromIndexRight of a given value for an array.

**Version**: 1.0.0  
**Author**: Xotic750 <Xotic750@gmail.com>  
**License**: [MIT](&lt;https://opensource.org/licenses/MIT&gt;)  
**Copyright**: Xotic750  
<a name="exp_module_calculate-from-index-right-x--module.exports"></a>

### `module.exports` ⇒ <code>number</code> ⏏
This method calculates a fromIndexRight of a given value for an array.

**Kind**: Exported member  
**Returns**: <code>number</code> - The calculated fromIndex. Default is 0.  
**Throws**:

- <code>TypeError</code> If array is null or undefined.


| Param | Type | Description |
| --- | --- | --- |
| array | <code>array</code> | The array on which to calculate the starting index. |
| fromIndex | <code>number</code> | The position in this array at which to begin. A  negative value gives the index of array.length + fromIndex by asc. |

**Example**  
```js
var calcFromIndexRight = require('calculate-from-index-right-x');

calcFromIndexRight([1, 2, 3], 1); // 1
calcFromIndexRight([1, 2, 3], Infinity); // 2
calcFromIndexRight([1, 2, 3], -Infinity); // -Infinity
calcFromIndexRight([1, 2, 3], -1); // 2
```

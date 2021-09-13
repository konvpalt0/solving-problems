#Container With Most Water
## Description
Given `n` non-negative <code>a<sub>1</sub>, a<sub>2</sub>, ..., a<sub>n</sub></code>, where each represents a point at coordinate 
<code>(i, a<sub>i</sub>)</code>. `n` vertical lines are drawn such that the two endpoints of the line `i` is at <code>(i, a<sub>i</sub>)</code>
and <code>(i, 0)</code>. Find two lines, which, together with the x-axis forms a container, such that the container contains the most
water.

**Notice** that you may not slant the container

## Constraints
* `n == height.length`
* <code>2 <= n <= 10<sup>5</sup></code>
* <code>0 <= height[i] <= 10<sup>4</sup></code>

## Examples

```
Input: height = [1,1]
Output: 1
```
```
Input: height = [4,3,2,1,4]
Output: 16
```
```
Input: height = [1,2,1]
Output: 2
```

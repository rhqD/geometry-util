# geometry-utils
A JavaScript utility library for geometry related calculation.
## Vector
### Vector interface
```ts
  // a 3D vector
  const vector1 = {
    x: 1,
    y: 2,
    z: 3,
  };

  // a 2D vector
  const vector2 = {
    x: 2,
    y: 3,
  }

  // component name is all up to you
  const vector3 = {
    u: 2,
    v: 4,
    w: 5,
  }

  // a empty vector
  const vector4 = {};
```
### Vector operation
#### sumVectors
```ts
  const vector1 = {
    x: 1,
    y: 2,
  };
  const vector2 = {
    x: 3,
  };
  const vector3 = {
    y: 2,
  }
  const result = sumVectors(vector1, vector2, vector3);
  // result: { x: 4, y: 4 }
```

#### diffVectors
```ts
  const vector1 = {
    x: 1,
    y: 2,
  };
  const vector2 = {
    x: 3,
    y: 0,
  };
  const result = diffVectors(vector1, vector2);
  // result: { x: -2, y: 2 }
```

#### getDotProduct
```ts
  const vector1 = {
    x: 1,
    y: 2,
  };
  const vector2 = {
    x: 3,
    y: 1,
  };
  const result = getDotProduct(vector1, vector2);
  // result: 5
```
### getAngleBetween
```ts
  const vector1 = {
    x: 0,
    y: 1,
  };

  const vector2 = {
    x: 1,
    y: 0,
  }
  const result = getAngleBetween(vector1, vector2);
  // result: 90
```

### getRadianBetween
same as ```getAngleBetween```, but with radian

### 2D/getDirectedAngle
only applicable to 2D vectors, measures the clockwise angle from a vector to another (in left-hand coordinate system)
```ts
  const vector1 = {
    x: 1,
    y: 0,
  };
  const vector2 = {
    x: 0,
    y: 1,
  };
  getDirectedAngleBetween(vector1, vector2); // 90 degree
  getDirectedAngleBetween(vector1, vector2); // -90 degree
```

### getDirectedRadian
same as getDirectedAngle, but with radian

### getVectorLength
```ts
  const vector = {
    x: 1,
    y: 1,
    x: 1,
  };
  getVectorLength(vector); // 3 ** 0.5
```
### scaleVector
```ts
  const vector = {
    x: 2,
    y: 2,
    z: 2,
  };
  const result = scaleVector(vector, 0.5);
  // result: 
```

### scaleVectorTo
scale a vector to a given length
```ts
  const vector = {
    x: 0,
    y: 0,
    z: 1,
  };
  const result = scaleVectorTo(vector, 2);
  // result: { x: 0, y: 0, x: 2 }
```
### projectVectorTo
projectVectorTo(u, v);
get the projection of u on v;
![alt text](https://img.alicdn.com/imgextra/i2/O1CN015DWjLf1LRbyK54WPI_!!6000000001296-0-tps-427-296.jpg)

### getCrossProduct
get the cross product of two vectors (cross product only exists in 3D and 7D, only 3D is supported).
```ts
  const vector1 = {
    x: 1,
    y: 0,
    z: 0,
  };

  const vector2 = {
    x: 0,
    y: 1,
    z: 0,
  };

  const result = getCrossProduct(vector1, vector2);
  // result: { x: 0, y: 0, z: 1 }
```
### 3D/rotateVectorAroundDirection
rotate a 3D vector clockwise around a given direction
rotateVectorAroundDirection(a, b, θ);
![alt text](https://img.alicdn.com/imgextra/i1/O1CN01DR2K8B230ty38wJIb_!!6000000007194-2-tps-960-720.png)

### rotateVectorWithRadianAroundDirection
same as rotateVectorAroundDirection, but with radian

### 2D/rotateVector
rotate a 2D vector clockwise
```ts
  const vector = {
    x: 1,
    y: 0,
  };
  const result = rotateVector(vector, 90);
  // result: { x: 0, y: 1 }
```
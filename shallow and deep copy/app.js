/*
In the shallow copy, only top-level properties are copied by value, while nested properties (like objects and arrays) are copied by reference. Let's break this down:

. Top-Level Properties:
When you use the spread operator (...), primitive values (like name: "Alice" and age: 25) are copied directly. These are copied by value, meaning the shallow copy and the original object each have their own independent copy of these values.
Changing a top-level primitive in the shallow copy (like shallowCopy.name) does not affect the original object because they are stored separately in memory.
2. Nested Properties (Objects/Arrays):
Nested objects and arrays are copied by reference when using the spread operator in a shallow copy. This means that instead of copying the actual values of these nested objects or arrays, the shallow copy simply gets a reference (a pointer) to the original object's nested data.
Both the original object and the shallow copy point to the same nested object or array in memory. Therefore, if you modify the nested object or array through one of them, the change will be reflected in both. */

const originalObject = {
    name: "Alice", // Primitive value (copied by value)
    age: 25,      // Primitive value (copied by value)
    address: {    // Nested object (copied by reference)
      city: "New York",
      zip: 10001
    },
    hobbies: ["reading", "traveling"] // Array (copied by reference)
  };
  
  
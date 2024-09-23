---
sidebar_position: 1
---

# 📐 Grow

**Increases** the **array** **size**.

It doesn't decrease the array size by assuming that any data loss is undesirable during the same execution of the program.

_Methods that **return pointers** allow **chained calls**._

```cpp
DataTomeMvAvg<int> intAverage(10);

int x = 5, y = 10;
int result, first, last;

result = intAverage.push(x).push(y).get();
first = intAverage.push(56).front();
last = intAverage.push(8).back();
```

### 📝 Syntax

```cpp
DataTomeMvAvg<TypeOfArray, TypeOfSum> &grow(size_t new_size)

// @alias grow
DataTomeMvAvg<TypeOfArray, TypeOfSum> &resize(size_t new_size) { return grow(new_size); }
```

### 🔮 Example

```cpp
DataTomeMvAvg<int, long int> intAverage(3);

// 3 2 1
intAverage.push(1).push(2).push(3);

// 3 2 1 0 0
intAverage.grow(5);
// intAverage.resize(5);

// 4 3 2 1 0
intAverage.push(4);
```

### ⏱ Complexity

**Linear (O(n))** in the **array size**.

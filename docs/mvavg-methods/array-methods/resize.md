---
sidebar_position: 1
---

# 📐 Resize

**Changes** the **array** **size**.

_Methods that **return pointers** allow **chained calls**._

```cpp
DataTomeMvAvg<unsigned int> intAverage(10);

unsigned int x = 5, y = 10;
unsigned int result, first, last;

result = intAverage.push(x).push(y).get();
first = intAverage.push(56).front();
last = intAverage.push(8).back();
```

### 📝 Syntax

```cpp
DataTomeMvAvg<TypeOfArray, TypeOfSum> &resize(size_t new_size)
```

### 🔮 Example

```cpp
DataTomeMvAvg<unsigned int, unsigned long int> intAverage(3);

// 3 2 1
intAverage.push(1).push(2).push(3);

// 3 2 1 0 0
intAverage.resize(5);

// 4 3 2 1 0
intAverage.push(4);
```

### ⏱ Complexity

**Linear (O(n))** in the **array size**.

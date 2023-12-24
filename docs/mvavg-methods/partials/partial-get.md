---
sidebar_position: 3
---

# 📤 Partial Get

Returns the Partial average result of the requested ID.
Use the ID provided by the creation method to access the partial result.
Requesting an invalid ID will return a 0.

### 📝 Syntax

```cpp
TypeOfArray partial_get(size_t id)
```

### 🔮 Example

```cpp
DataTomeMvAvg<unsigned int, unsigned long int> intAverage(10);

size_t partial_id = intAverage.partial_create(3);
size_t partial_2_id = intAverage.partial_create(5);

// 10 4 3 2 1 0 0 0 0 0
intAverage.push(1).push(2).push(3).push(4).push(10);

// (10 + 4 + 3) / 3 = 5
intAverage.partial_get(partial_id);
// (10 + 4 + 3 + 2 + 1) / 5 = 4
intAverage.partial_get(partial_2_id);
```

### ⏱Complexity

**Constant (O(1))**.

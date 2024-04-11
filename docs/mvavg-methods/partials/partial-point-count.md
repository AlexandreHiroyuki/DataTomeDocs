---
sidebar_position: 5
---

# 📈 Partial Point Count

**Returns** the **number of data points** pushed in the **array** contributing to the partial average calculation.

> Use the ID provided by the creation method to access the partial result.
> Requesting an invalid ID will return a 0.

### 📝 Syntax

```cpp
size_t partial_point_count(size_t id);
```

### 🔮 Example

```cpp
DataTomeMvAvg<unsigned int> intAverage(10);

size_t partial_id = intAverage.partial_create(5);

intAverage.push(2);

intAverage.partial_point_count(partial_id); // Will return 1

intAverage.push(5);

intAverage.partial_point_count(partial_id); // Will return 2
```

### ⏱ Complexity

**Constant (O(1))**.
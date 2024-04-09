---
sidebar_position: 5
---

# 📈 Partial Point Count

**Returns** the **number of data points** pushed in the **array** contributing to the partial average calculation.

> Use the ID provided by the creation method to access the partial result.
> Requesting an invalid ID will return a 0.

### 📝 Syntax

```cpp
size_t point_count();
```

### 🔮 Example

```cpp
DataTomeMvAvg<unsigned int> intAverage(10);

intAverage.push(2);

intAverage.point_count(); // Will return 1

intAverage.push(5);

intAverage.point_count(); // Will return 2
```

### ⏱ Complexity

**Constant (O(1))**.
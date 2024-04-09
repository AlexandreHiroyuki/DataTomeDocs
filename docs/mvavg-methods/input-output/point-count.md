---
sidebar_position: 10
---

# 📈 Point Count

**Returns** the **number of data points** pushed in the **array** contributing to the average calculation.

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
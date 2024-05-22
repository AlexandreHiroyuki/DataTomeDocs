---
sidebar_position: 10
---

# 📊 Standard Deviation

**Returns** the **standard deviation** of the time series array.

> The standard deviation is a measure of the amount of variation or dispersion of a set of values. A low standard deviation indicates that the values tend to be close to the mean of the set, while a high standard deviation indicates that the values are spread out over a wider range.

### 📝 Syntax

```cpp
TypeOfArray std()
```

### 🔮 Example

```cpp
DataTomeAnalysis<int, long int> TestAnalysis(10);

for (size_t i = 0; i < data_count; i++) {
  TestMV.push(i);
}

TestMV.std()
```

### ⏱ Complexity

**Linear (O(n))** in the number of data points in the array.
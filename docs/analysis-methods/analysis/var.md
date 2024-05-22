---
sidebar_position: 9
---

# 📊 Variance

**Returns** the **variance** of the time series array.

> The variance is a measure of how spread out the values in a data set are. It is a measure of how far each value in the data set is from the mean.
>
> It is calculated as the average of the squared differences from the mean.

### 📝 Syntax

```cpp
TypeOfArray var()
```

### 🔮 Example

```cpp
DataTomeAnalysis<int, long int> TestAnalysis(10);

for (size_t i = 0; i < data_count; i++) {
  TestMV.push(i);
}

TestMV.var()
```

### ⏱ Complexity

**Linear (O(n))** in the number of data points in the array.
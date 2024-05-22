---
sidebar_position: 6
---

# 📉 Lowest Mode

**Returns** the **lowest mode** of the **data points** pushed in the **array**.

> The mode is the value that appears most frequently in a data set. A set of data may have one mode, more than one mode, or no mode at all.
> To avoid confusion, the lowest mode is returned in case of multiple modes.

### 📝 Syntax

```cpp
TypeOfArray lowest_mode()
```

### 🔮 Example

```cpp
DataTomeAnalysis<int, long int> intAverage(10);

int mode_data[10] = {1, 2, 3, 3, 3, 3, 4, 4, 4, 4};

for (size_t i = 0; i < 10; i++) {
  intAverage.push(mode_data[i]);
}

intAverage.lowest_mode(); // Will return 3
```

### ⏱ Complexity

**Linearithmic (O(n log n))** in the number of data points in the array.
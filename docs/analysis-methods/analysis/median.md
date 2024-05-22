---
sidebar_position: 5
---
# 📊 Median

**Returns** the **median** of the **data points** pushed in the **array**.

### 📝 Syntax

```cpp
TypeOfArray median()
```

### 🔮 Example

```cpp
DataTomeAnalysis<int, long int> intAverage(10);

int data[10] = {2, 4, 6, 8, 10, 12, 14, 16, 18, 20};

for (size_t i = 0; i < 10; i++) {
  intAverage.push(data[i]);
}

intAverage.median(); // Will return 11
```

### ⏱ Complexity

**Linearithmic (O(n log n))** in the number of data points in the array.
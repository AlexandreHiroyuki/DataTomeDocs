---
sidebar_position: 8
---

# 📏 Size of Array

**Returns** the **size** of the **array**.

### 📝 Syntax

```cpp
size_t size_of_array();
size_t size(); // Alias
```

### 🔮 Example

```cpp
DataTomeMvAvg<int> intAverage(10);
DataTomeMvAvg<int> anotherAverage(4);

// Will return 10
intAverage.size();

// Will return 4
anotherAverage.size();
```

### ⏱ Complexity

**Constant (O(1))**.

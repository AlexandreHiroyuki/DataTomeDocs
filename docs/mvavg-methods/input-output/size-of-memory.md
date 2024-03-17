---
sidebar_position: 9
---

# 📏 Size of Memory

**Returns** the **memory usage** of the **array**.

### 📝 Syntax

```cpp
size_t size_of_memory();
```

### 🔮 Example

```cpp
DataTomeMvAvg<unsigned int> intAverage(10);
DataTomeMvAvg<unsigned int> anotherAverage(4);

// Will return size of unsigned int * 10
intAverage.size_of_memory();

// Will return size of unsigned int * 4
anotherAverage.size_of_memory();
```

### ⏱ Complexity

**Constant (O(1))**.

---
sidebar_position: 4
---

# 📏 Partial Size of Array

**Returns** the **size** of the **partial**.

> Use the ID provided by the creation method to access the partial result.
> Requesting an invalid ID will return a 0.

### 📝 Syntax

```cpp
size_t partial_size_of_array(size_t id)
size_t partial_size(size_t id) // Alias
```

### 🔮 Example

```cpp
DataTomeMvAvg<unsigned int, unsigned long int> intAverage(10);

size_t partial_id = intAverage.partial_create(3);

intAverage.partial_size(partial_id); // Will return 3
```

### ⏱ Complexity

**Constant (O(1))**.

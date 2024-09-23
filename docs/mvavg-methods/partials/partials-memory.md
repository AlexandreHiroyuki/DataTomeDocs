---
sidebar_position: 6
---

# 📏 Partials Memory

By its nature, the partials don't copy the data on the original array, but instead store already computed data based on the original array. This means that a single partial instance consumes constant memory, regardless of the size of the original array.

With this in mind, don't make sense to calculate the memory usage of a single partial instance, as it will always be the same.
Instead, the memory usage of the partials is calculated based on the number of partial instances created inside this one DataTomeMvAvg object.

### 📝 Syntax

```cpp
size_t partials_memory();
```

### 🔮 Example

```cpp
DataTomeMvAvg<int> intAverage(10);

intAverage.partial_create(3);
intAverage.partial_create(5);

intAverage.partials_memory(); // Will return 2
```

### ⏱ Complexity

**Constant (O(1))**.
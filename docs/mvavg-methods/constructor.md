---
sidebar_position: 2
---

# 🛠 Constructor

## 📝 Syntax

```cpp
// Passing only size as an argument
DataTomeMvAvg<class TypeOfArray, class TypeOfSum> yourAverageName(size_t size);
```

- **Template parameter**.
  **TypeOfArray** is the **type of the array elements**.
  **TypeOfSum** is the **type of the sum of the array elements**, it is equal to **TypeOfArray** by default.

1. **Passing only size as an argument**.
   > The class will create an array with the **size** passed as an argument and, by **default**, all positions will initialize with 0.

## 🔮 Example

```cpp
// This will create an MovingAverage of size 10, int type, and acumulator type as int
DataTomeMvAvg<int> intAverage(10);

// This will create an MovingAverage of size 10, int type, and acumulator type as long int
DataTomeMvAvg<int, long int> intAverage(10);
```

## ⏱ Complexity

**Constant (O(1))**.

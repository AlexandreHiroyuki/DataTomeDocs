---
sidebar_position: 2
---

# 📊 Count

**Returns** the **number of data points** pushed in the **array**.

> This is an alias for the inherited `point_count()` method from DataTomeMvAvg. <br></br>
> [Click here to read about the 📈 Point Count method](pathname:///docs/mvavg-methods/input-output/point-count).

### 📝 Syntax

```cpp
size_t count() { return this->point_count(); }
```

### 🔮 Example

```cpp
DataTomeMvAvg<unsigned int> intAverage(10);

intAverage.push(2);

intAverage.count(); // Will return 1

intAverage.push(5);

intAverage.count(); // Will return 2
```

### ⏱ Complexity

**Constant (O(1))**.

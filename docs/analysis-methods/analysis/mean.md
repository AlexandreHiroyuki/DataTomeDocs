---
sidebar_position: 1
---

# ⚖ Mean

**Returns** the **mean** of the time series array.

> This is an alias for the inherited `get()` method from DataTomeMvAvg. <br></br>
> [Click here to read about the 📤 Get method](pathname:///docs/mvavg-methods/input-output/get).

### 📝 Syntax

```cpp
TypeOfArray mean() { return this->get(); }
```

### 🔮 Example

```cpp
DataTomeAnalysis<int, long int> intAverage(10);

// Array: 8 0 0 0
intAverage.push(8);
// Array: 8 8 0 0
intAverage.push(8);
// Array: 4 8 8 0
intAverage.push(4);
// Array: 4 4 8 8
intAverage.push(4);

// Returns the average
// Value: (4 + 4 + 8 + 8) / 4 = 6
intAverage.mean();

// Value: (4 + 4) / 2 = 4
intAverage.mean(2);
```

### ⏱ Complexity

**Constant (O(1))**.
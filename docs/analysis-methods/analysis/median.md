---
sidebar_position: 5
---
# 📊 Median

**Returns** the **median** of the **data points** pushed in the **array**.

> Statistically, the moving average is optimal for recovering the underlying trend of the time series when the fluctuations about the trend are normally distributed. However, the normal distribution does not place high probability on very large deviations from the trend which explains why such deviations will have a disproportionately large effect on the trend estimate. It can be shown that if the fluctuations are instead assumed to be Laplace distributed, then the moving median is statistically optimal. For a given variance, the Laplace distribution places higher probability on rare events than does the normal, which explains why the moving median tolerates shocks better than the moving mean.
> 
> [Read more at Wikipedia](https://en.wikipedia.org/wiki/Moving_average#Moving_median).

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
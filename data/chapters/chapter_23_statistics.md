# Chapter 23: Statistics

## 23.1 Introduction to Statistics

**Statistics** is the science of collecting, organizing, analyzing, and interpreting data.

### Types of Data:
- **Qualitative** (categorical): color, gender, nationality
- **Quantitative** (numerical):
  - Discrete: countable (students in class)
  - Continuous: measurable (height, weight)

---

## 23.2 Measures of Central Tendency

### Mean (Average)
$$\bar{x} = \frac{\sum x}{n}$$

### Example 23.1: Calculating Mean
#### Problem
Find the mean of: 5, 8, 12, 7, 10, 6

#### Solution
$$\bar{x} = \frac{5 + 8 + 12 + 7 + 10 + 6}{6} = \frac{48}{6} = \mathbf{8}$$

### Median
The middle value when data is arranged in order.

### Example 23.2: Finding Median
#### Problem
Find the median of: 3, 7, 2, 9, 5, 8, 4

#### Solution
Arrange: 2, 3, 4, **5**, 7, 8, 9

**Median = 5** (middle value)

### Example 23.3: Even Number of Values
#### Problem
Find the median of: 12, 8, 15, 10, 6, 14

#### Solution
Arrange: 6, 8, **10, 12**, 14, 15

Median = (10 + 12)/2 = **11**

### Mode
The most frequent value.

### Example 23.4: Finding Mode
#### Problem
Find the mode of: 4, 7, 3, 7, 9, 7, 5, 3

#### Solution
7 appears 3 times (most frequent)

**Mode = 7**

---

## 23.3 Mean from Frequency Table

$$\bar{x} = \frac{\sum fx}{\sum f}$$

### Example 23.5: Frequency Table Mean
#### Problem
Find the mean:
| Score (x) | 2 | 3 | 4 | 5 | 6 |
|-----------|---|---|---|---|---|
| Frequency (f) | 3 | 5 | 8 | 6 | 3 |

#### Solution
| x | f | fx |
|---|---|-----|
| 2 | 3 | 6 |
| 3 | 5 | 15 |
| 4 | 8 | 32 |
| 5 | 6 | 30 |
| 6 | 3 | 18 |
| **Total** | **25** | **101** |

$$\bar{x} = \frac{101}{25} = \mathbf{4.04}$$

---

## 23.4 Mean from Grouped Data

Use class midpoints:

$$\bar{x} = \frac{\sum fx}{\sum f}$$

### Example 23.6: Grouped Data Mean
#### Problem
| Marks | 0-9 | 10-19 | 20-29 | 30-39 | 40-49 |
|-------|-----|-------|-------|-------|-------|
| Frequency | 2 | 5 | 12 | 8 | 3 |

Find the mean.

#### Solution
| Class | Midpoint (x) | f | fx |
|-------|--------------|---|-----|
| 0-9 | 4.5 | 2 | 9 |
| 10-19 | 14.5 | 5 | 72.5 |
| 20-29 | 24.5 | 12 | 294 |
| 30-39 | 34.5 | 8 | 276 |
| 40-49 | 44.5 | 3 | 133.5 |
| **Total** | | **30** | **785** |

$$\bar{x} = \frac{785}{30} = \mathbf{26.17}$$

---

## 23.5 Measures of Dispersion

### Range
Range = Maximum - Minimum

### Example 23.7: Finding Range
#### Problem
Find the range of: 15, 8, 22, 11, 19, 6

#### Solution
Range = 22 - 6 = **16**

---

## 23.6 Variance and Standard Deviation

### Variance
$$\sigma^2 = \frac{\sum(x - \bar{x})^2}{n} = \frac{\sum x^2}{n} - \bar{x}^2$$

### Standard Deviation
$$\sigma = \sqrt{\text{Variance}}$$

### Example 23.8: Calculating Standard Deviation
#### Problem
Find the standard deviation of: 2, 4, 6, 8, 10

#### Solution
Mean: $\bar{x} = \frac{2+4+6+8+10}{5} = 6$

| x | x - x̄ | (x - x̄)² |
|---|--------|----------|
| 2 | -4 | 16 |
| 4 | -2 | 4 |
| 6 | 0 | 0 |
| 8 | 2 | 4 |
| 10 | 4 | 16 |
| **Sum** | | **40** |

Variance = 40/5 = 8

Standard Deviation = √8 = **2.83**

---

## 23.7 Quartiles and Interquartile Range

- **Q1** (Lower Quartile): 25th percentile
- **Q2** (Median): 50th percentile
- **Q3** (Upper Quartile): 75th percentile
- **IQR** = Q3 - Q1

### Example 23.9: Finding Quartiles
#### Problem
Find Q1, Q2, Q3, and IQR for: 3, 5, 6, 8, 10, 12, 14, 16, 18

#### Solution
n = 9, sorted data

Q2 (median) = 5th value = **10**

Lower half: 3, 5, 6, 8 → Q1 = (5+6)/2 = **5.5**

Upper half: 12, 14, 16, 18 → Q3 = (14+16)/2 = **15**

IQR = 15 - 5.5 = **9.5**

---

## 23.8 Cumulative Frequency

### Example 23.10: Cumulative Frequency Table
#### Problem
| Marks | 0-10 | 11-20 | 21-30 | 31-40 | 41-50 |
|-------|------|-------|-------|-------|-------|
| f | 5 | 10 | 20 | 12 | 3 |

Create cumulative frequency table and find median class.

#### Solution
| Marks | f | Cumulative f |
|-------|---|--------------|
| 0-10 | 5 | 5 |
| 11-20 | 10 | 15 |
| 21-30 | 20 | 35 |
| 31-40 | 12 | 47 |
| 41-50 | 3 | 50 |

Total = 50
Median position = 50/2 = 25th value
**Median class: 21-30**

---

## 23.9 Histograms and Frequency Polygons

### Histogram
- Bars touch (continuous data)
- Width represents class interval
- Height represents frequency (or frequency density)

### Frequency Polygon
- Connect midpoints of histogram bars
- Line graph showing distribution

---

## 23.10 Ogive (Cumulative Frequency Curve)

Plot cumulative frequency against upper class boundaries.

### Example 23.11: Reading from Ogive
From cumulative frequency curve:
- **Median**: Value at N/2
- **Q1**: Value at N/4
- **Q3**: Value at 3N/4
- **Percentiles**: Value at required percentage

---

## 23.11 Box and Whisker Plot

Shows the five-number summary:
- Minimum
- Q1
- Median (Q2)
- Q3
- Maximum

### Example 23.12: Drawing Box Plot
#### Problem
Data: Min = 10, Q1 = 25, Median = 35, Q3 = 50, Max = 65

#### Solution
```
    |----[====|====]---------|
   10   25   35   50        65
```
The box extends from Q1 to Q3, with median line inside.

---

## Practice Exercises

1. Find the mean, median, and mode of: 15, 20, 20, 25, 30, 35, 35, 35, 40

2. From the frequency table, find the mean:
   | x | 1 | 2 | 3 | 4 | 5 |
   |---|---|---|---|---|---|
   | f | 4 | 6 | 10 | 5 | 5 |

3. Find the mean from grouped data:
   | Class | 1-5 | 6-10 | 11-15 | 16-20 |
   |-------|-----|------|-------|-------|
   | f | 3 | 7 | 8 | 2 |

4. Calculate the standard deviation of: 4, 6, 8, 10, 12

5. Find Q1, Q2, Q3, and IQR for: 12, 15, 18, 22, 24, 28, 32, 36, 40, 45

6. Create a cumulative frequency table and identify the median class:
   | Weight (kg) | 40-49 | 50-59 | 60-69 | 70-79 |
   |-------------|-------|-------|-------|-------|
   | f | 8 | 15 | 12 | 5 |

7. The mean of 5 numbers is 12. Four of the numbers are 10, 8, 15, and 14. Find the fifth number.

8. Draw a box plot for: 5, 8, 10, 12, 15, 18, 20, 22, 25

# Chapter 33: Significant Figures, Decimal Places, Standard Form and Percentage Error

## 33.1 Significant Figures

**Significant figures** are the digits that carry meaningful contribution to a number's precision.

### Rules for Counting Significant Figures
1. All non-zero digits are significant
2. Zeros between non-zero digits are significant
3. Leading zeros are NOT significant
4. Trailing zeros after decimal point ARE significant
5. Trailing zeros in whole numbers may or may not be significant

### Examples
| Number | Significant Figures |
|--------|---------------------|
| 4578 | 4 s.f. |
| 0.0034 | 2 s.f. |
| 50.40 | 4 s.f. |
| 3.00 | 3 s.f. |
| 2050 | 3 s.f. (or 4 if trailing zero is significant) |

### Example 33.1: Rounding to Significant Figures
#### Problem
Round 3.4567 to: (a) 3 s.f. (b) 2 s.f. (c) 1 s.f.

#### Solution
(a) 3.4567 → **3.46** (3 s.f.)
(b) 3.4567 → **3.5** (2 s.f.)
(c) 3.4567 → **3** (1 s.f.)

### Example 33.2: Rounding Larger Numbers
#### Problem
Round 47,826 to: (a) 4 s.f. (b) 3 s.f. (c) 2 s.f.

#### Solution
(a) 47,826 → **47,830** (4 s.f.)
(b) 47,826 → **47,800** (3 s.f.)
(c) 47,826 → **48,000** (2 s.f.)

---

## 33.2 Decimal Places

**Decimal places** count digits after the decimal point.

### Example 33.3: Rounding to Decimal Places
#### Problem
Round 4.5783 to: (a) 3 d.p. (b) 2 d.p. (c) 1 d.p.

#### Solution
(a) 4.5783 → **4.578** (3 d.p.)
(b) 4.5783 → **4.58** (2 d.p.)
(c) 4.5783 → **4.6** (1 d.p.)

### Example 33.4: Small Numbers
#### Problem
Round 0.007546 to 2 d.p.

#### Solution
0.007546 → **0.01** (2 d.p.)

---

## 33.3 Standard Form (Scientific Notation)

A number in **standard form** is written as:

$$A \times 10^n$$

Where 1 ≤ A < 10 and n is an integer.

### Converting to Standard Form

| Number | Standard Form |
|--------|---------------|
| 4,700,000 | 4.7 × 10⁶ |
| 0.00035 | 3.5 × 10⁻⁴ |
| 325 | 3.25 × 10² |

### Example 33.5: Writing in Standard Form
#### Problem
Write in standard form: (a) 56,400,000 (b) 0.000021

#### Solution
(a) 56,400,000 = **5.64 × 10⁷**
(b) 0.000021 = **2.1 × 10⁻⁵**

### Example 33.6: Converting from Standard Form
#### Problem
Write as ordinary numbers: (a) 3.8 × 10⁵ (b) 7.2 × 10⁻³

#### Solution
(a) 3.8 × 10⁵ = **380,000**
(b) 7.2 × 10⁻³ = **0.0072**

---

## 33.4 Operations in Standard Form

### Multiplication
$$(A \times 10^m) \times (B \times 10^n) = (A \times B) \times 10^{m+n}$$

### Division
$$(A \times 10^m) \div (B \times 10^n) = (A \div B) \times 10^{m-n}$$

### Example 33.7: Multiplying in Standard Form
#### Problem
Calculate (3 × 10⁴) × (4 × 10³)

#### Solution
= (3 × 4) × 10⁴⁺³
= 12 × 10⁷
= **1.2 × 10⁸**

### Example 33.8: Division in Standard Form
#### Problem
Calculate (8 × 10⁶) ÷ (2 × 10²)

#### Solution
= (8 ÷ 2) × 10⁶⁻²
= 4 × 10⁴
= **4 × 10⁴**

### Example 33.9: Addition in Standard Form
#### Problem
Calculate (3.2 × 10⁵) + (4.5 × 10⁴)

#### Solution
= 320,000 + 45,000
= 365,000
= **3.65 × 10⁵**

---

## 33.5 Absolute Error

**Absolute error** = |Measured value − True value|

### Bounds from Rounding
When a measurement is given to a certain precision, the actual value lies within bounds.

If x = 45 (to the nearest whole number):
- Lower bound = 44.5
- Upper bound = 45.5
- Maximum error = 0.5

### Example 33.10: Finding Bounds
#### Problem
A length is measured as 8.3 cm to 1 d.p. Find the range of possible values.

#### Solution
Lower bound = 8.25 cm
Upper bound = 8.35 cm

Range: **8.25 ≤ length < 8.35**

---

## 33.6 Percentage Error

$$\text{Percentage error} = \frac{|\text{Measured} - \text{True}|}{\text{True value}} \times 100\%$$

### Example 33.11: Calculating Percentage Error
#### Problem
A student measures the length of a rod as 52 cm. The actual length is 50 cm. Find the percentage error.

#### Solution
Error = |52 - 50| = 2 cm

Percentage error = (2 ÷ 50) × 100%
= **4%**

### Example 33.12: Maximum Percentage Error
#### Problem
A rectangle has sides 8.0 cm and 5.0 cm measured to 1 d.p. Find the maximum percentage error in calculating the area.

#### Solution
For multiplication, maximum percentage error ≈ sum of individual percentage errors.

Error in 8.0: max error = 0.05, percentage = (0.05/8.0) × 100% = 0.625%
Error in 5.0: max error = 0.05, percentage = (0.05/5.0) × 100% = 1%

Maximum percentage error in area ≈ 0.625% + 1% = **1.625%**

---

## 33.7 Relative Error

$$\text{Relative error} = \frac{|\text{Measured} - \text{True}|}{\text{True value}}$$

(Percentage error = Relative error × 100%)

### Example 33.13: Relative Error
#### Problem
Find the relative error if a measurement of 98 g is made when the true value is 100 g.

#### Solution
Relative error = |98 - 100| ÷ 100
= 2 ÷ 100
= **0.02** (or 2%)

---

## 33.8 Error in Compound Calculations

### Addition/Subtraction
Maximum absolute error = sum of individual absolute errors

### Multiplication/Division
Maximum relative error ≈ sum of individual relative errors

### Example 33.14: Error Propagation
#### Problem
Values a = 12.0 ± 0.1 and b = 4.0 ± 0.1 are measured. Find the maximum error in a × b.

#### Solution
Relative error in a = 0.1/12.0 = 0.00833
Relative error in b = 0.1/4.0 = 0.025

Total relative error ≈ 0.00833 + 0.025 = 0.0333

a × b = 48.0
Maximum error ≈ 48.0 × 0.0333 ≈ **1.6**

---

## Practice Exercises

1. Round to 3 significant figures:
   (a) 0.05678
   (b) 45,678
   (c) 2.0054

2. Round to 2 decimal places:
   (a) 3.4567
   (b) 0.0085
   (c) 12.995

3. Write in standard form:
   (a) 385,000,000
   (b) 0.0000524
   (c) 72.8

4. Write as ordinary numbers:
   (a) 6.25 × 10⁴
   (b) 1.8 × 10⁻⁶
   (c) 9.01 × 10⁰

5. Calculate, giving answer in standard form:
   (a) (5 × 10³) × (6 × 10⁴)
   (b) (9 × 10⁸) ÷ (3 × 10⁵)
   (c) (2.5 × 10⁴) + (3.5 × 10³)

6. A mass is measured as 250 g to the nearest 10 g. State the range of possible values.

7. The true value of a quantity is 84. It was measured as 80. Find:
   (a) The absolute error
   (b) The percentage error

8. A square has side 6.0 cm measured to 1 d.p. Find the maximum percentage error in calculating its area.

9. Calculate (4.6 × 10⁵) × (2.0 × 10⁻²), giving your answer in standard form.

10. A rectangle measures 15 cm by 8 cm (both to nearest cm). Find:
    (a) The minimum possible area
    (b) The maximum possible area

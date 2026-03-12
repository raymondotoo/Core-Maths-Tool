# Chapter 38: Sequences of Numbers

## 38.1 Introduction to Sequences

A **sequence** is an ordered list of numbers following a pattern.

### Common Sequences
- **Natural numbers**: 1, 2, 3, 4, 5, ...
- **Even numbers**: 2, 4, 6, 8, 10, ...
- **Odd numbers**: 1, 3, 5, 7, 9, ...
- **Square numbers**: 1, 4, 9, 16, 25, ...
- **Cube numbers**: 1, 8, 27, 64, 125, ...
- **Triangular numbers**: 1, 3, 6, 10, 15, ...
- **Fibonacci**: 1, 1, 2, 3, 5, 8, 13, ...

---

## 38.2 Finding the Pattern

### Example 38.1: Identifying Patterns
#### Problem
Find the next three terms: 2, 5, 8, 11, ...

#### Solution
Common difference = 5 − 2 = 3
Next terms: 11 + 3 = 14, 14 + 3 = 17, 17 + 3 = 20
**14, 17, 20**

### Example 38.2: Non-Linear Pattern
#### Problem
Find the next two terms: 2, 6, 18, 54, ...

#### Solution
Each term = previous × 3 (common ratio = 3)
Next terms: 54 × 3 = 162, 162 × 3 = 486
**162, 486**

---

## 38.3 Arithmetic Sequences (AP)

An **arithmetic sequence** has a constant difference between consecutive terms.

$$a, a+d, a+2d, a+3d, ...$$

- First term: a
- Common difference: d
- nth term: $T_n = a + (n-1)d$

### Example 38.3: Finding the nth Term
#### Problem
Find the 20th term of the sequence 5, 8, 11, 14, ...

#### Solution
a = 5, d = 3

T₂₀ = 5 + (20 − 1) × 3
= 5 + 19 × 3
= 5 + 57
= **62**

### Example 38.4: Finding Which Term
#### Problem
In the sequence 3, 7, 11, 15, ..., which term equals 99?

#### Solution
a = 3, d = 4
Tₙ = 3 + (n − 1) × 4 = 99
4(n − 1) = 96
n − 1 = 24
n = **25**

---

## 38.4 Sum of an Arithmetic Series

$$S_n = \frac{n}{2}[2a + (n-1)d] = \frac{n}{2}(a + l)$$

Where l is the last term.

### Example 38.5: Sum of First n Terms
#### Problem
Find the sum of the first 15 terms of 4, 7, 10, 13, ...

#### Solution
a = 4, d = 3, n = 15

S₁₅ = (15/2)[2(4) + (15 − 1)(3)]
= (15/2)[8 + 42]
= (15/2) × 50
= **375**

### Example 38.6: Sum of Series
#### Problem
Find the sum: 5 + 10 + 15 + ... + 100

#### Solution
a = 5, d = 5, l = 100
n = (100 − 5)/5 + 1 = 20

S₂₀ = (20/2)(5 + 100) = 10 × 105 = **1050**

---

## 38.5 Geometric Sequences (GP)

A **geometric sequence** has a constant ratio between consecutive terms.

$$a, ar, ar^2, ar^3, ...$$

- First term: a
- Common ratio: r
- nth term: $T_n = ar^{n-1}$

### Example 38.7: Finding Terms of GP
#### Problem
Find the 6th term of the sequence 3, 6, 12, 24, ...

#### Solution
a = 3, r = 2

T₆ = 3 × 2⁶⁻¹ = 3 × 2⁵ = 3 × 32 = **96**

### Example 38.8: Finding Common Ratio
#### Problem
In a GP, the 2nd term is 12 and the 4th term is 48. Find the common ratio and first term.

#### Solution
T₂ = ar = 12
T₄ = ar³ = 48

ar³/ar = 48/12
r² = 4
r = **2** (or −2)

If r = 2: a = 12/2 = **6**

---

## 38.6 Sum of a Geometric Series

$$S_n = \frac{a(r^n - 1)}{r - 1} = \frac{a(1 - r^n)}{1 - r}$$

### Example 38.9: Sum of GP
#### Problem
Find the sum of the first 8 terms of 2, 6, 18, 54, ...

#### Solution
a = 2, r = 3, n = 8

S₈ = 2(3⁸ − 1)/(3 − 1)
= 2(6561 − 1)/2
= 6560
= **6560**

---

## 38.7 Infinite Geometric Series

For |r| < 1, the sum to infinity:

$$S_\infty = \frac{a}{1 - r}$$

### Example 38.10: Sum to Infinity
#### Problem
Find the sum to infinity: 8 + 4 + 2 + 1 + ...

#### Solution
a = 8, r = 1/2

S∞ = 8/(1 − 0.5) = 8/0.5 = **16**

---

## 38.8 Quadratic Sequences

In a quadratic sequence, the second differences are constant.

### Example 38.11: Quadratic Sequence
#### Problem
Find the nth term of 3, 6, 11, 18, 27, ...

#### Solution
**First differences**: 3, 5, 7, 9, ...
**Second differences**: 2, 2, 2, ... (constant)

Half the second difference = 1
So the sequence includes n².

Sequence: 3, 6, 11, 18, 27
n²: 1, 4, 9, 16, 25
Difference: 2, 2, 2, 2, 2

Tₙ = n² + 2 ✗ (check: T₁ = 1 + 2 = 3 ✓)

**Tₙ = n² + 2**

---

## 38.9 Fibonacci and Other Sequences

### Fibonacci Sequence
Each term is the sum of the two preceding terms:
1, 1, 2, 3, 5, 8, 13, 21, 34, ...

### Triangular Numbers
Tₙ = n(n+1)/2
1, 3, 6, 10, 15, 21, ...

### Example 38.12: Triangular Numbers
#### Problem
Find the 10th triangular number.

#### Solution
T₁₀ = 10(10 + 1)/2 = 10 × 11/2 = **55**

---

## 38.10 Linear Recurrence Relations

A sequence defined by a rule relating each term to previous terms.

### Example 38.13: Recurrence Relation
#### Problem
Given Tₙ₊₁ = 2Tₙ − 3 and T₁ = 5, find the first five terms.

#### Solution
T₁ = 5
T₂ = 2(5) − 3 = 7
T₃ = 2(7) − 3 = 11
T₄ = 2(11) − 3 = 19
T₅ = 2(19) − 3 = 35

**5, 7, 11, 19, 35**

---

## Practice Exercises

1. Find the next three terms:
   (a) 7, 12, 17, 22, ...
   (b) 3, 6, 12, 24, ...
   (c) 1, 4, 9, 16, ...

2. For the AP 8, 14, 20, 26, ..., find:
   (a) The 15th term
   (b) The sum of the first 20 terms

3. Which term of the AP 5, 9, 13, 17, ... is equal to 97?

4. Find the sum: 2 + 4 + 6 + 8 + ... + 50

5. For the GP 5, 10, 20, 40, ..., find:
   (a) The 10th term
   (b) The sum of the first 10 terms

6. The 3rd term of an AP is 14 and the 7th term is 26. Find the first term and common difference.

7. Find the sum to infinity: 12 + 6 + 3 + 1.5 + ...

8. The sum of the first n terms of an AP is Sₙ = n² + 3n. Find the nth term.

9. Find the nth term for the sequence: 2, 8, 18, 32, 50, ...

10. Given the recurrence relation Tₙ₊₁ = Tₙ + Tₙ₋₁ with T₁ = 1 and T₂ = 1, write the first eight terms.

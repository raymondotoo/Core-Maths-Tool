# Chapter 5: Numeration Systems (Number Bases)

## 5.1 Introduction to Number Bases

A **numeration system** is a method of representing numbers using digits and a base. The most common system is the **decimal system** (base 10), which uses digits 0-9.

Other important number bases include:
- **Binary** (base 2): uses digits 0, 1
- **Octal** (base 8): uses digits 0-7
- **Hexadecimal** (base 16): uses digits 0-9 and A-F

### Place Value
In any base b, the place values from right to left are: b⁰, b¹, b², b³, ...

### Example 5.1: Understanding Place Value
#### Problem
What does 345₁₀ mean in terms of place value?

#### Solution
345₁₀ = 3 × 10² + 4 × 10¹ + 5 × 10⁰
     = 3 × 100 + 4 × 10 + 5 × 1
     = 300 + 40 + 5
     = **345**

---

## 5.2 Converting from Other Bases to Base 10

To convert a number from base b to base 10, multiply each digit by its place value and add.

### Example 5.2: Binary to Decimal
#### Problem
Convert 1101₂ to base 10.

#### Solution
1101₂ = 1 × 2³ + 1 × 2² + 0 × 2¹ + 1 × 2⁰
     = 1 × 8 + 1 × 4 + 0 × 2 + 1 × 1
     = 8 + 4 + 0 + 1
     = **13₁₀**

### Example 5.3: Octal to Decimal
#### Problem
Convert 527₈ to base 10.

#### Solution
527₈ = 5 × 8² + 2 × 8¹ + 7 × 8⁰
    = 5 × 64 + 2 × 8 + 7 × 1
    = 320 + 16 + 7
    = **343₁₀**

### Example 5.4: Any Base to Decimal
#### Problem
Convert 2134₅ to base 10.

#### Solution
2134₅ = 2 × 5³ + 1 × 5² + 3 × 5¹ + 4 × 5⁰
     = 2 × 125 + 1 × 25 + 3 × 5 + 4 × 1
     = 250 + 25 + 15 + 4
     = **294₁₀**

---

## 5.3 Converting from Base 10 to Other Bases

To convert from base 10 to base b:
1. Divide the number by b
2. Record the remainder
3. Divide the quotient by b
4. Repeat until the quotient is 0
5. Read the remainders from bottom to top

### Example 5.5: Decimal to Binary
#### Problem
Convert 25₁₀ to binary.

#### Solution
| Division | Quotient | Remainder |
|----------|----------|-----------|
| 25 ÷ 2 | 12 | 1 |
| 12 ÷ 2 | 6 | 0 |
| 6 ÷ 2 | 3 | 0 |
| 3 ÷ 2 | 1 | 1 |
| 1 ÷ 2 | 0 | 1 |

Reading remainders from bottom to top: **25₁₀ = 11001₂**

### Example 5.6: Decimal to Base 5
#### Problem
Convert 157₁₀ to base 5.

#### Solution
| Division | Quotient | Remainder |
|----------|----------|-----------|
| 157 ÷ 5 | 31 | 2 |
| 31 ÷ 5 | 6 | 1 |
| 6 ÷ 5 | 1 | 1 |
| 1 ÷ 5 | 0 | 1 |

Reading remainders: **157₁₀ = 1112₅**

---

## 5.4 Converting Between Non-Decimal Bases

To convert from base a to base b (where neither is 10):
1. Convert from base a to base 10
2. Convert from base 10 to base b

### Example 5.7: Binary to Octal
#### Problem
Convert 110101₂ to octal.

#### Solution
**Method 1:** Via base 10
110101₂ = 32 + 16 + 4 + 1 = 53₁₀
53 ÷ 8 = 6 remainder 5
6 ÷ 8 = 0 remainder 6
So 53₁₀ = 65₈

**Method 2:** Group binary digits in threes (from right)
110 101 → 6 5 = **65₈**

(Each group of 3 binary digits = 1 octal digit since 2³ = 8)

---

## 5.5 Addition in Different Bases

Add column by column, carrying when the sum reaches the base.

### Example 5.8: Binary Addition
#### Problem
Add 1011₂ + 1101₂

#### Solution
```
    1 0 1 1
  + 1 1 0 1
  ---------
  1 1 0 0 0
```

Working from right:
- 1 + 1 = 2 = 10₂ (write 0, carry 1)
- 1 + 0 + 1 = 2 = 10₂ (write 0, carry 1)
- 0 + 1 + 1 = 2 = 10₂ (write 0, carry 1)
- 1 + 1 + 1 = 3 = 11₂ (write 1, carry 1)

**1011₂ + 1101₂ = 11000₂**

### Example 5.9: Base 5 Addition
#### Problem
Add 432₅ + 234₅

#### Solution
```
    4 3 2
  + 2 3 4
  -------
  1 2 2 1
```

Working from right:
- 2 + 4 = 6 = 1×5 + 1 (write 1, carry 1)
- 3 + 3 + 1 = 7 = 1×5 + 2 (write 2, carry 1)
- 4 + 2 + 1 = 7 = 1×5 + 2 (write 2, carry 1)

**432₅ + 234₅ = 1221₅**

---

## 5.6 Subtraction in Different Bases

Subtract column by column, borrowing when necessary.

### Example 5.10: Binary Subtraction
#### Problem
Calculate 1101₂ - 1011₂

#### Solution
```
    1 1 0 1
  - 1 0 1 1
  ---------
    0 0 1 0
```

Working from right:
- 1 - 1 = 0
- 0 - 1: borrow 1 from left → 2 - 1 = 1
- 0 - 0 = 0 (after borrowing, this became 0)
- 1 - 1 = 0

**1101₂ - 1011₂ = 10₂**

---

## 5.7 Multiplication in Different Bases

Multiply as in base 10, but carry when the product reaches the base.

### Example 5.11: Binary Multiplication
#### Problem
Calculate 101₂ × 11₂

#### Solution
```
      1 0 1
    ×   1 1
    -------
      1 0 1   (101 × 1)
    1 0 1     (101 × 1, shifted left)
    -------
    1 1 1 1
```

**101₂ × 11₂ = 1111₂**

Verify: 5 × 3 = 15 = 1111₂ ✓

---

## 5.8 Finding Unknown Bases

### Example 5.12: Finding the Base
#### Problem
If 23ₓ = 17₁₀, find the base x.

#### Solution
23ₓ = 2 × x + 3 = 17
2x + 3 = 17
2x = 14
**x = 7**

### Example 5.13: Equation with Bases
#### Problem
Find the value of n if 132ₙ = 56₁₀

#### Solution
132ₙ = 1 × n² + 3 × n + 2 = 56
n² + 3n + 2 = 56
n² + 3n - 54 = 0
(n + 9)(n - 6) = 0
n = -9 or n = 6

Since base must be positive and greater than the largest digit (3):
**n = 6**

---

## Practice Exercises

1. Convert to base 10:
   (a) 10110₂    (b) 345₈    (c) 2413₅

2. Convert 156₁₀ to:
   (a) Binary    (b) Base 5    (c) Base 8

3. Calculate in binary:
   (a) 1101₂ + 1011₂    (b) 10010₂ - 1011₂

4. Calculate in base 5:
   (a) 423₅ + 341₅    (b) 432₅ - 243₅

5. Find the base n if:
   (a) 34ₙ = 19₁₀    (b) 121ₙ = 25₁₀

6. Convert 1111010₂ directly to base 8.

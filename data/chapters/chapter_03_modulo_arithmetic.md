# Chapter 3: Modulo Arithmetic

## 3.1 Introduction to Modular Arithmetic

**Modular arithmetic** (also called clock arithmetic) is a system of arithmetic for integers where numbers "wrap around" after reaching a certain value called the **modulus**.

Two integers a and b are said to be **congruent modulo n** if they have the same remainder when divided by n. This is written as:

$$a \equiv b \pmod{n}$$

This means: a - b is divisible by n, or equivalently, a = kn + b for some integer k.

### Example 3.1: Understanding Congruence
#### Problem
Determine whether 17 ≡ 5 (mod 4)

#### Solution
Divide 17 by 4: 17 = 4 × 4 + 1, so remainder = 1
Divide 5 by 4: 5 = 4 × 1 + 1, so remainder = 1

Since both have the same remainder, **17 ≡ 5 (mod 4)** is **TRUE**.

Alternatively: 17 - 5 = 12, and 12 is divisible by 4. ✓

---

## 3.2 Finding Remainders

To find a (mod n), divide a by n and take the remainder.

### Example 3.2: Finding Remainders
#### Problem
Find the value of:
(a) 23 (mod 5)
(b) 47 (mod 7)
(c) 100 (mod 9)

#### Solution
(a) 23 ÷ 5 = 4 remainder 3
    Therefore, **23 (mod 5) = 3**

(b) 47 ÷ 7 = 6 remainder 5
    Therefore, **47 (mod 7) = 5**

(c) 100 ÷ 9 = 11 remainder 1
    Therefore, **100 (mod 9) = 1**

---

## 3.3 Addition in Modular Arithmetic

**Rule:** (a + b) mod n = [(a mod n) + (b mod n)] mod n

### Example 3.3: Modular Addition
#### Problem
Calculate:
(a) (8 + 9) mod 5
(b) (15 + 23) mod 7

#### Solution
(a) 8 + 9 = 17
    17 ÷ 5 = 3 remainder 2
    **(8 + 9) mod 5 = 2**

(b) 15 + 23 = 38
    38 ÷ 7 = 5 remainder 3
    **(15 + 23) mod 7 = 3**

### Addition Table (mod 5)
| ⊕ | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| 0 | 0 | 1 | 2 | 3 | 4 |
| 1 | 1 | 2 | 3 | 4 | 0 |
| 2 | 2 | 3 | 4 | 0 | 1 |
| 3 | 3 | 4 | 0 | 1 | 2 |
| 4 | 4 | 0 | 1 | 2 | 3 |

---

## 3.4 Subtraction in Modular Arithmetic

**Rule:** (a - b) mod n = [(a mod n) - (b mod n) + n] mod n

The "+n" ensures we get a non-negative result.

### Example 3.4: Modular Subtraction
#### Problem
Calculate:
(a) (3 - 7) mod 5
(b) (12 - 5) mod 4

#### Solution
(a) 3 - 7 = -4
    -4 + 5 = 1 (add the modulus to get positive result)
    **(3 - 7) mod 5 = 1**

    Check: -4 = -1 × 5 + 1, so remainder is 1 ✓

(b) 12 - 5 = 7
    7 ÷ 4 = 1 remainder 3
    **(12 - 5) mod 4 = 3**

---

## 3.5 Multiplication in Modular Arithmetic

**Rule:** (a × b) mod n = [(a mod n) × (b mod n)] mod n

### Example 3.5: Modular Multiplication
#### Problem
Calculate:
(a) (6 × 7) mod 5
(b) (8 × 9) mod 11

#### Solution
(a) 6 × 7 = 42
    42 ÷ 5 = 8 remainder 2
    **(6 × 7) mod 5 = 2**

(b) 8 × 9 = 72
    72 ÷ 11 = 6 remainder 6
    **(8 × 9) mod 11 = 6**

### Multiplication Table (mod 5)
| ⊗ | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 | 0 |
| 1 | 0 | 1 | 2 | 3 | 4 |
| 2 | 0 | 2 | 4 | 1 | 3 |
| 3 | 0 | 3 | 1 | 4 | 2 |
| 4 | 0 | 4 | 3 | 2 | 1 |

---

## 3.6 Solving Linear Congruences

A **linear congruence** is an equation of the form:
$$ax \equiv b \pmod{n}$$

### Example 3.6: Solving Congruences
#### Problem
Solve: 3x ≡ 4 (mod 5)

#### Solution
We need to find x such that 3x gives remainder 4 when divided by 5.

Test values of x from 0 to 4:
- x = 0: 3(0) = 0, 0 mod 5 = 0 ✗
- x = 1: 3(1) = 3, 3 mod 5 = 3 ✗
- x = 2: 3(2) = 6, 6 mod 5 = 1 ✗
- x = 3: 3(3) = 9, 9 mod 5 = 4 ✓

**x ≡ 3 (mod 5)**

The complete solution is x = 3, 8, 13, 18, ... (or x = 5k + 3 for any integer k)

### Example 3.7: Another Congruence
#### Problem
Solve: 2x ≡ 6 (mod 8)

#### Solution
Test values:
- x = 1: 2(1) = 2 mod 8 = 2 ✗
- x = 2: 2(2) = 4 mod 8 = 4 ✗
- x = 3: 2(3) = 6 mod 8 = 6 ✓
- x = 7: 2(7) = 14 mod 8 = 6 ✓

**x ≡ 3 (mod 8) or x ≡ 7 (mod 8)**

---

## 3.7 Applications of Modular Arithmetic

### Clock Arithmetic
On a 12-hour clock, time wraps around after 12. This is arithmetic mod 12.

### Example 3.8: Clock Problem
#### Problem
If it is currently 9 o'clock, what time will it be after 17 hours?

#### Solution
(9 + 17) mod 12 = 26 mod 12 = 2

**It will be 2 o'clock.**

### Checking Divisibility
### Example 3.9: Divisibility
#### Problem
Find the remainder when 2^100 is divided by 7.

#### Solution
Find the pattern of powers of 2 (mod 7):
- 2¹ mod 7 = 2
- 2² mod 7 = 4
- 2³ mod 7 = 8 mod 7 = 1
- 2⁴ mod 7 = 2 (pattern repeats)

The pattern has period 3: 2, 4, 1, 2, 4, 1, ...

100 = 3 × 33 + 1

So 2^100 mod 7 = 2¹ mod 7 = **2**

---

## Practice Exercises

1. Find the value of:
   (a) 37 mod 6    (b) 125 mod 11    (c) 1000 mod 7

2. Calculate:
   (a) (23 + 19) mod 8    (b) (7 - 15) mod 6    (c) (9 × 7) mod 4

3. Construct the addition table for modulo 4 arithmetic.

4. Solve the congruence: 5x ≡ 3 (mod 7)

5. If today is Wednesday, what day will it be after 100 days?

6. Find the remainder when 3^50 is divided by 5.

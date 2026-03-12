# Chapter 4: Binary Operations

## 4.1 Definition of Binary Operations

A **binary operation** on a set S is a rule that assigns to each ordered pair of elements from S, a unique element in S.

Common binary operations include:
- Addition (+) on real numbers
- Multiplication (×) on real numbers
- Subtraction (-) on integers

Binary operations are often denoted by symbols such as *, ⊕, ⊗, ∘, etc.

### Example 4.1: Binary Operation Definition
#### Problem
A binary operation * is defined on the set of real numbers by:
a * b = a + b - 2

Find: (a) 3 * 5    (b) (-2) * 4    (c) 0 * 7

#### Solution
(a) 3 * 5 = 3 + 5 - 2 = **6**

(b) (-2) * 4 = -2 + 4 - 2 = **0**

(c) 0 * 7 = 0 + 7 - 2 = **5**

---

## 4.2 Properties of Binary Operations

### Closure Property
A set S is **closed** under a binary operation * if for all a, b ∈ S, the result a * b is also in S.

### Example 4.2: Testing Closure
#### Problem
Determine whether the set {0, 1, 2, 3, 4} is closed under:
(a) Addition modulo 5
(b) Ordinary addition

#### Solution
(a) Under addition mod 5, adding any two elements gives a result in {0, 1, 2, 3, 4}.
    For example: 3 + 4 = 7 ≡ 2 (mod 5), which is in the set.
    **The set is closed under addition mod 5.**

(b) Under ordinary addition: 3 + 4 = 7, which is NOT in the set.
    **The set is NOT closed under ordinary addition.**

---

## 4.3 Commutativity

A binary operation * is **commutative** if for all a, b:
$$a * b = b * a$$

### Example 4.3: Testing Commutativity
#### Problem
Determine whether the operation * defined by a * b = a + b - ab is commutative.

#### Solution
We need to check if a * b = b * a for all a, b.

a * b = a + b - ab
b * a = b + a - ba = a + b - ab

Since a * b = b * a, **the operation is commutative**.

---

## 4.4 Associativity

A binary operation * is **associative** if for all a, b, c:
$$(a * b) * c = a * (b * c)$$

### Example 4.4: Testing Associativity
#### Problem
The operation * is defined by a * b = a + b + 1. Is * associative?

#### Solution
Calculate (a * b) * c:
a * b = a + b + 1
(a * b) * c = (a + b + 1) + c + 1 = a + b + c + 2

Calculate a * (b * c):
b * c = b + c + 1
a * (b * c) = a + (b + c + 1) + 1 = a + b + c + 2

Since (a * b) * c = a * (b * c), **the operation is associative**.

---

## 4.5 Identity Element

An element e is an **identity element** for operation * if for all a:
$$a * e = e * a = a$$

### Example 4.5: Finding Identity Element
#### Problem
The operation * is defined by a * b = a + b - 3. Find the identity element, if it exists.

#### Solution
Let e be the identity element. Then a * e = a for all a.

a * e = a + e - 3 = a
e - 3 = 0
e = 3

Verify: 
- a * 3 = a + 3 - 3 = a ✓
- 3 * a = 3 + a - 3 = a ✓

**The identity element is e = 3**

---

## 4.6 Inverse Element

For an operation * with identity element e, the **inverse** of element a is an element a⁻¹ such that:
$$a * a^{-1} = a^{-1} * a = e$$

### Example 4.6: Finding Inverse
#### Problem
The operation * is defined on ℝ by a * b = a + b - 3. Find the inverse of 5.

#### Solution
From Example 4.5, the identity element e = 3.

Let the inverse of 5 be x. Then:
5 * x = e = 3
5 + x - 3 = 3
x + 2 = 3
x = 1

Verify: 5 * 1 = 5 + 1 - 3 = 3 = e ✓

**The inverse of 5 is 1**

### Example 4.7: General Inverse Formula
#### Problem
For the operation a * b = a + b - 3, find a formula for the inverse of any element a.

#### Solution
Let the inverse of a be a⁻¹. Then a * a⁻¹ = e = 3.

a + a⁻¹ - 3 = 3
a⁻¹ = 6 - a

**The inverse of a is (6 - a)**

---

## 4.7 Operation Tables (Cayley Tables)

An **operation table** (or Cayley table) displays all possible results of a binary operation on a finite set.

### Example 4.8: Creating an Operation Table
#### Problem
The operation * is defined on set S = {1, 2, 3, 4} by a * b = remainder when ab is divided by 5.
Construct the operation table.

#### Solution
| * | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| 1 | 1 | 2 | 3 | 4 |
| 2 | 2 | 4 | 1 | 3 |
| 3 | 3 | 1 | 4 | 2 |
| 4 | 4 | 3 | 2 | 1 |

From the table:
- The set is closed under * ✓
- The operation is commutative (table is symmetric about diagonal) ✓
- The identity element is 1 (row and column of 1 give same elements)

---

## 4.8 Reading from Operation Tables

### Example 4.9: Using Operation Tables
#### Problem
Given the operation table below for * on set {p, q, r, s}:

| * | p | q | r | s |
|---|---|---|---|---|
| p | q | r | s | p |
| q | r | s | p | q |
| r | s | p | q | r |
| s | p | q | r | s |

Find:
(a) p * r    (b) q * q    (c) The identity element
(d) The inverse of q

#### Solution
(a) p * r: Go to row p, column r → **p * r = s**

(b) q * q: Go to row q, column q → **q * q = s**

(c) Looking for an element e where x * e = x for all x:
    In column s: p * s = p, q * s = q, r * s = r, s * s = s
    **The identity element is s**

(d) q * ? = s (the identity)
    From row q: q * q = s
    **The inverse of q is q**

---

## Practice Exercises

1. A binary operation * is defined by a * b = 2a + 3b. Find:
   (a) 4 * 5    (b) (-1) * 2    (c) Is * commutative?

2. The operation ⊕ is defined by a ⊕ b = ab + a + b.
   (a) Find the identity element    (b) Find the inverse of 2

3. Determine whether the operation a * b = a² + b² is:
   (a) Commutative    (b) Associative

4. Given the operation table:
   | * | a | b | c |
   |---|---|---|---|
   | a | a | b | c |
   | b | b | c | a |
   | c | c | a | b |
   
   Find: (a) b * c    (b) The identity    (c) The inverse of c

5. Show that the set {1, 2, 3, 4, 5, 6} is not closed under ordinary addition, but is closed under multiplication mod 7.

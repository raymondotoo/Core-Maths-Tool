# Chapter 16: Logarithms

## 16.1 Introduction to Logarithms

A **logarithm** is the inverse of exponentiation.

If $a^x = N$, then $\log_a N = x$

Where:
- a = base
- N = number (argument)
- x = logarithm (exponent)

### Example:
- 2³ = 8, so log₂ 8 = 3
- 10² = 100, so log₁₀ 100 = 2

---

## 16.2 Common and Natural Logarithms

- **Common logarithm** (base 10): log₁₀ x = log x
- **Natural logarithm** (base e): logₑ x = ln x

### Example 16.1: Converting Between Forms
#### Problem
Write in logarithmic form: 5³ = 125

#### Solution
$5^3 = 125$ → $\log_5 125 = 3$

**log₅ 125 = 3**

### Example 16.2: Exponential Form
#### Problem
Write in exponential form: log₄ 64 = 3

#### Solution
$\log_4 64 = 3$ → $4^3 = 64$

**4³ = 64**

---

## 16.3 Laws of Logarithms

| Law | Rule |
|-----|------|
| Product | log(AB) = log A + log B |
| Quotient | log(A/B) = log A - log B |
| Power | log(Aⁿ) = n log A |
| Change of Base | logₐ b = log b / log a |

Special Values:
- log 1 = 0 (any base)
- logₐ a = 1

---

## 16.4 Product Law

### Example 16.3: Using Product Law
#### Problem
Simplify log₃ 9 + log₃ 3

#### Solution
log₃ 9 + log₃ 3 = log₃ (9 × 3)
                = log₃ 27
                = log₃ 3³
                = **3**

### Example 16.4: Combining Logs
#### Problem
Write as a single logarithm: log 5 + log 4

#### Solution
log 5 + log 4 = log (5 × 4)
              = **log 20**

---

## 16.5 Quotient Law

### Example 16.5: Using Quotient Law
#### Problem
Simplify log₂ 32 - log₂ 4

#### Solution
log₂ 32 - log₂ 4 = log₂ (32/4)
                 = log₂ 8
                 = log₂ 2³
                 = **3**

### Example 16.6: As Single Logarithm
#### Problem
Write as a single logarithm: log 50 - log 2

#### Solution
log 50 - log 2 = log (50/2)
               = **log 25**

---

## 16.6 Power Law

### Example 16.7: Using Power Law
#### Problem
Simplify log₂ 8⁴

#### Solution
log₂ 8⁴ = 4 × log₂ 8
        = 4 × log₂ 2³
        = 4 × 3
        = **12**

### Example 16.8: Root as Fractional Power
#### Problem
Simplify log √100

#### Solution
log √100 = log 100^(1/2)
         = (1/2) × log 100
         = (1/2) × 2
         = **1**

---

## 16.7 Evaluating Logarithms

### Example 16.9: Without Calculator
#### Problem
Evaluate log₂ 64

#### Solution
Let log₂ 64 = x
2^x = 64
2^x = 2⁶
x = **6**

### Example 16.10: Combined Laws
#### Problem
Evaluate log₅ 50 - log₅ 2

#### Solution
log₅ 50 - log₅ 2 = log₅ (50/2)
                 = log₅ 25
                 = log₅ 5²
                 = **2**

---

## 16.8 Solving Logarithmic Equations

### Example 16.11: Basic Equation
#### Problem
Solve log₃ x = 4

#### Solution
Convert to exponential form:
3⁴ = x
**x = 81**

### Example 16.12: Equation with Expression
#### Problem
Solve log(x + 3) = 2

#### Solution
Convert to exponential form (base 10):
10² = x + 3
100 = x + 3
**x = 97**

### Example 16.13: Multiple Logarithms
#### Problem
Solve log x + log 4 = log 20

#### Solution
log(4x) = log 20
4x = 20
**x = 5**

---

## 16.9 Solving Exponential Equations Using Logarithms

### Example 16.14: Finding Exponent
#### Problem
Solve 2^x = 10

#### Solution
Take log of both sides:
log(2^x) = log 10
x log 2 = 1
x = 1/log 2
**x ≈ 3.322**

### Example 16.15: More Complex
#### Problem
Solve 5^(2x-1) = 3

#### Solution
Take log of both sides:
(2x - 1) log 5 = log 3
2x - 1 = log 3 / log 5
2x - 1 = 0.682
2x = 1.682
**x ≈ 0.841**

---

## 16.10 Change of Base Formula

$$\log_a b = \frac{\log b}{\log a} = \frac{\ln b}{\ln a}$$

### Example 16.16: Change of Base
#### Problem
Evaluate log₅ 12 using common logarithms

#### Solution
$$\log_5 12 = \frac{\log 12}{\log 5}$$
$$= \frac{1.079}{0.699}$$
$$\approx \mathbf{1.544}$$

---

## 16.11 Applications of Logarithms

### Example 16.17: Compound Interest
#### Problem
How long will GH₵1000 take to double at 5% compound interest annually?

Using A = P(1 + r)^t

#### Solution
2000 = 1000(1.05)^t
2 = 1.05^t
log 2 = t log 1.05
t = log 2 / log 1.05
t = 0.301 / 0.0212
**t ≈ 14.2 years**

---

## Practice Exercises

1. Write in logarithmic form:
   (a) 2⁶ = 64    (b) 10³ = 1000    (c) 3⁴ = 81

2. Evaluate without a calculator:
   (a) log₂ 32    (b) log₃ 81    (c) log₅ 125

3. Simplify:
   (a) log₂ 4 + log₂ 8    (b) log 100 - log 4

4. Simplify:
   (a) log 27³    (b) log₄ √16

5. Solve:
   (a) log₂ x = 5    (b) log(2x - 1) = 1

6. Solve:
   (a) log x + log 3 = log 15    (b) 2 log x = log 9

7. Solve (give answer to 3 decimal places):
   (a) 3^x = 7    (b) 5^(x+1) = 20

8. Using the change of base formula, evaluate log₃ 20 to 3 decimal places.

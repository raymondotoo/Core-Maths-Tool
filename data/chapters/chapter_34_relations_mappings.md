# Chapter 34: Relations and Mappings

## 34.1 Introduction to Relations

A **relation** is a rule that connects elements from one set (domain) to elements of another set (codomain).

### Example
Domain = {1, 2, 3}, Codomain = {2, 4, 6}
Relation: "is half of"
- 1 is half of 2
- 2 is half of 4
- 3 is half of 6

---

## 34.2 Types of Relations

### One-to-One
Each element in domain maps to exactly one distinct element in codomain.

### Many-to-One
Two or more elements in domain map to the same element in codomain.

### One-to-Many
One element in domain maps to more than one element in codomain.

### Many-to-Many
Multiple elements can relate to multiple other elements.

### Example 34.1: Identifying Relation Types
#### Problem
Classify the following relations:
(a) x → x² for x ∈ {−2, −1, 0, 1, 2}
(b) y → 2y for y ∈ {1, 2, 3}

#### Solution
(a) −2 → 4, −1 → 1, 0 → 0, 1 → 1, 2 → 4
Both −2 and 2 map to 4, both −1 and 1 map to 1.
This is **many-to-one**.

(b) 1 → 2, 2 → 4, 3 → 6
Each element maps to exactly one distinct element.
This is **one-to-one**.

---

## 34.3 Functions (Mappings)

A **function** (or mapping) is a special relation where each element in the domain maps to exactly one element in the codomain.

### Function Notation
f: A → B means f maps set A to set B.
f(x) denotes "f of x" - the image of x under function f.

### Example 34.2: Function Evaluation
#### Problem
If f(x) = 3x − 2, find: (a) f(4) (b) f(−1) (c) f(0)

#### Solution
(a) f(4) = 3(4) − 2 = 12 − 2 = **10**
(b) f(−1) = 3(−1) − 2 = −3 − 2 = **−5**
(c) f(0) = 3(0) − 2 = 0 − 2 = **−2**

---

## 34.4 Domain, Codomain, and Range

- **Domain**: Set of all possible input values
- **Codomain**: Set of all possible output values
- **Range** (Image): Set of actual output values produced

Note: Range ⊆ Codomain

### Example 34.3: Finding Domain and Range
#### Problem
For f(x) = x² with domain {−3, −2, −1, 0, 1, 2, 3}:
(a) Find the range
(b) Is f one-to-one?

#### Solution
(a) f(−3) = 9, f(−2) = 4, f(−1) = 1, f(0) = 0, f(1) = 1, f(2) = 4, f(3) = 9
Range = **{0, 1, 4, 9}**

(b) **No**, f is not one-to-one because f(−2) = f(2) = 4.

---

## 34.5 Arrow Diagrams

Arrow diagrams visually show mappings from domain to codomain.

### Example 34.4: Drawing Arrow Diagram
#### Problem
Draw an arrow diagram for f(x) = 2x + 1 where domain = {0, 1, 2, 3}.

#### Solution
```
Domain → Codomain
  0  →  1
  1  →  3
  2  →  5
  3  →  7
```

---

## 34.6 Composite Functions

For functions f and g, the **composite function** fg (or f ∘ g) means "apply g first, then f."

$$(f \circ g)(x) = f(g(x))$$

### Example 34.5: Composite Functions
#### Problem
Given f(x) = 2x + 1 and g(x) = x², find:
(a) fg(3)
(b) gf(3)
(c) fg(x)
(d) gf(x)

#### Solution
(a) fg(3) = f(g(3)) = f(9) = 2(9) + 1 = **19**

(b) gf(3) = g(f(3)) = g(7) = 7² = **49**

(c) fg(x) = f(g(x)) = f(x²) = 2(x²) + 1 = **2x² + 1**

(d) gf(x) = g(f(x)) = g(2x + 1) = (2x + 1)² = **4x² + 4x + 1**

Note: fg ≠ gf in general.

---

## 34.7 Inverse Functions

The **inverse function** f⁻¹ reverses the effect of f.

$$f^{-1}(f(x)) = x \text{ and } f(f^{-1}(x)) = x$$

### Finding Inverse Functions
1. Write y = f(x)
2. Swap x and y
3. Solve for y
4. Replace y with f⁻¹(x)

### Example 34.6: Finding Inverse
#### Problem
Find the inverse of f(x) = 3x − 5.

#### Solution
Let y = 3x − 5
Swap x and y: x = 3y − 5
Solve for y: x + 5 = 3y
y = (x + 5)/3

**f⁻¹(x) = (x + 5)/3**

### Example 34.7: Verifying Inverse
#### Problem
If f(x) = 2x + 4, verify that f⁻¹(x) = (x − 4)/2.

#### Solution
ff⁻¹(x) = f((x − 4)/2) = 2 × (x − 4)/2 + 4 = (x − 4) + 4 = x ✓
f⁻¹f(x) = f⁻¹(2x + 4) = ((2x + 4) − 4)/2 = 2x/2 = x ✓

---

## 34.8 Conditions for Inverse to Exist

A function has an inverse if and only if it is **one-to-one** (bijective).

### Example 34.8: Restricted Domain
#### Problem
The function f(x) = x² does not have an inverse for all real x. Suggest a restricted domain for which it would have an inverse.

#### Solution
Restrict domain to **x ≥ 0** (or x ≤ 0).
Then f becomes one-to-one, and the inverse is f⁻¹(x) = √x.

---

## 34.9 Finding Images and Pre-images

- **Image** of x: f(x)
- **Pre-image** of y: value of x such that f(x) = y

### Example 34.9: Pre-image
#### Problem
For f(x) = 4x − 3, find the pre-image of 17.

#### Solution
Find x such that f(x) = 17:
4x − 3 = 17
4x = 20
x = **5**

---

## 34.10 Graphical Representation

The graph of a function f and its inverse f⁻¹ are reflections of each other in the line y = x.

### Vertical Line Test
A relation is a function if any vertical line intersects its graph at most once.

### Horizontal Line Test
A function has an inverse if any horizontal line intersects its graph at most once.

---

## Practice Exercises

1. Given f(x) = 5x − 3, find:
   (a) f(2)
   (b) f(−3)
   (c) f(0)

2. If g(x) = x² + 2x − 1, find:
   (a) g(3)
   (b) g(−2)
   (c) The value of x when g(x) = 7

3. For the function f: x → 2x − 1 with domain {−1, 0, 1, 2, 3}:
   (a) List all the ordered pairs
   (b) State the range
   (c) Is f one-to-one?

4. Draw arrow diagrams showing:
   (a) A one-to-one function
   (b) A many-to-one function

5. Given f(x) = 3x + 2 and g(x) = x − 4, find:
   (a) fg(x)
   (b) gf(x)
   (c) fg(5)
   (d) gf(5)

6. Find the inverse of:
   (a) f(x) = 4x + 7
   (b) g(x) = (x − 3)/2
   (c) h(x) = 5 − 2x

7. If f(x) = 2x + a and f⁻¹(5) = 2, find the value of a.

8. Given f(x) = x + 3 and g(x) = x², find:
   (a) ff(2)
   (b) gg(2)
   (c) f⁻¹g(4)

9. For f(x) = 3x − 6:
   (a) Find f⁻¹(x)
   (b) Find the value of x for which f(x) = f⁻¹(x)

10. Classify each relation as function or not function, and if a function, whether one-to-one or many-to-one:
    (a) {(1, 2), (2, 4), (3, 6)}
    (b) {(1, 3), (2, 3), (3, 5)}
    (c) {(1, 2), (1, 3), (2, 4)}

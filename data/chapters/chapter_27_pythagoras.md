# Chapter 27: Pythagoras' Theorem

## 27.1 Introduction

**Pythagoras' Theorem** states that in a right-angled triangle:

![Pythagoras' Theorem](www/images/chapter_27/pythagoras_theorem.svg)

$$a^2 + b^2 = c^2$$

where c is the **hypotenuse** (longest side, opposite the right angle).

---

## 27.2 Finding the Hypotenuse

### Example 27.1: Basic Calculation
#### Problem
Find the hypotenuse of a right triangle with legs 6 cm and 8 cm.

![Triangle 6-8-c](www/images/chapter_27/triangle_6_8_unknown.svg)

#### Solution
$$c^2 = a^2 + b^2$$
$$c^2 = 6^2 + 8^2$$
$$c^2 = 36 + 64 = 100$$
$$c = \sqrt{100} = \mathbf{10 \text{ cm}}$$

### Example 27.2: Decimal Values
#### Problem
Find the hypotenuse when a = 5 cm and b = 7 cm.

#### Solution
$$c^2 = 5^2 + 7^2 = 25 + 49 = 74$$
$$c = \sqrt{74} = \mathbf{8.60 \text{ cm}}$$ (2 d.p.)

---

## 27.3 Finding a Leg

### Example 27.3: Finding a Missing Leg
#### Problem
A right triangle has hypotenuse 13 cm and one leg 5 cm. Find the other leg.

![Triangle 5-b-13](www/images/chapter_27/triangle_5_b_13.svg)

#### Solution
$$a^2 + b^2 = c^2$$
$$5^2 + b^2 = 13^2$$
$$25 + b^2 = 169$$
$$b^2 = 144$$
$$b = \sqrt{144} = \mathbf{12 \text{ cm}}$$

---

## 27.4 Pythagorean Triples

**Pythagorean triples** are sets of whole numbers that satisfy Pythagoras' theorem.

Common triples:
- 3, 4, 5
- 5, 12, 13
- 8, 15, 17
- 7, 24, 25

Multiples also work: 6, 8, 10 (2 × the 3, 4, 5 triple)

### Example 27.4: Recognizing Triples
#### Problem
Is a triangle with sides 9, 12, 15 a right triangle?

#### Solution
Check: 9² + 12² = 81 + 144 = 225 = 15²

**Yes**, it's a right triangle (3, 4, 5 triple × 3)

---

## 27.5 The Converse of Pythagoras' Theorem

If a² + b² = c², the triangle is **right-angled**.
If a² + b² > c², the triangle is **acute**.
If a² + b² < c², the triangle is **obtuse**.

### Example 27.5: Classifying Triangles
#### Problem
Classify triangles with sides:
(a) 5, 6, 7    (b) 4, 5, 8

#### Solution
(a) 5² + 6² = 25 + 36 = 61
    7² = 49
    Since 61 > 49: **Acute triangle**

(b) 4² + 5² = 16 + 25 = 41
    8² = 64
    Since 41 < 64: **Obtuse triangle**

---

## 27.6 Applications

### Example 27.6: Ladder Problem
#### Problem
A 10 m ladder leans against a wall with its foot 6 m from the wall. How high up the wall does it reach?

![Ladder Problem](www/images/chapter_27/ladder_problem.svg)

#### Solution
$$h^2 + 6^2 = 10^2$$
$$h^2 + 36 = 100$$
$$h^2 = 64$$
$$h = \mathbf{8 \text{ m}}$$

### Example 27.7: Diagonal of Rectangle
#### Problem
Find the diagonal of a rectangle 8 cm by 15 cm.

![Rectangle Diagonal](www/images/chapter_27/rectangle_diagonal.svg)

#### Solution
$$d^2 = 8^2 + 15^2$$
$$d^2 = 64 + 225 = 289$$
$$d = \sqrt{289} = \mathbf{17 \text{ cm}}$$

### Example 27.8: Distance on Coordinate Plane
#### Problem
Find the distance from A(1, 2) to B(4, 6).

#### Solution
Horizontal distance = 4 - 1 = 3
Vertical distance = 6 - 2 = 4

$$d = \sqrt{3^2 + 4^2} = \sqrt{9 + 16} = \sqrt{25} = \mathbf{5 \text{ units}}$$

---

## 27.7 Three-Dimensional Applications

### Example 27.9: Diagonal of Cuboid
#### Problem
Find the space diagonal of a cuboid 3 cm × 4 cm × 5 cm.

![Cuboid Diagonal](www/images/chapter_27/cuboid_diagonal.svg)

#### Solution
Step 1: Find base diagonal
$$d_1 = \sqrt{3^2 + 4^2} = \sqrt{9 + 16} = \sqrt{25} = 5$$

Step 2: Find space diagonal
$$D = \sqrt{d_1^2 + 5^2} = \sqrt{25 + 25} = \sqrt{50} = \mathbf{5\sqrt{2} \text{ cm}}$$

Or directly: $$D = \sqrt{3^2 + 4^2 + 5^2} = \sqrt{50}$$

### Example 27.10: Pyramid Height
#### Problem
A square pyramid has base side 6 cm and slant height 5 cm. Find the vertical height.

#### Solution
Half base = 3 cm (distance from center to midpoint of base)

$$h^2 + 3^2 = 5^2$$
$$h^2 + 9 = 25$$
$$h^2 = 16$$
$$h = \mathbf{4 \text{ cm}}$$

---

## 27.8 Special Right Triangles

### 45-45-90 Triangle
Ratio of sides: 1 : 1 : √2

### Example 27.11: 45-45-90 Triangle
#### Problem
In a 45-45-90 triangle, the legs are 5 cm each. Find the hypotenuse.

#### Solution
Hypotenuse = leg × √2 = 5√2 = **7.07 cm**

### 30-60-90 Triangle
Ratio of sides: 1 : √3 : 2

### Example 27.12: 30-60-90 Triangle
#### Problem
In a 30-60-90 triangle, the shortest side is 4 cm. Find other sides.

#### Solution
- Shortest (opposite 30°) = 4 cm
- Middle (opposite 60°) = 4√3 = **6.93 cm**
- Hypotenuse (opposite 90°) = 2 × 4 = **8 cm**

---

## 27.9 Problem Solving

### Example 27.13: Wire Problem
#### Problem
A wire stretches from the top of an 8 m pole to a point on the ground 6 m from the base. What length of wire is needed?

#### Solution
$$L^2 = 8^2 + 6^2 = 64 + 36 = 100$$
$$L = \mathbf{10 \text{ m}}$$

### Example 27.14: Shortest Path
#### Problem
A fly is at corner A of a room (floor level). The room is 4 m × 3 m × 2.5 m. Find the shortest path to the opposite corner B (ceiling level) along walls.

#### Solution
Unfold one wall with ceiling:
Path = √((4+2.5)² + 3²) = √(42.25 + 9) = √51.25 = **7.16 m**

(Note: There are multiple unfolding options; check all to find shortest)

---

## Practice Exercises

1. Find the hypotenuse:
   (a) legs 9 and 12    (b) legs 5 and 8

2. Find the missing leg:
   (a) hypotenuse 25, leg 7    (b) hypotenuse 17, leg 15

3. Is a triangle with sides 7, 11, 14 acute, right, or obtuse?

4. A 13 m ladder reaches 12 m up a wall. How far is the foot from the wall?

5. Find the diagonal of a rectangle 12 cm by 9 cm.

6. Find the distance between points P(2, 3) and Q(8, 11).

7. Find the space diagonal of a cube with side 4 cm.

8. A kite flies at the end of a 100 m string. It is 80 m horizontally from the person holding it. How high is the kite?

9. In a 30-60-90 triangle, the hypotenuse is 10 cm. Find the other two sides.

10. A rectangular field is 80 m by 60 m. Find the length of the diagonal path across it.

# Chapter 17: Vectors and Bearings

## 17.1 Introduction to Vectors

A **vector** is a quantity with both magnitude (size) and direction.

**Notation:**
- Bold letter: **a** or **AB**
- With arrow: $\vec{a}$ or $\overrightarrow{AB}$
- Column form: $\begin{pmatrix} x \\ y \end{pmatrix}$

**Scalar** = magnitude only (e.g., speed, distance, mass)

---

## 17.2 Vector Notation

Position vector of point P(x, y) from origin:
$$\vec{OP} = \begin{pmatrix} x \\ y \end{pmatrix}$$

### Example 17.1: Writing Position Vectors
#### Problem
Write the position vector of P(3, 5).

![Position Vector](www/images/chapter_17/position_vector.svg)

#### Solution
$$\vec{OP} = \mathbf{\begin{pmatrix} 3 \\ 5 \end{pmatrix}}$$

---

## 17.3 Magnitude of a Vector

![Vector Magnitude](www/images/chapter_17/vector_magnitude.svg)

For vector $\vec{a} = \begin{pmatrix} x \\ y \end{pmatrix}$:

$$|\vec{a}| = \sqrt{x^2 + y^2}$$

### Example 17.2: Finding Magnitude
#### Problem
Find the magnitude of $\vec{a} = \begin{pmatrix} 3 \\ 4 \end{pmatrix}$

#### Solution
$$|\vec{a}| = \sqrt{3^2 + 4^2} = \sqrt{9 + 16} = \sqrt{25} = \mathbf{5}$$

### Example 17.3: Distance Using Vectors
#### Problem
Find the distance from A(1, 2) to B(4, 6).

#### Solution
$$\vec{AB} = \begin{pmatrix} 4-1 \\ 6-2 \end{pmatrix} = \begin{pmatrix} 3 \\ 4 \end{pmatrix}$$

$$|\vec{AB}| = \sqrt{3^2 + 4^2} = \mathbf{5 \text{ units}}$$

---

## 17.4 Vector Addition and Subtraction

![Vector Addition](www/images/chapter_17/vector_addition.svg)

$$\begin{pmatrix} a \\ b \end{pmatrix} + \begin{pmatrix} c \\ d \end{pmatrix} = \begin{pmatrix} a+c \\ b+d \end{pmatrix}$$

$$\begin{pmatrix} a \\ b \end{pmatrix} - \begin{pmatrix} c \\ d \end{pmatrix} = \begin{pmatrix} a-c \\ b-d \end{pmatrix}$$

### Example 17.4: Vector Addition
#### Problem
If $\vec{a} = \begin{pmatrix} 2 \\ 3 \end{pmatrix}$ and $\vec{b} = \begin{pmatrix} 4 \\ -1 \end{pmatrix}$, find $\vec{a} + \vec{b}$.

#### Solution
$$\vec{a} + \vec{b} = \begin{pmatrix} 2+4 \\ 3+(-1) \end{pmatrix} = \mathbf{\begin{pmatrix} 6 \\ 2 \end{pmatrix}}$$

### Example 17.5: Vector Subtraction
#### Problem
Find $\vec{a} - \vec{b}$ for the vectors above.

#### Solution
$$\vec{a} - \vec{b} = \begin{pmatrix} 2-4 \\ 3-(-1) \end{pmatrix} = \mathbf{\begin{pmatrix} -2 \\ 4 \end{pmatrix}}$$

---

## 17.5 Scalar Multiplication

$$k\begin{pmatrix} a \\ b \end{pmatrix} = \begin{pmatrix} ka \\ kb \end{pmatrix}$$

### Example 17.6: Scalar Multiple
#### Problem
If $\vec{r} = \begin{pmatrix} 3 \\ -2 \end{pmatrix}$, find 4$\vec{r}$.

#### Solution
$$4\vec{r} = 4\begin{pmatrix} 3 \\ -2 \end{pmatrix} = \mathbf{\begin{pmatrix} 12 \\ -8 \end{pmatrix}}$$

---

## 17.6 Equal and Parallel Vectors

**Equal vectors**: Same magnitude AND direction
$$\vec{a} = \vec{b}$$ if components are identical

**Parallel vectors**: Same or opposite direction
$$\vec{a} \parallel \vec{b}$$ if $\vec{a} = k\vec{b}$ for some scalar k

### Example 17.7: Parallel Vectors
#### Problem
Show that $\vec{a} = \begin{pmatrix} 2 \\ 6 \end{pmatrix}$ and $\vec{b} = \begin{pmatrix} 1 \\ 3 \end{pmatrix}$ are parallel.

#### Solution
$$\vec{a} = 2\begin{pmatrix} 1 \\ 3 \end{pmatrix} = 2\vec{b}$$

Since $\vec{a} = 2\vec{b}$, the vectors are **parallel**.

---

## 17.7 Introduction to Bearings

![Compass Bearings](www/images/chapter_17/compass_bearings.svg)

A **bearing** is a direction measured clockwise from North, written as a three-digit angle.

**Key points:**
- Always measure from North
- Always measure clockwise
- Use three digits (e.g., 045°, 180°, 270°)

### Cardinal Directions:
- North = 000°
- East = 090°
- South = 180°
- West = 270°

---

## 17.8 Bearings Calculations

### Example 17.8: Simple Bearing
#### Problem
A ship sails from port P to port Q on a bearing of 060°. What is the bearing of P from Q?

#### Solution
Back bearing = 060° + 180° = **240°**

(If bearing < 180°, add 180°; if ≥ 180°, subtract 180°)

### Example 17.9: Drawing Bearings
#### Problem
Town B is 10 km from town A on a bearing of 110°. Represent this.

#### Solution
1. Draw North line at A
2. Measure 110° clockwise from North
3. Mark B at 10 km along this direction

---

## 17.9 Problems Involving Bearings

### Example 17.10: Two Bearings
#### Problem
From point A, point B is on a bearing of 045°. From B, point C is on a bearing of 135°. If AB = BC, find the bearing of C from A.

#### Solution
At B, turn from direction BA (045° + 180° = 225°) to 135°
Angle ABC = 225° - 135° = 90°

Since AB = BC and angle ABC = 90°:
Triangle ABC is isosceles right-angled
Angle BAC = 45°

Bearing of C from A = 045° + 45° = **090°**

### Example 17.11: Distance and Bearing
#### Problem
A plane flies 100 km due North, then 100 km due East. Find the bearing and distance from the starting point to the final position.

![Bearing Problem](www/images/chapter_17/bearing_problem.svg)

#### Solution
Using Pythagoras:
Distance = √(100² + 100²) = √20000 = **141.4 km**

Bearing = tan⁻¹(100/100) = 45°
Bearing from start = **045°**

---

## 17.10 Three-Figure Bearings with Trigonometry

### Example 17.12: Bearing Problem
#### Problem
From town A, town B is 12 km away on a bearing of 040°. From B, town C is 8 km away on a bearing of 130°. Find the distance AC.

#### Solution
Angle ABC = 130° - (40° + 180°) + 360° = 90° (interior)

Actually: Back bearing from B to A = 040° + 180° = 220°
Angle ABC = 220° - 130° = 90°

Using Pythagoras (right angle at B):
AC² = AB² + BC²
AC² = 12² + 8²
AC² = 144 + 64 = 208
AC = **14.4 km**

---

## Practice Exercises

1. Write the position vectors of:
   (a) A(4, 7)    (b) B(-2, 5)    (c) C(0, -3)

2. Find the magnitude of:
   (a) $\begin{pmatrix} 5 \\ 12 \end{pmatrix}$    (b) $\begin{pmatrix} -3 \\ 4 \end{pmatrix}$

3. If $\vec{p} = \begin{pmatrix} 3 \\ 2 \end{pmatrix}$ and $\vec{q} = \begin{pmatrix} -1 \\ 4 \end{pmatrix}$, find:
   (a) $\vec{p} + \vec{q}$    (b) $\vec{p} - \vec{q}$    (c) $2\vec{p} + 3\vec{q}$

4. Find $\vec{AB}$ if A = (1, 3) and B = (5, 7). What is |$\vec{AB}$|?

5. A ship sails from P on a bearing of 070°. What is the back bearing (P from ship)?

6. From A, B is 20 km on bearing 030°. From B, C is 20 km on bearing 120°. Find:
   (a) Angle ABC    (b) Distance AC

7. An aircraft flies 80 km due East, then 60 km due North. Find the bearing and distance of the final position from the starting point.

8. Show that $\begin{pmatrix} 4 \\ 6 \end{pmatrix}$ and $\begin{pmatrix} -2 \\ -3 \end{pmatrix}$ are parallel vectors.

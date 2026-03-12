# Chapter 19: Transformations in the Coordinate Plane

## 19.1 Introduction to Transformations

A **transformation** is a mapping that moves points according to specific rules.

### Types:
- **Translation**: Sliding
- **Reflection**: Flipping
- **Rotation**: Turning
- **Enlargement**: Scaling

---

## 19.2 Translation

![Translation](www/images/chapter_19/translation.svg)

A **translation** moves every point the same distance in the same direction.

Translation vector: $\begin{pmatrix} a \\ b \end{pmatrix}$ moves point (x, y) to (x + a, y + b)

### Example 19.1: Applying Translation
#### Problem
Point P(3, 5) is translated by vector $\begin{pmatrix} 4 \\ -2 \end{pmatrix}$. Find the image P'.

#### Solution
P'(3 + 4, 5 + (-2)) = **P'(7, 3)**

### Example 19.2: Finding Translation Vector
#### Problem
A is mapped to A' under a translation. A = (2, 3), A' = (5, 7). Find the translation vector.

#### Solution
$$\vec{T} = \begin{pmatrix} 5-2 \\ 7-3 \end{pmatrix} = \mathbf{\begin{pmatrix} 3 \\ 4 \end{pmatrix}}$$

---

## 19.3 Reflection

![Reflection](www/images/chapter_19/reflection.svg)

A **reflection** creates a mirror image across a line.

### Reflection Rules:
| Mirror Line | (x, y) → |
|-------------|----------|
| x-axis | (x, -y) |
| y-axis | (-x, y) |
| y = x | (y, x) |
| y = -x | (-y, -x) |

### Example 19.3: Reflection in x-axis
#### Problem
Reflect point P(3, 5) in the x-axis.

#### Solution
x-axis reflection: (x, y) → (x, -y)
P'(3, -5)

**P' = (3, -5)**

### Example 19.4: Reflection in y = x
#### Problem
Reflect point A(2, 7) in the line y = x.

#### Solution
y = x reflection: (x, y) → (y, x)
A'(7, 2)

**A' = (7, 2)**

### Example 19.5: Finding Mirror Line
#### Problem
P(4, 3) maps to P'(4, -3). Find the mirror line.

#### Solution
Midpoint of PP' = ((4+4)/2, (3+(-3))/2) = (4, 0)

The midpoint lies on the x-axis, and the line PP' is vertical.

**Mirror line: x-axis** (or y = 0)

---

## 19.4 Rotation

A **rotation** turns a figure about a fixed point (center) through an angle.

### Rotation Rules (center at origin):
| Angle | (x, y) → |
|-------|----------|
| 90° counterclockwise | (-y, x) |
| 90° clockwise | (y, -x) |
| 180° | (-x, -y) |
| 270° counterclockwise | (y, -x) |

### Example 19.6: 90° Rotation
#### Problem
Rotate point P(3, 2) by 90° counterclockwise about the origin.

![Rotation](www/images/chapter_19/rotation.svg)

#### Solution
90° counterclockwise: (x, y) → (-y, x)
P'(-2, 3)

**P' = (-2, 3)**

### Example 19.7: 180° Rotation
#### Problem
Rotate point A(5, -3) by 180° about the origin.

#### Solution
180°: (x, y) → (-x, -y)
A'(-5, 3)

**A' = (-5, 3)**

### Example 19.8: Rotation About Another Point
#### Problem
Rotate P(5, 3) by 90° counterclockwise about center C(2, 1).

#### Solution
Step 1: Translate so C is at origin
P relative to C: (5-2, 3-1) = (3, 2)

Step 2: Apply rotation
90° counterclockwise: (3, 2) → (-2, 3)

Step 3: Translate back
P'(-2+2, 3+1) = **(0, 4)**

---

## 19.5 Enlargement

An **enlargement** scales a figure by a factor k from a center point.

If center is origin: (x, y) → (kx, ky)

### Example 19.9: Enlargement from Origin
#### Problem
Enlarge point P(3, 2) by scale factor 2 from the origin.

![Enlargement](www/images/chapter_19/enlargement.svg)

#### Solution
P'(2×3, 2×2) = **P'(6, 4)**

### Example 19.10: Enlargement from Another Center
#### Problem
Enlarge A(5, 3) by scale factor 3 from center C(2, 1).

#### Solution
Step 1: Find vector from C to A
$\vec{CA} = \begin{pmatrix} 5-2 \\ 3-1 \end{pmatrix} = \begin{pmatrix} 3 \\ 2 \end{pmatrix}$

Step 2: Multiply by scale factor
$3\vec{CA} = \begin{pmatrix} 9 \\ 6 \end{pmatrix}$

Step 3: Add to center
A'(2+9, 1+6) = **(11, 7)**

### Example 19.11: Negative Scale Factor
#### Problem
Enlarge P(4, 3) by scale factor -2 from origin.

#### Solution
P'(-2×4, -2×3) = **P'(-8, -6)**

(Negative scale factor produces image on opposite side of center)

---

## 19.6 Combined Transformations

### Example 19.12: Two Transformations
#### Problem
Point P(2, 3) is first reflected in the x-axis, then translated by $\begin{pmatrix} 4 \\ 1 \end{pmatrix}$. Find the final image.

#### Solution
Step 1: Reflect in x-axis
P₁(2, -3)

Step 2: Translate
P'(2+4, -3+1) = **(6, -2)**

### Example 19.13: Finding Single Equivalent
#### Problem
A 90° counterclockwise rotation about O followed by a 90° counterclockwise rotation about O. What single transformation is this equivalent to?

#### Solution
90° + 90° = 180°

Equivalent to **180° rotation about O**

---

## 19.7 Inverse Transformations

| Transformation | Inverse |
|---------------|---------|
| Translation by $\begin{pmatrix} a \\ b \end{pmatrix}$ | Translation by $\begin{pmatrix} -a \\ -b \end{pmatrix}$ |
| Reflection | Same reflection |
| Rotation by θ | Rotation by -θ |
| Enlargement factor k | Enlargement factor 1/k |

### Example 19.14: Finding Inverse
#### Problem
Find the inverse of translation by $\begin{pmatrix} 3 \\ -2 \end{pmatrix}$.

#### Solution
Inverse translation: $\mathbf{\begin{pmatrix} -3 \\ 2 \end{pmatrix}}$

---

## 19.8 Properties Preserved

| Property | Translation | Reflection | Rotation | Enlargement |
|----------|-------------|------------|----------|-------------|
| Shape | ✓ | ✓ | ✓ | ✓ |
| Size | ✓ | ✓ | ✓ | ✗ |
| Orientation | ✓ | ✗ | ✓ | ✓ |

**Isometry**: Transformation that preserves distance (translation, reflection, rotation)

---

## Practice Exercises

1. Point A(4, 5) is translated by vector $\begin{pmatrix} -3 \\ 4 \end{pmatrix}$. Find A'.

2. Find the image of P(-2, 3) after reflection in:
   (a) the x-axis    (b) the y-axis    (c) y = x

3. Rotate point (4, 3) about the origin by:
   (a) 90° counterclockwise    (b) 180°    (c) 90° clockwise

4. Enlarge point (3, 2) by scale factor 4 from the origin.

5. Triangle ABC has vertices A(1, 1), B(4, 1), C(4, 3). Find the image after:
   (a) Translation by $\begin{pmatrix} 2 \\ 3 \end{pmatrix}$
   (b) Reflection in the y-axis

6. P(6, 4) is enlarged by scale factor 2 from center (2, 2). Find P'.

7. Point Q(3, 5) is reflected in y = x, then translated by $\begin{pmatrix} 2 \\ -1 \end{pmatrix}$. Find the final image.

8. What single transformation is equivalent to two successive reflections in parallel lines 4 units apart?

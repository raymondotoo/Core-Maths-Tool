# Chapter 12: Polygons

## 12.1 Introduction to Polygons

A **polygon** is a closed plane figure bounded by straight line segments.

![Common Polygons](www/images/chapter_12/polygon_types.svg)

### Classification by Number of Sides:
| Number of Sides | Name |
|-----------------|------|
| 3 | Triangle |
| 4 | Quadrilateral |
| 5 | Pentagon |
| 6 | Hexagon |
| 7 | Heptagon |
| 8 | Octagon |
| 9 | Nonagon |
| 10 | Decagon |
| n | n-gon |

### Types of Polygons:
- **Convex**: All interior angles less than 180°
- **Concave**: At least one interior angle greater than 180°
- **Regular**: All sides equal AND all angles equal
- **Irregular**: Sides or angles not all equal

---

## 12.2 Sum of Interior Angles

The sum of interior angles of an n-sided polygon:
$$S = (n - 2) \times 180°$$

### Example 12.1: Sum of Interior Angles
#### Problem
Find the sum of interior angles of a hexagon.

![Hexagon](www/images/chapter_12/hexagon_angles.svg)

#### Solution
n = 6
S = (n - 2) × 180°
S = (6 - 2) × 180°
S = 4 × 180°
S = **720°**

### Example 12.2: Finding Missing Angle
#### Problem
In a quadrilateral, three angles are 85°, 110°, and 75°. Find the fourth angle.

![Quadrilateral with angles](www/images/chapter_12/quadrilateral_angles.svg)

#### Solution
Sum of angles in quadrilateral = (4 - 2) × 180° = 360°

Let fourth angle = x
85 + 110 + 75 + x = 360
270 + x = 360
x = **90°**

---

## 12.3 Regular Polygons

In a regular n-sided polygon:
- Each interior angle = $$\frac{(n-2) \times 180°}{n}$$
- Each exterior angle = $$\frac{360°}{n}$$

### Example 12.3: Interior Angle of Regular Polygon
#### Problem
Find the interior angle of a regular octagon.

![Regular Octagon](www/images/chapter_12/regular_octagon.svg)

#### Solution
n = 8
Interior angle = $$\frac{(8-2) \times 180°}{8}$$
= $$\frac{6 \times 180°}{8}$$
= $$\frac{1080°}{8}$$
= **135°**

### Example 12.4: Exterior Angle
#### Problem
Find the exterior angle of a regular pentagon.

![Regular Pentagon](www/images/chapter_12/regular_pentagon.svg)

#### Solution
n = 5
Exterior angle = $$\frac{360°}{5}$$
= **72°**

---

## 12.4 Finding Number of Sides

### Example 12.5: From Interior Angle
#### Problem
A regular polygon has an interior angle of 156°. How many sides does it have?

#### Solution
Interior angle = $$\frac{(n-2) \times 180}{n}$$

$$156 = \frac{(n-2) \times 180}{n}$$

156n = 180n - 360
360 = 24n
n = **15 sides** (pentadecagon)

### Example 12.6: From Exterior Angle
#### Problem
Each exterior angle of a regular polygon is 30°. Find the number of sides.

#### Solution
Exterior angle = $$\frac{360°}{n}$$

$$30 = \frac{360}{n}$$

n = $$\frac{360}{30}$$ = **12 sides** (dodecagon)

---

## 12.5 Sum of Exterior Angles

The sum of exterior angles of any convex polygon is **360°**.

### Example 12.7: Using Exterior Angles
#### Problem
The exterior angles of a quadrilateral are x°, 2x°, 3x°, and 4x°. Find x.

#### Solution
Sum of exterior angles = 360°
x + 2x + 3x + 4x = 360
10x = 360
x = **36°**

---

## 12.6 Triangles: Special Polygons

### Types of Triangles:
- **Equilateral**: All sides equal, all angles 60°
- **Isosceles**: Two sides equal, base angles equal
- **Scalene**: No sides equal
- **Right-angled**: One angle is 90°
- **Acute**: All angles less than 90°
- **Obtuse**: One angle greater than 90°

### Example 12.8: Isosceles Triangle
#### Problem
In an isosceles triangle, the vertex angle is 40°. Find the base angles.

![Isosceles Triangle](www/images/chapter_12/isosceles_triangle.svg)

#### Solution
Sum of angles = 180°
Let base angle = x
40 + x + x = 180
40 + 2x = 180
2x = 140
x = **70°**

---

## 12.7 Quadrilaterals: Four-sided Polygons

![Types of Quadrilaterals](www/images/chapter_12/quadrilateral_types.svg)

### Types:
| Shape | Properties |
|-------|------------|
| **Square** | 4 equal sides, 4 right angles |
| **Rectangle** | Opposite sides equal, 4 right angles |
| **Rhombus** | 4 equal sides, opposite angles equal |
| **Parallelogram** | Opposite sides parallel and equal |
| **Trapezium** | One pair of parallel sides |
| **Kite** | Two pairs of adjacent sides equal |

### Example 12.9: Parallelogram Angles
#### Problem
In a parallelogram ABCD, angle A = 70°. Find all other angles.

![Parallelogram ABCD](www/images/chapter_12/parallelogram.svg)

#### Solution
In a parallelogram:
- Opposite angles are equal
- Adjacent angles are supplementary

∠A = 70°
∠C = 70° (opposite to A)
∠B = 180° - 70° = 110° (supplementary to A)
∠D = 110° (opposite to B)

**Angles: 70°, 110°, 70°, 110°**

### Example 12.10: Trapezium Angles
#### Problem
In trapezium PQRS, PQ || SR. If ∠P = 65° and ∠Q = 75°, find ∠R and ∠S.

![Trapezium PQRS](www/images/chapter_12/trapezium.svg)

#### Solution
Since PQ || SR:
∠P + ∠S = 180° (co-interior angles)
∠S = 180° - 65° = **115°**

∠Q + ∠R = 180° (co-interior angles)
∠R = 180° - 75° = **105°**

---

## 12.8 Diagonals of a Polygon

The number of diagonals of an n-sided polygon:
$$D = \frac{n(n-3)}{2}$$

### Example 12.11: Number of Diagonals
#### Problem
How many diagonals does a hexagon have?

![Hexagon with Diagonals](www/images/chapter_12/hexagon_diagonals.svg)

#### Solution
n = 6
$$D = \frac{6(6-3)}{2} = \frac{6 \times 3}{2} = \frac{18}{2} = \mathbf{9}$$

### Example 12.12: Finding Sides from Diagonals
#### Problem
A polygon has 35 diagonals. How many sides does it have?

#### Solution
$$\frac{n(n-3)}{2} = 35$$
n(n-3) = 70
n² - 3n - 70 = 0
(n - 10)(n + 7) = 0
n = 10 or n = -7

Since n must be positive:
**n = 10 sides**

---

## Practice Exercises

1. Find the sum of interior angles of:
   (a) Pentagon    (b) Nonagon    (c) 15-sided polygon

2. Find the interior and exterior angles of a regular:
   (a) Hexagon    (b) Decagon

3. A regular polygon has an interior angle of 144°. Find the number of sides.

4. Each exterior angle of a regular polygon is 40°. Find:
   (a) Number of sides    (b) Sum of interior angles

5. The angles of a quadrilateral are x°, (x+20)°, (x+40)°, and (x+60)°. Find x and all the angles.

6. How many diagonals does:
   (a) Octagon have    (b) Decagon have

7. The interior angle of a regular polygon is 5 times its exterior angle. Find the number of sides.

8. In a parallelogram, one angle is 25° more than twice the other. Find all angles.

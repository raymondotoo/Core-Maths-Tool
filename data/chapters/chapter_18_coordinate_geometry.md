# Chapter 18: Coordinate Geometry

## 18.1 The Cartesian Plane

![Cartesian Plane](www/images/chapter_18/cartesian_plane.svg)

The **Cartesian plane** consists of two perpendicular number lines:
- **x-axis** (horizontal)
- **y-axis** (vertical)

Points are written as **ordered pairs (x, y)**.

### Quadrants:
- Quadrant I: x > 0, y > 0
- Quadrant II: x < 0, y > 0
- Quadrant III: x < 0, y < 0
- Quadrant IV: x > 0, y < 0

---

## 18.2 Distance Between Two Points

For points A(x₁, y₁) and B(x₂, y₂):

$$d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$

### Example 18.1: Finding Distance
#### Problem
Find the distance between P(2, 3) and Q(5, 7).

![Distance Formula](www/images/chapter_18/distance_formula.svg)

#### Solution
$$d = \sqrt{(5-2)^2 + (7-3)^2}$$
$$= \sqrt{3^2 + 4^2}$$
$$= \sqrt{9 + 16}$$
$$= \sqrt{25}$$
$$= \mathbf{5 \text{ units}}$$

### Example 18.2: Distance with Negatives
#### Problem
Find the distance between A(-3, 2) and B(1, -2).

#### Solution
$$d = \sqrt{(1-(-3))^2 + (-2-2)^2}$$
$$= \sqrt{4^2 + (-4)^2}$$
$$= \sqrt{16 + 16}$$
$$= \sqrt{32}$$
$$= \mathbf{4\sqrt{2} \text{ units}}$$

---

## 18.3 Midpoint of a Line Segment

![Midpoint Formula](www/images/chapter_18/midpoint_formula.svg)

For points A(x₁, y₁) and B(x₂, y₂):

$$M = \left(\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}\right)$$

### Example 18.3: Finding Midpoint
#### Problem
Find the midpoint of the line segment joining A(2, 5) and B(8, 11).

#### Solution
$$M = \left(\frac{2+8}{2}, \frac{5+11}{2}\right)$$
$$= \left(\frac{10}{2}, \frac{16}{2}\right)$$
$$= \mathbf{(5, 8)}$$

### Example 18.4: Finding Endpoint
#### Problem
M(4, 3) is the midpoint of PQ. If P = (1, 5), find Q.

#### Solution
Let Q = (x, y)

$$\frac{1 + x}{2} = 4$$ → x = 7

$$\frac{5 + y}{2} = 3$$ → y = 1

**Q = (7, 1)**

---

## 18.4 Gradient (Slope) of a Line

The **gradient** measures the steepness of a line:

$$m = \frac{y_2 - y_1}{x_2 - x_1} = \frac{\text{rise}}{\text{run}}$$

### Example 18.5: Finding Gradient
#### Problem
Find the gradient of the line through A(1, 2) and B(4, 8).

![Gradient/Slope](www/images/chapter_18/gradient_slope.svg)

#### Solution
$$m = \frac{8 - 2}{4 - 1} = \frac{6}{3} = \mathbf{2}$$

### Example 18.6: Negative Gradient
#### Problem
Find the gradient of the line through P(2, 5) and Q(6, 1).

#### Solution
$$m = \frac{1 - 5}{6 - 2} = \frac{-4}{4} = \mathbf{-1}$$

---

## 18.5 Special Gradients

- **Horizontal line**: gradient = 0
- **Vertical line**: gradient is undefined
- **Parallel lines**: equal gradients (m₁ = m₂)
- **Perpendicular lines**: m₁ × m₂ = -1

### Example 18.7: Parallel Lines
#### Problem
Line L has gradient 3. Line M passes through (1, 4) and (3, k) and is parallel to L. Find k.

#### Solution
Since M ∥ L, gradient of M = 3

$$\frac{k - 4}{3 - 1} = 3$$
$$\frac{k - 4}{2} = 3$$
$$k - 4 = 6$$
$$\mathbf{k = 10}$$

### Example 18.8: Perpendicular Lines
#### Problem
Line L has gradient 2. Find the gradient of any line perpendicular to L.

#### Solution
$$m_1 \times m_2 = -1$$
$$2 \times m_2 = -1$$
$$m_2 = \mathbf{-\frac{1}{2}}$$

---

## 18.6 Equation of a Straight Line

### Forms:
- **Slope-intercept form**: y = mx + c
- **Point-slope form**: y - y₁ = m(x - x₁)
- **General form**: ax + by + c = 0

### Example 18.9: Using Slope-Intercept
#### Problem
Find the equation of a line with gradient 3, passing through (0, 5).

#### Solution
y = mx + c
y = 3x + 5

**y = 3x + 5**

### Example 18.10: Using Point-Slope
#### Problem
Find the equation of the line with gradient 2 passing through (3, 7).

#### Solution
y - y₁ = m(x - x₁)
y - 7 = 2(x - 3)
y - 7 = 2x - 6
y = 2x + 1

**y = 2x + 1**

### Example 18.11: Through Two Points
#### Problem
Find the equation of the line through A(1, 3) and B(4, 9).

#### Solution
Step 1: Find gradient
$$m = \frac{9-3}{4-1} = \frac{6}{3} = 2$$

Step 2: Use point-slope form with (1, 3)
y - 3 = 2(x - 1)
y - 3 = 2x - 2
y = 2x + 1

**y = 2x + 1**

---

## 18.7 Intersection of Lines

### Example 18.12: Point of Intersection
#### Problem
Find where y = 2x + 1 and y = -x + 7 intersect.

#### Solution
At intersection, y-values are equal:
2x + 1 = -x + 7
3x = 6
x = 2

Substitute: y = 2(2) + 1 = 5

**Intersection point: (2, 5)**

---

## 18.8 Collinearity

Points are **collinear** if they lie on the same line (same gradient between any two pairs).

### Example 18.13: Testing Collinearity
#### Problem
Are A(1, 1), B(3, 5), and C(5, 9) collinear?

#### Solution
Gradient AB = (5-1)/(3-1) = 4/2 = 2
Gradient BC = (9-5)/(5-3) = 4/2 = 2

Since gradients are equal, **points are collinear**.

---

## 18.9 Area of a Triangle

For triangle with vertices (x₁, y₁), (x₂, y₂), (x₃, y₃):

$$\text{Area} = \frac{1}{2}|x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)|$$

### Example 18.14: Area of Triangle
#### Problem
Find the area of triangle with vertices A(0, 0), B(6, 0), and C(4, 5).

#### Solution
$$\text{Area} = \frac{1}{2}|0(0-5) + 6(5-0) + 4(0-0)|$$
$$= \frac{1}{2}|0 + 30 + 0|$$
$$= \frac{1}{2}(30)$$
$$= \mathbf{15 \text{ square units}}$$

---

## 18.10 The Centroid

The **centroid** (center of mass) of a triangle is:

$$G = \left(\frac{x_1 + x_2 + x_3}{3}, \frac{y_1 + y_2 + y_3}{3}\right)$$

### Example 18.15: Finding Centroid
#### Problem
Find the centroid of triangle ABC where A(3, 1), B(6, 4), C(9, 1).

#### Solution
$$G = \left(\frac{3+6+9}{3}, \frac{1+4+1}{3}\right)$$
$$= \left(\frac{18}{3}, \frac{6}{3}\right)$$
$$= \mathbf{(6, 2)}$$

---

## Practice Exercises

1. Find the distance between:
   (a) A(3, 4) and B(7, 1)    (b) P(-2, 5) and Q(4, -3)

2. Find the midpoint of the segment joining:
   (a) (4, 8) and (10, 2)    (b) (-3, 5) and (7, -1)

3. Find the gradient of the line through:
   (a) (2, 3) and (6, 11)    (b) (5, 8) and (9, 2)

4. Find the equation of the line:
   (a) With gradient 4, passing through (2, 3)
   (b) Passing through (1, 5) and (3, 9)

5. Line L passes through (2, 3) with gradient 2. Line M is perpendicular to L and passes through (4, 1). Find the equation of M.

6. Find where the lines y = 3x - 2 and 2x + y = 8 intersect.

7. Determine whether A(1, 2), B(3, 6), and C(6, 12) are collinear.

8. Find the area of the triangle with vertices P(1, 1), Q(7, 3), R(3, 7).

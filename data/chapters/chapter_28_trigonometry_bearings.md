# Chapter 28: Trigonometry and Bearings

## 28.1 Introduction to Trigonometry

**Trigonometry** deals with relationships between angles and sides of triangles.

In a right triangle with angle θ:
- **Opposite** (opp): Side opposite to θ
- **Adjacent** (adj): Side next to θ (not hypotenuse)
- **Hypotenuse** (hyp): Longest side (opposite right angle)

---

## 28.2 Trigonometric Ratios

![Trigonometric Ratios](www/images/chapter_28/trig_ratios.svg)

$$\sin\theta = \frac{\text{opposite}}{\text{hypotenuse}}$$

$$\cos\theta = \frac{\text{adjacent}}{\text{hypotenuse}}$$

$$\tan\theta = \frac{\text{opposite}}{\text{adjacent}}$$

**Memory aid**: SOH CAH TOA

---

## 28.3 Finding Sides

### Example 28.1: Using Sine
#### Problem
In triangle ABC, angle B = 90°, angle A = 35°, c = 10 cm (hypotenuse). Find a (opposite to A).

![Triangle with a = ?](www/images/chapter_28/trig_example_sine.svg)

#### Solution
$$\sin 35° = \frac{a}{10}$$
$$a = 10 \times \sin 35°$$
$$a = 10 \times 0.5736$$
$$a = \mathbf{5.74 \text{ cm}}$$

### Example 28.2: Using Cosine
#### Problem
In triangle PQR, angle Q = 90°, angle P = 40°, r = 8 cm (adjacent to P). Find the hypotenuse p.

#### Solution
$$\cos 40° = \frac{8}{p}$$
$$p = \frac{8}{\cos 40°}$$
$$p = \frac{8}{0.766}$$
$$p = \mathbf{10.44 \text{ cm}}$$

### Example 28.3: Using Tangent
#### Problem
Find x in a right triangle where angle = 55° and adjacent = 6 cm.

#### Solution
$$\tan 55° = \frac{x}{6}$$
$$x = 6 \times \tan 55°$$
$$x = 6 \times 1.428$$
$$x = \mathbf{8.57 \text{ cm}}$$

---

## 28.4 Finding Angles

Use inverse functions: sin⁻¹, cos⁻¹, tan⁻¹

### Example 28.4: Finding an Angle
#### Problem
In a right triangle, opposite = 7 cm, adjacent = 10 cm. Find angle θ.

#### Solution
$$\tan\theta = \frac{7}{10} = 0.7$$
$$\theta = \tan^{-1}(0.7)$$
$$\theta = \mathbf{35.0°}$$

### Example 28.5: Using Sine Rule
#### Problem
In a right triangle, opposite = 5 cm, hypotenuse = 8 cm. Find angle θ.

#### Solution
$$\sin\theta = \frac{5}{8} = 0.625$$
$$\theta = \sin^{-1}(0.625)$$
$$\theta = \mathbf{38.7°}$$

---

## 28.5 Angles of Elevation and Depression

- **Angle of elevation**: Looking UP from horizontal
- **Angle of depression**: Looking DOWN from horizontal

### Example 28.6: Angle of Elevation
#### Problem
A building is 50 m tall. From a point 80 m away, find the angle of elevation to the top.

#### Solution
$$\tan\theta = \frac{50}{80} = 0.625$$
$$\theta = \tan^{-1}(0.625) = \mathbf{32.0°}$$

### Example 28.7: Height from Elevation
#### Problem
From a point 30 m from a tower, the angle of elevation to the top is 55°. Find the height.

![Angle of Elevation](www/images/chapter_28/angle_elevation.svg)

#### Solution
$$\tan 55° = \frac{h}{30}$$
$$h = 30 \times \tan 55°$$
$$h = 30 \times 1.428 = \mathbf{42.8 \text{ m}}$$

### Example 28.8: Angle of Depression
#### Problem
From the top of a 40 m cliff, a boat is seen at an angle of depression of 25°. How far is the boat from the base of the cliff?

![Angle of Depression](www/images/chapter_28/angle_depression.svg)

#### Solution
Angle of depression = 25°, so angle at boat = 25° (alternate)

$$\tan 25° = \frac{40}{d}$$
$$d = \frac{40}{\tan 25°} = \frac{40}{0.466} = \mathbf{85.8 \text{ m}}$$

---

## 28.6 Sine Rule

![Sine Rule Triangle](www/images/chapter_28/sine_rule.svg)

For any triangle ABC:
$$\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}$$

Use when you have:
- Two angles and a side
- Two sides and an angle opposite one of them

### Example 28.9: Sine Rule for Side
#### Problem
In triangle ABC, A = 50°, B = 70°, a = 8 cm. Find b.

#### Solution
$$\frac{a}{\sin A} = \frac{b}{\sin B}$$
$$\frac{8}{\sin 50°} = \frac{b}{\sin 70°}$$
$$b = \frac{8 \times \sin 70°}{\sin 50°}$$
$$b = \frac{8 \times 0.940}{0.766} = \mathbf{9.81 \text{ cm}}$$

### Example 28.10: Sine Rule for Angle
#### Problem
In triangle PQR, p = 7 cm, q = 10 cm, P = 35°. Find angle Q.

#### Solution
$$\frac{7}{\sin 35°} = \frac{10}{\sin Q}$$
$$\sin Q = \frac{10 \times \sin 35°}{7} = \frac{10 \times 0.574}{7} = 0.82$$
$$Q = \sin^{-1}(0.82) = \mathbf{55.1°}$$

---

## 28.7 Cosine Rule

![Cosine Rule Triangle](www/images/chapter_28/cosine_rule.svg)

$$a^2 = b^2 + c^2 - 2bc\cos A$$

Or for finding angles:
$$\cos A = \frac{b^2 + c^2 - a^2}{2bc}$$

Use when you have:
- Three sides (SSS)
- Two sides and included angle (SAS)

### Example 28.11: Cosine Rule for Side
#### Problem
In triangle ABC, b = 8 cm, c = 6 cm, A = 60°. Find a.

#### Solution
$$a^2 = 8^2 + 6^2 - 2(8)(6)\cos 60°$$
$$a^2 = 64 + 36 - 96(0.5)$$
$$a^2 = 100 - 48 = 52$$
$$a = \sqrt{52} = \mathbf{7.21 \text{ cm}}$$

### Example 28.12: Cosine Rule for Angle
#### Problem
In triangle ABC, a = 7, b = 8, c = 5. Find angle A.

#### Solution
$$\cos A = \frac{8^2 + 5^2 - 7^2}{2(8)(5)}$$
$$\cos A = \frac{64 + 25 - 49}{80} = \frac{40}{80} = 0.5$$
$$A = \cos^{-1}(0.5) = \mathbf{60°}$$

---

## 28.8 Area of Triangle

$$\text{Area} = \frac{1}{2}ab\sin C$$

### Example 28.13: Area Using Sine
#### Problem
Find the area of triangle ABC where a = 8 cm, b = 6 cm, C = 50°.

#### Solution
$$\text{Area} = \frac{1}{2} \times 8 \times 6 \times \sin 50°$$
$$= 24 \times 0.766$$
$$= \mathbf{18.4 \text{ cm}^2}$$

---

## 28.9 Bearings with Trigonometry

![Bearing Diagram](www/images/chapter_28/bearing_diagram.svg)

### Example 28.14: Bearing Problem
#### Problem
A ship sails 50 km on bearing 040° then 30 km on bearing 130°. Find the distance and bearing from the starting point.

#### Solution
This creates a triangle. The angle between paths = 130° - 40° = 90°.

Using Pythagoras:
$$d = \sqrt{50^2 + 30^2} = \sqrt{2500 + 900} = \sqrt{3400} = \mathbf{58.3 \text{ km}}$$

$$\tan\alpha = \frac{30}{50} = 0.6$$
$$\alpha = 31.0°$$

Bearing = 40° + 31° = **071°**

---

## Practice Exercises

1. In a right triangle with angle 40° and hypotenuse 12 cm, find:
   (a) The opposite side    (b) The adjacent side

2. Find the angle θ if:
   (a) sin θ = 0.6    (b) tan θ = 1.5

3. A tree casts a shadow 15 m long. The angle of elevation to the top is 38°. Find the height.

4. From the top of a 60 m building, the angle of depression to a car is 35°. Find the distance from the car to the base.

5. In triangle ABC, A = 55°, C = 70°, c = 12 cm. Find a using the sine rule.

6. In triangle PQR, p = 9 cm, q = 7 cm, R = 50°. Find r using the cosine rule.

7. Find angle B in triangle ABC where a = 6, b = 8, c = 10.

8. Find the area of triangle ABC where b = 10 cm, c = 7 cm, A = 65°.

9. A plane flies 200 km on bearing 060°, then 150 km on bearing 150°. Find the distance and bearing from the start.

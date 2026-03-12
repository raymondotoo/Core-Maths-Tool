# Chapter 9: Simultaneous Linear Equations

## 9.1 Introduction

**Simultaneous equations** are a set of two or more equations with two or more unknowns that must be solved together.

For two linear equations:
$$a_1x + b_1y = c_1$$
$$a_2x + b_2y = c_2$$

We find values of x and y that satisfy both equations.

---

## 9.2 Solving by Substitution Method

**Steps:**
1. Express one variable in terms of the other from one equation
2. Substitute into the second equation
3. Solve for the remaining variable
4. Substitute back to find the first variable

### Example 9.1: Simple Substitution
#### Problem
Solve: x + y = 10 ... (1)
       x - y = 4 ... (2)

#### Solution
From equation (1): x = 10 - y

Substitute into equation (2):
(10 - y) - y = 4
10 - 2y = 4
-2y = -6
y = 3

Substitute y = 3 into equation (1):
x + 3 = 10
x = 7

**Solution: x = 7, y = 3**

### Example 9.2: Coefficients ≠ 1
#### Problem
Solve: 2x + y = 7 ... (1)
       x - 3y = 0 ... (2)

#### Solution
From equation (2): x = 3y

Substitute into equation (1):
2(3y) + y = 7
6y + y = 7
7y = 7
y = 1

Substitute y = 1:
x = 3(1) = 3

**Solution: x = 3, y = 1**

---

## 9.3 Solving by Elimination Method

**Steps:**
1. Multiply equations to make coefficients of one variable equal
2. Add or subtract equations to eliminate that variable
3. Solve for the remaining variable
4. Substitute back to find the eliminated variable

### Example 9.3: Same Coefficient
#### Problem
Solve: 2x + 3y = 13 ... (1)
       2x - y = 5 ... (2)

#### Solution
Subtract equation (2) from equation (1):
(2x + 3y) - (2x - y) = 13 - 5
2x + 3y - 2x + y = 8
4y = 8
y = 2

Substitute y = 2 into equation (2):
2x - 2 = 5
2x = 7
x = 3.5

**Solution: x = 3.5, y = 2**

### Example 9.4: Different Coefficients
#### Problem
Solve: 3x + 2y = 12 ... (1)
       5x - 3y = 1 ... (2)

#### Solution
To eliminate y, multiply (1) by 3 and (2) by 2:
9x + 6y = 36 ... (3)
10x - 6y = 2 ... (4)

Add equations (3) and (4):
19x = 38
x = 2

Substitute x = 2 into equation (1):
3(2) + 2y = 12
6 + 2y = 12
2y = 6
y = 3

**Solution: x = 2, y = 3**

---

## 9.4 Solving by Graphical Method

**Steps:**
1. Write each equation in the form y = mx + c
2. Plot both lines on the same axes
3. Find the point of intersection

### Example 9.5: Graphical Solution
#### Problem
Solve graphically: x + y = 5 ... (1)
                   2x - y = 4 ... (2)

#### Solution
Rewrite equations:
From (1): y = 5 - x
From (2): y = 2x - 4

Create tables of values and plot:

For y = 5 - x:
| x | 0 | 2 | 5 |
|---|---|---|---|
| y | 5 | 3 | 0 |

For y = 2x - 4:
| x | 0 | 2 | 4 |
|---|---|---|---|
| y | -4 | 0 | 4 |

The lines intersect at **(3, 2)**

**Solution: x = 3, y = 2**

---

## 9.5 Word Problems Leading to Simultaneous Equations

### Example 9.6: Number Problem
#### Problem
The sum of two numbers is 25 and their difference is 7. Find the numbers.

#### Solution
Let the numbers be x and y.

Equations:
x + y = 25 ... (1)
x - y = 7 ... (2)

Add equations:
2x = 32
x = 16

Substitute into (1):
16 + y = 25
y = 9

**The numbers are 16 and 9**

### Example 9.7: Age Problem
#### Problem
A man is three times as old as his son. In 10 years, he will be twice as old as his son. Find their present ages.

#### Solution
Let man's age = m, son's age = s

Current ages:
m = 3s ... (1)

In 10 years:
m + 10 = 2(s + 10) ... (2)

Substitute (1) into (2):
3s + 10 = 2s + 20
s = 10

From (1): m = 3(10) = 30

**The man is 30 years old, the son is 10 years old**

### Example 9.8: Money Problem
#### Problem
5 oranges and 3 apples cost GH₵19. 3 oranges and 5 apples cost GH₵21. Find the cost of one orange and one apple.

#### Solution
Let orange cost = x, apple cost = y

Equations:
5x + 3y = 19 ... (1)
3x + 5y = 21 ... (2)

Multiply (1) by 5 and (2) by 3:
25x + 15y = 95 ... (3)
9x + 15y = 63 ... (4)

Subtract (4) from (3):
16x = 32
x = 2

Substitute into (1):
5(2) + 3y = 19
10 + 3y = 19
3y = 9
y = 3

**Orange costs GH₵2, Apple costs GH₵3**

---

## 9.6 Special Cases

### No Solution (Parallel Lines)
When the equations represent parallel lines, there is no intersection.

### Example 9.9: No Solution
#### Problem
Solve: 2x + y = 5
       4x + 2y = 8

#### Solution
Multiply first equation by 2:
4x + 2y = 10

But second equation says: 4x + 2y = 8

This is a contradiction (10 ≠ 8), so there is **no solution**.

### Infinite Solutions (Same Line)
When both equations represent the same line.

### Example 9.10: Infinite Solutions
#### Problem
Solve: x + 2y = 4
       2x + 4y = 8

#### Solution
The second equation is exactly twice the first.
Both represent the same line.

**Infinite solutions**: Any point on the line x + 2y = 4

---

## 9.7 Three Unknowns (Extension)

### Example 9.11: Three Variables
#### Problem
Solve: x + y + z = 6 ... (1)
       2x - y + z = 3 ... (2)
       x + 2y - z = 1 ... (3)

#### Solution
Add (1) and (2):
3x + 2z = 9 ... (4)

Add (1) and (3):
2x + 3y = 7 ... (5)

From (1) - (3):
-y + 2z = 5 ... (6)

Continue elimination to find:
**x = 1, y = 2, z = 3**

---

## Practice Exercises

1. Solve by substitution:
   (a) x + y = 7, x - y = 3
   (b) 2x + y = 8, x - y = 1

2. Solve by elimination:
   (a) 3x + 2y = 11, 2x + 3y = 9
   (b) 4x - 3y = 7, 3x + 2y = 18

3. Solve graphically: x + y = 4, x - y = 2

4. The sum of two numbers is 30. Three times the smaller exceeds the larger by 10. Find the numbers.

5. A rectangle has perimeter 32 cm. The length is 4 cm more than the width. Find the dimensions.

6. 2 pens and 3 pencils cost GH₵8. 3 pens and 2 pencils cost GH₵12. Find the cost of 1 pen and 1 pencil.

7. In 5 years, a father will be 3 times as old as his daughter. 3 years ago, he was 5 times as old. Find their present ages.

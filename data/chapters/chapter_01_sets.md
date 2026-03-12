# Chapter 1: Sets

## 1.1 Basic Concepts of Sets

A **set** is a well-defined collection of distinct objects. The objects in a set are called **elements** or **members** of the set.

Sets are usually denoted by capital letters such as A, B, C, P, Q, etc. The elements of a set are enclosed in curly braces { }.

**Notation:**
- The symbol ∈ means "is an element of" or "belongs to"
- The symbol ∉ means "is not an element of" or "does not belong to"

### Example 1.1: Set Membership
#### Problem
If A = {2, 4, 6, 8, 10}, determine whether:
(a) 4 ∈ A
(b) 5 ∈ A

#### Solution
(a) Since 4 is in the set A, we write **4 ∈ A** (4 belongs to A)

(b) Since 5 is not in the set A, we write **5 ∉ A** (5 does not belong to A)

---

## 1.2 Types of Sets

### Finite Sets
A set with a countable number of elements is called a **finite set**.

**Example:** A = {1, 3, 5, 7, 9} is a finite set with 5 elements.

### Infinite Sets
A set whose elements cannot be counted (goes on indefinitely) is called an **infinite set**.

**Example:** N = {1, 2, 3, 4, 5, ...} (the set of natural numbers) is an infinite set.

### Empty Set (Null Set)
A set with no elements is called an **empty set** or **null set**. It is denoted by ∅ or { }.

**Example:** The set of months with 32 days is an empty set.

### Unit Set (Singleton Set)
A set with exactly one element is called a **unit set** or **singleton set**.

**Example:** P = {5} is a unit set.

### Example 1.2: Identifying Types of Sets
#### Problem
Classify each of the following sets:
(a) A = {x : x is a prime number less than 10}
(b) B = {x : x² = 9, x is a natural number}
(c) C = {x : x is an even number}

#### Solution
(a) A = {2, 3, 5, 7} — This is a **finite set** with 4 elements.

(b) B = {3} — This is a **unit set** (since only 3² = 9 for natural numbers).

(c) C = {2, 4, 6, 8, ...} — This is an **infinite set**.

---

## 1.3 Set Notation Methods

There are two main ways to describe a set:

### Roster Method (Listing Method)
List all the elements of the set within curly braces.

**Example:** A = {a, e, i, o, u} (the set of vowels)

### Set-Builder Notation
Describe the elements by stating a property they must satisfy.

**Example:** A = {x : x is a vowel} or A = {x | x is a vowel}

### Example 1.3: Converting Between Notations
#### Problem
(a) Write A = {x : x is a positive integer less than 6} in roster form.
(b) Write B = {2, 4, 6, 8, 10} in set-builder notation.

#### Solution
(a) A = {1, 2, 3, 4, 5}

(b) B = {x : x is an even positive integer less than or equal to 10}
    or B = {x : x = 2n, where n = 1, 2, 3, 4, 5}

---

## 1.4 Subsets

If every element of set A is also an element of set B, then A is called a **subset** of B. This is written as A ⊆ B.

![Subset Diagram](www/images/chapter_01/venn_subset.svg)

**Key Points:**
- Every set is a subset of itself: A ⊆ A
- The empty set is a subset of every set: ∅ ⊆ A
- If a set has n elements, it has 2ⁿ subsets

### Proper Subsets
If A ⊆ B and A ≠ B, then A is called a **proper subset** of B, written as A ⊂ B.

### Example 1.4: Finding Subsets
#### Problem
If C = {0, 1}, find all subsets of C.

#### Solution
The set C has 2 elements, so it has 2² = 4 subsets.

The subsets are: **∅, {0}, {1}, {0, 1}**

### Example 1.5: Equal Sets
#### Problem
If A = {1, 3, 5, 7} and B = {3, n, 5, 1}, find the value of n if A = B.

#### Solution
For A = B, both sets must have exactly the same elements.

Comparing: A has the element 7, but B has n in that position.

Therefore, **n = 7**

---

## 1.5 Set Operations

### Universal Set (U)
The universal set is the set containing all elements under consideration. It is usually denoted by U or ε.

### Intersection (A ∩ B)
The intersection of sets A and B is the set of elements that belong to **both** A and B.

![Intersection Diagram](www/images/chapter_01/venn_intersection.svg)

$$A \cap B = \{x : x \in A \text{ and } x \in B\}$$

### Example 1.6: Finding Intersection
#### Problem
If P = {3, 6, 9, 12} and Q = {1, 3, 5, 7, 9}, find P ∩ Q.

#### Solution
Elements in both P and Q: 3 and 9

**P ∩ Q = {3, 9}**

### Union (A ∪ B)
The union of sets A and B is the set of elements that belong to A **or** B (or both).

![Union Diagram](www/images/chapter_01/venn_union.svg)

$$A \cup B = \{x : x \in A \text{ or } x \in B\}$$

### Example 1.7: Finding Union
#### Problem
If A = {1, 2, 3, 5, 7} and B = {3, 4, 5, 8, 9}, find A ∪ B.

#### Solution
Combine all elements from both sets (without repetition):

**A ∪ B = {1, 2, 3, 4, 5, 7, 8, 9}**

### Complement (A')
The complement of set A is the set of all elements in the universal set U that are **not** in A.

![Complement Diagram](www/images/chapter_01/venn_complement.svg)

$$A' = \{x : x \in U \text{ and } x \notin A\}$$

### Example 1.8: Finding Complement
#### Problem
If U = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10} and A = {2, 4, 6, 8}, find A'.

#### Solution
Elements in U but not in A:

**A' = {1, 3, 5, 7, 9, 10}**

---

## 1.6 Venn Diagrams

A **Venn diagram** is a pictorial representation of sets using circles (or other closed curves) inside a rectangle representing the universal set.

![Basic Two-Set Venn Diagram](www/images/chapter_01/venn_two_sets.svg)

### Two-Set Venn Diagram Regions:
- **Region I**: Elements only in A (written as A ∩ B')
- **Region II**: Elements in both A and B (written as A ∩ B)
- **Region III**: Elements only in B (written as A' ∩ B)
- **Region IV**: Elements in neither A nor B (written as (A ∪ B)')

### Example 1.9: Venn Diagram
#### Problem
Given U = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}, A = {1, 2, 3, 4, 5}, and B = {3, 4, 5, 6, 7}, find:
(a) A ∩ B
(b) A ∪ B
(c) (A ∪ B)'

#### Solution
(a) **A ∩ B = {3, 4, 5}** (elements in both sets)

(b) **A ∪ B = {1, 2, 3, 4, 5, 6, 7}** (elements in either set)

(c) **(A ∪ B)' = {8, 9, 10}** (elements in U but not in A ∪ B)

---

## 1.7 Two-Set Problems

For two sets A and B with a universal set U:

$$n(A \cup B) = n(A) + n(B) - n(A \cap B)$$

$$n(U) = n(A) + n(B) - n(A \cap B) + n(A \cup B)'$$

### Example 1.10: Two-Set Word Problem
#### Problem
In a class of 40 students, 25 study Mathematics, 18 study Physics, and 5 study neither subject. How many students study both subjects?

#### Solution
Let M = students studying Mathematics, P = students studying Physics

**Given:**
- n(U) = 40
- n(M) = 25
- n(P) = 18
- n(M ∪ P)' = 5

**Step 1:** Find n(M ∪ P)
$$n(M \cup P) = n(U) - n(M \cup P)' = 40 - 5 = 35$$

**Step 2:** Use the formula to find n(M ∩ P)
$$n(M \cup P) = n(M) + n(P) - n(M \cap P)$$
$$35 = 25 + 18 - n(M \cap P)$$
$$n(M \cap P) = 43 - 35 = 8$$

**Answer: 8 students study both Mathematics and Physics**

### Example 1.11: Two-Set Problem with Venn Diagram
#### Problem
In a survey of 100 people, 60 read newspaper A, 50 read newspaper B, and 20 read both newspapers. Find:
(a) How many read only newspaper A?
(b) How many read only newspaper B?
(c) How many read neither newspaper?

![Two-Set Example](www/images/chapter_01/venn_example.svg)

#### Solution
Let n(A ∩ B) = 20

**(a)** Only A = n(A) - n(A ∩ B) = 60 - 20 = **40 people**

**(b)** Only B = n(B) - n(A ∩ B) = 50 - 20 = **30 people**

**(c)** Neither = n(U) - n(A ∪ B)
n(A ∪ B) = 40 + 20 + 30 = 90
Neither = 100 - 90 = **10 people**

---

## 1.8 Three-Set Problems

For three sets A, B, and C:

![Three-Set Venn Diagram](www/images/chapter_01/venn_three_sets.svg)

$$n(A \cup B \cup C) = n(A) + n(B) + n(C) - n(A \cap B) - n(A \cap C) - n(B \cap C) + n(A \cap B \cap C)$$

### Example 1.12: Three-Set Problem
#### Problem
In a school of 200 students:
- 120 play Football
- 90 play Basketball
- 70 play Volleyball
- 50 play both Football and Basketball
- 40 play both Football and Volleyball
- 30 play both Basketball and Volleyball
- 20 play all three sports

Find:
(a) How many play at least one sport?
(b) How many play exactly one sport?
(c) How many play none of the three sports?

#### Solution
Let F = Football, B = Basketball, V = Volleyball

**Given:** n(F) = 120, n(B) = 90, n(V) = 70
n(F ∩ B) = 50, n(F ∩ V) = 40, n(B ∩ V) = 30, n(F ∩ B ∩ V) = 20

**(a)** Using the formula:
$$n(F \cup B \cup V) = 120 + 90 + 70 - 50 - 40 - 30 + 20 = 180$$
**180 students play at least one sport**

**(b)** For exactly one sport:
- Only F = 120 - 50 - 40 + 20 = 50
- Only B = 90 - 50 - 30 + 20 = 30
- Only V = 70 - 40 - 30 + 20 = 20
Total = 50 + 30 + 20 = **100 students**

**(c)** None = n(U) - n(F ∪ B ∪ V) = 200 - 180 = **20 students**

---

## Practice Exercises

1. If A = {1, 2, 3, 4, 5} and B = {2, 4, 6, 8}, find A ∩ B and A ∪ B.

2. Given U = {1, 2, 3, ..., 10}, A = {odd numbers}, B = {prime numbers}, find:
   (a) A'    (b) B'    (c) A ∩ B    (d) (A ∪ B)'

3. In a class of 50 students, 30 offer Economics, 25 offer Government, and 10 offer both. How many offer neither subject?

4. List all subsets of the set {a, b, c}.

5. If P = {x : x is a factor of 12} and Q = {x : x is a factor of 18}, find P ∩ Q.

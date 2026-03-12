# Chapter 2: Logical Reasoning

## 2.1 Introduction to Statements

A **statement** (or proposition) is a declarative sentence that is either true or false, but not both.

**Examples of statements:**
- "Accra is the capital of Ghana" (True)
- "5 + 3 = 9" (False)
- "All squares are rectangles" (True)

**Non-statements:**
- "What time is it?" (Question)
- "Close the door" (Command)
- "x + 2 = 5" (Open sentence - truth depends on x)

---

## 2.2 Negation of Statements

The **negation** of a statement p is a statement that is true when p is false, and false when p is true. The negation of p is written as **¬p** or **~p** or **p'**.

### Truth Table for Negation:
| p | ¬p |
|---|---|
| T | F |
| F | T |

### Example 2.1: Writing Negations
#### Problem
Write the negation of each statement:
(a) p: "It is raining"
(b) q: "All students passed the exam"
(c) r: "Some birds can fly"

#### Solution
(a) ¬p: "**It is not raining**"

(b) ¬q: "**Not all students passed the exam**" or "**Some students did not pass the exam**"

(c) ¬r: "**No birds can fly**"

---

## 2.3 Compound Statements

### Conjunction (AND)
The conjunction of statements p and q, written as **p ∧ q**, is true only when both p and q are true.

| p | q | p ∧ q |
|---|---|-------|
| T | T | T |
| T | F | F |
| F | T | F |
| F | F | F |

### Disjunction (OR)
The disjunction of statements p and q, written as **p ∨ q**, is true when at least one of p or q is true.

| p | q | p ∨ q |
|---|---|-------|
| T | T | T |
| T | F | T |
| F | T | T |
| F | F | F |

### Example 2.2: Compound Statements
#### Problem
Let p: "John is tall" and q: "John is smart"
Write the following in words:
(a) p ∧ q
(b) p ∨ q
(c) ¬p ∧ q

#### Solution
(a) p ∧ q: "**John is tall and John is smart**"

(b) p ∨ q: "**John is tall or John is smart**"

(c) ¬p ∧ q: "**John is not tall and John is smart**"

---

## 2.4 Implication (Conditional Statements)

An **implication** or **conditional statement** is of the form "If p, then q", written as **p → q** or **p ⇒ q**.

- p is called the **hypothesis** (or antecedent)
- q is called the **conclusion** (or consequent)

### Truth Table for Implication:
| p | q | p → q |
|---|---|-------|
| T | T | T |
| T | F | F |
| F | T | T |
| F | F | T |

**Note:** An implication is only false when the hypothesis is true but the conclusion is false.

### Example 2.3: Conditional Statements
#### Problem
Determine the truth value of:
"If 2 + 2 = 4, then 3 + 3 = 6"

#### Solution
Let p: "2 + 2 = 4" (True)
Let q: "3 + 3 = 6" (True)

Since p is True and q is True, **p → q is True**.

---

## 2.5 Converse, Inverse, and Contrapositive

For a conditional statement p → q:

- **Converse:** q → p (If q, then p)
- **Inverse:** ¬p → ¬q (If not p, then not q)
- **Contrapositive:** ¬q → ¬p (If not q, then not p)

**Important:** A conditional statement and its contrapositive always have the same truth value.

### Example 2.4: Related Statements
#### Problem
Given: "If a number is divisible by 6, then it is divisible by 3"
Write the: (a) Converse (b) Inverse (c) Contrapositive

#### Solution
Let p: "A number is divisible by 6"
Let q: "A number is divisible by 3"

(a) **Converse (q → p):** "If a number is divisible by 3, then it is divisible by 6"

(b) **Inverse (¬p → ¬q):** "If a number is not divisible by 6, then it is not divisible by 3"

(c) **Contrapositive (¬q → ¬p):** "If a number is not divisible by 3, then it is not divisible by 6"

---

## 2.6 Biconditional Statements

A **biconditional statement** is of the form "p if and only if q", written as **p ↔ q** or **p ⇔ q**.

This is equivalent to (p → q) ∧ (q → p).

### Truth Table for Biconditional:
| p | q | p ↔ q |
|---|---|-------|
| T | T | T |
| T | F | F |
| F | T | F |
| F | F | T |

---

## 2.7 Validity of Arguments

An **argument** consists of premises (given statements) and a conclusion. An argument is **valid** if the conclusion follows logically from the premises.

### Common Valid Argument Forms:

**Modus Ponens:**
- Premise 1: p → q
- Premise 2: p
- Conclusion: q

**Modus Tollens:**
- Premise 1: p → q
- Premise 2: ¬q
- Conclusion: ¬p

**Syllogism (Chain Rule):**
- Premise 1: p → q
- Premise 2: q → r
- Conclusion: p → r

### Example 2.5: Testing Validity
#### Problem
Test the validity of this argument:
- Premise 1: All students work hard
- Premise 2: Kofi is a student
- Conclusion: Kofi works hard

#### Solution
Let S = {students}, W = {people who work hard}

From Premise 1: S ⊆ W (All students are in the set of people who work hard)
From Premise 2: Kofi ∈ S

Therefore: Kofi ∈ W (Kofi works hard)

**The argument is VALID.**

### Example 2.6: Invalid Argument
#### Problem
Test the validity:
- Premise 1: All dogs are animals
- Premise 2: A cat is an animal
- Conclusion: A cat is a dog

#### Solution
Let D = {dogs}, A = {animals}

From Premise 1: D ⊆ A
From Premise 2: cat ∈ A

We cannot conclude that cat ∈ D because being an animal doesn't mean being a dog.

**The argument is INVALID.**

---

## 2.8 Truth Tables for Complex Statements

### Example 2.7: Constructing Truth Tables
#### Problem
Construct the truth table for: (p ∧ q) → ¬p

#### Solution
| p | q | p ∧ q | ¬p | (p ∧ q) → ¬p |
|---|---|-------|-----|---------------|
| T | T | T | F | F |
| T | F | F | F | T |
| F | T | F | T | T |
| F | F | F | T | T |

---

## Practice Exercises

1. Write the negation of: "All parallelograms are quadrilaterals"

2. Construct the truth table for: p ∨ (q ∧ ¬p)

3. Given p: "It is hot" and q: "I will go swimming"
   Express in symbols: "If it is hot, then I will go swimming"

4. Write the converse, inverse, and contrapositive of:
   "If a triangle is equilateral, then it is isosceles"

5. Determine whether the following argument is valid:
   - All rectangles have four right angles
   - A square is a rectangle
   - Therefore, a square has four right angles

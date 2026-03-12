# Chapter 22: Probability

## 22.1 Introduction to Probability

**Probability** measures the likelihood of an event occurring.

$$P(E) = \frac{\text{Number of favorable outcomes}}{\text{Total number of possible outcomes}}$$

**Key terms:**
- **Experiment**: An activity with uncertain outcomes
- **Sample space (S)**: Set of all possible outcomes
- **Event (E)**: A subset of the sample space

**Probability range**: 0 ≤ P(E) ≤ 1
- P(E) = 0: Impossible event
- P(E) = 1: Certain event

---

## 22.2 Simple Probability

### Example 22.1: Coin Toss
#### Problem
A fair coin is tossed. Find the probability of getting a head.

#### Solution
Sample space S = {H, T}
Favorable outcomes = {H} = 1

$$P(H) = \frac{1}{2} = \mathbf{0.5}$$

### Example 22.2: Dice Roll
#### Problem
A fair die is rolled. Find the probability of getting:
(a) a 5    (b) an even number    (c) a number less than 4

#### Solution
Sample space S = {1, 2, 3, 4, 5, 6}, n(S) = 6

(a) P(5) = 1/6

(b) Even numbers = {2, 4, 6}
    P(even) = 3/6 = **1/2**

(c) Less than 4 = {1, 2, 3}
    P(< 4) = 3/6 = **1/2**

---

## 22.3 Complement of an Event

If A is an event, then A' (not A) is its complement.

$$P(A') = 1 - P(A)$$

### Example 22.3: Complement
#### Problem
The probability that it will rain tomorrow is 0.3. Find the probability that it will not rain.

#### Solution
P(rain) = 0.3
P(no rain) = 1 - 0.3 = **0.7**

---

## 22.4 Addition Law (OR)

For two events A and B:

$$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$

**Mutually exclusive events** (cannot happen together):
$$P(A \cup B) = P(A) + P(B)$$

### Example 22.4: Mutually Exclusive
#### Problem
A card is drawn from a standard deck. Find P(King or Queen).

#### Solution
P(King) = 4/52, P(Queen) = 4/52
Since King and Queen are mutually exclusive:
P(King or Queen) = 4/52 + 4/52 = 8/52 = **2/13**

### Example 22.5: Not Mutually Exclusive
#### Problem
A card is drawn. Find P(Heart or King).

#### Solution
P(Heart) = 13/52, P(King) = 4/52
P(Heart AND King) = 1/52 (King of Hearts)

P(Heart or King) = 13/52 + 4/52 - 1/52 = 16/52 = **4/13**

---

## 22.5 Multiplication Law (AND)

**Independent events** (one doesn't affect the other):
$$P(A \cap B) = P(A) \times P(B)$$

**Dependent events**:
$$P(A \cap B) = P(A) \times P(B|A)$$

where P(B|A) = probability of B given A has occurred.

### Example 22.6: Independent Events
#### Problem
A coin is tossed and a die is rolled. Find P(Head and 6).

#### Solution
P(Head) = 1/2, P(6) = 1/6
P(Head and 6) = 1/2 × 1/6 = **1/12**

### Example 22.7: Dependent Events
#### Problem
A bag contains 5 red and 3 blue balls. Two balls are drawn without replacement. Find P(both red).

#### Solution
P(1st red) = 5/8
P(2nd red | 1st red) = 4/7

P(both red) = 5/8 × 4/7 = 20/56 = **5/14**

---

## 22.6 Tree Diagrams

### Example 22.8: Tree Diagram
#### Problem
Two coins are tossed. Use a tree diagram to find all probabilities.

#### Solution
```
        First Coin    Second Coin    Outcome    Probability
                         H            HH        1/2 × 1/2 = 1/4
             H
        1/2             T            HT        1/2 × 1/2 = 1/4
                         H            TH        1/2 × 1/2 = 1/4
             T
        1/2             T            TT        1/2 × 1/2 = 1/4
```

P(at least one head) = P(HH) + P(HT) + P(TH) = **3/4**

### Example 22.9: Without Replacement
#### Problem
A bag has 3 red and 2 white balls. Two balls drawn without replacement. Find P(different colors).

#### Solution
P(RW) = 3/5 × 2/4 = 6/20
P(WR) = 2/5 × 3/4 = 6/20

P(different colors) = 6/20 + 6/20 = 12/20 = **3/5**

---

## 22.7 Expected Value

Expected value is the long-run average outcome:

$$E(X) = \sum x_i \times P(x_i)$$

### Example 22.10: Expected Value
#### Problem
In a game, you win GH₵10 if you roll a 6, and lose GH₵2 otherwise. Find the expected value.

#### Solution
P(win 10) = 1/6
P(lose 2) = 5/6

E(X) = 10(1/6) + (-2)(5/6)
     = 10/6 - 10/6
     = 0

**Expected value = GH₵0** (fair game)

---

## 22.8 Probability Tables

### Example 22.11: Two-Way Table
#### Problem
A survey of 100 students:
|  | Male | Female | Total |
|--|------|--------|-------|
| Science | 25 | 15 | 40 |
| Arts | 20 | 40 | 60 |
| Total | 45 | 55 | 100 |

Find: (a) P(Male)  (b) P(Science)  (c) P(Male and Science)  (d) P(Male | Science)

#### Solution
(a) P(Male) = 45/100 = **0.45**

(b) P(Science) = 40/100 = **0.4**

(c) P(Male and Science) = 25/100 = **0.25**

(d) P(Male | Science) = 25/40 = **0.625**

---

## 22.9 Conditional Probability

$$P(A|B) = \frac{P(A \cap B)}{P(B)}$$

### Example 22.12: Conditional Probability
#### Problem
P(A) = 0.4, P(B) = 0.5, P(A ∩ B) = 0.2. Find P(A|B).

#### Solution
$$P(A|B) = \frac{P(A \cap B)}{P(B)} = \frac{0.2}{0.5} = \mathbf{0.4}$$

---

## Practice Exercises

1. A letter is chosen at random from "STATISTICS". Find:
   (a) P(S)    (b) P(vowel)    (c) P(not T)

2. A bag contains 4 red, 5 blue, and 6 green balls. One ball is drawn. Find:
   (a) P(red)    (b) P(red or blue)    (c) P(not green)

3. A die is rolled twice. Find:
   (a) P(two sixes)    (b) P(sum is 7)

4. Two cards are drawn from a deck without replacement. Find P(both aces).

5. In a class, 60% are girls. 70% of girls and 40% of boys passed a test. A student is chosen at random.
   (a) Find P(passed)
   (b) Given the student passed, find P(girl)

6. A bag has 8 white and 4 black balls. Two are drawn without replacement. Find:
   (a) P(both white)    (b) P(one of each color)

7. In a lottery, tickets cost GH₵5. There is a 1/1000 chance of winning GH₵2000. Find the expected value.

8. Draw a tree diagram for three coin tosses. Find P(exactly 2 heads).

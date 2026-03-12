// WebAssign-Style Quiz Data for Core Mathematics
// Each chapter has a bank of questions that are randomly selected

const quizBank = {
    chapter1: {
        title: "Sets",
        questions: [
            {
                type: "multiple",
                question: "If A = {1, 2, 3, 4, 5}, which statement is TRUE?",
                options: ["6 ∈ A", "3 ∈ A", "0 ∈ A", "7 ∈ A"],
                correct: 1,
                explanation: "3 is an element of set A = {1, 2, 3, 4, 5}"
            },
            {
                type: "multiple",
                question: "Which of the following is an empty set?",
                options: ["{0}", "{ }", "{∅}", "{1, 2}"],
                correct: 1,
                explanation: "An empty set has no elements and is denoted by { } or ∅"
            },
            {
                type: "multiple",
                question: "If set A has 4 elements, how many subsets does A have?",
                options: ["4", "8", "16", "32"],
                correct: 2,
                explanation: "A set with n elements has 2ⁿ subsets. 2⁴ = 16"
            },
            {
                type: "numeric",
                question: "If n(A) = 12, n(B) = 8, and n(A ∩ B) = 3, find n(A ∪ B).",
                answer: 17,
                tolerance: 0,
                explanation: "n(A ∪ B) = n(A) + n(B) - n(A ∩ B) = 12 + 8 - 3 = 17"
            },
            {
                type: "multiple",
                question: "A ⊆ B means:",
                options: ["A contains B", "A and B are equal", "Every element of A is in B", "A and B have no common elements"],
                correct: 2,
                explanation: "A ⊆ B means A is a subset of B; every element of A is also in B"
            },
            {
                type: "multiple",
                question: "The complement of set A is denoted by:",
                options: ["A + B", "A'", "A × B", "A - B"],
                correct: 1,
                explanation: "A' (A prime) represents the complement of set A"
            },
            {
                type: "numeric",
                question: "In a class of 40 students, 25 study Math and 20 study Science. If 10 study both, how many study neither?",
                answer: 5,
                tolerance: 0,
                explanation: "n(M ∪ S) = 25 + 20 - 10 = 35. Neither = 40 - 35 = 5"
            }
        ]
    },
    chapter2: {
        title: "Logical Reasoning",
        questions: [
            {
                type: "multiple",
                question: "The negation of 'All birds can fly' is:",
                options: ["No birds can fly", "Some birds cannot fly", "All birds cannot fly", "Birds can fly"],
                correct: 1,
                explanation: "The negation of 'All A are B' is 'Some A are not B'"
            },
            {
                type: "multiple",
                question: "If p → q is true and p is true, then:",
                options: ["q is false", "q is true", "q is unknown", "p is false"],
                correct: 1,
                explanation: "This is Modus Ponens: if p implies q and p is true, then q must be true"
            },
            {
                type: "multiple",
                question: "A statement that is always true is called:",
                options: ["Contradiction", "Contingency", "Tautology", "Fallacy"],
                correct: 2,
                explanation: "A tautology is a statement that is true under all circumstances"
            },
            {
                type: "multiple",
                question: "The contrapositive of p → q is:",
                options: ["q → p", "¬p → ¬q", "¬q → ¬p", "p ∧ q"],
                correct: 2,
                explanation: "The contrapositive ¬q → ¬p is logically equivalent to p → q"
            },
            {
                type: "multiple",
                question: "p ∧ q is TRUE only when:",
                options: ["Both p and q are true", "Either p or q is true", "Both p and q are false", "p is true and q is false"],
                correct: 0,
                explanation: "The conjunction (AND) is true only when both statements are true"
            }
        ]
    },
    chapter3: {
        title: "Modulo Arithmetic",
        questions: [
            {
                type: "numeric",
                question: "Find 17 mod 5",
                answer: 2,
                tolerance: 0,
                explanation: "17 ÷ 5 = 3 remainder 2, so 17 mod 5 = 2"
            },
            {
                type: "numeric",
                question: "Calculate (8 + 7) mod 6",
                answer: 3,
                tolerance: 0,
                explanation: "8 + 7 = 15, and 15 mod 6 = 3 (remainder when 15 ÷ 6)"
            },
            {
                type: "numeric",
                question: "If today is Monday (day 1), what day is it after 100 days? (1=Mon, 2=Tue, ..., 7=Sun)",
                answer: 3,
                tolerance: 0,
                explanation: "100 mod 7 = 2, so 1 + 2 = 3 (Wednesday)"
            },
            {
                type: "multiple",
                question: "In mod 12 arithmetic, 9 + 5 equals:",
                options: ["14", "2", "3", "1"],
                correct: 1,
                explanation: "9 + 5 = 14, and 14 mod 12 = 2"
            },
            {
                type: "numeric",
                question: "Find x if 3x ≡ 6 (mod 9)",
                answer: 2,
                tolerance: 0,
                explanation: "3(2) = 6 ≡ 6 (mod 9)"
            }
        ]
    },
    chapter4: {
        title: "Binary Operations",
        questions: [
            {
                type: "multiple",
                question: "A binary operation on set S assigns to each pair of elements in S:",
                options: ["Two elements", "One element in S", "One element not in S", "No elements"],
                correct: 1,
                explanation: "A binary operation combines two elements to produce exactly one element in the same set"
            },
            {
                type: "multiple",
                question: "If a * b = a + b - ab, find 2 * 3:",
                options: ["5", "-1", "1", "6"],
                correct: 1,
                explanation: "2 * 3 = 2 + 3 - (2)(3) = 5 - 6 = -1"
            },
            {
                type: "multiple",
                question: "An operation * is commutative if:",
                options: ["a * b = b * a", "(a * b) * c = a * (b * c)", "a * e = a", "a * a⁻¹ = e"],
                correct: 0,
                explanation: "Commutativity means the order doesn't matter: a * b = b * a"
            },
            {
                type: "numeric",
                question: "If a ⊕ b = 2a + 3b, calculate 4 ⊕ 2",
                answer: 14,
                tolerance: 0,
                explanation: "4 ⊕ 2 = 2(4) + 3(2) = 8 + 6 = 14"
            },
            {
                type: "multiple",
                question: "The identity element e for operation * satisfies:",
                options: ["a * b = e", "a * e = a for all a", "e * e = e only", "a * a = e"],
                correct: 1,
                explanation: "The identity element leaves any element unchanged: a * e = e * a = a"
            }
        ]
    },
    chapter5: {
        title: "Numeration Systems",
        questions: [
            {
                type: "numeric",
                question: "Convert 1011₂ to base 10",
                answer: 11,
                tolerance: 0,
                explanation: "1011₂ = 1×8 + 0×4 + 1×2 + 1×1 = 8 + 2 + 1 = 11"
            },
            {
                type: "multiple",
                question: "Convert 25₁₀ to binary:",
                options: ["10011", "11001", "10101", "11011"],
                correct: 1,
                explanation: "25 = 16+8+1 = 11001₂"
            },
            {
                type: "numeric",
                question: "Convert 34₈ to base 10",
                answer: 28,
                tolerance: 0,
                explanation: "34₈ = 3×8 + 4×1 = 24 + 4 = 28"
            },
            {
                type: "multiple",
                question: "What is the base 10 equivalent of A in hexadecimal?",
                options: ["9", "10", "11", "15"],
                correct: 1,
                explanation: "In hexadecimal, A = 10, B = 11, C = 12, D = 13, E = 14, F = 15"
            },
            {
                type: "numeric",
                question: "Add in binary: 1101 + 1011 (give answer in base 10)",
                answer: 24,
                tolerance: 0,
                explanation: "1101₂ = 13, 1011₂ = 11, sum = 24 (or 11000₂)"
            }
        ]
    },
    chapter6: {
        title: "Algebraic Expressions",
        questions: [
            {
                type: "multiple",
                question: "Simplify: 3x + 5x - 2x",
                options: ["6x", "8x", "10x", "4x"],
                correct: 0,
                explanation: "Combine like terms: 3x + 5x - 2x = 6x"
            },
            {
                type: "multiple",
                question: "Expand: (x + 3)(x - 2)",
                options: ["x² + x - 6", "x² - x - 6", "x² + 5x - 6", "x² - 5x + 6"],
                correct: 0,
                explanation: "(x+3)(x-2) = x² - 2x + 3x - 6 = x² + x - 6"
            },
            {
                type: "numeric",
                question: "If 2x + 5 = 17, find x",
                answer: 6,
                tolerance: 0,
                explanation: "2x = 17 - 5 = 12, so x = 6"
            },
            {
                type: "multiple",
                question: "Factorize: x² - 9",
                options: ["(x-3)(x-3)", "(x+3)(x+3)", "(x+3)(x-3)", "(x-9)(x+1)"],
                correct: 2,
                explanation: "x² - 9 is a difference of squares: (x+3)(x-3)"
            },
            {
                type: "numeric",
                question: "Evaluate 2a² - 3b when a = 3 and b = 2",
                answer: 12,
                tolerance: 0,
                explanation: "2(3)² - 3(2) = 2(9) - 6 = 18 - 6 = 12"
            }
        ]
    },
    chapter7: {
        title: "Linear Equations",
        questions: [
            {
                type: "numeric",
                question: "Solve: 3x - 7 = 14",
                answer: 7,
                tolerance: 0,
                explanation: "3x = 21, so x = 7"
            },
            {
                type: "numeric",
                question: "Solve: 2(x + 3) = 10",
                answer: 2,
                tolerance: 0,
                explanation: "2x + 6 = 10, 2x = 4, x = 2"
            },
            {
                type: "multiple",
                question: "The solution to 5x + 3 = 2x + 12 is:",
                options: ["x = 3", "x = 5", "x = 9", "x = 15"],
                correct: 0,
                explanation: "5x - 2x = 12 - 3, so 3x = 9, x = 3"
            },
            {
                type: "numeric",
                question: "If 4(x - 2) = 3(x + 1), find x",
                answer: 11,
                tolerance: 0,
                explanation: "4x - 8 = 3x + 3, x = 11"
            },
            {
                type: "numeric",
                question: "The sum of two numbers is 20. One is 4 more than the other. Find the larger number.",
                answer: 12,
                tolerance: 0,
                explanation: "Let x and x+4 be the numbers. 2x + 4 = 20, x = 8. Larger = 12"
            }
        ]
    },
    chapter8: {
        title: "Linear Inequalities",
        questions: [
            {
                type: "multiple",
                question: "Solve: 2x + 5 < 13",
                options: ["x < 4", "x > 4", "x < 9", "x > 9"],
                correct: 0,
                explanation: "2x < 8, so x < 4"
            },
            {
                type: "multiple",
                question: "When you multiply an inequality by -1, you must:",
                options: ["Keep the same sign", "Reverse the inequality sign", "Remove the sign", "Square both sides"],
                correct: 1,
                explanation: "Multiplying or dividing by a negative number reverses the inequality"
            },
            {
                type: "multiple",
                question: "Solve: -3x ≥ 12",
                options: ["x ≥ -4", "x ≤ -4", "x ≥ 4", "x ≤ 4"],
                correct: 1,
                explanation: "Dividing by -3 reverses the sign: x ≤ -4"
            },
            {
                type: "multiple",
                question: "Which interval represents x > 3?",
                options: ["[3, ∞)", "(3, ∞)", "(-∞, 3]", "(-∞, 3)"],
                correct: 1,
                explanation: "x > 3 means 3 is not included, so we use ( for open interval: (3, ∞)"
            },
            {
                type: "numeric",
                question: "Find the largest integer satisfying 4x - 1 < 15",
                answer: 3,
                tolerance: 0,
                explanation: "4x < 16, x < 4. Largest integer is 3"
            }
        ]
    },
    chapter9: {
        title: "Simultaneous Equations",
        questions: [
            {
                type: "numeric",
                question: "Solve: x + y = 10 and x - y = 4. Find x.",
                answer: 7,
                tolerance: 0,
                explanation: "Adding: 2x = 14, x = 7"
            },
            {
                type: "numeric",
                question: "Solve: 2x + y = 8 and x + y = 5. Find y.",
                answer: 2,
                tolerance: 0,
                explanation: "Subtracting: x = 3, then y = 5 - 3 = 2"
            },
            {
                type: "multiple",
                question: "Which method is used when one equation is already solved for a variable?",
                options: ["Elimination", "Substitution", "Graphical", "Matrix"],
                correct: 1,
                explanation: "Substitution is ideal when one variable is already isolated"
            },
            {
                type: "numeric",
                question: "If 3x + 2y = 12 and x = 2, find y.",
                answer: 3,
                tolerance: 0,
                explanation: "3(2) + 2y = 12, 6 + 2y = 12, 2y = 6, y = 3"
            },
            {
                type: "numeric",
                question: "Two numbers sum to 15 and their difference is 3. Find the larger number.",
                answer: 9,
                tolerance: 0,
                explanation: "x + y = 15, x - y = 3. Adding: 2x = 18, x = 9"
            }
        ]
    },
    chapter10: {
        title: "Substitution & Change of Subject",
        questions: [
            {
                type: "multiple",
                question: "Make x the subject of y = 3x + 5:",
                options: ["x = (y-5)/3", "x = (y+5)/3", "x = 3y - 5", "x = y/3 + 5"],
                correct: 0,
                explanation: "y - 5 = 3x, so x = (y-5)/3"
            },
            {
                type: "multiple",
                question: "Make r the subject of A = πr²:",
                options: ["r = A/π", "r = √(A/π)", "r = A²/π", "r = πA²"],
                correct: 1,
                explanation: "r² = A/π, so r = √(A/π)"
            },
            {
                type: "numeric",
                question: "If v = u + at, and v = 25, u = 5, a = 4, find t",
                answer: 5,
                tolerance: 0,
                explanation: "25 = 5 + 4t, 20 = 4t, t = 5"
            },
            {
                type: "multiple",
                question: "Make h the subject of V = (1/3)πr²h:",
                options: ["h = V/πr²", "h = 3V/πr²", "h = πr²/3V", "h = V/3πr²"],
                correct: 1,
                explanation: "3V = πr²h, so h = 3V/πr²"
            }
        ]
    },
    chapter11: {
        title: "Variations",
        questions: [
            {
                type: "multiple",
                question: "y varies directly as x. If y = 12 when x = 4, find the constant k:",
                options: ["k = 3", "k = 8", "k = 16", "k = 48"],
                correct: 0,
                explanation: "y = kx, so 12 = k(4), k = 3"
            },
            {
                type: "numeric",
                question: "y varies inversely as x. If y = 6 when x = 2, find y when x = 4.",
                answer: 3,
                tolerance: 0,
                explanation: "y = k/x. When y=6, x=2: k = 12. When x=4: y = 12/4 = 3"
            },
            {
                type: "multiple",
                question: "If y ∝ x², this means:",
                options: ["y = kx", "y = k/x", "y = kx²", "y = k/x²"],
                correct: 2,
                explanation: "y ∝ x² means y varies as the square of x, so y = kx²"
            },
            {
                type: "numeric",
                question: "y varies jointly as x and z. If y = 24 when x = 2 and z = 3, find y when x = 4 and z = 5.",
                answer: 80,
                tolerance: 0,
                explanation: "y = kxz. k = 24/(2×3) = 4. y = 4×4×5 = 80"
            }
        ]
    },
    chapter12: {
        title: "Polygons",
        questions: [
            {
                type: "numeric",
                question: "Find the sum of interior angles of a hexagon (6 sides).",
                answer: 720,
                tolerance: 0,
                explanation: "Sum = (n-2) × 180 = (6-2) × 180 = 720°"
            },
            {
                type: "numeric",
                question: "Each interior angle of a regular polygon is 120°. How many sides does it have?",
                answer: 6,
                tolerance: 0,
                explanation: "Interior angle = (n-2)×180/n = 120. Solving: n = 6"
            },
            {
                type: "multiple",
                question: "The exterior angle of any regular polygon sums to:",
                options: ["180°", "270°", "360°", "540°"],
                correct: 2,
                explanation: "The sum of exterior angles of any polygon is always 360°"
            },
            {
                type: "numeric",
                question: "Find the number of diagonals in an octagon (8 sides).",
                answer: 20,
                tolerance: 0,
                explanation: "Diagonals = n(n-3)/2 = 8(8-3)/2 = 8×5/2 = 20"
            }
        ]
    },
    chapter13: {
        title: "Pie Charts",
        questions: [
            {
                type: "numeric",
                question: "In a pie chart, the angle for a sector representing 25% is:",
                answer: 90,
                tolerance: 0,
                explanation: "25% of 360° = 0.25 × 360 = 90°"
            },
            {
                type: "numeric",
                question: "A sector has angle 72°. What percentage does it represent?",
                answer: 20,
                tolerance: 0,
                explanation: "72/360 × 100 = 20%"
            },
            {
                type: "multiple",
                question: "The total angle in a pie chart is:",
                options: ["180°", "270°", "360°", "540°"],
                correct: 2,
                explanation: "A pie chart is a circle, so total angle is 360°"
            },
            {
                type: "numeric",
                question: "Out of 60 students, 15 chose Math. Find the angle for Math in a pie chart.",
                answer: 90,
                tolerance: 0,
                explanation: "(15/60) × 360 = 0.25 × 360 = 90°"
            }
        ]
    },
    chapter14: {
        title: "Surds",
        questions: [
            {
                type: "multiple",
                question: "Simplify √50:",
                options: ["5√2", "2√5", "25√2", "√25"],
                correct: 0,
                explanation: "√50 = √(25×2) = √25 × √2 = 5√2"
            },
            {
                type: "multiple",
                question: "Rationalize: 1/√3",
                options: ["√3/3", "3/√3", "√3", "1/3"],
                correct: 0,
                explanation: "1/√3 × √3/√3 = √3/3"
            },
            {
                type: "numeric",
                question: "Simplify: √12 + √27 (express coefficient of √3)",
                answer: 5,
                tolerance: 0,
                explanation: "√12 = 2√3, √27 = 3√3. Sum = 5√3"
            },
            {
                type: "multiple",
                question: "√8 × √2 equals:",
                options: ["4", "8", "√16", "Both 4 and √16"],
                correct: 3,
                explanation: "√8 × √2 = √16 = 4"
            }
        ]
    },
    chapter15: {
        title: "Indices",
        questions: [
            {
                type: "numeric",
                question: "Simplify: 2³ × 2⁴",
                answer: 128,
                tolerance: 0,
                explanation: "2³ × 2⁴ = 2⁷ = 128"
            },
            {
                type: "multiple",
                question: "Simplify: x⁵ ÷ x²",
                options: ["x³", "x⁷", "x¹⁰", "x²·⁵"],
                correct: 0,
                explanation: "When dividing with same base, subtract powers: x⁵⁻² = x³"
            },
            {
                type: "numeric",
                question: "Evaluate: 16^(1/2)",
                answer: 4,
                tolerance: 0,
                explanation: "16^(1/2) = √16 = 4"
            },
            {
                type: "multiple",
                question: "What is 5⁰?",
                options: ["0", "1", "5", "undefined"],
                correct: 1,
                explanation: "Any non-zero number raised to power 0 equals 1"
            },
            {
                type: "numeric",
                question: "Evaluate: 27^(2/3)",
                answer: 9,
                tolerance: 0,
                explanation: "27^(2/3) = (∛27)² = 3² = 9"
            }
        ]
    },
    chapter16: {
        title: "Logarithms",
        questions: [
            {
                type: "numeric",
                question: "Find log₂ 32",
                answer: 5,
                tolerance: 0,
                explanation: "2⁵ = 32, so log₂ 32 = 5"
            },
            {
                type: "numeric",
                question: "Evaluate: log₁₀ 1000",
                answer: 3,
                tolerance: 0,
                explanation: "10³ = 1000, so log₁₀ 1000 = 3"
            },
            {
                type: "multiple",
                question: "log(ab) equals:",
                options: ["log a × log b", "log a + log b", "log a - log b", "log a / log b"],
                correct: 1,
                explanation: "The product rule: log(ab) = log a + log b"
            },
            {
                type: "numeric",
                question: "If log x = 2, find x",
                answer: 100,
                tolerance: 0,
                explanation: "log x = 2 means x = 10² = 100"
            },
            {
                type: "multiple",
                question: "log(a/b) equals:",
                options: ["log a + log b", "log a - log b", "log a × log b", "(log a)/(log b)"],
                correct: 1,
                explanation: "The quotient rule: log(a/b) = log a - log b"
            }
        ]
    },
    chapter17: {
        title: "Vectors & Bearings",
        questions: [
            {
                type: "multiple",
                question: "A bearing of 045° is:",
                options: ["North-East", "North-West", "South-East", "South-West"],
                correct: 0,
                explanation: "045° is 45° clockwise from North, which is North-East"
            },
            {
                type: "numeric",
                question: "Find |a| if a = (3, 4)",
                answer: 5,
                tolerance: 0,
                explanation: "|a| = √(3² + 4²) = √(9+16) = √25 = 5"
            },
            {
                type: "multiple",
                question: "The back bearing of 060° is:",
                options: ["120°", "180°", "240°", "300°"],
                correct: 2,
                explanation: "Back bearing = 060° + 180° = 240°"
            },
            {
                type: "multiple",
                question: "If a = (2, 3) and b = (1, -1), find a + b:",
                options: ["(3, 2)", "(1, 4)", "(2, -3)", "(3, 4)"],
                correct: 0,
                explanation: "a + b = (2+1, 3+(-1)) = (3, 2)"
            }
        ]
    },
    chapter18: {
        title: "Coordinate Geometry",
        questions: [
            {
                type: "numeric",
                question: "Find the distance between (0, 0) and (3, 4)",
                answer: 5,
                tolerance: 0,
                explanation: "Distance = √(3² + 4²) = √25 = 5"
            },
            {
                type: "multiple",
                question: "The midpoint of (2, 6) and (8, 10) is:",
                options: ["(5, 8)", "(4, 7)", "(6, 8)", "(10, 16)"],
                correct: 0,
                explanation: "Midpoint = ((2+8)/2, (6+10)/2) = (5, 8)"
            },
            {
                type: "numeric",
                question: "Find the gradient of the line passing through (1, 2) and (4, 8)",
                answer: 2,
                tolerance: 0,
                explanation: "Gradient = (8-2)/(4-1) = 6/3 = 2"
            },
            {
                type: "multiple",
                question: "Two lines are perpendicular if the product of their gradients is:",
                options: ["0", "1", "-1", "2"],
                correct: 2,
                explanation: "Perpendicular lines have m₁ × m₂ = -1"
            }
        ]
    },
    chapter19: {
        title: "Transformations",
        questions: [
            {
                type: "multiple",
                question: "Reflection in the x-axis transforms (a, b) to:",
                options: ["(-a, b)", "(a, -b)", "(-a, -b)", "(b, a)"],
                correct: 1,
                explanation: "Reflection in x-axis changes sign of y-coordinate: (a, -b)"
            },
            {
                type: "multiple",
                question: "Rotation of 90° anticlockwise about origin transforms (a, b) to:",
                options: ["(-b, a)", "(b, -a)", "(-a, -b)", "(a, b)"],
                correct: 0,
                explanation: "90° anticlockwise: (a, b) → (-b, a)"
            },
            {
                type: "multiple",
                question: "Translation by vector (3, -2) maps (1, 4) to:",
                options: ["(4, 2)", "(4, 6)", "(-2, 6)", "(3, -2)"],
                correct: 0,
                explanation: "(1+3, 4-2) = (4, 2)"
            }
        ]
    },
    chapter20: {
        title: "Graphs & Relations",
        questions: [
            {
                type: "multiple",
                question: "The equation y = 2x + 3 represents:",
                options: ["A parabola", "A straight line", "A circle", "A hyperbola"],
                correct: 1,
                explanation: "y = mx + c is the equation of a straight line"
            },
            {
                type: "numeric",
                question: "Find the y-intercept of y = 3x - 7",
                answer: -7,
                tolerance: 0,
                explanation: "When x = 0, y = -7. The y-intercept is -7"
            },
            {
                type: "multiple",
                question: "The graph of y = x² is:",
                options: ["A straight line", "A parabola opening upward", "A parabola opening downward", "A circle"],
                correct: 1,
                explanation: "y = x² is a parabola opening upward with vertex at origin"
            }
        ]
    },
    chapter21: {
        title: "Quadratic Equations",
        questions: [
            {
                type: "multiple",
                question: "Solve: x² - 5x + 6 = 0",
                options: ["x = 2 or 3", "x = -2 or -3", "x = 1 or 6", "x = -1 or -6"],
                correct: 0,
                explanation: "(x-2)(x-3) = 0, so x = 2 or x = 3"
            },
            {
                type: "numeric",
                question: "Find the sum of roots of 2x² - 6x + 4 = 0",
                answer: 3,
                tolerance: 0,
                explanation: "Sum of roots = -b/a = -(-6)/2 = 3"
            },
            {
                type: "numeric",
                question: "Find the product of roots of x² + 5x + 6 = 0",
                answer: 6,
                tolerance: 0,
                explanation: "Product of roots = c/a = 6/1 = 6"
            },
            {
                type: "multiple",
                question: "The discriminant of ax² + bx + c = 0 is:",
                options: ["b² - 4ac", "b² + 4ac", "4ac - b²", "2ac - b"],
                correct: 0,
                explanation: "The discriminant Δ = b² - 4ac determines nature of roots"
            }
        ]
    },
    chapter22: {
        title: "Probability",
        questions: [
            {
                type: "multiple",
                question: "A fair die is rolled. The probability of getting a 6 is:",
                options: ["1/2", "1/3", "1/6", "1/12"],
                correct: 2,
                explanation: "P(6) = favorable outcomes / total = 1/6"
            },
            {
                type: "numeric",
                question: "If P(A) = 0.4, find P(A')",
                answer: 0.6,
                tolerance: 0.01,
                explanation: "P(A') = 1 - P(A) = 1 - 0.4 = 0.6"
            },
            {
                type: "multiple",
                question: "For independent events A and B, P(A and B) equals:",
                options: ["P(A) + P(B)", "P(A) × P(B)", "P(A) - P(B)", "P(A) / P(B)"],
                correct: 1,
                explanation: "For independent events: P(A ∩ B) = P(A) × P(B)"
            },
            {
                type: "numeric",
                question: "A bag has 3 red, 4 blue, 3 green balls. Find P(red) as a decimal.",
                answer: 0.3,
                tolerance: 0.01,
                explanation: "P(red) = 3/10 = 0.3"
            }
        ]
    },
    chapter23: {
        title: "Statistics",
        questions: [
            {
                type: "numeric",
                question: "Find the mean of: 4, 6, 8, 10, 12",
                answer: 8,
                tolerance: 0,
                explanation: "Mean = (4+6+8+10+12)/5 = 40/5 = 8"
            },
            {
                type: "numeric",
                question: "Find the median of: 3, 7, 2, 9, 5",
                answer: 5,
                tolerance: 0,
                explanation: "Arranged: 2, 3, 5, 7, 9. Middle value = 5"
            },
            {
                type: "multiple",
                question: "The mode of a data set is:",
                options: ["The middle value", "The average", "The most frequent value", "The range"],
                correct: 2,
                explanation: "Mode is the value that appears most frequently"
            },
            {
                type: "numeric",
                question: "Find the range of: 15, 8, 22, 11, 9",
                answer: 14,
                tolerance: 0,
                explanation: "Range = max - min = 22 - 8 = 14"
            }
        ]
    },
    chapter24: {
        title: "Business Mathematics",
        questions: [
            {
                type: "numeric",
                question: "Find the simple interest on GH₵5000 at 8% p.a. for 3 years",
                answer: 1200,
                tolerance: 0,
                explanation: "I = PRT = 5000 × 0.08 × 3 = 1200"
            },
            {
                type: "numeric",
                question: "A shirt costs GH₵80. After 25% discount, the price is:",
                answer: 60,
                tolerance: 0,
                explanation: "Discount = 25% of 80 = 20. Price = 80 - 20 = 60"
            },
            {
                type: "multiple",
                question: "If cost price = GH₵200 and selling price = GH₵250, the profit % is:",
                options: ["20%", "25%", "50%", "125%"],
                correct: 1,
                explanation: "Profit = 50. Profit% = (50/200) × 100 = 25%"
            },
            {
                type: "numeric",
                question: "An item marked GH₵120 is sold at 15% discount. Find selling price.",
                answer: 102,
                tolerance: 0,
                explanation: "SP = 120 - (15% of 120) = 120 - 18 = 102"
            }
        ]
    },
    chapter25: {
        title: "Construction & Loci",
        questions: [
            {
                type: "multiple",
                question: "The locus of points equidistant from two fixed points is:",
                options: ["A circle", "A straight line", "The perpendicular bisector", "A parabola"],
                correct: 2,
                explanation: "Points equidistant from two points lie on the perpendicular bisector of the line joining them"
            },
            {
                type: "multiple",
                question: "The locus of points equidistant from a fixed point is:",
                options: ["A straight line", "A circle", "A triangle", "A parabola"],
                correct: 1,
                explanation: "All points at equal distance from a fixed point form a circle"
            },
            {
                type: "multiple",
                question: "To bisect an angle, you need:",
                options: ["A ruler only", "A protractor only", "Compass and straightedge", "A set square"],
                correct: 2,
                explanation: "Angle bisection is done using compass and straightedge construction"
            }
        ]
    },
    chapter26: {
        title: "Plane Geometry",
        questions: [
            {
                type: "numeric",
                question: "The sum of angles in a triangle is:",
                answer: 180,
                tolerance: 0,
                explanation: "The sum of interior angles of any triangle is 180°"
            },
            {
                type: "multiple",
                question: "In a parallelogram, opposite angles are:",
                options: ["Complementary", "Supplementary", "Equal", "90° each"],
                correct: 2,
                explanation: "Opposite angles in a parallelogram are equal"
            },
            {
                type: "numeric",
                question: "An exterior angle of a triangle is 120°. If one opposite interior angle is 50°, find the other.",
                answer: 70,
                tolerance: 0,
                explanation: "Exterior angle = sum of opposite interior angles. 120 = 50 + x, so x = 70"
            }
        ]
    },
    chapter27: {
        title: "Pythagoras Theorem",
        questions: [
            {
                type: "numeric",
                question: "In a right triangle with legs 6 and 8, find the hypotenuse.",
                answer: 10,
                tolerance: 0,
                explanation: "c² = 6² + 8² = 36 + 64 = 100, so c = 10"
            },
            {
                type: "numeric",
                question: "If hypotenuse = 13 and one leg = 5, find the other leg.",
                answer: 12,
                tolerance: 0,
                explanation: "a² = 13² - 5² = 169 - 25 = 144, so a = 12"
            },
            {
                type: "multiple",
                question: "Which is a Pythagorean triple?",
                options: ["3, 4, 6", "5, 12, 13", "6, 7, 8", "8, 9, 10"],
                correct: 1,
                explanation: "5² + 12² = 25 + 144 = 169 = 13²"
            }
        ]
    },
    chapter28: {
        title: "Trigonometry & Bearings",
        questions: [
            {
                type: "multiple",
                question: "In a right triangle, sin θ equals:",
                options: ["adjacent/hypotenuse", "opposite/hypotenuse", "opposite/adjacent", "hypotenuse/opposite"],
                correct: 1,
                explanation: "sin θ = opposite/hypotenuse (SOH)"
            },
            {
                type: "numeric",
                question: "cos 60° equals (as a decimal):",
                answer: 0.5,
                tolerance: 0.01,
                explanation: "cos 60° = 0.5"
            },
            {
                type: "multiple",
                question: "tan θ equals:",
                options: ["sin θ / cos θ", "cos θ / sin θ", "sin θ × cos θ", "sin θ + cos θ"],
                correct: 0,
                explanation: "tan θ = sin θ / cos θ = opposite/adjacent"
            }
        ]
    },
    chapter29: {
        title: "Areas & Perimeters",
        questions: [
            {
                type: "numeric",
                question: "Find the area of a rectangle with length 8 cm and width 5 cm.",
                answer: 40,
                tolerance: 0,
                explanation: "Area = length × width = 8 × 5 = 40 cm²"
            },
            {
                type: "numeric",
                question: "Find the area of a triangle with base 10 cm and height 6 cm.",
                answer: 30,
                tolerance: 0,
                explanation: "Area = (1/2) × base × height = (1/2) × 10 × 6 = 30 cm²"
            },
            {
                type: "numeric",
                question: "Find the circumference of a circle with radius 7 cm. (Use π = 22/7)",
                answer: 44,
                tolerance: 0,
                explanation: "C = 2πr = 2 × (22/7) × 7 = 44 cm"
            }
        ]
    },
    chapter30: {
        title: "Circles & Tangents",
        questions: [
            {
                type: "multiple",
                question: "A tangent to a circle is:",
                options: ["A line through the center", "A line intersecting at two points", "A line touching at exactly one point", "A chord"],
                correct: 2,
                explanation: "A tangent touches the circle at exactly one point"
            },
            {
                type: "multiple",
                question: "The angle between a tangent and radius at the point of contact is:",
                options: ["45°", "60°", "90°", "180°"],
                correct: 2,
                explanation: "The tangent is perpendicular to the radius at the point of tangency"
            },
            {
                type: "numeric",
                question: "The angle subtended at center is 120°. Find angle at circumference.",
                answer: 60,
                tolerance: 0,
                explanation: "Angle at circumference = half × angle at center = 120/2 = 60°"
            }
        ]
    },
    chapter31: {
        title: "Enlargement & Similarity",
        questions: [
            {
                type: "multiple",
                question: "If scale factor = 2, the area increases by factor:",
                options: ["2", "4", "8", "16"],
                correct: 1,
                explanation: "Area scale factor = (linear scale factor)² = 2² = 4"
            },
            {
                type: "numeric",
                question: "Two similar triangles have sides in ratio 3:5. If smaller has area 18 cm², find larger area.",
                answer: 50,
                tolerance: 0,
                explanation: "Area ratio = 9:25. Larger area = 18 × (25/9) = 50 cm²"
            },
            {
                type: "multiple",
                question: "Similar shapes have:",
                options: ["Same size", "Same shape only", "Same shape and proportional sides", "Neither same size nor shape"],
                correct: 2,
                explanation: "Similar figures have the same shape with proportional corresponding sides"
            }
        ]
    },
    chapter32: {
        title: "Mensuration",
        questions: [
            {
                type: "numeric",
                question: "Find volume of cube with side 4 cm.",
                answer: 64,
                tolerance: 0,
                explanation: "V = s³ = 4³ = 64 cm³"
            },
            {
                type: "numeric",
                question: "Find volume of cylinder with radius 7 cm and height 10 cm. (Use π = 22/7)",
                answer: 1540,
                tolerance: 0,
                explanation: "V = πr²h = (22/7) × 49 × 10 = 1540 cm³"
            },
            {
                type: "multiple",
                question: "Surface area of a sphere is:",
                options: ["πr²", "2πr²", "4πr²", "4/3 πr³"],
                correct: 2,
                explanation: "Surface area of sphere = 4πr²"
            }
        ]
    },
    chapter33: {
        title: "Significant Figures",
        questions: [
            {
                type: "numeric",
                question: "How many significant figures in 0.00340?",
                answer: 3,
                tolerance: 0,
                explanation: "Leading zeros don't count. The 3, 4, and trailing 0 are significant: 3 s.f."
            },
            {
                type: "multiple",
                question: "Round 3.1459 to 3 significant figures:",
                options: ["3.14", "3.15", "3.146", "3.145"],
                correct: 1,
                explanation: "3.1459 rounds to 3.15 (3 s.f.) since the 5 rounds up"
            },
            {
                type: "numeric",
                question: "Express 0.006754 to 2 significant figures (give answer as decimal):",
                answer: 0.0068,
                tolerance: 0.0001,
                explanation: "0.006754 ≈ 0.0068 (2 s.f.)"
            }
        ]
    },
    chapter34: {
        title: "Relations & Mappings",
        questions: [
            {
                type: "multiple",
                question: "A function is a relation where:",
                options: ["Each input has multiple outputs", "Each input has exactly one output", "Multiple inputs have same output", "No input has an output"],
                correct: 1,
                explanation: "A function assigns exactly one output to each input"
            },
            {
                type: "multiple",
                question: "If f(x) = 2x + 3, then f(4) =",
                options: ["8", "10", "11", "14"],
                correct: 2,
                explanation: "f(4) = 2(4) + 3 = 8 + 3 = 11"
            },
            {
                type: "numeric",
                question: "If f(x) = x² - 1, find f(5)",
                answer: 24,
                tolerance: 0,
                explanation: "f(5) = 5² - 1 = 25 - 1 = 24"
            }
        ]
    },
    chapter35: {
        title: "Speed, Units & Scale",
        questions: [
            {
                type: "numeric",
                question: "Convert 72 km/h to m/s",
                answer: 20,
                tolerance: 0,
                explanation: "72 km/h = 72 × (1000/3600) = 72 × (5/18) = 20 m/s"
            },
            {
                type: "numeric",
                question: "A car travels 240 km in 4 hours. Find average speed in km/h.",
                answer: 60,
                tolerance: 0,
                explanation: "Speed = Distance/Time = 240/4 = 60 km/h"
            },
            {
                type: "multiple",
                question: "On a map with scale 1:50000, 1 cm represents:",
                options: ["50 m", "500 m", "5 km", "50 km"],
                correct: 1,
                explanation: "1 cm = 50000 cm = 500 m"
            }
        ]
    },
    chapter36: {
        title: "Fractions",
        questions: [
            {
                type: "multiple",
                question: "Simplify: 2/3 + 1/4",
                options: ["3/7", "3/12", "11/12", "8/12"],
                correct: 2,
                explanation: "2/3 + 1/4 = 8/12 + 3/12 = 11/12"
            },
            {
                type: "multiple",
                question: "Calculate: 3/4 × 2/5",
                options: ["5/9", "6/20", "3/10", "5/20"],
                correct: 2,
                explanation: "3/4 × 2/5 = 6/20 = 3/10"
            },
            {
                type: "multiple",
                question: "Divide: 2/3 ÷ 4/5",
                options: ["8/15", "5/6", "10/12", "6/20"],
                correct: 1,
                explanation: "2/3 ÷ 4/5 = 2/3 × 5/4 = 10/12 = 5/6"
            }
        ]
    },
    chapter37: {
        title: "Global Mathematics",
        questions: [
            {
                type: "multiple",
                question: "The latitude of the North Pole is:",
                options: ["0°", "45°N", "90°N", "180°N"],
                correct: 2,
                explanation: "The North Pole is at latitude 90°N"
            },
            {
                type: "multiple",
                question: "Lines of longitude meet at:",
                options: ["The equator", "The poles", "The tropics", "Nowhere"],
                correct: 1,
                explanation: "All lines of longitude (meridians) converge at the North and South poles"
            },
            {
                type: "numeric",
                question: "The time difference between places 15° longitude apart is (in hours):",
                answer: 1,
                tolerance: 0,
                explanation: "Earth rotates 360° in 24 hours, so 15° = 1 hour"
            }
        ]
    },
    chapter38: {
        title: "Sequences",
        questions: [
            {
                type: "numeric",
                question: "Find the 10th term of AP: 2, 5, 8, 11, ...",
                answer: 29,
                tolerance: 0,
                explanation: "a = 2, d = 3. T₁₀ = a + 9d = 2 + 27 = 29"
            },
            {
                type: "numeric",
                question: "Find the 5th term of GP: 3, 6, 12, ...",
                answer: 48,
                tolerance: 0,
                explanation: "a = 3, r = 2. T₅ = ar⁴ = 3 × 16 = 48"
            },
            {
                type: "multiple",
                question: "In an AP, if a = 5 and d = -2, the 4th term is:",
                options: ["-1", "1", "-3", "3"],
                correct: 0,
                explanation: "T₄ = a + 3d = 5 + 3(-2) = 5 - 6 = -1"
            }
        ]
    },
    chapter39: {
        title: "Objective Test Review",
        questions: [
            {
                type: "multiple",
                question: "Which is a prime number?",
                options: ["1", "9", "17", "21"],
                correct: 2,
                explanation: "17 is prime (only divisible by 1 and itself)"
            },
            {
                type: "numeric",
                question: "Find the HCF of 24 and 36",
                answer: 12,
                tolerance: 0,
                explanation: "Factors: 24 = 2³×3, 36 = 2²×3². HCF = 2²×3 = 12"
            },
            {
                type: "numeric",
                question: "Find the LCM of 6 and 8",
                answer: 24,
                tolerance: 0,
                explanation: "6 = 2×3, 8 = 2³. LCM = 2³×3 = 24"
            }
        ]
    }
};

// Shuffle array using Fisher-Yates algorithm
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Get random questions for a chapter
function getQuizQuestions(chapterKey, count = 5) {
    const chapter = quizBank[chapterKey];
    if (!chapter) return [];
    
    const shuffled = shuffleArray(chapter.questions);
    return shuffled.slice(0, Math.min(count, shuffled.length));
}

// Export for use in main script
window.quizBank = quizBank;
window.getQuizQuestions = getQuizQuestions;

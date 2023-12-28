---
sidebar_position: 0
---

# Contents and Figures

**draft proposed American National Standard for Information Systems—Programming**

**Language—Common Lisp**

**X3J13/94-101R**

*Versions 15.17 (X3J13/94-101) and 15.17R (X3J13/94-101R) are absolutely identical except for changes to the document number and date on the cover and in each page’s header, addition of this disclaimer on the back of the cover page, additions to the Edit and Review History on page Credits iv, and changes to the names and headings in the credits section on pages Credits v-vii. There are NO technical changes between these versions; from a normative point of view, the*

*documents X3J13/94-101 and X3J13/94-101R are entirely interchangeable.*

## Figures

### Chapter 1 (Introduction)

| Topic | Page(s) |
|-------|---------|
| 1–1. Notations for NIL | 1–14 |
| 1–2. Deprecated Functions | 1–33 |
| 1–3. Functions with Deprecated :TEST-NOT Arguments | 1–33 |
| 1–4. Symbols in the COMMON-LISP package (part one of twelve). | 1–35 |
| 1–5. Symbols in the COMMON-LISP package (part two of twelve). | 1–36 |
| 1–6. Symbols in the COMMON-LISP package (part three of twelve). | 1–37 |
| 1–7. Symbols in the COMMON-LISP package (part four of twelve). | 1–38 |
| 1–8. Symbols in the COMMON-LISP package (part five of twelve). | 1–39 |
| 1–9. Symbols in the COMMON-LISP package (part six of twelve). | 1–40 |
| 1–10. Symbols in the COMMON-LISP package (part seven of twelve). | 1–41 |
| 1–11. Symbols in the COMMON-LISP package (part eight of twelve). | 1–42 |
| 1–12. Symbols in the COMMON-LISP package (part nine of twelve). | 1–43 |
| 1–13. Symbols in the COMMON-LISP package (part ten of twelve). | 1–44 |
| 1–14. Symbols in the COMMON-LISP package (part eleven of twelve). | 1–45 |
| 1–15. Symbols in the COMMON-LISP package (part twelve of twelve). | 1–46  |

### Chapter 2 (Syntax)

| Topic | Page(s) |
|-------|---------|
| 2–1. Readtable defined names | 2–1 |
| 2–2. Variables that influence the Lisp reader. | 2–2 |
| 2–3. Standard Character Subrepertoire (Part 1 of 3: Latin Characters) | 2–3 |
| 2–4. Standard Character Subrepertoire (Part 2 of 3: Numeric Characters) | 2–3 |
| 2–5. Standard Character Subrepertoire (Part 3 of 3: Special Characters) | 2–4 |
| 2–6. Possible Character Syntax Types | 2–5 |
| 2–7. Character Syntax Types in Standard Syntax | 2–5 |
| 2–8. Constituent Traits of Standard Characters and Semi-Standard Characters | 2–7 |
| 2–9. Syntax for Numeric Tokens | 2–14 |
| 2–10. Examples of reserved tokens | 2–15 |
| 2–11. Examples of symbols | 2–15 |
| 2–12. Examples of symbols or potential numbers | 2–16 |
| 2–13. Examples of Ratios | 2–17 |
| 2–14. Examples of Floating-point numbers | 2–18 |
| 2–15. Examples of the printed representation of symbols (Part 1 of 2) | 2–19 |
| 2–16. Examples of the printed representation of symbols (Part 2 of 2) | 2–20 |
| 2–17. Valid patterns for tokens | 2–21 |
| 2–18. Examples of the use of double-quote | 2–26   |
| 2–19. Standard # Dispatching Macro Character Syntax | 2–30 |
| 2–20. Radix Indicator Example | 2–34 |
| 2–21. Complex Number Example | 2–35  |

### Chapter 3 (Evaluation and Compilation)

| Topic | Page(s) |
|-------|---------|
| 3–1. Some Defined Names Applicable to Variables | 3–4 |
| 3–2. Common Lisp Special Operators | 3–6 |
| 3–3. Defined names applicable to macros | 3–7 |
| 3–4. Some function-related defined names | 3–8 |
| 3–5. Some operators applicable to receiving multiple values | 3–13 |
| 3–6. Defined names applicable to compiler macros | 3–16 |
| 3–7. EVAL-WHEN processing | 3–21 |
| 3–8. Defining Macros That Affect the Compile-Time Environment | 3–22 |
| 3–9. Common Lisp Declaration Identifiers | 3–29 |
| 3–10. What Kind of Lambda Lists to Use | 3–33 |
| 3–11. Defined names applicable to lambda lists | 3–33 |
| 3–12. Standardized Operators that use Ordinary Lambda Lists | 3–34 |
| 3–13. Lambda List Keywords used by Ordinary Lambda Lists | 3–34 |
| 3–14. Lambda List Keywords used by Generic Function Lambda Lists | 3–39 |
| 3–15. Standardized Operators that use Specialized Lambda Lists | 3–40 |
| 3–16. Lambda List Keywords used by Specialized Lambda Lists | 3–40 |
| 3–17. Operators that use Macro Lambda Lists | 3–41 |
| 3–18. Lambda List Keywords used by Macro Lambda Lists | 3–41 |
| 3–19. Lambda List Keywords used by Defsetf Lambda Lists | 3–47 |
| 3–20. Lambda List Keywords used by Define-modify-macro Lambda Lists | 3–48 |
| 3–21. Lambda List Keywords used by Define-method-combination arguments Lambda Lists 3–48
| 3–22. Global Declaration Specifiers | 3–81 |
| 3–23. Standardized Forms In Which Declarations Can Occur | 3–83 |
| 3–24. Local Declaration Specifiers | 3–83 |
| 3–25. Optimize qualities | 3–96  |

### Chapter 4 (Types and Classes)

| Topic | Page(s) |
|-------|---------|
| 4–1. Cross-References to Data Type Information | 4–2 |
| 4–2. Standardized Atomic Type Specifiers | 4–4 |
| 4–3. Standardized Compound Type Specifier Names | 4–5 |
| 4–4. Standardized Compound-Only Type Specifier Names | 4–5 |
| 4–5. Defined names relating to types and declarations. | 4–6 |
| 4–6. Standardized Type Specifier Names | 4–7 |
| 4–7. Object System Classes | 4–8 |
| 4–8. Classes that correspond to pre-defined type specifiers | 4–18 |
| 4–9. Result possibilities for subtypep | 4–35  |

### Chapter 5 (Data and Control Flow)

| Topic | Page(s) |
|-------|---------|
| 5–1. Examples of setf | 5–1 |
| 5–2. Operators relating to places and generalized reference. | 5–1 |
| 5–3. Sample Setf Expansion of a Variable | 5–4 |
| 5–4. Sample Setf Expansion of a CAR Form | 5–4 |
| 5–5. Sample Setf Expansion of a SUBSEQ Form | 5–4 |
| 5–6. Sample Setf Expansion of a LDB Form | 5–5 |
| 5–7. Functions that setf can be used with—1 | 5–6 |
| 5–8. Functions that setf can be used with—2 | 5–7 |
| 5–9. Read-Modify-Write Macros | 5–12 |
| 5–10. Macros that have implicit tagbodies. | 5–49 |
| 5–11. Operators that always prefer EQ over EQL | 5–58 |
| 5–12. Summary and priorities of behavior of **equal** | 5–61 |
| 5–13. Summary and priorities of behavior of **equalp** | 5–63  |

### Chapter 6 (Iteration)

| Topic | Page(s) |
|-------|---------|

### Chapter 7 (Objects)

| Topic | Page(s) |
|-------|---------|
| 7–1. Standardized Method-Defining Operators | 7–17 |
| 7–2. Built-in Method Combination Types | 7–25  |

### Chapter 8 (Structures)

| Topic | Page(s) |
|-------|---------|

### Chapter 9 (Conditions)

| Topic | Page(s) |
|-------|---------|
| 9–1. Standardized Condition Types | 9–2 |
| 9–2. Operators that define and create conditions. | 9–2 |
| 9–3. Operators that read condition slots. | 9–3 |
| 9–4. Operators relating to handling conditions. | 9–7 |
| 9–5. Defined names relating to signaling conditions. | 9–7 |
| 9–6. Defined names relating to restarts. | 9–9 |
| 9–7. Operators relating to assertions. | 9–10  |

### Chapter 10 (Symbols)

| Topic | Page(s) |
|-------|---------|
| 10–1. Property list defined names | 10–1 |
| 10–2. Symbol creation and inquiry defined names | 10–1  |

### Chapter 11 (Packages)

| Topic | Page(s) |
|-------|---------|
| 11–1. Some Defined Names related to Packages | 11–1 |
| 11–2. Standardized Package Names | 11–4  |

### Chapter 12 (Numbers)

| Topic | Page(s) |
|-------|---------|
| 12–1. Operators relating to Arithmetic. | 12–1   |
| 12–2. Defined names relating to Exponentials, Logarithms, and Trigonometry. | 12–1 |
| 12–3. Operators for numeric comparison and predication. | 12–1 |
| 12–4. Defined names relating to numeric type manipulation and coercion. | 12–2 |
| 12–5. Defined names relating to logical operations on numbers. | 12–3 |
| 12–6. Defined names relating to byte manipulation. | 12–4 |
| 12–7. Defined names relating to implementation-dependent details about numbers. | 12–4 |
| 12–8. Functions Affected by Rule of Float Substitutability | 12–6 |
| 12–9. Trigonometric Identities for Complex Domain | 12–9 |
| 12–10. Quadrant Numbering for Branch Cuts | 12–9 |
| 12–11. Random-state defined names | 12–10 |
| 12–12. Recommended Minimum Floating-Point Precision and Exponent Size | 12–14 |
| 12–13. Uses of /=, =, &#60;, &#62;, &#60;=, and &#62;= | 12–22 |
| 12–14. Mathematical definition of arc sine, arc cosine, and arc tangent | 12–29 |
| 12–15. Quadrant information for arc tangent | 12–31 |
| 12–16. Mathematical definitions for hyperbolic functions | 12–33 |
| 12–17. Bit-Wise Logical Operations | 12–68 |
| 12–18. Bit-wise Logical Operations on Integers | 12–72  |

### Chapter 13 (Characters)

| Topic | Page(s) |
|-------|---------|
| 13–1. Character defined names – 1 | 13–1 |
| 13–2. Character defined names – 2 | 13–1  |

### Chapter 14 (Conses)

| Topic | Page(s) |
|-------|---------|
| 14–1. Some defined names relating to conses. | 14–1 |
| 14–2. Some defined names relating to trees. | 14–1 |
| 14–3. Some defined names relating to lists. | 14–2 |
| 14–4. Some defined names related to assocation lists. | 14–2 |
| 14–5. Some defined names related to sets. | 14–3 |
| 14–6. CAR and CDR variants | 14–11  |

### Chapter 15 (Arrays)

| Topic | Page(s) |
|-------|---------|
| 15–1. General Purpose Array-Related Defined Names | 15–2 |
| 15–2. Operators that Manipulate Strings | 15–3 |
| 15–3. Operators that Manipulate Bit Arrays | 15–4 |
| 15–4. Bit-wise Logical Operations on Bit Arrays | 15–38  |

### Chapter 16 (Strings)

| Topic | Page(s) |
|-------|---------|

### Chapter 17 (Sequences)

| Topic | Page(s) |
|-------|---------|
| 17–1. Standardized Sequence Functions | 17–1 |
| 17–2. Operators that have Two-Argument Tests to be Satisfied | 17–2 |
| 17–3. Operators that have One-Argument Tests to be Satisfied | 17–3  |

### Chapter 18 (Hash Tables)

| Topic | Page(s) |
|-------|---------|
| 18–1. Hash-table defined names | 18–1  |

### Chapter 19 (Filenames)

| Topic | Page(s) |
|-------|---------|
| 19–1. Pathname Operations | 19–2 |
| 19–2. Pathname functions using a :CASE argument | 19–4 |
| 19–3. Special Markers In Directory Component | 19–8  |

### Chapter 20 (Files)

| Topic | Page(s) |
|-------|---------|
| 20–1. File and Directory Operations | 20–1 |
| 20–2. File Functions that Treat Open and Closed Streams Differently | 20–1 |
| 20–3. File Functions where Closed Streams Might Work Best | 20–2  |

### Chapter 21 (Streams)

| Topic | Page(s) |
|-------|---------|
| 21–1. Some General-Purpose Stream Operations | 21–1 |
| 21–2. Operators relating to Input Streams. | 21–1 |
| 21–3. Operators relating to Output Streams. | 21–2 |
| 21–4. Operators relating to Bidirectional Streams. | 21–2 |
| 21–5. Defined Names related to Specialized Streams | 21–4 |
| 21–6. Standardized Stream Variables | 21–4 |
| 21–7. Operators that accept either Open or Closed Streams | 21–5 |
| 21–8. Operators that accept Open Streams only | 21–5  |

### Chapter 22 (Printer)

| Topic | Page(s) |
|-------|---------|
| 22–1. Standardized Printer Control Variables | 22–1 |
| 22–2. Additional Influences on the Lisp printer. | 22–2 |
| 22–3. Example of Logical Blocks, Conditional Newlines, and Sections | 22–15 |
| 22–4. Defined names related to pretty printing. | 22–15 |
| 22–5. Format directives related to Pretty Printing | 22–15 |
| 22–6. Examples of format control strings | 22–23 |
| 22–7. Argument correspondences for the WRITE function. | 22–63  |

### Chapter 23 (Reader)

| Topic | Page(s) |
|-------|---------|
| 23–1. Values of standard control variables | 23–18  |

### Chapter 24 (System Construction)

| Topic | Page(s) |
|-------|---------|
| 24–1. Features examples | 24–2  |

### Chapter 25 (Environment)

| Topic | Page(s) |
|-------|---------|
| 25–1. Variables maintained by the Read-Eval-Print Loop | 25–1 |
| 25–2. Defined names relating to debugging | 25–1  |
| 25–3. Defined names relating to environment inquiry. | 25–2 |
| 25–4. Defined names involving Time. | 25–2 |
| 25–5. Defined names involving time in Decoded Time. | 25–3 |
| 25–6. Defined names involving time in Universal Time. | 25–4 |
| 25–7. Defined names involving time in Internal Time. | 25–4 |
| 25–8. Defined names involving time in Seconds. | 25–4  |

### Chapter 26 (Glossary)

| Topic | Page(s) |
|-------|---------|
| 26–1. Exponent Markers | 26–22 |
| 26–2. Standardized I/O Customization Variables | 26–30 |
| 26–3. Standardized Iteration Forms | 26–33 |
| 26–4. Standardized Restart Functions | 26–48  |

### Chapter A (Appendix)

## Contents

### Chapter 1 (Introduction)

| Topic | Page(s) |
|-------|---------|
| 1.1 Scope, Purpose, and History | 1–1 |
| 1.1.1 Scope and Purpose | 1–1 |
| 1.1.2 History | 1–1 |
| 1.2 Organization of the Document | 1–4 |
| 1.3 Referenced Publications | 1–5 |
| 1.4 Definitions | 1–7 |
| 1.4.1 Notational Conventions | 1–7 |
| 1.4.1.1 Font Key | 1–7 |
| 1.4.1.2 Modified BNF Syntax | 1–7 |
| 1.4.1.2.1 Splicing in Modified BNF Syntax | 1–8 |
| 1.4.1.2.2 Indirection in Modified BNF Syntax | 1–9 |
| 1.4.1.2.3 Additional Uses for Indirect Definitions in Modified BNF Syntax | 1–9 |
| 1.4.1.3 Special Symbols | 1–10 |
| 1.4.1.4 Objects with Multiple Notations | 1–12 |
| 1.4.1.4.1 Case in Symbols | 1–12 |
| 1.4.1.4.2 Numbers | 1–13 |
| 1.4.1.4.3 Use of the Dot Character | 1–13 |
| 1.4.1.4.4 NIL | 1–13 |
| 1.4.1.5 Designators | 1–14 |
| 1.4.1.6 Nonsense Words | 1–15 |
| 1.4.2 Error Terminology | 1–15 |
| 1.4.3 Sections Not Formally Part Of This Standard | 1–18 |
| 1.4.4 Interpreting Dictionary Entries | 1–19 |
| 1.4.4.1 The “Affected By” Section of a Dictionary Entry | 1–19 |
| 1.4.4.2 The “Arguments” Section of a Dictionary Entry | 1–19 |
| 1.4.4.3 The “Arguments and Values” Section of a Dictionary Entry | 1–19 |
| 1.4.4.4 The “Binding Types Affected” Section of a Dictionary Entry | 1–19 |
| 1.4.4.5 The “Class Precedence List” Section of a Dictionary Entry | 1–19 |
| 1.4.4.6 Dictionary Entries for Type Specifiers | 1–20 |
| 1.4.4.6.1 The “Compound Type Specifier Kind” Section of a Dictionary Entry | 1–20 |
| 1.4.4.6.2 The “Compound Type Specifier Syntax” Section of a Dictionary Entry | 1–20 |
| 1.4.4.6.3 The “Compound Type Specifier Arguments” Section of a Dictionary Entry | 1–21 |
| 1.4.4.6.4 The “Compound Type Specifier Description” Section of a Dictionary Entry | 1–21 |
| 1.4.4.7 The “Constant Value” Section of a Dictionary Entry | 1–21 |
| 1.4.4.8 The “Description” Section of a Dictionary Entry | 1–21 |
| 1.4.4.9 The “Examples” Section of a Dictionary Entry | 1–21 |
| 1.4.4.10 The “Exceptional Situations” Section of a Dictionary Entry | 1–21 |
| 1.4.4.11 The “Initial Value” Section of a Dictionary Entry | 1–21 |
| 1.4.4.12 The “Argument Precedence Order” Section of a Dictionary Entry | 1–22 |
| 1.4.4.13 The “Method Signature” Section of a Dictionary Entry | 1–22 |
| 1.4.4.14 The “Name” Section of a Dictionary Entry | 1–22 |
| 1.4.4.15 The “Notes” Section of a Dictionary Entry | 1–24 |
| 1.4.4.16 The “Pronunciation” Section of a Dictionary Entry | 1–24 |
| 1.4.4.17 The “See Also” Section of a Dictionary Entry | 1–24 |
| 1.4.4.18 The “Side Effects” Section of a Dictionary Entry | 1–24 |
| 1.4.4.19 The “Supertypes” Section of a Dictionary Entry | 1–24 |
| 1.4.4.20 The “Syntax” Section of a Dictionary Entry | 1–24 |
| 1.4.4.20.1 Special “Syntax” Notations for Overloaded Operators | 1–25 |
| 1.4.4.20.2 Naming Conventions for Rest Parameters | 1–25 |
| 1.4.4.20.3 Requiring Non-Null Rest Parameters in the “Syntax” Section | 1–25 |
| 1.4.4.20.4 Return values in the “Syntax” Section | 1–26 |
| 1.4.4.20.4.1 No Arguments or Values in the “Syntax” Section | 1–26 |
| 1.4.4.20.4.2 Unconditional Transfer of Control in the “Syntax” Section | 1–26 |
| 1.4.4.21 The “Valid Context” Section of a Dictionary Entry | 1–26 |
| 1.4.4.22 The “Value Type” Section of a Dictionary Entry | 1–26 |
| 1.5 Conformance | 1–28 |
| 1.5.1 Conforming Implementations | 1–28 |
| 1.5.1.1 Required Language Features | 1–28 |
| 1.5.1.2 Documentation of Implementation-Dependent Features | 1–28 |
| 1.5.1.3 Documentation of Extensions | 1–28 |
| 1.5.1.4 Treatment of Exceptional Situations | 1–28 |
| 1.5.1.4.1 Resolution of Apparent Conflicts in Exceptional Situations | 1–28 |
| 1.5.1.4.1.1 Examples of Resolution of Apparent Conflicts in Exceptional Situations | 1–28 |
| 1.5.1.5 Conformance Statement | 1–29 |
| 1.5.2 Conforming Programs | 1–29 |
| 1.5.2.1 Use of Implementation-Defined Language Features | 1–29 |
| 1.5.2.1.1 Use of Read-Time Conditionals | 1–30 |
| 1.5.2.2 Character Set for Portable Code | 1–30 |
| 1.6 Language Extensions | 1–31 |
| 1.7 Language Subsets | 1–32 |
| 1.8 Deprecated Language Features | 1–33 |
| 1.8.1 Deprecated Functions | 1–33 |
| 1.8.2 Deprecated Argument Conventions | 1–33 |
| 1.8.3 Deprecated Variables | 1–33 |
| 1.8.4 Deprecated Reader Syntax | 1–34 |
| 1.9 Symbols in the COMMON-LISP Package | 1–35 |

### Chapter 2 (Syntax)

| Topic | Page(s) |
|-------|---------|
| 2.1 Character Syntax | 2–1 |
| 2.1.1 Readtables | 2–1 |
| 2.1.1.1 The Current Readtable | 2–1 |
| 2.1.1.2 The Standard Readtable | 2–1 |
| 2.1.1.3 The Initial Readtable | 2–1 |
| 2.1.2 Variables that affect the Lisp Reader | 2–2 |
| 2.1.3 Standard Characters | 2–2 |
| 2.1.4 Character Syntax Types | 2–4 |
| 2.1.4.1 Constituent Characters | 2–6 |
| 2.1.4.2 Constituent Traits | 2–6 |
| 2.1.4.3 Invalid Characters | 2–8 |
| 2.1.4.4 Macro Characters | 2–8 |
| 2.1.4.5 Multiple Escape Characters | 2–8 |
| 2.1.4.5.1Examples of Multiple Escape Characters | 2–9 |
| 2.1.4.6Single Escape Character | 2–9 |
| 2.1.4.6.1Examples of Single Escape Characters | 2–9 |
| 2.1.4.7Whitespace Characters | 2–9 |
| 2.1.4.7.1Examples of Whitespace Characters | 2–9 |
| 2.2 Reader Algorithm | 2–11 |
| 2.3 Interpretation of Tokens | 2–14 |
| 2.3.1 Numbers as Tokens | 2–14 |
| 2.3.1.1 Potential Numbers as Tokens | 2–14 |
| 2.3.1.1.1 Escape Characters and Potential Numbers | 2–15 |
| 2.3.1.1.2 Examples of Potential Numbers | 2–15 |
| 2.3.2 Constructing Numbers from Tokens | 2–16 |
| 2.3.2.1 Syntax of a Rational | 2–16 |
| 2.3.2.1.1 Syntax of an Integer | 2–16 |
| 2.3.2.1.2 Syntax of a Ratio | 2–16 |
| 2.3.2.2 Syntax of a Float | 2–17 |
| 2.3.2.3 Syntax of a Complex | 2–18 |
| 2.3.3 The Consing Dot | 2–18 |
| 2.3.4 Symbols as Tokens | 2–18 |
| 2.3.5 Valid Patterns for Tokens | 2–20 |
| 2.3.6 Package System Consistency Rules | 2–22 |
| 2.4 Standard Macro Characters | 2–23 |
| 2.4.1 Left-Parenthesis | 2–23 |
| 2.4.2 Right-Parenthesis | 2–23 |
| 2.4.3 Single-Quote | 2–23 |
| 2.4.3.1 Examples of Single-Quote | 2–24 |
| 2.4.4 Semicolon | 2–24 |
| 2.4.4.1 Examples of Semicolon | 2–24 |
| 2.4.4.2 Notes about Style for Semicolon | 2–24 |
| 2.4.4.2.1 Use of Single Semicolon | 2–24 |
| 2.4.4.2.2 Use of Double Semicolon | 2–24 |
| 2.4.4.2.3 Use of Triple Semicolon | 2–25 |
| 2.4.4.2.4 Use of Quadruple Semicolon | 2–25 |
| 2.4.4.2.5 Examples of Style for Semicolon | 2–25 |
| 2.4.5 Double-Quote | 2–25 |
| 2.4.6 Backquote | 2–26 |
| 2.4.6.1 Notes about Backquote | 2–28 |
| 2.4.7 Comma | 2–28 |
| 2.4.8 Sharpsign | 2–28 |
| 2.4.8.1Sharpsign Backslash | 2–31 |
| 2.4.8.2Sharpsign Single-Quote | 2–31 |
| 2.4.8.3Sharpsign Left-Parenthesis | 2–31 |
| 2.4.8.4 Sharpsign Asterisk | 2–32 |
| 2.4.8.4.1 Examples of Sharpsign Asterisk | 2–32 |
| 2.4.8.5 Sharpsign Colon | 2–32 |
| 2.4.8.6 Sharpsign Dot | 2–33 |
| 2.4.8.7 Sharpsign B | 2–33 |
| 2.4.8.8 Sharpsign O | 2–33 |
| 2.4.8.9 Sharpsign X | 2–33 |
| 2.4.8.10 Sharpsign R | 2–34 |
| 2.4.8.11 Sharpsign C | 2–34 |
| 2.4.8.12 Sharpsign A | 2–35 |
| 2.4.8.13 Sharpsign S | 2–35 |
| 2.4.8.14Sharpsign P | 2–36 |
| 2.4.8.15Sharpsign Equal-Sign | 2–36 |
| 2.4.8.16Sharpsign Sharpsign | 2–36 |
| 2.4.8.17 Sharpsign Plus | 2–37 |
| 2.4.8.18 Sharpsign Minus | 2–37 |
| 2.4.8.19 Sharpsign Vertical-Bar | 2–37 |
| 2.4.8.19.1Examples of Sharpsign Vertical-Bar | 2–38 |
| 2.4.8.19.2 Notes about Style for Sharpsign Vertical-Bar | 2–39 |
| 2.4.8.20 Sharpsign Less-Than-Sign | 2–39 |
| 2.4.8.21 Sharpsign Whitespace | 2–39 |
| 2.4.8.22 Sharpsign Right-Parenthesis | 2–39 |
| 2.4.9 Re-Reading Abbreviated Expressions | 2–40 |

### Chapter 3 (Evaluation and Compilation)

| Topic | Page(s) |
|-------|---------|
| 3.1 Evaluation | 3–1 |
| 3.1.1 Introduction to Environments | 3–1 |
| 3.1.1.1 The Global Environment | 3–1 |
| 3.1.1.2 Dynamic Environments | 3–1 |
| 3.1.1.3 Lexical Environments | 3–2 |
| 3.1.1.3.1 The Null Lexical Environment | 3–2 |
| 3.1.1.4 Environment Objects | 3–3 |
| 3.1.2 The Evaluation Model | 3–3 |
| 3.1.2.1 Form Evaluation | 3–3 |
| 3.1.2.1.1 Symbols as Forms | 3–3 |
| 3.1.2.1.1.1 Lexical Variables | 3–4 |
| 3.1.2.1.1.2 Dynamic Variables | 3–4 |
| 3.1.2.1.1.3 Constant Variables | 3–5 |
| 3.1.2.1.1.4 Symbols Naming Both Lexical and Dynamic Variables | 3–5 |
| 3.1.2.1.2 Conses as Forms | 3–5 |
| 3.1.2.1.2.1 Special Forms | 3–6 |
| 3.1.2.1.2.2 Macro Forms | 3–6 |
| 3.1.2.1.2.3 Function Forms | 3–7 |
| 3.1.2.1.2.4Lambda Forms | 3–8 |
| 3.1.2.1.3Self-Evaluating Objects | 3–8 |
| 3.1.2.1.3.1Examples of Self-Evaluating Objects | 3–8 |
| 3.1.3 Lambda Expressions | 3–9 |
| 3.1.4 Closures and Lexical Binding | 3–9 |
| 3.1.5 Shadowing | 3–11 |
| 3.1.6 Extent | 3–12 |
| 3.1.7 Return Values | 3–13 |
| 3.2 Compilation | 3–14 |
| 3.2.1 Compiler Terminology | 3–14 |
| 3.2.2 Compilation Semantics | 3–15 |
| 3.2.2.1 Compiler Macros | 3–15 |
| 3.2.2.1.1 Purpose of Compiler Macros | 3–16 |
| 3.2.2.1.2 Naming of Compiler Macros | 3–16 |
| 3.2.2.1.3 When Compiler Macros Are Used | 3–17 |
| 3.2.2.1.3.1 Notes about the Implementation of Compiler Macros | 3–17 |
| 3.2.2.2 Minimal Compilation | 3–17 |
| 3.2.2.3 Semantic Constraints | 3–18 |
| 3.2.3 File Compilation | 3–19 |
| 3.2.3.1 Processing of Top Level Forms | 3–20 |
| 3.2.3.1.1 Processing of Defining Macros | 3–22 |
| 3.2.3.1.2 Constraints on Macros and Compiler Macros | 3–22 |
| 3.2.4 Literal Objects in Compiled Files | 3–23 |
| 3.2.4.1 Externalizable Objects | 3–23 |
| 3.2.4.2 Similarity of Literal Objects | 3–24 |
| 3.2.4.2.1 Similarity of Aggregate Objects | 3–24 |
| 3.2.4.2.2 Definition of Similarity | 3–24 |
| 3.2.4.3 Extensions to Similarity Rules | 3–26 |
| 3.2.4.4 Additional Constraints on Externalizable Objects | 3–26 |
| 3.2.5 Exceptional Situations in the Compiler | 3–27 |
| 3.3 Declarations | 3–29 |
| 3.3.1 Minimal Declaration Processing Requirements | 3–29 |
| 3.3.2 Declaration Specifiers | 3–29 |
| 3.3.3 Declaration Identifiers | 3–29 |
| 3.3.3.1 Shorthand notation for Type Declarations | 3–30 |
| 3.3.4 Declaration Scope | 3–30 |
| 3.3.4.1 Examples of Declaration Scope | 3–30 |
| 3.4 Lambda Lists | 3–33 |
| 3.4.1 Ordinary Lambda Lists | 3–33 |
| 3.4.1.1 Specifiers for the required parameters | 3–34 |
| 3.4.1.2 Specifiers for optional parameters | 3–35 |
| 3.4.1.3 A specifier for a rest parameter | 3–35 |
| 3.4.1.4 Specifiers for keyword parameters | 3–35 |
| 3.4.1.4.1 Suppressing Keyword Argument Checking | 3–36 |
| 3.4.1.4.1.1Examples of Suppressing Keyword Argument Checking | 3–37 |
| 3.4.1.5Specifiers for **&aux** variables | 3–37 |
| 3.4.1.6Examples of Ordinary Lambda Lists | 3–37 |
| 3.4.2 Generic Function Lambda Lists | 3–39 |
| 3.4.3 Specialized Lambda Lists | 3–40 |
| 3.4.4 Macro Lambda Lists | 3–41 |
| 3.4.4.1 Destructuring by Lambda Lists | 3–42 |
| 3.4.4.1.1 Data-directed Destructuring by Lambda Lists | 3–43 |
| 3.4.4.1.1.1 Examples of Data-directed Destructuring by Lambda Lists | 3–43 |
| 3.4.4.1.2 Lambda-list-directed Destructuring by Lambda Lists | 3–43 |
| 3.4.5 Destructuring Lambda Lists | 3–45 |
| 3.4.6 Boa Lambda Lists | 3–45 |
| 3.4.7 Defsetf Lambda Lists | 3–47 |
| 3.4.8 Deftype Lambda Lists | 3–47 |
| 3.4.9 Define-modify-macro Lambda Lists | 3–47 |
| 3.4.10 Define-method-combination Arguments Lambda Lists | 3–48 |
| 3.4.11 Syntactic Interaction of Documentation Strings and Declarations | 3–48 |
| 3.5 Error Checking in Function Calls | 3–49 |
| 3.5.1 Argument Mismatch Detection | 3–49 |
| 3.5.1.1 Safe and Unsafe Calls | 3–49 |
| 3.5.1.1.1 Error Detection Time in Safe Calls | 3–50 |
| 3.5.1.2 Too Few Arguments | 3–50 |
| 3.5.1.3 Too Many Arguments | 3–50 |
| 3.5.1.4 Unrecognized Keyword Arguments | 3–50 |
| 3.5.1.5 Invalid Keyword Arguments | 3–50 |
| 3.5.1.6 Odd Number of Keyword Arguments | 3–51 |
| 3.5.1.7 Destructuring Mismatch | 3–51 |
| 3.5.1.8 Errors When Calling a Next Method | 3–51 |
| 3.6 Traversal Rules and Side Effects | 3–52 |
| 3.7 Destructive Operations | 3–53 |
| 3.7.1 Modification of Literal Objects | 3–53 |
| 3.7.2 Transfer of Control during a Destructive Operation | 3–54 |
| 3.7.2.1 Examples of Transfer of Control during a Destructive Operation | 3–54 |
| 3.8 Evaluation and Compilation Dictionary | 3–55 |

### Chapter 4 (Types and Classes)

| Topic | Page(s) |
|-------|---------|
| 4.1 Introduction | 4–1 |
| 4.2 Types | 4–2 |
| 4.2.1 Data Type Definition | 4–2 |
| 4.2.2 Type Relationships | 4–2 |
| 4.2.3 Type Specifiers | 4–3 |
| 4.3 Classes | 4–8 |
| 4.3.1 Introduction to Classes | 4–8 |
| 4.3.1.1 Standard Metaclasses | 4–9 |
| 4.3.2 Defining Classes | 4–9 |
| 4.3.3 Creating Instances of Classes | 4–10 |
| 4.3.4 Inheritance | 4–11 |
| 4.3.4.1 Examples of Inheritance | 4–11 |
| 4.3.4.2 Inheritance of Class Options | 4–11 |
| 4.3.5 Determining the Class Precedence List | 4–11 |
| 4.3.5.1 Topological Sorting | 4–12 |
| 4.3.5.2 Examples of Class Precedence List Determination | 4–13 |
| 4.3.6 Redefining Classes | 4–14 |
| 4.3.6.1 Modifying the Structure of Instances | 4–15 |
| 4.3.6.2 Initializing Newly Added Local Slots | 4–15 |
| 4.3.6.3 Customizing Class Redefinition | 4–16 |
| 4.3.7 Integrating Types and Classes | 4–16 |
| 4.4 Types and Classes Dictionary | 4–19 |

### Chapter 5 (Data and Control Flow)

| Topic | Page(s) |
|-------|---------|
| 5.1 Generalized Reference | 5–1 |
| 5.1.1 Overview of Places and Generalized Reference | 5–1 |
| 5.1.1.1 Evaluation of Subforms to Places | 5–1 |
| 5.1.1.1.1Examples of Evaluation of Subforms to Places | 5–2 |
| 5.1.1.2 Setf Expansions | 5–3 |
| 5.1.1.2.1 Examples of Setf Expansions | 5–4 |
| 5.1.2 Kinds of Places | 5–5 |
| 5.1.2.1 Variable Names as Places | 5–5 |
| 5.1.2.2 Function Call Forms as Places | 5–5 |
| 5.1.2.3 VALUES Forms as Places | 5–9 |
| 5.1.2.4 THE Forms as Places | 5–9 |
| 5.1.2.5 APPLY Forms as Places | 5–9 |
| 5.1.2.6 Setf Expansions and Places | 5–10 |
| 5.1.2.7 Macro Forms as Places | 5–10 |
| 5.1.2.8 Symbol Macros as Places | 5–10 |
| 5.1.2.9 Other Compound Forms as Places | 5–10 |
| 5.1.3 Treatment of Other Macros Based on SETF | 5–11 |
| 5.2 Transfer of Control to an Exit Point | 5–13 |
| 5.3 Data and Control Flow Dictionary | 5–14 |

### Chapter 6 (Iteration)

| Topic | Page(s) |
|-------|---------|
| 6.1The LOOP Facility | 6–1 |
| 6.1.1Overview of the Loop Facility | 6–1 |
| 6.1.1.1Simple vs Extended Loop | 6–1 |
| 6.1.1.1.1Simple Loop | 6–1 |
| 6.1.1.1.2Extended Loop | 6–1 |
| 6.1.1.2Loop Keywords | 6–1 |
| 6.1.1.3Parsing Loop Clauses | 6–1 |
| 6.1.1.4 Expanding Loop Forms | 6–2 |
| 6.1.1.5 Summary of Loop Clauses | 6–3 |
| 6.1.1.5.1 Summary of Variable Initialization and Stepping Clauses | 6–3 |
| 6.1.1.5.2 Summary of Value Accumulation Clauses | 6–3 |
| 6.1.1.5.3 Summary of Termination Test Clauses | 6–4 |
| 6.1.1.5.4 Summary of Unconditional Execution Clauses | 6–4 |
| 6.1.1.5.5 Summary of Conditional Execution Clauses | 6–5 |
| 6.1.1.5.6 Summary of Miscellaneous Clauses | 6–5 |
| 6.1.1.6 Order of Execution | 6–5 |
| 6.1.1.7 Destructuring | 6–6 |
| 6.1.1.8 Restrictions on Side-Effects | 6–8 |
| 6.1.2 Variable Initialization and Stepping Clauses | 6–8 |
| 6.1.2.1 Iteration Control | 6–8 |
| 6.1.2.1.1 The for-as-arithmetic subclause | 6–9 |
| 6.1.2.1.1.1Examples of for-as-arithmetic subclause | 6–10 |
| 6.1.2.1.2The for-as-in-list subclause | 6–11 |
| 6.1.2.1.2.1Examples of for-as-in-list subclause | 6–11 |
| 6.1.2.1.3 The for-as-on-list subclause | 6–12 |
| 6.1.2.1.3.1 Examples of for-as-on-list subclause | 6–12 |
| 6.1.2.1.4 The for-as-equals-then subclause | 6–12 |
| 6.1.2.1.4.1 Examples of for-as-equals-then subclause | 6–12 |
| 6.1.2.1.5 The for-as-across subclause | 6–12 |
| 6.1.2.1.5.1 Examples of for-as-across subclause | 6–13 |
| 6.1.2.1.6 The for-as-hash subclause | 6–13 |
| 6.1.2.1.7 The for-as-package subclause | 6–14 |
| 6.1.2.1.7.1 Examples of for-as-package subclause | 6–15 |
| 6.1.2.2 Local Variable Initializations | 6–15 |
| 6.1.2.2.1Examples of WITH clause | 6–16 |
| 6.1.3 Value Accumulation Clauses | 6–17 |
| 6.1.3.1Examples of COLLECT clause | 6–19 |
| 6.1.3.2Examples of APPEND and NCONC clauses | 6–19 |
| 6.1.3.3Examples of COUNT clause | 6–20 |
| 6.1.3.4Examples of MAXIMIZE and MINIMIZE clauses | 6–20 |
| 6.1.3.5Examples of SUM clause | 6–20 |
| 6.1.4 Termination Test Clauses | 6–21 |
| 6.1.4.1Examples of REPEAT clause | 6–22 |
| 6.1.4.2Examples of ALWAYS, NEVER, and THEREIS clauses | 6–22 |
| 6.1.4.3Examples of WHILE and UNTIL clauses | 6–24 |
| 6.1.5Unconditional Execution Clauses | 6–24 |
| 6.1.5.1Examples of unconditional execution | 6–24 |
| 6.1.6Conditional Execution Clauses | 6–25 |
| 6.1.6.1Examples of WHEN clause | 6–25 |
| 6.1.7 Miscellaneous Clauses | 6–26 |
| 6.1.7.1Control Transfer Clauses | 6–27 |
| 6.1.7.1.1Examples of NAMED clause | 6–27 |
| 6.1.7.2Initial and Final Execution | 6–27 |
| 6.1.8Examples of Miscellaneous Loop Features | 6–27 |
| 6.1.8.1Examples of clause grouping | 6–28 |
| 6.1.9 Notes about Loop | 6–30 |
| 6.2 Iteration Dictionary | 6–31 |

### Chapter 7 (Objects)

| Topic | Page(s) |
|-------|---------|
| 7.1 Object Creation and Initialization | 7–1 |
| 7.1.1 Initialization Arguments | 7–2 |
| 7.1.2 Declaring the Validity of Initialization Arguments | 7–2 |
| 7.1.3 Defaulting of Initialization Arguments | 7–3 |
| 7.1.4 Rules for Initialization Arguments | 7–4 |
| 7.1.5 Shared-Initialize | 7–5 |
| 7.1.6 Initialize-Instance | 7–6 |
| 7.1.7 Definitions of Make-Instance and Initialize-Instance | 7–7 |
| 7.2 Changing the Class of an Instance | 7–9 |
| 7.2.1 Modifying the Structure of the Instance | 7–9 |
| 7.2.2 Initializing Newly Added Local Slots | 7–9 |
| 7.2.3 Customizing the Change of Class of an Instance | 7–10 |
| 7.3 Reinitializing an Instance | 7–11 |
| 7.3.1 Customizing Reinitialization | 7–11 |
| 7.4 Meta-Objects | 7–12 |
| 7.4.1 Standard Meta-objects | 7–12 |
| 7.5 Slots | 7–13 |
| 7.5.1 Introduction to Slots | 7–13 |
| 7.5.2 Accessing Slots | 7–13 |
| 7.5.3 Inheritance of Slots and Slot Options | 7–14 |
| 7.6 Generic Functions and Methods | 7–16 |
| 7.6.1 Introduction to Generic Functions | 7–16 |
| 7.6.2 Introduction to Methods | 7–17 |
| 7.6.3 Agreement on Parameter Specializers and Qualifiers | 7–19 |
| 7.6.4 Congruent Lambda-lists for all Methods of a Generic Function | 7–19 |
| 7.6.5 Keyword Arguments in Generic Functions and Methods | 7–20 |
| 7.6.5.1 Examples of Keyword Arguments in Generic Functions and Methods | 7–20 |
| 7.6.6 Method Selection and Combination | 7–21 |
| 7.6.6.1 Determining the Effective Method | 7–21 |
| 7.6.6.1.1 Selecting the Applicable Methods | 7–21 |
| 7.6.6.1.2 Sorting the Applicable Methods by Precedence Order | 7–22 |
| 7.6.6.1.3 Applying method combination to the sorted list of applicable methods | 7–22 |
| 7.6.6.2 Standard Method Combination | 7–23 |
| 7.6.6.3 Declarative Method Combination | 7–24 |
| 7.6.6.4 Built-in Method Combination Types | 7–25 |
| 7.6.7 Inheritance of Methods | 7–26 |
| 7.7 Objects Dictionary | 7–27 |

### Chapter 8 (Structures)

| Topic | Page(s) |
|-------|---------|
| 8.1 Structures Dictionary | 8–1 |

### Chapter 9 (Conditions)

| Topic | Page(s) |
|-------|---------|
| 9.1 Condition System Concepts | 9–1 |
| 9.1.1 Condition Types | 9–2 |
| 9.1.1.1 Serious Conditions | 9–3 |
| 9.1.2 Creating Conditions | 9–3 |
| 9.1.2.1 Condition Designators | 9–3 |
| 9.1.3 Printing Conditions | 9–4 |
| 9.1.3.1 Recommended Style in Condition Reporting | 9–4 |
| 9.1.3.1.1Capitalization and Punctuation in Condition Reports | 9–5 |
| 9.1.3.1.2Leading and Trailing Newlines in Condition Reports | 9–5 |
| 9.1.3.1.3Embedded Newlines in Condition Reports | 9–5 |
| 9.1.3.1.4 Note about Tabs in Condition Reports | 9–6 |
| 9.1.3.1.5 Mentioning Containing Function in Condition Reports | 9–6 |
| 9.1.4 Signaling and Handling Conditions | 9–6 |
| 9.1.4.1 Signaling | 9–7 |
| 9.1.4.1.1 Resignaling a Condition | 9–7 |
| 9.1.4.2 Restarts | 9–8 |
| 9.1.4.2.1 Interactive Use of Restarts | 9–9 |
| 9.1.4.2.2 Interfaces to Restarts | 9–9 |
| 9.1.4.2.3 Restart Tests | 9–9 |
| 9.1.4.2.4 Associating a Restart with a Condition | 9–9 |
| 9.1.5 Assertions | 9–10 |
| 9.1.6 Notes about the Condition System’s Background | 9–10 |
| 9.2 Conditions Dictionary | 9–11 |

### Chapter 10 (Symbols)

| Topic | Page(s) |
|-------|---------|
| 10.1 Symbol Concepts | 10–1 |
| 10.2 Symbols Dictionary | 10–2 |

### Chapter 11 (Packages)

| Topic | Page(s) |
|-------|---------|
| 11.1 Package Concepts | 11–1 |
| 11.1.1 Introduction to Packages | 11–1 |
| 11.1.1.1 Package Names and Nicknames | 11–1 |
| 11.1.1.2 Symbols in a Package | 11–1 |
| 11.1.1.2.1 Internal and External Symbols | 11–1 |
| 11.1.1.2.2 Package Inheritance | 11–2 |
| 11.1.1.2.3 Accessibility of Symbols in a Package | 11–2 |
| 11.1.1.2.4 Locating a Symbol in a Package | 11–3 |
| 11.1.1.2.5 Prevention of Name Conflicts in Packages | 11–3 |
| 11.1.2 Standardized Packages | 11–4 |
| 11.1.2.1 The COMMON-LISP Package | 11–4 |
| 11.1.2.1.1 Constraints on the COMMON-LISP Package for Conforming Implementations | 11–5 |
| 11.1.2.1.2 Constraints on the COMMON-LISP Package for Conforming Programs | 11–5 |
| 11.1.2.1.2.1 Some Exceptions to Constraints on the COMMON-LISP Package for Conforming

Programs | 11–6 |
| 11.1.2.2 The COMMON-LISP-USER Package | 11–6 |
| 11.1.2.3 The KEYWORD Package | 11–7 |
| 11.1.2.3.1 Interning a Symbol in the KEYWORD Package | 11–7 |
| 11.1.2.3.2 Notes about The KEYWORD Package | 11–7 |
| 11.1.2.4 Implementation-Defined Packages | 11–7 |
| 11.2 Packages Dictionary | 11–8 |

### Chapter 12 (Numbers)

| Topic | Page(s) |
|-------|---------|
| 12.1 Number Concepts | 12–1 |
| 12.1.1 Numeric Operations | 12–1 |
| 12.1.1.1 Associativity and Commutativity in Numeric Operations | 12–2 |
| 12.1.1.1.1 Examples of Associativity and Commutativity in Numeric Operations | 12–2 |
| 12.1.1.2 Contagion in Numeric Operations | 12–3 |
| 12.1.1.3 Viewing Integers as Bits and Bytes | 12–3 |
| 12.1.1.3.1 Logical Operations on Integers | 12–3 |
| 12.1.1.3.2 Byte Operations on Integers | 12–3 |
| 12.1.2 Implementation-Dependent Numeric Constants | 12–4 |
| 12.1.3 Rational Computations | 12–4 |
| 12.1.3.1 Rule of Unbounded Rational Precision | 12–4 |
| 12.1.3.2 Rule of Canonical Representation for Rationals | 12–5 |
| 12.1.3.3 Rule of Float Substitutability | 12–5 |
| 12.1.4Floating-point Computations | 12–6 |
| 12.1.4.1Rule of Float and Rational Contagion | 12–6 |
| 12.1.4.1.1Examples of Rule of Float and Rational Contagion | 12–6 |
| 12.1.4.2 Rule of Float Approximation | 12–7 |
| 12.1.4.3 Rule of Float Underflow and Overflow | 12–7 |
| 12.1.4.4 Rule of Float Precision Contagion | 12–7 |
| 12.1.5 Complex Computations | 12–7 |
| 12.1.5.1 Rule of Complex Substitutability | 12–8 |
| 12.1.5.2 Rule of Complex Contagion | 12–8 |
| 12.1.5.3 Rule of Canonical Representation for Complex Rationals | 12–8 |
| 12.1.5.3.1 Examples of Rule of Canonical Representation for Complex Rationals | 12–8 |
| 12.1.5.4 Principal Values and Branch Cuts | 12–8 |
| 12.1.6 Interval Designators | 12–9 |
| 12.1.7 Random-State Operations | 12–10 |
| 12.2 Numbers Dictionary | 12–11 |

### Chapter 13 (Characters)

| Topic | Page(s) |
|-------|---------|
| 13.1 Character Concepts | 13–1 |
| 13.1.1 Introduction to Characters | 13–1 |
| 13.1.2 Introduction to Scripts and Repertoires | 13–1 |
| 13.1.2.1 Character Scripts | 13–1 |
| 13.1.2.2 Character Repertoires | 13–2 |
| 13.1.3 Character Attributes | 13–2 |
| 13.1.4 Character Categories | 13–2 |
| 13.1.4.1 Graphic Characters | 13–3 |
| 13.1.4.2 Alphabetic Characters | 13–3 |
| 13.1.4.3 Characters With Case | 13–3 |
| 13.1.4.3.1 Uppercase Characters | 13–3 |
| 13.1.4.3.2 Lowercase Characters | 13–4 |
| 13.1.4.3.3 Corresponding Characters in the Other Case | 13–4 |
| 13.1.4.3.4 Case of Implementation-Defined Characters | 13–4 |
| 13.1.4.4 Numeric Characters | 13–4 |
| 13.1.4.5 Alphanumeric Characters | 13–4 |
| 13.1.4.6 Digits in a Radix | 13–4 |
| 13.1.5 Identity of Characters | 13–5 |
| 13.1.6 Ordering of Characters | 13–5 |
| 13.1.7 Character Names | 13–5 |
| 13.1.8 Treatment of Newline during Input and Output | 13–6 |
| 13.1.9 Character Encodings | 13–7 |
| 13.1.10 Documentation of Implementation-Defined Scripts | 13–7 |
| 13.2 Characters Dictionary | 13–8 |

### Chapter 14 (Conses)

| Topic | Page(s) |
|-------|---------|
| 14.1 Cons Concepts | 14–1 |
| 14.1.1 Conses as Trees | 14–1 |
| 14.1.1.1 General Restrictions on Parameters that must be Trees | 14–1 |
| 14.1.2 Conses as Lists | 14–1 |
| 14.1.2.1 Lists as Association Lists | 14–2 |
| 14.1.2.2 Lists as Sets | 14–2 |
| 14.1.2.3 General Restrictions on Parameters that must be Lists | 14–3 |
| 14.2 Conses Dictionary | 14–4 |

### Chapter 15 (Arrays)

| Topic | Page(s) |
|-------|---------|
| 15.1 Array Concepts | 15–1 |
| 15.1.1 Array Elements | 15–1 |
| 15.1.1.1 Array Indices | 15–1 |
| 15.1.1.2 Array Dimensions | 15–1 |
| 15.1.1.2.1 Implementation Limits on Individual Array Dimensions | 15–1 |
| 15.1.1.3 Array Rank | 15–1 |
| 15.1.1.3.1 Vectors | 15–1 |
| 15.1.1.3.1.1 Fill Pointers | 15–1 |
| 15.1.1.3.2 Multidimensional Arrays | 15–2 |
| 15.1.1.3.2.1 Storage Layout for Multidimensional Arrays | 15–2 |
| 15.1.1.3.2.2 Implementation Limits on Array Rank | 15–2 |
| 15.1.2 Specialized Arrays | 15–2 |
| 15.1.2.1 Array Upgrading | 15–3 |
| 15.1.2.2 Required Kinds of Specialized Arrays | 15–3 |
| 15.2 Arrays Dictionary | 15–5 |

### Chapter 16 (Strings)

| Topic | Page(s) |
|-------|---------|
| 16.1 String Concepts | 16–1 |
| 16.1.1 Implications of Strings Being Arrays | 16–1 |
| 16.1.2 Subtypes of STRING | 16–1 |
| 16.2 Strings Dictionary | 16–2 |

### Chapter 17 (Sequences)

| Topic | Page(s) |
|-------|---------|
| 17.1 Sequence Concepts | 17–1 |
| 17.1.1 General Restrictions on Parameters that must be Sequences | 17–1 |
| 17.2Rules about Test Functions | 17–2 |
| 17.2.1Satisfying a Two-Argument Test | 17–2 |
| 17.2.1.1Examples of Satisfying a Two-Argument Test | 17–2 |
| 17.2.2 Satisfying a One-Argument Test | 17–3 |
| 17.2.2.1 Examples of Satisfying a One-Argument Test | 17–4 |
| 17.3 Sequences Dictionary | 17–5 |

### Chapter 18 (Hash Tables)

| Topic | Page(s) |
|-------|---------|
| 18.1 Hash Table Concepts | 18–1 |
| 18.1.1 Hash-Table Operations | 18–1 |
| 18.1.2 Modifying Hash Table Keys | 18–1 |
| 18.1.2.1 Visible Modification of Objects with respect to EQ and EQL | 18–2 |
| 18.1.2.2 Visible Modification of Objects with respect to EQUAL | 18–2 |
| 18.1.2.2.1 Visible Modification of Conses with respect to EQUAL | 18–2 |
| 18.1.2.2.2 Visible Modification of Bit Vectors and Strings with respect to EQUAL | 18–2 |
| 18.1.2.3 Visible Modification of Objects with respect to EQUALP | 18–2 |
| 18.1.2.3.1 Visible Modification of Structures with respect to EQUALP | 18–2 |
| 18.1.2.3.2 Visible Modification of Arrays with respect to EQUALP | 18–3 |
| 18.1.2.3.3 Visible Modification of Hash Tables with respect to EQUALP | 18–3 |
| 18.1.2.4 Visible Modifications by Language Extensions | 18–3 |
| 18.2 Hash Tables Dictionary | 18–4 |

### Chapter 19 (Filenames)

| Topic | Page(s) |
|-------|---------|
| 19.1 Overview of Filenames | 19–1 |
| 19.1.1 Namestrings as Filenames | 19–1 |
| 19.1.2 Pathnames as Filenames | 19–1 |
| 19.1.3 Parsing Namestrings Into Pathnames | 19–2 |
| 19.2 Pathnames | 19–3 |
| 19.2.1 Pathname Components | 19–3 |
| 19.2.1.1 The Pathname Host Component | 19–3 |
| 19.2.1.2 The Pathname Device Component | 19–3 |
| 19.2.1.3 The Pathname Directory Component | 19–3 |
| 19.2.1.4 The Pathname Name Component | 19–3 |
| 19.2.1.5 The Pathname Type Component | 19–3 |
| 19.2.1.6 The Pathname Version Component | 19–3 |
| 19.2.2 Interpreting Pathname Component Values | 19–3 |
| 19.2.2.1 Strings in Component Values | 19–3 |
| 19.2.2.1.1 Special Characters in Pathname Components | 19–4 |
| 19.2.2.1.2 Case in Pathname Components | 19–4 |
| 19.2.2.1.2.1 Local Case in Pathname Components | 19–4 |
| 19.2.2.1.2.2 Common Case in Pathname Components | 19–4 |
| 19.2.2.2 Special Pathname Component Values | 19–5 |
| 19.2.2.2.1 NIL as a Component Value | 19–5 |
| 19.2.2.2.2 :WILD as a Component Value | 19–5 |
| 19.2.2.2.3 :UNSPECIFIC as a Component Value | 19–5 |
| 19.2.2.2.3.1 Relation between component values NIL and :UNSPECIFIC | 19–6 |
| 19.2.2.3 Restrictions on Wildcard Pathnames | 19–6 |
| 19.2.2.4 Restrictions on Examining Pathname Components | 19–6 |
| 19.2.2.4.1 Restrictions on Examining a Pathname Host Component | 19–7 |
| 19.2.2.4.2 Restrictions on Examining a Pathname Device Component | 19–7 |
| 19.2.2.4.3 Restrictions on Examining a Pathname Directory Component | 19–7 |
| 19.2.2.4.3.1 Directory Components in Non-Hierarchical File Systems | 19–8 |
| 19.2.2.4.4 Restrictions on Examining a Pathname Name Component | 19–9 |
| 19.2.2.4.5 Restrictions on Examining a Pathname Type Component | 19–9 |
| 19.2.2.4.6 Restrictions on Examining a Pathname Version Component | 19–9 |
| 19.2.2.4.7 Notes about the Pathname Version Component | 19–9 |
| 19.2.2.5 Restrictions on Constructing Pathnames | 19–9 |
| 19.2.3Merging Pathnames | 19–10 |
| 19.2.3.1Examples of Merging Pathnames | 19–10 |
| 19.3 Logical Pathnames | 19–12 |
| 19.3.1 Syntax of Logical Pathname Namestrings | 19–12 |
| 19.3.1.1 Additional Information about Parsing Logical Pathname Namestrings | 19–12 |
| 19.3.1.1.1 The Host part of a Logical Pathname Namestring | 19–13 |
| 19.3.1.1.2 The Device part of a Logical Pathname Namestring | 19–13 |
| 19.3.1.1.3 The Directory part of a Logical Pathname Namestring | 19–13 |
| 19.3.1.1.4 The Type part of a Logical Pathname Namestring | 19–13 |
| 19.3.1.1.5 The Version part of a Logical Pathname Namestring | 19–13 |
| 19.3.1.1.6 Wildcard Words in a Logical Pathname Namestring | 19–13 |
| 19.3.1.1.7 Lowercase Letters in a Logical Pathname Namestring | 19–13 |
| 19.3.1.1.8 Other Syntax in a Logical Pathname Namestring | 19–13 |
| 19.3.2 Logical Pathname Components | 19–14 |
| 19.3.2.1 Unspecific Components of a Logical Pathname | 19–14 |
| 19.3.2.2 Null Strings as Components of a Logical Pathname | 19–14 |
| 19.4 Filenames Dictionary | 19–15 |

### Chapter 20 (Files)

| Topic | Page(s) |
|-------|---------|
| 20.1 File System Concepts | 20–1 |
| 20.1.1 Coercion of Streams to Pathnames | 20–1 |
| 20.1.2 File Operations on Open and Closed Streams | 20–1 |
| 20.1.3 Truenames | 20–2 |
| 20.1.3.1 Examples of Truenames | 20–2 |
| 20.2 Files Dictionary | 20–3 |

### Chapter 21 (Streams)

| Topic | Page(s) |
|-------|---------|
| 21.1 Stream Concepts | 21–1 |
| 21.1.1 Introduction to Streams | 21–1 |
| 21.1.1.1 Abstract Classifications of Streams | 21–1 |
| 21.1.1.1.1 Input, Output, and Bidirectional Streams | 21–1 |
| 21.1.1.1.2 Open and Closed Streams | 21–2 |
| 21.1.1.1.3 Interactive Streams | 21–2 |
| 21.1.1.2 Abstract Classifications of Streams | 21–3 |
| 21.1.1.2.1 File Streams | 21–3 |
| 21.1.1.3 Other Subclasses of Stream | 21–3 |
| 21.1.2 Stream Variables | 21–4 |
| 21.1.3 Stream Arguments to Standardized Functions | 21–5 |
| 21.1.4 Restrictions on Composite Streams | 21–6 |
| 21.2 Streams Dictionary | 21–7 |

### Chapter 22 (Printer)

| Topic | Page(s) |
|-------|---------|
| 22.1 The Lisp Printer | 22–1 |
| 22.1.1 Overview of The Lisp Printer | 22–1 |
| 22.1.1.1 Multiple Possible Textual Representations | 22–1 |
| 22.1.1.1.1 Printer Escaping | 22–2 |
| 22.1.2 Printer Dispatching | 22–2 |
| 22.1.3 Default Print-Object Methods | 22–2 |
| 22.1.3.1 Printing Numbers | 22–2 |
| 22.1.3.1.1 Printing Integers | 22–2 |
| 22.1.3.1.2 Printing Ratios | 22–3 |
| 22.1.3.1.3 Printing Floats | 22–3 |
| 22.1.3.1.4 Printing Complexes | 22–3 |
| 22.1.3.1.5 Note about Printing Numbers | 22–3 |
| 22.1.3.2 Printing Characters | 22–4 |
| 22.1.3.3 Printing Symbols | 22–4 |
| 22.1.3.3.1 Package Prefixes for Symbols | 22–4 |
| 22.1.3.3.2 Effect of Readtable Case on the Lisp Printer | 22–5 |
| 22.1.3.3.2.1Examples of Effect of Readtable Case on the Lisp Printer | 22–6 |
| 22.1.3.4Printing Strings | 22–8 |
| 22.1.3.5Printing Lists and Conses | 22–8 |
| 22.1.3.6 Printing Bit Vectors | 22–9 |
| 22.1.3.7 Printing Other Vectors | 22–9 |
| 22.1.3.8 Printing Other Arrays | 22–9 |
| 22.1.3.9 Examples of Printing Arrays | 22–10 |
| 22.1.3.10 Printing Random States | 22–11 |
| 22.1.3.11 Printing Pathnames | 22–11 |
| 22.1.3.12 Printing Structures | 22–11 |
| 22.1.3.13 Printing Other Objects | 22–11 |
| 22.1.4Examples of Printer Behavior | 22–12 |
| 22.2 The Lisp Pretty Printer | 22–14 |
| 22.2.1 Pretty Printer Concepts | 22–14 |
| 22.2.1.1 Dynamic Control of the Arrangement of Output | 22–14 |
| 22.2.1.2 Format Directive Interface | 22–15 |
| 22.2.1.3Compiling Format Strings | 22–16 |
| 22.2.1.4Pretty Print Dispatch Tables | 22–16 |
| 22.2.1.5Pretty Printer Margins | 22–16 |
| 22.2.2Examples of using the Pretty Printer | 22–16 |
| 22.2.3 Notes about the Pretty Printer’s Background | 22–22 |
| 22.3 Formatted Output | 22–23 |
| 22.3.1 FORMAT Basic Output | 22–24 |
| 22.3.1.1 Tilde C: Character | 22–24 |
| 22.3.1.2 Tilde Percent: Newline | 22–25 |
| 22.3.1.3 Tilde Ampersand: Fresh-Line | 22–25 |
| 22.3.1.4 Tilde Vertical-Bar: Page | 22–25 |
| 22.3.1.5 Tilde Tilde: Tilde | 22–25 |
| 22.3.2 FORMAT Radix Control | 22–25 |
| 22.3.2.1 Tilde R: Radix | 22–25 |
| 22.3.2.2 Tilde D: Decimal | 22–26 |
| 22.3.2.3 Tilde B: Binary | 22–26 |
| 22.3.2.4 Tilde O: Octal | 22–26 |
| 22.3.2.5 Tilde X: Hexadecimal | 22–27 |
| 22.3.3 FORMAT Floating-Point Printers | 22–27 |
| 22.3.3.1 Tilde F: Fixed-Format Floating-Point | 22–27 |
| 22.3.3.2 Tilde E: Exponential Floating-Point | 22–28 |
| 22.3.3.3 Tilde G: General Floating-Point | 22–29 |
| 22.3.3.4 Tilde Dollarsign: Monetary Floating-Point | 22–30 |
| 22.3.4 FORMAT Printer Operations | 22–31 |
| 22.3.4.1 Tilde A: Aesthetic | 22–31 |
| 22.3.4.2 Tilde S: Standard | 22–31 |
| 22.3.4.3 Tilde W: Write | 22–31 |
| 22.3.5 FORMAT Pretty Printer Operations | 22–31 |
| 22.3.5.1 Tilde Underscore: Conditional Newline | 22–31 |
| 22.3.5.2 Tilde Less-Than-Sign: Logical Block | 22–32 |
| 22.3.5.3 Tilde I: Indent | 22–33 |
| 22.3.5.4 Tilde Slash: Call Function | 22–33 |
| 22.3.6 FORMAT Layout Control | 22–33 |
| 22.3.6.1 Tilde T: Tabulate | 22–33 |
| 22.3.6.2 Tilde Less-Than-Sign: Justification | 22–34 |
| 22.3.6.3 Tilde Greater-Than-Sign: End of Justification | 22–35 |
| 22.3.7 FORMAT Control-Flow Operations | 22–35 |
| 22.3.7.1 Tilde Asterisk: Go-To | 22–35 |
| 22.3.7.2Tilde Left-Bracket: Conditional Expression | 22–36 |
| 22.3.7.3 Tilde Right-Bracket: End of Conditional Expression | 22–37 |
| 22.3.7.4 Tilde Left-Brace: Iteration | 22–37 |
| 22.3.7.5 Tilde Right-Brace: End of Iteration | 22–38 |
| 22.3.7.6 Tilde Question-Mark: Recursive Processing | 22–38 |
| 22.3.8 FORMAT Miscellaneous Operations | 22–38 |
| 22.3.8.1 Tilde Left-Paren: Case Conversion | 22–39 |
| 22.3.8.2 Tilde Right-Paren: End of Case Conversion | 22–39 |
| 22.3.8.3 Tilde P: Plural | 22–39 |
| 22.3.9 FORMAT Miscellaneous Pseudo-Operations | 22–40 |
| 22.3.9.1 Tilde Semicolon: Clause Separator | 22–40 |
| 22.3.9.2 Tilde Circumflex: Escape Upward | 22–40 |
| 22.3.9.3 Tilde Newline: Ignored Newline | 22–41 |
| 22.3.10 Additional Information about FORMAT Operations | 22–41 |
| 22.3.10.1Nesting of FORMAT Operations | 22–42 |
| 22.3.10.2Missing and Additional FORMAT Arguments | 22–42 |
| 22.3.10.3Additional FORMAT Parameters | 22–42 |
| 22.3.10.4Undefined FORMAT Modifier Combinations | 22–42 |
| 22.3.11Examples of FORMAT | 22–42 |
| 22.3.12 Notes about FORMAT | 22–44 |
| 22.4Printer Dictionary | 22–46 |

### Chapter 23 (Reader)

| Topic | Page(s) |
|-------|---------|
| 23.1Reader Concepts | 23–1 |
| 23.1.1Dynamic Control of the Lisp Reader | 23–1 |
| 23.1.2Effect of Readtable Case on the Lisp Reader | 23–1 |
| 23.1.2.1Examples of Effect of Readtable Case on the Lisp Reader | 23–1 |
| 23.1.3 Argument Conventions of Some Reader Functions | 23–2 |
| 23.1.3.1 The EOF-ERROR-P argument | 23–2 |
| 23.1.3.2 The RECURSIVE-P argument | 23–2 |
| 23.2Reader Dictionary | 23–4 |

### Chapter 24 (System Construction)  

| Topic | Page(s) |
|-------|---------|
| 24.1 System Construction Concepts | 24–1 |
| 24.1.1 Loading | 24–1 |
| 24.1.2 Features | 24–1 |
| 24.1.2.1 Feature Expressions | 24–1 |
| 24.1.2.1.1 Examples of Feature Expressions | 24–2 |
| 24.2 System Construction Dictionary | 24–3 |

### Chapter 25 (Environment)

| Topic | Page(s) |
|-------|---------|
| 25.1 The External Environment | 25–1 |
| 25.1.1 Top level loop | 25–1 |
| 25.1.2 Debugging Utilities | 25–1 |
| 25.1.3 Environment Inquiry | 25–1 |
| 25.1.4 Time | 25–2 |
| 25.1.4.1 Decoded Time | 25–2 |
| 25.1.4.2 Universal Time | 25–3 |
| 25.1.4.3 Internal Time | 25–4 |
| 25.1.4.4 Seconds | 25–4 |
| 25.2 Environment Dictionary | 25–5 |

### Chapter 26 (Glossary)

| Topic | Page(s) |
|-------|---------|
| 26.1 Glossary | 26–1 |

### Chapter A (Appendix)

| Topic | Page(s) |
|-------|---------|
| A.1 Removed Language Features | A–1 |
| A.1.1 Requirements for removed and deprecated features | A–1 |
| A.1.2 Removed Types | A–1 |
| A.1.3 Removed Operators | A–1 |
| A.1.4 Removed Argument Conventions | A–1 |
| A.1.5 Removed Variables | A–1 |
| A.1.6 Removed Reader Syntax | A–1 |
| A.1.7 Packages No Longer Required | A–1 |

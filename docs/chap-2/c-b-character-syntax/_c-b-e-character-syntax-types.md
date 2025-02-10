The *Lisp reader* constructs an object from the input text by interpreting each character according to its syntax type. The *Lisp reader* cannot accept as input everything that the *Lisp printer* produces, and the *Lisp reader* has features that are not used by the *Lisp printer*. The *Lisp reader* can be used as a lexical analyzer for a more general user-written parser.

When the *Lisp reader* is invoked, it reads a single character from the input stream and dispatches according to the syntax type of that character. Every character that can appear in the input stream is of one of the syntax types shown in Figure 2–6.

<br>

**Figure 2–6. Possible Character Syntax Types**

<br>

| Syntax Type |
|---|---|
| constituent |
| macro character |
| single escape |
| multiple escape |
| whitespace<sub>2</sub> |
| invalid |

<br>

The syntax type of a character in a readtable determines how that character is interpreted by the *Lisp reader* while that readtable is the current readtable. At any given time, every character has exactly one syntax type.

<br>

Figure 2–7 lists the syntax type of each character in standard syntax.

<br>

**Figure 2–7. Character Syntax Types in Standard Syntax**

<br>

| Character | Syntax Type |
|---|---|
| Backspace | constituent |
| 0–9 | constituent |
| Tab | whitespace<sub>2</sub> |
| : | constituent |
| Newline | whitespace<sub>2</sub> |
| ; | terminating macro char |
| Linefeed | whitespace<sub>2</sub> |
| < | constituent |
| = | constituent |
| > | constituent |
| ? | constituent |
| ! | constituent |
| @ | constituent |
| " | terminating macro char |
| A–Z | constituent |
| # | non-terminating macro char |
| [ | constituent |
| $ | constituent |
| \ | single escape |
| % | constituent |
| ] | constituent |
| & | constituent |
| ’ | terminating macro char |
| ( | terminating macro char |
| ‘ | terminating macro char |
| ) | terminating macro char |
| a–z | constituent |
| * | constituent |
| { | constituent |
| + | constituent |
| | | multiple escape |
| , | terminating macro char |
| } | constituent |
| - | constituent |
| ~ | constituent |
| . | constituent |
| Rubout | constituent |
| / | constituent |

<br>

The characters marked with an asterisk (*) are initially constituents, but they are not used in any standard Common Lisp notations. These characters are explicitly reserved to the programmer.  `~` is not used in Common Lisp, and reserved to implementors. `$` and `%` are alphabetic<sub>2</sub> characters, but are not used in the names of any standard Common Lisp defined names.

Whitespace characters serve as separators but are otherwise ignored. Constituent and escape characters are accumulated to make a token, which is then interpreted as a number or symbol. Macro characters trigger the invocation of functions (possibly user-supplied) that can perform arbitrary parsing actions. Macro characters are divided into two kinds, terminating and non-terminating, depending on whether or not they terminate a token. The following are descriptions of each kind of syntax type.

<br>

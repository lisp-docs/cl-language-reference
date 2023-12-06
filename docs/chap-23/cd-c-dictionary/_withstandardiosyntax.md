**with-standard-io-syntax** *Macro* 



**Syntax:** 



**with-standard-io-syntax** *\{form\}*\* *→ \{result\}*\* 



**Arguments and Values:** 



*forms*—an *implicit progn*. 



*results*—the *values* returned by the *forms*. 



**Description:** 



Within the dynamic extent of the body of *forms*, all reader/printer control variables, including any *implementation-defined* ones not specified by this standard, are bound to values that produce standard read/print behavior. The values for the variables specified by this standard are listed in Figure 23–1. 







 



 



|**Variable Value**|

| :- |

|<p>**\*package\*** The CL-USER *package* </p><p>**\*print-array\* t** </p><p>**\*print-base\*** 10 </p><p>**\*print-case\*** :upcase </p><p>**\*print-circle\* nil** </p><p>**\*print-escape\* t** </p><p>**\*print-gensym\* t** </p><p>**\*print-length\* nil** </p><p>**\*print-level\* nil** </p><p>**\*print-lines\* nil** </p><p>**\*print-miser-width\* nil** </p><p>**\*print-pprint-dispatch\*** The *standard pprint dispatch table* **\*print-pretty\* nil** </p><p>**\*print-radix\* nil** </p><p>**\*print-readably\* t** </p><p>**\*print-right-margin\* nil** </p><p>**\*read-base\*** 10 </p><p>**\*read-default-float-format\* single-float** </p><p>**\*read-eval\* t** </p><p>**\*read-suppress\* nil** </p><p>**\*readtable\*** The *standard readtable*</p>|





**Figure 23–1. Values of standard control variables** 



**Examples:**
```lisp
 

(with-open-file (file pathname :direction :output) 

(with-standard-io-syntax 

(print data file))) 

;;; ... Later, in another Lisp: 

(with-open-file (file pathname :direction :input) 

(with-standard-io-syntax 

(setq data (read file)))) 



 

 

*∗***read-base***∗ Variable* 


```
**Value Type:** 



a *radix* . 



**Initial Value:** 



10\. 



**Description:** 



Controls the interpretation of tokens by **read** as being *integers* or *ratios*. 



The *value* of **\*read-base\***, called the *current input base*, is the radix in which *integers* and *ratios* are to be read by the *Lisp reader* . The parsing of other numeric *types* (*e.g.*, *floats*) is not affected by this option. 



The effect of **\*read-base\*** on the reading of any particular *rational* number can be locally overridden by explicit use of the #O, #X, #B, or #*n*R syntax or by a trailing decimal point. 



**Examples:**
```lisp
 

(dotimes (i 6) 

(let ((\*read-base\* (+ 10. i))) 

(let ((object (read-from-string "(\\DAD DAD |BEE| BEE 123. 123)"))) 

(print (list \*read-base\* object))))) 

▷ (10 (DAD DAD BEE BEE 123 123)) 

▷ (11 (DAD DAD BEE BEE 123 146)) 

▷ (12 (DAD DAD BEE BEE 123 171)) 

▷ (13 (DAD DAD BEE BEE 123 198)) 

▷ (14 (DAD 2701 BEE BEE 123 227)) 

▷ (15 (DAD 3088 BEE 2699 123 258)) 

*→* NIL 


```
**Notes:** 



Altering the input radix can be useful when reading data files in special formats. 



*∗***read-default-float-format***∗ Variable* 



**Value Type:** 



one of the *atomic type specifiers* **short-float**, **single-float**, **double-float**, or **long-float**, or else some other *type specifier* defined by the *implementation* to be acceptable. 







 



 



**Initial Value:** 



The *symbol* **single-float**. 



**Description:** 



Controls the floating-point format that is to be used when reading a floating-point number that has no *exponent marker* or that has e or E for an *exponent marker* . Other *exponent markers* explicitly prescribe the floating-point format to be used. 



The printer uses **\*read-default-float-format\*** to guide the choice of *exponent markers* when printing floating-point numbers. 



**Examples:**
```lisp
 

(let ((\*read-default-float-format\* ’double-float)) 

(read-from-string "(1.0 1.0e0 1.0s0 1.0f0 1.0d0 1.0L0)")) 

*→* (1.0 1.0 1.0 1.0 1.0 1.0) ;Implementation has float format F. 

*→* (1.0 1.0 1.0s0 1.0 1.0 1.0) ;Implementation has float formats S and F. *→* (1.0d0 1.0d0 1.0 1.0 1.0d0 1.0d0) ;Implementation has float formats F and D. *→* (1.0d0 1.0d0 1.0s0 1.0 1.0d0 1.0d0) ;Implementation has float formats S, F, D. *→* (1.0d0 1.0d0 1.0 1.0 1.0d0 1.0L0) ;Implementation has float formats F, D, L. *→* (1.0d0 1.0d0 1.0s0 1.0 1.0d0 1.0L0) ;Implementation has formats S, F, D, L. 

*∗***read-eval***∗ Variable* 


```
**Value Type:** 



a *generalized boolean*. 



**Initial Value:** 



*true*. 



**Description:** 



If it is *true*, the #. *reader macro* has its normal effect. Otherwise, that *reader macro* signals an error of *type* **reader-error**. 



**See Also:** 



**\*print-readably\*** 



**Notes:** 



If **\*read-eval\*** is *false* and **\*print-readably\*** is *true*, any *method* for **print-object** that would output a reference to the #. *reader macro* either outputs something different or signals an error of *type* **print-not-readable**. 







 



 



*∗***read-suppress***∗ Variable* 



**Value Type:** 



a *generalized boolean*. 



**Initial Value:** 



*false*. 



**Description:** 



This variable is intended primarily to support the operation of the read-time conditional notations #+ and #-. It is important for the *reader macros* which implement these notations to be able to skip over the printed representation of an *expression* despite the possibility that the syntax of the skipped *expression* may not be entirely valid for the current implementation, since #+ and #- exist in order to allow the same program to be shared among several Lisp implementations (including dialects other than Common Lisp) despite small incompatibilities of syntax. 



If it is *false*, the *Lisp reader* operates normally. 



If the *value* of **\*read-suppress\*** is *true*, **read**, **read-preserving-whitespace**, **read-delimited-list**, and **read-from-string** all return a *primary value* of **nil** when they complete successfully; however, they continue to parse the representation of an *object* in the normal way, in order to skip over the *object*, and continue to indicate *end of file* in the normal way. Except as noted below, any *standardized reader macro*<sub>2</sub> that is defined to *read* <sub>2</sub> a following *object* or *token* will do so, but not signal an error if the *object* read is not of an appropriate type or syntax. The *standard syntax* and its associated *reader macros* will not construct any new *objects* (*e.g.*, when reading the representation of a *symbol*, no *symbol* will be constructed or interned). 



Extended tokens 



All extended tokens are completely uninterpreted. Errors such as those that might otherwise be signaled due to detection of invalid *potential numbers*, invalid patterns of *package markers*, and invalid uses of the *dot* character are suppressed. 



Dispatching macro characters (including *sharpsign*) 



*Dispatching macro characters* continue to parse an infix numerical argument, and invoke the dispatch function. The *standardized sharpsign reader macros* do not enforce any constraints on either the presence of or the value of the numerical argument. 



#= 



The #= notation is totally ignored. It does not read a following *object*. It produces no *object*, but is treated as *whitespace*<sub>2</sub>. 







 



 



\## 



The ## notation always produces **nil**. 



No matter what the *value* of **\*read-suppress\***, parentheses still continue to delimit and construct *lists*; the #( notation continues to delimit *vectors*; and comments, *strings*, and the *single-quote* and *backquote* notations continue to be interpreted properly. Such situations as ’), #&lt;, #), and #*hSpacei* continue to signal errors. 



**Examples:**
```lisp
 

(let ((\*read-suppress\* t)) 

(mapcar #’read-from-string 

’("#(foo bar baz)" "#P(:type :lisp)" "#c1.2" 

"#.(PRINT ’FOO)" "#3AHELLO" "#S(INTEGER)" 

"#\*ABC" "#\GARBAGE" "#RALPHA" "#3R444"))) 

*→* (NIL NIL NIL NIL NIL NIL NIL NIL NIL NIL) 


```
**See Also:** 



**read**, Chapter 2 (Syntax) 



**Notes:** 



*Programmers* and *implementations* that define additional *macro characters* are strongly encouraged to make them respect **\*read-suppress\*** just as *standardized macro characters* do. That is, when the *value* of **\*read-suppress\*** is *true*, they should ignore type errors when reading a following *object* and the *functions* that implement *dispatching macro characters* should tolerate **nil** as their infix *parameter* value even if a numeric value would ordinarily be required. 



*∗***readtable***∗ Variable* 



**Value Type:** 



a *readtable*. 



**Initial Value:** 



A *readtable* that conforms to the description of Common Lisp syntax in Chapter 2 (Syntax). 



**Description:** 



The *value* of **\*readtable\*** is called the *current readtable*. It controls the parsing behavior of the *Lisp reader* , and can also influence the *Lisp printer* (*e.g.*, see the *function* **readtable-case**). 



**Examples:**
```lisp
 

(readtablep \*readtable\*) *→ true* 



 

 

(setq zvar 123) *→* 123 

(set-syntax-from-char #\z #\’ (setq table2 (copy-readtable))) *→* T 

zvar *→* 123 

(setq \*readtable\* table2) *→* #&lt;READTABLE&gt; 

zvar *→* VAR 

(setq \*readtable\* (copy-readtable nil)) *→* #&lt;READTABLE&gt; 

zvar *→* 123 


```
**Affected By:** 



**compile-file**, **load** 



**See Also:** 



**compile-file**, **load**, **readtable**, Section 2.1.1.1 (The Current Readtable) 




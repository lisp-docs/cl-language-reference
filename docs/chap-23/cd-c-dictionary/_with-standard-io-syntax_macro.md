**with-standard-io-syntax** *Macro* 



**Syntax:** 



**with-standard-io-syntax** *\{form\}*\* → \{result\}\* 



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
→ NIL 

```
**Notes:** 



Altering the input radix can be useful when reading data files in special formats. 




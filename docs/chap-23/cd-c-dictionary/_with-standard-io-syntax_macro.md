**with-standard-io-syntax** <GlossaryTerm  term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"with-standard-io-syntax"}><b>with-standard-io-syntax</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>\{form\}</i></GlossaryTerm>\* → \{result\}\* 



**Arguments and Values:** 



<GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"implicit progn"}><i>implicit progn</i></GlossaryTerm>. 



*results*—the <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> returned by the <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm>. 



**Description:** 



Within the dynamic extent of the body of <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm>, all reader/printer control variables, including any <GlossaryTerm  term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm> ones not specified by this standard, are bound to values that produce standard read/print behavior. The values for the variables specified by this standard are listed in Figure 23–1. 







 



 



|**Variable Value**|

| :- |

|<p><DictionaryLink  term={"package"}><b>\*package\*</b></DictionaryLink> The CL-USER <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> </p><p>**\*print-array\* t** </p><p>**\*print-base\*** 10 </p><p><DictionaryLink  term={"print-case"}><b>\*print-case\*</b></DictionaryLink> :upcase </p><p>**\*print-circle\* nil** </p><p>**\*print-escape\* t** </p><p>**\*print-gensym\* t** </p><p>**\*print-length\* nil** </p><p>**\*print-level\* nil** </p><p>**\*print-lines\* nil** </p><p>**\*print-miser-width\* nil** </p><p><DictionaryLink  term={"print-pprint-dispatch"}><b>\*print-pprint-dispatch\*</b></DictionaryLink> The <GlossaryTerm styled={true} term={"standard pprint dispatch table"}><i>standard pprint dispatch table</i></GlossaryTerm> **\*print-pretty\* nil** </p><p>**\*print-radix\* nil** </p><p>**\*print-readably\* t** </p><p>**\*print-right-margin\* nil** </p><p>**\*read-base\*** 10 </p><p>**\*read-default-float-format\* single-float** </p><p>**\*read-eval\* t** </p><p>**\*read-suppress\* nil** </p><p><DictionaryLink  term={"readtable"}><b>\*readtable\*</b></DictionaryLink> The <GlossaryTerm styled={true} term={"standard readtable"}><i>standard readtable</i></GlossaryTerm></p>|





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



a <GlossaryTerm  term={"radix"}><i>radix</i></GlossaryTerm> . 



**Initial Value:** 



10\. 



**Description:** 



Controls the interpretation of tokens by <DictionaryLink  term={"read"}><b>read</b></DictionaryLink> as being *integers* or <GlossaryTerm  term={"ratio"}><i>ratios</i></GlossaryTerm>. 



The <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of **\*read-base\***, called the <GlossaryTerm styled={true} term={"current input base"}><i>current input base</i></GlossaryTerm>, is the radix in which *integers* and <GlossaryTerm  term={"ratio"}><i>ratios</i></GlossaryTerm> are to be read by the *Lisp reader* . The parsing of other numeric <GlossaryTerm  term={"type"}><i>types</i></GlossaryTerm> (*e.g.*, <GlossaryTerm  term={"float"}><i>floats</i></GlossaryTerm>) is not affected by this option. 



The effect of **\*read-base\*** on the reading of any particular <GlossaryTerm  term={"rational"}><i>rational</i></GlossaryTerm> number can be locally overridden by explicit use of the #O, #X, #B, or #*n*R syntax or by a trailing decimal point. 



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




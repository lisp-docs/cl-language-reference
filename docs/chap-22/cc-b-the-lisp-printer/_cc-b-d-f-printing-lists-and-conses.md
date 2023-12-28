 



Wherever possible, list notation is preferred over dot notation. Therefore the following algorithm is used to print a *cons x*: 



1\. A <GlossaryTerm styled={true} term={"left-parenthesis"}><i>left-parenthesis</i></GlossaryTerm> is printed. 



2\. The <GlossaryTerm styled={true} term={"car"}><i>car</i></GlossaryTerm> of *x* is printed. 



3\. If the <GlossaryTerm styled={true} term={"cdr"}><i>cdr</i></GlossaryTerm> of *x* is itself a <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm>, it is made to be the current <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm> (*i.e.*, *x* becomes that <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm>), a <GlossaryTerm styled={true} term={"space"}><i>space</i></GlossaryTerm> is printed, and step 2 is re-entered. 



4\. If the <GlossaryTerm styled={true} term={"cdr"}><i>cdr</i></GlossaryTerm> of *x* is not <GlossaryTerm styled={true} term={"null"}><i>null</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"space"}><i>space</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"dot"}><i>dot</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"space"}><i>space</i></GlossaryTerm>, and the <GlossaryTerm styled={true} term={"cdr"}><i>cdr</i></GlossaryTerm> of *x* are printed. 



5\. A <GlossaryTerm styled={true} term={"right-parenthesis"}><i>right-parenthesis</i></GlossaryTerm> is printed. 



Actually, the above algorithm is only used when <DictionaryLink styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></DictionaryLink> is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. When <DictionaryLink styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></DictionaryLink> is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> (or when <DictionaryLink styled={true} term={"pprint"}><b>pprint</b></DictionaryLink> is used), additional <GlossaryTerm styled={true} term={"whitespace"}><i>whitespace</i></GlossaryTerm><sub>1</sub> may replace the use of a single <GlossaryTerm styled={true} term={"space"}><i>space</i></GlossaryTerm>, and a more elaborate algorithm with similar goals but more presentational flexibility is used; see Section 22.1.2 (Printer Dispatching). 



Although the two expressions below are equivalent, and the reader accepts either one and produces the same <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm>, the printer always prints such a <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm> in the second form. 



(a . (b . ((c . (d . nil)) . (e . nil)))) 



(a b (c d) e) 



The printing of *conses* is affected by **\*print-level\***, <DictionaryLink styled={true} term={"print-length"}><b>\*print-length\*</b></DictionaryLink>, and <DictionaryLink styled={true} term={"print-circle"}><b>\*print-circle\*</b></DictionaryLink>. Following are examples of printed representations of <GlossaryTerm styled={true} term={"list"}><i>lists</i></GlossaryTerm>: 



(a . b) ;A dotted pair of a and b 



(a.b) ;A list of one element, the symbol named a.b 



(a. b) ;A list of two elements a. and b 



(a .b) ;A list of two elements a and .b 







 



 



(a b . c) ;A dotted list of a and b with c at the end; two conses 



.iot ;The symbol whose name is .iot 



(. b) ;Invalid – an error is signaled if an attempt is made to read 



;this syntax. 



(a .) ;Invalid – an error is signaled. 



(a .. b) ;Invalid – an error is signaled. 



(a . . b) ;Invalid – an error is signaled. 



(a b c ...) ;Invalid – an error is signaled. 



(a \. b) ;A list of three elements a, ., and b 



(a |.| b) ;A list of three elements a, ., and b 



(a \... b) ;A list of three elements a, ..., and b 



(a |...| b) ;A list of three elements a, ..., and b 



For information on how the *Lisp reader* parses <GlossaryTerm styled={true} term={"list"}><i>lists</i></GlossaryTerm> and *conses*, see Section 2.4.1 (Left-Parenthesis). 




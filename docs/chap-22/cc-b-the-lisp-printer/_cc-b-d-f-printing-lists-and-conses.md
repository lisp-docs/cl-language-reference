 



Wherever possible, list notation is preferred over dot notation. Therefore the following algorithm is used to print a *cons x*: 



1\. A <ClLinks styled={true} term={"left-parenthesis"}><i>left-parenthesis</i></ClLinks> is printed. 



2\. The <ClLinks styled={true} term={"car"}><i>car</i></ClLinks> of *x* is printed. 



3\. If the <ClLinks styled={true} term={"cdr"}><i>cdr</i></ClLinks> of *x* is itself a <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks>, it is made to be the current <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks> (*i.e.*, *x* becomes that <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks>), a <ClLinks styled={true} term={"space"}><i>space</i></ClLinks> is printed, and step 2 is re-entered. 



4\. If the <ClLinks styled={true} term={"cdr"}><i>cdr</i></ClLinks> of *x* is not <ClLinks styled={true} term={"null"}><i>null</i></ClLinks>, a <ClLinks styled={true} term={"space"}><i>space</i></ClLinks>, a <ClLinks styled={true} term={"dot"}><i>dot</i></ClLinks>, a <ClLinks styled={true} term={"space"}><i>space</i></ClLinks>, and the <ClLinks styled={true} term={"cdr"}><i>cdr</i></ClLinks> of *x* are printed. 



5\. A <ClLinks styled={true} term={"right-parenthesis"}><i>right-parenthesis</i></ClLinks> is printed. 



Actually, the above algorithm is only used when <ClLinks styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></ClLinks> is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. When <ClLinks styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></ClLinks> is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> (or when <ClLinks styled={true} term={"pprint"}><b>pprint</b></ClLinks> is used), additional <ClLinks styled={true} term={"whitespace"}><i>whitespace</i></ClLinks><sub>1</sub> may replace the use of a single <ClLinks styled={true} term={"space"}><i>space</i></ClLinks>, and a more elaborate algorithm with similar goals but more presentational flexibility is used; see Section 22.1.2 (Printer Dispatching). 



Although the two expressions below are equivalent, and the reader accepts either one and produces the same <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks>, the printer always prints such a <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks> in the second form. 



(a . (b . ((c . (d . nil)) . (e . nil)))) 



(a b (c d) e) 



The printing of *conses* is affected by **\*print-level\***, <ClLinks styled={true} term={"print-length"}><b>\*print-length\*</b></ClLinks>, and <ClLinks styled={true} term={"print-circle"}><b>\*print-circle\*</b></ClLinks>. Following are examples of printed representations of <ClLinks styled={true} term={"list"}><i>lists</i></ClLinks>: 



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



For information on how the *Lisp reader* parses <ClLinks styled={true} term={"list"}><i>lists</i></ClLinks> and *conses*, see Section 2.4.1 (Left-Parenthesis). 




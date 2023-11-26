**22.1.3.5 Printing Lists and Conses** 

Wherever possible, list notation is preferred over dot notation. Therefore the following algorithm is used to print a *cons x*: 

1\. A *left-parenthesis* is printed. 

2\. The *car* of *x* is printed. 

3\. If the *cdr* of *x* is itself a *cons*, it is made to be the current *cons* (*i.e.*, *x* becomes that *cons*), a *space* is printed, and step 2 is re-entered. 

4\. If the *cdr* of *x* is not *null*, a *space*, a *dot*, a *space*, and the *cdr* of *x* are printed. 

5\. A *right-parenthesis* is printed. 

Actually, the above algorithm is only used when **\*print-pretty\*** is *false*. When **\*print-pretty\*** is *true* (or when **pprint** is used), additional *whitespace*\<sub\>1\</sub\> may replace the use of a single *space*, and a more elaborate algorithm with similar goals but more presentational flexibility is used; see Section 22.1.2 (Printer Dispatching). 

Although the two expressions below are equivalent, and the reader accepts either one and produces the same *cons*, the printer always prints such a *cons* in the second form. 

(a . (b . ((c . (d . nil)) . (e . nil)))) 

(a b (c d) e) 

The printing of *conses* is affected by **\*print-level\***, **\*print-length\***, and **\*print-circle\***. Following are examples of printed representations of *lists*: 

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

For information on how the *Lisp reader* parses *lists* and *conses*, see Section 2.4.1 (Left-Parenthesis). 


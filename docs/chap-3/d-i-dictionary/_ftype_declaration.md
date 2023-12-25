**ftype** <ClLinks  term={"declaration"}><i>Declaration</i></ClLinks> 



**Syntax:** 



(ftype *type \{function-name\}*\*) 



**Arguments:** 



*function-name*—a *function name*. 



<ClLinks  term={"type"}><i>type</i></ClLinks>—a *type specifier* . 



**Valid Context:** 



<ClLinks  term={"declaration"}><i>declaration</i></ClLinks> or <ClLinks  term={"proclamation"}><i>proclamation</i></ClLinks> 



**Binding Types Aected:** 



<ClLinks  term={"function"}><i>function</i></ClLinks> 



**Description:** 



Specifies that the <ClLinks  term={"function"}><i>functions</i></ClLinks> named by *function-names* are of the functional type <ClLinks  term={"type"}><i>type</i></ClLinks>. For example: 



(declare (ftype (function (integer list) t) ith) 



(ftype (function (number) float) sine cosine)) 



If one of the <ClLinks  term={"function"}><i>functions</i></ClLinks> mentioned has a lexically apparent local definition (as made by <ClLinks  term={"flet"}><b>flet</b></ClLinks> or <ClLinks  term={"labels"}><b>labels</b></ClLinks>), then the declaration applies to that local definition and not to the global function definition. <ClLinks  term={"ftype"}><b>ftype</b></ClLinks> declarations never apply to variable <ClLinks  term={"binding"}><i>bindings</i></ClLinks> (see type). 



The lexically apparent bindings of *function-names* must not be <ClLinks  term={"macro"}><i>macro</i></ClLinks> definitions. (This is because <ClLinks  term={"ftype"}><b>ftype</b></ClLinks> declares the functional definition of each *function name* to be of a particular subtype of <ClLinks  term={"function"}><b>function</b></ClLinks>, and <ClLinks  term={"macro"}><i>macros</i></ClLinks> do not denote <ClLinks  term={"function"}><i>functions</i></ClLinks>.) 



<ClLinks  term={"ftype"}><b>ftype</b></ClLinks> declarations can be *free declarations* or *bound declarations*. <ClLinks  term={"ftype"}><b>ftype</b></ClLinks> declarations of functions that appear before the body of a <ClLinks  term={"flet"}><b>flet</b></ClLinks> or <ClLinks  term={"labels"}><b>labels</b></ClLinks> <ClLinks  term={"form"}><i>form</i></ClLinks> that defines that function are *bound declarations*. Such declarations in other contexts are *free declarations*. 



**See Also:** 



<ClLinks  term={"declare"}><b>declare</b></ClLinks>, <ClLinks  term={"declaim"}><b>declaim</b></ClLinks>, <ClLinks  term={"proclaim"}><b>proclaim</b></ClLinks> 







 



 




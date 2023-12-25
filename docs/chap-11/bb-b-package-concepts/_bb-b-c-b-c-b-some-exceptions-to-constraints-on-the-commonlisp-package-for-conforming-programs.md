 



If an *external symbol* of the COMMON-LISP <ClLinks  term={"package"}><i>package</i></ClLinks> is not globally defined as a *standardized dynamic variable* or *constant variable*, it is allowed to lexically <ClLinks  term={"bind"}><i>bind</i></ClLinks> it and to declare the <ClLinks  term={"type"}><b>type</b></ClLinks> of that <ClLinks  term={"binding"}><i>binding</i></ClLinks>, and it is allowed to locally <ClLinks  term={"establish"}><i>establish</i></ClLinks> it as a *symbol macro* (*e.g.*, with <ClLinks  term={"symbol-macrolet"}><b>symbol-macrolet</b></ClLinks>). 



Unless explicitly specified otherwise, if an *external symbol* of the COMMON-LISP <ClLinks  term={"package"}><i>package</i></ClLinks> is globally defined as a *standardized dynamic variable*, it is permitted to <ClLinks  term={"bind"}><i>bind</i></ClLinks> or <ClLinks  term={"assign"}><i>assign</i></ClLinks> that *dynamic variable* provided that the “Value Type” constraints on the *dynamic variable* are maintained, and that the new <ClLinks  term={"value"}><i>value</i></ClLinks> of the <ClLinks  term={"variable"}><i>variable</i></ClLinks> is consistent with the stated purpose of the <ClLinks  term={"variable"}><i>variable</i></ClLinks>. 



If an *external symbol* of the COMMON-LISP <ClLinks  term={"package"}><i>package</i></ClLinks> is not defined as a *standardized function*, *macro*, or *special operator* , it is allowed to lexically <ClLinks  term={"bind"}><i>bind</i></ClLinks> it as a <ClLinks  term={"function"}><i>function</i></ClLinks> (*e.g.*, with <ClLinks  term={"flet"}><b>flet</b></ClLinks>), to declare the <ClLinks  term={"ftype"}><b>ftype</b></ClLinks> of that <ClLinks  term={"binding"}><i>binding</i></ClLinks>, and (in <ClLinks  term={"implementation"}><i>implementations</i></ClLinks> which provide the ability to do so) to <ClLinks  term={"trace"}><b>trace</b></ClLinks> that <ClLinks  term={"binding"}><i>binding</i></ClLinks>. 



If an *external symbol* of the COMMON-LISP <ClLinks  term={"package"}><i>package</i></ClLinks> is not defined as a *standardized function*, *macro*, or *special operator* , it is allowed to lexically <ClLinks  term={"bind"}><i>bind</i></ClLinks> it as a <ClLinks  term={"macro"}><i>macro</i></ClLinks> (*e.g.*, with <ClLinks  term={"macrolet"}><b>macrolet</b></ClLinks>). 



If an *external symbol* of the COMMON-LISP <ClLinks  term={"package"}><i>package</i></ClLinks> is not defined as a *standardized function*, *macro*, or *special operator* , it is allowed to lexically <ClLinks  term={"bind"}><i>bind</i></ClLinks> its *setf function name* as a <ClLinks  term={"function"}><i>function</i></ClLinks>, and to declare the <ClLinks  term={"ftype"}><b>ftype</b></ClLinks> of that <ClLinks  term={"binding"}><i>binding</i></ClLinks>. 







 



 




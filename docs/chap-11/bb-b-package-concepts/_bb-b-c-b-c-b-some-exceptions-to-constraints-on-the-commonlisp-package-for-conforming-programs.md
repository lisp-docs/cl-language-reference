 



If an *external symbol* of the COMMON-LISP <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> is not globally defined as a *standardized dynamic variable* or *constant variable*, it is allowed to lexically <ClLinks styled={true} term={"bind"}><i>bind</i></ClLinks> it and to declare the <ClLinks styled={true} term={"type"}><b>type</b></ClLinks> of that <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks>, and it is allowed to locally <ClLinks styled={true} term={"establish"}><i>establish</i></ClLinks> it as a *symbol macro* (*e.g.*, with <ClLinks styled={true} term={"symbol-macrolet"}><b>symbol-macrolet</b></ClLinks>). 



Unless explicitly specified otherwise, if an *external symbol* of the COMMON-LISP <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> is globally defined as a *standardized dynamic variable*, it is permitted to <ClLinks styled={true} term={"bind"}><i>bind</i></ClLinks> or <ClLinks styled={true} term={"assign"}><i>assign</i></ClLinks> that *dynamic variable* provided that the “Value Type” constraints on the *dynamic variable* are maintained, and that the new <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of the <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks> is consistent with the stated purpose of the <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks>. 



If an *external symbol* of the COMMON-LISP <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> is not defined as a *standardized function*, *macro*, or *special operator* , it is allowed to lexically <ClLinks styled={true} term={"bind"}><i>bind</i></ClLinks> it as a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> (*e.g.*, with <ClLinks styled={true} term={"flet"}><b>flet</b></ClLinks>), to declare the <ClLinks styled={true} term={"ftype"}><b>ftype</b></ClLinks> of that <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks>, and (in <ClLinks styled={true} term={"implementation"}><i>implementations</i></ClLinks> which provide the ability to do so) to <ClLinks styled={true} term={"trace"}><b>trace</b></ClLinks> that <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks>. 



If an *external symbol* of the COMMON-LISP <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> is not defined as a *standardized function*, *macro*, or *special operator* , it is allowed to lexically <ClLinks styled={true} term={"bind"}><i>bind</i></ClLinks> it as a <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks> (*e.g.*, with <ClLinks styled={true} term={"macrolet"}><b>macrolet</b></ClLinks>). 



If an *external symbol* of the COMMON-LISP <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> is not defined as a *standardized function*, *macro*, or *special operator* , it is allowed to lexically <ClLinks styled={true} term={"bind"}><i>bind</i></ClLinks> its *setf function name* as a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>, and to declare the <ClLinks styled={true} term={"ftype"}><b>ftype</b></ClLinks> of that <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks>. 







 



 




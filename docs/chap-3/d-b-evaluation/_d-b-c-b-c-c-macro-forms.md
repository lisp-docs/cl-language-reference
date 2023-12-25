 



If the <ClLinks  term={"operator"}><i>operator</i></ClLinks> names a <ClLinks  term={"macro"}><i>macro</i></ClLinks>, its associated *macro function* is applied to the entire <ClLinks  term={"form"}><i>form</i></ClLinks> and the result of that application is used in place of the original <ClLinks  term={"form"}><i>form</i></ClLinks>. 



Specifically, a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> names a <ClLinks  term={"macro"}><i>macro</i></ClLinks> in a given *lexical environment* if <ClLinks  term={"macro-function"}><b>macro-function</b></ClLinks> is <ClLinks  term={"true"}><i>true</i></ClLinks> of the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> and that <ClLinks  term={"environment"}><i>environment</i></ClLinks>. The <ClLinks  term={"function"}><i>function</i></ClLinks> returned by <ClLinks  term={"macro-function"}><b>macro-function</b></ClLinks> is a <ClLinks  term={"function"}><i>function</i></ClLinks> of two arguments, called the expansion function. The expansion function is invoked by calling the *macroexpand hook* with the expansion function as its first argument, the entire *macro form* as its  







second argument, and an *environment object* (corresponding to the current *lexical environment*) as its third argument. The *macroexpand hook*, in turn, calls the expansion function with the <ClLinks  term={"form"}><i>form</i></ClLinks> as its first argument and the <ClLinks  term={"environment"}><i>environment</i></ClLinks> as its second argument. The <ClLinks  term={"value"}><i>value</i></ClLinks> of the expansion function, which is passed through by the *macroexpand hook*, is a <ClLinks  term={"form"}><i>form</i></ClLinks>. The returned <ClLinks  term={"form"}><i>form</i></ClLinks> is *evaluated* in place of the original <ClLinks  term={"form"}><i>form</i></ClLinks>. 



The consequences are undefined if a *macro function* destructively modifies any part of its <ClLinks  term={"form"}><i>form</i></ClLinks> argument. 



A *macro name* is not a *function designator* , and cannot be used as the <ClLinks  term={"function"}><i>function</i></ClLinks> argument to <ClLinks  term={"function"}><i>functions</i></ClLinks> such as <ClLinks  term={"apply"}><b>apply</b></ClLinks>, <ClLinks  term={"funcall"}><b>funcall</b></ClLinks>, or <ClLinks  term={"map"}><b>map</b></ClLinks>. 



An <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> is free to implement a Common Lisp *special operator* as a <ClLinks  term={"macro"}><i>macro</i></ClLinks>. An <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> is free to implement any *macro operator* as a *special operator* , but only if an equivalent definition of the <ClLinks  term={"macro"}><i>macro</i></ClLinks> is also provided. 



Figure 3–3 lists some *defined names* that are applicable to <ClLinks  term={"macro"}><i>macros</i></ClLinks>. 



|**\*macroexpand-hook\* macro-function macroexpand-1 defmacro macroexpand macrolet**|

| :- |





**Figure 3–3. Defined names applicable to macros** 




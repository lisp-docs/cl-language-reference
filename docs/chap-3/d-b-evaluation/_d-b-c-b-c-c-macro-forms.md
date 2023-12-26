 



If the <ClLinks  term={"operator"}><i>operator</i></ClLinks> names a <ClLinks  term={"macro"}><i>macro</i></ClLinks>, its associated <GlossaryTerm styled={true} term={"macro function"}><i>macro function</i></GlossaryTerm> is applied to the entire <ClLinks  term={"form"}><i>form</i></ClLinks> and the result of that application is used in place of the original <ClLinks  term={"form"}><i>form</i></ClLinks>. 



Specifically, a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> names a <ClLinks  term={"macro"}><i>macro</i></ClLinks> in a given <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm> if <ClLinks  term={"macro-function"}><b>macro-function</b></ClLinks> is <ClLinks  term={"true"}><i>true</i></ClLinks> of the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> and that <ClLinks  term={"environment"}><i>environment</i></ClLinks>. The <ClLinks  term={"function"}><i>function</i></ClLinks> returned by <ClLinks  term={"macro-function"}><b>macro-function</b></ClLinks> is a <ClLinks  term={"function"}><i>function</i></ClLinks> of two arguments, called the expansion function. The expansion function is invoked by calling the <GlossaryTerm styled={true} term={"macroexpand hook"}><i>macroexpand hook</i></GlossaryTerm> with the expansion function as its first argument, the entire <GlossaryTerm styled={true} term={"macro form"}><i>macro form</i></GlossaryTerm> as its  







second argument, and an <GlossaryTerm styled={true} term={"environment object"}><i>environment object</i></GlossaryTerm> (corresponding to the current <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm>) as its third argument. The <GlossaryTerm styled={true} term={"macroexpand hook"}><i>macroexpand hook</i></GlossaryTerm>, in turn, calls the expansion function with the <ClLinks  term={"form"}><i>form</i></ClLinks> as its first argument and the <ClLinks  term={"environment"}><i>environment</i></ClLinks> as its second argument. The <ClLinks  term={"value"}><i>value</i></ClLinks> of the expansion function, which is passed through by the <GlossaryTerm styled={true} term={"macroexpand hook"}><i>macroexpand hook</i></GlossaryTerm>, is a <ClLinks  term={"form"}><i>form</i></ClLinks>. The returned <ClLinks  term={"form"}><i>form</i></ClLinks> is *evaluated* in place of the original <ClLinks  term={"form"}><i>form</i></ClLinks>. 



The consequences are undefined if a <GlossaryTerm styled={true} term={"macro function"}><i>macro function</i></GlossaryTerm> destructively modifies any part of its <ClLinks  term={"form"}><i>form</i></ClLinks> argument. 



A <GlossaryTerm styled={true} term={"macro name"}><i>macro name</i></GlossaryTerm> is not a <GlossaryTerm styled={true} term={"function designator"}><i>function designator</i></GlossaryTerm> , and cannot be used as the <ClLinks  term={"function"}><i>function</i></ClLinks> argument to <ClLinks  term={"function"}><i>functions</i></ClLinks> such as <ClLinks  term={"apply"}><b>apply</b></ClLinks>, <ClLinks  term={"funcall"}><b>funcall</b></ClLinks>, or <ClLinks  term={"map"}><b>map</b></ClLinks>. 



An <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> is free to implement a Common Lisp <GlossaryTerm styled={true} term={"special operator"}><i>special operator</i></GlossaryTerm> as a <ClLinks  term={"macro"}><i>macro</i></ClLinks>. An <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> is free to implement any *macro operator* as a <GlossaryTerm styled={true} term={"special operator"}><i>special operator</i></GlossaryTerm> , but only if an equivalent definition of the <ClLinks  term={"macro"}><i>macro</i></ClLinks> is also provided. 



Figure 3–3 lists some <GlossaryTerm styled={true} term={"defined name"}><i>defined names</i></GlossaryTerm> that are applicable to <ClLinks  term={"macro"}><i>macros</i></ClLinks>. 



|**\*macroexpand-hook\* macro-function macroexpand-1 defmacro macroexpand macrolet**|

| :- |





**Figure 3–3. Defined names applicable to macros** 




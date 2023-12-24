 



A *compiler macro* can be defined for a <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> that also names a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> or <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks>. That is, it is possible for a *function name* to name both a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> and a *compiler macro*. 



A *function name* names a *compiler macro* if <ClLinks styled={true} term={"compiler-macro-function"}><b>compiler-macro-function</b></ClLinks> is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> of the *function name* in the *lexical environment* in which it appears. Creating a *lexical binding* for the *function name* not only creates a new local <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> or <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks> definition, but also <ClLinks styled={true} term={"shadow"}><i>shadows</i></ClLinks><sub>2</sub> the *compiler macro*. 



The <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> returned by <ClLinks styled={true} term={"compiler-macro-function"}><b>compiler-macro-function</b></ClLinks> is a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of two arguments, called the expansion function. To expand a *compiler macro*, the expansion function is invoked by calling the *macroexpand hook* with the expansion function as its first argument, the entire compiler macro <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> as its second argument, and the current compilation <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks> (or with the current lexical <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks>, if the <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> is being processed by something other than <ClLinks styled={true} term={"compile-file"}><b>compile-file</b></ClLinks>) as its third  







argument. The *macroexpand hook*, in turn, calls the expansion function with the <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> as its first argument and the <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks> as its second argument. The return value from the expansion function, which is passed through by the *macroexpand hook*, might either be the *same form*, or else a form that can, at the discretion of the <ClLinks styled={true} term={"code"}><i>code</i></ClLinks> doing the expansion, be used in place of the original <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. 



|**\*macroexpand-hook\* compiler-macro-function define-compiler-macro**|

| :- |





**Figure 3–6. Defined names applicable to compiler macros** 




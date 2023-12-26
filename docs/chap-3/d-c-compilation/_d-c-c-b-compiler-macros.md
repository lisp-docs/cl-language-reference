 



A <GlossaryTerm styled={true} term={"compiler macro"}><i>compiler macro</i></GlossaryTerm> can be defined for a <ClLinks  term={"name"}><i>name</i></ClLinks> that also names a <ClLinks  term={"function"}><i>function</i></ClLinks> or <ClLinks  term={"macro"}><i>macro</i></ClLinks>. That is, it is possible for a <GlossaryTerm styled={true} term={"function name"}><i>function name</i></GlossaryTerm> to name both a <ClLinks  term={"function"}><i>function</i></ClLinks> and a <GlossaryTerm styled={true} term={"compiler macro"}><i>compiler macro</i></GlossaryTerm>. 



A <GlossaryTerm styled={true} term={"function name"}><i>function name</i></GlossaryTerm> names a <GlossaryTerm styled={true} term={"compiler macro"}><i>compiler macro</i></GlossaryTerm> if <ClLinks  term={"compiler-macro-function"}><b>compiler-macro-function</b></ClLinks> is <ClLinks  term={"true"}><i>true</i></ClLinks> of the <GlossaryTerm styled={true} term={"function name"}><i>function name</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm> in which it appears. Creating a <GlossaryTerm styled={true} term={"lexical binding"}><i>lexical binding</i></GlossaryTerm> for the <GlossaryTerm styled={true} term={"function name"}><i>function name</i></GlossaryTerm> not only creates a new local <ClLinks  term={"function"}><i>function</i></ClLinks> or <ClLinks  term={"macro"}><i>macro</i></ClLinks> definition, but also <ClLinks  term={"shadow"}><i>shadows</i></ClLinks><sub>2</sub> the <GlossaryTerm styled={true} term={"compiler macro"}><i>compiler macro</i></GlossaryTerm>. 



The <ClLinks  term={"function"}><i>function</i></ClLinks> returned by <ClLinks  term={"compiler-macro-function"}><b>compiler-macro-function</b></ClLinks> is a <ClLinks  term={"function"}><i>function</i></ClLinks> of two arguments, called the expansion function. To expand a <GlossaryTerm styled={true} term={"compiler macro"}><i>compiler macro</i></GlossaryTerm>, the expansion function is invoked by calling the <GlossaryTerm styled={true} term={"macroexpand hook"}><i>macroexpand hook</i></GlossaryTerm> with the expansion function as its first argument, the entire compiler macro <ClLinks  term={"form"}><i>form</i></ClLinks> as its second argument, and the current compilation <ClLinks  term={"environment"}><i>environment</i></ClLinks> (or with the current lexical <ClLinks  term={"environment"}><i>environment</i></ClLinks>, if the <ClLinks  term={"form"}><i>form</i></ClLinks> is being processed by something other than <ClLinks  term={"compile-file"}><b>compile-file</b></ClLinks>) as its third  







argument. The <GlossaryTerm styled={true} term={"macroexpand hook"}><i>macroexpand hook</i></GlossaryTerm>, in turn, calls the expansion function with the <ClLinks  term={"form"}><i>form</i></ClLinks> as its first argument and the <ClLinks  term={"environment"}><i>environment</i></ClLinks> as its second argument. The return value from the expansion function, which is passed through by the <GlossaryTerm styled={true} term={"macroexpand hook"}><i>macroexpand hook</i></GlossaryTerm>, might either be the *same form*, or else a form that can, at the discretion of the <ClLinks  term={"code"}><i>code</i></ClLinks> doing the expansion, be used in place of the original <ClLinks  term={"form"}><i>form</i></ClLinks>. 



|**\*macroexpand-hook\* compiler-macro-function define-compiler-macro**|

| :- |





**Figure 3–6. Defined names applicable to compiler macros** 




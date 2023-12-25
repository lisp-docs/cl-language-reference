 



A *compiler macro* can be defined for a <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> that also names a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm>. That is, it is possible for a *function name* to name both a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> and a *compiler macro*. 



A *function name* names a *compiler macro* if <DictionaryLink styled={true} term={"compiler-macro-function"}><b>compiler-macro-function</b></DictionaryLink> is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> of the *function name* in the *lexical environment* in which it appears. Creating a *lexical binding* for the *function name* not only creates a new local <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm> definition, but also <GlossaryTerm styled={true} term={"shadow"}><i>shadows</i></GlossaryTerm><sub>2</sub> the *compiler macro*. 



The <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> returned by <DictionaryLink styled={true} term={"compiler-macro-function"}><b>compiler-macro-function</b></DictionaryLink> is a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of two arguments, called the expansion function. To expand a *compiler macro*, the expansion function is invoked by calling the *macroexpand hook* with the expansion function as its first argument, the entire compiler macro <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> as its second argument, and the current compilation <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm> (or with the current lexical <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm>, if the <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> is being processed by something other than <DictionaryLink styled={true} term={"compile-file"}><b>compile-file</b></DictionaryLink>) as its third  







argument. The *macroexpand hook*, in turn, calls the expansion function with the <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> as its first argument and the <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm> as its second argument. The return value from the expansion function, which is passed through by the *macroexpand hook*, might either be the *same form*, or else a form that can, at the discretion of the <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm> doing the expansion, be used in place of the original <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



|**\*macroexpand-hook\* compiler-macro-function define-compiler-macro**|

| :- |





**Figure 3–6. Defined names applicable to compiler macros** 




 



A <GlossaryTerm styled={true} term={"compiler macro"}><i>compiler macro</i></GlossaryTerm> can be defined for a <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> that also names a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> or <GlossaryTerm  term={"macro"}><i>macro</i></GlossaryTerm>. That is, it is possible for a <GlossaryTerm styled={true} term={"function name"}><i>function name</i></GlossaryTerm> to name both a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> and a <GlossaryTerm styled={true} term={"compiler macro"}><i>compiler macro</i></GlossaryTerm>. 



A <GlossaryTerm styled={true} term={"function name"}><i>function name</i></GlossaryTerm> names a <GlossaryTerm styled={true} term={"compiler macro"}><i>compiler macro</i></GlossaryTerm> if <DictionaryLink  term={"compiler-macro-function"}><b>compiler-macro-function</b></DictionaryLink> is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"function name"}><i>function name</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm> in which it appears. Creating a <GlossaryTerm styled={true} term={"lexical binding"}><i>lexical binding</i></GlossaryTerm> for the <GlossaryTerm styled={true} term={"function name"}><i>function name</i></GlossaryTerm> not only creates a new local <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> or <GlossaryTerm  term={"macro"}><i>macro</i></GlossaryTerm> definition, but also <GlossaryTerm  term={"shadow"}><i>shadows</i></GlossaryTerm><sub>2</sub> the <GlossaryTerm styled={true} term={"compiler macro"}><i>compiler macro</i></GlossaryTerm>. 



The <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> returned by <DictionaryLink  term={"compiler-macro-function"}><b>compiler-macro-function</b></DictionaryLink> is a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> of two arguments, called the expansion function. To expand a <GlossaryTerm styled={true} term={"compiler macro"}><i>compiler macro</i></GlossaryTerm>, the expansion function is invoked by calling the <GlossaryTerm styled={true} term={"macroexpand hook"}><i>macroexpand hook</i></GlossaryTerm> with the expansion function as its first argument, the entire compiler macro <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> as its second argument, and the current compilation <GlossaryTerm  term={"environment"}><i>environment</i></GlossaryTerm> (or with the current lexical <GlossaryTerm  term={"environment"}><i>environment</i></GlossaryTerm>, if the <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> is being processed by something other than <DictionaryLink  term={"compile-file"}><b>compile-file</b></DictionaryLink>) as its third  







argument. The <GlossaryTerm styled={true} term={"macroexpand hook"}><i>macroexpand hook</i></GlossaryTerm>, in turn, calls the expansion function with the <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> as its first argument and the <GlossaryTerm  term={"environment"}><i>environment</i></GlossaryTerm> as its second argument. The return value from the expansion function, which is passed through by the <GlossaryTerm styled={true} term={"macroexpand hook"}><i>macroexpand hook</i></GlossaryTerm>, might either be the *same form*, or else a form that can, at the discretion of the <GlossaryTerm  term={"code"}><i>code</i></GlossaryTerm> doing the expansion, be used in place of the original <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. 



| Name                      |
| :------------------------ |
| `*macroexpand-hook*`      |
| `compiler-macro-function` |
| `define-compiler-macro`   |





**Figure 3–6. Defined names applicable to compiler macros** 




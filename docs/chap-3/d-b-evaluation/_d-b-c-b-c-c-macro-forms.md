 



If the <GlossaryTerm  term={"operator"}><i>operator</i></GlossaryTerm> names a <GlossaryTerm  term={"macro"}><i>macro</i></GlossaryTerm>, its associated <GlossaryTerm styled={true} term={"macro function"}><i>macro function</i></GlossaryTerm> is applied to the entire <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> and the result of that application is used in place of the original <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. 



Specifically, a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> names a <GlossaryTerm  term={"macro"}><i>macro</i></GlossaryTerm> in a given <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm> if <DictionaryLink  term={"macro-function"}><b>macro-function</b></DictionaryLink> is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> of the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> and that <GlossaryTerm  term={"environment"}><i>environment</i></GlossaryTerm>. The <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> returned by <DictionaryLink  term={"macro-function"}><b>macro-function</b></DictionaryLink> is a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> of two arguments, called the expansion function. The expansion function is invoked by calling the <GlossaryTerm styled={true} term={"macroexpand hook"}><i>macroexpand hook</i></GlossaryTerm> with the expansion function as its first argument, the entire <GlossaryTerm styled={true} term={"macro form"}><i>macro form</i></GlossaryTerm> as its  







second argument, and an <GlossaryTerm styled={true} term={"environment object"}><i>environment object</i></GlossaryTerm> (corresponding to the current <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm>) as its third argument. The <GlossaryTerm styled={true} term={"macroexpand hook"}><i>macroexpand hook</i></GlossaryTerm>, in turn, calls the expansion function with the <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> as its first argument and the <GlossaryTerm  term={"environment"}><i>environment</i></GlossaryTerm> as its second argument. The <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of the expansion function, which is passed through by the <GlossaryTerm styled={true} term={"macroexpand hook"}><i>macroexpand hook</i></GlossaryTerm>, is a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. The returned <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> is *evaluated* in place of the original <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. 



The consequences are undefined if a <GlossaryTerm styled={true} term={"macro function"}><i>macro function</i></GlossaryTerm> destructively modifies any part of its <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> argument. 



A <GlossaryTerm styled={true} term={"macro name"}><i>macro name</i></GlossaryTerm> is not a <GlossaryTerm styled={true} term={"function designator"}><i>function designator</i></GlossaryTerm> , and cannot be used as the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> argument to <GlossaryTerm  term={"function"}><i>functions</i></GlossaryTerm> such as <DictionaryLink  term={"apply"}><b>apply</b></DictionaryLink>, <DictionaryLink  term={"funcall"}><b>funcall</b></DictionaryLink>, or <DictionaryLink  term={"map"}><b>map</b></DictionaryLink>. 



An <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm> is free to implement a Common Lisp <GlossaryTerm styled={true} term={"special operator"}><i>special operator</i></GlossaryTerm> as a <GlossaryTerm  term={"macro"}><i>macro</i></GlossaryTerm>. An <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm> is free to implement any *macro operator* as a <GlossaryTerm styled={true} term={"special operator"}><i>special operator</i></GlossaryTerm> , but only if an equivalent definition of the <GlossaryTerm  term={"macro"}><i>macro</i></GlossaryTerm> is also provided. 



Figure 3–3 lists some <GlossaryTerm styled={true} term={"defined name"}><i>defined names</i></GlossaryTerm> that are applicable to <GlossaryTerm  term={"macro"}><i>macros</i></GlossaryTerm>. 



|**\*macroexpand-hook\* macro-function macroexpand-1 defmacro macroexpand macrolet**|

| :- |





**Figure 3–3. Defined names applicable to macros** 




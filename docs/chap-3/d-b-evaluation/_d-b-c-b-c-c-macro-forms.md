 



If the <GlossaryTerm styled={true} term={"operator"}><i>operator</i></GlossaryTerm> names a <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm>, its associated *macro function* is applied to the entire <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> and the result of that application is used in place of the original <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



Specifically, a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> names a <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm> in a given *lexical environment* if <DictionaryLink styled={true} term={"macro-function"}><b>macro-function</b></DictionaryLink> is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> and that <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm>. The <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> returned by <DictionaryLink styled={true} term={"macro-function"}><b>macro-function</b></DictionaryLink> is a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of two arguments, called the expansion function. The expansion function is invoked by calling the *macroexpand hook* with the expansion function as its first argument, the entire *macro form* as its  







second argument, and an *environment object* (corresponding to the current *lexical environment*) as its third argument. The *macroexpand hook*, in turn, calls the expansion function with the <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> as its first argument and the <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm> as its second argument. The <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of the expansion function, which is passed through by the *macroexpand hook*, is a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. The returned <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> is *evaluated* in place of the original <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



The consequences are undefined if a *macro function* destructively modifies any part of its <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> argument. 



A *macro name* is not a *function designator* , and cannot be used as the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> argument to <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm> such as <DictionaryLink styled={true} term={"apply"}><b>apply</b></DictionaryLink>, <DictionaryLink styled={true} term={"funcall"}><b>funcall</b></DictionaryLink>, or <DictionaryLink styled={true} term={"map"}><b>map</b></DictionaryLink>. 



An <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> is free to implement a Common Lisp *special operator* as a <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm>. An <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> is free to implement any *macro operator* as a *special operator* , but only if an equivalent definition of the <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm> is also provided. 



Figure 3–3 lists some *defined names* that are applicable to <GlossaryTerm styled={true} term={"macro"}><i>macros</i></GlossaryTerm>. 



|**\*macroexpand-hook\* macro-function macroexpand-1 defmacro macroexpand macrolet**|

| :- |





**Figure 3–3. Defined names applicable to macros** 




 



If an *external symbol* of the COMMON-LISP <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> is not globally defined as a *standardized dynamic variable* or *constant variable*, it is allowed to lexically <GlossaryTerm styled={true} term={"bind"}><i>bind</i></GlossaryTerm> it and to declare the <DictionaryLink styled={true} term={"type"}><b>type</b></DictionaryLink> of that <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm>, and it is allowed to locally <GlossaryTerm styled={true} term={"establish"}><i>establish</i></GlossaryTerm> it as a *symbol macro* (*e.g.*, with <DictionaryLink styled={true} term={"symbol-macrolet"}><b>symbol-macrolet</b></DictionaryLink>). 



Unless explicitly specified otherwise, if an *external symbol* of the COMMON-LISP <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> is globally defined as a *standardized dynamic variable*, it is permitted to <GlossaryTerm styled={true} term={"bind"}><i>bind</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"assign"}><i>assign</i></GlossaryTerm> that *dynamic variable* provided that the “Value Type” constraints on the *dynamic variable* are maintained, and that the new <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm> is consistent with the stated purpose of the <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm>. 



If an *external symbol* of the COMMON-LISP <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> is not defined as a *standardized function*, *macro*, or *special operator* , it is allowed to lexically <GlossaryTerm styled={true} term={"bind"}><i>bind</i></GlossaryTerm> it as a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> (*e.g.*, with <DictionaryLink styled={true} term={"flet"}><b>flet</b></DictionaryLink>), to declare the <DictionaryLink styled={true} term={"ftype"}><b>ftype</b></DictionaryLink> of that <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm>, and (in <GlossaryTerm styled={true} term={"implementation"}><i>implementations</i></GlossaryTerm> which provide the ability to do so) to <DictionaryLink styled={true} term={"trace"}><b>trace</b></DictionaryLink> that <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm>. 



If an *external symbol* of the COMMON-LISP <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> is not defined as a *standardized function*, *macro*, or *special operator* , it is allowed to lexically <GlossaryTerm styled={true} term={"bind"}><i>bind</i></GlossaryTerm> it as a <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm> (*e.g.*, with <DictionaryLink styled={true} term={"macrolet"}><b>macrolet</b></DictionaryLink>). 



If an *external symbol* of the COMMON-LISP <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> is not defined as a *standardized function*, *macro*, or *special operator* , it is allowed to lexically <GlossaryTerm styled={true} term={"bind"}><i>bind</i></GlossaryTerm> its *setf function name* as a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>, and to declare the <DictionaryLink styled={true} term={"ftype"}><b>ftype</b></DictionaryLink> of that <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm>. 







 



 




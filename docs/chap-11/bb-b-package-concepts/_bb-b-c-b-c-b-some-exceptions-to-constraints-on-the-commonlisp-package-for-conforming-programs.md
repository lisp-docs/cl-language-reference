 



If an <GlossaryTerm styled={true} term={"external symbol"}><i>external symbol</i></GlossaryTerm> of the COMMON-LISP <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> is not globally defined as a *standardized dynamic variable* or <GlossaryTerm styled={true} term={"constant variable"}><i>constant variable</i></GlossaryTerm>, it is allowed to lexically <GlossaryTerm  term={"bind"}><i>bind</i></GlossaryTerm> it and to declare the <DictionaryLink  term={"type"}><b>type</b></DictionaryLink> of that <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm>, and it is allowed to locally <GlossaryTerm  term={"establish"}><i>establish</i></GlossaryTerm> it as a <GlossaryTerm styled={true} term={"symbol macro"}><i>symbol macro</i></GlossaryTerm> (*e.g.*, with <DictionaryLink  term={"symbol-macrolet"}><b>symbol-macrolet</b></DictionaryLink>). 



Unless explicitly specified otherwise, if an <GlossaryTerm styled={true} term={"external symbol"}><i>external symbol</i></GlossaryTerm> of the COMMON-LISP <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> is globally defined as a *standardized dynamic variable*, it is permitted to <GlossaryTerm  term={"bind"}><i>bind</i></GlossaryTerm> or <GlossaryTerm  term={"assign"}><i>assign</i></GlossaryTerm> that <GlossaryTerm styled={true} term={"dynamic variable"}><i>dynamic variable</i></GlossaryTerm> provided that the “Value Type” constraints on the <GlossaryTerm styled={true} term={"dynamic variable"}><i>dynamic variable</i></GlossaryTerm> are maintained, and that the new <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of the <GlossaryTerm  term={"variable"}><i>variable</i></GlossaryTerm> is consistent with the stated purpose of the <GlossaryTerm  term={"variable"}><i>variable</i></GlossaryTerm>. 



If an <GlossaryTerm styled={true} term={"external symbol"}><i>external symbol</i></GlossaryTerm> of the COMMON-LISP <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> is not defined as a *standardized function*, <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm>, or <GlossaryTerm styled={true} term={"special operator"}><i>special operator</i></GlossaryTerm> , it is allowed to lexically <GlossaryTerm  term={"bind"}><i>bind</i></GlossaryTerm> it as a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> (*e.g.*, with <DictionaryLink  term={"flet"}><b>flet</b></DictionaryLink>), to declare the <DictionaryLink  term={"ftype"}><b>ftype</b></DictionaryLink> of that <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm>, and (in <GlossaryTerm  term={"implementation"}><i>implementations</i></GlossaryTerm> which provide the ability to do so) to <DictionaryLink  term={"trace"}><b>trace</b></DictionaryLink> that <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm>. 



If an <GlossaryTerm styled={true} term={"external symbol"}><i>external symbol</i></GlossaryTerm> of the COMMON-LISP <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> is not defined as a *standardized function*, <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm>, or <GlossaryTerm styled={true} term={"special operator"}><i>special operator</i></GlossaryTerm> , it is allowed to lexically <GlossaryTerm  term={"bind"}><i>bind</i></GlossaryTerm> it as a <GlossaryTerm  term={"macro"}><i>macro</i></GlossaryTerm> (*e.g.*, with <DictionaryLink  term={"macrolet"}><b>macrolet</b></DictionaryLink>). 



If an <GlossaryTerm styled={true} term={"external symbol"}><i>external symbol</i></GlossaryTerm> of the COMMON-LISP <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> is not defined as a *standardized function*, <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm>, or <GlossaryTerm styled={true} term={"special operator"}><i>special operator</i></GlossaryTerm> , it is allowed to lexically <GlossaryTerm  term={"bind"}><i>bind</i></GlossaryTerm> its <GlossaryTerm styled={true} term={"setf function name"}><i>setf function name</i></GlossaryTerm> as a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm>, and to declare the <DictionaryLink  term={"ftype"}><b>ftype</b></DictionaryLink> of that <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm>. 







 



 




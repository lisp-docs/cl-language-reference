 



If an <GlossaryTerm styled={true} term={"external symbol"}><i>external symbol</i></GlossaryTerm> of the COMMON-LISP <ClLinks  term={"package"}><i>package</i></ClLinks> is not globally defined as a *standardized dynamic variable* or <GlossaryTerm styled={true} term={"constant variable"}><i>constant variable</i></GlossaryTerm>, it is allowed to lexically <ClLinks  term={"bind"}><i>bind</i></ClLinks> it and to declare the <DictionaryLink  term={"type"}><b>type</b></DictionaryLink> of that <ClLinks  term={"binding"}><i>binding</i></ClLinks>, and it is allowed to locally <ClLinks  term={"establish"}><i>establish</i></ClLinks> it as a <GlossaryTerm styled={true} term={"symbol macro"}><i>symbol macro</i></GlossaryTerm> (*e.g.*, with <DictionaryLink  term={"symbol-macrolet"}><b>symbol-macrolet</b></DictionaryLink>). 



Unless explicitly specified otherwise, if an <GlossaryTerm styled={true} term={"external symbol"}><i>external symbol</i></GlossaryTerm> of the COMMON-LISP <ClLinks  term={"package"}><i>package</i></ClLinks> is globally defined as a *standardized dynamic variable*, it is permitted to <ClLinks  term={"bind"}><i>bind</i></ClLinks> or <ClLinks  term={"assign"}><i>assign</i></ClLinks> that <GlossaryTerm styled={true} term={"dynamic variable"}><i>dynamic variable</i></GlossaryTerm> provided that the “Value Type” constraints on the <GlossaryTerm styled={true} term={"dynamic variable"}><i>dynamic variable</i></GlossaryTerm> are maintained, and that the new <ClLinks  term={"value"}><i>value</i></ClLinks> of the <ClLinks  term={"variable"}><i>variable</i></ClLinks> is consistent with the stated purpose of the <ClLinks  term={"variable"}><i>variable</i></ClLinks>. 



If an <GlossaryTerm styled={true} term={"external symbol"}><i>external symbol</i></GlossaryTerm> of the COMMON-LISP <ClLinks  term={"package"}><i>package</i></ClLinks> is not defined as a *standardized function*, <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm>, or <GlossaryTerm styled={true} term={"special operator"}><i>special operator</i></GlossaryTerm> , it is allowed to lexically <ClLinks  term={"bind"}><i>bind</i></ClLinks> it as a <ClLinks  term={"function"}><i>function</i></ClLinks> (*e.g.*, with <DictionaryLink  term={"flet"}><b>flet</b></DictionaryLink>), to declare the <DictionaryLink  term={"ftype"}><b>ftype</b></DictionaryLink> of that <ClLinks  term={"binding"}><i>binding</i></ClLinks>, and (in <ClLinks  term={"implementation"}><i>implementations</i></ClLinks> which provide the ability to do so) to <DictionaryLink  term={"trace"}><b>trace</b></DictionaryLink> that <ClLinks  term={"binding"}><i>binding</i></ClLinks>. 



If an <GlossaryTerm styled={true} term={"external symbol"}><i>external symbol</i></GlossaryTerm> of the COMMON-LISP <ClLinks  term={"package"}><i>package</i></ClLinks> is not defined as a *standardized function*, <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm>, or <GlossaryTerm styled={true} term={"special operator"}><i>special operator</i></GlossaryTerm> , it is allowed to lexically <ClLinks  term={"bind"}><i>bind</i></ClLinks> it as a <ClLinks  term={"macro"}><i>macro</i></ClLinks> (*e.g.*, with <DictionaryLink  term={"macrolet"}><b>macrolet</b></DictionaryLink>). 



If an <GlossaryTerm styled={true} term={"external symbol"}><i>external symbol</i></GlossaryTerm> of the COMMON-LISP <ClLinks  term={"package"}><i>package</i></ClLinks> is not defined as a *standardized function*, <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm>, or <GlossaryTerm styled={true} term={"special operator"}><i>special operator</i></GlossaryTerm> , it is allowed to lexically <ClLinks  term={"bind"}><i>bind</i></ClLinks> its <GlossaryTerm styled={true} term={"setf function name"}><i>setf function name</i></GlossaryTerm> as a <ClLinks  term={"function"}><i>function</i></ClLinks>, and to declare the <DictionaryLink  term={"ftype"}><b>ftype</b></DictionaryLink> of that <ClLinks  term={"binding"}><i>binding</i></ClLinks>. 







 



 




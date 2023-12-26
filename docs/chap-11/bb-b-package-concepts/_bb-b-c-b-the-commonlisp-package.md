 



The COMMON-LISP <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> contains the primitives of the Common Lisp system as defined by this specification. Its <GlossaryTerm styled={true} term={"external symbol"}><i>external symbols</i></GlossaryTerm> include all of the <GlossaryTerm styled={true} term={"defined name"}><i>defined names</i></GlossaryTerm> (except for <GlossaryTerm styled={true} term={"defined name"}><i>defined names</i></GlossaryTerm> in the KEYWORD <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>) that are present in the Common Lisp system, such as <DictionaryLink  term={"car"}><b>car</b></DictionaryLink>, <DictionaryLink  term={"cdr"}><b>cdr</b></DictionaryLink>, <DictionaryLink  term={"package"}><b>\*package\*</b></DictionaryLink>, etc. The COMMON-LISP <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> has the <GlossaryTerm  term={"nickname"}><i>nickname</i></GlossaryTerm> CL. 



The COMMON-LISP <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> has as <GlossaryTerm styled={true} term={"external symbol"}><i>external symbols</i></GlossaryTerm> those symbols enumerated in the figures in Section 1.9 (Symbols in the COMMON-LISP Package), and no others. These <GlossaryTerm styled={true} term={"external symbol"}><i>external symbols</i></GlossaryTerm> are <GlossaryTerm  term={"present"}><i>present</i></GlossaryTerm> in the COMMON-LISP <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> but their <GlossaryTerm styled={true} term={"home package"}><i>home package</i></GlossaryTerm> need not be the COMMON-LISP <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>. 



For example, the symbol HELP cannot be an <GlossaryTerm styled={true} term={"external symbol"}><i>external symbol</i></GlossaryTerm> of the COMMON-LISP <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> because it is not mentioned in Section 1.9 (Symbols in the COMMON-LISP Package). In contrast, the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> 







 



 



**variable** must be an <GlossaryTerm styled={true} term={"external symbol"}><i>external symbol</i></GlossaryTerm> of the COMMON-LISP <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> even though it has no definition because it is listed in that section (to support its use as a valid second <GlossaryTerm  term={"argument"}><i>argument</i></GlossaryTerm> to the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> **documentation**). 



The COMMON-LISP <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> can have additional <GlossaryTerm styled={true} term={"internal symbol"}><i>internal symbols</i></GlossaryTerm>. 




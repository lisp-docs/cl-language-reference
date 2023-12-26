 



The COMMON-LISP <ClLinks  term={"package"}><i>package</i></ClLinks> contains the primitives of the Common Lisp system as defined by this specification. Its <GlossaryTerm styled={true} term={"external symbol"}><i>external symbols</i></GlossaryTerm> include all of the <GlossaryTerm styled={true} term={"defined name"}><i>defined names</i></GlossaryTerm> (except for <GlossaryTerm styled={true} term={"defined name"}><i>defined names</i></GlossaryTerm> in the KEYWORD <ClLinks  term={"package"}><i>package</i></ClLinks>) that are present in the Common Lisp system, such as <DictionaryLink  term={"car"}><b>car</b></DictionaryLink>, <DictionaryLink  term={"cdr"}><b>cdr</b></DictionaryLink>, <DictionaryLink  term={"package"}><b>\*package\*</b></DictionaryLink>, etc. The COMMON-LISP <ClLinks  term={"package"}><i>package</i></ClLinks> has the <ClLinks  term={"nickname"}><i>nickname</i></ClLinks> CL. 



The COMMON-LISP <ClLinks  term={"package"}><i>package</i></ClLinks> has as <GlossaryTerm styled={true} term={"external symbol"}><i>external symbols</i></GlossaryTerm> those symbols enumerated in the figures in Section 1.9 (Symbols in the COMMON-LISP Package), and no others. These <GlossaryTerm styled={true} term={"external symbol"}><i>external symbols</i></GlossaryTerm> are <ClLinks  term={"present"}><i>present</i></ClLinks> in the COMMON-LISP <ClLinks  term={"package"}><i>package</i></ClLinks> but their <GlossaryTerm styled={true} term={"home package"}><i>home package</i></GlossaryTerm> need not be the COMMON-LISP <ClLinks  term={"package"}><i>package</i></ClLinks>. 



For example, the symbol HELP cannot be an <GlossaryTerm styled={true} term={"external symbol"}><i>external symbol</i></GlossaryTerm> of the COMMON-LISP <ClLinks  term={"package"}><i>package</i></ClLinks> because it is not mentioned in Section 1.9 (Symbols in the COMMON-LISP Package). In contrast, the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> 







 



 



**variable** must be an <GlossaryTerm styled={true} term={"external symbol"}><i>external symbol</i></GlossaryTerm> of the COMMON-LISP <ClLinks  term={"package"}><i>package</i></ClLinks> even though it has no definition because it is listed in that section (to support its use as a valid second <ClLinks  term={"argument"}><i>argument</i></ClLinks> to the <ClLinks  term={"function"}><i>function</i></ClLinks> **documentation**). 



The COMMON-LISP <ClLinks  term={"package"}><i>package</i></ClLinks> can have additional <GlossaryTerm styled={true} term={"internal symbol"}><i>internal symbols</i></GlossaryTerm>. 




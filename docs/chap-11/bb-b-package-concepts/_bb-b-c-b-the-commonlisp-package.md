 



The COMMON-LISP <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> contains the primitives of the Common Lisp system as defined by this specification. Its *external symbols* include all of the *defined names* (except for *defined names* in the KEYWORD <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>) that are present in the Common Lisp system, such as <DictionaryLink styled={true} term={"car"}><b>car</b></DictionaryLink>, <DictionaryLink styled={true} term={"cdr"}><b>cdr</b></DictionaryLink>, <DictionaryLink styled={true} term={"package"}><b>\*package\*</b></DictionaryLink>, etc. The COMMON-LISP <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> has the <GlossaryTerm styled={true} term={"nickname"}><i>nickname</i></GlossaryTerm> CL. 



The COMMON-LISP <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> has as *external symbols* those symbols enumerated in the figures in Section 1.9 (Symbols in the COMMON-LISP Package), and no others. These *external symbols* are <GlossaryTerm styled={true} term={"present"}><i>present</i></GlossaryTerm> in the COMMON-LISP <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> but their *home package* need not be the COMMON-LISP <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. 



For example, the symbol HELP cannot be an *external symbol* of the COMMON-LISP <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> because it is not mentioned in Section 1.9 (Symbols in the COMMON-LISP Package). In contrast, the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> 







 



 



**variable** must be an *external symbol* of the COMMON-LISP <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> even though it has no definition because it is listed in that section (to support its use as a valid second <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> to the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> **documentation**). 



The COMMON-LISP <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> can have additional *internal symbols*. 




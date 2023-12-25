 



The COMMON-LISP <ClLinks  term={"package"}><i>package</i></ClLinks> contains the primitives of the Common Lisp system as defined by this specification. Its *external symbols* include all of the *defined names* (except for *defined names* in the KEYWORD <ClLinks  term={"package"}><i>package</i></ClLinks>) that are present in the Common Lisp system, such as <ClLinks  term={"car"}><b>car</b></ClLinks>, <ClLinks  term={"cdr"}><b>cdr</b></ClLinks>, <ClLinks  term={"package"}><b>\*package\*</b></ClLinks>, etc. The COMMON-LISP <ClLinks  term={"package"}><i>package</i></ClLinks> has the <ClLinks  term={"nickname"}><i>nickname</i></ClLinks> CL. 



The COMMON-LISP <ClLinks  term={"package"}><i>package</i></ClLinks> has as *external symbols* those symbols enumerated in the figures in Section 1.9 (Symbols in the COMMON-LISP Package), and no others. These *external symbols* are <ClLinks  term={"present"}><i>present</i></ClLinks> in the COMMON-LISP <ClLinks  term={"package"}><i>package</i></ClLinks> but their *home package* need not be the COMMON-LISP <ClLinks  term={"package"}><i>package</i></ClLinks>. 



For example, the symbol HELP cannot be an *external symbol* of the COMMON-LISP <ClLinks  term={"package"}><i>package</i></ClLinks> because it is not mentioned in Section 1.9 (Symbols in the COMMON-LISP Package). In contrast, the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> 







 



 



**variable** must be an *external symbol* of the COMMON-LISP <ClLinks  term={"package"}><i>package</i></ClLinks> even though it has no definition because it is listed in that section (to support its use as a valid second <ClLinks  term={"argument"}><i>argument</i></ClLinks> to the <ClLinks  term={"function"}><i>function</i></ClLinks> **documentation**). 



The COMMON-LISP <ClLinks  term={"package"}><i>package</i></ClLinks> can have additional *internal symbols*. 




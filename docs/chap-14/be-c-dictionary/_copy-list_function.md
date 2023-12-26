**copy-list** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"copy-list"}><b>copy-list</b></ClLinks> *list → copy* 



**Arguments and Values:** 



<ClLinks styled={true} term={"list"}><i>list</i></ClLinks>—a <GlossaryTerm styled={true} term={"proper list"}><i>proper list</i></GlossaryTerm> or a <GlossaryTerm styled={true} term={"dotted list"}><i>dotted list</i></GlossaryTerm>. 



<ClLinks styled={true} term={"copy"}><i>copy</i></ClLinks>—a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>. 



**Description:** 



Returns a <ClLinks styled={true} term={"copy"}><i>copy</i></ClLinks> of <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>. If <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> is a <GlossaryTerm styled={true} term={"dotted list"}><i>dotted list</i></GlossaryTerm>, the resulting <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> will also be a <GlossaryTerm styled={true} term={"dotted list"}><i>dotted list</i></GlossaryTerm>. 



Only the <GlossaryTerm styled={true} term={"list structure"}><i>list structure</i></GlossaryTerm> of <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> is copied; the <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks> of the resulting list are the <ClLinks styled={true} term={"same"}><i>same</i></ClLinks> as the corresponding <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks> of the given <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>. 



**Examples:**
```lisp
(setq lst (list 1 (list 2 3))) → (1 (2 3)) 
(setq slst lst) → (1 (2 3)) 
(setq clst (copy-list lst)) → (1 (2 3)) 
(eq slst lst) → true 
(eq clst lst) → false 
(equal clst lst) → true 
(rplaca lst "one") → ("one" (2 3)) 
slst → ("one" (2 3)) 
clst → (1 (2 3)) 
(setf (caadr lst) "two") → "two" 
lst → ("one" ("two" 3)) 
slst → ("one" ("two" 3)) 
clst → (1 ("two" 3)) 
```
**Exceptional Situations:** 



The consequences are undefined if <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> is a <GlossaryTerm styled={true} term={"circular list"}><i>circular list</i></GlossaryTerm>. 



**See Also:** 



<ClLinks styled={true} term={"copy-alist"}><b>copy-alist</b></ClLinks>, <ClLinks styled={true} term={"copy-seq"}><b>copy-seq</b></ClLinks>, <ClLinks styled={true} term={"copy-tree"}><b>copy-tree</b></ClLinks> 



**Notes:** 



The copy created is <ClLinks styled={true} term={"equal"}><b>equal</b></ClLinks> to <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>, but not <ClLinks styled={true} term={"eq"}><b>eq</b></ClLinks>. 







 



 



**list, list***∗* 




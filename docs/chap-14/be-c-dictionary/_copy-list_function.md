**copy-list** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"copy-list"}><b>copy-list</b></DictionaryLink> *list → copy* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>—a *proper list* or a *dotted list*. 



<GlossaryTerm styled={true} term={"copy"}><i>copy</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>. 



**Description:** 



Returns a <GlossaryTerm styled={true} term={"copy"}><i>copy</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>. If <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> is a *dotted list*, the resulting <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> will also be a *dotted list*. 



Only the *list structure* of <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> is copied; the <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm> of the resulting list are the <GlossaryTerm styled={true} term={"same"}><i>same</i></GlossaryTerm> as the corresponding <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm> of the given <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>. 



**Examples:**
```lisp

(setq lst (list 1 (list 2 3))) *→* (1 (2 3)) 
(setq slst lst) *→* (1 (2 3)) 
(setq clst (copy-list lst)) *→* (1 (2 3)) 
(eq slst lst) *→ true* 
(eq clst lst) *→ false* 
(equal clst lst) *→ true* 
(rplaca lst "one") *→* ("one" (2 3)) 
slst *→* ("one" (2 3)) 
clst *→* (1 (2 3)) 
(setf (caadr lst) "two") *→* "two" 
lst *→* ("one" ("two" 3)) 
slst *→* ("one" ("two" 3)) 
clst *→* (1 ("two" 3)) 

```
**Exceptional Situations:** 



The consequences are undefined if <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> is a *circular list*. 



**See Also:** 



<DictionaryLink styled={true} term={"copy-alist"}><b>copy-alist</b></DictionaryLink>, <DictionaryLink styled={true} term={"copy-seq"}><b>copy-seq</b></DictionaryLink>, <DictionaryLink styled={true} term={"copy-tree"}><b>copy-tree</b></DictionaryLink> 



**Notes:** 



The copy created is <DictionaryLink styled={true} term={"equal"}><b>equal</b></DictionaryLink> to <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>, but not <DictionaryLink styled={true} term={"eq"}><b>eq</b></DictionaryLink>. 







 



 



**list, list***∗* 




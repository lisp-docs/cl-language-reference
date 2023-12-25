**copy-alist** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"copy-alist"}><b>copy-alist</b></DictionaryLink> *alist → new-alist* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"alist"}><i>alist</i></GlossaryTerm>—an *association list*. 



*new-alist*—an *association list*. 



**Description:** 



<DictionaryLink styled={true} term={"copy-alist"}><b>copy-alist</b></DictionaryLink> returns a <GlossaryTerm styled={true} term={"copy"}><i>copy</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"alist"}><i>alist</i></GlossaryTerm>. 



The *list structure* of <GlossaryTerm styled={true} term={"alist"}><i>alist</i></GlossaryTerm> is copied, and the <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"alist"}><i>alist</i></GlossaryTerm> which are *conses* are also copied (as *conses* only). Any other <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> which are referred to, whether directly or indirectly, by the <GlossaryTerm styled={true} term={"alist"}><i>alist</i></GlossaryTerm> continue to be shared. 



**Examples:**
```lisp

(defparameter \*alist\* (acons 1 "one" (acons 2 "two" ’()))) 



\*alist\* *→* ((1 . "one") (2 . "two")) 
(defparameter \*list-copy\* (copy-list \*alist\*)) 
\*list-copy\* *→* ((1 . "one") (2 . "two")) 
(defparameter \*alist-copy\* (copy-alist \*alist\*)) 
\*alist-copy\* *→* ((1 . "one") (2 . "two")) 
(setf (cdr (assoc 2 \*alist-copy\*)) "deux") *→* "deux" 
\*alist-copy\* *→* ((1 . "one") (2 . "deux")) 
\*alist\* *→* ((1 . "one") (2 . "two")) 
(setf (cdr (assoc 1 \*list-copy\*)) "uno") *→* "uno" 
\*list-copy\* *→* ((1 . "uno") (2 . "two")) 
\*alist\* *→* ((1 . "uno") (2 . "two")) 

```
**See Also:** 



<DictionaryLink styled={true} term={"copy-list"}><b>copy-list</b></DictionaryLink> 




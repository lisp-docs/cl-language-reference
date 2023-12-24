**copy-alist** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"copy-alist"}><b>copy-alist</b></ClLinks> *alist → new-alist* 



**Arguments and Values:** 



<ClLinks styled={true} term={"alist"}><i>alist</i></ClLinks>—an *association list*. 



*new-alist*—an *association list*. 



**Description:** 



<ClLinks styled={true} term={"copy-alist"}><b>copy-alist</b></ClLinks> returns a <ClLinks styled={true} term={"copy"}><i>copy</i></ClLinks> of <ClLinks styled={true} term={"alist"}><i>alist</i></ClLinks>. 



The *list structure* of <ClLinks styled={true} term={"alist"}><i>alist</i></ClLinks> is copied, and the <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks> of <ClLinks styled={true} term={"alist"}><i>alist</i></ClLinks> which are *conses* are also copied (as *conses* only). Any other <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> which are referred to, whether directly or indirectly, by the <ClLinks styled={true} term={"alist"}><i>alist</i></ClLinks> continue to be shared. 



**Examples:**
```lisp

(defparameter \*alist\* (acons 1 "one" (acons 2 "two" ’()))) 



\*alist\* → ((1 . "one") (2 . "two")) 
(defparameter \*list-copy\* (copy-list \*alist\*)) 
\*list-copy\* → ((1 . "one") (2 . "two")) 
(defparameter \*alist-copy\* (copy-alist \*alist\*)) 
\*alist-copy\* → ((1 . "one") (2 . "two")) 
(setf (cdr (assoc 2 \*alist-copy\*)) "deux") → "deux" 
\*alist-copy\* → ((1 . "one") (2 . "deux")) 
\*alist\* → ((1 . "one") (2 . "two")) 
(setf (cdr (assoc 1 \*list-copy\*)) "uno") → "uno" 
\*list-copy\* → ((1 . "uno") (2 . "two")) 
\*alist\* → ((1 . "uno") (2 . "two")) 

```
**See Also:** 



<ClLinks styled={true} term={"copy-list"}><b>copy-list</b></ClLinks> 




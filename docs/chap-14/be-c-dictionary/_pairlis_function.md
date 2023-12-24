**pairlis** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"pairlis"}><b>pairlis</b></ClLinks> *keys data* &amp;optional *alist → new-alist* 



**Arguments and Values:** 



<ClLinks styled={true} term={"key"}><i>keys</i></ClLinks>—a *proper list*. 



*data*—a *proper list*. 



<ClLinks styled={true} term={"alist"}><i>alist</i></ClLinks>—an *association list*. The default is the *empty list*. 



*new-alist*—an *association list*. 



**Description:** 



Returns an *association list* that associates elements of <ClLinks styled={true} term={"key"}><i>keys</i></ClLinks> to corresponding elements of *data*. The consequences are undefined if <ClLinks styled={true} term={"key"}><i>keys</i></ClLinks> and *data* are not of the same <ClLinks styled={true} term={"length"}><i>length</i></ClLinks>. 



If <ClLinks styled={true} term={"alist"}><i>alist</i></ClLinks> is supplied, <ClLinks styled={true} term={"pairlis"}><b>pairlis</b></ClLinks> returns a modified <ClLinks styled={true} term={"alist"}><i>alist</i></ClLinks> with the new pairs prepended to it. The new pairs may appear in the resulting *association list* in either forward or backward order. The result of 



(pairlis ’(one two) ’(1 2) ’((three . 3) (four . 19))) 



might be 



((one . 1) (two . 2) (three . 3) (four . 19)) 



or 







 



 



((two . 2) (one . 1) (three . 3) (four . 19)) 



**Examples:**
```lisp

(setq keys ’(1 2 3) 
      data ’("one" "two" "three") 
      alist ’((4 . "four"))) → ((4 . "four")) 
(pairlis keys data) → ((3 . "three") (2 . "two") (1 . "one")) 
(pairlis keys data alist) 
→ ((3 . "three") (2 . "two") (1 . "one") (4 . "four")) 
alist → ((4 . "four")) 

```
**Exceptional Situations:** 



Should be prepared to signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if <ClLinks styled={true} term={"key"}><i>keys</i></ClLinks> and *data* are not *proper lists*. 



**See Also:** 



<ClLinks styled={true} term={"acons"}><b>acons</b></ClLinks> 




**pairlis** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"pairlis"}><b>pairlis</b></DictionaryLink> *keys data* &amp;optional *alist → new-alist* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"key"}><i>keys</i></GlossaryTerm>—a *proper list*. 



*data*—a *proper list*. 



<GlossaryTerm styled={true} term={"alist"}><i>alist</i></GlossaryTerm>—an *association list*. The default is the *empty list*. 



*new-alist*—an *association list*. 



**Description:** 



Returns an *association list* that associates elements of <GlossaryTerm styled={true} term={"key"}><i>keys</i></GlossaryTerm> to corresponding elements of *data*. The consequences are undefined if <GlossaryTerm styled={true} term={"key"}><i>keys</i></GlossaryTerm> and *data* are not of the same <GlossaryTerm styled={true} term={"length"}><i>length</i></GlossaryTerm>. 



If <GlossaryTerm styled={true} term={"alist"}><i>alist</i></GlossaryTerm> is supplied, <DictionaryLink styled={true} term={"pairlis"}><b>pairlis</b></DictionaryLink> returns a modified <GlossaryTerm styled={true} term={"alist"}><i>alist</i></GlossaryTerm> with the new pairs prepended to it. The new pairs may appear in the resulting *association list* in either forward or backward order. The result of 



(pairlis ’(one two) ’(1 2) ’((three . 3) (four . 19))) 



might be 



((one . 1) (two . 2) (three . 3) (four . 19)) 



or 







 



 



((two . 2) (one . 1) (three . 3) (four . 19)) 



**Examples:**
```lisp

(setq keys ’(1 2 3) 
      data ’("one" "two" "three") 
      alist ’((4 . "four"))) *→* ((4 . "four")) 
(pairlis keys data) *→* ((3 . "three") (2 . "two") (1 . "one")) 
(pairlis keys data alist) 
*→* ((3 . "three") (2 . "two") (1 . "one") (4 . "four")) 
alist *→* ((4 . "four")) 

```
**Exceptional Situations:** 



Should be prepared to signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm styled={true} term={"key"}><i>keys</i></GlossaryTerm> and *data* are not *proper lists*. 



**See Also:** 



<DictionaryLink styled={true} term={"acons"}><b>acons</b></DictionaryLink> 




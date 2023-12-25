**make-list** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"make-list"}><b>make-list</b></ClLinks> *size* &amp;key *initial-element → list* 



**Arguments and Values:** 



*size*—a non-negative *integer* . 



*initial-element*—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. The default is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



<ClLinks styled={true} term={"list"}><i>list</i></ClLinks>—a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>. 



**Description:** 



Returns a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of <ClLinks styled={true} term={"length"}><i>length</i></ClLinks> given by *size*, each of the <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks> of which is *initial-element*. 

**Examples:**
```lisp
(make-list 5) → (NIL NIL NIL NIL NIL) 
(make-list 3 :initial-element ’rah) → (RAH RAH RAH) 
(make-list 2 :initial-element ’(1 2 3)) → ((1 2 3) (1 2 3)) 
(make-list 0) → NIL ;*i.e.*, () 
(make-list 0 :initial-element ’new-element) → NIL 
```
**Exceptional Situations:** 



Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if *size* is not a non-negative *integer* . 



**See Also:** 



<ClLinks styled={true} term={"cons"}><b>cons</b></ClLinks>, <ClLinks styled={true} term={"list"}><b>list</b></ClLinks> 




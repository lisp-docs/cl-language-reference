**append** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"append"}><b>append</b></ClLinks> &amp;rest *lists → result* 



**Arguments and Values:** 



<ClLinks styled={true} term={"list"}><i>list</i></ClLinks>—each must be a <GlossaryTerm styled={true} term={"proper list"}><i>proper list</i></GlossaryTerm> except the last, which may be any <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 







 



 



*result*—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. This will be a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> unless the last <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> was not a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> and all preceding <ClLinks styled={true} term={"list"}><i>lists</i></ClLinks> were <ClLinks styled={true} term={"null"}><i>null</i></ClLinks>. 



**Description:** 



<ClLinks styled={true} term={"append"}><b>append</b></ClLinks> returns a new <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> that is the concatenation of the copies. <ClLinks styled={true} term={"list"}><i>lists</i></ClLinks> are left unchanged; the <GlossaryTerm styled={true} term={"list structure"}><i>list structure</i></GlossaryTerm> of each of <ClLinks styled={true} term={"list"}><i>lists</i></ClLinks> except the last is copied. The last argument is not copied; it becomes the <ClLinks styled={true} term={"cdr"}><i>cdr</i></ClLinks> of the final <GlossaryTerm styled={true} term={"dotted pair"}><i>dotted pair</i></GlossaryTerm> of the concatenation of the preceding <ClLinks styled={true} term={"list"}><i>lists</i></ClLinks>, or is returned directly if there are no preceding *non-empty lists*. 



**Examples:**
```lisp
(append ’(a b c) ’(d e f) ’() ’(g)) → (A B C D E F G) 
(append ’(a b c) ’d) → (A B C . D) 
(setq lst ’(a b c)) → (A B C) 
(append lst ’(d)) → (A B C D) 
lst → (A B C) 
(append) → NIL 
(append ’a) → A 
```
**See Also:** 



<ClLinks styled={true} term={"nconc"}><b>nconc</b></ClLinks>, <ClLinks styled={true} term={"concatenate"}><b>concatenate</b></ClLinks> 




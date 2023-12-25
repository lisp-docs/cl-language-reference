**symbol-plist** <ClLinks styled={true} term={"accessor"}><i>Accessor</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"symbol-plist"}><b>symbol-plist</b></ClLinks> *symbol → plist* 



<!-- **(setf (symbol-plist** <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>**)** *new-plist<ClLinks styled={true} term={"t"}><b>*)</b></ClLinks>  -->
**(setf (symbol-plist** *symbol***)** *new-plist***)** 



**Arguments and Values:** 



<ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>—a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. 



<ClLinks styled={true} term={"plist"}><i>plist</i></ClLinks>, *new-plist*—a *property list*. 



**Description:** 



*Accesses* the *property list* of <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. 



**Examples:**
```lisp
(setq sym (gensym)) → #:G9723 
(symbol-plist sym) → () 
(setf (get sym ’prop1) ’val1) → VAL1 
(symbol-plist sym) → (PROP1 VAL1) 
(setf (get sym ’prop2) ’val2) → VAL2 
(symbol-plist sym) → (PROP2 VAL2 PROP1 VAL1) 
(setf (symbol-plist sym) (list ’prop3 ’val3)) → (PROP3 VAL3) 
(symbol-plist sym) → (PROP3 VAL3) 
```
**Exceptional Situations:** 



Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is not a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. 



**See Also:** 



<ClLinks styled={true} term={"get"}><b>get</b></ClLinks>, <ClLinks styled={true} term={"remprop"}><b>remprop</b></ClLinks> 



**Notes:** 



The use of <ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks> should be avoided, since a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>’s *property list* is a global resource that can contain information established and depended upon by unrelated programs in the same *Lisp image*. 







 



 



<ClLinks styled={true} term={"symbol-value"}><b>symbol-value</b></ClLinks> 




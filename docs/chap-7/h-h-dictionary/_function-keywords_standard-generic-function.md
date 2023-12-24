**function-keywords** *Standard Generic Function* 



**Syntax:** 



<ClLinks styled={true} term={"function-keywords"}><b>function-keywords</b></ClLinks> *method → keys, allow-other-keys-p* 



**Method Signatures:** 



<ClLinks styled={true} term={"function-keywords"}><b>function-keywords</b></ClLinks> (<ClLinks styled={true} term={"method"}><i>method</i></ClLinks> <ClLinks styled={true} term={"standard-method"}><b>standard-method</b></ClLinks>) 



**Arguments and Values:** 



<ClLinks styled={true} term={"method"}><i>method</i></ClLinks>—a <ClLinks styled={true} term={"method"}><i>method</i></ClLinks>. 



<ClLinks styled={true} term={"key"}><i>keys</i></ClLinks>—a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>. 



*allow-other-keys-p*—a *generalized boolean*. 



**Description:** 



Returns the keyword parameter specifiers for a <ClLinks styled={true} term={"method"}><i>method</i></ClLinks>. 



Two values are returned: a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of the explicitly named keywords and a *generalized boolean* that states whether **&amp;allow-other-keys** had been specified in the <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> definition. 



**Examples:**
```lisp

(defmethod gf1 ((a integer) &optional (b 2) 
		&key (c 3) ((:dee d) 4) e ((eff f))) 
    (list a b c d e f)) 
→ #<STANDARD-METHOD GF1 (INTEGER) 36324653> 
(find-method #’gf1 ’() (list (find-class ’integer))) 
→ #<STANDARD-METHOD GF1 (INTEGER) 36324653> 
(function-keywords \*) 
→ (:C :DEE :E EFF), *false* 
(defmethod gf2 ((a integer)) 
    (list a b c d e f)) 
→ #<STANDARD-METHOD GF2 (INTEGER) 42701775> 
(function-keywords (find-method #’gf1 ’() (list (find-class ’integer)))) 
→ (), *false* 
(defmethod gf3 ((a integer) &key b c d &allow-other-keys) 
    (list a b c d e f)) 
(function-keywords \*) 
→ (:B :C :D), *true* 

```
**Affected By:** 



<ClLinks styled={true} term={"defmethod"}><b>defmethod</b></ClLinks> 







 



 



**See Also:** 



<ClLinks styled={true} term={"defmethod"}><b>defmethod</b></ClLinks> 




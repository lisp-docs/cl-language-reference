**method-qualifiers** <GlossaryTerm styled={true} term={"standard generic function"}><i>Standard Generic Function</i></GlossaryTerm> 



**Syntax:** 



<ClLinks  term={"method-qualifiers"}><b>method-qualifiers</b></ClLinks> *method → qualifiers* 







 



 



**Method Signatures:** 



<ClLinks  term={"method-qualifiers"}><b>method-qualifiers</b></ClLinks> (<ClLinks  term={"method"}><i>method</i></ClLinks> <ClLinks  term={"standard-method"}><b>standard-method</b></ClLinks>) 



**Arguments and Values:** 



<ClLinks  term={"method"}><i>method</i></ClLinks>—a <ClLinks  term={"method"}><i>method</i></ClLinks>. 



<ClLinks  term={"qualifier"}><i>qualifiers</i></ClLinks>—a <GlossaryTerm styled={true} term={"proper list"}><i>proper list</i></GlossaryTerm>. 



**Description:** 



Returns a <ClLinks  term={"list"}><i>list</i></ClLinks> of the <ClLinks  term={"qualifier"}><i>qualifiers</i></ClLinks> of the <ClLinks  term={"method"}><i>method</i></ClLinks>. 



**Examples:**
```lisp
(defmethod some-gf :before ((a integer)) a) 
→ #<STANDARD-METHOD SOME-GF (:BEFORE) (INTEGER) 42736540> 
(method-qualifiers \*) → (:BEFORE) 
```
**See Also:** 



<ClLinks  term={"define-method-combination"}><b>define-method-combination</b></ClLinks> 




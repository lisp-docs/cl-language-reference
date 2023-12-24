**method-qualifiers** *Standard Generic Function* 



**Syntax:** 



<ClLinks styled={true} term={"method-qualifiers"}><b>method-qualifiers</b></ClLinks> *method → qualifiers* 







 



 



**Method Signatures:** 



<ClLinks styled={true} term={"method-qualifiers"}><b>method-qualifiers</b></ClLinks> (<ClLinks styled={true} term={"method"}><i>method</i></ClLinks> <ClLinks styled={true} term={"standard-method"}><b>standard-method</b></ClLinks>) 



**Arguments and Values:** 



<ClLinks styled={true} term={"method"}><i>method</i></ClLinks>—a <ClLinks styled={true} term={"method"}><i>method</i></ClLinks>. 



<ClLinks styled={true} term={"qualifier"}><i>qualifiers</i></ClLinks>—a *proper list*. 



**Description:** 



Returns a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of the <ClLinks styled={true} term={"qualifier"}><i>qualifiers</i></ClLinks> of the <ClLinks styled={true} term={"method"}><i>method</i></ClLinks>. 



**Examples:**
```lisp

(defmethod some-gf :before ((a integer)) a) 
→ #<STANDARD-METHOD SOME-GF (:BEFORE) (INTEGER) 42736540> 
(method-qualifiers \*) → (:BEFORE) 

```
**See Also:** 



<ClLinks styled={true} term={"define-method-combination"}><b>define-method-combination</b></ClLinks> 




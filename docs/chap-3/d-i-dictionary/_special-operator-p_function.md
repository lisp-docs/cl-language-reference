**special-operator-p** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"special-operator-p"}><b>special-operator-p</b></ClLinks> *symbol ! generalized-boolean* 



**Arguments and Values:** 



<ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>—a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is a *special operator* ; otherwise, returns <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 



**Examples:**
```lisp

(special-operator-p ’if) *! true* 
(special-operator-p ’car) *! false* 
(special-operator-p ’one) *! false* 

```
**Exceptional Situations:** 



Should signal <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if its argument is not a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. 



**Notes:** 



Historically, this function was called special-form-p. The name was finally declared a misnomer and changed, since it returned true for *special operators*, not *special forms*. 







 



 



<ClLinks styled={true} term={"constantp"}><b>constantp</b></ClLinks> 




**special-operator-p** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"special-operator-p"}><b>special-operator-p</b></ClLinks> *symbol ! generalized-boolean* 



**Arguments and Values:** 



<ClLinks  term={"symbol"}><i>symbol</i></ClLinks>—a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <ClLinks  term={"true"}><i>true</i></ClLinks> if <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is a *special operator* ; otherwise, returns <ClLinks  term={"false"}><i>false</i></ClLinks>. 



**Examples:**
```lisp
(special-operator-p ’if) *! true* 
(special-operator-p ’car) *! false* 
(special-operator-p ’one) *! false* 
```
**Exceptional Situations:** 



Should signal <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> if its argument is not a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. 



**Notes:** 



Historically, this function was called special-form-p. The name was finally declared a misnomer and changed, since it returned true for *special operators*, not *special forms*. 







 



 



<ClLinks  term={"constantp"}><b>constantp</b></ClLinks> 




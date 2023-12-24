**symbol-name** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"symbol-name"}><b>symbol-name</b></ClLinks> *symbol → name* 



**Arguments and Values:** 



<ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>—a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. 



<ClLinks styled={true} term={"name"}><i>name</i></ClLinks>—a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>. 



**Description:** 



<ClLinks styled={true} term={"symbol-name"}><b>symbol-name</b></ClLinks> returns the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> of <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. The consequences are undefined if <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> is ever modified. 



**Examples:**
```lisp

(symbol-name ’temp) → "TEMP" 
(symbol-name :start) → "START" 
(symbol-name (gensym)) → "G1234" ;for example 

```
**Exceptional Situations:** 



Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is not a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. 







 



 



<ClLinks styled={true} term={"symbol-package"}><b>symbol-package</b></ClLinks> 




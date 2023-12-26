**symbol-name** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"symbol-name"}><b>symbol-name</b></DictionaryLink> *symbol → name* 



**Arguments and Values:** 



<ClLinks  term={"symbol"}><i>symbol</i></ClLinks>—a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. 



<ClLinks  term={"name"}><i>name</i></ClLinks>—a <ClLinks  term={"string"}><i>string</i></ClLinks>. 



**Description:** 



<DictionaryLink  term={"symbol-name"}><b>symbol-name</b></DictionaryLink> returns the <ClLinks  term={"name"}><i>name</i></ClLinks> of <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. The consequences are undefined if <ClLinks  term={"name"}><i>name</i></ClLinks> is ever modified. 



**Examples:**
```lisp
(symbol-name ’temp) → "TEMP" 
(symbol-name :start) → "START" 
(symbol-name (gensym)) → "G1234" ;for example 
```
**Exceptional Situations:** 



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is not a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. 







 



 



<DictionaryLink  term={"symbol-package"}><b>symbol-package</b></DictionaryLink> 




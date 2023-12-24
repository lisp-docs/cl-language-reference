**char-int** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"char-int"}><b>char-int</b></ClLinks> *character → integer* 



**Arguments and Values:** 



<ClLinks styled={true} term={"character"}><i>character</i></ClLinks>—a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> . 



*integer*—a non-negative *integer* . 



**Description:** 



Returns a non-negative *integer* encoding the <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> object. The manner in which the *integer* is computed is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. In contrast to <ClLinks styled={true} term={"sxhash"}><b>sxhash</b></ClLinks>, the result is not guaranteed to be independent of the particular *Lisp image*. 



If <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> has no *implementation-defined attributes*, the results of <ClLinks styled={true} term={"char-int"}><b>char-int</b></ClLinks> and <ClLinks styled={true} term={"char-code"}><b>char-code</b></ClLinks> are the same. 



(char= *c1 c2*) *≡* (= (char-int *c1*) (char-int *c2*)) 



for characters *c1* and *c2*. 



**Examples:**
```lisp

(char-int #\A) → 65 ; implementation A 
(char-int #\A) → 577 ; implementation B 
(char-int #\A) → 262145 ; implementation C 

```
**See Also:** 



<ClLinks styled={true} term={"char-code"}><b>char-code</b></ClLinks> 




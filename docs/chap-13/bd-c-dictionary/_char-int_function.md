**char-int** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"char-int"}><b>char-int</b></DictionaryLink> *character → integer* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> . 



*integer*—a non-negative *integer* . 



**Description:** 



Returns a non-negative *integer* encoding the <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> object. The manner in which the *integer* is computed is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. In contrast to <DictionaryLink styled={true} term={"sxhash"}><b>sxhash</b></DictionaryLink>, the result is not guaranteed to be independent of the particular *Lisp image*. 



If <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> has no *implementation-defined attributes*, the results of <DictionaryLink styled={true} term={"char-int"}><b>char-int</b></DictionaryLink> and <DictionaryLink styled={true} term={"char-code"}><b>char-code</b></DictionaryLink> are the same. 



(char= *c1 c2*) *≡* (= (char-int *c1*) (char-int *c2*)) 



for characters *c1* and *c2*. 



**Examples:**
```lisp

(char-int #\A) *→* 65 ; implementation A 
(char-int #\A) *→* 577 ; implementation B 
(char-int #\A) *→* 262145 ; implementation C 

```
**See Also:** 



<DictionaryLink styled={true} term={"char-code"}><b>char-code</b></DictionaryLink> 




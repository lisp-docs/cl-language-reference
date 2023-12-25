**alphanumericp** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"alphanumericp"}><b>alphanumericp</b></DictionaryLink> *character → generalized-boolean* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> . 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> is an <GlossaryTerm styled={true} term={"alphabetic"}><i>alphabetic</i></GlossaryTerm><sub>1</sub> <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> or a *numeric character* ; otherwise, returns <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 



**Examples:**
```lisp

(alphanumericp #\Z) *→ true* 
(alphanumericp #\9) *→ true* 
(alphanumericp #\Newline) *→ false* 
(alphanumericp #\#) *→ false* 

```
**Affected By:** 



None. (In particular, the results of this predicate are independent of any special syntax which might have been enabled in the *current readtable*.) 



**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> is not a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> . 



**See Also:** 



<DictionaryLink styled={true} term={"alpha-char-p"}><b>alpha-char-p</b></DictionaryLink>, <DictionaryLink styled={true} term={"graphic-char-p"}><b>graphic-char-p</b></DictionaryLink>, <DictionaryLink styled={true} term={"digit-char-p"}><b>digit-char-p</b></DictionaryLink> 



**Notes:** 



Alphanumeric characters are graphic as defined by <DictionaryLink styled={true} term={"graphic-char-p"}><b>graphic-char-p</b></DictionaryLink>. The alphanumeric characters are a subset of the graphic characters. The standard characters A through Z, a through z, and 0 through 9 are alphanumeric characters. 



(alphanumericp x) 



*≡* (or (alpha-char-p x) (not (null (digit-char-p x)))) 







 



 




**upper-case-p, lower-case-p, both-case-p** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"upper-case-p"}><b>upper-case-p</b></DictionaryLink> *character → generalized-boolean* 



<DictionaryLink styled={true} term={"lower-case-p"}><b>lower-case-p</b></DictionaryLink> *character → generalized-boolean* 



<DictionaryLink styled={true} term={"both-case-p"}><b>both-case-p</b></DictionaryLink> *character → generalized-boolean* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> . 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



These functions test the case of a given <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm>. 



<DictionaryLink styled={true} term={"upper-case-p"}><b>upper-case-p</b></DictionaryLink> returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> is an *uppercase character* ; otherwise, returns <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. <DictionaryLink styled={true} term={"lower-case-p"}><b>lower-case-p</b></DictionaryLink> returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> is a *lowercase character* ; otherwise, returns <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. <DictionaryLink styled={true} term={"both-case-p"}><b>both-case-p</b></DictionaryLink> returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> with <GlossaryTerm styled={true} term={"case"}><i>case</i></GlossaryTerm>; otherwise, returns <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. **Examples:**
```lisp

(upper-case-p #\A) *→ true* 
(upper-case-p #\a) *→ false* 
(both-case-p #\a) *→ true* 
(both-case-p #\5) *→ false* 
(lower-case-p #\5) *→ false* 
(upper-case-p #\5) *→ false* 
;; This next example presupposes an implementation 
;; in which #\Bell is an implementation-defined character. 
(lower-case-p #\Bell) *→ false* 




```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> is not a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> . 



**See Also:** 



<DictionaryLink styled={true} term={"char-upcase"}><b>char-upcase</b></DictionaryLink>, <DictionaryLink styled={true} term={"char-downcase"}><b>char-downcase</b></DictionaryLink>, Section 13.1.4.3 (Characters With Case), Section 13.1.10 (Documentation of Implementation-Defined Scripts) 




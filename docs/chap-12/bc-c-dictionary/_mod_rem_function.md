**mod, rem** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"mod"}><b>mod</b></DictionaryLink> *number divisor → modulus* 



<DictionaryLink styled={true} term={"rem"}><b>rem</b></DictionaryLink> *number divisor → remainder* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm>—a *real*. 



*divisor*—a *real*. 



*modulus*, *remainder*—a *real*. 



**Description:** 



<DictionaryLink styled={true} term={"mod"}><b>mod</b></DictionaryLink> and <DictionaryLink styled={true} term={"rem"}><b>rem</b></DictionaryLink> are generalizations of the modulus and remainder functions respectively. 



<DictionaryLink styled={true} term={"mod"}><b>mod</b></DictionaryLink> performs the operation <DictionaryLink styled={true} term={"floor"}><b>floor</b></DictionaryLink> on <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> and *divisor* and returns the remainder of the <DictionaryLink styled={true} term={"floor"}><b>floor</b></DictionaryLink> operation. 



<DictionaryLink styled={true} term={"rem"}><b>rem</b></DictionaryLink> performs the operation <DictionaryLink styled={true} term={"truncate"}><b>truncate</b></DictionaryLink> on <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> and *divisor* and returns the remainder of the <DictionaryLink styled={true} term={"truncate"}><b>truncate</b></DictionaryLink> operation. 



<DictionaryLink styled={true} term={"mod"}><b>mod</b></DictionaryLink> and <DictionaryLink styled={true} term={"rem"}><b>rem</b></DictionaryLink> are the modulus and remainder functions when <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> and *divisor* are *integers*. **Examples:**
```lisp

(rem -1 5) *→* -1 
(mod -1 5) *→* 4 
(mod 13 4) *→* 1 
(rem 13 4) *→* 1 
(mod -13 4) *→* 3 
(rem -13 4) *→* -1 
(mod 13 -4) *→* -3 
(rem 13 -4) *→* 1 
(mod -13 -4) *→* -1 
(rem -13 -4) *→* -1 
(mod 13.4 1) *→* 0.4 
(rem 13.4 1) *→* 0.4 
(mod -13.4 1) *→* 0.6 
(rem -13.4 1) *→* -0.4 




```
**See Also:** 



<DictionaryLink styled={true} term={"floor"}><b>floor</b></DictionaryLink>, <DictionaryLink styled={true} term={"truncate"}><b>truncate</b></DictionaryLink> 



**Notes:** 



The result of <DictionaryLink styled={true} term={"mod"}><b>mod</b></DictionaryLink> is either zero or a *real* with the same sign as *divisor*. 




**or** <GlossaryTerm styled={true} term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"or"}><b>or</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>\{form\}</i></GlossaryTerm>\* *→ \{results\}*\* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



*results*—the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> or *primary value* (see below) resulting from the evaluation of the last <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> executed or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



**Description:** 



<DictionaryLink styled={true} term={"or"}><b>or</b></DictionaryLink> evaluates each <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>, one at a time, from left to right. The evaluation of all <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> terminates when a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> evaluates to <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> (*i.e.*, something other than <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>). 



Data and Control 











If the <GlossaryTerm styled={true} term={"evaluation"}><i>evaluation</i></GlossaryTerm> of any <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> other than the last returns a *primary value* that is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, <DictionaryLink styled={true} term={"or"}><b>or</b></DictionaryLink> immediately returns that <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> (but no additional <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm>) without evaluating the remaining <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>. If every <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> but the last returns <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm> as its *primary value*, <DictionaryLink styled={true} term={"or"}><b>or</b></DictionaryLink> returns all <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> returned by the last <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. If no <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> are supplied, <DictionaryLink styled={true} term={"or"}><b>or</b></DictionaryLink> returns <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



**Examples:**
```lisp

(or) *→* NIL 
(setq temp0 nil temp1 10 temp2 20 temp3 30) *→* 30 
(or temp0 temp1 (setq temp2 37)) *→* 10 
temp2 *→* 20 
(or (incf temp1) (incf temp2) (incf temp3)) *→* 11 
temp1 *→* 11 
temp2 *→* 20 
temp3 *→* 30 
(or (values) temp1) *→* 11 
(or (values temp1 temp2) temp3) *→* 11 
(or temp0 (values temp1 temp2)) *→* 11, 20 
(or (values temp0 temp1) (values temp2 temp3)) *→* 20, 30 

```
**See Also:** 



<DictionaryLink styled={true} term={"and"}><b>and</b></DictionaryLink>, <DictionaryLink styled={true} term={"some"}><b>some</b></DictionaryLink>, <DictionaryLink styled={true} term={"unless"}><b>unless</b></DictionaryLink> 




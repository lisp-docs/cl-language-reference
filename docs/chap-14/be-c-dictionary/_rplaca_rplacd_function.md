**rplaca, rplacd** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"rplaca"}><b>rplaca</b></DictionaryLink> *cons object → cons* 



<DictionaryLink styled={true} term={"rplacd"}><b>rplacd</b></DictionaryLink> *cons object → cons* 



**Pronunciation:** 



<DictionaryLink styled={true} term={"rplaca"}><b>rplaca</b></DictionaryLink>: [ **r—e plak***  ] or [ **r***  **plak***  ] 



<DictionaryLink styled={true} term={"rplacd"}><b>rplacd</b></DictionaryLink>: [ **r—e plakd***  ] or [ **r***  **plakd***  ] or [ **r—e plakd—e** ] or [ **r***  **plakd—e** ] 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink styled={true} term={"rplaca"}><b>rplaca</b></DictionaryLink> replaces the <GlossaryTerm styled={true} term={"car"}><i>car</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm> with <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



<DictionaryLink styled={true} term={"rplacd"}><b>rplacd</b></DictionaryLink> replaces the <GlossaryTerm styled={true} term={"cdr"}><i>cdr</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm> with <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



**Examples:**
```lisp

(defparameter \*some-list\* (list\* ’one ’two ’three ’four)) *→* \*some-list\* 
\*some-list\* *→* (ONE TWO THREE . FOUR) 
(rplaca \*some-list\* ’uno) *→* (UNO TWO THREE . FOUR) 
\*some-list\* *→* (UNO TWO THREE . FOUR) 
(rplacd (last \*some-list\*) (list ’IV)) *→* (THREE IV) 
\*some-list\* *→* (UNO TWO THREE IV) 

```
**Side Effects:** 



The <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm> is modified. 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm> is not a <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm>. 







 



 



**car, cdr, caar, cadr, cdar, cddr, caaar, caadr, cadar,** *. . .* 




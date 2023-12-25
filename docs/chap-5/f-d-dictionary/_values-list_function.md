**values-list** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"values-list"}><b>values-list</b></DictionaryLink> *list ! \{element\}*\* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm>—the <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>. 



**Description:** 



Returns the <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> as *multiple values*<sub>2</sub>. 



**Examples:**
```lisp

(values-list nil) *! hno valuesi* 
(values-list ’(1)) *!* 1 
(values-list ’(1 2)) *!* 1, 2 
(values-list ’(1 2 3)) *!* 1, 2, 3 

```
**Exceptional Situations:** 



Should signal <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if its argument is not a *proper list*. 



**See Also:** 



<DictionaryLink styled={true} term={"multiple-value-bind"}><b>multiple-value-bind</b></DictionaryLink>, <DictionaryLink styled={true} term={"multiple-value-list"}><b>multiple-value-list</b></DictionaryLink>, <DictionaryLink styled={true} term={"multiple-values-limit"}><b>multiple-values-limit</b></DictionaryLink>, <DictionaryLink styled={true} term={"values"}><b>values</b></DictionaryLink> 



**Notes:** 



(values-list <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>) *⌘* (apply #’values <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>) 



(equal *x* (multiple-value-list (values-list *x*))) returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> for all *lists x*. 



Data and Control 



 



 




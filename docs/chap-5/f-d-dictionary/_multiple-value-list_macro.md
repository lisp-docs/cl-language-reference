**multiple-value-list** <ClLinks  term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"multiple-value-list"}><b>multiple-value-list</b></DictionaryLink> *form ! list* 



**Arguments and Values:** 



<ClLinks  term={"form"}><i>form</i></ClLinks>—a <ClLinks  term={"form"}><i>form</i></ClLinks>; evaluated as described below. 



<ClLinks  term={"list"}><i>list</i></ClLinks>—a <ClLinks  term={"list"}><i>list</i></ClLinks> of the <ClLinks  term={"value"}><i>values</i></ClLinks> returned by <ClLinks  term={"form"}><i>form</i></ClLinks>. 



Data and Control 



 



 



**Description:** 



<DictionaryLink  term={"multiple-value-list"}><b>multiple-value-list</b></DictionaryLink> evaluates <ClLinks  term={"form"}><i>form</i></ClLinks> and creates a <ClLinks  term={"list"}><i>list</i></ClLinks> of the <GlossaryTerm styled={true} term={"multiple values"}><i>multiple values</i></GlossaryTerm><sub>2</sub> it returns. 

**Examples:**
```lisp
(multiple-value-list (floor -3 4)) *!* (-1 1) 
```
**See Also:** 



<DictionaryLink  term={"values-list"}><b>values-list</b></DictionaryLink>, <DictionaryLink  term={"multiple-value-call"}><b>multiple-value-call</b></DictionaryLink> 



**Notes:** 



<DictionaryLink  term={"multiple-value-list"}><b>multiple-value-list</b></DictionaryLink> and <DictionaryLink  term={"values-list"}><b>values-list</b></DictionaryLink> are inverses of each other. 



(multiple-value-list form) *⌘* (multiple-value-call #’list form) 




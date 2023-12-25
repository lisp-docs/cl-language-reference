**method-qualifiers** *Standard Generic Function* 



**Syntax:** 



<DictionaryLink styled={true} term={"method-qualifiers"}><b>method-qualifiers</b></DictionaryLink> *method → qualifiers* 







 



 



**Method Signatures:** 



<DictionaryLink styled={true} term={"method-qualifiers"}><b>method-qualifiers</b></DictionaryLink> (<GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> <DictionaryLink styled={true} term={"standard-method"}><b>standard-method</b></DictionaryLink>) 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"qualifier"}><i>qualifiers</i></GlossaryTerm>—a *proper list*. 



**Description:** 



Returns a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"qualifier"}><i>qualifiers</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm>. 



**Examples:**
```lisp

(defmethod some-gf :before ((a integer)) a) 
*→* #<STANDARD-METHOD SOME-GF (:BEFORE) (INTEGER) 42736540> 
(method-qualifiers \*) *→* (:BEFORE) 

```
**See Also:** 



<DictionaryLink styled={true} term={"define-method-combination"}><b>define-method-combination</b></DictionaryLink> 




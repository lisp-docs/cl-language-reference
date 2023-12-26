**method-qualifiers** <GlossaryTerm styled={true} term={"standard generic function"}><i>Standard Generic Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"method-qualifiers"}><b>method-qualifiers</b></DictionaryLink> *method → qualifiers* 







 



 



**Method Signatures:** 



<DictionaryLink  term={"method-qualifiers"}><b>method-qualifiers</b></DictionaryLink> (<GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> <DictionaryLink  term={"standard-method"}><b>standard-method</b></DictionaryLink>) 



**Arguments and Values:** 



<GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm>—a <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm>. 



<GlossaryTerm  term={"qualifier"}><i>qualifiers</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"proper list"}><i>proper list</i></GlossaryTerm>. 



**Description:** 



Returns a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> of the <GlossaryTerm  term={"qualifier"}><i>qualifiers</i></GlossaryTerm> of the <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm>. 



**Examples:**
```lisp
(defmethod some-gf :before ((a integer)) a) 
→ #<STANDARD-METHOD SOME-GF (:BEFORE) (INTEGER) 42736540> 
(method-qualifiers \*) → (:BEFORE) 
```
**See Also:** 



<DictionaryLink  term={"define-method-combination"}><b>define-method-combination</b></DictionaryLink> 




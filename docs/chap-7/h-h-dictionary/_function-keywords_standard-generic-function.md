**function-keywords** *Standard Generic Function* 



**Syntax:** 



<DictionaryLink styled={true} term={"function-keywords"}><b>function-keywords</b></DictionaryLink> *method → keys, allow-other-keys-p* 



**Method Signatures:** 



<DictionaryLink styled={true} term={"function-keywords"}><b>function-keywords</b></DictionaryLink> (<GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> <DictionaryLink styled={true} term={"standard-method"}><b>standard-method</b></DictionaryLink>) 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"key"}><i>keys</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>. 



*allow-other-keys-p*—a *generalized boolean*. 



**Description:** 



Returns the keyword parameter specifiers for a <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm>. 



Two values are returned: a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of the explicitly named keywords and a *generalized boolean* that states whether **&amp;allow-other-keys** had been specified in the <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> definition. 



**Examples:**
```lisp

(defmethod gf1 ((a integer) &optional (b 2) 
		&key (c 3) ((:dee d) 4) e ((eff f))) 
    (list a b c d e f)) 
*→* #<STANDARD-METHOD GF1 (INTEGER) 36324653> 
(find-method #’gf1 ’() (list (find-class ’integer))) 
*→* #<STANDARD-METHOD GF1 (INTEGER) 36324653> 
(function-keywords \*) 
*→* (:C :DEE :E EFF), *false* 
(defmethod gf2 ((a integer)) 
    (list a b c d e f)) 
*→* #<STANDARD-METHOD GF2 (INTEGER) 42701775> 
(function-keywords (find-method #’gf1 ’() (list (find-class ’integer)))) 
*→* (), *false* 
(defmethod gf3 ((a integer) &key b c d &allow-other-keys) 
    (list a b c d e f)) 
(function-keywords \*) 
*→* (:B :C :D), *true* 

```
**Affected By:** 



<DictionaryLink styled={true} term={"defmethod"}><b>defmethod</b></DictionaryLink> 







 



 



**See Also:** 



<DictionaryLink styled={true} term={"defmethod"}><b>defmethod</b></DictionaryLink> 




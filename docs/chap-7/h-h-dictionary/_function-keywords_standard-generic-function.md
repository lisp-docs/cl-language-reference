**function-keywords** <GlossaryTerm styled={true} term={"standard generic function"}><i>Standard Generic Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"function-keywords"}><b>function-keywords</b></DictionaryLink> *method → keys, allow-other-keys-p* 



**Method Signatures:** 



<DictionaryLink  term={"function-keywords"}><b>function-keywords</b></DictionaryLink> (<ClLinks  term={"method"}><i>method</i></ClLinks> <DictionaryLink  term={"standard-method"}><b>standard-method</b></DictionaryLink>) 



**Arguments and Values:** 



<ClLinks  term={"method"}><i>method</i></ClLinks>—a <ClLinks  term={"method"}><i>method</i></ClLinks>. 



<ClLinks  term={"key"}><i>keys</i></ClLinks>—a <ClLinks  term={"list"}><i>list</i></ClLinks>. 



*allow-other-keys-p*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



Returns the keyword parameter specifiers for a <ClLinks  term={"method"}><i>method</i></ClLinks>. 



Two values are returned: a <ClLinks  term={"list"}><i>list</i></ClLinks> of the explicitly named keywords and a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm> that states whether **&amp;allow-other-keys** had been specified in the <ClLinks  term={"method"}><i>method</i></ClLinks> definition. 



**Examples:**
```lisp
(defmethod gf1 ((a integer) &optional (b 2) 
		&key (c 3) ((:dee d) 4) e ((eff f))) 
  (list a b c d e f)) 
→ #<STANDARD-METHOD GF1 (INTEGER) 36324653> 
(find-method #’gf1 ’() (list (find-class ’integer))) 
→ #<STANDARD-METHOD GF1 (INTEGER) 36324653> 
(function-keywords \*) 
→ (:C :DEE :E EFF), *false* 
(defmethod gf2 ((a integer)) 
  (list a b c d e f)) 
→ #<STANDARD-METHOD GF2 (INTEGER) 42701775> 
(function-keywords (find-method #’gf1 ’() (list (find-class ’integer)))) 
→ (), *false* 
(defmethod gf3 ((a integer) &key b c d &allow-other-keys) 
  (list a b c d e f)) 
(function-keywords \*) 
→ (:B :C :D), *true* 
```
**Affected By:** 



<DictionaryLink  term={"defmethod"}><b>defmethod</b></DictionaryLink> 







 



 



**See Also:** 



<DictionaryLink  term={"defmethod"}><b>defmethod</b></DictionaryLink> 




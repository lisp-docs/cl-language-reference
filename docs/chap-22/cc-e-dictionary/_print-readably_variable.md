*∗<DictionaryLink styled={true} term={"print-readably"}><b>*print-readably*</b></DictionaryLink>∗ Variable* 



**Value Type:** 



a *generalized boolean*. 







 



 



*∗<DictionaryLink styled={true} term={"print-readably"}><b>*print-readably*</b></DictionaryLink>∗* 



**Initial Value:** 



<GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 



**Description:** 



If <DictionaryLink styled={true} term={"print-readably"}><b>\*print-readably\*</b></DictionaryLink> is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, some special rules for printing <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> go into effect. Specifically, printing any *object O*<sub>1</sub> produces a printed representation that, when seen by the *Lisp reader* while the *standard readtable* is in effect, will produce an *object O*<sub>2</sub> that is <GlossaryTerm styled={true} term={"similar"}><i>similar</i></GlossaryTerm> to *O*<sub>1</sub>. The printed representation produced might or might not be the same as the printed representation produced when <DictionaryLink styled={true} term={"print-readably"}><b>\*print-readably\*</b></DictionaryLink> is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. If printing an *object readably* is not possible, an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"print-not-readable"}><b>print-not-readable</b></DictionaryLink> is signaled rather than using a syntax (*e.g.*, the “#&lt;” syntax) that would not be readable by the same <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm>. If the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of some other *printer control variable* is such that these requirements would be violated, the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of that other <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm> is ignored. 



Specifically, if <DictionaryLink styled={true} term={"print-readably"}><b>\*print-readably\*</b></DictionaryLink> is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, printing proceeds as if <DictionaryLink styled={true} term={"print-escape"}><b>\*print-escape\*</b></DictionaryLink>, <DictionaryLink styled={true} term={"print-array"}><b>\*print-array\*</b></DictionaryLink>, and <DictionaryLink styled={true} term={"print-gensym"}><b>\*print-gensym\*</b></DictionaryLink> were also <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, and as if <DictionaryLink styled={true} term={"print-length"}><b>\*print-length\*</b></DictionaryLink>, **\*print-level\***, and <DictionaryLink styled={true} term={"print-lines"}><b>\*print-lines\*</b></DictionaryLink> were <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 



If <DictionaryLink styled={true} term={"print-readably"}><b>\*print-readably\*</b></DictionaryLink> is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>, the normal rules for printing and the normal interpretations of other *printer control variables* are in effect. 



Individual <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> for <DictionaryLink styled={true} term={"print-object"}><b>print-object</b></DictionaryLink>, including user-defined <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm>, are responsible for implementing these requirements. 



If **\*read-eval\*** is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm> and <DictionaryLink styled={true} term={"print-readably"}><b>\*print-readably\*</b></DictionaryLink> is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, any such method that would output a reference to the “#.” *reader macro* will either output something else or will signal an error (as described above). 



**Examples:**
```lisp

(let ((x (list "a" ’\a (gensym) ’((a (b (c))) d e f g))) 
      (\*print-escape\* nil) 
      (\*print-gensym\* nil) 
      (\*print-level\* 3) 
      (\*print-length\* 3)) 
  (write x) 
  (let ((\*print-readably\* t)) 
    (terpri) 
    (write x) 
    :done)) 
▷ (a a G4581 ((A #) D E ...)) 
▷ ("a" |a| #:G4581 ((A (B (C))) D E F G)) 
*→* :DONE 
;; This is setup code is shared between the examples 
;; of three hypothetical implementations which follow. 
(setq table (make-hash-table)) *→* #<HASH-TABLE EQL 0/120 32005763> 



(setf (gethash table 1) ’one) *→* ONE 
(setf (gethash table 2) ’two) *→* TWO 
;; Implementation A 
(let ((\*print-readably\* t)) (print table)) 
Error: Can’t print #<HASH-TABLE EQL 0/120 32005763> readably. 
;; Implementation B 
;; No standardized #S notation for hash tables is defined, 
;; but there might be an implementation-defined notation. 
(let ((\*print-readably\* t)) (print table)) 
▷ #S(HASH-TABLE :TEST EQL :SIZE 120 :CONTENTS (1 ONE 2 TWO)) 
*→* #<HASH-TABLE EQL 0/120 32005763> 
;; Implementation C 
;; Note that #. notation can only be used if \*READ-EVAL\* is true. 
;; If \*READ-EVAL\* were false, this same implementation might have to 
;; signal an error unless it had yet another printing strategy to fall 
;; back on. 
(let ((\*print-readably\* t)) (print table)) 
▷ #.(LET ((HASH-TABLE (MAKE-HASH-TABLE))) 
      ▷ (SETF (GETHASH 1 HASH-TABLE) ONE) 
      ▷ (SETF (GETHASH 2 HASH-TABLE) TWO) 
      ▷ HASH-TABLE) 
*→* #<HASH-TABLE EQL 0/120 32005763> 

```
**See Also:** 



<DictionaryLink styled={true} term={"write"}><b>write</b></DictionaryLink>, <DictionaryLink styled={true} term={"print-unreadable-object"}><b>print-unreadable-object</b></DictionaryLink> 



**Notes:** 



The rules for “<GlossaryTerm styled={true} term={"similarity"}><i>similarity</i></GlossaryTerm>” imply that #A or #( syntax cannot be used for <GlossaryTerm styled={true} term={"array"}><i>arrays</i></GlossaryTerm> of *element type* other than <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink>. An implementation will have to use another syntax or signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"print-not-readable"}><b>print-not-readable</b></DictionaryLink>. 




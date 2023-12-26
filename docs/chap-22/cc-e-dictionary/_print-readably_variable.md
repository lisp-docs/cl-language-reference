*∗<ClLinks styled={true} term={"print-readably"}><b>*print-readably*</b></ClLinks>∗ Variable* 



**Value Type:** 



a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 







 



 



*∗<ClLinks styled={true} term={"print-readably"}><b>*print-readably*</b></ClLinks>∗* 



**Initial Value:** 



<ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 



**Description:** 



If <ClLinks styled={true} term={"print-readably"}><b>\*print-readably\*</b></ClLinks> is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, some special rules for printing <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> go into effect. Specifically, printing any *object O*<sub>1</sub> produces a printed representation that, when seen by the *Lisp reader* while the <GlossaryTerm styled={true} term={"standard readtable"}><i>standard readtable</i></GlossaryTerm> is in effect, will produce an *object O*<sub>2</sub> that is <ClLinks styled={true} term={"similar"}><i>similar</i></ClLinks> to *O*<sub>1</sub>. The printed representation produced might or might not be the same as the printed representation produced when <ClLinks styled={true} term={"print-readably"}><b>\*print-readably\*</b></ClLinks> is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. If printing an *object readably* is not possible, an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"print-not-readable"}><b>print-not-readable</b></ClLinks> is signaled rather than using a syntax (*e.g.*, the “#&lt;” syntax) that would not be readable by the same <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks>. If the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of some other <GlossaryTerm styled={true} term={"printer control variable"}><i>printer control variable</i></GlossaryTerm> is such that these requirements would be violated, the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of that other <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks> is ignored. 



Specifically, if <ClLinks styled={true} term={"print-readably"}><b>\*print-readably\*</b></ClLinks> is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, printing proceeds as if <ClLinks styled={true} term={"print-escape"}><b>\*print-escape\*</b></ClLinks>, <ClLinks styled={true} term={"print-array"}><b>\*print-array\*</b></ClLinks>, and <ClLinks styled={true} term={"print-gensym"}><b>\*print-gensym\*</b></ClLinks> were also <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, and as if <ClLinks styled={true} term={"print-length"}><b>\*print-length\*</b></ClLinks>, **\*print-level\***, and <ClLinks styled={true} term={"print-lines"}><b>\*print-lines\*</b></ClLinks> were <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 



If <ClLinks styled={true} term={"print-readably"}><b>\*print-readably\*</b></ClLinks> is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>, the normal rules for printing and the normal interpretations of other <GlossaryTerm styled={true} term={"printer control variable"}><i>printer control variables</i></GlossaryTerm> are in effect. 



Individual <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> for <ClLinks styled={true} term={"print-object"}><b>print-object</b></ClLinks>, including user-defined <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks>, are responsible for implementing these requirements. 



If **\*read-eval\*** is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks> and <ClLinks styled={true} term={"print-readably"}><b>\*print-readably\*</b></ClLinks> is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, any such method that would output a reference to the “#.” <GlossaryTerm styled={true} term={"reader macro"}><i>reader macro</i></GlossaryTerm> will either output something else or will signal an error (as described above). 



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
→ :DONE 
;; This is setup code is shared between the examples 
;; of three hypothetical implementations which follow. 
(setq table (make-hash-table)) → #<HASH-TABLE EQL 0/120 32005763> 

(setf (gethash table 1) ’one) → ONE 
(setf (gethash table 2) ’two) → TWO 
;; Implementation A 
(let ((\*print-readably\* t)) (print table)) 
Error: Can’t print #<HASH-TABLE EQL 0/120 32005763> readably. 
;; Implementation B 
;; No standardized #S notation for hash tables is defined, 
;; but there might be an implementation-defined notation. 
(let ((\*print-readably\* t)) (print table)) 
▷ #S(HASH-TABLE :TEST EQL :SIZE 120 :CONTENTS (1 ONE 2 TWO)) 
→ #<HASH-TABLE EQL 0/120 32005763> 
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
→ #<HASH-TABLE EQL 0/120 32005763> 
```
**See Also:** 



<ClLinks styled={true} term={"write"}><b>write</b></ClLinks>, <ClLinks styled={true} term={"print-unreadable-object"}><b>print-unreadable-object</b></ClLinks> 



**Notes:** 



The rules for “<ClLinks styled={true} term={"similarity"}><i>similarity</i></ClLinks>” imply that #A or #( syntax cannot be used for <ClLinks styled={true} term={"array"}><i>arrays</i></ClLinks> of <GlossaryTerm styled={true} term={"element type"}><i>element type</i></GlossaryTerm> other than <ClLinks styled={true} term={"t"}><b>t</b></ClLinks>. An implementation will have to use another syntax or signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"print-not-readable"}><b>print-not-readable</b></ClLinks>. 




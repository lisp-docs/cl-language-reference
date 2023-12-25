**+, ++, +++** <GlossaryTerm styled={true} term={"variable"}><i>Variable</i></GlossaryTerm> 



**Value Type:** 



an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



**Initial Value:** 



<GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. 



**Description:** 



The <GlossaryTerm styled={true} term={"variable"}><i>variables</i></GlossaryTerm> <DictionaryLink styled={true} term={"+"}><b>+</b></DictionaryLink>, <DictionaryLink styled={true} term={"++"}><b>++</b></DictionaryLink>, and <DictionaryLink styled={true} term={"+++"}><b>+++</b></DictionaryLink> are maintained by the *Lisp read-eval-print loop* to save <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> that were recently *evaluated*. 



The <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"+"}><b>+</b></DictionaryLink> is the last <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> that was *evaluated*, the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"++"}><b>++</b></DictionaryLink> is the previous value of <DictionaryLink styled={true} term={"+"}><b>+</b></DictionaryLink>, and the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"+++"}><b>+++</b></DictionaryLink> is the previous value of <DictionaryLink styled={true} term={"++"}><b>++</b></DictionaryLink>. 



**Examples:**
```lisp
 
(+ 0 1) *→* 1 
(- 4 2) *→* 2 
(/ 9 3) *→* 3 
(list + ++ +++) *→* ((/ 9 3) (- 4 2) (+ 0 1)) 
(setq a 1 b 2 c 3 d (list a b c)) *→* (1 2 3) 
(setq a 4 b 5 c 6 d (list a b c)) *→* (4 5 6) 
(list a b c) *→* (4 5 6) 
(eval +++) *→* (1 2 3) 
#.‘(,@++ d) *→* (1 2 3 (1 2 3)) 

 
 

```
**Affected By:** 



*Lisp read-eval-print loop*. 



**See Also:** 



<DictionaryLink styled={true} term={"-"}><b>-</b></DictionaryLink> (<GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm>), **\*** (<GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm>), <DictionaryLink styled={true} term={"/"}><b>/</b></DictionaryLink> (<GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm>), Section 25.1.1 (Top level loop) 



*∗***,** *∗∗***,** *∗∗∗ Variable* 



**Value Type:** 



an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



**Initial Value:** 



<GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. 



**Description:** 



The <GlossaryTerm styled={true} term={"variable"}><i>variables</i></GlossaryTerm> **\***, **\*\***, and **\*\*\*** are maintained by the *Lisp read-eval-print loop* to save the values of results that are printed each time through the loop. 



The <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of **\*** is the most recent *primary value* that was printed, the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of **\*\*** is the previous value of **\***, and the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of **\*\*\*** is the previous value of **\*\***. 



If several values are produced, **\*** contains the first value only; **\*** contains <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> if zero values are produced. 



The <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> of **\***, **\*\***, and **\*\*\*** are updated immediately prior to printing the *return value* of a top-level <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> by the *Lisp read-eval-print loop*. If the <GlossaryTerm styled={true} term={"evaluation"}><i>evaluation</i></GlossaryTerm> of such a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> is aborted prior to its normal return, the values of **\***, **\*\***, and **\*\*\*** are not updated. 



**Examples:**
```lisp

(values ’a1 ’a2) *→* A1, A2 
’b *→* B 
(values ’c1 ’c2 ’c3) *→* C1, C2, C3 
(list \* \*\* \*\*\*) *→* (C1 B A1) 
(defun cube-root (x) (expt x 1/3)) *→* CUBE-ROOT 
(compile \*) *→* CUBE-ROOT 
(setq a (cube-root 27.0)) *→* 3.0 
(\* \* 9.0) *→* 27.0 

```
**Affected By:** 



*Lisp read-eval-print loop*. 







 



 



**See Also:** 



<DictionaryLink styled={true} term={"-"}><b>-</b></DictionaryLink> (<GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm>), <DictionaryLink styled={true} term={"+"}><b>+</b></DictionaryLink> (<GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm>), <DictionaryLink styled={true} term={"/"}><b>/</b></DictionaryLink> (<GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm>), Section 25.1.1 (Top level loop) 



**Notes:** 



\* *≡* (car /) 



\*\* *≡* (car //) 



\*\*\* *≡* (car ///) 




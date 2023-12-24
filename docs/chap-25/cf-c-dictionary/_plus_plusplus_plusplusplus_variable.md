**+, ++, +++** <ClLinks styled={true} term={"variable"}><i>Variable</i></ClLinks> 



**Value Type:** 



an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



**Initial Value:** 



<ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. 



**Description:** 



The <ClLinks styled={true} term={"variable"}><i>variables</i></ClLinks> <ClLinks styled={true} term={"+"}><b>+</b></ClLinks>, <ClLinks styled={true} term={"++"}><b>++</b></ClLinks>, and <ClLinks styled={true} term={"+++"}><b>+++</b></ClLinks> are maintained by the *Lisp read-eval-print loop* to save <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> that were recently *evaluated*. 



The <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"+"}><b>+</b></ClLinks> is the last <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> that was *evaluated*, the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"++"}><b>++</b></ClLinks> is the previous value of <ClLinks styled={true} term={"+"}><b>+</b></ClLinks>, and the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"+++"}><b>+++</b></ClLinks> is the previous value of <ClLinks styled={true} term={"++"}><b>++</b></ClLinks>. 



**Examples:**
```lisp
 
(+ 0 1) → 1 
(- 4 2) → 2 
(/ 9 3) → 3 
(list + ++ +++) → ((/ 9 3) (- 4 2) (+ 0 1)) 
(setq a 1 b 2 c 3 d (list a b c)) → (1 2 3) 
(setq a 4 b 5 c 6 d (list a b c)) → (4 5 6) 
(list a b c) → (4 5 6) 
(eval +++) → (1 2 3) 
#.‘(,@++ d) → (1 2 3 (1 2 3)) 

 
 

```
**Affected By:** 



*Lisp read-eval-print loop*. 



**See Also:** 



<ClLinks styled={true} term={"-"}><b>-</b></ClLinks> (<ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks>), **\*** (<ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks>), <ClLinks styled={true} term={"/"}><b>/</b></ClLinks> (<ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks>), Section 25.1.1 (Top level loop) 



*∗***,** *∗∗***,** *∗∗∗ Variable* 



**Value Type:** 



an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



**Initial Value:** 



<ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. 



**Description:** 



The <ClLinks styled={true} term={"variable"}><i>variables</i></ClLinks> **\***, **\*\***, and **\*\*\*** are maintained by the *Lisp read-eval-print loop* to save the values of results that are printed each time through the loop. 



The <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of **\*** is the most recent *primary value* that was printed, the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of **\*\*** is the previous value of **\***, and the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of **\*\*\*** is the previous value of **\*\***. 



If several values are produced, **\*** contains the first value only; **\*** contains <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> if zero values are produced. 



The <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> of **\***, **\*\***, and **\*\*\*** are updated immediately prior to printing the *return value* of a top-level <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> by the *Lisp read-eval-print loop*. If the <ClLinks styled={true} term={"evaluation"}><i>evaluation</i></ClLinks> of such a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> is aborted prior to its normal return, the values of **\***, **\*\***, and **\*\*\*** are not updated. 



**Examples:**
```lisp

(values ’a1 ’a2) → A1, A2 
’b → B 
(values ’c1 ’c2 ’c3) → C1, C2, C3 
(list \* \*\* \*\*\*) → (C1 B A1) 
(defun cube-root (x) (expt x 1/3)) → CUBE-ROOT 
(compile \*) → CUBE-ROOT 
(setq a (cube-root 27.0)) → 3.0 
(\* \* 9.0) → 27.0 

```
**Affected By:** 



*Lisp read-eval-print loop*. 







 



 



**See Also:** 



<ClLinks styled={true} term={"-"}><b>-</b></ClLinks> (<ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks>), <ClLinks styled={true} term={"+"}><b>+</b></ClLinks> (<ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks>), <ClLinks styled={true} term={"/"}><b>/</b></ClLinks> (<ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks>), Section 25.1.1 (Top level loop) 



**Notes:** 



\* *≡* (car /) 



\*\* *≡* (car //) 



\*\*\* *≡* (car ///) 




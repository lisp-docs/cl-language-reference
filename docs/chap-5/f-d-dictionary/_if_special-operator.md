**if** <GlossaryTerm styled={true} term={"special operator"}><i>Special Operator</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"if"}><b>if</b></DictionaryLink> *test-form then-form* [*else-form*] → \{result\}\* 



**Arguments and Values:** 



*Test-form*—a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. 



*Then-form*—a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. 



*Else-form*—a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. The default is <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



*results*—if the *test-form yielded true*, the <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> returned by the *then-form*; otherwise, the <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> returned by the *else-form*. 















**Description:** 



<DictionaryLink  term={"if"}><b>if</b></DictionaryLink> allows the execution of a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> to be dependent on a single *test-form*. 



First *test-form* is evaluated. If the result is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm>, then *then-form* is selected; otherwise *else-form* is selected. Whichever form is selected is then evaluated. 



**Examples:**
```lisp
(if t 1) → 1 
(if nil 1 2) → 2 
(defun test () 
  (dolist (truth-value ’(t nil 1 (a b c))) 
    (if truth-value (print ’true) (print ’false)) 
    (prin1 truth-value))) → TEST 
(test) 
▷ TRUE T 
▷ FALSE NIL 
▷ TRUE 1 
▷ TRUE (A B C) 
→ NIL 
```
**See Also:** 



<DictionaryLink  term={"cond"}><b>cond</b></DictionaryLink>, <DictionaryLink  term={"unless"}><b>unless</b></DictionaryLink>, <DictionaryLink  term={"when"}><b>when</b></DictionaryLink> 



**Notes:** 



(if *test-form then-form else-form*) 



*≡* (cond (*test-form then-form*) (t *else-form*)) 




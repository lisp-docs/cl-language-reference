**cond** <GlossaryTerm styled={true} term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"cond"}><b>cond</b></DictionaryLink> *\{↓clause\}*\* *→ \{result\}*\* 



*clause::*=(*test-form \{form\}*\*) 



**Arguments and Values:** 



*test-form*—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>—an *implicit progn*. 



*results*—the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> in the first *clause* whose *test-form yields true*, or the *primary value* of the *test-form* if there are no <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> in that *clause*, or else <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> if no *test-form yields true*. 



**Description:** 



<DictionaryLink styled={true} term={"cond"}><b>cond</b></DictionaryLink> allows the execution of <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> to be dependent on *test-form*. 



Data and Control 











*Test-forms* are evaluated one at a time in the order in which they are given in the argument list until a *test-form* is found that evaluates to <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>. 



If there are no <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> in that clause, the *primary value* of the *test-form* is returned by the <DictionaryLink styled={true} term={"cond"}><b>cond</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. Otherwise, the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> associated with this *test-form* are evaluated in order, left to right, as an *implicit progn*, and the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> returned by the last <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> are returned by the <DictionaryLink styled={true} term={"cond"}><b>cond</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



Once one *test-form* has *yielded true*, no additional *test-forms* are *evaluated*. If no *test-form yields true*, <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> is returned. 



**Examples:**
```lisp

(defun select-options () 
  (cond ((= a 1) (setq a 2)) 
	((= a 2) (setq a 3)) 
	((and (= a 3) (floor a 2))) 
	(t (floor a 3)))) *→* SELECT-OPTIONS 
(setq a 1) *→* 1 
(select-options) *→* 2 
a *→* 2 
(select-options) *→* 3 
a *→* 3 
(select-options) *→* 1 
(setq a 5) *→* 5 
(select-options) *→* 1, 2 

```
**See Also:** 



<DictionaryLink styled={true} term={"if"}><b>if</b></DictionaryLink>, <DictionaryLink styled={true} term={"case"}><b>case</b></DictionaryLink>. 




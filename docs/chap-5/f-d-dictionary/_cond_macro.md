**cond** <GlossaryTerm  term={"macro"}><i>Macro</i></GlossaryTerm>

**Syntax:**

<DictionaryLink  term={"cond"}><b>cond</b></DictionaryLink> *\{↓clause\}*\* → \{result\}\*

*clause::*=(*test-form \{form\}*\*)

**Arguments and Values:**

*test-form*—a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>.

<GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"implicit progn"}><i>implicit progn</i></GlossaryTerm>.

*results*—the <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> of the <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> in the first *clause* whose *test-form yields true*, or the <GlossaryTerm styled={true} term={"primary value"}><i>primary value</i></GlossaryTerm> of the *test-form* if there are no <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> in that *clause*, or else <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> if no *test-form yields true*.

**Description:**

<DictionaryLink  term={"cond"}><b>cond</b></DictionaryLink> allows the execution of <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> to be dependent on *test-form*.

*Test-forms* are evaluated one at a time in the order in which they are given in the argument list until a *test-form* is found that evaluates to <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm>.

If there are no <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> in that clause, the <GlossaryTerm styled={true} term={"primary value"}><i>primary value</i></GlossaryTerm> of the *test-form* is returned by the <DictionaryLink  term={"cond"}><b>cond</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. Otherwise, the <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> associated with this *test-form* are evaluated in order, left to right, as an <GlossaryTerm styled={true} term={"implicit progn"}><i>implicit progn</i></GlossaryTerm>, and the <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> returned by the last <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> are returned by the <DictionaryLink  term={"cond"}><b>cond</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>.

Once one *test-form* has *yielded true*, no additional *test-forms* are *evaluated*. If no *test-form yields true*, <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> is returned.

**Examples:**

```lisp
(defvar a) → a
(defun select-options () 
  (cond ((= a 1) (setf a 2)) 
	((= a 2) (setf a 3)) 
	((and (= a 3) (floor a 2))) 
	(t (floor a 3)))) → SELECT-OPTIONS 
(setf a 1) → 1 
(select-options) → 2 
a → 2 
(select-options) → 3 
a → 3 
(select-options) → 1 
(setf a 5) → 5 
(select-options) → 1, 2 
```

**See Also:**

<DictionaryLink  term={"if"}><b>if</b></DictionaryLink>, <DictionaryLink  term={"case"}><b>case</b></DictionaryLink>.

:::info

We fixed the examples so that it uses <DictionaryLink  term={"defvar"}><b>defvar</b></DictionaryLink> to initialize
the variable and to use <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> rather than <DictionaryLink  term={"setq"}><b>setq</b></DictionaryLink> for assignment. 

:::
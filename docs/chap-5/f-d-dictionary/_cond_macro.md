**cond** <GlossaryTerm  term={"macro"}><i>Macro</i></GlossaryTerm>

**Syntax:**

<ClLinks  term={"cond"}><b>cond</b></ClLinks> *\{↓clause\}*\* → \{result\}\*

*clause::*=(*test-form \{form\}*\*)

**Arguments and Values:**

*test-form*—a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>.

<GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm>—an *implicit progn*.

*results*—the <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> of the <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> in the first *clause* whose *test-form yields true*, or the *primary value* of the *test-form* if there are no <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> in that *clause*, or else <ClLinks  term={"nil"}><b>nil</b></ClLinks> if no *test-form yields true*.

**Description:**

<ClLinks  term={"cond"}><b>cond</b></ClLinks> allows the execution of <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> to be dependent on *test-form*.

*Test-forms* are evaluated one at a time in the order in which they are given in the argument list until a *test-form* is found that evaluates to <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm>.

If there are no <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> in that clause, the *primary value* of the *test-form* is returned by the <ClLinks  term={"cond"}><b>cond</b></ClLinks> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. Otherwise, the <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> associated with this *test-form* are evaluated in order, left to right, as an *implicit progn*, and the <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> returned by the last <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> are returned by the <ClLinks  term={"cond"}><b>cond</b></ClLinks> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>.

Once one *test-form* has *yielded true*, no additional *test-forms* are *evaluated*. If no *test-form yields true*, <ClLinks  term={"nil"}><b>nil</b></ClLinks> is returned.

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

<ClLinks  term={"if"}><b>if</b></ClLinks>, <ClLinks  term={"case"}><b>case</b></ClLinks>.

:::info

We fixed the examples so that it uses <ClLinks  term={"defvar"}><b>defvar</b></ClLinks> to initialize
the variable and to use <ClLinks  term={"setf"}><b>setf</b></ClLinks> rather than <ClLinks  term={"setq"}><b>setq</b></ClLinks> for assignment. 

:::
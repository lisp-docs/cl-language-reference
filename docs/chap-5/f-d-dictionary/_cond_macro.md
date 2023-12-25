**cond** <ClLinks  term={"macro"}><i>Macro</i></ClLinks>

**Syntax:**

<ClLinks  term={"cond"}><b>cond</b></ClLinks> *\{↓clause\}*\* → \{result\}\*

*clause::*=(*test-form \{form\}*\*)

**Arguments and Values:**

*test-form*—a <ClLinks  term={"form"}><i>form</i></ClLinks>.

<ClLinks  term={"form"}><i>forms</i></ClLinks>—an *implicit progn*.

*results*—the <ClLinks  term={"value"}><i>values</i></ClLinks> of the <ClLinks  term={"form"}><i>forms</i></ClLinks> in the first *clause* whose *test-form yields true*, or the *primary value* of the *test-form* if there are no <ClLinks  term={"form"}><i>forms</i></ClLinks> in that *clause*, or else <ClLinks  term={"nil"}><b>nil</b></ClLinks> if no *test-form yields true*.

**Description:**

<ClLinks  term={"cond"}><b>cond</b></ClLinks> allows the execution of <ClLinks  term={"form"}><i>forms</i></ClLinks> to be dependent on *test-form*.

*Test-forms* are evaluated one at a time in the order in which they are given in the argument list until a *test-form* is found that evaluates to <ClLinks  term={"true"}><i>true</i></ClLinks>.

If there are no <ClLinks  term={"form"}><i>forms</i></ClLinks> in that clause, the *primary value* of the *test-form* is returned by the <ClLinks  term={"cond"}><b>cond</b></ClLinks> <ClLinks  term={"form"}><i>form</i></ClLinks>. Otherwise, the <ClLinks  term={"form"}><i>forms</i></ClLinks> associated with this *test-form* are evaluated in order, left to right, as an *implicit progn*, and the <ClLinks  term={"value"}><i>values</i></ClLinks> returned by the last <ClLinks  term={"form"}><i>form</i></ClLinks> are returned by the <ClLinks  term={"cond"}><b>cond</b></ClLinks> <ClLinks  term={"form"}><i>form</i></ClLinks>.

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
**return** <GlossaryTerm  term={"macro"}><i>Macro</i></GlossaryTerm>

**Syntax:**

<ClLinks  term={"return"}><b>return</b></ClLinks> [*result*] →

**Arguments and Values:**

*result*—a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>; evaluated. The default is <ClLinks  term={"nil"}><b>nil</b></ClLinks>.

**Description:**

Returns, as if by <ClLinks  term={"return-from"}><b>return-from</b></ClLinks>, from the <GlossaryTerm  term={"block"}><i>block</i></GlossaryTerm> named <ClLinks  term={"nil"}><b>nil</b></ClLinks>.

**Examples:**

```lisp
(block nil (return) 1) → NIL 
(block nil (return 1) 2) → 1 
(block nil (return (values 1 2)) 3) → 1, 2 
(block nil (block alpha (return 1) 2)) → 1 
(block alpha (block nil (return 1)) 2) → 2 
(block nil (block nil (return 1) 2)) → 1 
```

**See Also:**

<ClLinks  term={"block"}><b>block</b></ClLinks>, <ClLinks  term={"return-from"}><b>return-from</b></ClLinks>, Section 3.1 (Evaluation)

**Notes:**

(return) *≡* (return-from nil)

(return <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>) *≡* (return-from nil <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>)

The *implicit blocks established* by <GlossaryTerm  term={"macro"}><i>macros</i></GlossaryTerm> such as <ClLinks  term={"do"}><b>do</b></ClLinks> are often named <ClLinks  term={"nil"}><b>nil</b></ClLinks>, so that <ClLinks  term={"return"}><b>return</b></ClLinks> can be used to exit from such <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm>.

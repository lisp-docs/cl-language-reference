**return** <ClLinks styled={true} term={"macro"}><i>Macro</i></ClLinks>

**Syntax:**

<ClLinks styled={true} term={"return"}><b>return</b></ClLinks> [*result*] →

**Arguments and Values:**

*result*—a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>; evaluated. The default is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>.

**Description:**

Returns, as if by <ClLinks styled={true} term={"return-from"}><b>return-from</b></ClLinks>, from the <ClLinks styled={true} term={"block"}><i>block</i></ClLinks> named <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>.

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

<ClLinks styled={true} term={"block"}><b>block</b></ClLinks>, <ClLinks styled={true} term={"return-from"}><b>return-from</b></ClLinks>, Section 3.1 (Evaluation)

**Notes:**

(return) *≡* (return-from nil)

(return <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>) *≡* (return-from nil <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>)

The *implicit blocks established* by <ClLinks styled={true} term={"macro"}><i>macros</i></ClLinks> such as <ClLinks styled={true} term={"do"}><b>do</b></ClLinks> are often named <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, so that <ClLinks styled={true} term={"return"}><b>return</b></ClLinks> can be used to exit from such <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>.

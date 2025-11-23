The same <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> can name both a <GlossaryTerm styled={true} term={"lexical variable"}><i>lexical variable</i></GlossaryTerm> and a <GlossaryTerm styled={true} term={"dynamic variable"}><i>dynamic variable</i></GlossaryTerm>, but never in the same <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm>.

In the following example, the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> x is used, at different times, as the <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> of a <GlossaryTerm styled={true} term={"lexical variable"}><i>lexical variable</i></GlossaryTerm> and as the <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> of a <GlossaryTerm styled={true} term={"dynamic variable"}><i>dynamic variable</i></GlossaryTerm>.

```lisp
(let ((x 1)) ;Binds a special variable X
  (declare (special x))
  (let ((x 2)) ;Binds a lexical variable X
    (+ x ;Reads a lexical variable X
       (locally (declare (special x))
         x)))) ;Reads a special variable X
```
→ 3


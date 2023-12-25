**reverse, nreverse** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm>

**Syntax:**

<ClLinks  term={"reverse"}><b>reverse</b></ClLinks> *sequence → reversed-sequence*

<ClLinks  term={"nreverse"}><b>nreverse</b></ClLinks> *sequence → reversed-sequence*

**Arguments and Values:**

*sequence*—a *proper sequence*.

*reversed-sequence*—a *sequence*.

**Description:**

<ClLinks  term={"reverse"}><b>reverse</b></ClLinks> and <ClLinks  term={"nreverse"}><b>nreverse</b></ClLinks> return a new *sequence* of the same kind as *sequence*, containing the same <GlossaryTerm  term={"element"}><i>elements</i></GlossaryTerm>, but in reverse order.

<ClLinks  term={"reverse"}><b>reverse</b></ClLinks> and <ClLinks  term={"nreverse"}><b>nreverse</b></ClLinks> differ in that <ClLinks  term={"reverse"}><b>reverse</b></ClLinks> always creates and returns a new *sequence*, whereas <ClLinks  term={"nreverse"}><b>nreverse</b></ClLinks> might modify and return the given *sequence*. <ClLinks  term={"reverse"}><b>reverse</b></ClLinks> never modifies the given *sequence*.

For <ClLinks  term={"reverse"}><b>reverse</b></ClLinks>, if *sequence* is a <GlossaryTerm  term={"vector"}><i>vector</i></GlossaryTerm> , the result is a *fresh simple array* of <GlossaryTerm  term={"rank"}><i>rank</i></GlossaryTerm> one that has the same *actual array element type* as *sequence*. If *sequence* is a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm>, the result is a *fresh list*.

For <ClLinks  term={"nreverse"}><b>nreverse</b></ClLinks>, if *sequence* is a <GlossaryTerm  term={"vector"}><i>vector</i></GlossaryTerm> , the result is a <GlossaryTerm  term={"vector"}><i>vector</i></GlossaryTerm> that has the same *actual array element type* as *sequence*. If *sequence* is a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm>, the result is a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm>.

For <ClLinks  term={"nreverse"}><b>nreverse</b></ClLinks>, *sequence* might be destroyed and re-used to produce the result. The result might or might not be <GlossaryTerm  term={"identical"}><i>identical</i></GlossaryTerm> to *sequence*. Specifically, when *sequence* is a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm>, <ClLinks  term={"nreverse"}><b>nreverse</b></ClLinks> is permitted to <ClLinks  term={"setf"}><b>setf</b></ClLinks> any part, <ClLinks  term={"car"}><b>car</b></ClLinks> or <ClLinks  term={"cdr"}><b>cdr</b></ClLinks>, of any <GlossaryTerm  term={"cons"}><i>cons</i></GlossaryTerm> that is part of the *list structure* of *sequence*. When *sequence*

is a <GlossaryTerm  term={"vector"}><i>vector</i></GlossaryTerm> , <ClLinks  term={"nreverse"}><b>nreverse</b></ClLinks> is permitted to re-order the elements of *sequence* in order to produce the resulting <GlossaryTerm  term={"vector"}><i>vector</i></GlossaryTerm> .

**Examples:**

```lisp
(setq str "abc") → "abc" 
(reverse str) → "cba" 
str → "abc" 
(setq str (copy-seq str)) → "abc" 
(nreverse str) → "cba" 
str → implementation-dependent 
(setq l (list 1 2 3)) → (1 2 3) 
(nreverse l) → (3 2 1) 
l → implementation-dependent 
```

**Side Effects:**

<ClLinks  term={"nreverse"}><b>nreverse</b></ClLinks> might either create a new *sequence*, modify the argument *sequence*, or both. (<ClLinks  term={"reverse"}><b>reverse</b></ClLinks> does not modify *sequence*.)

**Exceptional Situations:**

Should be prepared to signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> if *sequence* is not a *proper sequence*.

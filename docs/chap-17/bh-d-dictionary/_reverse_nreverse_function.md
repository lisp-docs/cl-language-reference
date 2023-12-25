**reverse, nreverse** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks>

**Syntax:**

<ClLinks styled={true} term={"reverse"}><b>reverse</b></ClLinks> *sequence → reversed-sequence*

<ClLinks styled={true} term={"nreverse"}><b>nreverse</b></ClLinks> *sequence → reversed-sequence*

**Arguments and Values:**

*sequence*—a *proper sequence*.

*reversed-sequence*—a *sequence*.

**Description:**

<ClLinks styled={true} term={"reverse"}><b>reverse</b></ClLinks> and <ClLinks styled={true} term={"nreverse"}><b>nreverse</b></ClLinks> return a new *sequence* of the same kind as *sequence*, containing the same <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks>, but in reverse order.

<ClLinks styled={true} term={"reverse"}><b>reverse</b></ClLinks> and <ClLinks styled={true} term={"nreverse"}><b>nreverse</b></ClLinks> differ in that <ClLinks styled={true} term={"reverse"}><b>reverse</b></ClLinks> always creates and returns a new *sequence*, whereas <ClLinks styled={true} term={"nreverse"}><b>nreverse</b></ClLinks> might modify and return the given *sequence*. <ClLinks styled={true} term={"reverse"}><b>reverse</b></ClLinks> never modifies the given *sequence*.

For <ClLinks styled={true} term={"reverse"}><b>reverse</b></ClLinks>, if *sequence* is a <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> , the result is a *fresh simple array* of <ClLinks styled={true} term={"rank"}><i>rank</i></ClLinks> one that has the same *actual array element type* as *sequence*. If *sequence* is a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>, the result is a *fresh list*.

For <ClLinks styled={true} term={"nreverse"}><b>nreverse</b></ClLinks>, if *sequence* is a <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> , the result is a <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> that has the same *actual array element type* as *sequence*. If *sequence* is a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>, the result is a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>.

For <ClLinks styled={true} term={"nreverse"}><b>nreverse</b></ClLinks>, *sequence* might be destroyed and re-used to produce the result. The result might or might not be <ClLinks styled={true} term={"identical"}><i>identical</i></ClLinks> to *sequence*. Specifically, when *sequence* is a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>, <ClLinks styled={true} term={"nreverse"}><b>nreverse</b></ClLinks> is permitted to <ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks> any part, <ClLinks styled={true} term={"car"}><b>car</b></ClLinks> or <ClLinks styled={true} term={"cdr"}><b>cdr</b></ClLinks>, of any <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks> that is part of the *list structure* of *sequence*. When *sequence*

is a <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> , <ClLinks styled={true} term={"nreverse"}><b>nreverse</b></ClLinks> is permitted to re-order the elements of *sequence* in order to produce the resulting <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> .

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

<ClLinks styled={true} term={"nreverse"}><b>nreverse</b></ClLinks> might either create a new *sequence*, modify the argument *sequence*, or both. (<ClLinks styled={true} term={"reverse"}><b>reverse</b></ClLinks> does not modify *sequence*.)

**Exceptional Situations:**

Should be prepared to signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if *sequence* is not a *proper sequence*.

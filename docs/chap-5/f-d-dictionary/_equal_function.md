**equal** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks>

**Syntax:**

<ClLinks styled={true} term={"equal"}><b>equal</b></ClLinks> *x y → generalized-boolean*

<ClLinks styled={true} term={"equal"}><b>equal</b></ClLinks>

**Arguments and Values:**

*x*—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>.

*y*—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>.

*generalized-boolean*—a *generalized boolean*.

**Description:**

Returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if *x* and *y* are structurally similar (isomorphic) <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks>. <ClLinks styled={true} term={"object"}><i>Objects</i></ClLinks> are treated as follows by <ClLinks styled={true} term={"equal"}><b>equal</b></ClLinks>.

<ClLinks styled={true} term={"symbol"}><i>Symbols</i></ClLinks>, <ClLinks styled={true} term={"number"}><i>Numbers</i></ClLinks>, and <ClLinks styled={true} term={"character"}><i>Characters</i></ClLinks>

<ClLinks styled={true} term={"equal"}><b>equal</b></ClLinks> is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> of two <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> if they are <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> that are <ClLinks styled={true} term={"eq"}><b>eq</b></ClLinks>, if they are <ClLinks styled={true} term={"number"}><i>numbers</i></ClLinks> that are <ClLinks styled={true} term={"eql"}><b>eql</b></ClLinks>, or if they are <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks> that are <ClLinks styled={true} term={"eql"}><b>eql</b></ClLinks>.

*Conses*

For *conses*, <ClLinks styled={true} term={"equal"}><b>equal</b></ClLinks> is defined recursively as the two <ClLinks styled={true} term={"car"}><i>cars</i></ClLinks> being <ClLinks styled={true} term={"equal"}><b>equal</b></ClLinks> and the two <ClLinks styled={true} term={"cdr"}><i>cdrs</i></ClLinks> being <ClLinks styled={true} term={"equal"}><b>equal</b></ClLinks>.

<ClLinks styled={true} term={"array"}><i>Arrays</i></ClLinks>

Two <ClLinks styled={true} term={"array"}><i>arrays</i></ClLinks> are <ClLinks styled={true} term={"equal"}><b>equal</b></ClLinks> only if they are <ClLinks styled={true} term={"eq"}><b>eq</b></ClLinks>, with one exception: <ClLinks styled={true} term={"string"}><i>strings</i></ClLinks> and *bit vectors* are compared element-by-element (using <ClLinks styled={true} term={"eql"}><b>eql</b></ClLinks>). If either *x* or *y* has a *fill pointer* , the *fill pointer* limits the number of elements examined by <ClLinks styled={true} term={"equal"}><b>equal</b></ClLinks>. Uppercase and lowercase letters in <ClLinks styled={true} term={"string"}><i>strings</i></ClLinks> are considered by <ClLinks styled={true} term={"equal"}><b>equal</b></ClLinks> to be different.

<ClLinks styled={true} term={"pathname"}><i>Pathnames</i></ClLinks>

Two <ClLinks styled={true} term={"pathname"}><i>pathnames</i></ClLinks> are <ClLinks styled={true} term={"equal"}><b>equal</b></ClLinks> if and only if all the corresponding components (host, device, and so on) are equivalent. Whether or not uppercase and lowercase letters are considered equivalent in <ClLinks styled={true} term={"string"}><i>strings</i></ClLinks> appearing in components is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. <ClLinks styled={true} term={"pathname"}><i>pathnames</i></ClLinks> that are <ClLinks styled={true} term={"equal"}><b>equal</b></ClLinks> should be functionally equivalent.

**Other (Structures, hash-tables, instances,** *. . .***)**

Two other <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> are <ClLinks styled={true} term={"equal"}><b>equal</b></ClLinks> only if they are <ClLinks styled={true} term={"eq"}><b>eq</b></ClLinks>.

<ClLinks styled={true} term={"equal"}><b>equal</b></ClLinks> does not descend any <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> other than the ones explicitly specified above. Figure 5–12 summarizes the information given in the previous list. In addition, the figure specifies the priority of the behavior of <ClLinks styled={true} term={"equal"}><b>equal</b></ClLinks>, with upper entries taking priority over lower ones.

<ClLinks styled={true} term={"equal"}><b>equal</b></ClLinks>

|**Type Behavior**|

| :- |

|<p><ClLinks styled={true} term={"number"}><i>number</i></ClLinks> uses <ClLinks styled={true} term={"eql"}><b>eql</b></ClLinks> </p><p><ClLinks styled={true} term={"character"}><i>character</i></ClLinks> uses <ClLinks styled={true} term={"eql"}><b>eql</b></ClLinks> </p><p><ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks> descends </p><p>*bit vector* descends </p><p><ClLinks styled={true} term={"string"}><i>string</i></ClLinks> descends </p><p><ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> “functionally equivalent” </p><p><ClLinks styled={true} term={"structure"}><i>structure</i></ClLinks> uses <ClLinks styled={true} term={"eq"}><b>eq</b></ClLinks> </p><p>Other <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> uses <ClLinks styled={true} term={"eq"}><b>eq</b></ClLinks> </p><p>*hash table* uses <ClLinks styled={true} term={"eq"}><b>eq</b></ClLinks> </p><p>Other <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> uses <ClLinks styled={true} term={"eq"}><b>eq</b></ClLinks></p>|

**Figure 5–12. Summary and priorities of behavior of equal**

Any two <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> that are <ClLinks styled={true} term={"eql"}><b>eql</b></ClLinks> are also <ClLinks styled={true} term={"equal"}><b>equal</b></ClLinks>.

<ClLinks styled={true} term={"equal"}><b>equal</b></ClLinks> may fail to terminate if *x* or *y* is circular.

**Examples:**

```lisp
(equal ’a ’b) → false 
(equal ’a ’a) → true 
(equal 3 3) → true 
(equal 3 3.0) → false 
(equal 3.0 3.0) → true 
(equal #c(3 -4) #c(3 -4)) → true 
(equal #c(3 -4.0) #c(3 -4)) → false 
(equal (cons ’a ’b) (cons ’a ’c)) → false 
(equal (cons ’a ’b) (cons ’a ’b)) → true 
(equal #\A #\A) → true 
(equal #\A #\a) → false 
(equal "Foo" "Foo") → true 
(equal "Foo" (copy-seq "Foo")) → true 
(equal "FOO" "foo") → false 
(equal "This-string" "This-string") → true 
(equal "This-string" "this-string") → false 
```

**See Also:**

<ClLinks styled={true} term={"eq"}><b>eq</b></ClLinks>, <ClLinks styled={true} term={"eql"}><b>eql</b></ClLinks>, <ClLinks styled={true} term={"equalp"}><b>equalp</b></ClLinks>, <ClLinks styled={true} term={"="}><b>=</b></ClLinks>, <ClLinks styled={true} term={"string"}><b>string=</b></ClLinks>, **string-equal**, <ClLinks styled={true} term={"char="}><b>char=</b></ClLinks>, <ClLinks styled={true} term={"char-equal"}><b>char-equal</b></ClLinks>, <ClLinks styled={true} term={"tree-equal"}><b>tree-equal</b></ClLinks>

**Notes:**

<ClLinks styled={true} term={"object"}><i>Object</i></ClLinks> equality is not a concept for which there is a uniquely determined correct algorithm. The appropriateness of an equality predicate can be judged only in the context of the needs of some particular program. Although these functions take any type of argument and their names sound very generic, <ClLinks styled={true} term={"equal"}><b>equal</b></ClLinks> and <ClLinks styled={true} term={"equalp"}><b>equalp</b></ClLinks> are not appropriate for every application.

A rough rule of thumb is that two <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> are <ClLinks styled={true} term={"equal"}><b>equal</b></ClLinks> if and only if their printed representations are the same.

**equal** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm>

**Syntax:**

<DictionaryLink  term={"equal"}><b>equal</b></DictionaryLink> *x y → generalized-boolean*

<DictionaryLink  term={"equal"}><b>equal</b></DictionaryLink>

**Arguments and Values:**

*x*—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>.

*y*—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>.

*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>.

**Description:**

Returns <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> if *x* and *y* are structurally similar (isomorphic) <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm>. <GlossaryTerm  term={"object"}><i>Objects</i></GlossaryTerm> are treated as follows by <DictionaryLink  term={"equal"}><b>equal</b></DictionaryLink>.

<GlossaryTerm  term={"symbol"}><i>Symbols</i></GlossaryTerm>, <GlossaryTerm  term={"number"}><i>Numbers</i></GlossaryTerm>, and <GlossaryTerm  term={"character"}><i>Characters</i></GlossaryTerm>

<DictionaryLink  term={"equal"}><b>equal</b></DictionaryLink> is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> of two <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> if they are <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> that are <DictionaryLink  term={"eq"}><b>eq</b></DictionaryLink>, if they are <GlossaryTerm  term={"number"}><i>numbers</i></GlossaryTerm> that are <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink>, or if they are <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm> that are <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink>.

*Conses*

For *conses*, <DictionaryLink  term={"equal"}><b>equal</b></DictionaryLink> is defined recursively as the two <GlossaryTerm  term={"car"}><i>cars</i></GlossaryTerm> being <DictionaryLink  term={"equal"}><b>equal</b></DictionaryLink> and the two <GlossaryTerm  term={"cdr"}><i>cdrs</i></GlossaryTerm> being <DictionaryLink  term={"equal"}><b>equal</b></DictionaryLink>.

<GlossaryTerm  term={"array"}><i>Arrays</i></GlossaryTerm>

Two <GlossaryTerm  term={"array"}><i>arrays</i></GlossaryTerm> are <DictionaryLink  term={"equal"}><b>equal</b></DictionaryLink> only if they are <DictionaryLink  term={"eq"}><b>eq</b></DictionaryLink>, with one exception: <GlossaryTerm  term={"string"}><i>strings</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"bit vector"}><i>bit vectors</i></GlossaryTerm> are compared element-by-element (using <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink>). If either *x* or *y* has a <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> , the <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> limits the number of elements examined by <DictionaryLink  term={"equal"}><b>equal</b></DictionaryLink>. Uppercase and lowercase letters in <GlossaryTerm  term={"string"}><i>strings</i></GlossaryTerm> are considered by <DictionaryLink  term={"equal"}><b>equal</b></DictionaryLink> to be different.

<GlossaryTerm  term={"pathname"}><i>Pathnames</i></GlossaryTerm>

Two <GlossaryTerm  term={"pathname"}><i>pathnames</i></GlossaryTerm> are <DictionaryLink  term={"equal"}><b>equal</b></DictionaryLink> if and only if all the corresponding components (host, device, and so on) are equivalent. Whether or not uppercase and lowercase letters are considered equivalent in <GlossaryTerm  term={"string"}><i>strings</i></GlossaryTerm> appearing in components is <GlossaryTerm  term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. <GlossaryTerm  term={"pathname"}><i>pathnames</i></GlossaryTerm> that are <DictionaryLink  term={"equal"}><b>equal</b></DictionaryLink> should be functionally equivalent.

**Other (Structures, hash-tables, instances,** *. . .***)**

Two other <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> are <DictionaryLink  term={"equal"}><b>equal</b></DictionaryLink> only if they are <DictionaryLink  term={"eq"}><b>eq</b></DictionaryLink>.

<DictionaryLink  term={"equal"}><b>equal</b></DictionaryLink> does not descend any <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> other than the ones explicitly specified above. Figure 5–12 summarizes the information given in the previous list. In addition, the figure specifies the priority of the behavior of <DictionaryLink  term={"equal"}><b>equal</b></DictionaryLink>, with upper entries taking priority over lower ones.

<DictionaryLink  term={"equal"}><b>equal</b></DictionaryLink>

|**Type Behavior**|

| :- |

|<p><GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> uses <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink> </p><p><GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> uses <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink> </p><p><GlossaryTerm  term={"cons"}><i>cons</i></GlossaryTerm> descends </p><p><GlossaryTerm styled={true} term={"bit vector"}><i>bit vector</i></GlossaryTerm> descends </p><p><GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> descends </p><p><GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> “functionally equivalent” </p><p><GlossaryTerm  term={"structure"}><i>structure</i></GlossaryTerm> uses <DictionaryLink  term={"eq"}><b>eq</b></DictionaryLink> </p><p>Other <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> uses <DictionaryLink  term={"eq"}><b>eq</b></DictionaryLink> </p><p><GlossaryTerm styled={true} term={"hash table"}><i>hash table</i></GlossaryTerm> uses <DictionaryLink  term={"eq"}><b>eq</b></DictionaryLink> </p><p>Other <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> uses <DictionaryLink  term={"eq"}><b>eq</b></DictionaryLink></p>|

**Figure 5–12. Summary and priorities of behavior of equal**

Any two <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> that are <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink> are also <DictionaryLink  term={"equal"}><b>equal</b></DictionaryLink>.

<DictionaryLink  term={"equal"}><b>equal</b></DictionaryLink> may fail to terminate if *x* or *y* is circular.

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

<DictionaryLink  term={"eq"}><b>eq</b></DictionaryLink>, <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink>, <DictionaryLink  term={"equalp"}><b>equalp</b></DictionaryLink>, <ClLinks  term={"="}><b>=</b></ClLinks>, <DictionaryLink  term={"string"}><b>string=</b></DictionaryLink>, **string-equal**, <ClLinks  term={"char="}><b>char=</b></ClLinks>, <DictionaryLink  term={"char-equal"}><b>char-equal</b></DictionaryLink>, <DictionaryLink  term={"tree-equal"}><b>tree-equal</b></DictionaryLink>

**Notes:**

<GlossaryTerm  term={"object"}><i>Object</i></GlossaryTerm> equality is not a concept for which there is a uniquely determined correct algorithm. The appropriateness of an equality predicate can be judged only in the context of the needs of some particular program. Although these functions take any type of argument and their names sound very generic, <DictionaryLink  term={"equal"}><b>equal</b></DictionaryLink> and <DictionaryLink  term={"equalp"}><b>equalp</b></DictionaryLink> are not appropriate for every application.

A rough rule of thumb is that two <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> are <DictionaryLink  term={"equal"}><b>equal</b></DictionaryLink> if and only if their printed representations are the same.

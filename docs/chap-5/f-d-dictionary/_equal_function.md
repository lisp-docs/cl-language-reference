**equal** <ClLinks  term={"function"}><i>Function</i></ClLinks>

**Syntax:**

<DictionaryLink  term={"equal"}><b>equal</b></DictionaryLink> *x y → generalized-boolean*

<DictionaryLink  term={"equal"}><b>equal</b></DictionaryLink>

**Arguments and Values:**

*x*—an <ClLinks  term={"object"}><i>object</i></ClLinks>.

*y*—an <ClLinks  term={"object"}><i>object</i></ClLinks>.

*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>.

**Description:**

Returns <ClLinks  term={"true"}><i>true</i></ClLinks> if *x* and *y* are structurally similar (isomorphic) <ClLinks  term={"object"}><i>objects</i></ClLinks>. <ClLinks  term={"object"}><i>Objects</i></ClLinks> are treated as follows by <DictionaryLink  term={"equal"}><b>equal</b></DictionaryLink>.

<ClLinks  term={"symbol"}><i>Symbols</i></ClLinks>, <ClLinks  term={"number"}><i>Numbers</i></ClLinks>, and <ClLinks  term={"character"}><i>Characters</i></ClLinks>

<DictionaryLink  term={"equal"}><b>equal</b></DictionaryLink> is <ClLinks  term={"true"}><i>true</i></ClLinks> of two <ClLinks  term={"object"}><i>objects</i></ClLinks> if they are <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> that are <DictionaryLink  term={"eq"}><b>eq</b></DictionaryLink>, if they are <ClLinks  term={"number"}><i>numbers</i></ClLinks> that are <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink>, or if they are <ClLinks  term={"character"}><i>characters</i></ClLinks> that are <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink>.

*Conses*

For *conses*, <DictionaryLink  term={"equal"}><b>equal</b></DictionaryLink> is defined recursively as the two <ClLinks  term={"car"}><i>cars</i></ClLinks> being <DictionaryLink  term={"equal"}><b>equal</b></DictionaryLink> and the two <ClLinks  term={"cdr"}><i>cdrs</i></ClLinks> being <DictionaryLink  term={"equal"}><b>equal</b></DictionaryLink>.

<ClLinks  term={"array"}><i>Arrays</i></ClLinks>

Two <ClLinks  term={"array"}><i>arrays</i></ClLinks> are <DictionaryLink  term={"equal"}><b>equal</b></DictionaryLink> only if they are <DictionaryLink  term={"eq"}><b>eq</b></DictionaryLink>, with one exception: <ClLinks  term={"string"}><i>strings</i></ClLinks> and <GlossaryTerm styled={true} term={"bit vector"}><i>bit vectors</i></GlossaryTerm> are compared element-by-element (using <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink>). If either *x* or *y* has a <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> , the <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> limits the number of elements examined by <DictionaryLink  term={"equal"}><b>equal</b></DictionaryLink>. Uppercase and lowercase letters in <ClLinks  term={"string"}><i>strings</i></ClLinks> are considered by <DictionaryLink  term={"equal"}><b>equal</b></DictionaryLink> to be different.

<ClLinks  term={"pathname"}><i>Pathnames</i></ClLinks>

Two <ClLinks  term={"pathname"}><i>pathnames</i></ClLinks> are <DictionaryLink  term={"equal"}><b>equal</b></DictionaryLink> if and only if all the corresponding components (host, device, and so on) are equivalent. Whether or not uppercase and lowercase letters are considered equivalent in <ClLinks  term={"string"}><i>strings</i></ClLinks> appearing in components is <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. <ClLinks  term={"pathname"}><i>pathnames</i></ClLinks> that are <DictionaryLink  term={"equal"}><b>equal</b></DictionaryLink> should be functionally equivalent.

**Other (Structures, hash-tables, instances,** *. . .***)**

Two other <ClLinks  term={"object"}><i>objects</i></ClLinks> are <DictionaryLink  term={"equal"}><b>equal</b></DictionaryLink> only if they are <DictionaryLink  term={"eq"}><b>eq</b></DictionaryLink>.

<DictionaryLink  term={"equal"}><b>equal</b></DictionaryLink> does not descend any <ClLinks  term={"object"}><i>objects</i></ClLinks> other than the ones explicitly specified above. Figure 5–12 summarizes the information given in the previous list. In addition, the figure specifies the priority of the behavior of <DictionaryLink  term={"equal"}><b>equal</b></DictionaryLink>, with upper entries taking priority over lower ones.

<DictionaryLink  term={"equal"}><b>equal</b></DictionaryLink>

|**Type Behavior**|

| :- |

|<p><ClLinks  term={"number"}><i>number</i></ClLinks> uses <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink> </p><p><ClLinks  term={"character"}><i>character</i></ClLinks> uses <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink> </p><p><ClLinks  term={"cons"}><i>cons</i></ClLinks> descends </p><p><GlossaryTerm styled={true} term={"bit vector"}><i>bit vector</i></GlossaryTerm> descends </p><p><ClLinks  term={"string"}><i>string</i></ClLinks> descends </p><p><ClLinks  term={"pathname"}><i>pathname</i></ClLinks> “functionally equivalent” </p><p><ClLinks  term={"structure"}><i>structure</i></ClLinks> uses <DictionaryLink  term={"eq"}><b>eq</b></DictionaryLink> </p><p>Other <ClLinks  term={"array"}><i>array</i></ClLinks> uses <DictionaryLink  term={"eq"}><b>eq</b></DictionaryLink> </p><p><GlossaryTerm styled={true} term={"hash table"}><i>hash table</i></GlossaryTerm> uses <DictionaryLink  term={"eq"}><b>eq</b></DictionaryLink> </p><p>Other <ClLinks  term={"object"}><i>object</i></ClLinks> uses <DictionaryLink  term={"eq"}><b>eq</b></DictionaryLink></p>|

**Figure 5–12. Summary and priorities of behavior of equal**

Any two <ClLinks  term={"object"}><i>objects</i></ClLinks> that are <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink> are also <DictionaryLink  term={"equal"}><b>equal</b></DictionaryLink>.

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

<DictionaryLink  term={"eq"}><b>eq</b></DictionaryLink>, <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink>, <DictionaryLink  term={"equalp"}><b>equalp</b></DictionaryLink>, <ClLinks  term={"="}><b>=</b></ClLinks>, <ClLinks  term={"string"}><b>string=</b></ClLinks>, **string-equal**, <ClLinks  term={"char="}><b>char=</b></ClLinks>, <DictionaryLink  term={"char-equal"}><b>char-equal</b></DictionaryLink>, <DictionaryLink  term={"tree-equal"}><b>tree-equal</b></DictionaryLink>

**Notes:**

<ClLinks  term={"object"}><i>Object</i></ClLinks> equality is not a concept for which there is a uniquely determined correct algorithm. The appropriateness of an equality predicate can be judged only in the context of the needs of some particular program. Although these functions take any type of argument and their names sound very generic, <DictionaryLink  term={"equal"}><b>equal</b></DictionaryLink> and <DictionaryLink  term={"equalp"}><b>equalp</b></DictionaryLink> are not appropriate for every application.

A rough rule of thumb is that two <ClLinks  term={"object"}><i>objects</i></ClLinks> are <DictionaryLink  term={"equal"}><b>equal</b></DictionaryLink> if and only if their printed representations are the same.

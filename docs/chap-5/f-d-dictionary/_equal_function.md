**equal** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"equal"}><b>equal</b></DictionaryLink> *x y → generalized-boolean* 



Data and Control 











<DictionaryLink styled={true} term={"equal"}><b>equal</b></DictionaryLink> 



**Arguments and Values:** 



*x*—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



*y*—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if *x* and *y* are structurally similar (isomorphic) <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm>. <GlossaryTerm styled={true} term={"object"}><i>Objects</i></GlossaryTerm> are treated as follows by <DictionaryLink styled={true} term={"equal"}><b>equal</b></DictionaryLink>. 



<GlossaryTerm styled={true} term={"symbol"}><i>Symbols</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"number"}><i>Numbers</i></GlossaryTerm>, and <GlossaryTerm styled={true} term={"character"}><i>Characters</i></GlossaryTerm> 



<DictionaryLink styled={true} term={"equal"}><b>equal</b></DictionaryLink> is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> of two <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> if they are <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> that are <DictionaryLink styled={true} term={"eq"}><b>eq</b></DictionaryLink>, if they are <GlossaryTerm styled={true} term={"number"}><i>numbers</i></GlossaryTerm> that are <DictionaryLink styled={true} term={"eql"}><b>eql</b></DictionaryLink>, or if they are <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> that are <DictionaryLink styled={true} term={"eql"}><b>eql</b></DictionaryLink>. 



*Conses* 



For *conses*, <DictionaryLink styled={true} term={"equal"}><b>equal</b></DictionaryLink> is defined recursively as the two <GlossaryTerm styled={true} term={"car"}><i>cars</i></GlossaryTerm> being <DictionaryLink styled={true} term={"equal"}><b>equal</b></DictionaryLink> and the two <GlossaryTerm styled={true} term={"cdr"}><i>cdrs</i></GlossaryTerm> being <DictionaryLink styled={true} term={"equal"}><b>equal</b></DictionaryLink>. 



<GlossaryTerm styled={true} term={"array"}><i>Arrays</i></GlossaryTerm> 



Two <GlossaryTerm styled={true} term={"array"}><i>arrays</i></GlossaryTerm> are <DictionaryLink styled={true} term={"equal"}><b>equal</b></DictionaryLink> only if they are <DictionaryLink styled={true} term={"eq"}><b>eq</b></DictionaryLink>, with one exception: <GlossaryTerm styled={true} term={"string"}><i>strings</i></GlossaryTerm> and *bit vectors* are compared element-by-element (using <DictionaryLink styled={true} term={"eql"}><b>eql</b></DictionaryLink>). If either *x* or *y* has a *fill pointer* , the *fill pointer* limits the number of elements examined by <DictionaryLink styled={true} term={"equal"}><b>equal</b></DictionaryLink>. Uppercase and lowercase letters in <GlossaryTerm styled={true} term={"string"}><i>strings</i></GlossaryTerm> are considered by <DictionaryLink styled={true} term={"equal"}><b>equal</b></DictionaryLink> to be different. 



<GlossaryTerm styled={true} term={"pathname"}><i>Pathnames</i></GlossaryTerm> 



Two <GlossaryTerm styled={true} term={"pathname"}><i>pathnames</i></GlossaryTerm> are <DictionaryLink styled={true} term={"equal"}><b>equal</b></DictionaryLink> if and only if all the corresponding components (host, device, and so on) are equivalent. Whether or not uppercase and lowercase letters are considered equivalent in <GlossaryTerm styled={true} term={"string"}><i>strings</i></GlossaryTerm> appearing in components is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. <GlossaryTerm styled={true} term={"pathname"}><i>pathnames</i></GlossaryTerm> that are <DictionaryLink styled={true} term={"equal"}><b>equal</b></DictionaryLink> should be functionally equivalent. 



**Other (Structures, hash-tables, instances,** *. . .***)** 



Two other <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> are <DictionaryLink styled={true} term={"equal"}><b>equal</b></DictionaryLink> only if they are <DictionaryLink styled={true} term={"eq"}><b>eq</b></DictionaryLink>. 



<DictionaryLink styled={true} term={"equal"}><b>equal</b></DictionaryLink> does not descend any <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> other than the ones explicitly specified above. Figure 5–12 summarizes the information given in the previous list. In addition, the figure specifies the priority of the behavior of <DictionaryLink styled={true} term={"equal"}><b>equal</b></DictionaryLink>, with upper entries taking priority over lower ones. 















<DictionaryLink styled={true} term={"equal"}><b>equal</b></DictionaryLink> 



|**Type Behavior**|

| :- |

|<p><GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> uses <DictionaryLink styled={true} term={"eql"}><b>eql</b></DictionaryLink> </p><p><GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> uses <DictionaryLink styled={true} term={"eql"}><b>eql</b></DictionaryLink> </p><p><GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm> descends </p><p>*bit vector* descends </p><p><GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> descends </p><p><GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> “functionally equivalent” </p><p><GlossaryTerm styled={true} term={"structure"}><i>structure</i></GlossaryTerm> uses <DictionaryLink styled={true} term={"eq"}><b>eq</b></DictionaryLink> </p><p>Other <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> uses <DictionaryLink styled={true} term={"eq"}><b>eq</b></DictionaryLink> </p><p>*hash table* uses <DictionaryLink styled={true} term={"eq"}><b>eq</b></DictionaryLink> </p><p>Other <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> uses <DictionaryLink styled={true} term={"eq"}><b>eq</b></DictionaryLink></p>|





**Figure 5–12. Summary and priorities of behavior of equal** 



Any two <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> that are <DictionaryLink styled={true} term={"eql"}><b>eql</b></DictionaryLink> are also <DictionaryLink styled={true} term={"equal"}><b>equal</b></DictionaryLink>. 



<DictionaryLink styled={true} term={"equal"}><b>equal</b></DictionaryLink> may fail to terminate if *x* or *y* is circular. 



**Examples:**
```lisp

(equal ’a ’b) *→ false* 
(equal ’a ’a) *→ true* 
(equal 3 3) *→ true* 
(equal 3 3.0) *→ false* 
(equal 3.0 3.0) *→ true* 
(equal #c(3 -4) #c(3 -4)) *→ true* 
(equal #c(3 -4.0) #c(3 -4)) *→ false* 
(equal (cons ’a ’b) (cons ’a ’c)) *→ false* 
(equal (cons ’a ’b) (cons ’a ’b)) *→ true* 
(equal #\A #\A) *→ true* 
(equal #\A #\a) *→ false* 
(equal "Foo" "Foo") *→ true* 
(equal "Foo" (copy-seq "Foo")) *→ true* 
(equal "FOO" "foo") *→ false* 
(equal "This-string" "This-string") *→ true* 
(equal "This-string" "this-string") *→ false* 

```
**See Also:** 



<DictionaryLink styled={true} term={"eq"}><b>eq</b></DictionaryLink>, <DictionaryLink styled={true} term={"eql"}><b>eql</b></DictionaryLink>, <DictionaryLink styled={true} term={"equalp"}><b>equalp</b></DictionaryLink>, <DictionaryLink styled={true} term={"="}><b>=</b></DictionaryLink>, <DictionaryLink styled={true} term={"string"}><b>string=</b></DictionaryLink>, **string-equal**, <DictionaryLink styled={true} term={"char="}><b>char=</b></DictionaryLink>, <DictionaryLink styled={true} term={"char-equal"}><b>char-equal</b></DictionaryLink>, <DictionaryLink styled={true} term={"tree-equal"}><b>tree-equal</b></DictionaryLink> 



**Notes:** 



<GlossaryTerm styled={true} term={"object"}><i>Object</i></GlossaryTerm> equality is not a concept for which there is a uniquely determined correct algorithm. The appropriateness of an equality predicate can be judged only in the context of the needs of some particular program. Although these functions take any type of argument and their names sound 



Data and Control 











very generic, <DictionaryLink styled={true} term={"equal"}><b>equal</b></DictionaryLink> and <DictionaryLink styled={true} term={"equalp"}><b>equalp</b></DictionaryLink> are not appropriate for every application. 



A rough rule of thumb is that two <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> are <DictionaryLink styled={true} term={"equal"}><b>equal</b></DictionaryLink> if and only if their printed representations are the same. 




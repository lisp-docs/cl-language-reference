**equalp** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"equalp"}><b>equalp</b></DictionaryLink> *x y → generalized-boolean* 



**Arguments and Values:** 



*x*—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



*y*—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if *x* and *y* are <DictionaryLink styled={true} term={"equal"}><b>equal</b></DictionaryLink>, or if they have components that are of the same <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> as each other and if those components are <DictionaryLink styled={true} term={"equalp"}><b>equalp</b></DictionaryLink>; specifically, <DictionaryLink styled={true} term={"equalp"}><b>equalp</b></DictionaryLink> returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> in the following cases: 



<GlossaryTerm styled={true} term={"character"}><i>Characters</i></GlossaryTerm> 



If two <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> are <DictionaryLink styled={true} term={"char-equal"}><b>char-equal</b></DictionaryLink>. 



<GlossaryTerm styled={true} term={"number"}><i>Numbers</i></GlossaryTerm> 



If two <GlossaryTerm styled={true} term={"number"}><i>numbers</i></GlossaryTerm> are the <GlossaryTerm styled={true} term={"same"}><i>same</i></GlossaryTerm> under <DictionaryLink styled={true} term={"="}><b>=</b></DictionaryLink>. 



*Conses* 



If the two <GlossaryTerm styled={true} term={"car"}><i>cars</i></GlossaryTerm> in the *conses* are <DictionaryLink styled={true} term={"equalp"}><b>equalp</b></DictionaryLink> and the two <GlossaryTerm styled={true} term={"cdr"}><i>cdrs</i></GlossaryTerm> in the *conses* are <DictionaryLink styled={true} term={"equalp"}><b>equalp</b></DictionaryLink>. 



<GlossaryTerm styled={true} term={"array"}><i>Arrays</i></GlossaryTerm> 



If two <GlossaryTerm styled={true} term={"array"}><i>arrays</i></GlossaryTerm> have the same number of dimensions, the dimensions match, and the corresponding *active elements* are <DictionaryLink styled={true} term={"equalp"}><b>equalp</b></DictionaryLink>. The <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm> for which the <GlossaryTerm styled={true} term={"array"}><i>arrays</i></GlossaryTerm> are <GlossaryTerm styled={true} term={"specialized"}><i>specialized</i></GlossaryTerm> need not match; for example, a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> and a general <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> that happens to contain the same <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> are <DictionaryLink styled={true} term={"equalp"}><b>equalp</b></DictionaryLink>. Because <DictionaryLink styled={true} term={"equalp"}><b>equalp</b></DictionaryLink> performs <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm>-by-<GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm> comparisons of <GlossaryTerm styled={true} term={"string"}><i>strings</i></GlossaryTerm> and ignores the <GlossaryTerm styled={true} term={"case"}><i>case</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"case"}><i>case</i></GlossaryTerm> distinctions are ignored when <DictionaryLink styled={true} term={"equalp"}><b>equalp</b></DictionaryLink> compares <GlossaryTerm styled={true} term={"string"}><i>strings</i></GlossaryTerm>. 















<DictionaryLink styled={true} term={"equalp"}><b>equalp</b></DictionaryLink> 



<GlossaryTerm styled={true} term={"structure"}><i>Structures</i></GlossaryTerm> 



If two *structures S*<sub>1</sub> and *S*<sub>2</sub> have the same <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> and the value of each <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> in *S*<sub>1</sub> is the <GlossaryTerm styled={true} term={"same"}><i>same</i></GlossaryTerm> under <DictionaryLink styled={true} term={"equalp"}><b>equalp</b></DictionaryLink> as the value of the corresponding <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> in *S*<sub>2</sub>. 



*Hash Tables* 



<DictionaryLink styled={true} term={"equalp"}><b>equalp</b></DictionaryLink> descends *hash-tables* by first comparing the count of entries and the :test function; if those are the same, it compares the keys of the tables using the :test function and then the values of the matching keys using <DictionaryLink styled={true} term={"equalp"}><b>equalp</b></DictionaryLink> recursively. 



<DictionaryLink styled={true} term={"equalp"}><b>equalp</b></DictionaryLink> does not descend any <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> other than the ones explicitly specified above. Figure 5–13 summarizes the information given in the previous list. In addition, the figure specifies the priority of the behavior of <DictionaryLink styled={true} term={"equalp"}><b>equalp</b></DictionaryLink>, with upper entries taking priority over lower ones. 



|**Type Behavior**|

| :- |

|<p><GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> uses <DictionaryLink styled={true} term={"="}><b>=</b></DictionaryLink> </p><p><GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> uses <DictionaryLink styled={true} term={"char-equal"}><b>char-equal</b></DictionaryLink> </p><p><GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm> descends </p><p>*bit vector* descends </p><p><GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> descends </p><p><GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> same as <DictionaryLink styled={true} term={"equal"}><b>equal</b></DictionaryLink> </p><p><GlossaryTerm styled={true} term={"structure"}><i>structure</i></GlossaryTerm> descends, as described above </p><p>Other <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> descends </p><p>*hash table* descends, as described above </p><p>Other <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> uses <DictionaryLink styled={true} term={"eq"}><b>eq</b></DictionaryLink></p>|





**Figure 5–13. Summary and priorities of behavior of equalp** 



**Examples:**
```lisp

(equalp ’a ’b) *→ false* 
(equalp ’a ’a) *→ true* 
(equalp 3 3) *→ true* 
(equalp 3 3.0) *→ true* 
(equalp 3.0 3.0) *→ true* 
(equalp #c(3 -4) #c(3 -4)) *→ true* 
(equalp #c(3 -4.0) #c(3 -4)) *→ true* 
(equalp (cons ’a ’b) (cons ’a ’c)) *→ false* 
(equalp (cons ’a ’b) (cons ’a ’b)) *→ true* 
(equalp #\A #\A) *→ true* 
(equalp #\A #\a) *→ true* 
(equalp "Foo" "Foo") *→ true* 
(equalp "Foo" (copy-seq "Foo")) *→ true* 
Data and Control 


(equalp "FOO" "foo") *→ true* 
(setq array1 (make-array 6 :element-type ’integer 
			 :initial-contents ’(1 1 1 3 5 7))) 
*→* #(1 1 1 3 5 7) 
(setq array2 (make-array 8 :element-type ’integer 
			 :initial-contents ’(1 1 1 3 5 7 2 6) 
			 :fill-pointer 6)) 
*→* #(1 1 1 3 5 7) 
(equalp array1 array2) *→ true* 
(setq vector1 (vector 1 1 1 3 5 7)) *→* #(1 1 1 3 5 7) 
(equalp array1 vector1) *→ true* 

```
**See Also:** 



<DictionaryLink styled={true} term={"eq"}><b>eq</b></DictionaryLink>, <DictionaryLink styled={true} term={"eql"}><b>eql</b></DictionaryLink>, <DictionaryLink styled={true} term={"equal"}><b>equal</b></DictionaryLink>, <DictionaryLink styled={true} term={"="}><b>=</b></DictionaryLink>, <DictionaryLink styled={true} term={"string"}><b>string=</b></DictionaryLink>, **string-equal**, <DictionaryLink styled={true} term={"char="}><b>char=</b></DictionaryLink>, <DictionaryLink styled={true} term={"char-equal"}><b>char-equal</b></DictionaryLink> 



**Notes:** 



<GlossaryTerm styled={true} term={"object"}><i>Object</i></GlossaryTerm> equality is not a concept for which there is a uniquely determined correct algorithm. The appropriateness of an equality predicate can be judged only in the context of the needs of some particular program. Although these functions take any type of argument and their names sound very generic, <DictionaryLink styled={true} term={"equal"}><b>equal</b></DictionaryLink> and <DictionaryLink styled={true} term={"equalp"}><b>equalp</b></DictionaryLink> are not appropriate for every application. 




**equalp** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"equalp"}><b>equalp</b></DictionaryLink> *x y → generalized-boolean* 



**Arguments and Values:** 



*x*—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 



*y*—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



Returns <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> if *x* and *y* are <DictionaryLink  term={"equal"}><b>equal</b></DictionaryLink>, or if they have components that are of the same <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> as each other and if those components are <DictionaryLink  term={"equalp"}><b>equalp</b></DictionaryLink>; specifically, <DictionaryLink  term={"equalp"}><b>equalp</b></DictionaryLink> returns <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> in the following cases: 



<GlossaryTerm  term={"character"}><i>Characters</i></GlossaryTerm> 



If two <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm> are <DictionaryLink  term={"char-equal"}><b>char-equal</b></DictionaryLink>. 



<GlossaryTerm  term={"number"}><i>Numbers</i></GlossaryTerm> 



If two <GlossaryTerm  term={"number"}><i>numbers</i></GlossaryTerm> are the <GlossaryTerm  term={"same"}><i>same</i></GlossaryTerm> under <DictionaryLink  term={"="}><b>=</b></DictionaryLink>. 



*Conses* 



If the two <GlossaryTerm  term={"car"}><i>cars</i></GlossaryTerm> in the *conses* are <DictionaryLink  term={"equalp"}><b>equalp</b></DictionaryLink> and the two <GlossaryTerm  term={"cdr"}><i>cdrs</i></GlossaryTerm> in the *conses* are <DictionaryLink  term={"equalp"}><b>equalp</b></DictionaryLink>. 



<GlossaryTerm  term={"array"}><i>Arrays</i></GlossaryTerm> 



If two <GlossaryTerm  term={"array"}><i>arrays</i></GlossaryTerm> have the same number of dimensions, the dimensions match, and the corresponding *active elements* are <DictionaryLink  term={"equalp"}><b>equalp</b></DictionaryLink>. The <GlossaryTerm  term={"type"}><i>types</i></GlossaryTerm> for which the <GlossaryTerm  term={"array"}><i>arrays</i></GlossaryTerm> are <GlossaryTerm  term={"specialized"}><i>specialized</i></GlossaryTerm> need not match; for example, a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> and a general <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> that happens to contain the same <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm> are <DictionaryLink  term={"equalp"}><b>equalp</b></DictionaryLink>. Because <DictionaryLink  term={"equalp"}><b>equalp</b></DictionaryLink> performs <GlossaryTerm  term={"element"}><i>element</i></GlossaryTerm>-by-<GlossaryTerm  term={"element"}><i>element</i></GlossaryTerm> comparisons of <GlossaryTerm  term={"string"}><i>strings</i></GlossaryTerm> and ignores the <GlossaryTerm  term={"case"}><i>case</i></GlossaryTerm> of <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm>, <GlossaryTerm  term={"case"}><i>case</i></GlossaryTerm> distinctions are ignored when <DictionaryLink  term={"equalp"}><b>equalp</b></DictionaryLink> compares <GlossaryTerm  term={"string"}><i>strings</i></GlossaryTerm>. 















<DictionaryLink  term={"equalp"}><b>equalp</b></DictionaryLink> 



<GlossaryTerm  term={"structure"}><i>Structures</i></GlossaryTerm> 



If two *structures S*<sub>1</sub> and *S*<sub>2</sub> have the same <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> and the value of each <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> in *S*<sub>1</sub> is the <GlossaryTerm  term={"same"}><i>same</i></GlossaryTerm> under <DictionaryLink  term={"equalp"}><b>equalp</b></DictionaryLink> as the value of the corresponding <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> in *S*<sub>2</sub>. 



<GlossaryTerm styled={true} term={"hash table"}><i>Hash Tables</i></GlossaryTerm> 



<DictionaryLink  term={"equalp"}><b>equalp</b></DictionaryLink> descends *hash-tables* by first comparing the count of entries and the :test function; if those are the same, it compares the keys of the tables using the :test function and then the values of the matching keys using <DictionaryLink  term={"equalp"}><b>equalp</b></DictionaryLink> recursively. 



<DictionaryLink  term={"equalp"}><b>equalp</b></DictionaryLink> does not descend any <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> other than the ones explicitly specified above. Figure 5–13 summarizes the information given in the previous list. In addition, the figure specifies the priority of the behavior of <DictionaryLink  term={"equalp"}><b>equalp</b></DictionaryLink>, with upper entries taking priority over lower ones. 



|**Type Behavior**|

| :- |

|<p><GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> uses <DictionaryLink  term={"="}><b>=</b></DictionaryLink> </p><p><GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> uses <DictionaryLink  term={"char-equal"}><b>char-equal</b></DictionaryLink> </p><p><GlossaryTerm  term={"cons"}><i>cons</i></GlossaryTerm> descends </p><p><GlossaryTerm styled={true} term={"bit vector"}><i>bit vector</i></GlossaryTerm> descends </p><p><GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> descends </p><p><GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> same as <DictionaryLink  term={"equal"}><b>equal</b></DictionaryLink> </p><p><GlossaryTerm  term={"structure"}><i>structure</i></GlossaryTerm> descends, as described above </p><p>Other <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> descends </p><p><GlossaryTerm styled={true} term={"hash table"}><i>hash table</i></GlossaryTerm> descends, as described above </p><p>Other <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> uses <DictionaryLink  term={"eq"}><b>eq</b></DictionaryLink></p>|





**Figure 5–13. Summary and priorities of behavior of equalp** 



**Examples:**
```lisp
(equalp ’a ’b) → false 
(equalp ’a ’a) → true 
(equalp 3 3) → true 
(equalp 3 3.0) → true 
(equalp 3.0 3.0) → true 
(equalp #c(3 -4) #c(3 -4)) → true 
(equalp #c(3 -4.0) #c(3 -4)) → true 
(equalp (cons ’a ’b) (cons ’a ’c)) → false 
(equalp (cons ’a ’b) (cons ’a ’b)) → true 
(equalp #\A #\A) → true 
(equalp #\A #\a) → true 
(equalp "Foo" "Foo") → true 
(equalp "Foo" (copy-seq "Foo")) → true 
Data and Control 

(equalp "FOO" "foo") → true 
(setq array1 (make-array 6 :element-type ’integer 
			 :initial-contents ’(1 1 1 3 5 7))) 
→ #(1 1 1 3 5 7) 
(setq array2 (make-array 8 :element-type ’integer 
			 :initial-contents ’(1 1 1 3 5 7 2 6) 
			 :fill-pointer 6)) 
→ #(1 1 1 3 5 7) 
(equalp array1 array2) → true 
(setq vector1 (vector 1 1 1 3 5 7)) → #(1 1 1 3 5 7) 
(equalp array1 vector1) → true 
```
**See Also:** 



<DictionaryLink  term={"eq"}><b>eq</b></DictionaryLink>, <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink>, <DictionaryLink  term={"equal"}><b>equal</b></DictionaryLink>, <DictionaryLink  term={"="}><b>=</b></DictionaryLink>, <DictionaryLink  term={"string"}><b>string=</b></DictionaryLink>, **string-equal**, <DictionaryLink  term={"char="}><b>char=</b></DictionaryLink>, <DictionaryLink  term={"char-equal"}><b>char-equal</b></DictionaryLink> 



**Notes:** 



<GlossaryTerm  term={"object"}><i>Object</i></GlossaryTerm> equality is not a concept for which there is a uniquely determined correct algorithm. The appropriateness of an equality predicate can be judged only in the context of the needs of some particular program. Although these functions take any type of argument and their names sound very generic, <DictionaryLink  term={"equal"}><b>equal</b></DictionaryLink> and <DictionaryLink  term={"equalp"}><b>equalp</b></DictionaryLink> are not appropriate for every application. 




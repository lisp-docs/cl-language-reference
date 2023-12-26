**equalp** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"equalp"}><b>equalp</b></DictionaryLink> *x y → generalized-boolean* 



**Arguments and Values:** 



*x*—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



*y*—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



Returns <ClLinks  term={"true"}><i>true</i></ClLinks> if *x* and *y* are <DictionaryLink  term={"equal"}><b>equal</b></DictionaryLink>, or if they have components that are of the same <ClLinks  term={"type"}><i>type</i></ClLinks> as each other and if those components are <DictionaryLink  term={"equalp"}><b>equalp</b></DictionaryLink>; specifically, <DictionaryLink  term={"equalp"}><b>equalp</b></DictionaryLink> returns <ClLinks  term={"true"}><i>true</i></ClLinks> in the following cases: 



<ClLinks  term={"character"}><i>Characters</i></ClLinks> 



If two <ClLinks  term={"character"}><i>characters</i></ClLinks> are <DictionaryLink  term={"char-equal"}><b>char-equal</b></DictionaryLink>. 



<ClLinks  term={"number"}><i>Numbers</i></ClLinks> 



If two <ClLinks  term={"number"}><i>numbers</i></ClLinks> are the <ClLinks  term={"same"}><i>same</i></ClLinks> under <ClLinks  term={"="}><b>=</b></ClLinks>. 



*Conses* 



If the two <ClLinks  term={"car"}><i>cars</i></ClLinks> in the *conses* are <DictionaryLink  term={"equalp"}><b>equalp</b></DictionaryLink> and the two <ClLinks  term={"cdr"}><i>cdrs</i></ClLinks> in the *conses* are <DictionaryLink  term={"equalp"}><b>equalp</b></DictionaryLink>. 



<ClLinks  term={"array"}><i>Arrays</i></ClLinks> 



If two <ClLinks  term={"array"}><i>arrays</i></ClLinks> have the same number of dimensions, the dimensions match, and the corresponding *active elements* are <DictionaryLink  term={"equalp"}><b>equalp</b></DictionaryLink>. The <ClLinks  term={"type"}><i>types</i></ClLinks> for which the <ClLinks  term={"array"}><i>arrays</i></ClLinks> are <ClLinks  term={"specialized"}><i>specialized</i></ClLinks> need not match; for example, a <ClLinks  term={"string"}><i>string</i></ClLinks> and a general <ClLinks  term={"array"}><i>array</i></ClLinks> that happens to contain the same <ClLinks  term={"character"}><i>characters</i></ClLinks> are <DictionaryLink  term={"equalp"}><b>equalp</b></DictionaryLink>. Because <DictionaryLink  term={"equalp"}><b>equalp</b></DictionaryLink> performs <ClLinks  term={"element"}><i>element</i></ClLinks>-by-<ClLinks  term={"element"}><i>element</i></ClLinks> comparisons of <ClLinks  term={"string"}><i>strings</i></ClLinks> and ignores the <ClLinks  term={"case"}><i>case</i></ClLinks> of <ClLinks  term={"character"}><i>characters</i></ClLinks>, <ClLinks  term={"case"}><i>case</i></ClLinks> distinctions are ignored when <DictionaryLink  term={"equalp"}><b>equalp</b></DictionaryLink> compares <ClLinks  term={"string"}><i>strings</i></ClLinks>. 















<DictionaryLink  term={"equalp"}><b>equalp</b></DictionaryLink> 



<ClLinks  term={"structure"}><i>Structures</i></ClLinks> 



If two *structures S*<sub>1</sub> and *S*<sub>2</sub> have the same <ClLinks  term={"class"}><i>class</i></ClLinks> and the value of each <ClLinks  term={"slot"}><i>slot</i></ClLinks> in *S*<sub>1</sub> is the <ClLinks  term={"same"}><i>same</i></ClLinks> under <DictionaryLink  term={"equalp"}><b>equalp</b></DictionaryLink> as the value of the corresponding <ClLinks  term={"slot"}><i>slot</i></ClLinks> in *S*<sub>2</sub>. 



<GlossaryTerm styled={true} term={"hash table"}><i>Hash Tables</i></GlossaryTerm> 



<DictionaryLink  term={"equalp"}><b>equalp</b></DictionaryLink> descends *hash-tables* by first comparing the count of entries and the :test function; if those are the same, it compares the keys of the tables using the :test function and then the values of the matching keys using <DictionaryLink  term={"equalp"}><b>equalp</b></DictionaryLink> recursively. 



<DictionaryLink  term={"equalp"}><b>equalp</b></DictionaryLink> does not descend any <ClLinks  term={"object"}><i>objects</i></ClLinks> other than the ones explicitly specified above. Figure 5–13 summarizes the information given in the previous list. In addition, the figure specifies the priority of the behavior of <DictionaryLink  term={"equalp"}><b>equalp</b></DictionaryLink>, with upper entries taking priority over lower ones. 



|**Type Behavior**|

| :- |

|<p><ClLinks  term={"number"}><i>number</i></ClLinks> uses <ClLinks  term={"="}><b>=</b></ClLinks> </p><p><ClLinks  term={"character"}><i>character</i></ClLinks> uses <DictionaryLink  term={"char-equal"}><b>char-equal</b></DictionaryLink> </p><p><ClLinks  term={"cons"}><i>cons</i></ClLinks> descends </p><p><GlossaryTerm styled={true} term={"bit vector"}><i>bit vector</i></GlossaryTerm> descends </p><p><ClLinks  term={"string"}><i>string</i></ClLinks> descends </p><p><ClLinks  term={"pathname"}><i>pathname</i></ClLinks> same as <DictionaryLink  term={"equal"}><b>equal</b></DictionaryLink> </p><p><ClLinks  term={"structure"}><i>structure</i></ClLinks> descends, as described above </p><p>Other <ClLinks  term={"array"}><i>array</i></ClLinks> descends </p><p><GlossaryTerm styled={true} term={"hash table"}><i>hash table</i></GlossaryTerm> descends, as described above </p><p>Other <ClLinks  term={"object"}><i>object</i></ClLinks> uses <DictionaryLink  term={"eq"}><b>eq</b></DictionaryLink></p>|





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



<DictionaryLink  term={"eq"}><b>eq</b></DictionaryLink>, <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink>, <DictionaryLink  term={"equal"}><b>equal</b></DictionaryLink>, <ClLinks  term={"="}><b>=</b></ClLinks>, <ClLinks  term={"string"}><b>string=</b></ClLinks>, **string-equal**, <ClLinks  term={"char="}><b>char=</b></ClLinks>, <DictionaryLink  term={"char-equal"}><b>char-equal</b></DictionaryLink> 



**Notes:** 



<ClLinks  term={"object"}><i>Object</i></ClLinks> equality is not a concept for which there is a uniquely determined correct algorithm. The appropriateness of an equality predicate can be judged only in the context of the needs of some particular program. Although these functions take any type of argument and their names sound very generic, <DictionaryLink  term={"equal"}><b>equal</b></DictionaryLink> and <DictionaryLink  term={"equalp"}><b>equalp</b></DictionaryLink> are not appropriate for every application. 




**equalp** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"equalp"}><b>equalp</b></ClLinks> *x y → generalized-boolean* 



**Arguments and Values:** 



*x*—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



*y*—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if *x* and *y* are <ClLinks styled={true} term={"equal"}><b>equal</b></ClLinks>, or if they have components that are of the same <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> as each other and if those components are <ClLinks styled={true} term={"equalp"}><b>equalp</b></ClLinks>; specifically, <ClLinks styled={true} term={"equalp"}><b>equalp</b></ClLinks> returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> in the following cases: 



<ClLinks styled={true} term={"character"}><i>Characters</i></ClLinks> 



If two <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks> are <ClLinks styled={true} term={"char-equal"}><b>char-equal</b></ClLinks>. 



<ClLinks styled={true} term={"number"}><i>Numbers</i></ClLinks> 



If two <ClLinks styled={true} term={"number"}><i>numbers</i></ClLinks> are the <ClLinks styled={true} term={"same"}><i>same</i></ClLinks> under <ClLinks styled={true} term={"="}><b>=</b></ClLinks>. 



*Conses* 



If the two <ClLinks styled={true} term={"car"}><i>cars</i></ClLinks> in the *conses* are <ClLinks styled={true} term={"equalp"}><b>equalp</b></ClLinks> and the two <ClLinks styled={true} term={"cdr"}><i>cdrs</i></ClLinks> in the *conses* are <ClLinks styled={true} term={"equalp"}><b>equalp</b></ClLinks>. 



<ClLinks styled={true} term={"array"}><i>Arrays</i></ClLinks> 



If two <ClLinks styled={true} term={"array"}><i>arrays</i></ClLinks> have the same number of dimensions, the dimensions match, and the corresponding *active elements* are <ClLinks styled={true} term={"equalp"}><b>equalp</b></ClLinks>. The <ClLinks styled={true} term={"type"}><i>types</i></ClLinks> for which the <ClLinks styled={true} term={"array"}><i>arrays</i></ClLinks> are <ClLinks styled={true} term={"specialized"}><i>specialized</i></ClLinks> need not match; for example, a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> and a general <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> that happens to contain the same <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks> are <ClLinks styled={true} term={"equalp"}><b>equalp</b></ClLinks>. Because <ClLinks styled={true} term={"equalp"}><b>equalp</b></ClLinks> performs <ClLinks styled={true} term={"element"}><i>element</i></ClLinks>-by-<ClLinks styled={true} term={"element"}><i>element</i></ClLinks> comparisons of <ClLinks styled={true} term={"string"}><i>strings</i></ClLinks> and ignores the <ClLinks styled={true} term={"case"}><i>case</i></ClLinks> of <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks>, <ClLinks styled={true} term={"case"}><i>case</i></ClLinks> distinctions are ignored when <ClLinks styled={true} term={"equalp"}><b>equalp</b></ClLinks> compares <ClLinks styled={true} term={"string"}><i>strings</i></ClLinks>. 















<ClLinks styled={true} term={"equalp"}><b>equalp</b></ClLinks> 



<ClLinks styled={true} term={"structure"}><i>Structures</i></ClLinks> 



If two *structures S*<sub>1</sub> and *S*<sub>2</sub> have the same <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> and the value of each <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> in *S*<sub>1</sub> is the <ClLinks styled={true} term={"same"}><i>same</i></ClLinks> under <ClLinks styled={true} term={"equalp"}><b>equalp</b></ClLinks> as the value of the corresponding <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> in *S*<sub>2</sub>. 



*Hash Tables* 



<ClLinks styled={true} term={"equalp"}><b>equalp</b></ClLinks> descends *hash-tables* by first comparing the count of entries and the :test function; if those are the same, it compares the keys of the tables using the :test function and then the values of the matching keys using <ClLinks styled={true} term={"equalp"}><b>equalp</b></ClLinks> recursively. 



<ClLinks styled={true} term={"equalp"}><b>equalp</b></ClLinks> does not descend any <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> other than the ones explicitly specified above. Figure 5–13 summarizes the information given in the previous list. In addition, the figure specifies the priority of the behavior of <ClLinks styled={true} term={"equalp"}><b>equalp</b></ClLinks>, with upper entries taking priority over lower ones. 



|**Type Behavior**|

| :- |

|<p><ClLinks styled={true} term={"number"}><i>number</i></ClLinks> uses <ClLinks styled={true} term={"="}><b>=</b></ClLinks> </p><p><ClLinks styled={true} term={"character"}><i>character</i></ClLinks> uses <ClLinks styled={true} term={"char-equal"}><b>char-equal</b></ClLinks> </p><p><ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks> descends </p><p>*bit vector* descends </p><p><ClLinks styled={true} term={"string"}><i>string</i></ClLinks> descends </p><p><ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> same as <ClLinks styled={true} term={"equal"}><b>equal</b></ClLinks> </p><p><ClLinks styled={true} term={"structure"}><i>structure</i></ClLinks> descends, as described above </p><p>Other <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> descends </p><p>*hash table* descends, as described above </p><p>Other <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> uses <ClLinks styled={true} term={"eq"}><b>eq</b></ClLinks></p>|





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



<ClLinks styled={true} term={"eq"}><b>eq</b></ClLinks>, <ClLinks styled={true} term={"eql"}><b>eql</b></ClLinks>, <ClLinks styled={true} term={"equal"}><b>equal</b></ClLinks>, <ClLinks styled={true} term={"="}><b>=</b></ClLinks>, <ClLinks styled={true} term={"string"}><b>string=</b></ClLinks>, **string-equal**, <ClLinks styled={true} term={"char="}><b>char=</b></ClLinks>, <ClLinks styled={true} term={"char-equal"}><b>char-equal</b></ClLinks> 



**Notes:** 



<ClLinks styled={true} term={"object"}><i>Object</i></ClLinks> equality is not a concept for which there is a uniquely determined correct algorithm. The appropriateness of an equality predicate can be judged only in the context of the needs of some particular program. Although these functions take any type of argument and their names sound very generic, <ClLinks styled={true} term={"equal"}><b>equal</b></ClLinks> and <ClLinks styled={true} term={"equalp"}><b>equalp</b></ClLinks> are not appropriate for every application. 




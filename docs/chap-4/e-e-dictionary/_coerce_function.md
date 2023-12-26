**coerce** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"coerce"}><b>coerce</b></DictionaryLink> *object result-type → result* 



**Arguments and Values:** 



<ClLinks  term={"object"}><i>object</i></ClLinks>—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



*result-type*—a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> . 



*result*—an <ClLinks  term={"object"}><i>object</i></ClLinks>, of *type result-type* except in situations described in Section 12.1.5.3 (Rule of Canonical Representation for Complex Rationals). 



**Description:** 



<ClLinks  term={"coerce"}><i>Coerces</i></ClLinks> the <ClLinks  term={"object"}><i>object</i></ClLinks> to *type result-type*. 



If <ClLinks  term={"object"}><i>object</i></ClLinks> is already of *type result-type*, the <ClLinks  term={"object"}><i>object</i></ClLinks> itself is returned, regardless of whether it would have been possible in general to coerce an <ClLinks  term={"object"}><i>object</i></ClLinks> of some other <ClLinks  term={"type"}><i>type</i></ClLinks> to *result-type*. 



Otherwise, the <ClLinks  term={"object"}><i>object</i></ClLinks> is *coerced* to *type result-type* according to the following rules: 











<DictionaryLink  term={"coerce"}><b>coerce</b></DictionaryLink> 



<DictionaryLink  term={"sequence"}><b>sequence</b></DictionaryLink> 



If the *result-type* is a <GlossaryTerm styled={true} term={"recognizable subtype"}><i>recognizable subtype</i></GlossaryTerm> of <DictionaryLink  term={"list"}><b>list</b></DictionaryLink>, and the <ClLinks  term={"object"}><i>object</i></ClLinks> is a *sequence*, then the *result* is a <ClLinks  term={"list"}><i>list</i></ClLinks> that has the *same elements* as <ClLinks  term={"object"}><i>object</i></ClLinks>. 



If the *result-type* is a <GlossaryTerm styled={true} term={"recognizable subtype"}><i>recognizable subtype</i></GlossaryTerm> of <DictionaryLink  term={"vector"}><b>vector</b></DictionaryLink>, and the <ClLinks  term={"object"}><i>object</i></ClLinks> is a *sequence*, then the *result* is a <ClLinks  term={"vector"}><i>vector</i></ClLinks> that has the *same elements* as <ClLinks  term={"object"}><i>object</i></ClLinks>. If *result-type* is a specialized <ClLinks  term={"type"}><i>type</i></ClLinks>, the *result* has an <GlossaryTerm styled={true} term={"actual array element type"}><i>actual array element type</i></GlossaryTerm> that is the result of *upgrading* the element type part of that *specialized type*. If no element type is specified, the element type defaults to <DictionaryLink  term={"t"}><b>t</b></DictionaryLink>. If the <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> cannot determine the element type, an error is signaled. 



<DictionaryLink  term={"character"}><b>character</b></DictionaryLink> 



If the *result-type* is <DictionaryLink  term={"character"}><b>character</b></DictionaryLink> and the <ClLinks  term={"object"}><i>object</i></ClLinks> is a <GlossaryTerm styled={true} term={"character designator"}><i>character designator</i></GlossaryTerm> , the *result* is the <ClLinks  term={"character"}><i>character</i></ClLinks> it denotes. 



<DictionaryLink  term={"complex"}><b>complex</b></DictionaryLink> 



If the *result-type* is <DictionaryLink  term={"complex"}><b>complex</b></DictionaryLink> and the <ClLinks  term={"object"}><i>object</i></ClLinks> is a *real*, then the *result* is obtained by constructing a <ClLinks  term={"complex"}><i>complex</i></ClLinks> whose real part is the <ClLinks  term={"object"}><i>object</i></ClLinks> and whose imaginary part is the result of *coercing* an *integer* zero to the <ClLinks  term={"type"}><i>type</i></ClLinks> of the <ClLinks  term={"object"}><i>object</i></ClLinks> (using <DictionaryLink  term={"coerce"}><b>coerce</b></DictionaryLink>). (If the real part is a <ClLinks  term={"rational"}><i>rational</i></ClLinks>, however, then the result must be represented as a <ClLinks  term={"rational"}><i>rational</i></ClLinks> rather than a <ClLinks  term={"complex"}><i>complex</i></ClLinks> ; see Section 12.1.5.3 (Rule of Canonical Representation for Complex Rationals). So, for example, (coerce 3 ’complex) is permissible, but will return 3, which is not a <ClLinks  term={"complex"}><i>complex</i></ClLinks> .) 



<DictionaryLink  term={"float"}><b>float</b></DictionaryLink> 



If the *result-type* is any of <DictionaryLink  term={"float"}><b>float</b></DictionaryLink>, <DictionaryLink  term={"short-float"}><b>short-float</b></DictionaryLink>, <DictionaryLink  term={"single-float"}><b>single-float</b></DictionaryLink>, <DictionaryLink  term={"double-float"}><b>double-float</b></DictionaryLink>, <DictionaryLink  term={"long-float"}><b>long-float</b></DictionaryLink>, and the <ClLinks  term={"object"}><i>object</i></ClLinks> is a *real*, then the *result* is a <ClLinks  term={"float"}><i>float</i></ClLinks> of *type result-type* which is equal in sign and magnitude to the <ClLinks  term={"object"}><i>object</i></ClLinks> to whatever degree of representational precision is permitted by that <ClLinks  term={"float"}><i>float</i></ClLinks> representation. (If the *result-type* is <DictionaryLink  term={"float"}><b>float</b></DictionaryLink> and <ClLinks  term={"object"}><i>object</i></ClLinks> is not already a <ClLinks  term={"float"}><i>float</i></ClLinks>, then the *result* is a <GlossaryTerm styled={true} term={"single float"}><i>single float</i></GlossaryTerm>.) 



<DictionaryLink  term={"function"}><b>function</b></DictionaryLink> 



If the *result-type* is <DictionaryLink  term={"function"}><b>function</b></DictionaryLink>, and <ClLinks  term={"object"}><i>object</i></ClLinks> is any <GlossaryTerm styled={true} term={"function name"}><i>function name</i></GlossaryTerm> that is <ClLinks  term={"fbound"}><i>fbound</i></ClLinks> but that is globally defined neither as a <GlossaryTerm styled={true} term={"macro name"}><i>macro name</i></GlossaryTerm> nor as a <GlossaryTerm styled={true} term={"special operator"}><i>special operator</i></GlossaryTerm> , then the *result* is the <GlossaryTerm styled={true} term={"functional value"}><i>functional value</i></GlossaryTerm> of <ClLinks  term={"object"}><i>object</i></ClLinks>. 



If the *result-type* is <DictionaryLink  term={"function"}><b>function</b></DictionaryLink>, and <ClLinks  term={"object"}><i>object</i></ClLinks> is a <GlossaryTerm styled={true} term={"lambda expression"}><i>lambda expression</i></GlossaryTerm>, then the *result* is a <ClLinks  term={"closure"}><i>closure</i></ClLinks> of <ClLinks  term={"object"}><i>object</i></ClLinks> in the <GlossaryTerm styled={true} term={"null lexical environment"}><i>null lexical environment</i></GlossaryTerm>. 



<DictionaryLink  term={"t"}><b>t</b></DictionaryLink> 



Any <ClLinks  term={"object"}><i>object</i></ClLinks> can be *coerced* to an <ClLinks  term={"object"}><i>object</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"t"}><b>t</b></DictionaryLink>. In this case, the <ClLinks  term={"object"}><i>object</i></ClLinks> is simply returned. 

**Examples:**
```lisp
(coerce ’(a b c) ’vector) → #(A B C)  
(coerce ’a ’character) → #\A 
(coerce 4.56 ’complex) → #C(4.56 0.0) 
(coerce 4.5s0 ’complex) → #C(4.5s0 0.0s0) 
(coerce 7/2 ’complex) → 7/2 
(coerce 0 ’short-float) → 0.0s0 
(coerce 3.5L0 ’float) → 3.5L0 
(coerce 7/2 ’float) → 3.5 
(coerce (cons 1 2) t) → (1 . 2) 
All the following *forms* should signal an error: 
(coerce ’(a b c) ’(vector \* 4)) 
(coerce #(a b c) ’(vector \* 4)) 
(coerce ’(a b c) ’(vector \* 2)) 
(coerce #(a b c) ’(vector \* 2)) 
(coerce "foo" ’(string 2)) 
(coerce #(#\a #\b #\c) ’(string 2)) 
(coerce ’(0 1) ’(simple-bit-vector 3)) 
```
**Exceptional Situations:** 



If a coercion is not possible, an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> is signaled. 



(coerce x ’nil) always signals an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink>. 



An error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"error"}><b>error</b></DictionaryLink> is signaled if the *result-type* is <DictionaryLink  term={"function"}><b>function</b></DictionaryLink> but <ClLinks  term={"object"}><i>object</i></ClLinks> is a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> that is not <ClLinks  term={"fbound"}><i>fbound</i></ClLinks> or if the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> names a <ClLinks  term={"macro"}><i>macro</i></ClLinks> or a <GlossaryTerm styled={true} term={"special operator"}><i>special operator</i></GlossaryTerm> . 



An error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> should be signaled if *result-type* specifies the number of elements and <ClLinks  term={"object"}><i>object</i></ClLinks> is of a different length. 



**See Also:** 



<DictionaryLink  term={"rational"}><b>rational</b></DictionaryLink>, <DictionaryLink  term={"floor"}><b>floor</b></DictionaryLink>, <DictionaryLink  term={"char-code"}><b>char-code</b></DictionaryLink>, <DictionaryLink  term={"char-int"}><b>char-int</b></DictionaryLink> 



**Notes:** 



Coercions from <ClLinks  term={"float"}><i>floats</i></ClLinks> to <ClLinks  term={"rational"}><i>rationals</i></ClLinks> and from <ClLinks  term={"ratio"}><i>ratios</i></ClLinks> to *integers* are not provided because of rounding problems. 



(coerce x ’t) *≡* (identity x) *≡* x  







<DictionaryLink  term={"deftype"}><b>deftype</b></DictionaryLink> 




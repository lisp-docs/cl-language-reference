**coerce** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"coerce"}><b>coerce</b></DictionaryLink> *object result-type → result* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



*result-type*—a *type specifier* . 



*result*—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>, of *type result-type* except in situations described in Section 12.1.5.3 (Rule of Canonical Representation for Complex Rationals). 



**Description:** 



<GlossaryTerm styled={true} term={"coerce"}><i>Coerces</i></GlossaryTerm> the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> to *type result-type*. 



If <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is already of *type result-type*, the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> itself is returned, regardless of whether it would have been possible in general to coerce an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of some other <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> to *result-type*. 



Otherwise, the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is *coerced* to *type result-type* according to the following rules: 











<DictionaryLink styled={true} term={"coerce"}><b>coerce</b></DictionaryLink> 



<DictionaryLink styled={true} term={"sequence"}><b>sequence</b></DictionaryLink> 



If the *result-type* is a *recognizable subtype* of <DictionaryLink styled={true} term={"list"}><b>list</b></DictionaryLink>, and the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is a *sequence*, then the *result* is a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> that has the *same elements* as <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



If the *result-type* is a *recognizable subtype* of <DictionaryLink styled={true} term={"vector"}><b>vector</b></DictionaryLink>, and the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is a *sequence*, then the *result* is a <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> that has the *same elements* as <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. If *result-type* is a specialized <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>, the *result* has an *actual array element type* that is the result of *upgrading* the element type part of that *specialized type*. If no element type is specified, the element type defaults to <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink>. If the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> cannot determine the element type, an error is signaled. 



<DictionaryLink styled={true} term={"character"}><b>character</b></DictionaryLink> 



If the *result-type* is <DictionaryLink styled={true} term={"character"}><b>character</b></DictionaryLink> and the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is a *character designator* , the *result* is the <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> it denotes. 



<DictionaryLink styled={true} term={"complex"}><b>complex</b></DictionaryLink> 



If the *result-type* is <DictionaryLink styled={true} term={"complex"}><b>complex</b></DictionaryLink> and the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is a *real*, then the *result* is obtained by constructing a <GlossaryTerm styled={true} term={"complex"}><i>complex</i></GlossaryTerm> whose real part is the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> and whose imaginary part is the result of *coercing* an *integer* zero to the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> (using <DictionaryLink styled={true} term={"coerce"}><b>coerce</b></DictionaryLink>). (If the real part is a <GlossaryTerm styled={true} term={"rational"}><i>rational</i></GlossaryTerm>, however, then the result must be represented as a <GlossaryTerm styled={true} term={"rational"}><i>rational</i></GlossaryTerm> rather than a <GlossaryTerm styled={true} term={"complex"}><i>complex</i></GlossaryTerm> ; see Section 12.1.5.3 (Rule of Canonical Representation for Complex Rationals). So, for example, (coerce 3 ’complex) is permissible, but will return 3, which is not a <GlossaryTerm styled={true} term={"complex"}><i>complex</i></GlossaryTerm> .) 



<DictionaryLink styled={true} term={"float"}><b>float</b></DictionaryLink> 



If the *result-type* is any of <DictionaryLink styled={true} term={"float"}><b>float</b></DictionaryLink>, <DictionaryLink styled={true} term={"short-float"}><b>short-float</b></DictionaryLink>, <DictionaryLink styled={true} term={"single-float"}><b>single-float</b></DictionaryLink>, <DictionaryLink styled={true} term={"double-float"}><b>double-float</b></DictionaryLink>, <DictionaryLink styled={true} term={"long-float"}><b>long-float</b></DictionaryLink>, and the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is a *real*, then the *result* is a <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm> of *type result-type* which is equal in sign and magnitude to the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> to whatever degree of representational precision is permitted by that <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm> representation. (If the *result-type* is <DictionaryLink styled={true} term={"float"}><b>float</b></DictionaryLink> and <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is not already a <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm>, then the *result* is a *single float*.) 



<DictionaryLink styled={true} term={"function"}><b>function</b></DictionaryLink> 



If the *result-type* is <DictionaryLink styled={true} term={"function"}><b>function</b></DictionaryLink>, and <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is any *function name* that is <GlossaryTerm styled={true} term={"fbound"}><i>fbound</i></GlossaryTerm> but that is globally defined neither as a *macro name* nor as a *special operator* , then the *result* is the *functional value* of <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



If the *result-type* is <DictionaryLink styled={true} term={"function"}><b>function</b></DictionaryLink>, and <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is a *lambda expression*, then the *result* is a <GlossaryTerm styled={true} term={"closure"}><i>closure</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> in the *null lexical environment*. 



<DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> 



Any <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> can be *coerced* to an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink>. In this case, the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is simply returned. **Examples:**
```lisp

(coerce ’(a b c) ’vector) *→* #(A B C)  

(coerce ’a ’character) *→* #\A 
(coerce 4.56 ’complex) *→* #C(4.56 0.0) 
(coerce 4.5s0 ’complex) *→* #C(4.5s0 0.0s0) 
(coerce 7/2 ’complex) *→* 7/2 
(coerce 0 ’short-float) *→* 0.0s0 
(coerce 3.5L0 ’float) *→* 3.5L0 
(coerce 7/2 ’float) *→* 3.5 
(coerce (cons 1 2) t) *→* (1 . 2) 
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



If a coercion is not possible, an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> is signaled. 



(coerce x ’nil) always signals an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink>. 



An error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink> is signaled if the *result-type* is <DictionaryLink styled={true} term={"function"}><b>function</b></DictionaryLink> but <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> that is not <GlossaryTerm styled={true} term={"fbound"}><i>fbound</i></GlossaryTerm> or if the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> names a <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm> or a *special operator* . 



An error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> should be signaled if *result-type* specifies the number of elements and <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is of a different length. 



**See Also:** 



<DictionaryLink styled={true} term={"rational"}><b>rational</b></DictionaryLink>, <DictionaryLink styled={true} term={"floor"}><b>floor</b></DictionaryLink>, <DictionaryLink styled={true} term={"char-code"}><b>char-code</b></DictionaryLink>, <DictionaryLink styled={true} term={"char-int"}><b>char-int</b></DictionaryLink> 



**Notes:** 



Coercions from <GlossaryTerm styled={true} term={"float"}><i>floats</i></GlossaryTerm> to <GlossaryTerm styled={true} term={"rational"}><i>rationals</i></GlossaryTerm> and from <GlossaryTerm styled={true} term={"ratio"}><i>ratios</i></GlossaryTerm> to *integers* are not provided because of rounding problems. 



(coerce x ’t) *≡* (identity x) *≡* x  







<DictionaryLink styled={true} term={"deftype"}><b>deftype</b></DictionaryLink> 




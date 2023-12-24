**coerce** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"coerce"}><b>coerce</b></ClLinks> *object result-type → result* 



**Arguments and Values:** 



<ClLinks styled={true} term={"object"}><i>object</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



*result-type*—a *type specifier* . 



*result*—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>, of *type result-type* except in situations described in Section 12.1.5.3 (Rule of Canonical Representation for Complex Rationals). 



**Description:** 



<ClLinks styled={true} term={"coerce"}><i>Coerces</i></ClLinks> the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> to *type result-type*. 



If <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is already of *type result-type*, the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> itself is returned, regardless of whether it would have been possible in general to coerce an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> of some other <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> to *result-type*. 



Otherwise, the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is *coerced* to *type result-type* according to the following rules: 











<ClLinks styled={true} term={"coerce"}><b>coerce</b></ClLinks> 



<ClLinks styled={true} term={"sequence"}><b>sequence</b></ClLinks> 



If the *result-type* is a *recognizable subtype* of <ClLinks styled={true} term={"list"}><b>list</b></ClLinks>, and the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is a *sequence*, then the *result* is a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> that has the *same elements* as <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



If the *result-type* is a *recognizable subtype* of <ClLinks styled={true} term={"vector"}><b>vector</b></ClLinks>, and the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is a *sequence*, then the *result* is a <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> that has the *same elements* as <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. If *result-type* is a specialized <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>, the *result* has an *actual array element type* that is the result of *upgrading* the element type part of that *specialized type*. If no element type is specified, the element type defaults to <ClLinks styled={true} term={"t"}><b>t</b></ClLinks>. If the <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> cannot determine the element type, an error is signaled. 



<ClLinks styled={true} term={"character"}><b>character</b></ClLinks> 



If the *result-type* is <ClLinks styled={true} term={"character"}><b>character</b></ClLinks> and the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is a *character designator* , the *result* is the <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> it denotes. 



<ClLinks styled={true} term={"complex"}><b>complex</b></ClLinks> 



If the *result-type* is <ClLinks styled={true} term={"complex"}><b>complex</b></ClLinks> and the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is a *real*, then the *result* is obtained by constructing a <ClLinks styled={true} term={"complex"}><i>complex</i></ClLinks> whose real part is the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> and whose imaginary part is the result of *coercing* an *integer* zero to the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> of the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> (using <ClLinks styled={true} term={"coerce"}><b>coerce</b></ClLinks>). (If the real part is a <ClLinks styled={true} term={"rational"}><i>rational</i></ClLinks>, however, then the result must be represented as a <ClLinks styled={true} term={"rational"}><i>rational</i></ClLinks> rather than a <ClLinks styled={true} term={"complex"}><i>complex</i></ClLinks> ; see Section 12.1.5.3 (Rule of Canonical Representation for Complex Rationals). So, for example, (coerce 3 ’complex) is permissible, but will return 3, which is not a <ClLinks styled={true} term={"complex"}><i>complex</i></ClLinks> .) 



<ClLinks styled={true} term={"float"}><b>float</b></ClLinks> 



If the *result-type* is any of <ClLinks styled={true} term={"float"}><b>float</b></ClLinks>, <ClLinks styled={true} term={"short-float"}><b>short-float</b></ClLinks>, <ClLinks styled={true} term={"single-float"}><b>single-float</b></ClLinks>, <ClLinks styled={true} term={"double-float"}><b>double-float</b></ClLinks>, <ClLinks styled={true} term={"long-float"}><b>long-float</b></ClLinks>, and the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is a *real*, then the *result* is a <ClLinks styled={true} term={"float"}><i>float</i></ClLinks> of *type result-type* which is equal in sign and magnitude to the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> to whatever degree of representational precision is permitted by that <ClLinks styled={true} term={"float"}><i>float</i></ClLinks> representation. (If the *result-type* is <ClLinks styled={true} term={"float"}><b>float</b></ClLinks> and <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is not already a <ClLinks styled={true} term={"float"}><i>float</i></ClLinks>, then the *result* is a *single float*.) 



<ClLinks styled={true} term={"function"}><b>function</b></ClLinks> 



If the *result-type* is <ClLinks styled={true} term={"function"}><b>function</b></ClLinks>, and <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is any *function name* that is <ClLinks styled={true} term={"fbound"}><i>fbound</i></ClLinks> but that is globally defined neither as a *macro name* nor as a *special operator* , then the *result* is the *functional value* of <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



If the *result-type* is <ClLinks styled={true} term={"function"}><b>function</b></ClLinks>, and <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is a *lambda expression*, then the *result* is a <ClLinks styled={true} term={"closure"}><i>closure</i></ClLinks> of <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> in the *null lexical environment*. 



<ClLinks styled={true} term={"t"}><b>t</b></ClLinks> 



Any <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> can be *coerced* to an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"t"}><b>t</b></ClLinks>. In this case, the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is simply returned. 

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



If a coercion is not possible, an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> is signaled. 



(coerce x ’nil) always signals an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks>. 



An error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"error"}><b>error</b></ClLinks> is signaled if the *result-type* is <ClLinks styled={true} term={"function"}><b>function</b></ClLinks> but <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> that is not <ClLinks styled={true} term={"fbound"}><i>fbound</i></ClLinks> or if the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> names a <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks> or a *special operator* . 



An error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> should be signaled if *result-type* specifies the number of elements and <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is of a different length. 



**See Also:** 



<ClLinks styled={true} term={"rational"}><b>rational</b></ClLinks>, <ClLinks styled={true} term={"floor"}><b>floor</b></ClLinks>, <ClLinks styled={true} term={"char-code"}><b>char-code</b></ClLinks>, <ClLinks styled={true} term={"char-int"}><b>char-int</b></ClLinks> 



**Notes:** 



Coercions from <ClLinks styled={true} term={"float"}><i>floats</i></ClLinks> to <ClLinks styled={true} term={"rational"}><i>rationals</i></ClLinks> and from <ClLinks styled={true} term={"ratio"}><i>ratios</i></ClLinks> to *integers* are not provided because of rounding problems. 



(coerce x ’t) *≡* (identity x) *≡* x  







<ClLinks styled={true} term={"deftype"}><b>deftype</b></ClLinks> 




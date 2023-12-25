**coerce** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"coerce"}><b>coerce</b></ClLinks> *object result-type → result* 



**Arguments and Values:** 



<ClLinks  term={"object"}><i>object</i></ClLinks>—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



*result-type*—a *type specifier* . 



*result*—an <ClLinks  term={"object"}><i>object</i></ClLinks>, of *type result-type* except in situations described in Section 12.1.5.3 (Rule of Canonical Representation for Complex Rationals). 



**Description:** 



<ClLinks  term={"coerce"}><i>Coerces</i></ClLinks> the <ClLinks  term={"object"}><i>object</i></ClLinks> to *type result-type*. 



If <ClLinks  term={"object"}><i>object</i></ClLinks> is already of *type result-type*, the <ClLinks  term={"object"}><i>object</i></ClLinks> itself is returned, regardless of whether it would have been possible in general to coerce an <ClLinks  term={"object"}><i>object</i></ClLinks> of some other <ClLinks  term={"type"}><i>type</i></ClLinks> to *result-type*. 



Otherwise, the <ClLinks  term={"object"}><i>object</i></ClLinks> is *coerced* to *type result-type* according to the following rules: 











<ClLinks  term={"coerce"}><b>coerce</b></ClLinks> 



<ClLinks  term={"sequence"}><b>sequence</b></ClLinks> 



If the *result-type* is a *recognizable subtype* of <ClLinks  term={"list"}><b>list</b></ClLinks>, and the <ClLinks  term={"object"}><i>object</i></ClLinks> is a *sequence*, then the *result* is a <ClLinks  term={"list"}><i>list</i></ClLinks> that has the *same elements* as <ClLinks  term={"object"}><i>object</i></ClLinks>. 



If the *result-type* is a *recognizable subtype* of <ClLinks  term={"vector"}><b>vector</b></ClLinks>, and the <ClLinks  term={"object"}><i>object</i></ClLinks> is a *sequence*, then the *result* is a <ClLinks  term={"vector"}><i>vector</i></ClLinks> that has the *same elements* as <ClLinks  term={"object"}><i>object</i></ClLinks>. If *result-type* is a specialized <ClLinks  term={"type"}><i>type</i></ClLinks>, the *result* has an *actual array element type* that is the result of *upgrading* the element type part of that *specialized type*. If no element type is specified, the element type defaults to <ClLinks  term={"t"}><b>t</b></ClLinks>. If the <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> cannot determine the element type, an error is signaled. 



<ClLinks  term={"character"}><b>character</b></ClLinks> 



If the *result-type* is <ClLinks  term={"character"}><b>character</b></ClLinks> and the <ClLinks  term={"object"}><i>object</i></ClLinks> is a *character designator* , the *result* is the <ClLinks  term={"character"}><i>character</i></ClLinks> it denotes. 



<ClLinks  term={"complex"}><b>complex</b></ClLinks> 



If the *result-type* is <ClLinks  term={"complex"}><b>complex</b></ClLinks> and the <ClLinks  term={"object"}><i>object</i></ClLinks> is a *real*, then the *result* is obtained by constructing a <ClLinks  term={"complex"}><i>complex</i></ClLinks> whose real part is the <ClLinks  term={"object"}><i>object</i></ClLinks> and whose imaginary part is the result of *coercing* an *integer* zero to the <ClLinks  term={"type"}><i>type</i></ClLinks> of the <ClLinks  term={"object"}><i>object</i></ClLinks> (using <ClLinks  term={"coerce"}><b>coerce</b></ClLinks>). (If the real part is a <ClLinks  term={"rational"}><i>rational</i></ClLinks>, however, then the result must be represented as a <ClLinks  term={"rational"}><i>rational</i></ClLinks> rather than a <ClLinks  term={"complex"}><i>complex</i></ClLinks> ; see Section 12.1.5.3 (Rule of Canonical Representation for Complex Rationals). So, for example, (coerce 3 ’complex) is permissible, but will return 3, which is not a <ClLinks  term={"complex"}><i>complex</i></ClLinks> .) 



<ClLinks  term={"float"}><b>float</b></ClLinks> 



If the *result-type* is any of <ClLinks  term={"float"}><b>float</b></ClLinks>, <ClLinks  term={"short-float"}><b>short-float</b></ClLinks>, <ClLinks  term={"single-float"}><b>single-float</b></ClLinks>, <ClLinks  term={"double-float"}><b>double-float</b></ClLinks>, <ClLinks  term={"long-float"}><b>long-float</b></ClLinks>, and the <ClLinks  term={"object"}><i>object</i></ClLinks> is a *real*, then the *result* is a <ClLinks  term={"float"}><i>float</i></ClLinks> of *type result-type* which is equal in sign and magnitude to the <ClLinks  term={"object"}><i>object</i></ClLinks> to whatever degree of representational precision is permitted by that <ClLinks  term={"float"}><i>float</i></ClLinks> representation. (If the *result-type* is <ClLinks  term={"float"}><b>float</b></ClLinks> and <ClLinks  term={"object"}><i>object</i></ClLinks> is not already a <ClLinks  term={"float"}><i>float</i></ClLinks>, then the *result* is a *single float*.) 



<ClLinks  term={"function"}><b>function</b></ClLinks> 



If the *result-type* is <ClLinks  term={"function"}><b>function</b></ClLinks>, and <ClLinks  term={"object"}><i>object</i></ClLinks> is any *function name* that is <ClLinks  term={"fbound"}><i>fbound</i></ClLinks> but that is globally defined neither as a *macro name* nor as a *special operator* , then the *result* is the *functional value* of <ClLinks  term={"object"}><i>object</i></ClLinks>. 



If the *result-type* is <ClLinks  term={"function"}><b>function</b></ClLinks>, and <ClLinks  term={"object"}><i>object</i></ClLinks> is a *lambda expression*, then the *result* is a <ClLinks  term={"closure"}><i>closure</i></ClLinks> of <ClLinks  term={"object"}><i>object</i></ClLinks> in the *null lexical environment*. 



<ClLinks  term={"t"}><b>t</b></ClLinks> 



Any <ClLinks  term={"object"}><i>object</i></ClLinks> can be *coerced* to an <ClLinks  term={"object"}><i>object</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"t"}><b>t</b></ClLinks>. In this case, the <ClLinks  term={"object"}><i>object</i></ClLinks> is simply returned. 

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



If a coercion is not possible, an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> is signaled. 



(coerce x ’nil) always signals an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"type-error"}><b>type-error</b></ClLinks>. 



An error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"error"}><b>error</b></ClLinks> is signaled if the *result-type* is <ClLinks  term={"function"}><b>function</b></ClLinks> but <ClLinks  term={"object"}><i>object</i></ClLinks> is a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> that is not <ClLinks  term={"fbound"}><i>fbound</i></ClLinks> or if the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> names a <ClLinks  term={"macro"}><i>macro</i></ClLinks> or a *special operator* . 



An error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> should be signaled if *result-type* specifies the number of elements and <ClLinks  term={"object"}><i>object</i></ClLinks> is of a different length. 



**See Also:** 



<ClLinks  term={"rational"}><b>rational</b></ClLinks>, <ClLinks  term={"floor"}><b>floor</b></ClLinks>, <ClLinks  term={"char-code"}><b>char-code</b></ClLinks>, <ClLinks  term={"char-int"}><b>char-int</b></ClLinks> 



**Notes:** 



Coercions from <ClLinks  term={"float"}><i>floats</i></ClLinks> to <ClLinks  term={"rational"}><i>rationals</i></ClLinks> and from <ClLinks  term={"ratio"}><i>ratios</i></ClLinks> to *integers* are not provided because of rounding problems. 



(coerce x ’t) *≡* (identity x) *≡* x  







<ClLinks  term={"deftype"}><b>deftype</b></ClLinks> 




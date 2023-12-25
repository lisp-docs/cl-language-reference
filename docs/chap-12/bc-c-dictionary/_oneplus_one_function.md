**1+, 1***− Function*

**Syntax:**

<ClLinks styled={true} term={"1+"}><b>1+</b></ClLinks> *number → successor*

<ClLinks styled={true} term={"1"}><b>1*</b></ClLinks>− number → predecessor*

**Arguments and Values:**

<ClLinks styled={true} term={"number"}><i>number</i></ClLinks>—a <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> .

*successor*, *predecessor*—a <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> .

**Description:**

<ClLinks styled={true} term={"1+"}><b>1+</b></ClLinks> returns a <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> that is one more than its argument <ClLinks styled={true} term={"number"}><i>number</i></ClLinks>. **1-** returns a <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> that is one less than its argument <ClLinks styled={true} term={"number"}><i>number</i></ClLinks>.

**Examples:**

```lisp
(1+ 99) → 100 
(1- 100) → 99 
(1+ (complex 0.0)) → #C(1.0 0.0) 
(1- 5/3) → 2/3 
```

**Exceptional Situations:**

Might signal <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if its <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks> is not a <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> . Might signal <ClLinks styled={true} term={"arithmetic-error"}><b>arithmetic-error</b></ClLinks>.

**See Also:**

<ClLinks styled={true} term={"incf"}><b>incf</b></ClLinks>, <ClLinks styled={true} term={"decf"}><b>decf</b></ClLinks>

**Notes:**

(1+ <ClLinks styled={true} term={"number"}><i>number</i></ClLinks>) *≡* (+ <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> 1)

(1- <ClLinks styled={true} term={"number"}><i>number</i></ClLinks>) *≡* (- <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> 1)

Implementors are encouraged to make the performance of both the previous expressions be the same.

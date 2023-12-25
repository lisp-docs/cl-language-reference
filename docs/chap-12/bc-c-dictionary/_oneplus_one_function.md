**1+, 1***− Function*

**Syntax:**

<ClLinks  term={"1+"}><b>1+</b></ClLinks> *number → successor*

<ClLinks  term={"1"}><b>1*</b></ClLinks>− number → predecessor*

**Arguments and Values:**

<ClLinks  term={"number"}><i>number</i></ClLinks>—a <ClLinks  term={"number"}><i>number</i></ClLinks> .

*successor*, *predecessor*—a <ClLinks  term={"number"}><i>number</i></ClLinks> .

**Description:**

<ClLinks  term={"1+"}><b>1+</b></ClLinks> returns a <ClLinks  term={"number"}><i>number</i></ClLinks> that is one more than its argument <ClLinks  term={"number"}><i>number</i></ClLinks>. **1-** returns a <ClLinks  term={"number"}><i>number</i></ClLinks> that is one less than its argument <ClLinks  term={"number"}><i>number</i></ClLinks>.

**Examples:**

```lisp
(1+ 99) → 100 
(1- 100) → 99 
(1+ (complex 0.0)) → #C(1.0 0.0) 
(1- 5/3) → 2/3 
```

**Exceptional Situations:**

Might signal <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> if its <ClLinks  term={"argument"}><i>argument</i></ClLinks> is not a <ClLinks  term={"number"}><i>number</i></ClLinks> . Might signal <ClLinks  term={"arithmetic-error"}><b>arithmetic-error</b></ClLinks>.

**See Also:**

<ClLinks  term={"incf"}><b>incf</b></ClLinks>, <ClLinks  term={"decf"}><b>decf</b></ClLinks>

**Notes:**

(1+ <ClLinks  term={"number"}><i>number</i></ClLinks>) *≡* (+ <ClLinks  term={"number"}><i>number</i></ClLinks> 1)

(1- <ClLinks  term={"number"}><i>number</i></ClLinks>) *≡* (- <ClLinks  term={"number"}><i>number</i></ClLinks> 1)

Implementors are encouraged to make the performance of both the previous expressions be the same.

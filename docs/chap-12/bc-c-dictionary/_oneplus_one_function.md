**1+, 1***− Function*

**Syntax:**

**1+** *number → successor*

**1***− number → predecessor*

**Arguments and Values:**

*number*—a *number* .

*successor*, *predecessor*—a *number* .

**Description:**

**1+** returns a *number* that is one more than its argument *number*. **1-** returns a *number* that is one less than its argument *number*.

**Examples:**

```lisp

(1+ 99) → 100 
(1- 100) → 99 
(1+ (complex 0.0)) → #C(1.0 0.0) 
(1- 5/3) → 2/3 

```

**Exceptional Situations:**

Might signal **type-error** if its *argument* is not a *number* . Might signal **arithmetic-error**.

**See Also:**

**incf**, **decf**

**Notes:**

(1+ *number*) *≡* (+ *number* 1)

(1- *number*) *≡* (- *number* 1)

Implementors are encouraged to make the performance of both the previous expressions be the same.

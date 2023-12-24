**\*** *Function*

**Syntax:**

**\*** &amp;rest *numbers → product*

**Arguments and Values:**

*number*—a *number* .

*product*—a *number* .

**Description:**

Returns the product of *numbers*, performing any necessary type conversions in the process. If no *numbers* are supplied, 1 is returned.

**Examples:**

```lisp

(\*) → 1 
(\* 3 5) → 15 
(\* 1.0 #c(22 33) 55/98) → #C(12.346938775510203 18.520408163265305) 

```

**Exceptional Situations:**

Might signal **type-error** if some *argument* is not a *number* . Might signal **arithmetic-error**.

**See Also:**

Section 12.1.1 (Numeric Operations), Section 12.1.3 (Rational Computations), Section 12.1.4 (Floating-point Computations), Section 12.1.5 (Complex Computations)

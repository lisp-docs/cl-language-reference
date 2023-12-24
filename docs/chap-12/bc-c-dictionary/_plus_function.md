**+** *Function*

**Syntax:**

**+** &amp;rest *numbers → sum*

**Arguments and Values:**

*number*—a *number* .

*sum*—a *number* .

**Description:**

Returns the sum of *numbers*, performing any necessary type conversions in the process. If no *numbers* are supplied, 0 is returned.

**Examples:**

```lisp
 
(+) → 0 
(+ 1) → 1 
(+ 31/100 69/100) → 1 
(+ 1/5 0.8) → 1.0 

```

**Exceptional Situations:**

Might signal **type-error** if some *argument* is not a *number* . Might signal **arithmetic-error**.

**See Also:**

Section 12.1.1 (Numeric Operations), Section 12.1.3 (Rational Computations), Section 12.1.4 (Floating-point Computations), Section 12.1.5 (Complex Computations)

**/, //, ///** *Variable* 

**Value Type:** 

a *proper list*. 

**Initial Value:** 

*implementation-dependent*. 

**Description:** 

The *variables* **/**, **//**, and **///** are maintained by the *Lisp read-eval-print loop* to save the values of results that were printed at the end of the loop. 

The *value* of **/** is a *list* of the most recent *values* that were printed, the *value* of **//** is the previous value of **/**, and the *value* of **///** is the previous value of **//**. 

The *values* of **/**, **//**, and **///** are updated immediately prior to printing the *return value* of a top-level *form* by the *Lisp read-eval-print loop*. If the *evaluation* of such a *form* is aborted prior to its normal return, the values of **/**, **//**, and **///** are not updated. 

**Examples:** 

(floor 22 7) *→* 3, 1 

(+ (\* (car /) 7) (cadr /)) *→* 22 

**Affected By:** 

*Lisp read-eval-print loop*. 

**See Also:** 

**-** (*variable*), **+** (*variable*), **\*** (*variable*), Section 25.1.1 (Top level loop) 



 

 

&#60;b&#62;&#60;sup&#62;lisp-implementation-type, lisp-implementation&#60;/sup&#62; version&#60;/b&#62; &#60;i&#62;Function&#60;/i&#62; 

**Syntax:** 

**lisp-implementation-type** *hno argumentsi → description* 

**lisp-implementation-version** *hno argumentsi → description* 

**Arguments and Values:** 

*description*—a *string* or **nil**. 

**Description:** 

**lisp-implementation-type** and **lisp-implementation-version** identify the current implementation of Common Lisp. 

**lisp-implementation-type** returns a *string* that identifies the generic name of the particular Common Lisp implementation. 

**lisp-implementation-version** returns a *string* that identifies the version of the particular Common Lisp implementation. 

If no appropriate and relevant result can be produced, **nil** is returned instead of a *string*. **Examples:** 

(lisp-implementation-type) 

*→* "ACME Lisp" 

&#60;i&#62;&#60;sup&#62;or&#60;/sup&#62;→&#60;/i&#62; "Joe’s Common Lisp" 

(lisp-implementation-version) 

*→* "1.3a" 

*→* "V2" 

&#60;i&#62;&#60;sup&#62;or&#60;/sup&#62;→&#60;/i&#62; "Release 17.3, ECO #6" 


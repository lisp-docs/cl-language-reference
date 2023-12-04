**destructuring-bind** *Macro* 



**Syntax:** 



**destructuring-bind** *lambda-list expression \&#123;declaration\&#125;*\* *\&#123;form\&#125;*\* 



*→ \&#123;result\&#125;*\* 



**Arguments and Values:** 



*lambda-list*—a *destructuring lambda list*. 



*expression*—a *form*. 



*declaration*—a **declare** *expression*; not evaluated. 



*forms*—an *implicit progn*. 



*results*—the *values* returned by the *forms*. 



**Description:** 



**destructuring-bind** binds the variables specified in *lambda-list* to the corresponding values in the tree structure resulting from the evaluation of *expression*; then **destructuring-bind** evaluates *forms*. 



The *lambda-list* supports destructuring as described in Section 3.4.5 (Destructuring Lambda Lists). **Examples:**
```lisp
 



(defun iota (n) (loop for i from 1 to n collect i)) ;helper 



(destructuring-bind ((a &optional (b ’bee)) one two three) 



‘((alpha) ,@(iota 3)) 



(list a b three two one)) *→* (ALPHA BEE 3 2 1) 



Data and Control 












```
**Exceptional Situations:** 



If the result of evaluating the *expression* does not match the destructuring pattern, an error of *type* **error** should be signaled. 



**See Also:** 



**macrolet**, **defmacro** 



**let, let***∗ Special Operator* 



**Syntax:** 



**let** (*\&#123;var |* (*var* [*init-form*])*\&#125;*\*) *\&#123;declaration\&#125;*\* *\&#123;form\&#125;*\* *→ \&#123;result\&#125;*\* 



**let\*** (*\&#123;var |* (*var* [*init-form*])*\&#125;*\*) *\&#123;declaration\&#125;*\* *\&#123;form\&#125;*\* *→ \&#123;result\&#125;*\* 



**Arguments and Values:** 



*var*—a *symbol*. 



*init-form*—a *form*. 



*declaration*—a **declare** *expression*; not evaluated. 



*form*—a *form*. 



*results*—the *values* returned by the *forms*. 



**Description:** 



**let** and **let\*** create new variable *bindings* and execute a series of *forms* that use these *bindings*. **let** performs the *bindings* in parallel and **let\*** does them sequentially. 



The form 



(let ((*var1 init-form-1* ) 



(*var2 init-form-2* ) 



... 



(*varm init-form-m*)) 



*declaration1* 



*declaration2* 



... 



*declarationp* 



*form1* 



*form2* 



... 



*formn*) 















**let, let***∗* 



first evaluates the expressions *init-form-1*, *init-form-2*, and so on, in that order, saving the resulting values. Then all of the variables *varj* are bound to the corresponding values; each *binding* is lexical unless there is a **special** declaration to the contrary. The expressions *formk* are then evaluated in order; the values of all but the last are discarded (that is, the body of a **let** is an *implicit progn*). 



**let\*** is similar to **let**, but the *bindings* of variables are performed sequentially rather than in parallel. The expression for the *init-form* of a *var* can refer to *vars* previously bound in the **let\***. 



The form 



(let\* ((*var1 init-form-1* ) 



(*var2 init-form-2* ) 



... 



(*varm init-form-m*)) 



*declaration1* 



*declaration2* 



... 



*declarationp* 



*form1* 



*form2* 



... 



*formn*) 



first evaluates the expression *init-form-1*, then binds the variable *var1* to that value; then it evaluates *init-form-2* and binds *var2*, and so on. The expressions *formj* are then evaluated in order; the values of all but the last are discarded (that is, the body of **let\*** is an implicit **progn**). 



For both **let** and **let\***, if there is not an *init-form* associated with a *var*, *var* is initialized to **nil**. 



The special form **let** has the property that the *scope* of the name binding does not include any initial value form. For **let\***, a variable’s *scope* also includes the remaining initial value forms for subsequent variable bindings. 



**Examples:** 



(setq a ’top) *→* TOP 



(defun dummy-function () a) *→* DUMMY-FUNCTION 



(let ((a ’inside) (b a)) 



(format nil "~S ~S ~S" a b (dummy-function))) *→* "INSIDE TOP TOP" 



(let\* ((a ’inside) (b a)) 



(format nil "~S ~S ~S" a b (dummy-function))) *→* "INSIDE INSIDE TOP" 



(let ((a ’inside) (b a)) 



(declare (special a)) 



(format nil "~S ~S ~S" a b (dummy-function))) *→* "INSIDE TOP INSIDE" 



The code 



(let (x) 



Data and Control 











(declare (integer x)) 



(setq x (gcd y z)) 



...) 



is incorrect; although x is indeed set before it is used, and is set to a value of the declared type *integer* , nevertheless x initially takes on the value **nil** in violation of the type declaration. 



**See Also:** 



**progv** 




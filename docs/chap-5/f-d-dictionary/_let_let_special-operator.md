**let, let***∗ Special Operator* 



**Syntax:** 



<ClLinks styled={true} term={"let"}><b>let</b></ClLinks> (*\{var |* (*var* [*init-form*])*\}*\*) <ClLinks styled={true} term={"declaration"}><i>\{declaration\}</i></ClLinks>\* <ClLinks styled={true} term={"form"}><i>\{form\}</i></ClLinks>\* → \{result\}\* 



<ClLinks styled={true} term={"let"}><b>let\*</b></ClLinks> (*\{var |* (*var* [*init-form*])*\}*\*) <ClLinks styled={true} term={"declaration"}><i>\{declaration\}</i></ClLinks>\* <ClLinks styled={true} term={"form"}><i>\{form\}</i></ClLinks>\* → \{result\}\* 



**Arguments and Values:** 



*var*—a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. 



*init-form*—a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. 



<ClLinks styled={true} term={"declaration"}><i>declaration</i></ClLinks>—a <ClLinks styled={true} term={"declare"}><b>declare</b></ClLinks> <ClLinks styled={true} term={"expression"}><i>expression</i></ClLinks>; not evaluated. 



<ClLinks styled={true} term={"form"}><i>form</i></ClLinks>—a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. 



*results*—the <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> returned by the <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>. 



**Description:** 



<ClLinks styled={true} term={"let"}><b>let</b></ClLinks> and <ClLinks styled={true} term={"let"}><b>let\*</b></ClLinks> create new variable <ClLinks styled={true} term={"binding"}><i>bindings</i></ClLinks> and execute a series of <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> that use these <ClLinks styled={true} term={"binding"}><i>bindings</i></ClLinks>. <ClLinks styled={true} term={"let"}><b>let</b></ClLinks> performs the <ClLinks styled={true} term={"binding"}><i>bindings</i></ClLinks> in parallel and <ClLinks styled={true} term={"let"}><b>let\*</b></ClLinks> does them sequentially. 



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



first evaluates the expressions *init-form-1*, *init-form-2*, and so on, in that order, saving the resulting values. Then all of the variables *varj* are bound to the corresponding values; each <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> is lexical unless there is a <ClLinks styled={true} term={"special"}><b>special</b></ClLinks> declaration to the contrary. The expressions *formk* are then evaluated in order; the values of all but the last are discarded (that is, the body of a <ClLinks styled={true} term={"let"}><b>let</b></ClLinks> is an *implicit progn*). 



<ClLinks styled={true} term={"let"}><b>let\*</b></ClLinks> is similar to <ClLinks styled={true} term={"let"}><b>let</b></ClLinks>, but the <ClLinks styled={true} term={"binding"}><i>bindings</i></ClLinks> of variables are performed sequentially rather than in parallel. The expression for the *init-form* of a *var* can refer to *vars* previously bound in the <ClLinks styled={true} term={"let"}><b>let\*</b></ClLinks>. 



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



first evaluates the expression *init-form-1*, then binds the variable *var1* to that value; then it evaluates *init-form-2* and binds *var2*, and so on. The expressions *formj* are then evaluated in order; the values of all but the last are discarded (that is, the body of <ClLinks styled={true} term={"let"}><b>let\*</b></ClLinks> is an implicit <ClLinks styled={true} term={"progn"}><b>progn</b></ClLinks>). 



For both <ClLinks styled={true} term={"let"}><b>let</b></ClLinks> and <ClLinks styled={true} term={"let"}><b>let\*</b></ClLinks>, if there is not an *init-form* associated with a *var*, *var* is initialized to <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



The special form <ClLinks styled={true} term={"let"}><b>let</b></ClLinks> has the property that the <ClLinks styled={true} term={"scope"}><i>scope</i></ClLinks> of the name binding does not include any initial value form. For <ClLinks styled={true} term={"let"}><b>let\*</b></ClLinks>, a variable’s <ClLinks styled={true} term={"scope"}><i>scope</i></ClLinks> also includes the remaining initial value forms for subsequent variable bindings. 



**Examples:**
```lisp

(setq a ’top) → TOP 
(defun dummy-function () a) → DUMMY-FUNCTION 
(let ((a ’inside) (b a)) 
  (format nil "~S ~S ~S" a b (dummy-function))) → "INSIDE TOP TOP" 
(let\* ((a ’inside) (b a)) 
       (format nil "~S ~S ~S" a b (dummy-function))) → "INSIDE INSIDE TOP" 
(let ((a ’inside) (b a)) 
  (declare (special a)) 
  (format nil "~S ~S ~S" a b (dummy-function))) → "INSIDE TOP INSIDE" 
The code 
(let (x) 
  Data and Control 


  (declare (integer x)) 
  (setq x (gcd y z)) 
  ...) 
is incorrect; although x is indeed set before it is used, and is set to a value of the declared type *integer* , nevertheless x initially takes on the value **nil** in violation of the type declaration. 

```
**See Also:** 



<ClLinks styled={true} term={"progv"}><b>progv</b></ClLinks> 




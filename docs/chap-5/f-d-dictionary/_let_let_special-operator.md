**let, let***∗ Special Operator* 



**Syntax:** 



<DictionaryLink  term={"let"}><b>let</b></DictionaryLink> (*\{var |* (*var* [*init-form*])*\}*\*) <ClLinks  term={"declaration"}><i>\{declaration\}</i></ClLinks>\* <ClLinks  term={"form"}><i>\{form\}</i></ClLinks>\* → \{result\}\* 



<DictionaryLink  term={"let"}><b>let\*</b></DictionaryLink> (*\{var |* (*var* [*init-form*])*\}*\*) <ClLinks  term={"declaration"}><i>\{declaration\}</i></ClLinks>\* <ClLinks  term={"form"}><i>\{form\}</i></ClLinks>\* → \{result\}\* 



**Arguments and Values:** 



*var*—a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. 



*init-form*—a <ClLinks  term={"form"}><i>form</i></ClLinks>. 



<ClLinks  term={"declaration"}><i>declaration</i></ClLinks>—a <DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink> <ClLinks  term={"expression"}><i>expression</i></ClLinks>; not evaluated. 



<ClLinks  term={"form"}><i>form</i></ClLinks>—a <ClLinks  term={"form"}><i>form</i></ClLinks>. 



*results*—the <ClLinks  term={"value"}><i>values</i></ClLinks> returned by the <ClLinks  term={"form"}><i>forms</i></ClLinks>. 



**Description:** 



<DictionaryLink  term={"let"}><b>let</b></DictionaryLink> and <DictionaryLink  term={"let"}><b>let\*</b></DictionaryLink> create new variable <ClLinks  term={"binding"}><i>bindings</i></ClLinks> and execute a series of <ClLinks  term={"form"}><i>forms</i></ClLinks> that use these <ClLinks  term={"binding"}><i>bindings</i></ClLinks>. <DictionaryLink  term={"let"}><b>let</b></DictionaryLink> performs the <ClLinks  term={"binding"}><i>bindings</i></ClLinks> in parallel and <DictionaryLink  term={"let"}><b>let\*</b></DictionaryLink> does them sequentially. 



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



first evaluates the expressions *init-form-1*, *init-form-2*, and so on, in that order, saving the resulting values. Then all of the variables *varj* are bound to the corresponding values; each <ClLinks  term={"binding"}><i>binding</i></ClLinks> is lexical unless there is a <DictionaryLink  term={"special"}><b>special</b></DictionaryLink> declaration to the contrary. The expressions *formk* are then evaluated in order; the values of all but the last are discarded (that is, the body of a <DictionaryLink  term={"let"}><b>let</b></DictionaryLink> is an <GlossaryTerm styled={true} term={"implicit progn"}><i>implicit progn</i></GlossaryTerm>). 



<DictionaryLink  term={"let"}><b>let\*</b></DictionaryLink> is similar to <DictionaryLink  term={"let"}><b>let</b></DictionaryLink>, but the <ClLinks  term={"binding"}><i>bindings</i></ClLinks> of variables are performed sequentially rather than in parallel. The expression for the *init-form* of a *var* can refer to *vars* previously bound in the <DictionaryLink  term={"let"}><b>let\*</b></DictionaryLink>. 



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



first evaluates the expression *init-form-1*, then binds the variable *var1* to that value; then it evaluates *init-form-2* and binds *var2*, and so on. The expressions *formj* are then evaluated in order; the values of all but the last are discarded (that is, the body of <DictionaryLink  term={"let"}><b>let\*</b></DictionaryLink> is an implicit <DictionaryLink  term={"progn"}><b>progn</b></DictionaryLink>). 



For both <DictionaryLink  term={"let"}><b>let</b></DictionaryLink> and <DictionaryLink  term={"let"}><b>let\*</b></DictionaryLink>, if there is not an *init-form* associated with a *var*, *var* is initialized to <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



The special form <DictionaryLink  term={"let"}><b>let</b></DictionaryLink> has the property that the <ClLinks  term={"scope"}><i>scope</i></ClLinks> of the name binding does not include any initial value form. For <DictionaryLink  term={"let"}><b>let\*</b></DictionaryLink>, a variable’s <ClLinks  term={"scope"}><i>scope</i></ClLinks> also includes the remaining initial value forms for subsequent variable bindings. 



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



<DictionaryLink  term={"progv"}><b>progv</b></DictionaryLink> 




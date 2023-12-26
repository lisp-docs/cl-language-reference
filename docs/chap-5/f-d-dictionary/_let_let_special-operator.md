**let, let***∗ Special Operator* 



**Syntax:** 



<DictionaryLink  term={"let"}><b>let</b></DictionaryLink> (*\{var |* (*var* [*init-form*])*\}*\*) <GlossaryTerm  term={"declaration"}><i>\{declaration\}</i></GlossaryTerm>\* <GlossaryTerm  term={"form"}><i>\{form\}</i></GlossaryTerm>\* → \{result\}\* 



<DictionaryLink  term={"let"}><b>let\*</b></DictionaryLink> (*\{var |* (*var* [*init-form*])*\}*\*) <GlossaryTerm  term={"declaration"}><i>\{declaration\}</i></GlossaryTerm>\* <GlossaryTerm  term={"form"}><i>\{form\}</i></GlossaryTerm>\* → \{result\}\* 



**Arguments and Values:** 



*var*—a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>. 



*init-form*—a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. 



<GlossaryTerm  term={"declaration"}><i>declaration</i></GlossaryTerm>—a <DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink> <GlossaryTerm  term={"expression"}><i>expression</i></GlossaryTerm>; not evaluated. 



<GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>—a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. 



*results*—the <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> returned by the <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink  term={"let"}><b>let</b></DictionaryLink> and <DictionaryLink  term={"let"}><b>let\*</b></DictionaryLink> create new variable <GlossaryTerm  term={"binding"}><i>bindings</i></GlossaryTerm> and execute a series of <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> that use these <GlossaryTerm  term={"binding"}><i>bindings</i></GlossaryTerm>. <DictionaryLink  term={"let"}><b>let</b></DictionaryLink> performs the <GlossaryTerm  term={"binding"}><i>bindings</i></GlossaryTerm> in parallel and <DictionaryLink  term={"let"}><b>let\*</b></DictionaryLink> does them sequentially. 



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



first evaluates the expressions *init-form-1*, *init-form-2*, and so on, in that order, saving the resulting values. Then all of the variables *varj* are bound to the corresponding values; each <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm> is lexical unless there is a <DictionaryLink  term={"special"}><b>special</b></DictionaryLink> declaration to the contrary. The expressions *formk* are then evaluated in order; the values of all but the last are discarded (that is, the body of a <DictionaryLink  term={"let"}><b>let</b></DictionaryLink> is an <GlossaryTerm styled={true} term={"implicit progn"}><i>implicit progn</i></GlossaryTerm>). 



<DictionaryLink  term={"let"}><b>let\*</b></DictionaryLink> is similar to <DictionaryLink  term={"let"}><b>let</b></DictionaryLink>, but the <GlossaryTerm  term={"binding"}><i>bindings</i></GlossaryTerm> of variables are performed sequentially rather than in parallel. The expression for the *init-form* of a *var* can refer to *vars* previously bound in the <DictionaryLink  term={"let"}><b>let\*</b></DictionaryLink>. 



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



The special form <DictionaryLink  term={"let"}><b>let</b></DictionaryLink> has the property that the <GlossaryTerm  term={"scope"}><i>scope</i></GlossaryTerm> of the name binding does not include any initial value form. For <DictionaryLink  term={"let"}><b>let\*</b></DictionaryLink>, a variable’s <GlossaryTerm  term={"scope"}><i>scope</i></GlossaryTerm> also includes the remaining initial value forms for subsequent variable bindings. 



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




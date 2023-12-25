**defmethod** <ClLinks  term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"defmethod"}><b>defmethod</b></ClLinks> *function-name \{method-qualifier\}*\* *specialized-lambda-list* 



[[ <ClLinks  term={"declaration"}><i>\{declaration\}</i></ClLinks>\* *| documentation* ]] <ClLinks  term={"form"}><i>\{form\}</i></ClLinks>\* 



→ new-method 



*function-name*::= *\{symbol |* (setf <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>)*\}* 







 



 



<ClLinks  term={"defmethod"}><b>defmethod</b></ClLinks> 



*method-qualifier*::= <ClLinks  term={"non-list"}><i>non-list</i></ClLinks> 



*specialized-lambda-list*::= (*\{var |* (*var parameter-specializer-name*)*\}*\* 



[&amp;optional *\{var |* (var [*initform* [*supplied-p-parameter*] ])*\}*\*] 



[&amp;rest *var*] 



[&amp;key*\{var |* (*\{var |* (*keywordvar*)*\}* [*initform* [*supplied-p-parameter*] ])*\}*\* 



[**&amp;allow-other-keys**] ] 



[&amp;aux *\{var |* (*var* [*initform*] )*\}*\*] ) 



*parameter-specializer-name*::= *symbol |* (eql *eql-specializer-form*) 



**Arguments and Values:** 



<ClLinks  term={"declaration"}><i>declaration</i></ClLinks>—a <ClLinks  term={"declare"}><b>declare</b></ClLinks> <ClLinks  term={"expression"}><i>expression</i></ClLinks>; not evaluated. 



*documentation*—a <ClLinks  term={"string"}><i>string</i></ClLinks>; not evaluated. 



*var*—a *variable name*. 



*eql-specializer-form*—a <ClLinks  term={"form"}><i>form</i></ClLinks>. 



<ClLinks  term={"form"}><i>Form</i></ClLinks>—a <ClLinks  term={"form"}><i>form</i></ClLinks>. 



*Initform*—a <ClLinks  term={"form"}><i>form</i></ClLinks>. 



*Supplied-p-parameter*—variable name. 



*new-method*—the new *method object*. 



**Description:** 



The macro <ClLinks  term={"defmethod"}><b>defmethod</b></ClLinks> defines a <ClLinks  term={"method"}><i>method</i></ClLinks> on a *generic function*. 



If (fboundp *function-name*) is <ClLinks  term={"nil"}><b>nil</b></ClLinks>, a *generic function* is created with default values for the argument precedence order (each argument is more specific than the arguments to its right in the argument list), for the generic function class (the <ClLinks  term={"class"}><i>class</i></ClLinks> <ClLinks  term={"standard-generic-function"}><b>standard-generic-function</b></ClLinks>), for the method class (the <ClLinks  term={"class"}><i>class</i></ClLinks> <ClLinks  term={"standard-method"}><b>standard-method</b></ClLinks>), and for the method combination type (the standard method combination 



type). The *lambda list* of the *generic function* is congruent with the *lambda list* of the <ClLinks  term={"method"}><i>method</i></ClLinks> being defined; if the <ClLinks  term={"defmethod"}><b>defmethod</b></ClLinks> form mentions keyword arguments, the *lambda list* of the *generic function* will mention &amp;key (but no keyword arguments). If *function-name* names an *ordinary function*, a <ClLinks  term={"macro"}><i>macro</i></ClLinks>, or a *special operator* , an error is signaled. 



If a *generic function* is currently named by *function-name*, the *lambda list* of the <ClLinks  term={"method"}><i>method</i></ClLinks> must be congruent with the *lambda list* of the *generic function*. If this condition does not hold, an error is signaled. For a definition of congruence in this context, see Section 7.6.4 (Congruent Lambda-lists for all Methods of a Generic Function). 



Each *method-qualifier* argument is an <ClLinks  term={"object"}><i>object</i></ClLinks> that is used by method combination to identify the given <ClLinks  term={"method"}><i>method</i></ClLinks>. The method combination type might further restrict what a method <ClLinks  term={"qualifier"}><i>qualifier</i></ClLinks> can be. The standard method combination type allows for *unqualified methods* and <ClLinks  term={"method"}><i>methods</i></ClLinks> whose sole 







 



 



<ClLinks  term={"defmethod"}><b>defmethod</b></ClLinks> 



<ClLinks  term={"qualifier"}><i>qualifier</i></ClLinks> is one of the keywords :before, :after, or :around. 



The *specialized-lambda-list* argument is like an ordinary *lambda list* except that the <ClLinks  term={"name"}><i>names</i></ClLinks> of required parameters can be replaced by specialized parameters. A specialized parameter is a list of the form (*var parameter-specializer-name*). Only required parameters can be specialized. If *parameter-specializer-name* is a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> it names a <ClLinks  term={"class"}><i>class</i></ClLinks>; if it is a <ClLinks  term={"list"}><i>list</i></ClLinks>, it is of the form (eql *eql-specializer-form*). The parameter specializer name (eql *eql-specializer-form*) indicates that the corresponding argument must be <ClLinks  term={"eql"}><b>eql</b></ClLinks> to the <ClLinks  term={"object"}><i>object</i></ClLinks> that is the value of *eql-specializer-form* for the <ClLinks  term={"method"}><i>method</i></ClLinks> to be applicable. The *eql-specializer-form* is evaluated at the time that the expansion of the <ClLinks  term={"defmethod"}><b>defmethod</b></ClLinks> macro is evaluated. If no *parameter specializer name* is specified for a given required parameter, the *parameter specializer* defaults to the <ClLinks  term={"class"}><i>class</i></ClLinks> <ClLinks  term={"t"}><b>t</b></ClLinks>. For further discussion, see Section 7.6.2 (Introduction to Methods). 



The <ClLinks  term={"form"}><i>form</i></ClLinks> arguments specify the method body. The body of the <ClLinks  term={"method"}><i>method</i></ClLinks> is enclosed in an *implicit block*. If *function-name* is a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>, this block bears the same <ClLinks  term={"name"}><i>name</i></ClLinks> as the *generic function*. If *function-name* is a <ClLinks  term={"list"}><i>list</i></ClLinks> of the form (setf <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>), the <ClLinks  term={"name"}><i>name</i></ClLinks> of the block is <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. 



The <ClLinks  term={"class"}><i>class</i></ClLinks> of the *method object* that is created is that given by the method class option of the *generic function* on which the <ClLinks  term={"method"}><i>method</i></ClLinks> is defined. 



If the *generic function* already has a <ClLinks  term={"method"}><i>method</i></ClLinks> that agrees with the <ClLinks  term={"method"}><i>method</i></ClLinks> being defined on *parameter specializers* and <ClLinks  term={"qualifier"}><i>qualifiers</i></ClLinks>, <ClLinks  term={"defmethod"}><b>defmethod</b></ClLinks> replaces the existing <ClLinks  term={"method"}><i>method</i></ClLinks> with the one now being defined. For a definition of agreement in this context. see Section 7.6.3 (Agreement on Parameter Specializers and Qualifiers). 



The *parameter specializers* are derived from the *parameter specializer names* as described in Section 7.6.2 (Introduction to Methods). 



The expansion of the <ClLinks  term={"defmethod"}><b>defmethod</b></ClLinks> macro “refers to” each specialized parameter (see the description of <ClLinks  term={"ignore"}><b>ignore</b></ClLinks> within the description of <ClLinks  term={"declare"}><b>declare</b></ClLinks>). This includes parameters that have an explicit *parameter specializer name* of <ClLinks  term={"t"}><b>t</b></ClLinks>. This means that a compiler warning does not occur if the body of the <ClLinks  term={"method"}><i>method</i></ClLinks> does not refer to a specialized parameter, while a warning might occur if the body of the <ClLinks  term={"method"}><i>method</i></ClLinks> does not refer to an unspecialized parameter. For this reason, a parameter that specializes on <ClLinks  term={"t"}><b>t</b></ClLinks> is not quite synonymous with an unspecialized parameter in this context. 



Declarations at the head of the method body that apply to the method’s *lambda variables* are treated as *bound declarations* whose <ClLinks  term={"scope"}><i>scope</i></ClLinks> is the same as the corresponding <ClLinks  term={"binding"}><i>bindings</i></ClLinks>. 



Declarations at the head of the method body that apply to the functional bindings of <ClLinks  term={"call-next-method"}><b>call-next-method</b></ClLinks> or <ClLinks  term={"next-method-p"}><b>next-method-p</b></ClLinks> apply to references to those functions within the method body <ClLinks  term={"form"}><i>forms</i></ClLinks>. Any outer <ClLinks  term={"binding"}><i>bindings</i></ClLinks> of the *function names* <ClLinks  term={"call-next-method"}><b>call-next-method</b></ClLinks> and <ClLinks  term={"next-method-p"}><b>next-method-p</b></ClLinks>, and declarations associated with such <ClLinks  term={"binding"}><i>bindings</i></ClLinks> are *shadowed* <sub>2</sub> within the method body <ClLinks  term={"form"}><i>forms</i></ClLinks>. 



The <ClLinks  term={"scope"}><i>scope</i></ClLinks> of *free declarations* at the head of the method body is the entire method body, which includes any implicit local function definitions but excludes *initialization forms* for the *lambda variables*. 



<ClLinks  term={"defmethod"}><b>defmethod</b></ClLinks> is not required to perform any compile-time side effects. In particular, the <ClLinks  term={"method"}><i>methods</i></ClLinks> 



 



 



are not installed for invocation during compilation. An <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> may choose to store information about the *generic function* for the purposes of compile-time error-checking (such as checking the number of arguments on calls, or noting that a definition for the function name has been seen). 



*Documentation* is attached as a *documentation string* to the *method object*. 



**Affected By:** 



The definition of the referenced *generic function*. 



**Exceptional Situations:** 



If *function-name* names an *ordinary function*, a <ClLinks  term={"macro"}><i>macro</i></ClLinks>, or a *special operator* , an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"error"}><b>error</b></ClLinks> is signaled. 



If a *generic function* is currently named by *function-name*, the *lambda list* of the <ClLinks  term={"method"}><i>method</i></ClLinks> must be congruent with the *lambda list* of the *generic function*, or an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"error"}><b>error</b></ClLinks> is signaled. 



**See Also:** 



<ClLinks  term={"defgeneric"}><b>defgeneric</b></ClLinks>, **documentation**, Section 7.6.2 (Introduction to Methods), Section 7.6.4 (Congruent Lambda-lists for all Methods of a Generic Function), Section 7.6.3 (Agreement on Parameter Specializers and Qualifiers), Section 3.4.11 (Syntactic Interaction of Documentation Strings and Declarations) 




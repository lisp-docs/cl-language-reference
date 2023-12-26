**defmethod** <ClLinks  term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"defmethod"}><b>defmethod</b></DictionaryLink> *function-name \{method-qualifier\}*\* *specialized-lambda-list* 



[[ <ClLinks  term={"declaration"}><i>\{declaration\}</i></ClLinks>\* *| documentation* ]] <ClLinks  term={"form"}><i>\{form\}</i></ClLinks>\* 



→ new-method 



*function-name*::= *\{symbol |* (setf <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>)*\}* 







 



 



<DictionaryLink  term={"defmethod"}><b>defmethod</b></DictionaryLink> 



*method-qualifier*::= <ClLinks  term={"non-list"}><i>non-list</i></ClLinks> 



*specialized-lambda-list*::= (*\{var |* (*var parameter-specializer-name*)*\}*\* 



[&amp;optional *\{var |* (var [*initform* [*supplied-p-parameter*] ])*\}*\*] 



[&amp;rest *var*] 



[&amp;key*\{var |* (*\{var |* (*keywordvar*)*\}* [*initform* [*supplied-p-parameter*] ])*\}*\* 



[**&amp;allow-other-keys**] ] 



[&amp;aux *\{var |* (*var* [*initform*] )*\}*\*] ) 



*parameter-specializer-name*::= *symbol |* (eql *eql-specializer-form*) 



**Arguments and Values:** 



<ClLinks  term={"declaration"}><i>declaration</i></ClLinks>—a <DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink> <ClLinks  term={"expression"}><i>expression</i></ClLinks>; not evaluated. 



*documentation*—a <ClLinks  term={"string"}><i>string</i></ClLinks>; not evaluated. 



*var*—a *variable name*. 



*eql-specializer-form*—a <ClLinks  term={"form"}><i>form</i></ClLinks>. 



<ClLinks  term={"form"}><i>Form</i></ClLinks>—a <ClLinks  term={"form"}><i>form</i></ClLinks>. 



*Initform*—a <ClLinks  term={"form"}><i>form</i></ClLinks>. 



*Supplied-p-parameter*—variable name. 



*new-method*—the new *method object*. 



**Description:** 



The macro <DictionaryLink  term={"defmethod"}><b>defmethod</b></DictionaryLink> defines a <ClLinks  term={"method"}><i>method</i></ClLinks> on a *generic function*. 



If (fboundp *function-name*) is <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>, a *generic function* is created with default values for the argument precedence order (each argument is more specific than the arguments to its right in the argument list), for the generic function class (the <ClLinks  term={"class"}><i>class</i></ClLinks> <DictionaryLink  term={"standard-generic-function"}><b>standard-generic-function</b></DictionaryLink>), for the method class (the <ClLinks  term={"class"}><i>class</i></ClLinks> <DictionaryLink  term={"standard-method"}><b>standard-method</b></DictionaryLink>), and for the method combination type (the standard method combination 



type). The *lambda list* of the *generic function* is congruent with the *lambda list* of the <ClLinks  term={"method"}><i>method</i></ClLinks> being defined; if the <DictionaryLink  term={"defmethod"}><b>defmethod</b></DictionaryLink> form mentions keyword arguments, the *lambda list* of the *generic function* will mention &amp;key (but no keyword arguments). If *function-name* names an *ordinary function*, a <ClLinks  term={"macro"}><i>macro</i></ClLinks>, or a *special operator* , an error is signaled. 



If a *generic function* is currently named by *function-name*, the *lambda list* of the <ClLinks  term={"method"}><i>method</i></ClLinks> must be congruent with the *lambda list* of the *generic function*. If this condition does not hold, an error is signaled. For a definition of congruence in this context, see Section 7.6.4 (Congruent Lambda-lists for all Methods of a Generic Function). 



Each *method-qualifier* argument is an <ClLinks  term={"object"}><i>object</i></ClLinks> that is used by method combination to identify the given <ClLinks  term={"method"}><i>method</i></ClLinks>. The method combination type might further restrict what a method <ClLinks  term={"qualifier"}><i>qualifier</i></ClLinks> can be. The standard method combination type allows for *unqualified methods* and <ClLinks  term={"method"}><i>methods</i></ClLinks> whose sole 







 



 



<DictionaryLink  term={"defmethod"}><b>defmethod</b></DictionaryLink> 



<ClLinks  term={"qualifier"}><i>qualifier</i></ClLinks> is one of the keywords :before, :after, or :around. 



The *specialized-lambda-list* argument is like an ordinary *lambda list* except that the <ClLinks  term={"name"}><i>names</i></ClLinks> of required parameters can be replaced by specialized parameters. A specialized parameter is a list of the form (*var parameter-specializer-name*). Only required parameters can be specialized. If *parameter-specializer-name* is a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> it names a <ClLinks  term={"class"}><i>class</i></ClLinks>; if it is a <ClLinks  term={"list"}><i>list</i></ClLinks>, it is of the form (eql *eql-specializer-form*). The parameter specializer name (eql *eql-specializer-form*) indicates that the corresponding argument must be <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink> to the <ClLinks  term={"object"}><i>object</i></ClLinks> that is the value of *eql-specializer-form* for the <ClLinks  term={"method"}><i>method</i></ClLinks> to be applicable. The *eql-specializer-form* is evaluated at the time that the expansion of the <DictionaryLink  term={"defmethod"}><b>defmethod</b></DictionaryLink> macro is evaluated. If no *parameter specializer name* is specified for a given required parameter, the *parameter specializer* defaults to the <ClLinks  term={"class"}><i>class</i></ClLinks> <DictionaryLink  term={"t"}><b>t</b></DictionaryLink>. For further discussion, see Section 7.6.2 (Introduction to Methods). 



The <ClLinks  term={"form"}><i>form</i></ClLinks> arguments specify the method body. The body of the <ClLinks  term={"method"}><i>method</i></ClLinks> is enclosed in an *implicit block*. If *function-name* is a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>, this block bears the same <ClLinks  term={"name"}><i>name</i></ClLinks> as the *generic function*. If *function-name* is a <ClLinks  term={"list"}><i>list</i></ClLinks> of the form (setf <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>), the <ClLinks  term={"name"}><i>name</i></ClLinks> of the block is <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. 



The <ClLinks  term={"class"}><i>class</i></ClLinks> of the *method object* that is created is that given by the method class option of the <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> on which the <ClLinks  term={"method"}><i>method</i></ClLinks> is defined. 



If the <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> already has a <ClLinks  term={"method"}><i>method</i></ClLinks> that agrees with the <ClLinks  term={"method"}><i>method</i></ClLinks> being defined on <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializers</i></GlossaryTerm> and <ClLinks  term={"qualifier"}><i>qualifiers</i></ClLinks>, <DictionaryLink  term={"defmethod"}><b>defmethod</b></DictionaryLink> replaces the existing <ClLinks  term={"method"}><i>method</i></ClLinks> with the one now being defined. For a definition of agreement in this context. see Section 7.6.3 (Agreement on Parameter Specializers and Qualifiers). 



The <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializers</i></GlossaryTerm> are derived from the <GlossaryTerm styled={true} term={"parameter specializer name"}><i>parameter specializer names</i></GlossaryTerm> as described in Section 7.6.2 (Introduction to Methods). 



The expansion of the <DictionaryLink  term={"defmethod"}><b>defmethod</b></DictionaryLink> macro “refers to” each specialized parameter (see the description of <DictionaryLink  term={"ignore"}><b>ignore</b></DictionaryLink> within the description of <DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink>). This includes parameters that have an explicit <GlossaryTerm styled={true} term={"parameter specializer name"}><i>parameter specializer name</i></GlossaryTerm> of <DictionaryLink  term={"t"}><b>t</b></DictionaryLink>. This means that a compiler warning does not occur if the body of the <ClLinks  term={"method"}><i>method</i></ClLinks> does not refer to a specialized parameter, while a warning might occur if the body of the <ClLinks  term={"method"}><i>method</i></ClLinks> does not refer to an unspecialized parameter. For this reason, a parameter that specializes on <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> is not quite synonymous with an unspecialized parameter in this context. 



Declarations at the head of the method body that apply to the method’s <GlossaryTerm styled={true} term={"lambda variable"}><i>lambda variables</i></GlossaryTerm> are treated as <GlossaryTerm styled={true} term={"bound declaration"}><i>bound declarations</i></GlossaryTerm> whose <ClLinks  term={"scope"}><i>scope</i></ClLinks> is the same as the corresponding <ClLinks  term={"binding"}><i>bindings</i></ClLinks>. 



Declarations at the head of the method body that apply to the functional bindings of <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink> or <DictionaryLink  term={"next-method-p"}><b>next-method-p</b></DictionaryLink> apply to references to those functions within the method body <ClLinks  term={"form"}><i>forms</i></ClLinks>. Any outer <ClLinks  term={"binding"}><i>bindings</i></ClLinks> of the <GlossaryTerm styled={true} term={"function name"}><i>function names</i></GlossaryTerm> <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink> and <DictionaryLink  term={"next-method-p"}><b>next-method-p</b></DictionaryLink>, and declarations associated with such <ClLinks  term={"binding"}><i>bindings</i></ClLinks> are *shadowed* <sub>2</sub> within the method body <ClLinks  term={"form"}><i>forms</i></ClLinks>. 



The <ClLinks  term={"scope"}><i>scope</i></ClLinks> of <GlossaryTerm styled={true} term={"free declaration"}><i>free declarations</i></GlossaryTerm> at the head of the method body is the entire method body, which includes any implicit local function definitions but excludes <GlossaryTerm styled={true} term={"initialization form"}><i>initialization forms</i></GlossaryTerm> for the <GlossaryTerm styled={true} term={"lambda variable"}><i>lambda variables</i></GlossaryTerm>. 



<DictionaryLink  term={"defmethod"}><b>defmethod</b></DictionaryLink> is not required to perform any compile-time side effects. In particular, the <ClLinks  term={"method"}><i>methods</i></ClLinks> 



 



 



are not installed for invocation during compilation. An <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> may choose to store information about the <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> for the purposes of compile-time error-checking (such as checking the number of arguments on calls, or noting that a definition for the function name has been seen). 



*Documentation* is attached as a <GlossaryTerm styled={true} term={"documentation string"}><i>documentation string</i></GlossaryTerm> to the *method object*. 



**Affected By:** 



The definition of the referenced <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm>. 



**Exceptional Situations:** 



If *function-name* names an <GlossaryTerm styled={true} term={"ordinary function"}><i>ordinary function</i></GlossaryTerm>, a <ClLinks  term={"macro"}><i>macro</i></ClLinks>, or a <GlossaryTerm styled={true} term={"special operator"}><i>special operator</i></GlossaryTerm> , an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"error"}><b>error</b></DictionaryLink> is signaled. 



If a <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> is currently named by *function-name*, the <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> of the <ClLinks  term={"method"}><i>method</i></ClLinks> must be congruent with the <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm>, or an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"error"}><b>error</b></DictionaryLink> is signaled. 



**See Also:** 



<DictionaryLink  term={"defgeneric"}><b>defgeneric</b></DictionaryLink>, **documentation**, Section 7.6.2 (Introduction to Methods), Section 7.6.4 (Congruent Lambda-lists for all Methods of a Generic Function), Section 7.6.3 (Agreement on Parameter Specializers and Qualifiers), Section 3.4.11 (Syntactic Interaction of Documentation Strings and Declarations) 




**defmethod** <GlossaryTerm  term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"defmethod"}><b>defmethod</b></DictionaryLink> *function-name \{method-qualifier\}*\* *specialized-lambda-list* 



[[ <GlossaryTerm  term={"declaration"}><i>\{declaration\}</i></GlossaryTerm>\* *| documentation* ]] <GlossaryTerm  term={"form"}><i>\{form\}</i></GlossaryTerm>\* 



→ new-method 



*function-name*::= *\{symbol |* (setf <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>)*\}* 







 



 



<DictionaryLink  term={"defmethod"}><b>defmethod</b></DictionaryLink> 



*method-qualifier*::= <GlossaryTerm  term={"non-list"}><i>non-list</i></GlossaryTerm> 



*specialized-lambda-list*::= (*\{var |* (*var parameter-specializer-name*)*\}*\* 



[&amp;optional *\{var |* (var [*initform* [*supplied-p-parameter*] ])*\}*\*] 



[&amp;rest *var*] 



[&amp;key*\{var |* (*\{var |* (*keywordvar*)*\}* [*initform* [*supplied-p-parameter*] ])*\}*\* 



[**&amp;allow-other-keys**] ] 



[&amp;aux *\{var |* (*var* [*initform*] )*\}*\*] ) 



*parameter-specializer-name*::= *symbol |* (eql *eql-specializer-form*) 



**Arguments and Values:** 



<GlossaryTerm  term={"declaration"}><i>declaration</i></GlossaryTerm>—a <DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink> <GlossaryTerm  term={"expression"}><i>expression</i></GlossaryTerm>; not evaluated. 



*documentation*—a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>; not evaluated. 



*var*—a *variable name*. 



*eql-specializer-form*—a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. 



<GlossaryTerm  term={"form"}><i>Form</i></GlossaryTerm>—a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. 



*Initform*—a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. 



*Supplied-p-parameter*—variable name. 



*new-method*—the new *method object*. 



**Description:** 



The macro <DictionaryLink  term={"defmethod"}><b>defmethod</b></DictionaryLink> defines a <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> on a *generic function*. 



If (fboundp *function-name*) is <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>, a *generic function* is created with default values for the argument precedence order (each argument is more specific than the arguments to its right in the argument list), for the generic function class (the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink  term={"standard-generic-function"}><b>standard-generic-function</b></DictionaryLink>), for the method class (the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink  term={"standard-method"}><b>standard-method</b></DictionaryLink>), and for the method combination type (the standard method combination 



type). The *lambda list* of the *generic function* is congruent with the *lambda list* of the <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> being defined; if the <DictionaryLink  term={"defmethod"}><b>defmethod</b></DictionaryLink> form mentions keyword arguments, the *lambda list* of the *generic function* will mention &amp;key (but no keyword arguments). If *function-name* names an *ordinary function*, a <GlossaryTerm  term={"macro"}><i>macro</i></GlossaryTerm>, or a *special operator* , an error is signaled. 



If a *generic function* is currently named by *function-name*, the *lambda list* of the <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> must be congruent with the *lambda list* of the *generic function*. If this condition does not hold, an error is signaled. For a definition of congruence in this context, see Section 7.6.4 (Congruent Lambda-lists for all Methods of a Generic Function). 



Each *method-qualifier* argument is an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> that is used by method combination to identify the given <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm>. The method combination type might further restrict what a method <GlossaryTerm  term={"qualifier"}><i>qualifier</i></GlossaryTerm> can be. The standard method combination type allows for *unqualified methods* and <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> whose sole 







 



 



<DictionaryLink  term={"defmethod"}><b>defmethod</b></DictionaryLink> 



<GlossaryTerm  term={"qualifier"}><i>qualifier</i></GlossaryTerm> is one of the keywords :before, :after, or :around. 



The *specialized-lambda-list* argument is like an ordinary *lambda list* except that the <GlossaryTerm  term={"name"}><i>names</i></GlossaryTerm> of required parameters can be replaced by specialized parameters. A specialized parameter is a list of the form (*var parameter-specializer-name*). Only required parameters can be specialized. If *parameter-specializer-name* is a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> it names a <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>; if it is a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm>, it is of the form (eql *eql-specializer-form*). The parameter specializer name (eql *eql-specializer-form*) indicates that the corresponding argument must be <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink> to the <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> that is the value of *eql-specializer-form* for the <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> to be applicable. The *eql-specializer-form* is evaluated at the time that the expansion of the <DictionaryLink  term={"defmethod"}><b>defmethod</b></DictionaryLink> macro is evaluated. If no *parameter specializer name* is specified for a given required parameter, the *parameter specializer* defaults to the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink  term={"t"}><b>t</b></DictionaryLink>. For further discussion, see Section 7.6.2 (Introduction to Methods). 



The <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> arguments specify the method body. The body of the <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> is enclosed in an *implicit block*. If *function-name* is a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>, this block bears the same <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> as the *generic function*. If *function-name* is a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> of the form (setf <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>), the <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> of the block is <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>. 



The <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> of the *method object* that is created is that given by the method class option of the <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> on which the <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> is defined. 



If the <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> already has a <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> that agrees with the <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> being defined on <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializers</i></GlossaryTerm> and <GlossaryTerm  term={"qualifier"}><i>qualifiers</i></GlossaryTerm>, <DictionaryLink  term={"defmethod"}><b>defmethod</b></DictionaryLink> replaces the existing <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> with the one now being defined. For a definition of agreement in this context. see Section 7.6.3 (Agreement on Parameter Specializers and Qualifiers). 



The <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializers</i></GlossaryTerm> are derived from the <GlossaryTerm styled={true} term={"parameter specializer name"}><i>parameter specializer names</i></GlossaryTerm> as described in Section 7.6.2 (Introduction to Methods). 



The expansion of the <DictionaryLink  term={"defmethod"}><b>defmethod</b></DictionaryLink> macro “refers to” each specialized parameter (see the description of <DictionaryLink  term={"ignore"}><b>ignore</b></DictionaryLink> within the description of <DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink>). This includes parameters that have an explicit <GlossaryTerm styled={true} term={"parameter specializer name"}><i>parameter specializer name</i></GlossaryTerm> of <DictionaryLink  term={"t"}><b>t</b></DictionaryLink>. This means that a compiler warning does not occur if the body of the <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> does not refer to a specialized parameter, while a warning might occur if the body of the <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> does not refer to an unspecialized parameter. For this reason, a parameter that specializes on <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> is not quite synonymous with an unspecialized parameter in this context. 



Declarations at the head of the method body that apply to the method’s <GlossaryTerm styled={true} term={"lambda variable"}><i>lambda variables</i></GlossaryTerm> are treated as <GlossaryTerm styled={true} term={"bound declaration"}><i>bound declarations</i></GlossaryTerm> whose <GlossaryTerm  term={"scope"}><i>scope</i></GlossaryTerm> is the same as the corresponding <GlossaryTerm  term={"binding"}><i>bindings</i></GlossaryTerm>. 



Declarations at the head of the method body that apply to the functional bindings of <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink> or <DictionaryLink  term={"next-method-p"}><b>next-method-p</b></DictionaryLink> apply to references to those functions within the method body <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm>. Any outer <GlossaryTerm  term={"binding"}><i>bindings</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"function name"}><i>function names</i></GlossaryTerm> <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink> and <DictionaryLink  term={"next-method-p"}><b>next-method-p</b></DictionaryLink>, and declarations associated with such <GlossaryTerm  term={"binding"}><i>bindings</i></GlossaryTerm> are *shadowed* <sub>2</sub> within the method body <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm>. 



The <GlossaryTerm  term={"scope"}><i>scope</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"free declaration"}><i>free declarations</i></GlossaryTerm> at the head of the method body is the entire method body, which includes any implicit local function definitions but excludes <GlossaryTerm styled={true} term={"initialization form"}><i>initialization forms</i></GlossaryTerm> for the <GlossaryTerm styled={true} term={"lambda variable"}><i>lambda variables</i></GlossaryTerm>. 



<DictionaryLink  term={"defmethod"}><b>defmethod</b></DictionaryLink> is not required to perform any compile-time side effects. In particular, the <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> 



 



 



are not installed for invocation during compilation. An <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm> may choose to store information about the <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> for the purposes of compile-time error-checking (such as checking the number of arguments on calls, or noting that a definition for the function name has been seen). 



*Documentation* is attached as a <GlossaryTerm styled={true} term={"documentation string"}><i>documentation string</i></GlossaryTerm> to the *method object*. 



**Affected By:** 



The definition of the referenced <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm>. 



**Exceptional Situations:** 



If *function-name* names an <GlossaryTerm styled={true} term={"ordinary function"}><i>ordinary function</i></GlossaryTerm>, a <GlossaryTerm  term={"macro"}><i>macro</i></GlossaryTerm>, or a <GlossaryTerm styled={true} term={"special operator"}><i>special operator</i></GlossaryTerm> , an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"error"}><b>error</b></DictionaryLink> is signaled. 



If a <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> is currently named by *function-name*, the <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> of the <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> must be congruent with the <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm>, or an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"error"}><b>error</b></DictionaryLink> is signaled. 



**See Also:** 



<DictionaryLink  term={"defgeneric"}><b>defgeneric</b></DictionaryLink>, **documentation**, Section 7.6.2 (Introduction to Methods), Section 7.6.4 (Congruent Lambda-lists for all Methods of a Generic Function), Section 7.6.3 (Agreement on Parameter Specializers and Qualifiers), Section 3.4.11 (Syntactic Interaction of Documentation Strings and Declarations) 




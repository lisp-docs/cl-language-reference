**defgeneric** <GlossaryTerm  term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"defgeneric"}><b>defgeneric</b></DictionaryLink> *function-name gf-lambda-list* [[ *↓option | \{↓method-description\}*\* ]] 



→ new-generic 



*option::*=(:argument-precedence-order *\{parameter-name\}*<sup>+</sup>) *|* 



(<DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink> *\{gf-declaration\}*<sup>+</sup>) *|* 



(:documentation *gf-documentation*) *|* 



(:method-combination *method-combination \{method-combination-argument\}*\*) *|* 



(:generic-function-class *generic-function-class*) *|* 



(:method-class *method-class*) 



*method-description::*=(:method *\{method-qualifier\}*\* *specialized-lambda-list* 



**Arguments and Values:** 



[[ <GlossaryTerm  term={"declaration"}><i>\{declaration\}</i></GlossaryTerm>\* *| documentation* ]] <GlossaryTerm  term={"form"}><i>\{form\}</i></GlossaryTerm>\*) 



*function-name*—a *function name*. 



*generic-function-class*—a *non-nil symbol* naming a <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>. 



*gf-declaration*—an <DictionaryLink  term={"optimize"}><b>optimize</b></DictionaryLink> *declaration specifier* ; other *declaration specifiers* are not permitted. *gf-documentation*—a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>; not evaluated. 



*gf-lambda-list*—a *generic function lambda list*. 



*method-class*—a *non-nil symbol* naming a <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>. 



*method-combination-argument*—an <GlossaryTerm  term={"object"}><i>object.</i></GlossaryTerm> 



*method-combination-name*—a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> naming a *method combination type*. 



*method-qualifiers*, *specialized-lambda-list*, <GlossaryTerm  term={"declaration"}><i>declarations</i></GlossaryTerm>, *documentation*, <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm>—as per <DictionaryLink  term={"defmethod"}><b>defmethod</b></DictionaryLink>. *new-generic*—the *generic function object*. 



*parameter-name*—a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> that names a *required parameter* in the *lambda-list*. (If the :argument-precedence-order option is specified, each *required parameter* in the *lambda-list* must be used exactly once as a *parameter-name*.) 







 



 



<DictionaryLink  term={"defgeneric"}><b>defgeneric</b></DictionaryLink> 



**Description:** 



The macro <DictionaryLink  term={"defgeneric"}><b>defgeneric</b></DictionaryLink> is used to define a *generic function* or to specify options and declarations that pertain to a *generic function* as a whole. 



If *function-name* is a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> it must be of the form (setf <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>). If (fboundp *function-name*) is <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>, a new *generic function* is created. If (fdefinition *function-name*) is a *generic function*, that *generic function* is modified. If *function-name* names an *ordinary function*, a <GlossaryTerm  term={"macro"}><i>macro</i></GlossaryTerm>, or a *special operator* , an error is signaled. 



The effect of the <DictionaryLink  term={"defgeneric"}><b>defgeneric</b></DictionaryLink> macro is as if the following three steps were performed: first, <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> defined by previous <DictionaryLink  term={"defgeneric"}><b>defgeneric</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> are removed; second, <DictionaryLink  term={"ensure-generic-function"}><b>ensure-generic-function</b></DictionaryLink> is called; and finally, <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> specified by the current <DictionaryLink  term={"defgeneric"}><b>defgeneric</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> are added to the *generic function*. 



Each *method-description* defines a <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> on the *generic function*. The *lambda list* of each <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> must be congruent with the *lambda list* specified by the *gf-lambda-list* option. If no <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> descriptions are specified and a *generic function* of the same name does not already exist, a *generic function* with no <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> is created. 



The *gf-lambda-list* argument of <DictionaryLink  term={"defgeneric"}><b>defgeneric</b></DictionaryLink> specifies the shape of *lambda lists* for the <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> on this *generic function*. All <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> on the resulting *generic function* must have *lambda lists* that are congruent with this shape. If a <DictionaryLink  term={"defgeneric"}><b>defgeneric</b></DictionaryLink> form is evaluated and some <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> for that *generic function* have *lambda lists* that are not congruent with that given in the <DictionaryLink  term={"defgeneric"}><b>defgeneric</b></DictionaryLink> form, an error is signaled. For further details on method congruence, see Section 7.6.4 (Congruent Lambda-lists for all Methods of a Generic Function). 



The *generic function* passes to the <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> all the argument values passed to it, and only those; default values are not supported. Note that optional and keyword arguments in method definitions, however, can have default initial value forms and can use supplied-p parameters. 



The following options are provided. Except as otherwise noted, a given option may occur only once. 



*•* The :argument-precedence-order option is used to specify the order in which the required arguments in a call to the *generic function* are tested for specificity when selecting a particular <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm>. Each required argument, as specified in the *gf-lambda-list* argument, must be included exactly once as a *parameter-name* so that the full and unambiguous precedence order is supplied. If this condition is not met, an error is signaled. 



*•* The <DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink> option is used to specify declarations that pertain to the *generic function*. 



An <DictionaryLink  term={"optimize"}><b>optimize</b></DictionaryLink> *declaration specifier* is allowed. It specifies whether method selection should be optimized for speed or space, but it has no effect on <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm>. To control how a <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> is optimized, an <DictionaryLink  term={"optimize"}><b>optimize</b></DictionaryLink> declaration must be placed directly in the <DictionaryLink  term={"defmethod"}><b>defmethod</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> or method description. The optimization qualities **speed** and **space** are the only qualities this standard requires, but an implementation can extend the object system to recognize other qualities. A simple implementation that has only one method selection technique and ignores <DictionaryLink  term={"optimize"}><b>optimize</b></DictionaryLink> *declaration specifiers* is valid. 







 



 



<DictionaryLink  term={"defgeneric"}><b>defgeneric</b></DictionaryLink> 



The <DictionaryLink  term={"special"}><b>special</b></DictionaryLink>, <DictionaryLink  term={"ftype"}><b>ftype</b></DictionaryLink>, <DictionaryLink  term={"function"}><b>function</b></DictionaryLink>, <DictionaryLink  term={"inline"}><b>inline</b></DictionaryLink>, <DictionaryLink  term={"notinline"}><b>notinline</b></DictionaryLink>, and <DictionaryLink  term={"declaration"}><b>declaration</b></DictionaryLink> declarations are not permitted. Individual implementations can extend the <DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink> option to support additional declarations. If an implementation notices a *declaration specifier* that it does not support and that has not been proclaimed as a non-standard *declaration identifier* name in a <DictionaryLink  term={"declaration"}><b>declaration</b></DictionaryLink> <GlossaryTerm  term={"proclamation"}><i>proclamation</i></GlossaryTerm>, it should issue a warning. 



The <DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink> option may be specified more than once. The effect is the same as if the lists of *declaration specifiers* had been appended together into a single list and specified as a single <DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink> option. 



*•* The :documentation argument is a *documentation string* to be attached to the *generic function object*, and to be attached with kind <DictionaryLink  term={"function"}><b>function</b></DictionaryLink> to the *function-name*. 



*•* The :generic-function-class option may be used to specify that the *generic function* is to have a different <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> than the default provided by the system (the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink  term={"standard-generic-function"}><b>standard-generic-function</b></DictionaryLink>). The *class-name* argument is the name of a <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> that can be the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> of a *generic function*. If *function-name* specifies an existing *generic function* that has a different value for the :generic-function-class argument and the new generic function <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> is compatible with the old, <DictionaryLink  term={"change-class"}><b>change-class</b></DictionaryLink> is called to change the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> of the *generic function*; otherwise an error is signaled. 



*•* The :method-class option is used to specify that all <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> on this *generic function* are to have a different <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> from the default provided by the system (the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink  term={"standard-method"}><b>standard-method</b></DictionaryLink>). The *class-name* argument is the name of a <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> that is capable of being the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> of a <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm>. 



*•* The :method-combination option is followed by a symbol that names a type of method combination. The arguments (if any) that follow that symbol depend on the type of method combination. Note that the standard method combination type does not support any arguments. However, all types of method combination defined by the short form of <DictionaryLink  term={"define-method-combination"}><b>define-method-combination</b></DictionaryLink> accept an optional argument named *order*, defaulting to :most-specific-first, where a value of :most-specific-last reverses the order of the primary <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> without affecting the order of the auxiliary <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm>. 



The *method-description* arguments define <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> that will be associated with the *generic function*. The *method-qualifier* and *specialized-lambda-list* arguments in a method description are the same as for <DictionaryLink  term={"defmethod"}><b>defmethod</b></DictionaryLink>. 



The <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> arguments specify the method body. The body of the <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> is enclosed in an *implicit block*. If *function-name* is a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>, this block bears the same name as the *generic function*. If *function-name* is a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> of the form (setf <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>), the name of the block is <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>. 



Implementations can extend <DictionaryLink  term={"defgeneric"}><b>defgeneric</b></DictionaryLink> to include other options. It is required that an implementation signal an error if it observes an option that is not implemented locally. 



<DictionaryLink  term={"defgeneric"}><b>defgeneric</b></DictionaryLink> is not required to perform any compile-time side effects. In particular, the <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> are not installed for invocation during compilation. An <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm> may choose to store 







 



 



information about the <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> for the purposes of compile-time error-checking (such as checking the number of arguments on calls, or noting that a definition for the function name has been seen). 



**Examples:**
```lisp

```
**Exceptional Situations:** 



If *function-name* names an <GlossaryTerm styled={true} term={"ordinary function"}><i>ordinary function</i></GlossaryTerm>, a <GlossaryTerm  term={"macro"}><i>macro</i></GlossaryTerm>, or a <GlossaryTerm styled={true} term={"special operator"}><i>special operator</i></GlossaryTerm> , an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"program-error"}><b>program-error</b></DictionaryLink> is signaled. 



Each required argument, as specified in the *gf-lambda-list* argument, must be included exactly once as a *parameter-name*, or an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"program-error"}><b>program-error</b></DictionaryLink> is signaled. 



The <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> of each <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> specified by a *method-description* must be congruent with the <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> specified by the *gf-lambda-list* option, or an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"error"}><b>error</b></DictionaryLink> is signaled. 



If a <DictionaryLink  term={"defgeneric"}><b>defgeneric</b></DictionaryLink> form is evaluated and some <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> for that <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> have <GlossaryTerm styled={true} term={"lambda list"}><i>lambda lists</i></GlossaryTerm> that are not congruent with that given in the <DictionaryLink  term={"defgeneric"}><b>defgeneric</b></DictionaryLink> form, an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"error"}><b>error</b></DictionaryLink> is signaled. 



A given *option* may occur only once, or an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"program-error"}><b>program-error</b></DictionaryLink> is signaled. 



If *function-name* specifies an existing <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> that has a different value for the :generic-function-class argument and the new generic function <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> is compatible with the old, <DictionaryLink  term={"change-class"}><b>change-class</b></DictionaryLink> is called to change the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm>; otherwise an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"error"}><b>error</b></DictionaryLink> is signaled. 



Implementations can extend <DictionaryLink  term={"defgeneric"}><b>defgeneric</b></DictionaryLink> to include other options. It is required that an implementation signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"program-error"}><b>program-error</b></DictionaryLink> if it observes an option that is not implemented locally. 



**See Also:** 



<DictionaryLink  term={"defmethod"}><b>defmethod</b></DictionaryLink>, **documentation**, <DictionaryLink  term={"ensure-generic-function"}><b>ensure-generic-function</b></DictionaryLink>, <DictionaryLink  term={"generic-function"}><b>generic-function</b></DictionaryLink>, Section 7.6.4 (Congruent Lambda-lists for all Methods of a Generic Function) 




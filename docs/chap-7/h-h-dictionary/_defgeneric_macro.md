**defgeneric** <ClLinks styled={true} term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"defgeneric"}><b>defgeneric</b></ClLinks> *function-name gf-lambda-list* [[ *↓option | \{↓method-description\}*\* ]] 



→ new-generic 



*option::*=(:argument-precedence-order *\{parameter-name\}*<sup>+</sup>) *|* 



(<ClLinks styled={true} term={"declare"}><b>declare</b></ClLinks> *\{gf-declaration\}*<sup>+</sup>) *|* 



(:documentation *gf-documentation*) *|* 



(:method-combination *method-combination \{method-combination-argument\}*\*) *|* 



(:generic-function-class *generic-function-class*) *|* 



(:method-class *method-class*) 



*method-description::*=(:method *\{method-qualifier\}*\* *specialized-lambda-list* 



**Arguments and Values:** 



[[ <ClLinks styled={true} term={"declaration"}><i>\{declaration\}</i></ClLinks>\* *| documentation* ]] <ClLinks styled={true} term={"form"}><i>\{form\}</i></ClLinks>\*) 



*function-name*—a *function name*. 



*generic-function-class*—a *non-nil symbol* naming a <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>. 



*gf-declaration*—an <ClLinks styled={true} term={"optimize"}><b>optimize</b></ClLinks> *declaration specifier* ; other *declaration specifiers* are not permitted. *gf-documentation*—a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>; not evaluated. 



*gf-lambda-list*—a *generic function lambda list*. 



*method-class*—a *non-nil symbol* naming a <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>. 



*method-combination-argument*—an <ClLinks styled={true} term={"object"}><i>object.</i></ClLinks> 



*method-combination-name*—a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> naming a *method combination type*. 



*method-qualifiers*, *specialized-lambda-list*, <ClLinks styled={true} term={"declaration"}><i>declarations</i></ClLinks>, *documentation*, <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>—as per <ClLinks styled={true} term={"defmethod"}><b>defmethod</b></ClLinks>. *new-generic*—the *generic function object*. 



*parameter-name*—a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> that names a *required parameter* in the *lambda-list*. (If the :argument-precedence-order option is specified, each *required parameter* in the *lambda-list* must be used exactly once as a *parameter-name*.) 







 



 



<ClLinks styled={true} term={"defgeneric"}><b>defgeneric</b></ClLinks> 



**Description:** 



The macro <ClLinks styled={true} term={"defgeneric"}><b>defgeneric</b></ClLinks> is used to define a *generic function* or to specify options and declarations that pertain to a *generic function* as a whole. 



If *function-name* is a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> it must be of the form (setf <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>). If (fboundp *function-name*) is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>, a new *generic function* is created. If (fdefinition *function-name*) is a *generic function*, that *generic function* is modified. If *function-name* names an *ordinary function*, a <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks>, or a *special operator* , an error is signaled. 



The effect of the <ClLinks styled={true} term={"defgeneric"}><b>defgeneric</b></ClLinks> macro is as if the following three steps were performed: first, <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> defined by previous <ClLinks styled={true} term={"defgeneric"}><b>defgeneric</b></ClLinks> <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> are removed; second, <ClLinks styled={true} term={"ensure-generic-function"}><b>ensure-generic-function</b></ClLinks> is called; and finally, <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> specified by the current <ClLinks styled={true} term={"defgeneric"}><b>defgeneric</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> are added to the *generic function*. 



Each *method-description* defines a <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> on the *generic function*. The *lambda list* of each <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> must be congruent with the *lambda list* specified by the *gf-lambda-list* option. If no <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> descriptions are specified and a *generic function* of the same name does not already exist, a *generic function* with no <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> is created. 



The *gf-lambda-list* argument of <ClLinks styled={true} term={"defgeneric"}><b>defgeneric</b></ClLinks> specifies the shape of *lambda lists* for the <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> on this *generic function*. All <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> on the resulting *generic function* must have *lambda lists* that are congruent with this shape. If a <ClLinks styled={true} term={"defgeneric"}><b>defgeneric</b></ClLinks> form is evaluated and some <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> for that *generic function* have *lambda lists* that are not congruent with that given in the <ClLinks styled={true} term={"defgeneric"}><b>defgeneric</b></ClLinks> form, an error is signaled. For further details on method congruence, see Section 7.6.4 (Congruent Lambda-lists for all Methods of a Generic Function). 



The *generic function* passes to the <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> all the argument values passed to it, and only those; default values are not supported. Note that optional and keyword arguments in method definitions, however, can have default initial value forms and can use supplied-p parameters. 



The following options are provided. Except as otherwise noted, a given option may occur only once. 



*•* The :argument-precedence-order option is used to specify the order in which the required arguments in a call to the *generic function* are tested for specificity when selecting a particular <ClLinks styled={true} term={"method"}><i>method</i></ClLinks>. Each required argument, as specified in the *gf-lambda-list* argument, must be included exactly once as a *parameter-name* so that the full and unambiguous precedence order is supplied. If this condition is not met, an error is signaled. 



*•* The <ClLinks styled={true} term={"declare"}><b>declare</b></ClLinks> option is used to specify declarations that pertain to the *generic function*. 



An <ClLinks styled={true} term={"optimize"}><b>optimize</b></ClLinks> *declaration specifier* is allowed. It specifies whether method selection should be optimized for speed or space, but it has no effect on <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks>. To control how a <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> is optimized, an <ClLinks styled={true} term={"optimize"}><b>optimize</b></ClLinks> declaration must be placed directly in the <ClLinks styled={true} term={"defmethod"}><b>defmethod</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> or method description. The optimization qualities **speed** and **space** are the only qualities this standard requires, but an implementation can extend the object system to recognize other qualities. A simple implementation that has only one method selection technique and ignores <ClLinks styled={true} term={"optimize"}><b>optimize</b></ClLinks> *declaration specifiers* is valid. 







 



 



<ClLinks styled={true} term={"defgeneric"}><b>defgeneric</b></ClLinks> 



The <ClLinks styled={true} term={"special"}><b>special</b></ClLinks>, <ClLinks styled={true} term={"ftype"}><b>ftype</b></ClLinks>, <ClLinks styled={true} term={"function"}><b>function</b></ClLinks>, <ClLinks styled={true} term={"inline"}><b>inline</b></ClLinks>, <ClLinks styled={true} term={"notinline"}><b>notinline</b></ClLinks>, and <ClLinks styled={true} term={"declaration"}><b>declaration</b></ClLinks> declarations are not permitted. Individual implementations can extend the <ClLinks styled={true} term={"declare"}><b>declare</b></ClLinks> option to support additional declarations. If an implementation notices a *declaration specifier* that it does not support and that has not been proclaimed as a non-standard *declaration identifier* name in a <ClLinks styled={true} term={"declaration"}><b>declaration</b></ClLinks> <ClLinks styled={true} term={"proclamation"}><i>proclamation</i></ClLinks>, it should issue a warning. 



The <ClLinks styled={true} term={"declare"}><b>declare</b></ClLinks> option may be specified more than once. The effect is the same as if the lists of *declaration specifiers* had been appended together into a single list and specified as a single <ClLinks styled={true} term={"declare"}><b>declare</b></ClLinks> option. 



*•* The :documentation argument is a *documentation string* to be attached to the *generic function object*, and to be attached with kind <ClLinks styled={true} term={"function"}><b>function</b></ClLinks> to the *function-name*. 



*•* The :generic-function-class option may be used to specify that the *generic function* is to have a different <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> than the default provided by the system (the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> <ClLinks styled={true} term={"standard-generic-function"}><b>standard-generic-function</b></ClLinks>). The *class-name* argument is the name of a <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> that can be the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> of a *generic function*. If *function-name* specifies an existing *generic function* that has a different value for the :generic-function-class argument and the new generic function <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> is compatible with the old, <ClLinks styled={true} term={"change-class"}><b>change-class</b></ClLinks> is called to change the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> of the *generic function*; otherwise an error is signaled. 



*•* The :method-class option is used to specify that all <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> on this *generic function* are to have a different <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> from the default provided by the system (the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> <ClLinks styled={true} term={"standard-method"}><b>standard-method</b></ClLinks>). The *class-name* argument is the name of a <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> that is capable of being the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> of a <ClLinks styled={true} term={"method"}><i>method</i></ClLinks>. 



*•* The :method-combination option is followed by a symbol that names a type of method combination. The arguments (if any) that follow that symbol depend on the type of method combination. Note that the standard method combination type does not support any arguments. However, all types of method combination defined by the short form of <ClLinks styled={true} term={"define-method-combination"}><b>define-method-combination</b></ClLinks> accept an optional argument named *order*, defaulting to :most-specific-first, where a value of :most-specific-last reverses the order of the primary <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> without affecting the order of the auxiliary <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks>. 



The *method-description* arguments define <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> that will be associated with the *generic function*. The *method-qualifier* and *specialized-lambda-list* arguments in a method description are the same as for <ClLinks styled={true} term={"defmethod"}><b>defmethod</b></ClLinks>. 



The <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> arguments specify the method body. The body of the <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> is enclosed in an *implicit block*. If *function-name* is a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>, this block bears the same name as the *generic function*. If *function-name* is a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of the form (setf <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>), the name of the block is <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. 



Implementations can extend <ClLinks styled={true} term={"defgeneric"}><b>defgeneric</b></ClLinks> to include other options. It is required that an implementation signal an error if it observes an option that is not implemented locally. 



<ClLinks styled={true} term={"defgeneric"}><b>defgeneric</b></ClLinks> is not required to perform any compile-time side effects. In particular, the <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> are not installed for invocation during compilation. An <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> may choose to store 







 



 



information about the *generic function* for the purposes of compile-time error-checking (such as checking the number of arguments on calls, or noting that a definition for the function name has been seen). 



**Examples:**
```lisp


```
**Exceptional Situations:** 



If *function-name* names an *ordinary function*, a <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks>, or a *special operator* , an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"program-error"}><b>program-error</b></ClLinks> is signaled. 



Each required argument, as specified in the *gf-lambda-list* argument, must be included exactly once as a *parameter-name*, or an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"program-error"}><b>program-error</b></ClLinks> is signaled. 



The *lambda list* of each <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> specified by a *method-description* must be congruent with the *lambda list* specified by the *gf-lambda-list* option, or an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"error"}><b>error</b></ClLinks> is signaled. 



If a <ClLinks styled={true} term={"defgeneric"}><b>defgeneric</b></ClLinks> form is evaluated and some <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> for that *generic function* have *lambda lists* that are not congruent with that given in the <ClLinks styled={true} term={"defgeneric"}><b>defgeneric</b></ClLinks> form, an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"error"}><b>error</b></ClLinks> is signaled. 



A given *option* may occur only once, or an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"program-error"}><b>program-error</b></ClLinks> is signaled. 



If *function-name* specifies an existing *generic function* that has a different value for the :generic-function-class argument and the new generic function <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> is compatible with the old, <ClLinks styled={true} term={"change-class"}><b>change-class</b></ClLinks> is called to change the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> of the *generic function*; otherwise an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"error"}><b>error</b></ClLinks> is signaled. 



Implementations can extend <ClLinks styled={true} term={"defgeneric"}><b>defgeneric</b></ClLinks> to include other options. It is required that an implementation signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"program-error"}><b>program-error</b></ClLinks> if it observes an option that is not implemented locally. 



**See Also:** 



<ClLinks styled={true} term={"defmethod"}><b>defmethod</b></ClLinks>, **documentation**, <ClLinks styled={true} term={"ensure-generic-function"}><b>ensure-generic-function</b></ClLinks>, <ClLinks styled={true} term={"generic-function"}><b>generic-function</b></ClLinks>, Section 7.6.4 (Congruent Lambda-lists for all Methods of a Generic Function) 




**define-method-combination** <GlossaryTerm  term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"define-method-combination"}><b>define-method-combination</b></DictionaryLink> <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> [[ *↓short-form-option* ]] 



→ name 



<DictionaryLink  term={"define-method-combination"}><b>define-method-combination</b></DictionaryLink> *name lambda-list* (*\{method-group-specifier\}*\*) [(:arguments *. args-lambda-list*)] [(:generic-function *generic-function-symbol*)] [[<GlossaryTerm  term={"declaration"}><i>\{declaration\}</i></GlossaryTerm>\* *| documentation*]] <GlossaryTerm  term={"form"}><i>\{form\}</i></GlossaryTerm>\* → name 



*short-form-option* ::= :documentation *documentation* | :identity-with-one-argument *identity-with-one-argument* | :operator <GlossaryTerm  term={"operator"}><i>operator</i></GlossaryTerm>



*method-group-specifier::*=(*name \{\{qualifier-pattern\}*<sup>+</sup>*| predicate\}* [[ *↓long-form-option* ]]) 



*long-form-option* ::= :description *description* | :order *order* | :required *required-p*



**Arguments and Values:** 



*args-lambda-list*—a *define-method-combination arguments lambda list*. 



<GlossaryTerm  term={"declaration"}><i>declaration</i></GlossaryTerm>—a <DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink> <GlossaryTerm  term={"expression"}><i>expression</i></GlossaryTerm>; not evaluated. 



*description*—a <GlossaryTerm styled={true} term={"format control"}><i>format control</i></GlossaryTerm>. 



*documentation*—a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>; not evaluated. 



<GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"implicit progn"}><i>implicit progn</i></GlossaryTerm> that must compute and return the <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> that specifies how the <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> are combined, that is, the *effective method*. 







 



 



<DictionaryLink  term={"define-method-combination"}><b>define-method-combination</b></DictionaryLink> 



*generic-function-symbol*—a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>. 



*identity-with-one-argument*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



*lambda-list*—<GlossaryTerm styled={true} term={"ordinary lambda list"}><i>ordinary lambda list</i></GlossaryTerm>. 



<GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm>—a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>. Non-<GlossaryTerm  term={"keyword"}><i>keyword</i></GlossaryTerm>, *non-nil symbols* are usually used. 



<GlossaryTerm  term={"operator"}><i>operator</i></GlossaryTerm>—an <GlossaryTerm  term={"operator"}><i>operator</i></GlossaryTerm> . <GlossaryTerm  term={"name"}><i>Name</i></GlossaryTerm> and <GlossaryTerm  term={"operator"}><i>operator</i></GlossaryTerm> are often the *same symbol*. This is the default, but it is not required. 



*order*—:most-specific-first or :most-specific-last; evaluated. 



<GlossaryTerm  term={"predicate"}><i>predicate</i></GlossaryTerm>—a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> that names a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> of one argument that returns a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. *qualifier-pattern*—a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>, or the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> **\***. 



*required-p*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



The macro <DictionaryLink  term={"define-method-combination"}><b>define-method-combination</b></DictionaryLink> is used to define new types of method combination. 



There are two forms of <DictionaryLink  term={"define-method-combination"}><b>define-method-combination</b></DictionaryLink>. The short form is a simple facility for the cases that are expected to be most commonly needed. The long form is more powerful but more verbose. It resembles <DictionaryLink  term={"defmacro"}><b>defmacro</b></DictionaryLink> in that the body is an expression, usually using backquote, that computes a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. Thus arbitrary control structures can be implemented. The long form also allows 



arbitrary processing of method <GlossaryTerm  term={"qualifier"}><i>qualifiers</i></GlossaryTerm>. 



**Short Form** 



The short form syntax of <DictionaryLink  term={"define-method-combination"}><b>define-method-combination</b></DictionaryLink> is recognized when the sec ond <GlossaryTerm  term={"subform"}><i>subform</i></GlossaryTerm> is a <GlossaryTerm  term={"non-nil"}><i>non-nil</i></GlossaryTerm> symbol or is not present. When the short form is 



used, <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> is defined as a type of method combination that produces a Lisp form (*operator method-call method-call . . .*). The <GlossaryTerm  term={"operator"}><i>operator</i></GlossaryTerm> is a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> that can be the <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> of a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm>, <GlossaryTerm  term={"macro"}><i>macro</i></GlossaryTerm>, or <GlossaryTerm styled={true} term={"special operator"}><i>special operator</i></GlossaryTerm> . The <GlossaryTerm  term={"operator"}><i>operator</i></GlossaryTerm> can be supplied by a keyword option; it defaults to <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm>. 



Keyword options for the short form are the following: 



*•* The :documentation option is used to document the method-combination type; see description of long form below. 



*•* The :identity-with-one-argument option enables an optimization when its value is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> (the default is <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>). If there is exactly one applicable method and it is a primary method, that method serves as the effective method and <GlossaryTerm  term={"operator"}><i>operator</i></GlossaryTerm> is not called. This optimization avoids the need to create a new effective method and avoids the overhead of a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> call. This option is designed to be used with operators such as <DictionaryLink  term={"progn"}><b>progn</b></DictionaryLink>, <DictionaryLink  term={"and"}><b>and</b></DictionaryLink>, `+`, and <DictionaryLink  term={"max"}><b>max</b></DictionaryLink>. 







 



 



<DictionaryLink  term={"define-method-combination"}><b>define-method-combination</b></DictionaryLink> 



*•* The :operator option specifies the <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> of the operator. The <GlossaryTerm  term={"operator"}><i>operator</i></GlossaryTerm> argument is a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> that can be the <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> of a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm>, <GlossaryTerm  term={"macro"}><i>macro</i></GlossaryTerm>, or <GlossaryTerm styled={true} term={"special form"}><i>special form</i></GlossaryTerm>. 



These types of method combination require exactly one <GlossaryTerm  term={"qualifier"}><i>qualifier</i></GlossaryTerm> per method. An error is signaled if there are applicable methods with no <GlossaryTerm  term={"qualifier"}><i>qualifiers</i></GlossaryTerm> or with <GlossaryTerm  term={"qualifier"}><i>qualifiers</i></GlossaryTerm> that are not supported by the method combination type. 



A method combination procedure defined in this way recognizes two roles for methods. A method whose one <GlossaryTerm  term={"qualifier"}><i>qualifier</i></GlossaryTerm> is the symbol naming this type of method combination is defined to be a primary method. At least one primary method must be applicable or an error is signaled. A method with :around as its one <GlossaryTerm  term={"qualifier"}><i>qualifier</i></GlossaryTerm> is an auxiliary method that behaves the same as an <GlossaryTerm styled={true} term={"around method"}><i>around method</i></GlossaryTerm> in standard method combination. The <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> 



<DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink> can only be used in <GlossaryTerm styled={true} term={"around method"}><i>around methods</i></GlossaryTerm>; it cannot be used in primary methods defined by the short form of the <DictionaryLink  term={"define-method-combination"}><b>define-method-combination</b></DictionaryLink> macro. 



A method combination procedure defined in this way accepts an optional argument named *order*, which defaults to :most-specific-first. A value of :most-specific-last reverses the order of the primary methods without affecting the order of the auxiliary methods. 



The short form automatically includes error checking and support for <GlossaryTerm styled={true} term={"around method"}><i>around methods</i></GlossaryTerm>. 



For a discussion of built-in method combination types, see Section 7.6.6.4 (Built-in Method Combination Types). 



**Long Form** 



The long form syntax of <DictionaryLink  term={"define-method-combination"}><b>define-method-combination</b></DictionaryLink> is recognized when the second <GlossaryTerm  term={"subform"}><i>subform</i></GlossaryTerm> is a list. 



The *lambda-list* receives any arguments provided after the <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> of the method combination type in the :method-combination option to <DictionaryLink  term={"defgeneric"}><b>defgeneric</b></DictionaryLink>. 



A list of method group specifiers follows. Each specifier selects a subset of the applicable methods to play a particular role, either by matching their <GlossaryTerm  term={"qualifier"}><i>qualifiers</i></GlossaryTerm> against some patterns or by testing their <GlossaryTerm  term={"qualifier"}><i>qualifiers</i></GlossaryTerm> with a <GlossaryTerm  term={"predicate"}><i>predicate</i></GlossaryTerm>. These method group specifiers define all method <GlossaryTerm  term={"qualifier"}><i>qualifiers</i></GlossaryTerm> that can be used with this type of method combination. 



The <GlossaryTerm  term={"car"}><i>car</i></GlossaryTerm> of each *method-group-specifier* is a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> which <GlossaryTerm  term={"name"}><i>names</i></GlossaryTerm> a <GlossaryTerm  term={"variable"}><i>variable</i></GlossaryTerm>. During the execution of the <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> in the body of <DictionaryLink  term={"define-method-combination"}><b>define-method-combination</b></DictionaryLink>, this <GlossaryTerm  term={"variable"}><i>variable</i></GlossaryTerm> is bound to a list of the <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> in the method group. The <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> in this list occur in the order specified by the :order option. 



If *qualifier-pattern* is a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> it must be **\***. A method matches a *qualifier-pattern* if the method’s list of <GlossaryTerm  term={"qualifier"}><i>qualifiers</i></GlossaryTerm> is <DictionaryLink  term={"equal"}><b>equal</b></DictionaryLink> to the *qualifier-pattern* (except that the symbol **\*** in a *qualifier-pattern* matches anything). Thus a *qualifier-pattern* can be one of the following: the <GlossaryTerm styled={true} term={"empty list"}><i>empty list</i></GlossaryTerm>, which matches <GlossaryTerm styled={true} term={"unqualified method"}><i>unqualified methods</i></GlossaryTerm>; the symbol **\***, which matches all methods; a true list, which matches methods with the same number of <GlossaryTerm  term={"qualifier"}><i>qualifiers</i></GlossaryTerm> as the length of the list when each <GlossaryTerm  term={"qualifier"}><i>qualifier</i></GlossaryTerm> matches the corresponding list element; or a dotted list that ends in the symbol **\*** (the **\*** matches any number of additional <GlossaryTerm  term={"qualifier"}><i>qualifiers</i></GlossaryTerm>). 



Each applicable method is tested against the *qualifier-patterns* and <GlossaryTerm  term={"predicate"}><i>predicates</i></GlossaryTerm> in left-to-right order. As soon as a *qualifier-pattern* matches or a <GlossaryTerm  term={"predicate"}><i>predicate</i></GlossaryTerm> returns true, the method becomes a member of the corresponding method group and no further tests are made. Thus if a method could be a member of more than one method group, it joins only the first such group. If a method group has more than one *qualifier-pattern*, a method need only satisfy one of the *qualifier-patterns* to be a member of the group. 



The <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> of a <GlossaryTerm  term={"predicate"}><i>predicate</i></GlossaryTerm> function can appear instead of *qualifier-patterns* in a method group specifier. The <GlossaryTerm  term={"predicate"}><i>predicate</i></GlossaryTerm> is called for each method that has not been assigned to an earlier method group; it is called with one argument, the method’s *qualifier list*. The <GlossaryTerm  term={"predicate"}><i>predicate</i></GlossaryTerm> should return true if the method is to be a member of the method group. A <GlossaryTerm  term={"predicate"}><i>predicate</i></GlossaryTerm> can be distinguished from a *qualifier-pattern* because it is a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> other than <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> or **\***. 



If there is an applicable method that does not fall into any method group, the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"invalid-method-error"}><b>invalid-method-error</b></DictionaryLink> is called. 



Method group specifiers can have keyword options following the <GlossaryTerm  term={"qualifier"}><i>qualifier</i></GlossaryTerm> patterns or predicate. Keyword options can be distinguished from additional <GlossaryTerm  term={"qualifier"}><i>qualifier</i></GlossaryTerm> patterns because they are neither lists nor the symbol **\***. The keyword options are as follows: 



*•* The :description option is used to provide a description of the role of methods in the method group. Programming environment tools use `(apply #’format stream *format-control* (method-qualifiers method))` to print this description, which is expected to be concise. This keyword option allows the description of a method <GlossaryTerm  term={"qualifier"}><i>qualifier</i></GlossaryTerm> to be defined in the same module that defines the meaning of the method <GlossaryTerm  term={"qualifier"}><i>qualifier</i></GlossaryTerm>. In most cases, *format-control* will not contain any <DictionaryLink  term={"format"}><b>format</b></DictionaryLink> directives, but they are available for generality. If :description is not supplied, a default description is generated based on the variable name and the <GlossaryTerm  term={"qualifier"}><i>qualifier</i></GlossaryTerm> patterns and on whether this method group includes the <GlossaryTerm styled={true} term={"unqualified method"}><i>unqualified methods</i></GlossaryTerm>. 



*•* The :order option specifies the order of methods. The *order* argument is a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> that evaluates to :most-specific-first or :most-specific-last. If it evaluates to any other value, an error is signaled. If :order is not supplied, it defaults to :most-specific-first. 



*•* The :required option specifies whether at least one method in this method group is required. If its value is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> and the method group is empty (that is, no applicable methods match the <GlossaryTerm  term={"qualifier"}><i>qualifier</i></GlossaryTerm> patterns or satisfy the predicate), an error is signaled. If :required is not supplied, it defaults to <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



The use of method group specifiers provides a convenient syntax to select methods, to divide them among the possible roles, and to perform the necessary error checking. It is possible to perform further filtering of methods in the body <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> by using normal list-processing operations and the functions <DictionaryLink  term={"method-qualifiers"}><b>method-qualifiers</b></DictionaryLink> and <DictionaryLink  term={"invalid-method-error"}><b>invalid-method-error</b></DictionaryLink>. 



It is permissible to use <DictionaryLink  term={"setq"}><b>setq</b></DictionaryLink> on the variables named in the method group specifiers and to bind additional variables. It is also possible to bypass the method group specifier mechanism and do everything in the body <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm>. This is accomplished by writing a single method group with **\*** as its only *qualifier-pattern*; the variable is then bound to a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> of all of the <GlossaryTerm styled={true} term={"applicable method"}><i>applicable methods</i></GlossaryTerm>, in most-specific-first order. 



The body <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> compute and return the <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> that specifies how the methods are combined, that is, the effective method. The effective method is evaluated in the <GlossaryTerm styled={true} term={"null lexical environment"}><i>null lexical environment</i></GlossaryTerm> augmented with a local macro definition for <DictionaryLink  term={"call-method"}><b>call-method</b></DictionaryLink> and with bindings named by symbols not <GlossaryTerm  term={"accessible"}><i>accessible</i></GlossaryTerm> from the COMMON-LISP-USER <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>. Given a method object in one of the <GlossaryTerm  term={"list"}><i>lists</i></GlossaryTerm> produced by the method group specifiers and a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> of next methods, <DictionaryLink  term={"call-method"}><b>call-method</b></DictionaryLink> will invoke the method such that <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink> has available the next methods. 



When an effective method has no effect other than to call a single method, some implementations employ an optimization that uses the single method directly as the effective method, thus avoiding the need to create a new effective method. This optimization is active when the effective method form consists entirely of an invocation of the <DictionaryLink  term={"call-method"}><b>call-method</b></DictionaryLink> macro whose first <GlossaryTerm  term={"subform"}><i>subform</i></GlossaryTerm> is a method object and whose second <GlossaryTerm  term={"subform"}><i>subform</i></GlossaryTerm> is <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> or unsupplied. Each <DictionaryLink  term={"define-method-combination"}><b>define-method-combination</b></DictionaryLink> body is responsible for stripping off redundant invocations of <DictionaryLink  term={"progn"}><b>progn</b></DictionaryLink>, <DictionaryLink  term={"and"}><b>and</b></DictionaryLink>, <DictionaryLink  term={"multiple-value-prog1"}><b>multiple-value-prog1</b></DictionaryLink>, and the like, if this optimization is desired. 



The list (:arguments . *lambda-list*) can appear before any declarations or <GlossaryTerm styled={true} term={"documentation string"}><i>documentation string</i></GlossaryTerm>. This form is useful when the method combination type performs some specific behavior as part of the combined method and that behavior needs access to the arguments to the <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm>. Each parameter variable defined by *lambda-list* is bound to a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> that can be inserted into the e↵ective method. When this <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> is evaluated during execution of the e↵ective method, its value is the corresponding argument to the <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm>; the consequences of using such a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> as the <GlossaryTerm  term={"place"}><i>place</i></GlossaryTerm> in a <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> are undefined. Argument correspondence is computed by dividing the :arguments *lambda-list* and the *generic function lambda-list* into three sections: the <GlossaryTerm styled={true} term={"required parameter"}><i>required parameters</i></GlossaryTerm>, the <GlossaryTerm styled={true} term={"optional parameter"}><i>optional parameters</i></GlossaryTerm>, and the <GlossaryTerm  term={"keyword"}><i>keyword</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"rest parameter"}><i>rest parameters</i></GlossaryTerm>. The <GlossaryTerm  term={"argument"}><i>arguments</i></GlossaryTerm> supplied to the <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> for a particular <GlossaryTerm  term={"call"}><i>call</i></GlossaryTerm> are also divided into three sections; the required <GlossaryTerm  term={"argument"}><i>arguments</i></GlossaryTerm> section contains as many <GlossaryTerm  term={"argument"}><i>arguments</i></GlossaryTerm> as the <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> has <GlossaryTerm styled={true} term={"required parameter"}><i>required parameters</i></GlossaryTerm>, the optional <GlossaryTerm  term={"argument"}><i>arguments</i></GlossaryTerm> section contains as many arguments as the <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> has <GlossaryTerm styled={true} term={"optional parameter"}><i>optional parameters</i></GlossaryTerm>, and the keyword/rest <GlossaryTerm  term={"argument"}><i>arguments</i></GlossaryTerm> section contains the remaining arguments. Each <GlossaryTerm  term={"parameter"}><i>parameter</i></GlossaryTerm> in the required and optional sections of the :arguments *lambda-list* accesses the argument at the same position in the corresponding section of the <GlossaryTerm  term={"argument"}><i>arguments</i></GlossaryTerm>. If the section of the :arguments *lambda-list* is shorter, extra <GlossaryTerm  term={"argument"}><i>arguments</i></GlossaryTerm> are ignored. If the section of the :arguments *lambda-list* is longer, excess <GlossaryTerm styled={true} term={"required parameter"}><i>required parameters</i></GlossaryTerm> are bound to forms that evaluate to <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> and excess <GlossaryTerm styled={true} term={"optional parameter"}><i>optional parameters</i></GlossaryTerm> are <GlossaryTerm  term={"bound"}><i>bound</i></GlossaryTerm> to their initforms. The <GlossaryTerm styled={true} term={"keyword parameter"}><i>keyword parameters</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"rest parameter"}><i>rest parameters</i></GlossaryTerm> in the :arguments *lambda-list* access the keyword/rest section of the <GlossaryTerm  term={"argument"}><i>arguments</i></GlossaryTerm>. If the :arguments *lambda-list* contains **&amp;key**, it behaves as if it also contained **&amp;allow-other-keys**. 

In addition, **&amp;whole** *var* can be placed first in the :arguments *lambda-list*. It causes *var* to <DictionaryLink  term={"define-method-combination"}><b>define-method-combination</b></DictionaryLink> be <GlossaryTerm  term={"bound"}><i>bound</i></GlossaryTerm> to a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> that <GlossaryTerm  term={"evaluate"}><i>evaluates</i></GlossaryTerm> to a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> of all of the <GlossaryTerm  term={"argument"}><i>arguments</i></GlossaryTerm> supplied to the <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm>. This is different from `&rest` because it accesses all of the arguments, not just the keyword/rest <GlossaryTerm  term={"argument"}><i>arguments</i></GlossaryTerm>. 



Erroneous conditions detected by the body should be reported with 



<DictionaryLink  term={"method-combination-error"}><b>method-combination-error</b></DictionaryLink> or <DictionaryLink  term={"invalid-method-error"}><b>invalid-method-error</b></DictionaryLink>; these <GlossaryTerm  term={"function"}><i>functions</i></GlossaryTerm> add any necessary contextual information to the error message and will signal the appropriate error. 



The body <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> are evaluated inside of the <GlossaryTerm  term={"binding"}><i>bindings</i></GlossaryTerm> created by the <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> and method group specifiers. Declarations at the head of the body are positioned directly inside of <GlossaryTerm  term={"binding"}><i>bindings</i></GlossaryTerm> created by the <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> and outside of the <GlossaryTerm  term={"binding"}><i>bindings</i></GlossaryTerm> of the method group variables. Thus method group variables cannot be declared in this way. <DictionaryLink  term={"locally"}><b>locally</b></DictionaryLink> may be used around the body, however. 



Within the body <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm>, *generic-function-symbol* is bound to the *generic function object*. 



*Documentation* is attached as a <GlossaryTerm styled={true} term={"documentation string"}><i>documentation string</i></GlossaryTerm> to <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> (as kind <DictionaryLink  term={"method-combination"}><b>method-combination</b></DictionaryLink>) and to the *method combination object*. 



Note that two methods with identical specializers, but with different <GlossaryTerm  term={"qualifier"}><i>qualifiers</i></GlossaryTerm>, are not ordered by the algorithm described in Step 2 of the method selection and combination process described in Section 7.6.6 (Method Selection and Combination). Normally the two methods play different roles in the effective method because they have different <GlossaryTerm  term={"qualifier"}><i>qualifiers</i></GlossaryTerm>, and no matter how they are ordered in the result of Step 2, the effective method is the same. If the two methods play the same role and their order matters, an error is signaled. This happens as part of the <GlossaryTerm  term={"qualifier"}><i>qualifier</i></GlossaryTerm> pattern matching in <DictionaryLink  term={"define-method-combination"}><b>define-method-combination</b></DictionaryLink>. 



If a <DictionaryLink  term={"define-method-combination"}><b>define-method-combination</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> appears as a <GlossaryTerm styled={true} term={"top level form"}><i>top level form</i></GlossaryTerm>, the <GlossaryTerm  term={"compiler"}><i>compiler</i></GlossaryTerm> must make the *method combination name* be recognized as a valid *method combination name* in subsequent <DictionaryLink  term={"defgeneric"}><b>defgeneric</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm>. However, the <GlossaryTerm styled={true} term={"method combination"}><i>method combination</i></GlossaryTerm> is executed no earlier than when the <DictionaryLink  term={"define-method-combination"}><b>define-method-combination</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> is executed, and possibly as late as the time that <GlossaryTerm styled={true} term={"generic function"}><i>generic functions</i></GlossaryTerm> that use the <GlossaryTerm styled={true} term={"method combination"}><i>method combination</i></GlossaryTerm> are executed. 



**Examples:**
```lisp
Most examples of the long form of **define-method-combination** also illustrate the use of the related *functions* that are provided as part of the declarative method combination facility. 
;;; Examples of the short form of define-method-combination 
(define-method-combination and :identity-with-one-argument t) 
(defmethod func and ((x class1) y) ...) 
;;; The equivalent of this example in the long form is: 
(define-method-combination and
  (&optional (order :most-specific-first))
  ((around (:around))
   (primary (and) :order order :required t))
  (let ((form (if (rest primary)
                  '(and ,@(mapcar #'(lambda (method)
                                      '(call-method ,method))
                                    primary))
                  '(call-method ,(first primary)))))
    (if around
        '(call-method ,(first around)
                      (,@(rest around)
                         (make-method ,form)))
        form)))
;;; Examples of the long form of define-method-combination 
					;The default method-combination technique 
(define-method-combination standard () 
  ((around (:around)) 
   (before (:before)) 
   (primary () :required t) 
   (after (:after))) 
  (flet ((call-methods (methods) 
	   (mapcar #’(lambda (method) 
		       ‘(call-method ,method)) 
		     methods))) 
    (let ((form (if (or before after (rest primary)) 
		    ‘(multiple-value-prog1 
			 (progn ,@(call-methods before) 
				(call-method ,(first primary) 
					     ,(rest primary))) 
		       ,@(call-methods (reverse after))) 
		     ‘(call-method ,(first primary))))) 
      (if around 
	  ‘(call-method ,(first around) 
			(,@(rest around) 
			   (make-method ,form))) 
	   form)))) 
					;A simple way to try several methods until one returns non-nil 
(define-method-combination or () 
  ((methods (or))) 
  ‘(or ,@(mapcar #’(lambda (method) 
		     ‘(call-method ,method)) 
		   methods))) 

**define-method-combination** 
					;A more complete version of the preceding 
(define-method-combination or 
    (&optional (order ’:most-specific-first)) 
  ((around (:around)) 
   (primary (or))) 
  ;; Process the order argument 
  (case order 
    (:most-specific-first) 
    (:most-specific-last (setq primary (reverse primary))) 
    (otherwise (method-combination-error "~S is an invalid order.~@ 
:most-specific-first and :most-specific-last are the possible values." order))) 
  ;; Must have a primary method 
  (unless primary 
    (method-combination-error "A primary method is required.")) 
  ;; Construct the form that calls the primary methods 
  (let ((form (if (rest primary) 
		  ‘(or ,@(mapcar #’(lambda (method) 
				     ‘(call-method ,method)) 
				   primary)) 
		   ‘(call-method ,(first primary))))) 
    ;; Wrap the around methods around that form 
    (if around 
	‘(call-method ,(first around) 
		      (,@(rest around) 
			 (make-method ,form))) 
	 form))) 
					;The same thing, using the :order and :required keyword options 
(define-method-combination or 
    (&optional (order ’:most-specific-first)) 
  ((around (:around)) 
   (primary (or) :order order :required t)) 
  (let ((form (if (rest primary) 
		  ‘(or ,@(mapcar #’(lambda (method) 
				     ‘(call-method ,method)) 
				   primary)) 
		   ‘(call-method ,(first primary))))) 
    (if around 
	‘(call-method ,(first around) 
		      (,@(rest around) 
			 (make-method ,form))) 
	 form))) 

**define-method-combination** 
					;This short-form call is behaviorally identical to the preceding 
(define-method-combination or :identity-with-one-argument t) 
					;Order methods by positive integer qualifiers 
					;:around methods are disallowed to keep the example small 
(define-method-combination example-method-combination () 
  ((methods positive-integer-qualifier-p)) 
  ‘(progn ,@(mapcar #’(lambda (method) 
			‘(call-method ,method)) 
		      (stable-sort methods #’< 
				   :key #’(lambda (method) 
					    (first (method-qualifiers method))))))) 
(defun positive-integer-qualifier-p (method-qualifiers) 
  (and (= (length method-qualifiers) 1) 
       (typep (first method-qualifiers) ’(integer 0 \*)))) 
;;; Example of the use of :arguments 
(define-method-combination progn-with-lock () 
  ((methods ())) 
  (:arguments object) 
  ‘(unwind-protect 
	(progn (lock (object-lock ,object)) 
	       ,@(mapcar #’(lambda (method) 
			     ‘(call-method ,method)) 
			   methods)) 
     (unlock (object-lock ,object)))) 
```
**Side Effects:** 



The <GlossaryTerm  term={"compiler"}><i>compiler</i></GlossaryTerm> is not required to perform any compile-time side-effects. 



**Exceptional Situations:** 



Method combination types defined with the short form require exactly one <GlossaryTerm  term={"qualifier"}><i>qualifier</i></GlossaryTerm> per method. An error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"error"}><b>error</b></DictionaryLink> is signaled if there are applicable methods with no <GlossaryTerm  term={"qualifier"}><i>qualifiers</i></GlossaryTerm> or with <GlossaryTerm  term={"qualifier"}><i>qualifiers</i></GlossaryTerm> that are not supported by the method combination type. At least one primary method must be applicable or an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"error"}><b>error</b></DictionaryLink> is signaled. 



If an applicable method does not fall into any method group, the system signals an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"error"}><b>error</b></DictionaryLink> indicating that the method is invalid for the kind of method combination in use. 



If the value of the :required option is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> and the method group is empty (that is, no applicable methods match the <GlossaryTerm  term={"qualifier"}><i>qualifier</i></GlossaryTerm> patterns or satisfy the predicate), an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"error"}><b>error</b></DictionaryLink> is signaled. 



If the :order option evaluates to a value other than :most-specific-first or :most-specific-last, an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"error"}><b>error</b></DictionaryLink> is signaled. 







 



 



**See Also:** 



<DictionaryLink  term={"call-method"}><b>call-method</b></DictionaryLink>, <DictionaryLink  term={"call-next-method"}><b>call-next-method</b></DictionaryLink>, **documentation**, <DictionaryLink  term={"method-qualifiers"}><b>method-qualifiers</b></DictionaryLink>, <DictionaryLink  term={"method-combination-error"}><b>method-combination-error</b></DictionaryLink>, <DictionaryLink  term={"invalid-method-error"}><b>invalid-method-error</b></DictionaryLink>, <DictionaryLink  term={"defgeneric"}><b>defgeneric</b></DictionaryLink>, Section 7.6.6 (Method Selection and Combination), Section 7.6.6.4 (Built-in Method Combination Types), Section 3.4.11 (Syntactic Interaction of Documentation Strings and Declarations) 



**Notes:** 



The :method-combination option of <DictionaryLink  term={"defgeneric"}><b>defgeneric</b></DictionaryLink> is used to specify that a <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> should use a particular method combination type. The first argument to the :method-combination option is the <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> of a method combination type and the remaining arguments are options for that type. 




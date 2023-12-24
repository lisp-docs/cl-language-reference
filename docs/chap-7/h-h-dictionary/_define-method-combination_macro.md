**define-method-combination** <ClLinks styled={true} term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"define-method-combination"}><b>define-method-combination</b></ClLinks> <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> [[ *↓short-form-option* ]] 



→ name 



<ClLinks styled={true} term={"define-method-combination"}><b>define-method-combination</b></ClLinks> *name lambda-list* 



(*\{method-group-specifier\}*\*) 



[(:arguments *. args-lambda-list*)] 



[(:generic-function *generic-function-symbol*)] 



[[ <ClLinks styled={true} term={"declaration"}><i>\{declaration\}</i></ClLinks>\* *| documentation* ]] 



<ClLinks styled={true} term={"form"}><i>\{form\}</i></ClLinks>\* 



→ name 



*short-form-option::*=:documentation *documentation |* 



:identity-with-one-argument *identity-with-one-argument |* 



:operator <ClLinks styled={true} term={"operator"}><i>operator</i></ClLinks> 



*method-group-specifier::*=(*name \{\{qualifier-pattern\}*<sup>+</sup>*| predicate\}* [[ *↓long-form-option* ]]) 



*long-form-option::*=:description *description |* 



:order *order |* 



:required *required-p* 



**Arguments and Values:** 



*args-lambda-list*—a *define-method-combination arguments lambda list*. 



<ClLinks styled={true} term={"declaration"}><i>declaration</i></ClLinks>—a <ClLinks styled={true} term={"declare"}><b>declare</b></ClLinks> <ClLinks styled={true} term={"expression"}><i>expression</i></ClLinks>; not evaluated. 



*description*—a *format control*. 



*documentation*—a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>; not evaluated. 



<ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>—an *implicit progn* that must compute and return the <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> that specifies how the <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> are combined, that is, the *effective method*. 







 



 



<ClLinks styled={true} term={"define-method-combination"}><b>define-method-combination</b></ClLinks> 



*generic-function-symbol*—a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. 



*identity-with-one-argument*—a *generalized boolean*. 



*lambda-list*—*ordinary lambda list*. 



<ClLinks styled={true} term={"name"}><i>name</i></ClLinks>—a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. Non-<ClLinks styled={true} term={"keyword"}><i>keyword</i></ClLinks>, *non-nil symbols* are usually used. 



<ClLinks styled={true} term={"operator"}><i>operator</i></ClLinks>—an <ClLinks styled={true} term={"operator"}><i>operator</i></ClLinks> . <ClLinks styled={true} term={"name"}><i>Name</i></ClLinks> and <ClLinks styled={true} term={"operator"}><i>operator</i></ClLinks> are often the *same symbol*. This is the default, but it is not required. 



*order*—:most-specific-first or :most-specific-last; evaluated. 



<ClLinks styled={true} term={"predicate"}><i>predicate</i></ClLinks>—a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> that names a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of one argument that returns a *generalized boolean*. *qualifier-pattern*—a *list*, or the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> **\***. 



*required-p*—a *generalized boolean*. 



**Description:** 



The macro <ClLinks styled={true} term={"define-method-combination"}><b>define-method-combination</b></ClLinks> is used to define new types of method combination. 



There are two forms of <ClLinks styled={true} term={"define-method-combination"}><b>define-method-combination</b></ClLinks>. The short form is a simple facility for the cases that are expected to be most commonly needed. The long form is more powerful but more verbose. It resembles <ClLinks styled={true} term={"defmacro"}><b>defmacro</b></ClLinks> in that the body is an expression, usually using backquote, that computes a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. Thus arbitrary control structures can be implemented. The long form also allows 



arbitrary processing of method <ClLinks styled={true} term={"qualifier"}><i>qualifiers</i></ClLinks>. 



**Short Form** 



The short form syntax of <ClLinks styled={true} term={"define-method-combination"}><b>define-method-combination</b></ClLinks> is recognized when the sec ond <ClLinks styled={true} term={"subform"}><i>subform</i></ClLinks> is a <ClLinks styled={true} term={"non-nil"}><i>non-nil</i></ClLinks> symbol or is not present. When the short form is 



used, <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> is defined as a type of method combination that produces a Lisp form (*operator method-call method-call . . .*). The <ClLinks styled={true} term={"operator"}><i>operator</i></ClLinks> is a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> that can be the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> of a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>, <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks>, or *special operator* . The <ClLinks styled={true} term={"operator"}><i>operator</i></ClLinks> can be supplied by a keyword option; it defaults to <ClLinks styled={true} term={"name"}><i>name</i></ClLinks>. 



Keyword options for the short form are the following: 



*•* The :documentation option is used to document the method-combination type; see description of long form below. 



*•* The :identity-with-one-argument option enables an optimization when its value is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> (the default is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>). If there is exactly one applicable method and it is a 



primary method, that method serves as the effective method and <ClLinks styled={true} term={"operator"}><i>operator</i></ClLinks> is not 



called. This optimization avoids the need to create a new effective method and 



avoids the overhead of a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> call. This option is designed to be used with 



operators such as <ClLinks styled={true} term={"progn"}><b>progn</b></ClLinks>, <ClLinks styled={true} term={"and"}><b>and</b></ClLinks>, +, and <ClLinks styled={true} term={"max"}><b>max</b></ClLinks>. 







 



 



<ClLinks styled={true} term={"define-method-combination"}><b>define-method-combination</b></ClLinks> 



*•* The :operator option specifies the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> of the operator. The <ClLinks styled={true} term={"operator"}><i>operator</i></ClLinks> argument is a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> that can be the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> of a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>, <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks>, or *special form*. 



These types of method combination require exactly one <ClLinks styled={true} term={"qualifier"}><i>qualifier</i></ClLinks> per method. An error is signaled if there are applicable methods with no <ClLinks styled={true} term={"qualifier"}><i>qualifiers</i></ClLinks> or with <ClLinks styled={true} term={"qualifier"}><i>qualifiers</i></ClLinks> that are not supported by the method combination type. 



A method combination procedure defined in this way recognizes two roles for methods. A method whose one <ClLinks styled={true} term={"qualifier"}><i>qualifier</i></ClLinks> is the symbol naming this type of method combination is defined to be a primary method. At least one primary method must be applicable or an error is signaled. A method with :around as its one <ClLinks styled={true} term={"qualifier"}><i>qualifier</i></ClLinks> is an auxiliary method that behaves the same as an *around method* in standard method combination. The <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> 



<ClLinks styled={true} term={"call-next-method"}><b>call-next-method</b></ClLinks> can only be used in *around methods*; it cannot be used in primary methods defined by the short form of the <ClLinks styled={true} term={"define-method-combination"}><b>define-method-combination</b></ClLinks> macro. 



A method combination procedure defined in this way accepts an optional argument named *order*, which defaults to :most-specific-first. A value of :most-specific-last reverses the order of the primary methods without affecting the order of the auxiliary methods. 



The short form automatically includes error checking and support for *around methods*. 



For a discussion of built-in method combination types, see Section 7.6.6.4 (Built-in Method Combination Types). 



**Long Form** 



The long form syntax of <ClLinks styled={true} term={"define-method-combination"}><b>define-method-combination</b></ClLinks> is recognized when the second <ClLinks styled={true} term={"subform"}><i>subform</i></ClLinks> is a list. 



The *lambda-list* receives any arguments provided after the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> of the method combination type in the :method-combination option to <ClLinks styled={true} term={"defgeneric"}><b>defgeneric</b></ClLinks>. 



A list of method group specifiers follows. Each specifier selects a subset of the applicable methods to play a particular role, either by matching their <ClLinks styled={true} term={"qualifier"}><i>qualifiers</i></ClLinks> against some patterns or by testing their <ClLinks styled={true} term={"qualifier"}><i>qualifiers</i></ClLinks> with a <ClLinks styled={true} term={"predicate"}><i>predicate</i></ClLinks>. These method group specifiers define all method <ClLinks styled={true} term={"qualifier"}><i>qualifiers</i></ClLinks> that can be used with this type of method combination. 



The <ClLinks styled={true} term={"car"}><i>car</i></ClLinks> of each *method-group-specifier* is a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> which <ClLinks styled={true} term={"name"}><i>names</i></ClLinks> a <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks>. During the execution of the <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> in the body of <ClLinks styled={true} term={"define-method-combination"}><b>define-method-combination</b></ClLinks>, this <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks> is bound to a list of the <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> in the method group. The <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> in this list occur in the order specified by the :order option. 



If *qualifier-pattern* is a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> it must be **\***. A method matches a *qualifier-pattern* if the method’s list of <ClLinks styled={true} term={"qualifier"}><i>qualifiers</i></ClLinks> is <ClLinks styled={true} term={"equal"}><b>equal</b></ClLinks> to the *qualifier-pattern* (except that the symbol **\*** in a *qualifier-pattern* matches anything). Thus a *qualifier-pattern* can be one of the following: the *empty list*, which matches *unqualified methods*; the symbol **\***, which matches all methods; a true list, which matches methods with the same number of <ClLinks styled={true} term={"qualifier"}><i>qualifiers</i></ClLinks> as the length of the list when each <ClLinks styled={true} term={"qualifier"}><i>qualifier</i></ClLinks> matches the corresponding list element; or a dotted list that ends 







 



 



<ClLinks styled={true} term={"define-method-combination"}><b>define-method-combination</b></ClLinks> 



in the symbol **\*** (the **\*** matches any number of additional <ClLinks styled={true} term={"qualifier"}><i>qualifiers</i></ClLinks>). 



Each applicable method is tested against the *qualifier-patterns* and <ClLinks styled={true} term={"predicate"}><i>predicates</i></ClLinks> in left-to-right order. As soon as a *qualifier-pattern* matches or a <ClLinks styled={true} term={"predicate"}><i>predicate</i></ClLinks> returns true, the method becomes a member of the corresponding method group and no further tests are made. Thus if a method could be a member of more than one method group, it joins only the first such group. If a method group has more than one *qualifier-pattern*, a method need only satisfy one of the *qualifier-patterns* to be a member of the group. 



The <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> of a <ClLinks styled={true} term={"predicate"}><i>predicate</i></ClLinks> function can appear instead of *qualifier-patterns* in a method group specifier. The <ClLinks styled={true} term={"predicate"}><i>predicate</i></ClLinks> is called for each method that has not been assigned to an earlier method group; it is called with one argument, the method’s *qualifier list*. The <ClLinks styled={true} term={"predicate"}><i>predicate</i></ClLinks> should return true if the method is to be a member of the method group. A <ClLinks styled={true} term={"predicate"}><i>predicate</i></ClLinks> can be distinguished from a *qualifier-pattern* because it is a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> other than <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> or **\***. 



If there is an applicable method that does not fall into any method group, the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"invalid-method-error"}><b>invalid-method-error</b></ClLinks> is called. 



Method group specifiers can have keyword options following the <ClLinks styled={true} term={"qualifier"}><i>qualifier</i></ClLinks> patterns or predicate. Keyword options can be distinguished from additional <ClLinks styled={true} term={"qualifier"}><i>qualifier</i></ClLinks> patterns because they are neither lists nor the symbol **\***. The keyword options are as follows: 



*•* The :description option is used to provide a description of the role of methods in the method group. Programming environment tools use (apply #’format stream 



*format-control* (method-qualifiers <ClLinks styled={true} term={"method"}><i>method</i></ClLinks>)) to print this description, which is 



expected to be concise. This keyword option allows the description of a method 



<ClLinks styled={true} term={"qualifier"}><i>qualifier</i></ClLinks> to be defined in the same module that defines the meaning of the method 



<ClLinks styled={true} term={"qualifier"}><i>qualifier</i></ClLinks> . In most cases, *format-control* will not contain any <ClLinks styled={true} term={"format"}><b>format</b></ClLinks> directives, 



but they are available for generality. If :description is not supplied, a default 



description is generated based on the variable name and the <ClLinks styled={true} term={"qualifier"}><i>qualifier</i></ClLinks> patterns and 



on whether this method group includes the *unqualified methods*. 



*•* The :order option specifies the order of methods. The *order* argument is a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> that evaluates to :most-specific-first or :most-specific-last. If it evaluates 



to any other value, an error is signaled. If :order is not supplied, it defaults to 



:most-specific-first. 



*•* The :required option specifies whether at least one method in this method group is required. If its value is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> and the method group is empty (that is, no 



applicable methods match the <ClLinks styled={true} term={"qualifier"}><i>qualifier</i></ClLinks> patterns or satisfy the predicate), an error 



is signaled. If :required is not supplied, it defaults to <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



The use of method group specifiers provides a convenient syntax to select methods, to divide them among the possible roles, and to perform the necessary error checking. It is possible to perform further filtering of methods in the body <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> by using normal list-processing operations and the functions <ClLinks styled={true} term={"method-qualifiers"}><b>method-qualifiers</b></ClLinks> and <ClLinks styled={true} term={"invalid-method-error"}><b>invalid-method-error</b></ClLinks>. 



It is permissible to use <ClLinks styled={true} term={"setq"}><b>setq</b></ClLinks> on the variables named in the method group specifiers and 



 



 



<ClLinks styled={true} term={"define-method-combination"}><b>define-method-combination</b></ClLinks> 



to bind additional variables. It is also possible to bypass the method group specifier mechanism and do everything in the body <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>. This is accomplished by writing a single method group with **\*** as its only *qualifier-pattern*; the variable is then bound to a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of all of the *applicable methods*, in most-specific-first order. 



The body <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> compute and return the <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> that specifies how the methods are combined, that is, the e↵ective method. The e↵ective method is evaluated in the *null lexical environment* augmented with a local macro definition for <ClLinks styled={true} term={"call-method"}><b>call-method</b></ClLinks> and with bindings named by symbols not <ClLinks styled={true} term={"accessible"}><i>accessible</i></ClLinks> from the COMMON-LISP-USER <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. Given a method object in one of the <ClLinks styled={true} term={"list"}><i>lists</i></ClLinks> produced by the method group specifiers and a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of next methods, <ClLinks styled={true} term={"call-method"}><b>call-method</b></ClLinks> will invoke the method such that <ClLinks styled={true} term={"call-next-method"}><b>call-next-method</b></ClLinks> has available the next methods. 



When an e↵ective method has no e↵ect other than to call a single method, some implementations employ an optimization that uses the single method directly as the e↵ective method, thus avoiding the need to create a new e↵ective method. This optimization is active when the e↵ective method form consists entirely of an invocation of the <ClLinks styled={true} term={"call-method"}><b>call-method</b></ClLinks> macro whose first <ClLinks styled={true} term={"subform"}><i>subform</i></ClLinks> is a method object and whose second <ClLinks styled={true} term={"subform"}><i>subform</i></ClLinks> is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> or unsupplied. Each <ClLinks styled={true} term={"define-method-combination"}><b>define-method-combination</b></ClLinks> body is responsible for stripping o↵ redundant invocations of <ClLinks styled={true} term={"progn"}><b>progn</b></ClLinks>, <ClLinks styled={true} term={"and"}><b>and</b></ClLinks>, <ClLinks styled={true} term={"multiple-value-prog1"}><b>multiple-value-prog1</b></ClLinks>, and the like, if this optimization is desired. 



The list (:arguments . *lambda-list*) can appear before any declarations or *documentation string*. This form is useful when the method combination type performs some specific behavior as part of the combined method and that behavior needs access to the arguments to the *generic function*. Each parameter variable defined by *lambda-list* is bound to a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> that can be inserted into the e↵ective method. When this <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> is evaluated during execution of the e↵ective method, its value is the corresponding argument to the *generic function*; the consequences of using such a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> as the <ClLinks styled={true} term={"place"}><i>place</i></ClLinks> in a <ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> are undefined. Argument correspondence is computed by dividing the :arguments *lambda-list* and the *generic function lambda-list* into three sections: the *required parameters*, the *optional parameters*, and the <ClLinks styled={true} term={"keyword"}><i>keyword</i></ClLinks> and *rest parameters*. The <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> supplied to the *generic function* for a particular <ClLinks styled={true} term={"call"}><i>call</i></ClLinks> are also divided into three sections; the required <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> section contains as many <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> as the *generic function* has *required parameters*, the optional <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> section contains as many arguments as the *generic function* has *optional parameters*, and the keyword/rest <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> section contains the remaining arguments. Each <ClLinks styled={true} term={"parameter"}><i>parameter</i></ClLinks> in the required and optional sections of the :arguments *lambda-list* accesses the argument at the same position in the corresponding section of the <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks>. If the section of the :arguments *lambda-list* is shorter, extra <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> are ignored. If the section of the :arguments *lambda-list* is longer, excess *required parameters* are bound to forms that evaluate to <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> and excess *optional parameters* are <ClLinks styled={true} term={"bound"}><i>bound</i></ClLinks> to their initforms. The *keyword parameters* and *rest parameters* in the :arguments *lambda-list* access the keyword/rest section of the <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks>. If the :arguments *lambda-list* contains **&amp;key**, it behaves as if it also contained **&amp;allow-other-keys**. 



In addition, **&amp;whole** *var* can be placed first in the :arguments *lambda-list*. It causes *var* to 



 



 



<ClLinks styled={true} term={"define-method-combination"}><b>define-method-combination</b></ClLinks> 



be <ClLinks styled={true} term={"bound"}><i>bound</i></ClLinks> to a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> that <ClLinks styled={true} term={"evaluate"}><i>evaluates</i></ClLinks> to a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of all of the <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> supplied to the *generic function*. This is di↵erent from **&amp;rest** because it accesses all of the arguments, not just the keyword/rest <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks>. 



Erroneous conditions detected by the body should be reported with 



<ClLinks styled={true} term={"method-combination-error"}><b>method-combination-error</b></ClLinks> or <ClLinks styled={true} term={"invalid-method-error"}><b>invalid-method-error</b></ClLinks>; these <ClLinks styled={true} term={"function"}><i>functions</i></ClLinks> add any nec essary contextual information to the error message and will signal the appropriate error. 



The body <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> are evaluated inside of the <ClLinks styled={true} term={"binding"}><i>bindings</i></ClLinks> created by the *lambda list* and method group specifiers. Declarations at the head of the body are positioned directly inside of <ClLinks styled={true} term={"binding"}><i>bindings</i></ClLinks> created by the *lambda list* and outside of the <ClLinks styled={true} term={"binding"}><i>bindings</i></ClLinks> of the method group variables. Thus method group variables cannot be declared in this way. <ClLinks styled={true} term={"locally"}><b>locally</b></ClLinks> may be used around the body, however. 



Within the body <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>, *generic-function-symbol* is bound to the *generic function object*. 



*Documentation* is attached as a *documentation string* to <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> (as kind 



<ClLinks styled={true} term={"method-combination"}><b>method-combination</b></ClLinks>) and to the *method combination object*. 



Note that two methods with identical specializers, but with di↵erent <ClLinks styled={true} term={"qualifier"}><i>qualifiers</i></ClLinks>, are not ordered by the algorithm described in Step 2 of the method selection and combination process described in Section 7.6.6 (Method Selection and Combination). Normally the two methods play di↵erent roles in the e↵ective method because they have di↵erent <ClLinks styled={true} term={"qualifier"}><i>qualifiers</i></ClLinks>, and no matter how they are ordered in the result of Step 2, the e↵ective method is the same. If the two methods play the same role and their order matters, an error is signaled. This happens as part of the <ClLinks styled={true} term={"qualifier"}><i>qualifier</i></ClLinks> pattern matching in <ClLinks styled={true} term={"define-method-combination"}><b>define-method-combination</b></ClLinks>. 



If a <ClLinks styled={true} term={"define-method-combination"}><b>define-method-combination</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> appears as a *top level form*, the <ClLinks styled={true} term={"compiler"}><i>compiler</i></ClLinks> must make the *method combination name* be recognized as a valid *method combination name* in subsequent <ClLinks styled={true} term={"defgeneric"}><b>defgeneric</b></ClLinks> <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>. However, the *method combination* is executed no earlier than when the <ClLinks styled={true} term={"define-method-combination"}><b>define-method-combination</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> is executed, and possibly as late as the time that *generic functions* that use the *method combination* are executed. 



**Examples:**
```lisp

Most examples of the long form of **define-method-combination** also illustrate the use of the related *functions* that are provided as part of the declarative method combination facility. 
;;; Examples of the short form of define-method-combination 
(define-method-combination and :identity-with-one-argument t) 
(defmethod func and ((x class1) y) ...) 
;;; The equivalent of this example in the long form is: 
(define-method-combination and 

    
    
    **define-method-combination** 
  (&optional (order :most-specific-first)) 
  ((around (:around)) 
   (primary (and) :order order :required t)) 
  (let ((form (if (rest primary) 
		  ‘(and ,@(mapcar #’(lambda (method) 
				      ‘(call-method ,method)) 
				    primary)) 
		   ‘(call-method ,(first primary))))) 
    (if around 
	‘(call-method ,(first around) 
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
**Side Eects:** 



The <ClLinks styled={true} term={"compiler"}><i>compiler</i></ClLinks> is not required to perform any compile-time side-e↵ects. 



**Exceptional Situations:** 



Method combination types defined with the short form require exactly one <ClLinks styled={true} term={"qualifier"}><i>qualifier</i></ClLinks> per method. An error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"error"}><b>error</b></ClLinks> is signaled if there are applicable methods with no <ClLinks styled={true} term={"qualifier"}><i>qualifiers</i></ClLinks> or with <ClLinks styled={true} term={"qualifier"}><i>qualifiers</i></ClLinks> that are not supported by the method combination type. At least one primary method must be applicable or an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"error"}><b>error</b></ClLinks> is signaled. 



If an applicable method does not fall into any method group, the system signals an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"error"}><b>error</b></ClLinks> indicating that the method is invalid for the kind of method combination in use. 



If the value of the :required option is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> and the method group is empty (that is, no applicable methods match the <ClLinks styled={true} term={"qualifier"}><i>qualifier</i></ClLinks> patterns or satisfy the predicate), an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"error"}><b>error</b></ClLinks> is signaled. 



If the :order option evaluates to a value other than :most-specific-first or :most-specific-last, an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"error"}><b>error</b></ClLinks> is signaled. 







 



 



**See Also:** 



<ClLinks styled={true} term={"call-method"}><b>call-method</b></ClLinks>, <ClLinks styled={true} term={"call-next-method"}><b>call-next-method</b></ClLinks>, **documentation**, <ClLinks styled={true} term={"method-qualifiers"}><b>method-qualifiers</b></ClLinks>, <ClLinks styled={true} term={"method-combination-error"}><b>method-combination-error</b></ClLinks>, <ClLinks styled={true} term={"invalid-method-error"}><b>invalid-method-error</b></ClLinks>, <ClLinks styled={true} term={"defgeneric"}><b>defgeneric</b></ClLinks>, Section 7.6.6 (Method Selection and Combination), Sec tion 7.6.6.4 (Built-in Method Combination Types), Section 3.4.11 (Syntactic Interaction of Documentation Strings and Declarations) 



**Notes:** 



The :method-combination option of <ClLinks styled={true} term={"defgeneric"}><b>defgeneric</b></ClLinks> is used to specify that a *generic function* should use a particular method combination type. The first argument to the :method-combination option is the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> of a method combination type and the remaining arguments are options for that type. 




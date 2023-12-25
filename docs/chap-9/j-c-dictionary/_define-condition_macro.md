**define-condition** <ClLinks styled={true} term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"define-condition"}><b>define-condition</b></ClLinks> <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> (*\{parent-type\}*\*) (*\{↓slot-spec\}*\*) *\{option\}*\* 



→ name 



*slot-spec::*=*slot-name |* (*slot-name ↓slot-option*) 



*slot-option::*=[[ *\{*:reader <ClLinks styled={true} term={"symbol"}><i>symbol\}</i></ClLinks>\* *|* 



*\{*:writer *↓function-name\}*\* *|* 



*\{*:accessor <ClLinks styled={true} term={"symbol"}><i>symbol\}</i></ClLinks>\* *|* 



*\{*:allocation *↓allocation-type\} |* 



*\{*:initarg <ClLinks styled={true} term={"symbol"}><i>symbol\}</i></ClLinks>\* *|* 



*\{*:initform *form\} |* 



*\{*:type *type-specifier\}* ]] 



*option::*=[[(:default-initargs . *initarg-list*) *|* 



(:documentation <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>) *|* 



(:report *report-name*) ]] 







 



 



<ClLinks styled={true} term={"define-condition"}><b>define-condition</b></ClLinks> 



*function-name::*=*\{symbol |* (setf <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>)*\}* 



*allocation-type::*=:instance *|* :class 



*report-name::*=*string | symbol | lambda expression* 



**Arguments and Values:** 



<ClLinks styled={true} term={"name"}><i>name</i></ClLinks>—a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. 



*parent-type*—a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> naming a *condition type*. If no *parent-types* are supplied, the *parent-types* default to (condition). 



*default-initargs*—a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of *keyword/value pairs*. 



*Slot-spec* – the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> of a <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> or a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> consisting of the *slot-name* followed by zero or more *slot-options*. 



*Slot-name* – a slot name (a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>), the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of a slot name, or the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of slot name/slot form pairs. *Option* – Any of the following: 



:reader 



:reader can be supplied more than once for a given <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> and cannot be <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



:writer 



:writer can be supplied more than once for a given <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> and must name a *generic function*. :accessor 



:accessor can be supplied more than once for a given <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> and cannot be <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



:allocation 



:allocation can be supplied once at most for a given <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks>. The default if :allocation is not supplied is :instance. 



:initarg 



:initarg can be supplied more than once for a given <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks>. 



:initform 



:initform can be supplied once at most for a given <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks>. 



:type 



:type can be supplied once at most for a given <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks>. 







 



 



<ClLinks styled={true} term={"define-condition"}><b>define-condition</b></ClLinks> 



:documentation 



:documentation can be supplied once at most for a given <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks>. 



:report 



:report can be supplied once at most. 



**Description:** 



<ClLinks styled={true} term={"define-condition"}><b>define-condition</b></ClLinks> defines a new condition type called <ClLinks styled={true} term={"name"}><i>name</i></ClLinks>, which is a <ClLinks styled={true} term={"subtype"}><i>subtype</i></ClLinks> of the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> or <ClLinks styled={true} term={"type"}><i>types</i></ClLinks> named by *parent-type*. Each *parent-type* argument specifies a direct <ClLinks styled={true} term={"supertype"}><i>supertype</i></ClLinks> of the new <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks>. The new <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> inherits <ClLinks styled={true} term={"slot"}><i>slots</i></ClLinks> and <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> from each of its direct <ClLinks styled={true} term={"supertype"}><i>supertypes</i></ClLinks>, and so on. 



If a slot name/slot form pair is supplied, the slot form is a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> that can be evaluated by <ClLinks styled={true} term={"make-condition"}><b>make-condition</b></ClLinks> to produce a default value when an explicit value is not provided. If no slot form is supplied, the contents of the <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> is initialized in an <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> way. 



If the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> being defined and some other <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> from which it inherits have a slot by the same name, only one slot is allocated in the <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks>, but the supplied slot form overrides any slot form that might otherwise have been inherited from a *parent-type*. If no slot form is supplied, the inherited slot form (if any) is still visible. 



Accessors are created according to the same rules as used by <ClLinks styled={true} term={"defclass"}><b>defclass</b></ClLinks>. 



A description of *slot-options* follows: 



:reader 



The :reader slot option specifies that an *unqualified method* is to be defined on the *generic function* named by the argument to :reader to read the value of the given <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks>. 



*•* The :initform slot option is used to provide a default initial value form to be used in the initialization of the <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks>. This <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> is evaluated every time it is used to initialize the <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks>. The *lexical environment* in which this <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> is evaluated is the lexical <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks> in which the <ClLinks styled={true} term={"define-condition"}><b>define-condition</b></ClLinks> form was evaluated. Note that the *lexical environment* refers both to variables and to <ClLinks styled={true} term={"function"}><i>functions</i></ClLinks>. For *local slots*, the *dynamic environment* is the dynamic <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks> in which <ClLinks styled={true} term={"make-condition"}><b>make-condition</b></ClLinks> was called; for *shared slots*, the *dynamic environment* is the *dynamic environment* in which the <ClLinks styled={true} term={"define-condition"}><b>define-condition</b></ClLinks> form was evaluated. 



No implementation is permitted to extend the syntax of <ClLinks styled={true} term={"define-condition"}><b>define-condition</b></ClLinks> to allow (*slot-name form*) as an abbreviation for (*slot-name* :initform <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>). 



:initarg 



The :initarg slot option declares an initialization argument named by its <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> argument and specifies that this initialization argument initializes the given <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks>. If the initialization 







 



 



<ClLinks styled={true} term={"define-condition"}><b>define-condition</b></ClLinks> 



argument has a value in the call to <ClLinks styled={true} term={"initialize-instance"}><b>initialize-instance</b></ClLinks>, the value is stored into the given <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks>, and the slot’s :initform slot option, if any, is not evaluated. If none of the initialization arguments specified for a given <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> has a value, the <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> is initialized according to the :initform slot option, if specified. 



:type 



The :type slot option specifies that the contents of the <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> is always of the specified <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>. It effectively declares the result type of the reader generic function when applied to an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> of this <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> type. The consequences of attempting to store in a <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> a value that does not satisfy the type of the <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> is undefined. 



:default-initargs 



This option is treated the same as it would be <ClLinks styled={true} term={"defclass"}><b>defclass</b></ClLinks>. 



:documentation 



The :documentation slot option provides a *documentation string* for the <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks>. 



:report 



<ClLinks styled={true} term={"condition"}><i>Condition</i></ClLinks> reporting is mediated through the <ClLinks styled={true} term={"print-object"}><b>print-object</b></ClLinks> method for the <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> type in question, with <ClLinks styled={true} term={"print-escape"}><b>\*print-escape\*</b></ClLinks> always being <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. Specifying (:report *report-name*) in the definition of a condition type C is equivalent to: 



(defmethod print-object ((x c) stream) 



(if \*print-escape\* (call-next-method) (*report-name* x stream))) 



If the value supplied by the argument to :report (*report-name*) is a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> or a *lambda expression*, it must be acceptable to <ClLinks styled={true} term={"function"}><b>function</b></ClLinks>. (function *report-name*) is evaluated in the current *lexical environment*. It should return a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of two arguments, a <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> and a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>, that prints on the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> a description of the <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks>. This <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> is called whenever the <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> is printed while <ClLinks styled={true} term={"print-escape"}><b>\*print-escape\*</b></ClLinks> is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



If *report-name* is a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>, it is a shorthand for 



(lambda (condition stream) 



(declare (ignore condition)) 



(write-string *report-name* stream)) 



This option is processed after the new <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> type has been defined, so use of the <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> accessors within the :report function is permitted. If this option is not supplied, information about how to report this type of <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> is inherited from the *parent-type*. 



The consequences are unspecifed if an attempt is made to <ClLinks styled={true} term={"read"}><i>read</i></ClLinks> a <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> that has not been explicitly initialized and that has not been given a default value. 



The consequences are unspecified if an attempt is made to assign the <ClLinks styled={true} term={"slot"}><i>slots</i></ClLinks> by using <ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks>. 



 



 



<ClLinks styled={true} term={"define-condition"}><b>define-condition</b></ClLinks> 



If a <ClLinks styled={true} term={"define-condition"}><b>define-condition</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> appears as a *top level form*, the <ClLinks styled={true} term={"compiler"}><i>compiler</i></ClLinks> must make <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> recognizable as a valid <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> name, and it must be possible to reference the *condition type* as the *parent-type* of another *condition type* in a subsequent <ClLinks styled={true} term={"define-condition"}><b>define-condition</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> in the <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> being compiled. 



**Examples:**
```lisp
The following form defines a condition of *type* peg/hole-mismatch which inherits from a condition type called blocks-world-error: 
(define-condition peg/hole-mismatch 
    (blocks-world-error) 
  ((peg-shape :initarg :peg-shape 
	      :reader peg/hole-mismatch-peg-shape) 
   (hole-shape :initarg :hole-shape 
	       :reader peg/hole-mismatch-hole-shape)) 
  (:report (lambda (condition stream) 
	     (format stream "A ~A peg cannot go in a ~A hole." 
		     (peg/hole-mismatch-peg-shape condition) 
		     (peg/hole-mismatch-hole-shape condition))))) 
The new type has slots peg-shape and hole-shape, so **make-condition** accepts :peg-shape and :hole-shape keywords. The *readers* peg/hole-mismatch-peg-shape and peg/hole-mismatch-hole-shape apply to objects of this type, as illustrated in the :report information. 
The following form defines a *condition type* named machine-error which inherits from **error**: 
(define-condition machine-error 
    (error) 
  ((machine-name :initarg :machine-name 
		 :reader machine-error-machine-name)) 
  (:report (lambda (condition stream) 
	     (format stream "There is a problem with ~A." 
		     (machine-error-machine-name condition))))) 
Building on this definition, a new error condition can be defined which is a subtype of machine-error for use when machines are not available: 
(define-condition machine-not-available-error (machine-error) () 
  (:report (lambda (condition stream) 
	     (format stream "The machine ~A is not available." 
		     (machine-error-machine-name condition))))) 
This defines a still more specific condition, built upon machine-not-available-error, which provides a slot initialization form for machine-name but which does not provide any new slots or report information. It just gives the machine-name slot a default initialization: 
(define-condition my-favorite-machine-not-available-error 
    (machine-not-available-error) 
  
  
  ((machine-name :initform "mc.lcs.mit.edu"))) 
Note that since no :report clause was given, the information inherited from machine-not-available-error is used to report this type of condition. 
(define-condition ate-too-much (error) 
  ((person :initarg :person :reader ate-too-much-person) 
   (weight :initarg :weight :reader ate-too-much-weight) 
   (kind-of-food :initarg :kind-of-food 
		 :reader :ate-too-much-kind-of-food))) 
→ ATE-TOO-MUCH 
(define-condition ate-too-much-ice-cream (ate-too-much) 
  ((kind-of-food :initform ’ice-cream) 
   (flavor :initarg :flavor 
	   :reader ate-too-much-ice-cream-flavor 
	   :initform ’vanilla )) 
  (:report (lambda (condition stream) 
	     (format stream "~A ate too much ~A ice-cream" 
		     (ate-too-much-person condition) 
		     (ate-too-much-ice-cream-flavor condition))))) 
→ ATE-TOO-MUCH-ICE-CREAM 
(make-condition ’ate-too-much-ice-cream 
		 :person ’fred 
		 :weight 300 
		 :flavor ’chocolate) 
→ #<ATE-TOO-MUCH-ICE-CREAM 32236101> 
(format t "~A" \*) 
▷ FRED ate too much CHOCOLATE ice-cream 
→ NIL 
```
**See Also:** 



<ClLinks styled={true} term={"make-condition"}><b>make-condition</b></ClLinks>, <ClLinks styled={true} term={"defclass"}><b>defclass</b></ClLinks>, Section 9.1 (Condition System Concepts) 




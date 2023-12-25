**define-condition** <GlossaryTerm styled={true} term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"define-condition"}><b>define-condition</b></DictionaryLink> <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> (*\{parent-type\}*\*) (*\{↓slot-spec\}*\*) *\{option\}*\* 



*→ name* 



*slot-spec::*=*slot-name |* (*slot-name ↓slot-option*) 



*slot-option::*=[[ *\{*:reader <GlossaryTerm styled={true} term={"symbol"}><i>symbol\}</i></GlossaryTerm>\* *|* 



*\{*:writer *↓function-name\}*\* *|* 



*\{*:accessor <GlossaryTerm styled={true} term={"symbol"}><i>symbol\}</i></GlossaryTerm>\* *|* 



*\{*:allocation *↓allocation-type\} |* 



*\{*:initarg <GlossaryTerm styled={true} term={"symbol"}><i>symbol\}</i></GlossaryTerm>\* *|* 



*\{*:initform *form\} |* 



*\{*:type *type-specifier\}* ]] 



*option::*=[[(:default-initargs . *initarg-list*) *|* 



(:documentation <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>) *|* 



(:report *report-name*) ]] 







 



 



<DictionaryLink styled={true} term={"define-condition"}><b>define-condition</b></DictionaryLink> 



*function-name::*=*\{symbol |* (setf <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>)*\}* 



*allocation-type::*=:instance *|* :class 



*report-name::*=*string | symbol | lambda expression* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. 



*parent-type*—a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> naming a *condition type*. If no *parent-types* are supplied, the *parent-types* default to (condition). 



*default-initargs*—a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of *keyword/value pairs*. 



*Slot-spec* – the <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> of a <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> or a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> consisting of the *slot-name* followed by zero or more *slot-options*. 



*Slot-name* – a slot name (a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>), the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of a slot name, or the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of slot name/slot form pairs. *Option* – Any of the following: 



:reader 



:reader can be supplied more than once for a given <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> and cannot be <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



:writer 



:writer can be supplied more than once for a given <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> and must name a *generic function*. :accessor 



:accessor can be supplied more than once for a given <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> and cannot be <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



:allocation 



:allocation can be supplied once at most for a given <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm>. The default if :allocation is not supplied is :instance. 



:initarg 



:initarg can be supplied more than once for a given <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm>. 



:initform 



:initform can be supplied once at most for a given <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm>. 



:type 



:type can be supplied once at most for a given <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm>. 







 



 



<DictionaryLink styled={true} term={"define-condition"}><b>define-condition</b></DictionaryLink> 



:documentation 



:documentation can be supplied once at most for a given <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm>. 



:report 



:report can be supplied once at most. 



**Description:** 



<DictionaryLink styled={true} term={"define-condition"}><b>define-condition</b></DictionaryLink> defines a new condition type called <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>, which is a <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm> named by *parent-type*. Each *parent-type* argument specifies a direct <GlossaryTerm styled={true} term={"supertype"}><i>supertype</i></GlossaryTerm> of the new <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm>. The new <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> inherits <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> from each of its direct <GlossaryTerm styled={true} term={"supertype"}><i>supertypes</i></GlossaryTerm>, and so on. 



If a slot name/slot form pair is supplied, the slot form is a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> that can be evaluated by <DictionaryLink styled={true} term={"make-condition"}><b>make-condition</b></DictionaryLink> to produce a default value when an explicit value is not provided. If no slot form is supplied, the contents of the <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> is initialized in an <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> way. 



If the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> being defined and some other <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> from which it inherits have a slot by the same name, only one slot is allocated in the <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm>, but the supplied slot form overrides any slot form that might otherwise have been inherited from a *parent-type*. If no slot form is supplied, the inherited slot form (if any) is still visible. 



Accessors are created according to the same rules as used by <DictionaryLink styled={true} term={"defclass"}><b>defclass</b></DictionaryLink>. 



A description of *slot-options* follows: 



:reader 



The :reader slot option specifies that an *unqualified method* is to be defined on the *generic function* named by the argument to :reader to read the value of the given <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm>. 



*•* The :initform slot option is used to provide a default initial value form to be used in the initialization of the <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm>. This <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> is evaluated every time it is used to initialize the <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm>. The *lexical environment* in which this <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> is evaluated is the lexical <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm> in which the <DictionaryLink styled={true} term={"define-condition"}><b>define-condition</b></DictionaryLink> form was evaluated. Note that the *lexical environment* refers both to variables and to <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm>. For *local slots*, the *dynamic environment* is the dynamic <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm> in which <DictionaryLink styled={true} term={"make-condition"}><b>make-condition</b></DictionaryLink> was called; for *shared slots*, the *dynamic environment* is the *dynamic environment* in which the <DictionaryLink styled={true} term={"define-condition"}><b>define-condition</b></DictionaryLink> form was evaluated. 



No implementation is permitted to extend the syntax of <DictionaryLink styled={true} term={"define-condition"}><b>define-condition</b></DictionaryLink> to allow (*slot-name form*) as an abbreviation for (*slot-name* :initform <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>). 



:initarg 



The :initarg slot option declares an initialization argument named by its <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> argument and specifies that this initialization argument initializes the given <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm>. If the initialization 







 



 



<DictionaryLink styled={true} term={"define-condition"}><b>define-condition</b></DictionaryLink> 



argument has a value in the call to <DictionaryLink styled={true} term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink>, the value is stored into the given <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm>, and the slot’s :initform slot option, if any, is not evaluated. If none of the initialization arguments specified for a given <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> has a value, the <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> is initialized according to the :initform slot option, if specified. 



:type 



The :type slot option specifies that the contents of the <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> is always of the specified <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>. It effectively declares the result type of the reader generic function when applied to an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of this <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> type. The consequences of attempting to store in a <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> a value that does not satisfy the type of the <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> is undefined. 



:default-initargs 



This option is treated the same as it would be <DictionaryLink styled={true} term={"defclass"}><b>defclass</b></DictionaryLink>. 



:documentation 



The :documentation slot option provides a *documentation string* for the <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm>. 



:report 



<GlossaryTerm styled={true} term={"condition"}><i>Condition</i></GlossaryTerm> reporting is mediated through the <DictionaryLink styled={true} term={"print-object"}><b>print-object</b></DictionaryLink> method for the <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> type in question, with <DictionaryLink styled={true} term={"print-escape"}><b>\*print-escape\*</b></DictionaryLink> always being <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. Specifying (:report *report-name*) in the definition of a condition type C is equivalent to: 



(defmethod print-object ((x c) stream) 



(if \*print-escape\* (call-next-method) (*report-name* x stream))) 



If the value supplied by the argument to :report (*report-name*) is a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> or a *lambda expression*, it must be acceptable to <DictionaryLink styled={true} term={"function"}><b>function</b></DictionaryLink>. (function *report-name*) is evaluated in the current *lexical environment*. It should return a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of two arguments, a <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> and a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>, that prints on the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> a description of the <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm>. This <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> is called whenever the <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> is printed while <DictionaryLink styled={true} term={"print-escape"}><b>\*print-escape\*</b></DictionaryLink> is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



If *report-name* is a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>, it is a shorthand for 



(lambda (condition stream) 



(declare (ignore condition)) 



(write-string *report-name* stream)) 



This option is processed after the new <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> type has been defined, so use of the <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> accessors within the :report function is permitted. If this option is not supplied, information about how to report this type of <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> is inherited from the *parent-type*. 



The consequences are unspecifed if an attempt is made to <GlossaryTerm styled={true} term={"read"}><i>read</i></GlossaryTerm> a <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> that has not been explicitly initialized and that has not been given a default value. 



The consequences are unspecified if an attempt is made to assign the <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm> by using <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink>. 



 



 



<DictionaryLink styled={true} term={"define-condition"}><b>define-condition</b></DictionaryLink> 



If a <DictionaryLink styled={true} term={"define-condition"}><b>define-condition</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> appears as a *top level form*, the <GlossaryTerm styled={true} term={"compiler"}><i>compiler</i></GlossaryTerm> must make <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> recognizable as a valid <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> name, and it must be possible to reference the *condition type* as the *parent-type* of another *condition type* in a subsequent <DictionaryLink styled={true} term={"define-condition"}><b>define-condition</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm> being compiled. 



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
*→* ATE-TOO-MUCH 
(define-condition ate-too-much-ice-cream (ate-too-much) 
  ((kind-of-food :initform ’ice-cream) 
   (flavor :initarg :flavor 
	   :reader ate-too-much-ice-cream-flavor 
	   :initform ’vanilla )) 
  (:report (lambda (condition stream) 
	     (format stream "~A ate too much ~A ice-cream" 
		     (ate-too-much-person condition) 
		     (ate-too-much-ice-cream-flavor condition))))) 
*→* ATE-TOO-MUCH-ICE-CREAM 
(make-condition ’ate-too-much-ice-cream 
		 :person ’fred 
		 :weight 300 
		 :flavor ’chocolate) 
*→* #<ATE-TOO-MUCH-ICE-CREAM 32236101> 
(format t "~A" \*) 
▷ FRED ate too much CHOCOLATE ice-cream 
*→* NIL 

```
**See Also:** 



<DictionaryLink styled={true} term={"make-condition"}><b>make-condition</b></DictionaryLink>, <DictionaryLink styled={true} term={"defclass"}><b>defclass</b></DictionaryLink>, Section 9.1 (Condition System Concepts) 




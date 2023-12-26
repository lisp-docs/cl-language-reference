**defclass** <GlossaryTerm  term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink> *class-name* (*\{superclass-name\}*\*) (*\{slot-specifier\}*\*) [[*↓class-option* ]] 



→ new-class 



*slot-specifier*::= *slot-name |* (*slot-name* [[*↓slot-option* ]]) 



*slot-name*::= <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> 



*slot-option*::= *\{*:reader *reader-function-name\}*\* *|* 



*\{*:writer *writer-function-name\}*\* *|* 



*\{*:accessor *reader-function-name\}*\* *|* 



*\{*:allocation *allocation-type\} |* 



*\{*:initarg *initarg-name\}*\* *|* 



*\{*:initform *form\} |* 



*\{*:type *type-specifier\} |* 



*\{*:documentation <GlossaryTerm  term={"string"}><i>string\}</i></GlossaryTerm> 



*function-name*::= *\{symbol |* (setf <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>)*\}* 



*class-option*::= (:default-initargs . *initarg-list*) *|* 



(:documentation <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>) *|* 



(:metaclass *class-name*) 







 



 



<DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink> 



**Arguments and Values:** 



*Class-name*—a *non-nil symbol*. 



*Superclass-name*–a *non-nil symbol*. 



*Slot-name*–a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>. The *slot-name* argument is a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> that is syntactically valid for use as a variable name. 



*Reader-function-name*—a *non-nil symbol*. :reader can be supplied more than once for a given <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm>. 



*Writer-function-name*—a *generic function* name. :writer can be supplied more than once for a given <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm>. 



*Reader-function-name*—a *non-nil symbol*. :accessor can be supplied more than once for a given <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm>. 



*Allocation-type*—(member :instance :class). :allocation can be supplied once at most for a given <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm>. 



*Initarg-name*—a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>. :initarg can be supplied more than once for a given <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm>. <GlossaryTerm  term={"form"}><i>Form</i></GlossaryTerm>—a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. :init-form can be supplied once at most for a given <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm>. 



*Type-specifier*—a *type specifier* . :type can be supplied once at most for a given <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm>. *Class-option*— refers to the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> as a whole or to all class <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm>. 



*Initarg-list*—a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> of alternating initialization argument <GlossaryTerm  term={"name"}><i>names</i></GlossaryTerm> and default initial value <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm>. :default-initargs can be supplied at most once. 



*Class-name*—a *non-nil symbol*. :metaclass can be supplied once at most. 



*new-class*—the new *class object*. 



**Description:** 



The macro <DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink> defines a new named <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>. It returns the new *class object* as its result. 



The syntax of <DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink> provides options for specifying initialization arguments for <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm>, for specifying default initialization values for <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm>, and for requesting that <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> on specified *generic functions* be automatically generated for reading and writing the values of <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm>. No reader or writer functions are defined by default; their generation must be explicitly requested. However, <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm> can always be *accessed* using <DictionaryLink  term={"slot-value"}><b>slot-value</b></DictionaryLink>. 



Defining a new <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> also causes a <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> of the same name to be defined. The predicate (typep *object class-name*) returns true if the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> of the given <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> is the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> named by *class-name* itself or a subclass of the class *class-name*. A *class object* can be used as a *type specifier* . Thus (typep *object class*) returns <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> if the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> of the <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> is <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> itself or a subclass of <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>. 



The *class-name* argument specifies the *proper name* of the new <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>. If a <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> with the same 



 



 



<DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink> 



*proper name* already exists and that <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> is an <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> of <DictionaryLink  term={"standard-class"}><b>standard-class</b></DictionaryLink>, and if the <DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink> form for the definition of the new <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> specifies a <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> of <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink  term={"standard-class"}><b>standard-class</b></DictionaryLink>, the existing <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> is redefined, and instances of it (and its *subclasses*) are updated to the new definition at the time that they are next *accessed*. For details, see Section 4.3.6 (Redefining Classes). 



Each *superclass-name* argument specifies a direct <GlossaryTerm  term={"superclass"}><i>superclass</i></GlossaryTerm> of the new <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>. If the <GlossaryTerm  term={"superclass"}><i>superclass</i></GlossaryTerm> list is empty, then the <GlossaryTerm  term={"superclass"}><i>superclass</i></GlossaryTerm> defaults depending on the <GlossaryTerm  term={"metaclass"}><i>metaclass</i></GlossaryTerm>, with <DictionaryLink  term={"standard-object"}><b>standard-object</b></DictionaryLink> being the default for <DictionaryLink  term={"standard-class"}><b>standard-class</b></DictionaryLink>. 



The new <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> will inherit <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm> and <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> from each of its direct *superclasses*, from their direct *superclasses*, and so on. For a discussion of how <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm> and <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> are inherited, see Section 4.3.4 (Inheritance). 



The following slot options are available: 



*•* The :reader slot option specifies that an *unqualified method* is to be defined on the *generic function* named *reader-function-name* to read the value of the given <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm>. 



*•* The :writer slot option specifies that an *unqualified method* is to be defined on the *generic function* named *writer-function-name* to write the value of the <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm>. 



*•* The :accessor slot option specifies that an *unqualified method* is to be defined on the generic function named *reader-function-name* to read the value of the given <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> and that an *unqualified method* is to be defined on the *generic function* named (setf *reader-function-name*) to be used with <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> to modify the value of the <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm>. 



*•* The :allocation slot option is used to specify where storage is to be allocated for the given <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm>. Storage for a <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> can be located in each instance or in the *class object* itself. The value of the *allocation-type* argument can be either the keyword :instance or the keyword :class. If the :allocation slot option is not specified, the effect is the same as specifying :allocation :instance. 



– If *allocation-type* is :instance, a <GlossaryTerm styled={true} term={"local slot"}><i>local slot</i></GlossaryTerm> of the name *slot-name* is allocated in each instance of the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>. 



– If *allocation-type* is :class, a shared <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> of the given name is allocated in the *class object* created by this <DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink> form. The value of the <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> is shared by all 



<GlossaryTerm  term={"instance"}><i>instances</i></GlossaryTerm> of the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>. If a class *C*<sub>1</sub> defines such a <GlossaryTerm styled={true} term={"shared slot"}><i>shared slot</i></GlossaryTerm>, any subclass *C*<sub>2</sub> of 



*C*<sub>1</sub> will share this single <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> unless the <DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink> form for *C*<sub>2</sub> specifies a <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> of the 



same <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> or there is a superclass of *C*<sub>2</sub> that precedes *C*<sub>1</sub> in the class precedence 



list of *C*<sub>2</sub> and that defines a <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> of the same <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm>. 



*•* The :initform slot option is used to provide a default initial value form to be used in the initialization of the <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm>. This <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> is evaluated every time it is used to initialize the <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm>. The lexical environment in which this <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> is evaluated is the lexical environment in which the <DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink> form was evaluated. Note that the lexical environment refers both to variables 







 



 



<DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink> 



and to functions. For <GlossaryTerm styled={true} term={"local slot"}><i>local slots</i></GlossaryTerm>, the dynamic environment is the dynamic environment in which <DictionaryLink  term={"make-instance"}><b>make-instance</b></DictionaryLink> is called; for shared <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm>, the dynamic environment is the dynamic environment in which the <DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink> form was evaluated. See Section 7.1 (Object Creation and Initialization). 



No implementation is permitted to extend the syntax of <DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink> to allow (*slot-name form*) as an abbreviation for (*slot-name* :initform <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>). 



*•* The :initarg slot option declares an initialization argument named *initarg-name* and specifies that this initialization argument initializes the given <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm>. If the initialization argument has a value in the call to <DictionaryLink  term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink>, the value will be stored into the given <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm>, and the slot’s :initform slot option, if any, is not evaluated. If none of the initialization arguments specified for a given <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> has a value, the <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> is initialized according to the :initform slot option, if specified. 



*•* The :type slot option specifies that the contents of the <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> will always be of the specified data type. It effectively declares the result type of the reader generic function when applied to an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> of this <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>. The consequences of attempting to store in a <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> a value that does not satisfy the type of the <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> are undefined. The :type slot option is further discussed in Section 7.5.3 (Inheritance of Slots and Slot Options). 



*•* The :documentation slot option provides a <GlossaryTerm styled={true} term={"documentation string"}><i>documentation string</i></GlossaryTerm> for the <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm>. :documentation can be supplied once at most for a given <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm>. 



Each class option is an option that refers to the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> as a whole. The following class options are available: 



*•* The :default-initargs class option is followed by a list of alternating initialization argument <GlossaryTerm  term={"name"}><i>names</i></GlossaryTerm> and default initial value forms. If any of these initialization arguments does not appear in the initialization argument list supplied to <DictionaryLink  term={"make-instance"}><b>make-instance</b></DictionaryLink>, the corresponding default initial value form is evaluated, and the initialization argument <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> and the <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>’s value are added to the end of the initialization argument list before the instance is created; see Section 7.1 (Object Creation and Initialization). The default initial value form is evaluated each time it is used. The lexical environment in which this <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> is evaluated is the lexical environment in which the <DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink> form was evaluated. The dynamic environment is the dynamic environment in which <DictionaryLink  term={"make-instance"}><b>make-instance</b></DictionaryLink> was called. If an initialization argument <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> appears more than once in a :default-initargs class option, an error is signaled. 



*•* The :documentation class option causes a <GlossaryTerm styled={true} term={"documentation string"}><i>documentation string</i></GlossaryTerm> to be attached with the *class object*, and attached with kind <DictionaryLink  term={"type"}><b>type</b></DictionaryLink> to the *class-name*. :documentation can be supplied once at most. 



*•* The :metaclass class option is used to specify that instances of the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> being defined are to have a different metaclass than the default provided by the system (the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink  term={"standard-class"}><b>standard-class</b></DictionaryLink>). 







 



 



<DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink> 



Note the following rules of <DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink> for *standard classes*: 



*•* It is not required that the *superclasses* of a <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> be defined before the <DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink> form for that <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> is evaluated. 



*•* All the *superclasses* of a <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> must be defined before an <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> of the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> can be made. 



*•* A <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> must be defined before it can be used as a parameter specializer in a <DictionaryLink  term={"defmethod"}><b>defmethod</b></DictionaryLink> form. 



The object system can be extended to cover situations where these rules are not obeyed. 



Some slot options are inherited by a <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> from its *superclasses*, and some can be shadowed or altered by providing a local slot description. No class options except :default-initargs are inherited. For a detailed description of how <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm> and slot options are inherited, see Section 7.5.3 (Inheritance of Slots and Slot Options). 



The options to <DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink> can be extended. It is required that all implementations signal an error if they observe a class option or a slot option that is not implemented locally. 



It is valid to specify more than one reader, writer, accessor, or initialization argument for a <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm>. No other slot option can appear more than once in a single slot description, or an error is signaled. 



If no reader, writer, or accessor is specified for a <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm>, the <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> can only be *accessed* by the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"slot-value"}><b>slot-value</b></DictionaryLink>. 



If a <DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> appears as a <GlossaryTerm styled={true} term={"top level form"}><i>top level form</i></GlossaryTerm>, the <GlossaryTerm  term={"compiler"}><i>compiler</i></GlossaryTerm> must make the *class name* be recognized as a valid *type name* in subsequent declarations (as for <DictionaryLink  term={"deftype"}><b>deftype</b></DictionaryLink>) and be recognized as a valid *class name* for <DictionaryLink  term={"defmethod"}><b>defmethod</b></DictionaryLink> <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializers</i></GlossaryTerm> and for use as the :metaclass option of a subsequent <DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink>. The <GlossaryTerm  term={"compiler"}><i>compiler</i></GlossaryTerm> must make the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> definition available to be returned by <DictionaryLink  term={"find-class"}><b>find-class</b></DictionaryLink> when its *environment argument* is a value received as the <GlossaryTerm styled={true} term={"environment parameter"}><i>environment parameter</i></GlossaryTerm> of a <GlossaryTerm  term={"macro"}><i>macro</i></GlossaryTerm>. 



**Exceptional Situations:** 



If there are any duplicate slot names, an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"program-error"}><b>program-error</b></DictionaryLink> is signaled. 



If an initialization argument <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> appears more than once in :default-initargs class option, an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"program-error"}><b>program-error</b></DictionaryLink> is signaled. 



If any of the following slot options appears more than once in a single slot description, an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"program-error"}><b>program-error</b></DictionaryLink> is signaled: :allocation, :initform, :type, :documentation. 



It is required that all implementations signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"program-error"}><b>program-error</b></DictionaryLink> if they observe a class option or a slot option that is not implemented locally. 



**See Also:** 



**documentation**, <DictionaryLink  term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink>, <DictionaryLink  term={"make-instance"}><b>make-instance</b></DictionaryLink>, <DictionaryLink  term={"slot-value"}><b>slot-value</b></DictionaryLink>, Section 4.3 (Classes), Section 4.3.4 (Inheritance), Section 4.3.6 (Redefining Classes), Section 4.3.5 (Determining the Class Precedence 







 



 



List), Section 7.1 (Object Creation and Initialization) 




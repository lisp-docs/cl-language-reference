**defclass** <GlossaryTerm styled={true} term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"defclass"}><b>defclass</b></DictionaryLink> *class-name* (*\{superclass-name\}*\*) (*\{slot-specifier\}*\*) [[*↓class-option* ]] 



*→ new-class* 



*slot-specifier*::= *slot-name |* (*slot-name* [[*↓slot-option* ]]) 



*slot-name*::= <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> 



*slot-option*::= *\{*:reader *reader-function-name\}*\* *|* 



*\{*:writer *writer-function-name\}*\* *|* 



*\{*:accessor *reader-function-name\}*\* *|* 



*\{*:allocation *allocation-type\} |* 



*\{*:initarg *initarg-name\}*\* *|* 



*\{*:initform *form\} |* 



*\{*:type *type-specifier\} |* 



*\{*:documentation <GlossaryTerm styled={true} term={"string"}><i>string\}</i></GlossaryTerm> 



*function-name*::= *\{symbol |* (setf <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>)*\}* 



*class-option*::= (:default-initargs . *initarg-list*) *|* 



(:documentation <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>) *|* 



(:metaclass *class-name*) 







 



 



<DictionaryLink styled={true} term={"defclass"}><b>defclass</b></DictionaryLink> 



**Arguments and Values:** 



*Class-name*—a *non-nil symbol*. 



*Superclass-name*–a *non-nil symbol*. 



*Slot-name*–a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. The *slot-name* argument is a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> that is syntactically valid for use as a variable name. 



*Reader-function-name*—a *non-nil symbol*. :reader can be supplied more than once for a given <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm>. 



*Writer-function-name*—a *generic function* name. :writer can be supplied more than once for a given <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm>. 



*Reader-function-name*—a *non-nil symbol*. :accessor can be supplied more than once for a given <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm>. 



*Allocation-type*—(member :instance :class). :allocation can be supplied once at most for a given <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm>. 



*Initarg-name*—a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. :initarg can be supplied more than once for a given <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm>. <GlossaryTerm styled={true} term={"form"}><i>Form</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. :init-form can be supplied once at most for a given <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm>. 



*Type-specifier*—a *type specifier* . :type can be supplied once at most for a given <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm>. *Class-option*— refers to the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> as a whole or to all class <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm>. 



*Initarg-list*—a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of alternating initialization argument <GlossaryTerm styled={true} term={"name"}><i>names</i></GlossaryTerm> and default initial value <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>. :default-initargs can be supplied at most once. 



*Class-name*—a *non-nil symbol*. :metaclass can be supplied once at most. 



*new-class*—the new *class object*. 



**Description:** 



The macro <DictionaryLink styled={true} term={"defclass"}><b>defclass</b></DictionaryLink> defines a new named <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>. It returns the new *class object* as its result. 



The syntax of <DictionaryLink styled={true} term={"defclass"}><b>defclass</b></DictionaryLink> provides options for specifying initialization arguments for <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm>, for specifying default initialization values for <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm>, and for requesting that <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> on specified *generic functions* be automatically generated for reading and writing the values of <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm>. No reader or writer functions are defined by default; their generation must be explicitly requested. However, <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm> can always be *accessed* using <DictionaryLink styled={true} term={"slot-value"}><b>slot-value</b></DictionaryLink>. 



Defining a new <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> also causes a <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> of the same name to be defined. The predicate (typep *object class-name*) returns true if the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> of the given <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> named by *class-name* itself or a subclass of the class *class-name*. A *class object* can be used as a *type specifier* . Thus (typep *object class*) returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> itself or a subclass of <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>. 



The *class-name* argument specifies the *proper name* of the new <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>. If a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> with the same 



 



 



<DictionaryLink styled={true} term={"defclass"}><b>defclass</b></DictionaryLink> 



*proper name* already exists and that <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> is an <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> of <DictionaryLink styled={true} term={"standard-class"}><b>standard-class</b></DictionaryLink>, and if the <DictionaryLink styled={true} term={"defclass"}><b>defclass</b></DictionaryLink> form for the definition of the new <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> specifies a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink styled={true} term={"standard-class"}><b>standard-class</b></DictionaryLink>, the existing <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> is redefined, and instances of it (and its *subclasses*) are updated to the new definition at the time that they are next *accessed*. For details, see Section 4.3.6 (Redefining Classes). 



Each *superclass-name* argument specifies a direct <GlossaryTerm styled={true} term={"superclass"}><i>superclass</i></GlossaryTerm> of the new <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>. If the <GlossaryTerm styled={true} term={"superclass"}><i>superclass</i></GlossaryTerm> list is empty, then the <GlossaryTerm styled={true} term={"superclass"}><i>superclass</i></GlossaryTerm> defaults depending on the <GlossaryTerm styled={true} term={"metaclass"}><i>metaclass</i></GlossaryTerm>, with <DictionaryLink styled={true} term={"standard-object"}><b>standard-object</b></DictionaryLink> being the default for <DictionaryLink styled={true} term={"standard-class"}><b>standard-class</b></DictionaryLink>. 



The new <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> will inherit <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> from each of its direct *superclasses*, from their direct *superclasses*, and so on. For a discussion of how <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> are inherited, see Section 4.3.4 (Inheritance). 



The following slot options are available: 



*•* The :reader slot option specifies that an *unqualified method* is to be defined on the *generic function* named *reader-function-name* to read the value of the given <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm>. 



*•* The :writer slot option specifies that an *unqualified method* is to be defined on the *generic function* named *writer-function-name* to write the value of the <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm>. 



*•* The :accessor slot option specifies that an *unqualified method* is to be defined on the generic function named *reader-function-name* to read the value of the given <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> and that an *unqualified method* is to be defined on the *generic function* named (setf *reader-function-name*) to be used with <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> to modify the value of the <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm>. 



*•* The :allocation slot option is used to specify where storage is to be allocated for the given <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm>. Storage for a <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> can be located in each instance or in the *class object* itself. The value of the *allocation-type* argument can be either the keyword :instance or the keyword :class. If the :allocation slot option is not specified, the effect is the same as specifying :allocation :instance. 



– If *allocation-type* is :instance, a *local slot* of the name *slot-name* is allocated in each instance of the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>. 



– If *allocation-type* is :class, a shared <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> of the given name is allocated in the *class object* created by this <DictionaryLink styled={true} term={"defclass"}><b>defclass</b></DictionaryLink> form. The value of the <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> is shared by all 



<GlossaryTerm styled={true} term={"instance"}><i>instances</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>. If a class *C*<sub>1</sub> defines such a *shared slot*, any subclass *C*<sub>2</sub> of 



*C*<sub>1</sub> will share this single <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> unless the <DictionaryLink styled={true} term={"defclass"}><b>defclass</b></DictionaryLink> form for *C*<sub>2</sub> specifies a <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> of the 



same <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> or there is a superclass of *C*<sub>2</sub> that precedes *C*<sub>1</sub> in the class precedence 



list of *C*<sub>2</sub> and that defines a <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> of the same <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>. 



*•* The :initform slot option is used to provide a default initial value form to be used in the initialization of the <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm>. This <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> is evaluated every time it is used to initialize the <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm>. The lexical environment in which this <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> is evaluated is the lexical environment in which the <DictionaryLink styled={true} term={"defclass"}><b>defclass</b></DictionaryLink> form was evaluated. Note that the lexical environment refers both to variables 







 



 



<DictionaryLink styled={true} term={"defclass"}><b>defclass</b></DictionaryLink> 



and to functions. For *local slots*, the dynamic environment is the dynamic environment in which <DictionaryLink styled={true} term={"make-instance"}><b>make-instance</b></DictionaryLink> is called; for shared <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm>, the dynamic environment is the dynamic environment in which the <DictionaryLink styled={true} term={"defclass"}><b>defclass</b></DictionaryLink> form was evaluated. See Section 7.1 (Object Creation and Initialization). 



No implementation is permitted to extend the syntax of <DictionaryLink styled={true} term={"defclass"}><b>defclass</b></DictionaryLink> to allow (*slot-name form*) as an abbreviation for (*slot-name* :initform <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>). 



*•* The :initarg slot option declares an initialization argument named *initarg-name* and specifies that this initialization argument initializes the given <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm>. If the initialization argument has a value in the call to <DictionaryLink styled={true} term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink>, the value will be stored into the given <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm>, and the slot’s :initform slot option, if any, is not evaluated. If none of the initialization arguments specified for a given <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> has a value, the <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> is initialized according to the :initform slot option, if specified. 



*•* The :type slot option specifies that the contents of the <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> will always be of the specified data type. It effectively declares the result type of the reader generic function when applied to an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of this <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>. The consequences of attempting to store in a <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> a value that does not satisfy the type of the <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> are undefined. The :type slot option is further discussed in Section 7.5.3 (Inheritance of Slots and Slot Options). 



*•* The :documentation slot option provides a *documentation string* for the <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm>. :documentation can be supplied once at most for a given <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm>. 



Each class option is an option that refers to the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> as a whole. The following class options are available: 



*•* The :default-initargs class option is followed by a list of alternating initialization argument <GlossaryTerm styled={true} term={"name"}><i>names</i></GlossaryTerm> and default initial value forms. If any of these initialization arguments does not appear in the initialization argument list supplied to <DictionaryLink styled={true} term={"make-instance"}><b>make-instance</b></DictionaryLink>, the corresponding default initial value form is evaluated, and the initialization argument <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> and the <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>’s value are added to the end of the initialization argument list before the instance is created; see Section 7.1 (Object Creation and Initialization). The default initial value form is evaluated each time it is used. The lexical environment in which this <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> is evaluated is the lexical environment in which the <DictionaryLink styled={true} term={"defclass"}><b>defclass</b></DictionaryLink> form was evaluated. The dynamic environment is the dynamic environment in which <DictionaryLink styled={true} term={"make-instance"}><b>make-instance</b></DictionaryLink> was called. If an initialization argument <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> appears more than once in a :default-initargs class option, an error is signaled. 



*•* The :documentation class option causes a *documentation string* to be attached with the *class object*, and attached with kind <DictionaryLink styled={true} term={"type"}><b>type</b></DictionaryLink> to the *class-name*. :documentation can be supplied once at most. 



*•* The :metaclass class option is used to specify that instances of the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> being defined are to have a different metaclass than the default provided by the system (the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink styled={true} term={"standard-class"}><b>standard-class</b></DictionaryLink>). 







 



 



<DictionaryLink styled={true} term={"defclass"}><b>defclass</b></DictionaryLink> 



Note the following rules of <DictionaryLink styled={true} term={"defclass"}><b>defclass</b></DictionaryLink> for *standard classes*: 



*•* It is not required that the *superclasses* of a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> be defined before the <DictionaryLink styled={true} term={"defclass"}><b>defclass</b></DictionaryLink> form for that <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> is evaluated. 



*•* All the *superclasses* of a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> must be defined before an <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> can be made. 



*•* A <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> must be defined before it can be used as a parameter specializer in a <DictionaryLink styled={true} term={"defmethod"}><b>defmethod</b></DictionaryLink> form. 



The object system can be extended to cover situations where these rules are not obeyed. 



Some slot options are inherited by a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> from its *superclasses*, and some can be shadowed or altered by providing a local slot description. No class options except :default-initargs are inherited. For a detailed description of how <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm> and slot options are inherited, see Section 7.5.3 (Inheritance of Slots and Slot Options). 



The options to <DictionaryLink styled={true} term={"defclass"}><b>defclass</b></DictionaryLink> can be extended. It is required that all implementations signal an error if they observe a class option or a slot option that is not implemented locally. 



It is valid to specify more than one reader, writer, accessor, or initialization argument for a <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm>. No other slot option can appear more than once in a single slot description, or an error is signaled. 



If no reader, writer, or accessor is specified for a <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm>, the <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> can only be *accessed* by the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"slot-value"}><b>slot-value</b></DictionaryLink>. 



If a <DictionaryLink styled={true} term={"defclass"}><b>defclass</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> appears as a *top level form*, the <GlossaryTerm styled={true} term={"compiler"}><i>compiler</i></GlossaryTerm> must make the *class name* be recognized as a valid *type name* in subsequent declarations (as for <DictionaryLink styled={true} term={"deftype"}><b>deftype</b></DictionaryLink>) and be recognized as a valid *class name* for <DictionaryLink styled={true} term={"defmethod"}><b>defmethod</b></DictionaryLink> *parameter specializers* and for use as the :metaclass option of a subsequent <DictionaryLink styled={true} term={"defclass"}><b>defclass</b></DictionaryLink>. The <GlossaryTerm styled={true} term={"compiler"}><i>compiler</i></GlossaryTerm> must make the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> definition available to be returned by <DictionaryLink styled={true} term={"find-class"}><b>find-class</b></DictionaryLink> when its *environment argument* is a value received as the *environment parameter* of a <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm>. 



**Exceptional Situations:** 



If there are any duplicate slot names, an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"program-error"}><b>program-error</b></DictionaryLink> is signaled. 



If an initialization argument <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> appears more than once in :default-initargs class option, an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"program-error"}><b>program-error</b></DictionaryLink> is signaled. 



If any of the following slot options appears more than once in a single slot description, an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"program-error"}><b>program-error</b></DictionaryLink> is signaled: :allocation, :initform, :type, :documentation. 



It is required that all implementations signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"program-error"}><b>program-error</b></DictionaryLink> if they observe a class option or a slot option that is not implemented locally. 



**See Also:** 



**documentation**, <DictionaryLink styled={true} term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink>, <DictionaryLink styled={true} term={"make-instance"}><b>make-instance</b></DictionaryLink>, <DictionaryLink styled={true} term={"slot-value"}><b>slot-value</b></DictionaryLink>, Section 4.3 (Classes), Section 4.3.4 (Inheritance), Section 4.3.6 (Redefining Classes), Section 4.3.5 (Determining the Class Precedence 







 



 



List), Section 7.1 (Object Creation and Initialization) 




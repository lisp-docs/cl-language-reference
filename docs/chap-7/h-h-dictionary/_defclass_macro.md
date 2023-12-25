**defclass** <ClLinks  term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"defclass"}><b>defclass</b></ClLinks> *class-name* (*\{superclass-name\}*\*) (*\{slot-specifier\}*\*) [[*↓class-option* ]] 



→ new-class 



*slot-specifier*::= *slot-name |* (*slot-name* [[*↓slot-option* ]]) 



*slot-name*::= <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> 



*slot-option*::= *\{*:reader *reader-function-name\}*\* *|* 



*\{*:writer *writer-function-name\}*\* *|* 



*\{*:accessor *reader-function-name\}*\* *|* 



*\{*:allocation *allocation-type\} |* 



*\{*:initarg *initarg-name\}*\* *|* 



*\{*:initform *form\} |* 



*\{*:type *type-specifier\} |* 



*\{*:documentation <ClLinks  term={"string"}><i>string\}</i></ClLinks> 



*function-name*::= *\{symbol |* (setf <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>)*\}* 



*class-option*::= (:default-initargs . *initarg-list*) *|* 



(:documentation <ClLinks  term={"string"}><i>string</i></ClLinks>) *|* 



(:metaclass *class-name*) 







 



 



<ClLinks  term={"defclass"}><b>defclass</b></ClLinks> 



**Arguments and Values:** 



*Class-name*—a *non-nil symbol*. 



*Superclass-name*–a *non-nil symbol*. 



*Slot-name*–a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. The *slot-name* argument is a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> that is syntactically valid for use as a variable name. 



*Reader-function-name*—a *non-nil symbol*. :reader can be supplied more than once for a given <ClLinks  term={"slot"}><i>slot</i></ClLinks>. 



*Writer-function-name*—a *generic function* name. :writer can be supplied more than once for a given <ClLinks  term={"slot"}><i>slot</i></ClLinks>. 



*Reader-function-name*—a *non-nil symbol*. :accessor can be supplied more than once for a given <ClLinks  term={"slot"}><i>slot</i></ClLinks>. 



*Allocation-type*—(member :instance :class). :allocation can be supplied once at most for a given <ClLinks  term={"slot"}><i>slot</i></ClLinks>. 



*Initarg-name*—a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. :initarg can be supplied more than once for a given <ClLinks  term={"slot"}><i>slot</i></ClLinks>. <ClLinks  term={"form"}><i>Form</i></ClLinks>—a <ClLinks  term={"form"}><i>form</i></ClLinks>. :init-form can be supplied once at most for a given <ClLinks  term={"slot"}><i>slot</i></ClLinks>. 



*Type-specifier*—a *type specifier* . :type can be supplied once at most for a given <ClLinks  term={"slot"}><i>slot</i></ClLinks>. *Class-option*— refers to the <ClLinks  term={"class"}><i>class</i></ClLinks> as a whole or to all class <ClLinks  term={"slot"}><i>slots</i></ClLinks>. 



*Initarg-list*—a <ClLinks  term={"list"}><i>list</i></ClLinks> of alternating initialization argument <ClLinks  term={"name"}><i>names</i></ClLinks> and default initial value <ClLinks  term={"form"}><i>forms</i></ClLinks>. :default-initargs can be supplied at most once. 



*Class-name*—a *non-nil symbol*. :metaclass can be supplied once at most. 



*new-class*—the new *class object*. 



**Description:** 



The macro <ClLinks  term={"defclass"}><b>defclass</b></ClLinks> defines a new named <ClLinks  term={"class"}><i>class</i></ClLinks>. It returns the new *class object* as its result. 



The syntax of <ClLinks  term={"defclass"}><b>defclass</b></ClLinks> provides options for specifying initialization arguments for <ClLinks  term={"slot"}><i>slots</i></ClLinks>, for specifying default initialization values for <ClLinks  term={"slot"}><i>slots</i></ClLinks>, and for requesting that <ClLinks  term={"method"}><i>methods</i></ClLinks> on specified *generic functions* be automatically generated for reading and writing the values of <ClLinks  term={"slot"}><i>slots</i></ClLinks>. No reader or writer functions are defined by default; their generation must be explicitly requested. However, <ClLinks  term={"slot"}><i>slots</i></ClLinks> can always be *accessed* using <ClLinks  term={"slot-value"}><b>slot-value</b></ClLinks>. 



Defining a new <ClLinks  term={"class"}><i>class</i></ClLinks> also causes a <ClLinks  term={"type"}><i>type</i></ClLinks> of the same name to be defined. The predicate (typep *object class-name*) returns true if the <ClLinks  term={"class"}><i>class</i></ClLinks> of the given <ClLinks  term={"object"}><i>object</i></ClLinks> is the <ClLinks  term={"class"}><i>class</i></ClLinks> named by *class-name* itself or a subclass of the class *class-name*. A *class object* can be used as a *type specifier* . Thus (typep *object class*) returns <ClLinks  term={"true"}><i>true</i></ClLinks> if the <ClLinks  term={"class"}><i>class</i></ClLinks> of the <ClLinks  term={"object"}><i>object</i></ClLinks> is <ClLinks  term={"class"}><i>class</i></ClLinks> itself or a subclass of <ClLinks  term={"class"}><i>class</i></ClLinks>. 



The *class-name* argument specifies the *proper name* of the new <ClLinks  term={"class"}><i>class</i></ClLinks>. If a <ClLinks  term={"class"}><i>class</i></ClLinks> with the same 



 



 



<ClLinks  term={"defclass"}><b>defclass</b></ClLinks> 



*proper name* already exists and that <ClLinks  term={"class"}><i>class</i></ClLinks> is an <ClLinks  term={"instance"}><i>instance</i></ClLinks> of <ClLinks  term={"standard-class"}><b>standard-class</b></ClLinks>, and if the <ClLinks  term={"defclass"}><b>defclass</b></ClLinks> form for the definition of the new <ClLinks  term={"class"}><i>class</i></ClLinks> specifies a <ClLinks  term={"class"}><i>class</i></ClLinks> of <ClLinks  term={"class"}><i>class</i></ClLinks> <ClLinks  term={"standard-class"}><b>standard-class</b></ClLinks>, the existing <ClLinks  term={"class"}><i>class</i></ClLinks> is redefined, and instances of it (and its *subclasses*) are updated to the new definition at the time that they are next *accessed*. For details, see Section 4.3.6 (Redefining Classes). 



Each *superclass-name* argument specifies a direct <ClLinks  term={"superclass"}><i>superclass</i></ClLinks> of the new <ClLinks  term={"class"}><i>class</i></ClLinks>. If the <ClLinks  term={"superclass"}><i>superclass</i></ClLinks> list is empty, then the <ClLinks  term={"superclass"}><i>superclass</i></ClLinks> defaults depending on the <ClLinks  term={"metaclass"}><i>metaclass</i></ClLinks>, with <ClLinks  term={"standard-object"}><b>standard-object</b></ClLinks> being the default for <ClLinks  term={"standard-class"}><b>standard-class</b></ClLinks>. 



The new <ClLinks  term={"class"}><i>class</i></ClLinks> will inherit <ClLinks  term={"slot"}><i>slots</i></ClLinks> and <ClLinks  term={"method"}><i>methods</i></ClLinks> from each of its direct *superclasses*, from their direct *superclasses*, and so on. For a discussion of how <ClLinks  term={"slot"}><i>slots</i></ClLinks> and <ClLinks  term={"method"}><i>methods</i></ClLinks> are inherited, see Section 4.3.4 (Inheritance). 



The following slot options are available: 



*•* The :reader slot option specifies that an *unqualified method* is to be defined on the *generic function* named *reader-function-name* to read the value of the given <ClLinks  term={"slot"}><i>slot</i></ClLinks>. 



*•* The :writer slot option specifies that an *unqualified method* is to be defined on the *generic function* named *writer-function-name* to write the value of the <ClLinks  term={"slot"}><i>slot</i></ClLinks>. 



*•* The :accessor slot option specifies that an *unqualified method* is to be defined on the generic function named *reader-function-name* to read the value of the given <ClLinks  term={"slot"}><i>slot</i></ClLinks> and that an *unqualified method* is to be defined on the *generic function* named (setf *reader-function-name*) to be used with <ClLinks  term={"setf"}><b>setf</b></ClLinks> to modify the value of the <ClLinks  term={"slot"}><i>slot</i></ClLinks>. 



*•* The :allocation slot option is used to specify where storage is to be allocated for the given <ClLinks  term={"slot"}><i>slot</i></ClLinks>. Storage for a <ClLinks  term={"slot"}><i>slot</i></ClLinks> can be located in each instance or in the *class object* itself. The value of the *allocation-type* argument can be either the keyword :instance or the keyword :class. If the :allocation slot option is not specified, the effect is the same as specifying :allocation :instance. 



– If *allocation-type* is :instance, a *local slot* of the name *slot-name* is allocated in each instance of the <ClLinks  term={"class"}><i>class</i></ClLinks>. 



– If *allocation-type* is :class, a shared <ClLinks  term={"slot"}><i>slot</i></ClLinks> of the given name is allocated in the *class object* created by this <ClLinks  term={"defclass"}><b>defclass</b></ClLinks> form. The value of the <ClLinks  term={"slot"}><i>slot</i></ClLinks> is shared by all 



<ClLinks  term={"instance"}><i>instances</i></ClLinks> of the <ClLinks  term={"class"}><i>class</i></ClLinks>. If a class *C*<sub>1</sub> defines such a *shared slot*, any subclass *C*<sub>2</sub> of 



*C*<sub>1</sub> will share this single <ClLinks  term={"slot"}><i>slot</i></ClLinks> unless the <ClLinks  term={"defclass"}><b>defclass</b></ClLinks> form for *C*<sub>2</sub> specifies a <ClLinks  term={"slot"}><i>slot</i></ClLinks> of the 



same <ClLinks  term={"name"}><i>name</i></ClLinks> or there is a superclass of *C*<sub>2</sub> that precedes *C*<sub>1</sub> in the class precedence 



list of *C*<sub>2</sub> and that defines a <ClLinks  term={"slot"}><i>slot</i></ClLinks> of the same <ClLinks  term={"name"}><i>name</i></ClLinks>. 



*•* The :initform slot option is used to provide a default initial value form to be used in the initialization of the <ClLinks  term={"slot"}><i>slot</i></ClLinks>. This <ClLinks  term={"form"}><i>form</i></ClLinks> is evaluated every time it is used to initialize the <ClLinks  term={"slot"}><i>slot</i></ClLinks>. The lexical environment in which this <ClLinks  term={"form"}><i>form</i></ClLinks> is evaluated is the lexical environment in which the <ClLinks  term={"defclass"}><b>defclass</b></ClLinks> form was evaluated. Note that the lexical environment refers both to variables 







 



 



<ClLinks  term={"defclass"}><b>defclass</b></ClLinks> 



and to functions. For *local slots*, the dynamic environment is the dynamic environment in which <ClLinks  term={"make-instance"}><b>make-instance</b></ClLinks> is called; for shared <ClLinks  term={"slot"}><i>slots</i></ClLinks>, the dynamic environment is the dynamic environment in which the <ClLinks  term={"defclass"}><b>defclass</b></ClLinks> form was evaluated. See Section 7.1 (Object Creation and Initialization). 



No implementation is permitted to extend the syntax of <ClLinks  term={"defclass"}><b>defclass</b></ClLinks> to allow (*slot-name form*) as an abbreviation for (*slot-name* :initform <ClLinks  term={"form"}><i>form</i></ClLinks>). 



*•* The :initarg slot option declares an initialization argument named *initarg-name* and specifies that this initialization argument initializes the given <ClLinks  term={"slot"}><i>slot</i></ClLinks>. If the initialization argument has a value in the call to <ClLinks  term={"initialize-instance"}><b>initialize-instance</b></ClLinks>, the value will be stored into the given <ClLinks  term={"slot"}><i>slot</i></ClLinks>, and the slot’s :initform slot option, if any, is not evaluated. If none of the initialization arguments specified for a given <ClLinks  term={"slot"}><i>slot</i></ClLinks> has a value, the <ClLinks  term={"slot"}><i>slot</i></ClLinks> is initialized according to the :initform slot option, if specified. 



*•* The :type slot option specifies that the contents of the <ClLinks  term={"slot"}><i>slot</i></ClLinks> will always be of the specified data type. It effectively declares the result type of the reader generic function when applied to an <ClLinks  term={"object"}><i>object</i></ClLinks> of this <ClLinks  term={"class"}><i>class</i></ClLinks>. The consequences of attempting to store in a <ClLinks  term={"slot"}><i>slot</i></ClLinks> a value that does not satisfy the type of the <ClLinks  term={"slot"}><i>slot</i></ClLinks> are undefined. The :type slot option is further discussed in Section 7.5.3 (Inheritance of Slots and Slot Options). 



*•* The :documentation slot option provides a *documentation string* for the <ClLinks  term={"slot"}><i>slot</i></ClLinks>. :documentation can be supplied once at most for a given <ClLinks  term={"slot"}><i>slot</i></ClLinks>. 



Each class option is an option that refers to the <ClLinks  term={"class"}><i>class</i></ClLinks> as a whole. The following class options are available: 



*•* The :default-initargs class option is followed by a list of alternating initialization argument <ClLinks  term={"name"}><i>names</i></ClLinks> and default initial value forms. If any of these initialization arguments does not appear in the initialization argument list supplied to <ClLinks  term={"make-instance"}><b>make-instance</b></ClLinks>, the corresponding default initial value form is evaluated, and the initialization argument <ClLinks  term={"name"}><i>name</i></ClLinks> and the <ClLinks  term={"form"}><i>form</i></ClLinks>’s value are added to the end of the initialization argument list before the instance is created; see Section 7.1 (Object Creation and Initialization). The default initial value form is evaluated each time it is used. The lexical environment in which this <ClLinks  term={"form"}><i>form</i></ClLinks> is evaluated is the lexical environment in which the <ClLinks  term={"defclass"}><b>defclass</b></ClLinks> form was evaluated. The dynamic environment is the dynamic environment in which <ClLinks  term={"make-instance"}><b>make-instance</b></ClLinks> was called. If an initialization argument <ClLinks  term={"name"}><i>name</i></ClLinks> appears more than once in a :default-initargs class option, an error is signaled. 



*•* The :documentation class option causes a *documentation string* to be attached with the *class object*, and attached with kind <ClLinks  term={"type"}><b>type</b></ClLinks> to the *class-name*. :documentation can be supplied once at most. 



*•* The :metaclass class option is used to specify that instances of the <ClLinks  term={"class"}><i>class</i></ClLinks> being defined are to have a different metaclass than the default provided by the system (the <ClLinks  term={"class"}><i>class</i></ClLinks> <ClLinks  term={"standard-class"}><b>standard-class</b></ClLinks>). 







 



 



<ClLinks  term={"defclass"}><b>defclass</b></ClLinks> 



Note the following rules of <ClLinks  term={"defclass"}><b>defclass</b></ClLinks> for *standard classes*: 



*•* It is not required that the *superclasses* of a <ClLinks  term={"class"}><i>class</i></ClLinks> be defined before the <ClLinks  term={"defclass"}><b>defclass</b></ClLinks> form for that <ClLinks  term={"class"}><i>class</i></ClLinks> is evaluated. 



*•* All the *superclasses* of a <ClLinks  term={"class"}><i>class</i></ClLinks> must be defined before an <ClLinks  term={"instance"}><i>instance</i></ClLinks> of the <ClLinks  term={"class"}><i>class</i></ClLinks> can be made. 



*•* A <ClLinks  term={"class"}><i>class</i></ClLinks> must be defined before it can be used as a parameter specializer in a <ClLinks  term={"defmethod"}><b>defmethod</b></ClLinks> form. 



The object system can be extended to cover situations where these rules are not obeyed. 



Some slot options are inherited by a <ClLinks  term={"class"}><i>class</i></ClLinks> from its *superclasses*, and some can be shadowed or altered by providing a local slot description. No class options except :default-initargs are inherited. For a detailed description of how <ClLinks  term={"slot"}><i>slots</i></ClLinks> and slot options are inherited, see Section 7.5.3 (Inheritance of Slots and Slot Options). 



The options to <ClLinks  term={"defclass"}><b>defclass</b></ClLinks> can be extended. It is required that all implementations signal an error if they observe a class option or a slot option that is not implemented locally. 



It is valid to specify more than one reader, writer, accessor, or initialization argument for a <ClLinks  term={"slot"}><i>slot</i></ClLinks>. No other slot option can appear more than once in a single slot description, or an error is signaled. 



If no reader, writer, or accessor is specified for a <ClLinks  term={"slot"}><i>slot</i></ClLinks>, the <ClLinks  term={"slot"}><i>slot</i></ClLinks> can only be *accessed* by the <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"slot-value"}><b>slot-value</b></ClLinks>. 



If a <ClLinks  term={"defclass"}><b>defclass</b></ClLinks> <ClLinks  term={"form"}><i>form</i></ClLinks> appears as a *top level form*, the <ClLinks  term={"compiler"}><i>compiler</i></ClLinks> must make the *class name* be recognized as a valid *type name* in subsequent declarations (as for <ClLinks  term={"deftype"}><b>deftype</b></ClLinks>) and be recognized as a valid *class name* for <ClLinks  term={"defmethod"}><b>defmethod</b></ClLinks> *parameter specializers* and for use as the :metaclass option of a subsequent <ClLinks  term={"defclass"}><b>defclass</b></ClLinks>. The <ClLinks  term={"compiler"}><i>compiler</i></ClLinks> must make the <ClLinks  term={"class"}><i>class</i></ClLinks> definition available to be returned by <ClLinks  term={"find-class"}><b>find-class</b></ClLinks> when its *environment argument* is a value received as the *environment parameter* of a <ClLinks  term={"macro"}><i>macro</i></ClLinks>. 



**Exceptional Situations:** 



If there are any duplicate slot names, an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"program-error"}><b>program-error</b></ClLinks> is signaled. 



If an initialization argument <ClLinks  term={"name"}><i>name</i></ClLinks> appears more than once in :default-initargs class option, an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"program-error"}><b>program-error</b></ClLinks> is signaled. 



If any of the following slot options appears more than once in a single slot description, an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"program-error"}><b>program-error</b></ClLinks> is signaled: :allocation, :initform, :type, :documentation. 



It is required that all implementations signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"program-error"}><b>program-error</b></ClLinks> if they observe a class option or a slot option that is not implemented locally. 



**See Also:** 



**documentation**, <ClLinks  term={"initialize-instance"}><b>initialize-instance</b></ClLinks>, <ClLinks  term={"make-instance"}><b>make-instance</b></ClLinks>, <ClLinks  term={"slot-value"}><b>slot-value</b></ClLinks>, Section 4.3 (Classes), Section 4.3.4 (Inheritance), Section 4.3.6 (Redefining Classes), Section 4.3.5 (Determining the Class Precedence 







 



 



List), Section 7.1 (Object Creation and Initialization) 




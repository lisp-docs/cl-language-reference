 



<GlossaryTerm styled={true} term={"method"}><i>Methods</i></GlossaryTerm> define the class-specific or identity-specific behavior and operations of a *generic function*. 



A *method object* is associated with <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm> that implements the method’s behavior, a sequence of *parameter specializers* that specify when the given <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> is applicable, a *lambda list*, and a sequence of <GlossaryTerm styled={true} term={"qualifier"}><i>qualifiers</i></GlossaryTerm> that are used by the method combination facility to distinguish among <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm>. 



A method object is not a function and cannot be invoked as a function. Various mechanisms in the object system take a method object and invoke its method function, as is the case when a generic function is invoked. When this occurs it is said that the method is invoked or called. 



A method-defining form contains the <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm> that is to be run when the arguments to the generic function cause the method that it defines to be invoked. When a method-defining form is evaluated, a method object is created and one of four actions is taken: 



*•* If a *generic function* of the given name already exists and if a *method object* already exists that agrees with the new one on *parameter specializers* and <GlossaryTerm styled={true} term={"qualifier"}><i>qualifiers</i></GlossaryTerm>, the new *method object* replaces the old one. For a definition of one method agreeing with another on *parameter specializers* and <GlossaryTerm styled={true} term={"qualifier"}><i>qualifiers</i></GlossaryTerm>, see Section 7.6.3 (Agreement on Parameter Specializers and Qualifiers). 



*•* If a *generic function* of the given name already exists and if there is no *method object* that agrees with the new one on *parameter specializers* and <GlossaryTerm styled={true} term={"qualifier"}><i>qualifiers</i></GlossaryTerm>, the existing *generic function object* is modified to contain the new *method object*. 



*•* If the given <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> names an *ordinary function*, a <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm>, or a *special operator* , an error is signaled. 



*•* Otherwise a *generic function* is created with the <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> specified by the *method-defining form*. 







 



 



If the *lambda list* of a new <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> is not <GlossaryTerm styled={true} term={"congruent"}><i>congruent</i></GlossaryTerm> with the *lambda list* of the *generic function*, an error is signaled. If a *method-defining operator* that cannot specify *generic function* options creates a new *generic function*, a *lambda list* for that *generic function* is derived from the *lambda list* of the <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> in the *method-defining form* in such a way as to be <GlossaryTerm styled={true} term={"congruent"}><i>congruent</i></GlossaryTerm> with it. For a discussion of *congruence*, see Section 7.6.4 (Congruent Lambda-lists for all Methods of a Generic Function). 



Each method has a *specialized lambda list*, which determines when that method can be applied. A *specialized lambda list* is like an *ordinary lambda list* except that a specialized parameter may occur instead of the name of a required parameter. A specialized parameter is a list (*variable-name parameter-specializer-name*), where *parameter-specializer-name* is one of the following: 



a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> 



denotes a *parameter specializer* which is the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> named by that <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. 



a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> 



denotes a *parameter specializer* which is the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> itself. 



(eql <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>) 



denotes a *parameter specializer* which satisfies the *type specifier* (eql <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>), where <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is the result of evaluating <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. The form <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> is evaluated in the lexical environment in which the method-defining form is evaluated. Note that <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> is evaluated only once, at the time the method is defined, not each time the generic function is called. 



*Parameter specializer names* are used in macros intended as the user-level interface (<DictionaryLink styled={true} term={"defmethod"}><b>defmethod</b></DictionaryLink>), while *parameter specializers* are used in the functional interface. 



Only required parameters may be specialized, and there must be a *parameter specializer* for each required parameter. For notational simplicity, if some required parameter in a *specialized lambda list* in a method-defining form is simply a variable name, its *parameter specializer* defaults to the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink>. 



Given a generic function and a set of arguments, an applicable method is a method for that generic function whose parameter specializers are satisfied by their corresponding arguments. The following definition specifies what it means for a method to be applicable and for an argument to satisfy a *parameter specializer* . 



Let <i>hA</i><sub>1</sub><i>, . . . , A<sub>n</sub>i</i> be the required arguments to a generic function in order. Let <i>hP</i><sub>1</sub><i>, . . . , P<sub>n</sub>i</i> be the <i>parameter specializers</i> corresponding to the required parameters of the method <i>M</i> in order. The method <i>M</i> is applicable when each <i>A<sub>i</sub></i>is of the <i>type</i> specified by the <i>type specifier P<sub>i</sub></i>. Because every valid <i>parameter specializer</i> is also a valid <i>type specifier</i> , the <i>function</i> <b>typep</b> can be used during method selection to determine whether an argument satisfies a <i>parameter specializer</i> . 



A method all of whose *parameter specializers* are the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> is called a *default method*; it is always applicable but may be shadowed by a more specific method. 







 



 



Methods can have <GlossaryTerm styled={true} term={"qualifier"}><i>qualifiers</i></GlossaryTerm>, which give the method combination procedure a way to distinguish among methods. A method that has one or more <GlossaryTerm styled={true} term={"qualifier"}><i>qualifiers</i></GlossaryTerm> is called a *qualified method*. A method with no <GlossaryTerm styled={true} term={"qualifier"}><i>qualifiers</i></GlossaryTerm> is called an *unqualified method*. A <GlossaryTerm styled={true} term={"qualifier"}><i>qualifier</i></GlossaryTerm> is any <GlossaryTerm styled={true} term={"non-list"}><i>non-list</i></GlossaryTerm>. The <GlossaryTerm styled={true} term={"qualifier"}><i>qualifiers</i></GlossaryTerm> defined by the <GlossaryTerm styled={true} term={"standardized"}><i>standardized</i></GlossaryTerm> method combination types are <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm>. 



In this specification, the terms “*primary method*” and “*auxiliary method*” are used to partition <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> within a method combination type according to their intended use. In standard method combination, *primary methods* are *unqualified methods* and *auxiliary methods* are methods with a single <GlossaryTerm styled={true} term={"qualifier"}><i>qualifier</i></GlossaryTerm> that is one of :around, :before, or :after. <GlossaryTerm styled={true} term={"method"}><i>Methods</i></GlossaryTerm> with these <GlossaryTerm styled={true} term={"qualifier"}><i>qualifiers</i></GlossaryTerm> are called *around methods*, *before methods*, and *after methods*, respectively. When a method combination type is defined using the short form of <DictionaryLink styled={true} term={"define-method-combination"}><b>define-method-combination</b></DictionaryLink>, *primary methods* are methods qualified with the name of the type of method combination, and auxiliary methods have the <GlossaryTerm styled={true} term={"qualifier"}><i>qualifier</i></GlossaryTerm> :around. Thus the terms “*primary method*” and “*auxiliary method*” have only a relative definition within a given method combination type. 




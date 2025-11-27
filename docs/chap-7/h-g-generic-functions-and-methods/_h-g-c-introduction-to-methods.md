 



<GlossaryTerm  term={"method"}><i>Methods</i></GlossaryTerm> define the class-specific or identity-specific behavior and operations of a <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm>. 



A *method object* is associated with <GlossaryTerm  term={"code"}><i>code</i></GlossaryTerm> that implements the method’s behavior, a sequence of <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializers</i></GlossaryTerm> that specify when the given <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> is applicable, a <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm>, and a sequence of <GlossaryTerm  term={"qualifier"}><i>qualifiers</i></GlossaryTerm> that are used by the method combination facility to distinguish among <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm>. 



A method object is not a function and cannot be invoked as a function. Various mechanisms in the object system take a method object and invoke its method function, as is the case when a generic function is invoked. When this occurs it is said that the method is invoked or called. 



A method-defining form contains the <GlossaryTerm  term={"code"}><i>code</i></GlossaryTerm> that is to be run when the arguments to the generic function cause the method that it defines to be invoked. When a method-defining form is evaluated, a method object is created and one of four actions is taken: 



*•* If a <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> of the given name already exists and if a *method object* already exists that agrees with the new one on <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializers</i></GlossaryTerm> and <GlossaryTerm  term={"qualifier"}><i>qualifiers</i></GlossaryTerm>, the new *method object* replaces the old one. For a definition of one method agreeing with another on <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializers</i></GlossaryTerm> and <GlossaryTerm  term={"qualifier"}><i>qualifiers</i></GlossaryTerm>, see Section 7.6.3 (Agreement on Parameter Specializers and Qualifiers). 



*•* If a <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> of the given name already exists and if there is no *method object* that agrees with the new one on <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializers</i></GlossaryTerm> and <GlossaryTerm  term={"qualifier"}><i>qualifiers</i></GlossaryTerm>, the existing *generic function object* is modified to contain the new *method object*. 



*•* If the given <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> names an <GlossaryTerm styled={true} term={"ordinary function"}><i>ordinary function</i></GlossaryTerm>, a <GlossaryTerm  term={"macro"}><i>macro</i></GlossaryTerm>, or a <GlossaryTerm styled={true} term={"special operator"}><i>special operator</i></GlossaryTerm> , an error is signaled. 



*•* Otherwise a <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> is created with the <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> specified by the <GlossaryTerm styled={true} term={"method-defining form"}><i>method-defining form</i></GlossaryTerm>. 







 



 



If the <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> of a new <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> is not <GlossaryTerm  term={"congruent"}><i>congruent</i></GlossaryTerm> with the <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm>, an error is signaled. If a <GlossaryTerm styled={true} term={"method-defining operator"}><i>method-defining operator</i></GlossaryTerm> that cannot specify <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> options creates a new <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> for that <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> is derived from the <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> of the <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"method-defining form"}><i>method-defining form</i></GlossaryTerm> in such a way as to be <GlossaryTerm  term={"congruent"}><i>congruent</i></GlossaryTerm> with it. For a discussion of *congruence*, see Section 7.6.4 (Congruent Lambda-lists for all Methods of a Generic Function). 



Each method has a <GlossaryTerm styled={true} term={"specialized lambda list"}><i>specialized lambda list</i></GlossaryTerm>, which determines when that method can be applied. A <GlossaryTerm styled={true} term={"specialized lambda list"}><i>specialized lambda list</i></GlossaryTerm> is like an <GlossaryTerm styled={true} term={"ordinary lambda list"}><i>ordinary lambda list</i></GlossaryTerm> except that a specialized parameter may occur instead of the name of a required parameter. A specialized parameter is a list (*variable-name parameter-specializer-name*), where *parameter-specializer-name* is one of the following: 



a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> 



denotes a <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializer</i></GlossaryTerm> which is the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> named by that <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>. 



a <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> 



denotes a <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializer</i></GlossaryTerm> which is the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> itself. 



(eql <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>) 



denotes a <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializer</i></GlossaryTerm> which satisfies the <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> (eql <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>), where <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> is the result of evaluating <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. The form <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> is evaluated in the lexical environment in which the method-defining form is evaluated. Note that <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> is evaluated only once, at the time the method is defined, not each time the generic function is called. 



<GlossaryTerm styled={true} term={"parameter specializer name"}><i>Parameter specializer names</i></GlossaryTerm> are used in macros intended as the user-level interface (<DictionaryLink  term={"defmethod"}><b>defmethod</b></DictionaryLink>), while <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializers</i></GlossaryTerm> are used in the functional interface. 



Only required parameters may be specialized, and there must be a <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializer</i></GlossaryTerm> for each required parameter. For notational simplicity, if some required parameter in a <GlossaryTerm styled={true} term={"specialized lambda list"}><i>specialized lambda list</i></GlossaryTerm> in a method-defining form is simply a variable name, its <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializer</i></GlossaryTerm> defaults to the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink  term={"t"}><b>t</b></DictionaryLink>. 



Given a generic function and a set of arguments, an applicable method is a method for that generic function whose parameter specializers are satisfied by their corresponding arguments. The following definition specifies what it means for a method to be applicable and for an argument to satisfy a <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializer</i></GlossaryTerm> . 



Let <i>⟨A</i><sub>1</sub><i>, . . . , A<sub>n</sub>⟩</i> be the required arguments to a generic function in order. Let <i>hP</i><sub>1</sub><i>, . . . , P<sub>n</sub>i</i> be the <i>parameter specializers</i> corresponding to the required parameters of the method <i>M</i> in order. The method <i>M</i> is applicable when each <i>A<sub>i</sub></i>is of the <i>type</i> specified by the <i>type specifier P<sub>i</sub></i>. Because every valid <i>parameter specializer</i> is also a valid <i>type specifier</i> , the <i>function</i> <b>typep</b> can be used during method selection to determine whether an argument satisfies a <i>parameter specializer</i> . 



A method all of whose <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializers</i></GlossaryTerm> are the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> is called a <GlossaryTerm styled={true} term={"default method"}><i>default method</i></GlossaryTerm>; it is always applicable but may be shadowed by a more specific method. 







 



 



Methods can have <GlossaryTerm  term={"qualifier"}><i>qualifiers</i></GlossaryTerm>, which give the method combination procedure a way to distinguish among methods. A method that has one or more <GlossaryTerm  term={"qualifier"}><i>qualifiers</i></GlossaryTerm> is called a <GlossaryTerm styled={true} term={"qualified method"}><i>qualified method</i></GlossaryTerm>. A method with no <GlossaryTerm  term={"qualifier"}><i>qualifiers</i></GlossaryTerm> is called an <GlossaryTerm styled={true} term={"unqualified method"}><i>unqualified method</i></GlossaryTerm>. A <GlossaryTerm  term={"qualifier"}><i>qualifier</i></GlossaryTerm> is any <GlossaryTerm  term={"non-list"}><i>non-list</i></GlossaryTerm>. The <GlossaryTerm  term={"qualifier"}><i>qualifiers</i></GlossaryTerm> defined by the <GlossaryTerm  term={"standardized"}><i>standardized</i></GlossaryTerm> method combination types are <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm>. 



In this specification, the terms “<GlossaryTerm styled={true} term={"primary method"}><i>primary method</i></GlossaryTerm>” and “<GlossaryTerm styled={true} term={"auxiliary method"}><i>auxiliary method</i></GlossaryTerm>” are used to partition <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> within a method combination type according to their intended use. In standard method combination, <GlossaryTerm styled={true} term={"primary method"}><i>primary methods</i></GlossaryTerm> are <GlossaryTerm styled={true} term={"unqualified method"}><i>unqualified methods</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"auxiliary method"}><i>auxiliary methods</i></GlossaryTerm> are methods with a single <GlossaryTerm  term={"qualifier"}><i>qualifier</i></GlossaryTerm> that is one of `:around`, `:before`, or `:after`. <GlossaryTerm  term={"method"}><i>Methods</i></GlossaryTerm> with these <GlossaryTerm  term={"qualifier"}><i>qualifiers</i></GlossaryTerm> are called <GlossaryTerm styled={true} term={"around method"}><i>around methods</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"before method"}><i>before methods</i></GlossaryTerm>, and <GlossaryTerm styled={true} term={"after method"}><i>after methods</i></GlossaryTerm>, respectively. When a method combination type is defined using the short form of <DictionaryLink  term={"define-method-combination"}><b>define-method-combination</b></DictionaryLink>, <GlossaryTerm styled={true} term={"primary method"}><i>primary methods</i></GlossaryTerm> are methods qualified with the name of the type of method combination, and auxiliary methods have the <GlossaryTerm  term={"qualifier"}><i>qualifier</i></GlossaryTerm> `:around`. Thus the terms “<GlossaryTerm styled={true} term={"primary method"}><i>primary method</i></GlossaryTerm>” and “<GlossaryTerm styled={true} term={"auxiliary method"}><i>auxiliary method</i></GlossaryTerm>” have only a relative definition within a given method combination type. 




 



<ClLinks  term={"method"}><i>Methods</i></ClLinks> define the class-specific or identity-specific behavior and operations of a <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm>. 



A *method object* is associated with <ClLinks  term={"code"}><i>code</i></ClLinks> that implements the method’s behavior, a sequence of <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializers</i></GlossaryTerm> that specify when the given <ClLinks  term={"method"}><i>method</i></ClLinks> is applicable, a <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm>, and a sequence of <ClLinks  term={"qualifier"}><i>qualifiers</i></ClLinks> that are used by the method combination facility to distinguish among <ClLinks  term={"method"}><i>methods</i></ClLinks>. 



A method object is not a function and cannot be invoked as a function. Various mechanisms in the object system take a method object and invoke its method function, as is the case when a generic function is invoked. When this occurs it is said that the method is invoked or called. 



A method-defining form contains the <ClLinks  term={"code"}><i>code</i></ClLinks> that is to be run when the arguments to the generic function cause the method that it defines to be invoked. When a method-defining form is evaluated, a method object is created and one of four actions is taken: 



*•* If a <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> of the given name already exists and if a *method object* already exists that agrees with the new one on <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializers</i></GlossaryTerm> and <ClLinks  term={"qualifier"}><i>qualifiers</i></ClLinks>, the new *method object* replaces the old one. For a definition of one method agreeing with another on <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializers</i></GlossaryTerm> and <ClLinks  term={"qualifier"}><i>qualifiers</i></ClLinks>, see Section 7.6.3 (Agreement on Parameter Specializers and Qualifiers). 



*•* If a <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> of the given name already exists and if there is no *method object* that agrees with the new one on <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializers</i></GlossaryTerm> and <ClLinks  term={"qualifier"}><i>qualifiers</i></ClLinks>, the existing *generic function object* is modified to contain the new *method object*. 



*•* If the given <ClLinks  term={"name"}><i>name</i></ClLinks> names an <GlossaryTerm styled={true} term={"ordinary function"}><i>ordinary function</i></GlossaryTerm>, a <ClLinks  term={"macro"}><i>macro</i></ClLinks>, or a <GlossaryTerm styled={true} term={"special operator"}><i>special operator</i></GlossaryTerm> , an error is signaled. 



*•* Otherwise a <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> is created with the <ClLinks  term={"method"}><i>method</i></ClLinks> specified by the <GlossaryTerm styled={true} term={"method-defining form"}><i>method-defining form</i></GlossaryTerm>. 







 



 



If the <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> of a new <ClLinks  term={"method"}><i>method</i></ClLinks> is not <ClLinks  term={"congruent"}><i>congruent</i></ClLinks> with the <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm>, an error is signaled. If a <GlossaryTerm styled={true} term={"method-defining operator"}><i>method-defining operator</i></GlossaryTerm> that cannot specify <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> options creates a new <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> for that <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> is derived from the <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> of the <ClLinks  term={"method"}><i>method</i></ClLinks> in the <GlossaryTerm styled={true} term={"method-defining form"}><i>method-defining form</i></GlossaryTerm> in such a way as to be <ClLinks  term={"congruent"}><i>congruent</i></ClLinks> with it. For a discussion of *congruence*, see Section 7.6.4 (Congruent Lambda-lists for all Methods of a Generic Function). 



Each method has a <GlossaryTerm styled={true} term={"specialized lambda list"}><i>specialized lambda list</i></GlossaryTerm>, which determines when that method can be applied. A <GlossaryTerm styled={true} term={"specialized lambda list"}><i>specialized lambda list</i></GlossaryTerm> is like an <GlossaryTerm styled={true} term={"ordinary lambda list"}><i>ordinary lambda list</i></GlossaryTerm> except that a specialized parameter may occur instead of the name of a required parameter. A specialized parameter is a list (*variable-name parameter-specializer-name*), where *parameter-specializer-name* is one of the following: 



a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> 



denotes a <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializer</i></GlossaryTerm> which is the <ClLinks  term={"class"}><i>class</i></ClLinks> named by that <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. 



a <ClLinks  term={"class"}><i>class</i></ClLinks> 



denotes a <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializer</i></GlossaryTerm> which is the <ClLinks  term={"class"}><i>class</i></ClLinks> itself. 



(eql <ClLinks  term={"form"}><i>form</i></ClLinks>) 



denotes a <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializer</i></GlossaryTerm> which satisfies the <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> (eql <ClLinks  term={"object"}><i>object</i></ClLinks>), where <ClLinks  term={"object"}><i>object</i></ClLinks> is the result of evaluating <ClLinks  term={"form"}><i>form</i></ClLinks>. The form <ClLinks  term={"form"}><i>form</i></ClLinks> is evaluated in the lexical environment in which the method-defining form is evaluated. Note that <ClLinks  term={"form"}><i>form</i></ClLinks> is evaluated only once, at the time the method is defined, not each time the generic function is called. 



<GlossaryTerm styled={true} term={"parameter specializer name"}><i>Parameter specializer names</i></GlossaryTerm> are used in macros intended as the user-level interface (<DictionaryLink  term={"defmethod"}><b>defmethod</b></DictionaryLink>), while <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializers</i></GlossaryTerm> are used in the functional interface. 



Only required parameters may be specialized, and there must be a <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializer</i></GlossaryTerm> for each required parameter. For notational simplicity, if some required parameter in a <GlossaryTerm styled={true} term={"specialized lambda list"}><i>specialized lambda list</i></GlossaryTerm> in a method-defining form is simply a variable name, its <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializer</i></GlossaryTerm> defaults to the <ClLinks  term={"class"}><i>class</i></ClLinks> <DictionaryLink  term={"t"}><b>t</b></DictionaryLink>. 



Given a generic function and a set of arguments, an applicable method is a method for that generic function whose parameter specializers are satisfied by their corresponding arguments. The following definition specifies what it means for a method to be applicable and for an argument to satisfy a <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializer</i></GlossaryTerm> . 



Let <i>hA</i><sub>1</sub><i>, . . . , A<sub>n</sub>i</i> be the required arguments to a generic function in order. Let <i>hP</i><sub>1</sub><i>, . . . , P<sub>n</sub>i</i> be the <i>parameter specializers</i> corresponding to the required parameters of the method <i>M</i> in order. The method <i>M</i> is applicable when each <i>A<sub>i</sub></i>is of the <i>type</i> specified by the <i>type specifier P<sub>i</sub></i>. Because every valid <i>parameter specializer</i> is also a valid <i>type specifier</i> , the <i>function</i> <b>typep</b> can be used during method selection to determine whether an argument satisfies a <i>parameter specializer</i> . 



A method all of whose <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializers</i></GlossaryTerm> are the <ClLinks  term={"class"}><i>class</i></ClLinks> <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> is called a <GlossaryTerm styled={true} term={"default method"}><i>default method</i></GlossaryTerm>; it is always applicable but may be shadowed by a more specific method. 







 



 



Methods can have <ClLinks  term={"qualifier"}><i>qualifiers</i></ClLinks>, which give the method combination procedure a way to distinguish among methods. A method that has one or more <ClLinks  term={"qualifier"}><i>qualifiers</i></ClLinks> is called a <GlossaryTerm styled={true} term={"qualified method"}><i>qualified method</i></GlossaryTerm>. A method with no <ClLinks  term={"qualifier"}><i>qualifiers</i></ClLinks> is called an <GlossaryTerm styled={true} term={"unqualified method"}><i>unqualified method</i></GlossaryTerm>. A <ClLinks  term={"qualifier"}><i>qualifier</i></ClLinks> is any <ClLinks  term={"non-list"}><i>non-list</i></ClLinks>. The <ClLinks  term={"qualifier"}><i>qualifiers</i></ClLinks> defined by the <ClLinks  term={"standardized"}><i>standardized</i></ClLinks> method combination types are <ClLinks  term={"symbol"}><i>symbols</i></ClLinks>. 



In this specification, the terms “<GlossaryTerm styled={true} term={"primary method"}><i>primary method</i></GlossaryTerm>” and “<GlossaryTerm styled={true} term={"auxiliary method"}><i>auxiliary method</i></GlossaryTerm>” are used to partition <ClLinks  term={"method"}><i>methods</i></ClLinks> within a method combination type according to their intended use. In standard method combination, <GlossaryTerm styled={true} term={"primary method"}><i>primary methods</i></GlossaryTerm> are <GlossaryTerm styled={true} term={"unqualified method"}><i>unqualified methods</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"auxiliary method"}><i>auxiliary methods</i></GlossaryTerm> are methods with a single <ClLinks  term={"qualifier"}><i>qualifier</i></ClLinks> that is one of :around, :before, or :after. <ClLinks  term={"method"}><i>Methods</i></ClLinks> with these <ClLinks  term={"qualifier"}><i>qualifiers</i></ClLinks> are called <GlossaryTerm styled={true} term={"around method"}><i>around methods</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"before method"}><i>before methods</i></GlossaryTerm>, and <GlossaryTerm styled={true} term={"after method"}><i>after methods</i></GlossaryTerm>, respectively. When a method combination type is defined using the short form of <DictionaryLink  term={"define-method-combination"}><b>define-method-combination</b></DictionaryLink>, <GlossaryTerm styled={true} term={"primary method"}><i>primary methods</i></GlossaryTerm> are methods qualified with the name of the type of method combination, and auxiliary methods have the <ClLinks  term={"qualifier"}><i>qualifier</i></ClLinks> :around. Thus the terms “<GlossaryTerm styled={true} term={"primary method"}><i>primary method</i></GlossaryTerm>” and “<GlossaryTerm styled={true} term={"auxiliary method"}><i>auxiliary method</i></GlossaryTerm>” have only a relative definition within a given method combination type. 




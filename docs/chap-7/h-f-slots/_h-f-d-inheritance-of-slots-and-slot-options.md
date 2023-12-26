 



The set of the <ClLinks  term={"name"}><i>names</i></ClLinks> of all *slots accessible* in an <ClLinks  term={"instance"}><i>instance</i></ClLinks> of a *class C* is the union of the sets of <ClLinks  term={"name"}><i>names</i></ClLinks> of <ClLinks  term={"slot"}><i>slots</i></ClLinks> defined by *C* and its *superclasses*. The structure of an <ClLinks  term={"instance"}><i>instance</i></ClLinks> is the set of <ClLinks  term={"name"}><i>names</i></ClLinks> of <GlossaryTerm styled={true} term={"local slot"}><i>local slots</i></GlossaryTerm> in that <ClLinks  term={"instance"}><i>instance</i></ClLinks>. 



In the simplest case, only one <ClLinks  term={"class"}><i>class</i></ClLinks> among *C* and its *superclasses* defines a <ClLinks  term={"slot"}><i>slot</i></ClLinks> with a given <ClLinks  term={"slot"}><i>slot</i></ClLinks> name. If a <ClLinks  term={"slot"}><i>slot</i></ClLinks> is defined by a <ClLinks  term={"superclass"}><i>superclass</i></ClLinks> of *C*, the <ClLinks  term={"slot"}><i>slot</i></ClLinks> is said to be inherited. The characteristics of the <ClLinks  term={"slot"}><i>slot</i></ClLinks> are determined by the <GlossaryTerm styled={true} term={"slot specifier"}><i>slot specifier</i></GlossaryTerm> of the defining <ClLinks  term={"class"}><i>class</i></ClLinks>. Consider the defining <ClLinks  term={"class"}><i>class</i></ClLinks> for 



a slot *S*. If the value of the :allocation slot option is :instance, then *S* is a <GlossaryTerm styled={true} term={"local slot"}><i>local slot</i></GlossaryTerm> and each <ClLinks  term={"instance"}><i>instance</i></ClLinks> of *C* has its own <ClLinks  term={"slot"}><i>slot</i></ClLinks> named *S* that stores its own value. If the value of the :allocation slot option is :class, then *S* is a <GlossaryTerm styled={true} term={"shared slot"}><i>shared slot</i></GlossaryTerm>, the <ClLinks  term={"class"}><i>class</i></ClLinks> that defined *S* stores the value, and all <ClLinks  term={"instance"}><i>instances</i></ClLinks> of *C* can <ClLinks  term={"access"}><i>access</i></ClLinks> that single <ClLinks  term={"slot"}><i>slot</i></ClLinks>. If the :allocation slot option is omitted, :instance is used. 



In general, more than one <ClLinks  term={"class"}><i>class</i></ClLinks> among *C* and its *superclasses* can define a <ClLinks  term={"slot"}><i>slot</i></ClLinks> with a given <ClLinks  term={"name"}><i>name</i></ClLinks>. In such cases, only one <ClLinks  term={"slot"}><i>slot</i></ClLinks> with the given name is <ClLinks  term={"accessible"}><i>accessible</i></ClLinks> in an <ClLinks  term={"instance"}><i>instance</i></ClLinks> of *C*, and the characteristics of that <ClLinks  term={"slot"}><i>slot</i></ClLinks> are a combination of the several <ClLinks  term={"slot"}><i>slot</i></ClLinks> specifiers, computed as follows: 







 



 



*•* All the <GlossaryTerm styled={true} term={"slot specifier"}><i>slot specifiers</i></GlossaryTerm> for a given <ClLinks  term={"slot"}><i>slot</i></ClLinks> name are ordered from most specific to least specific, according to the order in *C*’s <GlossaryTerm styled={true} term={"class precedence list"}><i>class precedence list</i></GlossaryTerm> of the *classes* that define them. All references to the specificity of <GlossaryTerm styled={true} term={"slot specifier"}><i>slot specifiers</i></GlossaryTerm> immediately below refers to this ordering. 



*•* The allocation of a <ClLinks  term={"slot"}><i>slot</i></ClLinks> is controlled by the most specific <GlossaryTerm styled={true} term={"slot specifier"}><i>slot specifier</i></GlossaryTerm> . If the most specific <GlossaryTerm styled={true} term={"slot specifier"}><i>slot specifier</i></GlossaryTerm> does not contain an :allocation slot option, :instance is used. Less specific <GlossaryTerm styled={true} term={"slot specifier"}><i>slot specifiers</i></GlossaryTerm> do not affect the allocation. 



*•* The default initial value form for a <ClLinks  term={"slot"}><i>slot</i></ClLinks> is the value of the :initform slot option in the most specific <GlossaryTerm styled={true} term={"slot specifier"}><i>slot specifier</i></GlossaryTerm> that contains one. If no <GlossaryTerm styled={true} term={"slot specifier"}><i>slot specifier</i></GlossaryTerm> contains an :initform slot option, the <ClLinks  term={"slot"}><i>slot</i></ClLinks> has no default initial value form. 



<i>•</i> The contents of a <i>slot</i> will always be of type (and <i>T</i><sub>1</sub> <i>. . . T<sub>n</sub></i>) where <i>T</i><sub>1</sub> <i>. . . T<sub>n</sub></i> are the values of the :type slot options contained in all of the <i>slot specifiers</i>. If no <i>slot specifier</i> contains the :type slot option, the contents of the <i>slot</i> will always be of <i>type</i> <b>t</b>. The consequences of attempting to store in a <i>slot</i> a value that does not satisfy the <i>type</i> of the <i>slot</i> are undefined. 



*•* The set of initialization arguments that initialize a given <ClLinks  term={"slot"}><i>slot</i></ClLinks> is the union of the initialization arguments declared in the :initarg slot options in all the <GlossaryTerm styled={true} term={"slot specifier"}><i>slot specifiers</i></GlossaryTerm>. 



*•* The <GlossaryTerm styled={true} term={"documentation string"}><i>documentation string</i></GlossaryTerm> for a <ClLinks  term={"slot"}><i>slot</i></ClLinks> is the value of the :documentation slot option in the most specific <ClLinks  term={"slot"}><i>slot</i></ClLinks> specifier that contains one. If no <GlossaryTerm styled={true} term={"slot specifier"}><i>slot specifier</i></GlossaryTerm> contains a :documentation slot option, the <ClLinks  term={"slot"}><i>slot</i></ClLinks> has no <GlossaryTerm styled={true} term={"documentation string"}><i>documentation string</i></GlossaryTerm>. 



A consequence of the allocation rule is that a <GlossaryTerm styled={true} term={"shared slot"}><i>shared slot</i></GlossaryTerm> can be *shadowed*. For example, if a class *C*<sub>1</sub> defines a <ClLinks  term={"slot"}><i>slot</i></ClLinks> named *S* whose value for the :allocation slot option is :class, that <ClLinks  term={"slot"}><i>slot</i></ClLinks> is <ClLinks  term={"accessible"}><i>accessible</i></ClLinks> in <ClLinks  term={"instance"}><i>instances</i></ClLinks> of *C*<sub>1</sub> and all of its *subclasses*. However, if *C*<sub>2</sub> is a <ClLinks  term={"subclass"}><i>subclass</i></ClLinks> of *C*<sub>1</sub> and also defines a <ClLinks  term={"slot"}><i>slot</i></ClLinks> named *S*, *C*<sub>1</sub>’s <ClLinks  term={"slot"}><i>slot</i></ClLinks> is not shared by <ClLinks  term={"instance"}><i>instances</i></ClLinks> of *C*<sub>2</sub> and its *subclasses*. When a class *C*<sub>1</sub> defines a <GlossaryTerm styled={true} term={"shared slot"}><i>shared slot</i></GlossaryTerm>, any subclass *C*<sub>2</sub> of *C*<sub>1</sub> will share this single <ClLinks  term={"slot"}><i>slot</i></ClLinks> unless the <DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink> form for *C*<sub>2</sub> specifies a <ClLinks  term={"slot"}><i>slot</i></ClLinks> of the same <ClLinks  term={"name"}><i>name</i></ClLinks> or there is a <ClLinks  term={"superclass"}><i>superclass</i></ClLinks> of *C*<sub>2</sub> that precedes *C*<sub>1</sub> in the <GlossaryTerm styled={true} term={"class precedence list"}><i>class precedence list</i></GlossaryTerm> of *C*<sub>2</sub> that defines a <ClLinks  term={"slot"}><i>slot</i></ClLinks> of the same name. 



A consequence of the type rule is that the value of a <ClLinks  term={"slot"}><i>slot</i></ClLinks> satisfies the type constraint of each <GlossaryTerm styled={true} term={"slot specifier"}><i>slot specifier</i></GlossaryTerm> that contributes to that <ClLinks  term={"slot"}><i>slot</i></ClLinks>. Because the result of attempting to store in a <ClLinks  term={"slot"}><i>slot</i></ClLinks> a value that does not satisfy the type constraint for the <ClLinks  term={"slot"}><i>slot</i></ClLinks> is undefined, the value in a <ClLinks  term={"slot"}><i>slot</i></ClLinks> might fail to satisfy its type constraint. 



The :reader, :writer, and :accessor slot options create <ClLinks  term={"method"}><i>methods</i></ClLinks> rather than define the characteristics of a <ClLinks  term={"slot"}><i>slot</i></ClLinks>. Reader and writer <ClLinks  term={"method"}><i>methods</i></ClLinks> are inherited in the sense described in Section 7.6.7 (Inheritance of Methods). 



<ClLinks  term={"method"}><i>Methods</i></ClLinks> that *access slots* use only the name of the <ClLinks  term={"slot"}><i>slot</i></ClLinks> and the <ClLinks  term={"type"}><i>type</i></ClLinks> of the <ClLinks  term={"slot"}><i>slot</i></ClLinks>’s value. Suppose a <ClLinks  term={"superclass"}><i>superclass</i></ClLinks> provides a <ClLinks  term={"method"}><i>method</i></ClLinks> that expects to <ClLinks  term={"access"}><i>access</i></ClLinks> a <GlossaryTerm styled={true} term={"shared slot"}><i>shared slot</i></GlossaryTerm> of a given <ClLinks  term={"name"}><i>name</i></ClLinks>, and a <ClLinks  term={"subclass"}><i>subclass</i></ClLinks> defines a <GlossaryTerm styled={true} term={"local slot"}><i>local slot</i></GlossaryTerm> with the same <ClLinks  term={"name"}><i>name</i></ClLinks>. If the <ClLinks  term={"method"}><i>method</i></ClLinks> provided by the <ClLinks  term={"superclass"}><i>superclass</i></ClLinks> is used on an <ClLinks  term={"instance"}><i>instance</i></ClLinks> of the <ClLinks  term={"subclass"}><i>subclass</i></ClLinks>, the *method accesses* the <GlossaryTerm styled={true} term={"local slot"}><i>local slot</i></GlossaryTerm>. 







 



 




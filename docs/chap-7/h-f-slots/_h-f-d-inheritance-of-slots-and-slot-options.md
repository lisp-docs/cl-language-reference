 



The set of the <GlossaryTerm  term={"name"}><i>names</i></GlossaryTerm> of all *slots accessible* in an <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> of a *class C* is the union of the sets of <GlossaryTerm  term={"name"}><i>names</i></GlossaryTerm> of <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm> defined by *C* and its *superclasses*. The structure of an <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> is the set of <GlossaryTerm  term={"name"}><i>names</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"local slot"}><i>local slots</i></GlossaryTerm> in that <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm>. 



In the simplest case, only one <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> among *C* and its *superclasses* defines a <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> with a given <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> name. If a <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> is defined by a <GlossaryTerm  term={"superclass"}><i>superclass</i></GlossaryTerm> of *C*, the <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> is said to be inherited. The characteristics of the <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> are determined by the <GlossaryTerm styled={true} term={"slot specifier"}><i>slot specifier</i></GlossaryTerm> of the defining <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>. Consider the defining <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> for a slot *S*. If the value of the `:allocation` slot option is :instance, then *S* is a <GlossaryTerm styled={true} term={"local slot"}><i>local slot</i></GlossaryTerm> and each <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> of *C* has its own <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> named *S* that stores its own value. If the value of the `:allocation` slot option is `:class`, then *S* is a <GlossaryTerm styled={true} term={"shared slot"}><i>shared slot</i></GlossaryTerm>, the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> that defined *S* stores the value, and all <GlossaryTerm  term={"instance"}><i>instances</i></GlossaryTerm> of *C* can <GlossaryTerm  term={"access"}><i>access</i></GlossaryTerm> that single <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm>. If the `:allocation` slot option is omitted, :instance is used. 



In general, more than one <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> among *C* and its *superclasses* can define a <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> with a given <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm>. In such cases, only one <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> with the given name is <GlossaryTerm  term={"accessible"}><i>accessible</i></GlossaryTerm> in an <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> of *C*, and the characteristics of that <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> are a combination of the several <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> specifiers, computed as follows: 







 



 



*•* All the <GlossaryTerm styled={true} term={"slot specifier"}><i>slot specifiers</i></GlossaryTerm> for a given <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> name are ordered from most specific to least specific, according to the order in *C*’s <GlossaryTerm styled={true} term={"class precedence list"}><i>class precedence list</i></GlossaryTerm> of the *classes* that define them. All references to the specificity of <GlossaryTerm styled={true} term={"slot specifier"}><i>slot specifiers</i></GlossaryTerm> immediately below refers to this ordering. 



*•* The allocation of a <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> is controlled by the most specific <GlossaryTerm styled={true} term={"slot specifier"}><i>slot specifier</i></GlossaryTerm> . If the most specific <GlossaryTerm styled={true} term={"slot specifier"}><i>slot specifier</i></GlossaryTerm> does not contain an `:allocation` slot option, :instance is used. Less specific <GlossaryTerm styled={true} term={"slot specifier"}><i>slot specifiers</i></GlossaryTerm> do not affect the allocation. 



*•* The default initial value form for a <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> is the value of the :initform slot option in the most specific <GlossaryTerm styled={true} term={"slot specifier"}><i>slot specifier</i></GlossaryTerm> that contains one. If no <GlossaryTerm styled={true} term={"slot specifier"}><i>slot specifier</i></GlossaryTerm> contains an :initform slot option, the <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> has no default initial value form. 



<i>•</i> The contents of a <i>slot</i> will always be of type (and <i>T</i><sub>1</sub> <i>. . . T<sub>n</sub></i>) where <i>T</i><sub>1</sub> <i>. . . T<sub>n</sub></i> are the values of the :type slot options contained in all of the <i>slot specifiers</i>. If no <i>slot specifier</i> contains the :type slot option, the contents of the <i>slot</i> will always be of <i>type</i> <b>t</b>. The consequences of attempting to store in a <i>slot</i> a value that does not satisfy the <i>type</i> of the <i>slot</i> are undefined. 



*•* The set of initialization arguments that initialize a given <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> is the union of the initialization arguments declared in the :initarg slot options in all the <GlossaryTerm styled={true} term={"slot specifier"}><i>slot specifiers</i></GlossaryTerm>. 



*•* The <GlossaryTerm styled={true} term={"documentation string"}><i>documentation string</i></GlossaryTerm> for a <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> is the value of the :documentation slot option in the most specific <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> specifier that contains one. If no <GlossaryTerm styled={true} term={"slot specifier"}><i>slot specifier</i></GlossaryTerm> contains a :documentation slot option, the <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> has no <GlossaryTerm styled={true} term={"documentation string"}><i>documentation string</i></GlossaryTerm>. 



A consequence of the allocation rule is that a <GlossaryTerm styled={true} term={"shared slot"}><i>shared slot</i></GlossaryTerm> can be *shadowed*. For example, if a class *C*<sub>1</sub> defines a <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> named *S* whose value for the `:allocation` slot option is `:class`, that <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> is <GlossaryTerm  term={"accessible"}><i>accessible</i></GlossaryTerm> in <GlossaryTerm  term={"instance"}><i>instances</i></GlossaryTerm> of *C*<sub>1</sub> and all of its *subclasses*. However, if *C*<sub>2</sub> is a <GlossaryTerm  term={"subclass"}><i>subclass</i></GlossaryTerm> of *C*<sub>1</sub> and also defines a <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> named *S*, *C*<sub>1</sub>’s <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> is not shared by <GlossaryTerm  term={"instance"}><i>instances</i></GlossaryTerm> of *C*<sub>2</sub> and its *subclasses*. When a class *C*<sub>1</sub> defines a <GlossaryTerm styled={true} term={"shared slot"}><i>shared slot</i></GlossaryTerm>, any subclass *C*<sub>2</sub> of *C*<sub>1</sub> will share this single <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> unless the <DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink> form for *C*<sub>2</sub> specifies a <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> of the same <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> or there is a <GlossaryTerm  term={"superclass"}><i>superclass</i></GlossaryTerm> of *C*<sub>2</sub> that precedes *C*<sub>1</sub> in the <GlossaryTerm styled={true} term={"class precedence list"}><i>class precedence list</i></GlossaryTerm> of *C*<sub>2</sub> that defines a <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> of the same name. 



A consequence of the type rule is that the value of a <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> satisfies the type constraint of each <GlossaryTerm styled={true} term={"slot specifier"}><i>slot specifier</i></GlossaryTerm> that contributes to that <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm>. Because the result of attempting to store in a <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> a value that does not satisfy the type constraint for the <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> is undefined, the value in a <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> might fail to satisfy its type constraint. 



The `:reader`, `:writer`, and `:accessor` slot options create <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> rather than define the characteristics of a <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm>. Reader and writer <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> are inherited in the sense described in Section 7.6.7 (Inheritance of Methods). 



<GlossaryTerm  term={"method"}><i>Methods</i></GlossaryTerm> that *access slots* use only the name of the <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> and the <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> of the <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm>’s value. Suppose a <GlossaryTerm  term={"superclass"}><i>superclass</i></GlossaryTerm> provides a <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> that expects to <GlossaryTerm  term={"access"}><i>access</i></GlossaryTerm> a <GlossaryTerm styled={true} term={"shared slot"}><i>shared slot</i></GlossaryTerm> of a given <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm>, and a <GlossaryTerm  term={"subclass"}><i>subclass</i></GlossaryTerm> defines a <GlossaryTerm styled={true} term={"local slot"}><i>local slot</i></GlossaryTerm> with the same <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm>. If the <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> provided by the <GlossaryTerm  term={"superclass"}><i>superclass</i></GlossaryTerm> is used on an <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> of the <GlossaryTerm  term={"subclass"}><i>subclass</i></GlossaryTerm>, the *method accesses* the <GlossaryTerm styled={true} term={"local slot"}><i>local slot</i></GlossaryTerm>. 







 



 




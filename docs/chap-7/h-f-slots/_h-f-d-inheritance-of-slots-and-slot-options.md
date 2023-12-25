 



The set of the <GlossaryTerm styled={true} term={"name"}><i>names</i></GlossaryTerm> of all *slots accessible* in an <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> of a *class C* is the union of the sets of <GlossaryTerm styled={true} term={"name"}><i>names</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm> defined by *C* and its *superclasses*. The structure of an <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> is the set of <GlossaryTerm styled={true} term={"name"}><i>names</i></GlossaryTerm> of *local slots* in that <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm>. 



In the simplest case, only one <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> among *C* and its *superclasses* defines a <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> with a given <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> name. If a <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> is defined by a <GlossaryTerm styled={true} term={"superclass"}><i>superclass</i></GlossaryTerm> of *C*, the <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> is said to be inherited. The characteristics of the <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> are determined by the *slot specifier* of the defining <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>. Consider the defining <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> for 



a slot *S*. If the value of the :allocation slot option is :instance, then *S* is a *local slot* and each <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> of *C* has its own <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> named *S* that stores its own value. If the value of the :allocation slot option is :class, then *S* is a *shared slot*, the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> that defined *S* stores the value, and all <GlossaryTerm styled={true} term={"instance"}><i>instances</i></GlossaryTerm> of *C* can <GlossaryTerm styled={true} term={"access"}><i>access</i></GlossaryTerm> that single <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm>. If the :allocation slot option is omitted, :instance is used. 



In general, more than one <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> among *C* and its *superclasses* can define a <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> with a given <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>. In such cases, only one <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> with the given name is <GlossaryTerm styled={true} term={"accessible"}><i>accessible</i></GlossaryTerm> in an <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> of *C*, and the characteristics of that <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> are a combination of the several <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> specifiers, computed as follows: 







 



 



*•* All the *slot specifiers* for a given <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> name are ordered from most specific to least specific, according to the order in *C*’s *class precedence list* of the *classes* that define them. All references to the specificity of *slot specifiers* immediately below refers to this ordering. 



*•* The allocation of a <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> is controlled by the most specific *slot specifier* . If the most specific *slot specifier* does not contain an :allocation slot option, :instance is used. Less specific *slot specifiers* do not affect the allocation. 



*•* The default initial value form for a <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> is the value of the :initform slot option in the most specific *slot specifier* that contains one. If no *slot specifier* contains an :initform slot option, the <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> has no default initial value form. 



<i>•</i> The contents of a <i>slot</i> will always be of type (and <i>T</i><sub>1</sub> <i>. . . T<sub>n</sub></i>) where <i>T</i><sub>1</sub> <i>. . . T<sub>n</sub></i> are the values of the :type slot options contained in all of the <i>slot specifiers</i>. If no <i>slot specifier</i> contains the :type slot option, the contents of the <i>slot</i> will always be of <i>type</i> <b>t</b>. The consequences of attempting to store in a <i>slot</i> a value that does not satisfy the <i>type</i> of the <i>slot</i> are undefined. 



*•* The set of initialization arguments that initialize a given <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> is the union of the initialization arguments declared in the :initarg slot options in all the *slot specifiers*. 



*•* The *documentation string* for a <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> is the value of the :documentation slot option in the most specific <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> specifier that contains one. If no *slot specifier* contains a :documentation slot option, the <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> has no *documentation string*. 



A consequence of the allocation rule is that a *shared slot* can be *shadowed*. For example, if a class *C*<sub>1</sub> defines a <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> named *S* whose value for the :allocation slot option is :class, that <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"accessible"}><i>accessible</i></GlossaryTerm> in <GlossaryTerm styled={true} term={"instance"}><i>instances</i></GlossaryTerm> of *C*<sub>1</sub> and all of its *subclasses*. However, if *C*<sub>2</sub> is a <GlossaryTerm styled={true} term={"subclass"}><i>subclass</i></GlossaryTerm> of *C*<sub>1</sub> and also defines a <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> named *S*, *C*<sub>1</sub>’s <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> is not shared by <GlossaryTerm styled={true} term={"instance"}><i>instances</i></GlossaryTerm> of *C*<sub>2</sub> and its *subclasses*. When a class *C*<sub>1</sub> defines a *shared slot*, any subclass *C*<sub>2</sub> of *C*<sub>1</sub> will share this single <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> unless the <DictionaryLink styled={true} term={"defclass"}><b>defclass</b></DictionaryLink> form for *C*<sub>2</sub> specifies a <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> of the same <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> or there is a <GlossaryTerm styled={true} term={"superclass"}><i>superclass</i></GlossaryTerm> of *C*<sub>2</sub> that precedes *C*<sub>1</sub> in the *class precedence list* of *C*<sub>2</sub> that defines a <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> of the same name. 



A consequence of the type rule is that the value of a <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> satisfies the type constraint of each *slot specifier* that contributes to that <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm>. Because the result of attempting to store in a <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> a value that does not satisfy the type constraint for the <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> is undefined, the value in a <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> might fail to satisfy its type constraint. 



The :reader, :writer, and :accessor slot options create <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> rather than define the characteristics of a <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm>. Reader and writer <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> are inherited in the sense described in Section 7.6.7 (Inheritance of Methods). 



<GlossaryTerm styled={true} term={"method"}><i>Methods</i></GlossaryTerm> that *access slots* use only the name of the <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> and the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm>’s value. Suppose a <GlossaryTerm styled={true} term={"superclass"}><i>superclass</i></GlossaryTerm> provides a <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> that expects to <GlossaryTerm styled={true} term={"access"}><i>access</i></GlossaryTerm> a *shared slot* of a given <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>, and a <GlossaryTerm styled={true} term={"subclass"}><i>subclass</i></GlossaryTerm> defines a *local slot* with the same <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>. If the <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> provided by the <GlossaryTerm styled={true} term={"superclass"}><i>superclass</i></GlossaryTerm> is used on an <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"subclass"}><i>subclass</i></GlossaryTerm>, the *method accesses* the *local slot*. 







 



 




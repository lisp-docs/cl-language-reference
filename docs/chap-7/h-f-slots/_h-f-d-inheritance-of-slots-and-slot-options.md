 



The set of the <ClLinks styled={true} term={"name"}><i>names</i></ClLinks> of all *slots accessible* in an <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> of a *class C* is the union of the sets of <ClLinks styled={true} term={"name"}><i>names</i></ClLinks> of <ClLinks styled={true} term={"slot"}><i>slots</i></ClLinks> defined by *C* and its *superclasses*. The structure of an <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> is the set of <ClLinks styled={true} term={"name"}><i>names</i></ClLinks> of *local slots* in that <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks>. 



In the simplest case, only one <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> among *C* and its *superclasses* defines a <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> with a given <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> name. If a <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> is defined by a <ClLinks styled={true} term={"superclass"}><i>superclass</i></ClLinks> of *C*, the <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> is said to be inherited. The characteristics of the <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> are determined by the *slot specifier* of the defining <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>. Consider the defining <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> for 



a slot *S*. If the value of the :allocation slot option is :instance, then *S* is a *local slot* and each <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> of *C* has its own <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> named *S* that stores its own value. If the value of the :allocation slot option is :class, then *S* is a *shared slot*, the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> that defined *S* stores the value, and all <ClLinks styled={true} term={"instance"}><i>instances</i></ClLinks> of *C* can <ClLinks styled={true} term={"access"}><i>access</i></ClLinks> that single <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks>. If the :allocation slot option is omitted, :instance is used. 



In general, more than one <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> among *C* and its *superclasses* can define a <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> with a given <ClLinks styled={true} term={"name"}><i>name</i></ClLinks>. In such cases, only one <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> with the given name is <ClLinks styled={true} term={"accessible"}><i>accessible</i></ClLinks> in an <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> of *C*, and the characteristics of that <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> are a combination of the several <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> specifiers, computed as follows: 







 



 



*•* All the *slot specifiers* for a given <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> name are ordered from most specific to least specific, according to the order in *C*’s *class precedence list* of the *classes* that define them. All references to the specificity of *slot specifiers* immediately below refers to this ordering. 



*•* The allocation of a <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> is controlled by the most specific *slot specifier* . If the most specific *slot specifier* does not contain an :allocation slot option, :instance is used. Less specific *slot specifiers* do not affect the allocation. 



*•* The default initial value form for a <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> is the value of the :initform slot option in the most specific *slot specifier* that contains one. If no *slot specifier* contains an :initform slot option, the <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> has no default initial value form. 



<i>•</i> The contents of a <i>slot</i> will always be of type (and <i>T</i><sub>1</sub> <i>. . . T<sub>n</sub></i>) where <i>T</i><sub>1</sub> <i>. . . T<sub>n</sub></i> are the values of the :type slot options contained in all of the <i>slot specifiers</i>. If no <i>slot specifier</i> contains the :type slot option, the contents of the <i>slot</i> will always be of <i>type</i> <b>t</b>. The consequences of attempting to store in a <i>slot</i> a value that does not satisfy the <i>type</i> of the <i>slot</i> are undefined. 



*•* The set of initialization arguments that initialize a given <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> is the union of the initialization arguments declared in the :initarg slot options in all the *slot specifiers*. 



*•* The *documentation string* for a <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> is the value of the :documentation slot option in the most specific <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> specifier that contains one. If no *slot specifier* contains a :documentation slot option, the <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> has no *documentation string*. 



A consequence of the allocation rule is that a *shared slot* can be *shadowed*. For example, if a class *C*<sub>1</sub> defines a <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> named *S* whose value for the :allocation slot option is :class, that <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> is <ClLinks styled={true} term={"accessible"}><i>accessible</i></ClLinks> in <ClLinks styled={true} term={"instance"}><i>instances</i></ClLinks> of *C*<sub>1</sub> and all of its *subclasses*. However, if *C*<sub>2</sub> is a <ClLinks styled={true} term={"subclass"}><i>subclass</i></ClLinks> of *C*<sub>1</sub> and also defines a <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> named *S*, *C*<sub>1</sub>’s <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> is not shared by <ClLinks styled={true} term={"instance"}><i>instances</i></ClLinks> of *C*<sub>2</sub> and its *subclasses*. When a class *C*<sub>1</sub> defines a *shared slot*, any subclass *C*<sub>2</sub> of *C*<sub>1</sub> will share this single <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> unless the <ClLinks styled={true} term={"defclass"}><b>defclass</b></ClLinks> form for *C*<sub>2</sub> specifies a <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> of the same <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> or there is a <ClLinks styled={true} term={"superclass"}><i>superclass</i></ClLinks> of *C*<sub>2</sub> that precedes *C*<sub>1</sub> in the *class precedence list* of *C*<sub>2</sub> that defines a <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> of the same name. 



A consequence of the type rule is that the value of a <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> satisfies the type constraint of each *slot specifier* that contributes to that <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks>. Because the result of attempting to store in a <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> a value that does not satisfy the type constraint for the <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> is undefined, the value in a <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> might fail to satisfy its type constraint. 



The :reader, :writer, and :accessor slot options create <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> rather than define the characteristics of a <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks>. Reader and writer <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> are inherited in the sense described in Section 7.6.7 (Inheritance of Methods). 



<ClLinks styled={true} term={"method"}><i>Methods</i></ClLinks> that *access slots* use only the name of the <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> and the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> of the <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks>’s value. Suppose a <ClLinks styled={true} term={"superclass"}><i>superclass</i></ClLinks> provides a <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> that expects to <ClLinks styled={true} term={"access"}><i>access</i></ClLinks> a *shared slot* of a given <ClLinks styled={true} term={"name"}><i>name</i></ClLinks>, and a <ClLinks styled={true} term={"subclass"}><i>subclass</i></ClLinks> defines a *local slot* with the same <ClLinks styled={true} term={"name"}><i>name</i></ClLinks>. If the <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> provided by the <ClLinks styled={true} term={"superclass"}><i>superclass</i></ClLinks> is used on an <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> of the <ClLinks styled={true} term={"subclass"}><i>subclass</i></ClLinks>, the *method accesses* the *local slot*. 







 



 




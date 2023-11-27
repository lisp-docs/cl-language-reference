 

The set of the *names* of all *slots accessible* in an *instance* of a *class C* is the union of the sets of *names* of *slots* defined by *C* and its *superclasses*. The structure of an *instance* is the set of *names* of *local slots* in that *instance*. 

In the simplest case, only one *class* among *C* and its *superclasses* defines a *slot* with a given *slot* name. If a *slot* is defined by a *superclass* of *C*, the *slot* is said to be inherited. The characteristics of the *slot* are determined by the *slot specifier* of the defining *class*. Consider the defining *class* for 

a slot *S*. If the value of the :allocation slot option is :instance, then *S* is a *local slot* and each *instance* of *C* has its own *slot* named *S* that stores its own value. If the value of the :allocation slot option is :class, then *S* is a *shared slot*, the *class* that defined *S* stores the value, and all *instances* of *C* can *access* that single *slot*. If the :allocation slot option is omitted, :instance is used. 

In general, more than one *class* among *C* and its *superclasses* can define a *slot* with a given *name*. In such cases, only one *slot* with the given name is *accessible* in an *instance* of *C*, and the characteristics of that *slot* are a combination of the several *slot* specifiers, computed as follows: 



 

 

*•* All the *slot specifiers* for a given *slot* name are ordered from most specific to least specific, according to the order in *C*’s *class precedence list* of the *classes* that define them. All references to the specificity of *slot specifiers* immediately below refers to this ordering. 

*•* The allocation of a *slot* is controlled by the most specific *slot specifier* . If the most specific *slot specifier* does not contain an :allocation slot option, :instance is used. Less specific *slot specifiers* do not affect the allocation. 

*•* The default initial value form for a *slot* is the value of the :initform slot option in the most specific *slot specifier* that contains one. If no *slot specifier* contains an :initform slot option, the *slot* has no default initial value form. 

&#60;i&#62;•&#60;/i&#62; The contents of a &#60;i&#62;slot&#60;/i&#62; will always be of type (and &#60;i&#62;T&#60;/i&#62;&#60;sub&#62;1&#60;/sub&#62; &#60;i&#62;. . . T&#60;sub&#62;n&#60;/sub&#62;&#60;/i&#62;) where &#60;i&#62;T&#60;/i&#62;&#60;sub&#62;1&#60;/sub&#62; &#60;i&#62;. . . T&#60;sub&#62;n&#60;/sub&#62;&#60;/i&#62; are the values of the :type slot options contained in all of the &#60;i&#62;slot specifiers&#60;/i&#62;. If no &#60;i&#62;slot specifier&#60;/i&#62; contains the :type slot option, the contents of the &#60;i&#62;slot&#60;/i&#62; will always be of &#60;i&#62;type&#60;/i&#62; &#60;b&#62;t&#60;/b&#62;. The consequences of attempting to store in a &#60;i&#62;slot&#60;/i&#62; a value that does not satisfy the &#60;i&#62;type&#60;/i&#62; of the &#60;i&#62;slot&#60;/i&#62; are undefined. 

*•* The set of initialization arguments that initialize a given *slot* is the union of the initialization arguments declared in the :initarg slot options in all the *slot specifiers*. 

*•* The *documentation string* for a *slot* is the value of the :documentation slot option in the most specific *slot* specifier that contains one. If no *slot specifier* contains a :documentation slot option, the *slot* has no *documentation string*. 

A consequence of the allocation rule is that a *shared slot* can be *shadowed*. For example, if a class *C*&#60;sub&#62;1&#60;/sub&#62; defines a *slot* named *S* whose value for the :allocation slot option is :class, that *slot* is *accessible* in *instances* of *C*&#60;sub&#62;1&#60;/sub&#62; and all of its *subclasses*. However, if *C*&#60;sub&#62;2&#60;/sub&#62; is a *subclass* of *C*&#60;sub&#62;1&#60;/sub&#62; and also defines a *slot* named *S*, *C*&#60;sub&#62;1&#60;/sub&#62;’s *slot* is not shared by *instances* of *C*&#60;sub&#62;2&#60;/sub&#62; and its *subclasses*. When a class *C*&#60;sub&#62;1&#60;/sub&#62; defines a *shared slot*, any subclass *C*&#60;sub&#62;2&#60;/sub&#62; of *C*&#60;sub&#62;1&#60;/sub&#62; will share this single *slot* unless the **defclass** form for *C*&#60;sub&#62;2&#60;/sub&#62; specifies a *slot* of the same *name* or there is a *superclass* of *C*&#60;sub&#62;2&#60;/sub&#62; that precedes *C*&#60;sub&#62;1&#60;/sub&#62; in the *class precedence list* of *C*&#60;sub&#62;2&#60;/sub&#62; that defines a *slot* of the same name. 

A consequence of the type rule is that the value of a *slot* satisfies the type constraint of each *slot specifier* that contributes to that *slot*. Because the result of attempting to store in a *slot* a value that does not satisfy the type constraint for the *slot* is undefined, the value in a *slot* might fail to satisfy its type constraint. 

The :reader, :writer, and :accessor slot options create *methods* rather than define the characteristics of a *slot*. Reader and writer *methods* are inherited in the sense described in Section 7.6.7 (Inheritance of Methods). 

*Methods* that *access slots* use only the name of the *slot* and the *type* of the *slot*’s value. Suppose a *superclass* provides a *method* that expects to *access* a *shared slot* of a given *name*, and a *subclass* defines a *local slot* with the same *name*. If the *method* provided by the *superclass* is used on an *instance* of the *subclass*, the *method accesses* the *local slot*. 

Objects **7–15**

 

 


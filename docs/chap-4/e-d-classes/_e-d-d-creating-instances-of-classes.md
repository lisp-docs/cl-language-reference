**4.3.3 Creating Instances of Classes** 

The generic function **make-instance** creates and returns a new *instance* of a *class*. The object system provides several mechanisms for specifying how a new *instance* is to be initialized. For example, it is possible to specify the initial values for *slots* in newly created *instances* either by giving arguments to **make-instance** or by providing default initial values. Further initialization 

activities can be performed by *methods* written for *generic functions* that are part of the initialization protocol. The complete initialization protocol is described in Section 7.1 (Object Creation and Initialization). 


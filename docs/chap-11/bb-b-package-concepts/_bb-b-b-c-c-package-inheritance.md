**11.1.1.2.2 Package Inheritance** 

*Packages* can be built up in layers. From one point of view, a *package* is a single collection of mappings from *strings* into *internal symbols* and *external symbols*. However, some of these mappings might be established within the *package* itself, while other mappings are inherited from other *packages* via **use-package**. A *symbol* is said to be *present* in a *package* if the mapping is in the *package* itself and is not inherited from somewhere else. 

There is no way to inherit the *internal symbols* of another *package*; to refer to an *internal symbol* using the *Lisp reader* , a *package* containing the *symbol* must be made to be the *current package*, a *package prefix* must be used, or the *symbol* must be *imported* into the *current package*. 


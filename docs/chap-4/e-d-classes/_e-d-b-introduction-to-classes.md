 

A *class* is an *object* that determines the structure and behavior of a set of other *objects*, which are called its *instances*. 

A *class* can inherit structure and behavior from other *classes*. A *class* whose definition refers to other *classes* for the purpose of inheriting from them is said to be a *subclass* of each of those *classes*. The *classes* that are designated for purposes of inheritance are said to be *superclasses* of the inheriting *class*. 

A *class* can have a *name*. The *function* **class-name** takes a *class object* and returns its *name*. The *name* of an anonymous *class* is **nil**. A *symbol* can *name* a *class*. The *function* **find-class** takes a *symbol* and returns the *class* that the *symbol* names. A *class* has a *proper name* if the *name* is a *symbol* and if the *name* of the *class* names that *class*. That is, a *class C* has the *proper name S* if *S* = (class-name *C*) and *C* = (find-class *S*). Notice that it is possible for (find-class *S*&#60;sub&#62;1&#60;/sub&#62;) = (find-class *S*&#60;sub&#62;2&#60;/sub&#62;) and *S*&#60;sub&#62;1&#60;/sub&#62; *6*= *S*&#60;sub&#62;2&#60;/sub&#62;. If *C* = (find-class *S*), we say that *C* is the *class named S*. 

A &#60;i&#62;class C&#60;/i&#62;&#60;sub&#62;1&#60;/sub&#62; is a &#60;i&#62;direct superclass&#60;/i&#62; of a &#60;i&#62;class C&#60;/i&#62;&#60;sub&#62;2&#60;/sub&#62; if &#60;i&#62;C&#60;/i&#62;&#60;sub&#62;2&#60;/sub&#62; explicitly designates &#60;i&#62;C&#60;/i&#62;&#60;sub&#62;1&#60;/sub&#62; as a &#60;i&#62;superclass&#60;/i&#62; in its definition. In this case &#60;i&#62;C&#60;/i&#62;&#60;sub&#62;2&#60;/sub&#62; is a &#60;i&#62;direct subclass&#60;/i&#62; of &#60;i&#62;C&#60;/i&#62;&#60;sub&#62;1&#60;/sub&#62;. A &#60;i&#62;class C&#60;sub&#62;n&#60;/sub&#62;&#60;/i&#62; is a &#60;i&#62;superclass&#60;/i&#62; of a &#60;i&#62;class C&#60;/i&#62;&#60;sub&#62;1&#60;/sub&#62; if there exists a series of &#60;i&#62;classes C&#60;/i&#62;&#60;sub&#62;2&#60;/sub&#62;&#60;i&#62;, . . . , C&#60;sub&#62;n−&#60;/sub&#62;&#60;/i&#62;1&#60;/sub&#62; such that &#60;i&#62;C&#60;sub&#62;i&#60;/sub&#62;&#60;/i&#62;+1&#60;/sub&#62; is a &#60;i&#62;direct superclass&#60;/i&#62; of &#60;i&#62;C&#60;sub&#62;i&#60;/sub&#62;&#60;/i&#62; for 1 &#60;i&#62;≤ i&#60;/i&#62; &#60; &#60;i&#62;n&#60;/i&#62;. In this case, &#60;i&#62;C&#60;/i&#62;&#60;sub&#62;1&#60;/sub&#62; is a &#60;i&#62;subclass&#60;/i&#62; of &#60;i&#62;C&#60;sub&#62;n&#60;/sub&#62;&#60;/i&#62;. A &#60;i&#62;class&#60;/i&#62; is considered neither a &#60;i&#62;superclass&#60;/i&#62; nor a &#60;i&#62;subclass&#60;/i&#62; of 

itself. That is, if *C*&#60;sub&#62;1&#60;/sub&#62; is a *superclass* of *C*&#60;sub&#62;2&#60;/sub&#62;, then *C*&#60;sub&#62;1&#60;/sub&#62; *6*= *C*&#60;sub&#62;2&#60;/sub&#62;. The set of *classes* consisting of some given *class C* along with all of its *superclasses* is called “*C* and its superclasses.” 

Each *class* has a *class precedence list*, which is a total ordering on the set of the given *class* and its *superclasses*. The total ordering is expressed as a list ordered from most specific to least specific. The *class precedence list* is used in several ways. In general, more specific *classes* can *shadow*&#60;sub&#62;1&#60;/sub&#62; features that would otherwise be inherited from less specific *classes*. The *method* selection and combination process uses the *class precedence list* to order *methods* from most specific to least specific. 

When a *class* is defined, the order in which its direct *superclasses* are mentioned in the defining 





form is important. Each *class* has a *local precedence order*, which is a *list* consisting of the *class* followed by its *direct superclasses* in the order mentioned in the defining *form*. 

A *class precedence list* is always consistent with the *local precedence order* of each *class* in the list. The *classes* in each *local precedence order* appear within the *class precedence list* in the same order. If the *local precedence orders* are inconsistent with each other, no *class precedence list* can be constructed, and an error is signaled. The *class precedence list* and its computation is discussed in Section 4.3.5 (Determining the Class Precedence List). 

*classes* are organized into a directed acyclic graph. There are two distinguished *classes*, named **t** and **standard-object**. The *class* named **t** has no *superclasses*. It is a *superclass* of every *class* except itself. The *class* named **standard-object** is an *instance* of the *class* **standard-class** and is a *superclass* of every *class* that is an *instance* of the *class* **standard-class** except itself. 

There is a mapping from the object system *class* space into the *type* space. Many of the standard *types* specified in this document have a corresponding *class* that has the same *name* as the *type*. Some *types* do not have a corresponding *class*. The integration of the *type* and *class* systems is discussed in Section 4.3.7 (Integrating Types and Classes). 

*Classes* are represented by *objects* that are themselves *instances* of *classes*. The *class* of the *class* of an *object* is termed the *metaclass* of that *object*. When no misinterpretation is possible, the term *metaclass* is used to refer to a *class* that has *instances* that are themselves *classes*. The *metaclass* determines the form of inheritance used by the *classes* that are its *instances* and the representation of the *instances* of those *classes*. The object system provides a default *metaclass*, **standard-class**, that is appropriate for most programs. 

Except where otherwise specified, all *classes* mentioned in this standard are *instances* of the *class* **standard-class**, all *generic functions* are *instances* of the *class* **standard-generic-function**, and all *methods* are *instances* of the *class* **standard-method**. 


**define-method-combination** *Macro* 



**Syntax:** 



**define-method-combination** *name* [[ *↓short-form-option* ]] 



*→ name* 



**define-method-combination** *name lambda-list* 



(*\&#123;method-group-specifier\&#125;*\*) 



[(:arguments *. args-lambda-list*)] 



[(:generic-function *generic-function-symbol*)] 



[[ *\&#123;declaration\&#125;*\* *| documentation* ]] 



*\&#123;form\&#125;*\* 



*→ name* 



*short-form-option::*=:documentation *documentation |* 



:identity-with-one-argument *identity-with-one-argument |* 



:operator *operator* 



*method-group-specifier::*=(*name \&#123;\&#123;qualifier-pattern\&#125;*<sup>+</sup>*| predicate\&#125;* [[ *↓long-form-option* ]]) 



*long-form-option::*=:description *description |* 



:order *order |* 



:required *required-p* 



**Arguments and Values:** 



*args-lambda-list*—a *define-method-combination arguments lambda list*. 



*declaration*—a **declare** *expression*; not evaluated. 



*description*—a *format control*. 



*documentation*—a *string*; not evaluated. 



*forms*—an *implicit progn* that must compute and return the *form* that specifies how the *methods* are combined, that is, the *effective method*. 







 



 



**define-method-combination** 



*generic-function-symbol*—a *symbol*. 



*identity-with-one-argument*—a *generalized boolean*. 



*lambda-list*—*ordinary lambda list*. 



*name*—a *symbol*. Non-*keyword*, *non-nil symbols* are usually used. 



*operator*—an *operator* . *Name* and *operator* are often the *same symbol*. This is the default, but it is not required. 



*order*—:most-specific-first or :most-specific-last; evaluated. 



*predicate*—a *symbol* that names a *function* of one argument that returns a *generalized boolean*. *qualifier-pattern*—a *list*, or the *symbol* **\***. 



*required-p*—a *generalized boolean*. 



**Description:** 



The macro **define-method-combination** is used to define new types of method combination. 



There are two forms of **define-method-combination**. The short form is a simple facility for the cases that are expected to be most commonly needed. The long form is more powerful but more verbose. It resembles **defmacro** in that the body is an expression, usually using backquote, that computes a *form*. Thus arbitrary control structures can be implemented. The long form also allows 



arbitrary processing of method *qualifiers*. 



**Short Form** 



The short form syntax of **define-method-combination** is recognized when the sec ond *subform* is a *non-nil* symbol or is not present. When the short form is 



used, *name* is defined as a type of method combination that produces a Lisp form (*operator method-call method-call . . .*). The *operator* is a *symbol* that can be the *name* of a *function*, *macro*, or *special operator* . The *operator* can be supplied by a keyword option; it defaults to *name*. 



Keyword options for the short form are the following: 



*•* The :documentation option is used to document the method-combination type; see description of long form below. 



*•* The :identity-with-one-argument option enables an optimization when its value is *true* (the default is *false*). If there is exactly one applicable method and it is a 



primary method, that method serves as the effective method and *operator* is not 



called. This optimization avoids the need to create a new effective method and 



avoids the overhead of a *function* call. This option is designed to be used with 



operators such as **progn**, **and**, +, and **max**. 







 



 



**define-method-combination** 



*•* The :operator option specifies the *name* of the operator. The *operator* argument is a *symbol* that can be the *name* of a *function*, *macro*, or *special form*. 



These types of method combination require exactly one *qualifier* per method. An error is signaled if there are applicable methods with no *qualifiers* or with *qualifiers* that are not supported by the method combination type. 



A method combination procedure defined in this way recognizes two roles for methods. A method whose one *qualifier* is the symbol naming this type of method combination is defined to be a primary method. At least one primary method must be applicable or an error is signaled. A method with :around as its one *qualifier* is an auxiliary method that behaves the same as an *around method* in standard method combination. The *function* 



**call-next-method** can only be used in *around methods*; it cannot be used in primary methods defined by the short form of the **define-method-combination** macro. 



A method combination procedure defined in this way accepts an optional argument named *order*, which defaults to :most-specific-first. A value of :most-specific-last reverses the order of the primary methods without affecting the order of the auxiliary methods. 



The short form automatically includes error checking and support for *around methods*. 



For a discussion of built-in method combination types, see Section 7.6.6.4 (Built-in Method Combination Types). 



**Long Form** 



The long form syntax of **define-method-combination** is recognized when the second *subform* is a list. 



The *lambda-list* receives any arguments provided after the *name* of the method combination type in the :method-combination option to **defgeneric**. 



A list of method group specifiers follows. Each specifier selects a subset of the applicable methods to play a particular role, either by matching their *qualifiers* against some patterns or by testing their *qualifiers* with a *predicate*. These method group specifiers define all method *qualifiers* that can be used with this type of method combination. 



The *car* of each *method-group-specifier* is a *symbol* which *names* a *variable*. During the execution of the *forms* in the body of **define-method-combination**, this *variable* is bound to a list of the *methods* in the method group. The *methods* in this list occur in the order specified by the :order option. 



If *qualifier-pattern* is a *symbol* it must be **\***. A method matches a *qualifier-pattern* if the method’s list of *qualifiers* is **equal** to the *qualifier-pattern* (except that the symbol **\*** in a *qualifier-pattern* matches anything). Thus a *qualifier-pattern* can be one of the following: the *empty list*, which matches *unqualified methods*; the symbol **\***, which matches all methods; a true list, which matches methods with the same number of *qualifiers* as the length of the list when each *qualifier* matches the corresponding list element; or a dotted list that ends 







 



 



**define-method-combination** 



in the symbol **\*** (the **\*** matches any number of additional *qualifiers*). 



Each applicable method is tested against the *qualifier-patterns* and *predicates* in left-to-right order. As soon as a *qualifier-pattern* matches or a *predicate* returns true, the method becomes a member of the corresponding method group and no further tests are made. Thus if a method could be a member of more than one method group, it joins only the first such group. If a method group has more than one *qualifier-pattern*, a method need only satisfy one of the *qualifier-patterns* to be a member of the group. 



The *name* of a *predicate* function can appear instead of *qualifier-patterns* in a method group specifier. The *predicate* is called for each method that has not been assigned to an earlier method group; it is called with one argument, the method’s *qualifier list*. The *predicate* should return true if the method is to be a member of the method group. A *predicate* can be distinguished from a *qualifier-pattern* because it is a *symbol* other than **nil** or **\***. 



If there is an applicable method that does not fall into any method group, the *function* **invalid-method-error** is called. 



Method group specifiers can have keyword options following the *qualifier* patterns or predicate. Keyword options can be distinguished from additional *qualifier* patterns because they are neither lists nor the symbol **\***. The keyword options are as follows: 



*•* The :description option is used to provide a description of the role of methods in the method group. Programming environment tools use (apply #’format stream 



*format-control* (method-qualifiers *method*)) to print this description, which is 



expected to be concise. This keyword option allows the description of a method 



*qualifier* to be defined in the same module that defines the meaning of the method 



*qualifier* . In most cases, *format-control* will not contain any **format** directives, 



but they are available for generality. If :description is not supplied, a default 



description is generated based on the variable name and the *qualifier* patterns and 



on whether this method group includes the *unqualified methods*. 



*•* The :order option specifies the order of methods. The *order* argument is a *form* that evaluates to :most-specific-first or :most-specific-last. If it evaluates 



to any other value, an error is signaled. If :order is not supplied, it defaults to 



:most-specific-first. 



*•* The :required option specifies whether at least one method in this method group is required. If its value is *true* and the method group is empty (that is, no 



applicable methods match the *qualifier* patterns or satisfy the predicate), an error 



is signaled. If :required is not supplied, it defaults to **nil**. 



The use of method group specifiers provides a convenient syntax to select methods, to divide them among the possible roles, and to perform the necessary error checking. It is possible to perform further filtering of methods in the body *forms* by using normal list-processing operations and the functions **method-qualifiers** and **invalid-method-error**. 



It is permissible to use **setq** on the variables named in the method group specifiers and 


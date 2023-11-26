 

A *generic function* is a function whose behavior depends on the *classes* or identities of the *arguments* supplied to it. A *generic function object* is associated with a set of *methods*, a *lambda list*, a *method combination*\<sub\>2\</sub\>, and other information. 

Like an *ordinary function*, a *generic function* takes *arguments*, performs a series of operations, and perhaps returns useful *values*. An *ordinary function* has a single body of *code* that is always *executed* when the *function* is called. A *generic function* has a set of bodies of *code* of which a subset is selected for *execution*. The selected bodies of *code* and the manner of their combination are determined by the *classes* or identities of one or more of the *arguments* to the *generic function* and by its *method combination*. 

*Ordinary functions* and *generic functions* are called with identical syntax. 

*Generic functions* are true *functions* that can be passed as *arguments* and used as the first *argument* to **funcall** and **apply**. 

A *binding* of a *function name* to a *generic function* can be *established* in one of several ways. It can be *established* in the *global environment* by **ensure-generic-function**, **defmethod** (implicitly, due to **ensure-generic-function**) or **defgeneric** (also implicitly, due to **ensure-generic-function**). No *standardized* mechanism is provided for *establishing* a *binding* of a *function name* to a *generic function* in the *lexical environment*. 

When a **defgeneric** form is evaluated, one of three actions is taken (due to **ensure-generic-function**): 

*•* If a generic function of the given name already exists, the existing generic function object is modified. Methods specified by the current **defgeneric** form are added, and any methods in the existing generic function that were defined by a previous **defgeneric** form are removed. Methods added by the current **defgeneric** form might replace methods defined by **defmethod**, **defclass**, **define-condition**, or **defstruct**. No other methods in the generic function are affected or replaced. 

*•* If the given name names an *ordinary function*, a *macro*, or a *special operator* , an error is signaled. 

*•* Otherwise a generic function is created with the methods specified by the method definitions in the **defgeneric** form. 

Some *operators* permit specification of the options of a *generic function*, such as the *type* of *method combination* it uses or its *argument precedence order* . These *operators* will be referred to as “operators that specify generic function options.” The only *standardized operator* in this category is **defgeneric**. 



 

 

Some *operators* define *methods* for a *generic function*. These *operators* will be referred to as *method-defining operators*; their associated *forms* are called *method-defining forms*. The *standardized method-defining operators* are listed in Figure 7–1. 

|\<p\>**defgeneric defmethod defclass** \</p\>\<p\>**define-condition defstruct**\</p\>|
| :- |


**Figure 7–1. Standardized Method-Defining Operators** 

Note that of the *standardized method-defining operators* only **defgeneric** can specify *generic function* options. **defgeneric** and any *implementation-defined operators* that can specify *generic function* options are also referred to as “operators that specify generic function options.” 


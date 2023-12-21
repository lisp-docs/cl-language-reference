---
title: D
sidebar_position: 100
---

**D** 



**data type** *n. Trad.* a *type*. 



**debug I/O** *n.* the *bidirectional stream* that is the *value* of the *variable* **\*debug-io\***. 



**debugger** *n.* a facility that allows the *user* to handle a *condition* interactively. For example, the *debugger* might permit interactive selection of a *restart* from among the *active restarts*, and it might perform additional *implementation-defined* services for the purposes of debugging. 



**declaration** *n.* a *global declaration* or *local declaration*. 



**declaration identifier** *n.* one of the *symbols* **declaration**, **dynamic-extent**, **ftype**, **function**, **ignore**, **inline**, **notinline**, **optimize**, **special**, or **type**; or a *symbol* which is the *name* of a *type*; or a *symbol* which has been *declared* to be a *declaration identifier* by using a **declaration** *declaration*. 



**declaration specifier** *n.* an *expression* that can appear at top level of a **declare** expression or a **declaim** form, or as the argument to **proclaim**, and which has a *car* which is a *declaration identifier* , and which has a *cdr* that is data interpreted according to rules specific to the *declaration identifier* . 



**declare** *v.* to *establish* a *declaration*. See **declare**, **declaim**, or **proclaim**. 







 



 



**decline** *v.* (of a *handler* ) to return normally without having *handled* the *condition* being *signaled*, permitting the signaling process to continue as if the *handler* had not been present. 



**decoded time** *n. absolute time*, represented as an ordered series of nine *objects* which, taken together, form a description of a point in calendar time, accurate to the nearest second (except that *leap seconds* are ignored). See Section 25.1.4.1 (Decoded Time). 



**default method** *n.* a *method* having no *parameter specializers* other than the *class* **t**. Such a *method* is always an *applicable method* but might be *shadowed* <sub>2</sub> by a more specific *method*. 



**defaulted initialization argument list** *n.* a *list* of alternating initialization 



argument *names* and *values* in which unsupplied initialization arguments are 



defaulted, used in the protocol for initializing and reinitializing *instances* of *classes*. 



**define-method-combination arguments lambda list** *n.* a *lambda list* used 



by the :arguments option to **define-method-combination**. See Section 3.4.10 



(Define-method-combination Arguments Lambda Lists). 



**define-modify-macro lambda list** *n.* a *lambda list* used by **define-modify-macro**. See Section 3.4.9 (Define-modify-macro Lambda Lists). 



**defined name** *n.* a *symbol* the meaning of which is defined by Common Lisp. 



**defining form** *n.* a *form* that has the side-effect of *establishing* a definition. “**defun** and **defparameter** are defining forms.” 



**defsetf lambda list** *n.* a *lambda list* that is like an *ordinary lambda list* except that it does not permit **&amp;aux** and that it permits use of **&amp;environment**. See Section 3.4.7 (Defsetf Lambda Lists). 



**deftype lambda list** *n.* a *lambda list* that is like a *macro lambda list* except that the default *value* for unsupplied *optional parameters* and *keyword parameters* is the *symbol* **\*** (rather than **nil**). See Section 3.4.8 (Deftype Lambda Lists). 



**denormalized** *adj.*, *ANSI*, *IEEE* (of a *float*) conforming to the description of 



“denormalized” as described by *IEEE Standard for Binary Floating-Point Arithmetic*. For example, in an *implementation* where the minimum possible exponent was -7 but where 0.001 was a valid mantissa, the number 1.0e-10 might be representable as 0.001e-7 internally even if the *normalized* representation would call for it to 



be represented instead as 1.0e-10 or 0.1e-9. By their nature, *denormalized floats* generally have less precision than *normalized floats*. 







 



 



**derived type** *n.* a *type specifier* which is defined in terms of an expansion into 



another *type specifier* . **deftype** defines *derived types*, and there may be other 



*implementation-defined operators* which do so as well. 



**derived type specifier** *n.* a *type specifier* for a *derived type*. 



**designator** *n.* an *object* that denotes another *object*. In the dictionary entry for an *operator* if a *parameter* is described as a *designator* for a *type*, the description of the *operator* is written in a way that assumes that appropriate coercion to that *type* has 



already occurred; that is, that the *parameter* is already of the denoted *type*. For more detailed information, see Section 1.4.1.5 (Designators). 



**destructive** *adj.* (of an *operator* ) capable of modifying some program-visible aspect of one or more *objects* that are either explicit *arguments* to the *operator* or that can be obtained directly or indirectly from the *global environment* by the *operator* . 



**destructuring lambda list** *n.* an *extended lambda list* used in **destructuring-bind** and nested within *macro lambda lists*. See Section 3.4.5 (Destructuring Lambda Lists). 



**different** *adj.* not the *same* “The strings "FOO" and "foo" are different under **equal** but not under **equalp**.” 



**digit** *n.* (in a *radix* ) a *character* that is among the possible digits (0 to 9, A to Z, and a to z) and that is defined to have an associated numeric weight as a digit in that *radix* . See Section 13.1.4.6 (Digits in a Radix). 



**dimension** *n.* 1. a non-negative *integer* indicating the number of *objects* an *array* can hold along one axis. If the *array* is a *vector* with a *fill pointer* , the *fill pointer* is ignored. “The second dimension of that array is 7.” 2. an axis of an array. “This array has six dimensions.” 



**direct instance** *n.* (of a *class C*) an *object* whose *class* is *C* itself, rather than some *subclass* of *C*. “The function **make-instance** always returns a direct instance of the class which is (or is named by) its first argument.” 



**direct subclass** *n.* (of a *class C*<sub>1</sub>) a *class C*<sub>2</sub>, such that *C*<sub>1</sub> is a *direct superclass* of *C*<sub>2</sub>. 



**direct superclass** *n.* (of a *class C*<sub>1</sub>) a *class C*<sub>2</sub> which was explicitly designated as a *superclass* of *C*<sub>1</sub> in the definition of *C*<sub>1</sub>. 



**disestablish** *v.t.* to withdraw the *establishment* of an *object*, a *binding*, an *exit point*, a *tag*, a *handler* , a *restart*, or an *environment*. 



**disjoint** *n.* (of *types*) having no *elements* in common. 







 



 



**dispatching macro character** *n.* a *macro character* that has an associated table that specifies the *function* to be called for each *character* that is seen following the *dispatching macro character* . See the *function* **make-dispatch-macro-character**. 



**displaced array** *n.* an *array* which has no storage of its own, but which is instead indirected to the storage of another *array*, called its *target*, at a specified offset, in such a way that any attempt to *access* the *displaced array* implicitly references the *target array*. 



**distinct** *adj.* not *identical*. 



**documentation string** *n.* (in a defining *form*) A *literal string* which because of the context in which it appears (rather than because of some intrinsically observable aspect of the *string*) is taken as documentation. In some cases, the *documentation string* is saved in such a way that it can later be obtained by supplying either an *object*, or by supplying a *name* and a “kind” to the *function* **documentation**. “The body of code in a **defmacro** form can be preceded by a documentation string of kind **function**.” 



**dot** *n.* the *standard character* that is variously called “full stop,” “period,” or “dot” (.). See Figure 2–5. 



**dotted list** *n.* a *list* which has a terminating *atom* that is not **nil**. (An *atom* by itself is not a *dotted list*, however.) 



**dotted pair** *n.* 1. a *cons* whose *cdr* is a *non-list*. 2. any *cons*, used to emphasize the use of the *cons* as a symmetric data pair. 



**double float** *n.* an *object* of *type* **double-float**. 



**double-quote** *n.* the *standard character* that is variously called “quotation mark” or “double quote” ("). See Figure 2–5. 



**dynamic binding** *n.* a *binding* in a *dynamic environment*. 



**dynamic environment** *n.* that part of an *environment* that contains *bindings* 



with *dynamic extent*. A *dynamic environment* contains, among other things: *exit points* established by **unwind-protect**, and *bindings* of *dynamic variables*, *exit points* established by **catch**, *condition handlers*, and *restarts*. 



**dynamic extent** *n.* an *extent* whose duration is bounded by points of *establishment* and *disestablishment* within the execution of a particular *form*. See *indefinite extent*. “Dynamic variable bindings have dynamic extent.” 



**dynamic scope** *n. indefinite scope* along with *dynamic extent*. 







 



 



**dynamic variable** *n.* a *variable* the *binding* for which is in the *dynamic environment*. See **special**. 




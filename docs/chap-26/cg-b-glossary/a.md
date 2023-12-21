---
title: A
sidebar_position: 97
---

**A** 



**absolute** *adj.* 1. (of a *time*) representing a specific point in time. 2. (of a *pathname*) representing a specific position in a directory hierarchy. See *relative*. 



**access** *n.*, *v.t.* 1. *v.t.* (a *place*, or *array*) to *read* <sub>1</sub> or *write*<sub>1</sub> the *value* of the *place* or an *element* of the *array*. 2. *n.* (of a *place*) an attempt to *access*<sub>1</sub> the *value* of the *place*. 



**accessibility** *n.* the state of being *accessible*. 



**accessible** *adj.* 1. (of an *object*) capable of being *referenced*. 2. (of *shared slots* or *local slots* in an *instance* of a *class*) having been defined by the *class* of the *instance* or *inherited* from a *superclass* of that *class*. 3. (of a *symbol* in a *package*) capable of being *referenced* without a *package prefix* when that *package* is current, regardless of whether the *symbol* is *present* in that *package* or is *inherited*. 



**accessor** *n.* an *operator* that performs an *access*. See *reader* and *writer* . 







 



 



**active** *adj.* 1. (of a *handler* , a *restart*, or a *catch tag*) having been *established* but not yet *disestablished*. 2. (of an *element* of an *array*) having an index that is greater than or equal to zero, but less than the *fill pointer* (if any). For an *array* that has no *fill pointer* , all *elements* are considered *active*. 



**actual adjustability** *n.* (of an *array*) a *generalized boolean* that is associated with the *array*, representing whether the *array* is *actually adjustable*. See also *expressed adjustability* and **adjustable-array-p**. 



**actual argument** *n. Trad.* an *argument*. 



**actual array element type** *n.* (of an *array*) the *type* for which the *array* is actually specialized, which is the *upgraded array element type* of the *expressed array element type* of the *array*. See the *function* **array-element-type**. 



**actual complex part type** *n.* (of a *complex* ) the *type* in which the real and imaginary parts of the *complex* are actually represented, which is the *upgraded complex part type* of the *expressed complex part type* of the *complex* . 



**actual parameter** *n. Trad.* an *argument*. 



**actually adjustable** *adj.* (of an *array*) such that **adjust-array** can adjust its 



characteristics by direct modification. A *conforming program* may depend on an *array* being *actually adjustable* only if either that *array* is known to have been *expressly adjustable* or if that *array* has been explicitly tested by **adjustable-array-p**. 



**adjustability** *n.* (of an *array*) 1. *expressed adjustability*. 2. *actual adjustability*. 



**adjustable** *adj.* (of an *array*) 1. *expressly adjustable*. 2. *actually adjustable*. 



**after method** *n.* a *method* having the *qualifier* :after. 



**alist** [ **—a list** ], *n.* an *association list*. 



<b>alphabetic</b> <i>n.</i>, <i>adj.</i> 1. <i>adj.</i> (of a <i>character</i> ) being one of the <i>standard characters</i> A through Z or a through z, or being any <i>implementation-defined</i> character that has <i>case</i>, or being some other <i>graphic character</i> defined by the <i>implementation</i> to be <i>alphabetic</i><sub>1</sub>. 2. a. <i>n.</i> one of several possible <i>constituent traits</i> of a <i>character</i> . For details, see Section 2.1.4.1 (Constituent Characters) and Section 2.2 (Reader Algorithm). b. <i>adj.</i> (of a <i>character</i> ) being a <i>character</i> that has <i>syntax type constituent</i> in the <i>current readtable</i> and that has the <i>constituent trait alphabetic</i><sub>2<i>a</i></sub>. See Figure 2–8. 



**alphanumeric** *adj.* (of a *character* ) being either an *alphabetic*<sub>1</sub> *character* or a *numeric* character. 







 



 



**ampersand** *n.* the *standard character* that is called “ampersand” (&amp;). See Figure 2–5. 



**anonymous** *adj.* 1. (of a *class* or *function*) having no *name* 2. (of a *restart*) having a *name* of **nil**. 



**apparently uninterned** *adj.* having a *home package* of **nil**. (An *apparently* 



*uninterned symbol* might or might not be an *uninterned symbol*. *Uninterned symbols* have a *home package* of **nil**, but *symbols* which have been *uninterned* from their *home package* also have a *home package* of **nil**, even though they might still be *interned* in some other *package*.) 



**applicable** *adj.* 1. (of a *handler* ) being an *applicable handler* . 2. (of a *method*) being an *applicable method*. 3. (of a *restart*) being an *applicable restart*. 



**applicable handler** *n.* (for a *condition* being *signaled*) an *active handler* for which the associated type contains the *condition*. 



**applicable method** *n.* (of a *generic function* called with *arguments*) a *method* of the *generic function* for which the *arguments* satisfy the *parameter specializers* of that *method*. See Section 7.6.6.1.1 (Selecting the Applicable Methods). 



**applicable restart** *n.* 1. (for a *condition*) an *active handler* for which the associated test returns *true* when given the *condition* as an argument. 2. (for no particular *condition*) an *active handler* for which the associated test returns *true* when given **nil** as an argument. 



**apply** *v.t.* (a *function* to a *list*) to *call* the *function* with arguments that are the *elements* of the *list*. “Applying the function **+** to a list of integers returns the sum of the elements of that list.” 



**argument** *n.* 1. (of a *function*) an *object* which is offered as data to the *function* when it is *called*. 2. (of a *format control*) a *format argument*. 



**argument evaluation order** *n.* the order in which *arguments* are evaluated in a function call. “The argument evaluation order for Common Lisp is left to right.” See Section 3.1 (Evaluation). 



**argument precedence order** *n.* the order in which the *arguments* to a *generic function* are considered when sorting the *applicable methods* into precedence order. 



**around method** *n.* a *method* having the *qualifier* :around. 



**array** *n.* an *object* of *type* **array**, which serves as a container for other *objects* arranged in a Cartesian coordinate system. 







 



 



**array element type** *n.* (of an *array*) 1. a *type* associated with the *array*, and of which all *elements* of the *array* are constrained to be members. 2. the *actual array element type* of the *array*. 3. the *expressed array element type* of the *array*. 



**array total size** *n.* the total number of *elements* in an *array*, computed by taking the product of the *dimensions* of the *array*. (The size of a zero-dimensional *array* is therefore one.) 



**assign** *v.t.* (a *variable*) to change the *value* of the *variable* in a *binding* that has already been *established*. See the *special operator* **setq**. 



**association list** *n.* a *list* of *conses* representing an association of *keys* with *values*, where the *car* of each *cons* is the *key* and the *cdr* is the *value* associated with that *key*. 



**asterisk** *n.* the *standard character* that is variously called “asterisk” or “star” (\*). See Figure 2–5. 



**at-sign** *n.* the *standard character* that is variously called “commercial at” or “at sign” (@). See Figure 2–5. 



**atom** *n.* any *object* that is not a *cons*. “A vector is an atom.” 



**atomic** *adj.* being an *atom*. “The number 3, the symbol foo, and **nil** are atomic.” 



**atomic type specifier** *n.* a *type specifier* that is *atomic*. For every *atomic type specifier* , *x*, there is an equivalent *compound type specifier* with no arguments supplied, (*x*). 



**attribute** *n.* (of a *character* ) a program-visible aspect of the *character* . The only *standardized attribute* of a *character* is its *code*<sub>2</sub>, but *implementations* are permitted to have additional *implementation-defined attributes*. See Section 13.1.3 (Character Attributes). “An implementation that support fonts might make font information an attribute of a character, while others might represent font information separately from characters.” 



**aux variable** *n.* a *variable* that occurs in the part of a *lambda list* that was introduced by **&amp;aux**. Unlike all other *variables* introduced by a *lambda-list*, *aux variables* are not *parameters*. 



**auxiliary method** *n.* a member of one of two sets of *methods* (the set of *primary methods* is the other) that form an exhaustive partition of the set of *methods* on the *method*’s *generic function*. How these sets are determined is dependent on the *method combination* type; see Section 7.6.2 (Introduction to Methods). 







 



 




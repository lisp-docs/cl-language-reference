---
title: M
sidebar_position: 109
---

**M** 



**macro** *n.* 1. a *macro form* 2. a *macro function*. 3. a *macro name*. 



**macro character** *n.* a *character* which, when encountered by the *Lisp reader* in its main dispatch loop, introduces a *reader macro*<sub>1</sub>. (*Macro characters* have nothing to do with *macros*.) 



**macro expansion** *n.* 1. the process of translating a *macro form* into another *form*. 2. the *form* resulting from this process. 



**macro form** *n.* a *form* that stands for another *form* (*e.g.*, for the purposes of 



abstraction, information hiding, or syntactic convenience); that is, either a *compound form* whose first element is a *macro name*, or a *form* that is a *symbol* that names a *symbol macro*. 



**macro function** *n.* a *function* of two arguments, a *form* and an *environment*, that implements *macro expansion* by producing a *form* to be evaluated in place of the original argument *form*. 



**macro lambda list** *n.* an *extended lambda list* used in *forms* that *establish macro* definitions, such as **defmacro** and **macrolet**. See Section 3.4.4 (Macro Lambda Lists). 



**macro name** *n.* a *name* for which **macro-function** returns *true* and which when used as the first element of a *compound form* identifies that *form* as a *macro form*. 



**macroexpand hook** *n.* the *function* that is the *value* of **\*macroexpand-hook\***. 



**mapping** *n.* 1. a type of iteration in which a *function* is successively applied to *objects* taken from corresponding entries in collections such as *sequences* or *hash tables*. 2. *Math.* a relation between two sets in which each element of the first set (the “domain”) is assigned one element of the second set (the “range”). 



**metaclass** *n.* 1. a *class* whose instances are *classes*. 2. (of an *object*) the *class* of the *class* of the *object*. 



**Metaobject Protocol** *n.* one of many possible descriptions of how a *conforming implementation* might implement various aspects of the object system. This description is beyond the scope of this document, and no *conforming implementation* is required to adhere to it except as noted explicitly in this specification. Nevertheless, its existence helps to establish normative practice, and implementors with no reason to diverge from it are encouraged to consider making their *implementation* adhere to it where possible. It is described in detail in *The Art of the Metaobject Protocol*. 







 



 



**method** *n.* an *object* that is part of a *generic function* and which provides information about how that *generic function* should behave when its *arguments* are *objects* of certain *classes* or with certain identities. 



**method combination** *n.* 1. generally, the composition of a set of *methods* to produce an *effective method* for a *generic function*. 2. an object of *type* **method-combination**, which represents the details of how the *method combination*<sub>1</sub> for one or more specific *generic functions* is to be performed. 



**method-defining form** *n.* a *form* that defines a *method* for a *generic function*, whether explicitly or implicitly. See Section 7.6.1 (Introduction to Generic Functions). 



**method-defining operator** *n.* an *operator* corresponding to a *method-defining form*. See Figure 7–1. 



**minimal compilation** *n.* actions the *compiler* must take at compile time. See Section 3.2.2 (Compilation Semantics). 



**modified lambda list** *n.* a list resembling an *ordinary lambda list* in form and 



purpose, but which deviates in syntax or functionality from the definition of an 



*ordinary lambda list*. See *ordinary lambda list*. “**deftype** uses a modified lambda list.” 



**most recent** *adj.* innermost; that is, having been *established* (and not yet 



*disestablished*) more recently than any other of its kind. 



**multiple escape** *n.*, *adj.* 1. *n.* the *syntax type* of a *character* that is used in pairs to indicate that the enclosed *characters* are to be treated as *alphabetic*<sub>2</sub> *characters* with their *case* preserved. For details, see Section 2.1.4.5 (Multiple Escape Characters). 2. *adj.* (of a *character* ) having the *multiple escape syntax type*. 3. *n.* a *multiple escape*<sub>2</sub> *character* . (In the *standard readtable*, *vertical-bar* is a *multiple escape character* .) 



**multiple values** *n.* 1. more than one *value*. “The function **truncate** returns multiple values.” 2. a variable number of *values*, possibly including zero or one. “The function **values** returns multiple values.” 3. a fixed number of values other than one. “The macro **multiple-value-bind** is among the few operators in Common Lisp which can detect and manipulate multiple values.” 




---
title: U
sidebar_position: 117
---

**U** 



**unbound** *adj.* not having an associated denotation in a *binding*. See *bound*. 







 



 



**unbound variable** *n.* a *name* that is syntactically plausible as the name of a *variable* but which is not *bound* in the *variable namespace*. 



**undefined function** *n.* a *name* that is syntactically plausible as the name of a 



*function* but which is not *bound* in the *function namespace*. 



**unintern** *v.t.* (a *symbol* in a *package*) to make the *symbol* not be *present* in that *package*. (The *symbol* might continue to be *accessible* by inheritance.) 



**uninterned** *adj.* (of a *symbol*) not *accessible* in any *package*; *i.e.*, not *interned* <sub>1</sub>. 



**universal time** *n. time*, represented as a non-negative *integer* number of seconds. *Absolute universal time* is measured as an offset from the beginning of the year 1900 (ignoring *leap seconds*). See Section 25.1.4.2 (Universal Time). 



**unqualified method** *n.* a *method* with no *qualifiers*. 



**unregistered package** *n.* a *package object* that is not present in the *package* 



*registry*. An *unregistered package* has no *name*; *i.e.*, its *name* is **nil**. See the *function* **delete-package**. 



**unsafe** *adj.* (of *code*) not *safe*. (Note that, unless explicitly specified otherwise, if a particular kind of error checking is guaranteed only in a *safe* context, the same checking might or might not occur in that context if it were *unsafe*; describing a 



context as *unsafe* means that certain kinds of error checking are not reliably enabled but does not guarantee that error checking is definitely disabled.) 



**unsafe call** *n.* a *call* that is not a *safe call*. For more detailed information, see Section 3.5.1.1 (Safe and Unsafe Calls). 



**upgrade** *v.t.* (a declared *type* to an actual *type*) 1. (when creating an *array*) 



to substitute an *actual array element type* for an *expressed array element type* 



when choosing an appropriately *specialized array* representation. See the *function* **upgraded-array-element-type**. 2. (when creating a *complex* ) to substitute an *actual complex part type* for an *expressed complex part type* when choosing an appropriately *specialized complex* representation. See the *function* **upgraded-complex-part-type**. 



**upgraded array element type** *n.* (of a *type*) a *type* that is a *supertype* of the *type* and that is used instead of the *type* whenever the *type* is used as an *array element type* for object creation or type discrimination. See Section 15.1.2.1 (Array Upgrading). 



**upgraded complex part type** *n.* (of a *type*) a *type* that is a *supertype* of the *type* and that is used instead of the *type* whenever the *type* is used as a *complex part type* for object creation or type discrimination. See the *function* **upgraded-complex-part-type**. 







 



 



**uppercase** *adj.* (of a *character* ) being among *standard characters* corresponding to the capital letters A through Z, or being some other *implementation-defined character* that is defined by the *implementation* to be *uppercase*. See Section 13.1.4.3 (Characters With Case). 



**use** *v.t.* (a *package P*<sub>1</sub>) to *inherit* the *external symbols* of *P*<sub>1</sub>. (If a package *P*<sub>2</sub> uses *P*<sub>1</sub>, the *external symbols* of *P*<sub>1</sub> become *internal symbols* of *P*<sub>2</sub> unless they are explicitly *exported*.) “The package CL-USER uses the package CL.” 



**use list** *n.* (of a *package*) a (possibly empty) *list* associated with each *package* which determines what other *packages* are currently being *used* by that *package*. 



**user** *n.* an active entity, typically a human, that invokes or interacts with a *program* at run time, but that is not necessarily a *programmer* . 




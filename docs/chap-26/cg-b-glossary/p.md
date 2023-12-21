---
title: P
sidebar_position: 112
---

**P** 



**package** *n.* an *object* of *type* **package**. 



**package cell** *n. Trad.* (of a *symbol*) The *place* in a *symbol* that holds one of possibly several *packages* in which the *symbol* is *interned*, called the *home package*, or which holds **nil** if no such *package* exists or is known. See the *function* **symbol-package**. 



**package designator** *n.* a *designator* for a *package*; that is, an *object* that denotes a *package* and that is one of: a *string designator* (denoting the *package* that has the *string* that it designates as its *name* or as one of its *nicknames*), or a *package* (denoting itself). 



**package marker** *n.* a character which is used in the textual notation for a symbol to separate the package name from the symbol name, and which is *colon* in the *standard readtable*. See Section 2.1 (Character Syntax). 



**package prefix** *n.* a notation preceding the *name* of a *symbol* in text that is processed by the *Lisp reader* , which uses a *package name* followed by one or more *package markers*, and which indicates that the symbol is looked up in the indicated *package*. 



**package registry** *n.* A mapping of *names* to *package objects*. It is possible for there to be a *package object* which is not in this mapping; such a *package* is called an *unregistered package*. *Operators* such as **find-package** consult this mapping in order to find a *package* from its *name*. *Operators* such as **do-all-symbols**, **find-all-symbols**, and **list-all-packages** operate only on *packages* that exist in the *package registry*. 



**pairwise** *adv.* (of an adjective on a set) applying individually to all possible pairings of elements of the set. “The types *A*, *B*, and *C* are pairwise disjoint if *A* and *B* are disjoint, *B* and *C* are disjoint, and *A* and *C* are disjoint.” 



**parallel** *adj. Trad.* (of *binding* or *assignment*) done in the style of **psetq**, **let**, or **do**; that is, first evaluating all of the *forms* that produce *values*, and only then *assigning* or *binding* the *variables* (or *places*). Note that this does not imply traditional 



computational “parallelism” since the *forms* that produce *values* are evaluated 



*sequentially*. See *sequential*. 







 



 



**parameter** *n.* 1. (of a *function*) a *variable* in the definition of a *function* which takes on the *value* of a corresponding *argument* (or of a *list* of corresponding arguments) to that *function* when it is called, or which in some cases is given a default value because there is no corresponding *argument*. 2. (of a *format directive*) an *object* received as 



data flow by a *format directive* due to a prefix notation within the *format string* at the *format directive*’s point of use. See Section 22.3 (Formatted Output). “In "&#126;3,’0D", the number 3 and the character #\0 are parameters to the &#126;D format directive.” 



**parameter specializer** *n.* 1. (of a *method*) an *expression* which constrains the 



*method* to be applicable only to *argument* sequences in which the corresponding 



*argument* matches the *parameter specializer* . 2. a *class*, or a *list* (eql *object*). 



**parameter specializer name** *n.* 1. (of a *method* definition) an expression used in code to name a *parameter specializer* . See Section 7.6.2 (Introduction to Methods). 2. a *class*, a *symbol* naming a *class*, or a *list* (eql *form*). 



**pathname** *n.* an *object* of *type* **pathname**, which is a structured representation of the name of a *file*. A *pathname* has six components: a “host,” a “device,” a “directory,” a “name,” a “type,” and a “version.” 



**pathname designator** *n.* a *designator* for a *pathname*; that is, an *object* that denotes a *pathname* and that is one of: a *pathname namestring* (denoting the corresponding *pathname*), a *stream associated with a file* (denoting the *pathname* used to open the *file*; this may be, but is not required to be, the actual name of the *file*), or a *pathname* (denoting itself). See Section 21.1.1.1.2 (Open and Closed Streams). 



**physical pathname** *n.* a *pathname* that is not a *logical pathname*. 



**place** *n.* 1. a *form* which is suitable for use as a *generalized reference*. 2. the 



conceptual location referred to by such a *place*<sub>1</sub>. 



**plist** [ **p—e list** ] *n.* a *property list*. 



**portable** *adj.* (of *code*) required to produce equivalent results and observable side effects in all *conforming implementations*. 



**potential copy** *n.* (of an *object O*<sub>1</sub> subject to constriants) an *object O*<sub>2</sub> that if the specified constraints are satisfied by *O*<sub>1</sub> without any modification might or might not be *identical* to *O*<sub>1</sub>, or else that must be a *fresh object* that resembles a *copy* of *O*<sub>1</sub> except that it has been modified as necessary to satisfy the constraints. 



**potential number** *n.* A textual notation that might be parsed by the *Lisp reader* in some *conforming implementation* as a *number* but is not required to be parsed as a *number* . No *object* is a *potential number*—either an *object* is a *number* or it is not. See Section 2.3.1.1 (Potential Numbers as Tokens). 







 



 



**pprint dispatch table** *n.* an *object* that can be the *value* of **\*print-pprint-dispatch\*** and hence can control how *objects* are printed when **\*print-pretty\*** is *true*. See Section 22.2.1.4 (Pretty Print Dispatch Tables). 



**predicate** *n.* a *function* that returns a *generalized boolean* as its first value. 



**present** *n.* 1. (of a *feature* in a *Lisp image*) a state of being that is in effect if and only if the *symbol* naming the *feature* is an *element* of the *features list*. 2. (of a *symbol* in a *package*) being accessible in that *package* directly, rather than being inherited from another *package*. 



**pretty print** *v.t.* (an *object*) to invoke the *pretty printer* on the *object*. 



**pretty printer** *n.* the procedure that prints the character representation of an 



*object* onto a *stream* when the *value* of **\*print-pretty\*** is *true*, and that uses layout techniques (*e.g.*, indentation) that tend to highlight the structure of the *object* in a way that makes it easier for human readers to parse visually. See the *variable* **\*print-pprint-dispatch\*** and Section 22.2 (The Lisp Pretty Printer). 



**pretty printing stream** *n.* a *stream* that does pretty printing. Such streams are created by the *function* **pprint-logical-block** as a link between the output stream and the logical block. 



**primary method** *n.* a member of one of two sets of *methods* (the set of *auxiliary methods* is the other) that form an exhaustive partition of the set of *methods* on the *method*’s *generic function*. How these sets are determined is dependent on the *method combination* type; see Section 7.6.2 (Introduction to Methods). 



**primary value** *n.* (of *values* resulting from the *evaluation* of a *form*) the first *value*, if any, or else **nil** if there are no *values*. “The primary value returned by **truncate** is an integer quotient, truncated toward zero.” 



**principal** *adj.* (of a value returned by a Common Lisp *function* that implements a mathematically irrational or transcendental function defined in the complex domain) of possibly many (sometimes an infinite number of) correct values for the mathematical function, being the particular *value* which the corresponding Common Lisp *function* has been defined to return. 



**print name** *n. Trad.* (usually of a *symbol*) a *name*<sub>3</sub>. 



**printer control variable** *n.* a *variable* whose specific purpose is to control some action of the *Lisp printer* ; that is, one of the *variables* in Figure 22–1, or else some *implementation-defined variable* which is defined by the *implementation* to be a *printer control variable*. 







 



 



**printer escaping** *n.* The combined state of the *printer control variables* 



**\*print-escape\*** and **\*print-readably\***. If the value of either **\*print-readably\*** 



or **\*print-escape\*** is *true*, then *printer escaping* is “enabled”; otherwise (if the values of both **\*print-readably\*** and **\*print-escape\*** are *false*), then *printer escaping* is “disabled”. 



**printing** *adj.* (of a *character* ) being a *graphic character* other than *space*. 



**process** *v.t.* (a *form* by the *compiler* ) to perform *minimal compilation*, determining the time of evaluation for a *form*, and possibly *evaluating* that *form* (if required). 



**processor** *n.*, *ANSI* an *implementation*. 



**proclaim** *v.t.* (a *proclamation*) to *establish* that *proclamation*. 



**proclamation** *n.* a *global declaration*. 



**prog tag** *n. Trad.* a *go tag*. 



**program** *n. Trad.* Common Lisp *code*. 



**programmer** *n.* an active entity, typically a human, that writes a *program*, and that might or might not also be a *user* of the *program*. 



**programmer code** *n. code* that is supplied by the programmer; that is, *code* that is not *system code*. 



**proper list** *n.* A *list* terminated by the *empty list*. (The *empty list* is a *proper list*.) See *improper list*. 



**proper name** *n.* (of a *class*) a *symbol* that *names* the *class* whose *name* is that *symbol*. See the *functions* **class-name** and **find-class**. 



**proper sequence** *n.* a *sequence* which is not an *improper list*; that is, a *vector* or a *proper list*. 



**proper subtype** *n.* (of a *type*) a *subtype* of the *type* which is not the *same type* as the *type* (*i.e.*, its *elements* are a “proper subset” of the *type*). 



**property** *n.* (of a *property list*) 1. a conceptual pairing of a *property indicator* and its associated *property value* on a *property list*. 2. a *property value*. 



**property indicator** *n.* (of a *property list*) the *name* part of a *property*, used as a *key* when looking up a *property value* on a *property list*. 







 



 



**property list** *n.* 1. a *list* containing an even number of *elements* that are alternating *names* (sometimes called *indicators* or *keys*) and *values* (sometimes called *properties*). When there is more than one *name* and *value* pair with the *identical name* in 



a *property list*, the first such pair determines the *property*. 2. (of a *symbol*) the component of the *symbol* containing a *property list*. 



**property value** *n.* (of a *property indicator* on a *property list*) the *object* associated with the *property indicator* on the *property list*. 



**purports to conform** *v.* makes a good-faith claim of conformance. This term 



expresses intention to conform, regardless of whether the goal of that intention is realized in practice. For example, language implementations have been known to have bugs, and while an *implementation* of this specification with bugs might not be a *conforming implementation*, it can still *purport to conform*. This is an important distinction in certain specific cases; *e.g.*, see the *variable* **\*features\***. 




---
title: I
sidebar_position: 105
---

**I** 



**I/O customization variable** *n.* one of the *stream variables* in Figure 26–2, or some other (*implementation-defined*) *stream variable* that is defined by the *implementation* to be an *I/O customization variable*. 







 



 



|<p>\*debug-io\* \*error-io\* query-io\* </p><p>\*standard-input\* \*standard-output\* \*trace-output\*</p>|

| :- |





**Figure 26–2. Standardized I/O Customization Variables** 



**identical** *adj.* the *same* under **eq**. 



**identifier** *n.* 1. a *symbol* used to identify or to distinguish *names*. 2. a *string* used the same way. 



**immutable** *adj.* not subject to change, either because no *operator* is provided which is capable of effecting such change or because some constraint exists which prohibits the use of an *operator* that might otherwise be capable of effecting such a change. Except as explicitly indicated otherwise, *implementations* are not required to detect attempts to modify *immutable objects* or *cells*; the consequences of attempting to make such 



modification are undefined. “Numbers are immutable.” 



**implementation** *n.* a system, mechanism, or body of *code* that implements the semantics of Common Lisp. 



**implementation limit** *n.* a restriction imposed by an *implementation*. 



**implementation-defined** *adj. implementation-dependent*, but required by this 



specification to be defined by each *conforming implementation* and to be documented by the corresponding implementor. 



**implementation-dependent** *adj.* describing a behavior or aspect of Common 



Lisp which has been deliberately left unspecified, that might be defined in some 



*conforming implementations* but not in others, and whose details may differ between *implementations*. A *conforming implementation* is encouraged (but not required) to document its treatment of each item in this specification which is marked 



*implementation-dependent*, although in some cases such documentation might simply identify the item as “undefined.” 



**implementation-independent** *adj.* used to identify or emphasize a behavior or aspect of Common Lisp which does not vary between *conforming implementations*. 



**implicit block** *n.* a *block* introduced by a *macro form* rather than by an explicit **block** *form*. 



**implicit compilation** *n. compilation* performed during *evaluation*. 



**implicit progn** *n.* an ordered set of adjacent *forms* appearing in another *form*, and defined by their context in that *form* to be executed as if within a **progn**. 







 



 



**implicit tagbody** *n.* an ordered set of adjacent *forms* and/or *tags* appearing in another *form*, and defined by their context in that *form* to be executed as if within a **tagbody**. 



**import** *v.t.* (a *symbol* into a *package*) to make the *symbol* be *present* in the *package*. **improper list** *n.* a *list* which is not a *proper list*: a *circular list* or a *dotted list*. 



**inaccessible** *adj.* not *accessible*. 



**indefinite extent** *n.* an *extent* whose duration is unlimited. “Most Common Lisp objects have indefinite extent.” 



**indefinite scope** *n. scope* that is unlimited. 



**indicator** *n.* a *property indicator* . 



**indirect instance** *n.* (of a *class C*<sub>1</sub>) an *object* of *class C*<sub>2</sub>, where *C*<sub>2</sub> is a *subclass* of *C*<sub>1</sub>. “An integer is an indirect instance of the class **number**.” 



**inherit** *v.t.* 1. to receive or acquire a quality, trait, or characteristic; to gain access to a feature defined elsewhere. 2. (a *class*) to acquire the structure and behavior defined by a *superclass*. 3. (a *package*) to make *symbols exported* by another *package accessible* by using **use-package**. 



**initial pprint dispatch table** *n.* the *value* of **\*print-pprint-dispatch\*** at the time the *Lisp image* is started. 



**initial readtable** *n.* the *value* of **\*readtable\*** at the time the *Lisp image* is started. 



**initialization argument list** *n.* a *property list* of initialization argument *names* and *values* used in the protocol for initializing and reinitializing *instances* of *classes*. See Section 7.1 (Object Creation and Initialization). 



**initialization form** *n.* a *form* used to supply the initial *value* for a *slot* or *variable*. “The initialization form for a slot in a **defclass** form is introduced by the keyword :initform.” 



**input** *adj.* (of a *stream*) supporting input operations (*i.e.*, being a “data source”). An *input stream* might also be an *output stream*, in which case it is sometimes called a *bidirectional stream*. See the *function* **input-stream-p**. 



**instance** *n.* 1. a *direct instance*. 2. a *generalized instance*. 3. an *indirect instance*. **integer** *n.* an *object* of *type* **integer**, which represents a mathematical integer. 







 



 



**interactive stream** *n.* a *stream* on which it makes sense to perform interactive 



querying. See Section 21.1.1.1.3 (Interactive Streams). 



**intern** *v.t.* 1. (a *string* in a *package*) to look up the *string* in the *package*, returning either a *symbol* with that *name* which was already *accessible* in the *package* or a newly created *internal symbol* of the *package* with that *name*. 2. *Idiom.* generally, to observe a protocol whereby objects which are equivalent or have equivalent names under some predicate defined by the protocol are mapped to a single canonical object. 



**internal symbol** *n.* (of a *package*) a symbol which is *accessible* in the *package*, but which is not an *external symbol* of the *package*. 



**internal time** *n. time*, represented as an *integer* number of *internal time units*. *Absolute internal time* is measured as an offset from an arbitrarily chosen, 



*implementation-dependent* base. See Section 25.1.4.3 (Internal Time). 



**internal time unit** *n.* a unit of time equal to 1*/n* of a second, for some *implementation defined integer* value of *n*. See the *variable* **internal-time-units-per-second**. 



**interned** *adj. Trad.* 1. (of a *symbol*) *accessible*<sub>3</sub> in any *package*. 2. (of a *symbol* in a specific *package*) *present* in that *package*. 



**interpreted function** *n.* a *function* that is not a *compiled function*. (It is possible for there to be a *conforming implementation* which has no *interpreted functions*, but a *conforming program* must not assume that all *functions* are *compiled functions*.) 



**interpreted implementation** *n.* an *implementation* that uses an execution strategy for *interpreted functions* that does not involve a one-time semantic analysis pre-pass, and instead uses “lazy” (and sometimes repetitious) semantic analysis of *forms* as they are encountered during execution. 



**interval designator** *n.* (of *type T*) an ordered pair of *objects* that describe a *subtype* of *T* by delimiting an interval on the real number line. See Section 12.1.6 (Interval Designators). 



**invalid** *n.*, *adj.* 1. *n.* a possible *constituent trait* of a *character* which if present signifies that the *character* cannot ever appear in a *token* except under the control of a *single escape character* . For details, see Section 2.1.4.1 (Constituent Characters). 2. *adj.* (of a *character* ) being a *character* that has *syntax type constituent* in the *current readtable* and that has the *constituent trait invalid* <sub>1</sub>. See Figure 2–8. 



**iteration form** *n.* a *compound form* whose *operator* is named in Figure 26–3, or a *compound form* that has an *implementation-defined operator* and that is defined by the *implementation* to be an *iteration form*. 







 



 



|<p>**do do-external-symbols dotimes do\* do-symbols loop** </p><p>**do-all-symbols dolist**</p>|

| :- |





**Figure 26–3. Standardized Iteration Forms** 



**iteration variable** *n.* a *variable V* , the *binding* for which was created by an *explicit use* of *V* in an *iteration form*. 




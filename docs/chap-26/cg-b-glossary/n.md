**N** 

**name** *n.*, *v.t.* 1. *n.* an *identifier* by which an *object*, a *binding*, or an *exit point* is referred to by association using a *binding*. 2. *v.t.* to give a *name* to. 3. *n.* (of an *object* having a name component) the *object* which is that component. "The string which is a symbol’s name is returned by **symbol-name**." 4. *n.* (of a *pathname*) a. the name component, returned by **pathname-name**. b. the entire namestring, returned by **namestring**. 5. *n.* (of a *character* ) a *string* that names the *character* and that has *length* greater than one. (All *non-graphic characters* are required to have *names* unless they have some *implementation-defined attribute* which is not *null*. Whether or not other *characters* have *names* is *implementation-dependent*.) 

**named constant** *n.* a *variable* that is defined by Common Lisp, by the *implementation*, or by user code (see the *macro* **defconstant**) to always *yield* the same *value* when *evaluated*. "The value of a named constant may not be changed by assignment or by binding." 

**namespace** *n.* 1. *bindings* whose denotations are restricted to a particular kind. "The bindings of names to tags is the tag namespace." 2. any *mapping* whose domain is a set of *names*. "A package defines a namespace." 

**namestring** *n.* a *string* that represents a *filename* using either the *standardized* notation for naming *logical pathnames* described in Section 19.3.1 (Syntax of Logical Pathname Namestrings), or some *implementation-defined* notation for naming a  *physical pathname*. 

**newline** *n.* the *standard character hNewlinei*, notated for the *Lisp reader* as #\Newline. 

**next method** *n.* the next *method* to be invoked with respect to a given *method* for a particular set of arguments or argument *classes*. See Section 7.6.6.1.3 (Applying method combination to the sorted list of applicable methods). 

**nickname** *n.* (of a *package*) one of possibly several *names* that can be used to refer to the *package* but that is not the primary *name* of the *package*. 

**nil** *n.* the *object* that is at once the *symbol* named "NIL" in the COMMON-LISP *package*, the *empty list*, the *boolean* (or *generalized boolean*) representing *false*, and the *name* of the *empty type*. 

**non-atomic** *adj.* being other than an *atom*; *i.e.*, being a *cons*. 

**non-constant variable** *n.* a *variable* that is not a *constant variable*. 

**non-correctable** *adj.* (of an *error* ) not intentionally *correctable*. (Because of the dynamic nature of *restarts*, it is neither possible nor generally useful to completely prohibit an *error* from being *correctable*. This term is used in order to express an intent that no special effort should be made by *code* signaling an *error* to make that *error correctable*; however, there is no actual requirement on *conforming programs* or *conforming implementations* imposed by this term.) 

**non-empty** *adj.* having at least one *element*. 

**non-generic function** *n.* a *function* that is not a *generic function*. 

**non-graphic** *adj.* (of a *character* ) not *graphic*. See Section 13.1.4.1 (Graphic Characters). 

**non-list** *n.*, *adj.* other than a *list*; *i.e.*, a *non-nil atom*. 

**non-local exit** *n.* a transfer of control (and sometimes *values*) to an *exit point* for reasons other than a *normal return*. "The operators **go**, **throw**, and **return-from** cause a non-local exit." 

**non-nil** *n.*, *adj.* not **nil**. Technically, any *object* which is not **nil** can be referred to as *true*, but that would tend to imply a unique view of the *object* as a *generalized boolean*. Referring to such an *object* as *non-nil* avoids this implication. 

**non-null lexical environment** *n.* a *lexical environment* that has additional information not present in the *global environment*, such as one or more *bindings*. 

**non-simple** *adj.* not *simple*. 

**non-terminating** *adj.* (of a *macro character* ) being such that it is treated as a constituent *character* when it appears in the middle of an extended token. See Section 2.2 (Reader Algorithm). 

**non-top-level form** *n.* a *form* that, by virtue of its position as a *subform* of another *form*, is not a *top level form*. See Section 3.2.3.1 (Processing of Top Level Forms). 

**normal return** *n.* the natural transfer of control and *values* which occurs after the complete *execution* of a *form*. 

**normalized** *adj.*, *ANSI*, *IEEE* (of a *float*) conforming to the description of  "normalized" as described by *IEEE Standard for Binary Floating-Point Arithmetic*. See *denormalized*. 

**null** *adj.*, *n.* 1. *adj.* a. (of a *list*) having no *elements*: empty. See *empty list*. b. (of a *string*) having a *length* of zero. (It is common, both within this document and in observed spoken behavior, to refer to an empty string by an apparent definite reference, as in "the *null string*" even though no attempt is made to *intern*<sub>2</sub> null strings. The phrase "a *null string*" is technically more correct, but is generally considered awkward by most Lisp programmers. As such, the phrase "the *null string*" should be treated as an indefinite reference in all cases except for anaphoric references.) c. (of an *implementation-defined attribute* of a *character* ) An *object* to which the value of that *attribute* defaults if no specific value was requested. 2. *n.* an *object* of *type* **null** (the only such *object* being **nil**). 

**null lexical environment** *n.* the *lexical environment* which has no *bindings*. 

**number** *n.* an *object* of *type* **number**. 

**numeric** *adj.* (of a *character* ) being one of the *standard characters* 0 through *9* , or being some other *graphic character* defined by the *implementation* to be *numeric*. 


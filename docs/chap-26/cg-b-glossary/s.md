---
title: S
sidebar_position: 115
---

**S** 



**safe** *adj.* 1. (of *code*) processed in a *lexical environment* where the the highest **safety** level (3) was in effect. See **optimize**. 2. (of a *call*) a *safe call*. 



**safe call** *n.* a *call* in which the *call*, the *function* being *called*, and the point of *functional evaluation* are all *safe*<sub>1</sub> *code*. For more detailed information, see Section 3.5.1.1 (Safe and Unsafe Calls). 



**same** *adj.* 1. (of *objects* under a specified *predicate*) indistinguishable by that 



*predicate*. “The symbol car, the string "car", and the string "CAR" are the same under **string-equal**”. 2. (of *objects* if no predicate is implied by context) indistinguishable by **eql**. Note that **eq** might be capable of distinguishing some *numbers* and *characters* which **eql** cannot distinguish, but the nature of such, if any, is *implementation* 



*dependent*. Since **eq** is used only rarely in this specification, **eql** is the default predicate when none is mentioned explicitly. “The conses returned by two successive calls to **cons** are never the same.” 3. (of *types*) having the same set of *elements*; that is, each *type* is a *subtype* of the others. “The types specified by (integer 0 1), (unsigned-byte 1), and bit are the same.” 



**satisfy the test** *v.* (of an *object* being considered by a *sequence function*) 1. (for a one *argument* test) to be in a state such that the *function* which is the *predicate argument* to the *sequence function* returns *true* when given a single *argument* that is the result 



of calling the *sequence function*’s *key argument* on the *object* being considered. See Section 17.2.2 (Satisfying a One-Argument Test). 2. (for a two *argument* test) to be in a state such that the two-place *predicate* which is the *sequence function*’s *test* 







 



 



*argument* returns *true* when given a first *argument* that is the *object* being considered, and when given a second *argument* that is the result of calling the *sequence function*’s *key argument* on an *element* of the *sequence function*’s *sequence argument* which is being tested for equality; or to be in a state such that the *test-not function* returns *false* given the same *arguments*. See Section 17.2.1 (Satisfying a Two-Argument Test). 



**scope** *n.* the structural or textual region of code in which *references* to an *object*, a *binding*, an *exit point*, a *tag*, or an *environment* (usually by *name*) can occur. 



**script** *n. ISO* one of possibly several sets that form an *exhaustive partition* of the type **character**. See Section 13.1.2.1 (Character Scripts). 



**secondary value** *n.* (of *values* resulting from the *evaluation* of a *form*) the second *value*, if any, or else **nil** if there are fewer than two *values*. “The secondary value returned by **truncate** is a remainder.” 



**section** *n.* a partitioning of output by a *conditional newline* on a *pretty printing stream*. See Section 22.2.1.1 (Dynamic Control of the Arrangement of Output). 



**self-evaluating object** *n.* an *object* that is neither a *symbol* nor a *cons*. If a 



*self-evaluating object* is *evaluated*, it *yields* itself as its only *value*. “Strings are 



self-evaluating objects.” 



**semi-standard** *adj.* (of a language feature) not required to be implemented by any *conforming implementation*, but nevertheless recommended as the canonical approach in situations where an *implementation* does plan to support such a feature. The presence of *semi-standard* aspects in the language is intended to lessen portability problems and reduce the risk of gratuitous divergence among *implementations* that might stand in the way of future standardization. 



**semicolon** *n.* the *standard character* that is called “semicolon” (;). See Figure 2–5. **sequence** *n.* 1. an ordered collection of elements 2. a *vector* or a *list*. 



**sequence function** *n.* one of the *functions* in Figure 17–1, or an *implementation defined function* that operates on one or more *sequences*. and that is defined by the *implementation* to be a *sequence function*. 



**sequential** *adj. Trad.* (of *binding* or *assignment*) done in the style of **setq**, **let\***, or **do\***; that is, interleaving the evaluation of the *forms* that produce *values* with the *assignments* or *bindings* of the *variables* (or *places*). See *parallel*. 



**sequentially** *adv.* in a *sequential* way. 







 



 



**serious condition** *n.* a *condition* of *type* **serious-condition**, which represents a 



*situation* that is generally sufficiently severe that entry into the *debugger* should be expected if the *condition* is *signaled* but not *handled*. 



**session** *n.* the conceptual aggregation of events in a *Lisp image* from the time it is started to the time it is terminated. 



**set** *v.t. Trad.* (any *variable* or a *symbol* that is the *name* of a *dynamic variable*) to *assign* the *variable*. 



**setf expander** *n.* a function used by **setf** to compute the *setf expansion* of a *place*. 



**setf expansion** *n.* a set of five *expressions*<sub>1</sub> that, taken together, describe how to store into a *place* and which *subforms* of the macro call associated with the *place* are evaluated. See Section 5.1.1.2 (Setf Expansions). 



**setf function** *n.* a *function* whose *name* is (setf *symbol*). 



**setf function name** *n.* (of a *symbol S*) the *list* (setf *S*). 



**shadow** *v.t.* 1. to override the meaning of. “That binding of X shadows an outer one.” 2. to hide the presence of. “That **macrolet** of F shadows the outer **flet** of F.” 3. to replace. “That package shadows the symbol cl:car with its own symbol car.” 



**shadowing symbol** *n.* (in a *package*) an *element* of the *package*’s *shadowing symbols list*. 



**shadowing symbols list** *n.* (of a *package*) a *list*, associated with the *package*, of *symbols* that are to be exempted from ‘symbol conflict errors’ detected when packages are *used*. See the *function* **package-shadowing-symbols**. 



**shared slot** *n.* (of a *class*) a *slot accessible* in more than one *instance* of a *class*; specifically, such a *slot* is *accessible* in all *direct instances* of the *class* and in those *indirect instances* whose *class* does not *shadow*<sub>1</sub> the *slot*. 



**sharpsign** *n.* the *standard character* that is variously called “number sign,” “sharp,” or “sharp sign” (#). See Figure 2–5. 



**short float** *n.* an *object* of *type* **short-float**. 



**sign** *n.* one of the *standard characters* “+” or “-”. 



**signal** *v.* to announce, using a standard protocol, that a particular situation, 



represented by a *condition*, has been detected. See Section 9.1 (Condition System Concepts). 







 



 



**signature** *n.* (of a *method*) a description of the *parameters* and *parameter specializers* for the *method* which determines the *method*’s applicability for a given set of 



required *arguments*, and which also describes the *argument* conventions for its other, non-required *arguments*. 



**similar** *adj.* (of two *objects*) defined to be equivalent under the *similarity* relationship. 



**similarity** *n.* a two-place conceptual equivalence predicate, which is independent of the *Lisp image* so that two *objects* in different *Lisp images* can be understood to be equivalent under this predicate. See Section 3.2.4 (Literal Objects in Compiled Files). 



**simple** *adj.* 1. (of an *array*) being of *type* **simple-array**. 2. (of a *character* ) having no *implementation-defined attributes*, or else having *implementation-defined attributes* each of which has the *null* value for that *attribute*. 



**simple array** *n.* an *array* of *type* **simple-array**. 



**simple bit array** *n.* a *bit array* that is a *simple array*; that is, an *object* of *type* (simple-array bit). 



**simple bit vector** *n.* a *bit vector* of *type* **simple-bit-vector**. 



**simple condition** *n.* a *condition* of *type* **simple-condition**. 



**simple general vector** *n.* a *simple vector* . 



**simple string** *n.* a *string* of *type* **simple-string**. 



**simple vector** *n.* a *vector* of *type* **simple-vector**, sometimes called a “*simple general vector* .” Not all *vectors* that are *simple* are *simple vectors*—only those that have *element type* **t**. 



**single escape** *n.*, *adj.* 1. *n.* the *syntax type* of a *character* that indicates that the next *character* is to be treated as an *alphabetic*<sub>2</sub> *character* with its *case* preserved. For details, see Section 2.1.4.6 (Single Escape Character). 2. *adj.* (of a *character* ) having the *single escape syntax type*. 3. *n.* a *single escape*<sub>2</sub> *character* . (In the *standard* 



*readtable*, *slash* is the only *single escape*.) 



**single float** *n.* an *object* of *type* **single-float**. 



**single-quote** *n.* the *standard character* that is variously called “apostrophe,” “acute accent,” “quote,” or “single quote” (’). See Figure 2–5. 



**singleton** *adj.* (of a *sequence*) having only one *element*. “(list ’hello) returns a singleton list.” 







 



 



**situation** *n.* the *evaluation* of a *form* in a specific *environment*. 



**slash** *n.* the *standard character* that is variously called “solidus” or “slash” (/). See Figure 2–5. 



**slot** *n.* a component of an *object* that can store a *value*. 



**slot specifier** *n.* a representation of a *slot* that includes the *name* of the *slot* and zero or more *slot* options. A *slot* option pertains only to a single *slot*. 



**source code** *n. code* representing *objects* suitable for *evaluation* (*e.g.*, *objects* created by **read**, by *macro expansion*, or by *compiler macro expansion*). 



**source file** *n.* a *file* which contains a textual representation of *source code*, that can be edited, *loaded*, or *compiled*. 



**space** *n.* the *standard character ⟨Space⟩*, notated for the *Lisp reader* as #\Space. 



**special form** *n.* a *list*, other than a *macro form*, which is a *form* with special syntax or special *evaluation* rules or both, possibly manipulating the *evaluation environment* or control flow or both. The first element of a *special form* is a *special operator* . 



**special operator** *n.* one of a fixed set of *symbols*, enumerated in Figure 3–2, that may appear in the *car* of a *form* in order to identify the *form* as a *special form*. 



**special variable** *n. Trad.* a *dynamic variable*. 



**specialize** *v.t.* (a *generic function*) to define a *method* for the *generic function*, or in other words, to refine the behavior of the *generic function* by giving it a specific meaning for a particular set of *classes* or *arguments*. 



**specialized** *adj.* 1. (of a *generic function*) having *methods* which *specialize* the *generic function*. 2. (of an *array*) having an *actual array element type* that is a *proper subtype* of the *type* **t**; see Section 15.1.1 (Array Elements). “(make-array 5 :element-type ’bit) makes an array of length five that is specialized for bits.” 



**specialized lambda list** *n.* an *extended lambda list* used in *forms* that *establish method* definitions, such as **defmethod**. See Section 3.4.3 (Specialized Lambda Lists). 



<b>spreadable argument list designator</b> <i>n.</i> a <i>designator</i> for a <i>list</i> of <i>objects</i>; that is, an <i>object</i> that denotes a <i>list</i> and that is a <i>non-null list L</i>1 of length <i>n</i>, whose last element is a <i>list L</i>2 of length <i>m</i> (denoting a list <i>L</i>3 of length <i>m</i> + <i>n −</i> 1 whose <i>elements</i> are <i>L</i>1<i><sub>i</sub></i> for <i>i</i> &lt; <i>n −</i> 1 followed by <i>L</i>2<i><sub>j</sub></i> for <i>j</i> &lt; <i>m</i>). “The list (1 2 (3 4 5)) is a spreadable argument list designator for the list (1 2 3 4 5).” 







 



 



**stack allocate** *v.t. Trad.* to allocate in a non-permanent way, such as on a stack. Stack-allocation is an optimization technique used in some *implementations* for 



allocating certain kinds of *objects* that have *dynamic extent*. Such *objects* are allocated on the stack rather than in the heap so that their storage can be freed as part of unwinding the stack rather than taking up space in the heap until the next garbage collection. What *types* (if any) can have *dynamic extent* can vary from *implementation* to *implementation*. No *implementation* is ever required to perform stack-allocation. 



**stack-allocated** *adj. Trad.* having been *stack allocated*. 



**standard character** *n.* a *character* of *type* **standard-char**, which is one of a fixed set of 96 such *characters* required to be present in all *conforming implementations*. See Section 2.1.3 (Standard Characters). 



**standard class** *n.* a *class* that is a *generalized instance* of *class* **standard-class**. 



**standard generic function** a *function* of *type* **standard-generic-function**. 



**standard input** *n.* the *input stream* which is the *value* of the *dynamic variable* 



**\*standard-input\***. 



**standard method combination** *n.* the *method combination* named **standard**. 



**standard object** *n.* an *object* that is a *generalized instance* of *class* **standard-object**. 



**standard output** *n.* the *output stream* which is the *value* of the *dynamic variable* **\*standard-output\***. 



**standard pprint dispatch table** *n.* A *pprint dispatch table* that is *different* from the *initial pprint dispatch table*, that implements *pretty printing* as described in this specification, and that, unlike other *pprint dispatch tables*, must never be modified by any program. (Although the definite reference “the *standard pprint dispatch table*” is generally used within this document, it is actually *implementation-dependent* whether a single *object* fills the role of the *standard pprint dispatch table*, or whether there might be multiple such objects, any one of which could be used on any given occasion where “the *standard pprint dispatch table*” is called for. As such, this phrase should be seen as an indefinite reference in all cases except for anaphoric references.) 



**standard readtable** *n.* A *readtable* that is *different* from the *initial readtable*, that implements the *expression* syntax defined in this specification, and that, unlike 



other *readtables*, must never be modified by any program. (Although the definite reference “the *standard readtable*” is generally used within this document, it is 



actually *implementation-dependent* whether a single *object* fills the role of the *standard readtable*, or whether there might be multiple such objects, any one of which could be used on any given occasion where “the *standard readtable*” is called for. As such, 







 



 



this phrase should be seen as an indefinite reference in all cases except for anaphoric references.) 



**standard syntax** *n.* the syntax represented by the *standard readtable* and used as a reference syntax throughout this document. See Section 2.1 (Character Syntax). 



**standardized** *adj.* (of a *name*, *object*, or definition) having been defined by Common Lisp. “All standardized variables that are required to hold bidirectional streams have “-io\*” in their name.” 



**startup environment** *n.* the *global environment* of the running *Lisp image* from which the *compiler* was invoked. 



**step** *v.t.*, *n.* 1. *v.t.* (an iteration *variable*) to *assign* the *variable* a new *value* at the end of an iteration, in preparation for a new iteration. 2. *n.* the *code* that identifies how the next value in an iteration is to be computed. 3. *v.t.* (*code*) to specially execute the *code*, pausing at intervals to allow user confirmation or intervention, usually for debugging. 



**stream** *n.* an *object* that can be used with an input or output function to identify an appropriate source or sink of *characters* or *bytes* for that operation. 



**stream associated with a file** *n.* a *file stream*, or a *synonym stream* 



the *target* of which is a *stream associated with a file*. Such a *stream* 



cannot be created with **make-two-way-stream**, **make-echo-stream**, 



**make-broadcast-stream**, **make-concatenated-stream**, **make-string-input-stream**, or **make-string-output-stream**. 



**stream designator** *n.* a *designator* for a *stream*; that is, an *object* that denotes a *stream* and that is one of: **t** (denoting the *value* of **\*terminal-io\***), **nil** (denoting the *value* of **\*standard-input\*** for *input stream designators* or denoting the *value* of **\*standard-output\*** for *output stream designators*), or a *stream* (denoting itself). 



**stream element type** *n.* (of a *stream*) the *type* of data for which the *stream* is specialized. 



**stream variable** *n.* a *variable* whose *value* must be a *stream*. 



**stream variable designator** *n.* a *designator* for a *stream variable*; that is, a *symbol* that denotes a *stream variable* and that is one of: **t** (denoting **\*terminal-io\***), 



**nil** (denoting **\*standard-input\*** for *input stream variable designators* or denoting **\*standard-output\*** for *output stream variable designators*), or some other *symbol* (denoting itself). 



**string** *n.* a specialized *vector* that is of *type* **string**, and whose elements are of *type* **character** or a *subtype* of *type* **character**. 







 



 



**string designator** *n.* a *designator* for a *string*; that is, an *object* that denotes a *string* and that is one of: a *character* (denoting a *singleton string* that has the *character* as its only *element*), a *symbol* (denoting the *string* that is its *name*), or a *string* (denoting itself). The intent is that this term be consistent with the behavior of **string**; *implementations* that extend **string** must extend the meaning of this term in a compatible way. 



**string equal** *adj.* the *same* under **string-equal**. 



**string stream** *n.* a *stream* of *type* **string-stream**. 



**structure** *n.* an *object* of *type* **structure-object**. 



**structure class** *n.* a *class* that is a *generalized instance* of *class* **structure-class**. 



**structure name** *n.* a *name* defined with **defstruct**. Usually, such a *type* is also a *structure class*, but there may be *implementation-dependent* situations in which this is not so, if the :type option to **defstruct** is used. 



**style warning** *n.* a *condition* of *type* **style-warning**. 



**subclass** *n.* a *class* that *inherits* from another *class*, called a *superclass*. (No *class* is a *subclass* of itself.) 



**subexpression** *n.* (of an *expression*) an *expression* that is contained within the 



*expression*. (In fact, the state of being a *subexpression* is not an attribute of the *subexpression*, but really an attribute of the containing *expression* since the *same object* can at once be a *subexpression* in one context, and not in another.) 



**subform** *n.* (of a *form*) an *expression* that is a *subexpression* of the *form*, and which by virtue of its position in that *form* is also a *form*. “(f x) and x, but not exit, are subforms of (return-from exit (f x)).” 



**subrepertoire** *n.* a subset of a *repertoire*. 



**subtype** *n.* a *type* whose membership is the same as or a proper subset of the 



membership of another *type*, called a *supertype*. (Every *type* is a *subtype* of itself.) 



**superclass** *n.* a *class* from which another *class* (called a *subclass*) *inherits*. (No *class* is a *superclass* of itself.) See *subclass*. 



**supertype** *n.* a *type* whose membership is the same as or a proper superset of the membership of another *type*, called a *subtype*. (Every *type* is a *supertype* of itself.) See *subtype*. 







 



 



**supplied-p parameter** *n.* a *parameter* which recieves its *generalized boolean* value implicitly due to the presence or absence of an *argument* corresponding to another *parameter* (such as an *optional parameter* or a *rest parameter* ). See Section 3.4.1 (Ordinary Lambda Lists). 



**symbol** *n.* an *object* of *type* **symbol**. 



**symbol macro** *n.* a *symbol* that stands for another *form*. See the *macro* 



**symbol-macrolet**. 



**synonym stream** *n.* 1. a *stream* of *type* **synonym-stream**, which is consequently a *stream* that is an alias for another *stream*, which is the *value* of a *dynamic variable* whose *name* is the *synonym stream symbol* of the *synonym stream*. See the *function* **make-synonym-stream**. 2. (to a *stream*) a *synonym stream* which has the *stream* as 



the *value* of its *synonym stream symbol*. 3. (to a *symbol*) a *synonym stream* which has the *symbol* as its *synonym stream symbol*. 



**synonym stream symbol** *n.* (of a *synonym stream*) the *symbol* which names the *dynamic variable* which has as its *value* another *stream* for which the *synonym stream* is an alias. 



**syntax type** *n.* (of a *character* ) one of several classifications, enumerated in Figure 2– 6, that are used for dispatch during parsing by the *Lisp reader* . See Section 2.1.4 (Character Syntax Types). 



**system class** *n.* a *class* that may be of *type* **built-in-class** in a *conforming* 



*implementation* and hence cannot be inherited by *classes* defined by *conforming* 



*programs*. 



**system code** *n. code* supplied by the *implementation* to implement this specification (*e.g.*, the definition of **mapcar**) or generated automatically in support of this 



specification (*e.g.*, during method combination); that is, *code* that is not *programmer code*. 




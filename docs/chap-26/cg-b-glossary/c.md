---
title: C
sidebar_position: 99
---

**C** 



**cadr** [ **ka d*** **r** ], *n.* (of an *object*) the *car* of the *cdr* of that *object*. 



**call** *v.t.*, *n.* 1. *v.t.* (a *function* with *arguments*) to cause the *code* represented by that *function* to be *executed* in an *environment* where *bindings* for the *values* of its *parameters* have been *established* based on the *arguments*. “Calling the function **+** with the arguments 5 and 1 yields a value of 6.” 2. *n.* a *situation* in which a *function* is called. 



**captured initialization form** *n.* an *initialization form* along with the *lexical* 



*environment* in which the *form* that defined the *initialization form* was *evaluated*. “Each newly added shared slot is set to the result of evaluating the captured 



initialization form for the slot that was specified in the **defclass** form for the new class.” 







 



 



**car** *n.* 1. a. (of a *cons*) the component of a *cons* corresponding to the first *argument* to **cons**; the other component is the *cdr* . “The function **rplaca** modifies the car of a cons.” b. (of a *list*) the first *element* of the *list*, or **nil** if the *list* is the *empty list*. 2. the *object* that is held in the *car* <sub>1</sub>. “The function **car** returns the car of a cons.” 



**case** *n.* (of a *character* ) the property of being either *uppercase* or *lowercase*. Not all *characters* have *case*. “The characters #\A and #\a have case, but the character #\$ has no case.” See Section 13.1.4.3 (Characters With Case) and the *function* **both-case-p**. 



**case sensitivity mode** *n.* one of the *symbols* :upcase, :downcase, :preserve, or 



:invert. 



**catch** *n.* an *exit point* which is *established* by a **catch** *form* within the *dynamic scope* of its body, which is named by a *catch tag*, and to which control and *values* may be *thrown*. 



**catch tag** *n.* an *object* which names an *active catch*. (If more than one *catch* is active with the same *catch tag*, it is only possible to *throw* to the innermost such *catch* because the outer one is *shadowed* <sub>2</sub>.) 



**cddr** [ **k\_ud***  **d*** **r** ] or [ **k***  **d\_ud*** **r** ], *n.* (of an *object*) the *cdr* of the *cdr* of that *object*. 



**cdr** [ **k\_u d*** **r** ], *n.* 1. a. (of a *cons*) the component of a *cons* corresponding to the second *argument* to **cons**; the other component is the *car* . “The function **rplacd** modifies the cdr of a cons.” b. (of a *list L*<sub>1</sub>) either the *list L*<sub>2</sub> that contains the *elements* of *L*<sub>1</sub> that follow after the first, or else **nil** if *L*<sub>1</sub> is the *empty list*. 2. the *object* that is held in the *cdr* <sub>1</sub>. “The function **cdr** returns the cdr of a cons.” 



**cell** *n. Trad.* (of an *object*) a conceptual *slot* of that *object*. The *dynamic variable* and global *function bindings* of a *symbol* are sometimes referred to as its *value cell* and *function cell*, respectively. 



**character** *n.*, *adj.* 1. *n.* an *object* of *type* **character**; that is, an *object* that represents a unitary token in an aggregate quantity of text; see Section 13.1 (Character Concepts). 2. *adj.* a. (of a *stream*) having an *element type* that is a *subtype* of *type* **character**. The most fundamental operation on a *character input stream* is **read-char** and on a *character output stream* is **write-char**. See *binary*. b. (of a *file*) having been created by opening a *character stream*. (It is *implementation-dependent* whether this is an inspectable aspect of the *file*, or whether any given *binary file* can be treated as a *character file*.) 



**character code** *n.* 1. one of possibly several *attributes* of a *character* . 2. a 



non-negative *integer* less than the *value* of **char-code-limit** that is suitable for use as a *character code*<sub>1</sub>. 







 



 



**character designator** *n.* a *designator* for a *character* ; that is, an *object* that denotes a *character* and that is one of: a *designator* for a *string* of *length* one (denoting the *character* that is its only *element*), or a *character* (denoting itself). 



**circular** *adj.* 1. (of a *list*) a *circular list*. 2. (of an arbitrary *object*) having a 



*component*, *element*, *constituent*<sub>2</sub>, or *subexpression* (as appropriate to the context) that is the *object* itself. 



**circular list** *n.* a chain of *conses* that has no termination because some *cons* in the chain is the *cdr* of a later *cons*. 



**class** *n.* 1. an *object* that uniquely determines the structure and behavior of a set of other *objects* called its *direct instances*, that contributes structure and behavior to a set of other *objects* called its *indirect instances*, and that acts as a *type specifier* for a set of objects called its *generalized instances*. “The class **integer** is a subclass of the 



class **number**.” (Note that the phrase “the *class* foo” is often substituted for the more precise phrase “the *class* named foo”—in both cases, a *class object* (not a *symbol*) is denoted.) 2. (of an *object*) the uniquely determined *class* of which the *object* is a *direct instance*. See the *function* **class-of**. “The class of the object returned by **gensym** is **symbol**.” (Note that with this usage a phrase such as “its *class* is foo” is often substituted for the more precise phrase “its *class* is the *class* named foo”—in both cases, a *class object* (not a *symbol*) is denoted.) 



**class designator** *n.* a *designator* for a *class*; that is, an *object* that denotes a *class* and that is one of: a *symbol* (denoting the *class* named by that *symbol*; see the *function* **find-class**) or a *class* (denoting itself). 



**class precedence list** *n.* a unique total ordering on a *class* and its *superclasses* that is consistent with the *local precedence orders* for the *class* and its *superclasses*. For detailed information, see Section 4.3.5 (Determining the Class Precedence List). 



**close** *v.t.* (a *stream*) to terminate usage of the *stream* as a source or sink of data, permitting the *implementation* to reclaim its internal data structures, and to free any external resources which might have been locked by the *stream* when it was opened. 



**closed** *adj.* (of a *stream*) having been *closed* (see close). Some (but not all) operations that are valid on *open streams* are not valid on *closed streams*. See Section 21.1.1.1.2 (Open and Closed Streams). 



**closure** *n.* a *lexical closure*. 



**coalesce** *v.t.* (*literal objects* that are *similar* ) to consolidate the identity of those *objects*, such that they become the *same object*. See Section 3.2.1 (Compiler 



Terminology). 







 



 



**code** *n.* 1. *Trad.* any representation of actions to be performed, whether conceptual or as an actual *object*, such as *forms*, *lambda expressions*, *objects* of *type function*, text in a *source file*, or instruction sequences in a *compiled file*. This is a generic term; the specific nature of the representation depends on its context. 2. (of a *character* ) a *character code*. 



**coerce** *v.t.* (an *object* to a *type*) to produce an *object* from the given *object*, without modifying that *object*, by following some set of coercion rules that must be specifically stated for any context in which this term is used. The resulting *object* is necessarily of the indicated *type*, except when that type is a *subtype* of *type* **complex**; in that case, if a *complex rational* with an imaginary part of zero would result, the result is a *rational* 



rather than a *complex*—see Section 12.1.5.3 (Rule of Canonical Representation for Complex Rationals). 



**colon** *n.* the *standard character* that is called “colon” (:). See Figure 2–5. 



**comma** *n.* the *standard character* that is called “comma” (,). See Figure 2–5. 



**compilation** *n.* the process of *compiling code* by the *compiler* . 



**compilation environment** *n.* 1. An *environment* that represents information known by the *compiler* about a *form* that is being *compiled*. See Section 3.2.1 (Compiler Terminology). 2. An *object* that represents the *compilation environment* <sub>1</sub> and that is used as a second argument to a *macro function* (which supplies a *value* for any **&amp;environment** *parameter* in the *macro function*’s definition). 



**compilation unit** *n.* an interval during which a single unit of compilation is occurring. See the *macro* **with-compilation-unit**. 



**compile** *v.t.* 1. (*code*) to perform semantic preprocessing of the *code*, usually 



optimizing one or more qualities of the code, such as run-time speed of *execution* or run-time storage usage. The minimum semantic requirements of compilation are that it must remove all macro calls and arrange for all *load time values* to be resolved prior to run time. 2. (a *function*) to produce a new *object* of *type* **compiled-function** which represents the result of *compiling* the *code* represented by the *function*. See the *function* **compile**. 3. (a *source file*) to produce a *compiled file* from a *source file*. See the *function* **compile-file**. 



**compile time** *n.* the duration of time that the *compiler* is processing *source code*. **compile-time definition** *n.* a definition in the *compilation environment*. 



**compiled code** *n.* 1. *compiled functions*. 2. *code* that represents *compiled functions*, such as the contents of a *compiled file*. 







 



 



**compiled file** *n.* a *file* which represents the results of *compiling* the *forms* which appeared in a corresponding *source file*, and which can be *loaded*. See the *function* **compile-file**. 



**compiled function** *n.* an *object* of *type* **compiled-function**, which is a *function* that has been *compiled*, which contains no references to *macros* that must be expanded at run time, and which contains no unresolved references to *load time values*. 



**compiler** *n.* a facility that is part of Lisp and that translates *code* into an 



*implementation-dependent* form that might be represented or *executed* efficiently. The functions **compile** and **compile-file** permit programs to invoke the *compiler* . 



**compiler macro** *n.* an auxiliary macro definition for a globally defined *function* or *macro* which might or might not be called by any given *conforming implementation* and which must preserve the semantics of the globally defined *function* or *macro* but 



which might perform some additional optimizations. (Unlike a *macro*, a *compiler macro* does not extend the syntax of Common Lisp; rather, it provides an alternate implementation strategy for some existing syntax or functionality.) 



**compiler macro expansion** *n.* 1. the process of translating a *form* into another *form* by a *compiler macro*. 2. the *form* resulting from this process. 



**compiler macro form** *n.* a *function form* or *macro form* whose *operator* has a definition as a *compiler macro*, or a **funcall** *form* whose first *argument* is a **function** *form* whose *argument* is the *name* of a *function* that has a definition as a *compiler macro*. 



**compiler macro function** *n.* a *function* of two arguments, a *form* and an 



*environment*, that implements *compiler macro expansion* by producing either a *form* to be used in place of the original argument *form* or else **nil**, indicating that the original *form* should not be replaced. See Section 3.2.2.1 (Compiler Macros). 



**complex** *n.* an *object* of *type* **complex**. 



**complex float** *n.* an *object* of *type* **complex** which has a *complex part type* that is a *subtype* of **float**. A *complex float* is a *complex* , but it is not a *float*. 



**complex part type** *n.* (of a *complex* ) 1. the *type* which is used to represent both the real part and the imaginary part of the *complex* . 2. the *actual complex part type* of the *complex* . 3. the *expressed complex part type* of the *complex* . 



**complex rational** *n.* an *object* of *type* **complex** which has a *complex part type* that is a *subtype* of **rational**. A *complex rational* is a *complex* , but it is not a *rational*. No *complex rational* has an imaginary part of zero because such a number is always represented by Common Lisp as an *object* of *type* **rational**; see Section 12.1.5.3 (Rule of Canonical Representation for Complex Rationals). 







 



 



**complex single float** *n.* an *object* of *type* **complex** which has a *complex part type* that is a *subtype* of **single-float**. A *complex single float* is a *complex* , but it is not a *single float*. 



**composite stream** *n.* a *stream* that is composed of one or more other *streams*. “**make-synonym-stream** creates a composite stream.” 



**compound form** *n.* a *non-empty list* which is a *form*: a *special form*, a *lambda form*, a *macro form*, or a *function form*. 



**compound type specifier** *n.* a *type specifier* that is a *cons*; *i.e.*, a *type specifier* that is not an *atomic type specifier* . “(vector single-float) is a compound type specifier.” 



**concatenated stream** *n.* an *input stream* of *type* **concatenated-stream**. 



**condition** *n.* 1. an *object* which represents a *situation*—usually, but not necessarily, during *signaling*. 2. an *object* of *type* **condition**. 



**condition designator** *n.* one or more *objects* that, taken together, denote either an existing *condition object* or a *condition object* to be implicitly created. For details, see Section 9.1.2.1 (Condition Designators). 



**condition handler** *n.* a *function* that might be invoked by the act of *signaling*, that receives the *condition* being signaled as its only argument, and that is permitted to *handle* the *condition* or to *decline*. See Section 9.1.4.1 (Signaling). 



**condition reporter** *n.* a *function* that describes how a *condition* is to be printed when the *Lisp printer* is invoked while **\*print-escape\*** is *false*. See Section 9.1.3 (Printing Conditions). 



**conditional newline** *n.* a point in output where a *newline* might be inserted at the discretion of the *pretty printer* . There are four kinds of *conditional newlines*, called “linear-style,” “fill-style,” “miser-style,” and “mandatory-style.” See the *function* **pprint-newline** and Section 22.2.1.1 (Dynamic Control of the Arrangement of Output). 



**conformance** *n.* a state achieved by proper and complete adherence to the 



requirements of this specification. See Section 1.5 (Conformance). 



**conforming code** *n. code* that is all of part of a *conforming program*. 



**conforming implementation** *n.* an *implementation*, used to emphasize complete and correct adherance to all conformance criteria. A *conforming implementation* is capable of accepting a *conforming program* as input, preparing that *program* for *execution*, and executing the prepared *program* in accordance with this specification. An *implementation* which has been extended may still be a *conforming implementation* 







 



 



provided that no extension interferes with the correct function of any *conforming program*. 



**conforming processor** *n. ANSI* a *conforming implementation*. 



**conforming program** *n.* a *program*, used to emphasize the fact that the *program* depends for its correctness only upon documented aspects of Common Lisp, and can therefore be expected to run correctly in any *conforming implementation*. 



**congruent** *n.* conforming to the rules of *lambda list* congruency, as detailed in Section 7.6.4 (Congruent Lambda-lists for all Methods of a Generic Function). 



**cons** *n.v.* 1. *n.* a compound data *object* having two components called the *car* and the *cdr* . 2. *v.* to create such an *object*. 3. *v. Idiom.* to create any *object*, or to allocate storage. 



**constant** *n.* 1. a *constant form*. 2. a *constant variable*. 3. a *constant object*. 4. a *self-evaluating object*. 



**constant form** *n.* any *form* for which *evaluation* always *yields* the same *value*, that neither affects nor is affected by the *environment* in which it is *evaluated* (except that it is permitted to refer to the names of *constant variables* defined in the *environment*), and that neither affects nor is affected by the state of any *object* except those *objects* that are *otherwise inaccessible parts* of *objects* created by the *form* itself. “A **car** form in which the argument is a **quote** form is a constant form.” 



**constant object** *n.* an *object* that is constrained (*e.g.*, by its context in a *program* or by the source from which it was obtained) to be *immutable*. “A literal object that has been processed by **compile-file** is a constant object.” 



**constant variable** *n.* a *variable*, the *value* of which can never change; that 



is, a *keyword* <sub>1</sub> or a *named constant*. “The symbols **t**, **nil**, :direction, and 



**most-positive-fixnum** are constant variables.” 



<b>constituent</b> <i>n.</i>, <i>adj.</i> 1. a. <i>n.</i> the <i>syntax type</i> of a <i>character</i> that is part of a <i>token</i>. For details, see Section 2.1.4.1 (Constituent Characters). b. <i>adj.</i> (of a <i>character</i> ) having the <i>constituent</i><sub>1<i>a</i></sub> syntax type<sub>2</sub>. c. <i>n.</i> a <i>constituent</i><sub>1<i>b</i></sub> character . 2. <i>n.</i> (of a <i>composite stream</i>) one of possibly several <i>objects</i> that collectively comprise the source or sink of that <i>stream</i>. 



**constituent trait** *n.* (of a *character* ) one of several classifications of a *constituent character* in a *readtable*. See Section 2.1.4.1 (Constituent Characters). 



**constructed stream** *n.* a *stream* whose source or sink is a Lisp *object*. Note that since a *stream* is another Lisp *object*, *composite streams* are considered *constructed streams*. “A string stream is a constructed stream.” 







 



 



**contagion** *n.* a process whereby operations on *objects* of differing *types* (*e.g.*, 



arithmetic on mixed *types* of *numbers*) produce a result whose *type* is controlled by the dominance of one *argument*’s *type* over the *types* of the other *arguments*. See Section 12.1.1.2 (Contagion in Numeric Operations). 



**continuable** *n.* (of an *error* ) an *error* that is *correctable* by the continue restart. 



**control form** *n.* 1. a *form* that establishes one or more places to which control can be transferred. 2. a *form* that transfers control. 



<b>copy</b> <i>n.</i> 1. (of a <i>cons C</i>) a <i>fresh cons</i> with the <i>same car</i> and <i>cdr</i> as <i>C</i>. 2. (of a <i>list L</i>) a <i>fresh list</i> with the <i>same elements</i> as <i>L</i>. (Only the <i>list structure</i> is <i>fresh</i>; the <i>elements</i> are the <i>same</i>.) See the <i>function</i> <b>copy-list</b>. 3. (of an <i>association list A</i> with <i>elements A<sub>i</sub></i>) a <i>fresh list B</i> with <i>elements B<sub>i</sub></i>, each of which is <b>nil</b> if <i>A<sub>i</sub></i>is <b>nil</b>, or else a <i>copy</i> of the <i>cons A<sub>i</sub></i>. See the <i>function</i> <b>copy-alist</b>. 4. (of a <i>tree T</i>) a <i>fresh tree</i> with the <i>same</i> 



*leaves* as *T*. See the *function* **copy-tree**. 5. (of a *random state R*) a *fresh random state* that, if used as an argument to to the *function* **random** would produce the same series of “random” values as *R* would produce. 6. (of a *structure S*) a *fresh structure* that has the same *type* as *S*, and that has slot values, each of which is the *same* as the corresponding slot value of *S*. (Note that since the difference between a *cons*, a *list*, and a *tree* is a matter of “view” or “intention,” there can be no general-purpose *function* which, based solely on the *type* of an *object*, can determine which of these distinct meanings is intended. The distinction rests solely on the basis of the text description within this document. For example, phrases like “a *copy* of the given *list*” or “copy of the *list x*” imply the second definition.) 



**correctable** *adj.* (of an *error* ) 1. (by a *restart* other than **abort** that has been 



associated with the *error* ) capable of being corrected by invoking that *restart*. “The function **cerror** signals an error that is correctable by the **continue** *restart*.” (Note that correctability is not a property of an *error object*, but rather a property of the *dynamic environment* that is in effect when the *error* is *signaled*. Specifically, the *restart* is “associated with” the *error condition object*. See Section 9.1.4.2.4 (Associating a Restart with a Condition).) 2. (when no specific *restart* is mentioned) *correctable*<sub>1</sub> by at least one *restart*. “**import** signals a correctable error of *type* **package-error** if any of the imported symbols has the same name as some distinct symbol already accessible in the package.” 



**current input base** *n.* (in a *dynamic environment*) the *radix* that is the *value* of **\*read-base\*** in that *environment*, and that is the default *radix* employed by the *Lisp reader* and its related *functions*. 



**current logical block** *n.* the context of the innermost lexically enclosing use of **pprint-logical-block**. 



**current output base** *n.* (in a *dynamic environment*) the *radix* that is the *value* of 



 



 



**\*print-base\*** in that *environment*, and that is the default *radix* employed by the *Lisp printer* and its related *functions*. 



**current package** *n.* (in a *dynamic environment*) the *package* that is the *value* of **\*package\*** in that *environment*, and that is the default *package* employed by the *Lisp reader* and *Lisp printer* , and their related *functions*. 



**current pprint dispatch table** *n.* (in a *dynamic environment*) the *pprint dispatch table* that is the *value* of **\*print-pprint-dispatch\*** in that *environment*, and that is the default *pprint dispatch table* employed by the *pretty printer* . 



**current random state** *n.* (in a *dynamic environment*) the *random state* that is the *value* of **\*random-state\*** in that *environment*, and that is the default *random state* employed by **random**. 



**current readtable** *n.* (in a *dynamic environment*) the *readtable* that is the *value* of **\*readtable\*** in that *environment*, and that affects the way in which *expressions*<sub>2</sub> are parsed into *objects* by the *Lisp reader* . 




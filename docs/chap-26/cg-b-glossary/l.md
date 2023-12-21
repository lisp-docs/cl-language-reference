---
title: L
sidebar_position: 108
---

**L** 



**lambda combination** *n. Trad.* a *lambda form*. 



**lambda expression** *n.* a *list* which can be used in place of a *function name* in certain contexts to denote a *function* by directly describing its behavior rather than indirectly by referring to the name of an *established function*; its name derives from the fact that its first element is the *symbol* lambda. See **lambda**. 



**lambda form** *n.* a *form* that is a *list* and that has a first element which is a *lambda expression* representing a *function* to be called on *arguments* which are the result of *evaluating* subsequent elements of the *lambda form*. 



**lambda list** *n.* a *list* that specifies a set of *parameters* (sometimes called *lambda variables*) and a protocol for receiving *values* for those *parameters*; that is, an *ordinary lambda list*, an *extended lambda list*, or a *modified lambda list*. 







 



 



**lambda list keyword** *n.* a *symbol* whose *name* begins with *ampersand* and that is specially recognized in a *lambda list*. Note that no *standardized lambda list keyword* is in the KEYWORD *package*. 



**lambda variable** *n.* a *formal parameter* , used to emphasize the *variable*’s relation to the *lambda list* that *established* it. 



**leaf** *n.* 1. an *atom* in a *tree*<sub>1</sub>. 2. a terminal node of a *tree*<sub>2</sub>. 



**leap seconds** *n.* additional one-second intervals of time that are occasionally inserted into the true calendar by official timekeepers as a correction similar to “leap years.” All Common Lisp *time* representations ignore *leap seconds*; every day is assumed to be exactly 86400 seconds long. 



**left-parenthesis** *n.* the *standard character* “(”, that is variously called “left 



parenthesis” or “open parenthesis” See Figure 2–5. 



**length** *n.* (of a *sequence*) the number of *elements* in the *sequence*. (Note that if the *sequence* is a *vector* with a *fill pointer* , its *length* is the same as the *fill pointer* even though the total allocated size of the *vector* might be larger.) 



**lexical binding** *n.* a *binding* in a *lexical environment*. 



**lexical closure** *n.* a *function* that, when invoked on *arguments*, executes the body of a *lambda expression* in the *lexical environment* that was captured at the time of the creation of the *lexical closure*, augmented by *bindings* of the *function*’s *parameters* to the corresponding *arguments*. 



**lexical environment** *n.* that part of the *environment* that contains *bindings* whose names have *lexical scope*. A *lexical environment* contains, among other things: 



ordinary *bindings* of *variable names* to *values*, lexically *established bindings* of *function names* to *functions*, *macros*, *symbol macros*, *blocks*, *tags*, and *local declarations* (see **declare**). 



**lexical scope** *n. scope* that is limited to a spatial or textual region within the 



establishing *form*. “The names of parameters to a function normally are lexically scoped.” 



**lexical variable** *n.* a *variable* the *binding* for which is in the *lexical environment*. 



**Lisp image** *n.* a running instantiation of a Common Lisp *implementation*. A *Lisp image* is characterized by a single address space in which any *object* can directly refer to any another in conformance with this specification, and by a single, common, *global environment*. (External operating systems sometimes call this a “core image,” “fork,” “incarnation,” “job,” or “process.” Note however, that the issue of a “process” in such 







 



 



an operating system is technically orthogonal to the issue of a *Lisp image* being defined here. Depending on the operating system, a single “process” might have multiple *Lisp images*, and multiple “processes” might reside in a single *Lisp image*. Hence, it is the idea of a fully shared address space for direct reference among all *objects* which is the defining characteristic. Note, too, that two “processes” which have a communication 



area that permits the sharing of some but not all *objects* are considered to be distinct *Lisp images*.) 



**Lisp printer** *n. Trad.* the procedure that prints the character representation of an *object* onto a *stream*. (This procedure is implemented by the *function* **write**.) 



**Lisp read-eval-print loop** *n. Trad.* an endless loop that *reads*<sub>2</sub> a *form*, *evaluates* it, and prints (*i.e.*, *writes*<sub>2</sub>) the results. In many *implementations*, the default mode of interaction with Common Lisp during program development is through such a loop. 



**Lisp reader** *n. Trad.* the procedure that parses character representations of *objects* from a *stream*, producing *objects*. (This procedure is implemented by the *function* **read**.) 



**list** *n.* 1. a chain of *conses* in which the *car* of each *cons* is an *element* of the *list*, and the *cdr* of each *cons* is either the next link in the chain or a terminating *atom*. See also *proper list*, *dotted list*, or *circular list*. 2. the *type* that is the union of **null** and **cons**. 



**list designator** *n.* a *designator* for a *list* of *objects*; that is, an *object* that denotes a *list* and that is one of: a *non-nil atom* (denoting a *singleton list* whose *element* is that *non-nil atom*) or a *proper list* (denoting itself). 



<b>list structure</b> <i>n.</i> (of a <i>list</i>) the set of <i>conses</i> that make up the <i>list</i>. Note that while the <i>car</i> <sub>1<i>b</i></sub> component of each such <i>cons</i> is part of the <i>list structure</i>, the <i>objects</i> that are <i>elements</i> of the <i>list</i> (<i>i.e.</i>, the <i>objects</i> that are the <i>cars</i><sub>2</sub> of each <i>cons</i> in the <i>list</i>) are not themselves part of its <i>list structure</i>, even if they are <i>conses</i>, except in the (<i>circular</i> <sub>2</sub>) case where the <i>list</i> actually contains one of its <i>tails</i> as an <i>element</i>. (The <i>list structure</i> of a <i>list</i> is sometimes redundantly referred to as its “top-level list structure” in order to emphasize that any <i>conses</i> that are <i>elements</i> of the <i>list</i> are not involved.) 



**literal** *adj.* (of an *object*) referenced directly in a program rather than being computed by the program; that is, appearing as data in a **quote** *form*, or, if the *object* is a *self evaluating object*, appearing as unquoted data. “In the form (cons "one" ’("two")), the expressions "one", ("two"), and "two" are literal objects.” 



**load** *v.t.* (a *file*) to cause the *code* contained in the *file* to be *executed*. See the *function* **load**. 



**load time** *n.* the duration of time that the loader is *loading compiled code*. 







 



 



**load time value** *n.* an *object* referred to in *code* by a **load-time-value** *form*. The *value* of such a *form* is some specific *object* which can only be computed in the 



run-time *environment*. In the case of *file compilation*, the *value* is computed once as part of the process of *loading* the *compiled file*, and not again. See the *special operator* **load-time-value**. 



**loader** *n.* a facility that is part of Lisp and that *loads* a *file*. See the *function* **load**. 



**local declaration** *n.* an *expression* which may appear only in specially designated positions of certain *forms*, and which provides information about the code contained within the containing *form*; that is, a **declare** *expression*. 



**local precedence order** *n.* (of a *class*) a *list* consisting of the *class* followed by its *direct superclasses* in the order mentioned in the defining *form* for the *class*. 



**local slot** *n.* (of a *class*) a *slot accessible* in only one *instance*, namely the *instance* in which the *slot* is allocated. 



**logical block** *n.* a conceptual grouping of related output used by the *pretty printer* . See the *macro* **pprint-logical-block** and Section 22.2.1.1 (Dynamic Control of the Arrangement of Output). 



**logical host** *n.* an *object* of *implementation-dependent* nature that is used as the representation of a “host” in a *logical pathname*, and that has an associated set of translation rules for converting *logical pathnames* belonging to that host into *physical pathnames*. See Section 19.3 (Logical Pathnames). 



**logical host designator** *n.* a *designator* for a *logical host*; that is, an *object* that denotes a *logical host* and that is one of: a *string* (denoting the *logical host* that it names), or a *logical host* (denoting itself). (Note that because the representation of a *logical host* is *implementation-dependent*, it is possible that an *implementation* might represent a *logical host* as the *string* that names it.) 



**logical pathname** *n.* an *object* of *type* **logical-pathname**. 



**long float** *n.* an *object* of *type* **long-float**. 



**loop keyword** *n. Trad.* a symbol that is a specially recognized part of the syntax of an extended **loop** *form*. Such symbols are recognized by their *name* (using **string=**), not by their identity; as such, they may be in any package. A *loop keyword* is not a *keyword*. 



**lowercase** *adj.* (of a *character* ) being among *standard characters* corresponding to the small letters a through z, or being some other *implementation-defined character* that 







 



 



is defined by the *implementation* to be *lowercase*. See Section 13.1.4.3 (Characters With Case). 




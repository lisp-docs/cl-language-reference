---
title: R
sidebar_position: 114
---

**R** 



**radix** *n.* an *integer* between 2 and 36, inclusive, which can be used to designate a base with respect to which certain kinds of numeric input or output are performed. (There are *n* valid digit characters for any given *radix n*, and those digits are the first *n* digits in the sequence 0, 1, *. . .*, 9, A, B, *. . .*, Z, which have the weights 0, 1, *. . .*, 9, 10, 11, *. . .*, 



35, respectively. Case is not significant in parsing numbers of radix greater than 10, so “9b8a” and “9B8A” denote the same *radix* 16 number.) 



**random state** *n.* an *object* of *type* **random-state**. 



**rank** *n.* a non-negative *integer* indicating the number of *dimensions* of an *array*. 



**ratio** *n.* an *object* of *type* **ratio**. 







 



 



**ratio marker** *n.* a character which is used in the textual notation for a *ratio* to separate the numerator from the denominator, and which is *slash* in the *standard readtable*. See Section 2.1 (Character Syntax). 



**rational** *n.* an *object* of *type* **rational**. 



**read** *v.t.* 1. (a *binding* or *slot* or component) to obtain the *value* of the *binding* or *slot*. 2. (an *object* from a *stream*) to parse an *object* from its representation on the *stream*. 



**readably** *adv.* (of a manner of printing an *object O*<sub>1</sub>) in such a way as to permit the *Lisp Reader* to later *parse* the printed output into an *object O*<sub>2</sub> that is *similar* to *O*<sub>1</sub>. 



**reader** *n.* 1. a *function* that *reads*<sub>1</sub> a *variable* or *slot*. 2. the *Lisp reader* . 



**reader macro** *n.* 1. a textual notation introduced by dispatch on one or two 



*characters* that defines special-purpose syntax for use by the *Lisp reader* , and that is implemented by a *reader macro function*. See Section 2.2 (Reader Algorithm). 2. the *character* or *characters* that introduce a *reader macro*<sub>1</sub>; that is, a *macro character* or the conceptual pairing of a *dispatching macro character* and the *character* that follows 



it. (A *reader macro* is not a kind of *macro*.) 



**reader macro function** *n.* a *function designator* that denotes a *function* 



that implements a *reader macro*<sub>2</sub>. See the *functions* **set-macro-character** and 



**set-dispatch-macro-character**. 



**readtable** *n.* an *object* of *type* **readtable**. 



**readtable case** *n.* an attribute of a *readtable* whose value is a *case sensitivity mode*, and that selects the manner in which *characters* in a *symbol*’s *name* are to be treated by the *Lisp reader* and the *Lisp printer* . See Section 23.1.2 (Effect of Readtable Case on the Lisp Reader) and Section 22.1.3.3.2 (Effect of Readtable Case on the Lisp 



Printer). 



**readtable designator** *n.* a *designator* for a *readtable*; that is, an *object* that denotes a *readtable* and that is one of: **nil** (denoting the *standard readtable*), or a *readtable* (denoting itself). 



**recognizable subtype** *n.* (of a *type*) a *subtype* of the *type* which can be reliably detected to be such by the *implementation*. See the *function* **subtypep**. 



**reference** *n.*, *v.t.* 1. *n.* an act or occurrence of referring to an *object*, a *binding*, an *exit point*, a *tag*, or an *environment*. 2. *v.t.* to refer to an *object*, a *binding*, an *exit point*, a *tag*, or an *environment*, usually by *name*. 







 



 



**registered package** *n.* a *package object* that is installed in the *package registry*. (Every *registered package* has a *name* that is a *string*, as well as zero or more *string* nicknames. All *packages* that are initially specified by Common Lisp or created by **make-package** or **defpackage** are *registered packages*. *Registered packages* can be turned into *unregistered packages* by **delete-package**.) 



**relative** *adj.* 1. (of a *time*) representing an offset from an *absolute time* in the 



units appropriate to that time. For example, a *relative internal time* is the difference between two *absolute internal times*, and is measured in *internal time units*. 2. (of a *pathname*) representing a position in a directory hierarchy by motion from a position other than the root, which might therefore vary. “The notation #P"../foo.text" 



denotes a relative pathname if the host file system is Unix.” See *absolute*. 



**repertoire** *n.*, *ISO* a *subtype* of **character**. See Section 13.1.2.2 (Character 



Repertoires). 



**report** *n.* (of a *condition*) to *call* the *function* **print-object** on the *condition* in an *environment* where the *value* of **\*print-escape\*** is *false*. 



**report message** *n.* the text that is output by a *condition reporter* . 



**required parameter** *n.* A *parameter* for which a corresponding positional *argument* must be supplied when *calling* the *function*. 



**rest list** *n.* (of a *function* having a *rest parameter* ) The *list* to which the *rest parameter* is *bound* on some particular *call* to the *function*. 



**rest parameter** *n.* A *parameter* which was introduced by **&amp;rest**. 



**restart** *n.* an *object* of *type* **restart**. 



**restart designator** *n.* a *designator* for a *restart*; that is, an *object* that denotes a *restart* and that is one of: a *non-nil symbol* (denoting the most recently established *active restart* whose *name* is that *symbol*), or a *restart* (denoting itself). 



**restart function** *n.* a *function* that invokes a *restart*, as if by **invoke-restart**. 



The primary purpose of a *restart function* is to provide an alternate interface. By convention, a *restart function* usually has the same name as the *restart* which it invokes. Figure 26–4 shows a list of the *standardized restart functions*. 



|<p>**abort muffle-warning use-value** </p><p>**continue store-value**</p>|

| :- |





**Figure 26–4. Standardized Restart Functions** 







 



 



**return** *v.t.* (of *values*) 1. (from a *block*) to transfer control and *values* from the *block*; that is, to cause the *block* to *yield* the *values* immediately without doing any further evaluation of the *forms* in its body. 2. (from a *form*) to *yield* the *values*. 



**return value** *n. Trad.* a *value*<sub>1</sub> 



**right-parenthesis** *n.* the *standard character* “)”, that is variously called “right 



parenthesis” or “close parenthesis” See Figure 2–5. 



**run time** *n.* 1. *load time* 2. *execution time* 



**run-time compiler** *n.* refers to the **compile** function or to *implicit compilation*, for which the compilation and run-time *environments* are maintained in the same *Lisp image*. 



**run-time definition** *n.* a definition in the *run-time environment*. 



**run-time environment** *n.* the *environment* in which a program is *executed*. 




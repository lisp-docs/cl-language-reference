---
title: E
sidebar_position: 101
---

**E** 



**echo stream** *n.* a *stream* of *type* **echo-stream**. 



**effective method** *n.* the combination of *applicable methods* that are executed when a *generic function* is invoked with a particular sequence of *arguments*. 



**element** *n.* 1. (of a *list*) an *object* that is the *car* of one of the *conses* that comprise the *list*. 2. (of an *array*) an *object* that is stored in the *array*. 3. (of a *sequence*) an *object* that is an *element* of the *list* or *array* that is the *sequence*. 4. (of a *type*) an *object* that is a member of the set of *objects* designated by the *type*. 5. (of an *input* 



*stream*) a *character* or *number* (as appropriate to the *element type* of the *stream*) that is among the ordered series of *objects* that can be read from the *stream* (using **read-char** or **read-byte**, as appropriate to the *stream*). 6. (of an *output stream*) a 



*character* or *number* (as appropriate to the *element type* of the *stream*) that is among the ordered series of *objects* that has been or will be written to the *stream* (using **write-char** or **write-byte**, as appropriate to the *stream*). 7. (of a *class*) a *generalized instance* of the *class*. 



**element type** *n.* 1. (of an *array*) the *array element type* of the *array*. 2. (of a *stream*) the *stream element type* of the *stream*. 



**em** *n. Trad.* a context-dependent unit of measure commonly used in typesetting, equal to the displayed width of of a letter “M” in the current font. (The letter “M” is traditionally chosen because it is typically represented by the widest *glyph* in the font, and other characters’ widths are typically fractions of an *em*. In implementations providing non-Roman characters with wider characters than “M,” it is permissible for another character to be the *implementation-defined* reference character for this measure, and for “M” to be only a fraction of an *em* wide.) In a fixed width font, a line with *n* characters is *n ems* wide; in a variable width font, *n ems* is the expected upper bound on the width of such a line. 



**empty list** *n.* the *list* containing no *elements*. See *()*. 



**empty type** *n.* the *type* that contains no *elements*, and that is a *subtype* of all *types* (including itself). See *nil*. 



**end of file** *n.* 1. the point in an *input stream* beyond which there is no further data. Whether or not there is such a point on an *interactive stream* is *implementation defined*. 2. a *situation* that occurs upon an attempt to obtain data from an *input stream* that is at the *end of file*<sub>1</sub>. 







 



 



**environment** *n.* 1. a set of *bindings*. See Section 3.1.1 (Introduction to Environments). 2. an *environment object*. “**macroexpand** takes an optional environment argument.” 



**environment object** *n.* an *object* representing a set of *lexical bindings*, used in the processing of a *form* to provide meanings for *names* within that *form*. “**macroexpand** takes an optional environment argument.” (The *object* **nil** when used as an *environment object* denotes the *null lexical environment*; the *values* of *environment parameters* to *macro functions* are *objects* of *implementation-dependent* nature which represent the *environment*<sub>1</sub> in which the corresponding *macro form* is to be expanded.) See Section 3.1.1.4 (Environment Objects). 



**environment parameter** *n.* A *parameter* in a *defining form f* for which there is no corresponding *argument*; instead, this *parameter* receives as its value an *environment object* which corresponds to the *lexical environment* in which the *defining form f* appeared. 



**error** *n.* 1. (only in the phrase “is an error”) a *situation* in which the semantics of a program are not specified, and in which the consequences are undefined. 2. a *condition* which represents an *error situation*. See Section 1.4.2 (Error Terminology). 3. an *object* of *type* **error**. 



**error output** *n.* the *output stream* which is the *value* of the *dynamic variable* 



**\*error-output\***. 



**escape** *n.*, *adj.* 1. *n.* a *single escape* or a *multiple escape*. 2. *adj. single escape* or *multiple escape*. 



**establish** *v.t.* to build or bring into being a *binding*, a *declaration*, an *exit point*, a *tag*, a *handler* , a *restart*, or an *environment*. “**let** establishes lexical bindings.” 



**evaluate** *v.t.* (a *form* or an *implicit progn*) to *execute* the *code* represented by the *form* (or the series of *forms* making up the *implicit progn*) by applying the rules of *evaluation*, returning zero or more values. 



**evaluation** *n.* a model whereby *forms* are *executed*, returning zero or more values. Such execution might be implemented directly in one step by an interpreter or in two steps by first *compiling* the *form* and then *executing* the *compiled code*; this choice is dependent both on context and the nature of the *implementation*, but in any case is not in general detectable by any program. The evaluation model is designed in such a way that a *conforming implementation* might legitimately have only a compiler and no interpreter, or vice versa. See Section 3.1.2 (The Evaluation Model). 



**evaluation environment** *n.* a *run-time environment* in which macro expanders and code specified by **eval-when** to be evaluated are evaluated. All evaluations initiated by the *compiler* take place in the *evaluation environment*. 







 



 



**execute** *v.t. Trad.* (*code*) to perform the imperative actions represented by the *code*. **execution time** *n.* the duration of time that *compiled code* is being *executed*. 



**exhaustive partition** *n.* (of a *type*) a set of *pairwise disjoint types* that form an *exhaustive union*. 



**exhaustive union** *n.* (of a *type*) a set of *subtypes* of the *type*, whose union contains all *elements* of that *type*. 



**exit point** *n.* a point in a *control form* from which (*e.g.*, **block**), through which (*e.g.*, **unwind-protect**), or to which (*e.g.*, **tagbody**) control and possibly *values* can be transferred both actively by using another *control form* and passively through the normal control and data flow of *evaluation*. “**catch** and **block** establish bindings for exit points to which **throw** and **return-from**, respectively, can transfer control and values; **tagbody** establishes a binding for an exit point with lexical extent to which **go** can transfer control; and **unwind-protect** establishes an exit point through which control might be transferred by operators such as **throw**, **return-from**, and **go**.” 



**explicit return** *n.* the act of transferring control (and possibly *values*) to a *block* by using **return-from** (or **return**). 



**explicit use** *n.* (of a *variable V* in a *form F*) a reference to *V* that is directly apparent in the normal semantics of *F*; *i.e.*, that does not expose any undocumented details of the *macro expansion* of the *form* itself. References to *V* exposed by expanding *subforms* of *F* are, however, considered to be *explicit uses* of *V* . 



**exponent marker** *n.* a character that is used in the textual notation for a *float* to separate the mantissa from the exponent. The characters defined as *exponent markers* in the *standard readtable* are shown in Figure 26–1. For more information, see Section 2.1 (Character Syntax). “The exponent marker ‘d’ in ‘3.0d7’ indicates that this 



number is to be represented as a double float.” 



|**Marker Meaning**|

| :- |

|<p>D or d **double-float** </p><p>E or e **float** (see **\*read-default-float-format\***) </p><p>F or f **single-float** </p><p>L or l **long-float** </p><p>S or s **short-float**</p>|





**Figure 26–1. Exponent Markers** 



**export** *v.t.* (a *symbol* in a *package*) to add the *symbol* to the list of *external symbols* of the *package*. 







 



 



**exported** *adj.* (of a *symbol* in a *package*) being an *external symbol* of the *package*. 



**expressed adjustability** *n.* (of an *array*) a *generalized boolean* that is conceptually (but not necessarily actually) associated with the *array*, representing whether the *array* is *expressly adjustable*. See also *actual adjustability*. 



**expressed array element type** *n.* (of an *array*) the *type* which is the *array element type* implied by a *type declaration* for the *array*, or which is the requested *array* 



*element type* at its time of creation, prior to any selection of an *upgraded array element type*. (Common Lisp does not provide a way of detecting this *type* directly at run time, but an *implementation* is permitted to make assumptions about the *array*’s contents and the operations which may be performed on the *array* when this *type* is noted during code analysis, even if those assumptions would not be valid in general for the *upgraded array element type* of the *expressed array element type*.) 



**expressed complex part type** *n.* (of a *complex* ) the *type* which is implied as the *complex part type* by a *type declaration* for the *complex* , or which is the requested *complex part type* at its time of creation, prior to any selection of an *upgraded complex part type*. (Common Lisp does not provide a way of detecting this *type* directly at run time, but an *implementation* is permitted to make assumptions about the operations which may be performed on the *complex* when this *type* is noted during code analysis, even if those assumptions would not be valid in general for the *upgraded complex part type* of the *expressed complex part type*.) 



**expression** *n.* 1. an *object*, often used to emphasize the use of the *object* to encode or represent information in a specialized format, such as program text. “The second expression in a **let** form is a list of bindings.” 2. the textual notation used to notate an *object* in a source file. “The expression ’sample is equivalent to (quote sample).” 



**expressly adjustable** *adj.* (of an *array*) being *actually adjustable* by virtue of an explicit request for this characteristic having been made at the time of its creation. All *arrays* that are *expressly adjustable* are *actually adjustable*, but not necessarily vice versa. 



**extended character** *n.* a *character* of *type* **extended-char**: a *character* that is not a *base character* . 



**extended function designator** *n.* a *designator* for a *function*; that is, an *object* that denotes a *function* and that is one of: a *function name* (denoting the *function* it names in the *global environment*), or a *function* (denoting itself). The consequences are undefined if a *function name* is used as an *extended function designator* but it does not have a global definition as a *function*, or if it is a *symbol* that has a global definition as a *macro* or a *special form*. See also *function designator* . 



**extended lambda list** *n.* a list resembling an *ordinary lambda list* in form and 







 



 



purpose, but offering additional syntax or functionality not available in an *ordinary lambda list*. “**defmacro** uses extended lambda lists.” 



**extension** *n.* a facility in an *implementation* of Common Lisp that is not specified by this standard. 



**extent** *n.* the interval of time during which a *reference* to an *object*, a *binding*, an *exit point*, a *tag*, a *handler* , a *restart*, or an *environment* is defined. 



**external file format** *n.* an *object* of *implementation-dependent* nature which 



determines one of possibly several *implementation-dependent* ways in which *characters* are encoded externally in a *character file*. 



**external file format designator** *n.* a *designator* for an *external file format*; that is, an *object* that denotes an *external file format* and that is one of: the *symbol* 



:default (denoting an *implementation-dependent* default *external file format* that can accomodate at least the *base characters*), some other *object* defined by the 



*implementation* to be an *external file format designator* (denoting an *implementation defined external file format*), or some other *object* defined by the *implementation* to be an *external file format* (denoting itself). 



**external symbol** *n.* (of a *package*) a *symbol* that is part of the ‘external interface’ to the *package* and that are *inherited* <sub>3</sub> by any other *package* that *uses* the *package*. When using the *Lisp reader* , if a *package prefix* is used, the *name* of an *external symbol* is separated from the *package name* by a single *package marker* while the *name* of an *internal symbol* is separated from the *package name* by a double *package marker* ; see Section 2.3.4 (Symbols as Tokens). 



**externalizable object** *n.* an *object* that can be used as a *literal object* in *code* to be processed by the *file compiler* . 




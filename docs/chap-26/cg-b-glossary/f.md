---
title: F
sidebar_position: 102
---

**F** 



**false** *n.* the *symbol* **nil**, used to represent the failure of a *predicate* test. 



**fbound** [ **ef ba\_und** ] *adj.* (of a *function name*) *bound* in the *function namespace*. (The *names* of *macros* and *special operators* are *fbound*, but the nature and *type* of the *object* which is their *value* is *implementation-dependent*. Further, defining a *setf expander F* does not cause the *setf function* (setf *F*) to become defined; as such, if 



there is a such a definition of a *setf expander F*, the *function* (setf *F*) can be *fbound* if and only if, by design or coincidence, a function binding for (setf *F*) has been independently established.) See the *functions* **fboundp** and **symbol-function**. 



**feature** *n.* 1. an aspect or attribute of Common Lisp, of the *implementation*, or of the *environment*. 2. a *symbol* that names a *feature*<sub>1</sub>. See Section 24.1.2 (Features). “The :ansi-cl feature is present in all conforming implementations.” 







 



 



**feature expression** *n.* A boolean combination of *features* used by the #+ and #- *reader macros* in order to direct conditional *reading* of *expressions* by the *Lisp reader* . See Section 24.1.2.1 (Feature Expressions). 



**features list** *n.* the *list* that is the *value* of **\*features\***. 



**file** *n.* a named entry in a *file system*, having an *implementation-defined* nature. 



**file compiler** *n.* any *compiler* which *compiles source code* contained in a *file*, producing a *compiled file* as output. The **compile-file** function is the only interface to such a *compiler* provided by Common Lisp, but there might be other, *implementation-defined* mechanisms for invoking the *file compiler* . 



**file position** *n.* (in a *stream*) a non-negative *integer* that represents a position in the *stream*. Not all *streams* are able to represent the notion of *file position*; in the description of any *operator* which manipulates *file positions*, the behavior for *streams* that don’t have this notion must be explicitly stated. For *binary streams*, the *file position* represents the number of preceding *bytes* in the *stream*. For *character streams*, the constraint is more relaxed: *file positions* must increase monotonically, the amount of the increase between *file positions* corresponding to any two successive characters in the *stream* is *implementation-dependent*. 



**file position designator** *n.* (in a *stream*) a *designator* for a *file position* in that *stream*; that is, the symbol :start (denoting 0, the first *file position* in that *stream*), the symbol :end (denoting the last *file position* in that *stream*; *i.e.*, the position 



following the last *element* of the *stream*), or a *file position* (denoting itself). 



**file stream** *n.* an *object* of *type* **file-stream**. 



**file system** *n.* a facility which permits aggregations of data to be stored in named *files* on some medium that is external to the *Lisp image* and that therefore persists from *session* to *session*. 



**filename** *n.* a handle, not necessarily ever directly represented as an *object*, that can be used to refer to a *file* in a *file system*. *Pathnames* and *namestrings* are two kinds of *objects* that substitute for *filenames* in Common Lisp. 



**fill pointer** *n.* (of a *vector* ) an *integer* associated with a *vector* that represents the index above which no *elements* are *active*. (A *fill pointer* is a non-negative *integer* no larger than the total number of *elements* in the *vector* . Not all *vectors* have *fill pointers*.) 



**finite** *adj.* (of a *type*) having a finite number of *elements*. “The type specifier 



(integer 0 5) denotes a finite type, but the type specifiers **integer** and (integer 0) do not.” 







 



 



**fixnum** *n.* an *integer* of *type* **fixnum**. 



**float** *n.* an *object* of *type* **float**. 



**for-value** *adj.* (of a *reference* to a *binding*) being a *reference* that *reads*<sub>1</sub> the *value* of the *binding*. 



**form** *n.* 1. any *object* meant to be *evaluated*. 2. a *symbol*, a *compound form*, or a *self-evaluating object*. 3. (for an *operator* , as in “⟨operator ii form*”) a *compound form* having that *operator* as its first element. “A **quote** form is a constant form.” 



**formal argument** *n. Trad.* a *parameter* . 



**formal parameter** *n. Trad.* a *parameter* . 



**format** *v.t.* (a *format control* and *format arguments*) to perform output as if by **format**, using the *format string* and *format arguments*. 



**format argument** *n.* an *object* which is used as data by functions such as **format** which interpret *format controls*. 



**format control** *n.* a *format string*, or a *function* that obeys the *argument* conventions for a *function* returned by the **formatter** *macro*. See Section 22.2.1.3 (Compiling Format Strings). 



**format directive** *n.* 1. a sequence of *characters* in a *format string* which is introduced by a *tilde*, and which is specially interpreted by *code* which processes *format strings* to mean that some special operation should be performed, possibly involving data supplied by the *format arguments* that accompanied the *format string*. See the 



*function* **format**. “In "&#126;D base 10 = &#126;8R", the character sequences ‘&#126;D’ and ‘&#126;8R’ are format directives.” 2. the conceptual category of all *format directives*<sub>1</sub> which use the same dispatch character. “Both "&#126;3d" and "&#126;3,’0D" are valid uses of the ‘&#126;D’ format directive.” 



**format string** *n.* a *string* which can contain both ordinary text and *format directives*, and which is used in conjunction with *format arguments* to describe how text output should be formatted by certain functions, such as **format**. 



**free declaration** *n.* a declaration that is not a *bound declaration*. See **declare**. 



**fresh** *adj.* 1. (of an *object yielded* by a *function*) having been newly-allocated by that *function*. (The caller of a *function* that returns a *fresh object* may freely modify the *object* without fear that such modification will compromise the future correct behavior of that *function*.) 2. (of a *binding* for a *name*) newly-allocated; not shared with other *bindings* for that *name*. 







 



 



**freshline** *n.* a conceptual operation on a *stream*, implemented by the *function* 



**fresh-line** and by the *format directive* &#126;&amp;, which advances the display position to the beginning of the next line (as if a *newline* had been typed, or the *function* **terpri** had been called) unless the *stream* is already known to be positioned at the beginning of a line. Unlike *newline*, *freshline* is not a *character* . 



**funbound** [ **efunba\_und** ] *n.* (of a *function name*) not *fbound*. 



**function** *n.* 1. an *object* representing code, which can be *called* with zero or more *arguments*, and which produces zero or more *values*. 2. an *object* of *type* **function**. 



**function block name** *n.* (of a *function name*) The *symbol* that would be used as the name of an *implicit block* which surrounds the body of a *function* having that *function name*. If the *function name* is a *symbol*, its *function block name* is the *function name* itself. If the *function name* is a *list* whose *car* is **setf** and whose *cadr* is a *symbol*, 



its *function block name* is the *symbol* that is the *cadr* of the *function name*. An *implementation* which supports additional kinds of *function names* must specify for each how the corresponding *function block name* is computed. 



**function cell** *n. Trad.* (of a *symbol*) The *place* which holds the *definition* of the global *function binding*, if any, named by that *symbol*, and which is *accessed* by **symbol-function**. See *cell*. 



**function designator** *n.* a *designator* for a *function*; that is, an *object* that denotes a *function* and that is one of: a *symbol* (denoting the *function* named by that *symbol* in the *global environment*), or a *function* (denoting itself). The consequences are undefined if a *symbol* is used as a *function designator* but it does not have a global definition as a *function*, or it has a global definition as a *macro* or a *special form*. See also *extended function designator* . 



**function form** *n.* a *form* that is a *list* and that has a first element which is the *name* of a *function* to be called on *arguments* which are the result of *evaluating* subsequent elements of the *function form*. 



**function name** *n.* 1. (in an *environment*) A *symbol* or a *list* (setf *symbol*) that is the *name* of a *function* in that *environment*. 2. A *symbol* or a *list* (setf *symbol*). 



**functional evaluation** *n.* the process of extracting a *functional value* from a *function name* or a *lambda expression*. The evaluator performs *functional evaluation* implicitly when it encounters a *function name* or a *lambda expression* in the *car* of a *compound form*, or explicitly when it encounters a **function** *special form*. Neither a use of a 



*symbol* as a *function designator* nor a use of the *function* **symbol-function** to extract the *functional value* of a *symbol* is considered a *functional evaluation*. 



**functional value** *n.* 1. (of a *function name N* in an *environment E*) The *value* of the *binding* named *N* in the *function namespace* for *environment E*; that is, the 







 



 



contents of the *function cell* named *N* in *environment E*. 2. (of an *fbound symbol S*) the contents of the *symbol*’s *function cell*; that is, the *value* of the *binding* named *S* in the *function namespace* of the *global environment*. (A *name* that is a *macro name* in the *global environment* or is a *special operator* might or might not be *fbound*. But if *S* is such a *name* and is *fbound*, the specific nature of its *functional value* is *implementation-dependent*; in particular, it might or might not be a *function*.) 



**further compilation** *n. implementation-dependent* compilation beyond *minimal compilation*. Further compilation is permitted to take place at *run time*. “Block compilation and generation of machine-specific instructions are examples of further compilation.” 




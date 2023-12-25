---
title: F
sidebar_position: 102
---

**F** 



**false** *n.* the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, used to represent the failure of a <GlossaryTerm styled={true} term={"predicate"}><i>predicate</i></GlossaryTerm> test. 



**fbound** [ **ef ba\_und** ] *adj.* (of a *function name*) *bound* in the *function namespace*. (The <GlossaryTerm styled={true} term={"name"}><i>names</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"macro"}><i>macros</i></GlossaryTerm> and *special operators* are <GlossaryTerm styled={true} term={"fbound"}><i>fbound</i></GlossaryTerm>, but the nature and <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> which is their <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. Further, defining a *setf expander F* does not cause the *setf function* (setf *F*) to become defined; as such, if 



there is a such a definition of a *setf expander F*, the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> (setf *F*) can be <GlossaryTerm styled={true} term={"fbound"}><i>fbound</i></GlossaryTerm> if and only if, by design or coincidence, a function binding for (setf *F*) has been independently established.) See the <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm> <DictionaryLink styled={true} term={"fboundp"}><b>fboundp</b></DictionaryLink> and <DictionaryLink styled={true} term={"symbol-function"}><b>symbol-function</b></DictionaryLink>. 



**feature** *n.* 1. an aspect or attribute of Common Lisp, of the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm>, or of the <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm>. 2. a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> that names a <GlossaryTerm styled={true} term={"feature"}><i>feature</i></GlossaryTerm><sub>1</sub>. See Section 24.1.2 (Features). “The :ansi-cl feature is present in all conforming implementations.” 







 



 



**feature expression** *n.* A boolean combination of <GlossaryTerm styled={true} term={"feature"}><i>features</i></GlossaryTerm> used by the #+ and #- *reader macros* in order to direct conditional *reading* of <GlossaryTerm styled={true} term={"expression"}><i>expressions</i></GlossaryTerm> by the *Lisp reader* . See Section 24.1.2.1 (Feature Expressions). 



**features list** *n.* the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> that is the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"features"}><b>\*features\*</b></DictionaryLink>. 



**file** *n.* a named entry in a *file system*, having an <GlossaryTerm styled={true} term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm> nature. 



**file compiler** *n.* any <GlossaryTerm styled={true} term={"compiler"}><i>compiler</i></GlossaryTerm> which *compiles source code* contained in a <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm>, producing a *compiled file* as output. The <DictionaryLink styled={true} term={"compile-file"}><b>compile-file</b></DictionaryLink> function is the only interface to such a <GlossaryTerm styled={true} term={"compiler"}><i>compiler</i></GlossaryTerm> provided by Common Lisp, but there might be other, <GlossaryTerm styled={true} term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm> mechanisms for invoking the *file compiler* . 



**file position** *n.* (in a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>) a non-negative *integer* that represents a position in the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. Not all <GlossaryTerm styled={true} term={"stream"}><i>streams</i></GlossaryTerm> are able to represent the notion of *file position*; in the description of any <GlossaryTerm styled={true} term={"operator"}><i>operator</i></GlossaryTerm> which manipulates *file positions*, the behavior for <GlossaryTerm styled={true} term={"stream"}><i>streams</i></GlossaryTerm> that don’t have this notion must be explicitly stated. For *binary streams*, the *file position* represents the number of preceding <GlossaryTerm styled={true} term={"byte"}><i>bytes</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. For *character streams*, the constraint is more relaxed: *file positions* must increase monotonically, the amount of the increase between *file positions* corresponding to any two successive characters in the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. 



**file position designator** *n.* (in a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>) a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a *file position* in that <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>; that is, the symbol :start (denoting 0, the first *file position* in that <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>), the symbol :end (denoting the last *file position* in that <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>; *i.e.*, the position 



following the last <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>), or a *file position* (denoting itself). 



**file stream** *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"file-stream"}><b>file-stream</b></DictionaryLink>. 



**file system** *n.* a facility which permits aggregations of data to be stored in named <GlossaryTerm styled={true} term={"file"}><i>files</i></GlossaryTerm> on some medium that is external to the *Lisp image* and that therefore persists from <GlossaryTerm styled={true} term={"session"}><i>session</i></GlossaryTerm> to <GlossaryTerm styled={true} term={"session"}><i>session</i></GlossaryTerm>. 



**filename** *n.* a handle, not necessarily ever directly represented as an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>, that can be used to refer to a <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm> in a *file system*. *Pathnames* and <GlossaryTerm styled={true} term={"namestring"}><i>namestrings</i></GlossaryTerm> are two kinds of <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> that substitute for <GlossaryTerm styled={true} term={"filename"}><i>filenames</i></GlossaryTerm> in Common Lisp. 



**fill pointer** *n.* (of a <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> ) an *integer* associated with a <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> that represents the index above which no <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm> are <GlossaryTerm styled={true} term={"active"}><i>active</i></GlossaryTerm>. (A *fill pointer* is a non-negative *integer* no larger than the total number of <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> . Not all <GlossaryTerm styled={true} term={"vector"}><i>vectors</i></GlossaryTerm> have *fill pointers*.) 



**finite** *adj.* (of a <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>) having a finite number of <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm>. “The type specifier 



(integer 0 5) denotes a finite type, but the type specifiers <DictionaryLink styled={true} term={"integer"}><b>integer</b></DictionaryLink> and (integer 0) do not.” 







 



 



<DictionaryLink styled={true} term={"fixnum"}><b>fixnum</b></DictionaryLink> *n.* an *integer* of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"fixnum"}><b>fixnum</b></DictionaryLink>. 



<DictionaryLink styled={true} term={"float"}><b>float</b></DictionaryLink> *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"float"}><b>float</b></DictionaryLink>. 



**for-value** *adj.* (of a <GlossaryTerm styled={true} term={"reference"}><i>reference</i></GlossaryTerm> to a <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm>) being a <GlossaryTerm styled={true} term={"reference"}><i>reference</i></GlossaryTerm> that <GlossaryTerm styled={true} term={"read"}><i>reads</i></GlossaryTerm><sub>1</sub> the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm>. 



**form** *n.* 1. any <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> meant to be *evaluated*. 2. a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>, a *compound form*, or a *self-evaluating object*. 3. (for an <GlossaryTerm styled={true} term={"operator"}><i>operator</i></GlossaryTerm> , as in “⟨operator ii form*”) a *compound form* having that <GlossaryTerm styled={true} term={"operator"}><i>operator</i></GlossaryTerm> as its first element. “A <DictionaryLink styled={true} term={"quote"}><b>quote</b></DictionaryLink> form is a constant form.” 



**formal argument** *n. Trad.* a <GlossaryTerm styled={true} term={"parameter"}><i>parameter</i></GlossaryTerm> . 



**formal parameter** *n. Trad.* a <GlossaryTerm styled={true} term={"parameter"}><i>parameter</i></GlossaryTerm> . 



<DictionaryLink styled={true} term={"format"}><b>format</b></DictionaryLink> *v.t.* (a *format control* and *format arguments*) to perform output as if by <DictionaryLink styled={true} term={"format"}><b>format</b></DictionaryLink>, using the *format string* and *format arguments*. 



**format argument** *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> which is used as data by functions such as <DictionaryLink styled={true} term={"format"}><b>format</b></DictionaryLink> which interpret *format controls*. 



**format control** *n.* a *format string*, or a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> that obeys the <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> conventions for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> returned by the <DictionaryLink styled={true} term={"formatter"}><b>formatter</b></DictionaryLink> <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm>. See Section 22.2.1.3 (Compiling Format Strings). 



**format directive** *n.* 1. a sequence of <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> in a *format string* which is introduced by a *tilde*, and which is specially interpreted by <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm> which processes *format strings* to mean that some special operation should be performed, possibly involving data supplied by the *format arguments* that accompanied the *format string*. See the 



<GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"format"}><b>format</b></DictionaryLink>. “In "&#126;D base 10 = &#126;8R", the character sequences ‘&#126;D’ and ‘&#126;8R’ are format directives.” 2. the conceptual category of all *format directives*<sub>1</sub> which use the same dispatch character. “Both "&#126;3d" and "&#126;3,’0D" are valid uses of the ‘&#126;D’ format directive.” 



**format string** *n.* a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> which can contain both ordinary text and *format directives*, and which is used in conjunction with *format arguments* to describe how text output should be formatted by certain functions, such as <DictionaryLink styled={true} term={"format"}><b>format</b></DictionaryLink>. 



**free declaration** *n.* a declaration that is not a *bound declaration*. See <DictionaryLink styled={true} term={"declare"}><b>declare</b></DictionaryLink>. 



**fresh** *adj.* 1. (of an *object yielded* by a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>) having been newly-allocated by that <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>. (The caller of a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> that returns a *fresh object* may freely modify the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> without fear that such modification will compromise the future correct behavior of that <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>.) 2. (of a <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>) newly-allocated; not shared with other <GlossaryTerm styled={true} term={"binding"}><i>bindings</i></GlossaryTerm> for that <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>. 







 



 



**freshline** *n.* a conceptual operation on a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>, implemented by the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> 



<DictionaryLink styled={true} term={"fresh-line"}><b>fresh-line</b></DictionaryLink> and by the *format directive* &#126;&amp;, which advances the display position to the beginning of the next line (as if a <GlossaryTerm styled={true} term={"newline"}><i>newline</i></GlossaryTerm> had been typed, or the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"terpri"}><b>terpri</b></DictionaryLink> had been called) unless the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> is already known to be positioned at the beginning of a line. Unlike <GlossaryTerm styled={true} term={"newline"}><i>newline</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"freshline"}><i>freshline</i></GlossaryTerm> is not a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> . 



**funbound** [ **efunba\_und** ] *n.* (of a *function name*) not <GlossaryTerm styled={true} term={"fbound"}><i>fbound</i></GlossaryTerm>. 



<DictionaryLink styled={true} term={"function"}><b>function</b></DictionaryLink> *n.* 1. an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> representing code, which can be *called* with zero or more <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm>, and which produces zero or more <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm>. 2. an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"function"}><b>function</b></DictionaryLink>. 



**function block name** *n.* (of a *function name*) The <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> that would be used as the name of an *implicit block* which surrounds the body of a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> having that *function name*. If the *function name* is a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>, its *function block name* is the *function name* itself. If the *function name* is a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> whose <GlossaryTerm styled={true} term={"car"}><i>car</i></GlossaryTerm> is <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> and whose <GlossaryTerm styled={true} term={"cadr"}><i>cadr</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>, 



its *function block name* is the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> that is the <GlossaryTerm styled={true} term={"cadr"}><i>cadr</i></GlossaryTerm> of the *function name*. An <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> which supports additional kinds of *function names* must specify for each how the corresponding *function block name* is computed. 



**function cell** *n. Trad.* (of a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>) The <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> which holds the *definition* of the global *function binding*, if any, named by that <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>, and which is *accessed* by <DictionaryLink styled={true} term={"symbol-function"}><b>symbol-function</b></DictionaryLink>. See <GlossaryTerm styled={true} term={"cell"}><i>cell</i></GlossaryTerm>. 



**function designator** *n.* a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>; that is, an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that denotes a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> and that is one of: a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> (denoting the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> named by that <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> in the *global environment*), or a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> (denoting itself). The consequences are undefined if a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is used as a *function designator* but it does not have a global definition as a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>, or it has a global definition as a <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm> or a *special form*. See also *extended function designator* . 



**function form** *n.* a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> that is a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> and that has a first element which is the <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> of a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> to be called on <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> which are the result of *evaluating* subsequent elements of the *function form*. 



**function name** *n.* 1. (in an <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm>) A <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> or a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> (setf <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>) that is the <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> of a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> in that <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm>. 2. A <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> or a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> (setf <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>). 



**functional evaluation** *n.* the process of extracting a *functional value* from a *function name* or a *lambda expression*. The evaluator performs *functional evaluation* implicitly when it encounters a *function name* or a *lambda expression* in the <GlossaryTerm styled={true} term={"car"}><i>car</i></GlossaryTerm> of a *compound form*, or explicitly when it encounters a <DictionaryLink styled={true} term={"function"}><b>function</b></DictionaryLink> *special form*. Neither a use of a 



<GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> as a *function designator* nor a use of the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"symbol-function"}><b>symbol-function</b></DictionaryLink> to extract the *functional value* of a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is considered a *functional evaluation*. 



**functional value** *n.* 1. (of a *function name N* in an *environment E*) The <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> named *N* in the *function namespace* for *environment E*; that is, the 







 



 



contents of the *function cell* named *N* in *environment E*. 2. (of an *fbound symbol S*) the contents of the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>’s *function cell*; that is, the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> named *S* in the *function namespace* of the *global environment*. (A <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> that is a *macro name* in the *global environment* or is a *special operator* might or might not be <GlossaryTerm styled={true} term={"fbound"}><i>fbound</i></GlossaryTerm>. But if *S* is such a <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> and is <GlossaryTerm styled={true} term={"fbound"}><i>fbound</i></GlossaryTerm>, the specific nature of its *functional value* is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>; in particular, it might or might not be a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>.) 



**further compilation** *n. implementation-dependent* compilation beyond *minimal compilation*. Further compilation is permitted to take place at *run time*. “Block compilation and generation of machine-specific instructions are examples of further compilation.” 




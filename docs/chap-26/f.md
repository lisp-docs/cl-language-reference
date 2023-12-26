---
title: F
sidebar_position: 102
---

**F** 



**false** *n.* the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>, used to represent the failure of a <GlossaryTerm  term={"predicate"}><i>predicate</i></GlossaryTerm> test. 



**fbound** [ **ef ba\_und** ] *adj.* (of a *function name*) *bound* in the *function namespace*. (The <GlossaryTerm  term={"name"}><i>names</i></GlossaryTerm> of <GlossaryTerm  term={"macro"}><i>macros</i></GlossaryTerm> and *special operators* are <GlossaryTerm  term={"fbound"}><i>fbound</i></GlossaryTerm>, but the nature and <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> of the <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> which is their <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> is <GlossaryTerm  term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. Further, defining a *setf expander F* does not cause the *setf function* (setf *F*) to become defined; as such, if 



there is a such a definition of a *setf expander F*, the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> (setf *F*) can be <GlossaryTerm  term={"fbound"}><i>fbound</i></GlossaryTerm> if and only if, by design or coincidence, a function binding for (setf *F*) has been independently established.) See the <GlossaryTerm  term={"function"}><i>functions</i></GlossaryTerm> <DictionaryLink  term={"fboundp"}><b>fboundp</b></DictionaryLink> and <DictionaryLink  term={"symbol-function"}><b>symbol-function</b></DictionaryLink>. 



**feature** *n.* 1. an aspect or attribute of Common Lisp, of the <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm>, or of the <GlossaryTerm  term={"environment"}><i>environment</i></GlossaryTerm>. 2. a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> that names a <GlossaryTerm  term={"feature"}><i>feature</i></GlossaryTerm><sub>1</sub>. See Section 24.1.2 (Features). “The :ansi-cl feature is present in all conforming implementations.” 







 



 



**feature expression** *n.* A boolean combination of <GlossaryTerm  term={"feature"}><i>features</i></GlossaryTerm> used by the #+ and #- *reader macros* in order to direct conditional *reading* of <GlossaryTerm  term={"expression"}><i>expressions</i></GlossaryTerm> by the *Lisp reader* . See Section 24.1.2.1 (Feature Expressions). 



**features list** *n.* the <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> that is the <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink  term={"features"}><b>\*features\*</b></DictionaryLink>. 



**file** *n.* a named entry in a *file system*, having an <GlossaryTerm  term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm> nature. 



**file compiler** *n.* any <GlossaryTerm  term={"compiler"}><i>compiler</i></GlossaryTerm> which *compiles source code* contained in a <GlossaryTerm  term={"file"}><i>file</i></GlossaryTerm>, producing a *compiled file* as output. The <DictionaryLink  term={"compile-file"}><b>compile-file</b></DictionaryLink> function is the only interface to such a <GlossaryTerm  term={"compiler"}><i>compiler</i></GlossaryTerm> provided by Common Lisp, but there might be other, <GlossaryTerm  term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm> mechanisms for invoking the *file compiler* . 



**file position** *n.* (in a <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>) a non-negative *integer* that represents a position in the <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>. Not all <GlossaryTerm  term={"stream"}><i>streams</i></GlossaryTerm> are able to represent the notion of *file position*; in the description of any <GlossaryTerm  term={"operator"}><i>operator</i></GlossaryTerm> which manipulates *file positions*, the behavior for <GlossaryTerm  term={"stream"}><i>streams</i></GlossaryTerm> that don’t have this notion must be explicitly stated. For *binary streams*, the *file position* represents the number of preceding <GlossaryTerm  term={"byte"}><i>bytes</i></GlossaryTerm> in the <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>. For *character streams*, the constraint is more relaxed: *file positions* must increase monotonically, the amount of the increase between *file positions* corresponding to any two successive characters in the <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> is <GlossaryTerm  term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. 



**file position designator** *n.* (in a <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>) a <GlossaryTerm  term={"designator"}><i>designator</i></GlossaryTerm> for a *file position* in that <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>; that is, the symbol :start (denoting 0, the first *file position* in that <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>), the symbol :end (denoting the last *file position* in that <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>; *i.e.*, the position 



following the last <GlossaryTerm  term={"element"}><i>element</i></GlossaryTerm> of the <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>), or a *file position* (denoting itself). 



**file stream** *n.* an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"file-stream"}><b>file-stream</b></DictionaryLink>. 



**file system** *n.* a facility which permits aggregations of data to be stored in named <GlossaryTerm  term={"file"}><i>files</i></GlossaryTerm> on some medium that is external to the *Lisp image* and that therefore persists from <GlossaryTerm  term={"session"}><i>session</i></GlossaryTerm> to <GlossaryTerm  term={"session"}><i>session</i></GlossaryTerm>. 



**filename** *n.* a handle, not necessarily ever directly represented as an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>, that can be used to refer to a <GlossaryTerm  term={"file"}><i>file</i></GlossaryTerm> in a *file system*. *Pathnames* and <GlossaryTerm  term={"namestring"}><i>namestrings</i></GlossaryTerm> are two kinds of <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> that substitute for <GlossaryTerm  term={"filename"}><i>filenames</i></GlossaryTerm> in Common Lisp. 



**fill pointer** *n.* (of a <GlossaryTerm  term={"vector"}><i>vector</i></GlossaryTerm> ) an *integer* associated with a <GlossaryTerm  term={"vector"}><i>vector</i></GlossaryTerm> that represents the index above which no <GlossaryTerm  term={"element"}><i>elements</i></GlossaryTerm> are <GlossaryTerm  term={"active"}><i>active</i></GlossaryTerm>. (A *fill pointer* is a non-negative *integer* no larger than the total number of <GlossaryTerm  term={"element"}><i>elements</i></GlossaryTerm> in the <GlossaryTerm  term={"vector"}><i>vector</i></GlossaryTerm> . Not all <GlossaryTerm  term={"vector"}><i>vectors</i></GlossaryTerm> have *fill pointers*.) 



**finite** *adj.* (of a <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm>) having a finite number of <GlossaryTerm  term={"element"}><i>elements</i></GlossaryTerm>. “The type specifier 



(integer 0 5) denotes a finite type, but the type specifiers <DictionaryLink  term={"integer"}><b>integer</b></DictionaryLink> and (integer 0) do not.” 







 



 



<DictionaryLink  term={"fixnum"}><b>fixnum</b></DictionaryLink> *n.* an *integer* of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"fixnum"}><b>fixnum</b></DictionaryLink>. 



<DictionaryLink  term={"float"}><b>float</b></DictionaryLink> *n.* an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"float"}><b>float</b></DictionaryLink>. 



**for-value** *adj.* (of a <GlossaryTerm  term={"reference"}><i>reference</i></GlossaryTerm> to a <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm>) being a <GlossaryTerm  term={"reference"}><i>reference</i></GlossaryTerm> that <GlossaryTerm  term={"read"}><i>reads</i></GlossaryTerm><sub>1</sub> the <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of the <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm>. 



**form** *n.* 1. any <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> meant to be *evaluated*. 2. a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>, a *compound form*, or a *self-evaluating object*. 3. (for an <GlossaryTerm  term={"operator"}><i>operator</i></GlossaryTerm> , as in “⟨operator ii form*”) a *compound form* having that <GlossaryTerm  term={"operator"}><i>operator</i></GlossaryTerm> as its first element. “A <DictionaryLink  term={"quote"}><b>quote</b></DictionaryLink> form is a constant form.” 



**formal argument** *n. Trad.* a <GlossaryTerm  term={"parameter"}><i>parameter</i></GlossaryTerm> . 



**formal parameter** *n. Trad.* a <GlossaryTerm  term={"parameter"}><i>parameter</i></GlossaryTerm> . 



<DictionaryLink  term={"format"}><b>format</b></DictionaryLink> *v.t.* (a *format control* and *format arguments*) to perform output as if by <DictionaryLink  term={"format"}><b>format</b></DictionaryLink>, using the *format string* and *format arguments*. 



**format argument** *n.* an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> which is used as data by functions such as <DictionaryLink  term={"format"}><b>format</b></DictionaryLink> which interpret *format controls*. 



**format control** *n.* a *format string*, or a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> that obeys the <GlossaryTerm  term={"argument"}><i>argument</i></GlossaryTerm> conventions for a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> returned by the <DictionaryLink  term={"formatter"}><b>formatter</b></DictionaryLink> <GlossaryTerm  term={"macro"}><i>macro</i></GlossaryTerm>. See Section 22.2.1.3 (Compiling Format Strings). 



**format directive** *n.* 1. a sequence of <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm> in a *format string* which is introduced by a *tilde*, and which is specially interpreted by <GlossaryTerm  term={"code"}><i>code</i></GlossaryTerm> which processes *format strings* to mean that some special operation should be performed, possibly involving data supplied by the *format arguments* that accompanied the *format string*. See the 



<GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"format"}><b>format</b></DictionaryLink>. “In "&#126;D base 10 = &#126;8R", the character sequences ‘&#126;D’ and ‘&#126;8R’ are format directives.” 2. the conceptual category of all *format directives*<sub>1</sub> which use the same dispatch character. “Both "&#126;3d" and "&#126;3,’0D" are valid uses of the ‘&#126;D’ format directive.” 



**format string** *n.* a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> which can contain both ordinary text and *format directives*, and which is used in conjunction with *format arguments* to describe how text output should be formatted by certain functions, such as <DictionaryLink  term={"format"}><b>format</b></DictionaryLink>. 



**free declaration** *n.* a declaration that is not a *bound declaration*. See <DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink>. 



**fresh** *adj.* 1. (of an *object yielded* by a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm>) having been newly-allocated by that <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm>. (The caller of a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> that returns a *fresh object* may freely modify the <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> without fear that such modification will compromise the future correct behavior of that <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm>.) 2. (of a <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm> for a <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm>) newly-allocated; not shared with other <GlossaryTerm  term={"binding"}><i>bindings</i></GlossaryTerm> for that <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm>. 







 



 



**freshline** *n.* a conceptual operation on a <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>, implemented by the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> 



<DictionaryLink  term={"fresh-line"}><b>fresh-line</b></DictionaryLink> and by the *format directive* &#126;&amp;, which advances the display position to the beginning of the next line (as if a <GlossaryTerm  term={"newline"}><i>newline</i></GlossaryTerm> had been typed, or the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"terpri"}><b>terpri</b></DictionaryLink> had been called) unless the <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> is already known to be positioned at the beginning of a line. Unlike <GlossaryTerm  term={"newline"}><i>newline</i></GlossaryTerm>, <GlossaryTerm  term={"freshline"}><i>freshline</i></GlossaryTerm> is not a <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> . 



**funbound** [ **efunba\_und** ] *n.* (of a *function name*) not <GlossaryTerm  term={"fbound"}><i>fbound</i></GlossaryTerm>. 



<DictionaryLink  term={"function"}><b>function</b></DictionaryLink> *n.* 1. an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> representing code, which can be *called* with zero or more <GlossaryTerm  term={"argument"}><i>arguments</i></GlossaryTerm>, and which produces zero or more <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm>. 2. an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"function"}><b>function</b></DictionaryLink>. 



**function block name** *n.* (of a *function name*) The <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> that would be used as the name of an *implicit block* which surrounds the body of a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> having that *function name*. If the *function name* is a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>, its *function block name* is the *function name* itself. If the *function name* is a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> whose <GlossaryTerm  term={"car"}><i>car</i></GlossaryTerm> is <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> and whose <GlossaryTerm  term={"cadr"}><i>cadr</i></GlossaryTerm> is a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>, 



its *function block name* is the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> that is the <GlossaryTerm  term={"cadr"}><i>cadr</i></GlossaryTerm> of the *function name*. An <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm> which supports additional kinds of *function names* must specify for each how the corresponding *function block name* is computed. 



**function cell** *n. Trad.* (of a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>) The <GlossaryTerm  term={"place"}><i>place</i></GlossaryTerm> which holds the *definition* of the global *function binding*, if any, named by that <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>, and which is *accessed* by <DictionaryLink  term={"symbol-function"}><b>symbol-function</b></DictionaryLink>. See <GlossaryTerm  term={"cell"}><i>cell</i></GlossaryTerm>. 



**function designator** *n.* a <GlossaryTerm  term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm>; that is, an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> that denotes a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> and that is one of: a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> (denoting the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> named by that <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> in the *global environment*), or a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> (denoting itself). The consequences are undefined if a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> is used as a *function designator* but it does not have a global definition as a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm>, or it has a global definition as a <GlossaryTerm  term={"macro"}><i>macro</i></GlossaryTerm> or a *special form*. See also *extended function designator* . 



**function form** *n.* a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> that is a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> and that has a first element which is the <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> of a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> to be called on <GlossaryTerm  term={"argument"}><i>arguments</i></GlossaryTerm> which are the result of *evaluating* subsequent elements of the *function form*. 



**function name** *n.* 1. (in an <GlossaryTerm  term={"environment"}><i>environment</i></GlossaryTerm>) A <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> or a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> (setf <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>) that is the <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> of a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> in that <GlossaryTerm  term={"environment"}><i>environment</i></GlossaryTerm>. 2. A <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> or a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> (setf <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>). 



**functional evaluation** *n.* the process of extracting a <GlossaryTerm styled={true} term={"functional value"}><i>functional value</i></GlossaryTerm> from a <GlossaryTerm styled={true} term={"function name"}><i>function name</i></GlossaryTerm> or a <GlossaryTerm styled={true} term={"lambda expression"}><i>lambda expression</i></GlossaryTerm>. The evaluator performs <GlossaryTerm styled={true} term={"functional evaluation"}><i>functional evaluation</i></GlossaryTerm> implicitly when it encounters a <GlossaryTerm styled={true} term={"function name"}><i>function name</i></GlossaryTerm> or a <GlossaryTerm styled={true} term={"lambda expression"}><i>lambda expression</i></GlossaryTerm> in the <GlossaryTerm  term={"car"}><i>car</i></GlossaryTerm> of a <GlossaryTerm styled={true} term={"compound form"}><i>compound form</i></GlossaryTerm>, or explicitly when it encounters a <DictionaryLink  term={"function"}><b>function</b></DictionaryLink> <GlossaryTerm styled={true} term={"special form"}><i>special form</i></GlossaryTerm>. Neither a use of a 



<GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> as a <GlossaryTerm styled={true} term={"function designator"}><i>function designator</i></GlossaryTerm> nor a use of the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"symbol-function"}><b>symbol-function</b></DictionaryLink> to extract the <GlossaryTerm styled={true} term={"functional value"}><i>functional value</i></GlossaryTerm> of a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> is considered a <GlossaryTerm styled={true} term={"functional evaluation"}><i>functional evaluation</i></GlossaryTerm>. 



**functional value** *n.* 1. (of a *function name N* in an *environment E*) The <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of the <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm> named *N* in the *function namespace* for *environment E*; that is, the 







 



 



contents of the <GlossaryTerm styled={true} term={"function cell"}><i>function cell</i></GlossaryTerm> named *N* in *environment E*. 2. (of an *fbound symbol S*) the contents of the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>’s <GlossaryTerm styled={true} term={"function cell"}><i>function cell</i></GlossaryTerm>; that is, the <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of the <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm> named *S* in the *function namespace* of the <GlossaryTerm styled={true} term={"global environment"}><i>global environment</i></GlossaryTerm>. (A <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> that is a <GlossaryTerm styled={true} term={"macro name"}><i>macro name</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"global environment"}><i>global environment</i></GlossaryTerm> or is a <GlossaryTerm styled={true} term={"special operator"}><i>special operator</i></GlossaryTerm> might or might not be <GlossaryTerm  term={"fbound"}><i>fbound</i></GlossaryTerm>. But if *S* is such a <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> and is <GlossaryTerm  term={"fbound"}><i>fbound</i></GlossaryTerm>, the specific nature of its <GlossaryTerm styled={true} term={"functional value"}><i>functional value</i></GlossaryTerm> is <GlossaryTerm  term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>; in particular, it might or might not be a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm>.) 



**further compilation** *n. implementation-dependent* compilation beyond <GlossaryTerm styled={true} term={"minimal compilation"}><i>minimal compilation</i></GlossaryTerm>. Further compilation is permitted to take place at <GlossaryTerm styled={true} term={"run time"}><i>run time</i></GlossaryTerm>. “Block compilation and generation of machine-specific instructions are examples of further compilation.” 




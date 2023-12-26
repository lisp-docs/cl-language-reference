---
title: F
sidebar_position: 102
---

**F** 



**false** *n.* the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>, used to represent the failure of a <ClLinks  term={"predicate"}><i>predicate</i></ClLinks> test. 



**fbound** [ **ef ba\_und** ] *adj.* (of a *function name*) *bound* in the *function namespace*. (The <ClLinks  term={"name"}><i>names</i></ClLinks> of <ClLinks  term={"macro"}><i>macros</i></ClLinks> and *special operators* are <ClLinks  term={"fbound"}><i>fbound</i></ClLinks>, but the nature and <ClLinks  term={"type"}><i>type</i></ClLinks> of the <ClLinks  term={"object"}><i>object</i></ClLinks> which is their <ClLinks  term={"value"}><i>value</i></ClLinks> is <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. Further, defining a *setf expander F* does not cause the *setf function* (setf *F*) to become defined; as such, if 



there is a such a definition of a *setf expander F*, the <ClLinks  term={"function"}><i>function</i></ClLinks> (setf *F*) can be <ClLinks  term={"fbound"}><i>fbound</i></ClLinks> if and only if, by design or coincidence, a function binding for (setf *F*) has been independently established.) See the <ClLinks  term={"function"}><i>functions</i></ClLinks> <DictionaryLink  term={"fboundp"}><b>fboundp</b></DictionaryLink> and <DictionaryLink  term={"symbol-function"}><b>symbol-function</b></DictionaryLink>. 



**feature** *n.* 1. an aspect or attribute of Common Lisp, of the <ClLinks  term={"implementation"}><i>implementation</i></ClLinks>, or of the <ClLinks  term={"environment"}><i>environment</i></ClLinks>. 2. a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> that names a <ClLinks  term={"feature"}><i>feature</i></ClLinks><sub>1</sub>. See Section 24.1.2 (Features). “The :ansi-cl feature is present in all conforming implementations.” 







 



 



**feature expression** *n.* A boolean combination of <ClLinks  term={"feature"}><i>features</i></ClLinks> used by the #+ and #- *reader macros* in order to direct conditional *reading* of <ClLinks  term={"expression"}><i>expressions</i></ClLinks> by the *Lisp reader* . See Section 24.1.2.1 (Feature Expressions). 



**features list** *n.* the <ClLinks  term={"list"}><i>list</i></ClLinks> that is the <ClLinks  term={"value"}><i>value</i></ClLinks> of <DictionaryLink  term={"features"}><b>\*features\*</b></DictionaryLink>. 



**file** *n.* a named entry in a *file system*, having an <ClLinks  term={"implementation-defined"}><i>implementation-defined</i></ClLinks> nature. 



**file compiler** *n.* any <ClLinks  term={"compiler"}><i>compiler</i></ClLinks> which *compiles source code* contained in a <ClLinks  term={"file"}><i>file</i></ClLinks>, producing a *compiled file* as output. The <DictionaryLink  term={"compile-file"}><b>compile-file</b></DictionaryLink> function is the only interface to such a <ClLinks  term={"compiler"}><i>compiler</i></ClLinks> provided by Common Lisp, but there might be other, <ClLinks  term={"implementation-defined"}><i>implementation-defined</i></ClLinks> mechanisms for invoking the *file compiler* . 



**file position** *n.* (in a <ClLinks  term={"stream"}><i>stream</i></ClLinks>) a non-negative *integer* that represents a position in the <ClLinks  term={"stream"}><i>stream</i></ClLinks>. Not all <ClLinks  term={"stream"}><i>streams</i></ClLinks> are able to represent the notion of *file position*; in the description of any <ClLinks  term={"operator"}><i>operator</i></ClLinks> which manipulates *file positions*, the behavior for <ClLinks  term={"stream"}><i>streams</i></ClLinks> that don’t have this notion must be explicitly stated. For *binary streams*, the *file position* represents the number of preceding <ClLinks  term={"byte"}><i>bytes</i></ClLinks> in the <ClLinks  term={"stream"}><i>stream</i></ClLinks>. For *character streams*, the constraint is more relaxed: *file positions* must increase monotonically, the amount of the increase between *file positions* corresponding to any two successive characters in the <ClLinks  term={"stream"}><i>stream</i></ClLinks> is <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. 



**file position designator** *n.* (in a <ClLinks  term={"stream"}><i>stream</i></ClLinks>) a <ClLinks  term={"designator"}><i>designator</i></ClLinks> for a *file position* in that <ClLinks  term={"stream"}><i>stream</i></ClLinks>; that is, the symbol :start (denoting 0, the first *file position* in that <ClLinks  term={"stream"}><i>stream</i></ClLinks>), the symbol :end (denoting the last *file position* in that <ClLinks  term={"stream"}><i>stream</i></ClLinks>; *i.e.*, the position 



following the last <ClLinks  term={"element"}><i>element</i></ClLinks> of the <ClLinks  term={"stream"}><i>stream</i></ClLinks>), or a *file position* (denoting itself). 



**file stream** *n.* an <ClLinks  term={"object"}><i>object</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"file-stream"}><b>file-stream</b></DictionaryLink>. 



**file system** *n.* a facility which permits aggregations of data to be stored in named <ClLinks  term={"file"}><i>files</i></ClLinks> on some medium that is external to the *Lisp image* and that therefore persists from <ClLinks  term={"session"}><i>session</i></ClLinks> to <ClLinks  term={"session"}><i>session</i></ClLinks>. 



**filename** *n.* a handle, not necessarily ever directly represented as an <ClLinks  term={"object"}><i>object</i></ClLinks>, that can be used to refer to a <ClLinks  term={"file"}><i>file</i></ClLinks> in a *file system*. *Pathnames* and <ClLinks  term={"namestring"}><i>namestrings</i></ClLinks> are two kinds of <ClLinks  term={"object"}><i>objects</i></ClLinks> that substitute for <ClLinks  term={"filename"}><i>filenames</i></ClLinks> in Common Lisp. 



**fill pointer** *n.* (of a <ClLinks  term={"vector"}><i>vector</i></ClLinks> ) an *integer* associated with a <ClLinks  term={"vector"}><i>vector</i></ClLinks> that represents the index above which no <ClLinks  term={"element"}><i>elements</i></ClLinks> are <ClLinks  term={"active"}><i>active</i></ClLinks>. (A *fill pointer* is a non-negative *integer* no larger than the total number of <ClLinks  term={"element"}><i>elements</i></ClLinks> in the <ClLinks  term={"vector"}><i>vector</i></ClLinks> . Not all <ClLinks  term={"vector"}><i>vectors</i></ClLinks> have *fill pointers*.) 



**finite** *adj.* (of a <ClLinks  term={"type"}><i>type</i></ClLinks>) having a finite number of <ClLinks  term={"element"}><i>elements</i></ClLinks>. “The type specifier 



(integer 0 5) denotes a finite type, but the type specifiers <DictionaryLink  term={"integer"}><b>integer</b></DictionaryLink> and (integer 0) do not.” 







 



 



<DictionaryLink  term={"fixnum"}><b>fixnum</b></DictionaryLink> *n.* an *integer* of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"fixnum"}><b>fixnum</b></DictionaryLink>. 



<DictionaryLink  term={"float"}><b>float</b></DictionaryLink> *n.* an <ClLinks  term={"object"}><i>object</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"float"}><b>float</b></DictionaryLink>. 



**for-value** *adj.* (of a <ClLinks  term={"reference"}><i>reference</i></ClLinks> to a <ClLinks  term={"binding"}><i>binding</i></ClLinks>) being a <ClLinks  term={"reference"}><i>reference</i></ClLinks> that <ClLinks  term={"read"}><i>reads</i></ClLinks><sub>1</sub> the <ClLinks  term={"value"}><i>value</i></ClLinks> of the <ClLinks  term={"binding"}><i>binding</i></ClLinks>. 



**form** *n.* 1. any <ClLinks  term={"object"}><i>object</i></ClLinks> meant to be *evaluated*. 2. a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>, a *compound form*, or a *self-evaluating object*. 3. (for an <ClLinks  term={"operator"}><i>operator</i></ClLinks> , as in “⟨operator ii form*”) a *compound form* having that <ClLinks  term={"operator"}><i>operator</i></ClLinks> as its first element. “A <DictionaryLink  term={"quote"}><b>quote</b></DictionaryLink> form is a constant form.” 



**formal argument** *n. Trad.* a <ClLinks  term={"parameter"}><i>parameter</i></ClLinks> . 



**formal parameter** *n. Trad.* a <ClLinks  term={"parameter"}><i>parameter</i></ClLinks> . 



<DictionaryLink  term={"format"}><b>format</b></DictionaryLink> *v.t.* (a *format control* and *format arguments*) to perform output as if by <DictionaryLink  term={"format"}><b>format</b></DictionaryLink>, using the *format string* and *format arguments*. 



**format argument** *n.* an <ClLinks  term={"object"}><i>object</i></ClLinks> which is used as data by functions such as <DictionaryLink  term={"format"}><b>format</b></DictionaryLink> which interpret *format controls*. 



**format control** *n.* a *format string*, or a <ClLinks  term={"function"}><i>function</i></ClLinks> that obeys the <ClLinks  term={"argument"}><i>argument</i></ClLinks> conventions for a <ClLinks  term={"function"}><i>function</i></ClLinks> returned by the <DictionaryLink  term={"formatter"}><b>formatter</b></DictionaryLink> <ClLinks  term={"macro"}><i>macro</i></ClLinks>. See Section 22.2.1.3 (Compiling Format Strings). 



**format directive** *n.* 1. a sequence of <ClLinks  term={"character"}><i>characters</i></ClLinks> in a *format string* which is introduced by a *tilde*, and which is specially interpreted by <ClLinks  term={"code"}><i>code</i></ClLinks> which processes *format strings* to mean that some special operation should be performed, possibly involving data supplied by the *format arguments* that accompanied the *format string*. See the 



<ClLinks  term={"function"}><i>function</i></ClLinks> <DictionaryLink  term={"format"}><b>format</b></DictionaryLink>. “In "&#126;D base 10 = &#126;8R", the character sequences ‘&#126;D’ and ‘&#126;8R’ are format directives.” 2. the conceptual category of all *format directives*<sub>1</sub> which use the same dispatch character. “Both "&#126;3d" and "&#126;3,’0D" are valid uses of the ‘&#126;D’ format directive.” 



**format string** *n.* a <ClLinks  term={"string"}><i>string</i></ClLinks> which can contain both ordinary text and *format directives*, and which is used in conjunction with *format arguments* to describe how text output should be formatted by certain functions, such as <DictionaryLink  term={"format"}><b>format</b></DictionaryLink>. 



**free declaration** *n.* a declaration that is not a *bound declaration*. See <DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink>. 



**fresh** *adj.* 1. (of an *object yielded* by a <ClLinks  term={"function"}><i>function</i></ClLinks>) having been newly-allocated by that <ClLinks  term={"function"}><i>function</i></ClLinks>. (The caller of a <ClLinks  term={"function"}><i>function</i></ClLinks> that returns a *fresh object* may freely modify the <ClLinks  term={"object"}><i>object</i></ClLinks> without fear that such modification will compromise the future correct behavior of that <ClLinks  term={"function"}><i>function</i></ClLinks>.) 2. (of a <ClLinks  term={"binding"}><i>binding</i></ClLinks> for a <ClLinks  term={"name"}><i>name</i></ClLinks>) newly-allocated; not shared with other <ClLinks  term={"binding"}><i>bindings</i></ClLinks> for that <ClLinks  term={"name"}><i>name</i></ClLinks>. 







 



 



**freshline** *n.* a conceptual operation on a <ClLinks  term={"stream"}><i>stream</i></ClLinks>, implemented by the <ClLinks  term={"function"}><i>function</i></ClLinks> 



<DictionaryLink  term={"fresh-line"}><b>fresh-line</b></DictionaryLink> and by the *format directive* &#126;&amp;, which advances the display position to the beginning of the next line (as if a <ClLinks  term={"newline"}><i>newline</i></ClLinks> had been typed, or the <ClLinks  term={"function"}><i>function</i></ClLinks> <DictionaryLink  term={"terpri"}><b>terpri</b></DictionaryLink> had been called) unless the <ClLinks  term={"stream"}><i>stream</i></ClLinks> is already known to be positioned at the beginning of a line. Unlike <ClLinks  term={"newline"}><i>newline</i></ClLinks>, <ClLinks  term={"freshline"}><i>freshline</i></ClLinks> is not a <ClLinks  term={"character"}><i>character</i></ClLinks> . 



**funbound** [ **efunba\_und** ] *n.* (of a *function name*) not <ClLinks  term={"fbound"}><i>fbound</i></ClLinks>. 



<DictionaryLink  term={"function"}><b>function</b></DictionaryLink> *n.* 1. an <ClLinks  term={"object"}><i>object</i></ClLinks> representing code, which can be *called* with zero or more <ClLinks  term={"argument"}><i>arguments</i></ClLinks>, and which produces zero or more <ClLinks  term={"value"}><i>values</i></ClLinks>. 2. an <ClLinks  term={"object"}><i>object</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"function"}><b>function</b></DictionaryLink>. 



**function block name** *n.* (of a *function name*) The <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> that would be used as the name of an *implicit block* which surrounds the body of a <ClLinks  term={"function"}><i>function</i></ClLinks> having that *function name*. If the *function name* is a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>, its *function block name* is the *function name* itself. If the *function name* is a <ClLinks  term={"list"}><i>list</i></ClLinks> whose <ClLinks  term={"car"}><i>car</i></ClLinks> is <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> and whose <ClLinks  term={"cadr"}><i>cadr</i></ClLinks> is a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>, 



its *function block name* is the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> that is the <ClLinks  term={"cadr"}><i>cadr</i></ClLinks> of the *function name*. An <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> which supports additional kinds of *function names* must specify for each how the corresponding *function block name* is computed. 



**function cell** *n. Trad.* (of a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>) The <ClLinks  term={"place"}><i>place</i></ClLinks> which holds the *definition* of the global *function binding*, if any, named by that <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>, and which is *accessed* by <DictionaryLink  term={"symbol-function"}><b>symbol-function</b></DictionaryLink>. See <ClLinks  term={"cell"}><i>cell</i></ClLinks>. 



**function designator** *n.* a <ClLinks  term={"designator"}><i>designator</i></ClLinks> for a <ClLinks  term={"function"}><i>function</i></ClLinks>; that is, an <ClLinks  term={"object"}><i>object</i></ClLinks> that denotes a <ClLinks  term={"function"}><i>function</i></ClLinks> and that is one of: a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> (denoting the <ClLinks  term={"function"}><i>function</i></ClLinks> named by that <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> in the *global environment*), or a <ClLinks  term={"function"}><i>function</i></ClLinks> (denoting itself). The consequences are undefined if a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is used as a *function designator* but it does not have a global definition as a <ClLinks  term={"function"}><i>function</i></ClLinks>, or it has a global definition as a <ClLinks  term={"macro"}><i>macro</i></ClLinks> or a *special form*. See also *extended function designator* . 



**function form** *n.* a <ClLinks  term={"form"}><i>form</i></ClLinks> that is a <ClLinks  term={"list"}><i>list</i></ClLinks> and that has a first element which is the <ClLinks  term={"name"}><i>name</i></ClLinks> of a <ClLinks  term={"function"}><i>function</i></ClLinks> to be called on <ClLinks  term={"argument"}><i>arguments</i></ClLinks> which are the result of *evaluating* subsequent elements of the *function form*. 



**function name** *n.* 1. (in an <ClLinks  term={"environment"}><i>environment</i></ClLinks>) A <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> or a <ClLinks  term={"list"}><i>list</i></ClLinks> (setf <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>) that is the <ClLinks  term={"name"}><i>name</i></ClLinks> of a <ClLinks  term={"function"}><i>function</i></ClLinks> in that <ClLinks  term={"environment"}><i>environment</i></ClLinks>. 2. A <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> or a <ClLinks  term={"list"}><i>list</i></ClLinks> (setf <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>). 



**functional evaluation** *n.* the process of extracting a <GlossaryTerm styled={true} term={"functional value"}><i>functional value</i></GlossaryTerm> from a <GlossaryTerm styled={true} term={"function name"}><i>function name</i></GlossaryTerm> or a <GlossaryTerm styled={true} term={"lambda expression"}><i>lambda expression</i></GlossaryTerm>. The evaluator performs <GlossaryTerm styled={true} term={"functional evaluation"}><i>functional evaluation</i></GlossaryTerm> implicitly when it encounters a <GlossaryTerm styled={true} term={"function name"}><i>function name</i></GlossaryTerm> or a <GlossaryTerm styled={true} term={"lambda expression"}><i>lambda expression</i></GlossaryTerm> in the <ClLinks  term={"car"}><i>car</i></ClLinks> of a <GlossaryTerm styled={true} term={"compound form"}><i>compound form</i></GlossaryTerm>, or explicitly when it encounters a <DictionaryLink  term={"function"}><b>function</b></DictionaryLink> <GlossaryTerm styled={true} term={"special form"}><i>special form</i></GlossaryTerm>. Neither a use of a 



<ClLinks  term={"symbol"}><i>symbol</i></ClLinks> as a <GlossaryTerm styled={true} term={"function designator"}><i>function designator</i></GlossaryTerm> nor a use of the <ClLinks  term={"function"}><i>function</i></ClLinks> <DictionaryLink  term={"symbol-function"}><b>symbol-function</b></DictionaryLink> to extract the <GlossaryTerm styled={true} term={"functional value"}><i>functional value</i></GlossaryTerm> of a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is considered a <GlossaryTerm styled={true} term={"functional evaluation"}><i>functional evaluation</i></GlossaryTerm>. 



**functional value** *n.* 1. (of a *function name N* in an *environment E*) The <ClLinks  term={"value"}><i>value</i></ClLinks> of the <ClLinks  term={"binding"}><i>binding</i></ClLinks> named *N* in the *function namespace* for *environment E*; that is, the 







 



 



contents of the <GlossaryTerm styled={true} term={"function cell"}><i>function cell</i></GlossaryTerm> named *N* in *environment E*. 2. (of an *fbound symbol S*) the contents of the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>’s <GlossaryTerm styled={true} term={"function cell"}><i>function cell</i></GlossaryTerm>; that is, the <ClLinks  term={"value"}><i>value</i></ClLinks> of the <ClLinks  term={"binding"}><i>binding</i></ClLinks> named *S* in the *function namespace* of the <GlossaryTerm styled={true} term={"global environment"}><i>global environment</i></GlossaryTerm>. (A <ClLinks  term={"name"}><i>name</i></ClLinks> that is a <GlossaryTerm styled={true} term={"macro name"}><i>macro name</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"global environment"}><i>global environment</i></GlossaryTerm> or is a <GlossaryTerm styled={true} term={"special operator"}><i>special operator</i></GlossaryTerm> might or might not be <ClLinks  term={"fbound"}><i>fbound</i></ClLinks>. But if *S* is such a <ClLinks  term={"name"}><i>name</i></ClLinks> and is <ClLinks  term={"fbound"}><i>fbound</i></ClLinks>, the specific nature of its <GlossaryTerm styled={true} term={"functional value"}><i>functional value</i></GlossaryTerm> is <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>; in particular, it might or might not be a <ClLinks  term={"function"}><i>function</i></ClLinks>.) 



**further compilation** *n. implementation-dependent* compilation beyond <GlossaryTerm styled={true} term={"minimal compilation"}><i>minimal compilation</i></GlossaryTerm>. Further compilation is permitted to take place at <GlossaryTerm styled={true} term={"run time"}><i>run time</i></GlossaryTerm>. “Block compilation and generation of machine-specific instructions are examples of further compilation.” 




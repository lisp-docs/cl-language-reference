---
title: E
sidebar_position: 101
---

**E** 



**echo stream** *n.* a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"echo-stream"}><b>echo-stream</b></ClLinks>. 



**effective method** *n.* the combination of *applicable methods* that are executed when a *generic function* is invoked with a particular sequence of <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks>. 



**element** *n.* 1. (of a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>) an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that is the <ClLinks styled={true} term={"car"}><i>car</i></ClLinks> of one of the *conses* that comprise the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>. 2. (of an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>) an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that is stored in the <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>. 3. (of a *sequence*) an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that is an <ClLinks styled={true} term={"element"}><i>element</i></ClLinks> of the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> or <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> that is the *sequence*. 4. (of a <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>) an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that is a member of the set of <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> designated by the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>. 5. (of an <ClLinks styled={true} term={"input"}><i>input</i></ClLinks> 



<ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>) a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> or <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> (as appropriate to the *element type* of the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>) that is among the ordered series of <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> that can be read from the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> (using <ClLinks styled={true} term={"read-char"}><b>read-char</b></ClLinks> or <ClLinks styled={true} term={"read-byte"}><b>read-byte</b></ClLinks>, as appropriate to the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>). 6. (of an *output stream*) a 



<ClLinks styled={true} term={"character"}><i>character</i></ClLinks> or <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> (as appropriate to the *element type* of the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>) that is among the ordered series of <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> that has been or will be written to the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> (using <ClLinks styled={true} term={"write-char"}><b>write-char</b></ClLinks> or <ClLinks styled={true} term={"write-byte"}><b>write-byte</b></ClLinks>, as appropriate to the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>). 7. (of a <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>) a *generalized instance* of the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>. 



**element type** *n.* 1. (of an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>) the *array element type* of the <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>. 2. (of a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>) the *stream element type* of the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>. 



**em** *n. Trad.* a context-dependent unit of measure commonly used in typesetting, equal to the displayed width of of a letter “M” in the current font. (The letter “M” is traditionally chosen because it is typically represented by the widest <ClLinks styled={true} term={"glyph"}><i>glyph</i></ClLinks> in the font, and other characters’ widths are typically fractions of an <ClLinks styled={true} term={"em"}><i>em</i></ClLinks>. In implementations providing non-Roman characters with wider characters than “M,” it is permissible for another character to be the <ClLinks styled={true} term={"implementation-defined"}><i>implementation-defined</i></ClLinks> reference character for this measure, and for “M” to be only a fraction of an <ClLinks styled={true} term={"em"}><i>em</i></ClLinks> wide.) In a fixed width font, a line with *n* characters is *n ems* wide; in a variable width font, *n ems* is the expected upper bound on the width of such a line. 



**empty list** *n.* the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> containing no <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks>. See *()*. 



**empty type** *n.* the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> that contains no <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks>, and that is a <ClLinks styled={true} term={"subtype"}><i>subtype</i></ClLinks> of all <ClLinks styled={true} term={"type"}><i>types</i></ClLinks> (including itself). See <ClLinks styled={true} term={"nil"}><i>nil</i></ClLinks>. 



**end of file** *n.* 1. the point in an *input stream* beyond which there is no further data. Whether or not there is such a point on an *interactive stream* is *implementation defined*. 2. a <ClLinks styled={true} term={"situation"}><i>situation</i></ClLinks> that occurs upon an attempt to obtain data from an *input stream* that is at the *end of file*<sub>1</sub>. 







 



 



**environment** *n.* 1. a set of <ClLinks styled={true} term={"binding"}><i>bindings</i></ClLinks>. See Section 3.1.1 (Introduction to Environments). 2. an *environment object*. “<ClLinks styled={true} term={"macroexpand"}><b>macroexpand</b></ClLinks> takes an optional environment argument.” 



**environment object** *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> representing a set of *lexical bindings*, used in the processing of a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> to provide meanings for <ClLinks styled={true} term={"name"}><i>names</i></ClLinks> within that <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. “<ClLinks styled={true} term={"macroexpand"}><b>macroexpand</b></ClLinks> takes an optional environment argument.” (The <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> when used as an *environment object* denotes the *null lexical environment*; the <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> of *environment parameters* to *macro functions* are <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> of <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> nature which represent the <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks><sub>1</sub> in which the corresponding *macro form* is to be expanded.) See Section 3.1.1.4 (Environment Objects). 



**environment parameter** *n.* A <ClLinks styled={true} term={"parameter"}><i>parameter</i></ClLinks> in a *defining form f* for which there is no corresponding <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks>; instead, this <ClLinks styled={true} term={"parameter"}><i>parameter</i></ClLinks> receives as its value an *environment object* which corresponds to the *lexical environment* in which the *defining form f* appeared. 



<ClLinks styled={true} term={"error"}><b>error</b></ClLinks> *n.* 1. (only in the phrase “is an error”) a <ClLinks styled={true} term={"situation"}><i>situation</i></ClLinks> in which the semantics of a program are not specified, and in which the consequences are undefined. 2. a <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> which represents an *error situation*. See Section 1.4.2 (Error Terminology). 3. an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"error"}><b>error</b></ClLinks>. 



**error output** *n.* the *output stream* which is the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of the *dynamic variable* 



**\*error-output\***. 



**escape** *n.*, *adj.* 1. *n.* a *single escape* or a *multiple escape*. 2. *adj. single escape* or *multiple escape*. 



**establish** *v.t.* to build or bring into being a <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks>, a <ClLinks styled={true} term={"declaration"}><i>declaration</i></ClLinks>, an *exit point*, a <ClLinks styled={true} term={"tag"}><i>tag</i></ClLinks>, a <ClLinks styled={true} term={"handler"}><i>handler</i></ClLinks> , a <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks>, or an <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks>. “<ClLinks styled={true} term={"let"}><b>let</b></ClLinks> establishes lexical bindings.” 



**evaluate** *v.t.* (a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> or an *implicit progn*) to <ClLinks styled={true} term={"execute"}><i>execute</i></ClLinks> the <ClLinks styled={true} term={"code"}><i>code</i></ClLinks> represented by the <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> (or the series of <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> making up the *implicit progn*) by applying the rules of <ClLinks styled={true} term={"evaluation"}><i>evaluation</i></ClLinks>, returning zero or more values. 



**evaluation** *n.* a model whereby <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> are *executed*, returning zero or more values. Such execution might be implemented directly in one step by an interpreter or in two steps by first *compiling* the <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> and then *executing* the *compiled code*; this choice is dependent both on context and the nature of the <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks>, but in any case is not in general detectable by any program. The evaluation model is designed in such a way that a *conforming implementation* might legitimately have only a compiler and no interpreter, or vice versa. See Section 3.1.2 (The Evaluation Model). 



**evaluation environment** *n.* a *run-time environment* in which macro expanders and code specified by <ClLinks styled={true} term={"eval-when"}><b>eval-when</b></ClLinks> to be evaluated are evaluated. All evaluations initiated by the <ClLinks styled={true} term={"compiler"}><i>compiler</i></ClLinks> take place in the *evaluation environment*. 







 



 



**execute** *v.t. Trad.* (<ClLinks styled={true} term={"code"}><i>code</i></ClLinks>) to perform the imperative actions represented by the <ClLinks styled={true} term={"code"}><i>code</i></ClLinks>. **execution time** *n.* the duration of time that *compiled code* is being *executed*. 



**exhaustive partition** *n.* (of a <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>) a set of *pairwise disjoint types* that form an *exhaustive union*. 



**exhaustive union** *n.* (of a <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>) a set of <ClLinks styled={true} term={"subtype"}><i>subtypes</i></ClLinks> of the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>, whose union contains all <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks> of that <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>. 



**exit point** *n.* a point in a *control form* from which (*e.g.*, <ClLinks styled={true} term={"block"}><b>block</b></ClLinks>), through which (*e.g.*, <ClLinks styled={true} term={"unwind-protect"}><b>unwind-protect</b></ClLinks>), or to which (*e.g.*, <ClLinks styled={true} term={"tagbody"}><b>tagbody</b></ClLinks>) control and possibly <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> can be transferred both actively by using another *control form* and passively through the normal control and data flow of <ClLinks styled={true} term={"evaluation"}><i>evaluation</i></ClLinks>. “<ClLinks styled={true} term={"catch"}><b>catch</b></ClLinks> and <ClLinks styled={true} term={"block"}><b>block</b></ClLinks> establish bindings for exit points to which <ClLinks styled={true} term={"throw"}><b>throw</b></ClLinks> and <ClLinks styled={true} term={"return-from"}><b>return-from</b></ClLinks>, respectively, can transfer control and values; <ClLinks styled={true} term={"tagbody"}><b>tagbody</b></ClLinks> establishes a binding for an exit point with lexical extent to which <ClLinks styled={true} term={"go"}><b>go</b></ClLinks> can transfer control; and <ClLinks styled={true} term={"unwind-protect"}><b>unwind-protect</b></ClLinks> establishes an exit point through which control might be transferred by operators such as <ClLinks styled={true} term={"throw"}><b>throw</b></ClLinks>, <ClLinks styled={true} term={"return-from"}><b>return-from</b></ClLinks>, and <ClLinks styled={true} term={"go"}><b>go</b></ClLinks>.” 



**explicit return** *n.* the act of transferring control (and possibly <ClLinks styled={true} term={"value"}><i>values</i></ClLinks>) to a <ClLinks styled={true} term={"block"}><i>block</i></ClLinks> by using <ClLinks styled={true} term={"return-from"}><b>return-from</b></ClLinks> (or <ClLinks styled={true} term={"return"}><b>return</b></ClLinks>). 



**explicit use** *n.* (of a *variable V* in a *form F*) a reference to *V* that is directly apparent in the normal semantics of *F*; *i.e.*, that does not expose any undocumented details of the *macro expansion* of the <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> itself. References to *V* exposed by expanding <ClLinks styled={true} term={"subform"}><i>subforms</i></ClLinks> of *F* are, however, considered to be *explicit uses* of *V* . 



**exponent marker** *n.* a character that is used in the textual notation for a <ClLinks styled={true} term={"float"}><i>float</i></ClLinks> to separate the mantissa from the exponent. The characters defined as *exponent markers* in the *standard readtable* are shown in Figure 26–1. For more information, see Section 2.1 (Character Syntax). “The exponent marker ‘d’ in ‘3.0d7’ indicates that this 



number is to be represented as a double float.” 



|**Marker Meaning**|

| :- |

|<p>D or d <ClLinks styled={true} term={"double-float"}><b>double-float</b></ClLinks> </p><p>E or e <ClLinks styled={true} term={"float"}><b>float</b></ClLinks> (see <ClLinks styled={true} term={"read-default-float-format"}><b>\*read-default-float-format\*</b></ClLinks>) </p><p>F or f <ClLinks styled={true} term={"single-float"}><b>single-float</b></ClLinks> </p><p>L or l <ClLinks styled={true} term={"long-float"}><b>long-float</b></ClLinks> </p><p>S or s <ClLinks styled={true} term={"short-float"}><b>short-float</b></ClLinks></p>|





**Figure 26–1. Exponent Markers** 



<ClLinks styled={true} term={"export"}><b>export</b></ClLinks> *v.t.* (a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> in a <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>) to add the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> to the list of *external symbols* of the <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. 







 



 



**exported** *adj.* (of a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> in a <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>) being an *external symbol* of the <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. 



**expressed adjustability** *n.* (of an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>) a *generalized boolean* that is conceptually (but not necessarily actually) associated with the <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>, representing whether the <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> is *expressly adjustable*. See also *actual adjustability*. 



**expressed array element type** *n.* (of an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>) the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> which is the *array element type* implied by a *type declaration* for the <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>, or which is the requested <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> 



*element type* at its time of creation, prior to any selection of an *upgraded array element type*. (Common Lisp does not provide a way of detecting this <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> directly at run time, but an <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> is permitted to make assumptions about the <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>’s contents and the operations which may be performed on the <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> when this <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> is noted during code analysis, even if those assumptions would not be valid in general for the *upgraded array element type* of the *expressed array element type*.) 



**expressed complex part type** *n.* (of a <ClLinks styled={true} term={"complex"}><i>complex</i></ClLinks> ) the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> which is implied as the *complex part type* by a *type declaration* for the <ClLinks styled={true} term={"complex"}><i>complex</i></ClLinks> , or which is the requested *complex part type* at its time of creation, prior to any selection of an *upgraded complex part type*. (Common Lisp does not provide a way of detecting this <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> directly at run time, but an <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> is permitted to make assumptions about the operations which may be performed on the <ClLinks styled={true} term={"complex"}><i>complex</i></ClLinks> when this <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> is noted during code analysis, even if those assumptions would not be valid in general for the *upgraded complex part type* of the *expressed complex part type*.) 



**expression** *n.* 1. an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>, often used to emphasize the use of the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> to encode or represent information in a specialized format, such as program text. “The second expression in a <ClLinks styled={true} term={"let"}><b>let</b></ClLinks> form is a list of bindings.” 2. the textual notation used to notate an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> in a source file. “The expression ’sample is equivalent to (quote sample).” 



**expressly adjustable** *adj.* (of an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>) being *actually adjustable* by virtue of an explicit request for this characteristic having been made at the time of its creation. All <ClLinks styled={true} term={"array"}><i>arrays</i></ClLinks> that are *expressly adjustable* are *actually adjustable*, but not necessarily vice versa. 



**extended character** *n.* a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"extended-char"}><b>extended-char</b></ClLinks>: a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> that is not a *base character* . 



**extended function designator** *n.* a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>; that is, an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that denotes a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> and that is one of: a *function name* (denoting the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> it names in the *global environment*), or a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> (denoting itself). The consequences are undefined if a *function name* is used as an *extended function designator* but it does not have a global definition as a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>, or if it is a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> that has a global definition as a <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks> or a *special form*. See also *function designator* . 



**extended lambda list** *n.* a list resembling an *ordinary lambda list* in form and 







 



 



purpose, but offering additional syntax or functionality not available in an *ordinary lambda list*. “<ClLinks styled={true} term={"defmacro"}><b>defmacro</b></ClLinks> uses extended lambda lists.” 



**extension** *n.* a facility in an <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> of Common Lisp that is not specified by this standard. 



**extent** *n.* the interval of time during which a <ClLinks styled={true} term={"reference"}><i>reference</i></ClLinks> to an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>, a <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks>, an *exit point*, a <ClLinks styled={true} term={"tag"}><i>tag</i></ClLinks>, a <ClLinks styled={true} term={"handler"}><i>handler</i></ClLinks> , a <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks>, or an <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks> is defined. 



**external file format** *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> of <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> nature which 



determines one of possibly several <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> ways in which <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks> are encoded externally in a *character file*. 



**external file format designator** *n.* a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for an *external file format*; that is, an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that denotes an *external file format* and that is one of: the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> 



:default (denoting an <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> default *external file format* that can accomodate at least the *base characters*), some other <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> defined by the 



<ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> to be an *external file format designator* (denoting an *implementation defined external file format*), or some other <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> defined by the <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> to be an *external file format* (denoting itself). 



**external symbol** *n.* (of a <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>) a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> that is part of the ‘external interface’ to the <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> and that are *inherited* <sub>3</sub> by any other <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> that <ClLinks styled={true} term={"use"}><i>uses</i></ClLinks> the <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. When using the *Lisp reader* , if a *package prefix* is used, the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> of an *external symbol* is separated from the *package name* by a single *package marker* while the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> of an *internal symbol* is separated from the *package name* by a double *package marker* ; see Section 2.3.4 (Symbols as Tokens). 



**externalizable object** *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that can be used as a *literal object* in <ClLinks styled={true} term={"code"}><i>code</i></ClLinks> to be processed by the *file compiler* . 




---
title: E
sidebar_position: 101
---

**E** 



**echo stream** *n.* a <ClLinks  term={"stream"}><i>stream</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"echo-stream"}><b>echo-stream</b></DictionaryLink>. 



**effective method** *n.* the combination of <GlossaryTerm styled={true} term={"applicable method"}><i>applicable methods</i></GlossaryTerm> that are executed when a <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> is invoked with a particular sequence of <ClLinks  term={"argument"}><i>arguments</i></ClLinks>. 



**element** *n.* 1. (of a <ClLinks  term={"list"}><i>list</i></ClLinks>) an <ClLinks  term={"object"}><i>object</i></ClLinks> that is the <ClLinks  term={"car"}><i>car</i></ClLinks> of one of the *conses* that comprise the <ClLinks  term={"list"}><i>list</i></ClLinks>. 2. (of an <ClLinks  term={"array"}><i>array</i></ClLinks>) an <ClLinks  term={"object"}><i>object</i></ClLinks> that is stored in the <ClLinks  term={"array"}><i>array</i></ClLinks>. 3. (of a *sequence*) an <ClLinks  term={"object"}><i>object</i></ClLinks> that is an <ClLinks  term={"element"}><i>element</i></ClLinks> of the <ClLinks  term={"list"}><i>list</i></ClLinks> or <ClLinks  term={"array"}><i>array</i></ClLinks> that is the *sequence*. 4. (of a <ClLinks  term={"type"}><i>type</i></ClLinks>) an <ClLinks  term={"object"}><i>object</i></ClLinks> that is a member of the set of <ClLinks  term={"object"}><i>objects</i></ClLinks> designated by the <ClLinks  term={"type"}><i>type</i></ClLinks>. 5. (of an <ClLinks  term={"input"}><i>input</i></ClLinks> 



<ClLinks  term={"stream"}><i>stream</i></ClLinks>) a <ClLinks  term={"character"}><i>character</i></ClLinks> or <ClLinks  term={"number"}><i>number</i></ClLinks> (as appropriate to the <GlossaryTerm styled={true} term={"element type"}><i>element type</i></GlossaryTerm> of the <ClLinks  term={"stream"}><i>stream</i></ClLinks>) that is among the ordered series of <ClLinks  term={"object"}><i>objects</i></ClLinks> that can be read from the <ClLinks  term={"stream"}><i>stream</i></ClLinks> (using <DictionaryLink  term={"read-char"}><b>read-char</b></DictionaryLink> or <DictionaryLink  term={"read-byte"}><b>read-byte</b></DictionaryLink>, as appropriate to the <ClLinks  term={"stream"}><i>stream</i></ClLinks>). 6. (of an *output stream*) a 



<ClLinks  term={"character"}><i>character</i></ClLinks> or <ClLinks  term={"number"}><i>number</i></ClLinks> (as appropriate to the <GlossaryTerm styled={true} term={"element type"}><i>element type</i></GlossaryTerm> of the <ClLinks  term={"stream"}><i>stream</i></ClLinks>) that is among the ordered series of <ClLinks  term={"object"}><i>objects</i></ClLinks> that has been or will be written to the <ClLinks  term={"stream"}><i>stream</i></ClLinks> (using <DictionaryLink  term={"write-char"}><b>write-char</b></DictionaryLink> or <DictionaryLink  term={"write-byte"}><b>write-byte</b></DictionaryLink>, as appropriate to the <ClLinks  term={"stream"}><i>stream</i></ClLinks>). 7. (of a <ClLinks  term={"class"}><i>class</i></ClLinks>) a <GlossaryTerm styled={true} term={"generalized instance"}><i>generalized instance</i></GlossaryTerm> of the <ClLinks  term={"class"}><i>class</i></ClLinks>. 



**element type** *n.* 1. (of an <ClLinks  term={"array"}><i>array</i></ClLinks>) the <GlossaryTerm styled={true} term={"array element type"}><i>array element type</i></GlossaryTerm> of the <ClLinks  term={"array"}><i>array</i></ClLinks>. 2. (of a <ClLinks  term={"stream"}><i>stream</i></ClLinks>) the <GlossaryTerm styled={true} term={"stream element type"}><i>stream element type</i></GlossaryTerm> of the <ClLinks  term={"stream"}><i>stream</i></ClLinks>. 



**em** *n. Trad.* a context-dependent unit of measure commonly used in typesetting, equal to the displayed width of of a letter “M” in the current font. (The letter “M” is traditionally chosen because it is typically represented by the widest <ClLinks  term={"glyph"}><i>glyph</i></ClLinks> in the font, and other characters’ widths are typically fractions of an <ClLinks  term={"em"}><i>em</i></ClLinks>. In implementations providing non-Roman characters with wider characters than “M,” it is permissible for another character to be the <ClLinks  term={"implementation-defined"}><i>implementation-defined</i></ClLinks> reference character for this measure, and for “M” to be only a fraction of an <ClLinks  term={"em"}><i>em</i></ClLinks> wide.) In a fixed width font, a line with *n* characters is *n ems* wide; in a variable width font, *n ems* is the expected upper bound on the width of such a line. 



**empty list** *n.* the <ClLinks  term={"list"}><i>list</i></ClLinks> containing no <ClLinks  term={"element"}><i>elements</i></ClLinks>. See *()*. 



**empty type** *n.* the <ClLinks  term={"type"}><i>type</i></ClLinks> that contains no <ClLinks  term={"element"}><i>elements</i></ClLinks>, and that is a <ClLinks  term={"subtype"}><i>subtype</i></ClLinks> of all <ClLinks  term={"type"}><i>types</i></ClLinks> (including itself). See <ClLinks  term={"nil"}><i>nil</i></ClLinks>. 



**end of file** *n.* 1. the point in an *input stream* beyond which there is no further data. Whether or not there is such a point on an <GlossaryTerm styled={true} term={"interactive stream"}><i>interactive stream</i></GlossaryTerm> is *implementation defined*. 2. a <ClLinks  term={"situation"}><i>situation</i></ClLinks> that occurs upon an attempt to obtain data from an *input stream* that is at the <GlossaryTerm styled={true} term={"end of file"}><i>end of file</i></GlossaryTerm><sub>1</sub>. 







 



 



**environment** *n.* 1. a set of <ClLinks  term={"binding"}><i>bindings</i></ClLinks>. See Section 3.1.1 (Introduction to Environments). 2. an <GlossaryTerm styled={true} term={"environment object"}><i>environment object</i></GlossaryTerm>. “<DictionaryLink  term={"macroexpand"}><b>macroexpand</b></DictionaryLink> takes an optional environment argument.” 



**environment object** *n.* an <ClLinks  term={"object"}><i>object</i></ClLinks> representing a set of <GlossaryTerm styled={true} term={"lexical binding"}><i>lexical bindings</i></GlossaryTerm>, used in the processing of a <ClLinks  term={"form"}><i>form</i></ClLinks> to provide meanings for <ClLinks  term={"name"}><i>names</i></ClLinks> within that <ClLinks  term={"form"}><i>form</i></ClLinks>. “<DictionaryLink  term={"macroexpand"}><b>macroexpand</b></DictionaryLink> takes an optional environment argument.” (The <ClLinks  term={"object"}><i>object</i></ClLinks> <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> when used as an <GlossaryTerm styled={true} term={"environment object"}><i>environment object</i></GlossaryTerm> denotes the <GlossaryTerm styled={true} term={"null lexical environment"}><i>null lexical environment</i></GlossaryTerm>; the <ClLinks  term={"value"}><i>values</i></ClLinks> of <GlossaryTerm styled={true} term={"environment parameter"}><i>environment parameters</i></GlossaryTerm> to <GlossaryTerm styled={true} term={"macro function"}><i>macro functions</i></GlossaryTerm> are <ClLinks  term={"object"}><i>objects</i></ClLinks> of <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> nature which represent the <ClLinks  term={"environment"}><i>environment</i></ClLinks><sub>1</sub> in which the corresponding <GlossaryTerm styled={true} term={"macro form"}><i>macro form</i></GlossaryTerm> is to be expanded.) See Section 3.1.1.4 (Environment Objects). 



**environment parameter** *n.* A <ClLinks  term={"parameter"}><i>parameter</i></ClLinks> in a *defining form f* for which there is no corresponding <ClLinks  term={"argument"}><i>argument</i></ClLinks>; instead, this <ClLinks  term={"parameter"}><i>parameter</i></ClLinks> receives as its value an <GlossaryTerm styled={true} term={"environment object"}><i>environment object</i></GlossaryTerm> which corresponds to the <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm> in which the *defining form f* appeared. 



<DictionaryLink  term={"error"}><b>error</b></DictionaryLink> *n.* 1. (only in the phrase “is an error”) a <ClLinks  term={"situation"}><i>situation</i></ClLinks> in which the semantics of a program are not specified, and in which the consequences are undefined. 2. a <ClLinks  term={"condition"}><i>condition</i></ClLinks> which represents an *error situation*. See Section 1.4.2 (Error Terminology). 3. an <ClLinks  term={"object"}><i>object</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"error"}><b>error</b></DictionaryLink>. 



**error output** *n.* the *output stream* which is the <ClLinks  term={"value"}><i>value</i></ClLinks> of the <GlossaryTerm styled={true} term={"dynamic variable"}><i>dynamic variable</i></GlossaryTerm> 



**\*error-output\***. 



**escape** *n.*, *adj.* 1. *n.* a <GlossaryTerm styled={true} term={"single escape"}><i>single escape</i></GlossaryTerm> or a <GlossaryTerm styled={true} term={"multiple escape"}><i>multiple escape</i></GlossaryTerm>. 2. *adj. single escape* or <GlossaryTerm styled={true} term={"multiple escape"}><i>multiple escape</i></GlossaryTerm>. 



**establish** *v.t.* to build or bring into being a <ClLinks  term={"binding"}><i>binding</i></ClLinks>, a <ClLinks  term={"declaration"}><i>declaration</i></ClLinks>, an <GlossaryTerm styled={true} term={"exit point"}><i>exit point</i></GlossaryTerm>, a <ClLinks  term={"tag"}><i>tag</i></ClLinks>, a <ClLinks  term={"handler"}><i>handler</i></ClLinks> , a <ClLinks  term={"restart"}><i>restart</i></ClLinks>, or an <ClLinks  term={"environment"}><i>environment</i></ClLinks>. “<DictionaryLink  term={"let"}><b>let</b></DictionaryLink> establishes lexical bindings.” 



**evaluate** *v.t.* (a <ClLinks  term={"form"}><i>form</i></ClLinks> or an <GlossaryTerm styled={true} term={"implicit progn"}><i>implicit progn</i></GlossaryTerm>) to <ClLinks  term={"execute"}><i>execute</i></ClLinks> the <ClLinks  term={"code"}><i>code</i></ClLinks> represented by the <ClLinks  term={"form"}><i>form</i></ClLinks> (or the series of <ClLinks  term={"form"}><i>forms</i></ClLinks> making up the <GlossaryTerm styled={true} term={"implicit progn"}><i>implicit progn</i></GlossaryTerm>) by applying the rules of <ClLinks  term={"evaluation"}><i>evaluation</i></ClLinks>, returning zero or more values. 



**evaluation** *n.* a model whereby <ClLinks  term={"form"}><i>forms</i></ClLinks> are *executed*, returning zero or more values. Such execution might be implemented directly in one step by an interpreter or in two steps by first *compiling* the <ClLinks  term={"form"}><i>form</i></ClLinks> and then *executing* the <GlossaryTerm styled={true} term={"compiled code"}><i>compiled code</i></GlossaryTerm>; this choice is dependent both on context and the nature of the <ClLinks  term={"implementation"}><i>implementation</i></ClLinks>, but in any case is not in general detectable by any program. The evaluation model is designed in such a way that a <GlossaryTerm styled={true} term={"conforming implementation"}><i>conforming implementation</i></GlossaryTerm> might legitimately have only a compiler and no interpreter, or vice versa. See Section 3.1.2 (The Evaluation Model). 



**evaluation environment** *n.* a <GlossaryTerm styled={true} term={"run-time environment"}><i>run-time environment</i></GlossaryTerm> in which macro expanders and code specified by <DictionaryLink  term={"eval-when"}><b>eval-when</b></DictionaryLink> to be evaluated are evaluated. All evaluations initiated by the <ClLinks  term={"compiler"}><i>compiler</i></ClLinks> take place in the <GlossaryTerm styled={true} term={"evaluation environment"}><i>evaluation environment</i></GlossaryTerm>. 







 



 



**execute** *v.t. Trad.* (<ClLinks  term={"code"}><i>code</i></ClLinks>) to perform the imperative actions represented by the <ClLinks  term={"code"}><i>code</i></ClLinks>. **execution time** *n.* the duration of time that <GlossaryTerm styled={true} term={"compiled code"}><i>compiled code</i></GlossaryTerm> is being *executed*. 



**exhaustive partition** *n.* (of a <ClLinks  term={"type"}><i>type</i></ClLinks>) a set of *pairwise disjoint types* that form an <GlossaryTerm styled={true} term={"exhaustive union"}><i>exhaustive union</i></GlossaryTerm>. 



**exhaustive union** *n.* (of a <ClLinks  term={"type"}><i>type</i></ClLinks>) a set of <ClLinks  term={"subtype"}><i>subtypes</i></ClLinks> of the <ClLinks  term={"type"}><i>type</i></ClLinks>, whose union contains all <ClLinks  term={"element"}><i>elements</i></ClLinks> of that <ClLinks  term={"type"}><i>type</i></ClLinks>. 



**exit point** *n.* a point in a <GlossaryTerm styled={true} term={"control form"}><i>control form</i></GlossaryTerm> from which (*e.g.*, <DictionaryLink  term={"block"}><b>block</b></DictionaryLink>), through which (*e.g.*, <DictionaryLink  term={"unwind-protect"}><b>unwind-protect</b></DictionaryLink>), or to which (*e.g.*, <DictionaryLink  term={"tagbody"}><b>tagbody</b></DictionaryLink>) control and possibly <ClLinks  term={"value"}><i>values</i></ClLinks> can be transferred both actively by using another <GlossaryTerm styled={true} term={"control form"}><i>control form</i></GlossaryTerm> and passively through the normal control and data flow of <ClLinks  term={"evaluation"}><i>evaluation</i></ClLinks>. “<DictionaryLink  term={"catch"}><b>catch</b></DictionaryLink> and <DictionaryLink  term={"block"}><b>block</b></DictionaryLink> establish bindings for exit points to which <DictionaryLink  term={"throw"}><b>throw</b></DictionaryLink> and <DictionaryLink  term={"return-from"}><b>return-from</b></DictionaryLink>, respectively, can transfer control and values; <DictionaryLink  term={"tagbody"}><b>tagbody</b></DictionaryLink> establishes a binding for an exit point with lexical extent to which <DictionaryLink  term={"go"}><b>go</b></DictionaryLink> can transfer control; and <DictionaryLink  term={"unwind-protect"}><b>unwind-protect</b></DictionaryLink> establishes an exit point through which control might be transferred by operators such as <DictionaryLink  term={"throw"}><b>throw</b></DictionaryLink>, <DictionaryLink  term={"return-from"}><b>return-from</b></DictionaryLink>, and <DictionaryLink  term={"go"}><b>go</b></DictionaryLink>.” 



**explicit return** *n.* the act of transferring control (and possibly <ClLinks  term={"value"}><i>values</i></ClLinks>) to a <ClLinks  term={"block"}><i>block</i></ClLinks> by using <DictionaryLink  term={"return-from"}><b>return-from</b></DictionaryLink> (or <DictionaryLink  term={"return"}><b>return</b></DictionaryLink>). 



**explicit use** *n.* (of a *variable V* in a *form F*) a reference to *V* that is directly apparent in the normal semantics of *F*; *i.e.*, that does not expose any undocumented details of the <GlossaryTerm styled={true} term={"macro expansion"}><i>macro expansion</i></GlossaryTerm> of the <ClLinks  term={"form"}><i>form</i></ClLinks> itself. References to *V* exposed by expanding <ClLinks  term={"subform"}><i>subforms</i></ClLinks> of *F* are, however, considered to be <GlossaryTerm styled={true} term={"explicit use"}><i>explicit uses</i></GlossaryTerm> of *V* . 



**exponent marker** *n.* a character that is used in the textual notation for a <ClLinks  term={"float"}><i>float</i></ClLinks> to separate the mantissa from the exponent. The characters defined as <GlossaryTerm styled={true} term={"exponent marker"}><i>exponent markers</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"standard readtable"}><i>standard readtable</i></GlossaryTerm> are shown in Figure 26–1. For more information, see Section 2.1 (Character Syntax). “The exponent marker ‘d’ in ‘3.0d7’ indicates that this 



number is to be represented as a double float.” 



|**Marker Meaning**|

| :- |

|<p>D or d <DictionaryLink  term={"double-float"}><b>double-float</b></DictionaryLink> </p><p>E or e <DictionaryLink  term={"float"}><b>float</b></DictionaryLink> (see <DictionaryLink  term={"read-default-float-format"}><b>\*read-default-float-format\*</b></DictionaryLink>) </p><p>F or f <DictionaryLink  term={"single-float"}><b>single-float</b></DictionaryLink> </p><p>L or l <DictionaryLink  term={"long-float"}><b>long-float</b></DictionaryLink> </p><p>S or s <DictionaryLink  term={"short-float"}><b>short-float</b></DictionaryLink></p>|





**Figure 26–1. Exponent Markers** 



<DictionaryLink  term={"export"}><b>export</b></DictionaryLink> *v.t.* (a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> in a <ClLinks  term={"package"}><i>package</i></ClLinks>) to add the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> to the list of <GlossaryTerm styled={true} term={"external symbol"}><i>external symbols</i></GlossaryTerm> of the <ClLinks  term={"package"}><i>package</i></ClLinks>. 







 



 



**exported** *adj.* (of a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> in a <ClLinks  term={"package"}><i>package</i></ClLinks>) being an <GlossaryTerm styled={true} term={"external symbol"}><i>external symbol</i></GlossaryTerm> of the <ClLinks  term={"package"}><i>package</i></ClLinks>. 



**expressed adjustability** *n.* (of an <ClLinks  term={"array"}><i>array</i></ClLinks>) a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm> that is conceptually (but not necessarily actually) associated with the <ClLinks  term={"array"}><i>array</i></ClLinks>, representing whether the <ClLinks  term={"array"}><i>array</i></ClLinks> is <GlossaryTerm styled={true} term={"expressly adjustable"}><i>expressly adjustable</i></GlossaryTerm>. See also <GlossaryTerm styled={true} term={"actual adjustability"}><i>actual adjustability</i></GlossaryTerm>. 



**expressed array element type** *n.* (of an <ClLinks  term={"array"}><i>array</i></ClLinks>) the <ClLinks  term={"type"}><i>type</i></ClLinks> which is the <GlossaryTerm styled={true} term={"array element type"}><i>array element type</i></GlossaryTerm> implied by a <GlossaryTerm styled={true} term={"type declaration"}><i>type declaration</i></GlossaryTerm> for the <ClLinks  term={"array"}><i>array</i></ClLinks>, or which is the requested <ClLinks  term={"array"}><i>array</i></ClLinks> 



<GlossaryTerm styled={true} term={"element type"}><i>element type</i></GlossaryTerm> at its time of creation, prior to any selection of an <GlossaryTerm styled={true} term={"upgraded array element type"}><i>upgraded array element type</i></GlossaryTerm>. (Common Lisp does not provide a way of detecting this <ClLinks  term={"type"}><i>type</i></ClLinks> directly at run time, but an <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> is permitted to make assumptions about the <ClLinks  term={"array"}><i>array</i></ClLinks>’s contents and the operations which may be performed on the <ClLinks  term={"array"}><i>array</i></ClLinks> when this <ClLinks  term={"type"}><i>type</i></ClLinks> is noted during code analysis, even if those assumptions would not be valid in general for the <GlossaryTerm styled={true} term={"upgraded array element type"}><i>upgraded array element type</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"expressed array element type"}><i>expressed array element type</i></GlossaryTerm>.) 



**expressed complex part type** *n.* (of a <ClLinks  term={"complex"}><i>complex</i></ClLinks> ) the <ClLinks  term={"type"}><i>type</i></ClLinks> which is implied as the <GlossaryTerm styled={true} term={"complex part type"}><i>complex part type</i></GlossaryTerm> by a <GlossaryTerm styled={true} term={"type declaration"}><i>type declaration</i></GlossaryTerm> for the <ClLinks  term={"complex"}><i>complex</i></ClLinks> , or which is the requested <GlossaryTerm styled={true} term={"complex part type"}><i>complex part type</i></GlossaryTerm> at its time of creation, prior to any selection of an <GlossaryTerm styled={true} term={"upgraded complex part type"}><i>upgraded complex part type</i></GlossaryTerm>. (Common Lisp does not provide a way of detecting this <ClLinks  term={"type"}><i>type</i></ClLinks> directly at run time, but an <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> is permitted to make assumptions about the operations which may be performed on the <ClLinks  term={"complex"}><i>complex</i></ClLinks> when this <ClLinks  term={"type"}><i>type</i></ClLinks> is noted during code analysis, even if those assumptions would not be valid in general for the <GlossaryTerm styled={true} term={"upgraded complex part type"}><i>upgraded complex part type</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"expressed complex part type"}><i>expressed complex part type</i></GlossaryTerm>.) 



**expression** *n.* 1. an <ClLinks  term={"object"}><i>object</i></ClLinks>, often used to emphasize the use of the <ClLinks  term={"object"}><i>object</i></ClLinks> to encode or represent information in a specialized format, such as program text. “The second expression in a <DictionaryLink  term={"let"}><b>let</b></DictionaryLink> form is a list of bindings.” 2. the textual notation used to notate an <ClLinks  term={"object"}><i>object</i></ClLinks> in a source file. “The expression ’sample is equivalent to (quote sample).” 



**expressly adjustable** *adj.* (of an <ClLinks  term={"array"}><i>array</i></ClLinks>) being <GlossaryTerm styled={true} term={"actually adjustable"}><i>actually adjustable</i></GlossaryTerm> by virtue of an explicit request for this characteristic having been made at the time of its creation. All <ClLinks  term={"array"}><i>arrays</i></ClLinks> that are <GlossaryTerm styled={true} term={"expressly adjustable"}><i>expressly adjustable</i></GlossaryTerm> are <GlossaryTerm styled={true} term={"actually adjustable"}><i>actually adjustable</i></GlossaryTerm>, but not necessarily vice versa. 



**extended character** *n.* a <ClLinks  term={"character"}><i>character</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"extended-char"}><b>extended-char</b></DictionaryLink>: a <ClLinks  term={"character"}><i>character</i></ClLinks> that is not a <GlossaryTerm styled={true} term={"base character"}><i>base character</i></GlossaryTerm> . 



**extended function designator** *n.* a <ClLinks  term={"designator"}><i>designator</i></ClLinks> for a <ClLinks  term={"function"}><i>function</i></ClLinks>; that is, an <ClLinks  term={"object"}><i>object</i></ClLinks> that denotes a <ClLinks  term={"function"}><i>function</i></ClLinks> and that is one of: a <GlossaryTerm styled={true} term={"function name"}><i>function name</i></GlossaryTerm> (denoting the <ClLinks  term={"function"}><i>function</i></ClLinks> it names in the <GlossaryTerm styled={true} term={"global environment"}><i>global environment</i></GlossaryTerm>), or a <ClLinks  term={"function"}><i>function</i></ClLinks> (denoting itself). The consequences are undefined if a <GlossaryTerm styled={true} term={"function name"}><i>function name</i></GlossaryTerm> is used as an <GlossaryTerm styled={true} term={"extended function designator"}><i>extended function designator</i></GlossaryTerm> but it does not have a global definition as a <ClLinks  term={"function"}><i>function</i></ClLinks>, or if it is a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> that has a global definition as a <ClLinks  term={"macro"}><i>macro</i></ClLinks> or a <GlossaryTerm styled={true} term={"special form"}><i>special form</i></GlossaryTerm>. See also <GlossaryTerm styled={true} term={"function designator"}><i>function designator</i></GlossaryTerm> . 



**extended lambda list** *n.* a list resembling an <GlossaryTerm styled={true} term={"ordinary lambda list"}><i>ordinary lambda list</i></GlossaryTerm> in form and 







 



 



purpose, but offering additional syntax or functionality not available in an <GlossaryTerm styled={true} term={"ordinary lambda list"}><i>ordinary lambda list</i></GlossaryTerm>. “<DictionaryLink  term={"defmacro"}><b>defmacro</b></DictionaryLink> uses extended lambda lists.” 



**extension** *n.* a facility in an <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> of Common Lisp that is not specified by this standard. 



**extent** *n.* the interval of time during which a <ClLinks  term={"reference"}><i>reference</i></ClLinks> to an <ClLinks  term={"object"}><i>object</i></ClLinks>, a <ClLinks  term={"binding"}><i>binding</i></ClLinks>, an <GlossaryTerm styled={true} term={"exit point"}><i>exit point</i></GlossaryTerm>, a <ClLinks  term={"tag"}><i>tag</i></ClLinks>, a <ClLinks  term={"handler"}><i>handler</i></ClLinks> , a <ClLinks  term={"restart"}><i>restart</i></ClLinks>, or an <ClLinks  term={"environment"}><i>environment</i></ClLinks> is defined. 



**external file format** *n.* an <ClLinks  term={"object"}><i>object</i></ClLinks> of <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> nature which 



determines one of possibly several <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> ways in which <ClLinks  term={"character"}><i>characters</i></ClLinks> are encoded externally in a *character file*. 



**external file format designator** *n.* a <ClLinks  term={"designator"}><i>designator</i></ClLinks> for an <GlossaryTerm styled={true} term={"external file format"}><i>external file format</i></GlossaryTerm>; that is, an <ClLinks  term={"object"}><i>object</i></ClLinks> that denotes an <GlossaryTerm styled={true} term={"external file format"}><i>external file format</i></GlossaryTerm> and that is one of: the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> 



:default (denoting an <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> default <GlossaryTerm styled={true} term={"external file format"}><i>external file format</i></GlossaryTerm> that can accomodate at least the <GlossaryTerm styled={true} term={"base character"}><i>base characters</i></GlossaryTerm>), some other <ClLinks  term={"object"}><i>object</i></ClLinks> defined by the 



<ClLinks  term={"implementation"}><i>implementation</i></ClLinks> to be an <GlossaryTerm styled={true} term={"external file format designator"}><i>external file format designator</i></GlossaryTerm> (denoting an *implementation defined external file format*), or some other <ClLinks  term={"object"}><i>object</i></ClLinks> defined by the <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> to be an <GlossaryTerm styled={true} term={"external file format"}><i>external file format</i></GlossaryTerm> (denoting itself). 



**external symbol** *n.* (of a <ClLinks  term={"package"}><i>package</i></ClLinks>) a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> that is part of the ‘external interface’ to the <ClLinks  term={"package"}><i>package</i></ClLinks> and that are *inherited* <sub>3</sub> by any other <ClLinks  term={"package"}><i>package</i></ClLinks> that <ClLinks  term={"use"}><i>uses</i></ClLinks> the <ClLinks  term={"package"}><i>package</i></ClLinks>. When using the *Lisp reader* , if a <GlossaryTerm styled={true} term={"package prefix"}><i>package prefix</i></GlossaryTerm> is used, the <ClLinks  term={"name"}><i>name</i></ClLinks> of an <GlossaryTerm styled={true} term={"external symbol"}><i>external symbol</i></GlossaryTerm> is separated from the *package name* by a single <GlossaryTerm styled={true} term={"package marker"}><i>package marker</i></GlossaryTerm> while the <ClLinks  term={"name"}><i>name</i></ClLinks> of an <GlossaryTerm styled={true} term={"internal symbol"}><i>internal symbol</i></GlossaryTerm> is separated from the *package name* by a double <GlossaryTerm styled={true} term={"package marker"}><i>package marker</i></GlossaryTerm> ; see Section 2.3.4 (Symbols as Tokens). 



**externalizable object** *n.* an <ClLinks  term={"object"}><i>object</i></ClLinks> that can be used as a *literal object* in <ClLinks  term={"code"}><i>code</i></ClLinks> to be processed by the <GlossaryTerm styled={true} term={"file compiler"}><i>file compiler</i></GlossaryTerm> . 




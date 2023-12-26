---
title: I
sidebar_position: 105
---

**I** 



**I/O customization variable** *n.* one of the <GlossaryTerm styled={true} term={"stream variable"}><i>stream variables</i></GlossaryTerm> in Figure 26–2, or some other (<ClLinks  term={"implementation-defined"}><i>implementation-defined</i></ClLinks>) <GlossaryTerm styled={true} term={"stream variable"}><i>stream variable</i></GlossaryTerm> that is defined by the <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> to be an *I/O customization variable*. 







 



 



|<p>\*debug-io\* \*error-io\* query-io\* </p><p>\*standard-input\* \*standard-output\* \*trace-output\*</p>|

| :- |





**Figure 26–2. Standardized I/O Customization Variables** 



**identical** *adj.* the <ClLinks  term={"same"}><i>same</i></ClLinks> under <ClLinks  term={"eq"}><b>eq</b></ClLinks>. 



**identifier** *n.* 1. a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> used to identify or to distinguish <ClLinks  term={"name"}><i>names</i></ClLinks>. 2. a <ClLinks  term={"string"}><i>string</i></ClLinks> used the same way. 



**immutable** *adj.* not subject to change, either because no <ClLinks  term={"operator"}><i>operator</i></ClLinks> is provided which is capable of effecting such change or because some constraint exists which prohibits the use of an <ClLinks  term={"operator"}><i>operator</i></ClLinks> that might otherwise be capable of effecting such a change. Except as explicitly indicated otherwise, <ClLinks  term={"implementation"}><i>implementations</i></ClLinks> are not required to detect attempts to modify *immutable objects* or <ClLinks  term={"cell"}><i>cells</i></ClLinks>; the consequences of attempting to make such 



modification are undefined. “Numbers are immutable.” 



**implementation** *n.* a system, mechanism, or body of <ClLinks  term={"code"}><i>code</i></ClLinks> that implements the semantics of Common Lisp. 



**implementation limit** *n.* a restriction imposed by an <ClLinks  term={"implementation"}><i>implementation</i></ClLinks>. 



**implementation-defined** *adj. implementation-dependent*, but required by this 



specification to be defined by each <GlossaryTerm styled={true} term={"conforming implementation"}><i>conforming implementation</i></GlossaryTerm> and to be documented by the corresponding implementor. 



**implementation-dependent** *adj.* describing a behavior or aspect of Common 



Lisp which has been deliberately left unspecified, that might be defined in some 



<GlossaryTerm styled={true} term={"conforming implementation"}><i>conforming implementations</i></GlossaryTerm> but not in others, and whose details may differ between <ClLinks  term={"implementation"}><i>implementations</i></ClLinks>. A <GlossaryTerm styled={true} term={"conforming implementation"}><i>conforming implementation</i></GlossaryTerm> is encouraged (but not required) to document its treatment of each item in this specification which is marked 



<ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>, although in some cases such documentation might simply identify the item as “undefined.” 



**implementation-independent** *adj.* used to identify or emphasize a behavior or aspect of Common Lisp which does not vary between <GlossaryTerm styled={true} term={"conforming implementation"}><i>conforming implementations</i></GlossaryTerm>. 



**implicit block** *n.* a <ClLinks  term={"block"}><i>block</i></ClLinks> introduced by a <GlossaryTerm styled={true} term={"macro form"}><i>macro form</i></GlossaryTerm> rather than by an explicit <ClLinks  term={"block"}><b>block</b></ClLinks> <ClLinks  term={"form"}><i>form</i></ClLinks>. 



**implicit compilation** *n. compilation* performed during <ClLinks  term={"evaluation"}><i>evaluation</i></ClLinks>. 



**implicit progn** *n.* an ordered set of adjacent <ClLinks  term={"form"}><i>forms</i></ClLinks> appearing in another <ClLinks  term={"form"}><i>form</i></ClLinks>, and defined by their context in that <ClLinks  term={"form"}><i>form</i></ClLinks> to be executed as if within a <ClLinks  term={"progn"}><b>progn</b></ClLinks>. 







 



 



**implicit tagbody** *n.* an ordered set of adjacent <ClLinks  term={"form"}><i>forms</i></ClLinks> and/or <ClLinks  term={"tag"}><i>tags</i></ClLinks> appearing in another <ClLinks  term={"form"}><i>form</i></ClLinks>, and defined by their context in that <ClLinks  term={"form"}><i>form</i></ClLinks> to be executed as if within a <ClLinks  term={"tagbody"}><b>tagbody</b></ClLinks>. 



<ClLinks  term={"import"}><b>import</b></ClLinks> *v.t.* (a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> into a <ClLinks  term={"package"}><i>package</i></ClLinks>) to make the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> be <ClLinks  term={"present"}><i>present</i></ClLinks> in the <ClLinks  term={"package"}><i>package</i></ClLinks>. **improper list** *n.* a <ClLinks  term={"list"}><i>list</i></ClLinks> which is not a <GlossaryTerm styled={true} term={"proper list"}><i>proper list</i></GlossaryTerm>: a <GlossaryTerm styled={true} term={"circular list"}><i>circular list</i></GlossaryTerm> or a <GlossaryTerm styled={true} term={"dotted list"}><i>dotted list</i></GlossaryTerm>. 



**inaccessible** *adj.* not <ClLinks  term={"accessible"}><i>accessible</i></ClLinks>. 



**indefinite extent** *n.* an <ClLinks  term={"extent"}><i>extent</i></ClLinks> whose duration is unlimited. “Most Common Lisp objects have indefinite extent.” 



**indefinite scope** *n. scope* that is unlimited. 



**indicator** *n.* a <GlossaryTerm styled={true} term={"property indicator"}><i>property indicator</i></GlossaryTerm> . 



**indirect instance** *n.* (of a *class C*<sub>1</sub>) an <ClLinks  term={"object"}><i>object</i></ClLinks> of *class C*<sub>2</sub>, where *C*<sub>2</sub> is a <ClLinks  term={"subclass"}><i>subclass</i></ClLinks> of *C*<sub>1</sub>. “An integer is an indirect instance of the class <ClLinks  term={"number"}><b>number</b></ClLinks>.” 



**inherit** *v.t.* 1. to receive or acquire a quality, trait, or characteristic; to gain access to a feature defined elsewhere. 2. (a <ClLinks  term={"class"}><i>class</i></ClLinks>) to acquire the structure and behavior defined by a <ClLinks  term={"superclass"}><i>superclass</i></ClLinks>. 3. (a <ClLinks  term={"package"}><i>package</i></ClLinks>) to make *symbols exported* by another *package accessible* by using <ClLinks  term={"use-package"}><b>use-package</b></ClLinks>. 



**initial pprint dispatch table** *n.* the <ClLinks  term={"value"}><i>value</i></ClLinks> of <ClLinks  term={"print-pprint-dispatch"}><b>\*print-pprint-dispatch\*</b></ClLinks> at the time the *Lisp image* is started. 



**initial readtable** *n.* the <ClLinks  term={"value"}><i>value</i></ClLinks> of <ClLinks  term={"readtable"}><b>\*readtable\*</b></ClLinks> at the time the *Lisp image* is started. 



**initialization argument list** *n.* a <GlossaryTerm styled={true} term={"property list"}><i>property list</i></GlossaryTerm> of initialization argument <ClLinks  term={"name"}><i>names</i></ClLinks> and <ClLinks  term={"value"}><i>values</i></ClLinks> used in the protocol for initializing and reinitializing <ClLinks  term={"instance"}><i>instances</i></ClLinks> of *classes*. See Section 7.1 (Object Creation and Initialization). 



**initialization form** *n.* a <ClLinks  term={"form"}><i>form</i></ClLinks> used to supply the initial <ClLinks  term={"value"}><i>value</i></ClLinks> for a <ClLinks  term={"slot"}><i>slot</i></ClLinks> or <ClLinks  term={"variable"}><i>variable</i></ClLinks>. “The initialization form for a slot in a <ClLinks  term={"defclass"}><b>defclass</b></ClLinks> form is introduced by the keyword :initform.” 



**input** *adj.* (of a <ClLinks  term={"stream"}><i>stream</i></ClLinks>) supporting input operations (*i.e.*, being a “data source”). An *input stream* might also be an *output stream*, in which case it is sometimes called a *bidirectional stream*. See the <ClLinks  term={"function"}><i>function</i></ClLinks> **input-stream-p**. 



**instance** *n.* 1. a <GlossaryTerm styled={true} term={"direct instance"}><i>direct instance</i></GlossaryTerm>. 2. a <GlossaryTerm styled={true} term={"generalized instance"}><i>generalized instance</i></GlossaryTerm>. 3. an <GlossaryTerm styled={true} term={"indirect instance"}><i>indirect instance</i></GlossaryTerm>. <ClLinks  term={"integer"}><b>integer</b></ClLinks> *n.* an <ClLinks  term={"object"}><i>object</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"integer"}><b>integer</b></ClLinks>, which represents a mathematical integer. 







 



 



**interactive stream** *n.* a <ClLinks  term={"stream"}><i>stream</i></ClLinks> on which it makes sense to perform interactive 



querying. See Section 21.1.1.1.3 (Interactive Streams). 



<ClLinks  term={"intern"}><b>intern</b></ClLinks> *v.t.* 1. (a <ClLinks  term={"string"}><i>string</i></ClLinks> in a <ClLinks  term={"package"}><i>package</i></ClLinks>) to look up the <ClLinks  term={"string"}><i>string</i></ClLinks> in the <ClLinks  term={"package"}><i>package</i></ClLinks>, returning either a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> with that <ClLinks  term={"name"}><i>name</i></ClLinks> which was already <ClLinks  term={"accessible"}><i>accessible</i></ClLinks> in the <ClLinks  term={"package"}><i>package</i></ClLinks> or a newly created <GlossaryTerm styled={true} term={"internal symbol"}><i>internal symbol</i></GlossaryTerm> of the <ClLinks  term={"package"}><i>package</i></ClLinks> with that <ClLinks  term={"name"}><i>name</i></ClLinks>. 2. *Idiom.* generally, to observe a protocol whereby objects which are equivalent or have equivalent names under some predicate defined by the protocol are mapped to a single canonical object. 



**internal symbol** *n.* (of a <ClLinks  term={"package"}><i>package</i></ClLinks>) a symbol which is <ClLinks  term={"accessible"}><i>accessible</i></ClLinks> in the <ClLinks  term={"package"}><i>package</i></ClLinks>, but which is not an <GlossaryTerm styled={true} term={"external symbol"}><i>external symbol</i></GlossaryTerm> of the <ClLinks  term={"package"}><i>package</i></ClLinks>. 



**internal time** *n. time*, represented as an *integer* number of <GlossaryTerm styled={true} term={"internal time unit"}><i>internal time units</i></GlossaryTerm>. *Absolute internal time* is measured as an offset from an arbitrarily chosen, 



<ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> base. See Section 25.1.4.3 (Internal Time). 



**internal time unit** *n.* a unit of time equal to 1*/n* of a second, for some *implementation defined integer* value of *n*. See the <ClLinks  term={"variable"}><i>variable</i></ClLinks> <ClLinks  term={"internal-time-units-per-second"}><b>internal-time-units-per-second</b></ClLinks>. 



**interned** *adj. Trad.* 1. (of a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>) <ClLinks  term={"accessible"}><i>accessible</i></ClLinks><sub>3</sub> in any <ClLinks  term={"package"}><i>package</i></ClLinks>. 2. (of a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> in a specific <ClLinks  term={"package"}><i>package</i></ClLinks>) <ClLinks  term={"present"}><i>present</i></ClLinks> in that <ClLinks  term={"package"}><i>package</i></ClLinks>. 



**interpreted function** *n.* a <ClLinks  term={"function"}><i>function</i></ClLinks> that is not a <GlossaryTerm styled={true} term={"compiled function"}><i>compiled function</i></GlossaryTerm>. (It is possible for there to be a <GlossaryTerm styled={true} term={"conforming implementation"}><i>conforming implementation</i></GlossaryTerm> which has no <GlossaryTerm styled={true} term={"interpreted function"}><i>interpreted functions</i></GlossaryTerm>, but a <GlossaryTerm styled={true} term={"conforming program"}><i>conforming program</i></GlossaryTerm> must not assume that all <ClLinks  term={"function"}><i>functions</i></ClLinks> are <GlossaryTerm styled={true} term={"compiled function"}><i>compiled functions</i></GlossaryTerm>.) 



**interpreted implementation** *n.* an <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> that uses an execution strategy for <GlossaryTerm styled={true} term={"interpreted function"}><i>interpreted functions</i></GlossaryTerm> that does not involve a one-time semantic analysis pre-pass, and instead uses “lazy” (and sometimes repetitious) semantic analysis of <ClLinks  term={"form"}><i>forms</i></ClLinks> as they are encountered during execution. 



**interval designator** *n.* (of *type T*) an ordered pair of <ClLinks  term={"object"}><i>objects</i></ClLinks> that describe a <ClLinks  term={"subtype"}><i>subtype</i></ClLinks> of <ClLinks  term={"t"}><i>T</i></ClLinks> by delimiting an interval on the real number line. See Section 12.1.6 (Interval Designators). 



**invalid** *n.*, *adj.* 1. *n.* a possible <GlossaryTerm styled={true} term={"constituent trait"}><i>constituent trait</i></GlossaryTerm> of a <ClLinks  term={"character"}><i>character</i></ClLinks> which if present signifies that the <ClLinks  term={"character"}><i>character</i></ClLinks> cannot ever appear in a <ClLinks  term={"token"}><i>token</i></ClLinks> except under the control of a *single escape character* . For details, see Section 2.1.4.1 (Constituent Characters). 2. *adj.* (of a <ClLinks  term={"character"}><i>character</i></ClLinks> ) being a <ClLinks  term={"character"}><i>character</i></ClLinks> that has *syntax type constituent* in the <GlossaryTerm styled={true} term={"current readtable"}><i>current readtable</i></GlossaryTerm> and that has the *constituent trait invalid* <sub>1</sub>. See Figure 2–8. 



**iteration form** *n.* a <GlossaryTerm styled={true} term={"compound form"}><i>compound form</i></GlossaryTerm> whose <ClLinks  term={"operator"}><i>operator</i></ClLinks> is named in Figure 26–3, or a <GlossaryTerm styled={true} term={"compound form"}><i>compound form</i></GlossaryTerm> that has an *implementation-defined operator* and that is defined by the <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> to be an <GlossaryTerm styled={true} term={"iteration form"}><i>iteration form</i></GlossaryTerm>. 







 



 



|<p>**do do-external-symbols dotimes do\* do-symbols loop** </p><p>**do-all-symbols dolist**</p>|

| :- |





**Figure 26–3. Standardized Iteration Forms** 



**iteration variable** *n.* a *variable V* , the <ClLinks  term={"binding"}><i>binding</i></ClLinks> for which was created by an <GlossaryTerm styled={true} term={"explicit use"}><i>explicit use</i></GlossaryTerm> of *V* in an <GlossaryTerm styled={true} term={"iteration form"}><i>iteration form</i></GlossaryTerm>. 




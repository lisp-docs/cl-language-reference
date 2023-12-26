---
title: I
sidebar_position: 105
---

**I** 



**I/O customization variable** *n.* one of the <GlossaryTerm styled={true} term={"stream variable"}><i>stream variables</i></GlossaryTerm> in Figure 26–2, or some other (<GlossaryTerm  term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm>) <GlossaryTerm styled={true} term={"stream variable"}><i>stream variable</i></GlossaryTerm> that is defined by the <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm> to be an *I/O customization variable*. 







 



 



|<p>\*debug-io\* \*error-io\* query-io\* </p><p>\*standard-input\* \*standard-output\* \*trace-output\*</p>|

| :- |





**Figure 26–2. Standardized I/O Customization Variables** 



**identical** *adj.* the <GlossaryTerm  term={"same"}><i>same</i></GlossaryTerm> under <DictionaryLink  term={"eq"}><b>eq</b></DictionaryLink>. 



**identifier** *n.* 1. a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> used to identify or to distinguish <GlossaryTerm  term={"name"}><i>names</i></GlossaryTerm>. 2. a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> used the same way. 



**immutable** *adj.* not subject to change, either because no <GlossaryTerm  term={"operator"}><i>operator</i></GlossaryTerm> is provided which is capable of effecting such change or because some constraint exists which prohibits the use of an <GlossaryTerm  term={"operator"}><i>operator</i></GlossaryTerm> that might otherwise be capable of effecting such a change. Except as explicitly indicated otherwise, <GlossaryTerm  term={"implementation"}><i>implementations</i></GlossaryTerm> are not required to detect attempts to modify *immutable objects* or <GlossaryTerm  term={"cell"}><i>cells</i></GlossaryTerm>; the consequences of attempting to make such 



modification are undefined. “Numbers are immutable.” 



**implementation** *n.* a system, mechanism, or body of <GlossaryTerm  term={"code"}><i>code</i></GlossaryTerm> that implements the semantics of Common Lisp. 



**implementation limit** *n.* a restriction imposed by an <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm>. 



**implementation-defined** *adj. implementation-dependent*, but required by this 



specification to be defined by each <GlossaryTerm styled={true} term={"conforming implementation"}><i>conforming implementation</i></GlossaryTerm> and to be documented by the corresponding implementor. 



**implementation-dependent** *adj.* describing a behavior or aspect of Common 



Lisp which has been deliberately left unspecified, that might be defined in some 



<GlossaryTerm styled={true} term={"conforming implementation"}><i>conforming implementations</i></GlossaryTerm> but not in others, and whose details may differ between <GlossaryTerm  term={"implementation"}><i>implementations</i></GlossaryTerm>. A <GlossaryTerm styled={true} term={"conforming implementation"}><i>conforming implementation</i></GlossaryTerm> is encouraged (but not required) to document its treatment of each item in this specification which is marked 



<GlossaryTerm  term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>, although in some cases such documentation might simply identify the item as “undefined.” 



**implementation-independent** *adj.* used to identify or emphasize a behavior or aspect of Common Lisp which does not vary between <GlossaryTerm styled={true} term={"conforming implementation"}><i>conforming implementations</i></GlossaryTerm>. 



**implicit block** *n.* a <GlossaryTerm  term={"block"}><i>block</i></GlossaryTerm> introduced by a <GlossaryTerm styled={true} term={"macro form"}><i>macro form</i></GlossaryTerm> rather than by an explicit <DictionaryLink  term={"block"}><b>block</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. 



**implicit compilation** *n. compilation* performed during <GlossaryTerm  term={"evaluation"}><i>evaluation</i></GlossaryTerm>. 



**implicit progn** *n.* an ordered set of adjacent <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> appearing in another <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>, and defined by their context in that <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> to be executed as if within a <DictionaryLink  term={"progn"}><b>progn</b></DictionaryLink>. 







 



 



**implicit tagbody** *n.* an ordered set of adjacent <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> and/or <GlossaryTerm  term={"tag"}><i>tags</i></GlossaryTerm> appearing in another <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>, and defined by their context in that <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> to be executed as if within a <DictionaryLink  term={"tagbody"}><b>tagbody</b></DictionaryLink>. 



<DictionaryLink  term={"import"}><b>import</b></DictionaryLink> *v.t.* (a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> into a <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>) to make the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> be <GlossaryTerm  term={"present"}><i>present</i></GlossaryTerm> in the <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>. **improper list** *n.* a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> which is not a <GlossaryTerm styled={true} term={"proper list"}><i>proper list</i></GlossaryTerm>: a <GlossaryTerm styled={true} term={"circular list"}><i>circular list</i></GlossaryTerm> or a <GlossaryTerm styled={true} term={"dotted list"}><i>dotted list</i></GlossaryTerm>. 



**inaccessible** *adj.* not <GlossaryTerm  term={"accessible"}><i>accessible</i></GlossaryTerm>. 



**indefinite extent** *n.* an <GlossaryTerm  term={"extent"}><i>extent</i></GlossaryTerm> whose duration is unlimited. “Most Common Lisp objects have indefinite extent.” 



**indefinite scope** *n. scope* that is unlimited. 



**indicator** *n.* a <GlossaryTerm styled={true} term={"property indicator"}><i>property indicator</i></GlossaryTerm> . 



**indirect instance** *n.* (of a *class C*<sub>1</sub>) an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> of *class C*<sub>2</sub>, where *C*<sub>2</sub> is a <GlossaryTerm  term={"subclass"}><i>subclass</i></GlossaryTerm> of *C*<sub>1</sub>. “An integer is an indirect instance of the class <DictionaryLink  term={"number"}><b>number</b></DictionaryLink>.” 



**inherit** *v.t.* 1. to receive or acquire a quality, trait, or characteristic; to gain access to a feature defined elsewhere. 2. (a <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>) to acquire the structure and behavior defined by a <GlossaryTerm  term={"superclass"}><i>superclass</i></GlossaryTerm>. 3. (a <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>) to make *symbols exported* by another *package accessible* by using <DictionaryLink  term={"use-package"}><b>use-package</b></DictionaryLink>. 



**initial pprint dispatch table** *n.* the <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink  term={"print-pprint-dispatch"}><b>\*print-pprint-dispatch\*</b></DictionaryLink> at the time the *Lisp image* is started. 



**initial readtable** *n.* the <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink  term={"readtable"}><b>\*readtable\*</b></DictionaryLink> at the time the *Lisp image* is started. 



**initialization argument list** *n.* a <GlossaryTerm styled={true} term={"property list"}><i>property list</i></GlossaryTerm> of initialization argument <GlossaryTerm  term={"name"}><i>names</i></GlossaryTerm> and <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> used in the protocol for initializing and reinitializing <GlossaryTerm  term={"instance"}><i>instances</i></GlossaryTerm> of *classes*. See Section 7.1 (Object Creation and Initialization). 



**initialization form** *n.* a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> used to supply the initial <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> for a <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> or <GlossaryTerm  term={"variable"}><i>variable</i></GlossaryTerm>. “The initialization form for a slot in a <DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink> form is introduced by the keyword :initform.” 



**input** *adj.* (of a <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>) supporting input operations (*i.e.*, being a “data source”). An *input stream* might also be an *output stream*, in which case it is sometimes called a *bidirectional stream*. See the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> **input-stream-p**. 



**instance** *n.* 1. a <GlossaryTerm styled={true} term={"direct instance"}><i>direct instance</i></GlossaryTerm>. 2. a <GlossaryTerm styled={true} term={"generalized instance"}><i>generalized instance</i></GlossaryTerm>. 3. an <GlossaryTerm styled={true} term={"indirect instance"}><i>indirect instance</i></GlossaryTerm>. <DictionaryLink  term={"integer"}><b>integer</b></DictionaryLink> *n.* an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"integer"}><b>integer</b></DictionaryLink>, which represents a mathematical integer. 







 



 



**interactive stream** *n.* a <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> on which it makes sense to perform interactive 



querying. See Section 21.1.1.1.3 (Interactive Streams). 



<DictionaryLink  term={"intern"}><b>intern</b></DictionaryLink> *v.t.* 1. (a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> in a <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>) to look up the <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> in the <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>, returning either a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> with that <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> which was already <GlossaryTerm  term={"accessible"}><i>accessible</i></GlossaryTerm> in the <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> or a newly created <GlossaryTerm styled={true} term={"internal symbol"}><i>internal symbol</i></GlossaryTerm> of the <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> with that <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm>. 2. *Idiom.* generally, to observe a protocol whereby objects which are equivalent or have equivalent names under some predicate defined by the protocol are mapped to a single canonical object. 



**internal symbol** *n.* (of a <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>) a symbol which is <GlossaryTerm  term={"accessible"}><i>accessible</i></GlossaryTerm> in the <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>, but which is not an <GlossaryTerm styled={true} term={"external symbol"}><i>external symbol</i></GlossaryTerm> of the <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>. 



**internal time** *n. time*, represented as an *integer* number of <GlossaryTerm styled={true} term={"internal time unit"}><i>internal time units</i></GlossaryTerm>. *Absolute internal time* is measured as an offset from an arbitrarily chosen, 



<GlossaryTerm  term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> base. See Section 25.1.4.3 (Internal Time). 



**internal time unit** *n.* a unit of time equal to 1*/n* of a second, for some *implementation defined integer* value of *n*. See the <GlossaryTerm  term={"variable"}><i>variable</i></GlossaryTerm> <DictionaryLink  term={"internal-time-units-per-second"}><b>internal-time-units-per-second</b></DictionaryLink>. 



**interned** *adj. Trad.* 1. (of a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>) <GlossaryTerm  term={"accessible"}><i>accessible</i></GlossaryTerm><sub>3</sub> in any <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>. 2. (of a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> in a specific <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>) <GlossaryTerm  term={"present"}><i>present</i></GlossaryTerm> in that <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>. 



**interpreted function** *n.* a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> that is not a <GlossaryTerm styled={true} term={"compiled function"}><i>compiled function</i></GlossaryTerm>. (It is possible for there to be a <GlossaryTerm styled={true} term={"conforming implementation"}><i>conforming implementation</i></GlossaryTerm> which has no <GlossaryTerm styled={true} term={"interpreted function"}><i>interpreted functions</i></GlossaryTerm>, but a <GlossaryTerm styled={true} term={"conforming program"}><i>conforming program</i></GlossaryTerm> must not assume that all <GlossaryTerm  term={"function"}><i>functions</i></GlossaryTerm> are <GlossaryTerm styled={true} term={"compiled function"}><i>compiled functions</i></GlossaryTerm>.) 



**interpreted implementation** *n.* an <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm> that uses an execution strategy for <GlossaryTerm styled={true} term={"interpreted function"}><i>interpreted functions</i></GlossaryTerm> that does not involve a one-time semantic analysis pre-pass, and instead uses “lazy” (and sometimes repetitious) semantic analysis of <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> as they are encountered during execution. 



**interval designator** *n.* (of *type T*) an ordered pair of <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> that describe a <GlossaryTerm  term={"subtype"}><i>subtype</i></GlossaryTerm> of <GlossaryTerm  term={"t"}><i>T</i></GlossaryTerm> by delimiting an interval on the real number line. See Section 12.1.6 (Interval Designators). 



**invalid** *n.*, *adj.* 1. *n.* a possible <GlossaryTerm styled={true} term={"constituent trait"}><i>constituent trait</i></GlossaryTerm> of a <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> which if present signifies that the <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> cannot ever appear in a <GlossaryTerm  term={"token"}><i>token</i></GlossaryTerm> except under the control of a *single escape character* . For details, see Section 2.1.4.1 (Constituent Characters). 2. *adj.* (of a <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> ) being a <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> that has *syntax type constituent* in the <GlossaryTerm styled={true} term={"current readtable"}><i>current readtable</i></GlossaryTerm> and that has the *constituent trait invalid* <sub>1</sub>. See Figure 2–8. 



**iteration form** *n.* a <GlossaryTerm styled={true} term={"compound form"}><i>compound form</i></GlossaryTerm> whose <GlossaryTerm  term={"operator"}><i>operator</i></GlossaryTerm> is named in Figure 26–3, or a <GlossaryTerm styled={true} term={"compound form"}><i>compound form</i></GlossaryTerm> that has an *implementation-defined operator* and that is defined by the <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm> to be an <GlossaryTerm styled={true} term={"iteration form"}><i>iteration form</i></GlossaryTerm>. 







 



 



|<p>**do do-external-symbols dotimes do\* do-symbols loop** </p><p>**do-all-symbols dolist**</p>|

| :- |





**Figure 26–3. Standardized Iteration Forms** 



**iteration variable** *n.* a *variable V* , the <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm> for which was created by an <GlossaryTerm styled={true} term={"explicit use"}><i>explicit use</i></GlossaryTerm> of *V* in an <GlossaryTerm styled={true} term={"iteration form"}><i>iteration form</i></GlossaryTerm>. 




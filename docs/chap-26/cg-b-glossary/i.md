---
title: I
sidebar_position: 105
---

**I** 



**I/O customization variable** *n.* one of the *stream variables* in Figure 26–2, or some other (<GlossaryTerm styled={true} term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm>) *stream variable* that is defined by the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> to be an *I/O customization variable*. 







 



 



|<p>\*debug-io\* \*error-io\* query-io\* </p><p>\*standard-input\* \*standard-output\* \*trace-output\*</p>|

| :- |





**Figure 26–2. Standardized I/O Customization Variables** 



**identical** *adj.* the <GlossaryTerm styled={true} term={"same"}><i>same</i></GlossaryTerm> under <DictionaryLink styled={true} term={"eq"}><b>eq</b></DictionaryLink>. 



**identifier** *n.* 1. a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> used to identify or to distinguish <GlossaryTerm styled={true} term={"name"}><i>names</i></GlossaryTerm>. 2. a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> used the same way. 



**immutable** *adj.* not subject to change, either because no <GlossaryTerm styled={true} term={"operator"}><i>operator</i></GlossaryTerm> is provided which is capable of effecting such change or because some constraint exists which prohibits the use of an <GlossaryTerm styled={true} term={"operator"}><i>operator</i></GlossaryTerm> that might otherwise be capable of effecting such a change. Except as explicitly indicated otherwise, <GlossaryTerm styled={true} term={"implementation"}><i>implementations</i></GlossaryTerm> are not required to detect attempts to modify *immutable objects* or <GlossaryTerm styled={true} term={"cell"}><i>cells</i></GlossaryTerm>; the consequences of attempting to make such 



modification are undefined. “Numbers are immutable.” 



**implementation** *n.* a system, mechanism, or body of <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm> that implements the semantics of Common Lisp. 



**implementation limit** *n.* a restriction imposed by an <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm>. 



**implementation-defined** *adj. implementation-dependent*, but required by this 



specification to be defined by each *conforming implementation* and to be documented by the corresponding implementor. 



**implementation-dependent** *adj.* describing a behavior or aspect of Common 



Lisp which has been deliberately left unspecified, that might be defined in some 



*conforming implementations* but not in others, and whose details may differ between <GlossaryTerm styled={true} term={"implementation"}><i>implementations</i></GlossaryTerm>. A *conforming implementation* is encouraged (but not required) to document its treatment of each item in this specification which is marked 



<GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>, although in some cases such documentation might simply identify the item as “undefined.” 



**implementation-independent** *adj.* used to identify or emphasize a behavior or aspect of Common Lisp which does not vary between *conforming implementations*. 



**implicit block** *n.* a <GlossaryTerm styled={true} term={"block"}><i>block</i></GlossaryTerm> introduced by a *macro form* rather than by an explicit <DictionaryLink styled={true} term={"block"}><b>block</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



**implicit compilation** *n. compilation* performed during <GlossaryTerm styled={true} term={"evaluation"}><i>evaluation</i></GlossaryTerm>. 



**implicit progn** *n.* an ordered set of adjacent <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> appearing in another <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>, and defined by their context in that <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> to be executed as if within a <DictionaryLink styled={true} term={"progn"}><b>progn</b></DictionaryLink>. 







 



 



**implicit tagbody** *n.* an ordered set of adjacent <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> and/or <GlossaryTerm styled={true} term={"tag"}><i>tags</i></GlossaryTerm> appearing in another <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>, and defined by their context in that <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> to be executed as if within a <DictionaryLink styled={true} term={"tagbody"}><b>tagbody</b></DictionaryLink>. 



<DictionaryLink styled={true} term={"import"}><b>import</b></DictionaryLink> *v.t.* (a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> into a <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>) to make the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> be <GlossaryTerm styled={true} term={"present"}><i>present</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. **improper list** *n.* a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> which is not a *proper list*: a *circular list* or a *dotted list*. 



**inaccessible** *adj.* not <GlossaryTerm styled={true} term={"accessible"}><i>accessible</i></GlossaryTerm>. 



**indefinite extent** *n.* an <GlossaryTerm styled={true} term={"extent"}><i>extent</i></GlossaryTerm> whose duration is unlimited. “Most Common Lisp objects have indefinite extent.” 



**indefinite scope** *n. scope* that is unlimited. 



**indicator** *n.* a *property indicator* . 



**indirect instance** *n.* (of a *class C*<sub>1</sub>) an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of *class C*<sub>2</sub>, where *C*<sub>2</sub> is a <GlossaryTerm styled={true} term={"subclass"}><i>subclass</i></GlossaryTerm> of *C*<sub>1</sub>. “An integer is an indirect instance of the class <DictionaryLink styled={true} term={"number"}><b>number</b></DictionaryLink>.” 



**inherit** *v.t.* 1. to receive or acquire a quality, trait, or characteristic; to gain access to a feature defined elsewhere. 2. (a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>) to acquire the structure and behavior defined by a <GlossaryTerm styled={true} term={"superclass"}><i>superclass</i></GlossaryTerm>. 3. (a <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>) to make *symbols exported* by another *package accessible* by using <DictionaryLink styled={true} term={"use-package"}><b>use-package</b></DictionaryLink>. 



**initial pprint dispatch table** *n.* the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"print-pprint-dispatch"}><b>\*print-pprint-dispatch\*</b></DictionaryLink> at the time the *Lisp image* is started. 



**initial readtable** *n.* the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"readtable"}><b>\*readtable\*</b></DictionaryLink> at the time the *Lisp image* is started. 



**initialization argument list** *n.* a *property list* of initialization argument <GlossaryTerm styled={true} term={"name"}><i>names</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> used in the protocol for initializing and reinitializing <GlossaryTerm styled={true} term={"instance"}><i>instances</i></GlossaryTerm> of *classes*. See Section 7.1 (Object Creation and Initialization). 



**initialization form** *n.* a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> used to supply the initial <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm>. “The initialization form for a slot in a <DictionaryLink styled={true} term={"defclass"}><b>defclass</b></DictionaryLink> form is introduced by the keyword :initform.” 



**input** *adj.* (of a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>) supporting input operations (*i.e.*, being a “data source”). An *input stream* might also be an *output stream*, in which case it is sometimes called a *bidirectional stream*. See the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> **input-stream-p**. 



**instance** *n.* 1. a *direct instance*. 2. a *generalized instance*. 3. an *indirect instance*. <DictionaryLink styled={true} term={"integer"}><b>integer</b></DictionaryLink> *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"integer"}><b>integer</b></DictionaryLink>, which represents a mathematical integer. 







 



 



**interactive stream** *n.* a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> on which it makes sense to perform interactive 



querying. See Section 21.1.1.1.3 (Interactive Streams). 



<DictionaryLink styled={true} term={"intern"}><b>intern</b></DictionaryLink> *v.t.* 1. (a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> in a <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>) to look up the <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>, returning either a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> with that <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> which was already <GlossaryTerm styled={true} term={"accessible"}><i>accessible</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> or a newly created *internal symbol* of the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> with that <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>. 2. *Idiom.* generally, to observe a protocol whereby objects which are equivalent or have equivalent names under some predicate defined by the protocol are mapped to a single canonical object. 



**internal symbol** *n.* (of a <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>) a symbol which is <GlossaryTerm styled={true} term={"accessible"}><i>accessible</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>, but which is not an *external symbol* of the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. 



**internal time** *n. time*, represented as an *integer* number of *internal time units*. *Absolute internal time* is measured as an offset from an arbitrarily chosen, 



<GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> base. See Section 25.1.4.3 (Internal Time). 



**internal time unit** *n.* a unit of time equal to 1*/n* of a second, for some *implementation defined integer* value of *n*. See the <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm> <DictionaryLink styled={true} term={"internal-time-units-per-second"}><b>internal-time-units-per-second</b></DictionaryLink>. 



**interned** *adj. Trad.* 1. (of a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>) <GlossaryTerm styled={true} term={"accessible"}><i>accessible</i></GlossaryTerm><sub>3</sub> in any <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. 2. (of a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> in a specific <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>) <GlossaryTerm styled={true} term={"present"}><i>present</i></GlossaryTerm> in that <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. 



**interpreted function** *n.* a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> that is not a *compiled function*. (It is possible for there to be a *conforming implementation* which has no *interpreted functions*, but a *conforming program* must not assume that all <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm> are *compiled functions*.) 



**interpreted implementation** *n.* an <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> that uses an execution strategy for *interpreted functions* that does not involve a one-time semantic analysis pre-pass, and instead uses “lazy” (and sometimes repetitious) semantic analysis of <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> as they are encountered during execution. 



**interval designator** *n.* (of *type T*) an ordered pair of <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> that describe a <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"t"}><i>T</i></GlossaryTerm> by delimiting an interval on the real number line. See Section 12.1.6 (Interval Designators). 



**invalid** *n.*, *adj.* 1. *n.* a possible *constituent trait* of a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> which if present signifies that the <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> cannot ever appear in a <GlossaryTerm styled={true} term={"token"}><i>token</i></GlossaryTerm> except under the control of a *single escape character* . For details, see Section 2.1.4.1 (Constituent Characters). 2. *adj.* (of a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> ) being a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> that has *syntax type constituent* in the *current readtable* and that has the *constituent trait invalid* <sub>1</sub>. See Figure 2–8. 



**iteration form** *n.* a *compound form* whose <GlossaryTerm styled={true} term={"operator"}><i>operator</i></GlossaryTerm> is named in Figure 26–3, or a *compound form* that has an *implementation-defined operator* and that is defined by the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> to be an *iteration form*. 







 



 



|<p>**do do-external-symbols dotimes do\* do-symbols loop** </p><p>**do-all-symbols dolist**</p>|

| :- |





**Figure 26–3. Standardized Iteration Forms** 



**iteration variable** *n.* a *variable V* , the <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> for which was created by an *explicit use* of *V* in an *iteration form*. 




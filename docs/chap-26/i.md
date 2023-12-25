---
title: I
sidebar_position: 105
---

**I** 



**I/O customization variable** *n.* one of the *stream variables* in Figure 26–2, or some other (<ClLinks styled={true} term={"implementation-defined"}><i>implementation-defined</i></ClLinks>) *stream variable* that is defined by the <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> to be an *I/O customization variable*. 







 



 



|<p>\*debug-io\* \*error-io\* query-io\* </p><p>\*standard-input\* \*standard-output\* \*trace-output\*</p>|

| :- |





**Figure 26–2. Standardized I/O Customization Variables** 



**identical** *adj.* the <ClLinks styled={true} term={"same"}><i>same</i></ClLinks> under <ClLinks styled={true} term={"eq"}><b>eq</b></ClLinks>. 



**identifier** *n.* 1. a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> used to identify or to distinguish <ClLinks styled={true} term={"name"}><i>names</i></ClLinks>. 2. a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> used the same way. 



**immutable** *adj.* not subject to change, either because no <ClLinks styled={true} term={"operator"}><i>operator</i></ClLinks> is provided which is capable of effecting such change or because some constraint exists which prohibits the use of an <ClLinks styled={true} term={"operator"}><i>operator</i></ClLinks> that might otherwise be capable of effecting such a change. Except as explicitly indicated otherwise, <ClLinks styled={true} term={"implementation"}><i>implementations</i></ClLinks> are not required to detect attempts to modify *immutable objects* or <ClLinks styled={true} term={"cell"}><i>cells</i></ClLinks>; the consequences of attempting to make such 



modification are undefined. “Numbers are immutable.” 



**implementation** *n.* a system, mechanism, or body of <ClLinks styled={true} term={"code"}><i>code</i></ClLinks> that implements the semantics of Common Lisp. 



**implementation limit** *n.* a restriction imposed by an <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks>. 



**implementation-defined** *adj. implementation-dependent*, but required by this 



specification to be defined by each *conforming implementation* and to be documented by the corresponding implementor. 



**implementation-dependent** *adj.* describing a behavior or aspect of Common 



Lisp which has been deliberately left unspecified, that might be defined in some 



*conforming implementations* but not in others, and whose details may differ between <ClLinks styled={true} term={"implementation"}><i>implementations</i></ClLinks>. A *conforming implementation* is encouraged (but not required) to document its treatment of each item in this specification which is marked 



<ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>, although in some cases such documentation might simply identify the item as “undefined.” 



**implementation-independent** *adj.* used to identify or emphasize a behavior or aspect of Common Lisp which does not vary between *conforming implementations*. 



**implicit block** *n.* a <ClLinks styled={true} term={"block"}><i>block</i></ClLinks> introduced by a *macro form* rather than by an explicit <ClLinks styled={true} term={"block"}><b>block</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. 



**implicit compilation** *n. compilation* performed during <ClLinks styled={true} term={"evaluation"}><i>evaluation</i></ClLinks>. 



**implicit progn** *n.* an ordered set of adjacent <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> appearing in another <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>, and defined by their context in that <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> to be executed as if within a <ClLinks styled={true} term={"progn"}><b>progn</b></ClLinks>. 







 



 



**implicit tagbody** *n.* an ordered set of adjacent <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> and/or <ClLinks styled={true} term={"tag"}><i>tags</i></ClLinks> appearing in another <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>, and defined by their context in that <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> to be executed as if within a <ClLinks styled={true} term={"tagbody"}><b>tagbody</b></ClLinks>. 



<ClLinks styled={true} term={"import"}><b>import</b></ClLinks> *v.t.* (a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> into a <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>) to make the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> be <ClLinks styled={true} term={"present"}><i>present</i></ClLinks> in the <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. **improper list** *n.* a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> which is not a *proper list*: a *circular list* or a *dotted list*. 



**inaccessible** *adj.* not <ClLinks styled={true} term={"accessible"}><i>accessible</i></ClLinks>. 



**indefinite extent** *n.* an <ClLinks styled={true} term={"extent"}><i>extent</i></ClLinks> whose duration is unlimited. “Most Common Lisp objects have indefinite extent.” 



**indefinite scope** *n. scope* that is unlimited. 



**indicator** *n.* a *property indicator* . 



**indirect instance** *n.* (of a *class C*<sub>1</sub>) an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> of *class C*<sub>2</sub>, where *C*<sub>2</sub> is a <ClLinks styled={true} term={"subclass"}><i>subclass</i></ClLinks> of *C*<sub>1</sub>. “An integer is an indirect instance of the class <ClLinks styled={true} term={"number"}><b>number</b></ClLinks>.” 



**inherit** *v.t.* 1. to receive or acquire a quality, trait, or characteristic; to gain access to a feature defined elsewhere. 2. (a <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>) to acquire the structure and behavior defined by a <ClLinks styled={true} term={"superclass"}><i>superclass</i></ClLinks>. 3. (a <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>) to make *symbols exported* by another *package accessible* by using <ClLinks styled={true} term={"use-package"}><b>use-package</b></ClLinks>. 



**initial pprint dispatch table** *n.* the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"print-pprint-dispatch"}><b>\*print-pprint-dispatch\*</b></ClLinks> at the time the *Lisp image* is started. 



**initial readtable** *n.* the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"readtable"}><b>\*readtable\*</b></ClLinks> at the time the *Lisp image* is started. 



**initialization argument list** *n.* a *property list* of initialization argument <ClLinks styled={true} term={"name"}><i>names</i></ClLinks> and <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> used in the protocol for initializing and reinitializing <ClLinks styled={true} term={"instance"}><i>instances</i></ClLinks> of *classes*. See Section 7.1 (Object Creation and Initialization). 



**initialization form** *n.* a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> used to supply the initial <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> for a <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> or <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks>. “The initialization form for a slot in a <ClLinks styled={true} term={"defclass"}><b>defclass</b></ClLinks> form is introduced by the keyword :initform.” 



**input** *adj.* (of a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>) supporting input operations (*i.e.*, being a “data source”). An *input stream* might also be an *output stream*, in which case it is sometimes called a *bidirectional stream*. See the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> **input-stream-p**. 



**instance** *n.* 1. a *direct instance*. 2. a *generalized instance*. 3. an *indirect instance*. <ClLinks styled={true} term={"integer"}><b>integer</b></ClLinks> *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"integer"}><b>integer</b></ClLinks>, which represents a mathematical integer. 







 



 



**interactive stream** *n.* a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> on which it makes sense to perform interactive 



querying. See Section 21.1.1.1.3 (Interactive Streams). 



<ClLinks styled={true} term={"intern"}><b>intern</b></ClLinks> *v.t.* 1. (a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> in a <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>) to look up the <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> in the <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>, returning either a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> with that <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> which was already <ClLinks styled={true} term={"accessible"}><i>accessible</i></ClLinks> in the <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> or a newly created *internal symbol* of the <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> with that <ClLinks styled={true} term={"name"}><i>name</i></ClLinks>. 2. *Idiom.* generally, to observe a protocol whereby objects which are equivalent or have equivalent names under some predicate defined by the protocol are mapped to a single canonical object. 



**internal symbol** *n.* (of a <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>) a symbol which is <ClLinks styled={true} term={"accessible"}><i>accessible</i></ClLinks> in the <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>, but which is not an *external symbol* of the <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. 



**internal time** *n. time*, represented as an *integer* number of *internal time units*. *Absolute internal time* is measured as an offset from an arbitrarily chosen, 



<ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> base. See Section 25.1.4.3 (Internal Time). 



**internal time unit** *n.* a unit of time equal to 1*/n* of a second, for some *implementation defined integer* value of *n*. See the <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks> <ClLinks styled={true} term={"internal-time-units-per-second"}><b>internal-time-units-per-second</b></ClLinks>. 



**interned** *adj. Trad.* 1. (of a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>) <ClLinks styled={true} term={"accessible"}><i>accessible</i></ClLinks><sub>3</sub> in any <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. 2. (of a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> in a specific <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>) <ClLinks styled={true} term={"present"}><i>present</i></ClLinks> in that <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. 



**interpreted function** *n.* a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> that is not a *compiled function*. (It is possible for there to be a *conforming implementation* which has no *interpreted functions*, but a *conforming program* must not assume that all <ClLinks styled={true} term={"function"}><i>functions</i></ClLinks> are *compiled functions*.) 



**interpreted implementation** *n.* an <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> that uses an execution strategy for *interpreted functions* that does not involve a one-time semantic analysis pre-pass, and instead uses “lazy” (and sometimes repetitious) semantic analysis of <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> as they are encountered during execution. 



**interval designator** *n.* (of *type T*) an ordered pair of <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> that describe a <ClLinks styled={true} term={"subtype"}><i>subtype</i></ClLinks> of <ClLinks styled={true} term={"t"}><i>T</i></ClLinks> by delimiting an interval on the real number line. See Section 12.1.6 (Interval Designators). 



**invalid** *n.*, *adj.* 1. *n.* a possible *constituent trait* of a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> which if present signifies that the <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> cannot ever appear in a <ClLinks styled={true} term={"token"}><i>token</i></ClLinks> except under the control of a *single escape character* . For details, see Section 2.1.4.1 (Constituent Characters). 2. *adj.* (of a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> ) being a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> that has *syntax type constituent* in the *current readtable* and that has the *constituent trait invalid* <sub>1</sub>. See Figure 2–8. 



**iteration form** *n.* a *compound form* whose <ClLinks styled={true} term={"operator"}><i>operator</i></ClLinks> is named in Figure 26–3, or a *compound form* that has an *implementation-defined operator* and that is defined by the <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> to be an *iteration form*. 







 



 



|<p>**do do-external-symbols dotimes do\* do-symbols loop** </p><p>**do-all-symbols dolist**</p>|

| :- |





**Figure 26–3. Standardized Iteration Forms** 



**iteration variable** *n.* a *variable V* , the <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> for which was created by an *explicit use* of *V* in an *iteration form*. 




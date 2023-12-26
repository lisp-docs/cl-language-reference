---
title: D
sidebar_position: 100
---

**D** 



**data type** *n. Trad.* a <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm>. 



**debug I/O** *n.* the *bidirectional stream* that is the <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of the <GlossaryTerm  term={"variable"}><i>variable</i></GlossaryTerm> **\*debug-io\***. 



**debugger** *n.* a facility that allows the <GlossaryTerm  term={"user"}><i>user</i></GlossaryTerm> to handle a <GlossaryTerm  term={"condition"}><i>condition</i></GlossaryTerm> interactively. For example, the <GlossaryTerm  term={"debugger"}><i>debugger</i></GlossaryTerm> might permit interactive selection of a <GlossaryTerm  term={"restart"}><i>restart</i></GlossaryTerm> from among the *active restarts*, and it might perform additional <GlossaryTerm  term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm> services for the purposes of debugging. 



<DictionaryLink  term={"declaration"}><b>declaration</b></DictionaryLink> *n.* a <GlossaryTerm styled={true} term={"global declaration"}><i>global declaration</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"local declaration"}><i>local declaration</i></GlossaryTerm>. 



**declaration identifier** *n.* one of the <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> <DictionaryLink  term={"declaration"}><b>declaration</b></DictionaryLink>, <DictionaryLink  term={"dynamic-extent"}><b>dynamic-extent</b></DictionaryLink>, <DictionaryLink  term={"ftype"}><b>ftype</b></DictionaryLink>, <DictionaryLink  term={"function"}><b>function</b></DictionaryLink>, <DictionaryLink  term={"ignore"}><b>ignore</b></DictionaryLink>, <DictionaryLink  term={"inline"}><b>inline</b></DictionaryLink>, <DictionaryLink  term={"notinline"}><b>notinline</b></DictionaryLink>, <DictionaryLink  term={"optimize"}><b>optimize</b></DictionaryLink>, <DictionaryLink  term={"special"}><b>special</b></DictionaryLink>, or <DictionaryLink  term={"type"}><b>type</b></DictionaryLink>; or a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> which is the <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> of a <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm>; or a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> which has been *declared* to be a <GlossaryTerm styled={true} term={"declaration identifier"}><i>declaration identifier</i></GlossaryTerm> by using a <DictionaryLink  term={"declaration"}><b>declaration</b></DictionaryLink> <GlossaryTerm  term={"declaration"}><i>declaration</i></GlossaryTerm>. 



**declaration specifier** *n.* an <GlossaryTerm  term={"expression"}><i>expression</i></GlossaryTerm> that can appear at top level of a <DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink> expression or a <DictionaryLink  term={"declaim"}><b>declaim</b></DictionaryLink> form, or as the argument to <DictionaryLink  term={"proclaim"}><b>proclaim</b></DictionaryLink>, and which has a <GlossaryTerm  term={"car"}><i>car</i></GlossaryTerm> which is a <GlossaryTerm styled={true} term={"declaration identifier"}><i>declaration identifier</i></GlossaryTerm> , and which has a <GlossaryTerm  term={"cdr"}><i>cdr</i></GlossaryTerm> that is data interpreted according to rules specific to the <GlossaryTerm styled={true} term={"declaration identifier"}><i>declaration identifier</i></GlossaryTerm> . 



<DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink> *v.* to <GlossaryTerm  term={"establish"}><i>establish</i></GlossaryTerm> a <GlossaryTerm  term={"declaration"}><i>declaration</i></GlossaryTerm>. See <DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink>, <DictionaryLink  term={"declaim"}><b>declaim</b></DictionaryLink>, or <DictionaryLink  term={"proclaim"}><b>proclaim</b></DictionaryLink>. 







 



 



**decline** *v.* (of a <GlossaryTerm  term={"handler"}><i>handler</i></GlossaryTerm> ) to return normally without having *handled* the <GlossaryTerm  term={"condition"}><i>condition</i></GlossaryTerm> being *signaled*, permitting the signaling process to continue as if the <GlossaryTerm  term={"handler"}><i>handler</i></GlossaryTerm> had not been present. 



**decoded time** *n. absolute time*, represented as an ordered series of nine <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> which, taken together, form a description of a point in calendar time, accurate to the nearest second (except that <GlossaryTerm styled={true} term={"leap seconds"}><i>leap seconds</i></GlossaryTerm> are ignored). See Section 25.1.4.1 (Decoded Time). 



**default method** *n.* a <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> having no <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializers</i></GlossaryTerm> other than the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink  term={"t"}><b>t</b></DictionaryLink>. Such a <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> is always an <GlossaryTerm styled={true} term={"applicable method"}><i>applicable method</i></GlossaryTerm> but might be *shadowed* <sub>2</sub> by a more specific <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm>. 



**defaulted initialization argument list** *n.* a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> of alternating initialization 



argument <GlossaryTerm  term={"name"}><i>names</i></GlossaryTerm> and <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> in which unsupplied initialization arguments are 



defaulted, used in the protocol for initializing and reinitializing <GlossaryTerm  term={"instance"}><i>instances</i></GlossaryTerm> of *classes*. 



**define-method-combination arguments lambda list** *n.* a <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> used 



by the :arguments option to <DictionaryLink  term={"define-method-combination"}><b>define-method-combination</b></DictionaryLink>. See Section 3.4.10 



(Define-method-combination Arguments Lambda Lists). 



**define-modify-macro lambda list** *n.* a <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> used by <DictionaryLink  term={"define-modify-macro"}><b>define-modify-macro</b></DictionaryLink>. See Section 3.4.9 (Define-modify-macro Lambda Lists). 



**defined name** *n.* a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> the meaning of which is defined by Common Lisp. 



**defining form** *n.* a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> that has the side-effect of *establishing* a definition. “<DictionaryLink  term={"defun"}><b>defun</b></DictionaryLink> and <DictionaryLink  term={"defparameter"}><b>defparameter</b></DictionaryLink> are defining forms.” 



**defsetf lambda list** *n.* a <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> that is like an <GlossaryTerm styled={true} term={"ordinary lambda list"}><i>ordinary lambda list</i></GlossaryTerm> except that it does not permit **&amp;aux** and that it permits use of **&amp;environment**. See Section 3.4.7 (Defsetf Lambda Lists). 



**deftype lambda list** *n.* a <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> that is like a <GlossaryTerm styled={true} term={"macro lambda list"}><i>macro lambda list</i></GlossaryTerm> except that the default <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> for unsupplied <GlossaryTerm styled={true} term={"optional parameter"}><i>optional parameters</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"keyword parameter"}><i>keyword parameters</i></GlossaryTerm> is the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> **\*** (rather than <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>). See Section 3.4.8 (Deftype Lambda Lists). 



**denormalized** *adj.*, *ANSI*, *IEEE* (of a <GlossaryTerm  term={"float"}><i>float</i></GlossaryTerm>) conforming to the description of 



“denormalized” as described by *IEEE Standard for Binary Floating-Point Arithmetic*. For example, in an <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm> where the minimum possible exponent was -7 but where 0.001 was a valid mantissa, the number 1.0e-10 might be representable as 0.001e-7 internally even if the <GlossaryTerm  term={"normalized"}><i>normalized</i></GlossaryTerm> representation would call for it to 



be represented instead as 1.0e-10 or 0.1e-9. By their nature, *denormalized floats* generally have less precision than *normalized floats*. 







 



 



**derived type** *n.* a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> which is defined in terms of an expansion into 



another <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> . <DictionaryLink  term={"deftype"}><b>deftype</b></DictionaryLink> defines <GlossaryTerm styled={true} term={"derived type"}><i>derived types</i></GlossaryTerm>, and there may be other 



*implementation-defined operators* which do so as well. 



**derived type specifier** *n.* a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"derived type"}><i>derived type</i></GlossaryTerm>. 



**designator** *n.* an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> that denotes another <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. In the dictionary entry for an <GlossaryTerm  term={"operator"}><i>operator</i></GlossaryTerm> if a <GlossaryTerm  term={"parameter"}><i>parameter</i></GlossaryTerm> is described as a <GlossaryTerm  term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm>, the description of the <GlossaryTerm  term={"operator"}><i>operator</i></GlossaryTerm> is written in a way that assumes that appropriate coercion to that <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> has 



already occurred; that is, that the <GlossaryTerm  term={"parameter"}><i>parameter</i></GlossaryTerm> is already of the denoted <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm>. For more detailed information, see Section 1.4.1.5 (Designators). 



**destructive** *adj.* (of an <GlossaryTerm  term={"operator"}><i>operator</i></GlossaryTerm> ) capable of modifying some program-visible aspect of one or more <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> that are either explicit <GlossaryTerm  term={"argument"}><i>arguments</i></GlossaryTerm> to the <GlossaryTerm  term={"operator"}><i>operator</i></GlossaryTerm> or that can be obtained directly or indirectly from the <GlossaryTerm styled={true} term={"global environment"}><i>global environment</i></GlossaryTerm> by the <GlossaryTerm  term={"operator"}><i>operator</i></GlossaryTerm> . 



**destructuring lambda list** *n.* an <GlossaryTerm styled={true} term={"extended lambda list"}><i>extended lambda list</i></GlossaryTerm> used in <DictionaryLink  term={"destructuring-bind"}><b>destructuring-bind</b></DictionaryLink> and nested within <GlossaryTerm styled={true} term={"macro lambda list"}><i>macro lambda lists</i></GlossaryTerm>. See Section 3.4.5 (Destructuring Lambda Lists). 



**different** *adj.* not the <GlossaryTerm  term={"same"}><i>same</i></GlossaryTerm> “The strings "FOO" and "foo" are different under <DictionaryLink  term={"equal"}><b>equal</b></DictionaryLink> but not under <DictionaryLink  term={"equalp"}><b>equalp</b></DictionaryLink>.” 



**digit** *n.* (in a <GlossaryTerm  term={"radix"}><i>radix</i></GlossaryTerm> ) a <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> that is among the possible digits (0 to 9, A to Z, and a to z) and that is defined to have an associated numeric weight as a digit in that <GlossaryTerm  term={"radix"}><i>radix</i></GlossaryTerm> . See Section 13.1.4.6 (Digits in a Radix). 



**dimension** *n.* 1. a non-negative *integer* indicating the number of <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> an <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> can hold along one axis. If the <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> is a <GlossaryTerm  term={"vector"}><i>vector</i></GlossaryTerm> with a <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> , the <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> is ignored. “The second dimension of that array is 7.” 2. an axis of an array. “This array has six dimensions.” 



**direct instance** *n.* (of a *class C*) an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> whose <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> is *C* itself, rather than some <GlossaryTerm  term={"subclass"}><i>subclass</i></GlossaryTerm> of *C*. “The function <DictionaryLink  term={"make-instance"}><b>make-instance</b></DictionaryLink> always returns a direct instance of the class which is (or is named by) its first argument.” 



**direct subclass** *n.* (of a *class C*<sub>1</sub>) a *class C*<sub>2</sub>, such that *C*<sub>1</sub> is a <GlossaryTerm styled={true} term={"direct superclass"}><i>direct superclass</i></GlossaryTerm> of *C*<sub>2</sub>. 



**direct superclass** *n.* (of a *class C*<sub>1</sub>) a *class C*<sub>2</sub> which was explicitly designated as a <GlossaryTerm  term={"superclass"}><i>superclass</i></GlossaryTerm> of *C*<sub>1</sub> in the definition of *C*<sub>1</sub>. 



**disestablish** *v.t.* to withdraw the *establishment* of an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>, a <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm>, an <GlossaryTerm styled={true} term={"exit point"}><i>exit point</i></GlossaryTerm>, a <GlossaryTerm  term={"tag"}><i>tag</i></GlossaryTerm>, a <GlossaryTerm  term={"handler"}><i>handler</i></GlossaryTerm> , a <GlossaryTerm  term={"restart"}><i>restart</i></GlossaryTerm>, or an <GlossaryTerm  term={"environment"}><i>environment</i></GlossaryTerm>. 



**disjoint** *n.* (of <GlossaryTerm  term={"type"}><i>types</i></GlossaryTerm>) having no <GlossaryTerm  term={"element"}><i>elements</i></GlossaryTerm> in common. 







 



 



**dispatching macro character** *n.* a <GlossaryTerm styled={true} term={"macro character"}><i>macro character</i></GlossaryTerm> that has an associated table that specifies the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> to be called for each <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> that is seen following the <GlossaryTerm styled={true} term={"dispatching macro character"}><i>dispatching macro character</i></GlossaryTerm> . See the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"make-dispatch-macro-character"}><b>make-dispatch-macro-character</b></DictionaryLink>. 



**displaced array** *n.* an <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> which has no storage of its own, but which is instead indirected to the storage of another <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>, called its <GlossaryTerm  term={"target"}><i>target</i></GlossaryTerm>, at a specified offset, in such a way that any attempt to <GlossaryTerm  term={"access"}><i>access</i></GlossaryTerm> the <GlossaryTerm styled={true} term={"displaced array"}><i>displaced array</i></GlossaryTerm> implicitly references the *target array*. 



**distinct** *adj.* not <GlossaryTerm  term={"identical"}><i>identical</i></GlossaryTerm>. 



**documentation string** *n.* (in a defining <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>) A *literal string* which because of the context in which it appears (rather than because of some intrinsically observable aspect of the <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>) is taken as documentation. In some cases, the <GlossaryTerm styled={true} term={"documentation string"}><i>documentation string</i></GlossaryTerm> is saved in such a way that it can later be obtained by supplying either an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>, or by supplying a <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> and a “kind” to the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> **documentation**. “The body of code in a <DictionaryLink  term={"defmacro"}><b>defmacro</b></DictionaryLink> form can be preceded by a documentation string of kind <DictionaryLink  term={"function"}><b>function</b></DictionaryLink>.” 



**dot** *n.* the <GlossaryTerm styled={true} term={"standard character"}><i>standard character</i></GlossaryTerm> that is variously called “full stop,” “period,” or “dot” (.). See Figure 2–5. 



**dotted list** *n.* a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> which has a terminating <GlossaryTerm  term={"atom"}><i>atom</i></GlossaryTerm> that is not <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. (An <GlossaryTerm  term={"atom"}><i>atom</i></GlossaryTerm> by itself is not a <GlossaryTerm styled={true} term={"dotted list"}><i>dotted list</i></GlossaryTerm>, however.) 



**dotted pair** *n.* 1. a <GlossaryTerm  term={"cons"}><i>cons</i></GlossaryTerm> whose <GlossaryTerm  term={"cdr"}><i>cdr</i></GlossaryTerm> is a <GlossaryTerm  term={"non-list"}><i>non-list</i></GlossaryTerm>. 2. any <GlossaryTerm  term={"cons"}><i>cons</i></GlossaryTerm>, used to emphasize the use of the <GlossaryTerm  term={"cons"}><i>cons</i></GlossaryTerm> as a symmetric data pair. 



**double float** *n.* an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"double-float"}><b>double-float</b></DictionaryLink>. 



**double-quote** *n.* the <GlossaryTerm styled={true} term={"standard character"}><i>standard character</i></GlossaryTerm> that is variously called “quotation mark” or “double quote” ("). See Figure 2–5. 



**dynamic binding** *n.* a <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm> in a <GlossaryTerm styled={true} term={"dynamic environment"}><i>dynamic environment</i></GlossaryTerm>. 



**dynamic environment** *n.* that part of an <GlossaryTerm  term={"environment"}><i>environment</i></GlossaryTerm> that contains <GlossaryTerm  term={"binding"}><i>bindings</i></GlossaryTerm> 



with <GlossaryTerm styled={true} term={"dynamic extent"}><i>dynamic extent</i></GlossaryTerm>. A <GlossaryTerm styled={true} term={"dynamic environment"}><i>dynamic environment</i></GlossaryTerm> contains, among other things: <GlossaryTerm styled={true} term={"exit point"}><i>exit points</i></GlossaryTerm> established by <DictionaryLink  term={"unwind-protect"}><b>unwind-protect</b></DictionaryLink>, and <GlossaryTerm  term={"binding"}><i>bindings</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"dynamic variable"}><i>dynamic variables</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"exit point"}><i>exit points</i></GlossaryTerm> established by <DictionaryLink  term={"catch"}><b>catch</b></DictionaryLink>, <GlossaryTerm styled={true} term={"condition handler"}><i>condition handlers</i></GlossaryTerm>, and <GlossaryTerm  term={"restart"}><i>restarts</i></GlossaryTerm>. 



**dynamic extent** *n.* an <GlossaryTerm  term={"extent"}><i>extent</i></GlossaryTerm> whose duration is bounded by points of *establishment* and *disestablishment* within the execution of a particular <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. See <GlossaryTerm styled={true} term={"indefinite extent"}><i>indefinite extent</i></GlossaryTerm>. “Dynamic variable bindings have dynamic extent.” 



**dynamic scope** *n. indefinite scope* along with <GlossaryTerm styled={true} term={"dynamic extent"}><i>dynamic extent</i></GlossaryTerm>. 







 



 



**dynamic variable** *n.* a <GlossaryTerm  term={"variable"}><i>variable</i></GlossaryTerm> the <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm> for which is in the <GlossaryTerm styled={true} term={"dynamic environment"}><i>dynamic environment</i></GlossaryTerm>. See <DictionaryLink  term={"special"}><b>special</b></DictionaryLink>. 




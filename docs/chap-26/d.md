---
title: D
sidebar_position: 100
---

**D** 



**data type** *n. Trad.* a <ClLinks  term={"type"}><i>type</i></ClLinks>. 



**debug I/O** *n.* the *bidirectional stream* that is the <ClLinks  term={"value"}><i>value</i></ClLinks> of the <ClLinks  term={"variable"}><i>variable</i></ClLinks> **\*debug-io\***. 



**debugger** *n.* a facility that allows the <ClLinks  term={"user"}><i>user</i></ClLinks> to handle a <ClLinks  term={"condition"}><i>condition</i></ClLinks> interactively. For example, the <ClLinks  term={"debugger"}><i>debugger</i></ClLinks> might permit interactive selection of a <ClLinks  term={"restart"}><i>restart</i></ClLinks> from among the *active restarts*, and it might perform additional <ClLinks  term={"implementation-defined"}><i>implementation-defined</i></ClLinks> services for the purposes of debugging. 



<ClLinks  term={"declaration"}><b>declaration</b></ClLinks> *n.* a <GlossaryTerm styled={true} term={"global declaration"}><i>global declaration</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"local declaration"}><i>local declaration</i></GlossaryTerm>. 



**declaration identifier** *n.* one of the <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> <ClLinks  term={"declaration"}><b>declaration</b></ClLinks>, <ClLinks  term={"dynamic-extent"}><b>dynamic-extent</b></ClLinks>, <ClLinks  term={"ftype"}><b>ftype</b></ClLinks>, <ClLinks  term={"function"}><b>function</b></ClLinks>, <ClLinks  term={"ignore"}><b>ignore</b></ClLinks>, <ClLinks  term={"inline"}><b>inline</b></ClLinks>, <ClLinks  term={"notinline"}><b>notinline</b></ClLinks>, <ClLinks  term={"optimize"}><b>optimize</b></ClLinks>, <ClLinks  term={"special"}><b>special</b></ClLinks>, or <ClLinks  term={"type"}><b>type</b></ClLinks>; or a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> which is the <ClLinks  term={"name"}><i>name</i></ClLinks> of a <ClLinks  term={"type"}><i>type</i></ClLinks>; or a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> which has been *declared* to be a <GlossaryTerm styled={true} term={"declaration identifier"}><i>declaration identifier</i></GlossaryTerm> by using a <ClLinks  term={"declaration"}><b>declaration</b></ClLinks> <ClLinks  term={"declaration"}><i>declaration</i></ClLinks>. 



**declaration specifier** *n.* an <ClLinks  term={"expression"}><i>expression</i></ClLinks> that can appear at top level of a <ClLinks  term={"declare"}><b>declare</b></ClLinks> expression or a <ClLinks  term={"declaim"}><b>declaim</b></ClLinks> form, or as the argument to <ClLinks  term={"proclaim"}><b>proclaim</b></ClLinks>, and which has a <ClLinks  term={"car"}><i>car</i></ClLinks> which is a <GlossaryTerm styled={true} term={"declaration identifier"}><i>declaration identifier</i></GlossaryTerm> , and which has a <ClLinks  term={"cdr"}><i>cdr</i></ClLinks> that is data interpreted according to rules specific to the <GlossaryTerm styled={true} term={"declaration identifier"}><i>declaration identifier</i></GlossaryTerm> . 



<ClLinks  term={"declare"}><b>declare</b></ClLinks> *v.* to <ClLinks  term={"establish"}><i>establish</i></ClLinks> a <ClLinks  term={"declaration"}><i>declaration</i></ClLinks>. See <ClLinks  term={"declare"}><b>declare</b></ClLinks>, <ClLinks  term={"declaim"}><b>declaim</b></ClLinks>, or <ClLinks  term={"proclaim"}><b>proclaim</b></ClLinks>. 







 



 



**decline** *v.* (of a <ClLinks  term={"handler"}><i>handler</i></ClLinks> ) to return normally without having *handled* the <ClLinks  term={"condition"}><i>condition</i></ClLinks> being *signaled*, permitting the signaling process to continue as if the <ClLinks  term={"handler"}><i>handler</i></ClLinks> had not been present. 



**decoded time** *n. absolute time*, represented as an ordered series of nine <ClLinks  term={"object"}><i>objects</i></ClLinks> which, taken together, form a description of a point in calendar time, accurate to the nearest second (except that <GlossaryTerm styled={true} term={"leap seconds"}><i>leap seconds</i></GlossaryTerm> are ignored). See Section 25.1.4.1 (Decoded Time). 



**default method** *n.* a <ClLinks  term={"method"}><i>method</i></ClLinks> having no <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializers</i></GlossaryTerm> other than the <ClLinks  term={"class"}><i>class</i></ClLinks> <ClLinks  term={"t"}><b>t</b></ClLinks>. Such a <ClLinks  term={"method"}><i>method</i></ClLinks> is always an <GlossaryTerm styled={true} term={"applicable method"}><i>applicable method</i></GlossaryTerm> but might be *shadowed* <sub>2</sub> by a more specific <ClLinks  term={"method"}><i>method</i></ClLinks>. 



**defaulted initialization argument list** *n.* a <ClLinks  term={"list"}><i>list</i></ClLinks> of alternating initialization 



argument <ClLinks  term={"name"}><i>names</i></ClLinks> and <ClLinks  term={"value"}><i>values</i></ClLinks> in which unsupplied initialization arguments are 



defaulted, used in the protocol for initializing and reinitializing <ClLinks  term={"instance"}><i>instances</i></ClLinks> of *classes*. 



**define-method-combination arguments lambda list** *n.* a <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> used 



by the :arguments option to <ClLinks  term={"define-method-combination"}><b>define-method-combination</b></ClLinks>. See Section 3.4.10 



(Define-method-combination Arguments Lambda Lists). 



**define-modify-macro lambda list** *n.* a <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> used by <ClLinks  term={"define-modify-macro"}><b>define-modify-macro</b></ClLinks>. See Section 3.4.9 (Define-modify-macro Lambda Lists). 



**defined name** *n.* a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> the meaning of which is defined by Common Lisp. 



**defining form** *n.* a <ClLinks  term={"form"}><i>form</i></ClLinks> that has the side-effect of *establishing* a definition. “<ClLinks  term={"defun"}><b>defun</b></ClLinks> and <ClLinks  term={"defparameter"}><b>defparameter</b></ClLinks> are defining forms.” 



**defsetf lambda list** *n.* a <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> that is like an <GlossaryTerm styled={true} term={"ordinary lambda list"}><i>ordinary lambda list</i></GlossaryTerm> except that it does not permit **&amp;aux** and that it permits use of **&amp;environment**. See Section 3.4.7 (Defsetf Lambda Lists). 



**deftype lambda list** *n.* a <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> that is like a <GlossaryTerm styled={true} term={"macro lambda list"}><i>macro lambda list</i></GlossaryTerm> except that the default <ClLinks  term={"value"}><i>value</i></ClLinks> for unsupplied <GlossaryTerm styled={true} term={"optional parameter"}><i>optional parameters</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"keyword parameter"}><i>keyword parameters</i></GlossaryTerm> is the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> **\*** (rather than <ClLinks  term={"nil"}><b>nil</b></ClLinks>). See Section 3.4.8 (Deftype Lambda Lists). 



**denormalized** *adj.*, *ANSI*, *IEEE* (of a <ClLinks  term={"float"}><i>float</i></ClLinks>) conforming to the description of 



“denormalized” as described by *IEEE Standard for Binary Floating-Point Arithmetic*. For example, in an <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> where the minimum possible exponent was -7 but where 0.001 was a valid mantissa, the number 1.0e-10 might be representable as 0.001e-7 internally even if the <ClLinks  term={"normalized"}><i>normalized</i></ClLinks> representation would call for it to 



be represented instead as 1.0e-10 or 0.1e-9. By their nature, *denormalized floats* generally have less precision than *normalized floats*. 







 



 



**derived type** *n.* a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> which is defined in terms of an expansion into 



another <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> . <ClLinks  term={"deftype"}><b>deftype</b></ClLinks> defines <GlossaryTerm styled={true} term={"derived type"}><i>derived types</i></GlossaryTerm>, and there may be other 



*implementation-defined operators* which do so as well. 



**derived type specifier** *n.* a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"derived type"}><i>derived type</i></GlossaryTerm>. 



**designator** *n.* an <ClLinks  term={"object"}><i>object</i></ClLinks> that denotes another <ClLinks  term={"object"}><i>object</i></ClLinks>. In the dictionary entry for an <ClLinks  term={"operator"}><i>operator</i></ClLinks> if a <ClLinks  term={"parameter"}><i>parameter</i></ClLinks> is described as a <ClLinks  term={"designator"}><i>designator</i></ClLinks> for a <ClLinks  term={"type"}><i>type</i></ClLinks>, the description of the <ClLinks  term={"operator"}><i>operator</i></ClLinks> is written in a way that assumes that appropriate coercion to that <ClLinks  term={"type"}><i>type</i></ClLinks> has 



already occurred; that is, that the <ClLinks  term={"parameter"}><i>parameter</i></ClLinks> is already of the denoted <ClLinks  term={"type"}><i>type</i></ClLinks>. For more detailed information, see Section 1.4.1.5 (Designators). 



**destructive** *adj.* (of an <ClLinks  term={"operator"}><i>operator</i></ClLinks> ) capable of modifying some program-visible aspect of one or more <ClLinks  term={"object"}><i>objects</i></ClLinks> that are either explicit <ClLinks  term={"argument"}><i>arguments</i></ClLinks> to the <ClLinks  term={"operator"}><i>operator</i></ClLinks> or that can be obtained directly or indirectly from the <GlossaryTerm styled={true} term={"global environment"}><i>global environment</i></GlossaryTerm> by the <ClLinks  term={"operator"}><i>operator</i></ClLinks> . 



**destructuring lambda list** *n.* an <GlossaryTerm styled={true} term={"extended lambda list"}><i>extended lambda list</i></GlossaryTerm> used in <ClLinks  term={"destructuring-bind"}><b>destructuring-bind</b></ClLinks> and nested within <GlossaryTerm styled={true} term={"macro lambda list"}><i>macro lambda lists</i></GlossaryTerm>. See Section 3.4.5 (Destructuring Lambda Lists). 



**different** *adj.* not the <ClLinks  term={"same"}><i>same</i></ClLinks> “The strings "FOO" and "foo" are different under <ClLinks  term={"equal"}><b>equal</b></ClLinks> but not under <ClLinks  term={"equalp"}><b>equalp</b></ClLinks>.” 



**digit** *n.* (in a <ClLinks  term={"radix"}><i>radix</i></ClLinks> ) a <ClLinks  term={"character"}><i>character</i></ClLinks> that is among the possible digits (0 to 9, A to Z, and a to z) and that is defined to have an associated numeric weight as a digit in that <ClLinks  term={"radix"}><i>radix</i></ClLinks> . See Section 13.1.4.6 (Digits in a Radix). 



**dimension** *n.* 1. a non-negative *integer* indicating the number of <ClLinks  term={"object"}><i>objects</i></ClLinks> an <ClLinks  term={"array"}><i>array</i></ClLinks> can hold along one axis. If the <ClLinks  term={"array"}><i>array</i></ClLinks> is a <ClLinks  term={"vector"}><i>vector</i></ClLinks> with a <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> , the <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> is ignored. “The second dimension of that array is 7.” 2. an axis of an array. “This array has six dimensions.” 



**direct instance** *n.* (of a *class C*) an <ClLinks  term={"object"}><i>object</i></ClLinks> whose <ClLinks  term={"class"}><i>class</i></ClLinks> is *C* itself, rather than some <ClLinks  term={"subclass"}><i>subclass</i></ClLinks> of *C*. “The function <ClLinks  term={"make-instance"}><b>make-instance</b></ClLinks> always returns a direct instance of the class which is (or is named by) its first argument.” 



**direct subclass** *n.* (of a *class C*<sub>1</sub>) a *class C*<sub>2</sub>, such that *C*<sub>1</sub> is a <GlossaryTerm styled={true} term={"direct superclass"}><i>direct superclass</i></GlossaryTerm> of *C*<sub>2</sub>. 



**direct superclass** *n.* (of a *class C*<sub>1</sub>) a *class C*<sub>2</sub> which was explicitly designated as a <ClLinks  term={"superclass"}><i>superclass</i></ClLinks> of *C*<sub>1</sub> in the definition of *C*<sub>1</sub>. 



**disestablish** *v.t.* to withdraw the *establishment* of an <ClLinks  term={"object"}><i>object</i></ClLinks>, a <ClLinks  term={"binding"}><i>binding</i></ClLinks>, an <GlossaryTerm styled={true} term={"exit point"}><i>exit point</i></GlossaryTerm>, a <ClLinks  term={"tag"}><i>tag</i></ClLinks>, a <ClLinks  term={"handler"}><i>handler</i></ClLinks> , a <ClLinks  term={"restart"}><i>restart</i></ClLinks>, or an <ClLinks  term={"environment"}><i>environment</i></ClLinks>. 



**disjoint** *n.* (of <ClLinks  term={"type"}><i>types</i></ClLinks>) having no <ClLinks  term={"element"}><i>elements</i></ClLinks> in common. 







 



 



**dispatching macro character** *n.* a <GlossaryTerm styled={true} term={"macro character"}><i>macro character</i></GlossaryTerm> that has an associated table that specifies the <ClLinks  term={"function"}><i>function</i></ClLinks> to be called for each <ClLinks  term={"character"}><i>character</i></ClLinks> that is seen following the <GlossaryTerm styled={true} term={"dispatching macro character"}><i>dispatching macro character</i></GlossaryTerm> . See the <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"make-dispatch-macro-character"}><b>make-dispatch-macro-character</b></ClLinks>. 



**displaced array** *n.* an <ClLinks  term={"array"}><i>array</i></ClLinks> which has no storage of its own, but which is instead indirected to the storage of another <ClLinks  term={"array"}><i>array</i></ClLinks>, called its <ClLinks  term={"target"}><i>target</i></ClLinks>, at a specified offset, in such a way that any attempt to <ClLinks  term={"access"}><i>access</i></ClLinks> the <GlossaryTerm styled={true} term={"displaced array"}><i>displaced array</i></GlossaryTerm> implicitly references the *target array*. 



**distinct** *adj.* not <ClLinks  term={"identical"}><i>identical</i></ClLinks>. 



**documentation string** *n.* (in a defining <ClLinks  term={"form"}><i>form</i></ClLinks>) A *literal string* which because of the context in which it appears (rather than because of some intrinsically observable aspect of the <ClLinks  term={"string"}><i>string</i></ClLinks>) is taken as documentation. In some cases, the <GlossaryTerm styled={true} term={"documentation string"}><i>documentation string</i></GlossaryTerm> is saved in such a way that it can later be obtained by supplying either an <ClLinks  term={"object"}><i>object</i></ClLinks>, or by supplying a <ClLinks  term={"name"}><i>name</i></ClLinks> and a “kind” to the <ClLinks  term={"function"}><i>function</i></ClLinks> **documentation**. “The body of code in a <ClLinks  term={"defmacro"}><b>defmacro</b></ClLinks> form can be preceded by a documentation string of kind <ClLinks  term={"function"}><b>function</b></ClLinks>.” 



**dot** *n.* the <GlossaryTerm styled={true} term={"standard character"}><i>standard character</i></GlossaryTerm> that is variously called “full stop,” “period,” or “dot” (.). See Figure 2–5. 



**dotted list** *n.* a <ClLinks  term={"list"}><i>list</i></ClLinks> which has a terminating <ClLinks  term={"atom"}><i>atom</i></ClLinks> that is not <ClLinks  term={"nil"}><b>nil</b></ClLinks>. (An <ClLinks  term={"atom"}><i>atom</i></ClLinks> by itself is not a <GlossaryTerm styled={true} term={"dotted list"}><i>dotted list</i></GlossaryTerm>, however.) 



**dotted pair** *n.* 1. a <ClLinks  term={"cons"}><i>cons</i></ClLinks> whose <ClLinks  term={"cdr"}><i>cdr</i></ClLinks> is a <ClLinks  term={"non-list"}><i>non-list</i></ClLinks>. 2. any <ClLinks  term={"cons"}><i>cons</i></ClLinks>, used to emphasize the use of the <ClLinks  term={"cons"}><i>cons</i></ClLinks> as a symmetric data pair. 



**double float** *n.* an <ClLinks  term={"object"}><i>object</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"double-float"}><b>double-float</b></ClLinks>. 



**double-quote** *n.* the <GlossaryTerm styled={true} term={"standard character"}><i>standard character</i></GlossaryTerm> that is variously called “quotation mark” or “double quote” ("). See Figure 2–5. 



**dynamic binding** *n.* a <ClLinks  term={"binding"}><i>binding</i></ClLinks> in a <GlossaryTerm styled={true} term={"dynamic environment"}><i>dynamic environment</i></GlossaryTerm>. 



**dynamic environment** *n.* that part of an <ClLinks  term={"environment"}><i>environment</i></ClLinks> that contains <ClLinks  term={"binding"}><i>bindings</i></ClLinks> 



with <GlossaryTerm styled={true} term={"dynamic extent"}><i>dynamic extent</i></GlossaryTerm>. A <GlossaryTerm styled={true} term={"dynamic environment"}><i>dynamic environment</i></GlossaryTerm> contains, among other things: <GlossaryTerm styled={true} term={"exit point"}><i>exit points</i></GlossaryTerm> established by <ClLinks  term={"unwind-protect"}><b>unwind-protect</b></ClLinks>, and <ClLinks  term={"binding"}><i>bindings</i></ClLinks> of <GlossaryTerm styled={true} term={"dynamic variable"}><i>dynamic variables</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"exit point"}><i>exit points</i></GlossaryTerm> established by <ClLinks  term={"catch"}><b>catch</b></ClLinks>, <GlossaryTerm styled={true} term={"condition handler"}><i>condition handlers</i></GlossaryTerm>, and <ClLinks  term={"restart"}><i>restarts</i></ClLinks>. 



**dynamic extent** *n.* an <ClLinks  term={"extent"}><i>extent</i></ClLinks> whose duration is bounded by points of *establishment* and *disestablishment* within the execution of a particular <ClLinks  term={"form"}><i>form</i></ClLinks>. See <GlossaryTerm styled={true} term={"indefinite extent"}><i>indefinite extent</i></GlossaryTerm>. “Dynamic variable bindings have dynamic extent.” 



**dynamic scope** *n. indefinite scope* along with <GlossaryTerm styled={true} term={"dynamic extent"}><i>dynamic extent</i></GlossaryTerm>. 







 



 



**dynamic variable** *n.* a <ClLinks  term={"variable"}><i>variable</i></ClLinks> the <ClLinks  term={"binding"}><i>binding</i></ClLinks> for which is in the <GlossaryTerm styled={true} term={"dynamic environment"}><i>dynamic environment</i></GlossaryTerm>. See <ClLinks  term={"special"}><b>special</b></ClLinks>. 




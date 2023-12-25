---
title: D
sidebar_position: 100
---

**D** 



**data type** *n. Trad.* a <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>. 



**debug I/O** *n.* the *bidirectional stream* that is the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm> **\*debug-io\***. 



**debugger** *n.* a facility that allows the <GlossaryTerm styled={true} term={"user"}><i>user</i></GlossaryTerm> to handle a <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> interactively. For example, the <GlossaryTerm styled={true} term={"debugger"}><i>debugger</i></GlossaryTerm> might permit interactive selection of a <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm> from among the *active restarts*, and it might perform additional <GlossaryTerm styled={true} term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm> services for the purposes of debugging. 



<DictionaryLink styled={true} term={"declaration"}><b>declaration</b></DictionaryLink> *n.* a *global declaration* or *local declaration*. 



**declaration identifier** *n.* one of the <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> <DictionaryLink styled={true} term={"declaration"}><b>declaration</b></DictionaryLink>, <DictionaryLink styled={true} term={"dynamic-extent"}><b>dynamic-extent</b></DictionaryLink>, <DictionaryLink styled={true} term={"ftype"}><b>ftype</b></DictionaryLink>, <DictionaryLink styled={true} term={"function"}><b>function</b></DictionaryLink>, <DictionaryLink styled={true} term={"ignore"}><b>ignore</b></DictionaryLink>, <DictionaryLink styled={true} term={"inline"}><b>inline</b></DictionaryLink>, <DictionaryLink styled={true} term={"notinline"}><b>notinline</b></DictionaryLink>, <DictionaryLink styled={true} term={"optimize"}><b>optimize</b></DictionaryLink>, <DictionaryLink styled={true} term={"special"}><b>special</b></DictionaryLink>, or <DictionaryLink styled={true} term={"type"}><b>type</b></DictionaryLink>; or a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> which is the <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> of a <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>; or a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> which has been *declared* to be a *declaration identifier* by using a <DictionaryLink styled={true} term={"declaration"}><b>declaration</b></DictionaryLink> <GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm>. 



**declaration specifier** *n.* an <GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm> that can appear at top level of a <DictionaryLink styled={true} term={"declare"}><b>declare</b></DictionaryLink> expression or a <DictionaryLink styled={true} term={"declaim"}><b>declaim</b></DictionaryLink> form, or as the argument to <DictionaryLink styled={true} term={"proclaim"}><b>proclaim</b></DictionaryLink>, and which has a <GlossaryTerm styled={true} term={"car"}><i>car</i></GlossaryTerm> which is a *declaration identifier* , and which has a <GlossaryTerm styled={true} term={"cdr"}><i>cdr</i></GlossaryTerm> that is data interpreted according to rules specific to the *declaration identifier* . 



<DictionaryLink styled={true} term={"declare"}><b>declare</b></DictionaryLink> *v.* to <GlossaryTerm styled={true} term={"establish"}><i>establish</i></GlossaryTerm> a <GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm>. See <DictionaryLink styled={true} term={"declare"}><b>declare</b></DictionaryLink>, <DictionaryLink styled={true} term={"declaim"}><b>declaim</b></DictionaryLink>, or <DictionaryLink styled={true} term={"proclaim"}><b>proclaim</b></DictionaryLink>. 







 



 



**decline** *v.* (of a <GlossaryTerm styled={true} term={"handler"}><i>handler</i></GlossaryTerm> ) to return normally without having *handled* the <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> being *signaled*, permitting the signaling process to continue as if the <GlossaryTerm styled={true} term={"handler"}><i>handler</i></GlossaryTerm> had not been present. 



**decoded time** *n. absolute time*, represented as an ordered series of nine <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> which, taken together, form a description of a point in calendar time, accurate to the nearest second (except that *leap seconds* are ignored). See Section 25.1.4.1 (Decoded Time). 



**default method** *n.* a <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> having no *parameter specializers* other than the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink>. Such a <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> is always an *applicable method* but might be *shadowed* <sub>2</sub> by a more specific <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm>. 



**defaulted initialization argument list** *n.* a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of alternating initialization 



argument <GlossaryTerm styled={true} term={"name"}><i>names</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> in which unsupplied initialization arguments are 



defaulted, used in the protocol for initializing and reinitializing <GlossaryTerm styled={true} term={"instance"}><i>instances</i></GlossaryTerm> of *classes*. 



**define-method-combination arguments lambda list** *n.* a *lambda list* used 



by the :arguments option to <DictionaryLink styled={true} term={"define-method-combination"}><b>define-method-combination</b></DictionaryLink>. See Section 3.4.10 



(Define-method-combination Arguments Lambda Lists). 



**define-modify-macro lambda list** *n.* a *lambda list* used by <DictionaryLink styled={true} term={"define-modify-macro"}><b>define-modify-macro</b></DictionaryLink>. See Section 3.4.9 (Define-modify-macro Lambda Lists). 



**defined name** *n.* a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> the meaning of which is defined by Common Lisp. 



**defining form** *n.* a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> that has the side-effect of *establishing* a definition. “<DictionaryLink styled={true} term={"defun"}><b>defun</b></DictionaryLink> and <DictionaryLink styled={true} term={"defparameter"}><b>defparameter</b></DictionaryLink> are defining forms.” 



**defsetf lambda list** *n.* a *lambda list* that is like an *ordinary lambda list* except that it does not permit **&amp;aux** and that it permits use of **&amp;environment**. See Section 3.4.7 (Defsetf Lambda Lists). 



**deftype lambda list** *n.* a *lambda list* that is like a *macro lambda list* except that the default <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> for unsupplied *optional parameters* and *keyword parameters* is the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> **\*** (rather than <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>). See Section 3.4.8 (Deftype Lambda Lists). 



**denormalized** *adj.*, *ANSI*, *IEEE* (of a <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm>) conforming to the description of 



“denormalized” as described by *IEEE Standard for Binary Floating-Point Arithmetic*. For example, in an <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> where the minimum possible exponent was -7 but where 0.001 was a valid mantissa, the number 1.0e-10 might be representable as 0.001e-7 internally even if the <GlossaryTerm styled={true} term={"normalized"}><i>normalized</i></GlossaryTerm> representation would call for it to 



be represented instead as 1.0e-10 or 0.1e-9. By their nature, *denormalized floats* generally have less precision than *normalized floats*. 







 



 



**derived type** *n.* a *type specifier* which is defined in terms of an expansion into 



another *type specifier* . <DictionaryLink styled={true} term={"deftype"}><b>deftype</b></DictionaryLink> defines *derived types*, and there may be other 



*implementation-defined operators* which do so as well. 



**derived type specifier** *n.* a *type specifier* for a *derived type*. 



**designator** *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that denotes another <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. In the dictionary entry for an <GlossaryTerm styled={true} term={"operator"}><i>operator</i></GlossaryTerm> if a <GlossaryTerm styled={true} term={"parameter"}><i>parameter</i></GlossaryTerm> is described as a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>, the description of the <GlossaryTerm styled={true} term={"operator"}><i>operator</i></GlossaryTerm> is written in a way that assumes that appropriate coercion to that <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> has 



already occurred; that is, that the <GlossaryTerm styled={true} term={"parameter"}><i>parameter</i></GlossaryTerm> is already of the denoted <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>. For more detailed information, see Section 1.4.1.5 (Designators). 



**destructive** *adj.* (of an <GlossaryTerm styled={true} term={"operator"}><i>operator</i></GlossaryTerm> ) capable of modifying some program-visible aspect of one or more <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> that are either explicit <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> to the <GlossaryTerm styled={true} term={"operator"}><i>operator</i></GlossaryTerm> or that can be obtained directly or indirectly from the *global environment* by the <GlossaryTerm styled={true} term={"operator"}><i>operator</i></GlossaryTerm> . 



**destructuring lambda list** *n.* an *extended lambda list* used in <DictionaryLink styled={true} term={"destructuring-bind"}><b>destructuring-bind</b></DictionaryLink> and nested within *macro lambda lists*. See Section 3.4.5 (Destructuring Lambda Lists). 



**different** *adj.* not the <GlossaryTerm styled={true} term={"same"}><i>same</i></GlossaryTerm> “The strings "FOO" and "foo" are different under <DictionaryLink styled={true} term={"equal"}><b>equal</b></DictionaryLink> but not under <DictionaryLink styled={true} term={"equalp"}><b>equalp</b></DictionaryLink>.” 



**digit** *n.* (in a <GlossaryTerm styled={true} term={"radix"}><i>radix</i></GlossaryTerm> ) a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> that is among the possible digits (0 to 9, A to Z, and a to z) and that is defined to have an associated numeric weight as a digit in that <GlossaryTerm styled={true} term={"radix"}><i>radix</i></GlossaryTerm> . See Section 13.1.4.6 (Digits in a Radix). 



**dimension** *n.* 1. a non-negative *integer* indicating the number of <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> can hold along one axis. If the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> with a *fill pointer* , the *fill pointer* is ignored. “The second dimension of that array is 7.” 2. an axis of an array. “This array has six dimensions.” 



**direct instance** *n.* (of a *class C*) an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> whose <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> is *C* itself, rather than some <GlossaryTerm styled={true} term={"subclass"}><i>subclass</i></GlossaryTerm> of *C*. “The function <DictionaryLink styled={true} term={"make-instance"}><b>make-instance</b></DictionaryLink> always returns a direct instance of the class which is (or is named by) its first argument.” 



**direct subclass** *n.* (of a *class C*<sub>1</sub>) a *class C*<sub>2</sub>, such that *C*<sub>1</sub> is a *direct superclass* of *C*<sub>2</sub>. 



**direct superclass** *n.* (of a *class C*<sub>1</sub>) a *class C*<sub>2</sub> which was explicitly designated as a <GlossaryTerm styled={true} term={"superclass"}><i>superclass</i></GlossaryTerm> of *C*<sub>1</sub> in the definition of *C*<sub>1</sub>. 



**disestablish** *v.t.* to withdraw the *establishment* of an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm>, an *exit point*, a <GlossaryTerm styled={true} term={"tag"}><i>tag</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"handler"}><i>handler</i></GlossaryTerm> , a <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm>, or an <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm>. 



**disjoint** *n.* (of <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm>) having no <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm> in common. 







 



 



**dispatching macro character** *n.* a *macro character* that has an associated table that specifies the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> to be called for each <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> that is seen following the *dispatching macro character* . See the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"make-dispatch-macro-character"}><b>make-dispatch-macro-character</b></DictionaryLink>. 



**displaced array** *n.* an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> which has no storage of its own, but which is instead indirected to the storage of another <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>, called its <GlossaryTerm styled={true} term={"target"}><i>target</i></GlossaryTerm>, at a specified offset, in such a way that any attempt to <GlossaryTerm styled={true} term={"access"}><i>access</i></GlossaryTerm> the *displaced array* implicitly references the *target array*. 



**distinct** *adj.* not <GlossaryTerm styled={true} term={"identical"}><i>identical</i></GlossaryTerm>. 



**documentation string** *n.* (in a defining <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>) A *literal string* which because of the context in which it appears (rather than because of some intrinsically observable aspect of the <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>) is taken as documentation. In some cases, the *documentation string* is saved in such a way that it can later be obtained by supplying either an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>, or by supplying a <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> and a “kind” to the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> **documentation**. “The body of code in a <DictionaryLink styled={true} term={"defmacro"}><b>defmacro</b></DictionaryLink> form can be preceded by a documentation string of kind <DictionaryLink styled={true} term={"function"}><b>function</b></DictionaryLink>.” 



**dot** *n.* the *standard character* that is variously called “full stop,” “period,” or “dot” (.). See Figure 2–5. 



**dotted list** *n.* a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> which has a terminating <GlossaryTerm styled={true} term={"atom"}><i>atom</i></GlossaryTerm> that is not <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. (An <GlossaryTerm styled={true} term={"atom"}><i>atom</i></GlossaryTerm> by itself is not a *dotted list*, however.) 



**dotted pair** *n.* 1. a <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm> whose <GlossaryTerm styled={true} term={"cdr"}><i>cdr</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"non-list"}><i>non-list</i></GlossaryTerm>. 2. any <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm>, used to emphasize the use of the <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm> as a symmetric data pair. 



**double float** *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"double-float"}><b>double-float</b></DictionaryLink>. 



**double-quote** *n.* the *standard character* that is variously called “quotation mark” or “double quote” ("). See Figure 2–5. 



**dynamic binding** *n.* a <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> in a *dynamic environment*. 



**dynamic environment** *n.* that part of an <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm> that contains <GlossaryTerm styled={true} term={"binding"}><i>bindings</i></GlossaryTerm> 



with *dynamic extent*. A *dynamic environment* contains, among other things: *exit points* established by <DictionaryLink styled={true} term={"unwind-protect"}><b>unwind-protect</b></DictionaryLink>, and <GlossaryTerm styled={true} term={"binding"}><i>bindings</i></GlossaryTerm> of *dynamic variables*, *exit points* established by <DictionaryLink styled={true} term={"catch"}><b>catch</b></DictionaryLink>, *condition handlers*, and <GlossaryTerm styled={true} term={"restart"}><i>restarts</i></GlossaryTerm>. 



**dynamic extent** *n.* an <GlossaryTerm styled={true} term={"extent"}><i>extent</i></GlossaryTerm> whose duration is bounded by points of *establishment* and *disestablishment* within the execution of a particular <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. See *indefinite extent*. “Dynamic variable bindings have dynamic extent.” 



**dynamic scope** *n. indefinite scope* along with *dynamic extent*. 







 



 



**dynamic variable** *n.* a <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm> the <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> for which is in the *dynamic environment*. See <DictionaryLink styled={true} term={"special"}><b>special</b></DictionaryLink>. 




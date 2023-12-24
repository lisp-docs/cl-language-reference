---
title: D
sidebar_position: 100
---

**D** 



**data type** *n. Trad.* a <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>. 



**debug I/O** *n.* the *bidirectional stream* that is the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of the <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks> **\*debug-io\***. 



**debugger** *n.* a facility that allows the <ClLinks styled={true} term={"user"}><i>user</i></ClLinks> to handle a <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> interactively. For example, the <ClLinks styled={true} term={"debugger"}><i>debugger</i></ClLinks> might permit interactive selection of a <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks> from among the *active restarts*, and it might perform additional <ClLinks styled={true} term={"implementation-defined"}><i>implementation-defined</i></ClLinks> services for the purposes of debugging. 



<ClLinks styled={true} term={"declaration"}><b>declaration</b></ClLinks> *n.* a *global declaration* or *local declaration*. 



**declaration identifier** *n.* one of the <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> <ClLinks styled={true} term={"declaration"}><b>declaration</b></ClLinks>, <ClLinks styled={true} term={"dynamic-extent"}><b>dynamic-extent</b></ClLinks>, <ClLinks styled={true} term={"ftype"}><b>ftype</b></ClLinks>, <ClLinks styled={true} term={"function"}><b>function</b></ClLinks>, <ClLinks styled={true} term={"ignore"}><b>ignore</b></ClLinks>, <ClLinks styled={true} term={"inline"}><b>inline</b></ClLinks>, <ClLinks styled={true} term={"notinline"}><b>notinline</b></ClLinks>, <ClLinks styled={true} term={"optimize"}><b>optimize</b></ClLinks>, <ClLinks styled={true} term={"special"}><b>special</b></ClLinks>, or <ClLinks styled={true} term={"type"}><b>type</b></ClLinks>; or a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> which is the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> of a <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>; or a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> which has been *declared* to be a *declaration identifier* by using a <ClLinks styled={true} term={"declaration"}><b>declaration</b></ClLinks> <ClLinks styled={true} term={"declaration"}><i>declaration</i></ClLinks>. 



**declaration specifier** *n.* an <ClLinks styled={true} term={"expression"}><i>expression</i></ClLinks> that can appear at top level of a <ClLinks styled={true} term={"declare"}><b>declare</b></ClLinks> expression or a <ClLinks styled={true} term={"declaim"}><b>declaim</b></ClLinks> form, or as the argument to <ClLinks styled={true} term={"proclaim"}><b>proclaim</b></ClLinks>, and which has a <ClLinks styled={true} term={"car"}><i>car</i></ClLinks> which is a *declaration identifier* , and which has a <ClLinks styled={true} term={"cdr"}><i>cdr</i></ClLinks> that is data interpreted according to rules specific to the *declaration identifier* . 



<ClLinks styled={true} term={"declare"}><b>declare</b></ClLinks> *v.* to <ClLinks styled={true} term={"establish"}><i>establish</i></ClLinks> a <ClLinks styled={true} term={"declaration"}><i>declaration</i></ClLinks>. See <ClLinks styled={true} term={"declare"}><b>declare</b></ClLinks>, <ClLinks styled={true} term={"declaim"}><b>declaim</b></ClLinks>, or <ClLinks styled={true} term={"proclaim"}><b>proclaim</b></ClLinks>. 







 



 



**decline** *v.* (of a <ClLinks styled={true} term={"handler"}><i>handler</i></ClLinks> ) to return normally without having *handled* the <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> being *signaled*, permitting the signaling process to continue as if the <ClLinks styled={true} term={"handler"}><i>handler</i></ClLinks> had not been present. 



**decoded time** *n. absolute time*, represented as an ordered series of nine <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> which, taken together, form a description of a point in calendar time, accurate to the nearest second (except that *leap seconds* are ignored). See Section 25.1.4.1 (Decoded Time). 



**default method** *n.* a <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> having no *parameter specializers* other than the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> <ClLinks styled={true} term={"t"}><b>t</b></ClLinks>. Such a <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> is always an *applicable method* but might be *shadowed* <sub>2</sub> by a more specific <ClLinks styled={true} term={"method"}><i>method</i></ClLinks>. 



**defaulted initialization argument list** *n.* a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of alternating initialization 



argument <ClLinks styled={true} term={"name"}><i>names</i></ClLinks> and <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> in which unsupplied initialization arguments are 



defaulted, used in the protocol for initializing and reinitializing <ClLinks styled={true} term={"instance"}><i>instances</i></ClLinks> of *classes*. 



**define-method-combination arguments lambda list** *n.* a *lambda list* used 



by the :arguments option to <ClLinks styled={true} term={"define-method-combination"}><b>define-method-combination</b></ClLinks>. See Section 3.4.10 



(Define-method-combination Arguments Lambda Lists). 



**define-modify-macro lambda list** *n.* a *lambda list* used by <ClLinks styled={true} term={"define-modify-macro"}><b>define-modify-macro</b></ClLinks>. See Section 3.4.9 (Define-modify-macro Lambda Lists). 



**defined name** *n.* a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> the meaning of which is defined by Common Lisp. 



**defining form** *n.* a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> that has the side-effect of *establishing* a definition. “<ClLinks styled={true} term={"defun"}><b>defun</b></ClLinks> and <ClLinks styled={true} term={"defparameter"}><b>defparameter</b></ClLinks> are defining forms.” 



**defsetf lambda list** *n.* a *lambda list* that is like an *ordinary lambda list* except that it does not permit **&amp;aux** and that it permits use of **&amp;environment**. See Section 3.4.7 (Defsetf Lambda Lists). 



**deftype lambda list** *n.* a *lambda list* that is like a *macro lambda list* except that the default <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> for unsupplied *optional parameters* and *keyword parameters* is the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> **\*** (rather than <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>). See Section 3.4.8 (Deftype Lambda Lists). 



**denormalized** *adj.*, *ANSI*, *IEEE* (of a <ClLinks styled={true} term={"float"}><i>float</i></ClLinks>) conforming to the description of 



“denormalized” as described by *IEEE Standard for Binary Floating-Point Arithmetic*. For example, in an <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> where the minimum possible exponent was -7 but where 0.001 was a valid mantissa, the number 1.0e-10 might be representable as 0.001e-7 internally even if the <ClLinks styled={true} term={"normalized"}><i>normalized</i></ClLinks> representation would call for it to 



be represented instead as 1.0e-10 or 0.1e-9. By their nature, *denormalized floats* generally have less precision than *normalized floats*. 







 



 



**derived type** *n.* a *type specifier* which is defined in terms of an expansion into 



another *type specifier* . <ClLinks styled={true} term={"deftype"}><b>deftype</b></ClLinks> defines *derived types*, and there may be other 



*implementation-defined operators* which do so as well. 



**derived type specifier** *n.* a *type specifier* for a *derived type*. 



**designator** *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that denotes another <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. In the dictionary entry for an <ClLinks styled={true} term={"operator"}><i>operator</i></ClLinks> if a <ClLinks styled={true} term={"parameter"}><i>parameter</i></ClLinks> is described as a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>, the description of the <ClLinks styled={true} term={"operator"}><i>operator</i></ClLinks> is written in a way that assumes that appropriate coercion to that <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> has 



already occurred; that is, that the <ClLinks styled={true} term={"parameter"}><i>parameter</i></ClLinks> is already of the denoted <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>. For more detailed information, see Section 1.4.1.5 (Designators). 



**destructive** *adj.* (of an <ClLinks styled={true} term={"operator"}><i>operator</i></ClLinks> ) capable of modifying some program-visible aspect of one or more <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> that are either explicit <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> to the <ClLinks styled={true} term={"operator"}><i>operator</i></ClLinks> or that can be obtained directly or indirectly from the *global environment* by the <ClLinks styled={true} term={"operator"}><i>operator</i></ClLinks> . 



**destructuring lambda list** *n.* an *extended lambda list* used in <ClLinks styled={true} term={"destructuring-bind"}><b>destructuring-bind</b></ClLinks> and nested within *macro lambda lists*. See Section 3.4.5 (Destructuring Lambda Lists). 



**different** *adj.* not the <ClLinks styled={true} term={"same"}><i>same</i></ClLinks> “The strings "FOO" and "foo" are different under <ClLinks styled={true} term={"equal"}><b>equal</b></ClLinks> but not under <ClLinks styled={true} term={"equalp"}><b>equalp</b></ClLinks>.” 



**digit** *n.* (in a <ClLinks styled={true} term={"radix"}><i>radix</i></ClLinks> ) a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> that is among the possible digits (0 to 9, A to Z, and a to z) and that is defined to have an associated numeric weight as a digit in that <ClLinks styled={true} term={"radix"}><i>radix</i></ClLinks> . See Section 13.1.4.6 (Digits in a Radix). 



**dimension** *n.* 1. a non-negative *integer* indicating the number of <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> can hold along one axis. If the <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> is a <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> with a *fill pointer* , the *fill pointer* is ignored. “The second dimension of that array is 7.” 2. an axis of an array. “This array has six dimensions.” 



**direct instance** *n.* (of a *class C*) an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> whose <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> is *C* itself, rather than some <ClLinks styled={true} term={"subclass"}><i>subclass</i></ClLinks> of *C*. “The function <ClLinks styled={true} term={"make-instance"}><b>make-instance</b></ClLinks> always returns a direct instance of the class which is (or is named by) its first argument.” 



**direct subclass** *n.* (of a *class C*<sub>1</sub>) a *class C*<sub>2</sub>, such that *C*<sub>1</sub> is a *direct superclass* of *C*<sub>2</sub>. 



**direct superclass** *n.* (of a *class C*<sub>1</sub>) a *class C*<sub>2</sub> which was explicitly designated as a <ClLinks styled={true} term={"superclass"}><i>superclass</i></ClLinks> of *C*<sub>1</sub> in the definition of *C*<sub>1</sub>. 



**disestablish** *v.t.* to withdraw the *establishment* of an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>, a <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks>, an *exit point*, a <ClLinks styled={true} term={"tag"}><i>tag</i></ClLinks>, a <ClLinks styled={true} term={"handler"}><i>handler</i></ClLinks> , a <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks>, or an <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks>. 



**disjoint** *n.* (of <ClLinks styled={true} term={"type"}><i>types</i></ClLinks>) having no <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks> in common. 







 



 



**dispatching macro character** *n.* a *macro character* that has an associated table that specifies the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> to be called for each <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> that is seen following the *dispatching macro character* . See the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"make-dispatch-macro-character"}><b>make-dispatch-macro-character</b></ClLinks>. 



**displaced array** *n.* an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> which has no storage of its own, but which is instead indirected to the storage of another <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>, called its <ClLinks styled={true} term={"target"}><i>target</i></ClLinks>, at a specified offset, in such a way that any attempt to <ClLinks styled={true} term={"access"}><i>access</i></ClLinks> the *displaced array* implicitly references the *target array*. 



**distinct** *adj.* not <ClLinks styled={true} term={"identical"}><i>identical</i></ClLinks>. 



**documentation string** *n.* (in a defining <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>) A *literal string* which because of the context in which it appears (rather than because of some intrinsically observable aspect of the <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>) is taken as documentation. In some cases, the *documentation string* is saved in such a way that it can later be obtained by supplying either an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>, or by supplying a <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> and a “kind” to the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> **documentation**. “The body of code in a <ClLinks styled={true} term={"defmacro"}><b>defmacro</b></ClLinks> form can be preceded by a documentation string of kind <ClLinks styled={true} term={"function"}><b>function</b></ClLinks>.” 



**dot** *n.* the *standard character* that is variously called “full stop,” “period,” or “dot” (.). See Figure 2–5. 



**dotted list** *n.* a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> which has a terminating <ClLinks styled={true} term={"atom"}><i>atom</i></ClLinks> that is not <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. (An <ClLinks styled={true} term={"atom"}><i>atom</i></ClLinks> by itself is not a *dotted list*, however.) 



**dotted pair** *n.* 1. a <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks> whose <ClLinks styled={true} term={"cdr"}><i>cdr</i></ClLinks> is a <ClLinks styled={true} term={"non-list"}><i>non-list</i></ClLinks>. 2. any <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks>, used to emphasize the use of the <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks> as a symmetric data pair. 



**double float** *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"double-float"}><b>double-float</b></ClLinks>. 



**double-quote** *n.* the *standard character* that is variously called “quotation mark” or “double quote” ("). See Figure 2–5. 



**dynamic binding** *n.* a <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> in a *dynamic environment*. 



**dynamic environment** *n.* that part of an <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks> that contains <ClLinks styled={true} term={"binding"}><i>bindings</i></ClLinks> 



with *dynamic extent*. A *dynamic environment* contains, among other things: *exit points* established by <ClLinks styled={true} term={"unwind-protect"}><b>unwind-protect</b></ClLinks>, and <ClLinks styled={true} term={"binding"}><i>bindings</i></ClLinks> of *dynamic variables*, *exit points* established by <ClLinks styled={true} term={"catch"}><b>catch</b></ClLinks>, *condition handlers*, and <ClLinks styled={true} term={"restart"}><i>restarts</i></ClLinks>. 



**dynamic extent** *n.* an <ClLinks styled={true} term={"extent"}><i>extent</i></ClLinks> whose duration is bounded by points of *establishment* and *disestablishment* within the execution of a particular <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. See *indefinite extent*. “Dynamic variable bindings have dynamic extent.” 



**dynamic scope** *n. indefinite scope* along with *dynamic extent*. 







 



 



**dynamic variable** *n.* a <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks> the <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> for which is in the *dynamic environment*. See <ClLinks styled={true} term={"special"}><b>special</b></ClLinks>. 




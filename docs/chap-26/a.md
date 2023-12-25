---
title: A
sidebar_position: 97
---

**A** 



**absolute** *adj.* 1. (of a <ClLinks  term={"time"}><i>time</i></ClLinks>) representing a specific point in time. 2. (of a <ClLinks  term={"pathname"}><i>pathname</i></ClLinks>) representing a specific position in a directory hierarchy. See <ClLinks  term={"relative"}><i>relative</i></ClLinks>. 



**access** *n.*, *v.t.* 1. *v.t.* (a <ClLinks  term={"place"}><i>place</i></ClLinks>, or <ClLinks  term={"array"}><i>array</i></ClLinks>) to <ClLinks  term={"read"}><i>read</i></ClLinks> <sub>1</sub> or <ClLinks  term={"write"}><i>write</i></ClLinks><sub>1</sub> the <ClLinks  term={"value"}><i>value</i></ClLinks> of the <ClLinks  term={"place"}><i>place</i></ClLinks> or an <ClLinks  term={"element"}><i>element</i></ClLinks> of the <ClLinks  term={"array"}><i>array</i></ClLinks>. 2. *n.* (of a <ClLinks  term={"place"}><i>place</i></ClLinks>) an attempt to <ClLinks  term={"access"}><i>access</i></ClLinks><sub>1</sub> the <ClLinks  term={"value"}><i>value</i></ClLinks> of the <ClLinks  term={"place"}><i>place</i></ClLinks>. 



**accessibility** *n.* the state of being <ClLinks  term={"accessible"}><i>accessible</i></ClLinks>. 



**accessible** *adj.* 1. (of an <ClLinks  term={"object"}><i>object</i></ClLinks>) capable of being *referenced*. 2. (of *shared slots* or *local slots* in an <ClLinks  term={"instance"}><i>instance</i></ClLinks> of a <ClLinks  term={"class"}><i>class</i></ClLinks>) having been defined by the <ClLinks  term={"class"}><i>class</i></ClLinks> of the <ClLinks  term={"instance"}><i>instance</i></ClLinks> or *inherited* from a <ClLinks  term={"superclass"}><i>superclass</i></ClLinks> of that <ClLinks  term={"class"}><i>class</i></ClLinks>. 3. (of a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> in a <ClLinks  term={"package"}><i>package</i></ClLinks>) capable of being *referenced* without a *package prefix* when that <ClLinks  term={"package"}><i>package</i></ClLinks> is current, regardless of whether the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is <ClLinks  term={"present"}><i>present</i></ClLinks> in that <ClLinks  term={"package"}><i>package</i></ClLinks> or is *inherited*. 



**accessor** *n.* an <ClLinks  term={"operator"}><i>operator</i></ClLinks> that performs an <ClLinks  term={"access"}><i>access</i></ClLinks>. See <ClLinks  term={"reader"}><i>reader</i></ClLinks> and <ClLinks  term={"writer"}><i>writer</i></ClLinks> . 







 



 



**active** *adj.* 1. (of a <ClLinks  term={"handler"}><i>handler</i></ClLinks> , a <ClLinks  term={"restart"}><i>restart</i></ClLinks>, or a *catch tag*) having been *established* but not yet *disestablished*. 2. (of an <ClLinks  term={"element"}><i>element</i></ClLinks> of an <ClLinks  term={"array"}><i>array</i></ClLinks>) having an index that is greater than or equal to zero, but less than the *fill pointer* (if any). For an <ClLinks  term={"array"}><i>array</i></ClLinks> that has no *fill pointer* , all <ClLinks  term={"element"}><i>elements</i></ClLinks> are considered <ClLinks  term={"active"}><i>active</i></ClLinks>. 



**actual adjustability** *n.* (of an <ClLinks  term={"array"}><i>array</i></ClLinks>) a *generalized boolean* that is associated with the <ClLinks  term={"array"}><i>array</i></ClLinks>, representing whether the <ClLinks  term={"array"}><i>array</i></ClLinks> is *actually adjustable*. See also *expressed adjustability* and **adjustable-array-p**. 



**actual argument** *n. Trad.* an <ClLinks  term={"argument"}><i>argument</i></ClLinks>. 



**actual array element type** *n.* (of an <ClLinks  term={"array"}><i>array</i></ClLinks>) the <ClLinks  term={"type"}><i>type</i></ClLinks> for which the <ClLinks  term={"array"}><i>array</i></ClLinks> is actually specialized, which is the *upgraded array element type* of the *expressed array element type* of the <ClLinks  term={"array"}><i>array</i></ClLinks>. See the <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"array-element-type"}><b>array-element-type</b></ClLinks>. 



**actual complex part type** *n.* (of a <ClLinks  term={"complex"}><i>complex</i></ClLinks> ) the <ClLinks  term={"type"}><i>type</i></ClLinks> in which the real and imaginary parts of the <ClLinks  term={"complex"}><i>complex</i></ClLinks> are actually represented, which is the *upgraded complex part type* of the *expressed complex part type* of the <ClLinks  term={"complex"}><i>complex</i></ClLinks> . 



**actual parameter** *n. Trad.* an <ClLinks  term={"argument"}><i>argument</i></ClLinks>. 



**actually adjustable** *adj.* (of an <ClLinks  term={"array"}><i>array</i></ClLinks>) such that <ClLinks  term={"adjust-array"}><b>adjust-array</b></ClLinks> can adjust its 



characteristics by direct modification. A *conforming program* may depend on an <ClLinks  term={"array"}><i>array</i></ClLinks> being *actually adjustable* only if either that <ClLinks  term={"array"}><i>array</i></ClLinks> is known to have been *expressly adjustable* or if that <ClLinks  term={"array"}><i>array</i></ClLinks> has been explicitly tested by **adjustable-array-p**. 



**adjustability** *n.* (of an <ClLinks  term={"array"}><i>array</i></ClLinks>) 1. *expressed adjustability*. 2. *actual adjustability*. 



**adjustable** *adj.* (of an <ClLinks  term={"array"}><i>array</i></ClLinks>) 1. *expressly adjustable*. 2. *actually adjustable*. 



**after method** *n.* a <ClLinks  term={"method"}><i>method</i></ClLinks> having the <ClLinks  term={"qualifier"}><i>qualifier</i></ClLinks> :after. 



**alist** [ **—a list** ], *n.* an *association list*. 



<b>alphabetic</b> <i>n.</i>, <i>adj.</i> 1. <i>adj.</i> (of a <i>character</i> ) being one of the <i>standard characters</i> A through Z or a through z, or being any <i>implementation-defined</i> character that has <i>case</i>, or being some other <i>graphic character</i> defined by the <i>implementation</i> to be <i>alphabetic</i><sub>1</sub>. 2. a. <i>n.</i> one of several possible <i>constituent traits</i> of a <i>character</i> . For details, see Section 2.1.4.1 (Constituent Characters) and Section 2.2 (Reader Algorithm). b. <i>adj.</i> (of a <i>character</i> ) being a <i>character</i> that has <i>syntax type constituent</i> in the <i>current readtable</i> and that has the <i>constituent trait alphabetic</i><sub>2<i>a</i></sub>. See Figure 2–8. 



**alphanumeric** *adj.* (of a <ClLinks  term={"character"}><i>character</i></ClLinks> ) being either an <ClLinks  term={"alphabetic"}><i>alphabetic</i></ClLinks><sub>1</sub> <ClLinks  term={"character"}><i>character</i></ClLinks> or a <ClLinks  term={"numeric"}><i>numeric</i></ClLinks> character. 







 



 



**ampersand** *n.* the *standard character* that is called “ampersand” (&amp;). See Figure 2–5. 



**anonymous** *adj.* 1. (of a <ClLinks  term={"class"}><i>class</i></ClLinks> or <ClLinks  term={"function"}><i>function</i></ClLinks>) having no <ClLinks  term={"name"}><i>name</i></ClLinks> 2. (of a <ClLinks  term={"restart"}><i>restart</i></ClLinks>) having a <ClLinks  term={"name"}><i>name</i></ClLinks> of <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 



**apparently uninterned** *adj.* having a *home package* of <ClLinks  term={"nil"}><b>nil</b></ClLinks>. (An *apparently* 



*uninterned symbol* might or might not be an *uninterned symbol*. *Uninterned symbols* have a *home package* of <ClLinks  term={"nil"}><b>nil</b></ClLinks>, but <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> which have been <ClLinks  term={"uninterned"}><i>uninterned</i></ClLinks> from their *home package* also have a *home package* of <ClLinks  term={"nil"}><b>nil</b></ClLinks>, even though they might still be <ClLinks  term={"interned"}><i>interned</i></ClLinks> in some other <ClLinks  term={"package"}><i>package</i></ClLinks>.) 



**applicable** *adj.* 1. (of a <ClLinks  term={"handler"}><i>handler</i></ClLinks> ) being an *applicable handler* . 2. (of a <ClLinks  term={"method"}><i>method</i></ClLinks>) being an *applicable method*. 3. (of a <ClLinks  term={"restart"}><i>restart</i></ClLinks>) being an *applicable restart*. 



**applicable handler** *n.* (for a <ClLinks  term={"condition"}><i>condition</i></ClLinks> being *signaled*) an *active handler* for which the associated type contains the <ClLinks  term={"condition"}><i>condition</i></ClLinks>. 



**applicable method** *n.* (of a *generic function* called with <ClLinks  term={"argument"}><i>arguments</i></ClLinks>) a <ClLinks  term={"method"}><i>method</i></ClLinks> of the *generic function* for which the <ClLinks  term={"argument"}><i>arguments</i></ClLinks> satisfy the *parameter specializers* of that <ClLinks  term={"method"}><i>method</i></ClLinks>. See Section 7.6.6.1.1 (Selecting the Applicable Methods). 



**applicable restart** *n.* 1. (for a <ClLinks  term={"condition"}><i>condition</i></ClLinks>) an *active handler* for which the associated test returns <ClLinks  term={"true"}><i>true</i></ClLinks> when given the <ClLinks  term={"condition"}><i>condition</i></ClLinks> as an argument. 2. (for no particular <ClLinks  term={"condition"}><i>condition</i></ClLinks>) an *active handler* for which the associated test returns <ClLinks  term={"true"}><i>true</i></ClLinks> when given <ClLinks  term={"nil"}><b>nil</b></ClLinks> as an argument. 



<ClLinks  term={"apply"}><b>apply</b></ClLinks> *v.t.* (a <ClLinks  term={"function"}><i>function</i></ClLinks> to a <ClLinks  term={"list"}><i>list</i></ClLinks>) to <ClLinks  term={"call"}><i>call</i></ClLinks> the <ClLinks  term={"function"}><i>function</i></ClLinks> with arguments that are the <ClLinks  term={"element"}><i>elements</i></ClLinks> of the <ClLinks  term={"list"}><i>list</i></ClLinks>. “Applying the function <ClLinks  term={"+"}><b>+</b></ClLinks> to a list of integers returns the sum of the elements of that list.” 



**argument** *n.* 1. (of a <ClLinks  term={"function"}><i>function</i></ClLinks>) an <ClLinks  term={"object"}><i>object</i></ClLinks> which is offered as data to the <ClLinks  term={"function"}><i>function</i></ClLinks> when it is *called*. 2. (of a *format control*) a *format argument*. 



**argument evaluation order** *n.* the order in which <ClLinks  term={"argument"}><i>arguments</i></ClLinks> are evaluated in a function call. “The argument evaluation order for Common Lisp is left to right.” See Section 3.1 (Evaluation). 



**argument precedence order** *n.* the order in which the <ClLinks  term={"argument"}><i>arguments</i></ClLinks> to a *generic function* are considered when sorting the *applicable methods* into precedence order. 



**around method** *n.* a <ClLinks  term={"method"}><i>method</i></ClLinks> having the <ClLinks  term={"qualifier"}><i>qualifier</i></ClLinks> :around. 



<ClLinks  term={"array"}><b>array</b></ClLinks> *n.* an <ClLinks  term={"object"}><i>object</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"array"}><b>array</b></ClLinks>, which serves as a container for other <ClLinks  term={"object"}><i>objects</i></ClLinks> arranged in a Cartesian coordinate system. 







 



 



**array element type** *n.* (of an <ClLinks  term={"array"}><i>array</i></ClLinks>) 1. a <ClLinks  term={"type"}><i>type</i></ClLinks> associated with the <ClLinks  term={"array"}><i>array</i></ClLinks>, and of which all <ClLinks  term={"element"}><i>elements</i></ClLinks> of the <ClLinks  term={"array"}><i>array</i></ClLinks> are constrained to be members. 2. the *actual array element type* of the <ClLinks  term={"array"}><i>array</i></ClLinks>. 3. the *expressed array element type* of the <ClLinks  term={"array"}><i>array</i></ClLinks>. 



**array total size** *n.* the total number of <ClLinks  term={"element"}><i>elements</i></ClLinks> in an <ClLinks  term={"array"}><i>array</i></ClLinks>, computed by taking the product of the <ClLinks  term={"dimension"}><i>dimensions</i></ClLinks> of the <ClLinks  term={"array"}><i>array</i></ClLinks>. (The size of a zero-dimensional <ClLinks  term={"array"}><i>array</i></ClLinks> is therefore one.) 



**assign** *v.t.* (a <ClLinks  term={"variable"}><i>variable</i></ClLinks>) to change the <ClLinks  term={"value"}><i>value</i></ClLinks> of the <ClLinks  term={"variable"}><i>variable</i></ClLinks> in a <ClLinks  term={"binding"}><i>binding</i></ClLinks> that has already been *established*. See the *special operator* <ClLinks  term={"setq"}><b>setq</b></ClLinks>. 



**association list** *n.* a <ClLinks  term={"list"}><i>list</i></ClLinks> of *conses* representing an association of <ClLinks  term={"key"}><i>keys</i></ClLinks> with <ClLinks  term={"value"}><i>values</i></ClLinks>, where the <ClLinks  term={"car"}><i>car</i></ClLinks> of each <ClLinks  term={"cons"}><i>cons</i></ClLinks> is the <ClLinks  term={"key"}><i>key</i></ClLinks> and the <ClLinks  term={"cdr"}><i>cdr</i></ClLinks> is the <ClLinks  term={"value"}><i>value</i></ClLinks> associated with that <ClLinks  term={"key"}><i>key</i></ClLinks>. 



**asterisk** *n.* the *standard character* that is variously called “asterisk” or “star” (\*). See Figure 2–5. 



**at-sign** *n.* the *standard character* that is variously called “commercial at” or “at sign” (@). See Figure 2–5. 



<ClLinks  term={"atom"}><b>atom</b></ClLinks> *n.* any <ClLinks  term={"object"}><i>object</i></ClLinks> that is not a <ClLinks  term={"cons"}><i>cons</i></ClLinks>. “A vector is an atom.” 



**atomic** *adj.* being an <ClLinks  term={"atom"}><i>atom</i></ClLinks>. “The number 3, the symbol foo, and <ClLinks  term={"nil"}><b>nil</b></ClLinks> are atomic.” 



**atomic type specifier** *n.* a *type specifier* that is <ClLinks  term={"atomic"}><i>atomic</i></ClLinks>. For every *atomic type specifier* , *x*, there is an equivalent *compound type specifier* with no arguments supplied, (*x*). 



**attribute** *n.* (of a <ClLinks  term={"character"}><i>character</i></ClLinks> ) a program-visible aspect of the <ClLinks  term={"character"}><i>character</i></ClLinks> . The only *standardized attribute* of a <ClLinks  term={"character"}><i>character</i></ClLinks> is its <ClLinks  term={"code"}><i>code</i></ClLinks><sub>2</sub>, but <ClLinks  term={"implementation"}><i>implementations</i></ClLinks> are permitted to have additional *implementation-defined attributes*. See Section 13.1.3 (Character Attributes). “An implementation that support fonts might make font information an attribute of a character, while others might represent font information separately from characters.” 



**aux variable** *n.* a <ClLinks  term={"variable"}><i>variable</i></ClLinks> that occurs in the part of a *lambda list* that was introduced by **&amp;aux**. Unlike all other <ClLinks  term={"variable"}><i>variables</i></ClLinks> introduced by a *lambda-list*, *aux variables* are not <ClLinks  term={"parameter"}><i>parameters</i></ClLinks>. 



**auxiliary method** *n.* a member of one of two sets of <ClLinks  term={"method"}><i>methods</i></ClLinks> (the set of *primary methods* is the other) that form an exhaustive partition of the set of <ClLinks  term={"method"}><i>methods</i></ClLinks> on the <ClLinks  term={"method"}><i>method</i></ClLinks>’s *generic function*. How these sets are determined is dependent on the *method combination* type; see Section 7.6.2 (Introduction to Methods). 







 



 




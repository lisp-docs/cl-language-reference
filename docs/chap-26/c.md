---
title: C
sidebar_position: 99
---

**C** 



<DictionaryLink  term={"cadr"}><b>cadr</b></DictionaryLink> [ **ka d*** **r** ], *n.* (of an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>) the <GlossaryTerm  term={"car"}><i>car</i></GlossaryTerm> of the <GlossaryTerm  term={"cdr"}><i>cdr</i></GlossaryTerm> of that <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 



**call** *v.t.*, *n.* 1. *v.t.* (a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> with <GlossaryTerm  term={"argument"}><i>arguments</i></GlossaryTerm>) to cause the <GlossaryTerm  term={"code"}><i>code</i></GlossaryTerm> represented by that <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> to be *executed* in an <GlossaryTerm  term={"environment"}><i>environment</i></GlossaryTerm> where <GlossaryTerm  term={"binding"}><i>bindings</i></GlossaryTerm> for the <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> of its <GlossaryTerm  term={"parameter"}><i>parameters</i></GlossaryTerm> have been *established* based on the <GlossaryTerm  term={"argument"}><i>arguments</i></GlossaryTerm>. “Calling the function <ClLinks  term={"+"}><b>+</b></ClLinks> with the arguments 5 and 1 yields a value of 6.” 2. *n.* a <GlossaryTerm  term={"situation"}><i>situation</i></GlossaryTerm> in which a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> is called. 



**captured initialization form** *n.* an <GlossaryTerm styled={true} term={"initialization form"}><i>initialization form</i></GlossaryTerm> along with the *lexical* 



<GlossaryTerm  term={"environment"}><i>environment</i></GlossaryTerm> in which the <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> that defined the <GlossaryTerm styled={true} term={"initialization form"}><i>initialization form</i></GlossaryTerm> was *evaluated*. “Each newly added shared slot is set to the result of evaluating the captured 



initialization form for the slot that was specified in the <DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink> form for the new class.” 







 



 



<DictionaryLink  term={"car"}><b>car</b></DictionaryLink> *n.* 1. a. (of a <GlossaryTerm  term={"cons"}><i>cons</i></GlossaryTerm>) the component of a <GlossaryTerm  term={"cons"}><i>cons</i></GlossaryTerm> corresponding to the first <GlossaryTerm  term={"argument"}><i>argument</i></GlossaryTerm> to <DictionaryLink  term={"cons"}><b>cons</b></DictionaryLink>; the other component is the <GlossaryTerm  term={"cdr"}><i>cdr</i></GlossaryTerm> . “The function <DictionaryLink  term={"rplaca"}><b>rplaca</b></DictionaryLink> modifies the car of a cons.” b. (of a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm>) the first <GlossaryTerm  term={"element"}><i>element</i></GlossaryTerm> of the <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm>, or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> if the <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> is the <GlossaryTerm styled={true} term={"empty list"}><i>empty list</i></GlossaryTerm>. 2. the <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> that is held in the <GlossaryTerm  term={"car"}><i>car</i></GlossaryTerm> <sub>1</sub>. “The function <DictionaryLink  term={"car"}><b>car</b></DictionaryLink> returns the car of a cons.” 



<DictionaryLink  term={"case"}><b>case</b></DictionaryLink> *n.* (of a <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> ) the property of being either <GlossaryTerm  term={"uppercase"}><i>uppercase</i></GlossaryTerm> or <GlossaryTerm  term={"lowercase"}><i>lowercase</i></GlossaryTerm>. Not all <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm> have <GlossaryTerm  term={"case"}><i>case</i></GlossaryTerm>. “The characters #\A and #\a have case, but the character #\$ has no case.” See Section 13.1.4.3 (Characters With Case) and the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"both-case-p"}><b>both-case-p</b></DictionaryLink>. 



**case sensitivity mode** *n.* one of the <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> :upcase, :downcase, :preserve, or 



:invert. 



<DictionaryLink  term={"catch"}><b>catch</b></DictionaryLink> *n.* an <GlossaryTerm styled={true} term={"exit point"}><i>exit point</i></GlossaryTerm> which is *established* by a <DictionaryLink  term={"catch"}><b>catch</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> within the <GlossaryTerm styled={true} term={"dynamic scope"}><i>dynamic scope</i></GlossaryTerm> of its body, which is named by a <GlossaryTerm styled={true} term={"catch tag"}><i>catch tag</i></GlossaryTerm>, and to which control and <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> may be *thrown*. 



**catch tag** *n.* an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> which names an *active catch*. (If more than one <GlossaryTerm  term={"catch"}><i>catch</i></GlossaryTerm> is active with the same <GlossaryTerm styled={true} term={"catch tag"}><i>catch tag</i></GlossaryTerm>, it is only possible to <GlossaryTerm  term={"throw"}><i>throw</i></GlossaryTerm> to the innermost such <GlossaryTerm  term={"catch"}><i>catch</i></GlossaryTerm> because the outer one is *shadowed* <sub>2</sub>.) 



<DictionaryLink  term={"cddr"}><b>cddr</b></DictionaryLink> [ **k\_ud***  **d*** **r** ] or [ **k***  **d\_ud*** **r** ], *n.* (of an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>) the <GlossaryTerm  term={"cdr"}><i>cdr</i></GlossaryTerm> of the <GlossaryTerm  term={"cdr"}><i>cdr</i></GlossaryTerm> of that <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 



<DictionaryLink  term={"cdr"}><b>cdr</b></DictionaryLink> [ **k\_u d*** **r** ], *n.* 1. a. (of a <GlossaryTerm  term={"cons"}><i>cons</i></GlossaryTerm>) the component of a <GlossaryTerm  term={"cons"}><i>cons</i></GlossaryTerm> corresponding to the second <GlossaryTerm  term={"argument"}><i>argument</i></GlossaryTerm> to <DictionaryLink  term={"cons"}><b>cons</b></DictionaryLink>; the other component is the <GlossaryTerm  term={"car"}><i>car</i></GlossaryTerm> . “The function <DictionaryLink  term={"rplacd"}><b>rplacd</b></DictionaryLink> modifies the cdr of a cons.” b. (of a *list L*<sub>1</sub>) either the *list L*<sub>2</sub> that contains the <GlossaryTerm  term={"element"}><i>elements</i></GlossaryTerm> of *L*<sub>1</sub> that follow after the first, or else <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> if *L*<sub>1</sub> is the <GlossaryTerm styled={true} term={"empty list"}><i>empty list</i></GlossaryTerm>. 2. the <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> that is held in the <GlossaryTerm  term={"cdr"}><i>cdr</i></GlossaryTerm> <sub>1</sub>. “The function <DictionaryLink  term={"cdr"}><b>cdr</b></DictionaryLink> returns the cdr of a cons.” 



**cell** *n. Trad.* (of an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>) a conceptual <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> of that <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. The <GlossaryTerm styled={true} term={"dynamic variable"}><i>dynamic variable</i></GlossaryTerm> and global *function bindings* of a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> are sometimes referred to as its <GlossaryTerm styled={true} term={"value cell"}><i>value cell</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"function cell"}><i>function cell</i></GlossaryTerm>, respectively. 



<DictionaryLink  term={"character"}><b>character</b></DictionaryLink> *n.*, *adj.* 1. *n.* an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"character"}><b>character</b></DictionaryLink>; that is, an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> that represents a unitary token in an aggregate quantity of text; see Section 13.1 (Character Concepts). 2. *adj.* a. (of a <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>) having an <GlossaryTerm styled={true} term={"element type"}><i>element type</i></GlossaryTerm> that is a <GlossaryTerm  term={"subtype"}><i>subtype</i></GlossaryTerm> of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"character"}><b>character</b></DictionaryLink>. The most fundamental operation on a *character input stream* is <DictionaryLink  term={"read-char"}><b>read-char</b></DictionaryLink> and on a *character output stream* is <DictionaryLink  term={"write-char"}><b>write-char</b></DictionaryLink>. See <GlossaryTerm  term={"binary"}><i>binary</i></GlossaryTerm>. b. (of a <GlossaryTerm  term={"file"}><i>file</i></GlossaryTerm>) having been created by opening a *character stream*. (It is <GlossaryTerm  term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> whether this is an inspectable aspect of the <GlossaryTerm  term={"file"}><i>file</i></GlossaryTerm>, or whether any given *binary file* can be treated as a *character file*.) 



**character code** *n.* 1. one of possibly several <GlossaryTerm  term={"attribute"}><i>attributes</i></GlossaryTerm> of a <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> . 2. a 



non-negative *integer* less than the <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink  term={"char-code-limit"}><b>char-code-limit</b></DictionaryLink> that is suitable for use as a <GlossaryTerm styled={true} term={"character code"}><i>character code</i></GlossaryTerm><sub>1</sub>. 







 



 



**character designator** *n.* a <GlossaryTerm  term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> ; that is, an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> that denotes a <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> and that is one of: a <GlossaryTerm  term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> of <GlossaryTerm  term={"length"}><i>length</i></GlossaryTerm> one (denoting the <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> that is its only <GlossaryTerm  term={"element"}><i>element</i></GlossaryTerm>), or a <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> (denoting itself). 



**circular** *adj.* 1. (of a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm>) a <GlossaryTerm styled={true} term={"circular list"}><i>circular list</i></GlossaryTerm>. 2. (of an arbitrary <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>) having a 



*component*, <GlossaryTerm  term={"element"}><i>element</i></GlossaryTerm>, <GlossaryTerm  term={"constituent"}><i>constituent</i></GlossaryTerm><sub>2</sub>, or <GlossaryTerm  term={"subexpression"}><i>subexpression</i></GlossaryTerm> (as appropriate to the context) that is the <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> itself. 



**circular list** *n.* a chain of *conses* that has no termination because some <GlossaryTerm  term={"cons"}><i>cons</i></GlossaryTerm> in the chain is the <GlossaryTerm  term={"cdr"}><i>cdr</i></GlossaryTerm> of a later <GlossaryTerm  term={"cons"}><i>cons</i></GlossaryTerm>. 



<DictionaryLink  term={"class"}><b>class</b></DictionaryLink> *n.* 1. an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> that uniquely determines the structure and behavior of a set of other <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> called its <GlossaryTerm styled={true} term={"direct instance"}><i>direct instances</i></GlossaryTerm>, that contributes structure and behavior to a set of other <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> called its <GlossaryTerm styled={true} term={"indirect instance"}><i>indirect instances</i></GlossaryTerm>, and that acts as a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> for a set of objects called its <GlossaryTerm styled={true} term={"generalized instance"}><i>generalized instances</i></GlossaryTerm>. “The class <DictionaryLink  term={"integer"}><b>integer</b></DictionaryLink> is a subclass of the 



class <DictionaryLink  term={"number"}><b>number</b></DictionaryLink>.” (Note that the phrase “the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> foo” is often substituted for the more precise phrase “the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> named foo”—in both cases, a *class object* (not a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>) is denoted.) 2. (of an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>) the uniquely determined <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> of which the <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"direct instance"}><i>direct instance</i></GlossaryTerm>. See the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"class-of"}><b>class-of</b></DictionaryLink>. “The class of the object returned by <DictionaryLink  term={"gensym"}><b>gensym</b></DictionaryLink> is <DictionaryLink  term={"symbol"}><b>symbol</b></DictionaryLink>.” (Note that with this usage a phrase such as “its <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> is foo” is often substituted for the more precise phrase “its <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> is the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> named foo”—in both cases, a *class object* (not a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>) is denoted.) 



**class designator** *n.* a <GlossaryTerm  term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>; that is, an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> that denotes a <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> and that is one of: a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> (denoting the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> named by that <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>; see the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"find-class"}><b>find-class</b></DictionaryLink>) or a <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> (denoting itself). 



**class precedence list** *n.* a unique total ordering on a <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> and its *superclasses* that is consistent with the <GlossaryTerm styled={true} term={"local precedence order"}><i>local precedence orders</i></GlossaryTerm> for the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> and its *superclasses*. For detailed information, see Section 4.3.5 (Determining the Class Precedence List). 



<DictionaryLink  term={"close"}><b>close</b></DictionaryLink> *v.t.* (a <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>) to terminate usage of the <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> as a source or sink of data, permitting the <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm> to reclaim its internal data structures, and to free any external resources which might have been locked by the <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> when it was opened. 



**closed** *adj.* (of a <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>) having been <GlossaryTerm  term={"closed"}><i>closed</i></GlossaryTerm> (see close). Some (but not all) operations that are valid on *open streams* are not valid on *closed streams*. See Section 21.1.1.1.2 (Open and Closed Streams). 



**closure** *n.* a <GlossaryTerm styled={true} term={"lexical closure"}><i>lexical closure</i></GlossaryTerm>. 



**coalesce** *v.t.* (*literal objects* that are <GlossaryTerm  term={"similar"}><i>similar</i></GlossaryTerm> ) to consolidate the identity of those <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm>, such that they become the *same object*. See Section 3.2.1 (Compiler 



Terminology). 







 



 



**code** *n.* 1. *Trad.* any representation of actions to be performed, whether conceptual or as an actual <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>, such as <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"lambda expression"}><i>lambda expressions</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> of *type function*, text in a <GlossaryTerm styled={true} term={"source file"}><i>source file</i></GlossaryTerm>, or instruction sequences in a <GlossaryTerm styled={true} term={"compiled file"}><i>compiled file</i></GlossaryTerm>. This is a generic term; the specific nature of the representation depends on its context. 2. (of a <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> ) a <GlossaryTerm styled={true} term={"character code"}><i>character code</i></GlossaryTerm>. 



<DictionaryLink  term={"coerce"}><b>coerce</b></DictionaryLink> *v.t.* (an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> to a <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm>) to produce an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> from the given <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>, without modifying that <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>, by following some set of coercion rules that must be specifically stated for any context in which this term is used. The resulting <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> is necessarily of the indicated <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm>, except when that type is a <GlossaryTerm  term={"subtype"}><i>subtype</i></GlossaryTerm> of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"complex"}><b>complex</b></DictionaryLink>; in that case, if a <GlossaryTerm styled={true} term={"complex rational"}><i>complex rational</i></GlossaryTerm> with an imaginary part of zero would result, the result is a <GlossaryTerm  term={"rational"}><i>rational</i></GlossaryTerm> 



rather than a <GlossaryTerm  term={"complex"}><i>complex</i></GlossaryTerm>—see Section 12.1.5.3 (Rule of Canonical Representation for Complex Rationals). 



**colon** *n.* the <GlossaryTerm styled={true} term={"standard character"}><i>standard character</i></GlossaryTerm> that is called “colon” (:). See Figure 2–5. 



**comma** *n.* the <GlossaryTerm styled={true} term={"standard character"}><i>standard character</i></GlossaryTerm> that is called “comma” (,). See Figure 2–5. 



**compilation** *n.* the process of *compiling code* by the <GlossaryTerm  term={"compiler"}><i>compiler</i></GlossaryTerm> . 



**compilation environment** *n.* 1. An <GlossaryTerm  term={"environment"}><i>environment</i></GlossaryTerm> that represents information known by the <GlossaryTerm  term={"compiler"}><i>compiler</i></GlossaryTerm> about a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> that is being *compiled*. See Section 3.2.1 (Compiler Terminology). 2. An <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> that represents the <GlossaryTerm styled={true} term={"compilation environment"}><i>compilation environment</i></GlossaryTerm> <sub>1</sub> and that is used as a second argument to a <GlossaryTerm styled={true} term={"macro function"}><i>macro function</i></GlossaryTerm> (which supplies a <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> for any **&amp;environment** <GlossaryTerm  term={"parameter"}><i>parameter</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"macro function"}><i>macro function</i></GlossaryTerm>’s definition). 



**compilation unit** *n.* an interval during which a single unit of compilation is occurring. See the <GlossaryTerm  term={"macro"}><i>macro</i></GlossaryTerm> <DictionaryLink  term={"with-compilation-unit"}><b>with-compilation-unit</b></DictionaryLink>. 



<DictionaryLink  term={"compile"}><b>compile</b></DictionaryLink> *v.t.* 1. (<GlossaryTerm  term={"code"}><i>code</i></GlossaryTerm>) to perform semantic preprocessing of the <GlossaryTerm  term={"code"}><i>code</i></GlossaryTerm>, usually 



optimizing one or more qualities of the code, such as run-time speed of *execution* or run-time storage usage. The minimum semantic requirements of compilation are that it must remove all macro calls and arrange for all <GlossaryTerm styled={true} term={"load time value"}><i>load time values</i></GlossaryTerm> to be resolved prior to run time. 2. (a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm>) to produce a new <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"compiled-function"}><b>compiled-function</b></DictionaryLink> which represents the result of *compiling* the <GlossaryTerm  term={"code"}><i>code</i></GlossaryTerm> represented by the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm>. See the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"compile"}><b>compile</b></DictionaryLink>. 3. (a <GlossaryTerm styled={true} term={"source file"}><i>source file</i></GlossaryTerm>) to produce a <GlossaryTerm styled={true} term={"compiled file"}><i>compiled file</i></GlossaryTerm> from a <GlossaryTerm styled={true} term={"source file"}><i>source file</i></GlossaryTerm>. See the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"compile-file"}><b>compile-file</b></DictionaryLink>. 



**compile time** *n.* the duration of time that the <GlossaryTerm  term={"compiler"}><i>compiler</i></GlossaryTerm> is processing <GlossaryTerm styled={true} term={"source code"}><i>source code</i></GlossaryTerm>. **compile-time definition** *n.* a definition in the <GlossaryTerm styled={true} term={"compilation environment"}><i>compilation environment</i></GlossaryTerm>. 



**compiled code** *n.* 1. <GlossaryTerm styled={true} term={"compiled function"}><i>compiled functions</i></GlossaryTerm>. 2. <GlossaryTerm  term={"code"}><i>code</i></GlossaryTerm> that represents <GlossaryTerm styled={true} term={"compiled function"}><i>compiled functions</i></GlossaryTerm>, such as the contents of a <GlossaryTerm styled={true} term={"compiled file"}><i>compiled file</i></GlossaryTerm>. 







 



 



**compiled file** *n.* a <GlossaryTerm  term={"file"}><i>file</i></GlossaryTerm> which represents the results of *compiling* the <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> which appeared in a corresponding <GlossaryTerm styled={true} term={"source file"}><i>source file</i></GlossaryTerm>, and which can be *loaded*. See the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"compile-file"}><b>compile-file</b></DictionaryLink>. 



**compiled function** *n.* an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"compiled-function"}><b>compiled-function</b></DictionaryLink>, which is a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> that has been *compiled*, which contains no references to <GlossaryTerm  term={"macro"}><i>macros</i></GlossaryTerm> that must be expanded at run time, and which contains no unresolved references to <GlossaryTerm styled={true} term={"load time value"}><i>load time values</i></GlossaryTerm>. 



**compiler** *n.* a facility that is part of Lisp and that translates <GlossaryTerm  term={"code"}><i>code</i></GlossaryTerm> into an 



<GlossaryTerm  term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> form that might be represented or *executed* efficiently. The functions <DictionaryLink  term={"compile"}><b>compile</b></DictionaryLink> and <DictionaryLink  term={"compile-file"}><b>compile-file</b></DictionaryLink> permit programs to invoke the <GlossaryTerm  term={"compiler"}><i>compiler</i></GlossaryTerm> . 



**compiler macro** *n.* an auxiliary macro definition for a globally defined <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> or <GlossaryTerm  term={"macro"}><i>macro</i></GlossaryTerm> which might or might not be called by any given <GlossaryTerm styled={true} term={"conforming implementation"}><i>conforming implementation</i></GlossaryTerm> and which must preserve the semantics of the globally defined <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> or <GlossaryTerm  term={"macro"}><i>macro</i></GlossaryTerm> but 



which might perform some additional optimizations. (Unlike a <GlossaryTerm  term={"macro"}><i>macro</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"compiler macro"}><i>compiler macro</i></GlossaryTerm> does not extend the syntax of Common Lisp; rather, it provides an alternate implementation strategy for some existing syntax or functionality.) 



**compiler macro expansion** *n.* 1. the process of translating a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> into another <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> by a <GlossaryTerm styled={true} term={"compiler macro"}><i>compiler macro</i></GlossaryTerm>. 2. the <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> resulting from this process. 



**compiler macro form** *n.* a <GlossaryTerm styled={true} term={"function form"}><i>function form</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"macro form"}><i>macro form</i></GlossaryTerm> whose <GlossaryTerm  term={"operator"}><i>operator</i></GlossaryTerm> has a definition as a <GlossaryTerm styled={true} term={"compiler macro"}><i>compiler macro</i></GlossaryTerm>, or a <DictionaryLink  term={"funcall"}><b>funcall</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> whose first <GlossaryTerm  term={"argument"}><i>argument</i></GlossaryTerm> is a <DictionaryLink  term={"function"}><b>function</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> whose <GlossaryTerm  term={"argument"}><i>argument</i></GlossaryTerm> is the <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> of a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> that has a definition as a <GlossaryTerm styled={true} term={"compiler macro"}><i>compiler macro</i></GlossaryTerm>. 



**compiler macro function** *n.* a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> of two arguments, a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> and an 



<GlossaryTerm  term={"environment"}><i>environment</i></GlossaryTerm>, that implements <GlossaryTerm styled={true} term={"compiler macro expansion"}><i>compiler macro expansion</i></GlossaryTerm> by producing either a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> to be used in place of the original argument <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> or else <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>, indicating that the original <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> should not be replaced. See Section 3.2.2.1 (Compiler Macros). 



<DictionaryLink  term={"complex"}><b>complex</b></DictionaryLink> *n.* an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"complex"}><b>complex</b></DictionaryLink>. 



**complex float** *n.* an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"complex"}><b>complex</b></DictionaryLink> which has a <GlossaryTerm styled={true} term={"complex part type"}><i>complex part type</i></GlossaryTerm> that is a <GlossaryTerm  term={"subtype"}><i>subtype</i></GlossaryTerm> of <DictionaryLink  term={"float"}><b>float</b></DictionaryLink>. A <GlossaryTerm styled={true} term={"complex float"}><i>complex float</i></GlossaryTerm> is a <GlossaryTerm  term={"complex"}><i>complex</i></GlossaryTerm> , but it is not a <GlossaryTerm  term={"float"}><i>float</i></GlossaryTerm>. 



**complex part type** *n.* (of a <GlossaryTerm  term={"complex"}><i>complex</i></GlossaryTerm> ) 1. the <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> which is used to represent both the real part and the imaginary part of the <GlossaryTerm  term={"complex"}><i>complex</i></GlossaryTerm> . 2. the <GlossaryTerm styled={true} term={"actual complex part type"}><i>actual complex part type</i></GlossaryTerm> of the <GlossaryTerm  term={"complex"}><i>complex</i></GlossaryTerm> . 3. the <GlossaryTerm styled={true} term={"expressed complex part type"}><i>expressed complex part type</i></GlossaryTerm> of the <GlossaryTerm  term={"complex"}><i>complex</i></GlossaryTerm> . 



**complex rational** *n.* an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"complex"}><b>complex</b></DictionaryLink> which has a <GlossaryTerm styled={true} term={"complex part type"}><i>complex part type</i></GlossaryTerm> that is a <GlossaryTerm  term={"subtype"}><i>subtype</i></GlossaryTerm> of <DictionaryLink  term={"rational"}><b>rational</b></DictionaryLink>. A <GlossaryTerm styled={true} term={"complex rational"}><i>complex rational</i></GlossaryTerm> is a <GlossaryTerm  term={"complex"}><i>complex</i></GlossaryTerm> , but it is not a <GlossaryTerm  term={"rational"}><i>rational</i></GlossaryTerm>. No <GlossaryTerm styled={true} term={"complex rational"}><i>complex rational</i></GlossaryTerm> has an imaginary part of zero because such a number is always represented by Common Lisp as an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"rational"}><b>rational</b></DictionaryLink>; see Section 12.1.5.3 (Rule of Canonical Representation for Complex Rationals). 







 



 



**complex single float** *n.* an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"complex"}><b>complex</b></DictionaryLink> which has a <GlossaryTerm styled={true} term={"complex part type"}><i>complex part type</i></GlossaryTerm> that is a <GlossaryTerm  term={"subtype"}><i>subtype</i></GlossaryTerm> of <DictionaryLink  term={"single-float"}><b>single-float</b></DictionaryLink>. A <GlossaryTerm styled={true} term={"complex single float"}><i>complex single float</i></GlossaryTerm> is a <GlossaryTerm  term={"complex"}><i>complex</i></GlossaryTerm> , but it is not a <GlossaryTerm styled={true} term={"single float"}><i>single float</i></GlossaryTerm>. 



**composite stream** *n.* a <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> that is composed of one or more other <GlossaryTerm  term={"stream"}><i>streams</i></GlossaryTerm>. “<DictionaryLink  term={"make-synonym-stream"}><b>make-synonym-stream</b></DictionaryLink> creates a composite stream.” 



**compound form** *n.* a *non-empty list* which is a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>: a <GlossaryTerm styled={true} term={"special form"}><i>special form</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"lambda form"}><i>lambda form</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"macro form"}><i>macro form</i></GlossaryTerm>, or a <GlossaryTerm styled={true} term={"function form"}><i>function form</i></GlossaryTerm>. 



**compound type specifier** *n.* a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> that is a <GlossaryTerm  term={"cons"}><i>cons</i></GlossaryTerm>; *i.e.*, a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> that is not an <GlossaryTerm styled={true} term={"atomic type specifier"}><i>atomic type specifier</i></GlossaryTerm> . “(vector single-float) is a compound type specifier.” 



**concatenated stream** *n.* an *input stream* of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"concatenated-stream"}><b>concatenated-stream</b></DictionaryLink>. 



<DictionaryLink  term={"condition"}><b>condition</b></DictionaryLink> *n.* 1. an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> which represents a <GlossaryTerm  term={"situation"}><i>situation</i></GlossaryTerm>—usually, but not necessarily, during *signaling*. 2. an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"condition"}><b>condition</b></DictionaryLink>. 



**condition designator** *n.* one or more <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> that, taken together, denote either an existing *condition object* or a *condition object* to be implicitly created. For details, see Section 9.1.2.1 (Condition Designators). 



**condition handler** *n.* a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> that might be invoked by the act of *signaling*, that receives the <GlossaryTerm  term={"condition"}><i>condition</i></GlossaryTerm> being signaled as its only argument, and that is permitted to <GlossaryTerm  term={"handle"}><i>handle</i></GlossaryTerm> the <GlossaryTerm  term={"condition"}><i>condition</i></GlossaryTerm> or to <GlossaryTerm  term={"decline"}><i>decline</i></GlossaryTerm>. See Section 9.1.4.1 (Signaling). 



**condition reporter** *n.* a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> that describes how a <GlossaryTerm  term={"condition"}><i>condition</i></GlossaryTerm> is to be printed when the *Lisp printer* is invoked while <DictionaryLink  term={"print-escape"}><b>\*print-escape\*</b></DictionaryLink> is <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>. See Section 9.1.3 (Printing Conditions). 



**conditional newline** *n.* a point in output where a <GlossaryTerm  term={"newline"}><i>newline</i></GlossaryTerm> might be inserted at the discretion of the <GlossaryTerm styled={true} term={"pretty printer"}><i>pretty printer</i></GlossaryTerm> . There are four kinds of <GlossaryTerm styled={true} term={"conditional newline"}><i>conditional newlines</i></GlossaryTerm>, called “linear-style,” “fill-style,” “miser-style,” and “mandatory-style.” See the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"pprint-newline"}><b>pprint-newline</b></DictionaryLink> and Section 22.2.1.1 (Dynamic Control of the Arrangement of Output). 



**conformance** *n.* a state achieved by proper and complete adherence to the 



requirements of this specification. See Section 1.5 (Conformance). 



**conforming code** *n. code* that is all of part of a <GlossaryTerm styled={true} term={"conforming program"}><i>conforming program</i></GlossaryTerm>. 



**conforming implementation** *n.* an <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm>, used to emphasize complete and correct adherance to all conformance criteria. A <GlossaryTerm styled={true} term={"conforming implementation"}><i>conforming implementation</i></GlossaryTerm> is capable of accepting a <GlossaryTerm styled={true} term={"conforming program"}><i>conforming program</i></GlossaryTerm> as input, preparing that <GlossaryTerm  term={"program"}><i>program</i></GlossaryTerm> for *execution*, and executing the prepared <GlossaryTerm  term={"program"}><i>program</i></GlossaryTerm> in accordance with this specification. An <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm> which has been extended may still be a <GlossaryTerm styled={true} term={"conforming implementation"}><i>conforming implementation</i></GlossaryTerm> 







 



 



provided that no extension interferes with the correct function of any <GlossaryTerm styled={true} term={"conforming program"}><i>conforming program</i></GlossaryTerm>. 



**conforming processor** *n. ANSI* a <GlossaryTerm styled={true} term={"conforming implementation"}><i>conforming implementation</i></GlossaryTerm>. 



**conforming program** *n.* a <GlossaryTerm  term={"program"}><i>program</i></GlossaryTerm>, used to emphasize the fact that the <GlossaryTerm  term={"program"}><i>program</i></GlossaryTerm> depends for its correctness only upon documented aspects of Common Lisp, and can therefore be expected to run correctly in any <GlossaryTerm styled={true} term={"conforming implementation"}><i>conforming implementation</i></GlossaryTerm>. 



**congruent** *n.* conforming to the rules of <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> congruency, as detailed in Section 7.6.4 (Congruent Lambda-lists for all Methods of a Generic Function). 



<DictionaryLink  term={"cons"}><b>cons</b></DictionaryLink> *n.v.* 1. *n.* a compound data <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> having two components called the <GlossaryTerm  term={"car"}><i>car</i></GlossaryTerm> and the <GlossaryTerm  term={"cdr"}><i>cdr</i></GlossaryTerm> . 2. *v.* to create such an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 3. *v. Idiom.* to create any <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>, or to allocate storage. 



**constant** *n.* 1. a <GlossaryTerm styled={true} term={"constant form"}><i>constant form</i></GlossaryTerm>. 2. a <GlossaryTerm styled={true} term={"constant variable"}><i>constant variable</i></GlossaryTerm>. 3. a <GlossaryTerm styled={true} term={"constant object"}><i>constant object</i></GlossaryTerm>. 4. a <GlossaryTerm styled={true} term={"self-evaluating object"}><i>self-evaluating object</i></GlossaryTerm>. 



**constant form** *n.* any <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> for which <GlossaryTerm  term={"evaluation"}><i>evaluation</i></GlossaryTerm> always <GlossaryTerm  term={"yield"}><i>yields</i></GlossaryTerm> the same <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm>, that neither affects nor is affected by the <GlossaryTerm  term={"environment"}><i>environment</i></GlossaryTerm> in which it is *evaluated* (except that it is permitted to refer to the names of <GlossaryTerm styled={true} term={"constant variable"}><i>constant variables</i></GlossaryTerm> defined in the <GlossaryTerm  term={"environment"}><i>environment</i></GlossaryTerm>), and that neither affects nor is affected by the state of any <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> except those <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> that are <GlossaryTerm styled={true} term={"otherwise inaccessible part"}><i>otherwise inaccessible parts</i></GlossaryTerm> of <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> created by the <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> itself. “A <DictionaryLink  term={"car"}><b>car</b></DictionaryLink> form in which the argument is a <DictionaryLink  term={"quote"}><b>quote</b></DictionaryLink> form is a constant form.” 



**constant object** *n.* an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> that is constrained (*e.g.*, by its context in a <GlossaryTerm  term={"program"}><i>program</i></GlossaryTerm> or by the source from which it was obtained) to be <GlossaryTerm  term={"immutable"}><i>immutable</i></GlossaryTerm>. “A literal object that has been processed by <DictionaryLink  term={"compile-file"}><b>compile-file</b></DictionaryLink> is a constant object.” 



**constant variable** *n.* a <GlossaryTerm  term={"variable"}><i>variable</i></GlossaryTerm>, the <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of which can never change; that 



is, a <GlossaryTerm  term={"keyword"}><i>keyword</i></GlossaryTerm> <sub>1</sub> or a <GlossaryTerm styled={true} term={"named constant"}><i>named constant</i></GlossaryTerm>. “The symbols <DictionaryLink  term={"t"}><b>t</b></DictionaryLink>, <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>, :direction, and 



<DictionaryLink  term={"most-positive-fixnum"}><b>most-positive-fixnum</b></DictionaryLink> are constant variables.” 



<b>constituent</b> <i>n.</i>, <i>adj.</i> 1. a. <i>n.</i> the <i>syntax type</i> of a <i>character</i> that is part of a <i>token</i>. For details, see Section 2.1.4.1 (Constituent Characters). b. <i>adj.</i> (of a <i>character</i> ) having the <i>constituent</i><sub>1<i>a</i></sub> syntax type<sub>2</sub>. c. <i>n.</i> a <i>constituent</i><sub>1<i>b</i></sub> character . 2. <i>n.</i> (of a <i>composite stream</i>) one of possibly several <i>objects</i> that collectively comprise the source or sink of that <i>stream</i>. 



**constituent trait** *n.* (of a <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> ) one of several classifications of a *constituent character* in a <GlossaryTerm  term={"readtable"}><i>readtable</i></GlossaryTerm>. See Section 2.1.4.1 (Constituent Characters). 



**constructed stream** *n.* a <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> whose source or sink is a Lisp <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. Note that since a <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> is another Lisp <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"composite stream"}><i>composite streams</i></GlossaryTerm> are considered <GlossaryTerm styled={true} term={"constructed stream"}><i>constructed streams</i></GlossaryTerm>. “A string stream is a constructed stream.” 







 



 



**contagion** *n.* a process whereby operations on <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> of differing <GlossaryTerm  term={"type"}><i>types</i></GlossaryTerm> (*e.g.*, 



arithmetic on mixed <GlossaryTerm  term={"type"}><i>types</i></GlossaryTerm> of <GlossaryTerm  term={"number"}><i>numbers</i></GlossaryTerm>) produce a result whose <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> is controlled by the dominance of one <GlossaryTerm  term={"argument"}><i>argument</i></GlossaryTerm>’s <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> over the <GlossaryTerm  term={"type"}><i>types</i></GlossaryTerm> of the other <GlossaryTerm  term={"argument"}><i>arguments</i></GlossaryTerm>. See Section 12.1.1.2 (Contagion in Numeric Operations). 



**continuable** *n.* (of an <GlossaryTerm  term={"error"}><i>error</i></GlossaryTerm> ) an <GlossaryTerm  term={"error"}><i>error</i></GlossaryTerm> that is <GlossaryTerm  term={"correctable"}><i>correctable</i></GlossaryTerm> by the continue restart. 



**control form** *n.* 1. a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> that establishes one or more places to which control can be transferred. 2. a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> that transfers control. 



<b>copy</b> <i>n.</i> 1. (of a <i>cons C</i>) a <i>fresh cons</i> with the <i>same car</i> and <i>cdr</i> as <i>C</i>. 2. (of a <i>list L</i>) a <i>fresh list</i> with the <i>same elements</i> as <i>L</i>. (Only the <i>list structure</i> is <i>fresh</i>; the <i>elements</i> are the <i>same</i>.) See the <i>function</i> <b>copy-list</b>. 3. (of an <i>association list A</i> with <i>elements A<sub>i</sub></i>) a <i>fresh list B</i> with <i>elements B<sub>i</sub></i>, each of which is <b>nil</b> if <i>A<sub>i</sub></i>is <b>nil</b>, or else a <i>copy</i> of the <i>cons A<sub>i</sub></i>. See the <i>function</i> <b>copy-alist</b>. 4. (of a <i>tree T</i>) a <i>fresh tree</i> with the <i>same</i> 



*leaves* as <GlossaryTerm  term={"t"}><i>T</i></GlossaryTerm>. See the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"copy-tree"}><b>copy-tree</b></DictionaryLink>. 5. (of a *random state R*) a *fresh random state* that, if used as an argument to to the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"random"}><b>random</b></DictionaryLink> would produce the same series of “random” values as *R* would produce. 6. (of a *structure S*) a *fresh structure* that has the same <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> as *S*, and that has slot values, each of which is the <GlossaryTerm  term={"same"}><i>same</i></GlossaryTerm> as the corresponding slot value of *S*. (Note that since the difference between a <GlossaryTerm  term={"cons"}><i>cons</i></GlossaryTerm>, a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm>, and a <GlossaryTerm  term={"tree"}><i>tree</i></GlossaryTerm> is a matter of “view” or “intention,” there can be no general-purpose <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> which, based solely on the <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> of an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>, can determine which of these distinct meanings is intended. The distinction rests solely on the basis of the text description within this document. For example, phrases like “a <GlossaryTerm  term={"copy"}><i>copy</i></GlossaryTerm> of the given <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm>” or “copy of the *list x*” imply the second definition.) 



**correctable** *adj.* (of an <GlossaryTerm  term={"error"}><i>error</i></GlossaryTerm> ) 1. (by a <GlossaryTerm  term={"restart"}><i>restart</i></GlossaryTerm> other than **abort** that has been 



associated with the <GlossaryTerm  term={"error"}><i>error</i></GlossaryTerm> ) capable of being corrected by invoking that <GlossaryTerm  term={"restart"}><i>restart</i></GlossaryTerm>. “The function <DictionaryLink  term={"cerror"}><b>cerror</b></DictionaryLink> signals an error that is correctable by the **continue** <GlossaryTerm  term={"restart"}><i>restart</i></GlossaryTerm>.” (Note that correctability is not a property of an *error object*, but rather a property of the <GlossaryTerm styled={true} term={"dynamic environment"}><i>dynamic environment</i></GlossaryTerm> that is in effect when the <GlossaryTerm  term={"error"}><i>error</i></GlossaryTerm> is *signaled*. Specifically, the <GlossaryTerm  term={"restart"}><i>restart</i></GlossaryTerm> is “associated with” the *error condition object*. See Section 9.1.4.2.4 (Associating a Restart with a Condition).) 2. (when no specific <GlossaryTerm  term={"restart"}><i>restart</i></GlossaryTerm> is mentioned) <GlossaryTerm  term={"correctable"}><i>correctable</i></GlossaryTerm><sub>1</sub> by at least one <GlossaryTerm  term={"restart"}><i>restart</i></GlossaryTerm>. “<DictionaryLink  term={"import"}><b>import</b></DictionaryLink> signals a correctable error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"package-error"}><b>package-error</b></DictionaryLink> if any of the imported symbols has the same name as some distinct symbol already accessible in the package.” 



**current input base** *n.* (in a <GlossaryTerm styled={true} term={"dynamic environment"}><i>dynamic environment</i></GlossaryTerm>) the <GlossaryTerm  term={"radix"}><i>radix</i></GlossaryTerm> that is the <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of **\*read-base\*** in that <GlossaryTerm  term={"environment"}><i>environment</i></GlossaryTerm>, and that is the default <GlossaryTerm  term={"radix"}><i>radix</i></GlossaryTerm> employed by the *Lisp reader* and its related <GlossaryTerm  term={"function"}><i>functions</i></GlossaryTerm>. 



**current logical block** *n.* the context of the innermost lexically enclosing use of <DictionaryLink  term={"pprint-logical-block"}><b>pprint-logical-block</b></DictionaryLink>. 



**current output base** *n.* (in a <GlossaryTerm styled={true} term={"dynamic environment"}><i>dynamic environment</i></GlossaryTerm>) the <GlossaryTerm  term={"radix"}><i>radix</i></GlossaryTerm> that is the <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of 



 



 



**\*print-base\*** in that <GlossaryTerm  term={"environment"}><i>environment</i></GlossaryTerm>, and that is the default <GlossaryTerm  term={"radix"}><i>radix</i></GlossaryTerm> employed by the *Lisp printer* and its related <GlossaryTerm  term={"function"}><i>functions</i></GlossaryTerm>. 



**current package** *n.* (in a <GlossaryTerm styled={true} term={"dynamic environment"}><i>dynamic environment</i></GlossaryTerm>) the <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> that is the <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink  term={"package"}><b>\*package\*</b></DictionaryLink> in that <GlossaryTerm  term={"environment"}><i>environment</i></GlossaryTerm>, and that is the default <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> employed by the *Lisp reader* and *Lisp printer* , and their related <GlossaryTerm  term={"function"}><i>functions</i></GlossaryTerm>. 



**current pprint dispatch table** *n.* (in a <GlossaryTerm styled={true} term={"dynamic environment"}><i>dynamic environment</i></GlossaryTerm>) the <GlossaryTerm styled={true} term={"pprint dispatch table"}><i>pprint dispatch table</i></GlossaryTerm> that is the <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink  term={"print-pprint-dispatch"}><b>\*print-pprint-dispatch\*</b></DictionaryLink> in that <GlossaryTerm  term={"environment"}><i>environment</i></GlossaryTerm>, and that is the default <GlossaryTerm styled={true} term={"pprint dispatch table"}><i>pprint dispatch table</i></GlossaryTerm> employed by the <GlossaryTerm styled={true} term={"pretty printer"}><i>pretty printer</i></GlossaryTerm> . 



**current random state** *n.* (in a <GlossaryTerm styled={true} term={"dynamic environment"}><i>dynamic environment</i></GlossaryTerm>) the <GlossaryTerm styled={true} term={"random state"}><i>random state</i></GlossaryTerm> that is the <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink  term={"random-state"}><b>\*random-state\*</b></DictionaryLink> in that <GlossaryTerm  term={"environment"}><i>environment</i></GlossaryTerm>, and that is the default <GlossaryTerm styled={true} term={"random state"}><i>random state</i></GlossaryTerm> employed by <DictionaryLink  term={"random"}><b>random</b></DictionaryLink>. 



**current readtable** *n.* (in a <GlossaryTerm styled={true} term={"dynamic environment"}><i>dynamic environment</i></GlossaryTerm>) the <GlossaryTerm  term={"readtable"}><i>readtable</i></GlossaryTerm> that is the <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink  term={"readtable"}><b>\*readtable\*</b></DictionaryLink> in that <GlossaryTerm  term={"environment"}><i>environment</i></GlossaryTerm>, and that affects the way in which <GlossaryTerm  term={"expression"}><i>expressions</i></GlossaryTerm><sub>2</sub> are parsed into <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> by the *Lisp reader* . 




---
title: C
sidebar_position: 99
---

**C** 



<DictionaryLink styled={true} term={"cadr"}><b>cadr</b></DictionaryLink> [ **ka d*** **r** ], *n.* (of an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>) the <GlossaryTerm styled={true} term={"car"}><i>car</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"cdr"}><i>cdr</i></GlossaryTerm> of that <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



**call** *v.t.*, *n.* 1. *v.t.* (a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> with <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm>) to cause the <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm> represented by that <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> to be *executed* in an <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm> where <GlossaryTerm styled={true} term={"binding"}><i>bindings</i></GlossaryTerm> for the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> of its <GlossaryTerm styled={true} term={"parameter"}><i>parameters</i></GlossaryTerm> have been *established* based on the <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm>. “Calling the function <DictionaryLink styled={true} term={"+"}><b>+</b></DictionaryLink> with the arguments 5 and 1 yields a value of 6.” 2. *n.* a <GlossaryTerm styled={true} term={"situation"}><i>situation</i></GlossaryTerm> in which a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> is called. 



**captured initialization form** *n.* an *initialization form* along with the *lexical* 



<GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm> in which the <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> that defined the *initialization form* was *evaluated*. “Each newly added shared slot is set to the result of evaluating the captured 



initialization form for the slot that was specified in the <DictionaryLink styled={true} term={"defclass"}><b>defclass</b></DictionaryLink> form for the new class.” 







 



 



<DictionaryLink styled={true} term={"car"}><b>car</b></DictionaryLink> *n.* 1. a. (of a <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm>) the component of a <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm> corresponding to the first <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> to <DictionaryLink styled={true} term={"cons"}><b>cons</b></DictionaryLink>; the other component is the <GlossaryTerm styled={true} term={"cdr"}><i>cdr</i></GlossaryTerm> . “The function <DictionaryLink styled={true} term={"rplaca"}><b>rplaca</b></DictionaryLink> modifies the car of a cons.” b. (of a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>) the first <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> if the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> is the *empty list*. 2. the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that is held in the <GlossaryTerm styled={true} term={"car"}><i>car</i></GlossaryTerm> <sub>1</sub>. “The function <DictionaryLink styled={true} term={"car"}><b>car</b></DictionaryLink> returns the car of a cons.” 



<DictionaryLink styled={true} term={"case"}><b>case</b></DictionaryLink> *n.* (of a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> ) the property of being either <GlossaryTerm styled={true} term={"uppercase"}><i>uppercase</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"lowercase"}><i>lowercase</i></GlossaryTerm>. Not all <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> have <GlossaryTerm styled={true} term={"case"}><i>case</i></GlossaryTerm>. “The characters #\A and #\a have case, but the character #\$ has no case.” See Section 13.1.4.3 (Characters With Case) and the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"both-case-p"}><b>both-case-p</b></DictionaryLink>. 



**case sensitivity mode** *n.* one of the <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> :upcase, :downcase, :preserve, or 



:invert. 



<DictionaryLink styled={true} term={"catch"}><b>catch</b></DictionaryLink> *n.* an *exit point* which is *established* by a <DictionaryLink styled={true} term={"catch"}><b>catch</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> within the *dynamic scope* of its body, which is named by a *catch tag*, and to which control and <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> may be *thrown*. 



**catch tag** *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> which names an *active catch*. (If more than one <GlossaryTerm styled={true} term={"catch"}><i>catch</i></GlossaryTerm> is active with the same *catch tag*, it is only possible to <GlossaryTerm styled={true} term={"throw"}><i>throw</i></GlossaryTerm> to the innermost such <GlossaryTerm styled={true} term={"catch"}><i>catch</i></GlossaryTerm> because the outer one is *shadowed* <sub>2</sub>.) 



<DictionaryLink styled={true} term={"cddr"}><b>cddr</b></DictionaryLink> [ **k\_ud***  **d*** **r** ] or [ **k***  **d\_ud*** **r** ], *n.* (of an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>) the <GlossaryTerm styled={true} term={"cdr"}><i>cdr</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"cdr"}><i>cdr</i></GlossaryTerm> of that <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



<DictionaryLink styled={true} term={"cdr"}><b>cdr</b></DictionaryLink> [ **k\_u d*** **r** ], *n.* 1. a. (of a <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm>) the component of a <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm> corresponding to the second <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> to <DictionaryLink styled={true} term={"cons"}><b>cons</b></DictionaryLink>; the other component is the <GlossaryTerm styled={true} term={"car"}><i>car</i></GlossaryTerm> . “The function <DictionaryLink styled={true} term={"rplacd"}><b>rplacd</b></DictionaryLink> modifies the cdr of a cons.” b. (of a *list L*<sub>1</sub>) either the *list L*<sub>2</sub> that contains the <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm> of *L*<sub>1</sub> that follow after the first, or else <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> if *L*<sub>1</sub> is the *empty list*. 2. the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that is held in the <GlossaryTerm styled={true} term={"cdr"}><i>cdr</i></GlossaryTerm> <sub>1</sub>. “The function <DictionaryLink styled={true} term={"cdr"}><b>cdr</b></DictionaryLink> returns the cdr of a cons.” 



**cell** *n. Trad.* (of an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>) a conceptual <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> of that <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. The *dynamic variable* and global *function bindings* of a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> are sometimes referred to as its *value cell* and *function cell*, respectively. 



<DictionaryLink styled={true} term={"character"}><b>character</b></DictionaryLink> *n.*, *adj.* 1. *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"character"}><b>character</b></DictionaryLink>; that is, an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that represents a unitary token in an aggregate quantity of text; see Section 13.1 (Character Concepts). 2. *adj.* a. (of a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>) having an *element type* that is a <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"character"}><b>character</b></DictionaryLink>. The most fundamental operation on a *character input stream* is <DictionaryLink styled={true} term={"read-char"}><b>read-char</b></DictionaryLink> and on a *character output stream* is <DictionaryLink styled={true} term={"write-char"}><b>write-char</b></DictionaryLink>. See <GlossaryTerm styled={true} term={"binary"}><i>binary</i></GlossaryTerm>. b. (of a <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm>) having been created by opening a *character stream*. (It is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> whether this is an inspectable aspect of the <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm>, or whether any given *binary file* can be treated as a *character file*.) 



**character code** *n.* 1. one of possibly several <GlossaryTerm styled={true} term={"attribute"}><i>attributes</i></GlossaryTerm> of a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> . 2. a 



non-negative *integer* less than the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"char-code-limit"}><b>char-code-limit</b></DictionaryLink> that is suitable for use as a *character code*<sub>1</sub>. 







 



 



**character designator** *n.* a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> ; that is, an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that denotes a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> and that is one of: a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"length"}><i>length</i></GlossaryTerm> one (denoting the <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> that is its only <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm>), or a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> (denoting itself). 



**circular** *adj.* 1. (of a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>) a *circular list*. 2. (of an arbitrary <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>) having a 



*component*, <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"constituent"}><i>constituent</i></GlossaryTerm><sub>2</sub>, or <GlossaryTerm styled={true} term={"subexpression"}><i>subexpression</i></GlossaryTerm> (as appropriate to the context) that is the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> itself. 



**circular list** *n.* a chain of *conses* that has no termination because some <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm> in the chain is the <GlossaryTerm styled={true} term={"cdr"}><i>cdr</i></GlossaryTerm> of a later <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm>. 



<DictionaryLink styled={true} term={"class"}><b>class</b></DictionaryLink> *n.* 1. an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that uniquely determines the structure and behavior of a set of other <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> called its *direct instances*, that contributes structure and behavior to a set of other <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> called its *indirect instances*, and that acts as a *type specifier* for a set of objects called its *generalized instances*. “The class <DictionaryLink styled={true} term={"integer"}><b>integer</b></DictionaryLink> is a subclass of the 



class <DictionaryLink styled={true} term={"number"}><b>number</b></DictionaryLink>.” (Note that the phrase “the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> foo” is often substituted for the more precise phrase “the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> named foo”—in both cases, a *class object* (not a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>) is denoted.) 2. (of an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>) the uniquely determined <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> of which the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is a *direct instance*. See the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"class-of"}><b>class-of</b></DictionaryLink>. “The class of the object returned by <DictionaryLink styled={true} term={"gensym"}><b>gensym</b></DictionaryLink> is <DictionaryLink styled={true} term={"symbol"}><b>symbol</b></DictionaryLink>.” (Note that with this usage a phrase such as “its <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> is foo” is often substituted for the more precise phrase “its <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> is the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> named foo”—in both cases, a *class object* (not a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>) is denoted.) 



**class designator** *n.* a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>; that is, an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that denotes a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> and that is one of: a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> (denoting the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> named by that <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>; see the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"find-class"}><b>find-class</b></DictionaryLink>) or a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> (denoting itself). 



**class precedence list** *n.* a unique total ordering on a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> and its *superclasses* that is consistent with the *local precedence orders* for the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> and its *superclasses*. For detailed information, see Section 4.3.5 (Determining the Class Precedence List). 



<DictionaryLink styled={true} term={"close"}><b>close</b></DictionaryLink> *v.t.* (a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>) to terminate usage of the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> as a source or sink of data, permitting the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> to reclaim its internal data structures, and to free any external resources which might have been locked by the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> when it was opened. 



**closed** *adj.* (of a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>) having been <GlossaryTerm styled={true} term={"closed"}><i>closed</i></GlossaryTerm> (see close). Some (but not all) operations that are valid on *open streams* are not valid on *closed streams*. See Section 21.1.1.1.2 (Open and Closed Streams). 



**closure** *n.* a *lexical closure*. 



**coalesce** *v.t.* (*literal objects* that are <GlossaryTerm styled={true} term={"similar"}><i>similar</i></GlossaryTerm> ) to consolidate the identity of those <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm>, such that they become the *same object*. See Section 3.2.1 (Compiler 



Terminology). 







 



 



**code** *n.* 1. *Trad.* any representation of actions to be performed, whether conceptual or as an actual <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>, such as <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>, *lambda expressions*, *objects* of *type function*, text in a *source file*, or instruction sequences in a *compiled file*. This is a generic term; the specific nature of the representation depends on its context. 2. (of a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> ) a *character code*. 



<DictionaryLink styled={true} term={"coerce"}><b>coerce</b></DictionaryLink> *v.t.* (an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> to a <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>) to produce an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> from the given <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>, without modifying that <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>, by following some set of coercion rules that must be specifically stated for any context in which this term is used. The resulting <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is necessarily of the indicated <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>, except when that type is a <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"complex"}><b>complex</b></DictionaryLink>; in that case, if a *complex rational* with an imaginary part of zero would result, the result is a <GlossaryTerm styled={true} term={"rational"}><i>rational</i></GlossaryTerm> 



rather than a <GlossaryTerm styled={true} term={"complex"}><i>complex</i></GlossaryTerm>—see Section 12.1.5.3 (Rule of Canonical Representation for Complex Rationals). 



**colon** *n.* the *standard character* that is called “colon” (:). See Figure 2–5. 



**comma** *n.* the *standard character* that is called “comma” (,). See Figure 2–5. 



**compilation** *n.* the process of *compiling code* by the <GlossaryTerm styled={true} term={"compiler"}><i>compiler</i></GlossaryTerm> . 



**compilation environment** *n.* 1. An <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm> that represents information known by the <GlossaryTerm styled={true} term={"compiler"}><i>compiler</i></GlossaryTerm> about a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> that is being *compiled*. See Section 3.2.1 (Compiler Terminology). 2. An <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that represents the *compilation environment* <sub>1</sub> and that is used as a second argument to a *macro function* (which supplies a <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> for any **&amp;environment** <GlossaryTerm styled={true} term={"parameter"}><i>parameter</i></GlossaryTerm> in the *macro function*’s definition). 



**compilation unit** *n.* an interval during which a single unit of compilation is occurring. See the <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm> <DictionaryLink styled={true} term={"with-compilation-unit"}><b>with-compilation-unit</b></DictionaryLink>. 



<DictionaryLink styled={true} term={"compile"}><b>compile</b></DictionaryLink> *v.t.* 1. (<GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm>) to perform semantic preprocessing of the <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm>, usually 



optimizing one or more qualities of the code, such as run-time speed of *execution* or run-time storage usage. The minimum semantic requirements of compilation are that it must remove all macro calls and arrange for all *load time values* to be resolved prior to run time. 2. (a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>) to produce a new <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"compiled-function"}><b>compiled-function</b></DictionaryLink> which represents the result of *compiling* the <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm> represented by the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>. See the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"compile"}><b>compile</b></DictionaryLink>. 3. (a *source file*) to produce a *compiled file* from a *source file*. See the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"compile-file"}><b>compile-file</b></DictionaryLink>. 



**compile time** *n.* the duration of time that the <GlossaryTerm styled={true} term={"compiler"}><i>compiler</i></GlossaryTerm> is processing *source code*. **compile-time definition** *n.* a definition in the *compilation environment*. 



**compiled code** *n.* 1. *compiled functions*. 2. <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm> that represents *compiled functions*, such as the contents of a *compiled file*. 







 



 



**compiled file** *n.* a <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm> which represents the results of *compiling* the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> which appeared in a corresponding *source file*, and which can be *loaded*. See the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"compile-file"}><b>compile-file</b></DictionaryLink>. 



**compiled function** *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"compiled-function"}><b>compiled-function</b></DictionaryLink>, which is a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> that has been *compiled*, which contains no references to <GlossaryTerm styled={true} term={"macro"}><i>macros</i></GlossaryTerm> that must be expanded at run time, and which contains no unresolved references to *load time values*. 



**compiler** *n.* a facility that is part of Lisp and that translates <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm> into an 



<GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> form that might be represented or *executed* efficiently. The functions <DictionaryLink styled={true} term={"compile"}><b>compile</b></DictionaryLink> and <DictionaryLink styled={true} term={"compile-file"}><b>compile-file</b></DictionaryLink> permit programs to invoke the <GlossaryTerm styled={true} term={"compiler"}><i>compiler</i></GlossaryTerm> . 



**compiler macro** *n.* an auxiliary macro definition for a globally defined <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm> which might or might not be called by any given *conforming implementation* and which must preserve the semantics of the globally defined <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm> but 



which might perform some additional optimizations. (Unlike a <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm>, a *compiler macro* does not extend the syntax of Common Lisp; rather, it provides an alternate implementation strategy for some existing syntax or functionality.) 



**compiler macro expansion** *n.* 1. the process of translating a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> into another <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> by a *compiler macro*. 2. the <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> resulting from this process. 



**compiler macro form** *n.* a *function form* or *macro form* whose <GlossaryTerm styled={true} term={"operator"}><i>operator</i></GlossaryTerm> has a definition as a *compiler macro*, or a <DictionaryLink styled={true} term={"funcall"}><b>funcall</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> whose first <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> is a <DictionaryLink styled={true} term={"function"}><b>function</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> whose <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> is the <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> of a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> that has a definition as a *compiler macro*. 



**compiler macro function** *n.* a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of two arguments, a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> and an 



<GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm>, that implements *compiler macro expansion* by producing either a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> to be used in place of the original argument <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> or else <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, indicating that the original <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> should not be replaced. See Section 3.2.2.1 (Compiler Macros). 



<DictionaryLink styled={true} term={"complex"}><b>complex</b></DictionaryLink> *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"complex"}><b>complex</b></DictionaryLink>. 



**complex float** *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"complex"}><b>complex</b></DictionaryLink> which has a *complex part type* that is a <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> of <DictionaryLink styled={true} term={"float"}><b>float</b></DictionaryLink>. A *complex float* is a <GlossaryTerm styled={true} term={"complex"}><i>complex</i></GlossaryTerm> , but it is not a <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm>. 



**complex part type** *n.* (of a <GlossaryTerm styled={true} term={"complex"}><i>complex</i></GlossaryTerm> ) 1. the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> which is used to represent both the real part and the imaginary part of the <GlossaryTerm styled={true} term={"complex"}><i>complex</i></GlossaryTerm> . 2. the *actual complex part type* of the <GlossaryTerm styled={true} term={"complex"}><i>complex</i></GlossaryTerm> . 3. the *expressed complex part type* of the <GlossaryTerm styled={true} term={"complex"}><i>complex</i></GlossaryTerm> . 



**complex rational** *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"complex"}><b>complex</b></DictionaryLink> which has a *complex part type* that is a <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> of <DictionaryLink styled={true} term={"rational"}><b>rational</b></DictionaryLink>. A *complex rational* is a <GlossaryTerm styled={true} term={"complex"}><i>complex</i></GlossaryTerm> , but it is not a <GlossaryTerm styled={true} term={"rational"}><i>rational</i></GlossaryTerm>. No *complex rational* has an imaginary part of zero because such a number is always represented by Common Lisp as an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"rational"}><b>rational</b></DictionaryLink>; see Section 12.1.5.3 (Rule of Canonical Representation for Complex Rationals). 







 



 



**complex single float** *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"complex"}><b>complex</b></DictionaryLink> which has a *complex part type* that is a <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> of <DictionaryLink styled={true} term={"single-float"}><b>single-float</b></DictionaryLink>. A *complex single float* is a <GlossaryTerm styled={true} term={"complex"}><i>complex</i></GlossaryTerm> , but it is not a *single float*. 



**composite stream** *n.* a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> that is composed of one or more other <GlossaryTerm styled={true} term={"stream"}><i>streams</i></GlossaryTerm>. “<DictionaryLink styled={true} term={"make-synonym-stream"}><b>make-synonym-stream</b></DictionaryLink> creates a composite stream.” 



**compound form** *n.* a *non-empty list* which is a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>: a *special form*, a *lambda form*, a *macro form*, or a *function form*. 



**compound type specifier** *n.* a *type specifier* that is a <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm>; *i.e.*, a *type specifier* that is not an *atomic type specifier* . “(vector single-float) is a compound type specifier.” 



**concatenated stream** *n.* an *input stream* of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"concatenated-stream"}><b>concatenated-stream</b></DictionaryLink>. 



<DictionaryLink styled={true} term={"condition"}><b>condition</b></DictionaryLink> *n.* 1. an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> which represents a <GlossaryTerm styled={true} term={"situation"}><i>situation</i></GlossaryTerm>—usually, but not necessarily, during *signaling*. 2. an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"condition"}><b>condition</b></DictionaryLink>. 



**condition designator** *n.* one or more <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> that, taken together, denote either an existing *condition object* or a *condition object* to be implicitly created. For details, see Section 9.1.2.1 (Condition Designators). 



**condition handler** *n.* a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> that might be invoked by the act of *signaling*, that receives the <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> being signaled as its only argument, and that is permitted to <GlossaryTerm styled={true} term={"handle"}><i>handle</i></GlossaryTerm> the <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> or to <GlossaryTerm styled={true} term={"decline"}><i>decline</i></GlossaryTerm>. See Section 9.1.4.1 (Signaling). 



**condition reporter** *n.* a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> that describes how a <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> is to be printed when the *Lisp printer* is invoked while <DictionaryLink styled={true} term={"print-escape"}><b>\*print-escape\*</b></DictionaryLink> is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. See Section 9.1.3 (Printing Conditions). 



**conditional newline** *n.* a point in output where a <GlossaryTerm styled={true} term={"newline"}><i>newline</i></GlossaryTerm> might be inserted at the discretion of the *pretty printer* . There are four kinds of *conditional newlines*, called “linear-style,” “fill-style,” “miser-style,” and “mandatory-style.” See the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"pprint-newline"}><b>pprint-newline</b></DictionaryLink> and Section 22.2.1.1 (Dynamic Control of the Arrangement of Output). 



**conformance** *n.* a state achieved by proper and complete adherence to the 



requirements of this specification. See Section 1.5 (Conformance). 



**conforming code** *n. code* that is all of part of a *conforming program*. 



**conforming implementation** *n.* an <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm>, used to emphasize complete and correct adherance to all conformance criteria. A *conforming implementation* is capable of accepting a *conforming program* as input, preparing that <GlossaryTerm styled={true} term={"program"}><i>program</i></GlossaryTerm> for *execution*, and executing the prepared <GlossaryTerm styled={true} term={"program"}><i>program</i></GlossaryTerm> in accordance with this specification. An <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> which has been extended may still be a *conforming implementation* 







 



 



provided that no extension interferes with the correct function of any *conforming program*. 



**conforming processor** *n. ANSI* a *conforming implementation*. 



**conforming program** *n.* a <GlossaryTerm styled={true} term={"program"}><i>program</i></GlossaryTerm>, used to emphasize the fact that the <GlossaryTerm styled={true} term={"program"}><i>program</i></GlossaryTerm> depends for its correctness only upon documented aspects of Common Lisp, and can therefore be expected to run correctly in any *conforming implementation*. 



**congruent** *n.* conforming to the rules of *lambda list* congruency, as detailed in Section 7.6.4 (Congruent Lambda-lists for all Methods of a Generic Function). 



<DictionaryLink styled={true} term={"cons"}><b>cons</b></DictionaryLink> *n.v.* 1. *n.* a compound data <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> having two components called the <GlossaryTerm styled={true} term={"car"}><i>car</i></GlossaryTerm> and the <GlossaryTerm styled={true} term={"cdr"}><i>cdr</i></GlossaryTerm> . 2. *v.* to create such an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 3. *v. Idiom.* to create any <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>, or to allocate storage. 



**constant** *n.* 1. a *constant form*. 2. a *constant variable*. 3. a *constant object*. 4. a *self-evaluating object*. 



**constant form** *n.* any <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> for which <GlossaryTerm styled={true} term={"evaluation"}><i>evaluation</i></GlossaryTerm> always <GlossaryTerm styled={true} term={"yield"}><i>yields</i></GlossaryTerm> the same <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm>, that neither affects nor is affected by the <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm> in which it is *evaluated* (except that it is permitted to refer to the names of *constant variables* defined in the <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm>), and that neither affects nor is affected by the state of any <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> except those <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> that are *otherwise inaccessible parts* of <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> created by the <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> itself. “A <DictionaryLink styled={true} term={"car"}><b>car</b></DictionaryLink> form in which the argument is a <DictionaryLink styled={true} term={"quote"}><b>quote</b></DictionaryLink> form is a constant form.” 



**constant object** *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that is constrained (*e.g.*, by its context in a <GlossaryTerm styled={true} term={"program"}><i>program</i></GlossaryTerm> or by the source from which it was obtained) to be <GlossaryTerm styled={true} term={"immutable"}><i>immutable</i></GlossaryTerm>. “A literal object that has been processed by <DictionaryLink styled={true} term={"compile-file"}><b>compile-file</b></DictionaryLink> is a constant object.” 



**constant variable** *n.* a <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm>, the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of which can never change; that 



is, a <GlossaryTerm styled={true} term={"keyword"}><i>keyword</i></GlossaryTerm> <sub>1</sub> or a *named constant*. “The symbols <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink>, <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, :direction, and 



<DictionaryLink styled={true} term={"most-positive-fixnum"}><b>most-positive-fixnum</b></DictionaryLink> are constant variables.” 



<b>constituent</b> <i>n.</i>, <i>adj.</i> 1. a. <i>n.</i> the <i>syntax type</i> of a <i>character</i> that is part of a <i>token</i>. For details, see Section 2.1.4.1 (Constituent Characters). b. <i>adj.</i> (of a <i>character</i> ) having the <i>constituent</i><sub>1<i>a</i></sub> syntax type<sub>2</sub>. c. <i>n.</i> a <i>constituent</i><sub>1<i>b</i></sub> character . 2. <i>n.</i> (of a <i>composite stream</i>) one of possibly several <i>objects</i> that collectively comprise the source or sink of that <i>stream</i>. 



**constituent trait** *n.* (of a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> ) one of several classifications of a *constituent character* in a <GlossaryTerm styled={true} term={"readtable"}><i>readtable</i></GlossaryTerm>. See Section 2.1.4.1 (Constituent Characters). 



**constructed stream** *n.* a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> whose source or sink is a Lisp <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. Note that since a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> is another Lisp <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>, *composite streams* are considered *constructed streams*. “A string stream is a constructed stream.” 







 



 



**contagion** *n.* a process whereby operations on <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> of differing <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm> (*e.g.*, 



arithmetic on mixed <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"number"}><i>numbers</i></GlossaryTerm>) produce a result whose <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> is controlled by the dominance of one <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm>’s <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> over the <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm> of the other <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm>. See Section 12.1.1.2 (Contagion in Numeric Operations). 



**continuable** *n.* (of an <GlossaryTerm styled={true} term={"error"}><i>error</i></GlossaryTerm> ) an <GlossaryTerm styled={true} term={"error"}><i>error</i></GlossaryTerm> that is <GlossaryTerm styled={true} term={"correctable"}><i>correctable</i></GlossaryTerm> by the continue restart. 



**control form** *n.* 1. a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> that establishes one or more places to which control can be transferred. 2. a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> that transfers control. 



<b>copy</b> <i>n.</i> 1. (of a <i>cons C</i>) a <i>fresh cons</i> with the <i>same car</i> and <i>cdr</i> as <i>C</i>. 2. (of a <i>list L</i>) a <i>fresh list</i> with the <i>same elements</i> as <i>L</i>. (Only the <i>list structure</i> is <i>fresh</i>; the <i>elements</i> are the <i>same</i>.) See the <i>function</i> <b>copy-list</b>. 3. (of an <i>association list A</i> with <i>elements A<sub>i</sub></i>) a <i>fresh list B</i> with <i>elements B<sub>i</sub></i>, each of which is <b>nil</b> if <i>A<sub>i</sub></i>is <b>nil</b>, or else a <i>copy</i> of the <i>cons A<sub>i</sub></i>. See the <i>function</i> <b>copy-alist</b>. 4. (of a <i>tree T</i>) a <i>fresh tree</i> with the <i>same</i> 



*leaves* as <GlossaryTerm styled={true} term={"t"}><i>T</i></GlossaryTerm>. See the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"copy-tree"}><b>copy-tree</b></DictionaryLink>. 5. (of a *random state R*) a *fresh random state* that, if used as an argument to to the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"random"}><b>random</b></DictionaryLink> would produce the same series of “random” values as *R* would produce. 6. (of a *structure S*) a *fresh structure* that has the same <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> as *S*, and that has slot values, each of which is the <GlossaryTerm styled={true} term={"same"}><i>same</i></GlossaryTerm> as the corresponding slot value of *S*. (Note that since the difference between a <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>, and a <GlossaryTerm styled={true} term={"tree"}><i>tree</i></GlossaryTerm> is a matter of “view” or “intention,” there can be no general-purpose <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> which, based solely on the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> of an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>, can determine which of these distinct meanings is intended. The distinction rests solely on the basis of the text description within this document. For example, phrases like “a <GlossaryTerm styled={true} term={"copy"}><i>copy</i></GlossaryTerm> of the given <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>” or “copy of the *list x*” imply the second definition.) 



**correctable** *adj.* (of an <GlossaryTerm styled={true} term={"error"}><i>error</i></GlossaryTerm> ) 1. (by a <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm> other than **abort** that has been 



associated with the <GlossaryTerm styled={true} term={"error"}><i>error</i></GlossaryTerm> ) capable of being corrected by invoking that <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm>. “The function <DictionaryLink styled={true} term={"cerror"}><b>cerror</b></DictionaryLink> signals an error that is correctable by the **continue** <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm>.” (Note that correctability is not a property of an *error object*, but rather a property of the *dynamic environment* that is in effect when the <GlossaryTerm styled={true} term={"error"}><i>error</i></GlossaryTerm> is *signaled*. Specifically, the <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm> is “associated with” the *error condition object*. See Section 9.1.4.2.4 (Associating a Restart with a Condition).) 2. (when no specific <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm> is mentioned) <GlossaryTerm styled={true} term={"correctable"}><i>correctable</i></GlossaryTerm><sub>1</sub> by at least one <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm>. “<DictionaryLink styled={true} term={"import"}><b>import</b></DictionaryLink> signals a correctable error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"package-error"}><b>package-error</b></DictionaryLink> if any of the imported symbols has the same name as some distinct symbol already accessible in the package.” 



**current input base** *n.* (in a *dynamic environment*) the <GlossaryTerm styled={true} term={"radix"}><i>radix</i></GlossaryTerm> that is the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of **\*read-base\*** in that <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm>, and that is the default <GlossaryTerm styled={true} term={"radix"}><i>radix</i></GlossaryTerm> employed by the *Lisp reader* and its related <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm>. 



**current logical block** *n.* the context of the innermost lexically enclosing use of <DictionaryLink styled={true} term={"pprint-logical-block"}><b>pprint-logical-block</b></DictionaryLink>. 



**current output base** *n.* (in a *dynamic environment*) the <GlossaryTerm styled={true} term={"radix"}><i>radix</i></GlossaryTerm> that is the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of 



 



 



**\*print-base\*** in that <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm>, and that is the default <GlossaryTerm styled={true} term={"radix"}><i>radix</i></GlossaryTerm> employed by the *Lisp printer* and its related <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm>. 



**current package** *n.* (in a *dynamic environment*) the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> that is the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"package"}><b>\*package\*</b></DictionaryLink> in that <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm>, and that is the default <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> employed by the *Lisp reader* and *Lisp printer* , and their related <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm>. 



**current pprint dispatch table** *n.* (in a *dynamic environment*) the *pprint dispatch table* that is the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"print-pprint-dispatch"}><b>\*print-pprint-dispatch\*</b></DictionaryLink> in that <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm>, and that is the default *pprint dispatch table* employed by the *pretty printer* . 



**current random state** *n.* (in a *dynamic environment*) the *random state* that is the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"random-state"}><b>\*random-state\*</b></DictionaryLink> in that <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm>, and that is the default *random state* employed by <DictionaryLink styled={true} term={"random"}><b>random</b></DictionaryLink>. 



**current readtable** *n.* (in a *dynamic environment*) the <GlossaryTerm styled={true} term={"readtable"}><i>readtable</i></GlossaryTerm> that is the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"readtable"}><b>\*readtable\*</b></DictionaryLink> in that <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm>, and that affects the way in which <GlossaryTerm styled={true} term={"expression"}><i>expressions</i></GlossaryTerm><sub>2</sub> are parsed into <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> by the *Lisp reader* . 




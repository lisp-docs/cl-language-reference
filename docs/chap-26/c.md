---
title: C
sidebar_position: 99
---

**C** 



<ClLinks  term={"cadr"}><b>cadr</b></ClLinks> [ **ka d*** **r** ], *n.* (of an <ClLinks  term={"object"}><i>object</i></ClLinks>) the <ClLinks  term={"car"}><i>car</i></ClLinks> of the <ClLinks  term={"cdr"}><i>cdr</i></ClLinks> of that <ClLinks  term={"object"}><i>object</i></ClLinks>. 



**call** *v.t.*, *n.* 1. *v.t.* (a <ClLinks  term={"function"}><i>function</i></ClLinks> with <ClLinks  term={"argument"}><i>arguments</i></ClLinks>) to cause the <ClLinks  term={"code"}><i>code</i></ClLinks> represented by that <ClLinks  term={"function"}><i>function</i></ClLinks> to be *executed* in an <ClLinks  term={"environment"}><i>environment</i></ClLinks> where <ClLinks  term={"binding"}><i>bindings</i></ClLinks> for the <ClLinks  term={"value"}><i>values</i></ClLinks> of its <ClLinks  term={"parameter"}><i>parameters</i></ClLinks> have been *established* based on the <ClLinks  term={"argument"}><i>arguments</i></ClLinks>. “Calling the function <ClLinks  term={"+"}><b>+</b></ClLinks> with the arguments 5 and 1 yields a value of 6.” 2. *n.* a <ClLinks  term={"situation"}><i>situation</i></ClLinks> in which a <ClLinks  term={"function"}><i>function</i></ClLinks> is called. 



**captured initialization form** *n.* an <GlossaryTerm styled={true} term={"initialization form"}><i>initialization form</i></GlossaryTerm> along with the *lexical* 



<ClLinks  term={"environment"}><i>environment</i></ClLinks> in which the <ClLinks  term={"form"}><i>form</i></ClLinks> that defined the <GlossaryTerm styled={true} term={"initialization form"}><i>initialization form</i></GlossaryTerm> was *evaluated*. “Each newly added shared slot is set to the result of evaluating the captured 



initialization form for the slot that was specified in the <ClLinks  term={"defclass"}><b>defclass</b></ClLinks> form for the new class.” 







 



 



<ClLinks  term={"car"}><b>car</b></ClLinks> *n.* 1. a. (of a <ClLinks  term={"cons"}><i>cons</i></ClLinks>) the component of a <ClLinks  term={"cons"}><i>cons</i></ClLinks> corresponding to the first <ClLinks  term={"argument"}><i>argument</i></ClLinks> to <ClLinks  term={"cons"}><b>cons</b></ClLinks>; the other component is the <ClLinks  term={"cdr"}><i>cdr</i></ClLinks> . “The function <ClLinks  term={"rplaca"}><b>rplaca</b></ClLinks> modifies the car of a cons.” b. (of a <ClLinks  term={"list"}><i>list</i></ClLinks>) the first <ClLinks  term={"element"}><i>element</i></ClLinks> of the <ClLinks  term={"list"}><i>list</i></ClLinks>, or <ClLinks  term={"nil"}><b>nil</b></ClLinks> if the <ClLinks  term={"list"}><i>list</i></ClLinks> is the <GlossaryTerm styled={true} term={"empty list"}><i>empty list</i></GlossaryTerm>. 2. the <ClLinks  term={"object"}><i>object</i></ClLinks> that is held in the <ClLinks  term={"car"}><i>car</i></ClLinks> <sub>1</sub>. “The function <ClLinks  term={"car"}><b>car</b></ClLinks> returns the car of a cons.” 



<ClLinks  term={"case"}><b>case</b></ClLinks> *n.* (of a <ClLinks  term={"character"}><i>character</i></ClLinks> ) the property of being either <ClLinks  term={"uppercase"}><i>uppercase</i></ClLinks> or <ClLinks  term={"lowercase"}><i>lowercase</i></ClLinks>. Not all <ClLinks  term={"character"}><i>characters</i></ClLinks> have <ClLinks  term={"case"}><i>case</i></ClLinks>. “The characters #\A and #\a have case, but the character #\$ has no case.” See Section 13.1.4.3 (Characters With Case) and the <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"both-case-p"}><b>both-case-p</b></ClLinks>. 



**case sensitivity mode** *n.* one of the <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> :upcase, :downcase, :preserve, or 



:invert. 



<ClLinks  term={"catch"}><b>catch</b></ClLinks> *n.* an <GlossaryTerm styled={true} term={"exit point"}><i>exit point</i></GlossaryTerm> which is *established* by a <ClLinks  term={"catch"}><b>catch</b></ClLinks> <ClLinks  term={"form"}><i>form</i></ClLinks> within the <GlossaryTerm styled={true} term={"dynamic scope"}><i>dynamic scope</i></GlossaryTerm> of its body, which is named by a <GlossaryTerm styled={true} term={"catch tag"}><i>catch tag</i></GlossaryTerm>, and to which control and <ClLinks  term={"value"}><i>values</i></ClLinks> may be *thrown*. 



**catch tag** *n.* an <ClLinks  term={"object"}><i>object</i></ClLinks> which names an *active catch*. (If more than one <ClLinks  term={"catch"}><i>catch</i></ClLinks> is active with the same <GlossaryTerm styled={true} term={"catch tag"}><i>catch tag</i></GlossaryTerm>, it is only possible to <ClLinks  term={"throw"}><i>throw</i></ClLinks> to the innermost such <ClLinks  term={"catch"}><i>catch</i></ClLinks> because the outer one is *shadowed* <sub>2</sub>.) 



<ClLinks  term={"cddr"}><b>cddr</b></ClLinks> [ **k\_ud***  **d*** **r** ] or [ **k***  **d\_ud*** **r** ], *n.* (of an <ClLinks  term={"object"}><i>object</i></ClLinks>) the <ClLinks  term={"cdr"}><i>cdr</i></ClLinks> of the <ClLinks  term={"cdr"}><i>cdr</i></ClLinks> of that <ClLinks  term={"object"}><i>object</i></ClLinks>. 



<ClLinks  term={"cdr"}><b>cdr</b></ClLinks> [ **k\_u d*** **r** ], *n.* 1. a. (of a <ClLinks  term={"cons"}><i>cons</i></ClLinks>) the component of a <ClLinks  term={"cons"}><i>cons</i></ClLinks> corresponding to the second <ClLinks  term={"argument"}><i>argument</i></ClLinks> to <ClLinks  term={"cons"}><b>cons</b></ClLinks>; the other component is the <ClLinks  term={"car"}><i>car</i></ClLinks> . “The function <ClLinks  term={"rplacd"}><b>rplacd</b></ClLinks> modifies the cdr of a cons.” b. (of a *list L*<sub>1</sub>) either the *list L*<sub>2</sub> that contains the <ClLinks  term={"element"}><i>elements</i></ClLinks> of *L*<sub>1</sub> that follow after the first, or else <ClLinks  term={"nil"}><b>nil</b></ClLinks> if *L*<sub>1</sub> is the <GlossaryTerm styled={true} term={"empty list"}><i>empty list</i></GlossaryTerm>. 2. the <ClLinks  term={"object"}><i>object</i></ClLinks> that is held in the <ClLinks  term={"cdr"}><i>cdr</i></ClLinks> <sub>1</sub>. “The function <ClLinks  term={"cdr"}><b>cdr</b></ClLinks> returns the cdr of a cons.” 



**cell** *n. Trad.* (of an <ClLinks  term={"object"}><i>object</i></ClLinks>) a conceptual <ClLinks  term={"slot"}><i>slot</i></ClLinks> of that <ClLinks  term={"object"}><i>object</i></ClLinks>. The <GlossaryTerm styled={true} term={"dynamic variable"}><i>dynamic variable</i></GlossaryTerm> and global *function bindings* of a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> are sometimes referred to as its <GlossaryTerm styled={true} term={"value cell"}><i>value cell</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"function cell"}><i>function cell</i></GlossaryTerm>, respectively. 



<ClLinks  term={"character"}><b>character</b></ClLinks> *n.*, *adj.* 1. *n.* an <ClLinks  term={"object"}><i>object</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"character"}><b>character</b></ClLinks>; that is, an <ClLinks  term={"object"}><i>object</i></ClLinks> that represents a unitary token in an aggregate quantity of text; see Section 13.1 (Character Concepts). 2. *adj.* a. (of a <ClLinks  term={"stream"}><i>stream</i></ClLinks>) having an <GlossaryTerm styled={true} term={"element type"}><i>element type</i></GlossaryTerm> that is a <ClLinks  term={"subtype"}><i>subtype</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"character"}><b>character</b></ClLinks>. The most fundamental operation on a *character input stream* is <ClLinks  term={"read-char"}><b>read-char</b></ClLinks> and on a *character output stream* is <ClLinks  term={"write-char"}><b>write-char</b></ClLinks>. See <ClLinks  term={"binary"}><i>binary</i></ClLinks>. b. (of a <ClLinks  term={"file"}><i>file</i></ClLinks>) having been created by opening a *character stream*. (It is <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> whether this is an inspectable aspect of the <ClLinks  term={"file"}><i>file</i></ClLinks>, or whether any given *binary file* can be treated as a *character file*.) 



**character code** *n.* 1. one of possibly several <ClLinks  term={"attribute"}><i>attributes</i></ClLinks> of a <ClLinks  term={"character"}><i>character</i></ClLinks> . 2. a 



non-negative *integer* less than the <ClLinks  term={"value"}><i>value</i></ClLinks> of <ClLinks  term={"char-code-limit"}><b>char-code-limit</b></ClLinks> that is suitable for use as a <GlossaryTerm styled={true} term={"character code"}><i>character code</i></GlossaryTerm><sub>1</sub>. 







 



 



**character designator** *n.* a <ClLinks  term={"designator"}><i>designator</i></ClLinks> for a <ClLinks  term={"character"}><i>character</i></ClLinks> ; that is, an <ClLinks  term={"object"}><i>object</i></ClLinks> that denotes a <ClLinks  term={"character"}><i>character</i></ClLinks> and that is one of: a <ClLinks  term={"designator"}><i>designator</i></ClLinks> for a <ClLinks  term={"string"}><i>string</i></ClLinks> of <ClLinks  term={"length"}><i>length</i></ClLinks> one (denoting the <ClLinks  term={"character"}><i>character</i></ClLinks> that is its only <ClLinks  term={"element"}><i>element</i></ClLinks>), or a <ClLinks  term={"character"}><i>character</i></ClLinks> (denoting itself). 



**circular** *adj.* 1. (of a <ClLinks  term={"list"}><i>list</i></ClLinks>) a <GlossaryTerm styled={true} term={"circular list"}><i>circular list</i></GlossaryTerm>. 2. (of an arbitrary <ClLinks  term={"object"}><i>object</i></ClLinks>) having a 



*component*, <ClLinks  term={"element"}><i>element</i></ClLinks>, <ClLinks  term={"constituent"}><i>constituent</i></ClLinks><sub>2</sub>, or <ClLinks  term={"subexpression"}><i>subexpression</i></ClLinks> (as appropriate to the context) that is the <ClLinks  term={"object"}><i>object</i></ClLinks> itself. 



**circular list** *n.* a chain of *conses* that has no termination because some <ClLinks  term={"cons"}><i>cons</i></ClLinks> in the chain is the <ClLinks  term={"cdr"}><i>cdr</i></ClLinks> of a later <ClLinks  term={"cons"}><i>cons</i></ClLinks>. 



<ClLinks  term={"class"}><b>class</b></ClLinks> *n.* 1. an <ClLinks  term={"object"}><i>object</i></ClLinks> that uniquely determines the structure and behavior of a set of other <ClLinks  term={"object"}><i>objects</i></ClLinks> called its <GlossaryTerm styled={true} term={"direct instance"}><i>direct instances</i></GlossaryTerm>, that contributes structure and behavior to a set of other <ClLinks  term={"object"}><i>objects</i></ClLinks> called its <GlossaryTerm styled={true} term={"indirect instance"}><i>indirect instances</i></GlossaryTerm>, and that acts as a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> for a set of objects called its <GlossaryTerm styled={true} term={"generalized instance"}><i>generalized instances</i></GlossaryTerm>. “The class <ClLinks  term={"integer"}><b>integer</b></ClLinks> is a subclass of the 



class <ClLinks  term={"number"}><b>number</b></ClLinks>.” (Note that the phrase “the <ClLinks  term={"class"}><i>class</i></ClLinks> foo” is often substituted for the more precise phrase “the <ClLinks  term={"class"}><i>class</i></ClLinks> named foo”—in both cases, a *class object* (not a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>) is denoted.) 2. (of an <ClLinks  term={"object"}><i>object</i></ClLinks>) the uniquely determined <ClLinks  term={"class"}><i>class</i></ClLinks> of which the <ClLinks  term={"object"}><i>object</i></ClLinks> is a <GlossaryTerm styled={true} term={"direct instance"}><i>direct instance</i></GlossaryTerm>. See the <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"class-of"}><b>class-of</b></ClLinks>. “The class of the object returned by <ClLinks  term={"gensym"}><b>gensym</b></ClLinks> is <ClLinks  term={"symbol"}><b>symbol</b></ClLinks>.” (Note that with this usage a phrase such as “its <ClLinks  term={"class"}><i>class</i></ClLinks> is foo” is often substituted for the more precise phrase “its <ClLinks  term={"class"}><i>class</i></ClLinks> is the <ClLinks  term={"class"}><i>class</i></ClLinks> named foo”—in both cases, a *class object* (not a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>) is denoted.) 



**class designator** *n.* a <ClLinks  term={"designator"}><i>designator</i></ClLinks> for a <ClLinks  term={"class"}><i>class</i></ClLinks>; that is, an <ClLinks  term={"object"}><i>object</i></ClLinks> that denotes a <ClLinks  term={"class"}><i>class</i></ClLinks> and that is one of: a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> (denoting the <ClLinks  term={"class"}><i>class</i></ClLinks> named by that <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>; see the <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"find-class"}><b>find-class</b></ClLinks>) or a <ClLinks  term={"class"}><i>class</i></ClLinks> (denoting itself). 



**class precedence list** *n.* a unique total ordering on a <ClLinks  term={"class"}><i>class</i></ClLinks> and its *superclasses* that is consistent with the <GlossaryTerm styled={true} term={"local precedence order"}><i>local precedence orders</i></GlossaryTerm> for the <ClLinks  term={"class"}><i>class</i></ClLinks> and its *superclasses*. For detailed information, see Section 4.3.5 (Determining the Class Precedence List). 



<ClLinks  term={"close"}><b>close</b></ClLinks> *v.t.* (a <ClLinks  term={"stream"}><i>stream</i></ClLinks>) to terminate usage of the <ClLinks  term={"stream"}><i>stream</i></ClLinks> as a source or sink of data, permitting the <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> to reclaim its internal data structures, and to free any external resources which might have been locked by the <ClLinks  term={"stream"}><i>stream</i></ClLinks> when it was opened. 



**closed** *adj.* (of a <ClLinks  term={"stream"}><i>stream</i></ClLinks>) having been <ClLinks  term={"closed"}><i>closed</i></ClLinks> (see close). Some (but not all) operations that are valid on *open streams* are not valid on *closed streams*. See Section 21.1.1.1.2 (Open and Closed Streams). 



**closure** *n.* a <GlossaryTerm styled={true} term={"lexical closure"}><i>lexical closure</i></GlossaryTerm>. 



**coalesce** *v.t.* (*literal objects* that are <ClLinks  term={"similar"}><i>similar</i></ClLinks> ) to consolidate the identity of those <ClLinks  term={"object"}><i>objects</i></ClLinks>, such that they become the *same object*. See Section 3.2.1 (Compiler 



Terminology). 







 



 



**code** *n.* 1. *Trad.* any representation of actions to be performed, whether conceptual or as an actual <ClLinks  term={"object"}><i>object</i></ClLinks>, such as <ClLinks  term={"form"}><i>forms</i></ClLinks>, <GlossaryTerm styled={true} term={"lambda expression"}><i>lambda expressions</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> of *type function*, text in a <GlossaryTerm styled={true} term={"source file"}><i>source file</i></GlossaryTerm>, or instruction sequences in a <GlossaryTerm styled={true} term={"compiled file"}><i>compiled file</i></GlossaryTerm>. This is a generic term; the specific nature of the representation depends on its context. 2. (of a <ClLinks  term={"character"}><i>character</i></ClLinks> ) a <GlossaryTerm styled={true} term={"character code"}><i>character code</i></GlossaryTerm>. 



<ClLinks  term={"coerce"}><b>coerce</b></ClLinks> *v.t.* (an <ClLinks  term={"object"}><i>object</i></ClLinks> to a <ClLinks  term={"type"}><i>type</i></ClLinks>) to produce an <ClLinks  term={"object"}><i>object</i></ClLinks> from the given <ClLinks  term={"object"}><i>object</i></ClLinks>, without modifying that <ClLinks  term={"object"}><i>object</i></ClLinks>, by following some set of coercion rules that must be specifically stated for any context in which this term is used. The resulting <ClLinks  term={"object"}><i>object</i></ClLinks> is necessarily of the indicated <ClLinks  term={"type"}><i>type</i></ClLinks>, except when that type is a <ClLinks  term={"subtype"}><i>subtype</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"complex"}><b>complex</b></ClLinks>; in that case, if a <GlossaryTerm styled={true} term={"complex rational"}><i>complex rational</i></GlossaryTerm> with an imaginary part of zero would result, the result is a <ClLinks  term={"rational"}><i>rational</i></ClLinks> 



rather than a <ClLinks  term={"complex"}><i>complex</i></ClLinks>—see Section 12.1.5.3 (Rule of Canonical Representation for Complex Rationals). 



**colon** *n.* the <GlossaryTerm styled={true} term={"standard character"}><i>standard character</i></GlossaryTerm> that is called “colon” (:). See Figure 2–5. 



**comma** *n.* the <GlossaryTerm styled={true} term={"standard character"}><i>standard character</i></GlossaryTerm> that is called “comma” (,). See Figure 2–5. 



**compilation** *n.* the process of *compiling code* by the <ClLinks  term={"compiler"}><i>compiler</i></ClLinks> . 



**compilation environment** *n.* 1. An <ClLinks  term={"environment"}><i>environment</i></ClLinks> that represents information known by the <ClLinks  term={"compiler"}><i>compiler</i></ClLinks> about a <ClLinks  term={"form"}><i>form</i></ClLinks> that is being *compiled*. See Section 3.2.1 (Compiler Terminology). 2. An <ClLinks  term={"object"}><i>object</i></ClLinks> that represents the <GlossaryTerm styled={true} term={"compilation environment"}><i>compilation environment</i></GlossaryTerm> <sub>1</sub> and that is used as a second argument to a <GlossaryTerm styled={true} term={"macro function"}><i>macro function</i></GlossaryTerm> (which supplies a <ClLinks  term={"value"}><i>value</i></ClLinks> for any **&amp;environment** <ClLinks  term={"parameter"}><i>parameter</i></ClLinks> in the <GlossaryTerm styled={true} term={"macro function"}><i>macro function</i></GlossaryTerm>’s definition). 



**compilation unit** *n.* an interval during which a single unit of compilation is occurring. See the <ClLinks  term={"macro"}><i>macro</i></ClLinks> <ClLinks  term={"with-compilation-unit"}><b>with-compilation-unit</b></ClLinks>. 



<ClLinks  term={"compile"}><b>compile</b></ClLinks> *v.t.* 1. (<ClLinks  term={"code"}><i>code</i></ClLinks>) to perform semantic preprocessing of the <ClLinks  term={"code"}><i>code</i></ClLinks>, usually 



optimizing one or more qualities of the code, such as run-time speed of *execution* or run-time storage usage. The minimum semantic requirements of compilation are that it must remove all macro calls and arrange for all <GlossaryTerm styled={true} term={"load time value"}><i>load time values</i></GlossaryTerm> to be resolved prior to run time. 2. (a <ClLinks  term={"function"}><i>function</i></ClLinks>) to produce a new <ClLinks  term={"object"}><i>object</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"compiled-function"}><b>compiled-function</b></ClLinks> which represents the result of *compiling* the <ClLinks  term={"code"}><i>code</i></ClLinks> represented by the <ClLinks  term={"function"}><i>function</i></ClLinks>. See the <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"compile"}><b>compile</b></ClLinks>. 3. (a <GlossaryTerm styled={true} term={"source file"}><i>source file</i></GlossaryTerm>) to produce a <GlossaryTerm styled={true} term={"compiled file"}><i>compiled file</i></GlossaryTerm> from a <GlossaryTerm styled={true} term={"source file"}><i>source file</i></GlossaryTerm>. See the <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"compile-file"}><b>compile-file</b></ClLinks>. 



**compile time** *n.* the duration of time that the <ClLinks  term={"compiler"}><i>compiler</i></ClLinks> is processing <GlossaryTerm styled={true} term={"source code"}><i>source code</i></GlossaryTerm>. **compile-time definition** *n.* a definition in the <GlossaryTerm styled={true} term={"compilation environment"}><i>compilation environment</i></GlossaryTerm>. 



**compiled code** *n.* 1. <GlossaryTerm styled={true} term={"compiled function"}><i>compiled functions</i></GlossaryTerm>. 2. <ClLinks  term={"code"}><i>code</i></ClLinks> that represents <GlossaryTerm styled={true} term={"compiled function"}><i>compiled functions</i></GlossaryTerm>, such as the contents of a <GlossaryTerm styled={true} term={"compiled file"}><i>compiled file</i></GlossaryTerm>. 







 



 



**compiled file** *n.* a <ClLinks  term={"file"}><i>file</i></ClLinks> which represents the results of *compiling* the <ClLinks  term={"form"}><i>forms</i></ClLinks> which appeared in a corresponding <GlossaryTerm styled={true} term={"source file"}><i>source file</i></GlossaryTerm>, and which can be *loaded*. See the <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"compile-file"}><b>compile-file</b></ClLinks>. 



**compiled function** *n.* an <ClLinks  term={"object"}><i>object</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"compiled-function"}><b>compiled-function</b></ClLinks>, which is a <ClLinks  term={"function"}><i>function</i></ClLinks> that has been *compiled*, which contains no references to <ClLinks  term={"macro"}><i>macros</i></ClLinks> that must be expanded at run time, and which contains no unresolved references to <GlossaryTerm styled={true} term={"load time value"}><i>load time values</i></GlossaryTerm>. 



**compiler** *n.* a facility that is part of Lisp and that translates <ClLinks  term={"code"}><i>code</i></ClLinks> into an 



<ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> form that might be represented or *executed* efficiently. The functions <ClLinks  term={"compile"}><b>compile</b></ClLinks> and <ClLinks  term={"compile-file"}><b>compile-file</b></ClLinks> permit programs to invoke the <ClLinks  term={"compiler"}><i>compiler</i></ClLinks> . 



**compiler macro** *n.* an auxiliary macro definition for a globally defined <ClLinks  term={"function"}><i>function</i></ClLinks> or <ClLinks  term={"macro"}><i>macro</i></ClLinks> which might or might not be called by any given <GlossaryTerm styled={true} term={"conforming implementation"}><i>conforming implementation</i></GlossaryTerm> and which must preserve the semantics of the globally defined <ClLinks  term={"function"}><i>function</i></ClLinks> or <ClLinks  term={"macro"}><i>macro</i></ClLinks> but 



which might perform some additional optimizations. (Unlike a <ClLinks  term={"macro"}><i>macro</i></ClLinks>, a <GlossaryTerm styled={true} term={"compiler macro"}><i>compiler macro</i></GlossaryTerm> does not extend the syntax of Common Lisp; rather, it provides an alternate implementation strategy for some existing syntax or functionality.) 



**compiler macro expansion** *n.* 1. the process of translating a <ClLinks  term={"form"}><i>form</i></ClLinks> into another <ClLinks  term={"form"}><i>form</i></ClLinks> by a <GlossaryTerm styled={true} term={"compiler macro"}><i>compiler macro</i></GlossaryTerm>. 2. the <ClLinks  term={"form"}><i>form</i></ClLinks> resulting from this process. 



**compiler macro form** *n.* a <GlossaryTerm styled={true} term={"function form"}><i>function form</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"macro form"}><i>macro form</i></GlossaryTerm> whose <ClLinks  term={"operator"}><i>operator</i></ClLinks> has a definition as a <GlossaryTerm styled={true} term={"compiler macro"}><i>compiler macro</i></GlossaryTerm>, or a <ClLinks  term={"funcall"}><b>funcall</b></ClLinks> <ClLinks  term={"form"}><i>form</i></ClLinks> whose first <ClLinks  term={"argument"}><i>argument</i></ClLinks> is a <ClLinks  term={"function"}><b>function</b></ClLinks> <ClLinks  term={"form"}><i>form</i></ClLinks> whose <ClLinks  term={"argument"}><i>argument</i></ClLinks> is the <ClLinks  term={"name"}><i>name</i></ClLinks> of a <ClLinks  term={"function"}><i>function</i></ClLinks> that has a definition as a <GlossaryTerm styled={true} term={"compiler macro"}><i>compiler macro</i></GlossaryTerm>. 



**compiler macro function** *n.* a <ClLinks  term={"function"}><i>function</i></ClLinks> of two arguments, a <ClLinks  term={"form"}><i>form</i></ClLinks> and an 



<ClLinks  term={"environment"}><i>environment</i></ClLinks>, that implements <GlossaryTerm styled={true} term={"compiler macro expansion"}><i>compiler macro expansion</i></GlossaryTerm> by producing either a <ClLinks  term={"form"}><i>form</i></ClLinks> to be used in place of the original argument <ClLinks  term={"form"}><i>form</i></ClLinks> or else <ClLinks  term={"nil"}><b>nil</b></ClLinks>, indicating that the original <ClLinks  term={"form"}><i>form</i></ClLinks> should not be replaced. See Section 3.2.2.1 (Compiler Macros). 



<ClLinks  term={"complex"}><b>complex</b></ClLinks> *n.* an <ClLinks  term={"object"}><i>object</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"complex"}><b>complex</b></ClLinks>. 



**complex float** *n.* an <ClLinks  term={"object"}><i>object</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"complex"}><b>complex</b></ClLinks> which has a <GlossaryTerm styled={true} term={"complex part type"}><i>complex part type</i></GlossaryTerm> that is a <ClLinks  term={"subtype"}><i>subtype</i></ClLinks> of <ClLinks  term={"float"}><b>float</b></ClLinks>. A <GlossaryTerm styled={true} term={"complex float"}><i>complex float</i></GlossaryTerm> is a <ClLinks  term={"complex"}><i>complex</i></ClLinks> , but it is not a <ClLinks  term={"float"}><i>float</i></ClLinks>. 



**complex part type** *n.* (of a <ClLinks  term={"complex"}><i>complex</i></ClLinks> ) 1. the <ClLinks  term={"type"}><i>type</i></ClLinks> which is used to represent both the real part and the imaginary part of the <ClLinks  term={"complex"}><i>complex</i></ClLinks> . 2. the <GlossaryTerm styled={true} term={"actual complex part type"}><i>actual complex part type</i></GlossaryTerm> of the <ClLinks  term={"complex"}><i>complex</i></ClLinks> . 3. the <GlossaryTerm styled={true} term={"expressed complex part type"}><i>expressed complex part type</i></GlossaryTerm> of the <ClLinks  term={"complex"}><i>complex</i></ClLinks> . 



**complex rational** *n.* an <ClLinks  term={"object"}><i>object</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"complex"}><b>complex</b></ClLinks> which has a <GlossaryTerm styled={true} term={"complex part type"}><i>complex part type</i></GlossaryTerm> that is a <ClLinks  term={"subtype"}><i>subtype</i></ClLinks> of <ClLinks  term={"rational"}><b>rational</b></ClLinks>. A <GlossaryTerm styled={true} term={"complex rational"}><i>complex rational</i></GlossaryTerm> is a <ClLinks  term={"complex"}><i>complex</i></ClLinks> , but it is not a <ClLinks  term={"rational"}><i>rational</i></ClLinks>. No <GlossaryTerm styled={true} term={"complex rational"}><i>complex rational</i></GlossaryTerm> has an imaginary part of zero because such a number is always represented by Common Lisp as an <ClLinks  term={"object"}><i>object</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"rational"}><b>rational</b></ClLinks>; see Section 12.1.5.3 (Rule of Canonical Representation for Complex Rationals). 







 



 



**complex single float** *n.* an <ClLinks  term={"object"}><i>object</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"complex"}><b>complex</b></ClLinks> which has a <GlossaryTerm styled={true} term={"complex part type"}><i>complex part type</i></GlossaryTerm> that is a <ClLinks  term={"subtype"}><i>subtype</i></ClLinks> of <ClLinks  term={"single-float"}><b>single-float</b></ClLinks>. A <GlossaryTerm styled={true} term={"complex single float"}><i>complex single float</i></GlossaryTerm> is a <ClLinks  term={"complex"}><i>complex</i></ClLinks> , but it is not a <GlossaryTerm styled={true} term={"single float"}><i>single float</i></GlossaryTerm>. 



**composite stream** *n.* a <ClLinks  term={"stream"}><i>stream</i></ClLinks> that is composed of one or more other <ClLinks  term={"stream"}><i>streams</i></ClLinks>. “<ClLinks  term={"make-synonym-stream"}><b>make-synonym-stream</b></ClLinks> creates a composite stream.” 



**compound form** *n.* a *non-empty list* which is a <ClLinks  term={"form"}><i>form</i></ClLinks>: a <GlossaryTerm styled={true} term={"special form"}><i>special form</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"lambda form"}><i>lambda form</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"macro form"}><i>macro form</i></GlossaryTerm>, or a <GlossaryTerm styled={true} term={"function form"}><i>function form</i></GlossaryTerm>. 



**compound type specifier** *n.* a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> that is a <ClLinks  term={"cons"}><i>cons</i></ClLinks>; *i.e.*, a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> that is not an <GlossaryTerm styled={true} term={"atomic type specifier"}><i>atomic type specifier</i></GlossaryTerm> . “(vector single-float) is a compound type specifier.” 



**concatenated stream** *n.* an *input stream* of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"concatenated-stream"}><b>concatenated-stream</b></ClLinks>. 



<ClLinks  term={"condition"}><b>condition</b></ClLinks> *n.* 1. an <ClLinks  term={"object"}><i>object</i></ClLinks> which represents a <ClLinks  term={"situation"}><i>situation</i></ClLinks>—usually, but not necessarily, during *signaling*. 2. an <ClLinks  term={"object"}><i>object</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"condition"}><b>condition</b></ClLinks>. 



**condition designator** *n.* one or more <ClLinks  term={"object"}><i>objects</i></ClLinks> that, taken together, denote either an existing *condition object* or a *condition object* to be implicitly created. For details, see Section 9.1.2.1 (Condition Designators). 



**condition handler** *n.* a <ClLinks  term={"function"}><i>function</i></ClLinks> that might be invoked by the act of *signaling*, that receives the <ClLinks  term={"condition"}><i>condition</i></ClLinks> being signaled as its only argument, and that is permitted to <ClLinks  term={"handle"}><i>handle</i></ClLinks> the <ClLinks  term={"condition"}><i>condition</i></ClLinks> or to <ClLinks  term={"decline"}><i>decline</i></ClLinks>. See Section 9.1.4.1 (Signaling). 



**condition reporter** *n.* a <ClLinks  term={"function"}><i>function</i></ClLinks> that describes how a <ClLinks  term={"condition"}><i>condition</i></ClLinks> is to be printed when the *Lisp printer* is invoked while <ClLinks  term={"print-escape"}><b>\*print-escape\*</b></ClLinks> is <ClLinks  term={"false"}><i>false</i></ClLinks>. See Section 9.1.3 (Printing Conditions). 



**conditional newline** *n.* a point in output where a <ClLinks  term={"newline"}><i>newline</i></ClLinks> might be inserted at the discretion of the <GlossaryTerm styled={true} term={"pretty printer"}><i>pretty printer</i></GlossaryTerm> . There are four kinds of <GlossaryTerm styled={true} term={"conditional newline"}><i>conditional newlines</i></GlossaryTerm>, called “linear-style,” “fill-style,” “miser-style,” and “mandatory-style.” See the <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"pprint-newline"}><b>pprint-newline</b></ClLinks> and Section 22.2.1.1 (Dynamic Control of the Arrangement of Output). 



**conformance** *n.* a state achieved by proper and complete adherence to the 



requirements of this specification. See Section 1.5 (Conformance). 



**conforming code** *n. code* that is all of part of a <GlossaryTerm styled={true} term={"conforming program"}><i>conforming program</i></GlossaryTerm>. 



**conforming implementation** *n.* an <ClLinks  term={"implementation"}><i>implementation</i></ClLinks>, used to emphasize complete and correct adherance to all conformance criteria. A <GlossaryTerm styled={true} term={"conforming implementation"}><i>conforming implementation</i></GlossaryTerm> is capable of accepting a <GlossaryTerm styled={true} term={"conforming program"}><i>conforming program</i></GlossaryTerm> as input, preparing that <ClLinks  term={"program"}><i>program</i></ClLinks> for *execution*, and executing the prepared <ClLinks  term={"program"}><i>program</i></ClLinks> in accordance with this specification. An <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> which has been extended may still be a <GlossaryTerm styled={true} term={"conforming implementation"}><i>conforming implementation</i></GlossaryTerm> 







 



 



provided that no extension interferes with the correct function of any <GlossaryTerm styled={true} term={"conforming program"}><i>conforming program</i></GlossaryTerm>. 



**conforming processor** *n. ANSI* a <GlossaryTerm styled={true} term={"conforming implementation"}><i>conforming implementation</i></GlossaryTerm>. 



**conforming program** *n.* a <ClLinks  term={"program"}><i>program</i></ClLinks>, used to emphasize the fact that the <ClLinks  term={"program"}><i>program</i></ClLinks> depends for its correctness only upon documented aspects of Common Lisp, and can therefore be expected to run correctly in any <GlossaryTerm styled={true} term={"conforming implementation"}><i>conforming implementation</i></GlossaryTerm>. 



**congruent** *n.* conforming to the rules of <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> congruency, as detailed in Section 7.6.4 (Congruent Lambda-lists for all Methods of a Generic Function). 



<ClLinks  term={"cons"}><b>cons</b></ClLinks> *n.v.* 1. *n.* a compound data <ClLinks  term={"object"}><i>object</i></ClLinks> having two components called the <ClLinks  term={"car"}><i>car</i></ClLinks> and the <ClLinks  term={"cdr"}><i>cdr</i></ClLinks> . 2. *v.* to create such an <ClLinks  term={"object"}><i>object</i></ClLinks>. 3. *v. Idiom.* to create any <ClLinks  term={"object"}><i>object</i></ClLinks>, or to allocate storage. 



**constant** *n.* 1. a <GlossaryTerm styled={true} term={"constant form"}><i>constant form</i></GlossaryTerm>. 2. a <GlossaryTerm styled={true} term={"constant variable"}><i>constant variable</i></GlossaryTerm>. 3. a <GlossaryTerm styled={true} term={"constant object"}><i>constant object</i></GlossaryTerm>. 4. a <GlossaryTerm styled={true} term={"self-evaluating object"}><i>self-evaluating object</i></GlossaryTerm>. 



**constant form** *n.* any <ClLinks  term={"form"}><i>form</i></ClLinks> for which <ClLinks  term={"evaluation"}><i>evaluation</i></ClLinks> always <ClLinks  term={"yield"}><i>yields</i></ClLinks> the same <ClLinks  term={"value"}><i>value</i></ClLinks>, that neither affects nor is affected by the <ClLinks  term={"environment"}><i>environment</i></ClLinks> in which it is *evaluated* (except that it is permitted to refer to the names of <GlossaryTerm styled={true} term={"constant variable"}><i>constant variables</i></GlossaryTerm> defined in the <ClLinks  term={"environment"}><i>environment</i></ClLinks>), and that neither affects nor is affected by the state of any <ClLinks  term={"object"}><i>object</i></ClLinks> except those <ClLinks  term={"object"}><i>objects</i></ClLinks> that are <GlossaryTerm styled={true} term={"otherwise inaccessible part"}><i>otherwise inaccessible parts</i></GlossaryTerm> of <ClLinks  term={"object"}><i>objects</i></ClLinks> created by the <ClLinks  term={"form"}><i>form</i></ClLinks> itself. “A <ClLinks  term={"car"}><b>car</b></ClLinks> form in which the argument is a <ClLinks  term={"quote"}><b>quote</b></ClLinks> form is a constant form.” 



**constant object** *n.* an <ClLinks  term={"object"}><i>object</i></ClLinks> that is constrained (*e.g.*, by its context in a <ClLinks  term={"program"}><i>program</i></ClLinks> or by the source from which it was obtained) to be <ClLinks  term={"immutable"}><i>immutable</i></ClLinks>. “A literal object that has been processed by <ClLinks  term={"compile-file"}><b>compile-file</b></ClLinks> is a constant object.” 



**constant variable** *n.* a <ClLinks  term={"variable"}><i>variable</i></ClLinks>, the <ClLinks  term={"value"}><i>value</i></ClLinks> of which can never change; that 



is, a <ClLinks  term={"keyword"}><i>keyword</i></ClLinks> <sub>1</sub> or a <GlossaryTerm styled={true} term={"named constant"}><i>named constant</i></GlossaryTerm>. “The symbols <ClLinks  term={"t"}><b>t</b></ClLinks>, <ClLinks  term={"nil"}><b>nil</b></ClLinks>, :direction, and 



<ClLinks  term={"most-positive-fixnum"}><b>most-positive-fixnum</b></ClLinks> are constant variables.” 



<b>constituent</b> <i>n.</i>, <i>adj.</i> 1. a. <i>n.</i> the <i>syntax type</i> of a <i>character</i> that is part of a <i>token</i>. For details, see Section 2.1.4.1 (Constituent Characters). b. <i>adj.</i> (of a <i>character</i> ) having the <i>constituent</i><sub>1<i>a</i></sub> syntax type<sub>2</sub>. c. <i>n.</i> a <i>constituent</i><sub>1<i>b</i></sub> character . 2. <i>n.</i> (of a <i>composite stream</i>) one of possibly several <i>objects</i> that collectively comprise the source or sink of that <i>stream</i>. 



**constituent trait** *n.* (of a <ClLinks  term={"character"}><i>character</i></ClLinks> ) one of several classifications of a *constituent character* in a <ClLinks  term={"readtable"}><i>readtable</i></ClLinks>. See Section 2.1.4.1 (Constituent Characters). 



**constructed stream** *n.* a <ClLinks  term={"stream"}><i>stream</i></ClLinks> whose source or sink is a Lisp <ClLinks  term={"object"}><i>object</i></ClLinks>. Note that since a <ClLinks  term={"stream"}><i>stream</i></ClLinks> is another Lisp <ClLinks  term={"object"}><i>object</i></ClLinks>, <GlossaryTerm styled={true} term={"composite stream"}><i>composite streams</i></GlossaryTerm> are considered <GlossaryTerm styled={true} term={"constructed stream"}><i>constructed streams</i></GlossaryTerm>. “A string stream is a constructed stream.” 







 



 



**contagion** *n.* a process whereby operations on <ClLinks  term={"object"}><i>objects</i></ClLinks> of differing <ClLinks  term={"type"}><i>types</i></ClLinks> (*e.g.*, 



arithmetic on mixed <ClLinks  term={"type"}><i>types</i></ClLinks> of <ClLinks  term={"number"}><i>numbers</i></ClLinks>) produce a result whose <ClLinks  term={"type"}><i>type</i></ClLinks> is controlled by the dominance of one <ClLinks  term={"argument"}><i>argument</i></ClLinks>’s <ClLinks  term={"type"}><i>type</i></ClLinks> over the <ClLinks  term={"type"}><i>types</i></ClLinks> of the other <ClLinks  term={"argument"}><i>arguments</i></ClLinks>. See Section 12.1.1.2 (Contagion in Numeric Operations). 



**continuable** *n.* (of an <ClLinks  term={"error"}><i>error</i></ClLinks> ) an <ClLinks  term={"error"}><i>error</i></ClLinks> that is <ClLinks  term={"correctable"}><i>correctable</i></ClLinks> by the continue restart. 



**control form** *n.* 1. a <ClLinks  term={"form"}><i>form</i></ClLinks> that establishes one or more places to which control can be transferred. 2. a <ClLinks  term={"form"}><i>form</i></ClLinks> that transfers control. 



<b>copy</b> <i>n.</i> 1. (of a <i>cons C</i>) a <i>fresh cons</i> with the <i>same car</i> and <i>cdr</i> as <i>C</i>. 2. (of a <i>list L</i>) a <i>fresh list</i> with the <i>same elements</i> as <i>L</i>. (Only the <i>list structure</i> is <i>fresh</i>; the <i>elements</i> are the <i>same</i>.) See the <i>function</i> <b>copy-list</b>. 3. (of an <i>association list A</i> with <i>elements A<sub>i</sub></i>) a <i>fresh list B</i> with <i>elements B<sub>i</sub></i>, each of which is <b>nil</b> if <i>A<sub>i</sub></i>is <b>nil</b>, or else a <i>copy</i> of the <i>cons A<sub>i</sub></i>. See the <i>function</i> <b>copy-alist</b>. 4. (of a <i>tree T</i>) a <i>fresh tree</i> with the <i>same</i> 



*leaves* as <ClLinks  term={"t"}><i>T</i></ClLinks>. See the <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"copy-tree"}><b>copy-tree</b></ClLinks>. 5. (of a *random state R*) a *fresh random state* that, if used as an argument to to the <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"random"}><b>random</b></ClLinks> would produce the same series of “random” values as *R* would produce. 6. (of a *structure S*) a *fresh structure* that has the same <ClLinks  term={"type"}><i>type</i></ClLinks> as *S*, and that has slot values, each of which is the <ClLinks  term={"same"}><i>same</i></ClLinks> as the corresponding slot value of *S*. (Note that since the difference between a <ClLinks  term={"cons"}><i>cons</i></ClLinks>, a <ClLinks  term={"list"}><i>list</i></ClLinks>, and a <ClLinks  term={"tree"}><i>tree</i></ClLinks> is a matter of “view” or “intention,” there can be no general-purpose <ClLinks  term={"function"}><i>function</i></ClLinks> which, based solely on the <ClLinks  term={"type"}><i>type</i></ClLinks> of an <ClLinks  term={"object"}><i>object</i></ClLinks>, can determine which of these distinct meanings is intended. The distinction rests solely on the basis of the text description within this document. For example, phrases like “a <ClLinks  term={"copy"}><i>copy</i></ClLinks> of the given <ClLinks  term={"list"}><i>list</i></ClLinks>” or “copy of the *list x*” imply the second definition.) 



**correctable** *adj.* (of an <ClLinks  term={"error"}><i>error</i></ClLinks> ) 1. (by a <ClLinks  term={"restart"}><i>restart</i></ClLinks> other than **abort** that has been 



associated with the <ClLinks  term={"error"}><i>error</i></ClLinks> ) capable of being corrected by invoking that <ClLinks  term={"restart"}><i>restart</i></ClLinks>. “The function <ClLinks  term={"cerror"}><b>cerror</b></ClLinks> signals an error that is correctable by the **continue** <ClLinks  term={"restart"}><i>restart</i></ClLinks>.” (Note that correctability is not a property of an *error object*, but rather a property of the <GlossaryTerm styled={true} term={"dynamic environment"}><i>dynamic environment</i></GlossaryTerm> that is in effect when the <ClLinks  term={"error"}><i>error</i></ClLinks> is *signaled*. Specifically, the <ClLinks  term={"restart"}><i>restart</i></ClLinks> is “associated with” the *error condition object*. See Section 9.1.4.2.4 (Associating a Restart with a Condition).) 2. (when no specific <ClLinks  term={"restart"}><i>restart</i></ClLinks> is mentioned) <ClLinks  term={"correctable"}><i>correctable</i></ClLinks><sub>1</sub> by at least one <ClLinks  term={"restart"}><i>restart</i></ClLinks>. “<ClLinks  term={"import"}><b>import</b></ClLinks> signals a correctable error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"package-error"}><b>package-error</b></ClLinks> if any of the imported symbols has the same name as some distinct symbol already accessible in the package.” 



**current input base** *n.* (in a <GlossaryTerm styled={true} term={"dynamic environment"}><i>dynamic environment</i></GlossaryTerm>) the <ClLinks  term={"radix"}><i>radix</i></ClLinks> that is the <ClLinks  term={"value"}><i>value</i></ClLinks> of **\*read-base\*** in that <ClLinks  term={"environment"}><i>environment</i></ClLinks>, and that is the default <ClLinks  term={"radix"}><i>radix</i></ClLinks> employed by the *Lisp reader* and its related <ClLinks  term={"function"}><i>functions</i></ClLinks>. 



**current logical block** *n.* the context of the innermost lexically enclosing use of <ClLinks  term={"pprint-logical-block"}><b>pprint-logical-block</b></ClLinks>. 



**current output base** *n.* (in a <GlossaryTerm styled={true} term={"dynamic environment"}><i>dynamic environment</i></GlossaryTerm>) the <ClLinks  term={"radix"}><i>radix</i></ClLinks> that is the <ClLinks  term={"value"}><i>value</i></ClLinks> of 



 



 



**\*print-base\*** in that <ClLinks  term={"environment"}><i>environment</i></ClLinks>, and that is the default <ClLinks  term={"radix"}><i>radix</i></ClLinks> employed by the *Lisp printer* and its related <ClLinks  term={"function"}><i>functions</i></ClLinks>. 



**current package** *n.* (in a <GlossaryTerm styled={true} term={"dynamic environment"}><i>dynamic environment</i></GlossaryTerm>) the <ClLinks  term={"package"}><i>package</i></ClLinks> that is the <ClLinks  term={"value"}><i>value</i></ClLinks> of <ClLinks  term={"package"}><b>\*package\*</b></ClLinks> in that <ClLinks  term={"environment"}><i>environment</i></ClLinks>, and that is the default <ClLinks  term={"package"}><i>package</i></ClLinks> employed by the *Lisp reader* and *Lisp printer* , and their related <ClLinks  term={"function"}><i>functions</i></ClLinks>. 



**current pprint dispatch table** *n.* (in a <GlossaryTerm styled={true} term={"dynamic environment"}><i>dynamic environment</i></GlossaryTerm>) the <GlossaryTerm styled={true} term={"pprint dispatch table"}><i>pprint dispatch table</i></GlossaryTerm> that is the <ClLinks  term={"value"}><i>value</i></ClLinks> of <ClLinks  term={"print-pprint-dispatch"}><b>\*print-pprint-dispatch\*</b></ClLinks> in that <ClLinks  term={"environment"}><i>environment</i></ClLinks>, and that is the default <GlossaryTerm styled={true} term={"pprint dispatch table"}><i>pprint dispatch table</i></GlossaryTerm> employed by the <GlossaryTerm styled={true} term={"pretty printer"}><i>pretty printer</i></GlossaryTerm> . 



**current random state** *n.* (in a <GlossaryTerm styled={true} term={"dynamic environment"}><i>dynamic environment</i></GlossaryTerm>) the <GlossaryTerm styled={true} term={"random state"}><i>random state</i></GlossaryTerm> that is the <ClLinks  term={"value"}><i>value</i></ClLinks> of <ClLinks  term={"random-state"}><b>\*random-state\*</b></ClLinks> in that <ClLinks  term={"environment"}><i>environment</i></ClLinks>, and that is the default <GlossaryTerm styled={true} term={"random state"}><i>random state</i></GlossaryTerm> employed by <ClLinks  term={"random"}><b>random</b></ClLinks>. 



**current readtable** *n.* (in a <GlossaryTerm styled={true} term={"dynamic environment"}><i>dynamic environment</i></GlossaryTerm>) the <ClLinks  term={"readtable"}><i>readtable</i></ClLinks> that is the <ClLinks  term={"value"}><i>value</i></ClLinks> of <ClLinks  term={"readtable"}><b>\*readtable\*</b></ClLinks> in that <ClLinks  term={"environment"}><i>environment</i></ClLinks>, and that affects the way in which <ClLinks  term={"expression"}><i>expressions</i></ClLinks><sub>2</sub> are parsed into <ClLinks  term={"object"}><i>objects</i></ClLinks> by the *Lisp reader* . 




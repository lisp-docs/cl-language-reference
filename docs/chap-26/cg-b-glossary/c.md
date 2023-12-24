---
title: C
sidebar_position: 99
---

**C** 



<ClLinks styled={true} term={"cadr"}><b>cadr</b></ClLinks> [ **ka d*** **r** ], *n.* (of an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>) the <ClLinks styled={true} term={"car"}><i>car</i></ClLinks> of the <ClLinks styled={true} term={"cdr"}><i>cdr</i></ClLinks> of that <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



**call** *v.t.*, *n.* 1. *v.t.* (a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> with <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks>) to cause the <ClLinks styled={true} term={"code"}><i>code</i></ClLinks> represented by that <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> to be *executed* in an <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks> where <ClLinks styled={true} term={"binding"}><i>bindings</i></ClLinks> for the <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> of its <ClLinks styled={true} term={"parameter"}><i>parameters</i></ClLinks> have been *established* based on the <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks>. “Calling the function <ClLinks styled={true} term={"+"}><b>+</b></ClLinks> with the arguments 5 and 1 yields a value of 6.” 2. *n.* a <ClLinks styled={true} term={"situation"}><i>situation</i></ClLinks> in which a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> is called. 



**captured initialization form** *n.* an *initialization form* along with the *lexical* 



<ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks> in which the <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> that defined the *initialization form* was *evaluated*. “Each newly added shared slot is set to the result of evaluating the captured 



initialization form for the slot that was specified in the <ClLinks styled={true} term={"defclass"}><b>defclass</b></ClLinks> form for the new class.” 







 



 



<ClLinks styled={true} term={"car"}><b>car</b></ClLinks> *n.* 1. a. (of a <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks>) the component of a <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks> corresponding to the first <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks> to <ClLinks styled={true} term={"cons"}><b>cons</b></ClLinks>; the other component is the <ClLinks styled={true} term={"cdr"}><i>cdr</i></ClLinks> . “The function <ClLinks styled={true} term={"rplaca"}><b>rplaca</b></ClLinks> modifies the car of a cons.” b. (of a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>) the first <ClLinks styled={true} term={"element"}><i>element</i></ClLinks> of the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>, or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> if the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> is the *empty list*. 2. the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that is held in the <ClLinks styled={true} term={"car"}><i>car</i></ClLinks> <sub>1</sub>. “The function <ClLinks styled={true} term={"car"}><b>car</b></ClLinks> returns the car of a cons.” 



<ClLinks styled={true} term={"case"}><b>case</b></ClLinks> *n.* (of a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> ) the property of being either <ClLinks styled={true} term={"uppercase"}><i>uppercase</i></ClLinks> or <ClLinks styled={true} term={"lowercase"}><i>lowercase</i></ClLinks>. Not all <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks> have <ClLinks styled={true} term={"case"}><i>case</i></ClLinks>. “The characters #\A and #\a have case, but the character #\$ has no case.” See Section 13.1.4.3 (Characters With Case) and the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"both-case-p"}><b>both-case-p</b></ClLinks>. 



**case sensitivity mode** *n.* one of the <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> :upcase, :downcase, :preserve, or 



:invert. 



<ClLinks styled={true} term={"catch"}><b>catch</b></ClLinks> *n.* an *exit point* which is *established* by a <ClLinks styled={true} term={"catch"}><b>catch</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> within the *dynamic scope* of its body, which is named by a *catch tag*, and to which control and <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> may be *thrown*. 



**catch tag** *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> which names an *active catch*. (If more than one <ClLinks styled={true} term={"catch"}><i>catch</i></ClLinks> is active with the same *catch tag*, it is only possible to <ClLinks styled={true} term={"throw"}><i>throw</i></ClLinks> to the innermost such <ClLinks styled={true} term={"catch"}><i>catch</i></ClLinks> because the outer one is *shadowed* <sub>2</sub>.) 



<ClLinks styled={true} term={"cddr"}><b>cddr</b></ClLinks> [ **k\_ud***  **d*** **r** ] or [ **k***  **d\_ud*** **r** ], *n.* (of an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>) the <ClLinks styled={true} term={"cdr"}><i>cdr</i></ClLinks> of the <ClLinks styled={true} term={"cdr"}><i>cdr</i></ClLinks> of that <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



<ClLinks styled={true} term={"cdr"}><b>cdr</b></ClLinks> [ **k\_u d*** **r** ], *n.* 1. a. (of a <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks>) the component of a <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks> corresponding to the second <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks> to <ClLinks styled={true} term={"cons"}><b>cons</b></ClLinks>; the other component is the <ClLinks styled={true} term={"car"}><i>car</i></ClLinks> . “The function <ClLinks styled={true} term={"rplacd"}><b>rplacd</b></ClLinks> modifies the cdr of a cons.” b. (of a *list L*<sub>1</sub>) either the *list L*<sub>2</sub> that contains the <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks> of *L*<sub>1</sub> that follow after the first, or else <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> if *L*<sub>1</sub> is the *empty list*. 2. the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that is held in the <ClLinks styled={true} term={"cdr"}><i>cdr</i></ClLinks> <sub>1</sub>. “The function <ClLinks styled={true} term={"cdr"}><b>cdr</b></ClLinks> returns the cdr of a cons.” 



**cell** *n. Trad.* (of an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>) a conceptual <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> of that <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. The *dynamic variable* and global *function bindings* of a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> are sometimes referred to as its *value cell* and *function cell*, respectively. 



<ClLinks styled={true} term={"character"}><b>character</b></ClLinks> *n.*, *adj.* 1. *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"character"}><b>character</b></ClLinks>; that is, an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that represents a unitary token in an aggregate quantity of text; see Section 13.1 (Character Concepts). 2. *adj.* a. (of a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>) having an *element type* that is a <ClLinks styled={true} term={"subtype"}><i>subtype</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"character"}><b>character</b></ClLinks>. The most fundamental operation on a *character input stream* is <ClLinks styled={true} term={"read-char"}><b>read-char</b></ClLinks> and on a *character output stream* is <ClLinks styled={true} term={"write-char"}><b>write-char</b></ClLinks>. See <ClLinks styled={true} term={"binary"}><i>binary</i></ClLinks>. b. (of a <ClLinks styled={true} term={"file"}><i>file</i></ClLinks>) having been created by opening a *character stream*. (It is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> whether this is an inspectable aspect of the <ClLinks styled={true} term={"file"}><i>file</i></ClLinks>, or whether any given *binary file* can be treated as a *character file*.) 



**character code** *n.* 1. one of possibly several <ClLinks styled={true} term={"attribute"}><i>attributes</i></ClLinks> of a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> . 2. a 



non-negative *integer* less than the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"char-code-limit"}><b>char-code-limit</b></ClLinks> that is suitable for use as a *character code*<sub>1</sub>. 







 



 



**character designator** *n.* a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> ; that is, an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that denotes a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> and that is one of: a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> of <ClLinks styled={true} term={"length"}><i>length</i></ClLinks> one (denoting the <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> that is its only <ClLinks styled={true} term={"element"}><i>element</i></ClLinks>), or a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> (denoting itself). 



**circular** *adj.* 1. (of a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>) a *circular list*. 2. (of an arbitrary <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>) having a 



*component*, <ClLinks styled={true} term={"element"}><i>element</i></ClLinks>, <ClLinks styled={true} term={"constituent"}><i>constituent</i></ClLinks><sub>2</sub>, or <ClLinks styled={true} term={"subexpression"}><i>subexpression</i></ClLinks> (as appropriate to the context) that is the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> itself. 



**circular list** *n.* a chain of *conses* that has no termination because some <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks> in the chain is the <ClLinks styled={true} term={"cdr"}><i>cdr</i></ClLinks> of a later <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks>. 



<ClLinks styled={true} term={"class"}><b>class</b></ClLinks> *n.* 1. an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that uniquely determines the structure and behavior of a set of other <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> called its *direct instances*, that contributes structure and behavior to a set of other <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> called its *indirect instances*, and that acts as a *type specifier* for a set of objects called its *generalized instances*. “The class <ClLinks styled={true} term={"integer"}><b>integer</b></ClLinks> is a subclass of the 



class <ClLinks styled={true} term={"number"}><b>number</b></ClLinks>.” (Note that the phrase “the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> foo” is often substituted for the more precise phrase “the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> named foo”—in both cases, a *class object* (not a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>) is denoted.) 2. (of an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>) the uniquely determined <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> of which the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is a *direct instance*. See the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"class-of"}><b>class-of</b></ClLinks>. “The class of the object returned by <ClLinks styled={true} term={"gensym"}><b>gensym</b></ClLinks> is <ClLinks styled={true} term={"symbol"}><b>symbol</b></ClLinks>.” (Note that with this usage a phrase such as “its <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> is foo” is often substituted for the more precise phrase “its <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> is the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> named foo”—in both cases, a *class object* (not a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>) is denoted.) 



**class designator** *n.* a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>; that is, an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that denotes a <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> and that is one of: a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> (denoting the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> named by that <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>; see the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"find-class"}><b>find-class</b></ClLinks>) or a <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> (denoting itself). 



**class precedence list** *n.* a unique total ordering on a <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> and its *superclasses* that is consistent with the *local precedence orders* for the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> and its *superclasses*. For detailed information, see Section 4.3.5 (Determining the Class Precedence List). 



<ClLinks styled={true} term={"close"}><b>close</b></ClLinks> *v.t.* (a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>) to terminate usage of the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> as a source or sink of data, permitting the <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> to reclaim its internal data structures, and to free any external resources which might have been locked by the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> when it was opened. 



**closed** *adj.* (of a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>) having been <ClLinks styled={true} term={"closed"}><i>closed</i></ClLinks> (see close). Some (but not all) operations that are valid on *open streams* are not valid on *closed streams*. See Section 21.1.1.1.2 (Open and Closed Streams). 



**closure** *n.* a *lexical closure*. 



**coalesce** *v.t.* (*literal objects* that are <ClLinks styled={true} term={"similar"}><i>similar</i></ClLinks> ) to consolidate the identity of those <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks>, such that they become the *same object*. See Section 3.2.1 (Compiler 



Terminology). 







 



 



**code** *n.* 1. *Trad.* any representation of actions to be performed, whether conceptual or as an actual <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>, such as <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>, *lambda expressions*, *objects* of *type function*, text in a *source file*, or instruction sequences in a *compiled file*. This is a generic term; the specific nature of the representation depends on its context. 2. (of a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> ) a *character code*. 



<ClLinks styled={true} term={"coerce"}><b>coerce</b></ClLinks> *v.t.* (an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> to a <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>) to produce an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> from the given <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>, without modifying that <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>, by following some set of coercion rules that must be specifically stated for any context in which this term is used. The resulting <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is necessarily of the indicated <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>, except when that type is a <ClLinks styled={true} term={"subtype"}><i>subtype</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"complex"}><b>complex</b></ClLinks>; in that case, if a *complex rational* with an imaginary part of zero would result, the result is a <ClLinks styled={true} term={"rational"}><i>rational</i></ClLinks> 



rather than a <ClLinks styled={true} term={"complex"}><i>complex</i></ClLinks>—see Section 12.1.5.3 (Rule of Canonical Representation for Complex Rationals). 



**colon** *n.* the *standard character* that is called “colon” (:). See Figure 2–5. 



**comma** *n.* the *standard character* that is called “comma” (,). See Figure 2–5. 



**compilation** *n.* the process of *compiling code* by the <ClLinks styled={true} term={"compiler"}><i>compiler</i></ClLinks> . 



**compilation environment** *n.* 1. An <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks> that represents information known by the <ClLinks styled={true} term={"compiler"}><i>compiler</i></ClLinks> about a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> that is being *compiled*. See Section 3.2.1 (Compiler Terminology). 2. An <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that represents the *compilation environment* <sub>1</sub> and that is used as a second argument to a *macro function* (which supplies a <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> for any **&amp;environment** <ClLinks styled={true} term={"parameter"}><i>parameter</i></ClLinks> in the *macro function*’s definition). 



**compilation unit** *n.* an interval during which a single unit of compilation is occurring. See the <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks> <ClLinks styled={true} term={"with-compilation-unit"}><b>with-compilation-unit</b></ClLinks>. 



<ClLinks styled={true} term={"compile"}><b>compile</b></ClLinks> *v.t.* 1. (<ClLinks styled={true} term={"code"}><i>code</i></ClLinks>) to perform semantic preprocessing of the <ClLinks styled={true} term={"code"}><i>code</i></ClLinks>, usually 



optimizing one or more qualities of the code, such as run-time speed of *execution* or run-time storage usage. The minimum semantic requirements of compilation are that it must remove all macro calls and arrange for all *load time values* to be resolved prior to run time. 2. (a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>) to produce a new <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"compiled-function"}><b>compiled-function</b></ClLinks> which represents the result of *compiling* the <ClLinks styled={true} term={"code"}><i>code</i></ClLinks> represented by the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>. See the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"compile"}><b>compile</b></ClLinks>. 3. (a *source file*) to produce a *compiled file* from a *source file*. See the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"compile-file"}><b>compile-file</b></ClLinks>. 



**compile time** *n.* the duration of time that the <ClLinks styled={true} term={"compiler"}><i>compiler</i></ClLinks> is processing *source code*. **compile-time definition** *n.* a definition in the *compilation environment*. 



**compiled code** *n.* 1. *compiled functions*. 2. <ClLinks styled={true} term={"code"}><i>code</i></ClLinks> that represents *compiled functions*, such as the contents of a *compiled file*. 







 



 



**compiled file** *n.* a <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> which represents the results of *compiling* the <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> which appeared in a corresponding *source file*, and which can be *loaded*. See the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"compile-file"}><b>compile-file</b></ClLinks>. 



**compiled function** *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"compiled-function"}><b>compiled-function</b></ClLinks>, which is a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> that has been *compiled*, which contains no references to <ClLinks styled={true} term={"macro"}><i>macros</i></ClLinks> that must be expanded at run time, and which contains no unresolved references to *load time values*. 



**compiler** *n.* a facility that is part of Lisp and that translates <ClLinks styled={true} term={"code"}><i>code</i></ClLinks> into an 



<ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> form that might be represented or *executed* efficiently. The functions <ClLinks styled={true} term={"compile"}><b>compile</b></ClLinks> and <ClLinks styled={true} term={"compile-file"}><b>compile-file</b></ClLinks> permit programs to invoke the <ClLinks styled={true} term={"compiler"}><i>compiler</i></ClLinks> . 



**compiler macro** *n.* an auxiliary macro definition for a globally defined <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> or <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks> which might or might not be called by any given *conforming implementation* and which must preserve the semantics of the globally defined <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> or <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks> but 



which might perform some additional optimizations. (Unlike a <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks>, a *compiler macro* does not extend the syntax of Common Lisp; rather, it provides an alternate implementation strategy for some existing syntax or functionality.) 



**compiler macro expansion** *n.* 1. the process of translating a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> into another <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> by a *compiler macro*. 2. the <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> resulting from this process. 



**compiler macro form** *n.* a *function form* or *macro form* whose <ClLinks styled={true} term={"operator"}><i>operator</i></ClLinks> has a definition as a *compiler macro*, or a <ClLinks styled={true} term={"funcall"}><b>funcall</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> whose first <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks> is a <ClLinks styled={true} term={"function"}><b>function</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> whose <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks> is the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> of a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> that has a definition as a *compiler macro*. 



**compiler macro function** *n.* a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of two arguments, a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> and an 



<ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks>, that implements *compiler macro expansion* by producing either a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> to be used in place of the original argument <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> or else <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, indicating that the original <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> should not be replaced. See Section 3.2.2.1 (Compiler Macros). 



<ClLinks styled={true} term={"complex"}><b>complex</b></ClLinks> *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"complex"}><b>complex</b></ClLinks>. 



**complex float** *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"complex"}><b>complex</b></ClLinks> which has a *complex part type* that is a <ClLinks styled={true} term={"subtype"}><i>subtype</i></ClLinks> of <ClLinks styled={true} term={"float"}><b>float</b></ClLinks>. A *complex float* is a <ClLinks styled={true} term={"complex"}><i>complex</i></ClLinks> , but it is not a <ClLinks styled={true} term={"float"}><i>float</i></ClLinks>. 



**complex part type** *n.* (of a <ClLinks styled={true} term={"complex"}><i>complex</i></ClLinks> ) 1. the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> which is used to represent both the real part and the imaginary part of the <ClLinks styled={true} term={"complex"}><i>complex</i></ClLinks> . 2. the *actual complex part type* of the <ClLinks styled={true} term={"complex"}><i>complex</i></ClLinks> . 3. the *expressed complex part type* of the <ClLinks styled={true} term={"complex"}><i>complex</i></ClLinks> . 



**complex rational** *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"complex"}><b>complex</b></ClLinks> which has a *complex part type* that is a <ClLinks styled={true} term={"subtype"}><i>subtype</i></ClLinks> of <ClLinks styled={true} term={"rational"}><b>rational</b></ClLinks>. A *complex rational* is a <ClLinks styled={true} term={"complex"}><i>complex</i></ClLinks> , but it is not a <ClLinks styled={true} term={"rational"}><i>rational</i></ClLinks>. No *complex rational* has an imaginary part of zero because such a number is always represented by Common Lisp as an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"rational"}><b>rational</b></ClLinks>; see Section 12.1.5.3 (Rule of Canonical Representation for Complex Rationals). 







 



 



**complex single float** *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"complex"}><b>complex</b></ClLinks> which has a *complex part type* that is a <ClLinks styled={true} term={"subtype"}><i>subtype</i></ClLinks> of <ClLinks styled={true} term={"single-float"}><b>single-float</b></ClLinks>. A *complex single float* is a <ClLinks styled={true} term={"complex"}><i>complex</i></ClLinks> , but it is not a *single float*. 



**composite stream** *n.* a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> that is composed of one or more other <ClLinks styled={true} term={"stream"}><i>streams</i></ClLinks>. “<ClLinks styled={true} term={"make-synonym-stream"}><b>make-synonym-stream</b></ClLinks> creates a composite stream.” 



**compound form** *n.* a *non-empty list* which is a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>: a *special form*, a *lambda form*, a *macro form*, or a *function form*. 



**compound type specifier** *n.* a *type specifier* that is a <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks>; *i.e.*, a *type specifier* that is not an *atomic type specifier* . “(vector single-float) is a compound type specifier.” 



**concatenated stream** *n.* an *input stream* of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"concatenated-stream"}><b>concatenated-stream</b></ClLinks>. 



<ClLinks styled={true} term={"condition"}><b>condition</b></ClLinks> *n.* 1. an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> which represents a <ClLinks styled={true} term={"situation"}><i>situation</i></ClLinks>—usually, but not necessarily, during *signaling*. 2. an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"condition"}><b>condition</b></ClLinks>. 



**condition designator** *n.* one or more <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> that, taken together, denote either an existing *condition object* or a *condition object* to be implicitly created. For details, see Section 9.1.2.1 (Condition Designators). 



**condition handler** *n.* a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> that might be invoked by the act of *signaling*, that receives the <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> being signaled as its only argument, and that is permitted to <ClLinks styled={true} term={"handle"}><i>handle</i></ClLinks> the <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> or to <ClLinks styled={true} term={"decline"}><i>decline</i></ClLinks>. See Section 9.1.4.1 (Signaling). 



**condition reporter** *n.* a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> that describes how a <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> is to be printed when the *Lisp printer* is invoked while <ClLinks styled={true} term={"print-escape"}><b>\*print-escape\*</b></ClLinks> is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. See Section 9.1.3 (Printing Conditions). 



**conditional newline** *n.* a point in output where a <ClLinks styled={true} term={"newline"}><i>newline</i></ClLinks> might be inserted at the discretion of the *pretty printer* . There are four kinds of *conditional newlines*, called “linear-style,” “fill-style,” “miser-style,” and “mandatory-style.” See the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"pprint-newline"}><b>pprint-newline</b></ClLinks> and Section 22.2.1.1 (Dynamic Control of the Arrangement of Output). 



**conformance** *n.* a state achieved by proper and complete adherence to the 



requirements of this specification. See Section 1.5 (Conformance). 



**conforming code** *n. code* that is all of part of a *conforming program*. 



**conforming implementation** *n.* an <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks>, used to emphasize complete and correct adherance to all conformance criteria. A *conforming implementation* is capable of accepting a *conforming program* as input, preparing that <ClLinks styled={true} term={"program"}><i>program</i></ClLinks> for *execution*, and executing the prepared <ClLinks styled={true} term={"program"}><i>program</i></ClLinks> in accordance with this specification. An <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> which has been extended may still be a *conforming implementation* 







 



 



provided that no extension interferes with the correct function of any *conforming program*. 



**conforming processor** *n. ANSI* a *conforming implementation*. 



**conforming program** *n.* a <ClLinks styled={true} term={"program"}><i>program</i></ClLinks>, used to emphasize the fact that the <ClLinks styled={true} term={"program"}><i>program</i></ClLinks> depends for its correctness only upon documented aspects of Common Lisp, and can therefore be expected to run correctly in any *conforming implementation*. 



**congruent** *n.* conforming to the rules of *lambda list* congruency, as detailed in Section 7.6.4 (Congruent Lambda-lists for all Methods of a Generic Function). 



<ClLinks styled={true} term={"cons"}><b>cons</b></ClLinks> *n.v.* 1. *n.* a compound data <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> having two components called the <ClLinks styled={true} term={"car"}><i>car</i></ClLinks> and the <ClLinks styled={true} term={"cdr"}><i>cdr</i></ClLinks> . 2. *v.* to create such an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 3. *v. Idiom.* to create any <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>, or to allocate storage. 



**constant** *n.* 1. a *constant form*. 2. a *constant variable*. 3. a *constant object*. 4. a *self-evaluating object*. 



**constant form** *n.* any <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> for which <ClLinks styled={true} term={"evaluation"}><i>evaluation</i></ClLinks> always <ClLinks styled={true} term={"yield"}><i>yields</i></ClLinks> the same <ClLinks styled={true} term={"value"}><i>value</i></ClLinks>, that neither affects nor is affected by the <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks> in which it is *evaluated* (except that it is permitted to refer to the names of *constant variables* defined in the <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks>), and that neither affects nor is affected by the state of any <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> except those <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> that are *otherwise inaccessible parts* of <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> created by the <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> itself. “A <ClLinks styled={true} term={"car"}><b>car</b></ClLinks> form in which the argument is a <ClLinks styled={true} term={"quote"}><b>quote</b></ClLinks> form is a constant form.” 



**constant object** *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that is constrained (*e.g.*, by its context in a <ClLinks styled={true} term={"program"}><i>program</i></ClLinks> or by the source from which it was obtained) to be <ClLinks styled={true} term={"immutable"}><i>immutable</i></ClLinks>. “A literal object that has been processed by <ClLinks styled={true} term={"compile-file"}><b>compile-file</b></ClLinks> is a constant object.” 



**constant variable** *n.* a <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks>, the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of which can never change; that 



is, a <ClLinks styled={true} term={"keyword"}><i>keyword</i></ClLinks> <sub>1</sub> or a *named constant*. “The symbols <ClLinks styled={true} term={"t"}><b>t</b></ClLinks>, <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, :direction, and 



<ClLinks styled={true} term={"most-positive-fixnum"}><b>most-positive-fixnum</b></ClLinks> are constant variables.” 



<b>constituent</b> <i>n.</i>, <i>adj.</i> 1. a. <i>n.</i> the <i>syntax type</i> of a <i>character</i> that is part of a <i>token</i>. For details, see Section 2.1.4.1 (Constituent Characters). b. <i>adj.</i> (of a <i>character</i> ) having the <i>constituent</i><sub>1<i>a</i></sub> syntax type<sub>2</sub>. c. <i>n.</i> a <i>constituent</i><sub>1<i>b</i></sub> character . 2. <i>n.</i> (of a <i>composite stream</i>) one of possibly several <i>objects</i> that collectively comprise the source or sink of that <i>stream</i>. 



**constituent trait** *n.* (of a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> ) one of several classifications of a *constituent character* in a <ClLinks styled={true} term={"readtable"}><i>readtable</i></ClLinks>. See Section 2.1.4.1 (Constituent Characters). 



**constructed stream** *n.* a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> whose source or sink is a Lisp <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. Note that since a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> is another Lisp <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>, *composite streams* are considered *constructed streams*. “A string stream is a constructed stream.” 







 



 



**contagion** *n.* a process whereby operations on <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> of differing <ClLinks styled={true} term={"type"}><i>types</i></ClLinks> (*e.g.*, 



arithmetic on mixed <ClLinks styled={true} term={"type"}><i>types</i></ClLinks> of <ClLinks styled={true} term={"number"}><i>numbers</i></ClLinks>) produce a result whose <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> is controlled by the dominance of one <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks>’s <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> over the <ClLinks styled={true} term={"type"}><i>types</i></ClLinks> of the other <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks>. See Section 12.1.1.2 (Contagion in Numeric Operations). 



**continuable** *n.* (of an <ClLinks styled={true} term={"error"}><i>error</i></ClLinks> ) an <ClLinks styled={true} term={"error"}><i>error</i></ClLinks> that is <ClLinks styled={true} term={"correctable"}><i>correctable</i></ClLinks> by the continue restart. 



**control form** *n.* 1. a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> that establishes one or more places to which control can be transferred. 2. a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> that transfers control. 



<b>copy</b> <i>n.</i> 1. (of a <i>cons C</i>) a <i>fresh cons</i> with the <i>same car</i> and <i>cdr</i> as <i>C</i>. 2. (of a <i>list L</i>) a <i>fresh list</i> with the <i>same elements</i> as <i>L</i>. (Only the <i>list structure</i> is <i>fresh</i>; the <i>elements</i> are the <i>same</i>.) See the <i>function</i> <b>copy-list</b>. 3. (of an <i>association list A</i> with <i>elements A<sub>i</sub></i>) a <i>fresh list B</i> with <i>elements B<sub>i</sub></i>, each of which is <b>nil</b> if <i>A<sub>i</sub></i>is <b>nil</b>, or else a <i>copy</i> of the <i>cons A<sub>i</sub></i>. See the <i>function</i> <b>copy-alist</b>. 4. (of a <i>tree T</i>) a <i>fresh tree</i> with the <i>same</i> 



*leaves* as <ClLinks styled={true} term={"t"}><i>T</i></ClLinks>. See the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"copy-tree"}><b>copy-tree</b></ClLinks>. 5. (of a *random state R*) a *fresh random state* that, if used as an argument to to the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"random"}><b>random</b></ClLinks> would produce the same series of “random” values as *R* would produce. 6. (of a *structure S*) a *fresh structure* that has the same <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> as *S*, and that has slot values, each of which is the <ClLinks styled={true} term={"same"}><i>same</i></ClLinks> as the corresponding slot value of *S*. (Note that since the difference between a <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks>, a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>, and a <ClLinks styled={true} term={"tree"}><i>tree</i></ClLinks> is a matter of “view” or “intention,” there can be no general-purpose <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> which, based solely on the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> of an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>, can determine which of these distinct meanings is intended. The distinction rests solely on the basis of the text description within this document. For example, phrases like “a <ClLinks styled={true} term={"copy"}><i>copy</i></ClLinks> of the given <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>” or “copy of the *list x*” imply the second definition.) 



**correctable** *adj.* (of an <ClLinks styled={true} term={"error"}><i>error</i></ClLinks> ) 1. (by a <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks> other than **abort** that has been 



associated with the <ClLinks styled={true} term={"error"}><i>error</i></ClLinks> ) capable of being corrected by invoking that <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks>. “The function <ClLinks styled={true} term={"cerror"}><b>cerror</b></ClLinks> signals an error that is correctable by the **continue** <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks>.” (Note that correctability is not a property of an *error object*, but rather a property of the *dynamic environment* that is in effect when the <ClLinks styled={true} term={"error"}><i>error</i></ClLinks> is *signaled*. Specifically, the <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks> is “associated with” the *error condition object*. See Section 9.1.4.2.4 (Associating a Restart with a Condition).) 2. (when no specific <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks> is mentioned) <ClLinks styled={true} term={"correctable"}><i>correctable</i></ClLinks><sub>1</sub> by at least one <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks>. “<ClLinks styled={true} term={"import"}><b>import</b></ClLinks> signals a correctable error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"package-error"}><b>package-error</b></ClLinks> if any of the imported symbols has the same name as some distinct symbol already accessible in the package.” 



**current input base** *n.* (in a *dynamic environment*) the <ClLinks styled={true} term={"radix"}><i>radix</i></ClLinks> that is the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of **\*read-base\*** in that <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks>, and that is the default <ClLinks styled={true} term={"radix"}><i>radix</i></ClLinks> employed by the *Lisp reader* and its related <ClLinks styled={true} term={"function"}><i>functions</i></ClLinks>. 



**current logical block** *n.* the context of the innermost lexically enclosing use of <ClLinks styled={true} term={"pprint-logical-block"}><b>pprint-logical-block</b></ClLinks>. 



**current output base** *n.* (in a *dynamic environment*) the <ClLinks styled={true} term={"radix"}><i>radix</i></ClLinks> that is the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of 



 



 



**\*print-base\*** in that <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks>, and that is the default <ClLinks styled={true} term={"radix"}><i>radix</i></ClLinks> employed by the *Lisp printer* and its related <ClLinks styled={true} term={"function"}><i>functions</i></ClLinks>. 



**current package** *n.* (in a *dynamic environment*) the <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> that is the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"package"}><b>\*package\*</b></ClLinks> in that <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks>, and that is the default <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> employed by the *Lisp reader* and *Lisp printer* , and their related <ClLinks styled={true} term={"function"}><i>functions</i></ClLinks>. 



**current pprint dispatch table** *n.* (in a *dynamic environment*) the *pprint dispatch table* that is the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"print-pprint-dispatch"}><b>\*print-pprint-dispatch\*</b></ClLinks> in that <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks>, and that is the default *pprint dispatch table* employed by the *pretty printer* . 



**current random state** *n.* (in a *dynamic environment*) the *random state* that is the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"random-state"}><b>\*random-state\*</b></ClLinks> in that <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks>, and that is the default *random state* employed by <ClLinks styled={true} term={"random"}><b>random</b></ClLinks>. 



**current readtable** *n.* (in a *dynamic environment*) the <ClLinks styled={true} term={"readtable"}><i>readtable</i></ClLinks> that is the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"readtable"}><b>\*readtable\*</b></ClLinks> in that <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks>, and that affects the way in which <ClLinks styled={true} term={"expression"}><i>expressions</i></ClLinks><sub>2</sub> are parsed into <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> by the *Lisp reader* . 




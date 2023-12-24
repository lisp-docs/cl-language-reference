---
title: N
sidebar_position: 110
---

**N** 



**name** *n.*, *v.t.* 1. *n.* an <ClLinks styled={true} term={"identifier"}><i>identifier</i></ClLinks> by which an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>, a <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks>, or an *exit point* is referred to by association using a <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks>. 2. *v.t.* to give a <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> to. 3. *n.* (of an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> having a name component) the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> which is that component. “The string 



which is a symbol’s name is returned by <ClLinks styled={true} term={"symbol-name"}><b>symbol-name</b></ClLinks>.” 4. *n.* (of a <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks>) a. the name component, returned by **pathname-name**. b. the entire namestring, returned by <ClLinks styled={true} term={"namestring"}><b>namestring</b></ClLinks>. 5. *n.* (of a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> ) a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> that names the <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> and that 







 



 



has <ClLinks styled={true} term={"length"}><i>length</i></ClLinks> greater than one. (All *non-graphic characters* are required to have <ClLinks styled={true} term={"name"}><i>names</i></ClLinks> unless they have some *implementation-defined attribute* which is not <ClLinks styled={true} term={"null"}><i>null</i></ClLinks>. Whether or not other <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks> have <ClLinks styled={true} term={"name"}><i>names</i></ClLinks> is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>.) 



**named constant** *n.* a <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks> that is defined by Common Lisp, by the <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks>, or by user code (see the <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks> <ClLinks styled={true} term={"defconstant"}><b>defconstant</b></ClLinks>) to always <ClLinks styled={true} term={"yield"}><i>yield</i></ClLinks> the same <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> when *evaluated*. “The value of a named constant may not be changed by assignment or by binding.” 



**namespace** *n.* 1. <ClLinks styled={true} term={"binding"}><i>bindings</i></ClLinks> whose denotations are restricted to a particular kind. “The bindings of names to tags is the tag namespace.” 2. any <ClLinks styled={true} term={"mapping"}><i>mapping</i></ClLinks> whose domain is a set of <ClLinks styled={true} term={"name"}><i>names</i></ClLinks>. “A package defines a namespace.” 



<ClLinks styled={true} term={"namestring"}><b>namestring</b></ClLinks> *n.* a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> that represents a <ClLinks styled={true} term={"filename"}><i>filename</i></ClLinks> using either the <ClLinks styled={true} term={"standardized"}><i>standardized</i></ClLinks> notation for naming *logical pathnames* described in Section 19.3.1 (Syntax of Logical Pathname Namestrings), or some <ClLinks styled={true} term={"implementation-defined"}><i>implementation-defined</i></ClLinks> notation for naming a 



*physical pathname*. 



**newline** *n.* the *standard character ⟨Newline⟩*, notated for the *Lisp reader* as #\Newline. 



**next method** *n.* the next <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> to be invoked with respect to a given <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> for a particular set of arguments or argument *classes*. See Section 7.6.6.1.3 (Applying method combination to the sorted list of applicable methods). 



**nickname** *n.* (of a <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>) one of possibly several <ClLinks styled={true} term={"name"}><i>names</i></ClLinks> that can be used to refer to the <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> but that is not the primary <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> of the <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. 



<ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> *n.* the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that is at once the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> named "NIL" in the COMMON-LISP <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>, the *empty list*, the <ClLinks styled={true} term={"boolean"}><i>boolean</i></ClLinks> (or *generalized boolean*) representing <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>, and the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> of the *empty type*. 



**non-atomic** *adj.* being other than an <ClLinks styled={true} term={"atom"}><i>atom</i></ClLinks>; *i.e.*, being a <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks>. 



**non-constant variable** *n.* a <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks> that is not a *constant variable*. 



**non-correctable** *adj.* (of an <ClLinks styled={true} term={"error"}><i>error</i></ClLinks> ) not intentionally <ClLinks styled={true} term={"correctable"}><i>correctable</i></ClLinks>. (Because of the dynamic nature of <ClLinks styled={true} term={"restart"}><i>restarts</i></ClLinks>, it is neither possible nor generally useful to completely prohibit an <ClLinks styled={true} term={"error"}><i>error</i></ClLinks> from being <ClLinks styled={true} term={"correctable"}><i>correctable</i></ClLinks>. This term is used in order to express an 



intent that no special effort should be made by <ClLinks styled={true} term={"code"}><i>code</i></ClLinks> signaling an <ClLinks styled={true} term={"error"}><i>error</i></ClLinks> to make that *error correctable*; however, there is no actual requirement on *conforming programs* or *conforming implementations* imposed by this term.) 



**non-empty** *adj.* having at least one <ClLinks styled={true} term={"element"}><i>element</i></ClLinks>. 



**non-generic function** *n.* a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> that is not a *generic function*. 







 



 



**non-graphic** *adj.* (of a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> ) not <ClLinks styled={true} term={"graphic"}><i>graphic</i></ClLinks>. See Section 13.1.4.1 (Graphic 



Characters). 



**non-list** *n.*, *adj.* other than a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>; *i.e.*, a *non-nil atom*. 



**non-local exit** *n.* a transfer of control (and sometimes <ClLinks styled={true} term={"value"}><i>values</i></ClLinks>) to an *exit point* for reasons other than a *normal return*. “The operators <ClLinks styled={true} term={"go"}><b>go</b></ClLinks>, <ClLinks styled={true} term={"throw"}><b>throw</b></ClLinks>, and <ClLinks styled={true} term={"return-from"}><b>return-from</b></ClLinks> cause a non-local exit.” 



**non-nil** *n.*, *adj.* not <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. Technically, any <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> which is not <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> can be referred to as <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, but that would tend to imply a unique view of the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> as a *generalized boolean*. Referring to such an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> as <ClLinks styled={true} term={"non-nil"}><i>non-nil</i></ClLinks> avoids this implication. 



**non-null lexical environment** *n.* a *lexical environment* that has additional 



information not present in the *global environment*, such as one or more <ClLinks styled={true} term={"binding"}><i>bindings</i></ClLinks>. 



**non-simple** *adj.* not <ClLinks styled={true} term={"simple"}><i>simple</i></ClLinks>. 



**non-terminating** *adj.* (of a *macro character* ) being such that it is treated as a 



constituent <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> when it appears in the middle of an extended token. See Section 2.2 (Reader Algorithm). 



**non-top-level form** *n.* a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> that, by virtue of its position as a <ClLinks styled={true} term={"subform"}><i>subform</i></ClLinks> of another <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>, is not a *top level form*. See Section 3.2.3.1 (Processing of Top Level Forms). 



**normal return** *n.* the natural transfer of control and <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> which occurs after the complete *execution* of a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. 



**normalized** *adj.*, *ANSI*, *IEEE* (of a <ClLinks styled={true} term={"float"}><i>float</i></ClLinks>) conforming to the description of 



“normalized” as described by *IEEE Standard for Binary Floating-Point Arithmetic*. See <ClLinks styled={true} term={"denormalized"}><i>denormalized</i></ClLinks>. 



<ClLinks styled={true} term={"null"}><b>null</b></ClLinks> *adj.*, *n.* 1. *adj.* a. (of a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>) having no <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks>: empty. See *empty list*. b. (of a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>) having a <ClLinks styled={true} term={"length"}><i>length</i></ClLinks> of zero. (It is common, both within this document and in observed spoken behavior, to refer to an empty string by an apparent definite reference, as in “the *null string*” even though no attempt is made to <ClLinks styled={true} term={"intern"}><i>intern</i></ClLinks><sub>2</sub> null strings. The phrase “a *null string*” is technically more correct, but is generally considered awkward by most Lisp programmers. As such, the phrase “the *null string*” should be treated as an indefinite reference in all cases except for anaphoric references.) c. (of an *implementation-defined attribute* of a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> ) An <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> to which the value of that <ClLinks styled={true} term={"attribute"}><i>attribute</i></ClLinks> defaults if no specific value was requested. 2. *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"null"}><b>null</b></ClLinks> (the only such <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> being <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>). 



**null lexical environment** *n.* the *lexical environment* which has no <ClLinks styled={true} term={"binding"}><i>bindings</i></ClLinks>. 







 



 



<ClLinks styled={true} term={"number"}><b>number</b></ClLinks> *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"number"}><b>number</b></ClLinks>. 



**numeric** *adj.* (of a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> ) being one of the *standard characters* 0 through *9* , or being some other *graphic character* defined by the <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> to be <ClLinks styled={true} term={"numeric"}><i>numeric</i></ClLinks>. 




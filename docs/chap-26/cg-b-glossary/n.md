---
title: N
sidebar_position: 110
---

**N** 



**name** *n.*, *v.t.* 1. *n.* an <GlossaryTerm styled={true} term={"identifier"}><i>identifier</i></GlossaryTerm> by which an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm>, or an *exit point* is referred to by association using a <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm>. 2. *v.t.* to give a <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> to. 3. *n.* (of an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> having a name component) the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> which is that component. “The string 



which is a symbol’s name is returned by <DictionaryLink styled={true} term={"symbol-name"}><b>symbol-name</b></DictionaryLink>.” 4. *n.* (of a <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm>) a. the name component, returned by **pathname-name**. b. the entire namestring, returned by <DictionaryLink styled={true} term={"namestring"}><b>namestring</b></DictionaryLink>. 5. *n.* (of a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> ) a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> that names the <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> and that 







 



 



has <GlossaryTerm styled={true} term={"length"}><i>length</i></GlossaryTerm> greater than one. (All *non-graphic characters* are required to have <GlossaryTerm styled={true} term={"name"}><i>names</i></GlossaryTerm> unless they have some *implementation-defined attribute* which is not <GlossaryTerm styled={true} term={"null"}><i>null</i></GlossaryTerm>. Whether or not other <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> have <GlossaryTerm styled={true} term={"name"}><i>names</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>.) 



**named constant** *n.* a <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm> that is defined by Common Lisp, by the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm>, or by user code (see the <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm> <DictionaryLink styled={true} term={"defconstant"}><b>defconstant</b></DictionaryLink>) to always <GlossaryTerm styled={true} term={"yield"}><i>yield</i></GlossaryTerm> the same <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> when *evaluated*. “The value of a named constant may not be changed by assignment or by binding.” 



**namespace** *n.* 1. <GlossaryTerm styled={true} term={"binding"}><i>bindings</i></GlossaryTerm> whose denotations are restricted to a particular kind. “The bindings of names to tags is the tag namespace.” 2. any <GlossaryTerm styled={true} term={"mapping"}><i>mapping</i></GlossaryTerm> whose domain is a set of <GlossaryTerm styled={true} term={"name"}><i>names</i></GlossaryTerm>. “A package defines a namespace.” 



<DictionaryLink styled={true} term={"namestring"}><b>namestring</b></DictionaryLink> *n.* a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> that represents a <GlossaryTerm styled={true} term={"filename"}><i>filename</i></GlossaryTerm> using either the <GlossaryTerm styled={true} term={"standardized"}><i>standardized</i></GlossaryTerm> notation for naming *logical pathnames* described in Section 19.3.1 (Syntax of Logical Pathname Namestrings), or some <GlossaryTerm styled={true} term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm> notation for naming a 



*physical pathname*. 



**newline** *n.* the *standard character hNewlinei*, notated for the *Lisp reader* as #\Newline. 



**next method** *n.* the next <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> to be invoked with respect to a given <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> for a particular set of arguments or argument *classes*. See Section 7.6.6.1.3 (Applying method combination to the sorted list of applicable methods). 



**nickname** *n.* (of a <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>) one of possibly several <GlossaryTerm styled={true} term={"name"}><i>names</i></GlossaryTerm> that can be used to refer to the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> but that is not the primary <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. 



<DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> *n.* the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that is at once the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> named "NIL" in the COMMON-LISP <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>, the *empty list*, the <GlossaryTerm styled={true} term={"boolean"}><i>boolean</i></GlossaryTerm> (or *generalized boolean*) representing <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>, and the <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> of the *empty type*. 



**non-atomic** *adj.* being other than an <GlossaryTerm styled={true} term={"atom"}><i>atom</i></GlossaryTerm>; *i.e.*, being a <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm>. 



**non-constant variable** *n.* a <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm> that is not a *constant variable*. 



**non-correctable** *adj.* (of an <GlossaryTerm styled={true} term={"error"}><i>error</i></GlossaryTerm> ) not intentionally <GlossaryTerm styled={true} term={"correctable"}><i>correctable</i></GlossaryTerm>. (Because of the dynamic nature of <GlossaryTerm styled={true} term={"restart"}><i>restarts</i></GlossaryTerm>, it is neither possible nor generally useful to completely prohibit an <GlossaryTerm styled={true} term={"error"}><i>error</i></GlossaryTerm> from being <GlossaryTerm styled={true} term={"correctable"}><i>correctable</i></GlossaryTerm>. This term is used in order to express an 



intent that no special effort should be made by <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm> signaling an <GlossaryTerm styled={true} term={"error"}><i>error</i></GlossaryTerm> to make that *error correctable*; however, there is no actual requirement on *conforming programs* or *conforming implementations* imposed by this term.) 



**non-empty** *adj.* having at least one <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm>. 



**non-generic function** *n.* a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> that is not a *generic function*. 







 



 



**non-graphic** *adj.* (of a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> ) not <GlossaryTerm styled={true} term={"graphic"}><i>graphic</i></GlossaryTerm>. See Section 13.1.4.1 (Graphic 



Characters). 



**non-list** *n.*, *adj.* other than a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>; *i.e.*, a *non-nil atom*. 



**non-local exit** *n.* a transfer of control (and sometimes <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm>) to an *exit point* for reasons other than a *normal return*. “The operators <DictionaryLink styled={true} term={"go"}><b>go</b></DictionaryLink>, <DictionaryLink styled={true} term={"throw"}><b>throw</b></DictionaryLink>, and <DictionaryLink styled={true} term={"return-from"}><b>return-from</b></DictionaryLink> cause a non-local exit.” 



**non-nil** *n.*, *adj.* not <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. Technically, any <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> which is not <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> can be referred to as <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, but that would tend to imply a unique view of the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> as a *generalized boolean*. Referring to such an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> as <GlossaryTerm styled={true} term={"non-nil"}><i>non-nil</i></GlossaryTerm> avoids this implication. 



**non-null lexical environment** *n.* a *lexical environment* that has additional 



information not present in the *global environment*, such as one or more <GlossaryTerm styled={true} term={"binding"}><i>bindings</i></GlossaryTerm>. 



**non-simple** *adj.* not <GlossaryTerm styled={true} term={"simple"}><i>simple</i></GlossaryTerm>. 



**non-terminating** *adj.* (of a *macro character* ) being such that it is treated as a 



constituent <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> when it appears in the middle of an extended token. See Section 2.2 (Reader Algorithm). 



**non-top-level form** *n.* a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> that, by virtue of its position as a <GlossaryTerm styled={true} term={"subform"}><i>subform</i></GlossaryTerm> of another <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>, is not a *top level form*. See Section 3.2.3.1 (Processing of Top Level Forms). 



**normal return** *n.* the natural transfer of control and <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> which occurs after the complete *execution* of a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



**normalized** *adj.*, *ANSI*, *IEEE* (of a <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm>) conforming to the description of 



“normalized” as described by *IEEE Standard for Binary Floating-Point Arithmetic*. See <GlossaryTerm styled={true} term={"denormalized"}><i>denormalized</i></GlossaryTerm>. 



<DictionaryLink styled={true} term={"null"}><b>null</b></DictionaryLink> *adj.*, *n.* 1. *adj.* a. (of a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>) having no <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm>: empty. See *empty list*. b. (of a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>) having a <GlossaryTerm styled={true} term={"length"}><i>length</i></GlossaryTerm> of zero. (It is common, both within this document and in observed spoken behavior, to refer to an empty string by an apparent definite reference, as in “the *null string*” even though no attempt is made to <GlossaryTerm styled={true} term={"intern"}><i>intern</i></GlossaryTerm><sub>2</sub> null strings. The phrase “a *null string*” is technically more correct, but is generally considered awkward by most Lisp programmers. As such, the phrase “the *null string*” should be treated as an indefinite reference in all cases except for anaphoric references.) c. (of an *implementation-defined attribute* of a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> ) An <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> to which the value of that <GlossaryTerm styled={true} term={"attribute"}><i>attribute</i></GlossaryTerm> defaults if no specific value was requested. 2. *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"null"}><b>null</b></DictionaryLink> (the only such <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> being <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>). 



**null lexical environment** *n.* the *lexical environment* which has no <GlossaryTerm styled={true} term={"binding"}><i>bindings</i></GlossaryTerm>. 







 



 



<DictionaryLink styled={true} term={"number"}><b>number</b></DictionaryLink> *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"number"}><b>number</b></DictionaryLink>. 



**numeric** *adj.* (of a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> ) being one of the *standard characters* 0 through *9* , or being some other *graphic character* defined by the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> to be <GlossaryTerm styled={true} term={"numeric"}><i>numeric</i></GlossaryTerm>. 




---
title: N
sidebar_position: 110
---

**N** 



**name** *n.*, *v.t.* 1. *n.* an <GlossaryTerm  term={"identifier"}><i>identifier</i></GlossaryTerm> by which an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>, a <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm>, or an <GlossaryTerm styled={true} term={"exit point"}><i>exit point</i></GlossaryTerm> is referred to by association using a <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm>. 2. *v.t.* to give a <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> to. 3. *n.* (of an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> having a name component) the <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> which is that component. “The string 



which is a symbol’s name is returned by <DictionaryLink  term={"symbol-name"}><b>symbol-name</b></DictionaryLink>.” 4. *n.* (of a <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm>) a. the name component, returned by **pathname-name**. b. the entire namestring, returned by <DictionaryLink  term={"namestring"}><b>namestring</b></DictionaryLink>. 5. *n.* (of a <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> ) a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> that names the <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> and that 







 



 



has <GlossaryTerm  term={"length"}><i>length</i></GlossaryTerm> greater than one. (All *non-graphic characters* are required to have <GlossaryTerm  term={"name"}><i>names</i></GlossaryTerm> unless they have some *implementation-defined attribute* which is not <GlossaryTerm  term={"null"}><i>null</i></GlossaryTerm>. Whether or not other <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm> have <GlossaryTerm  term={"name"}><i>names</i></GlossaryTerm> is <GlossaryTerm  term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>.) 



**named constant** *n.* a <GlossaryTerm  term={"variable"}><i>variable</i></GlossaryTerm> that is defined by Common Lisp, by the <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm>, or by user code (see the <GlossaryTerm  term={"macro"}><i>macro</i></GlossaryTerm> <DictionaryLink  term={"defconstant"}><b>defconstant</b></DictionaryLink>) to always <GlossaryTerm  term={"yield"}><i>yield</i></GlossaryTerm> the same <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> when *evaluated*. “The value of a named constant may not be changed by assignment or by binding.” 



**namespace** *n.* 1. <GlossaryTerm  term={"binding"}><i>bindings</i></GlossaryTerm> whose denotations are restricted to a particular kind. “The bindings of names to tags is the tag namespace.” 2. any <GlossaryTerm  term={"mapping"}><i>mapping</i></GlossaryTerm> whose domain is a set of <GlossaryTerm  term={"name"}><i>names</i></GlossaryTerm>. “A package defines a namespace.” 



<DictionaryLink  term={"namestring"}><b>namestring</b></DictionaryLink> *n.* a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> that represents a <GlossaryTerm  term={"filename"}><i>filename</i></GlossaryTerm> using either the <GlossaryTerm  term={"standardized"}><i>standardized</i></GlossaryTerm> notation for naming <GlossaryTerm styled={true} term={"logical pathname"}><i>logical pathnames</i></GlossaryTerm> described in Section 19.3.1 (Syntax of Logical Pathname Namestrings), or some <GlossaryTerm  term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm> notation for naming a 



<GlossaryTerm styled={true} term={"physical pathname"}><i>physical pathname</i></GlossaryTerm>. 



**newline** *n.* the *standard character ⟨Newline⟩*, notated for the *Lisp reader* as #\Newline. 



**next method** *n.* the next <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> to be invoked with respect to a given <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> for a particular set of arguments or argument *classes*. See Section 7.6.6.1.3 (Applying method combination to the sorted list of applicable methods). 



**nickname** *n.* (of a <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>) one of possibly several <GlossaryTerm  term={"name"}><i>names</i></GlossaryTerm> that can be used to refer to the <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> but that is not the primary <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> of the <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>. 



<DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> *n.* the <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> that is at once the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> named "NIL" in the COMMON-LISP <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>, the <GlossaryTerm styled={true} term={"empty list"}><i>empty list</i></GlossaryTerm>, the <GlossaryTerm  term={"boolean"}><i>boolean</i></GlossaryTerm> (or <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>) representing <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>, and the <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"empty type"}><i>empty type</i></GlossaryTerm>. 



**non-atomic** *adj.* being other than an <GlossaryTerm  term={"atom"}><i>atom</i></GlossaryTerm>; *i.e.*, being a <GlossaryTerm  term={"cons"}><i>cons</i></GlossaryTerm>. 



**non-constant variable** *n.* a <GlossaryTerm  term={"variable"}><i>variable</i></GlossaryTerm> that is not a <GlossaryTerm styled={true} term={"constant variable"}><i>constant variable</i></GlossaryTerm>. 



**non-correctable** *adj.* (of an <GlossaryTerm  term={"error"}><i>error</i></GlossaryTerm> ) not intentionally <GlossaryTerm  term={"correctable"}><i>correctable</i></GlossaryTerm>. (Because of the dynamic nature of <GlossaryTerm  term={"restart"}><i>restarts</i></GlossaryTerm>, it is neither possible nor generally useful to completely prohibit an <GlossaryTerm  term={"error"}><i>error</i></GlossaryTerm> from being <GlossaryTerm  term={"correctable"}><i>correctable</i></GlossaryTerm>. This term is used in order to express an 



intent that no special effort should be made by <GlossaryTerm  term={"code"}><i>code</i></GlossaryTerm> signaling an <GlossaryTerm  term={"error"}><i>error</i></GlossaryTerm> to make that *error correctable*; however, there is no actual requirement on <GlossaryTerm styled={true} term={"conforming program"}><i>conforming programs</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"conforming implementation"}><i>conforming implementations</i></GlossaryTerm> imposed by this term.) 



**non-empty** *adj.* having at least one <GlossaryTerm  term={"element"}><i>element</i></GlossaryTerm>. 



**non-generic function** *n.* a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> that is not a <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm>. 







 



 



**non-graphic** *adj.* (of a <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> ) not <GlossaryTerm  term={"graphic"}><i>graphic</i></GlossaryTerm>. See Section 13.1.4.1 (Graphic 



Characters). 



**non-list** *n.*, *adj.* other than a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm>; *i.e.*, a *non-nil atom*. 



**non-local exit** *n.* a transfer of control (and sometimes <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm>) to an <GlossaryTerm styled={true} term={"exit point"}><i>exit point</i></GlossaryTerm> for reasons other than a <GlossaryTerm styled={true} term={"normal return"}><i>normal return</i></GlossaryTerm>. “The operators <DictionaryLink  term={"go"}><b>go</b></DictionaryLink>, <DictionaryLink  term={"throw"}><b>throw</b></DictionaryLink>, and <DictionaryLink  term={"return-from"}><b>return-from</b></DictionaryLink> cause a non-local exit.” 



**non-nil** *n.*, *adj.* not <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. Technically, any <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> which is not <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> can be referred to as <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm>, but that would tend to imply a unique view of the <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> as a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. Referring to such an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> as <GlossaryTerm  term={"non-nil"}><i>non-nil</i></GlossaryTerm> avoids this implication. 



**non-null lexical environment** *n.* a <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm> that has additional 



information not present in the <GlossaryTerm styled={true} term={"global environment"}><i>global environment</i></GlossaryTerm>, such as one or more <GlossaryTerm  term={"binding"}><i>bindings</i></GlossaryTerm>. 



**non-simple** *adj.* not <GlossaryTerm  term={"simple"}><i>simple</i></GlossaryTerm>. 



**non-terminating** *adj.* (of a <GlossaryTerm styled={true} term={"macro character"}><i>macro character</i></GlossaryTerm> ) being such that it is treated as a 



constituent <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> when it appears in the middle of an extended token. See Section 2.2 (Reader Algorithm). 



**non-top-level form** *n.* a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> that, by virtue of its position as a <GlossaryTerm  term={"subform"}><i>subform</i></GlossaryTerm> of another <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>, is not a <GlossaryTerm styled={true} term={"top level form"}><i>top level form</i></GlossaryTerm>. See Section 3.2.3.1 (Processing of Top Level Forms). 



**normal return** *n.* the natural transfer of control and <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> which occurs after the complete *execution* of a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. 



**normalized** *adj.*, *ANSI*, *IEEE* (of a <GlossaryTerm  term={"float"}><i>float</i></GlossaryTerm>) conforming to the description of 



“normalized” as described by *IEEE Standard for Binary Floating-Point Arithmetic*. See <GlossaryTerm  term={"denormalized"}><i>denormalized</i></GlossaryTerm>. 



<DictionaryLink  term={"null"}><b>null</b></DictionaryLink> *adj.*, *n.* 1. *adj.* a. (of a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm>) having no <GlossaryTerm  term={"element"}><i>elements</i></GlossaryTerm>: empty. See <GlossaryTerm styled={true} term={"empty list"}><i>empty list</i></GlossaryTerm>. b. (of a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>) having a <GlossaryTerm  term={"length"}><i>length</i></GlossaryTerm> of zero. (It is common, both within this document and in observed spoken behavior, to refer to an empty string by an apparent definite reference, as in “the *null string*” even though no attempt is made to <GlossaryTerm  term={"intern"}><i>intern</i></GlossaryTerm><sub>2</sub> null strings. The phrase “a *null string*” is technically more correct, but is generally considered awkward by most Lisp programmers. As such, the phrase “the *null string*” should be treated as an indefinite reference in all cases except for anaphoric references.) c. (of an *implementation-defined attribute* of a <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> ) An <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> to which the value of that <GlossaryTerm  term={"attribute"}><i>attribute</i></GlossaryTerm> defaults if no specific value was requested. 2. *n.* an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"null"}><b>null</b></DictionaryLink> (the only such <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> being <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>). 



**null lexical environment** *n.* the <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm> which has no <GlossaryTerm  term={"binding"}><i>bindings</i></GlossaryTerm>. 







 



 



<DictionaryLink  term={"number"}><b>number</b></DictionaryLink> *n.* an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"number"}><b>number</b></DictionaryLink>. 



**numeric** *adj.* (of a <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> ) being one of the <GlossaryTerm styled={true} term={"standard character"}><i>standard characters</i></GlossaryTerm> 0 through *9* , or being some other *graphic character* defined by the <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm> to be <GlossaryTerm  term={"numeric"}><i>numeric</i></GlossaryTerm>. 




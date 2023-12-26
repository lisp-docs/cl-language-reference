---
title: N
sidebar_position: 110
---

**N** 



**name** *n.*, *v.t.* 1. *n.* an <ClLinks  term={"identifier"}><i>identifier</i></ClLinks> by which an <ClLinks  term={"object"}><i>object</i></ClLinks>, a <ClLinks  term={"binding"}><i>binding</i></ClLinks>, or an <GlossaryTerm styled={true} term={"exit point"}><i>exit point</i></GlossaryTerm> is referred to by association using a <ClLinks  term={"binding"}><i>binding</i></ClLinks>. 2. *v.t.* to give a <ClLinks  term={"name"}><i>name</i></ClLinks> to. 3. *n.* (of an <ClLinks  term={"object"}><i>object</i></ClLinks> having a name component) the <ClLinks  term={"object"}><i>object</i></ClLinks> which is that component. “The string 



which is a symbol’s name is returned by <DictionaryLink  term={"symbol-name"}><b>symbol-name</b></DictionaryLink>.” 4. *n.* (of a <ClLinks  term={"pathname"}><i>pathname</i></ClLinks>) a. the name component, returned by **pathname-name**. b. the entire namestring, returned by <DictionaryLink  term={"namestring"}><b>namestring</b></DictionaryLink>. 5. *n.* (of a <ClLinks  term={"character"}><i>character</i></ClLinks> ) a <ClLinks  term={"string"}><i>string</i></ClLinks> that names the <ClLinks  term={"character"}><i>character</i></ClLinks> and that 







 



 



has <ClLinks  term={"length"}><i>length</i></ClLinks> greater than one. (All *non-graphic characters* are required to have <ClLinks  term={"name"}><i>names</i></ClLinks> unless they have some *implementation-defined attribute* which is not <ClLinks  term={"null"}><i>null</i></ClLinks>. Whether or not other <ClLinks  term={"character"}><i>characters</i></ClLinks> have <ClLinks  term={"name"}><i>names</i></ClLinks> is <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>.) 



**named constant** *n.* a <ClLinks  term={"variable"}><i>variable</i></ClLinks> that is defined by Common Lisp, by the <ClLinks  term={"implementation"}><i>implementation</i></ClLinks>, or by user code (see the <ClLinks  term={"macro"}><i>macro</i></ClLinks> <DictionaryLink  term={"defconstant"}><b>defconstant</b></DictionaryLink>) to always <ClLinks  term={"yield"}><i>yield</i></ClLinks> the same <ClLinks  term={"value"}><i>value</i></ClLinks> when *evaluated*. “The value of a named constant may not be changed by assignment or by binding.” 



**namespace** *n.* 1. <ClLinks  term={"binding"}><i>bindings</i></ClLinks> whose denotations are restricted to a particular kind. “The bindings of names to tags is the tag namespace.” 2. any <ClLinks  term={"mapping"}><i>mapping</i></ClLinks> whose domain is a set of <ClLinks  term={"name"}><i>names</i></ClLinks>. “A package defines a namespace.” 



<DictionaryLink  term={"namestring"}><b>namestring</b></DictionaryLink> *n.* a <ClLinks  term={"string"}><i>string</i></ClLinks> that represents a <ClLinks  term={"filename"}><i>filename</i></ClLinks> using either the <ClLinks  term={"standardized"}><i>standardized</i></ClLinks> notation for naming <GlossaryTerm styled={true} term={"logical pathname"}><i>logical pathnames</i></GlossaryTerm> described in Section 19.3.1 (Syntax of Logical Pathname Namestrings), or some <ClLinks  term={"implementation-defined"}><i>implementation-defined</i></ClLinks> notation for naming a 



<GlossaryTerm styled={true} term={"physical pathname"}><i>physical pathname</i></GlossaryTerm>. 



**newline** *n.* the *standard character ⟨Newline⟩*, notated for the *Lisp reader* as #\Newline. 



**next method** *n.* the next <ClLinks  term={"method"}><i>method</i></ClLinks> to be invoked with respect to a given <ClLinks  term={"method"}><i>method</i></ClLinks> for a particular set of arguments or argument *classes*. See Section 7.6.6.1.3 (Applying method combination to the sorted list of applicable methods). 



**nickname** *n.* (of a <ClLinks  term={"package"}><i>package</i></ClLinks>) one of possibly several <ClLinks  term={"name"}><i>names</i></ClLinks> that can be used to refer to the <ClLinks  term={"package"}><i>package</i></ClLinks> but that is not the primary <ClLinks  term={"name"}><i>name</i></ClLinks> of the <ClLinks  term={"package"}><i>package</i></ClLinks>. 



<DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> *n.* the <ClLinks  term={"object"}><i>object</i></ClLinks> that is at once the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> named "NIL" in the COMMON-LISP <ClLinks  term={"package"}><i>package</i></ClLinks>, the <GlossaryTerm styled={true} term={"empty list"}><i>empty list</i></GlossaryTerm>, the <ClLinks  term={"boolean"}><i>boolean</i></ClLinks> (or <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>) representing <ClLinks  term={"false"}><i>false</i></ClLinks>, and the <ClLinks  term={"name"}><i>name</i></ClLinks> of the <GlossaryTerm styled={true} term={"empty type"}><i>empty type</i></GlossaryTerm>. 



**non-atomic** *adj.* being other than an <ClLinks  term={"atom"}><i>atom</i></ClLinks>; *i.e.*, being a <ClLinks  term={"cons"}><i>cons</i></ClLinks>. 



**non-constant variable** *n.* a <ClLinks  term={"variable"}><i>variable</i></ClLinks> that is not a <GlossaryTerm styled={true} term={"constant variable"}><i>constant variable</i></GlossaryTerm>. 



**non-correctable** *adj.* (of an <ClLinks  term={"error"}><i>error</i></ClLinks> ) not intentionally <ClLinks  term={"correctable"}><i>correctable</i></ClLinks>. (Because of the dynamic nature of <ClLinks  term={"restart"}><i>restarts</i></ClLinks>, it is neither possible nor generally useful to completely prohibit an <ClLinks  term={"error"}><i>error</i></ClLinks> from being <ClLinks  term={"correctable"}><i>correctable</i></ClLinks>. This term is used in order to express an 



intent that no special effort should be made by <ClLinks  term={"code"}><i>code</i></ClLinks> signaling an <ClLinks  term={"error"}><i>error</i></ClLinks> to make that *error correctable*; however, there is no actual requirement on <GlossaryTerm styled={true} term={"conforming program"}><i>conforming programs</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"conforming implementation"}><i>conforming implementations</i></GlossaryTerm> imposed by this term.) 



**non-empty** *adj.* having at least one <ClLinks  term={"element"}><i>element</i></ClLinks>. 



**non-generic function** *n.* a <ClLinks  term={"function"}><i>function</i></ClLinks> that is not a <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm>. 







 



 



**non-graphic** *adj.* (of a <ClLinks  term={"character"}><i>character</i></ClLinks> ) not <ClLinks  term={"graphic"}><i>graphic</i></ClLinks>. See Section 13.1.4.1 (Graphic 



Characters). 



**non-list** *n.*, *adj.* other than a <ClLinks  term={"list"}><i>list</i></ClLinks>; *i.e.*, a *non-nil atom*. 



**non-local exit** *n.* a transfer of control (and sometimes <ClLinks  term={"value"}><i>values</i></ClLinks>) to an <GlossaryTerm styled={true} term={"exit point"}><i>exit point</i></GlossaryTerm> for reasons other than a <GlossaryTerm styled={true} term={"normal return"}><i>normal return</i></GlossaryTerm>. “The operators <DictionaryLink  term={"go"}><b>go</b></DictionaryLink>, <DictionaryLink  term={"throw"}><b>throw</b></DictionaryLink>, and <DictionaryLink  term={"return-from"}><b>return-from</b></DictionaryLink> cause a non-local exit.” 



**non-nil** *n.*, *adj.* not <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. Technically, any <ClLinks  term={"object"}><i>object</i></ClLinks> which is not <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> can be referred to as <ClLinks  term={"true"}><i>true</i></ClLinks>, but that would tend to imply a unique view of the <ClLinks  term={"object"}><i>object</i></ClLinks> as a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. Referring to such an <ClLinks  term={"object"}><i>object</i></ClLinks> as <ClLinks  term={"non-nil"}><i>non-nil</i></ClLinks> avoids this implication. 



**non-null lexical environment** *n.* a <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm> that has additional 



information not present in the <GlossaryTerm styled={true} term={"global environment"}><i>global environment</i></GlossaryTerm>, such as one or more <ClLinks  term={"binding"}><i>bindings</i></ClLinks>. 



**non-simple** *adj.* not <ClLinks  term={"simple"}><i>simple</i></ClLinks>. 



**non-terminating** *adj.* (of a <GlossaryTerm styled={true} term={"macro character"}><i>macro character</i></GlossaryTerm> ) being such that it is treated as a 



constituent <ClLinks  term={"character"}><i>character</i></ClLinks> when it appears in the middle of an extended token. See Section 2.2 (Reader Algorithm). 



**non-top-level form** *n.* a <ClLinks  term={"form"}><i>form</i></ClLinks> that, by virtue of its position as a <ClLinks  term={"subform"}><i>subform</i></ClLinks> of another <ClLinks  term={"form"}><i>form</i></ClLinks>, is not a <GlossaryTerm styled={true} term={"top level form"}><i>top level form</i></GlossaryTerm>. See Section 3.2.3.1 (Processing of Top Level Forms). 



**normal return** *n.* the natural transfer of control and <ClLinks  term={"value"}><i>values</i></ClLinks> which occurs after the complete *execution* of a <ClLinks  term={"form"}><i>form</i></ClLinks>. 



**normalized** *adj.*, *ANSI*, *IEEE* (of a <ClLinks  term={"float"}><i>float</i></ClLinks>) conforming to the description of 



“normalized” as described by *IEEE Standard for Binary Floating-Point Arithmetic*. See <ClLinks  term={"denormalized"}><i>denormalized</i></ClLinks>. 



<DictionaryLink  term={"null"}><b>null</b></DictionaryLink> *adj.*, *n.* 1. *adj.* a. (of a <ClLinks  term={"list"}><i>list</i></ClLinks>) having no <ClLinks  term={"element"}><i>elements</i></ClLinks>: empty. See <GlossaryTerm styled={true} term={"empty list"}><i>empty list</i></GlossaryTerm>. b. (of a <ClLinks  term={"string"}><i>string</i></ClLinks>) having a <ClLinks  term={"length"}><i>length</i></ClLinks> of zero. (It is common, both within this document and in observed spoken behavior, to refer to an empty string by an apparent definite reference, as in “the *null string*” even though no attempt is made to <ClLinks  term={"intern"}><i>intern</i></ClLinks><sub>2</sub> null strings. The phrase “a *null string*” is technically more correct, but is generally considered awkward by most Lisp programmers. As such, the phrase “the *null string*” should be treated as an indefinite reference in all cases except for anaphoric references.) c. (of an *implementation-defined attribute* of a <ClLinks  term={"character"}><i>character</i></ClLinks> ) An <ClLinks  term={"object"}><i>object</i></ClLinks> to which the value of that <ClLinks  term={"attribute"}><i>attribute</i></ClLinks> defaults if no specific value was requested. 2. *n.* an <ClLinks  term={"object"}><i>object</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"null"}><b>null</b></DictionaryLink> (the only such <ClLinks  term={"object"}><i>object</i></ClLinks> being <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>). 



**null lexical environment** *n.* the <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm> which has no <ClLinks  term={"binding"}><i>bindings</i></ClLinks>. 







 



 



<DictionaryLink  term={"number"}><b>number</b></DictionaryLink> *n.* an <ClLinks  term={"object"}><i>object</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"number"}><b>number</b></DictionaryLink>. 



**numeric** *adj.* (of a <ClLinks  term={"character"}><i>character</i></ClLinks> ) being one of the <GlossaryTerm styled={true} term={"standard character"}><i>standard characters</i></GlossaryTerm> 0 through *9* , or being some other *graphic character* defined by the <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> to be <ClLinks  term={"numeric"}><i>numeric</i></ClLinks>. 




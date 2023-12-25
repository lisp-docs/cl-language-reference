---
title: U
sidebar_position: 117
---

**U** 



**unbound** *adj.* not having an associated denotation in a <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm>. See <GlossaryTerm styled={true} term={"bound"}><i>bound</i></GlossaryTerm>. 







 



 



**unbound variable** *n.* a <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> that is syntactically plausible as the name of a <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm> but which is not <GlossaryTerm styled={true} term={"bound"}><i>bound</i></GlossaryTerm> in the *variable namespace*. 



**undefined function** *n.* a <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> that is syntactically plausible as the name of a 



<GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> but which is not <GlossaryTerm styled={true} term={"bound"}><i>bound</i></GlossaryTerm> in the *function namespace*. 



<DictionaryLink styled={true} term={"unintern"}><b>unintern</b></DictionaryLink> *v.t.* (a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> in a <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>) to make the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> not be <GlossaryTerm styled={true} term={"present"}><i>present</i></GlossaryTerm> in that <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. (The <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> might continue to be <GlossaryTerm styled={true} term={"accessible"}><i>accessible</i></GlossaryTerm> by inheritance.) 



**uninterned** *adj.* (of a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>) not <GlossaryTerm styled={true} term={"accessible"}><i>accessible</i></GlossaryTerm> in any <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>; *i.e.*, not <GlossaryTerm styled={true} term={"interned"}><i>interned</i></GlossaryTerm> <sub>1</sub>. 



**universal time** *n. time*, represented as a non-negative *integer* number of seconds. *Absolute universal time* is measured as an offset from the beginning of the year 1900 (ignoring *leap seconds*). See Section 25.1.4.2 (Universal Time). 



**unqualified method** *n.* a <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> with no <GlossaryTerm styled={true} term={"qualifier"}><i>qualifiers</i></GlossaryTerm>. 



**unregistered package** *n.* a *package object* that is not present in the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> 



*registry*. An *unregistered package* has no <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>; *i.e.*, its <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. See the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"delete-package"}><b>delete-package</b></DictionaryLink>. 



**unsafe** *adj.* (of <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm>) not <GlossaryTerm styled={true} term={"safe"}><i>safe</i></GlossaryTerm>. (Note that, unless explicitly specified otherwise, if a particular kind of error checking is guaranteed only in a <GlossaryTerm styled={true} term={"safe"}><i>safe</i></GlossaryTerm> context, the same checking might or might not occur in that context if it were <GlossaryTerm styled={true} term={"unsafe"}><i>unsafe</i></GlossaryTerm>; describing a 



context as <GlossaryTerm styled={true} term={"unsafe"}><i>unsafe</i></GlossaryTerm> means that certain kinds of error checking are not reliably enabled but does not guarantee that error checking is definitely disabled.) 



**unsafe call** *n.* a <GlossaryTerm styled={true} term={"call"}><i>call</i></GlossaryTerm> that is not a *safe call*. For more detailed information, see Section 3.5.1.1 (Safe and Unsafe Calls). 



**upgrade** *v.t.* (a declared <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> to an actual <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>) 1. (when creating an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>) 



to substitute an *actual array element type* for an *expressed array element type* 



when choosing an appropriately *specialized array* representation. See the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"upgraded-array-element-type"}><b>upgraded-array-element-type</b></DictionaryLink>. 2. (when creating a <GlossaryTerm styled={true} term={"complex"}><i>complex</i></GlossaryTerm> ) to substitute an *actual complex part type* for an *expressed complex part type* when choosing an appropriately *specialized complex* representation. See the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"upgraded-complex-part-type"}><b>upgraded-complex-part-type</b></DictionaryLink>. 



**upgraded array element type** *n.* (of a <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>) a <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> that is a <GlossaryTerm styled={true} term={"supertype"}><i>supertype</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> and that is used instead of the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> whenever the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> is used as an *array element type* for object creation or type discrimination. See Section 15.1.2.1 (Array Upgrading). 



**upgraded complex part type** *n.* (of a <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>) a <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> that is a <GlossaryTerm styled={true} term={"supertype"}><i>supertype</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> and that is used instead of the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> whenever the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> is used as a *complex part type* for object creation or type discrimination. See the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"upgraded-complex-part-type"}><b>upgraded-complex-part-type</b></DictionaryLink>. 







 



 



**uppercase** *adj.* (of a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> ) being among *standard characters* corresponding to the capital letters A through Z, or being some other *implementation-defined character* that is defined by the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> to be <GlossaryTerm styled={true} term={"uppercase"}><i>uppercase</i></GlossaryTerm>. See Section 13.1.4.3 (Characters With Case). 



**use** *v.t.* (a *package P*<sub>1</sub>) to <GlossaryTerm styled={true} term={"inherit"}><i>inherit</i></GlossaryTerm> the *external symbols* of *P*<sub>1</sub>. (If a package *P*<sub>2</sub> uses *P*<sub>1</sub>, the *external symbols* of *P*<sub>1</sub> become *internal symbols* of *P*<sub>2</sub> unless they are explicitly <GlossaryTerm styled={true} term={"exported"}><i>exported</i></GlossaryTerm>.) “The package CL-USER uses the package CL.” 



**use list** *n.* (of a <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>) a (possibly empty) <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> associated with each <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> which determines what other <GlossaryTerm styled={true} term={"package"}><i>packages</i></GlossaryTerm> are currently being *used* by that <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. 



**user** *n.* an active entity, typically a human, that invokes or interacts with a <GlossaryTerm styled={true} term={"program"}><i>program</i></GlossaryTerm> at run time, but that is not necessarily a <GlossaryTerm styled={true} term={"programmer"}><i>programmer</i></GlossaryTerm> . 




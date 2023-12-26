---
title: U
sidebar_position: 117
---

**U** 



**unbound** *adj.* not having an associated denotation in a <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm>. See <GlossaryTerm  term={"bound"}><i>bound</i></GlossaryTerm>. 







 



 



**unbound variable** *n.* a <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> that is syntactically plausible as the name of a <GlossaryTerm  term={"variable"}><i>variable</i></GlossaryTerm> but which is not <GlossaryTerm  term={"bound"}><i>bound</i></GlossaryTerm> in the *variable namespace*. 



**undefined function** *n.* a <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> that is syntactically plausible as the name of a 



<GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> but which is not <GlossaryTerm  term={"bound"}><i>bound</i></GlossaryTerm> in the *function namespace*. 



<DictionaryLink  term={"unintern"}><b>unintern</b></DictionaryLink> *v.t.* (a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> in a <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>) to make the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> not be <GlossaryTerm  term={"present"}><i>present</i></GlossaryTerm> in that <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>. (The <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> might continue to be <GlossaryTerm  term={"accessible"}><i>accessible</i></GlossaryTerm> by inheritance.) 



**uninterned** *adj.* (of a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>) not <GlossaryTerm  term={"accessible"}><i>accessible</i></GlossaryTerm> in any <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>; *i.e.*, not <GlossaryTerm  term={"interned"}><i>interned</i></GlossaryTerm> <sub>1</sub>. 



**universal time** *n. time*, represented as a non-negative *integer* number of seconds. *Absolute universal time* is measured as an offset from the beginning of the year 1900 (ignoring <GlossaryTerm styled={true} term={"leap seconds"}><i>leap seconds</i></GlossaryTerm>). See Section 25.1.4.2 (Universal Time). 



**unqualified method** *n.* a <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> with no <GlossaryTerm  term={"qualifier"}><i>qualifiers</i></GlossaryTerm>. 



**unregistered package** *n.* a *package object* that is not present in the <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> 



*registry*. An <GlossaryTerm styled={true} term={"unregistered package"}><i>unregistered package</i></GlossaryTerm> has no <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm>; *i.e.*, its <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> is <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. See the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"delete-package"}><b>delete-package</b></DictionaryLink>. 



**unsafe** *adj.* (of <GlossaryTerm  term={"code"}><i>code</i></GlossaryTerm>) not <GlossaryTerm  term={"safe"}><i>safe</i></GlossaryTerm>. (Note that, unless explicitly specified otherwise, if a particular kind of error checking is guaranteed only in a <GlossaryTerm  term={"safe"}><i>safe</i></GlossaryTerm> context, the same checking might or might not occur in that context if it were <GlossaryTerm  term={"unsafe"}><i>unsafe</i></GlossaryTerm>; describing a 



context as <GlossaryTerm  term={"unsafe"}><i>unsafe</i></GlossaryTerm> means that certain kinds of error checking are not reliably enabled but does not guarantee that error checking is definitely disabled.) 



**unsafe call** *n.* a <GlossaryTerm  term={"call"}><i>call</i></GlossaryTerm> that is not a <GlossaryTerm styled={true} term={"safe call"}><i>safe call</i></GlossaryTerm>. For more detailed information, see Section 3.5.1.1 (Safe and Unsafe Calls). 



**upgrade** *v.t.* (a declared <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> to an actual <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm>) 1. (when creating an <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>) 



to substitute an <GlossaryTerm styled={true} term={"actual array element type"}><i>actual array element type</i></GlossaryTerm> for an <GlossaryTerm styled={true} term={"expressed array element type"}><i>expressed array element type</i></GlossaryTerm> 



when choosing an appropriately *specialized array* representation. See the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"upgraded-array-element-type"}><b>upgraded-array-element-type</b></DictionaryLink>. 2. (when creating a <GlossaryTerm  term={"complex"}><i>complex</i></GlossaryTerm> ) to substitute an <GlossaryTerm styled={true} term={"actual complex part type"}><i>actual complex part type</i></GlossaryTerm> for an <GlossaryTerm styled={true} term={"expressed complex part type"}><i>expressed complex part type</i></GlossaryTerm> when choosing an appropriately *specialized complex* representation. See the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"upgraded-complex-part-type"}><b>upgraded-complex-part-type</b></DictionaryLink>. 



**upgraded array element type** *n.* (of a <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm>) a <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> that is a <GlossaryTerm  term={"supertype"}><i>supertype</i></GlossaryTerm> of the <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> and that is used instead of the <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> whenever the <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> is used as an <GlossaryTerm styled={true} term={"array element type"}><i>array element type</i></GlossaryTerm> for object creation or type discrimination. See Section 15.1.2.1 (Array Upgrading). 



**upgraded complex part type** *n.* (of a <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm>) a <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> that is a <GlossaryTerm  term={"supertype"}><i>supertype</i></GlossaryTerm> of the <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> and that is used instead of the <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> whenever the <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> is used as a <GlossaryTerm styled={true} term={"complex part type"}><i>complex part type</i></GlossaryTerm> for object creation or type discrimination. See the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"upgraded-complex-part-type"}><b>upgraded-complex-part-type</b></DictionaryLink>. 







 



 



**uppercase** *adj.* (of a <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> ) being among <GlossaryTerm styled={true} term={"standard character"}><i>standard characters</i></GlossaryTerm> corresponding to the capital letters A through Z, or being some other *implementation-defined character* that is defined by the <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm> to be <GlossaryTerm  term={"uppercase"}><i>uppercase</i></GlossaryTerm>. See Section 13.1.4.3 (Characters With Case). 



**use** *v.t.* (a *package P*<sub>1</sub>) to <GlossaryTerm  term={"inherit"}><i>inherit</i></GlossaryTerm> the <GlossaryTerm styled={true} term={"external symbol"}><i>external symbols</i></GlossaryTerm> of *P*<sub>1</sub>. (If a package *P*<sub>2</sub> uses *P*<sub>1</sub>, the <GlossaryTerm styled={true} term={"external symbol"}><i>external symbols</i></GlossaryTerm> of *P*<sub>1</sub> become <GlossaryTerm styled={true} term={"internal symbol"}><i>internal symbols</i></GlossaryTerm> of *P*<sub>2</sub> unless they are explicitly <GlossaryTerm  term={"exported"}><i>exported</i></GlossaryTerm>.) “The package CL-USER uses the package CL.” 



**use list** *n.* (of a <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>) a (possibly empty) <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> associated with each <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> which determines what other <GlossaryTerm  term={"package"}><i>packages</i></GlossaryTerm> are currently being *used* by that <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>. 



**user** *n.* an active entity, typically a human, that invokes or interacts with a <GlossaryTerm  term={"program"}><i>program</i></GlossaryTerm> at run time, but that is not necessarily a <GlossaryTerm  term={"programmer"}><i>programmer</i></GlossaryTerm> . 




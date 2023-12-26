---
title: U
sidebar_position: 117
---

**U** 



**unbound** *adj.* not having an associated denotation in a <ClLinks  term={"binding"}><i>binding</i></ClLinks>. See <ClLinks  term={"bound"}><i>bound</i></ClLinks>. 







 



 



**unbound variable** *n.* a <ClLinks  term={"name"}><i>name</i></ClLinks> that is syntactically plausible as the name of a <ClLinks  term={"variable"}><i>variable</i></ClLinks> but which is not <ClLinks  term={"bound"}><i>bound</i></ClLinks> in the *variable namespace*. 



**undefined function** *n.* a <ClLinks  term={"name"}><i>name</i></ClLinks> that is syntactically plausible as the name of a 



<ClLinks  term={"function"}><i>function</i></ClLinks> but which is not <ClLinks  term={"bound"}><i>bound</i></ClLinks> in the *function namespace*. 



<ClLinks  term={"unintern"}><b>unintern</b></ClLinks> *v.t.* (a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> in a <ClLinks  term={"package"}><i>package</i></ClLinks>) to make the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> not be <ClLinks  term={"present"}><i>present</i></ClLinks> in that <ClLinks  term={"package"}><i>package</i></ClLinks>. (The <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> might continue to be <ClLinks  term={"accessible"}><i>accessible</i></ClLinks> by inheritance.) 



**uninterned** *adj.* (of a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>) not <ClLinks  term={"accessible"}><i>accessible</i></ClLinks> in any <ClLinks  term={"package"}><i>package</i></ClLinks>; *i.e.*, not <ClLinks  term={"interned"}><i>interned</i></ClLinks> <sub>1</sub>. 



**universal time** *n. time*, represented as a non-negative *integer* number of seconds. *Absolute universal time* is measured as an offset from the beginning of the year 1900 (ignoring <GlossaryTerm styled={true} term={"leap seconds"}><i>leap seconds</i></GlossaryTerm>). See Section 25.1.4.2 (Universal Time). 



**unqualified method** *n.* a <ClLinks  term={"method"}><i>method</i></ClLinks> with no <ClLinks  term={"qualifier"}><i>qualifiers</i></ClLinks>. 



**unregistered package** *n.* a *package object* that is not present in the <ClLinks  term={"package"}><i>package</i></ClLinks> 



*registry*. An <GlossaryTerm styled={true} term={"unregistered package"}><i>unregistered package</i></GlossaryTerm> has no <ClLinks  term={"name"}><i>name</i></ClLinks>; *i.e.*, its <ClLinks  term={"name"}><i>name</i></ClLinks> is <ClLinks  term={"nil"}><b>nil</b></ClLinks>. See the <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"delete-package"}><b>delete-package</b></ClLinks>. 



**unsafe** *adj.* (of <ClLinks  term={"code"}><i>code</i></ClLinks>) not <ClLinks  term={"safe"}><i>safe</i></ClLinks>. (Note that, unless explicitly specified otherwise, if a particular kind of error checking is guaranteed only in a <ClLinks  term={"safe"}><i>safe</i></ClLinks> context, the same checking might or might not occur in that context if it were <ClLinks  term={"unsafe"}><i>unsafe</i></ClLinks>; describing a 



context as <ClLinks  term={"unsafe"}><i>unsafe</i></ClLinks> means that certain kinds of error checking are not reliably enabled but does not guarantee that error checking is definitely disabled.) 



**unsafe call** *n.* a <ClLinks  term={"call"}><i>call</i></ClLinks> that is not a <GlossaryTerm styled={true} term={"safe call"}><i>safe call</i></GlossaryTerm>. For more detailed information, see Section 3.5.1.1 (Safe and Unsafe Calls). 



**upgrade** *v.t.* (a declared <ClLinks  term={"type"}><i>type</i></ClLinks> to an actual <ClLinks  term={"type"}><i>type</i></ClLinks>) 1. (when creating an <ClLinks  term={"array"}><i>array</i></ClLinks>) 



to substitute an <GlossaryTerm styled={true} term={"actual array element type"}><i>actual array element type</i></GlossaryTerm> for an <GlossaryTerm styled={true} term={"expressed array element type"}><i>expressed array element type</i></GlossaryTerm> 



when choosing an appropriately *specialized array* representation. See the <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"upgraded-array-element-type"}><b>upgraded-array-element-type</b></ClLinks>. 2. (when creating a <ClLinks  term={"complex"}><i>complex</i></ClLinks> ) to substitute an <GlossaryTerm styled={true} term={"actual complex part type"}><i>actual complex part type</i></GlossaryTerm> for an <GlossaryTerm styled={true} term={"expressed complex part type"}><i>expressed complex part type</i></GlossaryTerm> when choosing an appropriately *specialized complex* representation. See the <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"upgraded-complex-part-type"}><b>upgraded-complex-part-type</b></ClLinks>. 



**upgraded array element type** *n.* (of a <ClLinks  term={"type"}><i>type</i></ClLinks>) a <ClLinks  term={"type"}><i>type</i></ClLinks> that is a <ClLinks  term={"supertype"}><i>supertype</i></ClLinks> of the <ClLinks  term={"type"}><i>type</i></ClLinks> and that is used instead of the <ClLinks  term={"type"}><i>type</i></ClLinks> whenever the <ClLinks  term={"type"}><i>type</i></ClLinks> is used as an <GlossaryTerm styled={true} term={"array element type"}><i>array element type</i></GlossaryTerm> for object creation or type discrimination. See Section 15.1.2.1 (Array Upgrading). 



**upgraded complex part type** *n.* (of a <ClLinks  term={"type"}><i>type</i></ClLinks>) a <ClLinks  term={"type"}><i>type</i></ClLinks> that is a <ClLinks  term={"supertype"}><i>supertype</i></ClLinks> of the <ClLinks  term={"type"}><i>type</i></ClLinks> and that is used instead of the <ClLinks  term={"type"}><i>type</i></ClLinks> whenever the <ClLinks  term={"type"}><i>type</i></ClLinks> is used as a <GlossaryTerm styled={true} term={"complex part type"}><i>complex part type</i></GlossaryTerm> for object creation or type discrimination. See the <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"upgraded-complex-part-type"}><b>upgraded-complex-part-type</b></ClLinks>. 







 



 



**uppercase** *adj.* (of a <ClLinks  term={"character"}><i>character</i></ClLinks> ) being among <GlossaryTerm styled={true} term={"standard character"}><i>standard characters</i></GlossaryTerm> corresponding to the capital letters A through Z, or being some other *implementation-defined character* that is defined by the <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> to be <ClLinks  term={"uppercase"}><i>uppercase</i></ClLinks>. See Section 13.1.4.3 (Characters With Case). 



**use** *v.t.* (a *package P*<sub>1</sub>) to <ClLinks  term={"inherit"}><i>inherit</i></ClLinks> the <GlossaryTerm styled={true} term={"external symbol"}><i>external symbols</i></GlossaryTerm> of *P*<sub>1</sub>. (If a package *P*<sub>2</sub> uses *P*<sub>1</sub>, the <GlossaryTerm styled={true} term={"external symbol"}><i>external symbols</i></GlossaryTerm> of *P*<sub>1</sub> become <GlossaryTerm styled={true} term={"internal symbol"}><i>internal symbols</i></GlossaryTerm> of *P*<sub>2</sub> unless they are explicitly <ClLinks  term={"exported"}><i>exported</i></ClLinks>.) “The package CL-USER uses the package CL.” 



**use list** *n.* (of a <ClLinks  term={"package"}><i>package</i></ClLinks>) a (possibly empty) <ClLinks  term={"list"}><i>list</i></ClLinks> associated with each <ClLinks  term={"package"}><i>package</i></ClLinks> which determines what other <ClLinks  term={"package"}><i>packages</i></ClLinks> are currently being *used* by that <ClLinks  term={"package"}><i>package</i></ClLinks>. 



**user** *n.* an active entity, typically a human, that invokes or interacts with a <ClLinks  term={"program"}><i>program</i></ClLinks> at run time, but that is not necessarily a <ClLinks  term={"programmer"}><i>programmer</i></ClLinks> . 




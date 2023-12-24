---
title: U
sidebar_position: 117
---

**U** 



**unbound** *adj.* not having an associated denotation in a <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks>. See <ClLinks styled={true} term={"bound"}><i>bound</i></ClLinks>. 







 



 



**unbound variable** *n.* a <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> that is syntactically plausible as the name of a <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks> but which is not <ClLinks styled={true} term={"bound"}><i>bound</i></ClLinks> in the *variable namespace*. 



**undefined function** *n.* a <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> that is syntactically plausible as the name of a 



<ClLinks styled={true} term={"function"}><i>function</i></ClLinks> but which is not <ClLinks styled={true} term={"bound"}><i>bound</i></ClLinks> in the *function namespace*. 



<ClLinks styled={true} term={"unintern"}><b>unintern</b></ClLinks> *v.t.* (a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> in a <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>) to make the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> not be <ClLinks styled={true} term={"present"}><i>present</i></ClLinks> in that <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. (The <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> might continue to be <ClLinks styled={true} term={"accessible"}><i>accessible</i></ClLinks> by inheritance.) 



**uninterned** *adj.* (of a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>) not <ClLinks styled={true} term={"accessible"}><i>accessible</i></ClLinks> in any <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>; *i.e.*, not <ClLinks styled={true} term={"interned"}><i>interned</i></ClLinks> <sub>1</sub>. 



**universal time** *n. time*, represented as a non-negative *integer* number of seconds. *Absolute universal time* is measured as an offset from the beginning of the year 1900 (ignoring *leap seconds*). See Section 25.1.4.2 (Universal Time). 



**unqualified method** *n.* a <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> with no <ClLinks styled={true} term={"qualifier"}><i>qualifiers</i></ClLinks>. 



**unregistered package** *n.* a *package object* that is not present in the <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> 



*registry*. An *unregistered package* has no <ClLinks styled={true} term={"name"}><i>name</i></ClLinks>; *i.e.*, its <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. See the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"delete-package"}><b>delete-package</b></ClLinks>. 



**unsafe** *adj.* (of <ClLinks styled={true} term={"code"}><i>code</i></ClLinks>) not <ClLinks styled={true} term={"safe"}><i>safe</i></ClLinks>. (Note that, unless explicitly specified otherwise, if a particular kind of error checking is guaranteed only in a <ClLinks styled={true} term={"safe"}><i>safe</i></ClLinks> context, the same checking might or might not occur in that context if it were <ClLinks styled={true} term={"unsafe"}><i>unsafe</i></ClLinks>; describing a 



context as <ClLinks styled={true} term={"unsafe"}><i>unsafe</i></ClLinks> means that certain kinds of error checking are not reliably enabled but does not guarantee that error checking is definitely disabled.) 



**unsafe call** *n.* a <ClLinks styled={true} term={"call"}><i>call</i></ClLinks> that is not a *safe call*. For more detailed information, see Section 3.5.1.1 (Safe and Unsafe Calls). 



**upgrade** *v.t.* (a declared <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> to an actual <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>) 1. (when creating an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>) 



to substitute an *actual array element type* for an *expressed array element type* 



when choosing an appropriately *specialized array* representation. See the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"upgraded-array-element-type"}><b>upgraded-array-element-type</b></ClLinks>. 2. (when creating a <ClLinks styled={true} term={"complex"}><i>complex</i></ClLinks> ) to substitute an *actual complex part type* for an *expressed complex part type* when choosing an appropriately *specialized complex* representation. See the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"upgraded-complex-part-type"}><b>upgraded-complex-part-type</b></ClLinks>. 



**upgraded array element type** *n.* (of a <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>) a <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> that is a <ClLinks styled={true} term={"supertype"}><i>supertype</i></ClLinks> of the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> and that is used instead of the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> whenever the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> is used as an *array element type* for object creation or type discrimination. See Section 15.1.2.1 (Array Upgrading). 



**upgraded complex part type** *n.* (of a <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>) a <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> that is a <ClLinks styled={true} term={"supertype"}><i>supertype</i></ClLinks> of the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> and that is used instead of the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> whenever the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> is used as a *complex part type* for object creation or type discrimination. See the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"upgraded-complex-part-type"}><b>upgraded-complex-part-type</b></ClLinks>. 







 



 



**uppercase** *adj.* (of a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> ) being among *standard characters* corresponding to the capital letters A through Z, or being some other *implementation-defined character* that is defined by the <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> to be <ClLinks styled={true} term={"uppercase"}><i>uppercase</i></ClLinks>. See Section 13.1.4.3 (Characters With Case). 



**use** *v.t.* (a *package P*<sub>1</sub>) to <ClLinks styled={true} term={"inherit"}><i>inherit</i></ClLinks> the *external symbols* of *P*<sub>1</sub>. (If a package *P*<sub>2</sub> uses *P*<sub>1</sub>, the *external symbols* of *P*<sub>1</sub> become *internal symbols* of *P*<sub>2</sub> unless they are explicitly <ClLinks styled={true} term={"exported"}><i>exported</i></ClLinks>.) “The package CL-USER uses the package CL.” 



**use list** *n.* (of a <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>) a (possibly empty) <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> associated with each <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> which determines what other <ClLinks styled={true} term={"package"}><i>packages</i></ClLinks> are currently being *used* by that <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. 



**user** *n.* an active entity, typically a human, that invokes or interacts with a <ClLinks styled={true} term={"program"}><i>program</i></ClLinks> at run time, but that is not necessarily a <ClLinks styled={true} term={"programmer"}><i>programmer</i></ClLinks> . 




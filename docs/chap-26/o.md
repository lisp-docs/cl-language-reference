---
title: O
sidebar_position: 111
---

**O** 



**object** *n.* 1. any Lisp datum. “The function <DictionaryLink  term={"cons"}><b>cons</b></DictionaryLink> creates an object which refers to two other objects.” 2. (immediately following the name of a <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm>) an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> which is of that <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm>, used to emphasize that the <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> is not just a <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> for an object of that <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> but really an <GlossaryTerm  term={"element"}><i>element</i></GlossaryTerm> of the <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> in cases where <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> of that <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> (such as <DictionaryLink  term={"function"}><b>function</b></DictionaryLink> or <DictionaryLink  term={"class"}><b>class</b></DictionaryLink>) are commonly referred to by <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm>. “The function <DictionaryLink  term={"symbol-function"}><b>symbol-function</b></DictionaryLink> takes a function name and returns a function object.” 



**object-traversing** *adj.* operating in succession on components of an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 



“The operators <DictionaryLink  term={"mapcar"}><b>mapcar</b></DictionaryLink>, <DictionaryLink  term={"maphash"}><b>maphash</b></DictionaryLink>, <DictionaryLink  term={"with-package-iterator"}><b>with-package-iterator</b></DictionaryLink> and <DictionaryLink  term={"count"}><b>count</b></DictionaryLink> perform 



object-traversing operations.” 



<DictionaryLink  term={"open"}><b>open</b></DictionaryLink> *adj.*, *v.t.* (a <GlossaryTerm  term={"file"}><i>file</i></GlossaryTerm>) 1. *v.t.* to create and return a <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> to the <GlossaryTerm  term={"file"}><i>file</i></GlossaryTerm>. 2. *adj.* (of a <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>) having been *opened* <sub>1</sub>, but not yet <GlossaryTerm  term={"closed"}><i>closed</i></GlossaryTerm>. 



**operator** *n.* 1. a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm>, <GlossaryTerm  term={"macro"}><i>macro</i></GlossaryTerm>, or *special operator* . 2. a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> that names such a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm>, <GlossaryTerm  term={"macro"}><i>macro</i></GlossaryTerm>, or *special operator* . 3. (in a <DictionaryLink  term={"function"}><b>function</b></DictionaryLink> *special form*) the <GlossaryTerm  term={"cadr"}><i>cadr</i></GlossaryTerm> of the <DictionaryLink  term={"function"}><b>function</b></DictionaryLink> *special form*, which might be either an <GlossaryTerm  term={"operator"}><i>operator</i></GlossaryTerm> <sub>2</sub> or a *lambda expression*. 4. (of a *compound form*) the <GlossaryTerm  term={"car"}><i>car</i></GlossaryTerm> of the *compound form*, which might be either an <GlossaryTerm  term={"operator"}><i>operator</i></GlossaryTerm> <sub>2</sub> or a *lambda expression*, and which is never (setf <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>). 



**optimize quality** *n.* one of several aspects of a program that might be optimizable by certain compilers. Since optimizing one such quality might conflict with optimizing another, relative priorities for qualities can be established in an <DictionaryLink  term={"optimize"}><b>optimize</b></DictionaryLink> <GlossaryTerm  term={"declaration"}><i>declaration</i></GlossaryTerm>. The *standardized optimize qualities* are compilation-speed (speed of the compilation process), debug (ease of debugging), safety (run-time error checking), space (both code size and run-time space), and speed (of the object code). <GlossaryTerm  term={"implementation"}><i>Implementations</i></GlossaryTerm> may define additional *optimize qualities*. 



**optional parameter** *n.* A <GlossaryTerm  term={"parameter"}><i>parameter</i></GlossaryTerm> for which a corresponding positional <GlossaryTerm  term={"argument"}><i>argument</i></GlossaryTerm> is optional. If the <GlossaryTerm  term={"argument"}><i>argument</i></GlossaryTerm> is not supplied, a default value is used. See also <GlossaryTerm styled={true} term={"supplied-p parameter"}><i>supplied-p parameter</i></GlossaryTerm> . 



**ordinary function** *n.* a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> that is not a <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm>. 



**ordinary lambda list** *n.* the kind of <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> used by <DictionaryLink  term={"lambda"}><b>lambda</b></DictionaryLink>. See <GlossaryTerm styled={true} term={"modified lambda list"}><i>modified lambda list</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"extended lambda list"}><i>extended lambda list</i></GlossaryTerm>. “<DictionaryLink  term={"defun"}><b>defun</b></DictionaryLink> uses an ordinary lambda list.” 







 



 



**otherwise inaccessible part** *n.* (of an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>, *O*<sub>1</sub>) an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>, *O*<sub>2</sub>, which would 



be made <GlossaryTerm  term={"inaccessible"}><i>inaccessible</i></GlossaryTerm> if *O*<sub>1</sub> were made <GlossaryTerm  term={"inaccessible"}><i>inaccessible</i></GlossaryTerm>. (Every <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> is an <GlossaryTerm styled={true} term={"otherwise inaccessible part"}><i>otherwise inaccessible part</i></GlossaryTerm> of itself.) 



**output** *adj.* (of a <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>) supporting output operations (*i.e.*, being a “data sink”). An *output stream* might also be an *input stream*, in which case it is sometimes called a *bidirectional stream*. See the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> **output-stream-p**. 




---
title: O
sidebar_position: 111
---

**O** 



**object** *n.* 1. any Lisp datum. “The function <DictionaryLink styled={true} term={"cons"}><b>cons</b></DictionaryLink> creates an object which refers to two other objects.” 2. (immediately following the name of a <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>) an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> which is of that <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>, used to emphasize that the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is not just a <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> for an object of that <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> but really an <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> in cases where <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> of that <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> (such as <DictionaryLink styled={true} term={"function"}><b>function</b></DictionaryLink> or <DictionaryLink styled={true} term={"class"}><b>class</b></DictionaryLink>) are commonly referred to by <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>. “The function <DictionaryLink styled={true} term={"symbol-function"}><b>symbol-function</b></DictionaryLink> takes a function name and returns a function object.” 



**object-traversing** *adj.* operating in succession on components of an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



“The operators <DictionaryLink styled={true} term={"mapcar"}><b>mapcar</b></DictionaryLink>, <DictionaryLink styled={true} term={"maphash"}><b>maphash</b></DictionaryLink>, <DictionaryLink styled={true} term={"with-package-iterator"}><b>with-package-iterator</b></DictionaryLink> and <DictionaryLink styled={true} term={"count"}><b>count</b></DictionaryLink> perform 



object-traversing operations.” 



<DictionaryLink styled={true} term={"open"}><b>open</b></DictionaryLink> *adj.*, *v.t.* (a <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm>) 1. *v.t.* to create and return a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> to the <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm>. 2. *adj.* (of a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>) having been *opened* <sub>1</sub>, but not yet <GlossaryTerm styled={true} term={"closed"}><i>closed</i></GlossaryTerm>. 



**operator** *n.* 1. a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm>, or *special operator* . 2. a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> that names such a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm>, or *special operator* . 3. (in a <DictionaryLink styled={true} term={"function"}><b>function</b></DictionaryLink> *special form*) the <GlossaryTerm styled={true} term={"cadr"}><i>cadr</i></GlossaryTerm> of the <DictionaryLink styled={true} term={"function"}><b>function</b></DictionaryLink> *special form*, which might be either an <GlossaryTerm styled={true} term={"operator"}><i>operator</i></GlossaryTerm> <sub>2</sub> or a *lambda expression*. 4. (of a *compound form*) the <GlossaryTerm styled={true} term={"car"}><i>car</i></GlossaryTerm> of the *compound form*, which might be either an <GlossaryTerm styled={true} term={"operator"}><i>operator</i></GlossaryTerm> <sub>2</sub> or a *lambda expression*, and which is never (setf <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>). 



**optimize quality** *n.* one of several aspects of a program that might be optimizable by certain compilers. Since optimizing one such quality might conflict with optimizing another, relative priorities for qualities can be established in an <DictionaryLink styled={true} term={"optimize"}><b>optimize</b></DictionaryLink> <GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm>. The *standardized optimize qualities* are compilation-speed (speed of the compilation process), debug (ease of debugging), safety (run-time error checking), space (both code size and run-time space), and speed (of the object code). <GlossaryTerm styled={true} term={"implementation"}><i>Implementations</i></GlossaryTerm> may define additional *optimize qualities*. 



**optional parameter** *n.* A <GlossaryTerm styled={true} term={"parameter"}><i>parameter</i></GlossaryTerm> for which a corresponding positional <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> is optional. If the <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> is not supplied, a default value is used. See also *supplied-p parameter* . 



**ordinary function** *n.* a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> that is not a *generic function*. 



**ordinary lambda list** *n.* the kind of *lambda list* used by <DictionaryLink styled={true} term={"lambda"}><b>lambda</b></DictionaryLink>. See *modified lambda list* and *extended lambda list*. “<DictionaryLink styled={true} term={"defun"}><b>defun</b></DictionaryLink> uses an ordinary lambda list.” 







 



 



**otherwise inaccessible part** *n.* (of an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>, *O*<sub>1</sub>) an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>, *O*<sub>2</sub>, which would 



be made <GlossaryTerm styled={true} term={"inaccessible"}><i>inaccessible</i></GlossaryTerm> if *O*<sub>1</sub> were made <GlossaryTerm styled={true} term={"inaccessible"}><i>inaccessible</i></GlossaryTerm>. (Every <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is an *otherwise inaccessible part* of itself.) 



**output** *adj.* (of a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>) supporting output operations (*i.e.*, being a “data sink”). An *output stream* might also be an *input stream*, in which case it is sometimes called a *bidirectional stream*. See the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> **output-stream-p**. 




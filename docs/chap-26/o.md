---
title: O
sidebar_position: 111
---

**O** 



**object** *n.* 1. any Lisp datum. “The function <DictionaryLink  term={"cons"}><b>cons</b></DictionaryLink> creates an object which refers to two other objects.” 2. (immediately following the name of a <ClLinks  term={"type"}><i>type</i></ClLinks>) an <ClLinks  term={"object"}><i>object</i></ClLinks> which is of that <ClLinks  term={"type"}><i>type</i></ClLinks>, used to emphasize that the <ClLinks  term={"object"}><i>object</i></ClLinks> is not just a <ClLinks  term={"name"}><i>name</i></ClLinks> for an object of that <ClLinks  term={"type"}><i>type</i></ClLinks> but really an <ClLinks  term={"element"}><i>element</i></ClLinks> of the <ClLinks  term={"type"}><i>type</i></ClLinks> in cases where <ClLinks  term={"object"}><i>objects</i></ClLinks> of that <ClLinks  term={"type"}><i>type</i></ClLinks> (such as <DictionaryLink  term={"function"}><b>function</b></DictionaryLink> or <DictionaryLink  term={"class"}><b>class</b></DictionaryLink>) are commonly referred to by <ClLinks  term={"name"}><i>name</i></ClLinks>. “The function <DictionaryLink  term={"symbol-function"}><b>symbol-function</b></DictionaryLink> takes a function name and returns a function object.” 



**object-traversing** *adj.* operating in succession on components of an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



“The operators <DictionaryLink  term={"mapcar"}><b>mapcar</b></DictionaryLink>, <DictionaryLink  term={"maphash"}><b>maphash</b></DictionaryLink>, <DictionaryLink  term={"with-package-iterator"}><b>with-package-iterator</b></DictionaryLink> and <DictionaryLink  term={"count"}><b>count</b></DictionaryLink> perform 



object-traversing operations.” 



<DictionaryLink  term={"open"}><b>open</b></DictionaryLink> *adj.*, *v.t.* (a <ClLinks  term={"file"}><i>file</i></ClLinks>) 1. *v.t.* to create and return a <ClLinks  term={"stream"}><i>stream</i></ClLinks> to the <ClLinks  term={"file"}><i>file</i></ClLinks>. 2. *adj.* (of a <ClLinks  term={"stream"}><i>stream</i></ClLinks>) having been *opened* <sub>1</sub>, but not yet <ClLinks  term={"closed"}><i>closed</i></ClLinks>. 



**operator** *n.* 1. a <ClLinks  term={"function"}><i>function</i></ClLinks>, <ClLinks  term={"macro"}><i>macro</i></ClLinks>, or *special operator* . 2. a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> that names such a <ClLinks  term={"function"}><i>function</i></ClLinks>, <ClLinks  term={"macro"}><i>macro</i></ClLinks>, or *special operator* . 3. (in a <DictionaryLink  term={"function"}><b>function</b></DictionaryLink> *special form*) the <ClLinks  term={"cadr"}><i>cadr</i></ClLinks> of the <DictionaryLink  term={"function"}><b>function</b></DictionaryLink> *special form*, which might be either an <ClLinks  term={"operator"}><i>operator</i></ClLinks> <sub>2</sub> or a *lambda expression*. 4. (of a *compound form*) the <ClLinks  term={"car"}><i>car</i></ClLinks> of the *compound form*, which might be either an <ClLinks  term={"operator"}><i>operator</i></ClLinks> <sub>2</sub> or a *lambda expression*, and which is never (setf <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>). 



**optimize quality** *n.* one of several aspects of a program that might be optimizable by certain compilers. Since optimizing one such quality might conflict with optimizing another, relative priorities for qualities can be established in an <DictionaryLink  term={"optimize"}><b>optimize</b></DictionaryLink> <ClLinks  term={"declaration"}><i>declaration</i></ClLinks>. The *standardized optimize qualities* are compilation-speed (speed of the compilation process), debug (ease of debugging), safety (run-time error checking), space (both code size and run-time space), and speed (of the object code). <ClLinks  term={"implementation"}><i>Implementations</i></ClLinks> may define additional *optimize qualities*. 



**optional parameter** *n.* A <ClLinks  term={"parameter"}><i>parameter</i></ClLinks> for which a corresponding positional <ClLinks  term={"argument"}><i>argument</i></ClLinks> is optional. If the <ClLinks  term={"argument"}><i>argument</i></ClLinks> is not supplied, a default value is used. See also <GlossaryTerm styled={true} term={"supplied-p parameter"}><i>supplied-p parameter</i></GlossaryTerm> . 



**ordinary function** *n.* a <ClLinks  term={"function"}><i>function</i></ClLinks> that is not a <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm>. 



**ordinary lambda list** *n.* the kind of <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> used by <DictionaryLink  term={"lambda"}><b>lambda</b></DictionaryLink>. See <GlossaryTerm styled={true} term={"modified lambda list"}><i>modified lambda list</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"extended lambda list"}><i>extended lambda list</i></GlossaryTerm>. “<DictionaryLink  term={"defun"}><b>defun</b></DictionaryLink> uses an ordinary lambda list.” 







 



 



**otherwise inaccessible part** *n.* (of an <ClLinks  term={"object"}><i>object</i></ClLinks>, *O*<sub>1</sub>) an <ClLinks  term={"object"}><i>object</i></ClLinks>, *O*<sub>2</sub>, which would 



be made <ClLinks  term={"inaccessible"}><i>inaccessible</i></ClLinks> if *O*<sub>1</sub> were made <ClLinks  term={"inaccessible"}><i>inaccessible</i></ClLinks>. (Every <ClLinks  term={"object"}><i>object</i></ClLinks> is an <GlossaryTerm styled={true} term={"otherwise inaccessible part"}><i>otherwise inaccessible part</i></GlossaryTerm> of itself.) 



**output** *adj.* (of a <ClLinks  term={"stream"}><i>stream</i></ClLinks>) supporting output operations (*i.e.*, being a “data sink”). An *output stream* might also be an *input stream*, in which case it is sometimes called a *bidirectional stream*. See the <ClLinks  term={"function"}><i>function</i></ClLinks> **output-stream-p**. 




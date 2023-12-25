---
title: O
sidebar_position: 111
---

**O** 



**object** *n.* 1. any Lisp datum. “The function <ClLinks  term={"cons"}><b>cons</b></ClLinks> creates an object which refers to two other objects.” 2. (immediately following the name of a <ClLinks  term={"type"}><i>type</i></ClLinks>) an <ClLinks  term={"object"}><i>object</i></ClLinks> which is of that <ClLinks  term={"type"}><i>type</i></ClLinks>, used to emphasize that the <ClLinks  term={"object"}><i>object</i></ClLinks> is not just a <ClLinks  term={"name"}><i>name</i></ClLinks> for an object of that <ClLinks  term={"type"}><i>type</i></ClLinks> but really an <ClLinks  term={"element"}><i>element</i></ClLinks> of the <ClLinks  term={"type"}><i>type</i></ClLinks> in cases where <ClLinks  term={"object"}><i>objects</i></ClLinks> of that <ClLinks  term={"type"}><i>type</i></ClLinks> (such as <ClLinks  term={"function"}><b>function</b></ClLinks> or <ClLinks  term={"class"}><b>class</b></ClLinks>) are commonly referred to by <ClLinks  term={"name"}><i>name</i></ClLinks>. “The function <ClLinks  term={"symbol-function"}><b>symbol-function</b></ClLinks> takes a function name and returns a function object.” 



**object-traversing** *adj.* operating in succession on components of an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



“The operators <ClLinks  term={"mapcar"}><b>mapcar</b></ClLinks>, <ClLinks  term={"maphash"}><b>maphash</b></ClLinks>, <ClLinks  term={"with-package-iterator"}><b>with-package-iterator</b></ClLinks> and <ClLinks  term={"count"}><b>count</b></ClLinks> perform 



object-traversing operations.” 



<ClLinks  term={"open"}><b>open</b></ClLinks> *adj.*, *v.t.* (a <ClLinks  term={"file"}><i>file</i></ClLinks>) 1. *v.t.* to create and return a <ClLinks  term={"stream"}><i>stream</i></ClLinks> to the <ClLinks  term={"file"}><i>file</i></ClLinks>. 2. *adj.* (of a <ClLinks  term={"stream"}><i>stream</i></ClLinks>) having been *opened* <sub>1</sub>, but not yet <ClLinks  term={"closed"}><i>closed</i></ClLinks>. 



**operator** *n.* 1. a <ClLinks  term={"function"}><i>function</i></ClLinks>, <ClLinks  term={"macro"}><i>macro</i></ClLinks>, or *special operator* . 2. a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> that names such a <ClLinks  term={"function"}><i>function</i></ClLinks>, <ClLinks  term={"macro"}><i>macro</i></ClLinks>, or *special operator* . 3. (in a <ClLinks  term={"function"}><b>function</b></ClLinks> *special form*) the <ClLinks  term={"cadr"}><i>cadr</i></ClLinks> of the <ClLinks  term={"function"}><b>function</b></ClLinks> *special form*, which might be either an <ClLinks  term={"operator"}><i>operator</i></ClLinks> <sub>2</sub> or a *lambda expression*. 4. (of a *compound form*) the <ClLinks  term={"car"}><i>car</i></ClLinks> of the *compound form*, which might be either an <ClLinks  term={"operator"}><i>operator</i></ClLinks> <sub>2</sub> or a *lambda expression*, and which is never (setf <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>). 



**optimize quality** *n.* one of several aspects of a program that might be optimizable by certain compilers. Since optimizing one such quality might conflict with optimizing another, relative priorities for qualities can be established in an <ClLinks  term={"optimize"}><b>optimize</b></ClLinks> <ClLinks  term={"declaration"}><i>declaration</i></ClLinks>. The *standardized optimize qualities* are compilation-speed (speed of the compilation process), debug (ease of debugging), safety (run-time error checking), space (both code size and run-time space), and speed (of the object code). <ClLinks  term={"implementation"}><i>Implementations</i></ClLinks> may define additional *optimize qualities*. 



**optional parameter** *n.* A <ClLinks  term={"parameter"}><i>parameter</i></ClLinks> for which a corresponding positional <ClLinks  term={"argument"}><i>argument</i></ClLinks> is optional. If the <ClLinks  term={"argument"}><i>argument</i></ClLinks> is not supplied, a default value is used. See also *supplied-p parameter* . 



**ordinary function** *n.* a <ClLinks  term={"function"}><i>function</i></ClLinks> that is not a *generic function*. 



**ordinary lambda list** *n.* the kind of *lambda list* used by <ClLinks  term={"lambda"}><b>lambda</b></ClLinks>. See *modified lambda list* and *extended lambda list*. “<ClLinks  term={"defun"}><b>defun</b></ClLinks> uses an ordinary lambda list.” 







 



 



**otherwise inaccessible part** *n.* (of an <ClLinks  term={"object"}><i>object</i></ClLinks>, *O*<sub>1</sub>) an <ClLinks  term={"object"}><i>object</i></ClLinks>, *O*<sub>2</sub>, which would 



be made <ClLinks  term={"inaccessible"}><i>inaccessible</i></ClLinks> if *O*<sub>1</sub> were made <ClLinks  term={"inaccessible"}><i>inaccessible</i></ClLinks>. (Every <ClLinks  term={"object"}><i>object</i></ClLinks> is an *otherwise inaccessible part* of itself.) 



**output** *adj.* (of a <ClLinks  term={"stream"}><i>stream</i></ClLinks>) supporting output operations (*i.e.*, being a “data sink”). An *output stream* might also be an *input stream*, in which case it is sometimes called a *bidirectional stream*. See the <ClLinks  term={"function"}><i>function</i></ClLinks> **output-stream-p**. 




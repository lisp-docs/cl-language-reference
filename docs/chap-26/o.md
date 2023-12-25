---
title: O
sidebar_position: 111
---

**O** 



**object** *n.* 1. any Lisp datum. “The function <ClLinks styled={true} term={"cons"}><b>cons</b></ClLinks> creates an object which refers to two other objects.” 2. (immediately following the name of a <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>) an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> which is of that <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>, used to emphasize that the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is not just a <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> for an object of that <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> but really an <ClLinks styled={true} term={"element"}><i>element</i></ClLinks> of the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> in cases where <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> of that <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> (such as <ClLinks styled={true} term={"function"}><b>function</b></ClLinks> or <ClLinks styled={true} term={"class"}><b>class</b></ClLinks>) are commonly referred to by <ClLinks styled={true} term={"name"}><i>name</i></ClLinks>. “The function <ClLinks styled={true} term={"symbol-function"}><b>symbol-function</b></ClLinks> takes a function name and returns a function object.” 



**object-traversing** *adj.* operating in succession on components of an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



“The operators <ClLinks styled={true} term={"mapcar"}><b>mapcar</b></ClLinks>, <ClLinks styled={true} term={"maphash"}><b>maphash</b></ClLinks>, <ClLinks styled={true} term={"with-package-iterator"}><b>with-package-iterator</b></ClLinks> and <ClLinks styled={true} term={"count"}><b>count</b></ClLinks> perform 



object-traversing operations.” 



<ClLinks styled={true} term={"open"}><b>open</b></ClLinks> *adj.*, *v.t.* (a <ClLinks styled={true} term={"file"}><i>file</i></ClLinks>) 1. *v.t.* to create and return a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> to the <ClLinks styled={true} term={"file"}><i>file</i></ClLinks>. 2. *adj.* (of a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>) having been *opened* <sub>1</sub>, but not yet <ClLinks styled={true} term={"closed"}><i>closed</i></ClLinks>. 



**operator** *n.* 1. a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>, <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks>, or *special operator* . 2. a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> that names such a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>, <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks>, or *special operator* . 3. (in a <ClLinks styled={true} term={"function"}><b>function</b></ClLinks> *special form*) the <ClLinks styled={true} term={"cadr"}><i>cadr</i></ClLinks> of the <ClLinks styled={true} term={"function"}><b>function</b></ClLinks> *special form*, which might be either an <ClLinks styled={true} term={"operator"}><i>operator</i></ClLinks> <sub>2</sub> or a *lambda expression*. 4. (of a *compound form*) the <ClLinks styled={true} term={"car"}><i>car</i></ClLinks> of the *compound form*, which might be either an <ClLinks styled={true} term={"operator"}><i>operator</i></ClLinks> <sub>2</sub> or a *lambda expression*, and which is never (setf <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>). 



**optimize quality** *n.* one of several aspects of a program that might be optimizable by certain compilers. Since optimizing one such quality might conflict with optimizing another, relative priorities for qualities can be established in an <ClLinks styled={true} term={"optimize"}><b>optimize</b></ClLinks> <ClLinks styled={true} term={"declaration"}><i>declaration</i></ClLinks>. The *standardized optimize qualities* are compilation-speed (speed of the compilation process), debug (ease of debugging), safety (run-time error checking), space (both code size and run-time space), and speed (of the object code). <ClLinks styled={true} term={"implementation"}><i>Implementations</i></ClLinks> may define additional *optimize qualities*. 



**optional parameter** *n.* A <ClLinks styled={true} term={"parameter"}><i>parameter</i></ClLinks> for which a corresponding positional <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks> is optional. If the <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks> is not supplied, a default value is used. See also *supplied-p parameter* . 



**ordinary function** *n.* a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> that is not a *generic function*. 



**ordinary lambda list** *n.* the kind of *lambda list* used by <ClLinks styled={true} term={"lambda"}><b>lambda</b></ClLinks>. See *modified lambda list* and *extended lambda list*. “<ClLinks styled={true} term={"defun"}><b>defun</b></ClLinks> uses an ordinary lambda list.” 







 



 



**otherwise inaccessible part** *n.* (of an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>, *O*<sub>1</sub>) an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>, *O*<sub>2</sub>, which would 



be made <ClLinks styled={true} term={"inaccessible"}><i>inaccessible</i></ClLinks> if *O*<sub>1</sub> were made <ClLinks styled={true} term={"inaccessible"}><i>inaccessible</i></ClLinks>. (Every <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is an *otherwise inaccessible part* of itself.) 



**output** *adj.* (of a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>) supporting output operations (*i.e.*, being a “data sink”). An *output stream* might also be an *input stream*, in which case it is sometimes called a *bidirectional stream*. See the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> **output-stream-p**. 




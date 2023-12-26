---
title: M
sidebar_position: 109
---

**M** 



**macro** *n.* 1. a <GlossaryTerm styled={true} term={"macro form"}><i>macro form</i></GlossaryTerm> 2. a <GlossaryTerm styled={true} term={"macro function"}><i>macro function</i></GlossaryTerm>. 3. a <GlossaryTerm styled={true} term={"macro name"}><i>macro name</i></GlossaryTerm>. 



**macro character** *n.* a <ClLinks  term={"character"}><i>character</i></ClLinks> which, when encountered by the *Lisp reader* in its main dispatch loop, introduces a <GlossaryTerm styled={true} term={"reader macro"}><i>reader macro</i></GlossaryTerm><sub>1</sub>. (<GlossaryTerm styled={true} term={"macro character"}><i>Macro characters</i></GlossaryTerm> have nothing to do with <ClLinks  term={"macro"}><i>macros</i></ClLinks>.) 



**macro expansion** *n.* 1. the process of translating a <GlossaryTerm styled={true} term={"macro form"}><i>macro form</i></GlossaryTerm> into another <ClLinks  term={"form"}><i>form</i></ClLinks>. 2. the <ClLinks  term={"form"}><i>form</i></ClLinks> resulting from this process. 



**macro form** *n.* a <ClLinks  term={"form"}><i>form</i></ClLinks> that stands for another <ClLinks  term={"form"}><i>form</i></ClLinks> (*e.g.*, for the purposes of 



abstraction, information hiding, or syntactic convenience); that is, either a <GlossaryTerm styled={true} term={"compound form"}><i>compound form</i></GlossaryTerm> whose first element is a <GlossaryTerm styled={true} term={"macro name"}><i>macro name</i></GlossaryTerm>, or a <ClLinks  term={"form"}><i>form</i></ClLinks> that is a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> that names a <GlossaryTerm styled={true} term={"symbol macro"}><i>symbol macro</i></GlossaryTerm>. 



**macro function** *n.* a <ClLinks  term={"function"}><i>function</i></ClLinks> of two arguments, a <ClLinks  term={"form"}><i>form</i></ClLinks> and an <ClLinks  term={"environment"}><i>environment</i></ClLinks>, that implements <GlossaryTerm styled={true} term={"macro expansion"}><i>macro expansion</i></GlossaryTerm> by producing a <ClLinks  term={"form"}><i>form</i></ClLinks> to be evaluated in place of the original argument <ClLinks  term={"form"}><i>form</i></ClLinks>. 



**macro lambda list** *n.* an <GlossaryTerm styled={true} term={"extended lambda list"}><i>extended lambda list</i></GlossaryTerm> used in <ClLinks  term={"form"}><i>forms</i></ClLinks> that *establish macro* definitions, such as <ClLinks  term={"defmacro"}><b>defmacro</b></ClLinks> and <ClLinks  term={"macrolet"}><b>macrolet</b></ClLinks>. See Section 3.4.4 (Macro Lambda Lists). 



**macro name** *n.* a <ClLinks  term={"name"}><i>name</i></ClLinks> for which <ClLinks  term={"macro-function"}><b>macro-function</b></ClLinks> returns <ClLinks  term={"true"}><i>true</i></ClLinks> and which when used as the first element of a <GlossaryTerm styled={true} term={"compound form"}><i>compound form</i></GlossaryTerm> identifies that <ClLinks  term={"form"}><i>form</i></ClLinks> as a <GlossaryTerm styled={true} term={"macro form"}><i>macro form</i></GlossaryTerm>. 



**macroexpand hook** *n.* the <ClLinks  term={"function"}><i>function</i></ClLinks> that is the <ClLinks  term={"value"}><i>value</i></ClLinks> of **\*macroexpand-hook\***. 



**mapping** *n.* 1. a type of iteration in which a <ClLinks  term={"function"}><i>function</i></ClLinks> is successively applied to <ClLinks  term={"object"}><i>objects</i></ClLinks> taken from corresponding entries in collections such as *sequences* or <GlossaryTerm styled={true} term={"hash table"}><i>hash tables</i></GlossaryTerm>. 2. *Math.* a relation between two sets in which each element of the first set (the “domain”) is assigned one element of the second set (the “range”). 



**metaclass** *n.* 1. a <ClLinks  term={"class"}><i>class</i></ClLinks> whose instances are *classes*. 2. (of an <ClLinks  term={"object"}><i>object</i></ClLinks>) the <ClLinks  term={"class"}><i>class</i></ClLinks> of the <ClLinks  term={"class"}><i>class</i></ClLinks> of the <ClLinks  term={"object"}><i>object</i></ClLinks>. 



**Metaobject Protocol** *n.* one of many possible descriptions of how a <GlossaryTerm styled={true} term={"conforming implementation"}><i>conforming implementation</i></GlossaryTerm> might implement various aspects of the object system. This description is beyond the scope of this document, and no <GlossaryTerm styled={true} term={"conforming implementation"}><i>conforming implementation</i></GlossaryTerm> is required to adhere to it except as noted explicitly in this specification. Nevertheless, its existence helps to establish normative practice, and implementors with no reason to diverge from it are encouraged to consider making their <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> adhere to it where possible. It is described in detail in *The Art of the Metaobject Protocol*. 







 



 



<ClLinks  term={"method"}><b>method</b></ClLinks> *n.* an <ClLinks  term={"object"}><i>object</i></ClLinks> that is part of a <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> and which provides information about how that <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> should behave when its <ClLinks  term={"argument"}><i>arguments</i></ClLinks> are <ClLinks  term={"object"}><i>objects</i></ClLinks> of certain *classes* or with certain identities. 



**method combination** *n.* 1. generally, the composition of a set of <ClLinks  term={"method"}><i>methods</i></ClLinks> to produce an <GlossaryTerm styled={true} term={"effective method"}><i>effective method</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm>. 2. an object of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"method-combination"}><b>method-combination</b></ClLinks>, which represents the details of how the <GlossaryTerm styled={true} term={"method combination"}><i>method combination</i></GlossaryTerm><sub>1</sub> for one or more specific <GlossaryTerm styled={true} term={"generic function"}><i>generic functions</i></GlossaryTerm> is to be performed. 



**method-defining form** *n.* a <ClLinks  term={"form"}><i>form</i></ClLinks> that defines a <ClLinks  term={"method"}><i>method</i></ClLinks> for a <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm>, whether explicitly or implicitly. See Section 7.6.1 (Introduction to Generic Functions). 



**method-defining operator** *n.* an <ClLinks  term={"operator"}><i>operator</i></ClLinks> corresponding to a <GlossaryTerm styled={true} term={"method-defining form"}><i>method-defining form</i></GlossaryTerm>. See Figure 7–1. 



**minimal compilation** *n.* actions the <ClLinks  term={"compiler"}><i>compiler</i></ClLinks> must take at compile time. See Section 3.2.2 (Compilation Semantics). 



**modified lambda list** *n.* a list resembling an <GlossaryTerm styled={true} term={"ordinary lambda list"}><i>ordinary lambda list</i></GlossaryTerm> in form and 



purpose, but which deviates in syntax or functionality from the definition of an 



<GlossaryTerm styled={true} term={"ordinary lambda list"}><i>ordinary lambda list</i></GlossaryTerm>. See <GlossaryTerm styled={true} term={"ordinary lambda list"}><i>ordinary lambda list</i></GlossaryTerm>. “<ClLinks  term={"deftype"}><b>deftype</b></ClLinks> uses a modified lambda list.” 



**most recent** *adj.* innermost; that is, having been *established* (and not yet 



*disestablished*) more recently than any other of its kind. 



**multiple escape** *n.*, *adj.* 1. *n.* the <GlossaryTerm styled={true} term={"syntax type"}><i>syntax type</i></GlossaryTerm> of a <ClLinks  term={"character"}><i>character</i></ClLinks> that is used in pairs to indicate that the enclosed <ClLinks  term={"character"}><i>characters</i></ClLinks> are to be treated as <ClLinks  term={"alphabetic"}><i>alphabetic</i></ClLinks><sub>2</sub> <ClLinks  term={"character"}><i>characters</i></ClLinks> with their <ClLinks  term={"case"}><i>case</i></ClLinks> preserved. For details, see Section 2.1.4.5 (Multiple Escape Characters). 2. *adj.* (of a <ClLinks  term={"character"}><i>character</i></ClLinks> ) having the *multiple escape syntax type*. 3. *n.* a <GlossaryTerm styled={true} term={"multiple escape"}><i>multiple escape</i></GlossaryTerm><sub>2</sub> <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> . (In the <GlossaryTerm styled={true} term={"standard readtable"}><i>standard readtable</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"vertical-bar"}><i>vertical-bar</i></GlossaryTerm> is a *multiple escape character* .) 



**multiple values** *n.* 1. more than one <ClLinks  term={"value"}><i>value</i></ClLinks>. “The function <ClLinks  term={"truncate"}><b>truncate</b></ClLinks> returns multiple values.” 2. a variable number of <ClLinks  term={"value"}><i>values</i></ClLinks>, possibly including zero or one. “The function <ClLinks  term={"values"}><b>values</b></ClLinks> returns multiple values.” 3. a fixed number of values other than one. “The macro <ClLinks  term={"multiple-value-bind"}><b>multiple-value-bind</b></ClLinks> is among the few operators in Common Lisp which can detect and manipulate multiple values.” 




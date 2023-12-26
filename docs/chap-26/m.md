---
title: M
sidebar_position: 109
---

**M** 



**macro** *n.* 1. a <GlossaryTerm styled={true} term={"macro form"}><i>macro form</i></GlossaryTerm> 2. a <GlossaryTerm styled={true} term={"macro function"}><i>macro function</i></GlossaryTerm>. 3. a <GlossaryTerm styled={true} term={"macro name"}><i>macro name</i></GlossaryTerm>. 



**macro character** *n.* a <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> which, when encountered by the *Lisp reader* in its main dispatch loop, introduces a <GlossaryTerm styled={true} term={"reader macro"}><i>reader macro</i></GlossaryTerm><sub>1</sub>. (<GlossaryTerm styled={true} term={"macro character"}><i>Macro characters</i></GlossaryTerm> have nothing to do with <GlossaryTerm  term={"macro"}><i>macros</i></GlossaryTerm>.) 



**macro expansion** *n.* 1. the process of translating a <GlossaryTerm styled={true} term={"macro form"}><i>macro form</i></GlossaryTerm> into another <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. 2. the <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> resulting from this process. 



**macro form** *n.* a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> that stands for another <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> (*e.g.*, for the purposes of 



abstraction, information hiding, or syntactic convenience); that is, either a <GlossaryTerm styled={true} term={"compound form"}><i>compound form</i></GlossaryTerm> whose first element is a <GlossaryTerm styled={true} term={"macro name"}><i>macro name</i></GlossaryTerm>, or a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> that is a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> that names a <GlossaryTerm styled={true} term={"symbol macro"}><i>symbol macro</i></GlossaryTerm>. 



**macro function** *n.* a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> of two arguments, a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> and an <GlossaryTerm  term={"environment"}><i>environment</i></GlossaryTerm>, that implements <GlossaryTerm styled={true} term={"macro expansion"}><i>macro expansion</i></GlossaryTerm> by producing a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> to be evaluated in place of the original argument <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. 



**macro lambda list** *n.* an <GlossaryTerm styled={true} term={"extended lambda list"}><i>extended lambda list</i></GlossaryTerm> used in <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> that *establish macro* definitions, such as <DictionaryLink  term={"defmacro"}><b>defmacro</b></DictionaryLink> and <DictionaryLink  term={"macrolet"}><b>macrolet</b></DictionaryLink>. See Section 3.4.4 (Macro Lambda Lists). 



**macro name** *n.* a <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> for which <DictionaryLink  term={"macro-function"}><b>macro-function</b></DictionaryLink> returns <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> and which when used as the first element of a <GlossaryTerm styled={true} term={"compound form"}><i>compound form</i></GlossaryTerm> identifies that <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> as a <GlossaryTerm styled={true} term={"macro form"}><i>macro form</i></GlossaryTerm>. 



**macroexpand hook** *n.* the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> that is the <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of **\*macroexpand-hook\***. 



**mapping** *n.* 1. a type of iteration in which a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> is successively applied to <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> taken from corresponding entries in collections such as *sequences* or <GlossaryTerm styled={true} term={"hash table"}><i>hash tables</i></GlossaryTerm>. 2. *Math.* a relation between two sets in which each element of the first set (the “domain”) is assigned one element of the second set (the “range”). 



**metaclass** *n.* 1. a <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> whose instances are *classes*. 2. (of an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>) the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> of the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> of the <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 



**Metaobject Protocol** *n.* one of many possible descriptions of how a <GlossaryTerm styled={true} term={"conforming implementation"}><i>conforming implementation</i></GlossaryTerm> might implement various aspects of the object system. This description is beyond the scope of this document, and no <GlossaryTerm styled={true} term={"conforming implementation"}><i>conforming implementation</i></GlossaryTerm> is required to adhere to it except as noted explicitly in this specification. Nevertheless, its existence helps to establish normative practice, and implementors with no reason to diverge from it are encouraged to consider making their <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm> adhere to it where possible. It is described in detail in *The Art of the Metaobject Protocol*. 







 



 



<DictionaryLink  term={"method"}><b>method</b></DictionaryLink> *n.* an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> that is part of a <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> and which provides information about how that <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> should behave when its <GlossaryTerm  term={"argument"}><i>arguments</i></GlossaryTerm> are <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> of certain *classes* or with certain identities. 



**method combination** *n.* 1. generally, the composition of a set of <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> to produce an <GlossaryTerm styled={true} term={"effective method"}><i>effective method</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm>. 2. an object of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"method-combination"}><b>method-combination</b></DictionaryLink>, which represents the details of how the <GlossaryTerm styled={true} term={"method combination"}><i>method combination</i></GlossaryTerm><sub>1</sub> for one or more specific <GlossaryTerm styled={true} term={"generic function"}><i>generic functions</i></GlossaryTerm> is to be performed. 



**method-defining form** *n.* a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> that defines a <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm>, whether explicitly or implicitly. See Section 7.6.1 (Introduction to Generic Functions). 



**method-defining operator** *n.* an <GlossaryTerm  term={"operator"}><i>operator</i></GlossaryTerm> corresponding to a <GlossaryTerm styled={true} term={"method-defining form"}><i>method-defining form</i></GlossaryTerm>. See Figure 7–1. 



**minimal compilation** *n.* actions the <GlossaryTerm  term={"compiler"}><i>compiler</i></GlossaryTerm> must take at compile time. See Section 3.2.2 (Compilation Semantics). 



**modified lambda list** *n.* a list resembling an <GlossaryTerm styled={true} term={"ordinary lambda list"}><i>ordinary lambda list</i></GlossaryTerm> in form and 



purpose, but which deviates in syntax or functionality from the definition of an 



<GlossaryTerm styled={true} term={"ordinary lambda list"}><i>ordinary lambda list</i></GlossaryTerm>. See <GlossaryTerm styled={true} term={"ordinary lambda list"}><i>ordinary lambda list</i></GlossaryTerm>. “<DictionaryLink  term={"deftype"}><b>deftype</b></DictionaryLink> uses a modified lambda list.” 



**most recent** *adj.* innermost; that is, having been *established* (and not yet 



*disestablished*) more recently than any other of its kind. 



**multiple escape** *n.*, *adj.* 1. *n.* the <GlossaryTerm styled={true} term={"syntax type"}><i>syntax type</i></GlossaryTerm> of a <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> that is used in pairs to indicate that the enclosed <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm> are to be treated as <GlossaryTerm  term={"alphabetic"}><i>alphabetic</i></GlossaryTerm><sub>2</sub> <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm> with their <GlossaryTerm  term={"case"}><i>case</i></GlossaryTerm> preserved. For details, see Section 2.1.4.5 (Multiple Escape Characters). 2. *adj.* (of a <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> ) having the *multiple escape syntax type*. 3. *n.* a <GlossaryTerm styled={true} term={"multiple escape"}><i>multiple escape</i></GlossaryTerm><sub>2</sub> <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> . (In the <GlossaryTerm styled={true} term={"standard readtable"}><i>standard readtable</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"vertical-bar"}><i>vertical-bar</i></GlossaryTerm> is a *multiple escape character* .) 



**multiple values** *n.* 1. more than one <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm>. “The function <DictionaryLink  term={"truncate"}><b>truncate</b></DictionaryLink> returns multiple values.” 2. a variable number of <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm>, possibly including zero or one. “The function <DictionaryLink  term={"values"}><b>values</b></DictionaryLink> returns multiple values.” 3. a fixed number of values other than one. “The macro <DictionaryLink  term={"multiple-value-bind"}><b>multiple-value-bind</b></DictionaryLink> is among the few operators in Common Lisp which can detect and manipulate multiple values.” 




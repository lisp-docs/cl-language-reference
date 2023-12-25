---
title: M
sidebar_position: 109
---

**M** 



**macro** *n.* 1. a *macro form* 2. a *macro function*. 3. a *macro name*. 



**macro character** *n.* a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> which, when encountered by the *Lisp reader* in its main dispatch loop, introduces a *reader macro*<sub>1</sub>. (*Macro characters* have nothing to do with <GlossaryTerm styled={true} term={"macro"}><i>macros</i></GlossaryTerm>.) 



**macro expansion** *n.* 1. the process of translating a *macro form* into another <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 2. the <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> resulting from this process. 



**macro form** *n.* a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> that stands for another <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> (*e.g.*, for the purposes of 



abstraction, information hiding, or syntactic convenience); that is, either a *compound form* whose first element is a *macro name*, or a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> that is a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> that names a *symbol macro*. 



**macro function** *n.* a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of two arguments, a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> and an <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm>, that implements *macro expansion* by producing a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> to be evaluated in place of the original argument <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



**macro lambda list** *n.* an *extended lambda list* used in <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> that *establish macro* definitions, such as <DictionaryLink styled={true} term={"defmacro"}><b>defmacro</b></DictionaryLink> and <DictionaryLink styled={true} term={"macrolet"}><b>macrolet</b></DictionaryLink>. See Section 3.4.4 (Macro Lambda Lists). 



**macro name** *n.* a <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> for which <DictionaryLink styled={true} term={"macro-function"}><b>macro-function</b></DictionaryLink> returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> and which when used as the first element of a *compound form* identifies that <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> as a *macro form*. 



**macroexpand hook** *n.* the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> that is the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of **\*macroexpand-hook\***. 



**mapping** *n.* 1. a type of iteration in which a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> is successively applied to <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> taken from corresponding entries in collections such as *sequences* or *hash tables*. 2. *Math.* a relation between two sets in which each element of the first set (the “domain”) is assigned one element of the second set (the “range”). 



**metaclass** *n.* 1. a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> whose instances are *classes*. 2. (of an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>) the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



**Metaobject Protocol** *n.* one of many possible descriptions of how a *conforming implementation* might implement various aspects of the object system. This description is beyond the scope of this document, and no *conforming implementation* is required to adhere to it except as noted explicitly in this specification. Nevertheless, its existence helps to establish normative practice, and implementors with no reason to diverge from it are encouraged to consider making their <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> adhere to it where possible. It is described in detail in *The Art of the Metaobject Protocol*. 







 



 



<DictionaryLink styled={true} term={"method"}><b>method</b></DictionaryLink> *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that is part of a *generic function* and which provides information about how that *generic function* should behave when its <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> are <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> of certain *classes* or with certain identities. 



**method combination** *n.* 1. generally, the composition of a set of <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> to produce an *effective method* for a *generic function*. 2. an object of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"method-combination"}><b>method-combination</b></DictionaryLink>, which represents the details of how the *method combination*<sub>1</sub> for one or more specific *generic functions* is to be performed. 



**method-defining form** *n.* a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> that defines a <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> for a *generic function*, whether explicitly or implicitly. See Section 7.6.1 (Introduction to Generic Functions). 



**method-defining operator** *n.* an <GlossaryTerm styled={true} term={"operator"}><i>operator</i></GlossaryTerm> corresponding to a *method-defining form*. See Figure 7–1. 



**minimal compilation** *n.* actions the <GlossaryTerm styled={true} term={"compiler"}><i>compiler</i></GlossaryTerm> must take at compile time. See Section 3.2.2 (Compilation Semantics). 



**modified lambda list** *n.* a list resembling an *ordinary lambda list* in form and 



purpose, but which deviates in syntax or functionality from the definition of an 



*ordinary lambda list*. See *ordinary lambda list*. “<DictionaryLink styled={true} term={"deftype"}><b>deftype</b></DictionaryLink> uses a modified lambda list.” 



**most recent** *adj.* innermost; that is, having been *established* (and not yet 



*disestablished*) more recently than any other of its kind. 



**multiple escape** *n.*, *adj.* 1. *n.* the *syntax type* of a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> that is used in pairs to indicate that the enclosed <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> are to be treated as <GlossaryTerm styled={true} term={"alphabetic"}><i>alphabetic</i></GlossaryTerm><sub>2</sub> <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> with their <GlossaryTerm styled={true} term={"case"}><i>case</i></GlossaryTerm> preserved. For details, see Section 2.1.4.5 (Multiple Escape Characters). 2. *adj.* (of a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> ) having the *multiple escape syntax type*. 3. *n.* a *multiple escape*<sub>2</sub> *character* . (In the *standard readtable*, *vertical-bar* is a *multiple escape character* .) 



**multiple values** *n.* 1. more than one <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm>. “The function <DictionaryLink styled={true} term={"truncate"}><b>truncate</b></DictionaryLink> returns multiple values.” 2. a variable number of <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm>, possibly including zero or one. “The function <DictionaryLink styled={true} term={"values"}><b>values</b></DictionaryLink> returns multiple values.” 3. a fixed number of values other than one. “The macro <DictionaryLink styled={true} term={"multiple-value-bind"}><b>multiple-value-bind</b></DictionaryLink> is among the few operators in Common Lisp which can detect and manipulate multiple values.” 




---
title: M
sidebar_position: 109
---

**M** 



**macro** *n.* 1. a *macro form* 2. a *macro function*. 3. a *macro name*. 



**macro character** *n.* a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> which, when encountered by the *Lisp reader* in its main dispatch loop, introduces a *reader macro*<sub>1</sub>. (*Macro characters* have nothing to do with <ClLinks styled={true} term={"macro"}><i>macros</i></ClLinks>.) 



**macro expansion** *n.* 1. the process of translating a *macro form* into another <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. 2. the <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> resulting from this process. 



**macro form** *n.* a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> that stands for another <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> (*e.g.*, for the purposes of 



abstraction, information hiding, or syntactic convenience); that is, either a *compound form* whose first element is a *macro name*, or a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> that is a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> that names a *symbol macro*. 



**macro function** *n.* a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of two arguments, a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> and an <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks>, that implements *macro expansion* by producing a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> to be evaluated in place of the original argument <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. 



**macro lambda list** *n.* an *extended lambda list* used in <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> that *establish macro* definitions, such as <ClLinks styled={true} term={"defmacro"}><b>defmacro</b></ClLinks> and <ClLinks styled={true} term={"macrolet"}><b>macrolet</b></ClLinks>. See Section 3.4.4 (Macro Lambda Lists). 



**macro name** *n.* a <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> for which <ClLinks styled={true} term={"macro-function"}><b>macro-function</b></ClLinks> returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> and which when used as the first element of a *compound form* identifies that <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> as a *macro form*. 



**macroexpand hook** *n.* the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> that is the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of **\*macroexpand-hook\***. 



**mapping** *n.* 1. a type of iteration in which a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> is successively applied to <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> taken from corresponding entries in collections such as *sequences* or *hash tables*. 2. *Math.* a relation between two sets in which each element of the first set (the “domain”) is assigned one element of the second set (the “range”). 



**metaclass** *n.* 1. a <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> whose instances are *classes*. 2. (of an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>) the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> of the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> of the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



**Metaobject Protocol** *n.* one of many possible descriptions of how a *conforming implementation* might implement various aspects of the object system. This description is beyond the scope of this document, and no *conforming implementation* is required to adhere to it except as noted explicitly in this specification. Nevertheless, its existence helps to establish normative practice, and implementors with no reason to diverge from it are encouraged to consider making their <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> adhere to it where possible. It is described in detail in *The Art of the Metaobject Protocol*. 







 



 



<ClLinks styled={true} term={"method"}><b>method</b></ClLinks> *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that is part of a *generic function* and which provides information about how that *generic function* should behave when its <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> are <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> of certain *classes* or with certain identities. 



**method combination** *n.* 1. generally, the composition of a set of <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> to produce an *effective method* for a *generic function*. 2. an object of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"method-combination"}><b>method-combination</b></ClLinks>, which represents the details of how the *method combination*<sub>1</sub> for one or more specific *generic functions* is to be performed. 



**method-defining form** *n.* a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> that defines a <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> for a *generic function*, whether explicitly or implicitly. See Section 7.6.1 (Introduction to Generic Functions). 



**method-defining operator** *n.* an <ClLinks styled={true} term={"operator"}><i>operator</i></ClLinks> corresponding to a *method-defining form*. See Figure 7–1. 



**minimal compilation** *n.* actions the <ClLinks styled={true} term={"compiler"}><i>compiler</i></ClLinks> must take at compile time. See Section 3.2.2 (Compilation Semantics). 



**modified lambda list** *n.* a list resembling an *ordinary lambda list* in form and 



purpose, but which deviates in syntax or functionality from the definition of an 



*ordinary lambda list*. See *ordinary lambda list*. “<ClLinks styled={true} term={"deftype"}><b>deftype</b></ClLinks> uses a modified lambda list.” 



**most recent** *adj.* innermost; that is, having been *established* (and not yet 



*disestablished*) more recently than any other of its kind. 



**multiple escape** *n.*, *adj.* 1. *n.* the *syntax type* of a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> that is used in pairs to indicate that the enclosed <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks> are to be treated as <ClLinks styled={true} term={"alphabetic"}><i>alphabetic</i></ClLinks><sub>2</sub> <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks> with their <ClLinks styled={true} term={"case"}><i>case</i></ClLinks> preserved. For details, see Section 2.1.4.5 (Multiple Escape Characters). 2. *adj.* (of a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> ) having the *multiple escape syntax type*. 3. *n.* a *multiple escape*<sub>2</sub> *character* . (In the *standard readtable*, *vertical-bar* is a *multiple escape character* .) 



**multiple values** *n.* 1. more than one <ClLinks styled={true} term={"value"}><i>value</i></ClLinks>. “The function <ClLinks styled={true} term={"truncate"}><b>truncate</b></ClLinks> returns multiple values.” 2. a variable number of <ClLinks styled={true} term={"value"}><i>values</i></ClLinks>, possibly including zero or one. “The function <ClLinks styled={true} term={"values"}><b>values</b></ClLinks> returns multiple values.” 3. a fixed number of values other than one. “The macro <ClLinks styled={true} term={"multiple-value-bind"}><b>multiple-value-bind</b></ClLinks> is among the few operators in Common Lisp which can detect and manipulate multiple values.” 




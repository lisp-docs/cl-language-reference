---
title: M
sidebar_position: 109
---

**M** 



**macro** *n.* 1. a *macro form* 2. a *macro function*. 3. a *macro name*. 



**macro character** *n.* a <ClLinks  term={"character"}><i>character</i></ClLinks> which, when encountered by the *Lisp reader* in its main dispatch loop, introduces a *reader macro*<sub>1</sub>. (*Macro characters* have nothing to do with <ClLinks  term={"macro"}><i>macros</i></ClLinks>.) 



**macro expansion** *n.* 1. the process of translating a *macro form* into another <ClLinks  term={"form"}><i>form</i></ClLinks>. 2. the <ClLinks  term={"form"}><i>form</i></ClLinks> resulting from this process. 



**macro form** *n.* a <ClLinks  term={"form"}><i>form</i></ClLinks> that stands for another <ClLinks  term={"form"}><i>form</i></ClLinks> (*e.g.*, for the purposes of 



abstraction, information hiding, or syntactic convenience); that is, either a *compound form* whose first element is a *macro name*, or a <ClLinks  term={"form"}><i>form</i></ClLinks> that is a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> that names a *symbol macro*. 



**macro function** *n.* a <ClLinks  term={"function"}><i>function</i></ClLinks> of two arguments, a <ClLinks  term={"form"}><i>form</i></ClLinks> and an <ClLinks  term={"environment"}><i>environment</i></ClLinks>, that implements *macro expansion* by producing a <ClLinks  term={"form"}><i>form</i></ClLinks> to be evaluated in place of the original argument <ClLinks  term={"form"}><i>form</i></ClLinks>. 



**macro lambda list** *n.* an *extended lambda list* used in <ClLinks  term={"form"}><i>forms</i></ClLinks> that *establish macro* definitions, such as <ClLinks  term={"defmacro"}><b>defmacro</b></ClLinks> and <ClLinks  term={"macrolet"}><b>macrolet</b></ClLinks>. See Section 3.4.4 (Macro Lambda Lists). 



**macro name** *n.* a <ClLinks  term={"name"}><i>name</i></ClLinks> for which <ClLinks  term={"macro-function"}><b>macro-function</b></ClLinks> returns <ClLinks  term={"true"}><i>true</i></ClLinks> and which when used as the first element of a *compound form* identifies that <ClLinks  term={"form"}><i>form</i></ClLinks> as a *macro form*. 



**macroexpand hook** *n.* the <ClLinks  term={"function"}><i>function</i></ClLinks> that is the <ClLinks  term={"value"}><i>value</i></ClLinks> of **\*macroexpand-hook\***. 



**mapping** *n.* 1. a type of iteration in which a <ClLinks  term={"function"}><i>function</i></ClLinks> is successively applied to <ClLinks  term={"object"}><i>objects</i></ClLinks> taken from corresponding entries in collections such as *sequences* or *hash tables*. 2. *Math.* a relation between two sets in which each element of the first set (the “domain”) is assigned one element of the second set (the “range”). 



**metaclass** *n.* 1. a <ClLinks  term={"class"}><i>class</i></ClLinks> whose instances are *classes*. 2. (of an <ClLinks  term={"object"}><i>object</i></ClLinks>) the <ClLinks  term={"class"}><i>class</i></ClLinks> of the <ClLinks  term={"class"}><i>class</i></ClLinks> of the <ClLinks  term={"object"}><i>object</i></ClLinks>. 



**Metaobject Protocol** *n.* one of many possible descriptions of how a *conforming implementation* might implement various aspects of the object system. This description is beyond the scope of this document, and no *conforming implementation* is required to adhere to it except as noted explicitly in this specification. Nevertheless, its existence helps to establish normative practice, and implementors with no reason to diverge from it are encouraged to consider making their <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> adhere to it where possible. It is described in detail in *The Art of the Metaobject Protocol*. 







 



 



<ClLinks  term={"method"}><b>method</b></ClLinks> *n.* an <ClLinks  term={"object"}><i>object</i></ClLinks> that is part of a *generic function* and which provides information about how that *generic function* should behave when its <ClLinks  term={"argument"}><i>arguments</i></ClLinks> are <ClLinks  term={"object"}><i>objects</i></ClLinks> of certain *classes* or with certain identities. 



**method combination** *n.* 1. generally, the composition of a set of <ClLinks  term={"method"}><i>methods</i></ClLinks> to produce an *effective method* for a *generic function*. 2. an object of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"method-combination"}><b>method-combination</b></ClLinks>, which represents the details of how the *method combination*<sub>1</sub> for one or more specific *generic functions* is to be performed. 



**method-defining form** *n.* a <ClLinks  term={"form"}><i>form</i></ClLinks> that defines a <ClLinks  term={"method"}><i>method</i></ClLinks> for a *generic function*, whether explicitly or implicitly. See Section 7.6.1 (Introduction to Generic Functions). 



**method-defining operator** *n.* an <ClLinks  term={"operator"}><i>operator</i></ClLinks> corresponding to a *method-defining form*. See Figure 7–1. 



**minimal compilation** *n.* actions the <ClLinks  term={"compiler"}><i>compiler</i></ClLinks> must take at compile time. See Section 3.2.2 (Compilation Semantics). 



**modified lambda list** *n.* a list resembling an *ordinary lambda list* in form and 



purpose, but which deviates in syntax or functionality from the definition of an 



*ordinary lambda list*. See *ordinary lambda list*. “<ClLinks  term={"deftype"}><b>deftype</b></ClLinks> uses a modified lambda list.” 



**most recent** *adj.* innermost; that is, having been *established* (and not yet 



*disestablished*) more recently than any other of its kind. 



**multiple escape** *n.*, *adj.* 1. *n.* the *syntax type* of a <ClLinks  term={"character"}><i>character</i></ClLinks> that is used in pairs to indicate that the enclosed <ClLinks  term={"character"}><i>characters</i></ClLinks> are to be treated as <ClLinks  term={"alphabetic"}><i>alphabetic</i></ClLinks><sub>2</sub> <ClLinks  term={"character"}><i>characters</i></ClLinks> with their <ClLinks  term={"case"}><i>case</i></ClLinks> preserved. For details, see Section 2.1.4.5 (Multiple Escape Characters). 2. *adj.* (of a <ClLinks  term={"character"}><i>character</i></ClLinks> ) having the *multiple escape syntax type*. 3. *n.* a *multiple escape*<sub>2</sub> *character* . (In the *standard readtable*, *vertical-bar* is a *multiple escape character* .) 



**multiple values** *n.* 1. more than one <ClLinks  term={"value"}><i>value</i></ClLinks>. “The function <ClLinks  term={"truncate"}><b>truncate</b></ClLinks> returns multiple values.” 2. a variable number of <ClLinks  term={"value"}><i>values</i></ClLinks>, possibly including zero or one. “The function <ClLinks  term={"values"}><b>values</b></ClLinks> returns multiple values.” 3. a fixed number of values other than one. “The macro <ClLinks  term={"multiple-value-bind"}><b>multiple-value-bind</b></ClLinks> is among the few operators in Common Lisp which can detect and manipulate multiple values.” 




---
title: G
sidebar_position: 103
---

**G** 



**general** *adj.* (of an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>) having *element type* <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink>, and consequently able to have any <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> as an <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm>. 



**generalized boolean** *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> used as a truth value, where the symbol <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> 



represents <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm> and all other <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> represent <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>. See <GlossaryTerm styled={true} term={"boolean"}><i>boolean</i></GlossaryTerm>. 



**generalized instance** *n.* (of a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>) an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> of which is either that <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> itself, or some subclass of that <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>. (Because of the correspondence between types and classes, the term “generalized instance of *X*” implies “object of type *X*” and in cases where *X* is a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> (or *class name*) the reverse is also true. The former terminology emphasizes the view of *X* as a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> while the latter emphasizes the view of *X* as a *type specifier* .) 



**generalized reference** *n.* a reference to a location storing an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> as if to a 



<GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm>. (Such a reference can be either to <GlossaryTerm styled={true} term={"read"}><i>read</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"write"}><i>write</i></GlossaryTerm> the location.) See Section 5.1 (Generalized Reference). See also <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>. 



**generalized synonym stream** *n.* (with a *synonym stream symbol*) 1. (to a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>) a *synonym stream* to the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>, or a *composite stream* which has as a target a 



*generalized synonym stream* to the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. 2. (to a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>) a *synonym stream* to the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>, or a *composite stream* which has as a target a *generalized synonym stream* to the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. 



**generic function** *n.* a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> whose behavior depends on the *classes* or identities of the arguments supplied to it and whose parts include, among other things, a set of <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm>, a *lambda list*, and a *method combination* type. 



**generic function lambda list** *n.* A *lambda list* that is used to describe data flow into a *generic function*. See Section 3.4.2 (Generic Function Lambda Lists). 



<DictionaryLink styled={true} term={"gensym"}><b>gensym</b></DictionaryLink> *n. Trad.* an *uninterned symbol*. See the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"gensym"}><b>gensym</b></DictionaryLink>. 







 



 



**global declaration** *n.* a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> that makes certain kinds of information about code globally available; that is, a <DictionaryLink styled={true} term={"proclaim"}><b>proclaim</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> or a <DictionaryLink styled={true} term={"declaim"}><b>declaim</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



**global environment** *n.* that part of an <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm> that contains <GlossaryTerm styled={true} term={"binding"}><i>bindings</i></GlossaryTerm> with *indefinite scope* and *indefinite extent*. 



**global variable** *n.* a *dynamic variable* or a *constant variable*. 



**glyph** *n.* a visual representation. “Graphic characters have associated glyphs.” 



<DictionaryLink styled={true} term={"go"}><b>go</b></DictionaryLink> *v.* to transfer control to a *go point*. See the *special operator* <DictionaryLink styled={true} term={"go"}><b>go</b></DictionaryLink>. 



**go point** one of possibly several *exit points* that are *established* by <DictionaryLink styled={true} term={"tagbody"}><b>tagbody</b></DictionaryLink> (or other abstractions, such as **prog**, which are built from <DictionaryLink styled={true} term={"tagbody"}><b>tagbody</b></DictionaryLink>). 



**go tag** *n.* the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> or *integer* that, within the *lexical scope* of a <DictionaryLink styled={true} term={"tagbody"}><b>tagbody</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>, names an *exit point established* by that <DictionaryLink styled={true} term={"tagbody"}><b>tagbody</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



**graphic** *adj.* (of a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> ) being a “printing” or “displayable” <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> that has a standard visual representation as a single <GlossaryTerm styled={true} term={"glyph"}><i>glyph</i></GlossaryTerm>, such as A or \* or =. <GlossaryTerm styled={true} term={"space"}><i>Space</i></GlossaryTerm> is defined to be <GlossaryTerm styled={true} term={"graphic"}><i>graphic</i></GlossaryTerm>. Of the *standard characters*, all but <GlossaryTerm styled={true} term={"newline"}><i>newline</i></GlossaryTerm> are <GlossaryTerm styled={true} term={"graphic"}><i>graphic</i></GlossaryTerm>. See <GlossaryTerm styled={true} term={"non-graphic"}><i>non-graphic</i></GlossaryTerm>. 




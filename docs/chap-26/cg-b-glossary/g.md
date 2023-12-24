---
title: G
sidebar_position: 103
---

**G** 



**general** *adj.* (of an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>) having *element type* <ClLinks styled={true} term={"t"}><b>t</b></ClLinks>, and consequently able to have any <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> as an <ClLinks styled={true} term={"element"}><i>element</i></ClLinks>. 



**generalized boolean** *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> used as a truth value, where the symbol <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> 



represents <ClLinks styled={true} term={"false"}><i>false</i></ClLinks> and all other <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> represent <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>. See <ClLinks styled={true} term={"boolean"}><i>boolean</i></ClLinks>. 



**generalized instance** *n.* (of a <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>) an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> of which is either that <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> itself, or some subclass of that <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>. (Because of the correspondence between types and classes, the term “generalized instance of *X*” implies “object of type *X*” and in cases where *X* is a <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> (or *class name*) the reverse is also true. The former terminology emphasizes the view of *X* as a <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> while the latter emphasizes the view of *X* as a *type specifier* .) 



**generalized reference** *n.* a reference to a location storing an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> as if to a 



<ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks>. (Such a reference can be either to <ClLinks styled={true} term={"read"}><i>read</i></ClLinks> or <ClLinks styled={true} term={"write"}><i>write</i></ClLinks> the location.) See Section 5.1 (Generalized Reference). See also <ClLinks styled={true} term={"place"}><i>place</i></ClLinks>. 



**generalized synonym stream** *n.* (with a *synonym stream symbol*) 1. (to a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>) a *synonym stream* to the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>, or a *composite stream* which has as a target a 



*generalized synonym stream* to the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>. 2. (to a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>) a *synonym stream* to the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>, or a *composite stream* which has as a target a *generalized synonym stream* to the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. 



**generic function** *n.* a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> whose behavior depends on the *classes* or identities of the arguments supplied to it and whose parts include, among other things, a set of <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks>, a *lambda list*, and a *method combination* type. 



**generic function lambda list** *n.* A *lambda list* that is used to describe data flow into a *generic function*. See Section 3.4.2 (Generic Function Lambda Lists). 



<ClLinks styled={true} term={"gensym"}><b>gensym</b></ClLinks> *n. Trad.* an *uninterned symbol*. See the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"gensym"}><b>gensym</b></ClLinks>. 







 



 



**global declaration** *n.* a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> that makes certain kinds of information about code globally available; that is, a <ClLinks styled={true} term={"proclaim"}><b>proclaim</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> or a <ClLinks styled={true} term={"declaim"}><b>declaim</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. 



**global environment** *n.* that part of an <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks> that contains <ClLinks styled={true} term={"binding"}><i>bindings</i></ClLinks> with *indefinite scope* and *indefinite extent*. 



**global variable** *n.* a *dynamic variable* or a *constant variable*. 



**glyph** *n.* a visual representation. “Graphic characters have associated glyphs.” 



<ClLinks styled={true} term={"go"}><b>go</b></ClLinks> *v.* to transfer control to a *go point*. See the *special operator* <ClLinks styled={true} term={"go"}><b>go</b></ClLinks>. 



**go point** one of possibly several *exit points* that are *established* by <ClLinks styled={true} term={"tagbody"}><b>tagbody</b></ClLinks> (or other abstractions, such as **prog**, which are built from <ClLinks styled={true} term={"tagbody"}><b>tagbody</b></ClLinks>). 



**go tag** *n.* the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> or *integer* that, within the *lexical scope* of a <ClLinks styled={true} term={"tagbody"}><b>tagbody</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>, names an *exit point established* by that <ClLinks styled={true} term={"tagbody"}><b>tagbody</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. 



**graphic** *adj.* (of a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> ) being a “printing” or “displayable” <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> that has a standard visual representation as a single <ClLinks styled={true} term={"glyph"}><i>glyph</i></ClLinks>, such as A or \* or =. <ClLinks styled={true} term={"space"}><i>Space</i></ClLinks> is defined to be <ClLinks styled={true} term={"graphic"}><i>graphic</i></ClLinks>. Of the *standard characters*, all but <ClLinks styled={true} term={"newline"}><i>newline</i></ClLinks> are <ClLinks styled={true} term={"graphic"}><i>graphic</i></ClLinks>. See <ClLinks styled={true} term={"non-graphic"}><i>non-graphic</i></ClLinks>. 




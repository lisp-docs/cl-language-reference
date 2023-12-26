---
title: G
sidebar_position: 103
---

**G** 



**general** *adj.* (of an <ClLinks  term={"array"}><i>array</i></ClLinks>) having <GlossaryTerm styled={true} term={"element type"}><i>element type</i></GlossaryTerm> <ClLinks  term={"t"}><b>t</b></ClLinks>, and consequently able to have any <ClLinks  term={"object"}><i>object</i></ClLinks> as an <ClLinks  term={"element"}><i>element</i></ClLinks>. 



**generalized boolean** *n.* an <ClLinks  term={"object"}><i>object</i></ClLinks> used as a truth value, where the symbol <ClLinks  term={"nil"}><b>nil</b></ClLinks> 



represents <ClLinks  term={"false"}><i>false</i></ClLinks> and all other <ClLinks  term={"object"}><i>objects</i></ClLinks> represent <ClLinks  term={"true"}><i>true</i></ClLinks>. See <ClLinks  term={"boolean"}><i>boolean</i></ClLinks>. 



**generalized instance** *n.* (of a <ClLinks  term={"class"}><i>class</i></ClLinks>) an <ClLinks  term={"object"}><i>object</i></ClLinks> the <ClLinks  term={"class"}><i>class</i></ClLinks> of which is either that <ClLinks  term={"class"}><i>class</i></ClLinks> itself, or some subclass of that <ClLinks  term={"class"}><i>class</i></ClLinks>. (Because of the correspondence between types and classes, the term “generalized instance of *X*” implies “object of type *X*” and in cases where *X* is a <ClLinks  term={"class"}><i>class</i></ClLinks> (or *class name*) the reverse is also true. The former terminology emphasizes the view of *X* as a <ClLinks  term={"class"}><i>class</i></ClLinks> while the latter emphasizes the view of *X* as a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> .) 



**generalized reference** *n.* a reference to a location storing an <ClLinks  term={"object"}><i>object</i></ClLinks> as if to a 



<ClLinks  term={"variable"}><i>variable</i></ClLinks>. (Such a reference can be either to <ClLinks  term={"read"}><i>read</i></ClLinks> or <ClLinks  term={"write"}><i>write</i></ClLinks> the location.) See Section 5.1 (Generalized Reference). See also <ClLinks  term={"place"}><i>place</i></ClLinks>. 



**generalized synonym stream** *n.* (with a <GlossaryTerm styled={true} term={"synonym stream symbol"}><i>synonym stream symbol</i></GlossaryTerm>) 1. (to a <ClLinks  term={"stream"}><i>stream</i></ClLinks>) a <GlossaryTerm styled={true} term={"synonym stream"}><i>synonym stream</i></GlossaryTerm> to the <ClLinks  term={"stream"}><i>stream</i></ClLinks>, or a <GlossaryTerm styled={true} term={"composite stream"}><i>composite stream</i></GlossaryTerm> which has as a target a 



<GlossaryTerm styled={true} term={"generalized synonym stream"}><i>generalized synonym stream</i></GlossaryTerm> to the <ClLinks  term={"stream"}><i>stream</i></ClLinks>. 2. (to a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>) a <GlossaryTerm styled={true} term={"synonym stream"}><i>synonym stream</i></GlossaryTerm> to the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>, or a <GlossaryTerm styled={true} term={"composite stream"}><i>composite stream</i></GlossaryTerm> which has as a target a <GlossaryTerm styled={true} term={"generalized synonym stream"}><i>generalized synonym stream</i></GlossaryTerm> to the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. 



**generic function** *n.* a <ClLinks  term={"function"}><i>function</i></ClLinks> whose behavior depends on the *classes* or identities of the arguments supplied to it and whose parts include, among other things, a set of <ClLinks  term={"method"}><i>methods</i></ClLinks>, a <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm>, and a <GlossaryTerm styled={true} term={"method combination"}><i>method combination</i></GlossaryTerm> type. 



**generic function lambda list** *n.* A <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> that is used to describe data flow into a <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm>. See Section 3.4.2 (Generic Function Lambda Lists). 



<ClLinks  term={"gensym"}><b>gensym</b></ClLinks> *n. Trad.* an *uninterned symbol*. See the <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"gensym"}><b>gensym</b></ClLinks>. 







 



 



**global declaration** *n.* a <ClLinks  term={"form"}><i>form</i></ClLinks> that makes certain kinds of information about code globally available; that is, a <ClLinks  term={"proclaim"}><b>proclaim</b></ClLinks> <ClLinks  term={"form"}><i>form</i></ClLinks> or a <ClLinks  term={"declaim"}><b>declaim</b></ClLinks> <ClLinks  term={"form"}><i>form</i></ClLinks>. 



**global environment** *n.* that part of an <ClLinks  term={"environment"}><i>environment</i></ClLinks> that contains <ClLinks  term={"binding"}><i>bindings</i></ClLinks> with <GlossaryTerm styled={true} term={"indefinite scope"}><i>indefinite scope</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"indefinite extent"}><i>indefinite extent</i></GlossaryTerm>. 



**global variable** *n.* a <GlossaryTerm styled={true} term={"dynamic variable"}><i>dynamic variable</i></GlossaryTerm> or a <GlossaryTerm styled={true} term={"constant variable"}><i>constant variable</i></GlossaryTerm>. 



**glyph** *n.* a visual representation. “Graphic characters have associated glyphs.” 



<ClLinks  term={"go"}><b>go</b></ClLinks> *v.* to transfer control to a <GlossaryTerm styled={true} term={"go point"}><i>go point</i></GlossaryTerm>. See the <GlossaryTerm styled={true} term={"special operator"}><i>special operator</i></GlossaryTerm> <ClLinks  term={"go"}><b>go</b></ClLinks>. 



**go point** one of possibly several <GlossaryTerm styled={true} term={"exit point"}><i>exit points</i></GlossaryTerm> that are *established* by <ClLinks  term={"tagbody"}><b>tagbody</b></ClLinks> (or other abstractions, such as **prog**, which are built from <ClLinks  term={"tagbody"}><b>tagbody</b></ClLinks>). 



**go tag** *n.* the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> or *integer* that, within the <GlossaryTerm styled={true} term={"lexical scope"}><i>lexical scope</i></GlossaryTerm> of a <ClLinks  term={"tagbody"}><b>tagbody</b></ClLinks> <ClLinks  term={"form"}><i>form</i></ClLinks>, names an *exit point established* by that <ClLinks  term={"tagbody"}><b>tagbody</b></ClLinks> <ClLinks  term={"form"}><i>form</i></ClLinks>. 



**graphic** *adj.* (of a <ClLinks  term={"character"}><i>character</i></ClLinks> ) being a “printing” or “displayable” <ClLinks  term={"character"}><i>character</i></ClLinks> that has a standard visual representation as a single <ClLinks  term={"glyph"}><i>glyph</i></ClLinks>, such as A or \* or =. <ClLinks  term={"space"}><i>Space</i></ClLinks> is defined to be <ClLinks  term={"graphic"}><i>graphic</i></ClLinks>. Of the <GlossaryTerm styled={true} term={"standard character"}><i>standard characters</i></GlossaryTerm>, all but <ClLinks  term={"newline"}><i>newline</i></ClLinks> are <ClLinks  term={"graphic"}><i>graphic</i></ClLinks>. See <ClLinks  term={"non-graphic"}><i>non-graphic</i></ClLinks>. 




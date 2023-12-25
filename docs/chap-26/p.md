---
title: P
sidebar_position: 112
---

**P** 



<ClLinks styled={true} term={"package"}><b>package</b></ClLinks> *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"package"}><b>package</b></ClLinks>. 



**package cell** *n. Trad.* (of a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>) The <ClLinks styled={true} term={"place"}><i>place</i></ClLinks> in a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> that holds one of possibly several <ClLinks styled={true} term={"package"}><i>packages</i></ClLinks> in which the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is <ClLinks styled={true} term={"interned"}><i>interned</i></ClLinks>, called the *home package*, or which holds <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> if no such <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> exists or is known. See the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"symbol-package"}><b>symbol-package</b></ClLinks>. 



**package designator** *n.* a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>; that is, an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that denotes a <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> and that is one of: a *string designator* (denoting the <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> that has the <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> that it designates as its <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> or as one of its <ClLinks styled={true} term={"nickname"}><i>nicknames</i></ClLinks>), or a <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> (denoting itself). 



**package marker** *n.* a character which is used in the textual notation for a symbol to separate the package name from the symbol name, and which is <ClLinks styled={true} term={"colon"}><i>colon</i></ClLinks> in the *standard readtable*. See Section 2.1 (Character Syntax). 



**package prefix** *n.* a notation preceding the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> of a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> in text that is processed by the *Lisp reader* , which uses a *package name* followed by one or more *package markers*, and which indicates that the symbol is looked up in the indicated <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. 



**package registry** *n.* A mapping of <ClLinks styled={true} term={"name"}><i>names</i></ClLinks> to *package objects*. It is possible for there to be a *package object* which is not in this mapping; such a <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> is called an *unregistered package*. *Operators* such as <ClLinks styled={true} term={"find-package"}><b>find-package</b></ClLinks> consult this mapping in order to find a <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> from its <ClLinks styled={true} term={"name"}><i>name</i></ClLinks>. <ClLinks styled={true} term={"operator"}><i>Operators</i></ClLinks> such as <ClLinks styled={true} term={"do-all-symbols"}><b>do-all-symbols</b></ClLinks>, <ClLinks styled={true} term={"find-all-symbols"}><b>find-all-symbols</b></ClLinks>, and <ClLinks styled={true} term={"list-all-packages"}><b>list-all-packages</b></ClLinks> operate only on <ClLinks styled={true} term={"package"}><i>packages</i></ClLinks> that exist in the *package registry*. 



**pairwise** *adv.* (of an adjective on a set) applying individually to all possible pairings of elements of the set. “The types *A*, *B*, and *C* are pairwise disjoint if *A* and *B* are disjoint, *B* and *C* are disjoint, and *A* and *C* are disjoint.” 



**parallel** *adj. Trad.* (of <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> or *assignment*) done in the style of <ClLinks styled={true} term={"psetq"}><b>psetq</b></ClLinks>, <ClLinks styled={true} term={"let"}><b>let</b></ClLinks>, or <ClLinks styled={true} term={"do"}><b>do</b></ClLinks>; that is, first evaluating all of the <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> that produce <ClLinks styled={true} term={"value"}><i>values</i></ClLinks>, and only then *assigning* or <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> the <ClLinks styled={true} term={"variable"}><i>variables</i></ClLinks> (or <ClLinks styled={true} term={"place"}><i>places</i></ClLinks>). Note that this does not imply traditional 



computational “parallelism” since the <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> that produce <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> are evaluated 



<ClLinks styled={true} term={"sequentially"}><i>sequentially</i></ClLinks>. See <ClLinks styled={true} term={"sequential"}><i>sequential</i></ClLinks>. 







 



 



**parameter** *n.* 1. (of a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>) a <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks> in the definition of a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> which takes on the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of a corresponding <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks> (or of a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of corresponding arguments) to that <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> when it is called, or which in some cases is given a default value because there is no corresponding <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks>. 2. (of a *format directive*) an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> received as 



data flow by a *format directive* due to a prefix notation within the *format string* at the *format directive*’s point of use. See Section 22.3 (Formatted Output). “In "&#126;3,’0D", the number 3 and the character #\0 are parameters to the &#126;D format directive.” 



**parameter specializer** *n.* 1. (of a <ClLinks styled={true} term={"method"}><i>method</i></ClLinks>) an <ClLinks styled={true} term={"expression"}><i>expression</i></ClLinks> which constrains the 



<ClLinks styled={true} term={"method"}><i>method</i></ClLinks> to be applicable only to <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks> sequences in which the corresponding 



<ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks> matches the *parameter specializer* . 2. a <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>, or a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> (eql <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>). 



**parameter specializer name** *n.* 1. (of a <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> definition) an expression used in code to name a *parameter specializer* . See Section 7.6.2 (Introduction to Methods). 2. a <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>, a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> naming a <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>, or a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> (eql <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>). 



<ClLinks styled={true} term={"pathname"}><b>pathname</b></ClLinks> *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"pathname"}><b>pathname</b></ClLinks>, which is a structured representation of the name of a <ClLinks styled={true} term={"file"}><i>file</i></ClLinks>. A <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> has six components: a “host,” a “device,” a “directory,” a “name,” a “type,” and a “version.” 



**pathname designator** *n.* a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks>; that is, an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that denotes a <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> and that is one of: a *pathname namestring* (denoting the corresponding <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks>), a *stream associated with a file* (denoting the <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> used to open the <ClLinks styled={true} term={"file"}><i>file</i></ClLinks>; this may be, but is not required to be, the actual name of the <ClLinks styled={true} term={"file"}><i>file</i></ClLinks>), or a <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> (denoting itself). See Section 21.1.1.1.2 (Open and Closed Streams). 



**physical pathname** *n.* a <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> that is not a *logical pathname*. 



**place** *n.* 1. a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> which is suitable for use as a *generalized reference*. 2. the 



conceptual location referred to by such a <ClLinks styled={true} term={"place"}><i>place</i></ClLinks><sub>1</sub>. 



**plist** [ **p—e list** ] *n.* a *property list*. 



**portable** *adj.* (of <ClLinks styled={true} term={"code"}><i>code</i></ClLinks>) required to produce equivalent results and observable side effects in all *conforming implementations*. 



**potential copy** *n.* (of an *object O*<sub>1</sub> subject to constriants) an *object O*<sub>2</sub> that if the specified constraints are satisfied by *O*<sub>1</sub> without any modification might or might not be <ClLinks styled={true} term={"identical"}><i>identical</i></ClLinks> to *O*<sub>1</sub>, or else that must be a *fresh object* that resembles a <ClLinks styled={true} term={"copy"}><i>copy</i></ClLinks> of *O*<sub>1</sub> except that it has been modified as necessary to satisfy the constraints. 



**potential number** *n.* A textual notation that might be parsed by the *Lisp reader* in some *conforming implementation* as a <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> but is not required to be parsed as a <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> . No <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is a *potential number*—either an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is a <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> or it is not. See Section 2.3.1.1 (Potential Numbers as Tokens). 







 



 



**pprint dispatch table** *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that can be the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"print-pprint-dispatch"}><b>\*print-pprint-dispatch\*</b></ClLinks> and hence can control how <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> are printed when <ClLinks styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></ClLinks> is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>. See Section 22.2.1.4 (Pretty Print Dispatch Tables). 



**predicate** *n.* a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> that returns a *generalized boolean* as its first value. 



**present** *n.* 1. (of a <ClLinks styled={true} term={"feature"}><i>feature</i></ClLinks> in a *Lisp image*) a state of being that is in effect if and only if the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> naming the <ClLinks styled={true} term={"feature"}><i>feature</i></ClLinks> is an <ClLinks styled={true} term={"element"}><i>element</i></ClLinks> of the *features list*. 2. (of a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> in a <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>) being accessible in that <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> directly, rather than being inherited from another <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. 



**pretty print** *v.t.* (an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>) to invoke the *pretty printer* on the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



**pretty printer** *n.* the procedure that prints the character representation of an 



<ClLinks styled={true} term={"object"}><i>object</i></ClLinks> onto a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> when the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></ClLinks> is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, and that uses layout techniques (*e.g.*, indentation) that tend to highlight the structure of the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> in a way that makes it easier for human readers to parse visually. See the <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks> <ClLinks styled={true} term={"print-pprint-dispatch"}><b>\*print-pprint-dispatch\*</b></ClLinks> and Section 22.2 (The Lisp Pretty Printer). 



**pretty printing stream** *n.* a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> that does pretty printing. Such streams are created by the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"pprint-logical-block"}><b>pprint-logical-block</b></ClLinks> as a link between the output stream and the logical block. 



**primary method** *n.* a member of one of two sets of <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> (the set of *auxiliary methods* is the other) that form an exhaustive partition of the set of <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> on the <ClLinks styled={true} term={"method"}><i>method</i></ClLinks>’s *generic function*. How these sets are determined is dependent on the *method combination* type; see Section 7.6.2 (Introduction to Methods). 



**primary value** *n.* (of <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> resulting from the <ClLinks styled={true} term={"evaluation"}><i>evaluation</i></ClLinks> of a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>) the first <ClLinks styled={true} term={"value"}><i>value</i></ClLinks>, if any, or else <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> if there are no <ClLinks styled={true} term={"value"}><i>values</i></ClLinks>. “The primary value returned by <ClLinks styled={true} term={"truncate"}><b>truncate</b></ClLinks> is an integer quotient, truncated toward zero.” 



**principal** *adj.* (of a value returned by a Common Lisp <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> that implements a mathematically irrational or transcendental function defined in the complex domain) of possibly many (sometimes an infinite number of) correct values for the mathematical function, being the particular <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> which the corresponding Common Lisp <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> has been defined to return. 



**print name** *n. Trad.* (usually of a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>) a <ClLinks styled={true} term={"name"}><i>name</i></ClLinks><sub>3</sub>. 



**printer control variable** *n.* a <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks> whose specific purpose is to control some action of the *Lisp printer* ; that is, one of the <ClLinks styled={true} term={"variable"}><i>variables</i></ClLinks> in Figure 22–1, or else some *implementation-defined variable* which is defined by the <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> to be a *printer control variable*. 







 



 



**printer escaping** *n.* The combined state of the *printer control variables* 



<ClLinks styled={true} term={"print-escape"}><b>\*print-escape\*</b></ClLinks> and <ClLinks styled={true} term={"print-readably"}><b>\*print-readably\*</b></ClLinks>. If the value of either <ClLinks styled={true} term={"print-readably"}><b>\*print-readably\*</b></ClLinks> 



or <ClLinks styled={true} term={"print-escape"}><b>\*print-escape\*</b></ClLinks> is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, then *printer escaping* is “enabled”; otherwise (if the values of both <ClLinks styled={true} term={"print-readably"}><b>\*print-readably\*</b></ClLinks> and <ClLinks styled={true} term={"print-escape"}><b>\*print-escape\*</b></ClLinks> are <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>), then *printer escaping* is “disabled”. 



**printing** *adj.* (of a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> ) being a *graphic character* other than <ClLinks styled={true} term={"space"}><i>space</i></ClLinks>. 



**process** *v.t.* (a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> by the <ClLinks styled={true} term={"compiler"}><i>compiler</i></ClLinks> ) to perform *minimal compilation*, determining the time of evaluation for a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>, and possibly *evaluating* that <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> (if required). 



**processor** *n.*, *ANSI* an <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks>. 



<ClLinks styled={true} term={"proclaim"}><b>proclaim</b></ClLinks> *v.t.* (a <ClLinks styled={true} term={"proclamation"}><i>proclamation</i></ClLinks>) to <ClLinks styled={true} term={"establish"}><i>establish</i></ClLinks> that <ClLinks styled={true} term={"proclamation"}><i>proclamation</i></ClLinks>. 



**proclamation** *n.* a *global declaration*. 



**prog tag** *n. Trad.* a *go tag*. 



**program** *n. Trad.* Common Lisp <ClLinks styled={true} term={"code"}><i>code</i></ClLinks>. 



**programmer** *n.* an active entity, typically a human, that writes a <ClLinks styled={true} term={"program"}><i>program</i></ClLinks>, and that might or might not also be a <ClLinks styled={true} term={"user"}><i>user</i></ClLinks> of the <ClLinks styled={true} term={"program"}><i>program</i></ClLinks>. 



**programmer code** *n. code* that is supplied by the programmer; that is, <ClLinks styled={true} term={"code"}><i>code</i></ClLinks> that is not *system code*. 



**proper list** *n.* A <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> terminated by the *empty list*. (The *empty list* is a *proper list*.) See *improper list*. 



**proper name** *n.* (of a <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>) a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> that <ClLinks styled={true} term={"name"}><i>names</i></ClLinks> the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> whose <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> is that <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. See the <ClLinks styled={true} term={"function"}><i>functions</i></ClLinks> <ClLinks styled={true} term={"class-name"}><b>class-name</b></ClLinks> and <ClLinks styled={true} term={"find-class"}><b>find-class</b></ClLinks>. 



**proper sequence** *n.* a *sequence* which is not an *improper list*; that is, a <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> or a *proper list*. 



**proper subtype** *n.* (of a <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>) a <ClLinks styled={true} term={"subtype"}><i>subtype</i></ClLinks> of the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> which is not the *same type* as the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> (*i.e.*, its <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks> are a “proper subset” of the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>). 



**property** *n.* (of a *property list*) 1. a conceptual pairing of a *property indicator* and its associated *property value* on a *property list*. 2. a *property value*. 



**property indicator** *n.* (of a *property list*) the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> part of a <ClLinks styled={true} term={"property"}><i>property</i></ClLinks>, used as a <ClLinks styled={true} term={"key"}><i>key</i></ClLinks> when looking up a *property value* on a *property list*. 







 



 



**property list** *n.* 1. a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> containing an even number of <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks> that are alternating <ClLinks styled={true} term={"name"}><i>names</i></ClLinks> (sometimes called <ClLinks styled={true} term={"indicator"}><i>indicators</i></ClLinks> or <ClLinks styled={true} term={"key"}><i>keys</i></ClLinks>) and <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> (sometimes called *properties*). When there is more than one <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> and <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> pair with the *identical name* in 



a *property list*, the first such pair determines the <ClLinks styled={true} term={"property"}><i>property</i></ClLinks>. 2. (of a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>) the component of the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> containing a *property list*. 



**property value** *n.* (of a *property indicator* on a *property list*) the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> associated with the *property indicator* on the *property list*. 



**purports to conform** *v.* makes a good-faith claim of conformance. This term 



expresses intention to conform, regardless of whether the goal of that intention is realized in practice. For example, language implementations have been known to have bugs, and while an <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> of this specification with bugs might not be a *conforming implementation*, it can still *purport to conform*. This is an important distinction in certain specific cases; *e.g.*, see the <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks> <ClLinks styled={true} term={"features"}><b>\*features\*</b></ClLinks>. 




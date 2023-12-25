---
title: P
sidebar_position: 112
---

**P** 



<DictionaryLink styled={true} term={"package"}><b>package</b></DictionaryLink> *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"package"}><b>package</b></DictionaryLink>. 



**package cell** *n. Trad.* (of a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>) The <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> in a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> that holds one of possibly several <GlossaryTerm styled={true} term={"package"}><i>packages</i></GlossaryTerm> in which the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"interned"}><i>interned</i></GlossaryTerm>, called the *home package*, or which holds <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> if no such <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> exists or is known. See the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"symbol-package"}><b>symbol-package</b></DictionaryLink>. 



**package designator** *n.* a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>; that is, an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that denotes a <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> and that is one of: a *string designator* (denoting the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> that has the <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> that it designates as its <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> or as one of its <GlossaryTerm styled={true} term={"nickname"}><i>nicknames</i></GlossaryTerm>), or a <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> (denoting itself). 



**package marker** *n.* a character which is used in the textual notation for a symbol to separate the package name from the symbol name, and which is <GlossaryTerm styled={true} term={"colon"}><i>colon</i></GlossaryTerm> in the *standard readtable*. See Section 2.1 (Character Syntax). 



**package prefix** *n.* a notation preceding the <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> of a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> in text that is processed by the *Lisp reader* , which uses a *package name* followed by one or more *package markers*, and which indicates that the symbol is looked up in the indicated <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. 



**package registry** *n.* A mapping of <GlossaryTerm styled={true} term={"name"}><i>names</i></GlossaryTerm> to *package objects*. It is possible for there to be a *package object* which is not in this mapping; such a <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> is called an *unregistered package*. *Operators* such as <DictionaryLink styled={true} term={"find-package"}><b>find-package</b></DictionaryLink> consult this mapping in order to find a <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> from its <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>. <GlossaryTerm styled={true} term={"operator"}><i>Operators</i></GlossaryTerm> such as <DictionaryLink styled={true} term={"do-all-symbols"}><b>do-all-symbols</b></DictionaryLink>, <DictionaryLink styled={true} term={"find-all-symbols"}><b>find-all-symbols</b></DictionaryLink>, and <DictionaryLink styled={true} term={"list-all-packages"}><b>list-all-packages</b></DictionaryLink> operate only on <GlossaryTerm styled={true} term={"package"}><i>packages</i></GlossaryTerm> that exist in the *package registry*. 



**pairwise** *adv.* (of an adjective on a set) applying individually to all possible pairings of elements of the set. “The types *A*, *B*, and *C* are pairwise disjoint if *A* and *B* are disjoint, *B* and *C* are disjoint, and *A* and *C* are disjoint.” 



**parallel** *adj. Trad.* (of <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> or *assignment*) done in the style of <DictionaryLink styled={true} term={"psetq"}><b>psetq</b></DictionaryLink>, <DictionaryLink styled={true} term={"let"}><b>let</b></DictionaryLink>, or <DictionaryLink styled={true} term={"do"}><b>do</b></DictionaryLink>; that is, first evaluating all of the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> that produce <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm>, and only then *assigning* or <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> the <GlossaryTerm styled={true} term={"variable"}><i>variables</i></GlossaryTerm> (or <GlossaryTerm styled={true} term={"place"}><i>places</i></GlossaryTerm>). Note that this does not imply traditional 



computational “parallelism” since the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> that produce <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> are evaluated 



<GlossaryTerm styled={true} term={"sequentially"}><i>sequentially</i></GlossaryTerm>. See <GlossaryTerm styled={true} term={"sequential"}><i>sequential</i></GlossaryTerm>. 







 



 



**parameter** *n.* 1. (of a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>) a <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm> in the definition of a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> which takes on the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of a corresponding <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> (or of a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of corresponding arguments) to that <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> when it is called, or which in some cases is given a default value because there is no corresponding <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm>. 2. (of a *format directive*) an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> received as 



data flow by a *format directive* due to a prefix notation within the *format string* at the *format directive*’s point of use. See Section 22.3 (Formatted Output). “In "&#126;3,’0D", the number 3 and the character #\0 are parameters to the &#126;D format directive.” 



**parameter specializer** *n.* 1. (of a <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm>) an <GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm> which constrains the 



<GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> to be applicable only to <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> sequences in which the corresponding 



<GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> matches the *parameter specializer* . 2. a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>, or a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> (eql <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>). 



**parameter specializer name** *n.* 1. (of a <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> definition) an expression used in code to name a *parameter specializer* . See Section 7.6.2 (Introduction to Methods). 2. a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> naming a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>, or a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> (eql <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>). 



<DictionaryLink styled={true} term={"pathname"}><b>pathname</b></DictionaryLink> *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"pathname"}><b>pathname</b></DictionaryLink>, which is a structured representation of the name of a <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm>. A <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> has six components: a “host,” a “device,” a “directory,” a “name,” a “type,” and a “version.” 



**pathname designator** *n.* a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm>; that is, an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that denotes a <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> and that is one of: a *pathname namestring* (denoting the corresponding <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm>), a *stream associated with a file* (denoting the <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> used to open the <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm>; this may be, but is not required to be, the actual name of the <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm>), or a <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> (denoting itself). See Section 21.1.1.1.2 (Open and Closed Streams). 



**physical pathname** *n.* a <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> that is not a *logical pathname*. 



**place** *n.* 1. a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> which is suitable for use as a *generalized reference*. 2. the 



conceptual location referred to by such a <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm><sub>1</sub>. 



**plist** [ **p—e list** ] *n.* a *property list*. 



**portable** *adj.* (of <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm>) required to produce equivalent results and observable side effects in all *conforming implementations*. 



**potential copy** *n.* (of an *object O*<sub>1</sub> subject to constriants) an *object O*<sub>2</sub> that if the specified constraints are satisfied by *O*<sub>1</sub> without any modification might or might not be <GlossaryTerm styled={true} term={"identical"}><i>identical</i></GlossaryTerm> to *O*<sub>1</sub>, or else that must be a *fresh object* that resembles a <GlossaryTerm styled={true} term={"copy"}><i>copy</i></GlossaryTerm> of *O*<sub>1</sub> except that it has been modified as necessary to satisfy the constraints. 



**potential number** *n.* A textual notation that might be parsed by the *Lisp reader* in some *conforming implementation* as a <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> but is not required to be parsed as a <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> . No <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is a *potential number*—either an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> or it is not. See Section 2.3.1.1 (Potential Numbers as Tokens). 







 



 



**pprint dispatch table** *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that can be the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"print-pprint-dispatch"}><b>\*print-pprint-dispatch\*</b></DictionaryLink> and hence can control how <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> are printed when <DictionaryLink styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></DictionaryLink> is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>. See Section 22.2.1.4 (Pretty Print Dispatch Tables). 



**predicate** *n.* a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> that returns a *generalized boolean* as its first value. 



**present** *n.* 1. (of a <GlossaryTerm styled={true} term={"feature"}><i>feature</i></GlossaryTerm> in a *Lisp image*) a state of being that is in effect if and only if the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> naming the <GlossaryTerm styled={true} term={"feature"}><i>feature</i></GlossaryTerm> is an <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm> of the *features list*. 2. (of a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> in a <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>) being accessible in that <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> directly, rather than being inherited from another <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. 



**pretty print** *v.t.* (an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>) to invoke the *pretty printer* on the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



**pretty printer** *n.* the procedure that prints the character representation of an 



<GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> onto a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> when the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></DictionaryLink> is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, and that uses layout techniques (*e.g.*, indentation) that tend to highlight the structure of the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> in a way that makes it easier for human readers to parse visually. See the <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm> <DictionaryLink styled={true} term={"print-pprint-dispatch"}><b>\*print-pprint-dispatch\*</b></DictionaryLink> and Section 22.2 (The Lisp Pretty Printer). 



**pretty printing stream** *n.* a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> that does pretty printing. Such streams are created by the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"pprint-logical-block"}><b>pprint-logical-block</b></DictionaryLink> as a link between the output stream and the logical block. 



**primary method** *n.* a member of one of two sets of <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> (the set of *auxiliary methods* is the other) that form an exhaustive partition of the set of <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> on the <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm>’s *generic function*. How these sets are determined is dependent on the *method combination* type; see Section 7.6.2 (Introduction to Methods). 



**primary value** *n.* (of <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> resulting from the <GlossaryTerm styled={true} term={"evaluation"}><i>evaluation</i></GlossaryTerm> of a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>) the first <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm>, if any, or else <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> if there are no <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm>. “The primary value returned by <DictionaryLink styled={true} term={"truncate"}><b>truncate</b></DictionaryLink> is an integer quotient, truncated toward zero.” 



**principal** *adj.* (of a value returned by a Common Lisp <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> that implements a mathematically irrational or transcendental function defined in the complex domain) of possibly many (sometimes an infinite number of) correct values for the mathematical function, being the particular <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> which the corresponding Common Lisp <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> has been defined to return. 



**print name** *n. Trad.* (usually of a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>) a <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm><sub>3</sub>. 



**printer control variable** *n.* a <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm> whose specific purpose is to control some action of the *Lisp printer* ; that is, one of the <GlossaryTerm styled={true} term={"variable"}><i>variables</i></GlossaryTerm> in Figure 22–1, or else some *implementation-defined variable* which is defined by the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> to be a *printer control variable*. 







 



 



**printer escaping** *n.* The combined state of the *printer control variables* 



<DictionaryLink styled={true} term={"print-escape"}><b>\*print-escape\*</b></DictionaryLink> and <DictionaryLink styled={true} term={"print-readably"}><b>\*print-readably\*</b></DictionaryLink>. If the value of either <DictionaryLink styled={true} term={"print-readably"}><b>\*print-readably\*</b></DictionaryLink> 



or <DictionaryLink styled={true} term={"print-escape"}><b>\*print-escape\*</b></DictionaryLink> is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, then *printer escaping* is “enabled”; otherwise (if the values of both <DictionaryLink styled={true} term={"print-readably"}><b>\*print-readably\*</b></DictionaryLink> and <DictionaryLink styled={true} term={"print-escape"}><b>\*print-escape\*</b></DictionaryLink> are <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>), then *printer escaping* is “disabled”. 



**printing** *adj.* (of a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> ) being a *graphic character* other than <GlossaryTerm styled={true} term={"space"}><i>space</i></GlossaryTerm>. 



**process** *v.t.* (a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> by the <GlossaryTerm styled={true} term={"compiler"}><i>compiler</i></GlossaryTerm> ) to perform *minimal compilation*, determining the time of evaluation for a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>, and possibly *evaluating* that <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> (if required). 



**processor** *n.*, *ANSI* an <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm>. 



<DictionaryLink styled={true} term={"proclaim"}><b>proclaim</b></DictionaryLink> *v.t.* (a <GlossaryTerm styled={true} term={"proclamation"}><i>proclamation</i></GlossaryTerm>) to <GlossaryTerm styled={true} term={"establish"}><i>establish</i></GlossaryTerm> that <GlossaryTerm styled={true} term={"proclamation"}><i>proclamation</i></GlossaryTerm>. 



**proclamation** *n.* a *global declaration*. 



**prog tag** *n. Trad.* a *go tag*. 



**program** *n. Trad.* Common Lisp <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm>. 



**programmer** *n.* an active entity, typically a human, that writes a <GlossaryTerm styled={true} term={"program"}><i>program</i></GlossaryTerm>, and that might or might not also be a <GlossaryTerm styled={true} term={"user"}><i>user</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"program"}><i>program</i></GlossaryTerm>. 



**programmer code** *n. code* that is supplied by the programmer; that is, <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm> that is not *system code*. 



**proper list** *n.* A <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> terminated by the *empty list*. (The *empty list* is a *proper list*.) See *improper list*. 



**proper name** *n.* (of a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>) a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> that <GlossaryTerm styled={true} term={"name"}><i>names</i></GlossaryTerm> the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> whose <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> is that <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. See the <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm> <DictionaryLink styled={true} term={"class-name"}><b>class-name</b></DictionaryLink> and <DictionaryLink styled={true} term={"find-class"}><b>find-class</b></DictionaryLink>. 



**proper sequence** *n.* a *sequence* which is not an *improper list*; that is, a <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> or a *proper list*. 



**proper subtype** *n.* (of a <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>) a <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> which is not the *same type* as the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> (*i.e.*, its <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm> are a “proper subset” of the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>). 



**property** *n.* (of a *property list*) 1. a conceptual pairing of a *property indicator* and its associated *property value* on a *property list*. 2. a *property value*. 



**property indicator** *n.* (of a *property list*) the <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> part of a <GlossaryTerm styled={true} term={"property"}><i>property</i></GlossaryTerm>, used as a <GlossaryTerm styled={true} term={"key"}><i>key</i></GlossaryTerm> when looking up a *property value* on a *property list*. 







 



 



**property list** *n.* 1. a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> containing an even number of <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm> that are alternating <GlossaryTerm styled={true} term={"name"}><i>names</i></GlossaryTerm> (sometimes called <GlossaryTerm styled={true} term={"indicator"}><i>indicators</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"key"}><i>keys</i></GlossaryTerm>) and <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> (sometimes called *properties*). When there is more than one <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> pair with the *identical name* in 



a *property list*, the first such pair determines the <GlossaryTerm styled={true} term={"property"}><i>property</i></GlossaryTerm>. 2. (of a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>) the component of the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> containing a *property list*. 



**property value** *n.* (of a *property indicator* on a *property list*) the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> associated with the *property indicator* on the *property list*. 



**purports to conform** *v.* makes a good-faith claim of conformance. This term 



expresses intention to conform, regardless of whether the goal of that intention is realized in practice. For example, language implementations have been known to have bugs, and while an <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> of this specification with bugs might not be a *conforming implementation*, it can still *purport to conform*. This is an important distinction in certain specific cases; *e.g.*, see the <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm> <DictionaryLink styled={true} term={"features"}><b>\*features\*</b></DictionaryLink>. 




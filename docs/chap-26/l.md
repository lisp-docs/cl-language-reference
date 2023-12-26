---
title: L
sidebar_position: 108
---

**L** 



**lambda combination** *n. Trad.* a <GlossaryTerm styled={true} term={"lambda form"}><i>lambda form</i></GlossaryTerm>. 



**lambda expression** *n.* a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> which can be used in place of a <GlossaryTerm styled={true} term={"function name"}><i>function name</i></GlossaryTerm> in certain contexts to denote a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> by directly describing its behavior rather than indirectly by referring to the name of an *established function*; its name derives from the fact that its first element is the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> lambda. See <DictionaryLink  term={"lambda"}><b>lambda</b></DictionaryLink>. 



**lambda form** *n.* a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> that is a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> and that has a first element which is a <GlossaryTerm styled={true} term={"lambda expression"}><i>lambda expression</i></GlossaryTerm> representing a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> to be called on <GlossaryTerm  term={"argument"}><i>arguments</i></GlossaryTerm> which are the result of *evaluating* subsequent elements of the <GlossaryTerm styled={true} term={"lambda form"}><i>lambda form</i></GlossaryTerm>. 



**lambda list** *n.* a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> that specifies a set of <GlossaryTerm  term={"parameter"}><i>parameters</i></GlossaryTerm> (sometimes called <GlossaryTerm styled={true} term={"lambda variable"}><i>lambda variables</i></GlossaryTerm>) and a protocol for receiving <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> for those <GlossaryTerm  term={"parameter"}><i>parameters</i></GlossaryTerm>; that is, an <GlossaryTerm styled={true} term={"ordinary lambda list"}><i>ordinary lambda list</i></GlossaryTerm>, an <GlossaryTerm styled={true} term={"extended lambda list"}><i>extended lambda list</i></GlossaryTerm>, or a <GlossaryTerm styled={true} term={"modified lambda list"}><i>modified lambda list</i></GlossaryTerm>. 







 



 



**lambda list keyword** *n.* a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> whose <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> begins with <GlossaryTerm  term={"ampersand"}><i>ampersand</i></GlossaryTerm> and that is specially recognized in a <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm>. Note that no *standardized lambda list keyword* is in the KEYWORD <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>. 



**lambda variable** *n.* a <GlossaryTerm styled={true} term={"formal parameter"}><i>formal parameter</i></GlossaryTerm> , used to emphasize the <GlossaryTerm  term={"variable"}><i>variable</i></GlossaryTerm>’s relation to the <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> that *established* it. 



**leaf** *n.* 1. an <GlossaryTerm  term={"atom"}><i>atom</i></GlossaryTerm> in a <GlossaryTerm  term={"tree"}><i>tree</i></GlossaryTerm><sub>1</sub>. 2. a terminal node of a <GlossaryTerm  term={"tree"}><i>tree</i></GlossaryTerm><sub>2</sub>. 



**leap seconds** *n.* additional one-second intervals of time that are occasionally inserted into the true calendar by official timekeepers as a correction similar to “leap years.” All Common Lisp <GlossaryTerm  term={"time"}><i>time</i></GlossaryTerm> representations ignore <GlossaryTerm styled={true} term={"leap seconds"}><i>leap seconds</i></GlossaryTerm>; every day is assumed to be exactly 86400 seconds long. 



**left-parenthesis** *n.* the <GlossaryTerm styled={true} term={"standard character"}><i>standard character</i></GlossaryTerm> “(”, that is variously called “left 



parenthesis” or “open parenthesis” See Figure 2–5. 



<DictionaryLink  term={"length"}><b>length</b></DictionaryLink> *n.* (of a *sequence*) the number of <GlossaryTerm  term={"element"}><i>elements</i></GlossaryTerm> in the *sequence*. (Note that if the *sequence* is a <GlossaryTerm  term={"vector"}><i>vector</i></GlossaryTerm> with a <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> , its <GlossaryTerm  term={"length"}><i>length</i></GlossaryTerm> is the same as the <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> even though the total allocated size of the <GlossaryTerm  term={"vector"}><i>vector</i></GlossaryTerm> might be larger.) 



**lexical binding** *n.* a <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm> in a <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm>. 



**lexical closure** *n.* a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> that, when invoked on <GlossaryTerm  term={"argument"}><i>arguments</i></GlossaryTerm>, executes the body of a <GlossaryTerm styled={true} term={"lambda expression"}><i>lambda expression</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm> that was captured at the time of the creation of the <GlossaryTerm styled={true} term={"lexical closure"}><i>lexical closure</i></GlossaryTerm>, augmented by <GlossaryTerm  term={"binding"}><i>bindings</i></GlossaryTerm> of the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm>’s <GlossaryTerm  term={"parameter"}><i>parameters</i></GlossaryTerm> to the corresponding <GlossaryTerm  term={"argument"}><i>arguments</i></GlossaryTerm>. 



**lexical environment** *n.* that part of the <GlossaryTerm  term={"environment"}><i>environment</i></GlossaryTerm> that contains <GlossaryTerm  term={"binding"}><i>bindings</i></GlossaryTerm> whose names have <GlossaryTerm styled={true} term={"lexical scope"}><i>lexical scope</i></GlossaryTerm>. A <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm> contains, among other things: 



ordinary <GlossaryTerm  term={"binding"}><i>bindings</i></GlossaryTerm> of *variable names* to <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm>, lexically *established bindings* of <GlossaryTerm styled={true} term={"function name"}><i>function names</i></GlossaryTerm> to <GlossaryTerm  term={"function"}><i>functions</i></GlossaryTerm>, <GlossaryTerm  term={"macro"}><i>macros</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"symbol macro"}><i>symbol macros</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"block"}><i>blocks</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"tag"}><i>tags</i></GlossaryTerm>, and <GlossaryTerm styled={true} term={"local declaration"}><i>local declarations</i></GlossaryTerm> (see <DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink>). 



**lexical scope** *n. scope* that is limited to a spatial or textual region within the 



establishing <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. “The names of parameters to a function normally are lexically scoped.” 



**lexical variable** *n.* a <GlossaryTerm  term={"variable"}><i>variable</i></GlossaryTerm> the <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm> for which is in the <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm>. 



**Lisp image** *n.* a running instantiation of a Common Lisp <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm>. A *Lisp image* is characterized by a single address space in which any <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> can directly refer to any another in conformance with this specification, and by a single, common, <GlossaryTerm styled={true} term={"global environment"}><i>global environment</i></GlossaryTerm>. (External operating systems sometimes call this a “core image,” “fork,” “incarnation,” “job,” or “process.” Note however, that the issue of a “process” in such 







 



 



an operating system is technically orthogonal to the issue of a *Lisp image* being defined here. Depending on the operating system, a single “process” might have multiple *Lisp images*, and multiple “processes” might reside in a single *Lisp image*. Hence, it is the idea of a fully shared address space for direct reference among all <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> which is the defining characteristic. Note, too, that two “processes” which have a communication 



area that permits the sharing of some but not all <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> are considered to be distinct *Lisp images*.) 



**Lisp printer** *n. Trad.* the procedure that prints the character representation of an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> onto a <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>. (This procedure is implemented by the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"write"}><b>write</b></DictionaryLink>.) 



**Lisp read-eval-print loop** *n. Trad.* an endless loop that <GlossaryTerm  term={"read"}><i>reads</i></GlossaryTerm><sub>2</sub> a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>, <GlossaryTerm  term={"evaluate"}><i>evaluates</i></GlossaryTerm> it, and prints (*i.e.*, <GlossaryTerm  term={"write"}><i>writes</i></GlossaryTerm><sub>2</sub>) the results. In many <GlossaryTerm  term={"implementation"}><i>implementations</i></GlossaryTerm>, the default mode of interaction with Common Lisp during program development is through such a loop. 



**Lisp reader** *n. Trad.* the procedure that parses character representations of <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> from a <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>, producing <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm>. (This procedure is implemented by the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"read"}><b>read</b></DictionaryLink>.) 



<DictionaryLink  term={"list"}><b>list</b></DictionaryLink> *n.* 1. a chain of *conses* in which the <GlossaryTerm  term={"car"}><i>car</i></GlossaryTerm> of each <GlossaryTerm  term={"cons"}><i>cons</i></GlossaryTerm> is an <GlossaryTerm  term={"element"}><i>element</i></GlossaryTerm> of the <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm>, and the <GlossaryTerm  term={"cdr"}><i>cdr</i></GlossaryTerm> of each <GlossaryTerm  term={"cons"}><i>cons</i></GlossaryTerm> is either the next link in the chain or a terminating <GlossaryTerm  term={"atom"}><i>atom</i></GlossaryTerm>. See also *proper list<ClLinks  term={"t"}><i>, </i></ClLinks>dotted list*, or <GlossaryTerm styled={true} term={"circular list"}><i>circular list</i></GlossaryTerm>. 2. the <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> that is the union of <DictionaryLink  term={"null"}><b>null</b></DictionaryLink> and <DictionaryLink  term={"cons"}><b>cons</b></DictionaryLink>. 



**list designator** *n.* a <GlossaryTerm  term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> of <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm>; that is, an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> that denotes a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> and that is one of: a *non-nil atom* (denoting a *singleton list* whose <GlossaryTerm  term={"element"}><i>element</i></GlossaryTerm> is that *non-nil atom*) or a <GlossaryTerm styled={true} term={"proper list"}><i>proper list</i></GlossaryTerm> (denoting itself). 



<b>list structure</b> <i>n.</i> (of a <i>list</i>) the set of <i>conses</i> that make up the <i>list</i>. Note that while the <i>car</i> <sub>1<i>b</i></sub> component of each such <i>cons</i> is part of the <i>list structure</i>, the <i>objects</i> that are <i>elements</i> of the <i>list</i> (<i>i.e.</i>, the <i>objects</i> that are the <i>cars</i><sub>2</sub> of each <i>cons</i> in the <i>list</i>) are not themselves part of its <i>list structure</i>, even if they are <i>conses</i>, except in the (<i>circular</i> <sub>2</sub>) case where the <i>list</i> actually contains one of its <i>tails</i> as an <i>element</i>. (The <i>list structure</i> of a <i>list</i> is sometimes redundantly referred to as its “top-level list structure” in order to emphasize that any <i>conses</i> that are <i>elements</i> of the <i>list</i> are not involved.) 



**literal** *adj.* (of an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>) referenced directly in a program rather than being computed by the program; that is, appearing as data in a <DictionaryLink  term={"quote"}><b>quote</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>, or, if the <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> is a *self evaluating object*, appearing as unquoted data. “In the form (cons "one" ’("two")), the expressions "one", ("two"), and "two" are literal objects.” 



<DictionaryLink  term={"load"}><b>load</b></DictionaryLink> *v.t.* (a <GlossaryTerm  term={"file"}><i>file</i></GlossaryTerm>) to cause the <GlossaryTerm  term={"code"}><i>code</i></GlossaryTerm> contained in the <GlossaryTerm  term={"file"}><i>file</i></GlossaryTerm> to be *executed*. See the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"load"}><b>load</b></DictionaryLink>. 



**load time** *n.* the duration of time that the loader is *loading compiled code*. 







 



 



**load time value** *n.* an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> referred to in <GlossaryTerm  term={"code"}><i>code</i></GlossaryTerm> by a <DictionaryLink  term={"load-time-value"}><b>load-time-value</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. The <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of such a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> is some specific <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> which can only be computed in the 



run-time <GlossaryTerm  term={"environment"}><i>environment</i></GlossaryTerm>. In the case of *file compilation*, the <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> is computed once as part of the process of *loading* the <GlossaryTerm styled={true} term={"compiled file"}><i>compiled file</i></GlossaryTerm>, and not again. See the <GlossaryTerm styled={true} term={"special operator"}><i>special operator</i></GlossaryTerm> <DictionaryLink  term={"load-time-value"}><b>load-time-value</b></DictionaryLink>. 



**loader** *n.* a facility that is part of Lisp and that <GlossaryTerm  term={"load"}><i>loads</i></GlossaryTerm> a <GlossaryTerm  term={"file"}><i>file</i></GlossaryTerm>. See the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"load"}><b>load</b></DictionaryLink>. 



**local declaration** *n.* an <GlossaryTerm  term={"expression"}><i>expression</i></GlossaryTerm> which may appear only in specially designated positions of certain <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm>, and which provides information about the code contained within the containing <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>; that is, a <DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink> <GlossaryTerm  term={"expression"}><i>expression</i></GlossaryTerm>. 



**local precedence order** *n.* (of a <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>) a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> consisting of the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> followed by its *direct superclasses* in the order mentioned in the defining <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> for the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>. 



**local slot** *n.* (of a <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>) a *slot accessible* in only one <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm>, namely the <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> in which the <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> is allocated. 



**logical block** *n.* a conceptual grouping of related output used by the <GlossaryTerm styled={true} term={"pretty printer"}><i>pretty printer</i></GlossaryTerm> . See the <GlossaryTerm  term={"macro"}><i>macro</i></GlossaryTerm> <DictionaryLink  term={"pprint-logical-block"}><b>pprint-logical-block</b></DictionaryLink> and Section 22.2.1.1 (Dynamic Control of the Arrangement of Output). 



**logical host** *n.* an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm  term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> nature that is used as the representation of a “host” in a <GlossaryTerm styled={true} term={"logical pathname"}><i>logical pathname</i></GlossaryTerm>, and that has an associated set of translation rules for converting <GlossaryTerm styled={true} term={"logical pathname"}><i>logical pathnames</i></GlossaryTerm> belonging to that host into <GlossaryTerm styled={true} term={"physical pathname"}><i>physical pathnames</i></GlossaryTerm>. See Section 19.3 (Logical Pathnames). 



**logical host designator** *n.* a <GlossaryTerm  term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"logical host"}><i>logical host</i></GlossaryTerm>; that is, an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> that denotes a <GlossaryTerm styled={true} term={"logical host"}><i>logical host</i></GlossaryTerm> and that is one of: a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> (denoting the <GlossaryTerm styled={true} term={"logical host"}><i>logical host</i></GlossaryTerm> that it names), or a <GlossaryTerm styled={true} term={"logical host"}><i>logical host</i></GlossaryTerm> (denoting itself). (Note that because the representation of a <GlossaryTerm styled={true} term={"logical host"}><i>logical host</i></GlossaryTerm> is <GlossaryTerm  term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>, it is possible that an <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm> might represent a <GlossaryTerm styled={true} term={"logical host"}><i>logical host</i></GlossaryTerm> as the <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> that names it.) 



**logical pathname** *n.* an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"logical-pathname"}><b>logical-pathname</b></DictionaryLink>. 



**long float** *n.* an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"long-float"}><b>long-float</b></DictionaryLink>. 



**loop keyword** *n. Trad.* a symbol that is a specially recognized part of the syntax of an extended <DictionaryLink  term={"loop"}><b>loop</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. Such symbols are recognized by their <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> (using <ClLinks  term={"string"}><b>string=</b></ClLinks>), not by their identity; as such, they may be in any package. A <GlossaryTerm styled={true} term={"loop keyword"}><i>loop keyword</i></GlossaryTerm> is not a <GlossaryTerm  term={"keyword"}><i>keyword</i></GlossaryTerm>. 



**lowercase** *adj.* (of a <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> ) being among <GlossaryTerm styled={true} term={"standard character"}><i>standard characters</i></GlossaryTerm> corresponding to the small letters a through z, or being some other *implementation-defined character* that 







 



 



is defined by the <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm> to be <GlossaryTerm  term={"lowercase"}><i>lowercase</i></GlossaryTerm>. See Section 13.1.4.3 (Characters With Case). 




---
title: L
sidebar_position: 108
---

**L** 



**lambda combination** *n. Trad.* a <GlossaryTerm styled={true} term={"lambda form"}><i>lambda form</i></GlossaryTerm>. 



**lambda expression** *n.* a <ClLinks  term={"list"}><i>list</i></ClLinks> which can be used in place of a <GlossaryTerm styled={true} term={"function name"}><i>function name</i></GlossaryTerm> in certain contexts to denote a <ClLinks  term={"function"}><i>function</i></ClLinks> by directly describing its behavior rather than indirectly by referring to the name of an *established function*; its name derives from the fact that its first element is the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> lambda. See <ClLinks  term={"lambda"}><b>lambda</b></ClLinks>. 



**lambda form** *n.* a <ClLinks  term={"form"}><i>form</i></ClLinks> that is a <ClLinks  term={"list"}><i>list</i></ClLinks> and that has a first element which is a <GlossaryTerm styled={true} term={"lambda expression"}><i>lambda expression</i></GlossaryTerm> representing a <ClLinks  term={"function"}><i>function</i></ClLinks> to be called on <ClLinks  term={"argument"}><i>arguments</i></ClLinks> which are the result of *evaluating* subsequent elements of the <GlossaryTerm styled={true} term={"lambda form"}><i>lambda form</i></GlossaryTerm>. 



**lambda list** *n.* a <ClLinks  term={"list"}><i>list</i></ClLinks> that specifies a set of <ClLinks  term={"parameter"}><i>parameters</i></ClLinks> (sometimes called <GlossaryTerm styled={true} term={"lambda variable"}><i>lambda variables</i></GlossaryTerm>) and a protocol for receiving <ClLinks  term={"value"}><i>values</i></ClLinks> for those <ClLinks  term={"parameter"}><i>parameters</i></ClLinks>; that is, an <GlossaryTerm styled={true} term={"ordinary lambda list"}><i>ordinary lambda list</i></GlossaryTerm>, an <GlossaryTerm styled={true} term={"extended lambda list"}><i>extended lambda list</i></GlossaryTerm>, or a <GlossaryTerm styled={true} term={"modified lambda list"}><i>modified lambda list</i></GlossaryTerm>. 







 



 



**lambda list keyword** *n.* a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> whose <ClLinks  term={"name"}><i>name</i></ClLinks> begins with <ClLinks  term={"ampersand"}><i>ampersand</i></ClLinks> and that is specially recognized in a <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm>. Note that no *standardized lambda list keyword* is in the KEYWORD <ClLinks  term={"package"}><i>package</i></ClLinks>. 



**lambda variable** *n.* a <GlossaryTerm styled={true} term={"formal parameter"}><i>formal parameter</i></GlossaryTerm> , used to emphasize the <ClLinks  term={"variable"}><i>variable</i></ClLinks>’s relation to the <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> that *established* it. 



**leaf** *n.* 1. an <ClLinks  term={"atom"}><i>atom</i></ClLinks> in a <ClLinks  term={"tree"}><i>tree</i></ClLinks><sub>1</sub>. 2. a terminal node of a <ClLinks  term={"tree"}><i>tree</i></ClLinks><sub>2</sub>. 



**leap seconds** *n.* additional one-second intervals of time that are occasionally inserted into the true calendar by official timekeepers as a correction similar to “leap years.” All Common Lisp <ClLinks  term={"time"}><i>time</i></ClLinks> representations ignore <GlossaryTerm styled={true} term={"leap seconds"}><i>leap seconds</i></GlossaryTerm>; every day is assumed to be exactly 86400 seconds long. 



**left-parenthesis** *n.* the <GlossaryTerm styled={true} term={"standard character"}><i>standard character</i></GlossaryTerm> “(”, that is variously called “left 



parenthesis” or “open parenthesis” See Figure 2–5. 



<ClLinks  term={"length"}><b>length</b></ClLinks> *n.* (of a *sequence*) the number of <ClLinks  term={"element"}><i>elements</i></ClLinks> in the *sequence*. (Note that if the *sequence* is a <ClLinks  term={"vector"}><i>vector</i></ClLinks> with a <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> , its <ClLinks  term={"length"}><i>length</i></ClLinks> is the same as the <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> even though the total allocated size of the <ClLinks  term={"vector"}><i>vector</i></ClLinks> might be larger.) 



**lexical binding** *n.* a <ClLinks  term={"binding"}><i>binding</i></ClLinks> in a <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm>. 



**lexical closure** *n.* a <ClLinks  term={"function"}><i>function</i></ClLinks> that, when invoked on <ClLinks  term={"argument"}><i>arguments</i></ClLinks>, executes the body of a <GlossaryTerm styled={true} term={"lambda expression"}><i>lambda expression</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm> that was captured at the time of the creation of the <GlossaryTerm styled={true} term={"lexical closure"}><i>lexical closure</i></GlossaryTerm>, augmented by <ClLinks  term={"binding"}><i>bindings</i></ClLinks> of the <ClLinks  term={"function"}><i>function</i></ClLinks>’s <ClLinks  term={"parameter"}><i>parameters</i></ClLinks> to the corresponding <ClLinks  term={"argument"}><i>arguments</i></ClLinks>. 



**lexical environment** *n.* that part of the <ClLinks  term={"environment"}><i>environment</i></ClLinks> that contains <ClLinks  term={"binding"}><i>bindings</i></ClLinks> whose names have <GlossaryTerm styled={true} term={"lexical scope"}><i>lexical scope</i></GlossaryTerm>. A <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm> contains, among other things: 



ordinary <ClLinks  term={"binding"}><i>bindings</i></ClLinks> of *variable names* to <ClLinks  term={"value"}><i>values</i></ClLinks>, lexically *established bindings* of <GlossaryTerm styled={true} term={"function name"}><i>function names</i></GlossaryTerm> to <ClLinks  term={"function"}><i>functions</i></ClLinks>, <ClLinks  term={"macro"}><i>macros</i></ClLinks>, <GlossaryTerm styled={true} term={"symbol macro"}><i>symbol macros</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"block"}><i>blocks</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"tag"}><i>tags</i></GlossaryTerm>, and <GlossaryTerm styled={true} term={"local declaration"}><i>local declarations</i></GlossaryTerm> (see <ClLinks  term={"declare"}><b>declare</b></ClLinks>). 



**lexical scope** *n. scope* that is limited to a spatial or textual region within the 



establishing <ClLinks  term={"form"}><i>form</i></ClLinks>. “The names of parameters to a function normally are lexically scoped.” 



**lexical variable** *n.* a <ClLinks  term={"variable"}><i>variable</i></ClLinks> the <ClLinks  term={"binding"}><i>binding</i></ClLinks> for which is in the <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm>. 



**Lisp image** *n.* a running instantiation of a Common Lisp <ClLinks  term={"implementation"}><i>implementation</i></ClLinks>. A *Lisp image* is characterized by a single address space in which any <ClLinks  term={"object"}><i>object</i></ClLinks> can directly refer to any another in conformance with this specification, and by a single, common, <GlossaryTerm styled={true} term={"global environment"}><i>global environment</i></GlossaryTerm>. (External operating systems sometimes call this a “core image,” “fork,” “incarnation,” “job,” or “process.” Note however, that the issue of a “process” in such 







 



 



an operating system is technically orthogonal to the issue of a *Lisp image* being defined here. Depending on the operating system, a single “process” might have multiple *Lisp images*, and multiple “processes” might reside in a single *Lisp image*. Hence, it is the idea of a fully shared address space for direct reference among all <ClLinks  term={"object"}><i>objects</i></ClLinks> which is the defining characteristic. Note, too, that two “processes” which have a communication 



area that permits the sharing of some but not all <ClLinks  term={"object"}><i>objects</i></ClLinks> are considered to be distinct *Lisp images*.) 



**Lisp printer** *n. Trad.* the procedure that prints the character representation of an <ClLinks  term={"object"}><i>object</i></ClLinks> onto a <ClLinks  term={"stream"}><i>stream</i></ClLinks>. (This procedure is implemented by the <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"write"}><b>write</b></ClLinks>.) 



**Lisp read-eval-print loop** *n. Trad.* an endless loop that <ClLinks  term={"read"}><i>reads</i></ClLinks><sub>2</sub> a <ClLinks  term={"form"}><i>form</i></ClLinks>, <ClLinks  term={"evaluate"}><i>evaluates</i></ClLinks> it, and prints (*i.e.*, <ClLinks  term={"write"}><i>writes</i></ClLinks><sub>2</sub>) the results. In many <ClLinks  term={"implementation"}><i>implementations</i></ClLinks>, the default mode of interaction with Common Lisp during program development is through such a loop. 



**Lisp reader** *n. Trad.* the procedure that parses character representations of <ClLinks  term={"object"}><i>objects</i></ClLinks> from a <ClLinks  term={"stream"}><i>stream</i></ClLinks>, producing <ClLinks  term={"object"}><i>objects</i></ClLinks>. (This procedure is implemented by the <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"read"}><b>read</b></ClLinks>.) 



<ClLinks  term={"list"}><b>list</b></ClLinks> *n.* 1. a chain of *conses* in which the <ClLinks  term={"car"}><i>car</i></ClLinks> of each <ClLinks  term={"cons"}><i>cons</i></ClLinks> is an <ClLinks  term={"element"}><i>element</i></ClLinks> of the <ClLinks  term={"list"}><i>list</i></ClLinks>, and the <ClLinks  term={"cdr"}><i>cdr</i></ClLinks> of each <ClLinks  term={"cons"}><i>cons</i></ClLinks> is either the next link in the chain or a terminating <ClLinks  term={"atom"}><i>atom</i></ClLinks>. See also *proper list<ClLinks  term={"t"}><i>, </i></ClLinks>dotted list*, or <GlossaryTerm styled={true} term={"circular list"}><i>circular list</i></GlossaryTerm>. 2. the <ClLinks  term={"type"}><i>type</i></ClLinks> that is the union of <ClLinks  term={"null"}><b>null</b></ClLinks> and <ClLinks  term={"cons"}><b>cons</b></ClLinks>. 



**list designator** *n.* a <ClLinks  term={"designator"}><i>designator</i></ClLinks> for a <ClLinks  term={"list"}><i>list</i></ClLinks> of <ClLinks  term={"object"}><i>objects</i></ClLinks>; that is, an <ClLinks  term={"object"}><i>object</i></ClLinks> that denotes a <ClLinks  term={"list"}><i>list</i></ClLinks> and that is one of: a *non-nil atom* (denoting a *singleton list* whose <ClLinks  term={"element"}><i>element</i></ClLinks> is that *non-nil atom*) or a <GlossaryTerm styled={true} term={"proper list"}><i>proper list</i></GlossaryTerm> (denoting itself). 



<b>list structure</b> <i>n.</i> (of a <i>list</i>) the set of <i>conses</i> that make up the <i>list</i>. Note that while the <i>car</i> <sub>1<i>b</i></sub> component of each such <i>cons</i> is part of the <i>list structure</i>, the <i>objects</i> that are <i>elements</i> of the <i>list</i> (<i>i.e.</i>, the <i>objects</i> that are the <i>cars</i><sub>2</sub> of each <i>cons</i> in the <i>list</i>) are not themselves part of its <i>list structure</i>, even if they are <i>conses</i>, except in the (<i>circular</i> <sub>2</sub>) case where the <i>list</i> actually contains one of its <i>tails</i> as an <i>element</i>. (The <i>list structure</i> of a <i>list</i> is sometimes redundantly referred to as its “top-level list structure” in order to emphasize that any <i>conses</i> that are <i>elements</i> of the <i>list</i> are not involved.) 



**literal** *adj.* (of an <ClLinks  term={"object"}><i>object</i></ClLinks>) referenced directly in a program rather than being computed by the program; that is, appearing as data in a <ClLinks  term={"quote"}><b>quote</b></ClLinks> <ClLinks  term={"form"}><i>form</i></ClLinks>, or, if the <ClLinks  term={"object"}><i>object</i></ClLinks> is a *self evaluating object*, appearing as unquoted data. “In the form (cons "one" ’("two")), the expressions "one", ("two"), and "two" are literal objects.” 



<ClLinks  term={"load"}><b>load</b></ClLinks> *v.t.* (a <ClLinks  term={"file"}><i>file</i></ClLinks>) to cause the <ClLinks  term={"code"}><i>code</i></ClLinks> contained in the <ClLinks  term={"file"}><i>file</i></ClLinks> to be *executed*. See the <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"load"}><b>load</b></ClLinks>. 



**load time** *n.* the duration of time that the loader is *loading compiled code*. 







 



 



**load time value** *n.* an <ClLinks  term={"object"}><i>object</i></ClLinks> referred to in <ClLinks  term={"code"}><i>code</i></ClLinks> by a <ClLinks  term={"load-time-value"}><b>load-time-value</b></ClLinks> <ClLinks  term={"form"}><i>form</i></ClLinks>. The <ClLinks  term={"value"}><i>value</i></ClLinks> of such a <ClLinks  term={"form"}><i>form</i></ClLinks> is some specific <ClLinks  term={"object"}><i>object</i></ClLinks> which can only be computed in the 



run-time <ClLinks  term={"environment"}><i>environment</i></ClLinks>. In the case of *file compilation*, the <ClLinks  term={"value"}><i>value</i></ClLinks> is computed once as part of the process of *loading* the <GlossaryTerm styled={true} term={"compiled file"}><i>compiled file</i></GlossaryTerm>, and not again. See the <GlossaryTerm styled={true} term={"special operator"}><i>special operator</i></GlossaryTerm> <ClLinks  term={"load-time-value"}><b>load-time-value</b></ClLinks>. 



**loader** *n.* a facility that is part of Lisp and that <ClLinks  term={"load"}><i>loads</i></ClLinks> a <ClLinks  term={"file"}><i>file</i></ClLinks>. See the <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"load"}><b>load</b></ClLinks>. 



**local declaration** *n.* an <ClLinks  term={"expression"}><i>expression</i></ClLinks> which may appear only in specially designated positions of certain <ClLinks  term={"form"}><i>forms</i></ClLinks>, and which provides information about the code contained within the containing <ClLinks  term={"form"}><i>form</i></ClLinks>; that is, a <ClLinks  term={"declare"}><b>declare</b></ClLinks> <ClLinks  term={"expression"}><i>expression</i></ClLinks>. 



**local precedence order** *n.* (of a <ClLinks  term={"class"}><i>class</i></ClLinks>) a <ClLinks  term={"list"}><i>list</i></ClLinks> consisting of the <ClLinks  term={"class"}><i>class</i></ClLinks> followed by its *direct superclasses* in the order mentioned in the defining <ClLinks  term={"form"}><i>form</i></ClLinks> for the <ClLinks  term={"class"}><i>class</i></ClLinks>. 



**local slot** *n.* (of a <ClLinks  term={"class"}><i>class</i></ClLinks>) a *slot accessible* in only one <ClLinks  term={"instance"}><i>instance</i></ClLinks>, namely the <ClLinks  term={"instance"}><i>instance</i></ClLinks> in which the <ClLinks  term={"slot"}><i>slot</i></ClLinks> is allocated. 



**logical block** *n.* a conceptual grouping of related output used by the <GlossaryTerm styled={true} term={"pretty printer"}><i>pretty printer</i></GlossaryTerm> . See the <ClLinks  term={"macro"}><i>macro</i></ClLinks> <ClLinks  term={"pprint-logical-block"}><b>pprint-logical-block</b></ClLinks> and Section 22.2.1.1 (Dynamic Control of the Arrangement of Output). 



**logical host** *n.* an <ClLinks  term={"object"}><i>object</i></ClLinks> of <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> nature that is used as the representation of a “host” in a <GlossaryTerm styled={true} term={"logical pathname"}><i>logical pathname</i></GlossaryTerm>, and that has an associated set of translation rules for converting <GlossaryTerm styled={true} term={"logical pathname"}><i>logical pathnames</i></GlossaryTerm> belonging to that host into <GlossaryTerm styled={true} term={"physical pathname"}><i>physical pathnames</i></GlossaryTerm>. See Section 19.3 (Logical Pathnames). 



**logical host designator** *n.* a <ClLinks  term={"designator"}><i>designator</i></ClLinks> for a <GlossaryTerm styled={true} term={"logical host"}><i>logical host</i></GlossaryTerm>; that is, an <ClLinks  term={"object"}><i>object</i></ClLinks> that denotes a <GlossaryTerm styled={true} term={"logical host"}><i>logical host</i></GlossaryTerm> and that is one of: a <ClLinks  term={"string"}><i>string</i></ClLinks> (denoting the <GlossaryTerm styled={true} term={"logical host"}><i>logical host</i></GlossaryTerm> that it names), or a <GlossaryTerm styled={true} term={"logical host"}><i>logical host</i></GlossaryTerm> (denoting itself). (Note that because the representation of a <GlossaryTerm styled={true} term={"logical host"}><i>logical host</i></GlossaryTerm> is <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>, it is possible that an <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> might represent a <GlossaryTerm styled={true} term={"logical host"}><i>logical host</i></GlossaryTerm> as the <ClLinks  term={"string"}><i>string</i></ClLinks> that names it.) 



**logical pathname** *n.* an <ClLinks  term={"object"}><i>object</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"logical-pathname"}><b>logical-pathname</b></ClLinks>. 



**long float** *n.* an <ClLinks  term={"object"}><i>object</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"long-float"}><b>long-float</b></ClLinks>. 



**loop keyword** *n. Trad.* a symbol that is a specially recognized part of the syntax of an extended <ClLinks  term={"loop"}><b>loop</b></ClLinks> <ClLinks  term={"form"}><i>form</i></ClLinks>. Such symbols are recognized by their <ClLinks  term={"name"}><i>name</i></ClLinks> (using <ClLinks  term={"string"}><b>string=</b></ClLinks>), not by their identity; as such, they may be in any package. A <GlossaryTerm styled={true} term={"loop keyword"}><i>loop keyword</i></GlossaryTerm> is not a <ClLinks  term={"keyword"}><i>keyword</i></ClLinks>. 



**lowercase** *adj.* (of a <ClLinks  term={"character"}><i>character</i></ClLinks> ) being among <GlossaryTerm styled={true} term={"standard character"}><i>standard characters</i></GlossaryTerm> corresponding to the small letters a through z, or being some other *implementation-defined character* that 







 



 



is defined by the <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> to be <ClLinks  term={"lowercase"}><i>lowercase</i></ClLinks>. See Section 13.1.4.3 (Characters With Case). 




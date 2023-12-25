---
title: L
sidebar_position: 108
---

**L** 



**lambda combination** *n. Trad.* a *lambda form*. 



**lambda expression** *n.* a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> which can be used in place of a *function name* in certain contexts to denote a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> by directly describing its behavior rather than indirectly by referring to the name of an *established function*; its name derives from the fact that its first element is the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> lambda. See <DictionaryLink styled={true} term={"lambda"}><b>lambda</b></DictionaryLink>. 



**lambda form** *n.* a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> that is a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> and that has a first element which is a *lambda expression* representing a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> to be called on <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> which are the result of *evaluating* subsequent elements of the *lambda form*. 



**lambda list** *n.* a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> that specifies a set of <GlossaryTerm styled={true} term={"parameter"}><i>parameters</i></GlossaryTerm> (sometimes called *lambda variables*) and a protocol for receiving <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> for those <GlossaryTerm styled={true} term={"parameter"}><i>parameters</i></GlossaryTerm>; that is, an *ordinary lambda list*, an *extended lambda list*, or a *modified lambda list*. 







 



 



**lambda list keyword** *n.* a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> whose <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> begins with <GlossaryTerm styled={true} term={"ampersand"}><i>ampersand</i></GlossaryTerm> and that is specially recognized in a *lambda list*. Note that no *standardized lambda list keyword* is in the KEYWORD <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. 



**lambda variable** *n.* a *formal parameter* , used to emphasize the <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm>’s relation to the *lambda list* that *established* it. 



**leaf** *n.* 1. an <GlossaryTerm styled={true} term={"atom"}><i>atom</i></GlossaryTerm> in a <GlossaryTerm styled={true} term={"tree"}><i>tree</i></GlossaryTerm><sub>1</sub>. 2. a terminal node of a <GlossaryTerm styled={true} term={"tree"}><i>tree</i></GlossaryTerm><sub>2</sub>. 



**leap seconds** *n.* additional one-second intervals of time that are occasionally inserted into the true calendar by official timekeepers as a correction similar to “leap years.” All Common Lisp <GlossaryTerm styled={true} term={"time"}><i>time</i></GlossaryTerm> representations ignore *leap seconds*; every day is assumed to be exactly 86400 seconds long. 



**left-parenthesis** *n.* the *standard character* “(”, that is variously called “left 



parenthesis” or “open parenthesis” See Figure 2–5. 



<DictionaryLink styled={true} term={"length"}><b>length</b></DictionaryLink> *n.* (of a *sequence*) the number of <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm> in the *sequence*. (Note that if the *sequence* is a <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> with a *fill pointer* , its <GlossaryTerm styled={true} term={"length"}><i>length</i></GlossaryTerm> is the same as the *fill pointer* even though the total allocated size of the <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> might be larger.) 



**lexical binding** *n.* a <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> in a *lexical environment*. 



**lexical closure** *n.* a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> that, when invoked on <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm>, executes the body of a *lambda expression* in the *lexical environment* that was captured at the time of the creation of the *lexical closure*, augmented by <GlossaryTerm styled={true} term={"binding"}><i>bindings</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>’s <GlossaryTerm styled={true} term={"parameter"}><i>parameters</i></GlossaryTerm> to the corresponding <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm>. 



**lexical environment** *n.* that part of the <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm> that contains <GlossaryTerm styled={true} term={"binding"}><i>bindings</i></GlossaryTerm> whose names have *lexical scope*. A *lexical environment* contains, among other things: 



ordinary <GlossaryTerm styled={true} term={"binding"}><i>bindings</i></GlossaryTerm> of *variable names* to <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm>, lexically *established bindings* of *function names* to <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"macro"}><i>macros</i></GlossaryTerm>, *symbol macros*, *blocks*, *tags*, and *local declarations* (see <DictionaryLink styled={true} term={"declare"}><b>declare</b></DictionaryLink>). 



**lexical scope** *n. scope* that is limited to a spatial or textual region within the 



establishing <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. “The names of parameters to a function normally are lexically scoped.” 



**lexical variable** *n.* a <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm> the <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> for which is in the *lexical environment*. 



**Lisp image** *n.* a running instantiation of a Common Lisp <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm>. A *Lisp image* is characterized by a single address space in which any <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> can directly refer to any another in conformance with this specification, and by a single, common, *global environment*. (External operating systems sometimes call this a “core image,” “fork,” “incarnation,” “job,” or “process.” Note however, that the issue of a “process” in such 







 



 



an operating system is technically orthogonal to the issue of a *Lisp image* being defined here. Depending on the operating system, a single “process” might have multiple *Lisp images*, and multiple “processes” might reside in a single *Lisp image*. Hence, it is the idea of a fully shared address space for direct reference among all <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> which is the defining characteristic. Note, too, that two “processes” which have a communication 



area that permits the sharing of some but not all <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> are considered to be distinct *Lisp images*.) 



**Lisp printer** *n. Trad.* the procedure that prints the character representation of an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> onto a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. (This procedure is implemented by the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"write"}><b>write</b></DictionaryLink>.) 



**Lisp read-eval-print loop** *n. Trad.* an endless loop that <GlossaryTerm styled={true} term={"read"}><i>reads</i></GlossaryTerm><sub>2</sub> a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"evaluate"}><i>evaluates</i></GlossaryTerm> it, and prints (*i.e.*, <GlossaryTerm styled={true} term={"write"}><i>writes</i></GlossaryTerm><sub>2</sub>) the results. In many <GlossaryTerm styled={true} term={"implementation"}><i>implementations</i></GlossaryTerm>, the default mode of interaction with Common Lisp during program development is through such a loop. 



**Lisp reader** *n. Trad.* the procedure that parses character representations of <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> from a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>, producing <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm>. (This procedure is implemented by the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"read"}><b>read</b></DictionaryLink>.) 



<DictionaryLink styled={true} term={"list"}><b>list</b></DictionaryLink> *n.* 1. a chain of *conses* in which the <GlossaryTerm styled={true} term={"car"}><i>car</i></GlossaryTerm> of each <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm> is an <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>, and the <GlossaryTerm styled={true} term={"cdr"}><i>cdr</i></GlossaryTerm> of each <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm> is either the next link in the chain or a terminating <GlossaryTerm styled={true} term={"atom"}><i>atom</i></GlossaryTerm>. See also *proper list<GlossaryTerm styled={true} term={"t"}><i>, </i></GlossaryTerm>dotted list*, or *circular list*. 2. the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> that is the union of <DictionaryLink styled={true} term={"null"}><b>null</b></DictionaryLink> and <DictionaryLink styled={true} term={"cons"}><b>cons</b></DictionaryLink>. 



**list designator** *n.* a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm>; that is, an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that denotes a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> and that is one of: a *non-nil atom* (denoting a *singleton list* whose <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm> is that *non-nil atom*) or a *proper list* (denoting itself). 



<b>list structure</b> <i>n.</i> (of a <i>list</i>) the set of <i>conses</i> that make up the <i>list</i>. Note that while the <i>car</i> <sub>1<i>b</i></sub> component of each such <i>cons</i> is part of the <i>list structure</i>, the <i>objects</i> that are <i>elements</i> of the <i>list</i> (<i>i.e.</i>, the <i>objects</i> that are the <i>cars</i><sub>2</sub> of each <i>cons</i> in the <i>list</i>) are not themselves part of its <i>list structure</i>, even if they are <i>conses</i>, except in the (<i>circular</i> <sub>2</sub>) case where the <i>list</i> actually contains one of its <i>tails</i> as an <i>element</i>. (The <i>list structure</i> of a <i>list</i> is sometimes redundantly referred to as its “top-level list structure” in order to emphasize that any <i>conses</i> that are <i>elements</i> of the <i>list</i> are not involved.) 



**literal** *adj.* (of an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>) referenced directly in a program rather than being computed by the program; that is, appearing as data in a <DictionaryLink styled={true} term={"quote"}><b>quote</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>, or, if the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is a *self evaluating object*, appearing as unquoted data. “In the form (cons "one" ’("two")), the expressions "one", ("two"), and "two" are literal objects.” 



<DictionaryLink styled={true} term={"load"}><b>load</b></DictionaryLink> *v.t.* (a <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm>) to cause the <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm> contained in the <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm> to be *executed*. See the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"load"}><b>load</b></DictionaryLink>. 



**load time** *n.* the duration of time that the loader is *loading compiled code*. 







 



 



**load time value** *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> referred to in <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm> by a <DictionaryLink styled={true} term={"load-time-value"}><b>load-time-value</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. The <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of such a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> is some specific <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> which can only be computed in the 



run-time <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm>. In the case of *file compilation*, the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> is computed once as part of the process of *loading* the *compiled file*, and not again. See the *special operator* <DictionaryLink styled={true} term={"load-time-value"}><b>load-time-value</b></DictionaryLink>. 



**loader** *n.* a facility that is part of Lisp and that <GlossaryTerm styled={true} term={"load"}><i>loads</i></GlossaryTerm> a <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm>. See the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"load"}><b>load</b></DictionaryLink>. 



**local declaration** *n.* an <GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm> which may appear only in specially designated positions of certain <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>, and which provides information about the code contained within the containing <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>; that is, a <DictionaryLink styled={true} term={"declare"}><b>declare</b></DictionaryLink> <GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm>. 



**local precedence order** *n.* (of a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>) a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> consisting of the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> followed by its *direct superclasses* in the order mentioned in the defining <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> for the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>. 



**local slot** *n.* (of a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>) a *slot accessible* in only one <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm>, namely the <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> in which the <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> is allocated. 



**logical block** *n.* a conceptual grouping of related output used by the *pretty printer* . See the <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm> <DictionaryLink styled={true} term={"pprint-logical-block"}><b>pprint-logical-block</b></DictionaryLink> and Section 22.2.1.1 (Dynamic Control of the Arrangement of Output). 



**logical host** *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> nature that is used as the representation of a “host” in a *logical pathname*, and that has an associated set of translation rules for converting *logical pathnames* belonging to that host into *physical pathnames*. See Section 19.3 (Logical Pathnames). 



**logical host designator** *n.* a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a *logical host*; that is, an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that denotes a *logical host* and that is one of: a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> (denoting the *logical host* that it names), or a *logical host* (denoting itself). (Note that because the representation of a *logical host* is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>, it is possible that an <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> might represent a *logical host* as the <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> that names it.) 



**logical pathname** *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"logical-pathname"}><b>logical-pathname</b></DictionaryLink>. 



**long float** *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"long-float"}><b>long-float</b></DictionaryLink>. 



**loop keyword** *n. Trad.* a symbol that is a specially recognized part of the syntax of an extended <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. Such symbols are recognized by their <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> (using <DictionaryLink styled={true} term={"string"}><b>string=</b></DictionaryLink>), not by their identity; as such, they may be in any package. A *loop keyword* is not a <GlossaryTerm styled={true} term={"keyword"}><i>keyword</i></GlossaryTerm>. 



**lowercase** *adj.* (of a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> ) being among *standard characters* corresponding to the small letters a through z, or being some other *implementation-defined character* that 







 



 



is defined by the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> to be <GlossaryTerm styled={true} term={"lowercase"}><i>lowercase</i></GlossaryTerm>. See Section 13.1.4.3 (Characters With Case). 




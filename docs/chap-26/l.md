---
title: L
sidebar_position: 108
---

**L** 



**lambda combination** *n. Trad.* a *lambda form*. 



**lambda expression** *n.* a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> which can be used in place of a *function name* in certain contexts to denote a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> by directly describing its behavior rather than indirectly by referring to the name of an *established function*; its name derives from the fact that its first element is the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> lambda. See <ClLinks styled={true} term={"lambda"}><b>lambda</b></ClLinks>. 



**lambda form** *n.* a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> that is a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> and that has a first element which is a *lambda expression* representing a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> to be called on <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> which are the result of *evaluating* subsequent elements of the *lambda form*. 



**lambda list** *n.* a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> that specifies a set of <ClLinks styled={true} term={"parameter"}><i>parameters</i></ClLinks> (sometimes called *lambda variables*) and a protocol for receiving <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> for those <ClLinks styled={true} term={"parameter"}><i>parameters</i></ClLinks>; that is, an *ordinary lambda list*, an *extended lambda list*, or a *modified lambda list*. 







 



 



**lambda list keyword** *n.* a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> whose <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> begins with <ClLinks styled={true} term={"ampersand"}><i>ampersand</i></ClLinks> and that is specially recognized in a *lambda list*. Note that no *standardized lambda list keyword* is in the KEYWORD <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. 



**lambda variable** *n.* a *formal parameter* , used to emphasize the <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks>’s relation to the *lambda list* that *established* it. 



**leaf** *n.* 1. an <ClLinks styled={true} term={"atom"}><i>atom</i></ClLinks> in a <ClLinks styled={true} term={"tree"}><i>tree</i></ClLinks><sub>1</sub>. 2. a terminal node of a <ClLinks styled={true} term={"tree"}><i>tree</i></ClLinks><sub>2</sub>. 



**leap seconds** *n.* additional one-second intervals of time that are occasionally inserted into the true calendar by official timekeepers as a correction similar to “leap years.” All Common Lisp <ClLinks styled={true} term={"time"}><i>time</i></ClLinks> representations ignore *leap seconds*; every day is assumed to be exactly 86400 seconds long. 



**left-parenthesis** *n.* the *standard character* “(”, that is variously called “left 



parenthesis” or “open parenthesis” See Figure 2–5. 



<ClLinks styled={true} term={"length"}><b>length</b></ClLinks> *n.* (of a *sequence*) the number of <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks> in the *sequence*. (Note that if the *sequence* is a <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> with a *fill pointer* , its <ClLinks styled={true} term={"length"}><i>length</i></ClLinks> is the same as the *fill pointer* even though the total allocated size of the <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> might be larger.) 



**lexical binding** *n.* a <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> in a *lexical environment*. 



**lexical closure** *n.* a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> that, when invoked on <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks>, executes the body of a *lambda expression* in the *lexical environment* that was captured at the time of the creation of the *lexical closure*, augmented by <ClLinks styled={true} term={"binding"}><i>bindings</i></ClLinks> of the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>’s <ClLinks styled={true} term={"parameter"}><i>parameters</i></ClLinks> to the corresponding <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks>. 



**lexical environment** *n.* that part of the <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks> that contains <ClLinks styled={true} term={"binding"}><i>bindings</i></ClLinks> whose names have *lexical scope*. A *lexical environment* contains, among other things: 



ordinary <ClLinks styled={true} term={"binding"}><i>bindings</i></ClLinks> of *variable names* to <ClLinks styled={true} term={"value"}><i>values</i></ClLinks>, lexically *established bindings* of *function names* to <ClLinks styled={true} term={"function"}><i>functions</i></ClLinks>, <ClLinks styled={true} term={"macro"}><i>macros</i></ClLinks>, *symbol macros*, *blocks*, *tags*, and *local declarations* (see <ClLinks styled={true} term={"declare"}><b>declare</b></ClLinks>). 



**lexical scope** *n. scope* that is limited to a spatial or textual region within the 



establishing <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. “The names of parameters to a function normally are lexically scoped.” 



**lexical variable** *n.* a <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks> the <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> for which is in the *lexical environment*. 



**Lisp image** *n.* a running instantiation of a Common Lisp <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks>. A *Lisp image* is characterized by a single address space in which any <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> can directly refer to any another in conformance with this specification, and by a single, common, *global environment*. (External operating systems sometimes call this a “core image,” “fork,” “incarnation,” “job,” or “process.” Note however, that the issue of a “process” in such 







 



 



an operating system is technically orthogonal to the issue of a *Lisp image* being defined here. Depending on the operating system, a single “process” might have multiple *Lisp images*, and multiple “processes” might reside in a single *Lisp image*. Hence, it is the idea of a fully shared address space for direct reference among all <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> which is the defining characteristic. Note, too, that two “processes” which have a communication 



area that permits the sharing of some but not all <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> are considered to be distinct *Lisp images*.) 



**Lisp printer** *n. Trad.* the procedure that prints the character representation of an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> onto a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>. (This procedure is implemented by the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"write"}><b>write</b></ClLinks>.) 



**Lisp read-eval-print loop** *n. Trad.* an endless loop that <ClLinks styled={true} term={"read"}><i>reads</i></ClLinks><sub>2</sub> a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>, <ClLinks styled={true} term={"evaluate"}><i>evaluates</i></ClLinks> it, and prints (*i.e.*, <ClLinks styled={true} term={"write"}><i>writes</i></ClLinks><sub>2</sub>) the results. In many <ClLinks styled={true} term={"implementation"}><i>implementations</i></ClLinks>, the default mode of interaction with Common Lisp during program development is through such a loop. 



**Lisp reader** *n. Trad.* the procedure that parses character representations of <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> from a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>, producing <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks>. (This procedure is implemented by the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"read"}><b>read</b></ClLinks>.) 



<ClLinks styled={true} term={"list"}><b>list</b></ClLinks> *n.* 1. a chain of *conses* in which the <ClLinks styled={true} term={"car"}><i>car</i></ClLinks> of each <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks> is an <ClLinks styled={true} term={"element"}><i>element</i></ClLinks> of the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>, and the <ClLinks styled={true} term={"cdr"}><i>cdr</i></ClLinks> of each <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks> is either the next link in the chain or a terminating <ClLinks styled={true} term={"atom"}><i>atom</i></ClLinks>. See also *proper list<ClLinks styled={true} term={"t"}><i>, </i></ClLinks>dotted list*, or *circular list*. 2. the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> that is the union of <ClLinks styled={true} term={"null"}><b>null</b></ClLinks> and <ClLinks styled={true} term={"cons"}><b>cons</b></ClLinks>. 



**list designator** *n.* a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks>; that is, an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that denotes a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> and that is one of: a *non-nil atom* (denoting a *singleton list* whose <ClLinks styled={true} term={"element"}><i>element</i></ClLinks> is that *non-nil atom*) or a *proper list* (denoting itself). 



<b>list structure</b> <i>n.</i> (of a <i>list</i>) the set of <i>conses</i> that make up the <i>list</i>. Note that while the <i>car</i> <sub>1<i>b</i></sub> component of each such <i>cons</i> is part of the <i>list structure</i>, the <i>objects</i> that are <i>elements</i> of the <i>list</i> (<i>i.e.</i>, the <i>objects</i> that are the <i>cars</i><sub>2</sub> of each <i>cons</i> in the <i>list</i>) are not themselves part of its <i>list structure</i>, even if they are <i>conses</i>, except in the (<i>circular</i> <sub>2</sub>) case where the <i>list</i> actually contains one of its <i>tails</i> as an <i>element</i>. (The <i>list structure</i> of a <i>list</i> is sometimes redundantly referred to as its “top-level list structure” in order to emphasize that any <i>conses</i> that are <i>elements</i> of the <i>list</i> are not involved.) 



**literal** *adj.* (of an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>) referenced directly in a program rather than being computed by the program; that is, appearing as data in a <ClLinks styled={true} term={"quote"}><b>quote</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>, or, if the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is a *self evaluating object*, appearing as unquoted data. “In the form (cons "one" ’("two")), the expressions "one", ("two"), and "two" are literal objects.” 



<ClLinks styled={true} term={"load"}><b>load</b></ClLinks> *v.t.* (a <ClLinks styled={true} term={"file"}><i>file</i></ClLinks>) to cause the <ClLinks styled={true} term={"code"}><i>code</i></ClLinks> contained in the <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> to be *executed*. See the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"load"}><b>load</b></ClLinks>. 



**load time** *n.* the duration of time that the loader is *loading compiled code*. 







 



 



**load time value** *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> referred to in <ClLinks styled={true} term={"code"}><i>code</i></ClLinks> by a <ClLinks styled={true} term={"load-time-value"}><b>load-time-value</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. The <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of such a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> is some specific <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> which can only be computed in the 



run-time <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks>. In the case of *file compilation*, the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> is computed once as part of the process of *loading* the *compiled file*, and not again. See the *special operator* <ClLinks styled={true} term={"load-time-value"}><b>load-time-value</b></ClLinks>. 



**loader** *n.* a facility that is part of Lisp and that <ClLinks styled={true} term={"load"}><i>loads</i></ClLinks> a <ClLinks styled={true} term={"file"}><i>file</i></ClLinks>. See the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"load"}><b>load</b></ClLinks>. 



**local declaration** *n.* an <ClLinks styled={true} term={"expression"}><i>expression</i></ClLinks> which may appear only in specially designated positions of certain <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>, and which provides information about the code contained within the containing <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>; that is, a <ClLinks styled={true} term={"declare"}><b>declare</b></ClLinks> <ClLinks styled={true} term={"expression"}><i>expression</i></ClLinks>. 



**local precedence order** *n.* (of a <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>) a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> consisting of the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> followed by its *direct superclasses* in the order mentioned in the defining <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> for the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>. 



**local slot** *n.* (of a <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>) a *slot accessible* in only one <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks>, namely the <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> in which the <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> is allocated. 



**logical block** *n.* a conceptual grouping of related output used by the *pretty printer* . See the <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks> <ClLinks styled={true} term={"pprint-logical-block"}><b>pprint-logical-block</b></ClLinks> and Section 22.2.1.1 (Dynamic Control of the Arrangement of Output). 



**logical host** *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> of <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> nature that is used as the representation of a “host” in a *logical pathname*, and that has an associated set of translation rules for converting *logical pathnames* belonging to that host into *physical pathnames*. See Section 19.3 (Logical Pathnames). 



**logical host designator** *n.* a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a *logical host*; that is, an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that denotes a *logical host* and that is one of: a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> (denoting the *logical host* that it names), or a *logical host* (denoting itself). (Note that because the representation of a *logical host* is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>, it is possible that an <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> might represent a *logical host* as the <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> that names it.) 



**logical pathname** *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"logical-pathname"}><b>logical-pathname</b></ClLinks>. 



**long float** *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"long-float"}><b>long-float</b></ClLinks>. 



**loop keyword** *n. Trad.* a symbol that is a specially recognized part of the syntax of an extended <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. Such symbols are recognized by their <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> (using <ClLinks styled={true} term={"string"}><b>string=</b></ClLinks>), not by their identity; as such, they may be in any package. A *loop keyword* is not a <ClLinks styled={true} term={"keyword"}><i>keyword</i></ClLinks>. 



**lowercase** *adj.* (of a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> ) being among *standard characters* corresponding to the small letters a through z, or being some other *implementation-defined character* that 







 



 



is defined by the <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> to be <ClLinks styled={true} term={"lowercase"}><i>lowercase</i></ClLinks>. See Section 13.1.4.3 (Characters With Case). 




---
title: R
sidebar_position: 114
---

**R** 



**radix** *n.* an *integer* between 2 and 36, inclusive, which can be used to designate a base with respect to which certain kinds of numeric input or output are performed. (There are *n* valid digit characters for any given *radix n*, and those digits are the first *n* digits in the sequence 0, 1, *. . .*, 9, A, B, *. . .*, Z, which have the weights 0, 1, *. . .*, 9, 10, 11, *. . .*, 



35, respectively. Case is not significant in parsing numbers of radix greater than 10, so “9b8a” and “9B8A” denote the same <GlossaryTerm styled={true} term={"radix"}><i>radix</i></GlossaryTerm> 16 number.) 



**random state** *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"random-state"}><b>random-state</b></DictionaryLink>. 



**rank** *n.* a non-negative *integer* indicating the number of <GlossaryTerm styled={true} term={"dimension"}><i>dimensions</i></GlossaryTerm> of an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. 



<DictionaryLink styled={true} term={"ratio"}><b>ratio</b></DictionaryLink> *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"ratio"}><b>ratio</b></DictionaryLink>. 







 



 



**ratio marker** *n.* a character which is used in the textual notation for a <GlossaryTerm styled={true} term={"ratio"}><i>ratio</i></GlossaryTerm> to separate the numerator from the denominator, and which is <GlossaryTerm styled={true} term={"slash"}><i>slash</i></GlossaryTerm> in the *standard readtable*. See Section 2.1 (Character Syntax). 



<DictionaryLink styled={true} term={"rational"}><b>rational</b></DictionaryLink> *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"rational"}><b>rational</b></DictionaryLink>. 



<DictionaryLink styled={true} term={"read"}><b>read</b></DictionaryLink> *v.t.* 1. (a <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> or component) to obtain the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm>. 2. (an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> from a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>) to parse an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> from its representation on the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. 



**readably** *adv.* (of a manner of printing an *object O*<sub>1</sub>) in such a way as to permit the *Lisp Reader* to later *parse* the printed output into an *object O*<sub>2</sub> that is <GlossaryTerm styled={true} term={"similar"}><i>similar</i></GlossaryTerm> to *O*<sub>1</sub>. 



**reader** *n.* 1. a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> that <GlossaryTerm styled={true} term={"read"}><i>reads</i></GlossaryTerm><sub>1</sub> a <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm>. 2. the *Lisp reader* . 



**reader macro** *n.* 1. a textual notation introduced by dispatch on one or two 



<GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> that defines special-purpose syntax for use by the *Lisp reader* , and that is implemented by a *reader macro function*. See Section 2.2 (Reader Algorithm). 2. the <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> that introduce a *reader macro*<sub>1</sub>; that is, a *macro character* or the conceptual pairing of a *dispatching macro character* and the <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> that follows 



it. (A *reader macro* is not a kind of <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm>.) 



**reader macro function** *n.* a *function designator* that denotes a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> 



that implements a *reader macro*<sub>2</sub>. See the <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm> <DictionaryLink styled={true} term={"set-macro-character"}><b>set-macro-character</b></DictionaryLink> and 



**set-dispatch-macro-character**. 



<DictionaryLink styled={true} term={"readtable"}><b>readtable</b></DictionaryLink> *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"readtable"}><b>readtable</b></DictionaryLink>. 



**readtable case** *n.* an attribute of a <GlossaryTerm styled={true} term={"readtable"}><i>readtable</i></GlossaryTerm> whose value is a *case sensitivity mode*, and that selects the manner in which <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> in a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>’s <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> are to be treated by the *Lisp reader* and the *Lisp printer* . See Section 23.1.2 (Effect of Readtable Case on the Lisp Reader) and Section 22.1.3.3.2 (Effect of Readtable Case on the Lisp 



Printer). 



**readtable designator** *n.* a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"readtable"}><i>readtable</i></GlossaryTerm>; that is, an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that denotes a <GlossaryTerm styled={true} term={"readtable"}><i>readtable</i></GlossaryTerm> and that is one of: <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> (denoting the *standard readtable*), or a <GlossaryTerm styled={true} term={"readtable"}><i>readtable</i></GlossaryTerm> (denoting itself). 



**recognizable subtype** *n.* (of a <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>) a <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> which can be reliably detected to be such by the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm>. See the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"subtypep"}><b>subtypep</b></DictionaryLink>. 



**reference** *n.*, *v.t.* 1. *n.* an act or occurrence of referring to an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm>, an *exit point*, a <GlossaryTerm styled={true} term={"tag"}><i>tag</i></GlossaryTerm>, or an <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm>. 2. *v.t.* to refer to an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm>, an *exit point*, a <GlossaryTerm styled={true} term={"tag"}><i>tag</i></GlossaryTerm>, or an <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm>, usually by <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>. 







 



 



**registered package** *n.* a *package object* that is installed in the *package registry*. (Every *registered package* has a <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> that is a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>, as well as zero or more <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> nicknames. All <GlossaryTerm styled={true} term={"package"}><i>packages</i></GlossaryTerm> that are initially specified by Common Lisp or created by <DictionaryLink styled={true} term={"make-package"}><b>make-package</b></DictionaryLink> or <DictionaryLink styled={true} term={"defpackage"}><b>defpackage</b></DictionaryLink> are *registered packages*. *Registered packages* can be turned into *unregistered packages* by <DictionaryLink styled={true} term={"delete-package"}><b>delete-package</b></DictionaryLink>.) 



**relative** *adj.* 1. (of a <GlossaryTerm styled={true} term={"time"}><i>time</i></GlossaryTerm>) representing an offset from an *absolute time* in the 



units appropriate to that time. For example, a *relative internal time* is the difference between two *absolute internal times*, and is measured in *internal time units*. 2. (of a <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm>) representing a position in a directory hierarchy by motion from a position other than the root, which might therefore vary. “The notation #P"../foo.text" 



denotes a relative pathname if the host file system is Unix.” See <GlossaryTerm styled={true} term={"absolute"}><i>absolute</i></GlossaryTerm>. 



**repertoire** *n.*, *ISO* a <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> of <DictionaryLink styled={true} term={"character"}><b>character</b></DictionaryLink>. See Section 13.1.2.2 (Character 



Repertoires). 



**report** *n.* (of a <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm>) to <GlossaryTerm styled={true} term={"call"}><i>call</i></GlossaryTerm> the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"print-object"}><b>print-object</b></DictionaryLink> on the <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> in an <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm> where the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"print-escape"}><b>\*print-escape\*</b></DictionaryLink> is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 



**report message** *n.* the text that is output by a *condition reporter* . 



**required parameter** *n.* A <GlossaryTerm styled={true} term={"parameter"}><i>parameter</i></GlossaryTerm> for which a corresponding positional <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> must be supplied when *calling* the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>. 



**rest list** *n.* (of a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> having a *rest parameter* ) The <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> to which the *rest parameter* is <GlossaryTerm styled={true} term={"bound"}><i>bound</i></GlossaryTerm> on some particular <GlossaryTerm styled={true} term={"call"}><i>call</i></GlossaryTerm> to the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>. 



**rest parameter** *n.* A <GlossaryTerm styled={true} term={"parameter"}><i>parameter</i></GlossaryTerm> which was introduced by **&amp;rest**. 



<DictionaryLink styled={true} term={"restart"}><b>restart</b></DictionaryLink> *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"restart"}><b>restart</b></DictionaryLink>. 



**restart designator** *n.* a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm>; that is, an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that denotes a <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm> and that is one of: a *non-nil symbol* (denoting the most recently established *active restart* whose <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> is that <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>), or a <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm> (denoting itself). 



**restart function** *n.* a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> that invokes a <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm>, as if by <DictionaryLink styled={true} term={"invoke-restart"}><b>invoke-restart</b></DictionaryLink>. 



The primary purpose of a *restart function* is to provide an alternate interface. By convention, a *restart function* usually has the same name as the <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm> which it invokes. Figure 26–4 shows a list of the *standardized restart functions*. 



|<p>**abort muffle-warning use-value** </p><p>**continue store-value**</p>|

| :- |





**Figure 26–4. Standardized Restart Functions** 







 



 



<DictionaryLink styled={true} term={"return"}><b>return</b></DictionaryLink> *v.t.* (of <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm>) 1. (from a <GlossaryTerm styled={true} term={"block"}><i>block</i></GlossaryTerm>) to transfer control and <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> from the <GlossaryTerm styled={true} term={"block"}><i>block</i></GlossaryTerm>; that is, to cause the <GlossaryTerm styled={true} term={"block"}><i>block</i></GlossaryTerm> to <GlossaryTerm styled={true} term={"yield"}><i>yield</i></GlossaryTerm> the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> immediately without doing any further evaluation of the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> in its body. 2. (from a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>) to <GlossaryTerm styled={true} term={"yield"}><i>yield</i></GlossaryTerm> the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm>. 



**return value** *n. Trad.* a <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm><sub>1</sub> 



**right-parenthesis** *n.* the *standard character* “)”, that is variously called “right 



parenthesis” or “close parenthesis” See Figure 2–5. 



**run time** *n.* 1. *load time* 2. *execution time* 



**run-time compiler** *n.* refers to the <DictionaryLink styled={true} term={"compile"}><b>compile</b></DictionaryLink> function or to *implicit compilation*, for which the compilation and run-time <GlossaryTerm styled={true} term={"environment"}><i>environments</i></GlossaryTerm> are maintained in the same *Lisp image*. 



**run-time definition** *n.* a definition in the *run-time environment*. 



**run-time environment** *n.* the <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm> in which a program is *executed*. 




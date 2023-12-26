---
title: R
sidebar_position: 114
---

**R** 



**radix** *n.* an *integer* between 2 and 36, inclusive, which can be used to designate a base with respect to which certain kinds of numeric input or output are performed. (There are *n* valid digit characters for any given *radix n*, and those digits are the first *n* digits in the sequence 0, 1, *. . .*, 9, A, B, *. . .*, Z, which have the weights 0, 1, *. . .*, 9, 10, 11, *. . .*, 



35, respectively. Case is not significant in parsing numbers of radix greater than 10, so “9b8a” and “9B8A” denote the same <GlossaryTerm  term={"radix"}><i>radix</i></GlossaryTerm> 16 number.) 



**random state** *n.* an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"random-state"}><b>random-state</b></DictionaryLink>. 



**rank** *n.* a non-negative *integer* indicating the number of <GlossaryTerm  term={"dimension"}><i>dimensions</i></GlossaryTerm> of an <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>. 



<DictionaryLink  term={"ratio"}><b>ratio</b></DictionaryLink> *n.* an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"ratio"}><b>ratio</b></DictionaryLink>. 







 



 



**ratio marker** *n.* a character which is used in the textual notation for a <GlossaryTerm  term={"ratio"}><i>ratio</i></GlossaryTerm> to separate the numerator from the denominator, and which is <GlossaryTerm  term={"slash"}><i>slash</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"standard readtable"}><i>standard readtable</i></GlossaryTerm>. See Section 2.1 (Character Syntax). 



<DictionaryLink  term={"rational"}><b>rational</b></DictionaryLink> *n.* an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"rational"}><b>rational</b></DictionaryLink>. 



<DictionaryLink  term={"read"}><b>read</b></DictionaryLink> *v.t.* 1. (a <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm> or <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> or component) to obtain the <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of the <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm> or <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm>. 2. (an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> from a <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>) to parse an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> from its representation on the <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>. 



**readably** *adv.* (of a manner of printing an *object O*<sub>1</sub>) in such a way as to permit the *Lisp Reader* to later *parse* the printed output into an *object O*<sub>2</sub> that is <GlossaryTerm  term={"similar"}><i>similar</i></GlossaryTerm> to *O*<sub>1</sub>. 



**reader** *n.* 1. a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> that <GlossaryTerm  term={"read"}><i>reads</i></GlossaryTerm><sub>1</sub> a <GlossaryTerm  term={"variable"}><i>variable</i></GlossaryTerm> or <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm>. 2. the *Lisp reader* . 



**reader macro** *n.* 1. a textual notation introduced by dispatch on one or two 



<GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm> that defines special-purpose syntax for use by the *Lisp reader* , and that is implemented by a <GlossaryTerm styled={true} term={"reader macro function"}><i>reader macro function</i></GlossaryTerm>. See Section 2.2 (Reader Algorithm). 2. the <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> or <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm> that introduce a <GlossaryTerm styled={true} term={"reader macro"}><i>reader macro</i></GlossaryTerm><sub>1</sub>; that is, a <GlossaryTerm styled={true} term={"macro character"}><i>macro character</i></GlossaryTerm> or the conceptual pairing of a <GlossaryTerm styled={true} term={"dispatching macro character"}><i>dispatching macro character</i></GlossaryTerm> and the <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> that follows 



it. (A <GlossaryTerm styled={true} term={"reader macro"}><i>reader macro</i></GlossaryTerm> is not a kind of <GlossaryTerm  term={"macro"}><i>macro</i></GlossaryTerm>.) 



**reader macro function** *n.* a <GlossaryTerm styled={true} term={"function designator"}><i>function designator</i></GlossaryTerm> that denotes a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> 



that implements a <GlossaryTerm styled={true} term={"reader macro"}><i>reader macro</i></GlossaryTerm><sub>2</sub>. See the <GlossaryTerm  term={"function"}><i>functions</i></GlossaryTerm> <DictionaryLink  term={"set-macro-character"}><b>set-macro-character</b></DictionaryLink> and 



**set-dispatch-macro-character**. 



<DictionaryLink  term={"readtable"}><b>readtable</b></DictionaryLink> *n.* an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"readtable"}><b>readtable</b></DictionaryLink>. 



**readtable case** *n.* an attribute of a <GlossaryTerm  term={"readtable"}><i>readtable</i></GlossaryTerm> whose value is a <GlossaryTerm styled={true} term={"case sensitivity mode"}><i>case sensitivity mode</i></GlossaryTerm>, and that selects the manner in which <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm> in a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>’s <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> are to be treated by the *Lisp reader* and the *Lisp printer* . See Section 23.1.2 (Effect of Readtable Case on the Lisp Reader) and Section 22.1.3.3.2 (Effect of Readtable Case on the Lisp 



Printer). 



**readtable designator** *n.* a <GlossaryTerm  term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm  term={"readtable"}><i>readtable</i></GlossaryTerm>; that is, an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> that denotes a <GlossaryTerm  term={"readtable"}><i>readtable</i></GlossaryTerm> and that is one of: <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> (denoting the <GlossaryTerm styled={true} term={"standard readtable"}><i>standard readtable</i></GlossaryTerm>), or a <GlossaryTerm  term={"readtable"}><i>readtable</i></GlossaryTerm> (denoting itself). 



**recognizable subtype** *n.* (of a <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm>) a <GlossaryTerm  term={"subtype"}><i>subtype</i></GlossaryTerm> of the <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> which can be reliably detected to be such by the <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm>. See the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"subtypep"}><b>subtypep</b></DictionaryLink>. 



**reference** *n.*, *v.t.* 1. *n.* an act or occurrence of referring to an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>, a <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm>, an <GlossaryTerm styled={true} term={"exit point"}><i>exit point</i></GlossaryTerm>, a <GlossaryTerm  term={"tag"}><i>tag</i></GlossaryTerm>, or an <GlossaryTerm  term={"environment"}><i>environment</i></GlossaryTerm>. 2. *v.t.* to refer to an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>, a <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm>, an <GlossaryTerm styled={true} term={"exit point"}><i>exit point</i></GlossaryTerm>, a <GlossaryTerm  term={"tag"}><i>tag</i></GlossaryTerm>, or an <GlossaryTerm  term={"environment"}><i>environment</i></GlossaryTerm>, usually by <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm>. 







 



 



**registered package** *n.* a *package object* that is installed in the <GlossaryTerm styled={true} term={"package registry"}><i>package registry</i></GlossaryTerm>. (Every <GlossaryTerm styled={true} term={"registered package"}><i>registered package</i></GlossaryTerm> has a <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> that is a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>, as well as zero or more <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> nicknames. All <GlossaryTerm  term={"package"}><i>packages</i></GlossaryTerm> that are initially specified by Common Lisp or created by <DictionaryLink  term={"make-package"}><b>make-package</b></DictionaryLink> or <DictionaryLink  term={"defpackage"}><b>defpackage</b></DictionaryLink> are <GlossaryTerm styled={true} term={"registered package"}><i>registered packages</i></GlossaryTerm>. <GlossaryTerm styled={true} term={"registered package"}><i>Registered packages</i></GlossaryTerm> can be turned into <GlossaryTerm styled={true} term={"unregistered package"}><i>unregistered packages</i></GlossaryTerm> by <DictionaryLink  term={"delete-package"}><b>delete-package</b></DictionaryLink>.) 



**relative** *adj.* 1. (of a <GlossaryTerm  term={"time"}><i>time</i></GlossaryTerm>) representing an offset from an *absolute time* in the 



units appropriate to that time. For example, a *relative internal time* is the difference between two *absolute internal times*, and is measured in <GlossaryTerm styled={true} term={"internal time unit"}><i>internal time units</i></GlossaryTerm>. 2. (of a <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm>) representing a position in a directory hierarchy by motion from a position other than the root, which might therefore vary. “The notation #P"../foo.text" 



denotes a relative pathname if the host file system is Unix.” See <GlossaryTerm  term={"absolute"}><i>absolute</i></GlossaryTerm>. 



**repertoire** *n.*, *ISO* a <GlossaryTerm  term={"subtype"}><i>subtype</i></GlossaryTerm> of <DictionaryLink  term={"character"}><b>character</b></DictionaryLink>. See Section 13.1.2.2 (Character 



Repertoires). 



**report** *n.* (of a <GlossaryTerm  term={"condition"}><i>condition</i></GlossaryTerm>) to <GlossaryTerm  term={"call"}><i>call</i></GlossaryTerm> the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"print-object"}><b>print-object</b></DictionaryLink> on the <GlossaryTerm  term={"condition"}><i>condition</i></GlossaryTerm> in an <GlossaryTerm  term={"environment"}><i>environment</i></GlossaryTerm> where the <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink  term={"print-escape"}><b>\*print-escape\*</b></DictionaryLink> is <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>. 



**report message** *n.* the text that is output by a <GlossaryTerm styled={true} term={"condition reporter"}><i>condition reporter</i></GlossaryTerm> . 



**required parameter** *n.* A <GlossaryTerm  term={"parameter"}><i>parameter</i></GlossaryTerm> for which a corresponding positional <GlossaryTerm  term={"argument"}><i>argument</i></GlossaryTerm> must be supplied when *calling* the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm>. 



**rest list** *n.* (of a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> having a <GlossaryTerm styled={true} term={"rest parameter"}><i>rest parameter</i></GlossaryTerm> ) The <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> to which the <GlossaryTerm styled={true} term={"rest parameter"}><i>rest parameter</i></GlossaryTerm> is <GlossaryTerm  term={"bound"}><i>bound</i></GlossaryTerm> on some particular <GlossaryTerm  term={"call"}><i>call</i></GlossaryTerm> to the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm>. 



**rest parameter** *n.* A <GlossaryTerm  term={"parameter"}><i>parameter</i></GlossaryTerm> which was introduced by **&amp;rest**. 



<DictionaryLink  term={"restart"}><b>restart</b></DictionaryLink> *n.* an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"restart"}><b>restart</b></DictionaryLink>. 



**restart designator** *n.* a <GlossaryTerm  term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm  term={"restart"}><i>restart</i></GlossaryTerm>; that is, an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> that denotes a <GlossaryTerm  term={"restart"}><i>restart</i></GlossaryTerm> and that is one of: a *non-nil symbol* (denoting the most recently established *active restart* whose <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> is that <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>), or a <GlossaryTerm  term={"restart"}><i>restart</i></GlossaryTerm> (denoting itself). 



**restart function** *n.* a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> that invokes a <GlossaryTerm  term={"restart"}><i>restart</i></GlossaryTerm>, as if by <DictionaryLink  term={"invoke-restart"}><b>invoke-restart</b></DictionaryLink>. 



The primary purpose of a <GlossaryTerm styled={true} term={"restart function"}><i>restart function</i></GlossaryTerm> is to provide an alternate interface. By convention, a <GlossaryTerm styled={true} term={"restart function"}><i>restart function</i></GlossaryTerm> usually has the same name as the <GlossaryTerm  term={"restart"}><i>restart</i></GlossaryTerm> which it invokes. Figure 26–4 shows a list of the *standardized restart functions*. 



|<p>**abort muffle-warning use-value** </p><p>**continue store-value**</p>|

| :- |





**Figure 26–4. Standardized Restart Functions** 







 



 



<DictionaryLink  term={"return"}><b>return</b></DictionaryLink> *v.t.* (of <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm>) 1. (from a <GlossaryTerm  term={"block"}><i>block</i></GlossaryTerm>) to transfer control and <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> from the <GlossaryTerm  term={"block"}><i>block</i></GlossaryTerm>; that is, to cause the <GlossaryTerm  term={"block"}><i>block</i></GlossaryTerm> to <GlossaryTerm  term={"yield"}><i>yield</i></GlossaryTerm> the <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> immediately without doing any further evaluation of the <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> in its body. 2. (from a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>) to <GlossaryTerm  term={"yield"}><i>yield</i></GlossaryTerm> the <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm>. 



**return value** *n. Trad.* a <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm><sub>1</sub> 



**right-parenthesis** *n.* the <GlossaryTerm styled={true} term={"standard character"}><i>standard character</i></GlossaryTerm> “)”, that is variously called “right 



parenthesis” or “close parenthesis” See Figure 2–5. 



**run time** *n.* 1. <GlossaryTerm styled={true} term={"load time"}><i>load time</i></GlossaryTerm> 2. *execution time* 



**run-time compiler** *n.* refers to the <DictionaryLink  term={"compile"}><b>compile</b></DictionaryLink> function or to <GlossaryTerm styled={true} term={"implicit compilation"}><i>implicit compilation</i></GlossaryTerm>, for which the compilation and run-time <GlossaryTerm  term={"environment"}><i>environments</i></GlossaryTerm> are maintained in the same *Lisp image*. 



**run-time definition** *n.* a definition in the <GlossaryTerm styled={true} term={"run-time environment"}><i>run-time environment</i></GlossaryTerm>. 



**run-time environment** *n.* the <GlossaryTerm  term={"environment"}><i>environment</i></GlossaryTerm> in which a program is *executed*. 




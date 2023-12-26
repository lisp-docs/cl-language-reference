---
title: R
sidebar_position: 114
---

**R** 



**radix** *n.* an *integer* between 2 and 36, inclusive, which can be used to designate a base with respect to which certain kinds of numeric input or output are performed. (There are *n* valid digit characters for any given *radix n*, and those digits are the first *n* digits in the sequence 0, 1, *. . .*, 9, A, B, *. . .*, Z, which have the weights 0, 1, *. . .*, 9, 10, 11, *. . .*, 



35, respectively. Case is not significant in parsing numbers of radix greater than 10, so “9b8a” and “9B8A” denote the same <ClLinks  term={"radix"}><i>radix</i></ClLinks> 16 number.) 



**random state** *n.* an <ClLinks  term={"object"}><i>object</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"random-state"}><b>random-state</b></ClLinks>. 



**rank** *n.* a non-negative *integer* indicating the number of <ClLinks  term={"dimension"}><i>dimensions</i></ClLinks> of an <ClLinks  term={"array"}><i>array</i></ClLinks>. 



<ClLinks  term={"ratio"}><b>ratio</b></ClLinks> *n.* an <ClLinks  term={"object"}><i>object</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"ratio"}><b>ratio</b></ClLinks>. 







 



 



**ratio marker** *n.* a character which is used in the textual notation for a <ClLinks  term={"ratio"}><i>ratio</i></ClLinks> to separate the numerator from the denominator, and which is <ClLinks  term={"slash"}><i>slash</i></ClLinks> in the <GlossaryTerm styled={true} term={"standard readtable"}><i>standard readtable</i></GlossaryTerm>. See Section 2.1 (Character Syntax). 



<ClLinks  term={"rational"}><b>rational</b></ClLinks> *n.* an <ClLinks  term={"object"}><i>object</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"rational"}><b>rational</b></ClLinks>. 



<ClLinks  term={"read"}><b>read</b></ClLinks> *v.t.* 1. (a <ClLinks  term={"binding"}><i>binding</i></ClLinks> or <ClLinks  term={"slot"}><i>slot</i></ClLinks> or component) to obtain the <ClLinks  term={"value"}><i>value</i></ClLinks> of the <ClLinks  term={"binding"}><i>binding</i></ClLinks> or <ClLinks  term={"slot"}><i>slot</i></ClLinks>. 2. (an <ClLinks  term={"object"}><i>object</i></ClLinks> from a <ClLinks  term={"stream"}><i>stream</i></ClLinks>) to parse an <ClLinks  term={"object"}><i>object</i></ClLinks> from its representation on the <ClLinks  term={"stream"}><i>stream</i></ClLinks>. 



**readably** *adv.* (of a manner of printing an *object O*<sub>1</sub>) in such a way as to permit the *Lisp Reader* to later *parse* the printed output into an *object O*<sub>2</sub> that is <ClLinks  term={"similar"}><i>similar</i></ClLinks> to *O*<sub>1</sub>. 



**reader** *n.* 1. a <ClLinks  term={"function"}><i>function</i></ClLinks> that <ClLinks  term={"read"}><i>reads</i></ClLinks><sub>1</sub> a <ClLinks  term={"variable"}><i>variable</i></ClLinks> or <ClLinks  term={"slot"}><i>slot</i></ClLinks>. 2. the *Lisp reader* . 



**reader macro** *n.* 1. a textual notation introduced by dispatch on one or two 



<ClLinks  term={"character"}><i>characters</i></ClLinks> that defines special-purpose syntax for use by the *Lisp reader* , and that is implemented by a <GlossaryTerm styled={true} term={"reader macro function"}><i>reader macro function</i></GlossaryTerm>. See Section 2.2 (Reader Algorithm). 2. the <ClLinks  term={"character"}><i>character</i></ClLinks> or <ClLinks  term={"character"}><i>characters</i></ClLinks> that introduce a <GlossaryTerm styled={true} term={"reader macro"}><i>reader macro</i></GlossaryTerm><sub>1</sub>; that is, a <GlossaryTerm styled={true} term={"macro character"}><i>macro character</i></GlossaryTerm> or the conceptual pairing of a <GlossaryTerm styled={true} term={"dispatching macro character"}><i>dispatching macro character</i></GlossaryTerm> and the <ClLinks  term={"character"}><i>character</i></ClLinks> that follows 



it. (A <GlossaryTerm styled={true} term={"reader macro"}><i>reader macro</i></GlossaryTerm> is not a kind of <ClLinks  term={"macro"}><i>macro</i></ClLinks>.) 



**reader macro function** *n.* a <GlossaryTerm styled={true} term={"function designator"}><i>function designator</i></GlossaryTerm> that denotes a <ClLinks  term={"function"}><i>function</i></ClLinks> 



that implements a <GlossaryTerm styled={true} term={"reader macro"}><i>reader macro</i></GlossaryTerm><sub>2</sub>. See the <ClLinks  term={"function"}><i>functions</i></ClLinks> <ClLinks  term={"set-macro-character"}><b>set-macro-character</b></ClLinks> and 



**set-dispatch-macro-character**. 



<ClLinks  term={"readtable"}><b>readtable</b></ClLinks> *n.* an <ClLinks  term={"object"}><i>object</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"readtable"}><b>readtable</b></ClLinks>. 



**readtable case** *n.* an attribute of a <ClLinks  term={"readtable"}><i>readtable</i></ClLinks> whose value is a <GlossaryTerm styled={true} term={"case sensitivity mode"}><i>case sensitivity mode</i></GlossaryTerm>, and that selects the manner in which <ClLinks  term={"character"}><i>characters</i></ClLinks> in a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>’s <ClLinks  term={"name"}><i>name</i></ClLinks> are to be treated by the *Lisp reader* and the *Lisp printer* . See Section 23.1.2 (Effect of Readtable Case on the Lisp Reader) and Section 22.1.3.3.2 (Effect of Readtable Case on the Lisp 



Printer). 



**readtable designator** *n.* a <ClLinks  term={"designator"}><i>designator</i></ClLinks> for a <ClLinks  term={"readtable"}><i>readtable</i></ClLinks>; that is, an <ClLinks  term={"object"}><i>object</i></ClLinks> that denotes a <ClLinks  term={"readtable"}><i>readtable</i></ClLinks> and that is one of: <ClLinks  term={"nil"}><b>nil</b></ClLinks> (denoting the <GlossaryTerm styled={true} term={"standard readtable"}><i>standard readtable</i></GlossaryTerm>), or a <ClLinks  term={"readtable"}><i>readtable</i></ClLinks> (denoting itself). 



**recognizable subtype** *n.* (of a <ClLinks  term={"type"}><i>type</i></ClLinks>) a <ClLinks  term={"subtype"}><i>subtype</i></ClLinks> of the <ClLinks  term={"type"}><i>type</i></ClLinks> which can be reliably detected to be such by the <ClLinks  term={"implementation"}><i>implementation</i></ClLinks>. See the <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"subtypep"}><b>subtypep</b></ClLinks>. 



**reference** *n.*, *v.t.* 1. *n.* an act or occurrence of referring to an <ClLinks  term={"object"}><i>object</i></ClLinks>, a <ClLinks  term={"binding"}><i>binding</i></ClLinks>, an <GlossaryTerm styled={true} term={"exit point"}><i>exit point</i></GlossaryTerm>, a <ClLinks  term={"tag"}><i>tag</i></ClLinks>, or an <ClLinks  term={"environment"}><i>environment</i></ClLinks>. 2. *v.t.* to refer to an <ClLinks  term={"object"}><i>object</i></ClLinks>, a <ClLinks  term={"binding"}><i>binding</i></ClLinks>, an <GlossaryTerm styled={true} term={"exit point"}><i>exit point</i></GlossaryTerm>, a <ClLinks  term={"tag"}><i>tag</i></ClLinks>, or an <ClLinks  term={"environment"}><i>environment</i></ClLinks>, usually by <ClLinks  term={"name"}><i>name</i></ClLinks>. 







 



 



**registered package** *n.* a *package object* that is installed in the <GlossaryTerm styled={true} term={"package registry"}><i>package registry</i></GlossaryTerm>. (Every <GlossaryTerm styled={true} term={"registered package"}><i>registered package</i></GlossaryTerm> has a <ClLinks  term={"name"}><i>name</i></ClLinks> that is a <ClLinks  term={"string"}><i>string</i></ClLinks>, as well as zero or more <ClLinks  term={"string"}><i>string</i></ClLinks> nicknames. All <ClLinks  term={"package"}><i>packages</i></ClLinks> that are initially specified by Common Lisp or created by <ClLinks  term={"make-package"}><b>make-package</b></ClLinks> or <ClLinks  term={"defpackage"}><b>defpackage</b></ClLinks> are <GlossaryTerm styled={true} term={"registered package"}><i>registered packages</i></GlossaryTerm>. <GlossaryTerm styled={true} term={"registered package"}><i>Registered packages</i></GlossaryTerm> can be turned into <GlossaryTerm styled={true} term={"unregistered package"}><i>unregistered packages</i></GlossaryTerm> by <ClLinks  term={"delete-package"}><b>delete-package</b></ClLinks>.) 



**relative** *adj.* 1. (of a <ClLinks  term={"time"}><i>time</i></ClLinks>) representing an offset from an *absolute time* in the 



units appropriate to that time. For example, a *relative internal time* is the difference between two *absolute internal times*, and is measured in <GlossaryTerm styled={true} term={"internal time unit"}><i>internal time units</i></GlossaryTerm>. 2. (of a <ClLinks  term={"pathname"}><i>pathname</i></ClLinks>) representing a position in a directory hierarchy by motion from a position other than the root, which might therefore vary. “The notation #P"../foo.text" 



denotes a relative pathname if the host file system is Unix.” See <ClLinks  term={"absolute"}><i>absolute</i></ClLinks>. 



**repertoire** *n.*, *ISO* a <ClLinks  term={"subtype"}><i>subtype</i></ClLinks> of <ClLinks  term={"character"}><b>character</b></ClLinks>. See Section 13.1.2.2 (Character 



Repertoires). 



**report** *n.* (of a <ClLinks  term={"condition"}><i>condition</i></ClLinks>) to <ClLinks  term={"call"}><i>call</i></ClLinks> the <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"print-object"}><b>print-object</b></ClLinks> on the <ClLinks  term={"condition"}><i>condition</i></ClLinks> in an <ClLinks  term={"environment"}><i>environment</i></ClLinks> where the <ClLinks  term={"value"}><i>value</i></ClLinks> of <ClLinks  term={"print-escape"}><b>\*print-escape\*</b></ClLinks> is <ClLinks  term={"false"}><i>false</i></ClLinks>. 



**report message** *n.* the text that is output by a <GlossaryTerm styled={true} term={"condition reporter"}><i>condition reporter</i></GlossaryTerm> . 



**required parameter** *n.* A <ClLinks  term={"parameter"}><i>parameter</i></ClLinks> for which a corresponding positional <ClLinks  term={"argument"}><i>argument</i></ClLinks> must be supplied when *calling* the <ClLinks  term={"function"}><i>function</i></ClLinks>. 



**rest list** *n.* (of a <ClLinks  term={"function"}><i>function</i></ClLinks> having a <GlossaryTerm styled={true} term={"rest parameter"}><i>rest parameter</i></GlossaryTerm> ) The <ClLinks  term={"list"}><i>list</i></ClLinks> to which the <GlossaryTerm styled={true} term={"rest parameter"}><i>rest parameter</i></GlossaryTerm> is <ClLinks  term={"bound"}><i>bound</i></ClLinks> on some particular <ClLinks  term={"call"}><i>call</i></ClLinks> to the <ClLinks  term={"function"}><i>function</i></ClLinks>. 



**rest parameter** *n.* A <ClLinks  term={"parameter"}><i>parameter</i></ClLinks> which was introduced by **&amp;rest**. 



<ClLinks  term={"restart"}><b>restart</b></ClLinks> *n.* an <ClLinks  term={"object"}><i>object</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"restart"}><b>restart</b></ClLinks>. 



**restart designator** *n.* a <ClLinks  term={"designator"}><i>designator</i></ClLinks> for a <ClLinks  term={"restart"}><i>restart</i></ClLinks>; that is, an <ClLinks  term={"object"}><i>object</i></ClLinks> that denotes a <ClLinks  term={"restart"}><i>restart</i></ClLinks> and that is one of: a *non-nil symbol* (denoting the most recently established *active restart* whose <ClLinks  term={"name"}><i>name</i></ClLinks> is that <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>), or a <ClLinks  term={"restart"}><i>restart</i></ClLinks> (denoting itself). 



**restart function** *n.* a <ClLinks  term={"function"}><i>function</i></ClLinks> that invokes a <ClLinks  term={"restart"}><i>restart</i></ClLinks>, as if by <ClLinks  term={"invoke-restart"}><b>invoke-restart</b></ClLinks>. 



The primary purpose of a <GlossaryTerm styled={true} term={"restart function"}><i>restart function</i></GlossaryTerm> is to provide an alternate interface. By convention, a <GlossaryTerm styled={true} term={"restart function"}><i>restart function</i></GlossaryTerm> usually has the same name as the <ClLinks  term={"restart"}><i>restart</i></ClLinks> which it invokes. Figure 26–4 shows a list of the *standardized restart functions*. 



|<p>**abort muffle-warning use-value** </p><p>**continue store-value**</p>|

| :- |





**Figure 26–4. Standardized Restart Functions** 







 



 



<ClLinks  term={"return"}><b>return</b></ClLinks> *v.t.* (of <ClLinks  term={"value"}><i>values</i></ClLinks>) 1. (from a <ClLinks  term={"block"}><i>block</i></ClLinks>) to transfer control and <ClLinks  term={"value"}><i>values</i></ClLinks> from the <ClLinks  term={"block"}><i>block</i></ClLinks>; that is, to cause the <ClLinks  term={"block"}><i>block</i></ClLinks> to <ClLinks  term={"yield"}><i>yield</i></ClLinks> the <ClLinks  term={"value"}><i>values</i></ClLinks> immediately without doing any further evaluation of the <ClLinks  term={"form"}><i>forms</i></ClLinks> in its body. 2. (from a <ClLinks  term={"form"}><i>form</i></ClLinks>) to <ClLinks  term={"yield"}><i>yield</i></ClLinks> the <ClLinks  term={"value"}><i>values</i></ClLinks>. 



**return value** *n. Trad.* a <ClLinks  term={"value"}><i>value</i></ClLinks><sub>1</sub> 



**right-parenthesis** *n.* the <GlossaryTerm styled={true} term={"standard character"}><i>standard character</i></GlossaryTerm> “)”, that is variously called “right 



parenthesis” or “close parenthesis” See Figure 2–5. 



**run time** *n.* 1. <GlossaryTerm styled={true} term={"load time"}><i>load time</i></GlossaryTerm> 2. *execution time* 



**run-time compiler** *n.* refers to the <ClLinks  term={"compile"}><b>compile</b></ClLinks> function or to <GlossaryTerm styled={true} term={"implicit compilation"}><i>implicit compilation</i></GlossaryTerm>, for which the compilation and run-time <ClLinks  term={"environment"}><i>environments</i></ClLinks> are maintained in the same *Lisp image*. 



**run-time definition** *n.* a definition in the <GlossaryTerm styled={true} term={"run-time environment"}><i>run-time environment</i></GlossaryTerm>. 



**run-time environment** *n.* the <ClLinks  term={"environment"}><i>environment</i></ClLinks> in which a program is *executed*. 




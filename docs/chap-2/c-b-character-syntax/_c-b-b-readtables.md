Syntax information for use by the *Lisp reader* is embodied in an <GlossaryTerm term={"object"}><i>object</i></GlossaryTerm> called a <GlossaryTerm term={"readtable"}><i>readtable</i></GlossaryTerm>. Among other things, the <GlossaryTerm term={"readtable"}><i>readtable</i></GlossaryTerm> contains the association between <GlossaryTerm term={"character"}><i>characters</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"syntax type"}><i>syntax types</i></GlossaryTerm>.

Figure 2–1 lists some <GlossaryTerm styled={true} term={"defined name"}><i>defined names</i></GlossaryTerm> that are applicable to <GlossaryTerm term={"readtable"}><i>readtables</i></GlossaryTerm>.

| Defined Name |
|---|
|`*readtable*`|
|`readtable-case`|
|`copy-readtable`|
|`readtablep`|
|`get-dispatch-macro-character`|
|`set-dispatch-macro-character`|
|`get-macro-character`|
|`set-macro-character`|
|`make-dispatch-macro-character`|
|`set-syntax-from-char`|

**Figure 2–1. Readtable defined names**


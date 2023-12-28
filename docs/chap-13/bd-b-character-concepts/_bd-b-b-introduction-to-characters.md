 



A <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> is an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that represents a unitary token (*e.g.*, a letter, a special symbol, or a “control character”) in an aggregate quantity of text (*e.g.*, a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> or a text <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>). 



Common Lisp allows an implementation to provide support for international language <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> as well as <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> used in specialized arenas (*e.g.*, mathematics). 



The following figures contain lists of <GlossaryTerm styled={true} term={"defined name"}><i>defined names</i></GlossaryTerm> applicable to <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm>. 



Figure 13–1 lists some <GlossaryTerm styled={true} term={"defined name"}><i>defined names</i></GlossaryTerm> relating to *character attributes* and *character predicates*. 



|<p>**alpha-char-p char-not-equal char**&gt; </p><p>**alphanumericp char-not-greaterp char**&gt;<DictionaryLink styled={true} term={"="}><b>=</b></DictionaryLink> </p><p>**both-case-p char-not-lessp digit-char-p** </p><p>**char-code-limit char/= graphic-char-p char-equal char**&lt; <DictionaryLink styled={true} term={"lower-case-p"}><b>lower-case-p</b></DictionaryLink> </p><p>**char-greaterp char**&lt;**= standard-char-p char-lessp char= upper-case-p**</p>|

| :- |





**Figure 13–1. Character defined names – 1** 



Figure 13–2 lists some <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> construction and conversion <GlossaryTerm styled={true} term={"defined name"}><i>defined names</i></GlossaryTerm>. 



|<p>**char-code char-name code-char** </p><p>**char-downcase char-upcase digit-char** </p><p>**char-int character name-char**</p>|

| :- |





**Figure 13–2. Character defined names – 2** 




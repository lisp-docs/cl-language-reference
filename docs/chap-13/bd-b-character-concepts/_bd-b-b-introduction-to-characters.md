 



A <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> is an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that represents a unitary token (*e.g.*, a letter, a special symbol, or a “control character”) in an aggregate quantity of text (*e.g.*, a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> or a text <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>). 



Common Lisp allows an implementation to provide support for international language <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks> as well as <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks> used in specialized arenas (*e.g.*, mathematics). 



The following figures contain lists of *defined names* applicable to <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks>. 



Figure 13–1 lists some *defined names* relating to *character attributes* and *character predicates*. 



|<p>**alpha-char-p char-not-equal char**&gt; </p><p>**alphanumericp char-not-greaterp char**&gt;<DictionaryLink styled={true} term={"="}><b>=</b></DictionaryLink> </p><p>**both-case-p char-not-lessp digit-char-p** </p><p>**char-code-limit char/= graphic-char-p char-equal char**&lt; <DictionaryLink styled={true} term={"lower-case-p"}><b>lower-case-p</b></DictionaryLink> </p><p>**char-greaterp char**&lt;**= standard-char-p char-lessp char= upper-case-p**</p>|

| :- |





**Figure 13–1. Character defined names – 1** 



Figure 13–2 lists some <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> construction and conversion *defined names*. 



|<p>**char-code char-name code-char** </p><p>**char-downcase char-upcase digit-char** </p><p>**char-int character name-char**</p>|

| :- |





**Figure 13–2. Character defined names – 2** 




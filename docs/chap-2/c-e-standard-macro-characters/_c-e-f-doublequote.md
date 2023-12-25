 



**Syntax:** "⟨text⟩" 



The <GlossaryTerm styled={true} term={"double-quote"}><i>double-quote</i></GlossaryTerm> is used to begin and end a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>. When a <GlossaryTerm styled={true} term={"double-quote"}><i>double-quote</i></GlossaryTerm> is encountered, <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> are read from the *input stream* and accumulated until another <GlossaryTerm styled={true} term={"double-quote"}><i>double-quote</i></GlossaryTerm> is encountered. If a *single escape character* is seen, the *single escape character* is discarded, the next <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> is accumulated, and accumulation continues. The accumulated <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> up to but not including the matching <GlossaryTerm styled={true} term={"double-quote"}><i>double-quote</i></GlossaryTerm> are made into a *simple string* and returned. It is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> which <GlossaryTerm styled={true} term={"attribute"}><i>attributes</i></GlossaryTerm> of the accumulated characters are removed in this process. 



Examples of the use of the <GlossaryTerm styled={true} term={"double-quote"}><i>double-quote</i></GlossaryTerm> character are in Figure 2–18. 



|<p>"Foo" ;A string with three characters in it "" ;An empty string </p><p>"\"APL\\360?\" he cried." ;A string with twenty characters </p><p>"|x| = |-x|" ;A ten-character string</p>|

| :- |





**Figure 2–18. Examples of the use of double-quote** 



Note that to place a single escape character or a <GlossaryTerm styled={true} term={"double-quote"}><i>double-quote</i></GlossaryTerm> into a string, such a character must be preceded by a single escape character. Note, too, that a multiple escape character need not be quoted by a single escape character within a string. 



For information on how the *Lisp printer* prints <GlossaryTerm styled={true} term={"string"}><i>strings</i></GlossaryTerm>, see Section 22.1.3.4 (Printing Strings).
 
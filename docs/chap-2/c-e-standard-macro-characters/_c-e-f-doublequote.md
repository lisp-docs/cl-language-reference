 



**Syntax:** "⟨text⟩" 



The <ClLinks  term={"double-quote"}><i>double-quote</i></ClLinks> is used to begin and end a <ClLinks  term={"string"}><i>string</i></ClLinks>. When a <ClLinks  term={"double-quote"}><i>double-quote</i></ClLinks> is encountered, <ClLinks  term={"character"}><i>characters</i></ClLinks> are read from the *input stream* and accumulated until another <ClLinks  term={"double-quote"}><i>double-quote</i></ClLinks> is encountered. If a *single escape character* is seen, the *single escape character* is discarded, the next <ClLinks  term={"character"}><i>character</i></ClLinks> is accumulated, and accumulation continues. The accumulated <ClLinks  term={"character"}><i>characters</i></ClLinks> up to but not including the matching <ClLinks  term={"double-quote"}><i>double-quote</i></ClLinks> are made into a <GlossaryTerm styled={true} term={"simple string"}><i>simple string</i></GlossaryTerm> and returned. It is <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> which <ClLinks  term={"attribute"}><i>attributes</i></ClLinks> of the accumulated characters are removed in this process. 



Examples of the use of the <ClLinks  term={"double-quote"}><i>double-quote</i></ClLinks> character are in Figure 2–18. 



|<p>"Foo" ;A string with three characters in it "" ;An empty string </p><p>"\"APL\\360?\" he cried." ;A string with twenty characters </p><p>"|x| = |-x|" ;A ten-character string</p>|

| :- |





**Figure 2–18. Examples of the use of double-quote** 



Note that to place a single escape character or a <ClLinks  term={"double-quote"}><i>double-quote</i></ClLinks> into a string, such a character must be preceded by a single escape character. Note, too, that a multiple escape character need not be quoted by a single escape character within a string. 



For information on how the *Lisp printer* prints <ClLinks  term={"string"}><i>strings</i></ClLinks>, see Section 22.1.3.4 (Printing Strings).
 
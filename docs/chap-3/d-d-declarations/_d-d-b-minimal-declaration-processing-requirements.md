
 



In general, an <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> is free to ignore <GlossaryTerm styled={true} term={"declaration specifier"}><i>declaration specifiers</i></GlossaryTerm> except for the <DictionaryLink  term={"declaration"}><b>declaration</b></DictionaryLink>, <DictionaryLink  term={"notinline"}><b>notinline</b></DictionaryLink>, **safety**, and <DictionaryLink  term={"special"}><b>special</b></DictionaryLink> <GlossaryTerm styled={true} term={"declaration specifier"}><i>declaration specifiers</i></GlossaryTerm>. 



A <DictionaryLink  term={"declaration"}><b>declaration</b></DictionaryLink> <ClLinks  term={"declaration"}><i>declaration</i></ClLinks> must suppress warnings about unrecognized <ClLinks  term={"declaration"}><i>declarations</i></ClLinks> of the kind that it declares. If an <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> does not produce warnings about unrecognized declarations, it may safely ignore this <ClLinks  term={"declaration"}><i>declaration</i></ClLinks>. 



A <DictionaryLink  term={"notinline"}><b>notinline</b></DictionaryLink> <ClLinks  term={"declaration"}><i>declaration</i></ClLinks> must be recognized by any <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> that supports inline functions or <GlossaryTerm styled={true} term={"compiler macro"}><i>compiler macros</i></GlossaryTerm> in order to disable those facilities. An <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> that does not use inline functions or <GlossaryTerm styled={true} term={"compiler macro"}><i>compiler macros</i></GlossaryTerm> may safely ignore this <ClLinks  term={"declaration"}><i>declaration</i></ClLinks>. 



A **safety** <ClLinks  term={"declaration"}><i>declaration</i></ClLinks> that increases the current safety level must always be recognized. An <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> that always processes code as if safety were high may safely ignore this <ClLinks  term={"declaration"}><i>declaration</i></ClLinks>. 



A <DictionaryLink  term={"special"}><b>special</b></DictionaryLink> <ClLinks  term={"declaration"}><i>declaration</i></ClLinks> must be processed by all <ClLinks  term={"implementation"}><i>implementations</i></ClLinks>. 





 



In general, an <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm> is free to ignore <GlossaryTerm styled={true} term={"declaration specifier"}><i>declaration specifiers</i></GlossaryTerm> except for the <DictionaryLink  term={"declaration"}><b>declaration</b></DictionaryLink>, <DictionaryLink  term={"notinline"}><b>notinline</b></DictionaryLink>, **safety**, and <DictionaryLink  term={"special"}><b>special</b></DictionaryLink> <GlossaryTerm styled={true} term={"declaration specifier"}><i>declaration specifiers</i></GlossaryTerm>. 



A <DictionaryLink  term={"declaration"}><b>declaration</b></DictionaryLink> <GlossaryTerm  term={"declaration"}><i>declaration</i></GlossaryTerm> must suppress warnings about unrecognized <GlossaryTerm  term={"declaration"}><i>declarations</i></GlossaryTerm> of the kind that it declares. If an <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm> does not produce warnings about unrecognized declarations, it may safely ignore this <GlossaryTerm  term={"declaration"}><i>declaration</i></GlossaryTerm>. 



A <DictionaryLink  term={"notinline"}><b>notinline</b></DictionaryLink> <GlossaryTerm  term={"declaration"}><i>declaration</i></GlossaryTerm> must be recognized by any <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm> that supports inline functions or <GlossaryTerm styled={true} term={"compiler macro"}><i>compiler macros</i></GlossaryTerm> in order to disable those facilities. An <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm> that does not use inline functions or <GlossaryTerm styled={true} term={"compiler macro"}><i>compiler macros</i></GlossaryTerm> may safely ignore this <GlossaryTerm  term={"declaration"}><i>declaration</i></GlossaryTerm>. 



A **safety** <GlossaryTerm  term={"declaration"}><i>declaration</i></GlossaryTerm> that increases the current safety level must always be recognized. An <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm> that always processes code as if safety were high may safely ignore this <GlossaryTerm  term={"declaration"}><i>declaration</i></GlossaryTerm>. 



A <DictionaryLink  term={"special"}><b>special</b></DictionaryLink> <GlossaryTerm  term={"declaration"}><i>declaration</i></GlossaryTerm> must be processed by all <GlossaryTerm  term={"implementation"}><i>implementations</i></GlossaryTerm>. 




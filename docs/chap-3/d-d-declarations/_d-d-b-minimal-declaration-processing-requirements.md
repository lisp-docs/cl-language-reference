
 



In general, an <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> is free to ignore *declaration specifiers* except for the <DictionaryLink styled={true} term={"declaration"}><b>declaration</b></DictionaryLink>, <DictionaryLink styled={true} term={"notinline"}><b>notinline</b></DictionaryLink>, **safety**, and <DictionaryLink styled={true} term={"special"}><b>special</b></DictionaryLink> *declaration specifiers*. 



A <DictionaryLink styled={true} term={"declaration"}><b>declaration</b></DictionaryLink> <GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm> must suppress warnings about unrecognized <GlossaryTerm styled={true} term={"declaration"}><i>declarations</i></GlossaryTerm> of the kind that it declares. If an <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> does not produce warnings about unrecognized declarations, it may safely ignore this <GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm>. 



A <DictionaryLink styled={true} term={"notinline"}><b>notinline</b></DictionaryLink> <GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm> must be recognized by any <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> that supports inline functions or *compiler macros* in order to disable those facilities. An <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> that does not use inline functions or *compiler macros* may safely ignore this <GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm>. 



A **safety** <GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm> that increases the current safety level must always be recognized. An <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> that always processes code as if safety were high may safely ignore this <GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm>. 



A <DictionaryLink styled={true} term={"special"}><b>special</b></DictionaryLink> <GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm> must be processed by all <GlossaryTerm styled={true} term={"implementation"}><i>implementations</i></GlossaryTerm>. 




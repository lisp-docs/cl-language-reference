**copy-pprint-dispatch** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"copy-pprint-dispatch"}><b>copy-pprint-dispatch</b></DictionaryLink> &amp;optional *table → new-table* 



**Arguments and Values:** 



*table*—a *pprint dispatch table*, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



*new-table*—a *fresh pprint dispatch table*. 



**Description:** 



Creates and returns a copy of the specified *table*, or of the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"print-pprint-dispatch"}><b>\*print-pprint-dispatch\*</b></DictionaryLink> if no *table* is specified, or of the initial <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"print-pprint-dispatch"}><b>\*print-pprint-dispatch\*</b></DictionaryLink> if <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> is specified. 



**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if *table* is not a *pprint dispatch table*. 




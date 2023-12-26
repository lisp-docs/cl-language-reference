**file-string-length** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"file-string-length"}><b>file-string-length</b></DictionaryLink> *stream object → length* 



**Arguments and Values:** 



<GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>—an *output character file stream*. 



<GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>—a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> or a <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> . 



<GlossaryTerm  term={"length"}><i>length</i></GlossaryTerm>—a non-negative *integer* , or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



**Description:** 



<DictionaryLink  term={"file-string-length"}><b>file-string-length</b></DictionaryLink> returns the difference between what (file-position <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>) would be after writing <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> and its current value, or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> if this cannot be determined. 



The returned value corresponds to the current state of <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> at the time of the call and might not be the same if it is called again when the state of the <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> has changed. 







 



 



<DictionaryLink  term={"open"}><b>open</b></DictionaryLink> 




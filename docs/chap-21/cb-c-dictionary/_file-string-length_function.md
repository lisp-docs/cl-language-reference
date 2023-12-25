**file-string-length** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"file-string-length"}><b>file-string-length</b></DictionaryLink> *stream object → length* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>—an *output character file stream*. 



<GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> or a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> . 



<GlossaryTerm styled={true} term={"length"}><i>length</i></GlossaryTerm>—a non-negative *integer* , or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



**Description:** 



<DictionaryLink styled={true} term={"file-string-length"}><b>file-string-length</b></DictionaryLink> returns the difference between what (file-position <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>) would be after writing <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> and its current value, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> if this cannot be determined. 



The returned value corresponds to the current state of <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> at the time of the call and might not be the same if it is called again when the state of the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> has changed. 







 



 



<DictionaryLink styled={true} term={"open"}><b>open</b></DictionaryLink> 




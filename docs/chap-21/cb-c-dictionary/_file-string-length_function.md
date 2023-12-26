**file-string-length** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"file-string-length"}><b>file-string-length</b></DictionaryLink> *stream object → length* 



**Arguments and Values:** 



<ClLinks  term={"stream"}><i>stream</i></ClLinks>—an *output character file stream*. 



<ClLinks  term={"object"}><i>object</i></ClLinks>—a <ClLinks  term={"string"}><i>string</i></ClLinks> or a <ClLinks  term={"character"}><i>character</i></ClLinks> . 



<ClLinks  term={"length"}><i>length</i></ClLinks>—a non-negative *integer* , or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



**Description:** 



<DictionaryLink  term={"file-string-length"}><b>file-string-length</b></DictionaryLink> returns the difference between what (file-position <ClLinks  term={"stream"}><i>stream</i></ClLinks>) would be after writing <ClLinks  term={"object"}><i>object</i></ClLinks> and its current value, or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> if this cannot be determined. 



The returned value corresponds to the current state of <ClLinks  term={"stream"}><i>stream</i></ClLinks> at the time of the call and might not be the same if it is called again when the state of the <ClLinks  term={"stream"}><i>stream</i></ClLinks> has changed. 







 



 



<DictionaryLink  term={"open"}><b>open</b></DictionaryLink> 




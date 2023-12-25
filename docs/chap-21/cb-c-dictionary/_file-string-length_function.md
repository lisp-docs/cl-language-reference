**file-string-length** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"file-string-length"}><b>file-string-length</b></ClLinks> *stream object → length* 



**Arguments and Values:** 



<ClLinks  term={"stream"}><i>stream</i></ClLinks>—an *output character file stream*. 



<ClLinks  term={"object"}><i>object</i></ClLinks>—a <ClLinks  term={"string"}><i>string</i></ClLinks> or a <ClLinks  term={"character"}><i>character</i></ClLinks> . 



<ClLinks  term={"length"}><i>length</i></ClLinks>—a non-negative *integer* , or <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 



**Description:** 



<ClLinks  term={"file-string-length"}><b>file-string-length</b></ClLinks> returns the difference between what (file-position <ClLinks  term={"stream"}><i>stream</i></ClLinks>) would be after writing <ClLinks  term={"object"}><i>object</i></ClLinks> and its current value, or <ClLinks  term={"nil"}><b>nil</b></ClLinks> if this cannot be determined. 



The returned value corresponds to the current state of <ClLinks  term={"stream"}><i>stream</i></ClLinks> at the time of the call and might not be the same if it is called again when the state of the <ClLinks  term={"stream"}><i>stream</i></ClLinks> has changed. 







 



 



<ClLinks  term={"open"}><b>open</b></ClLinks> 




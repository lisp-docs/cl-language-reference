**file-string-length** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"file-string-length"}><b>file-string-length</b></ClLinks> *stream object → length* 



**Arguments and Values:** 



<ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>—an *output character file stream*. 



<ClLinks styled={true} term={"object"}><i>object</i></ClLinks>—a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> or a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> . 



<ClLinks styled={true} term={"length"}><i>length</i></ClLinks>—a non-negative *integer* , or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



**Description:** 



<ClLinks styled={true} term={"file-string-length"}><b>file-string-length</b></ClLinks> returns the difference between what (file-position <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>) would be after writing <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> and its current value, or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> if this cannot be determined. 



The returned value corresponds to the current state of <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> at the time of the call and might not be the same if it is called again when the state of the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> has changed. 







 



 



<ClLinks styled={true} term={"open"}><b>open</b></ClLinks> 




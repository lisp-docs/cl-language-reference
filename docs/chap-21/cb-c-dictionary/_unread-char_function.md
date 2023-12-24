**unread-char** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"unread-char"}><b>unread-char</b></ClLinks> <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> &amp;optional *input-stream →* <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> 



**Arguments and Values:** 



<ClLinks styled={true} term={"character"}><i>character</i></ClLinks>—a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> ; must be the last <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> that was read from *input-stream*. *input-stream*—an *input stream designator* . The default is *standard input*. 



**Description:** 



<ClLinks styled={true} term={"unread-char"}><b>unread-char</b></ClLinks> places <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> back onto the front of *input-stream* so that it will again be the next character in *input-stream*. 



When *input-stream* is an *echo stream*, no attempt is made to undo any echoing of the character that might already have been done on *input-stream*. However, characters placed on *input-stream* by <ClLinks styled={true} term={"unread-char"}><b>unread-char</b></ClLinks> are marked in such a way as to inhibit later re-echo by <ClLinks styled={true} term={"read-char"}><b>read-char</b></ClLinks>. 



It is an error to invoke <ClLinks styled={true} term={"unread-char"}><b>unread-char</b></ClLinks> twice consecutively on the same <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> without an intervening call to <ClLinks styled={true} term={"read-char"}><b>read-char</b></ClLinks> (or some other input operation which implicitly reads characters) on that <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>. 



Invoking <ClLinks styled={true} term={"peek-char"}><b>peek-char</b></ClLinks> or <ClLinks styled={true} term={"read-char"}><b>read-char</b></ClLinks> commits all previous characters. The consequences of invoking <ClLinks styled={true} term={"unread-char"}><b>unread-char</b></ClLinks> on any character preceding that which is returned by <ClLinks styled={true} term={"peek-char"}><b>peek-char</b></ClLinks> (including those passed over by <ClLinks styled={true} term={"peek-char"}><b>peek-char</b></ClLinks> that has a *non-nil peek-type*) are unspecified. In particular, the consequences of invoking <ClLinks styled={true} term={"unread-char"}><b>unread-char</b></ClLinks> after <ClLinks styled={true} term={"peek-char"}><b>peek-char</b></ClLinks> are unspecified. 



**Examples:**
```lisp

(with-input-from-string (is "0123") 
  (dotimes (i 6) 
    (let ((c (read-char is))) 
      (if (evenp i) (format t "~&~S ~S~%" i c) (unread-char c is))))) 
▷ 0 #\0 
▷ 2 #\1 
▷ 4 #\2 
→ NIL 




```
**Affected By:** 



**\*standard-input\***, <ClLinks styled={true} term={"terminal-io"}><b>\*terminal-io\*</b></ClLinks>. 



**See Also:** 



<ClLinks styled={true} term={"peek-char"}><b>peek-char</b></ClLinks>, <ClLinks styled={true} term={"read-char"}><b>read-char</b></ClLinks>, Section 21.1 (Stream Concepts) 



**Notes:** 



<ClLinks styled={true} term={"unread-char"}><b>unread-char</b></ClLinks> is intended to be an efficient mechanism for allowing the *Lisp reader* and other parsers to perform one-character lookahead in *input-stream*. 




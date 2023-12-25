**unread-char** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"unread-char"}><b>unread-char</b></DictionaryLink> <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> &amp;optional *input-stream →* <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> ; must be the last <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> that was read from *input-stream*. *input-stream*—an *input stream designator* . The default is *standard input*. 



**Description:** 



<DictionaryLink styled={true} term={"unread-char"}><b>unread-char</b></DictionaryLink> places <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> back onto the front of *input-stream* so that it will again be the next character in *input-stream*. 



When *input-stream* is an *echo stream*, no attempt is made to undo any echoing of the character that might already have been done on *input-stream*. However, characters placed on *input-stream* by <DictionaryLink styled={true} term={"unread-char"}><b>unread-char</b></DictionaryLink> are marked in such a way as to inhibit later re-echo by <DictionaryLink styled={true} term={"read-char"}><b>read-char</b></DictionaryLink>. 



It is an error to invoke <DictionaryLink styled={true} term={"unread-char"}><b>unread-char</b></DictionaryLink> twice consecutively on the same <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> without an intervening call to <DictionaryLink styled={true} term={"read-char"}><b>read-char</b></DictionaryLink> (or some other input operation which implicitly reads characters) on that <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. 



Invoking <DictionaryLink styled={true} term={"peek-char"}><b>peek-char</b></DictionaryLink> or <DictionaryLink styled={true} term={"read-char"}><b>read-char</b></DictionaryLink> commits all previous characters. The consequences of invoking <DictionaryLink styled={true} term={"unread-char"}><b>unread-char</b></DictionaryLink> on any character preceding that which is returned by <DictionaryLink styled={true} term={"peek-char"}><b>peek-char</b></DictionaryLink> (including those passed over by <DictionaryLink styled={true} term={"peek-char"}><b>peek-char</b></DictionaryLink> that has a *non-nil peek-type*) are unspecified. In particular, the consequences of invoking <DictionaryLink styled={true} term={"unread-char"}><b>unread-char</b></DictionaryLink> after <DictionaryLink styled={true} term={"peek-char"}><b>peek-char</b></DictionaryLink> are unspecified. 



**Examples:**
```lisp

(with-input-from-string (is "0123") 
  (dotimes (i 6) 
    (let ((c (read-char is))) 
      (if (evenp i) (format t "~&~S ~S~%" i c) (unread-char c is))))) 
▷ 0 #\0 
▷ 2 #\1 
▷ 4 #\2 
*→* NIL 




```
**Affected By:** 



**\*standard-input\***, <DictionaryLink styled={true} term={"terminal-io"}><b>\*terminal-io\*</b></DictionaryLink>. 



**See Also:** 



<DictionaryLink styled={true} term={"peek-char"}><b>peek-char</b></DictionaryLink>, <DictionaryLink styled={true} term={"read-char"}><b>read-char</b></DictionaryLink>, Section 21.1 (Stream Concepts) 



**Notes:** 



<DictionaryLink styled={true} term={"unread-char"}><b>unread-char</b></DictionaryLink> is intended to be an efficient mechanism for allowing the *Lisp reader* and other parsers to perform one-character lookahead in *input-stream*. 




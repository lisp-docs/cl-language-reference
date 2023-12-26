**unread-char** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"unread-char"}><b>unread-char</b></DictionaryLink> <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> &amp;optional *input-stream →* <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> 



**Arguments and Values:** 



<GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm>—a <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> ; must be the last <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> that was read from *input-stream*. *input-stream*—an *input stream designator* . The default is <GlossaryTerm styled={true} term={"standard input"}><i>standard input</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink  term={"unread-char"}><b>unread-char</b></DictionaryLink> places <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> back onto the front of *input-stream* so that it will again be the next character in *input-stream*. 



When *input-stream* is an <GlossaryTerm styled={true} term={"echo stream"}><i>echo stream</i></GlossaryTerm>, no attempt is made to undo any echoing of the character that might already have been done on *input-stream*. However, characters placed on *input-stream* by <DictionaryLink  term={"unread-char"}><b>unread-char</b></DictionaryLink> are marked in such a way as to inhibit later re-echo by <DictionaryLink  term={"read-char"}><b>read-char</b></DictionaryLink>. 



It is an error to invoke <DictionaryLink  term={"unread-char"}><b>unread-char</b></DictionaryLink> twice consecutively on the same <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> without an intervening call to <DictionaryLink  term={"read-char"}><b>read-char</b></DictionaryLink> (or some other input operation which implicitly reads characters) on that <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>. 



Invoking <DictionaryLink  term={"peek-char"}><b>peek-char</b></DictionaryLink> or <DictionaryLink  term={"read-char"}><b>read-char</b></DictionaryLink> commits all previous characters. The consequences of invoking <DictionaryLink  term={"unread-char"}><b>unread-char</b></DictionaryLink> on any character preceding that which is returned by <DictionaryLink  term={"peek-char"}><b>peek-char</b></DictionaryLink> (including those passed over by <DictionaryLink  term={"peek-char"}><b>peek-char</b></DictionaryLink> that has a *non-nil peek-type*) are unspecified. In particular, the consequences of invoking <DictionaryLink  term={"unread-char"}><b>unread-char</b></DictionaryLink> after <DictionaryLink  term={"peek-char"}><b>peek-char</b></DictionaryLink> are unspecified. 



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



**\*standard-input\***, <DictionaryLink  term={"terminal-io"}><b>\*terminal-io\*</b></DictionaryLink>. 



**See Also:** 



<DictionaryLink  term={"peek-char"}><b>peek-char</b></DictionaryLink>, <DictionaryLink  term={"read-char"}><b>read-char</b></DictionaryLink>, Section 21.1 (Stream Concepts) 



**Notes:** 



<DictionaryLink  term={"unread-char"}><b>unread-char</b></DictionaryLink> is intended to be an efficient mechanism for allowing the *Lisp reader* and other parsers to perform one-character lookahead in *input-stream*. 




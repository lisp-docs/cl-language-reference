**char-name** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"char-name"}><b>char-name</b></DictionaryLink> *character → name* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> . 



<GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



**Description:** 



Returns a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> that is the <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm>, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> if the <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> has no <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>. 



All <GlossaryTerm styled={true} term={"non-graphic"}><i>non-graphic</i></GlossaryTerm> characters are required to have <GlossaryTerm styled={true} term={"name"}><i>names</i></GlossaryTerm> unless they have some *implementation-defined attribute* which is not <GlossaryTerm styled={true} term={"null"}><i>null</i></GlossaryTerm>. Whether or not other <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> have <GlossaryTerm styled={true} term={"name"}><i>names</i></GlossaryTerm> is *implementation dependent*. 



The *standard characters hNewlinei* and *hSpacei* have the respective names "Newline" and "Space". The *semi-standard characters hTabi*, *hPagei*, *hRubouti*, *hLinefeedi*, *hReturni*, and *hBackspacei* (if they are supported by the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm>) have the respective names "Tab", "Page", "Rubout", "Linefeed", "Return", and "Backspace" (in the indicated case, even though name lookup by “#\” and by the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"name-char"}><b>name-char</b></DictionaryLink> is not case sensitive). 



**Examples:**
```lisp

(char-name #\ ) *→* "Space" 
(char-name #\Space) *→* "Space" 
(char-name #\Page) *→* "Page" 
(char-name #\a) 
*→* NIL 
<i><sup>or</sup>→</i> "LOWERCASE-a" 
<i><sup>or</sup>→</i> "Small-A" 
<i><sup>or</sup>→</i> "LA01" 
(char-name #\A) 
*→* NIL 
<i><sup>or</sup>→</i> "UPPERCASE-A" 
<i><sup>or</sup>→</i> "Capital-A" 
<i><sup>or</sup>→</i> "LA02" 
;; Even though its CHAR-NAME can vary, #\A prints as #\A 
(prin1-to-string (read-from-string (format nil "#\\~A" (or (char-name #\A) "A")))) *→* "#\\A" 




```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> is not a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> . 



**See Also:** 



<DictionaryLink styled={true} term={"name-char"}><b>name-char</b></DictionaryLink>, Section 22.1.3.2 (Printing Characters) 



**Notes:** 



*Non-graphic characters* having <GlossaryTerm styled={true} term={"name"}><i>names</i></GlossaryTerm> are written by the *Lisp printer* as “#\” followed by the their <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>; see Section 22.1.3.2 (Printing Characters). 




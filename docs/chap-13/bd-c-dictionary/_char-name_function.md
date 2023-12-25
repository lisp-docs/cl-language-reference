**char-name** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"char-name"}><b>char-name</b></ClLinks> *character → name* 



**Arguments and Values:** 



<ClLinks styled={true} term={"character"}><i>character</i></ClLinks>—a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> . 



<ClLinks styled={true} term={"name"}><i>name</i></ClLinks>—a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



**Description:** 



Returns a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> that is the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> of the <ClLinks styled={true} term={"character"}><i>character</i></ClLinks>, or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> if the <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> has no <ClLinks styled={true} term={"name"}><i>name</i></ClLinks>. 



All <ClLinks styled={true} term={"non-graphic"}><i>non-graphic</i></ClLinks> characters are required to have <ClLinks styled={true} term={"name"}><i>names</i></ClLinks> unless they have some *implementation-defined attribute* which is not <ClLinks styled={true} term={"null"}><i>null</i></ClLinks>. Whether or not other <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks> have <ClLinks styled={true} term={"name"}><i>names</i></ClLinks> is *implementation dependent*. 



The *standard characters ⟨Newline⟩* and <ClLinks styled={true} term={"space"}><i>⟨Space⟩</i></ClLinks> have the respective names "Newline" and "Space". The *semi-standard characters ⟨Tab⟩*, *⟨Page⟩*, *⟨Rubout⟩*, *⟨Linefeed⟩*, *⟨Return⟩*, and *⟨Backspace⟩* (if they are supported by the <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks>) have the respective names "Tab", "Page", "Rubout", "Linefeed", "Return", and "Backspace" (in the indicated case, even though name lookup by “#\” and by the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"name-char"}><b>name-char</b></ClLinks> is not case sensitive). 



**Examples:**
```lisp
(char-name #\ ) → "Space" 
(char-name #\Space) → "Space" 
(char-name #\Page) → "Page" 
(char-name #\a) 
→ NIL 
<i><sup>or</sup>→</i> "LOWERCASE-a" 
<i><sup>or</sup>→</i> "Small-A" 
<i><sup>or</sup>→</i> "LA01" 
(char-name #\A) 
→ NIL 
<i><sup>or</sup>→</i> "UPPERCASE-A" 
<i><sup>or</sup>→</i> "Capital-A" 
<i><sup>or</sup>→</i> "LA02" 
;; Even though its CHAR-NAME can vary, #\A prints as #\A 
(prin1-to-string (read-from-string (format nil "#\\~A" (or (char-name #\A) "A")))) → "#\\A" 


```
**Exceptional Situations:** 



Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> is not a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> . 



**See Also:** 



<ClLinks styled={true} term={"name-char"}><b>name-char</b></ClLinks>, Section 22.1.3.2 (Printing Characters) 



**Notes:** 



*Non-graphic characters* having <ClLinks styled={true} term={"name"}><i>names</i></ClLinks> are written by the *Lisp printer* as “#\” followed by the their <ClLinks styled={true} term={"name"}><i>name</i></ClLinks>; see Section 22.1.3.2 (Printing Characters). 




**set-syntax-from-char** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"set-syntax-from-char"}><b>set-syntax-from-char</b></ClLinks> *to-char from-char* &amp;optional *to-readtable from-readtable →* <ClLinks  term={"t"}><b>t</b></ClLinks> 



**Arguments and Values:** 



*to-char*—a <ClLinks  term={"character"}><i>character</i></ClLinks> . 



*from-char*—a <ClLinks  term={"character"}><i>character</i></ClLinks> . 



*to-readtable*—a <ClLinks  term={"readtable"}><i>readtable</i></ClLinks>. The default is the <GlossaryTerm styled={true} term={"current readtable"}><i>current readtable</i></GlossaryTerm>. 



*from-readtable*—a <GlossaryTerm styled={true} term={"readtable designator"}><i>readtable designator</i></GlossaryTerm> . The default is the <GlossaryTerm styled={true} term={"standard readtable"}><i>standard readtable</i></GlossaryTerm>. 



**Description:** 



<ClLinks  term={"set-syntax-from-char"}><b>set-syntax-from-char</b></ClLinks> makes the syntax of *to-char* in *to-readtable* be the same as the syntax of *from-char* in *from-readtable*. 



<ClLinks  term={"set-syntax-from-char"}><b>set-syntax-from-char</b></ClLinks> copies the <GlossaryTerm styled={true} term={"syntax type"}><i>syntax types</i></GlossaryTerm> of *from-char*. If *from-char* is a <GlossaryTerm styled={true} term={"macro character"}><i>macro character</i></GlossaryTerm> , its <GlossaryTerm styled={true} term={"reader macro function"}><i>reader macro function</i></GlossaryTerm> is copied also. If the character is a <GlossaryTerm styled={true} term={"dispatching macro character"}><i>dispatching macro character</i></GlossaryTerm> , its entire dispatch table of <GlossaryTerm styled={true} term={"reader macro function"}><i>reader macro functions</i></GlossaryTerm> is copied. The <GlossaryTerm styled={true} term={"constituent trait"}><i>constituent traits</i></GlossaryTerm> of *from-char* are not copied. 



A macro definition from a character such as " can be copied to another character; the standard definition for " looks for another character that is the same as the character that invoked it. The definition of ( can not be meaningfully copied to \{, on the other hand. The result is that <ClLinks  term={"list"}><i>lists</i></ClLinks> are of the form \{a b c), not \{a b c\}, because the definition always looks for a closing parenthesis, not a closing brace. 



**Examples:**
```lisp
(set-syntax-from-char #\7 #\;) → T 
123579 → 1235 
```
**Side Effects:** 



The *to-readtable* is modified. 



**Affected By:** 



The existing values in the *from-readtable*. 



**See Also:** 



<ClLinks  term={"set-macro-character"}><b>set-macro-character</b></ClLinks>, <ClLinks  term={"make-dispatch-macro-character"}><b>make-dispatch-macro-character</b></ClLinks>, Section 2.1.4 (Character Syntax Types) 



 



 



**Notes:** 



The <GlossaryTerm styled={true} term={"constituent trait"}><i>constituent traits</i></GlossaryTerm> of a <ClLinks  term={"character"}><i>character</i></ClLinks> are “hard wired” into the parser for extended <ClLinks  term={"token"}><i>tokens</i></ClLinks>. For example, if the definition of S is copied to \*, then \* will become a <ClLinks  term={"constituent"}><i>constituent</i></ClLinks> that is <ClLinks  term={"alphabetic"}><i>alphabetic</i></ClLinks><sub>2</sub> but that cannot be used as a *short float exponent marker* . For further information, see Section 2.1.4.2 (Constituent Traits). 




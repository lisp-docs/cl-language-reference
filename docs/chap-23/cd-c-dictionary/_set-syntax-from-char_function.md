**set-syntax-from-char** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"set-syntax-from-char"}><b>set-syntax-from-char</b></ClLinks> *to-char from-char* &amp;optional *to-readtable from-readtable →* <ClLinks  term={"t"}><b>t</b></ClLinks> 



**Arguments and Values:** 



*to-char*—a <ClLinks  term={"character"}><i>character</i></ClLinks> . 



*from-char*—a <ClLinks  term={"character"}><i>character</i></ClLinks> . 



*to-readtable*—a <ClLinks  term={"readtable"}><i>readtable</i></ClLinks>. The default is the *current readtable*. 



*from-readtable*—a *readtable designator* . The default is the *standard readtable*. 



**Description:** 



<ClLinks  term={"set-syntax-from-char"}><b>set-syntax-from-char</b></ClLinks> makes the syntax of *to-char* in *to-readtable* be the same as the syntax of *from-char* in *from-readtable*. 



<ClLinks  term={"set-syntax-from-char"}><b>set-syntax-from-char</b></ClLinks> copies the *syntax types* of *from-char*. If *from-char* is a *macro character* , its *reader macro function* is copied also. If the character is a *dispatching macro character* , its entire dispatch table of *reader macro functions* is copied. The *constituent traits* of *from-char* are not copied. 



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



The *constituent traits* of a <ClLinks  term={"character"}><i>character</i></ClLinks> are “hard wired” into the parser for extended <ClLinks  term={"token"}><i>tokens</i></ClLinks>. For example, if the definition of S is copied to \*, then \* will become a <ClLinks  term={"constituent"}><i>constituent</i></ClLinks> that is <ClLinks  term={"alphabetic"}><i>alphabetic</i></ClLinks><sub>2</sub> but that cannot be used as a *short float exponent marker* . For further information, see Section 2.1.4.2 (Constituent Traits). 




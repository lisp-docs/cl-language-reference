**set-syntax-from-char** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"set-syntax-from-char"}><b>set-syntax-from-char</b></DictionaryLink> *to-char from-char* &amp;optional *to-readtable from-readtable →* <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> 



**Arguments and Values:** 



*to-char*—a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> . 



*from-char*—a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> . 



*to-readtable*—a <GlossaryTerm styled={true} term={"readtable"}><i>readtable</i></GlossaryTerm>. The default is the *current readtable*. 



*from-readtable*—a *readtable designator* . The default is the *standard readtable*. 



**Description:** 



<DictionaryLink styled={true} term={"set-syntax-from-char"}><b>set-syntax-from-char</b></DictionaryLink> makes the syntax of *to-char* in *to-readtable* be the same as the syntax of *from-char* in *from-readtable*. 



<DictionaryLink styled={true} term={"set-syntax-from-char"}><b>set-syntax-from-char</b></DictionaryLink> copies the *syntax types* of *from-char*. If *from-char* is a *macro character* , its *reader macro function* is copied also. If the character is a *dispatching macro character* , its entire dispatch table of *reader macro functions* is copied. The *constituent traits* of *from-char* are not copied. 



A macro definition from a character such as " can be copied to another character; the standard definition for " looks for another character that is the same as the character that invoked it. The definition of ( can not be meaningfully copied to \{, on the other hand. The result is that <GlossaryTerm styled={true} term={"list"}><i>lists</i></GlossaryTerm> are of the form \{a b c), not \{a b c\}, because the definition always looks for a closing parenthesis, not a closing brace. 



**Examples:**
```lisp

(set-syntax-from-char #\7 #\;) *→* T 
123579 *→* 1235 

```
**Side Effects:** 



The *to-readtable* is modified. 



**Affected By:** 



The existing values in the *from-readtable*. 



**See Also:** 



<DictionaryLink styled={true} term={"set-macro-character"}><b>set-macro-character</b></DictionaryLink>, <DictionaryLink styled={true} term={"make-dispatch-macro-character"}><b>make-dispatch-macro-character</b></DictionaryLink>, Section 2.1.4 (Character Syntax Types) 



 



 



**Notes:** 



The *constituent traits* of a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> are “hard wired” into the parser for extended <GlossaryTerm styled={true} term={"token"}><i>tokens</i></GlossaryTerm>. For example, if the definition of S is copied to \*, then \* will become a <GlossaryTerm styled={true} term={"constituent"}><i>constituent</i></GlossaryTerm> that is <GlossaryTerm styled={true} term={"alphabetic"}><i>alphabetic</i></GlossaryTerm><sub>2</sub> but that cannot be used as a *short float exponent marker* . For further information, see Section 2.1.4.2 (Constituent Traits). 




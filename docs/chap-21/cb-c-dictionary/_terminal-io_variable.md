*∗<DictionaryLink  term={"terminal-io"}><b>*terminal-io*</b></DictionaryLink>∗ Variable* 



**Value Type:** 



a *bidirectional stream*. 



**Initial Value:** 



<ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>, but it must be an *open stream* that is not a <GlossaryTerm styled={true} term={"generalized synonym stream"}><i>generalized synonym stream</i></GlossaryTerm> to an *I/O customization variables* but that might be a <GlossaryTerm styled={true} term={"generalized synonym stream"}><i>generalized synonym stream</i></GlossaryTerm> to the <ClLinks  term={"value"}><i>value</i></ClLinks> of some *I/O customization variable*. 



**Description:** 



The <ClLinks  term={"value"}><i>value</i></ClLinks> of <DictionaryLink  term={"terminal-io"}><b>\*terminal-io\*</b></DictionaryLink>, called *terminal I/O*, is ordinarily a *bidirectional stream* that connects to the user’s console. Typically, writing to this <ClLinks  term={"stream"}><i>stream</i></ClLinks> would cause the output to appear on a display screen, for example, and reading from the <ClLinks  term={"stream"}><i>stream</i></ClLinks> would accept input from a keyboard. It is intended that standard input functions such as <DictionaryLink  term={"read"}><b>read</b></DictionaryLink> and <DictionaryLink  term={"read-char"}><b>read-char</b></DictionaryLink>, when used with this <ClLinks  term={"stream"}><i>stream</i></ClLinks>, cause echoing of the input into the output side of the <ClLinks  term={"stream"}><i>stream</i></ClLinks>. The means by which this is accomplished are <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. 



The effect of changing the <ClLinks  term={"value"}><i>value</i></ClLinks> of <DictionaryLink  term={"terminal-io"}><b>\*terminal-io\*</b></DictionaryLink>, either by <ClLinks  term={"binding"}><i>binding</i></ClLinks> or *assignment*, is <ClLinks  term={"implementation-defined"}><i>implementation-defined</i></ClLinks>. 



**Examples:**
```lisp
(progn (prin1 ’foo) (prin1 ’bar \*terminal-io\*)) 

▷ FOOBAR 
→ BAR 
(with-output-to-string (\*standard-output\*) 
  (prin1 ’foo) 
  (prin1 ’bar \*terminal-io\*)) 
▷ BAR 
→ "FOO" 
```
**See Also:** 



**\*debug-io\***, **\*error-output\***, **\*query-io\***, **\*standard-input\***, **\*standard-output\***, **\*trace-output\* stream-error** *Condition Type* 



**Class Precedence List:** 



**stream-error**, <DictionaryLink  term={"error"}><b>error</b></DictionaryLink>, <DictionaryLink  term={"serious-condition"}><b>serious-condition</b></DictionaryLink>, <DictionaryLink  term={"condition"}><b>condition</b></DictionaryLink>, <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



The <ClLinks  term={"type"}><i>type</i></ClLinks> **stream-error** consists of error conditions that are related to receiving input from or sending output to a <ClLinks  term={"stream"}><i>stream</i></ClLinks>. The “offending stream” is initialized by the :stream initialization argument to <DictionaryLink  term={"make-condition"}><b>make-condition</b></DictionaryLink>, and is *accessed* by the <ClLinks  term={"function"}><i>function</i></ClLinks> <DictionaryLink  term={"stream-error-stream"}><b>stream-error-stream</b></DictionaryLink>. 



**See Also:** 



<DictionaryLink  term={"stream-error-stream"}><b>stream-error-stream</b></DictionaryLink> 




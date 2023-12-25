*∗<DictionaryLink styled={true} term={"terminal-io"}><b>*terminal-io*</b></DictionaryLink>∗ Variable* 



**Value Type:** 



a *bidirectional stream*. 



**Initial Value:** 



<GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>, but it must be an *open stream* that is not a *generalized synonym stream* to an *I/O customization variables* but that might be a *generalized synonym stream* to the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of some *I/O customization variable*. 



**Description:** 



The <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"terminal-io"}><b>\*terminal-io\*</b></DictionaryLink>, called *terminal I/O*, is ordinarily a *bidirectional stream* that connects to the user’s console. Typically, writing to this <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> would cause the output to appear on a display screen, for example, and reading from the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> would accept input from a keyboard. It is intended that standard input functions such as <DictionaryLink styled={true} term={"read"}><b>read</b></DictionaryLink> and <DictionaryLink styled={true} term={"read-char"}><b>read-char</b></DictionaryLink>, when used with this <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>, cause echoing of the input into the output side of the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. The means by which this is accomplished are <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. 



The effect of changing the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"terminal-io"}><b>\*terminal-io\*</b></DictionaryLink>, either by <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> or *assignment*, is <GlossaryTerm styled={true} term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm>. 



**Examples:**
```lisp

(progn (prin1 ’foo) (prin1 ’bar \*terminal-io\*)) 



▷ FOOBAR 
*→* BAR 
(with-output-to-string (\*standard-output\*) 
  (prin1 ’foo) 
  (prin1 ’bar \*terminal-io\*)) 
▷ BAR 
*→* "FOO" 

```
**See Also:** 



**\*debug-io\***, **\*error-output\***, **\*query-io\***, **\*standard-input\***, **\*standard-output\***, **\*trace-output\* stream-error** *Condition Type* 



**Class Precedence List:** 



**stream-error**, <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink>, <DictionaryLink styled={true} term={"serious-condition"}><b>serious-condition</b></DictionaryLink>, <DictionaryLink styled={true} term={"condition"}><b>condition</b></DictionaryLink>, <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



The <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> **stream-error** consists of error conditions that are related to receiving input from or sending output to a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. The “offending stream” is initialized by the :stream initialization argument to <DictionaryLink styled={true} term={"make-condition"}><b>make-condition</b></DictionaryLink>, and is *accessed* by the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"stream-error-stream"}><b>stream-error-stream</b></DictionaryLink>. 



**See Also:** 



<DictionaryLink styled={true} term={"stream-error-stream"}><b>stream-error-stream</b></DictionaryLink> 




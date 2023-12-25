*∗<ClLinks styled={true} term={"terminal-io"}><b>*terminal-io*</b></ClLinks>∗ Variable* 



**Value Type:** 



a *bidirectional stream*. 



**Initial Value:** 



<ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>, but it must be an *open stream* that is not a *generalized synonym stream* to an *I/O customization variables* but that might be a *generalized synonym stream* to the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of some *I/O customization variable*. 



**Description:** 



The <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"terminal-io"}><b>\*terminal-io\*</b></ClLinks>, called *terminal I/O*, is ordinarily a *bidirectional stream* that connects to the user’s console. Typically, writing to this <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> would cause the output to appear on a display screen, for example, and reading from the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> would accept input from a keyboard. It is intended that standard input functions such as <ClLinks styled={true} term={"read"}><b>read</b></ClLinks> and <ClLinks styled={true} term={"read-char"}><b>read-char</b></ClLinks>, when used with this <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>, cause echoing of the input into the output side of the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>. The means by which this is accomplished are <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. 



The effect of changing the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"terminal-io"}><b>\*terminal-io\*</b></ClLinks>, either by <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> or *assignment*, is <ClLinks styled={true} term={"implementation-defined"}><i>implementation-defined</i></ClLinks>. 



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



**stream-error**, <ClLinks styled={true} term={"error"}><b>error</b></ClLinks>, <ClLinks styled={true} term={"serious-condition"}><b>serious-condition</b></ClLinks>, <ClLinks styled={true} term={"condition"}><b>condition</b></ClLinks>, <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> 



**Description:** 



The <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> **stream-error** consists of error conditions that are related to receiving input from or sending output to a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>. The “offending stream” is initialized by the :stream initialization argument to <ClLinks styled={true} term={"make-condition"}><b>make-condition</b></ClLinks>, and is *accessed* by the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"stream-error-stream"}><b>stream-error-stream</b></ClLinks>. 



**See Also:** 



<ClLinks styled={true} term={"stream-error-stream"}><b>stream-error-stream</b></ClLinks> 




*∗***terminal-io***∗ Variable* 



**Value Type:** 



a *bidirectional stream*. 



**Initial Value:** 



*implementation-dependent*, but it must be an *open stream* that is not a *generalized synonym stream* to an *I/O customization variables* but that might be a *generalized synonym stream* to the *value* of some *I/O customization variable*. 



**Description:** 



The *value* of **\*terminal-io\***, called *terminal I/O*, is ordinarily a *bidirectional stream* that connects to the user’s console. Typically, writing to this *stream* would cause the output to appear on a display screen, for example, and reading from the *stream* would accept input from a keyboard. It is intended that standard input functions such as **read** and **read-char**, when used with this *stream*, cause echoing of the input into the output side of the *stream*. The means by which this is accomplished are *implementation-dependent*. 



The effect of changing the *value* of **\*terminal-io\***, either by *binding* or *assignment*, is *implementation-defined*. 



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



**stream-error**, **error**, **serious-condition**, **condition**, **t** 



**Description:** 



The *type* **stream-error** consists of error conditions that are related to receiving input from or sending output to a *stream*. The “offending stream” is initialized by the :stream initialization argument to **make-condition**, and is *accessed* by the *function* **stream-error-stream**. 



**See Also:** 



**stream-error-stream** 




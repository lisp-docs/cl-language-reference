**with-open-stream** <GlossaryTerm  term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"with-open-stream"}><b>with-open-stream</b></DictionaryLink> (*var stream*) *\{declaration\}*\* <GlossaryTerm  term={"form"}><i>\{form\}</i></GlossaryTerm>\* 



→ \{result\}\* 



**Arguments and Values:** 



*var*—a *variable name*. 



<GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>—a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>; evaluated to produce a <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>. 



<GlossaryTerm  term={"declaration"}><i>declaration</i></GlossaryTerm>—a <DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink> <GlossaryTerm  term={"expression"}><i>expression</i></GlossaryTerm>; not evaluated. 



<GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"implicit progn"}><i>implicit progn</i></GlossaryTerm>. 



*results*—the <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> returned by the <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink  term={"with-open-stream"}><b>with-open-stream</b></DictionaryLink> performs a series of operations on <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>, returns a value, and then closes the <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>. 



*Var* is bound to the value of <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>, and then <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> are executed as an <GlossaryTerm styled={true} term={"implicit progn"}><i>implicit progn</i></GlossaryTerm>. <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> is automatically closed on exit from <DictionaryLink  term={"with-open-stream"}><b>with-open-stream</b></DictionaryLink>, no matter whether the exit is normal or abnormal. The <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> has <GlossaryTerm styled={true} term={"dynamic extent"}><i>dynamic extent</i></GlossaryTerm>; its <GlossaryTerm  term={"extent"}><i>extent</i></GlossaryTerm> ends when the <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> is exited. 



The consequences are undefined if an attempt is made to <GlossaryTerm  term={"assign"}><i>assign</i></GlossaryTerm> the the *variable var* with the <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm>. 



**Examples:**
```lisp
(with-open-stream (s (make-string-input-stream "1 2 3 4")) 
  (+ (read s) (read s) (read s))) → 6 


```
**Side Effects:** 



The <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> is closed (upon exit). 



**See Also:** 



<DictionaryLink  term={"close"}><b>close</b></DictionaryLink> 




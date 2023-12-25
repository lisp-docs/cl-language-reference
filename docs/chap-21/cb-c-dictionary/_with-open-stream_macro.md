**with-open-stream** <GlossaryTerm styled={true} term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"with-open-stream"}><b>with-open-stream</b></DictionaryLink> (*var stream*) *\{declaration\}*\* <GlossaryTerm styled={true} term={"form"}><i>\{form\}</i></GlossaryTerm>\* 



*→ \{result\}*\* 



**Arguments and Values:** 



*var*—a *variable name*. 



<GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>; evaluated to produce a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm>—a <DictionaryLink styled={true} term={"declare"}><b>declare</b></DictionaryLink> <GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm>; not evaluated. 



<GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>—an *implicit progn*. 



*results*—the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> returned by the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink styled={true} term={"with-open-stream"}><b>with-open-stream</b></DictionaryLink> performs a series of operations on <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>, returns a value, and then closes the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. 



*Var* is bound to the value of <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>, and then <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> are executed as an *implicit progn*. *stream* is automatically closed on exit from <DictionaryLink styled={true} term={"with-open-stream"}><b>with-open-stream</b></DictionaryLink>, no matter whether the exit is normal or abnormal. The <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> has *dynamic extent*; its <GlossaryTerm styled={true} term={"extent"}><i>extent</i></GlossaryTerm> ends when the <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> is exited. 



The consequences are undefined if an attempt is made to <GlossaryTerm styled={true} term={"assign"}><i>assign</i></GlossaryTerm> the the *variable var* with the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>. 



**Examples:**
```lisp

(with-open-stream (s (make-string-input-stream "1 2 3 4")) 
  (+ (read s) (read s) (read s))) *→* 6 




```
**Side Effects:** 



The <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> is closed (upon exit). 



**See Also:** 



<DictionaryLink styled={true} term={"close"}><b>close</b></DictionaryLink> 




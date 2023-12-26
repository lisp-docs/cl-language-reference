**with-open-stream** <ClLinks  term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"with-open-stream"}><b>with-open-stream</b></ClLinks> (*var stream*) *\{declaration\}*\* <ClLinks  term={"form"}><i>\{form\}</i></ClLinks>\* 



→ \{result\}\* 



**Arguments and Values:** 



*var*—a *variable name*. 



<ClLinks  term={"stream"}><i>stream</i></ClLinks>—a <ClLinks  term={"form"}><i>form</i></ClLinks>; evaluated to produce a <ClLinks  term={"stream"}><i>stream</i></ClLinks>. 



<ClLinks  term={"declaration"}><i>declaration</i></ClLinks>—a <ClLinks  term={"declare"}><b>declare</b></ClLinks> <ClLinks  term={"expression"}><i>expression</i></ClLinks>; not evaluated. 



<ClLinks  term={"form"}><i>forms</i></ClLinks>—an <GlossaryTerm styled={true} term={"implicit progn"}><i>implicit progn</i></GlossaryTerm>. 



*results*—the <ClLinks  term={"value"}><i>values</i></ClLinks> returned by the <ClLinks  term={"form"}><i>forms</i></ClLinks>. 



**Description:** 



<ClLinks  term={"with-open-stream"}><b>with-open-stream</b></ClLinks> performs a series of operations on <ClLinks  term={"stream"}><i>stream</i></ClLinks>, returns a value, and then closes the <ClLinks  term={"stream"}><i>stream</i></ClLinks>. 



*Var* is bound to the value of <ClLinks  term={"stream"}><i>stream</i></ClLinks>, and then <ClLinks  term={"form"}><i>forms</i></ClLinks> are executed as an <GlossaryTerm styled={true} term={"implicit progn"}><i>implicit progn</i></GlossaryTerm>. <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> is automatically closed on exit from <ClLinks  term={"with-open-stream"}><b>with-open-stream</b></ClLinks>, no matter whether the exit is normal or abnormal. The <ClLinks  term={"stream"}><i>stream</i></ClLinks> has <GlossaryTerm styled={true} term={"dynamic extent"}><i>dynamic extent</i></GlossaryTerm>; its <ClLinks  term={"extent"}><i>extent</i></ClLinks> ends when the <ClLinks  term={"form"}><i>form</i></ClLinks> is exited. 



The consequences are undefined if an attempt is made to <ClLinks  term={"assign"}><i>assign</i></ClLinks> the the *variable var* with the <ClLinks  term={"form"}><i>forms</i></ClLinks>. 



**Examples:**
```lisp
(with-open-stream (s (make-string-input-stream "1 2 3 4")) 
  (+ (read s) (read s) (read s))) → 6 


```
**Side Effects:** 



The <ClLinks  term={"stream"}><i>stream</i></ClLinks> is closed (upon exit). 



**See Also:** 



<ClLinks  term={"close"}><b>close</b></ClLinks> 




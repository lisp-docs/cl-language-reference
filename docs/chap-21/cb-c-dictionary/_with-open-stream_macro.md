**with-open-stream** <ClLinks styled={true} term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"with-open-stream"}><b>with-open-stream</b></ClLinks> (*var stream*) *\{declaration\}*\* <ClLinks styled={true} term={"form"}><i>\{form\}</i></ClLinks>\* 



→ \{result\}\* 



**Arguments and Values:** 



*var*—a *variable name*. 



<ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>—a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>; evaluated to produce a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>. 



<ClLinks styled={true} term={"declaration"}><i>declaration</i></ClLinks>—a <ClLinks styled={true} term={"declare"}><b>declare</b></ClLinks> <ClLinks styled={true} term={"expression"}><i>expression</i></ClLinks>; not evaluated. 



<ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>—an *implicit progn*. 



*results*—the <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> returned by the <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>. 



**Description:** 



<ClLinks styled={true} term={"with-open-stream"}><b>with-open-stream</b></ClLinks> performs a series of operations on <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>, returns a value, and then closes the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>. 



*Var* is bound to the value of <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>, and then <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> are executed as an *implicit progn*. *stream* is automatically closed on exit from <ClLinks styled={true} term={"with-open-stream"}><b>with-open-stream</b></ClLinks>, no matter whether the exit is normal or abnormal. The <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> has *dynamic extent*; its <ClLinks styled={true} term={"extent"}><i>extent</i></ClLinks> ends when the <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> is exited. 



The consequences are undefined if an attempt is made to <ClLinks styled={true} term={"assign"}><i>assign</i></ClLinks> the the *variable var* with the <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>. 



**Examples:**
```lisp
(with-open-stream (s (make-string-input-stream "1 2 3 4")) 
  (+ (read s) (read s) (read s))) → 6 


```
**Side Effects:** 



The <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> is closed (upon exit). 



**See Also:** 



<ClLinks styled={true} term={"close"}><b>close</b></ClLinks> 




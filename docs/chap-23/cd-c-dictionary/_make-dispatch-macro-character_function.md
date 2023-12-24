**make-dispatch-macro-character** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"make-dispatch-macro-character"}><b>make-dispatch-macro-character</b></ClLinks> *char* &amp;optional *non-terminating-p readtable →* <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> 



**Arguments and Values:** 



*char*—a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> . 



*non-terminating-p*—a *generalized boolean*. The default is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 



<ClLinks styled={true} term={"readtable"}><i>readtable</i></ClLinks>—a <ClLinks styled={true} term={"readtable"}><i>readtable</i></ClLinks>. The default is the *current readtable*. 



**Description:** 



<ClLinks styled={true} term={"make-dispatch-macro-character"}><b>make-dispatch-macro-character</b></ClLinks> makes *char* be a *dispatching macro character* in <ClLinks styled={true} term={"readtable"}><i>readtable</i></ClLinks>. 



Initially, every <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> in the dispatch table associated with the *char* has an associated function that signals an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"reader-error"}><b>reader-error</b></ClLinks>. 







 



 



If *non-terminating-p* is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, the *dispatching macro character* is made a *non-terminating macro character* ; if *non-terminating-p* is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>, the *dispatching macro character* is made a *terminating macro character* . 



**Examples:**
```lisp

(get-macro-character #\\&#123;) → NIL, *false* 
		     (make-dispatch-macro-character #\\&#123;) → T 
						    (not (get-macro-character #\\&#123;)) → false 
									      The *readtable* is altered. 

```
**See Also:** 



<ClLinks styled={true} term={"readtable"}><b>\*readtable\*</b></ClLinks>, **set-dispatch-macro-character** 




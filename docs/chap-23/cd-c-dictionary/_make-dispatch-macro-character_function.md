**make-dispatch-macro-character** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"make-dispatch-macro-character"}><b>make-dispatch-macro-character</b></ClLinks> *char* &amp;optional *non-terminating-p readtable →* <ClLinks  term={"t"}><b>t</b></ClLinks> 



**Arguments and Values:** 



*char*—a <ClLinks  term={"character"}><i>character</i></ClLinks> . 



*non-terminating-p*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. The default is <ClLinks  term={"false"}><i>false</i></ClLinks>. 



<ClLinks  term={"readtable"}><i>readtable</i></ClLinks>—a <ClLinks  term={"readtable"}><i>readtable</i></ClLinks>. The default is the <GlossaryTerm styled={true} term={"current readtable"}><i>current readtable</i></GlossaryTerm>. 



**Description:** 



<ClLinks  term={"make-dispatch-macro-character"}><b>make-dispatch-macro-character</b></ClLinks> makes *char* be a <GlossaryTerm styled={true} term={"dispatching macro character"}><i>dispatching macro character</i></GlossaryTerm> in <ClLinks  term={"readtable"}><i>readtable</i></ClLinks>. 



Initially, every <ClLinks  term={"character"}><i>character</i></ClLinks> in the dispatch table associated with the *char* has an associated function that signals an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"reader-error"}><b>reader-error</b></ClLinks>. 







 



 



If *non-terminating-p* is <ClLinks  term={"true"}><i>true</i></ClLinks>, the <GlossaryTerm styled={true} term={"dispatching macro character"}><i>dispatching macro character</i></GlossaryTerm> is made a *non-terminating macro character* ; if *non-terminating-p* is <ClLinks  term={"false"}><i>false</i></ClLinks>, the <GlossaryTerm styled={true} term={"dispatching macro character"}><i>dispatching macro character</i></GlossaryTerm> is made a *terminating macro character* . 



**Examples:**
```lisp
(get-macro-character #\\&#123;) → NIL, *false* 
		     (make-dispatch-macro-character #\\&#123;) → T 
						    (not (get-macro-character #\\&#123;)) → false 
									      The *readtable* is altered. 
```
**See Also:** 



<ClLinks  term={"readtable"}><b>\*readtable\*</b></ClLinks>, **set-dispatch-macro-character** 




**make-dispatch-macro-character** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"make-dispatch-macro-character"}><b>make-dispatch-macro-character</b></DictionaryLink> *char* &amp;optional *non-terminating-p readtable →* <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> 



**Arguments and Values:** 



*char*—a <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> . 



*non-terminating-p*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. The default is <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>. 



<GlossaryTerm  term={"readtable"}><i>readtable</i></GlossaryTerm>—a <GlossaryTerm  term={"readtable"}><i>readtable</i></GlossaryTerm>. The default is the <GlossaryTerm styled={true} term={"current readtable"}><i>current readtable</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink  term={"make-dispatch-macro-character"}><b>make-dispatch-macro-character</b></DictionaryLink> makes *char* be a <GlossaryTerm styled={true} term={"dispatching macro character"}><i>dispatching macro character</i></GlossaryTerm> in <GlossaryTerm  term={"readtable"}><i>readtable</i></GlossaryTerm>. 



Initially, every <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> in the dispatch table associated with the *char* has an associated function that signals an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"reader-error"}><b>reader-error</b></DictionaryLink>. 







 



 



If *non-terminating-p* is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm>, the <GlossaryTerm styled={true} term={"dispatching macro character"}><i>dispatching macro character</i></GlossaryTerm> is made a *non-terminating macro character* ; if *non-terminating-p* is <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>, the <GlossaryTerm styled={true} term={"dispatching macro character"}><i>dispatching macro character</i></GlossaryTerm> is made a *terminating macro character* . 



**Examples:**
```lisp
(get-macro-character #\\&#123;) → NIL, *false* 
		     (make-dispatch-macro-character #\\&#123;) → T 
						    (not (get-macro-character #\\&#123;)) → false 
									      The *readtable* is altered. 
```
**See Also:** 



<DictionaryLink  term={"readtable"}><b>\*readtable\*</b></DictionaryLink>, **set-dispatch-macro-character** 




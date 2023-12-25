**make-dispatch-macro-character** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"make-dispatch-macro-character"}><b>make-dispatch-macro-character</b></DictionaryLink> *char* &amp;optional *non-terminating-p readtable →* <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> 



**Arguments and Values:** 



*char*—a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> . 



*non-terminating-p*—a *generalized boolean*. The default is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"readtable"}><i>readtable</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"readtable"}><i>readtable</i></GlossaryTerm>. The default is the *current readtable*. 



**Description:** 



<DictionaryLink styled={true} term={"make-dispatch-macro-character"}><b>make-dispatch-macro-character</b></DictionaryLink> makes *char* be a *dispatching macro character* in <GlossaryTerm styled={true} term={"readtable"}><i>readtable</i></GlossaryTerm>. 



Initially, every <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> in the dispatch table associated with the *char* has an associated function that signals an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"reader-error"}><b>reader-error</b></DictionaryLink>. 







 



 



If *non-terminating-p* is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, the *dispatching macro character* is made a *non-terminating macro character* ; if *non-terminating-p* is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>, the *dispatching macro character* is made a *terminating macro character* . 



**Examples:**
```lisp

(get-macro-character #\\&#123;) *→* NIL, *false* 
		     (make-dispatch-macro-character #\\&#123;) *→* T 
						    (not (get-macro-character #\\&#123;)) *→ false* 
									      The *readtable* is altered. 

```
**See Also:** 



<DictionaryLink styled={true} term={"readtable"}><b>\*readtable\*</b></DictionaryLink>, **set-dispatch-macro-character** 




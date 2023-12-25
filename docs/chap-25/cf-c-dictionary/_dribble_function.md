**dribble** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"dribble"}><b>dribble</b></DictionaryLink> &amp;optional *pathname → implementation-dependent* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm>—a *pathname designator* . 







 



 



**Description:** 



Either <GlossaryTerm styled={true} term={"bind"}><i>binds</i></GlossaryTerm> **\*standard-input\*** and **\*standard-output\*** or takes other appropriate action, so as to send a record of the input/output interaction to a file named by <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm>. <DictionaryLink styled={true} term={"dribble"}><b>dribble</b></DictionaryLink> is intended to create a readable record of an interactive session. 



If <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> is a *logical pathname*, it is translated into a physical pathname as if by calling <DictionaryLink styled={true} term={"translate-logical-pathname"}><b>translate-logical-pathname</b></DictionaryLink>. 



(dribble) terminates the recording of input and output and closes the dribble file. 



If <DictionaryLink styled={true} term={"dribble"}><b>dribble</b></DictionaryLink> is *called* while a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> to a “dribble file” is still open from a previous <GlossaryTerm styled={true} term={"call"}><i>call</i></GlossaryTerm> to <DictionaryLink styled={true} term={"dribble"}><b>dribble</b></DictionaryLink>, the effect is <GlossaryTerm styled={true} term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm>. For example, the already-*open stream* might be <GlossaryTerm styled={true} term={"closed"}><i>closed</i></GlossaryTerm>, or dribbling might occur both to the old <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> and to a new one, or the old <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> might stay open but not receive any further output, or the new request might be ignored, or some other action might be taken. 



**Affected By:** 



The <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm>. 



**Exceptional Situations:** 



If a failure occurs when performing some operation on the *file system* while creating the dribble file, an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"file-error"}><b>file-error</b></DictionaryLink> is signaled. 



An error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"file-error"}><b>file-error</b></DictionaryLink> might be signaled if <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a *wild pathname*. 



**See Also:** 



Section 19.1.2 (Pathnames as Filenames) 



**Notes:** 



<DictionaryLink styled={true} term={"dribble"}><b>dribble</b></DictionaryLink> can return before subsequent <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> are executed. It also can enter a recursive interaction loop, returning only when (dribble) is done. 



<DictionaryLink styled={true} term={"dribble"}><b>dribble</b></DictionaryLink> is intended primarily for interactive debugging; its effect cannot be relied upon when used in a program. 



*− Variable* 



**Value Type:** 



a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



**Initial Value:** 



<GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. 







 



 



**Description:** 



The <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"-"}><b>-</b></DictionaryLink> is the <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> that is currently being evaluated by the *Lisp read-eval-print loop*. **Examples:**
```lisp

(format t "~&Evaluating ~S~%" -) 
▷ Evaluating (FORMAT T "~&Evaluating ~S~%" -) 
*→* NIL 

```
**Affected By:** 



*Lisp read-eval-print loop*. 



**See Also:** 



<DictionaryLink styled={true} term={"+"}><b>+</b></DictionaryLink> (<GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm>), **\*** (<GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm>), <DictionaryLink styled={true} term={"/"}><b>/</b></DictionaryLink> (<GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm>), Section 25.1.1 (Top level loop) 




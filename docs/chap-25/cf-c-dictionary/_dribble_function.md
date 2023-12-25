**dribble** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"dribble"}><b>dribble</b></ClLinks> &amp;optional *pathname → implementation-dependent* 



**Arguments and Values:** 



<ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks>—a *pathname designator* . 







 



 



**Description:** 



Either <ClLinks styled={true} term={"bind"}><i>binds</i></ClLinks> **\*standard-input\*** and **\*standard-output\*** or takes other appropriate action, so as to send a record of the input/output interaction to a file named by <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks>. <ClLinks styled={true} term={"dribble"}><b>dribble</b></ClLinks> is intended to create a readable record of an interactive session. 



If <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> is a *logical pathname*, it is translated into a physical pathname as if by calling <ClLinks styled={true} term={"translate-logical-pathname"}><b>translate-logical-pathname</b></ClLinks>. 



(dribble) terminates the recording of input and output and closes the dribble file. 



If <ClLinks styled={true} term={"dribble"}><b>dribble</b></ClLinks> is *called* while a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> to a “dribble file” is still open from a previous <ClLinks styled={true} term={"call"}><i>call</i></ClLinks> to <ClLinks styled={true} term={"dribble"}><b>dribble</b></ClLinks>, the effect is <ClLinks styled={true} term={"implementation-defined"}><i>implementation-defined</i></ClLinks>. For example, the already-*open stream* might be <ClLinks styled={true} term={"closed"}><i>closed</i></ClLinks>, or dribbling might occur both to the old <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> and to a new one, or the old <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> might stay open but not receive any further output, or the new request might be ignored, or some other action might be taken. 



**Affected By:** 



The <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks>. 



**Exceptional Situations:** 



If a failure occurs when performing some operation on the *file system* while creating the dribble file, an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"file-error"}><b>file-error</b></ClLinks> is signaled. 



An error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"file-error"}><b>file-error</b></ClLinks> might be signaled if <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> is a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a *wild pathname*. 



**See Also:** 



Section 19.1.2 (Pathnames as Filenames) 



**Notes:** 



<ClLinks styled={true} term={"dribble"}><b>dribble</b></ClLinks> can return before subsequent <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> are executed. It also can enter a recursive interaction loop, returning only when (dribble) is done. 



<ClLinks styled={true} term={"dribble"}><b>dribble</b></ClLinks> is intended primarily for interactive debugging; its effect cannot be relied upon when used in a program. 



*− Variable* 



**Value Type:** 



a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. 



**Initial Value:** 



<ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. 







 



 



**Description:** 



The <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"-"}><b>-</b></ClLinks> is the <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> that is currently being evaluated by the *Lisp read-eval-print loop*. 

**Examples:**
```lisp
(format t "~&Evaluating ~S~%" -) 
▷ Evaluating (FORMAT T "~&Evaluating ~S~%" -) 
→ NIL 
```
**Affected By:** 



*Lisp read-eval-print loop*. 



**See Also:** 



<ClLinks styled={true} term={"+"}><b>+</b></ClLinks> (<ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks>), **\*** (<ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks>), <ClLinks styled={true} term={"/"}><b>/</b></ClLinks> (<ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks>), Section 25.1.1 (Top level loop) 




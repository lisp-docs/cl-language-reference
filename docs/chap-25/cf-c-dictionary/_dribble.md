**dribble** *Function* 



**Syntax:** 



**dribble** &amp;optional *pathname → implementation-dependent* 



**Arguments and Values:** 



*pathname*—a *pathname designator* . 







 



 



**Description:** 



Either *binds* **\*standard-input\*** and **\*standard-output\*** or takes other appropriate action, so as to send a record of the input/output interaction to a file named by *pathname*. **dribble** is intended to create a readable record of an interactive session. 



If *pathname* is a *logical pathname*, it is translated into a physical pathname as if by calling **translate-logical-pathname**. 



(dribble) terminates the recording of input and output and closes the dribble file. 



If **dribble** is *called* while a *stream* to a “dribble file” is still open from a previous *call* to **dribble**, the effect is *implementation-defined*. For example, the already-*open stream* might be *closed*, or dribbling might occur both to the old *stream* and to a new one, or the old *stream* might stay open but not receive any further output, or the new request might be ignored, or some other action might be taken. 



**Affected By:** 



The *implementation*. 



**Exceptional Situations:** 



If a failure occurs when performing some operation on the *file system* while creating the dribble file, an error of *type* **file-error** is signaled. 



An error of *type* **file-error** might be signaled if *pathname* is a *designator* for a *wild pathname*. 



**See Also:** 



Section 19.1.2 (Pathnames as Filenames) 



**Notes:** 



**dribble** can return before subsequent *forms* are executed. It also can enter a recursive interaction loop, returning only when (dribble) is done. 



**dribble** is intended primarily for interactive debugging; its effect cannot be relied upon when used in a program. 



*− Variable* 



**Value Type:** 



a *form*. 



**Initial Value:** 



*implementation-dependent*. 







 



 



**Description:** 



The *value* of **-** is the *form* that is currently being evaluated by the *Lisp read-eval-print loop*. **Examples:**
```lisp
 

(format t "&#126;&amp;Evaluating &#126;S&#126;%" -) 

▷ Evaluating (FORMAT T "&#126;&amp;Evaluating &#126;S&#126;%" -) 

*→* NIL 


```
**Affected By:** 



*Lisp read-eval-print loop*. 



**See Also:** 



**+** (*variable*), **\*** (*variable*), **/** (*variable*), Section 25.1.1 (Top level loop) 




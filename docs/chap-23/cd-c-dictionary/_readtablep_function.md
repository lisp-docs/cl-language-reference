**readtablep** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"readtablep"}><b>readtablep</b></ClLinks> *object → generalized-boolean* 



**Arguments and Values:** 



<ClLinks  term={"object"}><i>object</i></ClLinks>—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



Returns <ClLinks  term={"true"}><i>true</i></ClLinks> if <ClLinks  term={"object"}><i>object</i></ClLinks> is of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"readtable"}><b>readtable</b></ClLinks>; otherwise, returns <ClLinks  term={"false"}><i>false</i></ClLinks>. 



**Examples:**
```lisp
 
(readtablep \*readtable\*) → true 
(readtablep (copy-readtable)) → true 
(readtablep ’\*readtable\*) → false 
```
**Notes:** 



(readtablep <ClLinks  term={"object"}><i>object</i></ClLinks>) *≡* (typep <ClLinks  term={"object"}><i>object</i></ClLinks> ’readtable) 







 



 



**set-dispatch-macro-character,** *. . .* 



<b><sup>set-dispatch-macro-character, get-dispatch-macro</sup> character</b> <i>Function</i> 



**Syntax:** 



**get-dispatch-macro-character** *disp-char sub-char* &amp;optional *readtable → function* 



**set-dispatch-macro-character** *disp-char sub-char new-function* &amp;optional *readtable →* <ClLinks  term={"t"}><b>t</b></ClLinks> 



**Arguments and Values:** 



*disp-char*—a <ClLinks  term={"character"}><i>character</i></ClLinks> . 



*sub-char*—a <ClLinks  term={"character"}><i>character</i></ClLinks> . 



<ClLinks  term={"readtable"}><i>readtable</i></ClLinks>—a <GlossaryTerm styled={true} term={"readtable designator"}><i>readtable designator</i></GlossaryTerm> . The default is the <GlossaryTerm styled={true} term={"current readtable"}><i>current readtable</i></GlossaryTerm>. 



<ClLinks  term={"function"}><i>function</i></ClLinks>—a <GlossaryTerm styled={true} term={"function designator"}><i>function designator</i></GlossaryTerm> or <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 



*new-function*—a <GlossaryTerm styled={true} term={"function designator"}><i>function designator</i></GlossaryTerm> . 



**Description:** 



**set-dispatch-macro-character** causes *new-function* to be called when *disp-char* followed by *sub-char* is read. If *sub-char* is a lowercase letter, it is converted to its uppercase equivalent. It is an error if *sub-char* is one of the ten decimal digits. 



**set-dispatch-macro-character** installs a *new-function* to be called when a particular <GlossaryTerm styled={true} term={"dispatching macro character"}><i>dispatching macro character</i></GlossaryTerm> pair is read. *New-function* is installed as the dispatch function to be called when <ClLinks  term={"readtable"}><i>readtable</i></ClLinks> is in use and when *disp-char* is followed by *sub-char*. 



For more information about how the *new-function* is invoked, see Section 2.1.4.4 (Macro Characters). 



**get-dispatch-macro-character** retrieves the dispatch function associated with *disp-char* and *sub-char* in <ClLinks  term={"readtable"}><i>readtable</i></ClLinks>. 



**get-dispatch-macro-character** returns the macro-character function for *sub-char* under *disp char*, or <ClLinks  term={"nil"}><b>nil</b></ClLinks> if there is no function associated with *sub-char*. If *sub-char* is a decimal digit, **get-dispatch-macro-character** returns <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 



**Examples:**
```lisp
(get-dispatch-macro-character #\# #\\&#123;) → NIL 
			      (set-dispatch-macro-character #\# #\\&#123; ;dispatch on #\&#123; 
							    #’(lambda(s c n) 
								(let ((list (read s nil (values) t))) ;list is object after #n\&#123; 
								  (when (consp list) ;return nth element of list 
								    (unless (and n (< 0 n (length list))) (setq n 0)) 
								    (setq list (nth n list))) 
								  
								  
								  list))) → T 
			      #\&#123;(1 2 3 4) → 1 
			      #3\&#123;(0 1 2 3) → 3 
			      #\&#123;123 → 123 
			      If it is desired that #$*foo* : as if it were (dollars *foo*). 
			      (defun |#$-reader| (stream subchar arg) 
				(declare (ignore subchar arg)) 
				(list ’dollars (read stream t nil t))) → |#$-reader| 
			      (set-dispatch-macro-character #\# #\$ #’|#$-reader|) → T 
```
**See Also:** 



Section 2.1.4.4 (Macro Characters) 



**Side Effects:** 



The <ClLinks  term={"readtable"}><i>readtable</i></ClLinks> is modified. 



**Affected By:** 



<ClLinks  term={"readtable"}><b>\*readtable\*</b></ClLinks>. 



**Exceptional Situations:** 



For either function, an error is signaled if *disp-char* is not a <GlossaryTerm styled={true} term={"dispatching macro character"}><i>dispatching macro character</i></GlossaryTerm> in <ClLinks  term={"readtable"}><i>readtable</i></ClLinks>. 



**See Also:** 



<ClLinks  term={"readtable"}><b>\*readtable\*</b></ClLinks> 



**Notes:** 



It is necessary to use <ClLinks  term={"make-dispatch-macro-character"}><b>make-dispatch-macro-character</b></ClLinks> to set up the dispatch character before specifying its sub-characters. 




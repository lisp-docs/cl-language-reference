**readtablep** *Function* 



**Syntax:** 



**readtablep** *object → generalized-boolean* 



**Arguments and Values:** 



*object*—an *object*. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns *true* if *object* is of *type* **readtable**; otherwise, returns *false*. 



**Examples:**
```lisp
 



(readtablep \*readtable\*) *→ true* 



(readtablep (copy-readtable)) *→ true* 



(readtablep ’\*readtable\*) *→ false* 




```
**Notes:** 



(readtablep *object*) *≡* (typep *object* ’readtable) 







 



 



**set-dispatch-macro-character,** *. . .* 



<b><sup>set-dispatch-macro-character, get-dispatch-macro</sup> character</b> <i>Function</i> 



**Syntax:** 



**get-dispatch-macro-character** *disp-char sub-char* &optional *readtable → function* 



**set-dispatch-macro-character** *disp-char sub-char new-function* &optional *readtable →* **t** 



**Arguments and Values:** 



*disp-char*—a *character* . 



*sub-char*—a *character* . 



*readtable*—a *readtable designator* . The default is the *current readtable*. 



*function*—a *function designator* or **nil**. 



*new-function*—a *function designator* . 



**Description:** 



**set-dispatch-macro-character** causes *new-function* to be called when *disp-char* followed by *sub-char* is read. If *sub-char* is a lowercase letter, it is converted to its uppercase equivalent. It is an error if *sub-char* is one of the ten decimal digits. 



**set-dispatch-macro-character** installs a *new-function* to be called when a particular *dispatching macro character* pair is read. *New-function* is installed as the dispatch function to be called when *readtable* is in use and when *disp-char* is followed by *sub-char*. 



For more information about how the *new-function* is invoked, see Section 2.1.4.4 (Macro Characters). 



**get-dispatch-macro-character** retrieves the dispatch function associated with *disp-char* and *sub-char* in *readtable*. 



**get-dispatch-macro-character** returns the macro-character function for *sub-char* under *disp char*, or **nil** if there is no function associated with *sub-char*. If *sub-char* is a decimal digit, **get-dispatch-macro-character** returns **nil**. 



**Examples:** 



(get-dispatch-macro-character #\# #\\&#123;) *→* NIL 



(set-dispatch-macro-character #\# #\\&#123; ;dispatch on #\&#123; 



#’(lambda(s c n) 



(let ((list (read s nil (values) t))) ;list is object after #n\&#123; 



(when (consp list) ;return nth element of list 



(unless (and n (< 0 n (length list))) (setq n 0)) 



(setq list (nth n list))) 







 



 



list))) *→* T 



#\&#123;(1 2 3 4) *→* 1 



#3\&#123;(0 1 2 3) *→* 3 



#\&#123;123 *→* 123 



If it is desired that #$*foo* : as if it were (dollars *foo*). 



(defun |#$-reader| (stream subchar arg) 



(declare (ignore subchar arg)) 



(list ’dollars (read stream t nil t))) *→* |#$-reader| 



(set-dispatch-macro-character #\# #\$ #’|#$-reader|) *→* T 



**See Also:** 



Section 2.1.4.4 (Macro Characters) 



**Side Effects:** 



The *readtable* is modified. 



**Affected By:** 



**\*readtable\***. 



**Exceptional Situations:** 



For either function, an error is signaled if *disp-char* is not a *dispatching macro character* in *readtable*. 



**See Also:** 



**\*readtable\*** 



**Notes:** 



It is necessary to use **make-dispatch-macro-character** to set up the dispatch character before specifying its sub-characters. 




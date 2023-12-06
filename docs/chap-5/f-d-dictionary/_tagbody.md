**tagbody** *Special Operator* 



**Syntax:** 



**tagbody** *\{tag | statement\}*\* *→* **nil** 



**Arguments and Values:** 



*tag*—a *go tag*; not evaluated. 



*statement*—a *compound form*; evaluated as described below. 



**Description:** 



Executes zero or more *statements* in a *lexical environment* that provides for control transfers to labels indicated by the *tags*. 



The *statements* in a **tagbody** are *evaluated* in order from left to right, and their *values* are discarded. If at any time there are no remaining *statements*, **tagbody** returns **nil**. However, if (go *tag*) is *evaluated*, control jumps to the part of the body labeled with the *tag*. (Tags are compared with **eql**.) 



A *tag* established by **tagbody** has *lexical scope* and has *dynamic extent*. Once **tagbody** has been exited, it is no longer valid to **go** to a *tag* in its body. It is permissible for **go** to jump to a **tagbody** that is not the innermost **tagbody** containing that **go**; the *tags* established by a **tagbody** only shadow other *tags* of like name. 



The determination of which elements of the body are *tags* and which are *statements* is made prior to any *macro expansion* of that element. If a *statement* is a *macro form* and its *macro expansion* is an *atom*, that *atom* is treated as a *statement*, not a *tag*. 



**Examples:**
```lisp
 



(let (val) 



(tagbody 



(setq val 1) 



(go point-a) 



(incf val 16) 



point-c 



(incf val 04) 



(go point-b) 



(incf val 32) 



point-a 



(incf val 02) 



(go point-c) 



(incf val 64) 



point-b 



(incf val 08)) 















val) 



*→* 15 



(defun f1 (flag) 



(let ((n 1)) 



(tagbody 



(setq n (f2 flag #’(lambda () (go out)))) 



out 



(prin1 n)))) 



*→* F1 



(defun f2 (flag escape) 



(if flag (funcall escape) 2)) 



*→* F2 



(f1 nil) 



▷ 2 



*→* NIL 



(f1 t) 



▷ 1 



*→* NIL 




```
**See Also:** 



**go** 



**Notes:** 



The *macros* in Figure 5–10 have *implicit tagbodies*. 



|<p>**do do-external-symbols dotimes do\* do-symbols prog** </p><p>**do-all-symbols dolist prog\***</p>|

| :- |





**Figure 5–10. Macros that have implicit tagbodies.** 




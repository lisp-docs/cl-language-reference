**disassemble** *Function* 



**Syntax:** 



**disassemble** *fn →* **nil** 



**Arguments and Values:** 



*fn*—an *extended function designator* or a *lambda expression*. 



**Description:** 



The *function* **disassemble** is a debugging aid that composes symbolic instructions or expressions in some *implementation-dependent* language which represent the code used to produce the *function* which is or is named by the argument *fn*. The result is displayed to *standard output* in an *implementation-dependent* format. 



If *fn* is a *lambda expression* or *interpreted function*, it is compiled first and the result is disassembled. 



If the *fn designator* is a *function name*, the *function* that it *names* is disassembled. (If that *function* is an *interpreted function*, it is first compiled but the result of this implicit compilation is not installed.) 



**Examples:**
```lisp
 



(defun f (a) (1+ a)) *→* F 



(eq (symbol-function ’f) 



(progn (disassemble ’f) 



(symbol-function ’f))) *→ true* 




```
**Affected By:** 



**\*standard-output\***. 



**Exceptional Situations:** 



Should signal an error of *type* **type-error** if *fn* is not an *extended function designator* or a *lambda expression*. 




**optimize** *Declaration* 



**Syntax:** 



(optimize *\{quality* | (*quality value*)*\}*\*) 



**Arguments:** 



*quality*—an *optimize quality*. 



*value*—one of the *integers* 0, 1, 2, or 3. 



Evaluation and 



 



 



**optimize** 



**Valid Context:** 



*declaration* or *proclamation* 



**Description:** 



Advises the compiler that each *quality* should be given attention according to the specified corresponding *value*. Each *quality* must be a *symbol* naming an *optimize quality*; the names and meanings of the standard *optimize qualities* are shown in Figure 3–25. 



|**Name Meaning**|

| :- |

|<p>**compilation-speed** speed of the compilation process </p><p>**debug** ease of debugging </p><p>**safety** run-time error checking </p><p>**space** both code size and run-time space </p><p>**speed** speed of the object code</p>|





**Figure 3–25. Optimize qualities** 



There may be other, *implementation-defined optimize qualities*. 



A *value* 0 means that the corresponding *quality* is totally unimportant, and 3 that the *quality* is extremely important; 1 and 2 are intermediate values, with 1 the neutral value. (*quality* 3) can be abbreviated to *quality*. 



Note that *code* which has the optimization (safety 3), or just **safety**, is called *safe code*. The consequences are unspecified if a *quality* appears more than once with *di↵erent values*. **Examples:**
```lisp
 
(defun often-used-subroutine (x y) 
(declare (optimize (safety 2))) 
(error-check x y) 
(hairy-setup x) 
(do ((i 0 (+ i 1)) 
(z x (cdr z))) 
((null z)) 
;; This inner loop really needs to burn. 
(declare (optimize speed)) 
(declare (fixnum i)) 
)) 

```
**See Also:** 



**declare**, **declaim**, **proclaim**, Section 3.3.4 (Declaration Scope) 



**Notes:** 



An **optimize** declaration never applies to either a *variable* or a *function binding*. An **optimize 3–96** Programming Language—Common Lisp



 



 



declaration can only be a *free declaration*. For more information, see Section 3.3.4 (Declaration Scope). 




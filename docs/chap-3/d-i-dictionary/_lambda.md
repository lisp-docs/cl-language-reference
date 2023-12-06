**lambda** *Macro* 



**Syntax:** 



**lambda** *lambda-list* [[ *\{declaration\}*\* *| documentation* ]] *\{form\}*\* *→ function* 



**Arguments and Values:** 



*lambda-list*—an *ordinary lambda list*.  







*declaration*—a **declare** *expression*; not evaluated. 



*documentation*—a *string*; not evaluated. 



*form*—a *form*. 



*function*—a *function*. 



**Description:** 



Provides a shorthand notation for a **function** *special form* involving a *lambda expression* such that: 



(lambda *lambda-list* [[ *\{declaration\}*\* *| documentation* ]] *\{form\}*\*) 



*≡* (function (lambda *lambda-list* [[ *\{declaration\}*\* *| documentation* ]] *\{form\}*\*)) 



*≡* #’(lambda *lambda-list* [[ *\{declaration\}*\* *| documentation* ]] *\{form\}*\*) 



**Examples:**
```lisp
 

(funcall (lambda (x) (+ x 3)) 4) *→* 7 


```
**See Also:** 



**lambda** (symbol) 



**Notes:** 



This macro could be implemented by: 



(defmacro lambda (&amp;whole form &amp;rest bvl-decls-and-body) 



(declare (ignore bvl-decls-and-body)) 



‘#’,form) 




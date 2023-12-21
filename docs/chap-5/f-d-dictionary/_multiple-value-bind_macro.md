**multiple-value-bind** *Macro* 



**Syntax:** 



**multiple-value-bind** (*\{var\}*\*) *values-form \{declaration\}*\* *\{form\}*\* 



*! \{result\}*\* 



Data and Control 



 



 



**Arguments and Values:** 



*var*—a *symbol* naming a variable; not evaluated. 



*values-form*—a *form*; evaluated. 



*declaration*—a **declare** *expression*; not evaluated. 



*forms*—an *implicit progn*. 



*results*—the *values* returned by the *forms*. 



**Description:** 



Creates new variable *bindings* for the *vars* and executes a series of *forms* that use these *bindings*. The variable *bindings* created are lexical unless **special** declarations are specified. 



*Values-form* is evaluated, and each of the *vars* is bound to the respective value returned by that *form*. If there are more *vars* than values returned, extra values of **nil** are given to the remaining *vars*. If there are more values than *vars*, the excess values are discarded. The *vars* are bound to the values over the execution of the *forms*, which make up an implicit **progn**. The consequences are unspecified if a type *declaration* is specified for a *var*, but the value to which that *var* is bound is not consistent with the type *declaration*. 



The *scopes* of the name binding and *declarations* do not include the *values-form*. 



**Examples:**
```lisp

(multiple-value-bind (f r) 
    (floor 130 11) 
  (list f r)) *!* (11 9) 

```
**See Also:** 



**let**, **multiple-value-call** 



**Notes:** 



(multiple-value-bind (*\{var\}*\*) *values-form \{form\}*\*) 



*⌘* (multiple-value-call #’(lambda (&amp;optional *\{var\}*\* &amp;rest #1=#:ignore) 



(declare (ignore #1#)) 



*\{form\}*\*) 



*values-form*) 







 



 




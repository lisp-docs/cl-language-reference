**eval** *Function* 



**Syntax:** 



**eval** *form → \{result\}*\* 



**Arguments and Values:** 



*form*—a *form*. 



*results*—the *values yielded* by the *evaluation* of *form*. 



**Description:** 



Evaluates *form* in the current *dynamic environment* and the *null lexical environment*. **eval** is a user interface to the evaluator. 



The evaluator expands macro calls as if through the use of **macroexpand-1**. 



Constants appearing in code processed by **eval** are not copied nor coalesced. The code resulting from the execution of **eval** references *objects* that are **eql** to the corresponding *objects* in the source code. 



**Examples:**
```lisp
 

(setq form ’(1+ a) a 999) *→* 999 

(eval form) *→* 1000 

(eval ’form) *→* (1+ A) 

(let ((a ’(this would break if eval used local value))) (eval form)) 

*→* 1000 


```
**See Also:** 



**macroexpand-1**, Section 3.1.2 (The Evaluation Model) 



**Notes:** 



To obtain the current dynamic value of a *symbol*, use of **symbol-value** is equivalent (and usually preferable) to use of **eval**. 



Note that an **eval** *form* involves two levels of *evaluation* for its *argument*. First, *form* is *evaluated* by the normal argument evaluation mechanism as would occur with any *call*. The *object* that  







results from this normal *argument evaluation* becomes the *value* of the *form parameter* , and is then *evaluated* as part of the **eval** *form*. For example: 



(eval (list ’cdr (car ’((quote (a . b)) c)))) *→* b 



The *argument form* (list ’cdr (car ’((quote (a . b)) c))) is evaluated in the usual way to produce the *argument* (cdr (quote (a . b))); **eval** then evaluates its *argument*, (cdr (quote (a . b))), to produce b. Since a single *evaluation* already occurs for any *argument form* in any *function form*, **eval** is sometimes said to perform “an extra level of evaluation.” 




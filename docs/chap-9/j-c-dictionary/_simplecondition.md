**simple-condition** *Condition Type* 

**Class Precedence List:** 

**simple-condition**, **condition**, **t** 

**Description:** 

The *type* **simple-condition** represents *conditions* that are signaled by **signal** whenever a *format control* is supplied as the function’s first argument. The *format control* and *format arguments* are initialized with the initialization arguments named :format-control and :format-arguments to **make-condition**, and are *accessed* by the *functions* **simple-condition-format-control** and **simple-condition-format-arguments**. If format arguments are not supplied to **make-condition**, **nil** is used as a default. 

**See Also:** 

**simple-condition-format-control**, **simple-condition-format-arguments** 



 

 

&#60;b&#62;&#60;sup&#62;simple-condition-format-control, simple&#60;/sup&#62; condition-format-arguments&#60;/b&#62; &#60;i&#62;Function&#60;/i&#62; 

**Syntax:** 

**simple-condition-format-control** *condition → format-control* 

**simple-condition-format-arguments** *condition → format-arguments* 

**Arguments and Values:** 

*condition*—a *condition* of *type* **simple-condition**. 

*format-control*—a *format control*. 

*format-arguments*—a *list*. 

**Description:** 

**simple-condition-format-control** returns the *format control* needed to process the *condition*’s *format arguments*. 

**simple-condition-format-arguments** returns a *list* of *format arguments* needed to process the *condition*’s *format control*. 

**Examples:** 

(setq foo (make-condition ’simple-condition 

:format-control "Hi ~S" 

:format-arguments ’(ho))) 

*→* #&#60;SIMPLE-CONDITION 26223553&#62; 

(apply #’format nil (simple-condition-format-control foo) 

(simple-condition-format-arguments foo)) 

*→* "Hi HO" 

**See Also:** 

**simple-condition**, Section 9.1 (Condition System Concepts) 


**check-type** *Macro* 



**Syntax:** 



**check-type** *place typespec* [*string*] *→* **nil** 



**Arguments and Values:** 



*place*—a *place*. 



*typespec*—a *type specifier* . 



*string*—a *string*; evaluated. 







 



 



**check-type** 



**Description:** 



**check-type** signals a *correctable error* of *type* **type-error** if the contents of *place* are not of the type *typespec*. 



**check-type** can return only if the **store-value** *restart* is invoked, either explicitly from a handler or implicitly as one of the options offered by the debugger. If the **store-value** *restart* is invoked, **check-type** stores the new value that is the argument to the *restart* invocation (or that is prompted for interactively by the debugger) in *place* and starts over, checking the type of the new value and signaling another error if it is still not of the desired *type*. 



The first time *place* is *evaluated*, it is *evaluated* by normal evaluation rules. It is later *evaluated* as a *place* if the type check fails and the **store-value** *restart* is used; see Section 5.1.1.1 (Evaluation of Subforms to Places). 



*string* should be an English description of the type, starting with an indefinite article (“a” or “an”). If *string* is not supplied, it is computed automatically from *typespec*. The automatically generated message mentions *place*, its contents, and the desired type. An implementation may choose to generate a somewhat differently worded error message if it recognizes that *place* is of a particular form, such as one of the arguments to the function that called **check-type**. *string* is allowed because some applications of **check-type** may require a more specific description of what is wanted than can be generated automatically from *typespec*. 



**Examples:**
```lisp
 



(setq aardvarks ’(sam harry fred)) 



*→* (SAM HARRY FRED) 



(check-type aardvarks (array \* (3))) 



▷ Error: The value of AARDVARKS, (SAM HARRY FRED), 



▷ is not a 3-long array. 



▷ To continue, type :CONTINUE followed by an option number: 



▷ 1: Specify a value to use instead. 



▷ 2: Return to Lisp Toplevel. 



▷ Debug&gt; :CONTINUE 1 



▷ Use Value: #(SAM FRED HARRY) 



*→* NIL 



aardvarks 



*→* #<array-t-3 13571=""> 



(map ’list #’identity aardvarks) 



*→* (SAM FRED HARRY) 



(setq aardvark-count ’foo) 



*→* FOO 



(check-type aardvark-count (integer 0 \*) "A positive integer") 



▷ Error: The value of AARDVARK-COUNT, FOO, is not a positive integer. 



▷ To continue, type :CONTINUE followed by an option number: 



▷ 1: Specify a value to use instead. 



▷ 2: Top level. 







 



 



**check-type** 



▷ Debug&gt; :CONTINUE 2 



(defmacro define-adder (name amount) 



(check-type name (and symbol (not null)) "a name for an adder function") (check-type amount integer) 



‘(defun ,name (x) (+ x ,amount))) 



(macroexpand ’(define-adder add3 3)) 



*→* (defun add3 (x) (+ x 3)) 



(macroexpand ’(define-adder 7 7)) 



▷ Error: The value of NAME, 7, is not a name for an adder function. ▷ To continue, type :CONTINUE followed by an option number: 



▷ 1: Specify a value to use instead. 



▷ 2: Top level. 



▷ Debug&gt; :Continue 1 



▷ Specify a value to use instead. 



▷ Type a form to be evaluated and used instead: ’ADD7 



*→* (defun add7 (x) (+ x 7)) 



(macroexpand ’(define-adder add5 something)) 



▷ Error: The value of AMOUNT, SOMETHING, is not an integer. 



▷ To continue, type :CONTINUE followed by an option number: 



▷ 1: Specify a value to use instead. 



▷ 2: Top level. 



▷ Debug&gt; :Continue 1 



▷ Type a form to be evaluated and used instead: 5 



*→* (defun add5 (x) (+ x 5)) 



Control is transferred to a handler. 




```
**Side Effects:** 



The debugger might be entered. 



**Affected By:** 



**\*break-on-signals\*** 



The implementation. 



**See Also:** 



Section 9.1 (Condition System Concepts) 



**Notes:** 



(check-type *place typespec*) 







 



 



*≡* (assert (typep *place* ’*typespec*) (*place*) 



’type-error :datum *place* :expected-type ’*typespec*) 




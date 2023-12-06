**quote** *Special Operator* 



**Syntax:** 



**quote** *object → object* 



**Arguments and Values:** 



*object*—an *object*; not evaluated. 



**Description:** 



The **quote** *special operator* just returns *object*. 



The consequences are undefined if *literal objects* (including *quoted objects*) are destructively modified. 



**Examples:**
```lisp
 

(setq a 1) *→* 1 

(quote (setq a 3)) *→* (SETQ A 3) 

a *→* 1 

’a *→* A 

”a *→* (QUOTE A)  



”’a *→* (QUOTE (QUOTE A)) 

(setq a 43) *→* 43 

(list a (cons a 3)) *→* (43 (43 . 3)) 

(list (quote a) (quote (cons a 3))) *→* (A (CONS A 3)) 

1 *→* 1 

’1 *→* 1 

"foo" *→* "foo" 

’"foo" *→* "foo" 

(car ’(a b)) *→* A 

’(car ’(a b)) *→* (CAR (QUOTE (A B))) 

#(car ’(a b)) *→* #(CAR (QUOTE (A B))) 

’#(car ’(a b)) *→* #(CAR (QUOTE (A B))) 


```
**See Also:** 



Section 3.1 (Evaluation), Section 2.4.3 (Single-Quote), Section 3.2.1 (Compiler Terminology) 



**Notes:** 



The textual notation ’*object* is equivalent to (quote *object*); see Section 3.2.1 (Compiler Terminology). 



Some *objects*, called *self-evaluating objects*, do not require quotation by **quote**. However, *symbols* and *lists* are used to represent parts of programs, and so would not be useable as constant data in a program without **quote**. Since **quote** suppresses the *evaluation* of these *objects*, they become data rather than program. 




**defsetf** *Macro* 



**Syntax:** 



The “short form”: 



**defsetf** *access-fn update-fn* [*documentation*] 



*! access-fn* 



The “long form”: 



**defsetf** *access-fn lambda-list* (*\{store-variable\}*\*) [[ *\{declaration\}*\* *| documentation* ]] *\{form\}*\* *! access-fn* 



**Arguments and Values:** 



*access-fn*—a *symbol* which names a *function* or a *macro*. 



*update-fn*—a *symbol* naming a *function* or *macro*. 



*lambda-list*—a *defsetf lambda list*. 



*store-variable*—a *symbol* (a *variable name*). 



*declaration*—a **declare** *expression*; not evaluated. 



*documentation*—a *string*; not evaluated. 



*form*—a *form*. 



Data and Control 



 



 



**defsetf** 



**Description:** 



**defsetf** defines how to **setf** a *place* of the form (*access-fn* ...) for relatively simple cases. (See **define-setf-expander** for more general access to this facility.) It must be the case that the *function* or *macro* named by *access-fn* evaluates all of its arguments. 



**defsetf** may take one of two forms, called the “short form” and the “long form,” which are distinguished by the *type* of the second *argument*. 



When the short form is used, *update-fn* must name a *function* (or *macro*) that takes one more argument than *access-fn* takes. When **setf** is given a *place* that is a call on *access-fn*, it expands into a call on *update-fn* that is given all the arguments to *access-fn* and also, as its last argument, the new value (which must be returned by *update-fn* as its value). 



The long form **defsetf** resembles **defmacro**. The *lambda-list* describes the arguments of *access-fn*. The *store-variables* describe the value or values to be stored into the *place*. The *body* must compute the expansion of a **setf** of a call on *access-fn*. The expansion function is defined in the same *lexical environment* in which the **defsetf** *form* appears. 



During the evaluation of the *forms*, the variables in the *lambda-list* and the *store-variables* are bound to names of temporary variables, generated as if by **gensym** or **gentemp**, that will be bound by the expansion of **setf** to the values of those *subforms*. This binding permits the *forms* to be written without regard for order-of-evaluation issues. **defsetf** arranges for the temporary variables to be optimized out of the final result in cases where that is possible. 



The body code in **defsetf** is implicitly enclosed in a *block* whose name is *access-fn* 



**defsetf** ensures that *subforms* of the *place* are evaluated exactly once. 



*Documentation* is attached to *access-fn* as a *documentation string* of kind **setf**. 



If a **defsetf** *form* appears as a *top level form*, the *compiler* must make the *setf expander* available so that it may be used to expand calls to **setf** later on in the *file*. Users must ensure that the *forms*, if any, can be evaluated at compile time if the *access-fn* is used in a *place* later in the same *file*. The *compiler* must make these *setf expanders* available to compile-time calls to **get-setf-expansion** when its *environment* argument is a value received as the *environment parameter* of a *macro*. 



**Examples:**
```lisp
 



The e↵ect of 



(defsetf symbol-value set) 



is built into the Common Lisp system. This causes the form (setf (symbol-value foo) fu) to expand into (set foo fu). 



Note that 



(defsetf car rplaca) 



would be incorrect because **rplaca** does not return its last argument. 







 



 



**defsetf** 



(defun middleguy (x) (nth (truncate (1- (list-length x)) 2) x)) *!* MIDDLEGUY 



(defun set-middleguy (x v) 



(unless (null x) 



(rplaca (nthcdr (truncate (1- (list-length x)) 2) x) v)) 



v) *!* SET-MIDDLEGUY 



(defsetf middleguy set-middleguy) *!* MIDDLEGUY 



(setq a (list ’a ’b ’c ’d) 



b (list ’x) 



c (list 1 2 3 (list 4 5 6) 7 8 9)) *!* (1 2 3 (4 5 6) 7 8 9) 



(setf (middleguy a) 3) *!* 3 



(setf (middleguy b) 7) *!* 7 



(setf (middleguy (middleguy c)) ’middleguy-symbol) *!* MIDDLEGUY-SYMBOL 



a *!* (A 3 C D) 



b *!* (7) 



c *!* (1 2 3 (4 MIDDLEGUY-SYMBOL 6) 7 8 9) 



An example of the use of the long form of **defsetf**: 



(defsetf subseq (sequence start &amp;optional end) (new-sequence) 



‘(progn (replace ,sequence ,new-sequence 



:start1 ,start :end1 ,end) 



,new-sequence)) *!* SUBSEQ 



(defvar \*xy\* (make-array ’(10 10))) 



(defun xy (&amp;key ((x x) 0) ((y y) 0)) (aref \*xy\* x y)) *!* XY 



(defun set-xy (new-value &amp;key ((x x) 0) ((y y) 0)) 



(setf (aref \*xy\* x y) new-value)) *!* SET-XY 



(defsetf xy (&amp;key ((x x) 0) ((y y) 0)) (store) 



‘(set-xy ,store ’x ,x ’y ,y)) *!* XY 



(get-setf-expansion ’(xy a b)) 



*!* (#:t0 #:t1), 



(a b), 



(#:store), 



((lambda (&amp;key ((x #:x)) ((y #:y))) 



(set-xy #:store ’x #:x ’y #:y)) 



#:t0 #:t1), 



(xy #:t0 #:t1) 



(xy ’x 1) *!* NIL 



(setf (xy ’x 1) 1) *!* 1 



(xy ’x 1) *!* 1 



(let ((a ’x) (b ’y)) 



(setf (xy a 1 b 2) 3) 



(setf (xy b 5 a 9) 14)) 



*!* 14 



(xy ’y 0 ’x 1) *!* 1 



(xy ’x 1 ’y 2) *!* 3 



Data and Control 



 



 




```
**See Also:** 



**documentation**, **setf**, **define-setf-expander**, **get-setf-expansion**, Section 5.1 (Generalized Reference), Section 3.4.11 (Syntactic Interaction of Documentation Strings and Declarations) 



**Notes:** 



*forms* must include provision for returning the correct value (the value or values of *store-variable*). This is handled by *forms* rather than by **defsetf** because in many cases this value can be returned at no extra cost, by calling a function that simultaneously stores into the *place* and returns the correct value. 



A **setf** of a call on *access-fn* also evaluates all of *access-fn*’s arguments; it cannot treat any of them specially. This means that **defsetf** cannot be used to describe how to store into a *generalized reference* to a byte, such as (ldb field reference). **define-setf-expander** is used to handle situations that do not fit the restrictions imposed by **defsetf** and gives the user additional control. 




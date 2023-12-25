**defsetf** <ClLinks  term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



The “short form”: 



<ClLinks  term={"defsetf"}><b>defsetf</b></ClLinks> *access-fn update-fn* [*documentation*] 



*! access-fn* 



The “long form”: 



<ClLinks  term={"defsetf"}><b>defsetf</b></ClLinks> *access-fn lambda-list* (*\{store-variable\}*\*) [[ <ClLinks  term={"declaration"}><i>\{declaration\}</i></ClLinks>\* *| documentation* ]] <ClLinks  term={"form"}><i>\{form\}</i></ClLinks>\* *! access-fn* 



**Arguments and Values:** 



*access-fn*—a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> which names a <ClLinks  term={"function"}><i>function</i></ClLinks> or a <ClLinks  term={"macro"}><i>macro</i></ClLinks>. 



*update-fn*—a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> naming a <ClLinks  term={"function"}><i>function</i></ClLinks> or <ClLinks  term={"macro"}><i>macro</i></ClLinks>. 



*lambda-list*—a *defsetf lambda list*. 



*store-variable*—a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> (a *variable name*). 



<ClLinks  term={"declaration"}><i>declaration</i></ClLinks>—a <ClLinks  term={"declare"}><b>declare</b></ClLinks> <ClLinks  term={"expression"}><i>expression</i></ClLinks>; not evaluated. 



*documentation*—a <ClLinks  term={"string"}><i>string</i></ClLinks>; not evaluated. 



<ClLinks  term={"form"}><i>form</i></ClLinks>—a <ClLinks  term={"form"}><i>form</i></ClLinks>. 



Data and Control 



 



 



<ClLinks  term={"defsetf"}><b>defsetf</b></ClLinks> 



**Description:** 



<ClLinks  term={"defsetf"}><b>defsetf</b></ClLinks> defines how to <ClLinks  term={"setf"}><b>setf</b></ClLinks> a <ClLinks  term={"place"}><i>place</i></ClLinks> of the form (*access-fn* ...) for relatively simple cases. (See <ClLinks  term={"define-setf-expander"}><b>define-setf-expander</b></ClLinks> for more general access to this facility.) It must be the case that the <ClLinks  term={"function"}><i>function</i></ClLinks> or <ClLinks  term={"macro"}><i>macro</i></ClLinks> named by *access-fn* evaluates all of its arguments. 



<ClLinks  term={"defsetf"}><b>defsetf</b></ClLinks> may take one of two forms, called the “short form” and the “long form,” which are distinguished by the <ClLinks  term={"type"}><i>type</i></ClLinks> of the second <ClLinks  term={"argument"}><i>argument</i></ClLinks>. 



When the short form is used, *update-fn* must name a <ClLinks  term={"function"}><i>function</i></ClLinks> (or <ClLinks  term={"macro"}><i>macro</i></ClLinks>) that takes one more argument than *access-fn* takes. When <ClLinks  term={"setf"}><b>setf</b></ClLinks> is given a <ClLinks  term={"place"}><i>place</i></ClLinks> that is a call on *access-fn*, it expands into a call on *update-fn* that is given all the arguments to *access-fn* and also, as its last argument, the new value (which must be returned by *update-fn* as its value). 



The long form <ClLinks  term={"defsetf"}><b>defsetf</b></ClLinks> resembles <ClLinks  term={"defmacro"}><b>defmacro</b></ClLinks>. The *lambda-list* describes the arguments of *access-fn*. The *store-variables* describe the value or values to be stored into the <ClLinks  term={"place"}><i>place</i></ClLinks>. The *body* must compute the expansion of a <ClLinks  term={"setf"}><b>setf</b></ClLinks> of a call on *access-fn*. The expansion function is defined in the same *lexical environment* in which the <ClLinks  term={"defsetf"}><b>defsetf</b></ClLinks> <ClLinks  term={"form"}><i>form</i></ClLinks> appears. 



During the evaluation of the <ClLinks  term={"form"}><i>forms</i></ClLinks>, the variables in the *lambda-list* and the *store-variables* are bound to names of temporary variables, generated as if by <ClLinks  term={"gensym"}><b>gensym</b></ClLinks> or <ClLinks  term={"gentemp"}><b>gentemp</b></ClLinks>, that will be bound by the expansion of <ClLinks  term={"setf"}><b>setf</b></ClLinks> to the values of those <ClLinks  term={"subform"}><i>subforms</i></ClLinks>. This binding permits the <ClLinks  term={"form"}><i>forms</i></ClLinks> to be written without regard for order-of-evaluation issues. <ClLinks  term={"defsetf"}><b>defsetf</b></ClLinks> arranges for the temporary variables to be optimized out of the final result in cases where that is possible. 



The body code in <ClLinks  term={"defsetf"}><b>defsetf</b></ClLinks> is implicitly enclosed in a <ClLinks  term={"block"}><i>block</i></ClLinks> whose name is *access-fn* 



<ClLinks  term={"defsetf"}><b>defsetf</b></ClLinks> ensures that <ClLinks  term={"subform"}><i>subforms</i></ClLinks> of the <ClLinks  term={"place"}><i>place</i></ClLinks> are evaluated exactly once. 



*Documentation* is attached to *access-fn* as a *documentation string* of kind <ClLinks  term={"setf"}><b>setf</b></ClLinks>. 



If a <ClLinks  term={"defsetf"}><b>defsetf</b></ClLinks> <ClLinks  term={"form"}><i>form</i></ClLinks> appears as a *top level form*, the <ClLinks  term={"compiler"}><i>compiler</i></ClLinks> must make the *setf expander* available so that it may be used to expand calls to <ClLinks  term={"setf"}><b>setf</b></ClLinks> later on in the <ClLinks  term={"file"}><i>file</i></ClLinks>. Users must ensure that the <ClLinks  term={"form"}><i>forms</i></ClLinks>, if any, can be evaluated at compile time if the *access-fn* is used in a <ClLinks  term={"place"}><i>place</i></ClLinks> later in the same <ClLinks  term={"file"}><i>file</i></ClLinks>. The <ClLinks  term={"compiler"}><i>compiler</i></ClLinks> must make these *setf expanders* available to compile-time calls to <ClLinks  term={"get-setf-expansion"}><b>get-setf-expansion</b></ClLinks> when its <ClLinks  term={"environment"}><i>environment</i></ClLinks> argument is a value received as the *environment parameter* of a <ClLinks  term={"macro"}><i>macro</i></ClLinks>. 



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
(defsetf subseq (sequence start &optional end) (new-sequence) 
  ‘(progn (replace ,sequence ,new-sequence 
		   :start1 ,start :end1 ,end) 
	  ,new-sequence)) *!* SUBSEQ 
(defvar \*xy\* (make-array ’(10 10))) 
(defun xy (&key ((x x) 0) ((y y) 0)) (aref \*xy\* x y)) *!* XY 
(defun set-xy (new-value &key ((x x) 0) ((y y) 0)) 
  (setf (aref \*xy\* x y) new-value)) *!* SET-XY 
(defsetf xy (&key ((x x) 0) ((y y) 0)) (store) 
  ‘(set-xy ,store ’x ,x ’y ,y)) *!* XY 
(get-setf-expansion ’(xy a b)) 
*!* (#:t0 #:t1), 
(a b), 
(#:store), 
((lambda (&key ((x #:x)) ((y #:y))) 
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



**documentation**, <ClLinks  term={"setf"}><b>setf</b></ClLinks>, <ClLinks  term={"define-setf-expander"}><b>define-setf-expander</b></ClLinks>, <ClLinks  term={"get-setf-expansion"}><b>get-setf-expansion</b></ClLinks>, Section 5.1 (Generalized Reference), Section 3.4.11 (Syntactic Interaction of Documentation Strings and Declarations) 



**Notes:** 



<ClLinks  term={"form"}><i>forms</i></ClLinks> must include provision for returning the correct value (the value or values of *store-variable*). This is handled by <ClLinks  term={"form"}><i>forms</i></ClLinks> rather than by <ClLinks  term={"defsetf"}><b>defsetf</b></ClLinks> because in many cases this value can be returned at no extra cost, by calling a function that simultaneously stores into the <ClLinks  term={"place"}><i>place</i></ClLinks> and returns the correct value. 



A <ClLinks  term={"setf"}><b>setf</b></ClLinks> of a call on *access-fn* also evaluates all of *access-fn*’s arguments; it cannot treat any of them specially. This means that <ClLinks  term={"defsetf"}><b>defsetf</b></ClLinks> cannot be used to describe how to store into a *generalized reference* to a byte, such as (ldb field reference). <ClLinks  term={"define-setf-expander"}><b>define-setf-expander</b></ClLinks> is used to handle situations that do not fit the restrictions imposed by <ClLinks  term={"defsetf"}><b>defsetf</b></ClLinks> and gives the user additional control. 




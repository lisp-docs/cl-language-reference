**defsetf** <GlossaryTerm styled={true} term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



The “short form”: 



<DictionaryLink styled={true} term={"defsetf"}><b>defsetf</b></DictionaryLink> *access-fn update-fn* [*documentation*] 



*! access-fn* 



The “long form”: 



<DictionaryLink styled={true} term={"defsetf"}><b>defsetf</b></DictionaryLink> *access-fn lambda-list* (*\{store-variable\}*\*) [[ <GlossaryTerm styled={true} term={"declaration"}><i>\{declaration\}</i></GlossaryTerm>\* *| documentation* ]] <GlossaryTerm styled={true} term={"form"}><i>\{form\}</i></GlossaryTerm>\* *! access-fn* 



**Arguments and Values:** 



*access-fn*—a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> which names a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> or a <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm>. 



*update-fn*—a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> naming a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm>. 



*lambda-list*—a *defsetf lambda list*. 



*store-variable*—a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> (a *variable name*). 



<GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm>—a <DictionaryLink styled={true} term={"declare"}><b>declare</b></DictionaryLink> <GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm>; not evaluated. 



*documentation*—a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>; not evaluated. 



<GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



Data and Control 



 



 



<DictionaryLink styled={true} term={"defsetf"}><b>defsetf</b></DictionaryLink> 



**Description:** 



<DictionaryLink styled={true} term={"defsetf"}><b>defsetf</b></DictionaryLink> defines how to <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> a <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> of the form (*access-fn* ...) for relatively simple cases. (See <DictionaryLink styled={true} term={"define-setf-expander"}><b>define-setf-expander</b></DictionaryLink> for more general access to this facility.) It must be the case that the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm> named by *access-fn* evaluates all of its arguments. 



<DictionaryLink styled={true} term={"defsetf"}><b>defsetf</b></DictionaryLink> may take one of two forms, called the “short form” and the “long form,” which are distinguished by the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> of the second <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm>. 



When the short form is used, *update-fn* must name a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> (or <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm>) that takes one more argument than *access-fn* takes. When <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> is given a <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> that is a call on *access-fn*, it expands into a call on *update-fn* that is given all the arguments to *access-fn* and also, as its last argument, the new value (which must be returned by *update-fn* as its value). 



The long form <DictionaryLink styled={true} term={"defsetf"}><b>defsetf</b></DictionaryLink> resembles <DictionaryLink styled={true} term={"defmacro"}><b>defmacro</b></DictionaryLink>. The *lambda-list* describes the arguments of *access-fn*. The *store-variables* describe the value or values to be stored into the <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>. The *body* must compute the expansion of a <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> of a call on *access-fn*. The expansion function is defined in the same *lexical environment* in which the <DictionaryLink styled={true} term={"defsetf"}><b>defsetf</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> appears. 



During the evaluation of the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>, the variables in the *lambda-list* and the *store-variables* are bound to names of temporary variables, generated as if by <DictionaryLink styled={true} term={"gensym"}><b>gensym</b></DictionaryLink> or <DictionaryLink styled={true} term={"gentemp"}><b>gentemp</b></DictionaryLink>, that will be bound by the expansion of <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> to the values of those <GlossaryTerm styled={true} term={"subform"}><i>subforms</i></GlossaryTerm>. This binding permits the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> to be written without regard for order-of-evaluation issues. <DictionaryLink styled={true} term={"defsetf"}><b>defsetf</b></DictionaryLink> arranges for the temporary variables to be optimized out of the final result in cases where that is possible. 



The body code in <DictionaryLink styled={true} term={"defsetf"}><b>defsetf</b></DictionaryLink> is implicitly enclosed in a <GlossaryTerm styled={true} term={"block"}><i>block</i></GlossaryTerm> whose name is *access-fn* 



<DictionaryLink styled={true} term={"defsetf"}><b>defsetf</b></DictionaryLink> ensures that <GlossaryTerm styled={true} term={"subform"}><i>subforms</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> are evaluated exactly once. 



*Documentation* is attached to *access-fn* as a *documentation string* of kind <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink>. 



If a <DictionaryLink styled={true} term={"defsetf"}><b>defsetf</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> appears as a *top level form*, the <GlossaryTerm styled={true} term={"compiler"}><i>compiler</i></GlossaryTerm> must make the *setf expander* available so that it may be used to expand calls to <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> later on in the <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm>. Users must ensure that the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>, if any, can be evaluated at compile time if the *access-fn* is used in a <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> later in the same <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm>. The <GlossaryTerm styled={true} term={"compiler"}><i>compiler</i></GlossaryTerm> must make these *setf expanders* available to compile-time calls to <DictionaryLink styled={true} term={"get-setf-expansion"}><b>get-setf-expansion</b></DictionaryLink> when its <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm> argument is a value received as the *environment parameter* of a <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm>. 



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



**documentation**, <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink>, <DictionaryLink styled={true} term={"define-setf-expander"}><b>define-setf-expander</b></DictionaryLink>, <DictionaryLink styled={true} term={"get-setf-expansion"}><b>get-setf-expansion</b></DictionaryLink>, Section 5.1 (Generalized Reference), Section 3.4.11 (Syntactic Interaction of Documentation Strings and Declarations) 



**Notes:** 



<GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> must include provision for returning the correct value (the value or values of *store-variable*). This is handled by <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> rather than by <DictionaryLink styled={true} term={"defsetf"}><b>defsetf</b></DictionaryLink> because in many cases this value can be returned at no extra cost, by calling a function that simultaneously stores into the <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> and returns the correct value. 



A <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> of a call on *access-fn* also evaluates all of *access-fn*’s arguments; it cannot treat any of them specially. This means that <DictionaryLink styled={true} term={"defsetf"}><b>defsetf</b></DictionaryLink> cannot be used to describe how to store into a *generalized reference* to a byte, such as (ldb field reference). <DictionaryLink styled={true} term={"define-setf-expander"}><b>define-setf-expander</b></DictionaryLink> is used to handle situations that do not fit the restrictions imposed by <DictionaryLink styled={true} term={"defsetf"}><b>defsetf</b></DictionaryLink> and gives the user additional control. 




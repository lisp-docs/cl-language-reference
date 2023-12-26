**defsetf** <GlossaryTerm  term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



The “short form”: 



<DictionaryLink  term={"defsetf"}><b>defsetf</b></DictionaryLink> *access-fn update-fn* [*documentation*] 



*! access-fn* 



The “long form”: 



<DictionaryLink  term={"defsetf"}><b>defsetf</b></DictionaryLink> *access-fn lambda-list* (*\{store-variable\}*\*) [[ <GlossaryTerm  term={"declaration"}><i>\{declaration\}</i></GlossaryTerm>\* *| documentation* ]] <GlossaryTerm  term={"form"}><i>\{form\}</i></GlossaryTerm>\* *! access-fn* 



**Arguments and Values:** 



*access-fn*—a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> which names a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> or a <GlossaryTerm  term={"macro"}><i>macro</i></GlossaryTerm>. 



*update-fn*—a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> naming a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> or <GlossaryTerm  term={"macro"}><i>macro</i></GlossaryTerm>. 



*lambda-list*—a <GlossaryTerm styled={true} term={"defsetf lambda list"}><i>defsetf lambda list</i></GlossaryTerm>. 



*store-variable*—a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> (a *variable name*). 



<GlossaryTerm  term={"declaration"}><i>declaration</i></GlossaryTerm>—a <DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink> <GlossaryTerm  term={"expression"}><i>expression</i></GlossaryTerm>; not evaluated. 



*documentation*—a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>; not evaluated. 



<GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>—a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. 



Data and Control 



 



 



<DictionaryLink  term={"defsetf"}><b>defsetf</b></DictionaryLink> 



**Description:** 



<DictionaryLink  term={"defsetf"}><b>defsetf</b></DictionaryLink> defines how to <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> a <GlossaryTerm  term={"place"}><i>place</i></GlossaryTerm> of the form (*access-fn* ...) for relatively simple cases. (See <DictionaryLink  term={"define-setf-expander"}><b>define-setf-expander</b></DictionaryLink> for more general access to this facility.) It must be the case that the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> or <GlossaryTerm  term={"macro"}><i>macro</i></GlossaryTerm> named by *access-fn* evaluates all of its arguments. 



<DictionaryLink  term={"defsetf"}><b>defsetf</b></DictionaryLink> may take one of two forms, called the “short form” and the “long form,” which are distinguished by the <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> of the second <GlossaryTerm  term={"argument"}><i>argument</i></GlossaryTerm>. 



When the short form is used, *update-fn* must name a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> (or <GlossaryTerm  term={"macro"}><i>macro</i></GlossaryTerm>) that takes one more argument than *access-fn* takes. When <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> is given a <GlossaryTerm  term={"place"}><i>place</i></GlossaryTerm> that is a call on *access-fn*, it expands into a call on *update-fn* that is given all the arguments to *access-fn* and also, as its last argument, the new value (which must be returned by *update-fn* as its value). 



The long form <DictionaryLink  term={"defsetf"}><b>defsetf</b></DictionaryLink> resembles <DictionaryLink  term={"defmacro"}><b>defmacro</b></DictionaryLink>. The *lambda-list* describes the arguments of *access-fn*. The *store-variables* describe the value or values to be stored into the <GlossaryTerm  term={"place"}><i>place</i></GlossaryTerm>. The *body* must compute the expansion of a <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> of a call on *access-fn*. The expansion function is defined in the same <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm> in which the <DictionaryLink  term={"defsetf"}><b>defsetf</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> appears. 



During the evaluation of the <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm>, the variables in the *lambda-list* and the *store-variables* are bound to names of temporary variables, generated as if by <DictionaryLink  term={"gensym"}><b>gensym</b></DictionaryLink> or <DictionaryLink  term={"gentemp"}><b>gentemp</b></DictionaryLink>, that will be bound by the expansion of <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> to the values of those <GlossaryTerm  term={"subform"}><i>subforms</i></GlossaryTerm>. This binding permits the <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> to be written without regard for order-of-evaluation issues. <DictionaryLink  term={"defsetf"}><b>defsetf</b></DictionaryLink> arranges for the temporary variables to be optimized out of the final result in cases where that is possible. 



The body code in <DictionaryLink  term={"defsetf"}><b>defsetf</b></DictionaryLink> is implicitly enclosed in a <GlossaryTerm  term={"block"}><i>block</i></GlossaryTerm> whose name is *access-fn* 



<DictionaryLink  term={"defsetf"}><b>defsetf</b></DictionaryLink> ensures that <GlossaryTerm  term={"subform"}><i>subforms</i></GlossaryTerm> of the <GlossaryTerm  term={"place"}><i>place</i></GlossaryTerm> are evaluated exactly once. 



*Documentation* is attached to *access-fn* as a <GlossaryTerm styled={true} term={"documentation string"}><i>documentation string</i></GlossaryTerm> of kind <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink>. 



If a <DictionaryLink  term={"defsetf"}><b>defsetf</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> appears as a <GlossaryTerm styled={true} term={"top level form"}><i>top level form</i></GlossaryTerm>, the <GlossaryTerm  term={"compiler"}><i>compiler</i></GlossaryTerm> must make the <GlossaryTerm styled={true} term={"setf expander"}><i>setf expander</i></GlossaryTerm> available so that it may be used to expand calls to <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> later on in the <GlossaryTerm  term={"file"}><i>file</i></GlossaryTerm>. Users must ensure that the <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm>, if any, can be evaluated at compile time if the *access-fn* is used in a <GlossaryTerm  term={"place"}><i>place</i></GlossaryTerm> later in the same <GlossaryTerm  term={"file"}><i>file</i></GlossaryTerm>. The <GlossaryTerm  term={"compiler"}><i>compiler</i></GlossaryTerm> must make these <GlossaryTerm styled={true} term={"setf expander"}><i>setf expanders</i></GlossaryTerm> available to compile-time calls to <DictionaryLink  term={"get-setf-expansion"}><b>get-setf-expansion</b></DictionaryLink> when its <GlossaryTerm  term={"environment"}><i>environment</i></GlossaryTerm> argument is a value received as the <GlossaryTerm styled={true} term={"environment parameter"}><i>environment parameter</i></GlossaryTerm> of a <GlossaryTerm  term={"macro"}><i>macro</i></GlossaryTerm>. 



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



**documentation**, <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink>, <DictionaryLink  term={"define-setf-expander"}><b>define-setf-expander</b></DictionaryLink>, <DictionaryLink  term={"get-setf-expansion"}><b>get-setf-expansion</b></DictionaryLink>, Section 5.1 (Generalized Reference), Section 3.4.11 (Syntactic Interaction of Documentation Strings and Declarations) 



**Notes:** 



<GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> must include provision for returning the correct value (the value or values of *store-variable*). This is handled by <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> rather than by <DictionaryLink  term={"defsetf"}><b>defsetf</b></DictionaryLink> because in many cases this value can be returned at no extra cost, by calling a function that simultaneously stores into the <GlossaryTerm  term={"place"}><i>place</i></GlossaryTerm> and returns the correct value. 



A <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> of a call on *access-fn* also evaluates all of *access-fn*’s arguments; it cannot treat any of them specially. This means that <DictionaryLink  term={"defsetf"}><b>defsetf</b></DictionaryLink> cannot be used to describe how to store into a <GlossaryTerm styled={true} term={"generalized reference"}><i>generalized reference</i></GlossaryTerm> to a byte, such as (ldb field reference). <DictionaryLink  term={"define-setf-expander"}><b>define-setf-expander</b></DictionaryLink> is used to handle situations that do not fit the restrictions imposed by <DictionaryLink  term={"defsetf"}><b>defsetf</b></DictionaryLink> and gives the user additional control. 




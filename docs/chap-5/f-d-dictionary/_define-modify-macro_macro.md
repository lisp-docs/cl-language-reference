**define-modify-macro** <ClLinks styled={true} term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"define-modify-macro"}><b>define-modify-macro</b></ClLinks> *name lambda-list function* [*documentation*] *! name* 



**Arguments and Values:** 



<ClLinks styled={true} term={"name"}><i>name</i></ClLinks>—a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. 



*lambda-list*—a *define-modify-macro lambda list* 



<ClLinks styled={true} term={"function"}><i>function</i></ClLinks>—a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. 



*documentation*—a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>; not evaluated. 



**Description:** 



<ClLinks styled={true} term={"define-modify-macro"}><b>define-modify-macro</b></ClLinks> defines a <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks> named <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> to <ClLinks styled={true} term={"read"}><i>read</i></ClLinks> and <ClLinks styled={true} term={"write"}><i>write</i></ClLinks> a <ClLinks styled={true} term={"place"}><i>place</i></ClLinks>. 



The arguments to the new <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks> are a <ClLinks styled={true} term={"place"}><i>place</i></ClLinks>, followed by the arguments that are supplied in *lambda-list*. <ClLinks styled={true} term={"macro"}><i>Macros</i></ClLinks> defined with <ClLinks styled={true} term={"define-modify-macro"}><b>define-modify-macro</b></ClLinks> correctly pass the *environment parameter* to <ClLinks styled={true} term={"get-setf-expansion"}><b>get-setf-expansion</b></ClLinks>. 



When the <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks> is invoked, <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> is applied to the old contents of the <ClLinks styled={true} term={"place"}><i>place</i></ClLinks> and the *lambda-list* arguments to obtain the new value, and the <ClLinks styled={true} term={"place"}><i>place</i></ClLinks> is updated to contain the result. 



Except for the issue of avoiding multiple evaluation (see below), the expansion of a <ClLinks styled={true} term={"define-modify-macro"}><b>define-modify-macro</b></ClLinks> is equivalent to the following: 



(defmacro <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> (reference . *lambda-list*) 



*documentation* 



‘(setf ,reference 



(<ClLinks styled={true} term={"function"}><i>function</i></ClLinks> ,reference ,*arg1* ,*arg2* ...))) 



where *arg1*, *arg2*, ..., are the parameters appearing in *lambda-list*; appropriate provision is made for a *rest parameter* . 



The <ClLinks styled={true} term={"subform"}><i>subforms</i></ClLinks> of the macro calls defined by <ClLinks styled={true} term={"define-modify-macro"}><b>define-modify-macro</b></ClLinks> are evaluated as specified in Section 5.1.1.1 (Evaluation of Subforms to Places). 



*Documentation* is attached as a *documentation string* to <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> (as kind <ClLinks styled={true} term={"function"}><b>function</b></ClLinks>) and to the *macro function*. 



If a <ClLinks styled={true} term={"define-modify-macro"}><b>define-modify-macro</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> appears as a *top level form*, the <ClLinks styled={true} term={"compiler"}><i>compiler</i></ClLinks> must store the <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks> definition at compile time, so that occurrences of the macro later on in the file can be expanded correctly. 







 



 



**Examples:**
```lisp
(define-modify-macro appendf (&rest args) 
  append "Append onto list") *!* APPENDF 
(setq x ’(a b c) y x) *!* (A B C) 
(appendf x ’(d e f) ’(1 2 3)) *!* (A B C D E F 1 2 3) 
x *!* (A B C D E F 1 2 3) 
y *!* (A B C) 
(define-modify-macro new-incf (&optional (delta 1)) +) 
(define-modify-macro unionf (other-set &rest keywords) union) 
```
**Side Eects:** 



A macro definition is assigned to <ClLinks styled={true} term={"name"}><i>name</i></ClLinks>. 



**See Also:** 



<ClLinks styled={true} term={"defsetf"}><b>defsetf</b></ClLinks>, <ClLinks styled={true} term={"define-setf-expander"}><b>define-setf-expander</b></ClLinks>, **documentation**, Section 3.4.11 (Syntactic Interaction of Documentation Strings and Declarations) 




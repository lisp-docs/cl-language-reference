**define-modify-macro** <GlossaryTerm styled={true} term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"define-modify-macro"}><b>define-modify-macro</b></DictionaryLink> *name lambda-list function* [*documentation*] *! name* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. 



*lambda-list*—a *define-modify-macro lambda list* 



<GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. 



*documentation*—a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>; not evaluated. 



**Description:** 



<DictionaryLink styled={true} term={"define-modify-macro"}><b>define-modify-macro</b></DictionaryLink> defines a <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm> named <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> to <GlossaryTerm styled={true} term={"read"}><i>read</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"write"}><i>write</i></GlossaryTerm> a <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>. 



The arguments to the new <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm> are a <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>, followed by the arguments that are supplied in *lambda-list*. <GlossaryTerm styled={true} term={"macro"}><i>Macros</i></GlossaryTerm> defined with <DictionaryLink styled={true} term={"define-modify-macro"}><b>define-modify-macro</b></DictionaryLink> correctly pass the *environment parameter* to <DictionaryLink styled={true} term={"get-setf-expansion"}><b>get-setf-expansion</b></DictionaryLink>. 



When the <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm> is invoked, <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> is applied to the old contents of the <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> and the *lambda-list* arguments to obtain the new value, and the <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> is updated to contain the result. 



Except for the issue of avoiding multiple evaluation (see below), the expansion of a <DictionaryLink styled={true} term={"define-modify-macro"}><b>define-modify-macro</b></DictionaryLink> is equivalent to the following: 



(defmacro <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> (reference . *lambda-list*) 



*documentation* 



‘(setf ,reference 



(<GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> ,reference ,*arg1* ,*arg2* ...))) 



where *arg1*, *arg2*, ..., are the parameters appearing in *lambda-list*; appropriate provision is made for a *rest parameter* . 



The <GlossaryTerm styled={true} term={"subform"}><i>subforms</i></GlossaryTerm> of the macro calls defined by <DictionaryLink styled={true} term={"define-modify-macro"}><b>define-modify-macro</b></DictionaryLink> are evaluated as specified in Section 5.1.1.1 (Evaluation of Subforms to Places). 



*Documentation* is attached as a *documentation string* to <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> (as kind <DictionaryLink styled={true} term={"function"}><b>function</b></DictionaryLink>) and to the *macro function*. 



If a <DictionaryLink styled={true} term={"define-modify-macro"}><b>define-modify-macro</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> appears as a *top level form*, the <GlossaryTerm styled={true} term={"compiler"}><i>compiler</i></GlossaryTerm> must store the <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm> definition at compile time, so that occurrences of the macro later on in the file can be expanded correctly. 







 



 



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



A macro definition is assigned to <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink styled={true} term={"defsetf"}><b>defsetf</b></DictionaryLink>, <DictionaryLink styled={true} term={"define-setf-expander"}><b>define-setf-expander</b></DictionaryLink>, **documentation**, Section 3.4.11 (Syntactic Interaction of Documentation Strings and Declarations) 




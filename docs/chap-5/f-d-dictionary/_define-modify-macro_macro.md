**define-modify-macro** <GlossaryTerm  term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"define-modify-macro"}><b>define-modify-macro</b></DictionaryLink> *name lambda-list function* [*documentation*] *! name* 



**Arguments and Values:** 



<GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm>—a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>. 



*lambda-list*—a *define-modify-macro lambda list* 



<GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm>—a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>. 



*documentation*—a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>; not evaluated. 



**Description:** 



<DictionaryLink  term={"define-modify-macro"}><b>define-modify-macro</b></DictionaryLink> defines a <GlossaryTerm  term={"macro"}><i>macro</i></GlossaryTerm> named <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> to <GlossaryTerm  term={"read"}><i>read</i></GlossaryTerm> and <GlossaryTerm  term={"write"}><i>write</i></GlossaryTerm> a <GlossaryTerm  term={"place"}><i>place</i></GlossaryTerm>. 



The arguments to the new <GlossaryTerm  term={"macro"}><i>macro</i></GlossaryTerm> are a <GlossaryTerm  term={"place"}><i>place</i></GlossaryTerm>, followed by the arguments that are supplied in *lambda-list*. <GlossaryTerm  term={"macro"}><i>Macros</i></GlossaryTerm> defined with <DictionaryLink  term={"define-modify-macro"}><b>define-modify-macro</b></DictionaryLink> correctly pass the *environment parameter* to <DictionaryLink  term={"get-setf-expansion"}><b>get-setf-expansion</b></DictionaryLink>. 



When the <GlossaryTerm  term={"macro"}><i>macro</i></GlossaryTerm> is invoked, <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> is applied to the old contents of the <GlossaryTerm  term={"place"}><i>place</i></GlossaryTerm> and the *lambda-list* arguments to obtain the new value, and the <GlossaryTerm  term={"place"}><i>place</i></GlossaryTerm> is updated to contain the result. 



Except for the issue of avoiding multiple evaluation (see below), the expansion of a <DictionaryLink  term={"define-modify-macro"}><b>define-modify-macro</b></DictionaryLink> is equivalent to the following: 



(defmacro <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> (reference . *lambda-list*) 



*documentation* 



‘(setf ,reference 



(<GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> ,reference ,*arg1* ,*arg2* ...))) 



where *arg1*, *arg2*, ..., are the parameters appearing in *lambda-list*; appropriate provision is made for a <GlossaryTerm styled={true} term={"rest parameter"}><i>rest parameter</i></GlossaryTerm> . 



The <GlossaryTerm  term={"subform"}><i>subforms</i></GlossaryTerm> of the macro calls defined by <DictionaryLink  term={"define-modify-macro"}><b>define-modify-macro</b></DictionaryLink> are evaluated as specified in Section 5.1.1.1 (Evaluation of Subforms to Places). 



*Documentation* is attached as a <GlossaryTerm styled={true} term={"documentation string"}><i>documentation string</i></GlossaryTerm> to <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> (as kind <DictionaryLink  term={"function"}><b>function</b></DictionaryLink>) and to the <GlossaryTerm styled={true} term={"macro function"}><i>macro function</i></GlossaryTerm>. 



If a <DictionaryLink  term={"define-modify-macro"}><b>define-modify-macro</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> appears as a <GlossaryTerm styled={true} term={"top level form"}><i>top level form</i></GlossaryTerm>, the <GlossaryTerm  term={"compiler"}><i>compiler</i></GlossaryTerm> must store the <GlossaryTerm  term={"macro"}><i>macro</i></GlossaryTerm> definition at compile time, so that occurrences of the macro later on in the file can be expanded correctly. 







 



 



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



A macro definition is assigned to <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink  term={"defsetf"}><b>defsetf</b></DictionaryLink>, <DictionaryLink  term={"define-setf-expander"}><b>define-setf-expander</b></DictionaryLink>, **documentation**, Section 3.4.11 (Syntactic Interaction of Documentation Strings and Declarations) 




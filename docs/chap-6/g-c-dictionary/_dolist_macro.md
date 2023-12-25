**dolist** <GlossaryTerm styled={true} term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"dolist"}><b>dolist</b></DictionaryLink> (*var list-form* [*result-form*]) <GlossaryTerm styled={true} term={"declaration"}><i>\{declaration\}</i></GlossaryTerm>\* *\{tag | statement\}*\* 



*→ \{result\}*\* 



**Arguments and Values:** 



*var*—a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. 



*list-form*—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



*result-form*—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm>—a <DictionaryLink styled={true} term={"declare"}><b>declare</b></DictionaryLink> <GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm>; not evaluated. 



<GlossaryTerm styled={true} term={"tag"}><i>tag</i></GlossaryTerm>—a *go tag*; not evaluated. 



*statement*—a *compound form*; evaluated as described below. 



*results*—if a <DictionaryLink styled={true} term={"return"}><b>return</b></DictionaryLink> or <DictionaryLink styled={true} term={"return-from"}><b>return-from</b></DictionaryLink> form is executed, the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> passed from that <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>; otherwise, the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> returned by the *result-form* or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> if there is no *result-form*. 



**Description:** 



<DictionaryLink styled={true} term={"dolist"}><b>dolist</b></DictionaryLink> iterates over the elements of a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>. The body of <DictionaryLink styled={true} term={"dolist"}><b>dolist</b></DictionaryLink> is like a <DictionaryLink styled={true} term={"tagbody"}><b>tagbody</b></DictionaryLink>. It consists of a series of <GlossaryTerm styled={true} term={"tag"}><i>tags</i></GlossaryTerm> and *statements*. 



<DictionaryLink styled={true} term={"dolist"}><b>dolist</b></DictionaryLink> evaluates *list-form*, which should produce a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>. It then executes the body once for each element in the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>, in the order in which the <GlossaryTerm styled={true} term={"tag"}><i>tags</i></GlossaryTerm> and *statements* occur, with *var* bound to the element. Then *result-form* is evaluated. <GlossaryTerm styled={true} term={"tag"}><i>tags</i></GlossaryTerm> label *statements*. 



At the time *result-form* is processed, *var* is bound to <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



An *implicit block* named <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> surrounds <DictionaryLink styled={true} term={"dolist"}><b>dolist</b></DictionaryLink>. <DictionaryLink styled={true} term={"return"}><b>return</b></DictionaryLink> may be used to terminate the loop immediately without performing any further iterations, returning zero or more <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm>. 



The <GlossaryTerm styled={true} term={"scope"}><i>scope</i></GlossaryTerm> of the binding of *var* does not include the *list-form*, but the *result-form* is included. 



It is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> whether <DictionaryLink styled={true} term={"dolist"}><b>dolist</b></DictionaryLink> *establishes* a new <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> of *var* on each iteration or whether it *establishes* a binding for *var* once at the beginning and then <GlossaryTerm styled={true} term={"assign"}><i>assigns</i></GlossaryTerm> it on any subsequent iterations. 



**Examples:**
```lisp

(setq temp-two ’()) *→* NIL 
(dolist (temp-one ’(1 2 3 4) temp-two) (push temp-one temp-two)) *→* (4 3 2 1) (setq temp-two 0) *→* 0 



(dolist (temp-one ’(1 2 3 4)) (incf temp-two)) *→* NIL 
temp-two *→* 4 
(dolist (x ’(a b c d)) (prin1 x) (princ " ")) 
▷ A B C D 
*→* NIL 

```
**See Also:** 



<DictionaryLink styled={true} term={"do"}><b>do</b></DictionaryLink>, <DictionaryLink styled={true} term={"dotimes"}><b>dotimes</b></DictionaryLink>, <DictionaryLink styled={true} term={"tagbody"}><b>tagbody</b></DictionaryLink>, Section 3.6 (Traversal Rules and Side Effects) 



**Notes:** 



<DictionaryLink styled={true} term={"go"}><b>go</b></DictionaryLink> may be used within the body of <DictionaryLink styled={true} term={"dolist"}><b>dolist</b></DictionaryLink> to transfer control to a statement labeled by a <GlossaryTerm styled={true} term={"tag"}><i>tag</i></GlossaryTerm>. 
**dolist** <ClLinks styled={true} term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"dolist"}><b>dolist</b></ClLinks> (*var list-form* [*result-form*]) <ClLinks styled={true} term={"declaration"}><i>\{declaration\}</i></ClLinks>\* *\{tag | statement\}*\* 



→ \{result\}\* 



**Arguments and Values:** 



*var*—a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. 



*list-form*—a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. 



*result-form*—a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. 



<ClLinks styled={true} term={"declaration"}><i>declaration</i></ClLinks>—a <ClLinks styled={true} term={"declare"}><b>declare</b></ClLinks> <ClLinks styled={true} term={"expression"}><i>expression</i></ClLinks>; not evaluated. 



<ClLinks styled={true} term={"tag"}><i>tag</i></ClLinks>—a *go tag*; not evaluated. 



*statement*—a *compound form*; evaluated as described below. 



*results*—if a <ClLinks styled={true} term={"return"}><b>return</b></ClLinks> or <ClLinks styled={true} term={"return-from"}><b>return-from</b></ClLinks> form is executed, the <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> passed from that <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>; otherwise, the <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> returned by the *result-form* or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> if there is no *result-form*. 



**Description:** 



<ClLinks styled={true} term={"dolist"}><b>dolist</b></ClLinks> iterates over the elements of a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>. The body of <ClLinks styled={true} term={"dolist"}><b>dolist</b></ClLinks> is like a <ClLinks styled={true} term={"tagbody"}><b>tagbody</b></ClLinks>. It consists of a series of <ClLinks styled={true} term={"tag"}><i>tags</i></ClLinks> and *statements*. 



<ClLinks styled={true} term={"dolist"}><b>dolist</b></ClLinks> evaluates *list-form*, which should produce a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>. It then executes the body once for each element in the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>, in the order in which the <ClLinks styled={true} term={"tag"}><i>tags</i></ClLinks> and *statements* occur, with *var* bound to the element. Then *result-form* is evaluated. <ClLinks styled={true} term={"tag"}><i>tags</i></ClLinks> label *statements*. 



At the time *result-form* is processed, *var* is bound to <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



An *implicit block* named <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> surrounds <ClLinks styled={true} term={"dolist"}><b>dolist</b></ClLinks>. <ClLinks styled={true} term={"return"}><b>return</b></ClLinks> may be used to terminate the loop immediately without performing any further iterations, returning zero or more <ClLinks styled={true} term={"value"}><i>values</i></ClLinks>. 



The <ClLinks styled={true} term={"scope"}><i>scope</i></ClLinks> of the binding of *var* does not include the *list-form*, but the *result-form* is included. 



It is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> whether <ClLinks styled={true} term={"dolist"}><b>dolist</b></ClLinks> *establishes* a new <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> of *var* on each iteration or whether it *establishes* a binding for *var* once at the beginning and then <ClLinks styled={true} term={"assign"}><i>assigns</i></ClLinks> it on any subsequent iterations. 



**Examples:**
```lisp
(setq temp-two ’()) → NIL 
(dolist (temp-one ’(1 2 3 4) temp-two) (push temp-one temp-two)) → (4 3 2 1) (setq temp-two 0) → 0 

(dolist (temp-one ’(1 2 3 4)) (incf temp-two)) → NIL 
temp-two → 4 
(dolist (x ’(a b c d)) (prin1 x) (princ " ")) 
▷ A B C D 
→ NIL 
```
**See Also:** 



<ClLinks styled={true} term={"do"}><b>do</b></ClLinks>, <ClLinks styled={true} term={"dotimes"}><b>dotimes</b></ClLinks>, <ClLinks styled={true} term={"tagbody"}><b>tagbody</b></ClLinks>, Section 3.6 (Traversal Rules and Side Effects) 



**Notes:** 



<ClLinks styled={true} term={"go"}><b>go</b></ClLinks> may be used within the body of <ClLinks styled={true} term={"dolist"}><b>dolist</b></ClLinks> to transfer control to a statement labeled by a <ClLinks styled={true} term={"tag"}><i>tag</i></ClLinks>. 
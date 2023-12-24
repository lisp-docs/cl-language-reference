**tagbody** *Special Operator* 



**Syntax:** 



<ClLinks styled={true} term={"tagbody"}><b>tagbody</b></ClLinks> *\{tag | statement\}*\* → <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> 



**Arguments and Values:** 



<ClLinks styled={true} term={"tag"}><i>tag</i></ClLinks>—a *go tag*; not evaluated. 



*statement*—a *compound form*; evaluated as described below. 



**Description:** 



Executes zero or more *statements* in a *lexical environment* that provides for control transfers to labels indicated by the <ClLinks styled={true} term={"tag"}><i>tags</i></ClLinks>. 



The *statements* in a <ClLinks styled={true} term={"tagbody"}><b>tagbody</b></ClLinks> are *evaluated* in order from left to right, and their <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> are discarded. If at any time there are no remaining *statements*, <ClLinks styled={true} term={"tagbody"}><b>tagbody</b></ClLinks> returns <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. However, if (go <ClLinks styled={true} term={"tag"}><i>tag</i></ClLinks>) is *evaluated*, control jumps to the part of the body labeled with the <ClLinks styled={true} term={"tag"}><i>tag</i></ClLinks>. (Tags are compared with <ClLinks styled={true} term={"eql"}><b>eql</b></ClLinks>.) 



A <ClLinks styled={true} term={"tag"}><i>tag</i></ClLinks> established by <ClLinks styled={true} term={"tagbody"}><b>tagbody</b></ClLinks> has *lexical scope* and has *dynamic extent*. Once <ClLinks styled={true} term={"tagbody"}><b>tagbody</b></ClLinks> has been exited, it is no longer valid to <ClLinks styled={true} term={"go"}><b>go</b></ClLinks> to a <ClLinks styled={true} term={"tag"}><i>tag</i></ClLinks> in its body. It is permissible for <ClLinks styled={true} term={"go"}><b>go</b></ClLinks> to jump to a <ClLinks styled={true} term={"tagbody"}><b>tagbody</b></ClLinks> that is not the innermost <ClLinks styled={true} term={"tagbody"}><b>tagbody</b></ClLinks> containing that <ClLinks styled={true} term={"go"}><b>go</b></ClLinks>; the <ClLinks styled={true} term={"tag"}><i>tags</i></ClLinks> established by a <ClLinks styled={true} term={"tagbody"}><b>tagbody</b></ClLinks> only shadow other <ClLinks styled={true} term={"tag"}><i>tags</i></ClLinks> of like name. 



The determination of which elements of the body are <ClLinks styled={true} term={"tag"}><i>tags</i></ClLinks> and which are *statements* is made prior to any *macro expansion* of that element. If a *statement* is a *macro form* and its *macro expansion* is an <ClLinks styled={true} term={"atom"}><i>atom</i></ClLinks>, that <ClLinks styled={true} term={"atom"}><i>atom</i></ClLinks> is treated as a *statement*, not a <ClLinks styled={true} term={"tag"}><i>tag</i></ClLinks>. 



**Examples:**
```lisp

(let (val) 
  (tagbody 
     (setq val 1) 
     (go point-a) 
     (incf val 16) 
   point-c 
     (incf val 04) 
     (go point-b) 
     (incf val 32) 
   point-a 
     (incf val 02) 
     (go point-c) 
     (incf val 64) 
   point-b 
     (incf val 08)) 



  val) 
→ 15 
(defun f1 (flag) 
  (let ((n 1)) 
    (tagbody 
       (setq n (f2 flag #’(lambda () (go out)))) 
     out 
       (prin1 n)))) 
→ F1 
(defun f2 (flag escape) 
  (if flag (funcall escape) 2)) 
→ F2 
(f1 nil) 
▷ 2 
→ NIL 
(f1 t) 
▷ 1 
→ NIL 

```
**See Also:** 



<ClLinks styled={true} term={"go"}><b>go</b></ClLinks> 



**Notes:** 



The <ClLinks styled={true} term={"macro"}><i>macros</i></ClLinks> in Figure 5–10 have *implicit tagbodies*. 



|<p>**do do-external-symbols dotimes do\* do-symbols prog** </p><p>**do-all-symbols dolist prog\***</p>|

| :- |





**Figure 5–10. Macros that have implicit tagbodies.** 




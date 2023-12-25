**tagbody** *Special Operator* 



**Syntax:** 



<DictionaryLink styled={true} term={"tagbody"}><b>tagbody</b></DictionaryLink> *\{tag | statement\}*\* *→* <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"tag"}><i>tag</i></GlossaryTerm>—a *go tag*; not evaluated. 



*statement*—a *compound form*; evaluated as described below. 



**Description:** 



Executes zero or more *statements* in a *lexical environment* that provides for control transfers to labels indicated by the <GlossaryTerm styled={true} term={"tag"}><i>tags</i></GlossaryTerm>. 



The *statements* in a <DictionaryLink styled={true} term={"tagbody"}><b>tagbody</b></DictionaryLink> are *evaluated* in order from left to right, and their <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> are discarded. If at any time there are no remaining *statements*, <DictionaryLink styled={true} term={"tagbody"}><b>tagbody</b></DictionaryLink> returns <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. However, if (go <GlossaryTerm styled={true} term={"tag"}><i>tag</i></GlossaryTerm>) is *evaluated*, control jumps to the part of the body labeled with the <GlossaryTerm styled={true} term={"tag"}><i>tag</i></GlossaryTerm>. (Tags are compared with <DictionaryLink styled={true} term={"eql"}><b>eql</b></DictionaryLink>.) 



A <GlossaryTerm styled={true} term={"tag"}><i>tag</i></GlossaryTerm> established by <DictionaryLink styled={true} term={"tagbody"}><b>tagbody</b></DictionaryLink> has *lexical scope* and has *dynamic extent*. Once <DictionaryLink styled={true} term={"tagbody"}><b>tagbody</b></DictionaryLink> has been exited, it is no longer valid to <DictionaryLink styled={true} term={"go"}><b>go</b></DictionaryLink> to a <GlossaryTerm styled={true} term={"tag"}><i>tag</i></GlossaryTerm> in its body. It is permissible for <DictionaryLink styled={true} term={"go"}><b>go</b></DictionaryLink> to jump to a <DictionaryLink styled={true} term={"tagbody"}><b>tagbody</b></DictionaryLink> that is not the innermost <DictionaryLink styled={true} term={"tagbody"}><b>tagbody</b></DictionaryLink> containing that <DictionaryLink styled={true} term={"go"}><b>go</b></DictionaryLink>; the <GlossaryTerm styled={true} term={"tag"}><i>tags</i></GlossaryTerm> established by a <DictionaryLink styled={true} term={"tagbody"}><b>tagbody</b></DictionaryLink> only shadow other <GlossaryTerm styled={true} term={"tag"}><i>tags</i></GlossaryTerm> of like name. 



The determination of which elements of the body are <GlossaryTerm styled={true} term={"tag"}><i>tags</i></GlossaryTerm> and which are *statements* is made prior to any *macro expansion* of that element. If a *statement* is a *macro form* and its *macro expansion* is an <GlossaryTerm styled={true} term={"atom"}><i>atom</i></GlossaryTerm>, that <GlossaryTerm styled={true} term={"atom"}><i>atom</i></GlossaryTerm> is treated as a *statement*, not a <GlossaryTerm styled={true} term={"tag"}><i>tag</i></GlossaryTerm>. 



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
*→* 15 
(defun f1 (flag) 
  (let ((n 1)) 
    (tagbody 
       (setq n (f2 flag #’(lambda () (go out)))) 
     out 
       (prin1 n)))) 
*→* F1 
(defun f2 (flag escape) 
  (if flag (funcall escape) 2)) 
*→* F2 
(f1 nil) 
▷ 2 
*→* NIL 
(f1 t) 
▷ 1 
*→* NIL 

```
**See Also:** 



<DictionaryLink styled={true} term={"go"}><b>go</b></DictionaryLink> 



**Notes:** 



The <GlossaryTerm styled={true} term={"macro"}><i>macros</i></GlossaryTerm> in Figure 5–10 have *implicit tagbodies*. 



|<p>**do do-external-symbols dotimes do\* do-symbols prog** </p><p>**do-all-symbols dolist prog\***</p>|

| :- |





**Figure 5–10. Macros that have implicit tagbodies.** 




**tagbody** <GlossaryTerm styled={true} term={"special operator"}><i>Special Operator</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"tagbody"}><b>tagbody</b></DictionaryLink> *\{tag | statement\}*\* → <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> 



**Arguments and Values:** 



<ClLinks  term={"tag"}><i>tag</i></ClLinks>—a <GlossaryTerm styled={true} term={"go tag"}><i>go tag</i></GlossaryTerm>; not evaluated. 



*statement*—a <GlossaryTerm styled={true} term={"compound form"}><i>compound form</i></GlossaryTerm>; evaluated as described below. 



**Description:** 



Executes zero or more *statements* in a <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm> that provides for control transfers to labels indicated by the <ClLinks  term={"tag"}><i>tags</i></ClLinks>. 



The *statements* in a <DictionaryLink  term={"tagbody"}><b>tagbody</b></DictionaryLink> are *evaluated* in order from left to right, and their <ClLinks  term={"value"}><i>values</i></ClLinks> are discarded. If at any time there are no remaining *statements*, <DictionaryLink  term={"tagbody"}><b>tagbody</b></DictionaryLink> returns <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. However, if (go <ClLinks  term={"tag"}><i>tag</i></ClLinks>) is *evaluated*, control jumps to the part of the body labeled with the <ClLinks  term={"tag"}><i>tag</i></ClLinks>. (Tags are compared with <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink>.) 



A <ClLinks  term={"tag"}><i>tag</i></ClLinks> established by <DictionaryLink  term={"tagbody"}><b>tagbody</b></DictionaryLink> has <GlossaryTerm styled={true} term={"lexical scope"}><i>lexical scope</i></GlossaryTerm> and has <GlossaryTerm styled={true} term={"dynamic extent"}><i>dynamic extent</i></GlossaryTerm>. Once <DictionaryLink  term={"tagbody"}><b>tagbody</b></DictionaryLink> has been exited, it is no longer valid to <DictionaryLink  term={"go"}><b>go</b></DictionaryLink> to a <ClLinks  term={"tag"}><i>tag</i></ClLinks> in its body. It is permissible for <DictionaryLink  term={"go"}><b>go</b></DictionaryLink> to jump to a <DictionaryLink  term={"tagbody"}><b>tagbody</b></DictionaryLink> that is not the innermost <DictionaryLink  term={"tagbody"}><b>tagbody</b></DictionaryLink> containing that <DictionaryLink  term={"go"}><b>go</b></DictionaryLink>; the <ClLinks  term={"tag"}><i>tags</i></ClLinks> established by a <DictionaryLink  term={"tagbody"}><b>tagbody</b></DictionaryLink> only shadow other <ClLinks  term={"tag"}><i>tags</i></ClLinks> of like name. 



The determination of which elements of the body are <ClLinks  term={"tag"}><i>tags</i></ClLinks> and which are *statements* is made prior to any <GlossaryTerm styled={true} term={"macro expansion"}><i>macro expansion</i></GlossaryTerm> of that element. If a *statement* is a <GlossaryTerm styled={true} term={"macro form"}><i>macro form</i></GlossaryTerm> and its <GlossaryTerm styled={true} term={"macro expansion"}><i>macro expansion</i></GlossaryTerm> is an <ClLinks  term={"atom"}><i>atom</i></ClLinks>, that <ClLinks  term={"atom"}><i>atom</i></ClLinks> is treated as a *statement*, not a <ClLinks  term={"tag"}><i>tag</i></ClLinks>. 



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



<DictionaryLink  term={"go"}><b>go</b></DictionaryLink> 



**Notes:** 



The <ClLinks  term={"macro"}><i>macros</i></ClLinks> in Figure 5–10 have *implicit tagbodies*. 



|<p>**do do-external-symbols dotimes do\* do-symbols prog** </p><p>**do-all-symbols dolist prog\***</p>|

| :- |





**Figure 5–10. Macros that have implicit tagbodies.** 




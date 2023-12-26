**tagbody** <GlossaryTerm styled={true} term={"special operator"}><i>Special Operator</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"tagbody"}><b>tagbody</b></DictionaryLink> *\{tag | statement\}*\* → <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> 



**Arguments and Values:** 



<GlossaryTerm  term={"tag"}><i>tag</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"go tag"}><i>go tag</i></GlossaryTerm>; not evaluated. 



*statement*—a <GlossaryTerm styled={true} term={"compound form"}><i>compound form</i></GlossaryTerm>; evaluated as described below. 



**Description:** 



Executes zero or more *statements* in a <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm> that provides for control transfers to labels indicated by the <GlossaryTerm  term={"tag"}><i>tags</i></GlossaryTerm>. 



The *statements* in a <DictionaryLink  term={"tagbody"}><b>tagbody</b></DictionaryLink> are *evaluated* in order from left to right, and their <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> are discarded. If at any time there are no remaining *statements*, <DictionaryLink  term={"tagbody"}><b>tagbody</b></DictionaryLink> returns <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. However, if (go <GlossaryTerm  term={"tag"}><i>tag</i></GlossaryTerm>) is *evaluated*, control jumps to the part of the body labeled with the <GlossaryTerm  term={"tag"}><i>tag</i></GlossaryTerm>. (Tags are compared with <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink>.) 



A <GlossaryTerm  term={"tag"}><i>tag</i></GlossaryTerm> established by <DictionaryLink  term={"tagbody"}><b>tagbody</b></DictionaryLink> has <GlossaryTerm styled={true} term={"lexical scope"}><i>lexical scope</i></GlossaryTerm> and has <GlossaryTerm styled={true} term={"dynamic extent"}><i>dynamic extent</i></GlossaryTerm>. Once <DictionaryLink  term={"tagbody"}><b>tagbody</b></DictionaryLink> has been exited, it is no longer valid to <DictionaryLink  term={"go"}><b>go</b></DictionaryLink> to a <GlossaryTerm  term={"tag"}><i>tag</i></GlossaryTerm> in its body. It is permissible for <DictionaryLink  term={"go"}><b>go</b></DictionaryLink> to jump to a <DictionaryLink  term={"tagbody"}><b>tagbody</b></DictionaryLink> that is not the innermost <DictionaryLink  term={"tagbody"}><b>tagbody</b></DictionaryLink> containing that <DictionaryLink  term={"go"}><b>go</b></DictionaryLink>; the <GlossaryTerm  term={"tag"}><i>tags</i></GlossaryTerm> established by a <DictionaryLink  term={"tagbody"}><b>tagbody</b></DictionaryLink> only shadow other <GlossaryTerm  term={"tag"}><i>tags</i></GlossaryTerm> of like name. 



The determination of which elements of the body are <GlossaryTerm  term={"tag"}><i>tags</i></GlossaryTerm> and which are *statements* is made prior to any <GlossaryTerm styled={true} term={"macro expansion"}><i>macro expansion</i></GlossaryTerm> of that element. If a *statement* is a <GlossaryTerm styled={true} term={"macro form"}><i>macro form</i></GlossaryTerm> and its <GlossaryTerm styled={true} term={"macro expansion"}><i>macro expansion</i></GlossaryTerm> is an <GlossaryTerm  term={"atom"}><i>atom</i></GlossaryTerm>, that <GlossaryTerm  term={"atom"}><i>atom</i></GlossaryTerm> is treated as a *statement*, not a <GlossaryTerm  term={"tag"}><i>tag</i></GlossaryTerm>. 



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



The <GlossaryTerm  term={"macro"}><i>macros</i></GlossaryTerm> in Figure 5–10 have *implicit tagbodies*. 



|<p>**do do-external-symbols dotimes do\* do-symbols prog** </p><p>**do-all-symbols dolist prog\***</p>|

| :- |





**Figure 5–10. Macros that have implicit tagbodies.** 




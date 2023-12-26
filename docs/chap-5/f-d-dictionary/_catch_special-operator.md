**catch** <GlossaryTerm styled={true} term={"special operator"}><i>Special Operator</i></GlossaryTerm> 



**Syntax:** 



<ClLinks  term={"catch"}><b>catch</b></ClLinks> *tag \{form\}*\* → \{result\}\* 



**Arguments and Values:** 



<ClLinks  term={"tag"}><i>tag</i></ClLinks>—a <GlossaryTerm styled={true} term={"catch tag"}><i>catch tag</i></GlossaryTerm>; evaluated. 



<ClLinks  term={"form"}><i>forms</i></ClLinks>—an <GlossaryTerm styled={true} term={"implicit progn"}><i>implicit progn</i></GlossaryTerm>. 



*results*—if the <ClLinks  term={"form"}><i>forms</i></ClLinks> exit normally, the <ClLinks  term={"value"}><i>values</i></ClLinks> returned by the <ClLinks  term={"form"}><i>forms</i></ClLinks>; if a throw occurs to the <ClLinks  term={"tag"}><i>tag</i></ClLinks>, the <ClLinks  term={"value"}><i>values</i></ClLinks> that are thrown. 



**Description:** 



<ClLinks  term={"catch"}><b>catch</b></ClLinks> is used as the destination of a non-local control transfer by <ClLinks  term={"throw"}><b>throw</b></ClLinks>. <ClLinks  term={"tag"}><i>Tags</i></ClLinks> are used to find the <ClLinks  term={"catch"}><b>catch</b></ClLinks> to which a <ClLinks  term={"throw"}><b>throw</b></ClLinks> is transferring control. (catch ’foo <ClLinks  term={"form"}><i>form</i></ClLinks>) catches a (throw ’foo <ClLinks  term={"form"}><i>form</i></ClLinks>) but not a (throw ’bar <ClLinks  term={"form"}><i>form</i></ClLinks>). 



The order of execution of <ClLinks  term={"catch"}><b>catch</b></ClLinks> follows: 



1\. <ClLinks  term={"tag"}><i>Tag</i></ClLinks> is evaluated. It serves as the name of the <ClLinks  term={"catch"}><b>catch</b></ClLinks>. 



2\. <ClLinks  term={"form"}><i>Forms</i></ClLinks> are then evaluated as an implicit <ClLinks  term={"progn"}><b>progn</b></ClLinks>, and the results of the last <ClLinks  term={"form"}><i>form</i></ClLinks> are returned unless a <ClLinks  term={"throw"}><b>throw</b></ClLinks> occurs. 



3\. If a <ClLinks  term={"throw"}><b>throw</b></ClLinks> occurs during the execution of one of the <ClLinks  term={"form"}><i>forms</i></ClLinks>, control is transferred to the <ClLinks  term={"catch"}><b>catch</b></ClLinks> <ClLinks  term={"form"}><i>form</i></ClLinks> whose <ClLinks  term={"tag"}><i>tag</i></ClLinks> is <ClLinks  term={"eq"}><b>eq</b></ClLinks> to the tag argument of the <ClLinks  term={"throw"}><b>throw</b></ClLinks> and which is the most recently established <ClLinks  term={"catch"}><b>catch</b></ClLinks> with that <ClLinks  term={"tag"}><i>tag</i></ClLinks>. No further evaluation of <ClLinks  term={"form"}><i>forms</i></ClLinks> occurs. 



4\. The *tag established* by <ClLinks  term={"catch"}><b>catch</b></ClLinks> is *disestablished* just before the results are returned. 



If during the execution of one of the <ClLinks  term={"form"}><i>forms</i></ClLinks>, a <ClLinks  term={"throw"}><b>throw</b></ClLinks> is executed whose tag is <ClLinks  term={"eq"}><b>eq</b></ClLinks> to the <ClLinks  term={"catch"}><b>catch</b></ClLinks> tag, then the values specified by the <ClLinks  term={"throw"}><b>throw</b></ClLinks> are returned as the result of the dynamically most recently established <ClLinks  term={"catch"}><b>catch</b></ClLinks> form with that tag. 



The mechanism for <ClLinks  term={"catch"}><b>catch</b></ClLinks> and <ClLinks  term={"throw"}><b>throw</b></ClLinks> works even if <ClLinks  term={"throw"}><b>throw</b></ClLinks> is not within the lexical scope of <ClLinks  term={"catch"}><b>catch</b></ClLinks>. <ClLinks  term={"throw"}><b>throw</b></ClLinks> must occur within the <GlossaryTerm styled={true} term={"dynamic extent"}><i>dynamic extent</i></GlossaryTerm> of the <ClLinks  term={"evaluation"}><i>evaluation</i></ClLinks> of the body of a <ClLinks  term={"catch"}><b>catch</b></ClLinks> with a corresponding <ClLinks  term={"tag"}><i>tag</i></ClLinks>. 



**Examples:**
```lisp
(catch ’dummy-tag 1 2 (throw ’dummy-tag 3) 4) → 3 
(catch ’dummy-tag 1 2 3 4) → 4 
(defun throw-back (tag) (throw tag t)) → THROW-BACK 
(catch ’dummy-tag (throw-back ’dummy-tag) 2) → T 
Data and Control 

;; Contrast behavior of this example with corresponding example of BLOCK. 
(catch ’c 
  (flet ((c1 () (throw ’c 1))) 
    (catch ’c (c1) (print ’unreachable)) 
    2)) → 2 
```
**Exceptional Situations:** 



An error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"control-error"}><b>control-error</b></ClLinks> is signaled if <ClLinks  term={"throw"}><b>throw</b></ClLinks> is done when there is no suitable <ClLinks  term={"catch"}><b>catch</b></ClLinks> <ClLinks  term={"tag"}><i>tag</i></ClLinks>. 



**See Also:** 



<ClLinks  term={"throw"}><b>throw</b></ClLinks>, Section 3.1 (Evaluation) 



**Notes:** 



It is customary for <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> to be used as <ClLinks  term={"tag"}><i>tags</i></ClLinks>, but any <ClLinks  term={"object"}><i>object</i></ClLinks> is permitted. However, numbers should not be used because the comparison is done using <ClLinks  term={"eq"}><b>eq</b></ClLinks>. 



<ClLinks  term={"catch"}><b>catch</b></ClLinks> differs from <ClLinks  term={"block"}><b>block</b></ClLinks> in that <ClLinks  term={"catch"}><b>catch</b></ClLinks> tags have dynamic <ClLinks  term={"scope"}><i>scope</i></ClLinks> while <ClLinks  term={"block"}><b>block</b></ClLinks> names have <GlossaryTerm styled={true} term={"lexical scope"}><i>lexical scope</i></GlossaryTerm>. 




**catch** *Special Operator* 



**Syntax:** 



<ClLinks styled={true} term={"catch"}><b>catch</b></ClLinks> *tag \{form\}*\* → \{result\}\* 



**Arguments and Values:** 



<ClLinks styled={true} term={"tag"}><i>tag</i></ClLinks>—a *catch tag*; evaluated. 



<ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>—an *implicit progn*. 



*results*—if the <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> exit normally, the <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> returned by the <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>; if a throw occurs to the <ClLinks styled={true} term={"tag"}><i>tag</i></ClLinks>, the <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> that are thrown. 



**Description:** 



<ClLinks styled={true} term={"catch"}><b>catch</b></ClLinks> is used as the destination of a non-local control transfer by <ClLinks styled={true} term={"throw"}><b>throw</b></ClLinks>. <ClLinks styled={true} term={"tag"}><i>Tags</i></ClLinks> are used to find the <ClLinks styled={true} term={"catch"}><b>catch</b></ClLinks> to which a <ClLinks styled={true} term={"throw"}><b>throw</b></ClLinks> is transferring control. (catch ’foo <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>) catches a (throw ’foo <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>) but not a (throw ’bar <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>). 



The order of execution of <ClLinks styled={true} term={"catch"}><b>catch</b></ClLinks> follows: 



1\. <ClLinks styled={true} term={"tag"}><i>Tag</i></ClLinks> is evaluated. It serves as the name of the <ClLinks styled={true} term={"catch"}><b>catch</b></ClLinks>. 



2\. <ClLinks styled={true} term={"form"}><i>Forms</i></ClLinks> are then evaluated as an implicit <ClLinks styled={true} term={"progn"}><b>progn</b></ClLinks>, and the results of the last <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> are returned unless a <ClLinks styled={true} term={"throw"}><b>throw</b></ClLinks> occurs. 



3\. If a <ClLinks styled={true} term={"throw"}><b>throw</b></ClLinks> occurs during the execution of one of the <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>, control is transferred to the <ClLinks styled={true} term={"catch"}><b>catch</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> whose <ClLinks styled={true} term={"tag"}><i>tag</i></ClLinks> is <ClLinks styled={true} term={"eq"}><b>eq</b></ClLinks> to the tag argument of the <ClLinks styled={true} term={"throw"}><b>throw</b></ClLinks> and which is the most recently established <ClLinks styled={true} term={"catch"}><b>catch</b></ClLinks> with that <ClLinks styled={true} term={"tag"}><i>tag</i></ClLinks>. No further evaluation of <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> occurs. 



4\. The *tag established* by <ClLinks styled={true} term={"catch"}><b>catch</b></ClLinks> is *disestablished* just before the results are returned. 



If during the execution of one of the <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>, a <ClLinks styled={true} term={"throw"}><b>throw</b></ClLinks> is executed whose tag is <ClLinks styled={true} term={"eq"}><b>eq</b></ClLinks> to the <ClLinks styled={true} term={"catch"}><b>catch</b></ClLinks> tag, then the values specified by the <ClLinks styled={true} term={"throw"}><b>throw</b></ClLinks> are returned as the result of the dynamically most recently established <ClLinks styled={true} term={"catch"}><b>catch</b></ClLinks> form with that tag. 



The mechanism for <ClLinks styled={true} term={"catch"}><b>catch</b></ClLinks> and <ClLinks styled={true} term={"throw"}><b>throw</b></ClLinks> works even if <ClLinks styled={true} term={"throw"}><b>throw</b></ClLinks> is not within the lexical scope of <ClLinks styled={true} term={"catch"}><b>catch</b></ClLinks>. <ClLinks styled={true} term={"throw"}><b>throw</b></ClLinks> must occur within the *dynamic extent* of the <ClLinks styled={true} term={"evaluation"}><i>evaluation</i></ClLinks> of the body of a <ClLinks styled={true} term={"catch"}><b>catch</b></ClLinks> with a corresponding <ClLinks styled={true} term={"tag"}><i>tag</i></ClLinks>. 



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



An error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"control-error"}><b>control-error</b></ClLinks> is signaled if <ClLinks styled={true} term={"throw"}><b>throw</b></ClLinks> is done when there is no suitable <ClLinks styled={true} term={"catch"}><b>catch</b></ClLinks> <ClLinks styled={true} term={"tag"}><i>tag</i></ClLinks>. 



**See Also:** 



<ClLinks styled={true} term={"throw"}><b>throw</b></ClLinks>, Section 3.1 (Evaluation) 



**Notes:** 



It is customary for <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> to be used as <ClLinks styled={true} term={"tag"}><i>tags</i></ClLinks>, but any <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is permitted. However, numbers should not be used because the comparison is done using <ClLinks styled={true} term={"eq"}><b>eq</b></ClLinks>. 



<ClLinks styled={true} term={"catch"}><b>catch</b></ClLinks> differs from <ClLinks styled={true} term={"block"}><b>block</b></ClLinks> in that <ClLinks styled={true} term={"catch"}><b>catch</b></ClLinks> tags have dynamic <ClLinks styled={true} term={"scope"}><i>scope</i></ClLinks> while <ClLinks styled={true} term={"block"}><b>block</b></ClLinks> names have *lexical scope*. 




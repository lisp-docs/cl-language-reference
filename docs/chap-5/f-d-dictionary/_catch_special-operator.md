**catch** <GlossaryTerm styled={true} term={"special operator"}><i>Special Operator</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"catch"}><b>catch</b></DictionaryLink> *tag \{form\}*\* → \{result\}\* 



**Arguments and Values:** 



<ClLinks  term={"tag"}><i>tag</i></ClLinks>—a <GlossaryTerm styled={true} term={"catch tag"}><i>catch tag</i></GlossaryTerm>; evaluated. 



<ClLinks  term={"form"}><i>forms</i></ClLinks>—an <GlossaryTerm styled={true} term={"implicit progn"}><i>implicit progn</i></GlossaryTerm>. 



*results*—if the <ClLinks  term={"form"}><i>forms</i></ClLinks> exit normally, the <ClLinks  term={"value"}><i>values</i></ClLinks> returned by the <ClLinks  term={"form"}><i>forms</i></ClLinks>; if a throw occurs to the <ClLinks  term={"tag"}><i>tag</i></ClLinks>, the <ClLinks  term={"value"}><i>values</i></ClLinks> that are thrown. 



**Description:** 



<DictionaryLink  term={"catch"}><b>catch</b></DictionaryLink> is used as the destination of a non-local control transfer by <DictionaryLink  term={"throw"}><b>throw</b></DictionaryLink>. <ClLinks  term={"tag"}><i>Tags</i></ClLinks> are used to find the <DictionaryLink  term={"catch"}><b>catch</b></DictionaryLink> to which a <DictionaryLink  term={"throw"}><b>throw</b></DictionaryLink> is transferring control. (catch ’foo <ClLinks  term={"form"}><i>form</i></ClLinks>) catches a (throw ’foo <ClLinks  term={"form"}><i>form</i></ClLinks>) but not a (throw ’bar <ClLinks  term={"form"}><i>form</i></ClLinks>). 



The order of execution of <DictionaryLink  term={"catch"}><b>catch</b></DictionaryLink> follows: 



1\. <ClLinks  term={"tag"}><i>Tag</i></ClLinks> is evaluated. It serves as the name of the <DictionaryLink  term={"catch"}><b>catch</b></DictionaryLink>. 



2\. <ClLinks  term={"form"}><i>Forms</i></ClLinks> are then evaluated as an implicit <DictionaryLink  term={"progn"}><b>progn</b></DictionaryLink>, and the results of the last <ClLinks  term={"form"}><i>form</i></ClLinks> are returned unless a <DictionaryLink  term={"throw"}><b>throw</b></DictionaryLink> occurs. 



3\. If a <DictionaryLink  term={"throw"}><b>throw</b></DictionaryLink> occurs during the execution of one of the <ClLinks  term={"form"}><i>forms</i></ClLinks>, control is transferred to the <DictionaryLink  term={"catch"}><b>catch</b></DictionaryLink> <ClLinks  term={"form"}><i>form</i></ClLinks> whose <ClLinks  term={"tag"}><i>tag</i></ClLinks> is <DictionaryLink  term={"eq"}><b>eq</b></DictionaryLink> to the tag argument of the <DictionaryLink  term={"throw"}><b>throw</b></DictionaryLink> and which is the most recently established <DictionaryLink  term={"catch"}><b>catch</b></DictionaryLink> with that <ClLinks  term={"tag"}><i>tag</i></ClLinks>. No further evaluation of <ClLinks  term={"form"}><i>forms</i></ClLinks> occurs. 



4\. The *tag established* by <DictionaryLink  term={"catch"}><b>catch</b></DictionaryLink> is *disestablished* just before the results are returned. 



If during the execution of one of the <ClLinks  term={"form"}><i>forms</i></ClLinks>, a <DictionaryLink  term={"throw"}><b>throw</b></DictionaryLink> is executed whose tag is <DictionaryLink  term={"eq"}><b>eq</b></DictionaryLink> to the <DictionaryLink  term={"catch"}><b>catch</b></DictionaryLink> tag, then the values specified by the <DictionaryLink  term={"throw"}><b>throw</b></DictionaryLink> are returned as the result of the dynamically most recently established <DictionaryLink  term={"catch"}><b>catch</b></DictionaryLink> form with that tag. 



The mechanism for <DictionaryLink  term={"catch"}><b>catch</b></DictionaryLink> and <DictionaryLink  term={"throw"}><b>throw</b></DictionaryLink> works even if <DictionaryLink  term={"throw"}><b>throw</b></DictionaryLink> is not within the lexical scope of <DictionaryLink  term={"catch"}><b>catch</b></DictionaryLink>. <DictionaryLink  term={"throw"}><b>throw</b></DictionaryLink> must occur within the <GlossaryTerm styled={true} term={"dynamic extent"}><i>dynamic extent</i></GlossaryTerm> of the <ClLinks  term={"evaluation"}><i>evaluation</i></ClLinks> of the body of a <DictionaryLink  term={"catch"}><b>catch</b></DictionaryLink> with a corresponding <ClLinks  term={"tag"}><i>tag</i></ClLinks>. 



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



An error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"control-error"}><b>control-error</b></DictionaryLink> is signaled if <DictionaryLink  term={"throw"}><b>throw</b></DictionaryLink> is done when there is no suitable <DictionaryLink  term={"catch"}><b>catch</b></DictionaryLink> <ClLinks  term={"tag"}><i>tag</i></ClLinks>. 



**See Also:** 



<DictionaryLink  term={"throw"}><b>throw</b></DictionaryLink>, Section 3.1 (Evaluation) 



**Notes:** 



It is customary for <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> to be used as <ClLinks  term={"tag"}><i>tags</i></ClLinks>, but any <ClLinks  term={"object"}><i>object</i></ClLinks> is permitted. However, numbers should not be used because the comparison is done using <DictionaryLink  term={"eq"}><b>eq</b></DictionaryLink>. 



<DictionaryLink  term={"catch"}><b>catch</b></DictionaryLink> differs from <DictionaryLink  term={"block"}><b>block</b></DictionaryLink> in that <DictionaryLink  term={"catch"}><b>catch</b></DictionaryLink> tags have dynamic <ClLinks  term={"scope"}><i>scope</i></ClLinks> while <DictionaryLink  term={"block"}><b>block</b></DictionaryLink> names have <GlossaryTerm styled={true} term={"lexical scope"}><i>lexical scope</i></GlossaryTerm>. 




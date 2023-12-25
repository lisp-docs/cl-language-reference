**catch** *Special Operator* 



**Syntax:** 



<DictionaryLink styled={true} term={"catch"}><b>catch</b></DictionaryLink> *tag \{form\}*\* *→ \{result\}*\* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"tag"}><i>tag</i></GlossaryTerm>—a *catch tag*; evaluated. 



<GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>—an *implicit progn*. 



*results*—if the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> exit normally, the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> returned by the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>; if a throw occurs to the <GlossaryTerm styled={true} term={"tag"}><i>tag</i></GlossaryTerm>, the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> that are thrown. 



**Description:** 



<DictionaryLink styled={true} term={"catch"}><b>catch</b></DictionaryLink> is used as the destination of a non-local control transfer by <DictionaryLink styled={true} term={"throw"}><b>throw</b></DictionaryLink>. <GlossaryTerm styled={true} term={"tag"}><i>Tags</i></GlossaryTerm> are used to find the <DictionaryLink styled={true} term={"catch"}><b>catch</b></DictionaryLink> to which a <DictionaryLink styled={true} term={"throw"}><b>throw</b></DictionaryLink> is transferring control. (catch ’foo <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>) catches a (throw ’foo <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>) but not a (throw ’bar <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>). 



The order of execution of <DictionaryLink styled={true} term={"catch"}><b>catch</b></DictionaryLink> follows: 



1\. <GlossaryTerm styled={true} term={"tag"}><i>Tag</i></GlossaryTerm> is evaluated. It serves as the name of the <DictionaryLink styled={true} term={"catch"}><b>catch</b></DictionaryLink>. 



2\. <GlossaryTerm styled={true} term={"form"}><i>Forms</i></GlossaryTerm> are then evaluated as an implicit <DictionaryLink styled={true} term={"progn"}><b>progn</b></DictionaryLink>, and the results of the last <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> are returned unless a <DictionaryLink styled={true} term={"throw"}><b>throw</b></DictionaryLink> occurs. 



3\. If a <DictionaryLink styled={true} term={"throw"}><b>throw</b></DictionaryLink> occurs during the execution of one of the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>, control is transferred to the <DictionaryLink styled={true} term={"catch"}><b>catch</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> whose <GlossaryTerm styled={true} term={"tag"}><i>tag</i></GlossaryTerm> is <DictionaryLink styled={true} term={"eq"}><b>eq</b></DictionaryLink> to the tag argument of the <DictionaryLink styled={true} term={"throw"}><b>throw</b></DictionaryLink> and which is the most recently established <DictionaryLink styled={true} term={"catch"}><b>catch</b></DictionaryLink> with that <GlossaryTerm styled={true} term={"tag"}><i>tag</i></GlossaryTerm>. No further evaluation of <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> occurs. 



4\. The *tag established* by <DictionaryLink styled={true} term={"catch"}><b>catch</b></DictionaryLink> is *disestablished* just before the results are returned. 



If during the execution of one of the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>, a <DictionaryLink styled={true} term={"throw"}><b>throw</b></DictionaryLink> is executed whose tag is <DictionaryLink styled={true} term={"eq"}><b>eq</b></DictionaryLink> to the <DictionaryLink styled={true} term={"catch"}><b>catch</b></DictionaryLink> tag, then the values specified by the <DictionaryLink styled={true} term={"throw"}><b>throw</b></DictionaryLink> are returned as the result of the dynamically most recently established <DictionaryLink styled={true} term={"catch"}><b>catch</b></DictionaryLink> form with that tag. 



The mechanism for <DictionaryLink styled={true} term={"catch"}><b>catch</b></DictionaryLink> and <DictionaryLink styled={true} term={"throw"}><b>throw</b></DictionaryLink> works even if <DictionaryLink styled={true} term={"throw"}><b>throw</b></DictionaryLink> is not within the lexical scope of <DictionaryLink styled={true} term={"catch"}><b>catch</b></DictionaryLink>. <DictionaryLink styled={true} term={"throw"}><b>throw</b></DictionaryLink> must occur within the *dynamic extent* of the <GlossaryTerm styled={true} term={"evaluation"}><i>evaluation</i></GlossaryTerm> of the body of a <DictionaryLink styled={true} term={"catch"}><b>catch</b></DictionaryLink> with a corresponding <GlossaryTerm styled={true} term={"tag"}><i>tag</i></GlossaryTerm>. 



**Examples:**
```lisp

(catch ’dummy-tag 1 2 (throw ’dummy-tag 3) 4) *→* 3 
(catch ’dummy-tag 1 2 3 4) *→* 4 
(defun throw-back (tag) (throw tag t)) *→* THROW-BACK 
(catch ’dummy-tag (throw-back ’dummy-tag) 2) *→* T 
Data and Control 


;; Contrast behavior of this example with corresponding example of BLOCK. 
(catch ’c 
  (flet ((c1 () (throw ’c 1))) 
    (catch ’c (c1) (print ’unreachable)) 
    2)) *→* 2 

```
**Exceptional Situations:** 



An error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"control-error"}><b>control-error</b></DictionaryLink> is signaled if <DictionaryLink styled={true} term={"throw"}><b>throw</b></DictionaryLink> is done when there is no suitable <DictionaryLink styled={true} term={"catch"}><b>catch</b></DictionaryLink> <GlossaryTerm styled={true} term={"tag"}><i>tag</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink styled={true} term={"throw"}><b>throw</b></DictionaryLink>, Section 3.1 (Evaluation) 



**Notes:** 



It is customary for <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> to be used as <GlossaryTerm styled={true} term={"tag"}><i>tags</i></GlossaryTerm>, but any <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is permitted. However, numbers should not be used because the comparison is done using <DictionaryLink styled={true} term={"eq"}><b>eq</b></DictionaryLink>. 



<DictionaryLink styled={true} term={"catch"}><b>catch</b></DictionaryLink> differs from <DictionaryLink styled={true} term={"block"}><b>block</b></DictionaryLink> in that <DictionaryLink styled={true} term={"catch"}><b>catch</b></DictionaryLink> tags have dynamic <GlossaryTerm styled={true} term={"scope"}><i>scope</i></GlossaryTerm> while <DictionaryLink styled={true} term={"block"}><b>block</b></DictionaryLink> names have *lexical scope*. 




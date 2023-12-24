**print-unreadable-object** <ClLinks styled={true} term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"print-unreadable-object"}><b>print-unreadable-object</b></ClLinks> (*object stream* &amp;key *type identity*) *\{form\}*\* → <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> 



**Arguments and Values:** 



<ClLinks styled={true} term={"object"}><i>object</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>; evaluated. 



<ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>—a *stream designator* ; evaluated. 



<ClLinks styled={true} term={"type"}><i>type</i></ClLinks>—a *generalized boolean*; evaluated. 







 



 



*identity*—a *generalized boolean*; evaluated. 



<ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>—an *implicit progn*. 



**Description:** 



Outputs a printed representation of <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> on <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>, beginning with “#&lt;” and ending with “&gt;”. Everything output to <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> by the body <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> is enclosed in the the angle brackets. If <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, the output from <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> is preceded by a brief description of the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>’s <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> and a space character. If *identity* is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, the output from <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> is followed by a space character and a representation of the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>’s identity, typically a storage address. 



If either <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> or *identity* is not supplied, its value is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. It is valid to omit the body <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>. If <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> and *identity* are both true and there are no body <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>, only one space character separates the type and the identity. 



**Examples:**
```lisp

;; Note that in this example, the precise form of the output ;; is *implementation-dependent*. 
(defmethod print-object ((obj airplane) stream) 
    (print-unreadable-object (obj stream :type t :identity t) 
      (princ (tail-number obj) stream))) 
(prin1-to-string my-airplane) 
→ "#<Airplane NW0773 36000123135>" 
<i><sup>or</sup>→</i> "#<FAA:AIRPLANE NW0773 17>" 

```
**Exceptional Situations:** 



If <ClLinks styled={true} term={"print-readably"}><b>\*print-readably\*</b></ClLinks> is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, <ClLinks styled={true} term={"print-unreadable-object"}><b>print-unreadable-object</b></ClLinks> signals an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"print-not-readable"}><b>print-not-readable</b></ClLinks> without printing anything. 




**print-unreadable-object** <GlossaryTerm styled={true} term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"print-unreadable-object"}><b>print-unreadable-object</b></DictionaryLink> (*object stream* &amp;key *type identity*) *\{form\}*\* *→* <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>; evaluated. 



<GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>—a *stream designator* ; evaluated. 



<GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>—a *generalized boolean*; evaluated. 







 



 



*identity*—a *generalized boolean*; evaluated. 



<GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>—an *implicit progn*. 



**Description:** 



Outputs a printed representation of <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> on <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>, beginning with “#&lt;” and ending with “&gt;”. Everything output to <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> by the body <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> is enclosed in the the angle brackets. If <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, the output from <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> is preceded by a brief description of the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>’s <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> and a space character. If *identity* is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, the output from <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> is followed by a space character and a representation of the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>’s identity, typically a storage address. 



If either <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> or *identity* is not supplied, its value is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. It is valid to omit the body <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>. If <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> and *identity* are both true and there are no body <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>, only one space character separates the type and the identity. 



**Examples:**
```lisp

;; Note that in this example, the precise form of the output ;; is *implementation-dependent*. 
(defmethod print-object ((obj airplane) stream) 
    (print-unreadable-object (obj stream :type t :identity t) 
      (princ (tail-number obj) stream))) 
(prin1-to-string my-airplane) 
*→* "#<Airplane NW0773 36000123135>" 
<i><sup>or</sup>→</i> "#<FAA:AIRPLANE NW0773 17>" 

```
**Exceptional Situations:** 



If <DictionaryLink styled={true} term={"print-readably"}><b>\*print-readably\*</b></DictionaryLink> is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, <DictionaryLink styled={true} term={"print-unreadable-object"}><b>print-unreadable-object</b></DictionaryLink> signals an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"print-not-readable"}><b>print-not-readable</b></DictionaryLink> without printing anything. 




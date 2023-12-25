**with-input-from-string** <GlossaryTerm styled={true} term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"with-input-from-string"}><b>with-input-from-string</b></DictionaryLink> (*var string* &amp;key *index start end*) *\{declaration\}*\* <GlossaryTerm styled={true} term={"form"}><i>\{form\}</i></GlossaryTerm>\* 



*→ \{result\}*\* 



**Arguments and Values:** 



*var*—a *variable name*. 



<GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>; evaluated to produce a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>. 



*index*—a <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>. 



*start*, *end*—*bounding index designators* of <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>. The defaults for *start* and *end* are 0 and <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, respectively. 



<GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm>—a <DictionaryLink styled={true} term={"declare"}><b>declare</b></DictionaryLink> <GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm>; not evaluated. 



<GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>—an *implicit progn*. 



*result*—the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> returned by the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>. 



**Description:** 



Creates an *input string stream*, provides an opportunity to perform operations on the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> (returning zero or more <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm>), and then closes the *string stream*. 







 



 



<GlossaryTerm styled={true} term={"string"}><i>String</i></GlossaryTerm> is evaluated first, and *var* is bound to a character *input string stream* that supplies <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> from the subsequence of the resulting *string bounded* by *start* and *end*. The body is executed as an *implicit progn*. 



The *input string stream* is automatically closed on exit from <DictionaryLink styled={true} term={"with-input-from-string"}><b>with-input-from-string</b></DictionaryLink>, no matter whether the exit is normal or abnormal. The *input string stream* to which the *variable var* is <GlossaryTerm styled={true} term={"bound"}><i>bound</i></GlossaryTerm> has *dynamic extent*; its <GlossaryTerm styled={true} term={"extent"}><i>extent</i></GlossaryTerm> ends when the <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> is exited. 



The *index* is a pointer within the <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> to be advanced. If <DictionaryLink styled={true} term={"with-input-from-string"}><b>with-input-from-string</b></DictionaryLink> is exited normally, then *index* will have as its <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> the index into the <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> indicating the first character not read which is (length <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>) if all characters were used. The place specified by *index* is not updated as reading progresses, but only at the end of the operation. 



*start* and *index* may both specify the same variable, which is a pointer within the <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> to be advanced, perhaps repeatedly by some containing loop. 



The consequences are undefined if an attempt is made to <GlossaryTerm styled={true} term={"assign"}><i>assign</i></GlossaryTerm> the *variable var*. 



**Examples:**
```lisp

(with-input-from-string (s "XXX1 2 3 4xxx" 
			   :index ind 
			   :start 3 :end 10) 
  (+ (read s) (read s) (read s))) *→* 6 
ind *→* 9 
(with-input-from-string (s "Animal Crackers" :index j :start 6) 
  (read s)) *→* CRACKERS 
The variable j is set to 15. 

```
**Side Effects:** 



The <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> named by *index*, if any, is modified. 



**See Also:** 



<DictionaryLink styled={true} term={"make-string-input-stream"}><b>make-string-input-stream</b></DictionaryLink>, Section 3.6 (Traversal Rules and Side Effects) 




**with-input-from-string** <ClLinks  term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"with-input-from-string"}><b>with-input-from-string</b></DictionaryLink> (*var string* &amp;key *index start end*) *\{declaration\}*\* <ClLinks  term={"form"}><i>\{form\}</i></ClLinks>\* 



→ \{result\}\* 



**Arguments and Values:** 



*var*—a *variable name*. 



<ClLinks  term={"string"}><i>string</i></ClLinks>—a <ClLinks  term={"form"}><i>form</i></ClLinks>; evaluated to produce a <ClLinks  term={"string"}><i>string</i></ClLinks>. 



*index*—a <ClLinks  term={"place"}><i>place</i></ClLinks>. 



*start*, *end*—<GlossaryTerm styled={true} term={"bounding index designator"}><i>bounding index designators</i></GlossaryTerm> of <ClLinks  term={"string"}><i>string</i></ClLinks>. The defaults for *start* and *end* are 0 and <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>, respectively. 



<ClLinks  term={"declaration"}><i>declaration</i></ClLinks>—a <DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink> <ClLinks  term={"expression"}><i>expression</i></ClLinks>; not evaluated. 



<ClLinks  term={"form"}><i>forms</i></ClLinks>—an <GlossaryTerm styled={true} term={"implicit progn"}><i>implicit progn</i></GlossaryTerm>. 



*result*—the <ClLinks  term={"value"}><i>values</i></ClLinks> returned by the <ClLinks  term={"form"}><i>forms</i></ClLinks>. 



**Description:** 



Creates an *input string stream*, provides an opportunity to perform operations on the <ClLinks  term={"stream"}><i>stream</i></ClLinks> (returning zero or more <ClLinks  term={"value"}><i>values</i></ClLinks>), and then closes the <GlossaryTerm styled={true} term={"string stream"}><i>string stream</i></GlossaryTerm>. 







 



 



<ClLinks  term={"string"}><i>String</i></ClLinks> is evaluated first, and *var* is bound to a character *input string stream* that supplies <ClLinks  term={"character"}><i>characters</i></ClLinks> from the subsequence of the resulting *string bounded* by *start* and *end*. The body is executed as an <GlossaryTerm styled={true} term={"implicit progn"}><i>implicit progn</i></GlossaryTerm>. 



The *input string stream* is automatically closed on exit from <DictionaryLink  term={"with-input-from-string"}><b>with-input-from-string</b></DictionaryLink>, no matter whether the exit is normal or abnormal. The *input string stream* to which the *variable var* is <ClLinks  term={"bound"}><i>bound</i></ClLinks> has <GlossaryTerm styled={true} term={"dynamic extent"}><i>dynamic extent</i></GlossaryTerm>; its <ClLinks  term={"extent"}><i>extent</i></ClLinks> ends when the <ClLinks  term={"form"}><i>form</i></ClLinks> is exited. 



The *index* is a pointer within the <ClLinks  term={"string"}><i>string</i></ClLinks> to be advanced. If <DictionaryLink  term={"with-input-from-string"}><b>with-input-from-string</b></DictionaryLink> is exited normally, then *index* will have as its <ClLinks  term={"value"}><i>value</i></ClLinks> the index into the <ClLinks  term={"string"}><i>string</i></ClLinks> indicating the first character not read which is (length <ClLinks  term={"string"}><i>string</i></ClLinks>) if all characters were used. The place specified by *index* is not updated as reading progresses, but only at the end of the operation. 



*start* and *index* may both specify the same variable, which is a pointer within the <ClLinks  term={"string"}><i>string</i></ClLinks> to be advanced, perhaps repeatedly by some containing loop. 



The consequences are undefined if an attempt is made to <ClLinks  term={"assign"}><i>assign</i></ClLinks> the *variable var*. 



**Examples:**
```lisp
(with-input-from-string (s "XXX1 2 3 4xxx" 
			   :index ind 
			   :start 3 :end 10) 
  (+ (read s) (read s) (read s))) → 6 
ind → 9 
(with-input-from-string (s "Animal Crackers" :index j :start 6) 
  (read s)) → CRACKERS 
The variable j is set to 15. 
```
**Side Effects:** 



The <ClLinks  term={"value"}><i>value</i></ClLinks> of the <ClLinks  term={"place"}><i>place</i></ClLinks> named by *index*, if any, is modified. 



**See Also:** 



<DictionaryLink  term={"make-string-input-stream"}><b>make-string-input-stream</b></DictionaryLink>, Section 3.6 (Traversal Rules and Side Effects) 




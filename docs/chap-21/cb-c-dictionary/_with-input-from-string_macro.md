**with-input-from-string** <GlossaryTerm  term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"with-input-from-string"}><b>with-input-from-string</b></DictionaryLink> (*var string* &amp;key *index start end*) *\{declaration\}*\* <GlossaryTerm  term={"form"}><i>\{form\}</i></GlossaryTerm>\* 



→ \{result\}\* 



**Arguments and Values:** 



*var*—a *variable name*. 



<GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>—a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>; evaluated to produce a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>. 



*index*—a <GlossaryTerm  term={"place"}><i>place</i></GlossaryTerm>. 



*start*, *end*—<GlossaryTerm styled={true} term={"bounding index designator"}><i>bounding index designators</i></GlossaryTerm> of <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>. The defaults for *start* and *end* are 0 and <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>, respectively. 



<GlossaryTerm  term={"declaration"}><i>declaration</i></GlossaryTerm>—a <DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink> <GlossaryTerm  term={"expression"}><i>expression</i></GlossaryTerm>; not evaluated. 



<GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"implicit progn"}><i>implicit progn</i></GlossaryTerm>. 



*result*—the <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> returned by the <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm>. 



**Description:** 



Creates an *input string stream*, provides an opportunity to perform operations on the <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> (returning zero or more <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm>), and then closes the <GlossaryTerm styled={true} term={"string stream"}><i>string stream</i></GlossaryTerm>. 







 



 



<GlossaryTerm  term={"string"}><i>String</i></GlossaryTerm> is evaluated first, and *var* is bound to a character *input string stream* that supplies <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm> from the subsequence of the resulting *string bounded* by *start* and *end*. The body is executed as an <GlossaryTerm styled={true} term={"implicit progn"}><i>implicit progn</i></GlossaryTerm>. 



The *input string stream* is automatically closed on exit from <DictionaryLink  term={"with-input-from-string"}><b>with-input-from-string</b></DictionaryLink>, no matter whether the exit is normal or abnormal. The *input string stream* to which the *variable var* is <GlossaryTerm  term={"bound"}><i>bound</i></GlossaryTerm> has <GlossaryTerm styled={true} term={"dynamic extent"}><i>dynamic extent</i></GlossaryTerm>; its <GlossaryTerm  term={"extent"}><i>extent</i></GlossaryTerm> ends when the <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> is exited. 



The *index* is a pointer within the <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> to be advanced. If <DictionaryLink  term={"with-input-from-string"}><b>with-input-from-string</b></DictionaryLink> is exited normally, then *index* will have as its <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> the index into the <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> indicating the first character not read which is (length <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>) if all characters were used. The place specified by *index* is not updated as reading progresses, but only at the end of the operation. 



*start* and *index* may both specify the same variable, which is a pointer within the <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> to be advanced, perhaps repeatedly by some containing loop. 



The consequences are undefined if an attempt is made to <GlossaryTerm  term={"assign"}><i>assign</i></GlossaryTerm> the *variable var*. 



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



The <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of the <GlossaryTerm  term={"place"}><i>place</i></GlossaryTerm> named by *index*, if any, is modified. 



**See Also:** 



<DictionaryLink  term={"make-string-input-stream"}><b>make-string-input-stream</b></DictionaryLink>, Section 3.6 (Traversal Rules and Side Effects) 




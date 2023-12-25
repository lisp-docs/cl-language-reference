**with-input-from-string** <ClLinks styled={true} term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"with-input-from-string"}><b>with-input-from-string</b></ClLinks> (*var string* &amp;key *index start end*) *\{declaration\}*\* <ClLinks styled={true} term={"form"}><i>\{form\}</i></ClLinks>\* 



→ \{result\}\* 



**Arguments and Values:** 



*var*—a *variable name*. 



<ClLinks styled={true} term={"string"}><i>string</i></ClLinks>—a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>; evaluated to produce a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>. 



*index*—a <ClLinks styled={true} term={"place"}><i>place</i></ClLinks>. 



*start*, *end*—*bounding index designators* of <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>. The defaults for *start* and *end* are 0 and <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, respectively. 



<ClLinks styled={true} term={"declaration"}><i>declaration</i></ClLinks>—a <ClLinks styled={true} term={"declare"}><b>declare</b></ClLinks> <ClLinks styled={true} term={"expression"}><i>expression</i></ClLinks>; not evaluated. 



<ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>—an *implicit progn*. 



*result*—the <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> returned by the <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>. 



**Description:** 



Creates an *input string stream*, provides an opportunity to perform operations on the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> (returning zero or more <ClLinks styled={true} term={"value"}><i>values</i></ClLinks>), and then closes the *string stream*. 







 



 



<ClLinks styled={true} term={"string"}><i>String</i></ClLinks> is evaluated first, and *var* is bound to a character *input string stream* that supplies <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks> from the subsequence of the resulting *string bounded* by *start* and *end*. The body is executed as an *implicit progn*. 



The *input string stream* is automatically closed on exit from <ClLinks styled={true} term={"with-input-from-string"}><b>with-input-from-string</b></ClLinks>, no matter whether the exit is normal or abnormal. The *input string stream* to which the *variable var* is <ClLinks styled={true} term={"bound"}><i>bound</i></ClLinks> has *dynamic extent*; its <ClLinks styled={true} term={"extent"}><i>extent</i></ClLinks> ends when the <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> is exited. 



The *index* is a pointer within the <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> to be advanced. If <ClLinks styled={true} term={"with-input-from-string"}><b>with-input-from-string</b></ClLinks> is exited normally, then *index* will have as its <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> the index into the <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> indicating the first character not read which is (length <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>) if all characters were used. The place specified by *index* is not updated as reading progresses, but only at the end of the operation. 



*start* and *index* may both specify the same variable, which is a pointer within the <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> to be advanced, perhaps repeatedly by some containing loop. 



The consequences are undefined if an attempt is made to <ClLinks styled={true} term={"assign"}><i>assign</i></ClLinks> the *variable var*. 



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



The <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of the <ClLinks styled={true} term={"place"}><i>place</i></ClLinks> named by *index*, if any, is modified. 



**See Also:** 



<ClLinks styled={true} term={"make-string-input-stream"}><b>make-string-input-stream</b></ClLinks>, Section 3.6 (Traversal Rules and Side Effects) 




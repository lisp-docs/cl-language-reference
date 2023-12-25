*∗<ClLinks styled={true} term={"print-circle"}><b>*print-circle*</b></ClLinks>∗ Variable* 



**Value Type:** 



a *generalized boolean*. 



**Initial Value:** 



<ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 



**Description:** 



Controls the attempt to detect circularity and sharing in an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> being printed. 



If <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>, the printing process merely proceeds by recursive descent without attempting to detect circularity and sharing. 



If <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, the printer will endeavor to detect cycles and sharing in the structure to be printed, and to use #*n*= and #*n*# syntax to indicate the circularities or shared components. 



If <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, a user-defined <ClLinks styled={true} term={"print-object"}><b>print-object</b></ClLinks> <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> can print <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> to the supplied <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> using <ClLinks styled={true} term={"write"}><b>write</b></ClLinks>, <ClLinks styled={true} term={"prin1"}><b>prin1</b></ClLinks>, <ClLinks styled={true} term={"princ"}><b>princ</b></ClLinks>, or <ClLinks styled={true} term={"format"}><b>format</b></ClLinks> and expect circularities and sharing to be detected and printed using the 







 



 



#*n*# syntax. If a user-defined **print-object** *method* prints to a *stream* other than the one that was supplied, then circularity detection starts over for that *stream*. 



Note that implementations should not use #*n*# notation when the *Lisp reader* would automatically assure sharing without it (*e.g.*, as happens with *interned symbols*). 



**Examples:**
```lisp
(let ((a (list 1 2 3))) 
  (setf (cdddr a) a) 
  (let ((\*print-circle\* t)) 
    (write a) 
    :done)) 
▷ #1=(1 2 3 . #1#) 
→ :DONE 
```
**See Also:** 



<ClLinks styled={true} term={"write"}><b>write</b></ClLinks> 



**Notes:** 



An attempt to print a circular structure with <ClLinks styled={true} term={"print-circle"}><b>\*print-circle\*</b></ClLinks> set to <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> may lead to looping behavior and failure to terminate. 




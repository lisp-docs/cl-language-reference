*∗<DictionaryLink styled={true} term={"print-circle"}><b>*print-circle*</b></DictionaryLink>∗ Variable* 



**Value Type:** 



a *generalized boolean*. 



**Initial Value:** 



<GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 



**Description:** 



Controls the attempt to detect circularity and sharing in an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> being printed. 



If <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>, the printing process merely proceeds by recursive descent without attempting to detect circularity and sharing. 



If <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, the printer will endeavor to detect cycles and sharing in the structure to be printed, and to use #*n*= and #*n*# syntax to indicate the circularities or shared components. 



If <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, a user-defined <DictionaryLink styled={true} term={"print-object"}><b>print-object</b></DictionaryLink> <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> can print <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> to the supplied <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> using <DictionaryLink styled={true} term={"write"}><b>write</b></DictionaryLink>, <DictionaryLink styled={true} term={"prin1"}><b>prin1</b></DictionaryLink>, <DictionaryLink styled={true} term={"princ"}><b>princ</b></DictionaryLink>, or <DictionaryLink styled={true} term={"format"}><b>format</b></DictionaryLink> and expect circularities and sharing to be detected and printed using the 







 



 



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
*→* :DONE 

```
**See Also:** 



<DictionaryLink styled={true} term={"write"}><b>write</b></DictionaryLink> 



**Notes:** 



An attempt to print a circular structure with <DictionaryLink styled={true} term={"print-circle"}><b>\*print-circle\*</b></DictionaryLink> set to <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> may lead to looping behavior and failure to terminate. 




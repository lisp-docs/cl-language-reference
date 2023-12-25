**describe-object** *Standard Generic Function* 



**Syntax:** 



<ClLinks styled={true} term={"describe-object"}><b>describe-object</b></ClLinks> *object stream → implementation-dependent* 



**Method Signatures:** 



<ClLinks styled={true} term={"describe-object"}><b>describe-object</b></ClLinks> *(object standard-object) stream* 



**Arguments and Values:** 



<ClLinks styled={true} term={"object"}><i>object</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



<ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>—a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>. 



**Description:** 



The generic function <ClLinks styled={true} term={"describe-object"}><b>describe-object</b></ClLinks> prints a description of <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> to a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>. <ClLinks styled={true} term={"describe-object"}><b>describe-object</b></ClLinks> is called by <ClLinks styled={true} term={"describe"}><b>describe</b></ClLinks>; it must not be called by the user. 



Each implementation is required to provide a <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> on the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> <ClLinks styled={true} term={"standard-object"}><b>standard-object</b></ClLinks> and <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> on enough other *classes* so as to ensure that there is always an applicable <ClLinks styled={true} term={"method"}><i>method</i></ClLinks>. Implementations are free to add <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> for other *classes*. Users can write <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> for <ClLinks styled={true} term={"describe-object"}><b>describe-object</b></ClLinks> for their own *classes* if they do not wish to inherit an implementation-supplied <ClLinks styled={true} term={"method"}><i>method</i></ClLinks>. 



<ClLinks styled={true} term={"method"}><i>Methods</i></ClLinks> on <ClLinks styled={true} term={"describe-object"}><b>describe-object</b></ClLinks> can recursively call <ClLinks styled={true} term={"describe"}><b>describe</b></ClLinks>. Indentation, depth limits, and circularity detection are all taken care of automatically, provided that each <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> handles exactly one level of structure and calls <ClLinks styled={true} term={"describe"}><b>describe</b></ClLinks> recursively if there are more structural levels. The consequences are undefined if this rule is not obeyed. 







 



 



In some implementations the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> argument passed to a <ClLinks styled={true} term={"describe-object"}><b>describe-object</b></ClLinks> method is not the original <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>, but is an intermediate <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> that implements parts of <ClLinks styled={true} term={"describe"}><b>describe</b></ClLinks>. <ClLinks styled={true} term={"method"}><i>Methods</i></ClLinks> should therefore not depend on the identity of this <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>. 



**Examples:**
```lisp
(defclass spaceship () 
  ((captain :initarg :captain :accessor spaceship-captain) 
   (serial# :initarg :serial-number :accessor spaceship-serial-number))) 
(defclass federation-starship (spaceship) ()) 
(defmethod describe-object ((s spaceship) stream) 
  (with-slots (captain serial#) s 
    (format stream "~&~S is a spaceship of type ~S,~ 
~%with ~A at the helm ~ 
and with serial number ~D.~%" 
	    s (type-of s) captain serial#))) 
(make-instance ’federation-starship 
		:captain "Rachel Garrett" 
		:serial-number "NCC-1701-C") 
→ #<FEDERATION-STARSHIP 26312465> 
(describe \*) 
▷ #<FEDERATION-STARSHIP 26312465> is a spaceship of type FEDERATION-STARSHIP, ▷ with Rachel Garrett at the helm and with serial number NCC-1701-C. 
*→ ⟨no values⟩* 
```
**See Also:** 



<ClLinks styled={true} term={"describe"}><b>describe</b></ClLinks> 



**Notes:** 



The same implementation techniques that are applicable to <ClLinks styled={true} term={"print-object"}><b>print-object</b></ClLinks> are applicable to <ClLinks styled={true} term={"describe-object"}><b>describe-object</b></ClLinks>. 



The reason for making the return values for <ClLinks styled={true} term={"describe-object"}><b>describe-object</b></ClLinks> unspecified is to avoid forcing users to include explicit (values) in all of their <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks>. <ClLinks styled={true} term={"describe"}><b>describe</b></ClLinks> takes care of that. 







 



 



**trace, untrace** 




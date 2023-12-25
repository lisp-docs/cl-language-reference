**describe-object** *Standard Generic Function* 



**Syntax:** 



<DictionaryLink styled={true} term={"describe-object"}><b>describe-object</b></DictionaryLink> *object stream → implementation-dependent* 



**Method Signatures:** 



<DictionaryLink styled={true} term={"describe-object"}><b>describe-object</b></DictionaryLink> *(object standard-object) stream* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. 



**Description:** 



The generic function <DictionaryLink styled={true} term={"describe-object"}><b>describe-object</b></DictionaryLink> prints a description of <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> to a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. <DictionaryLink styled={true} term={"describe-object"}><b>describe-object</b></DictionaryLink> is called by <DictionaryLink styled={true} term={"describe"}><b>describe</b></DictionaryLink>; it must not be called by the user. 



Each implementation is required to provide a <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> on the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink styled={true} term={"standard-object"}><b>standard-object</b></DictionaryLink> and <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> on enough other *classes* so as to ensure that there is always an applicable <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm>. Implementations are free to add <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> for other *classes*. Users can write <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> for <DictionaryLink styled={true} term={"describe-object"}><b>describe-object</b></DictionaryLink> for their own *classes* if they do not wish to inherit an implementation-supplied <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"method"}><i>Methods</i></GlossaryTerm> on <DictionaryLink styled={true} term={"describe-object"}><b>describe-object</b></DictionaryLink> can recursively call <DictionaryLink styled={true} term={"describe"}><b>describe</b></DictionaryLink>. Indentation, depth limits, and circularity detection are all taken care of automatically, provided that each <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> handles exactly one level of structure and calls <DictionaryLink styled={true} term={"describe"}><b>describe</b></DictionaryLink> recursively if there are more structural levels. The consequences are undefined if this rule is not obeyed. 







 



 



In some implementations the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> argument passed to a <DictionaryLink styled={true} term={"describe-object"}><b>describe-object</b></DictionaryLink> method is not the original <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>, but is an intermediate <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> that implements parts of <DictionaryLink styled={true} term={"describe"}><b>describe</b></DictionaryLink>. <GlossaryTerm styled={true} term={"method"}><i>Methods</i></GlossaryTerm> should therefore not depend on the identity of this <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. 



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
*→* #<FEDERATION-STARSHIP 26312465> 
(describe \*) 
▷ #<FEDERATION-STARSHIP 26312465> is a spaceship of type FEDERATION-STARSHIP, ▷ with Rachel Garrett at the helm and with serial number NCC-1701-C. 
*→ hno valuesi* 

```
**See Also:** 



<DictionaryLink styled={true} term={"describe"}><b>describe</b></DictionaryLink> 



**Notes:** 



The same implementation techniques that are applicable to <DictionaryLink styled={true} term={"print-object"}><b>print-object</b></DictionaryLink> are applicable to <DictionaryLink styled={true} term={"describe-object"}><b>describe-object</b></DictionaryLink>. 



The reason for making the return values for <DictionaryLink styled={true} term={"describe-object"}><b>describe-object</b></DictionaryLink> unspecified is to avoid forcing users to include explicit (values) in all of their <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm>. <DictionaryLink styled={true} term={"describe"}><b>describe</b></DictionaryLink> takes care of that. 







 



 



**trace, untrace** 




**describe-object** *Standard Generic Function* 



**Syntax:** 



**describe-object** *object stream → implementation-dependent* 



**Method Signatures:** 



**describe-object** *(object standard-object) stream* 



**Arguments and Values:** 



*object*—an *object*. 



*stream*—a *stream*. 



**Description:** 



The generic function **describe-object** prints a description of *object* to a *stream*. **describe-object** is called by **describe**; it must not be called by the user. 



Each implementation is required to provide a *method* on the *class* **standard-object** and *methods* on enough other *classes* so as to ensure that there is always an applicable *method*. Implementations are free to add *methods* for other *classes*. Users can write *methods* for **describe-object** for their own *classes* if they do not wish to inherit an implementation-supplied *method*. 



*Methods* on **describe-object** can recursively call **describe**. Indentation, depth limits, and circularity detection are all taken care of automatically, provided that each *method* handles exactly one level of structure and calls **describe** recursively if there are more structural levels. The consequences are undefined if this rule is not obeyed. 







 



 



In some implementations the *stream* argument passed to a **describe-object** method is not the original *stream*, but is an intermediate *stream* that implements parts of **describe**. *Methods* should therefore not depend on the identity of this *stream*. 



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



**describe** 



**Notes:** 



The same implementation techniques that are applicable to **print-object** are applicable to **describe-object**. 



The reason for making the return values for **describe-object** unspecified is to avoid forcing users to include explicit (values) in all of their *methods*. **describe** takes care of that. 







 



 



**trace, untrace** 




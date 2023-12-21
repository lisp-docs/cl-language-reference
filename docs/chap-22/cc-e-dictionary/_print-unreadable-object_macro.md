**print-unreadable-object** *Macro* 



**Syntax:** 



**print-unreadable-object** (*object stream* &amp;key *type identity*) *\{form\}*\* → **nil** 



**Arguments and Values:** 



*object*—an *object*; evaluated. 



*stream*—a *stream designator* ; evaluated. 



*type*—a *generalized boolean*; evaluated. 







 



 



*identity*—a *generalized boolean*; evaluated. 



*forms*—an *implicit progn*. 



**Description:** 



Outputs a printed representation of *object* on *stream*, beginning with “#&lt;” and ending with “&gt;”. Everything output to *stream* by the body *forms* is enclosed in the the angle brackets. If *type* is *true*, the output from *forms* is preceded by a brief description of the *object*’s *type* and a space character. If *identity* is *true*, the output from *forms* is followed by a space character and a representation of the *object*’s identity, typically a storage address. 



If either *type* or *identity* is not supplied, its value is *false*. It is valid to omit the body *forms*. If *type* and *identity* are both true and there are no body *forms*, only one space character separates the type and the identity. 



**Examples:**
```lisp

;; Note that in this example, the precise form of the output ;; is *implementation-dependent*. 
(defmethod print-object ((obj airplane) stream) 
    (print-unreadable-object (obj stream :type t :identity t) 
      (princ (tail-number obj) stream))) 
(prin1-to-string my-airplane) 
→ "#<Airplane NW0773 36000123135>" 
<i><sup>or</sup>→</i> "#<FAA:AIRPLANE NW0773 17>" 

```
**Exceptional Situations:** 



If **\*print-readably\*** is *true*, **print-unreadable-object** signals an error of *type* **print-not-readable** without printing anything. 




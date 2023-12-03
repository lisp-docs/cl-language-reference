**print-unreadable-object** *Macro* 

**Syntax:** 

**print-unreadable-object** (*object stream* &key *type identity*) *&#123;form&#125;*\* *→* **nil** 

**Arguments and Values:** 

*object*—an *object*; evaluated. 

*stream*—a *stream designator* ; evaluated. 

*type*—a *generalized boolean*; evaluated. 



 

 

*identity*—a *generalized boolean*; evaluated. 

*forms*—an *implicit progn*. 

**Description:** 

Outputs a printed representation of *object* on *stream*, beginning with “#&#60;” and ending with “&#62;”. Everything output to *stream* by the body *forms* is enclosed in the the angle brackets. If *type* is *true*, the output from *forms* is preceded by a brief description of the *object*’s *type* and a space character. If *identity* is *true*, the output from *forms* is followed by a space character and a representation of the *object*’s identity, typically a storage address. 

If either *type* or *identity* is not supplied, its value is *false*. It is valid to omit the body *forms*. If *type* and *identity* are both true and there are no body *forms*, only one space character separates the type and the identity. 

**Examples:** 

;; Note that in this example, the precise form of the output ;; is *implementation-dependent*. 

(defmethod print-object ((obj airplane) stream) 

(print-unreadable-object (obj stream :type t :identity t) 

(princ (tail-number obj) stream))) 

(prin1-to-string my-airplane) 

*→* "#&#60;Airplane NW0773 36000123135&#62;" 

&#60;i&#62;&#60;sup&#62;or&#60;/sup&#62;→&#60;/i&#62; "#&#60;FAA:AIRPLANE NW0773 17&#62;" 

**Exceptional Situations:** 

If **\*print-readably\*** is *true*, **print-unreadable-object** signals an error of *type* **print-not-readable** without printing anything. 


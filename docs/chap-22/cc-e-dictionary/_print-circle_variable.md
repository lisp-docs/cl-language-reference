*∗***print-circle***∗ Variable* 



**Value Type:** 



a *generalized boolean*. 



**Initial Value:** 



*false*. 



**Description:** 



Controls the attempt to detect circularity and sharing in an *object* being printed. 



If *false*, the printing process merely proceeds by recursive descent without attempting to detect circularity and sharing. 



If *true*, the printer will endeavor to detect cycles and sharing in the structure to be printed, and to use #*n*= and #*n*# syntax to indicate the circularities or shared components. 



If *true*, a user-defined **print-object** *method* can print *objects* to the supplied *stream* using **write**, **prin1**, **princ**, or **format** and expect circularities and sharing to be detected and printed using the 







 



 



#*n*# syntax. If a user-defined **print-object** *method* prints to a *stream* other than the one that was supplied, then circularity detection starts over for that *stream*. 



Note that implementations should not use #*n*# notation when the *Lisp reader* would automatically assure sharing without it (*e.g.*, as happens with *interned symbols*). 



**Examples:** 



(let ((a (list 1 2 3))) 



(setf (cdddr a) a) 



(let ((\*print-circle\* t)) 



(write a) 



:done)) 



▷ #1=(1 2 3 . #1#) 



→ :DONE 



**See Also:** 



**write** 



**Notes:** 



An attempt to print a circular structure with **\*print-circle\*** set to **nil** may lead to looping behavior and failure to terminate. 




**serious-condition** *Condition Type* 



**Class Precedence List:** 



<ClLinks styled={true} term={"serious-condition"}><b>serious-condition</b></ClLinks>, <ClLinks styled={true} term={"condition"}><b>condition</b></ClLinks>, <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> 



**Description:** 



All <ClLinks styled={true} term={"condition"}><i>conditions</i></ClLinks> serious enough to require interactive intervention if not handled should inherit from the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"serious-condition"}><b>serious-condition</b></ClLinks>. This condition type is provided primarily so that it may be included as a <ClLinks styled={true} term={"superclass"}><i>superclass</i></ClLinks> of other *condition types*; it is not intended to be signaled directly. 



**Notes:** 



Signaling a *serious condition* does not itself force entry into the debugger. However, except in the unusual situation where the programmer can assure that no harm will come from failing to <ClLinks styled={true} term={"handle"}><i>handle</i></ClLinks> 







 



 



a *serious condition*, such a <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> is usually signaled with <ClLinks styled={true} term={"error"}><b>error</b></ClLinks> rather than <ClLinks styled={true} term={"signal"}><b>signal</b></ClLinks> in order to assure that the program does not continue without *handling* the <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks>. (And conversely, it is conventional to use <ClLinks styled={true} term={"signal"}><b>signal</b></ClLinks> rather than <ClLinks styled={true} term={"error"}><b>error</b></ClLinks> to signal conditions which are not *serious conditions*, since normally the failure to handle a non-serious condition is not reason enough for the debugger to be entered.) 




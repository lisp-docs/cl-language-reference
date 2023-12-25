**serious-condition** *Condition Type* 



**Class Precedence List:** 



<DictionaryLink styled={true} term={"serious-condition"}><b>serious-condition</b></DictionaryLink>, <DictionaryLink styled={true} term={"condition"}><b>condition</b></DictionaryLink>, <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



All <GlossaryTerm styled={true} term={"condition"}><i>conditions</i></GlossaryTerm> serious enough to require interactive intervention if not handled should inherit from the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"serious-condition"}><b>serious-condition</b></DictionaryLink>. This condition type is provided primarily so that it may be included as a <GlossaryTerm styled={true} term={"superclass"}><i>superclass</i></GlossaryTerm> of other *condition types*; it is not intended to be signaled directly. 



**Notes:** 



Signaling a *serious condition* does not itself force entry into the debugger. However, except in the unusual situation where the programmer can assure that no harm will come from failing to <GlossaryTerm styled={true} term={"handle"}><i>handle</i></GlossaryTerm> 







 



 



a *serious condition*, such a <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> is usually signaled with <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink> rather than <DictionaryLink styled={true} term={"signal"}><b>signal</b></DictionaryLink> in order to assure that the program does not continue without *handling* the <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm>. (And conversely, it is conventional to use <DictionaryLink styled={true} term={"signal"}><b>signal</b></DictionaryLink> rather than <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink> to signal conditions which are not *serious conditions*, since normally the failure to handle a non-serious condition is not reason enough for the debugger to be entered.) 




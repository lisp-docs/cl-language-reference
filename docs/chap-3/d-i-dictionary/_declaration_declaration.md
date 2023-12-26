**declaration** <GlossaryTerm  term={"declaration"}><i>Declaration</i></GlossaryTerm> 



**Syntax:** 



(declaration <GlossaryTerm  term={"name"}><i>\{name\}</i></GlossaryTerm>\*) 



**Arguments:** 



<GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm>—a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>. 



**Valid Context:** 



<GlossaryTerm  term={"proclamation"}><i>proclamation</i></GlossaryTerm> only 



**Description:** 



Advises the compiler that each <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> is a valid but potentially non-standard declaration name. The purpose of this is to tell one compiler not to issue warnings for declarations meant for another compiler or other program processor. 



**Examples:**
```lisp
(declaim (declaration author target-language target-machine)) 
(declaim (target-language ada)) 
(declaim (target-machine IBM-650)) 
(defun strangep (x) 
  (declare (author "Harry Tweeker")) 
  (member x ’(strange weird odd peculiar))) 
```
**See Also:** 



<DictionaryLink  term={"declaim"}><b>declaim</b></DictionaryLink>, <DictionaryLink  term={"proclaim"}><b>proclaim</b></DictionaryLink> 




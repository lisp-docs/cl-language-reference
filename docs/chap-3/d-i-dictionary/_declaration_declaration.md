**declaration** <GlossaryTerm styled={true} term={"declaration"}><i>Declaration</i></GlossaryTerm> 



**Syntax:** 



(declaration <GlossaryTerm styled={true} term={"name"}><i>\{name\}</i></GlossaryTerm>\*) 



**Arguments:** 



<GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. 



**Valid Context:** 



<GlossaryTerm styled={true} term={"proclamation"}><i>proclamation</i></GlossaryTerm> only 



**Description:** 



Advises the compiler that each <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> is a valid but potentially non-standard declaration name. The purpose of this is to tell one compiler not to issue warnings for declarations meant for another compiler or other program processor. 



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



<DictionaryLink styled={true} term={"declaim"}><b>declaim</b></DictionaryLink>, <DictionaryLink styled={true} term={"proclaim"}><b>proclaim</b></DictionaryLink> 




**declaration** <ClLinks styled={true} term={"declaration"}><i>Declaration</i></ClLinks> 



**Syntax:** 



(declaration <ClLinks styled={true} term={"name"}><i>\{name\}</i></ClLinks>\*) 



**Arguments:** 



<ClLinks styled={true} term={"name"}><i>name</i></ClLinks>—a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. 



**Valid Context:** 



<ClLinks styled={true} term={"proclamation"}><i>proclamation</i></ClLinks> only 



**Description:** 



Advises the compiler that each <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> is a valid but potentially non-standard declaration name. The purpose of this is to tell one compiler not to issue warnings for declarations meant for another compiler or other program processor. 



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



<ClLinks styled={true} term={"declaim"}><b>declaim</b></ClLinks>, <ClLinks styled={true} term={"proclaim"}><b>proclaim</b></ClLinks> 




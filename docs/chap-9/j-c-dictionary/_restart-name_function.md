**restart-name** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"restart-name"}><b>restart-name</b></DictionaryLink> *restart → name* 







 



 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. 



**Description:** 



Returns the name of the <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm>, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> if the <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm> is not named. 



**Examples:**
```lisp

(restart-case 
    (loop for restart in (compute-restarts) 
	  collect (restart-name restart)) 
  (case1 () :report "Return 1." 1) 
  (nil () :report "Return 2." 2) 
  (case3 () :report "Return 3." 3) 
  (case1 () :report "Return 4." 4)) 
*→* (CASE1 NIL CASE3 CASE1 ABORT) 
;; In the example above the restart named ABORT was not created 
;; explicitly, but was implicitly supplied by the system. 

```
**See Also:** 



**compute-restarts find-restart** 




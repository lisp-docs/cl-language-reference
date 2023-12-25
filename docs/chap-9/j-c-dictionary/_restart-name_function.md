**restart-name** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"restart-name"}><b>restart-name</b></ClLinks> *restart → name* 







 



 



**Arguments and Values:** 



<ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks>—a <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks>. 



<ClLinks styled={true} term={"name"}><i>name</i></ClLinks>—a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. 



**Description:** 



Returns the name of the <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks>, or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> if the <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks> is not named. 



**Examples:**
```lisp
(restart-case 
    (loop for restart in (compute-restarts) 
	  collect (restart-name restart)) 
  (case1 () :report "Return 1." 1) 
  (nil () :report "Return 2." 2) 
  (case3 () :report "Return 3." 3) 
  (case1 () :report "Return 4." 4)) 
→ (CASE1 NIL CASE3 CASE1 ABORT) 
;; In the example above the restart named ABORT was not created 
;; explicitly, but was implicitly supplied by the system. 
```
**See Also:** 



**compute-restarts find-restart** 




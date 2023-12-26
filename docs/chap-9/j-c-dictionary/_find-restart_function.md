**find-restart** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"find-restart"}><b>find-restart</b></ClLinks> <ClLinks styled={true} term={"identifier"}><i>identifier</i></ClLinks> &amp;optional <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> 



restart 



**Arguments and Values:** 



<ClLinks styled={true} term={"identifier"}><i>identifier</i></ClLinks>—a *non-nil symbol*, or a <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks>. 



<ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks>—a *condition object*, or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



<ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks>—a <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks> or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



**Description:** 



<ClLinks styled={true} term={"find-restart"}><b>find-restart</b></ClLinks> searches for a particular <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks> in the current <GlossaryTerm styled={true} term={"dynamic environment"}><i>dynamic environment</i></GlossaryTerm>. 



 



 



When <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> is <ClLinks styled={true} term={"non-nil"}><i>non-nil</i></ClLinks>, only those <ClLinks styled={true} term={"restart"}><i>restarts</i></ClLinks> are considered that are either explicitly associated with that <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks>, or not associated with any <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks>; that is, the excluded <ClLinks styled={true} term={"restart"}><i>restarts</i></ClLinks> are those that are associated with a non-empty set of <ClLinks styled={true} term={"condition"}><i>conditions</i></ClLinks> of which the given <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> is not an <ClLinks styled={true} term={"element"}><i>element</i></ClLinks>. If <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, all <ClLinks styled={true} term={"restart"}><i>restarts</i></ClLinks> are considered. 



If <ClLinks styled={true} term={"identifier"}><i>identifier</i></ClLinks> is a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>, then the innermost (most recently established) <GlossaryTerm styled={true} term={"applicable restart"}><i>applicable restart</i></GlossaryTerm> with that <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> is returned. <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> is returned if no such restart is found. 



If <ClLinks styled={true} term={"identifier"}><i>identifier</i></ClLinks> is a currently active restart, then it is returned. Otherwise, <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> is returned. 

**Examples:**
```lisp
(restart-case 
    (let ((r (find-restart ’my-restart))) 
      (format t "~S is named ~S" r (restart-name r))) 
  (my-restart () nil)) 
▷ #<RESTART 32307325> is named MY-RESTART 
→ NIL 
(find-restart ’my-restart) 
→ NIL 
```
**Affected By:** 



Existing restarts. 



<ClLinks styled={true} term={"restart-case"}><b>restart-case</b></ClLinks>, <ClLinks styled={true} term={"restart-bind"}><b>restart-bind</b></ClLinks>, <ClLinks styled={true} term={"with-condition-restarts"}><b>with-condition-restarts</b></ClLinks>. 



**See Also:** 



<ClLinks styled={true} term={"compute-restarts"}><b>compute-restarts</b></ClLinks> 



**Notes:** 



(find-restart <ClLinks styled={true} term={"identifier"}><i>identifier</i></ClLinks>) 



*≡* (find <ClLinks styled={true} term={"identifier"}><i>identifier</i></ClLinks> (compute-restarts) :key :restart-name) 



Although anonymous restarts have a name of <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, the consequences are unspecified if <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> is given as an <ClLinks styled={true} term={"identifier"}><i>identifier</i></ClLinks>. Occasionally, programmers lament that <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> is not permissible as an <ClLinks styled={true} term={"identifier"}><i>identifier</i></ClLinks> argument. In most such cases, <ClLinks styled={true} term={"compute-restarts"}><b>compute-restarts</b></ClLinks> can probably be used to simulate the desired effect. 




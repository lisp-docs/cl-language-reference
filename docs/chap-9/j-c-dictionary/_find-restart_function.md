**find-restart** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"find-restart"}><b>find-restart</b></DictionaryLink> <GlossaryTerm styled={true} term={"identifier"}><i>identifier</i></GlossaryTerm> &amp;optional <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> 



restart 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"identifier"}><i>identifier</i></GlossaryTerm>—a *non-nil symbol*, or a <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm>—a *condition object*, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



<GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm> or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



**Description:** 



<DictionaryLink styled={true} term={"find-restart"}><b>find-restart</b></DictionaryLink> searches for a particular <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm> in the current *dynamic environment*. 



 



 



When <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"non-nil"}><i>non-nil</i></GlossaryTerm>, only those <GlossaryTerm styled={true} term={"restart"}><i>restarts</i></GlossaryTerm> are considered that are either explicitly associated with that <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm>, or not associated with any <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm>; that is, the excluded <GlossaryTerm styled={true} term={"restart"}><i>restarts</i></GlossaryTerm> are those that are associated with a non-empty set of <GlossaryTerm styled={true} term={"condition"}><i>conditions</i></GlossaryTerm> of which the given <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> is not an <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm>. If <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, all <GlossaryTerm styled={true} term={"restart"}><i>restarts</i></GlossaryTerm> are considered. 



If <GlossaryTerm styled={true} term={"identifier"}><i>identifier</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>, then the innermost (most recently established) *applicable restart* with that <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> is returned. <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> is returned if no such restart is found. 



If <GlossaryTerm styled={true} term={"identifier"}><i>identifier</i></GlossaryTerm> is a currently active restart, then it is returned. Otherwise, <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> is returned. **Examples:**
```lisp

(restart-case 
    (let ((r (find-restart ’my-restart))) 
      (format t "~S is named ~S" r (restart-name r))) 
  (my-restart () nil)) 
▷ #<RESTART 32307325> is named MY-RESTART 
*→* NIL 
(find-restart ’my-restart) 
*→* NIL 

```
**Affected By:** 



Existing restarts. 



<DictionaryLink styled={true} term={"restart-case"}><b>restart-case</b></DictionaryLink>, <DictionaryLink styled={true} term={"restart-bind"}><b>restart-bind</b></DictionaryLink>, <DictionaryLink styled={true} term={"with-condition-restarts"}><b>with-condition-restarts</b></DictionaryLink>. 



**See Also:** 



<DictionaryLink styled={true} term={"compute-restarts"}><b>compute-restarts</b></DictionaryLink> 



**Notes:** 



(find-restart <GlossaryTerm styled={true} term={"identifier"}><i>identifier</i></GlossaryTerm>) 



*≡* (find <GlossaryTerm styled={true} term={"identifier"}><i>identifier</i></GlossaryTerm> (compute-restarts) :key :restart-name) 



Although anonymous restarts have a name of <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, the consequences are unspecified if <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> is given as an <GlossaryTerm styled={true} term={"identifier"}><i>identifier</i></GlossaryTerm>. Occasionally, programmers lament that <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> is not permissible as an <GlossaryTerm styled={true} term={"identifier"}><i>identifier</i></GlossaryTerm> argument. In most such cases, <DictionaryLink styled={true} term={"compute-restarts"}><b>compute-restarts</b></DictionaryLink> can probably be used to simulate the desired effect. 




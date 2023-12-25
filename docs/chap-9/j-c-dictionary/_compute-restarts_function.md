**compute-restarts** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"compute-restarts"}><b>compute-restarts</b></DictionaryLink> &amp;optional *condition → restarts* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm>—a *condition object*, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



<GlossaryTerm styled={true} term={"restart"}><i>restarts</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"restart"}><i>restarts</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink styled={true} term={"compute-restarts"}><b>compute-restarts</b></DictionaryLink> uses the dynamic state of the program to compute a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"restart"}><i>restarts</i></GlossaryTerm> which are currently active. 



The resulting <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> is ordered so that the innermost (more-recently established) restarts are nearer the head of the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>. 



When <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"non-nil"}><i>non-nil</i></GlossaryTerm>, only those <GlossaryTerm styled={true} term={"restart"}><i>restarts</i></GlossaryTerm> are considered that are either explicitly associated with that <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm>, or not associated with any <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm>; that is, the excluded <GlossaryTerm styled={true} term={"restart"}><i>restarts</i></GlossaryTerm> are those that are associated with a non-empty set of <GlossaryTerm styled={true} term={"condition"}><i>conditions</i></GlossaryTerm> of which the given <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> is not an <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm>. If <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, all <GlossaryTerm styled={true} term={"restart"}><i>restarts</i></GlossaryTerm> are considered. 



<DictionaryLink styled={true} term={"compute-restarts"}><b>compute-restarts</b></DictionaryLink> returns all *applicable restarts*, including anonymous ones, even if some of them have the same name as others and would therefore not be found by <DictionaryLink styled={true} term={"find-restart"}><b>find-restart</b></DictionaryLink> when given a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> argument. 



Implementations are permitted, but not required, to return *distinct lists* from repeated calls to <DictionaryLink styled={true} term={"compute-restarts"}><b>compute-restarts</b></DictionaryLink> while in the same dynamic environment. The consequences are undefined if the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> returned by <DictionaryLink styled={true} term={"compute-restarts"}><b>compute-restarts</b></DictionaryLink> is every modified. 



**Examples:**
```lisp

;; One possible way in which an interactive debugger might present 
;; restarts to the user. 
(defun invoke-a-restart () 
  (let ((restarts (compute-restarts))) 
    (do ((i 0 (+ i 1)) (r restarts (cdr r))) ((null r)) 
      (format t "~&~D: ~A~%" i (car r))) 
    (let ((n nil) (k (length restarts))) 
      (loop (when (and (typep n ’integer) (>= n 0) (< n k)) 
	      (return t)) 
       (format t "~&Option: ") 
       (setq n (read)) 
       (fresh-line)) 
      (invoke-restart-interactively (nth n restarts))))) 



(restart-case (invoke-a-restart) 
  (one () 1) 
  (two () 2) 
  (nil () :report "Who knows?" ’anonymous) 
  (one () ’I) 
  (two () ’II)) 
▷ 0: ONE 
▷ 1: TWO 
▷ 2: Who knows? 
▷ 3: ONE 
▷ 4: TWO 
▷ 5: Return to Lisp Toplevel. 
▷ Option: 4 
*→* II 
;; Note that in addition to user-defined restart points, COMPUTE-RESTARTS 
;; also returns information about any system-supplied restarts, such as 
;; the "Return to Lisp Toplevel" restart offered above. 

```
**Affected By:** 



Existing restarts. 



**See Also:** 



<DictionaryLink styled={true} term={"find-restart"}><b>find-restart</b></DictionaryLink>, <DictionaryLink styled={true} term={"invoke-restart"}><b>invoke-restart</b></DictionaryLink>, <DictionaryLink styled={true} term={"restart-bind"}><b>restart-bind</b></DictionaryLink> 




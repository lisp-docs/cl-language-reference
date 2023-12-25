**compute-restarts** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"compute-restarts"}><b>compute-restarts</b></ClLinks> &amp;optional *condition → restarts* 



**Arguments and Values:** 



<ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks>—a *condition object*, or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



<ClLinks styled={true} term={"restart"}><i>restarts</i></ClLinks>—a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of <ClLinks styled={true} term={"restart"}><i>restarts</i></ClLinks>. 



**Description:** 



<ClLinks styled={true} term={"compute-restarts"}><b>compute-restarts</b></ClLinks> uses the dynamic state of the program to compute a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of the <ClLinks styled={true} term={"restart"}><i>restarts</i></ClLinks> which are currently active. 



The resulting <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> is ordered so that the innermost (more-recently established) restarts are nearer the head of the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>. 



When <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> is <ClLinks styled={true} term={"non-nil"}><i>non-nil</i></ClLinks>, only those <ClLinks styled={true} term={"restart"}><i>restarts</i></ClLinks> are considered that are either explicitly associated with that <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks>, or not associated with any <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks>; that is, the excluded <ClLinks styled={true} term={"restart"}><i>restarts</i></ClLinks> are those that are associated with a non-empty set of <ClLinks styled={true} term={"condition"}><i>conditions</i></ClLinks> of which the given <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> is not an <ClLinks styled={true} term={"element"}><i>element</i></ClLinks>. If <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, all <ClLinks styled={true} term={"restart"}><i>restarts</i></ClLinks> are considered. 



<ClLinks styled={true} term={"compute-restarts"}><b>compute-restarts</b></ClLinks> returns all *applicable restarts*, including anonymous ones, even if some of them have the same name as others and would therefore not be found by <ClLinks styled={true} term={"find-restart"}><b>find-restart</b></ClLinks> when given a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> argument. 



Implementations are permitted, but not required, to return *distinct lists* from repeated calls to <ClLinks styled={true} term={"compute-restarts"}><b>compute-restarts</b></ClLinks> while in the same dynamic environment. The consequences are undefined if the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> returned by <ClLinks styled={true} term={"compute-restarts"}><b>compute-restarts</b></ClLinks> is every modified. 



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
→ II 
;; Note that in addition to user-defined restart points, COMPUTE-RESTARTS 
;; also returns information about any system-supplied restarts, such as 
;; the "Return to Lisp Toplevel" restart offered above. 
```
**Affected By:** 



Existing restarts. 



**See Also:** 



<ClLinks styled={true} term={"find-restart"}><b>find-restart</b></ClLinks>, <ClLinks styled={true} term={"invoke-restart"}><b>invoke-restart</b></ClLinks>, <ClLinks styled={true} term={"restart-bind"}><b>restart-bind</b></ClLinks> 




**inline, notinline** <ClLinks  term={"declaration"}><i>Declaration</i></ClLinks> 



**Syntax:** 



(inline *\{function-name\}*\*) 



(notinline *\{function-name\}*\*) 



**Arguments:** 



*function-name*—a <GlossaryTerm styled={true} term={"function name"}><i>function name</i></GlossaryTerm>. 



**Valid Context:** 



<ClLinks  term={"declaration"}><i>declaration</i></ClLinks> or <ClLinks  term={"proclamation"}><i>proclamation</i></ClLinks> 



**Binding Types Aected:** 



<ClLinks  term={"function"}><i>function</i></ClLinks> 



**Description:** 



<ClLinks  term={"inline"}><b>inline</b></ClLinks> specifies that it is desirable for the compiler to produce inline calls to the <ClLinks  term={"function"}><i>functions</i></ClLinks> named by *function-names*; that is, the code for a specified *function-name* should be integrated into the calling routine, appearing “in line” in place of a procedure call. A compiler is free to ignore this declaration. <ClLinks  term={"inline"}><b>inline</b></ClLinks> declarations never apply to variable <ClLinks  term={"binding"}><i>bindings</i></ClLinks>. 



If one of the <ClLinks  term={"function"}><i>functions</i></ClLinks> mentioned has a lexically apparent local definition (as made by <ClLinks  term={"flet"}><b>flet</b></ClLinks> or <ClLinks  term={"labels"}><b>labels</b></ClLinks>), then the declaration applies to that local definition and not to the global function definition. 







 



 



<DictionaryLink styled={true} term={"inline, notinline"}><b>inline, notinline</b></DictionaryLink> 



While no <GlossaryTerm styled={true} term={"conforming implementation"}><i>conforming implementation</i></GlossaryTerm> is required to perform inline expansion of user-defined functions, those <ClLinks  term={"implementation"}><i>implementations</i></ClLinks> that do attempt to recognize the following paradigm: 



To define a <ClLinks  term={"function"}><i>function</i></ClLinks> f that is not <ClLinks  term={"inline"}><b>inline</b></ClLinks> by default but for which (declare (inline f)) will make *f* be locally inlined, the proper definition sequence is: 



(declaim (inline f)) 



(defun f ...) 



(declaim (notinline f)) 



The <ClLinks  term={"inline"}><b>inline</b></ClLinks> proclamation preceding the <ClLinks  term={"defun"}><b>defun</b></ClLinks> <ClLinks  term={"form"}><i>form</i></ClLinks> ensures that the <ClLinks  term={"compiler"}><i>compiler</i></ClLinks> has the opportunity save the information necessary for inline expansion, and the <ClLinks  term={"notinline"}><b>notinline</b></ClLinks> proclamation following the <ClLinks  term={"defun"}><b>defun</b></ClLinks> <ClLinks  term={"form"}><i>form</i></ClLinks> prevents f from being expanded inline everywhere. 



<ClLinks  term={"notinline"}><b>notinline</b></ClLinks> specifies that it is undesirable to compile the <ClLinks  term={"function"}><i>functions</i></ClLinks> named by *function-names* in-line. A compiler is not free to ignore this declaration; calls to the specified functions must be implemented as out-of-line subroutine calls. 



If one of the <ClLinks  term={"function"}><i>functions</i></ClLinks> mentioned has a lexically apparent local definition (as made by <ClLinks  term={"flet"}><b>flet</b></ClLinks> or <ClLinks  term={"labels"}><b>labels</b></ClLinks>), then the declaration applies to that local definition and not to the global function definition. 



In the presence of a <GlossaryTerm styled={true} term={"compiler macro"}><i>compiler macro</i></GlossaryTerm> definition for *function-name*, a <ClLinks  term={"notinline"}><b>notinline</b></ClLinks> declaration prevents that <GlossaryTerm styled={true} term={"compiler macro"}><i>compiler macro</i></GlossaryTerm> from being used. An <ClLinks  term={"inline"}><b>inline</b></ClLinks> declaration may be used to encourage use of <GlossaryTerm styled={true} term={"compiler macro"}><i>compiler macro</i></GlossaryTerm> definitions. <ClLinks  term={"inline"}><b>inline</b></ClLinks> and <ClLinks  term={"notinline"}><b>notinline</b></ClLinks> declarations otherwise have no e↵ect when the lexically visible definition of *function-name* is a <ClLinks  term={"macro"}><i>macro</i></ClLinks> definition. 



<ClLinks  term={"inline"}><b>inline</b></ClLinks> and <ClLinks  term={"notinline"}><b>notinline</b></ClLinks> declarations can be <GlossaryTerm styled={true} term={"free declaration"}><i>free declarations</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"bound declaration"}><i>bound declarations</i></GlossaryTerm>. <ClLinks  term={"inline"}><b>inline</b></ClLinks> and <ClLinks  term={"notinline"}><b>notinline</b></ClLinks> declarations of functions that appear before the body of a <ClLinks  term={"flet"}><b>flet</b></ClLinks> or <ClLinks  term={"labels"}><b>labels</b></ClLinks> <ClLinks  term={"form"}><i>form</i></ClLinks> that defines that function are <GlossaryTerm styled={true} term={"bound declaration"}><i>bound declarations</i></GlossaryTerm>. Such declarations in other contexts are <GlossaryTerm styled={true} term={"free declaration"}><i>free declarations</i></GlossaryTerm>. 



**Examples:**
```lisp
;; The globally defined function DISPATCH should be open-coded, 
;; if the implementation supports inlining, unless a NOTINLINE 
;; declaration overrides this effect. 
(declaim (inline dispatch)) 
(defun dispatch (x) (funcall (get (car x) ’dispatch) x)) 
;; Here is an example where inlining would be encouraged. 
(defun top-level-1 () (dispatch (read-command))) 
;; Here is an example where inlining would be prohibited. 
(defun top-level-2 () 
  (declare (notinline dispatch)) 
  (dispatch (read-command))) 
;; Here is an example where inlining would be prohibited. 
(declaim (notinline dispatch)) 
(defun top-level-3 () (dispatch (read-command))) 
;; Here is an example where inlining would be encouraged. 
Evaluation and 

(defun top-level-4 () 
  (declare (inline dispatch)) 
  (dispatch (read-command))) 
```
**See Also:** 



<ClLinks  term={"declare"}><b>declare</b></ClLinks>, <ClLinks  term={"declaim"}><b>declaim</b></ClLinks>, <ClLinks  term={"proclaim"}><b>proclaim</b></ClLinks> 




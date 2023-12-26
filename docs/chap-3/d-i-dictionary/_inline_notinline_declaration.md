**inline, notinline** <GlossaryTerm  term={"declaration"}><i>Declaration</i></GlossaryTerm> 



**Syntax:** 



(inline *\{function-name\}*\*) 



(notinline *\{function-name\}*\*) 



**Arguments:** 



*function-name*—a <GlossaryTerm styled={true} term={"function name"}><i>function name</i></GlossaryTerm>. 



**Valid Context:** 



<GlossaryTerm  term={"declaration"}><i>declaration</i></GlossaryTerm> or <GlossaryTerm  term={"proclamation"}><i>proclamation</i></GlossaryTerm> 



**Binding Types Aected:** 



<GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> 



**Description:** 



<DictionaryLink  term={"inline"}><b>inline</b></DictionaryLink> specifies that it is desirable for the compiler to produce inline calls to the <GlossaryTerm  term={"function"}><i>functions</i></GlossaryTerm> named by *function-names*; that is, the code for a specified *function-name* should be integrated into the calling routine, appearing “in line” in place of a procedure call. A compiler is free to ignore this declaration. <DictionaryLink  term={"inline"}><b>inline</b></DictionaryLink> declarations never apply to variable <GlossaryTerm  term={"binding"}><i>bindings</i></GlossaryTerm>. 



If one of the <GlossaryTerm  term={"function"}><i>functions</i></GlossaryTerm> mentioned has a lexically apparent local definition (as made by <DictionaryLink  term={"flet"}><b>flet</b></DictionaryLink> or <DictionaryLink  term={"labels"}><b>labels</b></DictionaryLink>), then the declaration applies to that local definition and not to the global function definition. 







 



 



<DictionaryLink styled={true} term={"inline, notinline"}><b>inline, notinline</b></DictionaryLink> 



While no <GlossaryTerm styled={true} term={"conforming implementation"}><i>conforming implementation</i></GlossaryTerm> is required to perform inline expansion of user-defined functions, those <GlossaryTerm  term={"implementation"}><i>implementations</i></GlossaryTerm> that do attempt to recognize the following paradigm: 



To define a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> f that is not <DictionaryLink  term={"inline"}><b>inline</b></DictionaryLink> by default but for which (declare (inline f)) will make *f* be locally inlined, the proper definition sequence is: 



(declaim (inline f)) 



(defun f ...) 



(declaim (notinline f)) 



The <DictionaryLink  term={"inline"}><b>inline</b></DictionaryLink> proclamation preceding the <DictionaryLink  term={"defun"}><b>defun</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> ensures that the <GlossaryTerm  term={"compiler"}><i>compiler</i></GlossaryTerm> has the opportunity save the information necessary for inline expansion, and the <DictionaryLink  term={"notinline"}><b>notinline</b></DictionaryLink> proclamation following the <DictionaryLink  term={"defun"}><b>defun</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> prevents f from being expanded inline everywhere. 



<DictionaryLink  term={"notinline"}><b>notinline</b></DictionaryLink> specifies that it is undesirable to compile the <GlossaryTerm  term={"function"}><i>functions</i></GlossaryTerm> named by *function-names* in-line. A compiler is not free to ignore this declaration; calls to the specified functions must be implemented as out-of-line subroutine calls. 



If one of the <GlossaryTerm  term={"function"}><i>functions</i></GlossaryTerm> mentioned has a lexically apparent local definition (as made by <DictionaryLink  term={"flet"}><b>flet</b></DictionaryLink> or <DictionaryLink  term={"labels"}><b>labels</b></DictionaryLink>), then the declaration applies to that local definition and not to the global function definition. 



In the presence of a <GlossaryTerm styled={true} term={"compiler macro"}><i>compiler macro</i></GlossaryTerm> definition for *function-name*, a <DictionaryLink  term={"notinline"}><b>notinline</b></DictionaryLink> declaration prevents that <GlossaryTerm styled={true} term={"compiler macro"}><i>compiler macro</i></GlossaryTerm> from being used. An <DictionaryLink  term={"inline"}><b>inline</b></DictionaryLink> declaration may be used to encourage use of <GlossaryTerm styled={true} term={"compiler macro"}><i>compiler macro</i></GlossaryTerm> definitions. <DictionaryLink  term={"inline"}><b>inline</b></DictionaryLink> and <DictionaryLink  term={"notinline"}><b>notinline</b></DictionaryLink> declarations otherwise have no e↵ect when the lexically visible definition of *function-name* is a <GlossaryTerm  term={"macro"}><i>macro</i></GlossaryTerm> definition. 



<DictionaryLink  term={"inline"}><b>inline</b></DictionaryLink> and <DictionaryLink  term={"notinline"}><b>notinline</b></DictionaryLink> declarations can be <GlossaryTerm styled={true} term={"free declaration"}><i>free declarations</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"bound declaration"}><i>bound declarations</i></GlossaryTerm>. <DictionaryLink  term={"inline"}><b>inline</b></DictionaryLink> and <DictionaryLink  term={"notinline"}><b>notinline</b></DictionaryLink> declarations of functions that appear before the body of a <DictionaryLink  term={"flet"}><b>flet</b></DictionaryLink> or <DictionaryLink  term={"labels"}><b>labels</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> that defines that function are <GlossaryTerm styled={true} term={"bound declaration"}><i>bound declarations</i></GlossaryTerm>. Such declarations in other contexts are <GlossaryTerm styled={true} term={"free declaration"}><i>free declarations</i></GlossaryTerm>. 



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



<DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink>, <DictionaryLink  term={"declaim"}><b>declaim</b></DictionaryLink>, <DictionaryLink  term={"proclaim"}><b>proclaim</b></DictionaryLink> 




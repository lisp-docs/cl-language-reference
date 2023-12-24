**do-symbols, do-external-symbols, do-all-symbols** <ClLinks styled={true} term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"do-symbols"}><b>do-symbols</b></ClLinks> (*var* [<ClLinks styled={true} term={"package"}><i>package</i></ClLinks> [*result-form*]]) 



<ClLinks styled={true} term={"declaration"}><i>\{declaration\}</i></ClLinks>\* *\{tag | statement\}*\* 



→ \{result\}\* 



<ClLinks styled={true} term={"do-external-symbols"}><b>do-external-symbols</b></ClLinks> (*var* [<ClLinks styled={true} term={"package"}><i>package</i></ClLinks> [*result-form*]]) 



<ClLinks styled={true} term={"declaration"}><i>\{declaration\}</i></ClLinks>\* *\{tag | statement\}*\* 



→ \{result\}\* 



<ClLinks styled={true} term={"do-all-symbols"}><b>do-all-symbols</b></ClLinks> (*var* [*result-form*]) 



<ClLinks styled={true} term={"declaration"}><i>\{declaration\}</i></ClLinks>\* *\{tag | statement\}*\* 



→ \{result\}\* 



**Arguments and Values:** 



*var*—a *variable name*; not evaluated. 



<ClLinks styled={true} term={"package"}><i>package</i></ClLinks>—a *package designator* ; evaluated. The default in <ClLinks styled={true} term={"do-symbols"}><b>do-symbols</b></ClLinks> and <ClLinks styled={true} term={"do-external-symbols"}><b>do-external-symbols</b></ClLinks> is the *current package*. 



*result-form*—a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>; evaluated as described below. The default is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



<ClLinks styled={true} term={"declaration"}><i>declaration</i></ClLinks>—a <ClLinks styled={true} term={"declare"}><b>declare</b></ClLinks> <ClLinks styled={true} term={"expression"}><i>expression</i></ClLinks>; not evaluated. 



<ClLinks styled={true} term={"tag"}><i>tag</i></ClLinks>—a *go tag*; not evaluated. 



*statement*—a *compound form*; evaluated as described below. 



*results*—the <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> returned by the *result-form* if a *normal return* occurs, or else, if an *explicit return* occurs, the <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> that were transferred. 



**Description:** 



<ClLinks styled={true} term={"do-symbols"}><b>do-symbols</b></ClLinks>, <ClLinks styled={true} term={"do-external-symbols"}><b>do-external-symbols</b></ClLinks>, and <ClLinks styled={true} term={"do-all-symbols"}><b>do-all-symbols</b></ClLinks> iterate over the <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> of <ClLinks styled={true} term={"package"}><i>packages</i></ClLinks>. For each <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> in the set of <ClLinks styled={true} term={"package"}><i>packages</i></ClLinks> chosen, the *var* is bound to the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>, and the *statements* in the body are executed. When all the <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> have been processed, *result-form* is evaluated and returned as the value of the macro. 







 



 



**do-symbols, do-external-symbols, do-all-symbols** 



<ClLinks styled={true} term={"do-symbols"}><b>do-symbols</b></ClLinks> iterates over the *symbols accessible* in <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. *Statements* may execute more than once for <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> that are inherited from multiple <ClLinks styled={true} term={"package"}><i>packages</i></ClLinks>. 



<ClLinks styled={true} term={"do-all-symbols"}><b>do-all-symbols</b></ClLinks> iterates on every *registered package*. <ClLinks styled={true} term={"do-all-symbols"}><b>do-all-symbols</b></ClLinks> will not process every <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> whatsoever, because a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> not <ClLinks styled={true} term={"accessible"}><i>accessible</i></ClLinks> in any *registered package* will not be processed. <ClLinks styled={true} term={"do-all-symbols"}><b>do-all-symbols</b></ClLinks> may cause a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> that is <ClLinks styled={true} term={"present"}><i>present</i></ClLinks> in several <ClLinks styled={true} term={"package"}><i>packages</i></ClLinks> to be processed more than once. 



<ClLinks styled={true} term={"do-external-symbols"}><b>do-external-symbols</b></ClLinks> iterates on the external symbols of <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. 



When *result-form* is evaluated, *var* is bound and has the value <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



An *implicit block* named <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> surrounds the entire <ClLinks styled={true} term={"do-symbols"}><b>do-symbols</b></ClLinks>, <ClLinks styled={true} term={"do-external-symbols"}><b>do-external-symbols</b></ClLinks>, or <ClLinks styled={true} term={"do-all-symbols"}><b>do-all-symbols</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. <ClLinks styled={true} term={"return"}><b>return</b></ClLinks> or <ClLinks styled={true} term={"return-from"}><b>return-from</b></ClLinks> may be used to terminate the iteration prematurely. 



If execution of the body affects which <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> are contained in the set of <ClLinks styled={true} term={"package"}><i>packages</i></ClLinks> over which iteration is occurring, other than to remove the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> currently the value of *var* by using <ClLinks styled={true} term={"unintern"}><b>unintern</b></ClLinks>, the consequences are undefined. 



For each of these macros, the <ClLinks styled={true} term={"scope"}><i>scope</i></ClLinks> of the name binding does not include any initial value form, but the optional result forms are included. 



Any <ClLinks styled={true} term={"tag"}><i>tag</i></ClLinks> in the body is treated as with <ClLinks styled={true} term={"tagbody"}><b>tagbody</b></ClLinks>. 



**Examples:**
```lisp

(make-package ’temp :use nil) → #<PACKAGE "TEMP"> 
(intern "SHY" ’temp) → TEMP::SHY, NIL ;SHY will be an internal symbol 
					;in the package TEMP 
(export (intern "BOLD" ’temp) ’temp) → T ;BOLD will be external 
(let ((lst ())) 
  (do-symbols (s (find-package ’temp)) (push s lst)) 
  lst) 
→ (TEMP::SHY TEMP:BOLD) 
<i><sup>or</sup>→</i> (TEMP:BOLD TEMP::SHY) 
(let ((lst ())) 
  (do-external-symbols (s (find-package ’temp) lst) (push s lst)) 
  lst) 
→ (TEMP:BOLD) 
(let ((lst ())) 
  (do-all-symbols (s lst) 
    (when (eq (find-package ’temp) (symbol-package s)) (push s lst))) 
  lst) 
→ (TEMP::SHY TEMP:BOLD) 
<i><sup>or</sup>→</i> (TEMP:BOLD TEMP::SHY) 




```
**See Also:** 



<ClLinks styled={true} term={"intern"}><b>intern</b></ClLinks>, <ClLinks styled={true} term={"export"}><b>export</b></ClLinks>, Section 3.6 (Traversal Rules and Side Effects) 




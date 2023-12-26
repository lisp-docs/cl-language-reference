**do-symbols, do-external-symbols, do-all-symbols** <GlossaryTerm  term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"do-symbols"}><b>do-symbols</b></DictionaryLink> (*var* [<GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> [*result-form*]]) 



<GlossaryTerm  term={"declaration"}><i>\{declaration\}</i></GlossaryTerm>\* *\{tag | statement\}*\* 



→ \{result\}\* 



<DictionaryLink  term={"do-external-symbols"}><b>do-external-symbols</b></DictionaryLink> (*var* [<GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> [*result-form*]]) 



<GlossaryTerm  term={"declaration"}><i>\{declaration\}</i></GlossaryTerm>\* *\{tag | statement\}*\* 



→ \{result\}\* 



<DictionaryLink  term={"do-all-symbols"}><b>do-all-symbols</b></DictionaryLink> (*var* [*result-form*]) 



<GlossaryTerm  term={"declaration"}><i>\{declaration\}</i></GlossaryTerm>\* *\{tag | statement\}*\* 



→ \{result\}\* 



**Arguments and Values:** 



*var*—a *variable name*; not evaluated. 



<GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"package designator"}><i>package designator</i></GlossaryTerm> ; evaluated. The default in <DictionaryLink  term={"do-symbols"}><b>do-symbols</b></DictionaryLink> and <DictionaryLink  term={"do-external-symbols"}><b>do-external-symbols</b></DictionaryLink> is the <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm>. 



*result-form*—a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>; evaluated as described below. The default is <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



<GlossaryTerm  term={"declaration"}><i>declaration</i></GlossaryTerm>—a <DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink> <GlossaryTerm  term={"expression"}><i>expression</i></GlossaryTerm>; not evaluated. 



<GlossaryTerm  term={"tag"}><i>tag</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"go tag"}><i>go tag</i></GlossaryTerm>; not evaluated. 



*statement*—a <GlossaryTerm styled={true} term={"compound form"}><i>compound form</i></GlossaryTerm>; evaluated as described below. 



*results*—the <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> returned by the *result-form* if a <GlossaryTerm styled={true} term={"normal return"}><i>normal return</i></GlossaryTerm> occurs, or else, if an <GlossaryTerm styled={true} term={"explicit return"}><i>explicit return</i></GlossaryTerm> occurs, the <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> that were transferred. 



**Description:** 



<DictionaryLink  term={"do-symbols"}><b>do-symbols</b></DictionaryLink>, <DictionaryLink  term={"do-external-symbols"}><b>do-external-symbols</b></DictionaryLink>, and <DictionaryLink  term={"do-all-symbols"}><b>do-all-symbols</b></DictionaryLink> iterate over the <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> of <GlossaryTerm  term={"package"}><i>packages</i></GlossaryTerm>. For each <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> in the set of <GlossaryTerm  term={"package"}><i>packages</i></GlossaryTerm> chosen, the *var* is bound to the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>, and the *statements* in the body are executed. When all the <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> have been processed, *result-form* is evaluated and returned as the value of the macro. 







 



 



**do-symbols, do-external-symbols, do-all-symbols** 



<DictionaryLink  term={"do-symbols"}><b>do-symbols</b></DictionaryLink> iterates over the *symbols accessible* in <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>. *Statements* may execute more than once for <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> that are inherited from multiple <GlossaryTerm  term={"package"}><i>packages</i></GlossaryTerm>. 



<DictionaryLink  term={"do-all-symbols"}><b>do-all-symbols</b></DictionaryLink> iterates on every <GlossaryTerm styled={true} term={"registered package"}><i>registered package</i></GlossaryTerm>. <DictionaryLink  term={"do-all-symbols"}><b>do-all-symbols</b></DictionaryLink> will not process every <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> whatsoever, because a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> not <GlossaryTerm  term={"accessible"}><i>accessible</i></GlossaryTerm> in any <GlossaryTerm styled={true} term={"registered package"}><i>registered package</i></GlossaryTerm> will not be processed. <DictionaryLink  term={"do-all-symbols"}><b>do-all-symbols</b></DictionaryLink> may cause a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> that is <GlossaryTerm  term={"present"}><i>present</i></GlossaryTerm> in several <GlossaryTerm  term={"package"}><i>packages</i></GlossaryTerm> to be processed more than once. 



<DictionaryLink  term={"do-external-symbols"}><b>do-external-symbols</b></DictionaryLink> iterates on the external symbols of <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>. 



When *result-form* is evaluated, *var* is bound and has the value <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



An <GlossaryTerm styled={true} term={"implicit block"}><i>implicit block</i></GlossaryTerm> named <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> surrounds the entire <DictionaryLink  term={"do-symbols"}><b>do-symbols</b></DictionaryLink>, <DictionaryLink  term={"do-external-symbols"}><b>do-external-symbols</b></DictionaryLink>, or <DictionaryLink  term={"do-all-symbols"}><b>do-all-symbols</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. <DictionaryLink  term={"return"}><b>return</b></DictionaryLink> or <DictionaryLink  term={"return-from"}><b>return-from</b></DictionaryLink> may be used to terminate the iteration prematurely. 



If execution of the body affects which <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> are contained in the set of <GlossaryTerm  term={"package"}><i>packages</i></GlossaryTerm> over which iteration is occurring, other than to remove the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> currently the value of *var* by using <DictionaryLink  term={"unintern"}><b>unintern</b></DictionaryLink>, the consequences are undefined. 



For each of these macros, the <GlossaryTerm  term={"scope"}><i>scope</i></GlossaryTerm> of the name binding does not include any initial value form, but the optional result forms are included. 



Any <GlossaryTerm  term={"tag"}><i>tag</i></GlossaryTerm> in the body is treated as with <DictionaryLink  term={"tagbody"}><b>tagbody</b></DictionaryLink>. 



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



<DictionaryLink  term={"intern"}><b>intern</b></DictionaryLink>, <DictionaryLink  term={"export"}><b>export</b></DictionaryLink>, Section 3.6 (Traversal Rules and Side Effects) 




**do-symbols, do-external-symbols, do-all-symbols** <ClLinks  term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"do-symbols"}><b>do-symbols</b></DictionaryLink> (*var* [<ClLinks  term={"package"}><i>package</i></ClLinks> [*result-form*]]) 



<ClLinks  term={"declaration"}><i>\{declaration\}</i></ClLinks>\* *\{tag | statement\}*\* 



→ \{result\}\* 



<DictionaryLink  term={"do-external-symbols"}><b>do-external-symbols</b></DictionaryLink> (*var* [<ClLinks  term={"package"}><i>package</i></ClLinks> [*result-form*]]) 



<ClLinks  term={"declaration"}><i>\{declaration\}</i></ClLinks>\* *\{tag | statement\}*\* 



→ \{result\}\* 



<DictionaryLink  term={"do-all-symbols"}><b>do-all-symbols</b></DictionaryLink> (*var* [*result-form*]) 



<ClLinks  term={"declaration"}><i>\{declaration\}</i></ClLinks>\* *\{tag | statement\}*\* 



→ \{result\}\* 



**Arguments and Values:** 



*var*—a *variable name*; not evaluated. 



<ClLinks  term={"package"}><i>package</i></ClLinks>—a <GlossaryTerm styled={true} term={"package designator"}><i>package designator</i></GlossaryTerm> ; evaluated. The default in <DictionaryLink  term={"do-symbols"}><b>do-symbols</b></DictionaryLink> and <DictionaryLink  term={"do-external-symbols"}><b>do-external-symbols</b></DictionaryLink> is the <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm>. 



*result-form*—a <ClLinks  term={"form"}><i>form</i></ClLinks>; evaluated as described below. The default is <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



<ClLinks  term={"declaration"}><i>declaration</i></ClLinks>—a <DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink> <ClLinks  term={"expression"}><i>expression</i></ClLinks>; not evaluated. 



<ClLinks  term={"tag"}><i>tag</i></ClLinks>—a <GlossaryTerm styled={true} term={"go tag"}><i>go tag</i></GlossaryTerm>; not evaluated. 



*statement*—a <GlossaryTerm styled={true} term={"compound form"}><i>compound form</i></GlossaryTerm>; evaluated as described below. 



*results*—the <ClLinks  term={"value"}><i>values</i></ClLinks> returned by the *result-form* if a <GlossaryTerm styled={true} term={"normal return"}><i>normal return</i></GlossaryTerm> occurs, or else, if an <GlossaryTerm styled={true} term={"explicit return"}><i>explicit return</i></GlossaryTerm> occurs, the <ClLinks  term={"value"}><i>values</i></ClLinks> that were transferred. 



**Description:** 



<DictionaryLink  term={"do-symbols"}><b>do-symbols</b></DictionaryLink>, <DictionaryLink  term={"do-external-symbols"}><b>do-external-symbols</b></DictionaryLink>, and <DictionaryLink  term={"do-all-symbols"}><b>do-all-symbols</b></DictionaryLink> iterate over the <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> of <ClLinks  term={"package"}><i>packages</i></ClLinks>. For each <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> in the set of <ClLinks  term={"package"}><i>packages</i></ClLinks> chosen, the *var* is bound to the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>, and the *statements* in the body are executed. When all the <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> have been processed, *result-form* is evaluated and returned as the value of the macro. 







 



 



**do-symbols, do-external-symbols, do-all-symbols** 



<DictionaryLink  term={"do-symbols"}><b>do-symbols</b></DictionaryLink> iterates over the *symbols accessible* in <ClLinks  term={"package"}><i>package</i></ClLinks>. *Statements* may execute more than once for <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> that are inherited from multiple <ClLinks  term={"package"}><i>packages</i></ClLinks>. 



<DictionaryLink  term={"do-all-symbols"}><b>do-all-symbols</b></DictionaryLink> iterates on every <GlossaryTerm styled={true} term={"registered package"}><i>registered package</i></GlossaryTerm>. <DictionaryLink  term={"do-all-symbols"}><b>do-all-symbols</b></DictionaryLink> will not process every <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> whatsoever, because a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> not <ClLinks  term={"accessible"}><i>accessible</i></ClLinks> in any <GlossaryTerm styled={true} term={"registered package"}><i>registered package</i></GlossaryTerm> will not be processed. <DictionaryLink  term={"do-all-symbols"}><b>do-all-symbols</b></DictionaryLink> may cause a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> that is <ClLinks  term={"present"}><i>present</i></ClLinks> in several <ClLinks  term={"package"}><i>packages</i></ClLinks> to be processed more than once. 



<DictionaryLink  term={"do-external-symbols"}><b>do-external-symbols</b></DictionaryLink> iterates on the external symbols of <ClLinks  term={"package"}><i>package</i></ClLinks>. 



When *result-form* is evaluated, *var* is bound and has the value <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



An <GlossaryTerm styled={true} term={"implicit block"}><i>implicit block</i></GlossaryTerm> named <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> surrounds the entire <DictionaryLink  term={"do-symbols"}><b>do-symbols</b></DictionaryLink>, <DictionaryLink  term={"do-external-symbols"}><b>do-external-symbols</b></DictionaryLink>, or <DictionaryLink  term={"do-all-symbols"}><b>do-all-symbols</b></DictionaryLink> <ClLinks  term={"form"}><i>form</i></ClLinks>. <DictionaryLink  term={"return"}><b>return</b></DictionaryLink> or <DictionaryLink  term={"return-from"}><b>return-from</b></DictionaryLink> may be used to terminate the iteration prematurely. 



If execution of the body affects which <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> are contained in the set of <ClLinks  term={"package"}><i>packages</i></ClLinks> over which iteration is occurring, other than to remove the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> currently the value of *var* by using <DictionaryLink  term={"unintern"}><b>unintern</b></DictionaryLink>, the consequences are undefined. 



For each of these macros, the <ClLinks  term={"scope"}><i>scope</i></ClLinks> of the name binding does not include any initial value form, but the optional result forms are included. 



Any <ClLinks  term={"tag"}><i>tag</i></ClLinks> in the body is treated as with <DictionaryLink  term={"tagbody"}><b>tagbody</b></DictionaryLink>. 



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




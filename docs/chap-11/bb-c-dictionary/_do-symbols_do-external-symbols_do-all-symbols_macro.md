**do-symbols, do-external-symbols, do-all-symbols** <GlossaryTerm styled={true} term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"do-symbols"}><b>do-symbols</b></DictionaryLink> (*var* [<GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> [*result-form*]]) 



<GlossaryTerm styled={true} term={"declaration"}><i>\{declaration\}</i></GlossaryTerm>\* *\{tag | statement\}*\* 



*→ \{result\}*\* 



<DictionaryLink styled={true} term={"do-external-symbols"}><b>do-external-symbols</b></DictionaryLink> (*var* [<GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> [*result-form*]]) 



<GlossaryTerm styled={true} term={"declaration"}><i>\{declaration\}</i></GlossaryTerm>\* *\{tag | statement\}*\* 



*→ \{result\}*\* 



<DictionaryLink styled={true} term={"do-all-symbols"}><b>do-all-symbols</b></DictionaryLink> (*var* [*result-form*]) 



<GlossaryTerm styled={true} term={"declaration"}><i>\{declaration\}</i></GlossaryTerm>\* *\{tag | statement\}*\* 



*→ \{result\}*\* 



**Arguments and Values:** 



*var*—a *variable name*; not evaluated. 



<GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>—a *package designator* ; evaluated. The default in <DictionaryLink styled={true} term={"do-symbols"}><b>do-symbols</b></DictionaryLink> and <DictionaryLink styled={true} term={"do-external-symbols"}><b>do-external-symbols</b></DictionaryLink> is the *current package*. 



*result-form*—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>; evaluated as described below. The default is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



<GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm>—a <DictionaryLink styled={true} term={"declare"}><b>declare</b></DictionaryLink> <GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm>; not evaluated. 



<GlossaryTerm styled={true} term={"tag"}><i>tag</i></GlossaryTerm>—a *go tag*; not evaluated. 



*statement*—a *compound form*; evaluated as described below. 



*results*—the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> returned by the *result-form* if a *normal return* occurs, or else, if an *explicit return* occurs, the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> that were transferred. 



**Description:** 



<DictionaryLink styled={true} term={"do-symbols"}><b>do-symbols</b></DictionaryLink>, <DictionaryLink styled={true} term={"do-external-symbols"}><b>do-external-symbols</b></DictionaryLink>, and <DictionaryLink styled={true} term={"do-all-symbols"}><b>do-all-symbols</b></DictionaryLink> iterate over the <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"package"}><i>packages</i></GlossaryTerm>. For each <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> in the set of <GlossaryTerm styled={true} term={"package"}><i>packages</i></GlossaryTerm> chosen, the *var* is bound to the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>, and the *statements* in the body are executed. When all the <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> have been processed, *result-form* is evaluated and returned as the value of the macro. 







 



 



**do-symbols, do-external-symbols, do-all-symbols** 



<DictionaryLink styled={true} term={"do-symbols"}><b>do-symbols</b></DictionaryLink> iterates over the *symbols accessible* in <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. *Statements* may execute more than once for <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> that are inherited from multiple <GlossaryTerm styled={true} term={"package"}><i>packages</i></GlossaryTerm>. 



<DictionaryLink styled={true} term={"do-all-symbols"}><b>do-all-symbols</b></DictionaryLink> iterates on every *registered package*. <DictionaryLink styled={true} term={"do-all-symbols"}><b>do-all-symbols</b></DictionaryLink> will not process every <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> whatsoever, because a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> not <GlossaryTerm styled={true} term={"accessible"}><i>accessible</i></GlossaryTerm> in any *registered package* will not be processed. <DictionaryLink styled={true} term={"do-all-symbols"}><b>do-all-symbols</b></DictionaryLink> may cause a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> that is <GlossaryTerm styled={true} term={"present"}><i>present</i></GlossaryTerm> in several <GlossaryTerm styled={true} term={"package"}><i>packages</i></GlossaryTerm> to be processed more than once. 



<DictionaryLink styled={true} term={"do-external-symbols"}><b>do-external-symbols</b></DictionaryLink> iterates on the external symbols of <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. 



When *result-form* is evaluated, *var* is bound and has the value <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



An *implicit block* named <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> surrounds the entire <DictionaryLink styled={true} term={"do-symbols"}><b>do-symbols</b></DictionaryLink>, <DictionaryLink styled={true} term={"do-external-symbols"}><b>do-external-symbols</b></DictionaryLink>, or <DictionaryLink styled={true} term={"do-all-symbols"}><b>do-all-symbols</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. <DictionaryLink styled={true} term={"return"}><b>return</b></DictionaryLink> or <DictionaryLink styled={true} term={"return-from"}><b>return-from</b></DictionaryLink> may be used to terminate the iteration prematurely. 



If execution of the body affects which <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> are contained in the set of <GlossaryTerm styled={true} term={"package"}><i>packages</i></GlossaryTerm> over which iteration is occurring, other than to remove the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> currently the value of *var* by using <DictionaryLink styled={true} term={"unintern"}><b>unintern</b></DictionaryLink>, the consequences are undefined. 



For each of these macros, the <GlossaryTerm styled={true} term={"scope"}><i>scope</i></GlossaryTerm> of the name binding does not include any initial value form, but the optional result forms are included. 



Any <GlossaryTerm styled={true} term={"tag"}><i>tag</i></GlossaryTerm> in the body is treated as with <DictionaryLink styled={true} term={"tagbody"}><b>tagbody</b></DictionaryLink>. 



**Examples:**
```lisp

(make-package ’temp :use nil) *→* #<PACKAGE "TEMP"> 
(intern "SHY" ’temp) *→* TEMP::SHY, NIL ;SHY will be an internal symbol 
					;in the package TEMP 
(export (intern "BOLD" ’temp) ’temp) *→* T ;BOLD will be external 
(let ((lst ())) 
  (do-symbols (s (find-package ’temp)) (push s lst)) 
  lst) 
*→* (TEMP::SHY TEMP:BOLD) 
<i><sup>or</sup>→</i> (TEMP:BOLD TEMP::SHY) 
(let ((lst ())) 
  (do-external-symbols (s (find-package ’temp) lst) (push s lst)) 
  lst) 
*→* (TEMP:BOLD) 
(let ((lst ())) 
  (do-all-symbols (s lst) 
    (when (eq (find-package ’temp) (symbol-package s)) (push s lst))) 
  lst) 
*→* (TEMP::SHY TEMP:BOLD) 
<i><sup>or</sup>→</i> (TEMP:BOLD TEMP::SHY) 




```
**See Also:** 



<DictionaryLink styled={true} term={"intern"}><b>intern</b></DictionaryLink>, <DictionaryLink styled={true} term={"export"}><b>export</b></DictionaryLink>, Section 3.6 (Traversal Rules and Side Effects) 




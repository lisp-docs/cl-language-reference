**import** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"import"}><b>import</b></DictionaryLink> <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> &amp;optional *package →* <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>—a *package designator* . The default is the *current package*. 







 



 



**Description:** 



<DictionaryLink styled={true} term={"import"}><b>import</b></DictionaryLink> adds <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> to the internals of <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>, checking for name conflicts with existing <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> either <GlossaryTerm styled={true} term={"present"}><i>present</i></GlossaryTerm> in <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"accessible"}><i>accessible</i></GlossaryTerm> to it. Once the <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> have been *imported*, they may be referenced in the *importing package* without the use of a *package prefix* when using the *Lisp reader* . 



A name conflict in <DictionaryLink styled={true} term={"import"}><b>import</b></DictionaryLink> between the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> being imported and a symbol inherited from some other <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> can be resolved in favor of the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> being *imported* by making it a shadowing symbol, or in favor of the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> already <GlossaryTerm styled={true} term={"accessible"}><i>accessible</i></GlossaryTerm> by not doing the <DictionaryLink styled={true} term={"import"}><b>import</b></DictionaryLink>. A name conflict in <DictionaryLink styled={true} term={"import"}><b>import</b></DictionaryLink> with a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> already <GlossaryTerm styled={true} term={"present"}><i>present</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> may be resolved by uninterning that <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>, or by not doing the <DictionaryLink styled={true} term={"import"}><b>import</b></DictionaryLink>. 



The imported <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is not automatically exported from the *current package*, but if it is already <GlossaryTerm styled={true} term={"present"}><i>present</i></GlossaryTerm> and external, then the fact that it is external is not changed. If any <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> to be *imported* has no home package (*i.e.*, (symbol-package <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>) *→* nil), <DictionaryLink styled={true} term={"import"}><b>import</b></DictionaryLink> sets the *home package* of the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> to <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. 



If the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is already <GlossaryTerm styled={true} term={"present"}><i>present</i></GlossaryTerm> in the importing <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>, <DictionaryLink styled={true} term={"import"}><b>import</b></DictionaryLink> has no effect. 



**Examples:**
```lisp

(import ’common-lisp::car (make-package ’temp :use nil)) *→* T 
(find-symbol "CAR" ’temp) *→* CAR, :INTERNAL 
(find-symbol "CDR" ’temp) *→* NIL, NIL 
The form (import ’editor:buffer) takes the external symbol named buffer in the EDITOR *package* (this symbol was located when the form was read by the *Lisp reader* ) and adds it to the *current package* as an *internal symbol*. The symbol buffer is then *present* in the *current package*. 

```
**Side Effects:** 



The package system is modified. 



**Affected By:** 



Current state of the package system. 



**Exceptional Situations:** 



<DictionaryLink styled={true} term={"import"}><b>import</b></DictionaryLink> signals a <GlossaryTerm styled={true} term={"correctable"}><i>correctable</i></GlossaryTerm> error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"package-error"}><b>package-error</b></DictionaryLink> if any of the <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> to be *imported* has the *same name* (under <DictionaryLink styled={true} term={"string"}><b>string=</b></DictionaryLink>) as some distinct <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> (under <DictionaryLink styled={true} term={"eql"}><b>eql</b></DictionaryLink>) already <GlossaryTerm styled={true} term={"accessible"}><i>accessible</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>, even if the conflict is with a *shadowing symbol* of the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink styled={true} term={"shadow"}><b>shadow</b></DictionaryLink>, <DictionaryLink styled={true} term={"export"}><b>export</b></DictionaryLink> 







 



 




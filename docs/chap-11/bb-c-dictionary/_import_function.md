**import** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"import"}><b>import</b></DictionaryLink> <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> &amp;optional *package →* <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> 



**Arguments and Values:** 



<GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm>—a <GlossaryTerm  term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> of <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm>. 



<GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"package designator"}><i>package designator</i></GlossaryTerm> . The default is the <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm>. 







 



 



**Description:** 



<DictionaryLink  term={"import"}><b>import</b></DictionaryLink> adds <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> or <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> to the internals of <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>, checking for name conflicts with existing <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> either <GlossaryTerm  term={"present"}><i>present</i></GlossaryTerm> in <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> or <GlossaryTerm  term={"accessible"}><i>accessible</i></GlossaryTerm> to it. Once the <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> have been *imported*, they may be referenced in the *importing package* without the use of a <GlossaryTerm styled={true} term={"package prefix"}><i>package prefix</i></GlossaryTerm> when using the *Lisp reader* . 



A name conflict in <DictionaryLink  term={"import"}><b>import</b></DictionaryLink> between the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> being imported and a symbol inherited from some other <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> can be resolved in favor of the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> being *imported* by making it a shadowing symbol, or in favor of the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> already <GlossaryTerm  term={"accessible"}><i>accessible</i></GlossaryTerm> by not doing the <DictionaryLink  term={"import"}><b>import</b></DictionaryLink>. A name conflict in <DictionaryLink  term={"import"}><b>import</b></DictionaryLink> with a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> already <GlossaryTerm  term={"present"}><i>present</i></GlossaryTerm> in the <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> may be resolved by uninterning that <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>, or by not doing the <DictionaryLink  term={"import"}><b>import</b></DictionaryLink>. 



The imported <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> is not automatically exported from the <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm>, but if it is already <GlossaryTerm  term={"present"}><i>present</i></GlossaryTerm> and external, then the fact that it is external is not changed. If any <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> to be *imported* has no home package (*i.e.*, (symbol-package <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>) → nil), <DictionaryLink  term={"import"}><b>import</b></DictionaryLink> sets the <GlossaryTerm styled={true} term={"home package"}><i>home package</i></GlossaryTerm> of the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> to <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>. 



If the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> is already <GlossaryTerm  term={"present"}><i>present</i></GlossaryTerm> in the importing <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>, <DictionaryLink  term={"import"}><b>import</b></DictionaryLink> has no effect. 



**Examples:**
```lisp
(import ’common-lisp::car (make-package ’temp :use nil)) → T 
(find-symbol "CAR" ’temp) → CAR, :INTERNAL 
(find-symbol "CDR" ’temp) → NIL, NIL 
The form (import ’editor:buffer) takes the external symbol named buffer in the EDITOR *package* (this symbol was located when the form was read by the *Lisp reader* ) and adds it to the *current package* as an *internal symbol*. The symbol buffer is then *present* in the *current package*. 
```
**Side Effects:** 



The package system is modified. 



**Affected By:** 



Current state of the package system. 



**Exceptional Situations:** 



<DictionaryLink  term={"import"}><b>import</b></DictionaryLink> signals a <GlossaryTerm  term={"correctable"}><i>correctable</i></GlossaryTerm> error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"package-error"}><b>package-error</b></DictionaryLink> if any of the <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> to be *imported* has the *same name* (under <DictionaryLink  term={"string"}><b>string=</b></DictionaryLink>) as some distinct <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> (under <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink>) already <GlossaryTerm  term={"accessible"}><i>accessible</i></GlossaryTerm> in the <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>, even if the conflict is with a <GlossaryTerm styled={true} term={"shadowing symbol"}><i>shadowing symbol</i></GlossaryTerm> of the <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink  term={"shadow"}><b>shadow</b></DictionaryLink>, <DictionaryLink  term={"export"}><b>export</b></DictionaryLink> 







 



 




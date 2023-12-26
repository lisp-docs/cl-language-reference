**import** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"import"}><b>import</b></DictionaryLink> <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> &amp;optional *package →* <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> 



**Arguments and Values:** 



<ClLinks  term={"symbol"}><i>symbols</i></ClLinks>—a <ClLinks  term={"designator"}><i>designator</i></ClLinks> for a <ClLinks  term={"list"}><i>list</i></ClLinks> of <ClLinks  term={"symbol"}><i>symbols</i></ClLinks>. 



<ClLinks  term={"package"}><i>package</i></ClLinks>—a <GlossaryTerm styled={true} term={"package designator"}><i>package designator</i></GlossaryTerm> . The default is the <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm>. 







 



 



**Description:** 



<DictionaryLink  term={"import"}><b>import</b></DictionaryLink> adds <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> or <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> to the internals of <ClLinks  term={"package"}><i>package</i></ClLinks>, checking for name conflicts with existing <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> either <ClLinks  term={"present"}><i>present</i></ClLinks> in <ClLinks  term={"package"}><i>package</i></ClLinks> or <ClLinks  term={"accessible"}><i>accessible</i></ClLinks> to it. Once the <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> have been *imported*, they may be referenced in the *importing package* without the use of a <GlossaryTerm styled={true} term={"package prefix"}><i>package prefix</i></GlossaryTerm> when using the *Lisp reader* . 



A name conflict in <DictionaryLink  term={"import"}><b>import</b></DictionaryLink> between the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> being imported and a symbol inherited from some other <ClLinks  term={"package"}><i>package</i></ClLinks> can be resolved in favor of the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> being *imported* by making it a shadowing symbol, or in favor of the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> already <ClLinks  term={"accessible"}><i>accessible</i></ClLinks> by not doing the <DictionaryLink  term={"import"}><b>import</b></DictionaryLink>. A name conflict in <DictionaryLink  term={"import"}><b>import</b></DictionaryLink> with a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> already <ClLinks  term={"present"}><i>present</i></ClLinks> in the <ClLinks  term={"package"}><i>package</i></ClLinks> may be resolved by uninterning that <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>, or by not doing the <DictionaryLink  term={"import"}><b>import</b></DictionaryLink>. 



The imported <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is not automatically exported from the <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm>, but if it is already <ClLinks  term={"present"}><i>present</i></ClLinks> and external, then the fact that it is external is not changed. If any <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> to be *imported* has no home package (*i.e.*, (symbol-package <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>) → nil), <DictionaryLink  term={"import"}><b>import</b></DictionaryLink> sets the <GlossaryTerm styled={true} term={"home package"}><i>home package</i></GlossaryTerm> of the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> to <ClLinks  term={"package"}><i>package</i></ClLinks>. 



If the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is already <ClLinks  term={"present"}><i>present</i></ClLinks> in the importing <ClLinks  term={"package"}><i>package</i></ClLinks>, <DictionaryLink  term={"import"}><b>import</b></DictionaryLink> has no effect. 



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



<DictionaryLink  term={"import"}><b>import</b></DictionaryLink> signals a <ClLinks  term={"correctable"}><i>correctable</i></ClLinks> error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"package-error"}><b>package-error</b></DictionaryLink> if any of the <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> to be *imported* has the *same name* (under <ClLinks  term={"string"}><b>string=</b></ClLinks>) as some distinct <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> (under <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink>) already <ClLinks  term={"accessible"}><i>accessible</i></ClLinks> in the <ClLinks  term={"package"}><i>package</i></ClLinks>, even if the conflict is with a <GlossaryTerm styled={true} term={"shadowing symbol"}><i>shadowing symbol</i></GlossaryTerm> of the <ClLinks  term={"package"}><i>package</i></ClLinks>. 



**See Also:** 



<DictionaryLink  term={"shadow"}><b>shadow</b></DictionaryLink>, <DictionaryLink  term={"export"}><b>export</b></DictionaryLink> 







 



 




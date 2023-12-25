**import** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"import"}><b>import</b></ClLinks> <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> &amp;optional *package →* <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> 



**Arguments and Values:** 



<ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks>—a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks>. 



<ClLinks styled={true} term={"package"}><i>package</i></ClLinks>—a *package designator* . The default is the *current package*. 







 



 



**Description:** 



<ClLinks styled={true} term={"import"}><b>import</b></ClLinks> adds <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> or <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> to the internals of <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>, checking for name conflicts with existing <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> either <ClLinks styled={true} term={"present"}><i>present</i></ClLinks> in <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> or <ClLinks styled={true} term={"accessible"}><i>accessible</i></ClLinks> to it. Once the <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> have been *imported*, they may be referenced in the *importing package* without the use of a *package prefix* when using the *Lisp reader* . 



A name conflict in <ClLinks styled={true} term={"import"}><b>import</b></ClLinks> between the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> being imported and a symbol inherited from some other <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> can be resolved in favor of the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> being *imported* by making it a shadowing symbol, or in favor of the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> already <ClLinks styled={true} term={"accessible"}><i>accessible</i></ClLinks> by not doing the <ClLinks styled={true} term={"import"}><b>import</b></ClLinks>. A name conflict in <ClLinks styled={true} term={"import"}><b>import</b></ClLinks> with a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> already <ClLinks styled={true} term={"present"}><i>present</i></ClLinks> in the <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> may be resolved by uninterning that <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>, or by not doing the <ClLinks styled={true} term={"import"}><b>import</b></ClLinks>. 



The imported <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is not automatically exported from the *current package*, but if it is already <ClLinks styled={true} term={"present"}><i>present</i></ClLinks> and external, then the fact that it is external is not changed. If any <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> to be *imported* has no home package (*i.e.*, (symbol-package <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>) → nil), <ClLinks styled={true} term={"import"}><b>import</b></ClLinks> sets the *home package* of the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> to <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. 



If the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is already <ClLinks styled={true} term={"present"}><i>present</i></ClLinks> in the importing <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>, <ClLinks styled={true} term={"import"}><b>import</b></ClLinks> has no effect. 



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



<ClLinks styled={true} term={"import"}><b>import</b></ClLinks> signals a <ClLinks styled={true} term={"correctable"}><i>correctable</i></ClLinks> error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"package-error"}><b>package-error</b></ClLinks> if any of the <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> to be *imported* has the *same name* (under <ClLinks styled={true} term={"string"}><b>string=</b></ClLinks>) as some distinct <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> (under <ClLinks styled={true} term={"eql"}><b>eql</b></ClLinks>) already <ClLinks styled={true} term={"accessible"}><i>accessible</i></ClLinks> in the <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>, even if the conflict is with a *shadowing symbol* of the <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. 



**See Also:** 



<ClLinks styled={true} term={"shadow"}><b>shadow</b></ClLinks>, <ClLinks styled={true} term={"export"}><b>export</b></ClLinks> 







 



 




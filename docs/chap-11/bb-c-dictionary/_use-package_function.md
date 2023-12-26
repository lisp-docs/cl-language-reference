**use-package** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"use-package"}><b>use-package</b></DictionaryLink> *packages-to-use* &amp;optional *package →* <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> 



**Arguments and Values:** 



*packages-to-use*—a <GlossaryTerm  term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"package designator"}><i>package designators</i></GlossaryTerm>. The KEYWORD <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> may not be supplied. 



<GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"package designator"}><i>package designator</i></GlossaryTerm> . The default is the <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm>. The <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> cannot be the KEYWORD <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink  term={"use-package"}><b>use-package</b></DictionaryLink> causes <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> to inherit all the <GlossaryTerm styled={true} term={"external symbol"}><i>external symbols</i></GlossaryTerm> of *packages-to-use*. The inherited <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> become <GlossaryTerm  term={"accessible"}><i>accessible</i></GlossaryTerm> as <GlossaryTerm styled={true} term={"internal symbol"}><i>internal symbols</i></GlossaryTerm> of <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>. 



*Packages-to-use* are added to the <GlossaryTerm styled={true} term={"use list"}><i>use list</i></GlossaryTerm> of <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> if they are not there already. All <GlossaryTerm styled={true} term={"external symbol"}><i>external symbols</i></GlossaryTerm> in *packages-to-use* become <GlossaryTerm  term={"accessible"}><i>accessible</i></GlossaryTerm> in <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> as <GlossaryTerm styled={true} term={"internal symbol"}><i>internal symbols</i></GlossaryTerm>. <DictionaryLink  term={"use-package"}><b>use-package</b></DictionaryLink> does not cause any new <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> to be <GlossaryTerm  term={"present"}><i>present</i></GlossaryTerm> in <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> but only makes them <GlossaryTerm  term={"accessible"}><i>accessible</i></GlossaryTerm> by inheritance. 



<DictionaryLink  term={"use-package"}><b>use-package</b></DictionaryLink> checks for name conflicts between the newly imported symbols and those already <GlossaryTerm  term={"accessible"}><i>accessible</i></GlossaryTerm> in <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>. A name conflict in <DictionaryLink  term={"use-package"}><b>use-package</b></DictionaryLink> between two external symbols inherited by <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> from *packages-to-use* may be resolved in favor of either <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> by *importing* one of them into <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> and making it a shadowing symbol. 



**Examples:**
```lisp
(export (intern "LAND-FILL" (make-package ’trash)) ’trash) → T 
(find-symbol "LAND-FILL" (make-package ’temp)) → NIL, NIL 
(package-use-list ’temp) → (#<PACKAGE "TEMP">) 
(use-package ’trash ’temp) → T 
(package-use-list ’temp) → (#<PACKAGE "TEMP"> #<PACKAGE "TRASH">) 
(find-symbol "LAND-FILL" ’temp) → TRASH:LAND-FILL, :INHERITED 
```
**Side Effects:** 



The <GlossaryTerm styled={true} term={"use list"}><i>use list</i></GlossaryTerm> of <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> may be modified. 



**See Also:** 



<DictionaryLink  term={"unuse-package"}><b>unuse-package</b></DictionaryLink>, <DictionaryLink  term={"package-use-list"}><b>package-use-list</b></DictionaryLink>, Section 11.1 (Package Concepts) 



**Notes:** 



It is permissible for a *package P*<sub>1</sub> to <GlossaryTerm  term={"use"}><i>use</i></GlossaryTerm> a *package P*<sub>2</sub> even if *P*<sub>2</sub> already uses *P*<sub>1</sub>. The using of <GlossaryTerm  term={"package"}><i>packages</i></GlossaryTerm> is not transitive, so no problem results from the apparent circularity. 







 



 



<DictionaryLink  term={"defpackage"}><b>defpackage</b></DictionaryLink> 




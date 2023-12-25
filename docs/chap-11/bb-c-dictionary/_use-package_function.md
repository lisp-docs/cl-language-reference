**use-package** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"use-package"}><b>use-package</b></DictionaryLink> *packages-to-use* &amp;optional *package →* <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> 



**Arguments and Values:** 



*packages-to-use*—a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of *package designators*. The KEYWORD <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> may not be supplied. 



<GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>—a *package designator* . The default is the *current package*. The <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> cannot be the KEYWORD <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink styled={true} term={"use-package"}><b>use-package</b></DictionaryLink> causes <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> to inherit all the *external symbols* of *packages-to-use*. The inherited <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> become <GlossaryTerm styled={true} term={"accessible"}><i>accessible</i></GlossaryTerm> as *internal symbols* of <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. 



*Packages-to-use* are added to the *use list* of <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> if they are not there already. All *external symbols* in *packages-to-use* become <GlossaryTerm styled={true} term={"accessible"}><i>accessible</i></GlossaryTerm> in <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> as *internal symbols*. <DictionaryLink styled={true} term={"use-package"}><b>use-package</b></DictionaryLink> does not cause any new <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> to be <GlossaryTerm styled={true} term={"present"}><i>present</i></GlossaryTerm> in <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> but only makes them <GlossaryTerm styled={true} term={"accessible"}><i>accessible</i></GlossaryTerm> by inheritance. 



<DictionaryLink styled={true} term={"use-package"}><b>use-package</b></DictionaryLink> checks for name conflicts between the newly imported symbols and those already <GlossaryTerm styled={true} term={"accessible"}><i>accessible</i></GlossaryTerm> in <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. A name conflict in <DictionaryLink styled={true} term={"use-package"}><b>use-package</b></DictionaryLink> between two external symbols inherited by <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> from *packages-to-use* may be resolved in favor of either <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> by *importing* one of them into <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> and making it a shadowing symbol. 



**Examples:**
```lisp

(export (intern "LAND-FILL" (make-package ’trash)) ’trash) *→* T 
(find-symbol "LAND-FILL" (make-package ’temp)) *→* NIL, NIL 
(package-use-list ’temp) *→* (#<PACKAGE "TEMP">) 
(use-package ’trash ’temp) *→* T 
(package-use-list ’temp) *→* (#<PACKAGE "TEMP"> #<PACKAGE "TRASH">) 
(find-symbol "LAND-FILL" ’temp) *→* TRASH:LAND-FILL, :INHERITED 

```
**Side Effects:** 



The *use list* of <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> may be modified. 



**See Also:** 



<DictionaryLink styled={true} term={"unuse-package"}><b>unuse-package</b></DictionaryLink>, <DictionaryLink styled={true} term={"package-use-list"}><b>package-use-list</b></DictionaryLink>, Section 11.1 (Package Concepts) 



**Notes:** 



It is permissible for a *package P*<sub>1</sub> to <GlossaryTerm styled={true} term={"use"}><i>use</i></GlossaryTerm> a *package P*<sub>2</sub> even if *P*<sub>2</sub> already uses *P*<sub>1</sub>. The using of <GlossaryTerm styled={true} term={"package"}><i>packages</i></GlossaryTerm> is not transitive, so no problem results from the apparent circularity. 







 



 



<DictionaryLink styled={true} term={"defpackage"}><b>defpackage</b></DictionaryLink> 




 



A <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> establishes a mapping from names to <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm>. At any given time, one <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> is current. The *current package* is the one that is the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"package"}><b>\*package\*</b></DictionaryLink>. When using the *Lisp reader* , it is possible to refer to <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> in <GlossaryTerm styled={true} term={"package"}><i>packages</i></GlossaryTerm> other than the current one through the use of *package prefixes* in the printed representation of the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. 



Figure 11–1 lists some *defined names* that are applicable to <GlossaryTerm styled={true} term={"package"}><i>packages</i></GlossaryTerm>. Where an <GlossaryTerm styled={true} term={"operator"}><i>operator</i></GlossaryTerm> takes an argument that is either a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> or a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm>, an argument of <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> is treated as an empty <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm>. Any <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> argument may be either a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>, or a <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. If a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is supplied, its name will be used as the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> name. 



|**\*modules\* import provide \*package\* in-package rename-package defpackage intern require do-all-symbols list-all-packages shadow do-external-symbols make-package shadowing-import do-symbols package-name unexport export package-nicknames unintern find-all-symbols package-shadowing-symbols unuse-package find-package package-use-list use-package find-symbol package-used-by-list**|

| :- |





**Figure 11–1. Some Defined Names related to Packages** 




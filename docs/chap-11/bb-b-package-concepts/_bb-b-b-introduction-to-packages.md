 



A <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> establishes a mapping from names to <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm>. At any given time, one <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> is current. The <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm> is the one that is the <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink  term={"package"}><b>\*package\*</b></DictionaryLink>. When using the *Lisp reader* , it is possible to refer to <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> in <GlossaryTerm  term={"package"}><i>packages</i></GlossaryTerm> other than the current one through the use of *package prefixes* in the printed representation of the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>. 



Figure 11–1 lists some <GlossaryTerm styled={true} term={"defined name"}><i>defined names</i></GlossaryTerm> that are applicable to <GlossaryTerm  term={"package"}><i>packages</i></GlossaryTerm>. Where an <GlossaryTerm  term={"operator"}><i>operator</i></GlossaryTerm> takes an argument that is either a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> or a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> of <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm>, an argument of <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> is treated as an empty <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> of <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm>. Any <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> argument may be either a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>, a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>, or a <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>. If a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> is supplied, its name will be used as the <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> name. 



|**\*modules\* import provide \*package\* in-package rename-package defpackage intern require do-all-symbols list-all-packages shadow do-external-symbols make-package shadowing-import do-symbols package-name unexport export package-nicknames unintern find-all-symbols package-shadowing-symbols unuse-package find-package package-use-list use-package find-symbol package-used-by-list**|

| :- |





**Figure 11–1. Some Defined Names related to Packages** 




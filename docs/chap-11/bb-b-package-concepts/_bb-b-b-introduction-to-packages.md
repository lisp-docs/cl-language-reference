 



A <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> establishes a mapping from names to <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks>. At any given time, one <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> is current. The *current package* is the one that is the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"package"}><b>\*package\*</b></ClLinks>. When using the *Lisp reader* , it is possible to refer to <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> in <ClLinks styled={true} term={"package"}><i>packages</i></ClLinks> other than the current one through the use of *package prefixes* in the printed representation of the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. 



Figure 11–1 lists some *defined names* that are applicable to <ClLinks styled={true} term={"package"}><i>packages</i></ClLinks>. Where an <ClLinks styled={true} term={"operator"}><i>operator</i></ClLinks> takes an argument that is either a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> or a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks>, an argument of <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> is treated as an empty <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks>. Any <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> argument may be either a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>, a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>, or a <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. If a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is supplied, its name will be used as the <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> name. 



|**\*modules\* import provide \*package\* in-package rename-package defpackage intern require do-all-symbols list-all-packages shadow do-external-symbols make-package shadowing-import do-symbols package-name unexport export package-nicknames unintern find-all-symbols package-shadowing-symbols unuse-package find-package package-use-list use-package find-symbol package-used-by-list**|

| :- |





**Figure 11–1. Some Defined Names related to Packages** 




 



A <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> becomes <ClLinks styled={true} term={"accessible"}><i>accessible</i></ClLinks> in a <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> if that is its *home package* when it is created, or if it is *imported* into that <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>, or by inheritance via <ClLinks styled={true} term={"use-package"}><b>use-package</b></ClLinks>. 



If a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is <ClLinks styled={true} term={"accessible"}><i>accessible</i></ClLinks> in a <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>, it can be referred to when using the *Lisp reader* without a *package prefix* when that <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> is the *current package*, regardless of whether it is <ClLinks styled={true} term={"present"}><i>present</i></ClLinks> or inherited. 



<ClLinks styled={true} term={"symbol"}><i>Symbols</i></ClLinks> from one <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> can be made <ClLinks styled={true} term={"accessible"}><i>accessible</i></ClLinks> in another <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> in two ways. 



– Any individual <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> can be added to a <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> by use of <ClLinks styled={true} term={"import"}><b>import</b></ClLinks>. After the call to <ClLinks styled={true} term={"import"}><b>import</b></ClLinks> the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is <ClLinks styled={true} term={"present"}><i>present</i></ClLinks> in the importing <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. The status of the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> in the <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> it came from (if any) is unchanged, and the *home package* for this <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is unchanged. Once *imported*, a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is <ClLinks styled={true} term={"present"}><i>present</i></ClLinks> in the importing <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> and can be removed only by calling <ClLinks styled={true} term={"unintern"}><b>unintern</b></ClLinks>. 



A <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is *shadowed* <sub>3</sub> by another <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> in some <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> if the first <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> would be <ClLinks styled={true} term={"accessible"}><i>accessible</i></ClLinks> by inheritance if not for the presence of the second <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. See <ClLinks styled={true} term={"shadowing-import"}><b>shadowing-import</b></ClLinks>. 



– The second mechanism for making <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> from one *package accessible* in another is provided by <ClLinks styled={true} term={"use-package"}><b>use-package</b></ClLinks>. All of the *external symbols* of the used <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> are inherited 







 



 



by the using <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. The <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"unuse-package"}><b>unuse-package</b></ClLinks> undoes the effects of a previous <ClLinks styled={true} term={"use-package"}><b>use-package</b></ClLinks>. 




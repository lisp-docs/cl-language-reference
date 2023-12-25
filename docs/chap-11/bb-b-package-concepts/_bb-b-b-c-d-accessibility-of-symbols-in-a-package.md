 



A <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> becomes <ClLinks  term={"accessible"}><i>accessible</i></ClLinks> in a <ClLinks  term={"package"}><i>package</i></ClLinks> if that is its *home package* when it is created, or if it is *imported* into that <ClLinks  term={"package"}><i>package</i></ClLinks>, or by inheritance via <ClLinks  term={"use-package"}><b>use-package</b></ClLinks>. 



If a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is <ClLinks  term={"accessible"}><i>accessible</i></ClLinks> in a <ClLinks  term={"package"}><i>package</i></ClLinks>, it can be referred to when using the *Lisp reader* without a *package prefix* when that <ClLinks  term={"package"}><i>package</i></ClLinks> is the *current package*, regardless of whether it is <ClLinks  term={"present"}><i>present</i></ClLinks> or inherited. 



<ClLinks  term={"symbol"}><i>Symbols</i></ClLinks> from one <ClLinks  term={"package"}><i>package</i></ClLinks> can be made <ClLinks  term={"accessible"}><i>accessible</i></ClLinks> in another <ClLinks  term={"package"}><i>package</i></ClLinks> in two ways. 



– Any individual <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> can be added to a <ClLinks  term={"package"}><i>package</i></ClLinks> by use of <ClLinks  term={"import"}><b>import</b></ClLinks>. After the call to <ClLinks  term={"import"}><b>import</b></ClLinks> the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is <ClLinks  term={"present"}><i>present</i></ClLinks> in the importing <ClLinks  term={"package"}><i>package</i></ClLinks>. The status of the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> in the <ClLinks  term={"package"}><i>package</i></ClLinks> it came from (if any) is unchanged, and the *home package* for this <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is unchanged. Once *imported*, a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is <ClLinks  term={"present"}><i>present</i></ClLinks> in the importing <ClLinks  term={"package"}><i>package</i></ClLinks> and can be removed only by calling <ClLinks  term={"unintern"}><b>unintern</b></ClLinks>. 



A <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is *shadowed* <sub>3</sub> by another <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> in some <ClLinks  term={"package"}><i>package</i></ClLinks> if the first <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> would be <ClLinks  term={"accessible"}><i>accessible</i></ClLinks> by inheritance if not for the presence of the second <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. See <ClLinks  term={"shadowing-import"}><b>shadowing-import</b></ClLinks>. 



– The second mechanism for making <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> from one *package accessible* in another is provided by <ClLinks  term={"use-package"}><b>use-package</b></ClLinks>. All of the *external symbols* of the used <ClLinks  term={"package"}><i>package</i></ClLinks> are inherited 







 



 



by the using <ClLinks  term={"package"}><i>package</i></ClLinks>. The <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"unuse-package"}><b>unuse-package</b></ClLinks> undoes the effects of a previous <ClLinks  term={"use-package"}><b>use-package</b></ClLinks>. 




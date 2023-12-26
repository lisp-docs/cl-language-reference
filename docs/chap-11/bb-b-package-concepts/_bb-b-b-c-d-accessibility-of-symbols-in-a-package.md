 



A <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> becomes <ClLinks  term={"accessible"}><i>accessible</i></ClLinks> in a <ClLinks  term={"package"}><i>package</i></ClLinks> if that is its <GlossaryTerm styled={true} term={"home package"}><i>home package</i></GlossaryTerm> when it is created, or if it is *imported* into that <ClLinks  term={"package"}><i>package</i></ClLinks>, or by inheritance via <DictionaryLink  term={"use-package"}><b>use-package</b></DictionaryLink>. 



If a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is <ClLinks  term={"accessible"}><i>accessible</i></ClLinks> in a <ClLinks  term={"package"}><i>package</i></ClLinks>, it can be referred to when using the *Lisp reader* without a <GlossaryTerm styled={true} term={"package prefix"}><i>package prefix</i></GlossaryTerm> when that <ClLinks  term={"package"}><i>package</i></ClLinks> is the <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm>, regardless of whether it is <ClLinks  term={"present"}><i>present</i></ClLinks> or inherited. 



<ClLinks  term={"symbol"}><i>Symbols</i></ClLinks> from one <ClLinks  term={"package"}><i>package</i></ClLinks> can be made <ClLinks  term={"accessible"}><i>accessible</i></ClLinks> in another <ClLinks  term={"package"}><i>package</i></ClLinks> in two ways. 



– Any individual <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> can be added to a <ClLinks  term={"package"}><i>package</i></ClLinks> by use of <DictionaryLink  term={"import"}><b>import</b></DictionaryLink>. After the call to <DictionaryLink  term={"import"}><b>import</b></DictionaryLink> the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is <ClLinks  term={"present"}><i>present</i></ClLinks> in the importing <ClLinks  term={"package"}><i>package</i></ClLinks>. The status of the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> in the <ClLinks  term={"package"}><i>package</i></ClLinks> it came from (if any) is unchanged, and the <GlossaryTerm styled={true} term={"home package"}><i>home package</i></GlossaryTerm> for this <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is unchanged. Once *imported*, a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is <ClLinks  term={"present"}><i>present</i></ClLinks> in the importing <ClLinks  term={"package"}><i>package</i></ClLinks> and can be removed only by calling <DictionaryLink  term={"unintern"}><b>unintern</b></DictionaryLink>. 



A <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is *shadowed* <sub>3</sub> by another <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> in some <ClLinks  term={"package"}><i>package</i></ClLinks> if the first <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> would be <ClLinks  term={"accessible"}><i>accessible</i></ClLinks> by inheritance if not for the presence of the second <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. See <DictionaryLink  term={"shadowing-import"}><b>shadowing-import</b></DictionaryLink>. 



– The second mechanism for making <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> from one *package accessible* in another is provided by <DictionaryLink  term={"use-package"}><b>use-package</b></DictionaryLink>. All of the <GlossaryTerm styled={true} term={"external symbol"}><i>external symbols</i></GlossaryTerm> of the used <ClLinks  term={"package"}><i>package</i></ClLinks> are inherited 







 



 



by the using <ClLinks  term={"package"}><i>package</i></ClLinks>. The <ClLinks  term={"function"}><i>function</i></ClLinks> <DictionaryLink  term={"unuse-package"}><b>unuse-package</b></DictionaryLink> undoes the effects of a previous <DictionaryLink  term={"use-package"}><b>use-package</b></DictionaryLink>. 




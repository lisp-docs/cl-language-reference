 



A <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> becomes <GlossaryTerm styled={true} term={"accessible"}><i>accessible</i></GlossaryTerm> in a <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> if that is its *home package* when it is created, or if it is *imported* into that <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>, or by inheritance via <DictionaryLink styled={true} term={"use-package"}><b>use-package</b></DictionaryLink>. 



If a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"accessible"}><i>accessible</i></GlossaryTerm> in a <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>, it can be referred to when using the *Lisp reader* without a *package prefix* when that <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> is the *current package*, regardless of whether it is <GlossaryTerm styled={true} term={"present"}><i>present</i></GlossaryTerm> or inherited. 



<GlossaryTerm styled={true} term={"symbol"}><i>Symbols</i></GlossaryTerm> from one <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> can be made <GlossaryTerm styled={true} term={"accessible"}><i>accessible</i></GlossaryTerm> in another <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> in two ways. 



– Any individual <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> can be added to a <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> by use of <DictionaryLink styled={true} term={"import"}><b>import</b></DictionaryLink>. After the call to <DictionaryLink styled={true} term={"import"}><b>import</b></DictionaryLink> the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"present"}><i>present</i></GlossaryTerm> in the importing <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. The status of the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> it came from (if any) is unchanged, and the *home package* for this <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is unchanged. Once *imported*, a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"present"}><i>present</i></GlossaryTerm> in the importing <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> and can be removed only by calling <DictionaryLink styled={true} term={"unintern"}><b>unintern</b></DictionaryLink>. 



A <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is *shadowed* <sub>3</sub> by another <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> in some <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> if the first <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> would be <GlossaryTerm styled={true} term={"accessible"}><i>accessible</i></GlossaryTerm> by inheritance if not for the presence of the second <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. See <DictionaryLink styled={true} term={"shadowing-import"}><b>shadowing-import</b></DictionaryLink>. 



– The second mechanism for making <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> from one *package accessible* in another is provided by <DictionaryLink styled={true} term={"use-package"}><b>use-package</b></DictionaryLink>. All of the *external symbols* of the used <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> are inherited 







 



 



by the using <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. The <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"unuse-package"}><b>unuse-package</b></DictionaryLink> undoes the effects of a previous <DictionaryLink styled={true} term={"use-package"}><b>use-package</b></DictionaryLink>. 




 



A <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> becomes <GlossaryTerm  term={"accessible"}><i>accessible</i></GlossaryTerm> in a <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> if that is its <GlossaryTerm styled={true} term={"home package"}><i>home package</i></GlossaryTerm> when it is created, or if it is *imported* into that <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>, or by inheritance via <DictionaryLink  term={"use-package"}><b>use-package</b></DictionaryLink>. 



If a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> is <GlossaryTerm  term={"accessible"}><i>accessible</i></GlossaryTerm> in a <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>, it can be referred to when using the *Lisp reader* without a <GlossaryTerm styled={true} term={"package prefix"}><i>package prefix</i></GlossaryTerm> when that <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> is the <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm>, regardless of whether it is <GlossaryTerm  term={"present"}><i>present</i></GlossaryTerm> or inherited. 



<GlossaryTerm  term={"symbol"}><i>Symbols</i></GlossaryTerm> from one <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> can be made <GlossaryTerm  term={"accessible"}><i>accessible</i></GlossaryTerm> in another <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> in two ways. 



– Any individual <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> can be added to a <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> by use of <DictionaryLink  term={"import"}><b>import</b></DictionaryLink>. After the call to <DictionaryLink  term={"import"}><b>import</b></DictionaryLink> the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> is <GlossaryTerm  term={"present"}><i>present</i></GlossaryTerm> in the importing <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>. The status of the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> in the <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> it came from (if any) is unchanged, and the <GlossaryTerm styled={true} term={"home package"}><i>home package</i></GlossaryTerm> for this <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> is unchanged. Once *imported*, a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> is <GlossaryTerm  term={"present"}><i>present</i></GlossaryTerm> in the importing <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> and can be removed only by calling <DictionaryLink  term={"unintern"}><b>unintern</b></DictionaryLink>. 



A <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> is *shadowed* <sub>3</sub> by another <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> in some <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> if the first <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> would be <GlossaryTerm  term={"accessible"}><i>accessible</i></GlossaryTerm> by inheritance if not for the presence of the second <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>. See <DictionaryLink  term={"shadowing-import"}><b>shadowing-import</b></DictionaryLink>. 



– The second mechanism for making <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> from one *package accessible* in another is provided by <DictionaryLink  term={"use-package"}><b>use-package</b></DictionaryLink>. All of the <GlossaryTerm styled={true} term={"external symbol"}><i>external symbols</i></GlossaryTerm> of the used <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> are inherited 







 



 



by the using <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>. The <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"unuse-package"}><b>unuse-package</b></DictionaryLink> undoes the effects of a previous <DictionaryLink  term={"use-package"}><b>use-package</b></DictionaryLink>. 




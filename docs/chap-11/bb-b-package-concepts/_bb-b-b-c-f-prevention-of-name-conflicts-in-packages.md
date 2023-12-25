 



Within one <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>, any particular name can refer to at most one <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. A name conflict is said to occur when there would be more than one candidate <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. Any time a name conflict is about to occur, a *correctable error* is signaled. 



The following rules apply to name conflicts: 



– Name conflicts are detected when they become possible, that is, when the package structure is altered. Name conflicts are not checked during every name lookup. 



– If the *same symbol* is <GlossaryTerm styled={true} term={"accessible"}><i>accessible</i></GlossaryTerm> to a <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> through more than one path, there is no name conflict. A <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> cannot conflict with itself. Name conflicts occur only between *distinct symbols* with the same name (under <DictionaryLink styled={true} term={"string"}><b>string=</b></DictionaryLink>). 



– Every <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> has a list of shadowing <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm>. A shadowing <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> takes precedence over any other <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> of the same name that would otherwise be <GlossaryTerm styled={true} term={"accessible"}><i>accessible</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. A name conflict involving a shadowing symbol is always resolved in favor of the shadowing <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>, without signaling an error (except for one exception involving <DictionaryLink styled={true} term={"import"}><b>import</b></DictionaryLink>). See <DictionaryLink styled={true} term={"shadow"}><b>shadow</b></DictionaryLink> and <DictionaryLink styled={true} term={"shadowing-import"}><b>shadowing-import</b></DictionaryLink>. 



– The functions <DictionaryLink styled={true} term={"use-package"}><b>use-package</b></DictionaryLink>, <DictionaryLink styled={true} term={"import"}><b>import</b></DictionaryLink>, and <DictionaryLink styled={true} term={"export"}><b>export</b></DictionaryLink> check for name conflicts. 



– <DictionaryLink styled={true} term={"shadow"}><b>shadow</b></DictionaryLink> and <DictionaryLink styled={true} term={"shadowing-import"}><b>shadowing-import</b></DictionaryLink> never signal a name-conflict error. 



– <DictionaryLink styled={true} term={"unuse-package"}><b>unuse-package</b></DictionaryLink> and <DictionaryLink styled={true} term={"unexport"}><b>unexport</b></DictionaryLink> do not need to do any name-conflict checking. <DictionaryLink styled={true} term={"unintern"}><b>unintern</b></DictionaryLink> does name-conflict checking only when a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> being <GlossaryTerm styled={true} term={"uninterned"}><i>uninterned</i></GlossaryTerm> is a *shadowing symbol*. 



– Giving a shadowing symbol to <DictionaryLink styled={true} term={"unintern"}><b>unintern</b></DictionaryLink> can uncover a name conflict that had previously been resolved by the shadowing. 



– Package functions signal name-conflict errors of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"package-error"}><b>package-error</b></DictionaryLink> before making any change to the package structure. When multiple changes are to be made, it is permissible for the implementation to process each change separately. For example, when <DictionaryLink styled={true} term={"export"}><b>export</b></DictionaryLink> is 







 



 



given a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm>, aborting from a name conflict caused by the second <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> might still export the first <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>. However, a name-conflict error caused by <DictionaryLink styled={true} term={"export"}><b>export</b></DictionaryLink> of a single <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> will be signaled before that <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>’s <GlossaryTerm styled={true} term={"accessibility"}><i>accessibility</i></GlossaryTerm> in any <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> is changed. 



– Continuing from a name-conflict error must offer the user a chance to resolve the name conflict in favor of either of the candidates. The <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> structure should be altered to reflect the resolution of the name conflict, via <DictionaryLink styled={true} term={"shadowing-import"}><b>shadowing-import</b></DictionaryLink>, <DictionaryLink styled={true} term={"unintern"}><b>unintern</b></DictionaryLink>, or <DictionaryLink styled={true} term={"unexport"}><b>unexport</b></DictionaryLink>. 



– A name conflict in <DictionaryLink styled={true} term={"use-package"}><b>use-package</b></DictionaryLink> between a *symbol present* in the using <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> and an *external symbol* of the used <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> is resolved in favor of the first <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> by making it a shadowing <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>, or in favor of the second <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> by uninterning the first <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> from the using <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. 



– A name conflict in <DictionaryLink styled={true} term={"export"}><b>export</b></DictionaryLink> or <DictionaryLink styled={true} term={"unintern"}><b>unintern</b></DictionaryLink> due to a <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>’s inheriting two *distinct symbols* with the *same name* (under <DictionaryLink styled={true} term={"string"}><b>string=</b></DictionaryLink>) from two other <GlossaryTerm styled={true} term={"package"}><i>packages</i></GlossaryTerm> can be resolved in favor of either <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> by importing it into the using <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> and making it a *shadowing symbol*, just as with <DictionaryLink styled={true} term={"use-package"}><b>use-package</b></DictionaryLink>. 




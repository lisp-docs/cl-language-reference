 



Within one <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>, any particular name can refer to at most one <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>. A name conflict is said to occur when there would be more than one candidate <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>. Any time a name conflict is about to occur, a *correctable error* is signaled. 



The following rules apply to name conflicts: 



– Name conflicts are detected when they become possible, that is, when the package structure is altered. Name conflicts are not checked during every name lookup. 



– If the *same symbol* is <GlossaryTerm  term={"accessible"}><i>accessible</i></GlossaryTerm> to a <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> through more than one path, there is no name conflict. A <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> cannot conflict with itself. Name conflicts occur only between *distinct symbols* with the same name (under <DictionaryLink  term={"string"}><b>string=</b></DictionaryLink>). 



– Every <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> has a list of shadowing <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm>. A shadowing <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> takes precedence over any other <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> of the same name that would otherwise be <GlossaryTerm  term={"accessible"}><i>accessible</i></GlossaryTerm> in the <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>. A name conflict involving a shadowing symbol is always resolved in favor of the shadowing <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>, without signaling an error (except for one exception involving <DictionaryLink  term={"import"}><b>import</b></DictionaryLink>). See <DictionaryLink  term={"shadow"}><b>shadow</b></DictionaryLink> and <DictionaryLink  term={"shadowing-import"}><b>shadowing-import</b></DictionaryLink>. 



– The functions <DictionaryLink  term={"use-package"}><b>use-package</b></DictionaryLink>, <DictionaryLink  term={"import"}><b>import</b></DictionaryLink>, and <DictionaryLink  term={"export"}><b>export</b></DictionaryLink> check for name conflicts. 



– <DictionaryLink  term={"shadow"}><b>shadow</b></DictionaryLink> and <DictionaryLink  term={"shadowing-import"}><b>shadowing-import</b></DictionaryLink> never signal a name-conflict error. 



– <DictionaryLink  term={"unuse-package"}><b>unuse-package</b></DictionaryLink> and <DictionaryLink  term={"unexport"}><b>unexport</b></DictionaryLink> do not need to do any name-conflict checking. <DictionaryLink  term={"unintern"}><b>unintern</b></DictionaryLink> does name-conflict checking only when a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> being <GlossaryTerm  term={"uninterned"}><i>uninterned</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"shadowing symbol"}><i>shadowing symbol</i></GlossaryTerm>. 



– Giving a shadowing symbol to <DictionaryLink  term={"unintern"}><b>unintern</b></DictionaryLink> can uncover a name conflict that had previously been resolved by the shadowing. 



– Package functions signal name-conflict errors of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"package-error"}><b>package-error</b></DictionaryLink> before making any change to the package structure. When multiple changes are to be made, it is permissible for the implementation to process each change separately. For example, when <DictionaryLink  term={"export"}><b>export</b></DictionaryLink> is 







 



 



given a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> of <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm>, aborting from a name conflict caused by the second <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> in the <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> might still export the first <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> in the <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm>. However, a name-conflict error caused by <DictionaryLink  term={"export"}><b>export</b></DictionaryLink> of a single <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> will be signaled before that <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>’s <GlossaryTerm  term={"accessibility"}><i>accessibility</i></GlossaryTerm> in any <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> is changed. 



– Continuing from a name-conflict error must offer the user a chance to resolve the name conflict in favor of either of the candidates. The <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> structure should be altered to reflect the resolution of the name conflict, via <DictionaryLink  term={"shadowing-import"}><b>shadowing-import</b></DictionaryLink>, <DictionaryLink  term={"unintern"}><b>unintern</b></DictionaryLink>, or <DictionaryLink  term={"unexport"}><b>unexport</b></DictionaryLink>. 



– A name conflict in <DictionaryLink  term={"use-package"}><b>use-package</b></DictionaryLink> between a *symbol present* in the using <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> and an <GlossaryTerm styled={true} term={"external symbol"}><i>external symbol</i></GlossaryTerm> of the used <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> is resolved in favor of the first <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> by making it a shadowing <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>, or in favor of the second <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> by uninterning the first <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> from the using <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>. 



– A name conflict in <DictionaryLink  term={"export"}><b>export</b></DictionaryLink> or <DictionaryLink  term={"unintern"}><b>unintern</b></DictionaryLink> due to a <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>’s inheriting two *distinct symbols* with the *same name* (under <DictionaryLink  term={"string"}><b>string=</b></DictionaryLink>) from two other <GlossaryTerm  term={"package"}><i>packages</i></GlossaryTerm> can be resolved in favor of either <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> by importing it into the using <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> and making it a <GlossaryTerm styled={true} term={"shadowing symbol"}><i>shadowing symbol</i></GlossaryTerm>, just as with <DictionaryLink  term={"use-package"}><b>use-package</b></DictionaryLink>. 




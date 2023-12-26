 



Within one <ClLinks  term={"package"}><i>package</i></ClLinks>, any particular name can refer to at most one <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. A name conflict is said to occur when there would be more than one candidate <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. Any time a name conflict is about to occur, a *correctable error* is signaled. 



The following rules apply to name conflicts: 



– Name conflicts are detected when they become possible, that is, when the package structure is altered. Name conflicts are not checked during every name lookup. 



– If the *same symbol* is <ClLinks  term={"accessible"}><i>accessible</i></ClLinks> to a <ClLinks  term={"package"}><i>package</i></ClLinks> through more than one path, there is no name conflict. A <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> cannot conflict with itself. Name conflicts occur only between *distinct symbols* with the same name (under <ClLinks  term={"string"}><b>string=</b></ClLinks>). 



– Every <ClLinks  term={"package"}><i>package</i></ClLinks> has a list of shadowing <ClLinks  term={"symbol"}><i>symbols</i></ClLinks>. A shadowing <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> takes precedence over any other <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> of the same name that would otherwise be <ClLinks  term={"accessible"}><i>accessible</i></ClLinks> in the <ClLinks  term={"package"}><i>package</i></ClLinks>. A name conflict involving a shadowing symbol is always resolved in favor of the shadowing <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>, without signaling an error (except for one exception involving <DictionaryLink  term={"import"}><b>import</b></DictionaryLink>). See <DictionaryLink  term={"shadow"}><b>shadow</b></DictionaryLink> and <DictionaryLink  term={"shadowing-import"}><b>shadowing-import</b></DictionaryLink>. 



– The functions <DictionaryLink  term={"use-package"}><b>use-package</b></DictionaryLink>, <DictionaryLink  term={"import"}><b>import</b></DictionaryLink>, and <DictionaryLink  term={"export"}><b>export</b></DictionaryLink> check for name conflicts. 



– <DictionaryLink  term={"shadow"}><b>shadow</b></DictionaryLink> and <DictionaryLink  term={"shadowing-import"}><b>shadowing-import</b></DictionaryLink> never signal a name-conflict error. 



– <DictionaryLink  term={"unuse-package"}><b>unuse-package</b></DictionaryLink> and <DictionaryLink  term={"unexport"}><b>unexport</b></DictionaryLink> do not need to do any name-conflict checking. <DictionaryLink  term={"unintern"}><b>unintern</b></DictionaryLink> does name-conflict checking only when a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> being <ClLinks  term={"uninterned"}><i>uninterned</i></ClLinks> is a <GlossaryTerm styled={true} term={"shadowing symbol"}><i>shadowing symbol</i></GlossaryTerm>. 



– Giving a shadowing symbol to <DictionaryLink  term={"unintern"}><b>unintern</b></DictionaryLink> can uncover a name conflict that had previously been resolved by the shadowing. 



– Package functions signal name-conflict errors of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"package-error"}><b>package-error</b></DictionaryLink> before making any change to the package structure. When multiple changes are to be made, it is permissible for the implementation to process each change separately. For example, when <DictionaryLink  term={"export"}><b>export</b></DictionaryLink> is 







 



 



given a <ClLinks  term={"list"}><i>list</i></ClLinks> of <ClLinks  term={"symbol"}><i>symbols</i></ClLinks>, aborting from a name conflict caused by the second <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> in the <ClLinks  term={"list"}><i>list</i></ClLinks> might still export the first <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> in the <ClLinks  term={"list"}><i>list</i></ClLinks>. However, a name-conflict error caused by <DictionaryLink  term={"export"}><b>export</b></DictionaryLink> of a single <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> will be signaled before that <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>’s <ClLinks  term={"accessibility"}><i>accessibility</i></ClLinks> in any <ClLinks  term={"package"}><i>package</i></ClLinks> is changed. 



– Continuing from a name-conflict error must offer the user a chance to resolve the name conflict in favor of either of the candidates. The <ClLinks  term={"package"}><i>package</i></ClLinks> structure should be altered to reflect the resolution of the name conflict, via <DictionaryLink  term={"shadowing-import"}><b>shadowing-import</b></DictionaryLink>, <DictionaryLink  term={"unintern"}><b>unintern</b></DictionaryLink>, or <DictionaryLink  term={"unexport"}><b>unexport</b></DictionaryLink>. 



– A name conflict in <DictionaryLink  term={"use-package"}><b>use-package</b></DictionaryLink> between a *symbol present* in the using <ClLinks  term={"package"}><i>package</i></ClLinks> and an <GlossaryTerm styled={true} term={"external symbol"}><i>external symbol</i></GlossaryTerm> of the used <ClLinks  term={"package"}><i>package</i></ClLinks> is resolved in favor of the first <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> by making it a shadowing <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>, or in favor of the second <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> by uninterning the first <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> from the using <ClLinks  term={"package"}><i>package</i></ClLinks>. 



– A name conflict in <DictionaryLink  term={"export"}><b>export</b></DictionaryLink> or <DictionaryLink  term={"unintern"}><b>unintern</b></DictionaryLink> due to a <ClLinks  term={"package"}><i>package</i></ClLinks>’s inheriting two *distinct symbols* with the *same name* (under <ClLinks  term={"string"}><b>string=</b></ClLinks>) from two other <ClLinks  term={"package"}><i>packages</i></ClLinks> can be resolved in favor of either <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> by importing it into the using <ClLinks  term={"package"}><i>package</i></ClLinks> and making it a <GlossaryTerm styled={true} term={"shadowing symbol"}><i>shadowing symbol</i></GlossaryTerm>, just as with <DictionaryLink  term={"use-package"}><b>use-package</b></DictionaryLink>. 




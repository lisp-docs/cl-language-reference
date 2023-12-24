 



Within one <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>, any particular name can refer to at most one <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. A name conflict is said to occur when there would be more than one candidate <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. Any time a name conflict is about to occur, a *correctable error* is signaled. 



The following rules apply to name conflicts: 



– Name conflicts are detected when they become possible, that is, when the package structure is altered. Name conflicts are not checked during every name lookup. 



– If the *same symbol* is <ClLinks styled={true} term={"accessible"}><i>accessible</i></ClLinks> to a <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> through more than one path, there is no name conflict. A <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> cannot conflict with itself. Name conflicts occur only between *distinct symbols* with the same name (under <ClLinks styled={true} term={"string"}><b>string=</b></ClLinks>). 



– Every <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> has a list of shadowing <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks>. A shadowing <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> takes precedence over any other <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> of the same name that would otherwise be <ClLinks styled={true} term={"accessible"}><i>accessible</i></ClLinks> in the <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. A name conflict involving a shadowing symbol is always resolved in favor of the shadowing <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>, without signaling an error (except for one exception involving <ClLinks styled={true} term={"import"}><b>import</b></ClLinks>). See <ClLinks styled={true} term={"shadow"}><b>shadow</b></ClLinks> and <ClLinks styled={true} term={"shadowing-import"}><b>shadowing-import</b></ClLinks>. 



– The functions <ClLinks styled={true} term={"use-package"}><b>use-package</b></ClLinks>, <ClLinks styled={true} term={"import"}><b>import</b></ClLinks>, and <ClLinks styled={true} term={"export"}><b>export</b></ClLinks> check for name conflicts. 



– <ClLinks styled={true} term={"shadow"}><b>shadow</b></ClLinks> and <ClLinks styled={true} term={"shadowing-import"}><b>shadowing-import</b></ClLinks> never signal a name-conflict error. 



– <ClLinks styled={true} term={"unuse-package"}><b>unuse-package</b></ClLinks> and <ClLinks styled={true} term={"unexport"}><b>unexport</b></ClLinks> do not need to do any name-conflict checking. <ClLinks styled={true} term={"unintern"}><b>unintern</b></ClLinks> does name-conflict checking only when a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> being <ClLinks styled={true} term={"uninterned"}><i>uninterned</i></ClLinks> is a *shadowing symbol*. 



– Giving a shadowing symbol to <ClLinks styled={true} term={"unintern"}><b>unintern</b></ClLinks> can uncover a name conflict that had previously been resolved by the shadowing. 



– Package functions signal name-conflict errors of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"package-error"}><b>package-error</b></ClLinks> before making any change to the package structure. When multiple changes are to be made, it is permissible for the implementation to process each change separately. For example, when <ClLinks styled={true} term={"export"}><b>export</b></ClLinks> is 







 



 



given a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks>, aborting from a name conflict caused by the second <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> in the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> might still export the first <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> in the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>. However, a name-conflict error caused by <ClLinks styled={true} term={"export"}><b>export</b></ClLinks> of a single <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> will be signaled before that <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>’s <ClLinks styled={true} term={"accessibility"}><i>accessibility</i></ClLinks> in any <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> is changed. 



– Continuing from a name-conflict error must offer the user a chance to resolve the name conflict in favor of either of the candidates. The <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> structure should be altered to reflect the resolution of the name conflict, via <ClLinks styled={true} term={"shadowing-import"}><b>shadowing-import</b></ClLinks>, <ClLinks styled={true} term={"unintern"}><b>unintern</b></ClLinks>, or <ClLinks styled={true} term={"unexport"}><b>unexport</b></ClLinks>. 



– A name conflict in <ClLinks styled={true} term={"use-package"}><b>use-package</b></ClLinks> between a *symbol present* in the using <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> and an *external symbol* of the used <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> is resolved in favor of the first <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> by making it a shadowing <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>, or in favor of the second <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> by uninterning the first <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> from the using <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. 



– A name conflict in <ClLinks styled={true} term={"export"}><b>export</b></ClLinks> or <ClLinks styled={true} term={"unintern"}><b>unintern</b></ClLinks> due to a <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>’s inheriting two *distinct symbols* with the *same name* (under <ClLinks styled={true} term={"string"}><b>string=</b></ClLinks>) from two other <ClLinks styled={true} term={"package"}><i>packages</i></ClLinks> can be resolved in favor of either <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> by importing it into the using <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> and making it a *shadowing symbol*, just as with <ClLinks styled={true} term={"use-package"}><b>use-package</b></ClLinks>. 




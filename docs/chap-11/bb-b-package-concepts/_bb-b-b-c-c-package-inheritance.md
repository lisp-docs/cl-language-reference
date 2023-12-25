 



<GlossaryTerm styled={true} term={"package"}><i>Packages</i></GlossaryTerm> can be built up in layers. From one point of view, a <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> is a single collection of mappings from <GlossaryTerm styled={true} term={"string"}><i>strings</i></GlossaryTerm> into *internal symbols* and *external symbols*. However, some of these mappings might be established within the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> itself, while other mappings are inherited from other <GlossaryTerm styled={true} term={"package"}><i>packages</i></GlossaryTerm> via <DictionaryLink styled={true} term={"use-package"}><b>use-package</b></DictionaryLink>. A <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is said to be <GlossaryTerm styled={true} term={"present"}><i>present</i></GlossaryTerm> in a <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> if the mapping is in the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> itself and is not inherited from somewhere else. 



There is no way to inherit the *internal symbols* of another <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>; to refer to an *internal symbol* using the *Lisp reader* , a <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> containing the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> must be made to be the *current package*, a *package prefix* must be used, or the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> must be *imported* into the *current package*. 




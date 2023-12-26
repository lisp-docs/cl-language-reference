 



<GlossaryTerm  term={"package"}><i>Packages</i></GlossaryTerm> can be built up in layers. From one point of view, a <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> is a single collection of mappings from <GlossaryTerm  term={"string"}><i>strings</i></GlossaryTerm> into <GlossaryTerm styled={true} term={"internal symbol"}><i>internal symbols</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"external symbol"}><i>external symbols</i></GlossaryTerm>. However, some of these mappings might be established within the <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> itself, while other mappings are inherited from other <GlossaryTerm  term={"package"}><i>packages</i></GlossaryTerm> via <DictionaryLink  term={"use-package"}><b>use-package</b></DictionaryLink>. A <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> is said to be <GlossaryTerm  term={"present"}><i>present</i></GlossaryTerm> in a <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> if the mapping is in the <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> itself and is not inherited from somewhere else. 



There is no way to inherit the <GlossaryTerm styled={true} term={"internal symbol"}><i>internal symbols</i></GlossaryTerm> of another <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>; to refer to an <GlossaryTerm styled={true} term={"internal symbol"}><i>internal symbol</i></GlossaryTerm> using the *Lisp reader* , a <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> containing the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> must be made to be the <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"package prefix"}><i>package prefix</i></GlossaryTerm> must be used, or the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> must be *imported* into the <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm>. 




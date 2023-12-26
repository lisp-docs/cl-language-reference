 



<ClLinks  term={"package"}><i>Packages</i></ClLinks> can be built up in layers. From one point of view, a <ClLinks  term={"package"}><i>package</i></ClLinks> is a single collection of mappings from <ClLinks  term={"string"}><i>strings</i></ClLinks> into <GlossaryTerm styled={true} term={"internal symbol"}><i>internal symbols</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"external symbol"}><i>external symbols</i></GlossaryTerm>. However, some of these mappings might be established within the <ClLinks  term={"package"}><i>package</i></ClLinks> itself, while other mappings are inherited from other <ClLinks  term={"package"}><i>packages</i></ClLinks> via <ClLinks  term={"use-package"}><b>use-package</b></ClLinks>. A <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is said to be <ClLinks  term={"present"}><i>present</i></ClLinks> in a <ClLinks  term={"package"}><i>package</i></ClLinks> if the mapping is in the <ClLinks  term={"package"}><i>package</i></ClLinks> itself and is not inherited from somewhere else. 



There is no way to inherit the <GlossaryTerm styled={true} term={"internal symbol"}><i>internal symbols</i></GlossaryTerm> of another <ClLinks  term={"package"}><i>package</i></ClLinks>; to refer to an <GlossaryTerm styled={true} term={"internal symbol"}><i>internal symbol</i></GlossaryTerm> using the *Lisp reader* , a <ClLinks  term={"package"}><i>package</i></ClLinks> containing the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> must be made to be the <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"package prefix"}><i>package prefix</i></GlossaryTerm> must be used, or the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> must be *imported* into the <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm>. 




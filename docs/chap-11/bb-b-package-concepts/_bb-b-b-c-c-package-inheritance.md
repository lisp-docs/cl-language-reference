 



<ClLinks  term={"package"}><i>Packages</i></ClLinks> can be built up in layers. From one point of view, a <ClLinks  term={"package"}><i>package</i></ClLinks> is a single collection of mappings from <ClLinks  term={"string"}><i>strings</i></ClLinks> into *internal symbols* and *external symbols*. However, some of these mappings might be established within the <ClLinks  term={"package"}><i>package</i></ClLinks> itself, while other mappings are inherited from other <ClLinks  term={"package"}><i>packages</i></ClLinks> via <ClLinks  term={"use-package"}><b>use-package</b></ClLinks>. A <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is said to be <ClLinks  term={"present"}><i>present</i></ClLinks> in a <ClLinks  term={"package"}><i>package</i></ClLinks> if the mapping is in the <ClLinks  term={"package"}><i>package</i></ClLinks> itself and is not inherited from somewhere else. 



There is no way to inherit the *internal symbols* of another <ClLinks  term={"package"}><i>package</i></ClLinks>; to refer to an *internal symbol* using the *Lisp reader* , a <ClLinks  term={"package"}><i>package</i></ClLinks> containing the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> must be made to be the *current package*, a *package prefix* must be used, or the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> must be *imported* into the *current package*. 




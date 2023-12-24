 



If :unspecific is the value of a <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> component, the component is considered to be “absent” or to “have no meaning” in the <ClLinks styled={true} term={"filename"}><i>filename</i></ClLinks> being represented by the <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks>. 



Whether a value of :unspecific is permitted for any component on any given *file system* accessible to the <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> is <ClLinks styled={true} term={"implementation-defined"}><i>implementation-defined</i></ClLinks>. A *conforming program* must never unconditionally use a :unspecific as the value of a <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> component because such a value is not guaranteed to be permissible in all implementations. However, a *conforming program* can, if it is careful, successfully manipulate user-supplied data which contains or refers to non-portable <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> components. And certainly a *conforming program* should be prepared for the possibility that any components of a <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> could be :unspecific. 



When *reading*<sub>1</sub> the value of any <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> component, *conforming programs* should be prepared for the value to be :unspecific. 



When *writing*<sub>1</sub> the value of any <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> component, the consequences are undefined if :unspecific is given for a <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> in a *file system* for which it does not make sense. 




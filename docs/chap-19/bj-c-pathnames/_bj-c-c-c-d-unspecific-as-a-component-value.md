 



If :unspecific is the value of a <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> component, the component is considered to be “absent” or to “have no meaning” in the <GlossaryTerm styled={true} term={"filename"}><i>filename</i></GlossaryTerm> being represented by the <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm>. 



Whether a value of :unspecific is permitted for any component on any given *file system* accessible to the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm>. A *conforming program* must never unconditionally use a :unspecific as the value of a <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> component because such a value is not guaranteed to be permissible in all implementations. However, a *conforming program* can, if it is careful, successfully manipulate user-supplied data which contains or refers to non-portable <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> components. And certainly a *conforming program* should be prepared for the possibility that any components of a <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> could be :unspecific. 



When *reading*<sub>1</sub> the value of any <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> component, *conforming programs* should be prepared for the value to be :unspecific. 



When *writing*<sub>1</sub> the value of any <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> component, the consequences are undefined if :unspecific is given for a <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> in a *file system* for which it does not make sense. 




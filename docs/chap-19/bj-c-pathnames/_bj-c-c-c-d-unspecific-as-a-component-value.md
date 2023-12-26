 



If :unspecific is the value of a <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> component, the component is considered to be “absent” or to “have no meaning” in the <GlossaryTerm  term={"filename"}><i>filename</i></GlossaryTerm> being represented by the <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm>. 



Whether a value of :unspecific is permitted for any component on any given <GlossaryTerm styled={true} term={"file system"}><i>file system</i></GlossaryTerm> accessible to the <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm> is <GlossaryTerm  term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm>. A <GlossaryTerm styled={true} term={"conforming program"}><i>conforming program</i></GlossaryTerm> must never unconditionally use a :unspecific as the value of a <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> component because such a value is not guaranteed to be permissible in all implementations. However, a <GlossaryTerm styled={true} term={"conforming program"}><i>conforming program</i></GlossaryTerm> can, if it is careful, successfully manipulate user-supplied data which contains or refers to non-portable <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> components. And certainly a <GlossaryTerm styled={true} term={"conforming program"}><i>conforming program</i></GlossaryTerm> should be prepared for the possibility that any components of a <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> could be :unspecific. 



When *reading*<sub>1</sub> the value of any <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> component, <GlossaryTerm styled={true} term={"conforming program"}><i>conforming programs</i></GlossaryTerm> should be prepared for the value to be :unspecific. 



When *writing*<sub>1</sub> the value of any <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> component, the consequences are undefined if :unspecific is given for a <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> in a <GlossaryTerm styled={true} term={"file system"}><i>file system</i></GlossaryTerm> for which it does not make sense. 




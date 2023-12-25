 



<GlossaryTerm styled={true} term={"string"}><i>Strings</i></GlossaryTerm> in <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> component values never contain special <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> that represent separation between <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> fields, such as <GlossaryTerm styled={true} term={"slash"}><i>slash</i></GlossaryTerm> in Unix <GlossaryTerm styled={true} term={"filename"}><i>filenames</i></GlossaryTerm>. Whether separator <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> are permitted as part of a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> in a <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> component is <GlossaryTerm styled={true} term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm>; however, if the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> does permit it, it must arrange to properly “quote” the character for the *file system* when constructing a <GlossaryTerm styled={true} term={"namestring"}><i>namestring</i></GlossaryTerm>. For example, 



;; In a TOPS-20 implementation, which uses <i><sup>∧</sup></i>V to quote 



(NAMESTRING (MAKE-PATHNAME :HOST "OZ" :NAME "&lt;TEST&gt;")) 



<i>→</i> #P"OZ:PS:<i><sup>∧</sup></i>V<test<i><sup>∧</sup>V&gt;" 



<i><sup>not</sup> →</i> #P"OZ:PS:&lt;TEST&gt;" 



</test<i>
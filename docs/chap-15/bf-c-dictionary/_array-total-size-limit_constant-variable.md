**array-total-size-limit** <GlossaryTerm styled={true} term={"constant variable"}><i>Constant Variable</i></GlossaryTerm> 



**Constant Value:** 



A positive <GlossaryTerm  term={"fixnum"}><i>fixnum</i></GlossaryTerm>, the exact magnitude of which is <GlossaryTerm  term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>, but which is not less than 1024. 



**Description:** 



The upper exclusive bound on the <GlossaryTerm styled={true} term={"array total size"}><i>array total size</i></GlossaryTerm> of an <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>. 



The actual limit on the <GlossaryTerm styled={true} term={"array total size"}><i>array total size</i></GlossaryTerm> imposed by the <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm> might vary according the <GlossaryTerm styled={true} term={"element type"}><i>element type</i></GlossaryTerm> of the <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>; in this case, the value of <DictionaryLink  term={"array-total-size-limit"}><b>array-total-size-limit</b></DictionaryLink> will be the smallest of these possible limits. 



**See Also:** 



<DictionaryLink  term={"make-array"}><b>make-array</b></DictionaryLink>, <DictionaryLink  term={"array-element-type"}><b>array-element-type</b></DictionaryLink> 







 



 




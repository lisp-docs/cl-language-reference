**array-total-size-limit** <GlossaryTerm styled={true} term={"constant variable"}><i>Constant Variable</i></GlossaryTerm> 



**Constant Value:** 



A positive <ClLinks  term={"fixnum"}><i>fixnum</i></ClLinks>, the exact magnitude of which is <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>, but which is not less than 1024. 



**Description:** 



The upper exclusive bound on the <GlossaryTerm styled={true} term={"array total size"}><i>array total size</i></GlossaryTerm> of an <ClLinks  term={"array"}><i>array</i></ClLinks>. 



The actual limit on the <GlossaryTerm styled={true} term={"array total size"}><i>array total size</i></GlossaryTerm> imposed by the <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> might vary according the <GlossaryTerm styled={true} term={"element type"}><i>element type</i></GlossaryTerm> of the <ClLinks  term={"array"}><i>array</i></ClLinks>; in this case, the value of <DictionaryLink  term={"array-total-size-limit"}><b>array-total-size-limit</b></DictionaryLink> will be the smallest of these possible limits. 



**See Also:** 



<DictionaryLink  term={"make-array"}><b>make-array</b></DictionaryLink>, <DictionaryLink  term={"array-element-type"}><b>array-element-type</b></DictionaryLink> 







 



 




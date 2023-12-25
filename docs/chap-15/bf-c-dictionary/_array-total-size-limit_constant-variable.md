**array-total-size-limit** *Constant Variable* 



**Constant Value:** 



A positive <GlossaryTerm styled={true} term={"fixnum"}><i>fixnum</i></GlossaryTerm>, the exact magnitude of which is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>, but which is not less than 1024. 



**Description:** 



The upper exclusive bound on the *array total size* of an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. 



The actual limit on the *array total size* imposed by the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> might vary according the *element type* of the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>; in this case, the value of <DictionaryLink styled={true} term={"array-total-size-limit"}><b>array-total-size-limit</b></DictionaryLink> will be the smallest of these possible limits. 



**See Also:** 



<DictionaryLink styled={true} term={"make-array"}><b>make-array</b></DictionaryLink>, <DictionaryLink styled={true} term={"array-element-type"}><b>array-element-type</b></DictionaryLink> 







 



 




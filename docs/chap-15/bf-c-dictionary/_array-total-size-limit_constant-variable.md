**array-total-size-limit** *Constant Variable* 



**Constant Value:** 



A positive <ClLinks styled={true} term={"fixnum"}><i>fixnum</i></ClLinks>, the exact magnitude of which is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>, but which is not less than 1024. 



**Description:** 



The upper exclusive bound on the *array total size* of an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>. 



The actual limit on the *array total size* imposed by the <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> might vary according the *element type* of the <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>; in this case, the value of <ClLinks styled={true} term={"array-total-size-limit"}><b>array-total-size-limit</b></ClLinks> will be the smallest of these possible limits. 



**See Also:** 



<ClLinks styled={true} term={"make-array"}><b>make-array</b></ClLinks>, <ClLinks styled={true} term={"array-element-type"}><b>array-element-type</b></ClLinks> 







 



 




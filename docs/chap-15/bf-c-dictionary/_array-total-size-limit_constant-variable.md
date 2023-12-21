**array-total-size-limit** *Constant Variable* 



**Constant Value:** 



A positive *fixnum*, the exact magnitude of which is *implementation-dependent*, but which is not less than 1024. 



**Description:** 



The upper exclusive bound on the *array total size* of an *array*. 



The actual limit on the *array total size* imposed by the *implementation* might vary according the *element type* of the *array*; in this case, the value of **array-total-size-limit** will be the smallest of these possible limits. 



**See Also:** 



**make-array**, **array-element-type** 







 



 




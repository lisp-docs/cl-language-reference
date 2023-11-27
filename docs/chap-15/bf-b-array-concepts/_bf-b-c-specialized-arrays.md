 

An *array* can be a *general array*, meaning each *element* may be any *object*, or it may be a *specialized array*, meaning that each *element* must be of a restricted *type*. 

The phrasing “an *array specialized* to *type hhtype&#10217;” is sometimes used to emphasize the *element type* of an *array*. This phrasing is tolerated even when the &#10216;type&#10217; is **t**, even though an *array specialized* to *type t* is a *general array*, not a *specialized array*. 

Figure 15–1 lists some *defined names* that are applicable to *array* creation, *access*, and information operations. 

|&#60;p&#62;**adjust-array array-has-fill-pointer-p make-array** &#60;/p&#62;&#60;p&#62;**adjustable-array-p array-in-bounds-p svref** &#60;/p&#62;&#60;p&#62;**aref array-rank upgraded-array-element-type array-dimension array-rank-limit upgraded-complex-part-type array-dimension-limit array-row-major-index vector** &#60;/p&#62;&#60;p&#62;**array-dimensions array-total-size vector-pop** &#60;/p&#62;&#60;p&#62;**array-displacement array-total-size-limit vector-push** &#60;/p&#62;&#60;p&#62;**array-element-type fill-pointer vector-push-extend**&#60;/p&#62;|
| :- |


**Figure 15–1. General Purpose Array-Related Defined Names** 



 

 


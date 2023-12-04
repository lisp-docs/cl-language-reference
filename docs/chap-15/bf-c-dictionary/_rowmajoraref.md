**row-major-aref** *Accessor* 



**Syntax:** 



**row-major-aref** *array index → element* 



**(setf (row-major-aref** *array index***)** *new-element***)** 



**Arguments and Values:** 



*array*—an *array*. 



*index*—a *valid array row-major index* for the *array*. 



*element*, *new-element*—an *object*. 



**Description:** 



Considers *array* as a *vector* by viewing its *elements* in row-major order, and returns the *element* of that *vector* which is referred to by the given *index*. 



**row-major-aref** is valid for use with **setf**. 



**See Also:** 



**aref**, **array-row-major-index** 



**Notes:** 



(row-major-aref array index) *≡* 



(aref (make-array (array-total-size array) 



:displaced-to array 



:element-type (array-element-type array)) 



index) 



(aref array i1 i2 ...) *≡* 



(row-major-aref array (array-row-major-index array i1 i2)) 







 



 




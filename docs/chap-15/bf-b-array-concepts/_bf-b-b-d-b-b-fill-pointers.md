**15.1.1.3.1.1 Fill Pointers** 

A *fill pointer* is a non-negative *integer* no larger than the total number of *elements* in a *vector* . Not all *vectors* have *fill pointers*. See the *functions* **make-array** and **adjust-array**. 

An *element* of a *vector* is said to be *active* if it has an index that is greater than or equal to zero, but less than the *fill pointer* (if any). For an *array* that has no *fill pointer* , all *elements* are considered *active*. 

Only *vectors* may have *fill pointers*; multidimensional *arrays* may not. A multidimensional *array* that is displaced to a *vector* that has a *fill pointer* can be created. 


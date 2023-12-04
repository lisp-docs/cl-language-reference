 



Figure 18–1 lists some *defined names* that are applicable to *hash tables*. The following rules apply to *hash tables*. 



– A *hash table* can only associate one value with a given key. If an attempt is made to add a second value for a given key, the second value will replace the first. Thus, adding a value to a *hash table* is a destructive operation; the *hash table* is modified. 



– There are four kinds of *hash tables*: those whose keys are compared with **eq**, those whose keys are compared with **eql**, those whose keys are compared with **equal**, and those whose keys are compared with **equalp**. 



– *Hash tables* are created by **make-hash-table**. **gethash** is used to look up a key and find the associated value. New entries are added to *hash tables* using **setf** with **gethash**. **remhash** is used to remove an entry. For example: 



(setq a (make-hash-table)) *→* #<HASH-TABLE EQL 0/120 32536573> 



(setf (gethash ’color a) ’brown) *→* BROWN 



(setf (gethash ’name a) ’fred) *→* FRED 



(gethash ’color a) *→* BROWN, *true* 



(gethash ’name a) *→* FRED, *true* 



(gethash ’pointy a) *→* NIL, *false* 



In this example, the symbols color and name are being used as keys, and the symbols brown and fred are being used as the associated values. The *hash table* has two items in it, one of which associates from color to brown, and the other of which associates from name to fred. 



– A key or a value may be any *object*. 



– The existence of an entry in the *hash table* can be determined from the *secondary value* returned by **gethash**. 



|<p>**clrhash hash-table-p remhash gethash make-hash-table sxhash** </p><p>**hash-table-count maphash**</p>|

| :- |





**Figure 18–1. Hash-table defined names** 



Hash 



 



 




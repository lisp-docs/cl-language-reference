**make-hash-table** *Function* 



**Syntax:** 



**make-hash-table** &amp;key *test size rehash-size rehash-threshold → hash-table* 



**Arguments and Values:** 



*test*—a *designator* for one of the *functions* **eq**, **eql**, **equal**, or **equalp**. The default is **eql**. *size*—a non-negative *integer* . The default is *implementation-dependent*. 



*rehash-size*—a *real* of *type* (or (integer 1 \*) (float (1.0) \*)). The default is *implementation dependent*. 



*rehash-threshold*—a *real* of *type* (real 0 1). The default is *implementation-dependent*. *hash-table*—a *hash table*. 



**Description:** 



Creates and returns a new *hash table*. 



*test* determines how *keys* are compared. An *object* is said to be present in the *hash-table* if that *object* is the *same* under the *test* as the *key* for some entry in the *hash-table*. 



*size* is a hint to the *implementation* about how much initial space to allocate in the *hash-table*. This information, taken together with the *rehash-threshold*, controls the approximate number of entries which it should be possible to insert before the table has to grow. The actual size might be 







 



 



rounded up from *size* to the next ‘good’ size; for example, some *implementations* might round to the next prime number. 



*rehash-size* specifies a minimum amount to increase the size of the *hash-table* when it becomes full enough to require rehashing; see *rehash-theshold* below. If *rehash-size* is an *integer* , the expected growth rate for the table is additive and the *integer* is the number of entries to add; if it is a *float*, the expected growth rate for the table is multiplicative and the *float* is the ratio of the new size to the old size. As with *size*, the actual size of the increase might be rounded up. 



*rehash-threshold* specifies how full the *hash-table* can get before it must grow. It specifies the maximum desired hash-table occupancy level. 



The *values* of *rehash-size* and *rehash-threshold* do not constrain the *implementation* to use any particular method for computing when and by how much the size of *hash-table* should be enlarged. Such decisions are *implementation-dependent*, and these *values* only hints from the *programmer* to the *implementation*, and the *implementation* is permitted to ignore them. 



**Examples:**
```lisp
 

(setq table (make-hash-table)) *→* #<HASH-TABLE EQL 0/120 46142754> 

(setf (gethash "one" table) 1) *→* 1 

(gethash "one" table) *→* NIL, *false* 

(setq table (make-hash-table :test ’equal)) *→* #<HASH-TABLE EQUAL 0/139 46145547> (setf (gethash "one" table) 1) *→* 1 

(gethash "one" table) *→* 1, T 

(make-hash-table :rehash-size 1.5 :rehash-threshold 0.7) 

*→* #<HASH-TABLE EQL 0/120 46156620> 


```
**See Also:** 



**gethash**, **hash-table** 




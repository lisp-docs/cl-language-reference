**gethash** *Accessor* 



**Syntax:** 



**gethash** *key hash-table* &amp;optional *default → value, present-p* 



**(setf (gethash** *key hash-table* &amp;optional *default***)** *new-value***)** 



**Arguments and Values:** 



*key*—an *object*. 



*hash-table*—a *hash table*. 



*default*—an *object*. The default is **nil**. 



*value*—an *object*. 



*present-p*—a *generalized boolean*. 



**Description:** 



*Value* is the *object* in *hash-table* whose *key* is the *same* as *key* under the *hash-table*’s equivalence test. If there is no such entry, *value* is the *default*. 



*Present-p* is *true* if an entry is found; otherwise, it is *false*. 



**setf** may be used with **gethash** to modify the *value* associated with a given *key*, or to add a new entry. When a **gethash** *form* is used as a **setf** *place*, any *default* which is supplied is evaluated according to normal left-to-right evaluation rules, but its *value* is ignored. 



**Examples:**
```lisp
 

(setq table (make-hash-table)) *→* #<HASH-TABLE EQL 0/120 32206334> 

(gethash 1 table) *→* NIL, *false* 

(gethash 1 table 2) *→* 2, *false* 

(setf (gethash 1 table) "one") *→* "one" 

(setf (gethash 2 table "two") "two") *→* "two" 

(gethash 1 table) *→* "one", *true* 

(gethash 2 table) *→* "two", *true* 

(gethash nil table) *→* NIL, *false* 

(setf (gethash nil table) nil) *→* NIL 

(gethash nil table) *→* NIL, *true* 

(defvar \*counters\* (make-hash-table)) *→* \*COUNTERS\* 

(gethash ’foo \*counters\*) *→* NIL, *false* 

(gethash ’foo \*counters\* 0) *→* 0, *false* 



 

 

(defmacro how-many (obj) ‘(values (gethash ,obj \*counters\* 0))) *→* HOW-MANY 

(defun count-it (obj) (incf (how-many obj))) *→* COUNT-IT 

(dolist (x ’(bar foo foo bar bar baz)) (count-it x)) 

(how-many ’foo) *→* 2 

(how-many ’bar) *→* 3 

(how-many ’quux) *→* 0 


```
**See Also:** 



**remhash** 



**Notes:** 



The *secondary value*, *present-p*, can be used to distinguish the absence of an entry from the presence of an entry that has a value of *default*. 




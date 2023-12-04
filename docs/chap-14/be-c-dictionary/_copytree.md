**copy-tree** *Function* 



**Syntax:** 



**copy-tree** *tree → new-tree* 



**Arguments and Values:** 



*tree*—a *tree*. 



*new-tree*—a *tree*. 



**Description:** 



Creates a *copy* of a *tree* of *conses*. 



If *tree* is not a *cons*, it is returned; otherwise, the result is a new *cons* of the results of calling **copy-tree** on the *car* and *cdr* of *tree*. In other words, all *conses* in the *tree* represented by *tree* are copied recursively, stopping only when non-*conses* are encountered. 



**copy-tree** does not preserve circularities and the sharing of substructure. 



**Examples:**
```lisp
 



(setq object (list (cons 1 "one") 







 



 



(cons 2 (list ’a ’b ’c)))) 



*→* ((1 . "one") (2 A B C)) 



(setq object-too object) *→* ((1 . "one") (2 A B C)) 



(setq copy-as-list (copy-list object)) 



(setq copy-as-alist (copy-alist object)) 



(setq copy-as-tree (copy-tree object)) 



(eq object object-too) *→ true* 



(eq copy-as-tree object) *→ false* 



(eql copy-as-tree object) *→ false* 



(equal copy-as-tree object) *→ true* 



(setf (first (cdr (second object))) "a" 



(car (second object)) "two" 



(car object) ’(one . 1)) *→* (ONE . 1) 



object *→* ((ONE . 1) ("two" "a" B C)) 



object-too *→* ((ONE . 1) ("two" "a" B C)) 



copy-as-list *→* ((1 . "one") ("two" "a" B C)) 



copy-as-alist *→* ((1 . "one") (2 "a" B C)) 



copy-as-tree *→* ((1 . "one") (2 A B C)) 




```
**See Also:** 



**tree-equal** 




**copy-tree** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"copy-tree"}><b>copy-tree</b></ClLinks> *tree → new-tree* 



**Arguments and Values:** 



<ClLinks styled={true} term={"tree"}><i>tree</i></ClLinks>—a <ClLinks styled={true} term={"tree"}><i>tree</i></ClLinks>. 



*new-tree*—a <ClLinks styled={true} term={"tree"}><i>tree</i></ClLinks>. 



**Description:** 



Creates a <ClLinks styled={true} term={"copy"}><i>copy</i></ClLinks> of a <ClLinks styled={true} term={"tree"}><i>tree</i></ClLinks> of *conses*. 



If <ClLinks styled={true} term={"tree"}><i>tree</i></ClLinks> is not a <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks>, it is returned; otherwise, the result is a new <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks> of the results of calling <ClLinks styled={true} term={"copy-tree"}><b>copy-tree</b></ClLinks> on the <ClLinks styled={true} term={"car"}><i>car</i></ClLinks> and <ClLinks styled={true} term={"cdr"}><i>cdr</i></ClLinks> of <ClLinks styled={true} term={"tree"}><i>tree</i></ClLinks>. In other words, all *conses* in the <ClLinks styled={true} term={"tree"}><i>tree</i></ClLinks> represented by <ClLinks styled={true} term={"tree"}><i>tree</i></ClLinks> are copied recursively, stopping only when non-*conses* are encountered. 



<ClLinks styled={true} term={"copy-tree"}><b>copy-tree</b></ClLinks> does not preserve circularities and the sharing of substructure. 



**Examples:**
```lisp
(setq object (list (cons 1 "one") 
		   
		   
		   (cons 2 (list ’a ’b ’c)))) 
→ ((1 . "one") (2 A B C)) 
(setq object-too object) → ((1 . "one") (2 A B C)) 
(setq copy-as-list (copy-list object)) 
(setq copy-as-alist (copy-alist object)) 
(setq copy-as-tree (copy-tree object)) 
(eq object object-too) → true 
(eq copy-as-tree object) → false 
(eql copy-as-tree object) → false 
(equal copy-as-tree object) → true 
(setf (first (cdr (second object))) "a" 
      (car (second object)) "two" 
      (car object) ’(one . 1)) → (ONE . 1) 
object → ((ONE . 1) ("two" "a" B C)) 
object-too → ((ONE . 1) ("two" "a" B C)) 
copy-as-list → ((1 . "one") ("two" "a" B C)) 
copy-as-alist → ((1 . "one") (2 "a" B C)) 
copy-as-tree → ((1 . "one") (2 A B C)) 
```
**See Also:** 



<ClLinks styled={true} term={"tree-equal"}><b>tree-equal</b></ClLinks> 




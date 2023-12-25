**copy-tree** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"copy-tree"}><b>copy-tree</b></DictionaryLink> *tree → new-tree* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"tree"}><i>tree</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"tree"}><i>tree</i></GlossaryTerm>. 



*new-tree*—a <GlossaryTerm styled={true} term={"tree"}><i>tree</i></GlossaryTerm>. 



**Description:** 



Creates a <GlossaryTerm styled={true} term={"copy"}><i>copy</i></GlossaryTerm> of a <GlossaryTerm styled={true} term={"tree"}><i>tree</i></GlossaryTerm> of *conses*. 



If <GlossaryTerm styled={true} term={"tree"}><i>tree</i></GlossaryTerm> is not a <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm>, it is returned; otherwise, the result is a new <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm> of the results of calling <DictionaryLink styled={true} term={"copy-tree"}><b>copy-tree</b></DictionaryLink> on the <GlossaryTerm styled={true} term={"car"}><i>car</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"cdr"}><i>cdr</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"tree"}><i>tree</i></GlossaryTerm>. In other words, all *conses* in the <GlossaryTerm styled={true} term={"tree"}><i>tree</i></GlossaryTerm> represented by <GlossaryTerm styled={true} term={"tree"}><i>tree</i></GlossaryTerm> are copied recursively, stopping only when non-*conses* are encountered. 



<DictionaryLink styled={true} term={"copy-tree"}><b>copy-tree</b></DictionaryLink> does not preserve circularities and the sharing of substructure. 



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



<DictionaryLink styled={true} term={"tree-equal"}><b>tree-equal</b></DictionaryLink> 




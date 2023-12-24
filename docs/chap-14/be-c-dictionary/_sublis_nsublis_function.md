**sublis, nsublis** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"sublis"}><b>sublis</b></ClLinks> *alist tree* &amp;key *key test test-not → new-tree* 



<ClLinks styled={true} term={"nsublis"}><b>nsublis</b></ClLinks> *alist tree* &amp;key *key test test-not → new-tree* 



**Arguments and Values:** 



<ClLinks styled={true} term={"alist"}><i>alist</i></ClLinks>—an *association list*. 



<ClLinks styled={true} term={"tree"}><i>tree</i></ClLinks>—a <ClLinks styled={true} term={"tree"}><i>tree</i></ClLinks>. 



*test*—a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of two <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> that returns a *generalized boolean*. *test-not<ClLinks styled={true} term={"t"}><i>—a </i></ClLinks>designator* for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of two <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> that returns a *generalized boolean*. *key*—a *designator* for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of one argument, or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



*new-tree*—a <ClLinks styled={true} term={"tree"}><i>tree</i></ClLinks>. 







 



 



**sublis, nsublis** 



**Description:** 



<ClLinks styled={true} term={"sublis"}><b>sublis</b></ClLinks> makes substitutions for <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> in <ClLinks styled={true} term={"tree"}><i>tree</i></ClLinks> (a structure of *conses*). <ClLinks styled={true} term={"nsublis"}><b>nsublis</b></ClLinks> is like <ClLinks styled={true} term={"sublis"}><b>sublis</b></ClLinks> but destructively modifies the relevant parts of the <ClLinks styled={true} term={"tree"}><i>tree</i></ClLinks>. 



<ClLinks styled={true} term={"sublis"}><b>sublis</b></ClLinks> looks at all subtrees and leaves of <ClLinks styled={true} term={"tree"}><i>tree</i></ClLinks>; if a subtree or leaf appears as a key in <ClLinks styled={true} term={"alist"}><i>alist</i></ClLinks> (that is, the key and the subtree or leaf *satisfy the test*), it is replaced by the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> with which that key is associated. This operation is non-destructive. In effect, <ClLinks styled={true} term={"sublis"}><b>sublis</b></ClLinks> can perform several <ClLinks styled={true} term={"subst"}><b>subst</b></ClLinks> operations simultaneously. 



If <ClLinks styled={true} term={"sublis"}><b>sublis</b></ClLinks> succeeds, a new copy of <ClLinks styled={true} term={"tree"}><i>tree</i></ClLinks> is returned in which each occurrence of such a subtree or leaf is replaced by the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> with which it is associated. If no changes are made, the original tree is returned. The original <ClLinks styled={true} term={"tree"}><i>tree</i></ClLinks> is left unchanged, but the result tree may share cells with it. 



<ClLinks styled={true} term={"nsublis"}><b>nsublis</b></ClLinks> is permitted to modify <ClLinks styled={true} term={"tree"}><i>tree</i></ClLinks> but otherwise returns the same values as <ClLinks styled={true} term={"sublis"}><b>sublis</b></ClLinks>. 

**Examples:**
```lisp

(sublis ’((x . 100) (z . zprime)) 
	 ’(plus x (minus g z x p) 4 . x)) 
→ (PLUS 100 (MINUS G ZPRIME 100 P) 4 . 100) 
(sublis ’(((+ x y) . (- x y)) ((- x y) . (+ x y))) 
	 ’(\* (/ (+ x y) (+ x p)) (- x y)) 
	 :test #’equal) 
→ (\* (/ (- X Y) (+ X P)) (+ X Y)) 
(setq tree1 ’(1 (1 2) ((1 2 3)) (((1 2 3 4))))) 
→ (1 (1 2) ((1 2 3)) (((1 2 3 4)))) 
(sublis ’((3 . "three")) tree1) 
→ (1 (1 2) ((1 2 "three")) (((1 2 "three" 4)))) 
(sublis ’((t . "string")) 
	 (sublis ’((1 . "") (4 . 44)) tree1) 
	 :key #’stringp) 
→ ("string" ("string" 2) (("string" 2 3)) ((("string" 2 3 44)))) 
tree1 → (1 (1 2) ((1 2 3)) (((1 2 3 4)))) 
(setq tree2 ’("one" ("one" "two") (("one" "Two" "three")))) 
→ ("one" ("one" "two") (("one" "Two" "three"))) 
(sublis ’(("two" . 2)) tree2) 
→ ("one" ("one" "two") (("one" "Two" "three"))) 
tree2 → ("one" ("one" "two") (("one" "Two" "three"))) 
(sublis ’(("two" . 2)) tree2 :test ’equal) 
→ ("one" ("one" 2) (("one" "Two" "three"))) 
(nsublis ’((t . ’temp)) 
	  tree1 
	  :key #’(lambda (x) (or (atom x) (< (list-length x) 3)))) 
→ ((QUOTE TEMP) (QUOTE TEMP) QUOTE TEMP) 




```
**Side Effects:** 



<ClLinks styled={true} term={"nsublis"}><b>nsublis</b></ClLinks> modifies <ClLinks styled={true} term={"tree"}><i>tree</i></ClLinks>. 



**See Also:** 



<ClLinks styled={true} term={"subst"}><b>subst</b></ClLinks>, Section 3.2.1 (Compiler Terminology), Section 3.6 (Traversal Rules and Side Effects) 



**Notes:** 



The :test-not parameter is deprecated. 



Because the side-effecting variants (*e.g.*, <ClLinks styled={true} term={"nsublis"}><b>nsublis</b></ClLinks>) potentially change the path that is being traversed, their effects in the presence of shared or circular structure structure may vary in surprising ways when compared to their non-side-effecting alternatives. To see this, consider the following side-effect behavior, which might be exhibited by some implementations: 



(defun test-it (fn) 



(let\* ((shared-piece (list ’a ’b)) 



(data (list shared-piece shared-piece))) 



(funcall fn ’((a . b) (b . a)) data))) 



(test-it #’sublis) → ((B A) (B A)) 



(test-it #’nsublis) → ((A B) (A B)) 




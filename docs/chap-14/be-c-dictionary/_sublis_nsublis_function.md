**sublis, nsublis** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"sublis"}><b>sublis</b></DictionaryLink> *alist tree* &amp;key *key test test-not → new-tree* 



<DictionaryLink styled={true} term={"nsublis"}><b>nsublis</b></DictionaryLink> *alist tree* &amp;key *key test test-not → new-tree* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"alist"}><i>alist</i></GlossaryTerm>—an *association list*. 



<GlossaryTerm styled={true} term={"tree"}><i>tree</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"tree"}><i>tree</i></GlossaryTerm>. 



*test*—a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of two <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> that returns a *generalized boolean*. *test-not<GlossaryTerm styled={true} term={"t"}><i>—a </i></GlossaryTerm>designator* for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of two <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> that returns a *generalized boolean*. *key*—a *designator* for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of one argument, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



*new-tree*—a <GlossaryTerm styled={true} term={"tree"}><i>tree</i></GlossaryTerm>. 







 



 



**sublis, nsublis** 



**Description:** 



<DictionaryLink styled={true} term={"sublis"}><b>sublis</b></DictionaryLink> makes substitutions for <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> in <GlossaryTerm styled={true} term={"tree"}><i>tree</i></GlossaryTerm> (a structure of *conses*). <DictionaryLink styled={true} term={"nsublis"}><b>nsublis</b></DictionaryLink> is like <DictionaryLink styled={true} term={"sublis"}><b>sublis</b></DictionaryLink> but destructively modifies the relevant parts of the <GlossaryTerm styled={true} term={"tree"}><i>tree</i></GlossaryTerm>. 



<DictionaryLink styled={true} term={"sublis"}><b>sublis</b></DictionaryLink> looks at all subtrees and leaves of <GlossaryTerm styled={true} term={"tree"}><i>tree</i></GlossaryTerm>; if a subtree or leaf appears as a key in <GlossaryTerm styled={true} term={"alist"}><i>alist</i></GlossaryTerm> (that is, the key and the subtree or leaf *satisfy the test*), it is replaced by the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> with which that key is associated. This operation is non-destructive. In effect, <DictionaryLink styled={true} term={"sublis"}><b>sublis</b></DictionaryLink> can perform several <DictionaryLink styled={true} term={"subst"}><b>subst</b></DictionaryLink> operations simultaneously. 



If <DictionaryLink styled={true} term={"sublis"}><b>sublis</b></DictionaryLink> succeeds, a new copy of <GlossaryTerm styled={true} term={"tree"}><i>tree</i></GlossaryTerm> is returned in which each occurrence of such a subtree or leaf is replaced by the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> with which it is associated. If no changes are made, the original tree is returned. The original <GlossaryTerm styled={true} term={"tree"}><i>tree</i></GlossaryTerm> is left unchanged, but the result tree may share cells with it. 



<DictionaryLink styled={true} term={"nsublis"}><b>nsublis</b></DictionaryLink> is permitted to modify <GlossaryTerm styled={true} term={"tree"}><i>tree</i></GlossaryTerm> but otherwise returns the same values as <DictionaryLink styled={true} term={"sublis"}><b>sublis</b></DictionaryLink>. **Examples:**
```lisp

(sublis ’((x . 100) (z . zprime)) 
	 ’(plus x (minus g z x p) 4 . x)) 
*→* (PLUS 100 (MINUS G ZPRIME 100 P) 4 . 100) 
(sublis ’(((+ x y) . (- x y)) ((- x y) . (+ x y))) 
	 ’(\* (/ (+ x y) (+ x p)) (- x y)) 
	 :test #’equal) 
*→* (\* (/ (- X Y) (+ X P)) (+ X Y)) 
(setq tree1 ’(1 (1 2) ((1 2 3)) (((1 2 3 4))))) 
*→* (1 (1 2) ((1 2 3)) (((1 2 3 4)))) 
(sublis ’((3 . "three")) tree1) 
*→* (1 (1 2) ((1 2 "three")) (((1 2 "three" 4)))) 
(sublis ’((t . "string")) 
	 (sublis ’((1 . "") (4 . 44)) tree1) 
	 :key #’stringp) 
*→* ("string" ("string" 2) (("string" 2 3)) ((("string" 2 3 44)))) 
tree1 *→* (1 (1 2) ((1 2 3)) (((1 2 3 4)))) 
(setq tree2 ’("one" ("one" "two") (("one" "Two" "three")))) 
*→* ("one" ("one" "two") (("one" "Two" "three"))) 
(sublis ’(("two" . 2)) tree2) 
*→* ("one" ("one" "two") (("one" "Two" "three"))) 
tree2 *→* ("one" ("one" "two") (("one" "Two" "three"))) 
(sublis ’(("two" . 2)) tree2 :test ’equal) 
*→* ("one" ("one" 2) (("one" "Two" "three"))) 
(nsublis ’((t . ’temp)) 
	  tree1 
	  :key #’(lambda (x) (or (atom x) (< (list-length x) 3)))) 
*→* ((QUOTE TEMP) (QUOTE TEMP) QUOTE TEMP) 




```
**Side Effects:** 



<DictionaryLink styled={true} term={"nsublis"}><b>nsublis</b></DictionaryLink> modifies <GlossaryTerm styled={true} term={"tree"}><i>tree</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink styled={true} term={"subst"}><b>subst</b></DictionaryLink>, Section 3.2.1 (Compiler Terminology), Section 3.6 (Traversal Rules and Side Effects) 



**Notes:** 



The :test-not parameter is deprecated. 



Because the side-effecting variants (*e.g.*, <DictionaryLink styled={true} term={"nsublis"}><b>nsublis</b></DictionaryLink>) potentially change the path that is being traversed, their effects in the presence of shared or circular structure structure may vary in surprising ways when compared to their non-side-effecting alternatives. To see this, consider the following side-effect behavior, which might be exhibited by some implementations: 



(defun test-it (fn) 



(let\* ((shared-piece (list ’a ’b)) 



(data (list shared-piece shared-piece))) 



(funcall fn ’((a . b) (b . a)) data))) 



(test-it #’sublis) *→* ((B A) (B A)) 



(test-it #’nsublis) *→* ((A B) (A B)) 




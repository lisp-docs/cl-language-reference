**subst, subst-if, subst-if-not, nsubst, nsubst-if, nsubst-if-not** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"subst"}><b>subst</b></ClLinks> *new old tree* &amp;key *key test test-not → new-tree* 



<ClLinks styled={true} term={"subst-if"}><b>subst-if</b></ClLinks> *new predicate tree* &amp;key *key → new-tree* 



<ClLinks styled={true} term={"subst-if-not"}><b>subst-if-not</b></ClLinks> *new predicate tree* &amp;key *key → new-tree* 



<ClLinks styled={true} term={"nsubst"}><b>nsubst</b></ClLinks> *new old tree* &amp;key *key test test-not → new-tree* 



<ClLinks styled={true} term={"nsubst-if"}><b>nsubst-if</b></ClLinks> *new predicate tree* &amp;key *key → new-tree* 



<ClLinks styled={true} term={"nsubst-if-not"}><b>nsubst-if-not</b></ClLinks> *new predicate tree* &amp;key *key → new-tree* 



**Arguments and Values:** 



*new*—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



*old*—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 







 



 



**subst, subst-if, subst-if-not, nsubst, nsubst-if,** *. . .* 



<ClLinks styled={true} term={"predicate"}><i>predicate</i></ClLinks>—a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> that names a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>, or a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of one argument that returns a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm> value. 



<ClLinks styled={true} term={"tree"}><i>tree</i></ClLinks>—a <ClLinks styled={true} term={"tree"}><i>tree</i></ClLinks>. 



*test*—a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of two <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> that returns a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. *test-not<ClLinks styled={true} term={"t"}><i>—a </i></ClLinks>designator* for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of two <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> that returns a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. <GlossaryTerm styled={true} term={"key"}><i>key</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of one argument, or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



*new-tree*—a <ClLinks styled={true} term={"tree"}><i>tree</i></ClLinks>. 



**Description:** 



<ClLinks styled={true} term={"subst"}><b>subst</b></ClLinks>, <ClLinks styled={true} term={"subst-if"}><b>subst-if</b></ClLinks>, and <ClLinks styled={true} term={"subst-if-not"}><b>subst-if-not</b></ClLinks> perform substitution operations on <ClLinks styled={true} term={"tree"}><i>tree</i></ClLinks>. Each function searches <ClLinks styled={true} term={"tree"}><i>tree</i></ClLinks> for occurrences of a particular *old* item of an element or subexpression that *satisfies the test*. 



<ClLinks styled={true} term={"nsubst"}><b>nsubst</b></ClLinks>, <ClLinks styled={true} term={"nsubst-if"}><b>nsubst-if</b></ClLinks>, and <ClLinks styled={true} term={"nsubst-if-not"}><b>nsubst-if-not</b></ClLinks> are like <ClLinks styled={true} term={"subst"}><b>subst</b></ClLinks>, <ClLinks styled={true} term={"subst-if"}><b>subst-if</b></ClLinks>, and <ClLinks styled={true} term={"subst-if-not"}><b>subst-if-not</b></ClLinks> respectively, except that the original <ClLinks styled={true} term={"tree"}><i>tree</i></ClLinks> is modified. 



<ClLinks styled={true} term={"subst"}><b>subst</b></ClLinks> makes a copy of <ClLinks styled={true} term={"tree"}><i>tree</i></ClLinks>, substituting *new* for every subtree or leaf of <ClLinks styled={true} term={"tree"}><i>tree</i></ClLinks> (whether the subtree or leaf is a <ClLinks styled={true} term={"car"}><i>car</i></ClLinks> or a <ClLinks styled={true} term={"cdr"}><i>cdr</i></ClLinks> of its parent) such that *old* and the subtree or leaf <GlossaryTerm styled={true} term={"satisfy the test"}><i>satisfy the test</i></GlossaryTerm>. 



<ClLinks styled={true} term={"nsubst"}><b>nsubst</b></ClLinks> is a destructive version of <ClLinks styled={true} term={"subst"}><b>subst</b></ClLinks>. The list structure of <ClLinks styled={true} term={"tree"}><i>tree</i></ClLinks> is altered by destructively replacing with *new* each leaf of the <ClLinks styled={true} term={"tree"}><i>tree</i></ClLinks> such that *old* and the leaf <GlossaryTerm styled={true} term={"satisfy the test"}><i>satisfy the test</i></GlossaryTerm>. 



For <ClLinks styled={true} term={"subst"}><b>subst</b></ClLinks>, <ClLinks styled={true} term={"subst-if"}><b>subst-if</b></ClLinks>, and <ClLinks styled={true} term={"subst-if-not"}><b>subst-if-not</b></ClLinks>, if the functions succeed, a new copy of the tree is returned in which each occurrence of such an element is replaced by the *new* element or subexpression. If no changes are made, the original <ClLinks styled={true} term={"tree"}><i>tree</i></ClLinks> may be returned. The original <ClLinks styled={true} term={"tree"}><i>tree</i></ClLinks> is left unchanged, but the result tree may share storage with it. 



For <ClLinks styled={true} term={"nsubst"}><b>nsubst</b></ClLinks>, <ClLinks styled={true} term={"nsubst-if"}><b>nsubst-if</b></ClLinks>, and <ClLinks styled={true} term={"nsubst-if-not"}><b>nsubst-if-not</b></ClLinks> the original <ClLinks styled={true} term={"tree"}><i>tree</i></ClLinks> is modified and returned as the function result, but the result may not be <ClLinks styled={true} term={"eq"}><b>eq</b></ClLinks> to <ClLinks styled={true} term={"tree"}><i>tree</i></ClLinks>. 



**Examples:**
```lisp
(setq tree1 ’(1 (1 2) (1 2 3) (1 2 3 4))) → (1 (1 2) (1 2 3) (1 2 3 4)) 
(subst "two" 2 tree1) → (1 (1 "two") (1 "two" 3) (1 "two" 3 4)) 
(subst "five" 5 tree1) → (1 (1 2) (1 2 3) (1 2 3 4)) 
(eq tree1 (subst "five" 5 tree1)) → implementation-dependent 
(subst ’tempest ’hurricane 
	’(shakespeare wrote (the hurricane))) 
→ (SHAKESPEARE WROTE (THE TEMPEST)) 
(subst ’foo ’nil ’(shakespeare wrote (twelfth night))) 
→ (SHAKESPEARE WROTE (TWELFTH NIGHT . FOO) . FOO) 
(subst ’(a . cons) ’(old . pair) 
	’((old . spice) ((old . shoes) old . pair) (old . pair)) 
	
	
	:test #’equal) 
→ ((OLD . SPICE) ((OLD . SHOES) A . CONS) (A . CONS)) 
(subst-if 5 #’listp tree1) → 5 
(subst-if-not ’(x) #’consp tree1) 
→ (1 X) 
tree1 → (1 (1 2) (1 2 3) (1 2 3 4)) 
(nsubst ’x 3 tree1 :key #’(lambda (y) (and (listp y) (third y)))) 
→ (1 (1 2) X X) 
tree1 → (1 (1 2) X X) 
```
**Side Effects:** 



<ClLinks styled={true} term={"nsubst"}><b>nsubst</b></ClLinks>, <ClLinks styled={true} term={"nsubst-if"}><b>nsubst-if</b></ClLinks>, and <ClLinks styled={true} term={"nsubst-if-not"}><b>nsubst-if-not</b></ClLinks> might alter the <GlossaryTerm styled={true} term={"tree structure"}><i>tree structure</i></GlossaryTerm> of <ClLinks styled={true} term={"tree"}><i>tree</i></ClLinks>. 



**See Also:** 



**substitute**, **nsubstitute**, Section 3.2.1 (Compiler Terminology), Section 3.6 (Traversal Rules and Side Effects) 



**Notes:** 



The :test-not parameter is deprecated. 



The functions <ClLinks styled={true} term={"subst-if-not"}><b>subst-if-not</b></ClLinks> and <ClLinks styled={true} term={"nsubst-if-not"}><b>nsubst-if-not</b></ClLinks> are deprecated. 



One possible definition of <ClLinks styled={true} term={"subst"}><b>subst</b></ClLinks>: 



(defun subst (old new tree &amp;rest x &amp;key test test-not key) 



(cond ((satisfies-the-test old tree :test test 



:test-not test-not :key key) 



new) 



((atom tree) tree) 



(t (let ((a (apply #’subst old new (car tree) x)) 



(d (apply #’subst old new (cdr tree) x))) 



(if (and (eql a (car tree)) 



(eql d (cdr tree))) 



tree 



(cons a d)))))) 







 



 



<ClLinks styled={true} term={"tree-equal"}><b>tree-equal</b></ClLinks> 




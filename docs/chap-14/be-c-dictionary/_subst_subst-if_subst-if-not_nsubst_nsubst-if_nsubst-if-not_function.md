**subst, subst-if, subst-if-not, nsubst, nsubst-if, nsubst-if-not** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"subst"}><b>subst</b></DictionaryLink> *new old tree* &amp;key *key test test-not → new-tree* 



<DictionaryLink styled={true} term={"subst-if"}><b>subst-if</b></DictionaryLink> *new predicate tree* &amp;key *key → new-tree* 



<DictionaryLink styled={true} term={"subst-if-not"}><b>subst-if-not</b></DictionaryLink> *new predicate tree* &amp;key *key → new-tree* 



<DictionaryLink styled={true} term={"nsubst"}><b>nsubst</b></DictionaryLink> *new old tree* &amp;key *key test test-not → new-tree* 



<DictionaryLink styled={true} term={"nsubst-if"}><b>nsubst-if</b></DictionaryLink> *new predicate tree* &amp;key *key → new-tree* 



<DictionaryLink styled={true} term={"nsubst-if-not"}><b>nsubst-if-not</b></DictionaryLink> *new predicate tree* &amp;key *key → new-tree* 



**Arguments and Values:** 



*new*—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



*old*—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 







 



 



**subst, subst-if, subst-if-not, nsubst, nsubst-if,** *. . .* 



<GlossaryTerm styled={true} term={"predicate"}><i>predicate</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> that names a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>, or a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of one argument that returns a *generalized boolean* value. 



<GlossaryTerm styled={true} term={"tree"}><i>tree</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"tree"}><i>tree</i></GlossaryTerm>. 



*test*—a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of two <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> that returns a *generalized boolean*. *test-not<GlossaryTerm styled={true} term={"t"}><i>—a </i></GlossaryTerm>designator* for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of two <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> that returns a *generalized boolean*. *key*—a *designator* for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of one argument, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



*new-tree*—a <GlossaryTerm styled={true} term={"tree"}><i>tree</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink styled={true} term={"subst"}><b>subst</b></DictionaryLink>, <DictionaryLink styled={true} term={"subst-if"}><b>subst-if</b></DictionaryLink>, and <DictionaryLink styled={true} term={"subst-if-not"}><b>subst-if-not</b></DictionaryLink> perform substitution operations on <GlossaryTerm styled={true} term={"tree"}><i>tree</i></GlossaryTerm>. Each function searches <GlossaryTerm styled={true} term={"tree"}><i>tree</i></GlossaryTerm> for occurrences of a particular *old* item of an element or subexpression that *satisfies the test*. 



<DictionaryLink styled={true} term={"nsubst"}><b>nsubst</b></DictionaryLink>, <DictionaryLink styled={true} term={"nsubst-if"}><b>nsubst-if</b></DictionaryLink>, and <DictionaryLink styled={true} term={"nsubst-if-not"}><b>nsubst-if-not</b></DictionaryLink> are like <DictionaryLink styled={true} term={"subst"}><b>subst</b></DictionaryLink>, <DictionaryLink styled={true} term={"subst-if"}><b>subst-if</b></DictionaryLink>, and <DictionaryLink styled={true} term={"subst-if-not"}><b>subst-if-not</b></DictionaryLink> respectively, except that the original <GlossaryTerm styled={true} term={"tree"}><i>tree</i></GlossaryTerm> is modified. 



<DictionaryLink styled={true} term={"subst"}><b>subst</b></DictionaryLink> makes a copy of <GlossaryTerm styled={true} term={"tree"}><i>tree</i></GlossaryTerm>, substituting *new* for every subtree or leaf of <GlossaryTerm styled={true} term={"tree"}><i>tree</i></GlossaryTerm> (whether the subtree or leaf is a <GlossaryTerm styled={true} term={"car"}><i>car</i></GlossaryTerm> or a <GlossaryTerm styled={true} term={"cdr"}><i>cdr</i></GlossaryTerm> of its parent) such that *old* and the subtree or leaf *satisfy the test*. 



<DictionaryLink styled={true} term={"nsubst"}><b>nsubst</b></DictionaryLink> is a destructive version of <DictionaryLink styled={true} term={"subst"}><b>subst</b></DictionaryLink>. The list structure of <GlossaryTerm styled={true} term={"tree"}><i>tree</i></GlossaryTerm> is altered by destructively replacing with *new* each leaf of the <GlossaryTerm styled={true} term={"tree"}><i>tree</i></GlossaryTerm> such that *old* and the leaf *satisfy the test*. 



For <DictionaryLink styled={true} term={"subst"}><b>subst</b></DictionaryLink>, <DictionaryLink styled={true} term={"subst-if"}><b>subst-if</b></DictionaryLink>, and <DictionaryLink styled={true} term={"subst-if-not"}><b>subst-if-not</b></DictionaryLink>, if the functions succeed, a new copy of the tree is returned in which each occurrence of such an element is replaced by the *new* element or subexpression. If no changes are made, the original <GlossaryTerm styled={true} term={"tree"}><i>tree</i></GlossaryTerm> may be returned. The original <GlossaryTerm styled={true} term={"tree"}><i>tree</i></GlossaryTerm> is left unchanged, but the result tree may share storage with it. 



For <DictionaryLink styled={true} term={"nsubst"}><b>nsubst</b></DictionaryLink>, <DictionaryLink styled={true} term={"nsubst-if"}><b>nsubst-if</b></DictionaryLink>, and <DictionaryLink styled={true} term={"nsubst-if-not"}><b>nsubst-if-not</b></DictionaryLink> the original <GlossaryTerm styled={true} term={"tree"}><i>tree</i></GlossaryTerm> is modified and returned as the function result, but the result may not be <DictionaryLink styled={true} term={"eq"}><b>eq</b></DictionaryLink> to <GlossaryTerm styled={true} term={"tree"}><i>tree</i></GlossaryTerm>. 



**Examples:**
```lisp

(setq tree1 ’(1 (1 2) (1 2 3) (1 2 3 4))) *→* (1 (1 2) (1 2 3) (1 2 3 4)) 
(subst "two" 2 tree1) *→* (1 (1 "two") (1 "two" 3) (1 "two" 3 4)) 
(subst "five" 5 tree1) *→* (1 (1 2) (1 2 3) (1 2 3 4)) 
(eq tree1 (subst "five" 5 tree1)) *→ implementation-dependent* 
(subst ’tempest ’hurricane 
	’(shakespeare wrote (the hurricane))) 
*→* (SHAKESPEARE WROTE (THE TEMPEST)) 
(subst ’foo ’nil ’(shakespeare wrote (twelfth night))) 
*→* (SHAKESPEARE WROTE (TWELFTH NIGHT . FOO) . FOO) 
(subst ’(a . cons) ’(old . pair) 
	’((old . spice) ((old . shoes) old . pair) (old . pair)) 

	
	
	:test #’equal) 
*→* ((OLD . SPICE) ((OLD . SHOES) A . CONS) (A . CONS)) 
(subst-if 5 #’listp tree1) *→* 5 
(subst-if-not ’(x) #’consp tree1) 
*→* (1 X) 
tree1 *→* (1 (1 2) (1 2 3) (1 2 3 4)) 
(nsubst ’x 3 tree1 :key #’(lambda (y) (and (listp y) (third y)))) 
*→* (1 (1 2) X X) 
tree1 *→* (1 (1 2) X X) 

```
**Side Effects:** 



<DictionaryLink styled={true} term={"nsubst"}><b>nsubst</b></DictionaryLink>, <DictionaryLink styled={true} term={"nsubst-if"}><b>nsubst-if</b></DictionaryLink>, and <DictionaryLink styled={true} term={"nsubst-if-not"}><b>nsubst-if-not</b></DictionaryLink> might alter the *tree structure* of <GlossaryTerm styled={true} term={"tree"}><i>tree</i></GlossaryTerm>. 



**See Also:** 



**substitute**, **nsubstitute**, Section 3.2.1 (Compiler Terminology), Section 3.6 (Traversal Rules and Side Effects) 



**Notes:** 



The :test-not parameter is deprecated. 



The functions <DictionaryLink styled={true} term={"subst-if-not"}><b>subst-if-not</b></DictionaryLink> and <DictionaryLink styled={true} term={"nsubst-if-not"}><b>nsubst-if-not</b></DictionaryLink> are deprecated. 



One possible definition of <DictionaryLink styled={true} term={"subst"}><b>subst</b></DictionaryLink>: 



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







 



 



<DictionaryLink styled={true} term={"tree-equal"}><b>tree-equal</b></DictionaryLink> 




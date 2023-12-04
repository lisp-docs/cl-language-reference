**subst, subst-if, subst-if-not, nsubst, nsubst-if, nsubst-if-not** *Function* 



**Syntax:** 



**subst** *new old tree* &key *key test test-not → new-tree* 



**subst-if** *new predicate tree* &key *key → new-tree* 



**subst-if-not** *new predicate tree* &key *key → new-tree* 



**nsubst** *new old tree* &key *key test test-not → new-tree* 



**nsubst-if** *new predicate tree* &key *key → new-tree* 



**nsubst-if-not** *new predicate tree* &key *key → new-tree* 



**Arguments and Values:** 



*new*—an *object*. 



*old*—an *object*. 







 



 



**subst, subst-if, subst-if-not, nsubst, nsubst-if,** *. . .* 



*predicate*—a *symbol* that names a *function*, or a *function* of one argument that returns a *generalized boolean* value. 



*tree*—a *tree*. 



*test*—a *designator* for a *function* of two *arguments* that returns a *generalized boolean*. *test-not*—a *designator* for a *function* of two *arguments* that returns a *generalized boolean*. *key*—a *designator* for a *function* of one argument, or **nil**. 



*new-tree*—a *tree*. 



**Description:** 



**subst**, **subst-if**, and **subst-if-not** perform substitution operations on *tree*. Each function searches *tree* for occurrences of a particular *old* item of an element or subexpression that *satisfies the test*. 



**nsubst**, **nsubst-if**, and **nsubst-if-not** are like **subst**, **subst-if**, and **subst-if-not** respectively, except that the original *tree* is modified. 



**subst** makes a copy of *tree*, substituting *new* for every subtree or leaf of *tree* (whether the subtree or leaf is a *car* or a *cdr* of its parent) such that *old* and the subtree or leaf *satisfy the test*. 



**nsubst** is a destructive version of **subst**. The list structure of *tree* is altered by destructively replacing with *new* each leaf of the *tree* such that *old* and the leaf *satisfy the test*. 



For **subst**, **subst-if**, and **subst-if-not**, if the functions succeed, a new copy of the tree is returned in which each occurrence of such an element is replaced by the *new* element or subexpression. If no changes are made, the original *tree* may be returned. The original *tree* is left unchanged, but the result tree may share storage with it. 



For **nsubst**, **nsubst-if**, and **nsubst-if-not** the original *tree* is modified and returned as the function result, but the result may not be **eq** to *tree*. 



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



**nsubst**, **nsubst-if**, and **nsubst-if-not** might alter the *tree structure* of *tree*. 



**See Also:** 



**substitute**, **nsubstitute**, Section 3.2.1 (Compiler Terminology), Section 3.6 (Traversal Rules and Side Effects) 



**Notes:** 



The :test-not parameter is deprecated. 



The functions **subst-if-not** and **nsubst-if-not** are deprecated. 



One possible definition of **subst**: 



(defun subst (old new tree &rest x &key test test-not key) 



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







 



 



**tree-equal** 




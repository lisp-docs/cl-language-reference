**tree-equal** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"tree-equal"}><b>tree-equal</b></ClLinks> *tree-1 tree-2* &amp;key *test test-not → generalized-boolean* 



**Arguments and Values:** 



*tree-1*—a <ClLinks styled={true} term={"tree"}><i>tree</i></ClLinks>. 



*tree-2*—a <ClLinks styled={true} term={"tree"}><i>tree</i></ClLinks>. 



*test*—a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of two <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> that returns a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. *test-not<ClLinks styled={true} term={"t"}><i>—a </i></ClLinks>designator* for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of two <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> that returns a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. *generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



<ClLinks styled={true} term={"tree-equal"}><b>tree-equal</b></ClLinks> tests whether two trees are of the same shape and have the same leaves. <ClLinks styled={true} term={"tree-equal"}><b>tree-equal</b></ClLinks> returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if *tree-1* and *tree-2* are both <ClLinks styled={true} term={"atom"}><i>atoms</i></ClLinks> and <GlossaryTerm styled={true} term={"satisfy the test"}><i>satisfy the test</i></GlossaryTerm>, or if they are both *conses* and the <ClLinks styled={true} term={"car"}><i>car</i></ClLinks> of *tree-1* is <ClLinks styled={true} term={"tree-equal"}><b>tree-equal</b></ClLinks> to the <ClLinks styled={true} term={"car"}><i>car</i></ClLinks> of *tree-2* and the <ClLinks styled={true} term={"cdr"}><i>cdr</i></ClLinks> of *tree-1* is <ClLinks styled={true} term={"tree-equal"}><b>tree-equal</b></ClLinks> to the <ClLinks styled={true} term={"cdr"}><i>cdr</i></ClLinks> of *tree-2*. Otherwise, <ClLinks styled={true} term={"tree-equal"}><b>tree-equal</b></ClLinks> returns <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 



<ClLinks styled={true} term={"tree-equal"}><b>tree-equal</b></ClLinks> recursively compares *conses* but not any other <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> that have components. 



The first argument to the :test or :test-not function is *tree-1* or a <ClLinks styled={true} term={"car"}><i>car</i></ClLinks> or <ClLinks styled={true} term={"cdr"}><i>cdr</i></ClLinks> of *tree-1*; the second argument is *tree-2* or a <ClLinks styled={true} term={"car"}><i>car</i></ClLinks> or <ClLinks styled={true} term={"cdr"}><i>cdr</i></ClLinks> of *tree-2*. 



**Examples:**
```lisp
(setq tree1 ’(1 (1 2)) 
      tree2 ’(1 (1 2))) → (1 (1 2)) 
(tree-equal tree1 tree2) → true 
(eql tree1 tree2) → false 
(setq tree1 ’(’a (’b ’c)) 
      tree2 ’(’a (’b ’c))) → (’a (’b ’c)) 
→ ((QUOTE A) ((QUOTE B) (QUOTE C))) 
(tree-equal tree1 tree2 :test ’eq) → true 
```
**Exceptional Situations:** 



The consequences are undefined if both *tree-1* and *tree-2* are circular. 



**See Also:** 



<ClLinks styled={true} term={"equal"}><b>equal</b></ClLinks>, Section 3.6 (Traversal Rules and Side Effects) 



**Notes:** 



The :test-not parameter is deprecated. 







 



 




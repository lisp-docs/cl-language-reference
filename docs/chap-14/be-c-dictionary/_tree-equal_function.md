**tree-equal** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"tree-equal"}><b>tree-equal</b></DictionaryLink> *tree-1 tree-2* &amp;key *test test-not → generalized-boolean* 



**Arguments and Values:** 



*tree-1*—a <GlossaryTerm styled={true} term={"tree"}><i>tree</i></GlossaryTerm>. 



*tree-2*—a <GlossaryTerm styled={true} term={"tree"}><i>tree</i></GlossaryTerm>. 



*test*—a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of two <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> that returns a *generalized boolean*. *test-not<GlossaryTerm styled={true} term={"t"}><i>—a </i></GlossaryTerm>designator* for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of two <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> that returns a *generalized boolean*. *generalized-boolean*—a *generalized boolean*. 



**Description:** 



<DictionaryLink styled={true} term={"tree-equal"}><b>tree-equal</b></DictionaryLink> tests whether two trees are of the same shape and have the same leaves. <DictionaryLink styled={true} term={"tree-equal"}><b>tree-equal</b></DictionaryLink> returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if *tree-1* and *tree-2* are both <GlossaryTerm styled={true} term={"atom"}><i>atoms</i></GlossaryTerm> and *satisfy the test*, or if they are both *conses* and the <GlossaryTerm styled={true} term={"car"}><i>car</i></GlossaryTerm> of *tree-1* is <DictionaryLink styled={true} term={"tree-equal"}><b>tree-equal</b></DictionaryLink> to the <GlossaryTerm styled={true} term={"car"}><i>car</i></GlossaryTerm> of *tree-2* and the <GlossaryTerm styled={true} term={"cdr"}><i>cdr</i></GlossaryTerm> of *tree-1* is <DictionaryLink styled={true} term={"tree-equal"}><b>tree-equal</b></DictionaryLink> to the <GlossaryTerm styled={true} term={"cdr"}><i>cdr</i></GlossaryTerm> of *tree-2*. Otherwise, <DictionaryLink styled={true} term={"tree-equal"}><b>tree-equal</b></DictionaryLink> returns <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 



<DictionaryLink styled={true} term={"tree-equal"}><b>tree-equal</b></DictionaryLink> recursively compares *conses* but not any other <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> that have components. 



The first argument to the :test or :test-not function is *tree-1* or a <GlossaryTerm styled={true} term={"car"}><i>car</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"cdr"}><i>cdr</i></GlossaryTerm> of *tree-1*; the second argument is *tree-2* or a <GlossaryTerm styled={true} term={"car"}><i>car</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"cdr"}><i>cdr</i></GlossaryTerm> of *tree-2*. 



**Examples:**
```lisp

(setq tree1 ’(1 (1 2)) 
      tree2 ’(1 (1 2))) *→* (1 (1 2)) 
(tree-equal tree1 tree2) *→ true* 
(eql tree1 tree2) *→ false* 
(setq tree1 ’(’a (’b ’c)) 
      tree2 ’(’a (’b ’c))) *→* (’a (’b ’c)) 
*→* ((QUOTE A) ((QUOTE B) (QUOTE C))) 
(tree-equal tree1 tree2 :test ’eq) *→ true* 

```
**Exceptional Situations:** 



The consequences are undefined if both *tree-1* and *tree-2* are circular. 



**See Also:** 



<DictionaryLink styled={true} term={"equal"}><b>equal</b></DictionaryLink>, Section 3.6 (Traversal Rules and Side Effects) 



**Notes:** 



The :test-not parameter is deprecated. 







 



 




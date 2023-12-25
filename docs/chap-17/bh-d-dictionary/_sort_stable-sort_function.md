**sort, stable-sort** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"sort"}><b>sort</b></DictionaryLink> *sequence predicate* &amp;key *key → sorted-sequence* 



<DictionaryLink styled={true} term={"stable-sort"}><b>stable-sort</b></DictionaryLink> *sequence predicate* &amp;key *key → sorted-sequence* 



**Arguments and Values:** 



*sequence*—a *proper sequence*. 



<GlossaryTerm styled={true} term={"predicate"}><i>predicate</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of two arguments that returns a *generalized boolean*. *key*—a *designator* for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of one argument, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



*sorted-sequence*—a *sequence*. 



**Description:** 



<DictionaryLink styled={true} term={"sort"}><b>sort</b></DictionaryLink> and <DictionaryLink styled={true} term={"stable-sort"}><b>stable-sort</b></DictionaryLink> destructively sort *sequences* according to the order determined by the <GlossaryTerm styled={true} term={"predicate"}><i>predicate</i></GlossaryTerm> function. 



If *sequence* is a <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> , the result is a <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> that has the same *actual array element type* as *sequence*. If *sequence* is a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>, the result is a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>. 



<DictionaryLink styled={true} term={"sort"}><b>sort</b></DictionaryLink> determines the relationship between two elements by giving keys extracted from the elements to the <GlossaryTerm styled={true} term={"predicate"}><i>predicate</i></GlossaryTerm>. The first argument to the <GlossaryTerm styled={true} term={"predicate"}><i>predicate</i></GlossaryTerm> function is the part of one element of *sequence* extracted by the <GlossaryTerm styled={true} term={"key"}><i>key</i></GlossaryTerm> function (if supplied); the second argument is the part of another element of *sequence* extracted by the <GlossaryTerm styled={true} term={"key"}><i>key</i></GlossaryTerm> function (if supplied). <GlossaryTerm styled={true} term={"predicate"}><i>Predicate</i></GlossaryTerm> should return <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if and only if the first argument is strictly less than the second (in some appropriate sense). If the first argument is 



greater than or equal to the second (in the appropriate sense), then the <GlossaryTerm styled={true} term={"predicate"}><i>predicate</i></GlossaryTerm> should return <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 



The argument to the <GlossaryTerm styled={true} term={"key"}><i>key</i></GlossaryTerm> function is the *sequence* element. The return value of the <GlossaryTerm styled={true} term={"key"}><i>key</i></GlossaryTerm> function becomes an argument to <GlossaryTerm styled={true} term={"predicate"}><i>predicate</i></GlossaryTerm>. If <GlossaryTerm styled={true} term={"key"}><i>key</i></GlossaryTerm> is not supplied or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, the *sequence* element itself is used. There is no guarantee on the number of times the <GlossaryTerm styled={true} term={"key"}><i>key</i></GlossaryTerm> will be called. 



If the <GlossaryTerm styled={true} term={"key"}><i>key</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"predicate"}><i>predicate</i></GlossaryTerm> always return, then the sorting operation will always terminate, producing a *sequence* containing the same <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm> as *sequence* (that is, the result is a permutation of *sequence*). This is guaranteed even if the <GlossaryTerm styled={true} term={"predicate"}><i>predicate</i></GlossaryTerm> does not really consistently represent a total order (in which case the <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm> will be scrambled in some unpredictable way, but no <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm> will be lost). If the <GlossaryTerm styled={true} term={"key"}><i>key</i></GlossaryTerm> consistently returns meaningful keys, and the <GlossaryTerm styled={true} term={"predicate"}><i>predicate</i></GlossaryTerm> does reflect some total ordering criterion on those keys, then the <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm> of the *sorted-sequence* will be properly sorted according to that ordering. 







 



 



**sort, stable-sort** 



The sorting operation performed by <DictionaryLink styled={true} term={"sort"}><b>sort</b></DictionaryLink> is not guaranteed stable. Elements considered equal by the <GlossaryTerm styled={true} term={"predicate"}><i>predicate</i></GlossaryTerm> might or might not stay in their original order. The <GlossaryTerm styled={true} term={"predicate"}><i>predicate</i></GlossaryTerm> is assumed to consider two elements x and y to be equal if (funcall *predicate x y*) and (funcall *predicate y x*) are both <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. <DictionaryLink styled={true} term={"stable-sort"}><b>stable-sort</b></DictionaryLink> guarantees stability. 



The sorting operation can be destructive in all cases. In the case of a <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> argument, this is accomplished by permuting the elements in place. In the case of a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>, the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> is destructively reordered in the same manner as for <DictionaryLink styled={true} term={"nreverse"}><b>nreverse</b></DictionaryLink>. 



**Examples:**
```lisp

(setq tester (copy-seq "lkjashd")) *→* "lkjashd" 
(sort tester #’char-lessp) *→* "adhjkls" 
(setq tester (list ’(1 2 3) ’(4 5 6) ’(7 8 9))) *→* ((1 2 3) (4 5 6) (7 8 9)) 
(sort tester #’> :key #’car) *→* ((7 8 9) (4 5 6) (1 2 3)) 
(setq tester (list 1 2 3 4 5 6 7 8 9 0)) *→* (1 2 3 4 5 6 7 8 9 0) 
(stable-sort tester #’(lambda (x y) (and (oddp x) (evenp y)))) 
*→* (1 3 5 7 9 2 4 6 8 0) 
(sort (setq committee-data 
	    (vector (list (list "JonL" "White") "Iteration") 
		    (list (list "Dick" "Waters") "Iteration") 
		    (list (list "Dick" "Gabriel") "Objects") 
		    (list (list "Kent" "Pitman") "Conditions") 
		    (list (list "Gregor" "Kiczales") "Objects") 
		    (list (list "David" "Moon") "Objects") 
		    (list (list "Kathy" "Chapman") "Editorial") 
		    (list (list "Larry" "Masinter") "Cleanup") 
		    (list (list "Sandra" "Loosemore") "Compiler"))) 
      #’string-lessp :key #’cadar) 
*→* #((("Kathy" "Chapman") "Editorial") 
      (("Dick" "Gabriel") "Objects") 
      (("Gregor" "Kiczales") "Objects") 
      (("Sandra" "Loosemore") "Compiler") 
      (("Larry" "Masinter") "Cleanup") 
      (("David" "Moon") "Objects") 
      (("Kent" "Pitman") "Conditions") 
      (("Dick" "Waters") "Iteration") 
      (("JonL" "White") "Iteration")) 
;; Note that individual alphabetical order within ‘committees’ 
;; is preserved. 
(setq committee-data 
      (stable-sort committee-data #’string-lessp :key #’cadr)) 
*→* #((("Larry" "Masinter") "Cleanup") 
      (("Sandra" "Loosemore") "Compiler") 
      (("Kent" "Pitman") "Conditions") 
      (("Kathy" "Chapman") "Editorial") 

      
      
      (("Dick" "Waters") "Iteration") 
      (("JonL" "White") "Iteration") 
      (("Dick" "Gabriel") "Objects") 
      (("Gregor" "Kiczales") "Objects") 
      (("David" "Moon") "Objects")) 

```
**Exceptional Situations:** 



Should be prepared to signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if *sequence* is not a *proper sequence*. 



**See Also:** 



<DictionaryLink styled={true} term={"merge"}><b>merge</b></DictionaryLink>, Section 3.2.1 (Compiler Terminology), Section 3.6 (Traversal Rules and Side Effects), Section 3.7 (Destructive Operations) 



**Notes:** 



If *sequence* is a <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> , the result might or might not be simple, and might or might not be <GlossaryTerm styled={true} term={"identical"}><i>identical</i></GlossaryTerm> to *sequence*. 




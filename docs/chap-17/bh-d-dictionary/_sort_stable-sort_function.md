**sort, stable-sort** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"sort"}><b>sort</b></DictionaryLink> *sequence predicate* &amp;key *key → sorted-sequence* 



<DictionaryLink  term={"stable-sort"}><b>stable-sort</b></DictionaryLink> *sequence predicate* &amp;key *key → sorted-sequence* 



**Arguments and Values:** 



*sequence*—a <GlossaryTerm styled={true} term={"proper sequence"}><i>proper sequence</i></GlossaryTerm>. 



<ClLinks  term={"predicate"}><i>predicate</i></ClLinks>—a <ClLinks  term={"designator"}><i>designator</i></ClLinks> for a <ClLinks  term={"function"}><i>function</i></ClLinks> of two arguments that returns a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. <GlossaryTerm styled={true} term={"key"}><i>key</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <ClLinks  term={"function"}><i>function</i></ClLinks> of one argument, or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



*sorted-sequence*—a *sequence*. 



**Description:** 



<DictionaryLink  term={"sort"}><b>sort</b></DictionaryLink> and <DictionaryLink  term={"stable-sort"}><b>stable-sort</b></DictionaryLink> destructively sort *sequences* according to the order determined by the <ClLinks  term={"predicate"}><i>predicate</i></ClLinks> function. 



If *sequence* is a <ClLinks  term={"vector"}><i>vector</i></ClLinks> , the result is a <ClLinks  term={"vector"}><i>vector</i></ClLinks> that has the same <GlossaryTerm styled={true} term={"actual array element type"}><i>actual array element type</i></GlossaryTerm> as *sequence*. If *sequence* is a <ClLinks  term={"list"}><i>list</i></ClLinks>, the result is a <ClLinks  term={"list"}><i>list</i></ClLinks>. 



<DictionaryLink  term={"sort"}><b>sort</b></DictionaryLink> determines the relationship between two elements by giving keys extracted from the elements to the <ClLinks  term={"predicate"}><i>predicate</i></ClLinks>. The first argument to the <ClLinks  term={"predicate"}><i>predicate</i></ClLinks> function is the part of one element of *sequence* extracted by the <ClLinks  term={"key"}><i>key</i></ClLinks> function (if supplied); the second argument is the part of another element of *sequence* extracted by the <ClLinks  term={"key"}><i>key</i></ClLinks> function (if supplied). <ClLinks  term={"predicate"}><i>Predicate</i></ClLinks> should return <ClLinks  term={"true"}><i>true</i></ClLinks> if and only if the first argument is strictly less than the second (in some appropriate sense). If the first argument is 



greater than or equal to the second (in the appropriate sense), then the <ClLinks  term={"predicate"}><i>predicate</i></ClLinks> should return <ClLinks  term={"false"}><i>false</i></ClLinks>. 



The argument to the <ClLinks  term={"key"}><i>key</i></ClLinks> function is the *sequence* element. The return value of the <ClLinks  term={"key"}><i>key</i></ClLinks> function becomes an argument to <ClLinks  term={"predicate"}><i>predicate</i></ClLinks>. If <ClLinks  term={"key"}><i>key</i></ClLinks> is not supplied or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>, the *sequence* element itself is used. There is no guarantee on the number of times the <ClLinks  term={"key"}><i>key</i></ClLinks> will be called. 



If the <ClLinks  term={"key"}><i>key</i></ClLinks> and <ClLinks  term={"predicate"}><i>predicate</i></ClLinks> always return, then the sorting operation will always terminate, producing a *sequence* containing the same <ClLinks  term={"element"}><i>elements</i></ClLinks> as *sequence* (that is, the result is a permutation of *sequence*). This is guaranteed even if the <ClLinks  term={"predicate"}><i>predicate</i></ClLinks> does not really consistently represent a total order (in which case the <ClLinks  term={"element"}><i>elements</i></ClLinks> will be scrambled in some unpredictable way, but no <ClLinks  term={"element"}><i>element</i></ClLinks> will be lost). If the <ClLinks  term={"key"}><i>key</i></ClLinks> consistently returns meaningful keys, and the <ClLinks  term={"predicate"}><i>predicate</i></ClLinks> does reflect some total ordering criterion on those keys, then the <ClLinks  term={"element"}><i>elements</i></ClLinks> of the *sorted-sequence* will be properly sorted according to that ordering. 







 



 



<DictionaryLink styled={true} term={"sort, stable-sort"}><b>sort, stable-sort</b></DictionaryLink> 



The sorting operation performed by <DictionaryLink  term={"sort"}><b>sort</b></DictionaryLink> is not guaranteed stable. Elements considered equal by the <ClLinks  term={"predicate"}><i>predicate</i></ClLinks> might or might not stay in their original order. The <ClLinks  term={"predicate"}><i>predicate</i></ClLinks> is assumed to consider two elements x and y to be equal if (funcall *predicate x y*) and (funcall *predicate y x*) are both <ClLinks  term={"false"}><i>false</i></ClLinks>. <DictionaryLink  term={"stable-sort"}><b>stable-sort</b></DictionaryLink> guarantees stability. 



The sorting operation can be destructive in all cases. In the case of a <ClLinks  term={"vector"}><i>vector</i></ClLinks> argument, this is accomplished by permuting the elements in place. In the case of a <ClLinks  term={"list"}><i>list</i></ClLinks>, the <ClLinks  term={"list"}><i>list</i></ClLinks> is destructively reordered in the same manner as for <DictionaryLink  term={"nreverse"}><b>nreverse</b></DictionaryLink>. 



**Examples:**
```lisp
(setq tester (copy-seq "lkjashd")) → "lkjashd" 
(sort tester #’char-lessp) → "adhjkls" 
(setq tester (list ’(1 2 3) ’(4 5 6) ’(7 8 9))) → ((1 2 3) (4 5 6) (7 8 9)) 
(sort tester #’> :key #’car) → ((7 8 9) (4 5 6) (1 2 3)) 
(setq tester (list 1 2 3 4 5 6 7 8 9 0)) → (1 2 3 4 5 6 7 8 9 0) 
(stable-sort tester #’(lambda (x y) (and (oddp x) (evenp y)))) 
→ (1 3 5 7 9 2 4 6 8 0) 
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
→ #((("Kathy" "Chapman") "Editorial") 
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
→ #((("Larry" "Masinter") "Cleanup") 
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



Should be prepared to signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if *sequence* is not a <GlossaryTerm styled={true} term={"proper sequence"}><i>proper sequence</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink  term={"merge"}><b>merge</b></DictionaryLink>, Section 3.2.1 (Compiler Terminology), Section 3.6 (Traversal Rules and Side Effects), Section 3.7 (Destructive Operations) 



**Notes:** 



If *sequence* is a <ClLinks  term={"vector"}><i>vector</i></ClLinks> , the result might or might not be simple, and might or might not be <ClLinks  term={"identical"}><i>identical</i></ClLinks> to *sequence*. 




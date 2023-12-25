**map** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"map"}><b>map</b></DictionaryLink> *result-type function* &amp;rest *sequences*<sup>+</sup> *→ result* 



**Arguments and Values:** 



*result-type* – a <DictionaryLink styled={true} term={"sequence"}><b>sequence</b></DictionaryLink> *type specifier* , or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



<GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>—a *function designator* . <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> must take as many arguments as there are *sequences*. *sequence*—a *proper sequence*. 



*result*—if *result-type* is a *type specifier* other than <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, then a *sequence* of the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> it denotes; otherwise (if the *result-type* is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>), <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



**Description:** 



Applies <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> to successive sets of arguments in which one argument is obtained from each *sequence*. The <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> is called first on all the elements with index 0, then on all those with index 1, and so on. The *result-type* specifies the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> of the resulting *sequence*. 



<DictionaryLink styled={true} term={"map"}><b>map</b></DictionaryLink> returns <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> if *result-type* is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. Otherwise, <DictionaryLink styled={true} term={"map"}><b>map</b></DictionaryLink> returns a *sequence* such that element j is the result of applying <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> to element j of each of the *sequences*. The result *sequence* is as long as the shortest of the *sequences*. The consequences are undefined if the result of applying <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> to 







 



 



the successive elements of the *sequences* cannot be contained in a *sequence* of the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> given by *result-type*. 



If the *result-type* is a <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> of <DictionaryLink styled={true} term={"list"}><b>list</b></DictionaryLink>, the result will be a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>. 



If the *result-type* is a <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> of <DictionaryLink styled={true} term={"vector"}><b>vector</b></DictionaryLink>, then if the implementation can determine the element type specified for the *result-type*, the element type of the resulting array is the result of *upgrading* that element type; or, if the implementation can determine that the element type is unspecified (or \*), the element type of the resulting array is <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink>; otherwise, an error is signaled. 



**Examples:**
```lisp

(map ’string #’(lambda (x y) 
		 (char "01234567890ABCDEF" (mod (+ x y) 16))) 
      ’(1 2 3 4) 
      ’(10 9 8 7)) *→* "AAAA" 
(setq seq ’("lower" "UPPER" "" "123")) *→* ("lower" "UPPER" "" "123") 
(map nil #’nstring-upcase seq) *→* NIL 
seq *→* ("LOWER" "UPPER" "" "123") 
(map ’list #’- ’(1 2 3 4)) *→* (-1 -2 -3 -4) 
(map ’string 
      #’(lambda (x) (if (oddp x) #\1 #\0)) 
      ’(1 2 3 4)) *→* "1010" 
(map ’(vector \* 4) #’cons "abc" "de") should signal an error 

```
**Exceptional Situations:** 



An error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> must be signaled if the *result-type* is not a *recognizable subtype* of <DictionaryLink styled={true} term={"list"}><b>list</b></DictionaryLink>, not a *recognizable subtype* of <DictionaryLink styled={true} term={"vector"}><b>vector</b></DictionaryLink>, and not <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



Should be prepared to signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if any *sequence* is not a *proper sequence*. 



An error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> should be signaled if *result-type* specifies the number of elements and the minimum length of the *sequences* is different from that number. 



**See Also:** 



Section 3.6 (Traversal Rules and Side Effects) 







 



 



<DictionaryLink styled={true} term={"map-into"}><b>map-into</b></DictionaryLink> 




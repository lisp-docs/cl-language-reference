**map** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"map"}><b>map</b></ClLinks> *result-type function* &amp;rest *sequences*<sup>+</sup> → result 



**Arguments and Values:** 



*result-type* – a <ClLinks  term={"sequence"}><b>sequence</b></ClLinks> *type specifier* , or <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 



<ClLinks  term={"function"}><i>function</i></ClLinks>—a *function designator* . <ClLinks  term={"function"}><i>function</i></ClLinks> must take as many arguments as there are *sequences*. *sequence*—a *proper sequence*. 



*result*—if *result-type* is a *type specifier* other than <ClLinks  term={"nil"}><b>nil</b></ClLinks>, then a *sequence* of the <ClLinks  term={"type"}><i>type</i></ClLinks> it denotes; otherwise (if the *result-type* is <ClLinks  term={"nil"}><b>nil</b></ClLinks>), <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 



**Description:** 



Applies <ClLinks  term={"function"}><i>function</i></ClLinks> to successive sets of arguments in which one argument is obtained from each *sequence*. The <ClLinks  term={"function"}><i>function</i></ClLinks> is called first on all the elements with index 0, then on all those with index 1, and so on. The *result-type* specifies the <ClLinks  term={"type"}><i>type</i></ClLinks> of the resulting *sequence*. 



<ClLinks  term={"map"}><b>map</b></ClLinks> returns <ClLinks  term={"nil"}><b>nil</b></ClLinks> if *result-type* is <ClLinks  term={"nil"}><b>nil</b></ClLinks>. Otherwise, <ClLinks  term={"map"}><b>map</b></ClLinks> returns a *sequence* such that element j is the result of applying <ClLinks  term={"function"}><i>function</i></ClLinks> to element j of each of the *sequences*. The result *sequence* is as long as the shortest of the *sequences*. The consequences are undefined if the result of applying <ClLinks  term={"function"}><i>function</i></ClLinks> to 







 



 



the successive elements of the *sequences* cannot be contained in a *sequence* of the <ClLinks  term={"type"}><i>type</i></ClLinks> given by *result-type*. 



If the *result-type* is a <ClLinks  term={"subtype"}><i>subtype</i></ClLinks> of <ClLinks  term={"list"}><b>list</b></ClLinks>, the result will be a <ClLinks  term={"list"}><i>list</i></ClLinks>. 



If the *result-type* is a <ClLinks  term={"subtype"}><i>subtype</i></ClLinks> of <ClLinks  term={"vector"}><b>vector</b></ClLinks>, then if the implementation can determine the element type specified for the *result-type*, the element type of the resulting array is the result of *upgrading* that element type; or, if the implementation can determine that the element type is unspecified (or \*), the element type of the resulting array is <ClLinks  term={"t"}><b>t</b></ClLinks>; otherwise, an error is signaled. 



**Examples:**
```lisp
(map ’string #’(lambda (x y) 
		 (char "01234567890ABCDEF" (mod (+ x y) 16))) 
      ’(1 2 3 4) 
      ’(10 9 8 7)) → "AAAA" 
(setq seq ’("lower" "UPPER" "" "123")) → ("lower" "UPPER" "" "123") 
(map nil #’nstring-upcase seq) → NIL 
seq → ("LOWER" "UPPER" "" "123") 
(map ’list #’- ’(1 2 3 4)) → (-1 -2 -3 -4) 
(map ’string 
      #’(lambda (x) (if (oddp x) #\1 #\0)) 
      ’(1 2 3 4)) → "1010" 
(map ’(vector \* 4) #’cons "abc" "de") should signal an error 
```
**Exceptional Situations:** 



An error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> must be signaled if the *result-type* is not a *recognizable subtype* of <ClLinks  term={"list"}><b>list</b></ClLinks>, not a *recognizable subtype* of <ClLinks  term={"vector"}><b>vector</b></ClLinks>, and not <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 



Should be prepared to signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> if any *sequence* is not a *proper sequence*. 



An error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> should be signaled if *result-type* specifies the number of elements and the minimum length of the *sequences* is different from that number. 



**See Also:** 



Section 3.6 (Traversal Rules and Side Effects) 







 



 



<ClLinks  term={"map-into"}><b>map-into</b></ClLinks> 




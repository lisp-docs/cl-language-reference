**complement** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"complement"}><b>complement</b></ClLinks> *function → complement-function* 



**Arguments and Values:** 



<ClLinks  term={"function"}><i>function</i></ClLinks>—a <ClLinks  term={"function"}><i>function</i></ClLinks>. 



*complement-function*—a <ClLinks  term={"function"}><i>function</i></ClLinks>. 



**Description:** 



Returns a <ClLinks  term={"function"}><i>function</i></ClLinks> that takes the same <ClLinks  term={"argument"}><i>arguments</i></ClLinks> as <ClLinks  term={"function"}><i>function</i></ClLinks>, and has the same side-effect behavior as <ClLinks  term={"function"}><i>function</i></ClLinks>, but returns only a single value: a *generalized boolean* with the opposite truth value of that which would be returned as the *primary value* of <ClLinks  term={"function"}><i>function</i></ClLinks>. That is, when the <ClLinks  term={"function"}><i>function</i></ClLinks> would have returned <ClLinks  term={"true"}><i>true</i></ClLinks> as its *primary value* the *complement-function* returns <ClLinks  term={"false"}><i>false</i></ClLinks>, and when the <ClLinks  term={"function"}><i>function</i></ClLinks> would have returned <ClLinks  term={"false"}><i>false</i></ClLinks> as its *primary value* the *complement-function* returns <ClLinks  term={"true"}><i>true</i></ClLinks>. 



**Examples:**
```lisp
(funcall (complement #’zerop) 1) → true 
(funcall (complement #’characterp) #\A) → false 
(funcall (complement #’member) ’a ’(a b c)) → false 
(funcall (complement #’member) ’d ’(a b c)) → true 
```
**See Also:** 



<ClLinks  term={"not"}><b>not</b></ClLinks> 



**Notes:** 



(complement *x*) *≡* #’(lambda (&amp;rest arguments) (not (apply *x* arguments))) 



In Common Lisp, functions with names like “*xxx*-if-not” are related to functions with names like “*xxx*-if” in that 



(*xxx*-if-not *f* . <ClLinks  term={"argument"}><i>arguments</i></ClLinks>) *≡* (*xxx*-if (complement *f*) . <ClLinks  term={"argument"}><i>arguments</i></ClLinks>) 



For example, 



(find-if-not #’zerop ’(0 0 3)) *≡* 



(find-if (complement #’zerop) ’(0 0 3)) → 3 



Data and Control 











Note that since the “*xxx*-if-not” <ClLinks  term={"function"}><i>functions</i></ClLinks> and the :test-not arguments have been deprecated, uses of “*xxx*-if” <ClLinks  term={"function"}><i>functions</i></ClLinks> or :test arguments with <ClLinks  term={"complement"}><b>complement</b></ClLinks> are preferred. 




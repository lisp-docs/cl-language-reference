**lcm** *Function* 



**Syntax:** 



**lcm** &amp;rest *integers → least-common-multiple* 



**Arguments and Values:** 



*integer*—an *integer* . 



*least-common-multiple*—a non-negative *integer* . 



**Description:** 



**lcm** returns the least common multiple of the *integers*. 



If no *integer* is supplied, the *integer* 1 is returned. 







 



 



If only one *integer* is supplied, the absolute value of that *integer* is returned. 



For two arguments that are not both zero, 



(lcm a b) *≡* (/ (abs (\* a b)) (gcd a b)) 



If one or both arguments are zero, 



(lcm a 0) *≡* (lcm 0 a) *≡* 0 



For three or more arguments, 



(lcm a b c ... z) *≡* (lcm (lcm a b) c ... z) 



**Examples:**
```lisp
 



(lcm 10) *→* 10 



(lcm 25 30) *→* 150 



(lcm -24 18 10) *→* 360 



(lcm 14 35) *→* 70 



(lcm 0 5) *→* 0 



(lcm 1 2 3 4 5 6) *→* 60 




```
**Exceptional Situations:** 



Should signal **type-error** if any argument is not an *integer* . 



**See Also:** 



**gcd** 




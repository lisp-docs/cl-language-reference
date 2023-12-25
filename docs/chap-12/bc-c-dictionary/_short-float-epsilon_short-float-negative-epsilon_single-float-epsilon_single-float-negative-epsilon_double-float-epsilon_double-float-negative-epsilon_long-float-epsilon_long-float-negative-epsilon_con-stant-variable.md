**short-float-epsilon, short-float-negative-epsilon, single-float-epsilon, single-float-negative-epsilon, double-float-epsilon, double-float-negative-epsilon, long-float-epsilon, long-float-negative-epsilon** *Con stant Variable* 



**Constant Value:** 



<ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. 



**Description:** 



The value of each of the constants <ClLinks  term={"short-float-epsilon"}><b>short-float-epsilon</b></ClLinks>, <ClLinks  term={"single-float-epsilon"}><b>single-float-epsilon</b></ClLinks>, <ClLinks  term={"double-float-epsilon"}><b>double-float-epsilon</b></ClLinks>, and <ClLinks  term={"long-float-epsilon"}><b>long-float-epsilon</b></ClLinks> is the smallest positive *float ε* of the given format, such that the following expression is <ClLinks  term={"true"}><i>true</i></ClLinks> when evaluated: 







 



 



(not (= (float 1 *ε*) (+ (float 1 *ε*) *ε*))) 



The value of each of the constants <ClLinks  term={"short-float-negative-epsilon"}><b>short-float-negative-epsilon</b></ClLinks>, <ClLinks  term={"single-float-negative-epsilon"}><b>single-float-negative-epsilon</b></ClLinks>, <ClLinks  term={"double-float-negative-epsilon"}><b>double-float-negative-epsilon</b></ClLinks>, and <ClLinks  term={"long-float-negative-epsilon"}><b>long-float-negative-epsilon</b></ClLinks> is the smallest positive *float ε* of the given format, such that the following expression is <ClLinks  term={"true"}><i>true</i></ClLinks> when evaluated: 



(not (= (float 1 *ε*) (- (float 1 *ε*) *ε*))) 




**short-float-epsilon, short-float-negative-epsilon, single-float-epsilon, single-float-negative-epsilon, double-float-epsilon, double-float-negative-epsilon, long-float-epsilon, long-float-negative-epsilon** *Con stant Variable* 



**Constant Value:** 



<ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. 



**Description:** 



The value of each of the constants <ClLinks styled={true} term={"short-float-epsilon"}><b>short-float-epsilon</b></ClLinks>, <ClLinks styled={true} term={"single-float-epsilon"}><b>single-float-epsilon</b></ClLinks>, <ClLinks styled={true} term={"double-float-epsilon"}><b>double-float-epsilon</b></ClLinks>, and <ClLinks styled={true} term={"long-float-epsilon"}><b>long-float-epsilon</b></ClLinks> is the smallest positive *float ε* of the given format, such that the following expression is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> when evaluated: 







 



 



(not (= (float 1 *ε*) (+ (float 1 *ε*) *ε*))) 



The value of each of the constants <ClLinks styled={true} term={"short-float-negative-epsilon"}><b>short-float-negative-epsilon</b></ClLinks>, <ClLinks styled={true} term={"single-float-negative-epsilon"}><b>single-float-negative-epsilon</b></ClLinks>, <ClLinks styled={true} term={"double-float-negative-epsilon"}><b>double-float-negative-epsilon</b></ClLinks>, and <ClLinks styled={true} term={"long-float-negative-epsilon"}><b>long-float-negative-epsilon</b></ClLinks> is the smallest positive *float ε* of the given format, such that the following expression is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> when evaluated: 



(not (= (float 1 *ε*) (- (float 1 *ε*) *ε*))) 




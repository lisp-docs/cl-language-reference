**short-float-epsilon, short-float-negative-epsilon, single-float-epsilon, single-float-negative-epsilon, double-float-epsilon, double-float-negative-epsilon, long-float-epsilon, long-float-negative-epsilon** *Con stant Variable* 



**Constant Value:** 



*implementation-dependent*. 



**Description:** 



The value of each of the constants **short-float-epsilon**, **single-float-epsilon**, **double-float-epsilon**, and **long-float-epsilon** is the smallest positive *float ✏* of the given format, such that the following expression is *true* when evaluated: 







 



 



(not (= (float 1 *✏*) (+ (float 1 *✏*) *✏*))) 



The value of each of the constants **short-float-negative-epsilon**, **single-float-negative-epsilon**, **double-float-negative-epsilon**, and **long-float-negative-epsilon** is the smallest positive *float ✏* of the given format, such that the following expression is *true* when evaluated: 



(not (= (float 1 *✏*) (- (float 1 *✏*) *✏*))) 




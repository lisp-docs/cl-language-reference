**float** *System Class* 



**Class Precedence List:** 



**float**, **real**, **number**, **t** 



**Description:** 



A <i>float</i> is a mathematical rational (but <i>not</i> a Common Lisp <i>rational</i>) of the form <i>s · f · b<sup>e−p</sup></i>, where <i>s</i> is +1 or <i>−</i>1, the <i>sign</i>; <i>b</i> is an <i>integer</i> greater than 1, the <i>base</i> or <i>radix</i> of the representation; <i>p</i> is a positive <i>integer</i> , the <i>precision</i> (in base-<i>b</i> digits) of the <i>float</i>; <i>f</i> is a positive <i>integer</i> between <i>b<sup>p−</sup></i>1</sup> and <i>b<sup>p</sup> −</i> 1 (inclusive), the significand; and <i>e</i> is an <i>integer</i> , the exponent. The value of <i>p</i> and the 



range of *e* depends on the implementation and on the type of *float* within that implementation. In addition, there is a floating-point zero; depending on the implementation, there can also be a “minus zero”. If there is no minus zero, then 0▷0 and *−*0▷0 are both interpreted as simply a floating-point zero. (= 0.0 -0.0) is always true. If there is a minus zero, (eql -0.0 0.0) is *false*, otherwise it is *true*. 



The *types* **short-float**, **single-float**, **double-float**, and **long-float** are *subtypes* of *type* **float**. Any two of them must be either *disjoint types* or the *same type*; if the *same type*, then any other *types* between them in the above ordering must also be the *same type*. For example, if the *type* **single-float** and the *type* **long-float** are the *same type*, then the *type* **double-float** must be the *same type* also. 



**Compound Type Specifier Kind:** 



Abbreviating. 



**Compound Type Specifier Syntax:** 



(float [*lower-limit* [*upper-limit*]]) 



**Compound Type Specifier Arguments:** 



*lower-limit*, *upper-limit*—*interval designators* for *type* **float**. The defaults for each of *lower-limit* and *upper-limit* is the *symbol* **\***. 



**Compound Type Specifier Description:** 



This denotes the *floats* on the interval described by *lower-limit* and *upper-limit*. 







 



 



**See Also:** 



Figure 2–9, Section 2.3.2 (Constructing Numbers from Tokens), Section 22.1.3.1.3 (Printing Floats) 



**Notes:** 



Note that all mathematical integers are representable not only as Common Lisp *reals*, but also as *complex floats*. For example, possible representations of the mathematical number 1 include the *integer* 1, the *float* 1.0, or the *complex* #C(1.0 0.0). 




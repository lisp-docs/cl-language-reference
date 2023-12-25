**float** *System Class* 



**Class Precedence List:** 



<ClLinks  term={"float"}><b>float</b></ClLinks>, <ClLinks  term={"real"}><b>real</b></ClLinks>, <ClLinks  term={"number"}><b>number</b></ClLinks>, <ClLinks  term={"t"}><b>t</b></ClLinks> 



**Description:** 



A <i>float</i> is a mathematical rational (but <i>not</i> a Common Lisp <i>rational</i>) of the form <i>s · f · b<sup>e−p</sup></i>, where <i>s</i> is +1 or <i>−</i>1, the <i>sign</i>; <i>b</i> is an <i>integer</i> greater than 1, the <i>base</i> or <i>radix</i> of the representation; <i>p</i> is a positive <i>integer</i> , the <i>precision</i> (in base-<i>b</i> digits) of the <i>float</i>; <i>f</i> is a positive <i>integer</i> between <i>b<sup>p−</sup></i>1 and <i>b<sup>p</sup> −</i> 1 (inclusive), the significand; and <i>e</i> is an <i>integer</i> , the exponent. The value of <i>p</i> and the 



range of *e* depends on the implementation and on the type of <ClLinks  term={"float"}><i>float</i></ClLinks> within that implementation. In addition, there is a floating-point zero; depending on the implementation, there can also be a “minus zero”. If there is no minus zero, then 0▷0 and *−*0▷0 are both interpreted as simply a floating-point zero. (= 0.0 -0.0) is always true. If there is a minus zero, (eql -0.0 0.0) is <ClLinks  term={"false"}><i>false</i></ClLinks>, otherwise it is <ClLinks  term={"true"}><i>true</i></ClLinks>. 



The <ClLinks  term={"type"}><i>types</i></ClLinks> <ClLinks  term={"short-float"}><b>short-float</b></ClLinks>, <ClLinks  term={"single-float"}><b>single-float</b></ClLinks>, <ClLinks  term={"double-float"}><b>double-float</b></ClLinks>, and <ClLinks  term={"long-float"}><b>long-float</b></ClLinks> are <ClLinks  term={"subtype"}><i>subtypes</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"float"}><b>float</b></ClLinks>. Any two of them must be either *disjoint types* or the *same type*; if the *same type*, then any other <ClLinks  term={"type"}><i>types</i></ClLinks> between them in the above ordering must also be the *same type*. For example, if the <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"single-float"}><b>single-float</b></ClLinks> and the <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"long-float"}><b>long-float</b></ClLinks> are the *same type*, then the <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"double-float"}><b>double-float</b></ClLinks> must be the *same type* also. 



**Compound Type Specifier Kind:** 



Abbreviating. 



**Compound Type Specifier Syntax:** 



(float [*lower-limit* [*upper-limit*]]) 



**Compound Type Specifier Arguments:** 



*lower-limit*, *upper-limit*—*interval designators* for <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"float"}><b>float</b></ClLinks>. The defaults for each of *lower-limit* and *upper-limit* is the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> **\***. 



**Compound Type Specifier Description:** 



This denotes the <ClLinks  term={"float"}><i>floats</i></ClLinks> on the interval described by *lower-limit* and *upper-limit*. 







 



 



**See Also:** 



Figure 2–9, Section 2.3.2 (Constructing Numbers from Tokens), Section 22.1.3.1.3 (Printing Floats) 



**Notes:** 



Note that all mathematical integers are representable not only as Common Lisp *reals*, but also as *complex floats*. For example, possible representations of the mathematical number 1 include the *integer* 1, the <ClLinks  term={"float"}><i>float</i></ClLinks> 1.0, or the <ClLinks  term={"complex"}><i>complex</i></ClLinks> #C(1.0 0.0). 




**float** *System Class* 



**Class Precedence List:** 



<ClLinks styled={true} term={"float"}><b>float</b></ClLinks>, <ClLinks styled={true} term={"real"}><b>real</b></ClLinks>, <ClLinks styled={true} term={"number"}><b>number</b></ClLinks>, <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> 



**Description:** 



A <i>float</i> is a mathematical rational (but <i>not</i> a Common Lisp <i>rational</i>) of the form <i>s · f · b<sup>e−p</sup></i>, where <i>s</i> is +1 or <i>−</i>1, the <i>sign</i>; <i>b</i> is an <i>integer</i> greater than 1, the <i>base</i> or <i>radix</i> of the representation; <i>p</i> is a positive <i>integer</i> , the <i>precision</i> (in base-<i>b</i> digits) of the <i>float</i>; <i>f</i> is a positive <i>integer</i> between <i>b<sup>p−</sup></i>1 and <i>b<sup>p</sup> −</i> 1 (inclusive), the significand; and <i>e</i> is an <i>integer</i> , the exponent. The value of <i>p</i> and the 



range of *e* depends on the implementation and on the type of <ClLinks styled={true} term={"float"}><i>float</i></ClLinks> within that implementation. In addition, there is a floating-point zero; depending on the implementation, there can also be a “minus zero”. If there is no minus zero, then 0▷0 and *−*0▷0 are both interpreted as simply a floating-point zero. (= 0.0 -0.0) is always true. If there is a minus zero, (eql -0.0 0.0) is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>, otherwise it is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>. 



The <ClLinks styled={true} term={"type"}><i>types</i></ClLinks> <ClLinks styled={true} term={"short-float"}><b>short-float</b></ClLinks>, <ClLinks styled={true} term={"single-float"}><b>single-float</b></ClLinks>, <ClLinks styled={true} term={"double-float"}><b>double-float</b></ClLinks>, and <ClLinks styled={true} term={"long-float"}><b>long-float</b></ClLinks> are <ClLinks styled={true} term={"subtype"}><i>subtypes</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"float"}><b>float</b></ClLinks>. Any two of them must be either *disjoint types* or the *same type*; if the *same type*, then any other <ClLinks styled={true} term={"type"}><i>types</i></ClLinks> between them in the above ordering must also be the *same type*. For example, if the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"single-float"}><b>single-float</b></ClLinks> and the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"long-float"}><b>long-float</b></ClLinks> are the *same type*, then the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"double-float"}><b>double-float</b></ClLinks> must be the *same type* also. 



**Compound Type Specifier Kind:** 



Abbreviating. 



**Compound Type Specifier Syntax:** 



(float [*lower-limit* [*upper-limit*]]) 



**Compound Type Specifier Arguments:** 



*lower-limit*, *upper-limit*—*interval designators* for <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"float"}><b>float</b></ClLinks>. The defaults for each of *lower-limit* and *upper-limit* is the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> **\***. 



**Compound Type Specifier Description:** 



This denotes the <ClLinks styled={true} term={"float"}><i>floats</i></ClLinks> on the interval described by *lower-limit* and *upper-limit*. 







 



 



**See Also:** 



Figure 2–9, Section 2.3.2 (Constructing Numbers from Tokens), Section 22.1.3.1.3 (Printing Floats) 



**Notes:** 



Note that all mathematical integers are representable not only as Common Lisp *reals*, but also as *complex floats*. For example, possible representations of the mathematical number 1 include the *integer* 1, the <ClLinks styled={true} term={"float"}><i>float</i></ClLinks> 1.0, or the <ClLinks styled={true} term={"complex"}><i>complex</i></ClLinks> #C(1.0 0.0). 




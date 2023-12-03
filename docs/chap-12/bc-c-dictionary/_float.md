**float** *System Class* 

**Class Precedence List:** 

**float**, **real**, **number**, **t** 

**Description:** 

A &#60;i&#62;float&#60;/i&#62; is a mathematical rational (but &#60;i&#62;not&#60;/i&#62; a Common Lisp &#60;i&#62;rational&#60;/i&#62;) of the form &#60;i&#62;s · f · b&#60;sup&#62;e−p&#60;/sup&#62;&#60;/i&#62;, where &#60;i&#62;s&#60;/i&#62; is +1 or &#60;i&#62;−&#60;/i&#62;1, the &#60;i&#62;sign&#60;/i&#62;; &#60;i&#62;b&#60;/i&#62; is an &#60;i&#62;integer&#60;/i&#62; greater than 1, the &#60;i&#62;base&#60;/i&#62; or &#60;i&#62;radix&#60;/i&#62; of the representation; &#60;i&#62;p&#60;/i&#62; is a positive &#60;i&#62;integer&#60;/i&#62; , the &#60;i&#62;precision&#60;/i&#62; (in base-&#60;i&#62;b&#60;/i&#62; digits) of the &#60;i&#62;float&#60;/i&#62;; &#60;i&#62;f&#60;/i&#62; is a positive &#60;i&#62;integer&#60;/i&#62; between &#60;i&#62;b&#60;sup&#62;p−&#60;/sup&#62;&#60;/i&#62;1&#60;/sup&#62; and &#60;i&#62;b&#60;sup&#62;p&#60;/sup&#62; −&#60;/i&#62; 1 (inclusive), the significand; and &#60;i&#62;e&#60;/i&#62; is an &#60;i&#62;integer&#60;/i&#62; , the exponent. The value of &#60;i&#62;p&#60;/i&#62; and the 

range of *e* depends on the implementation and on the type of *float* within that implementation. In addition, there is a floating-point zero; depending on the implementation, there can also be a “minus zero”. If there is no minus zero, then 0&#9655;0 and *−*0&#9655;0 are both interpreted as simply a floating-point zero. (= 0.0 -0.0) is always true. If there is a minus zero, (eql -0.0 0.0) is *false*, otherwise it is *true*. 

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


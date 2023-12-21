**short-float, single-float, double-float, long-float** *Type* 



**Supertypes:** 



**short-float**: **short-float**, **float**, **real**, **number**, **t** 



**single-float**: **single-float**, **float**, **real**, **number**, **t** 



**double-float**: **double-float**, **float**, **real**, **number**, **t** 



**long-float**: **long-float**, **float**, **real**, **number**, **t** 



**Description:** 



For the four defined *subtypes* of *type* **float**, it is true that intermediate between the *type* **short-float** and the *type* **long-float** are the *type* **single-float** and the *type* **double-float**. The precise definition of these categories is *implementation-defined*. The precision (measured in “bits”, computed as *p* log<sub>2</sub>*b*) and the exponent size (also measured in “bits,” computed as log<sub>2</sub>(*n* + 1), where *n* is the maximum exponent value) is recommended to be at least as great as the values in Figure 12–12. Each of the defined *subtypes* of *type* **float** might or might not have a minus zero. 



|**Format Minimum Precision Minimum Exponent Size**|

| :- |

|<p>Short 13 bits 5 bits </p><p>Single 24 bits 8 bits </p><p>Double 50 bits 8 bits </p><p>Long 50 bits 8 bits</p>|





**Figure 12–12. Recommended Minimum Floating-Point Precision and Exponent Size** 



There can be fewer than four internal representations for *floats*. If there are fewer distinct representations, the following rules apply: 



– If there is only one, it is the *type* **single-float**. In this representation, an *object* is simultaneously of *types* **single-float**, **double-float**, **short-float**, and **long-float**. 



– Two internal representations can be arranged in either of the following ways: 







 



 



*•* Two *types* are provided: **single-float** and **short-float**. An *object* is simultaneously of *types* **single-float**, **double-float**, and **long-float**. 



*•* Two *types* are provided: **single-float** and **double-float**. An *object* is simultaneously of *types* **single-float** and **short-float**, or **double-float** and **long-float**. 



– Three internal representations can be arranged in either of the following ways: 



*•* Three *types* are provided: **short-float**, **single-float**, and **double-float**. An *object* can simultaneously be of *type* **double-float** and **long-float**. 



*•* Three *types* are provided: **single-float**, **double-float**, and **long-float**. An *object* can simultaneously be of *types* **single-float** and **short-float**. 



**Compound Type Specifier Kind:** 



Abbreviating. 



**Compound Type Specifier Syntax:** 



(short-float [*short-lower-limit* [*short-upper-limit*]]) 



(single-float [*single-lower-limit* [*single-upper-limit*]]) 



(double-float [*double-lower-limit* [*double-upper-limit*]]) 



(long-float [*long-lower-limit* [*long-upper-limit*]]) 



**Compound Type Specifier Arguments:** 



*short-lower-limit*, *short-upper-limit*—*interval designators* for *type* **short-float**. The defaults for each of *lower-limit* and *upper-limit* is the *symbol* **\***. 



*single-lower-limit*, *single-upper-limit*—*interval designators* for *type* **single-float**. The defaults for each of *lower-limit* and *upper-limit* is the *symbol* **\***. 



*double-lower-limit*, *double-upper-limit*—*interval designators* for *type* **double-float**. The defaults for each of *lower-limit* and *upper-limit* is the *symbol* **\***. 



*long-lower-limit*, *long-upper-limit*—*interval designators* for *type* **long-float**. The defaults for each of *lower-limit* and *upper-limit* is the *symbol* **\***. 



**Compound Type Specifier Description:** 



Each of these denotes the set of *floats* of the indicated *type* that are on the interval specified by the *interval designators*. 







 



 




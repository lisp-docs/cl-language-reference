**real** *System Class* 



**Class Precedence List:** 



**real**, **number**, **t** 



**Description:** 



The *type* **real** includes all *numbers* that represent mathematical real numbers, though there are mathematical real numbers (*e.g.*, irrational numbers) that do not have an exact representation in Common Lisp. Only *reals* can be ordered using the &lt;, &gt;, &lt;**=**, and &gt;**=** functions. 



The *types* **rational** and **float** are *disjoint subtypes* of *type* **real**. 



**Compound Type Specifier Kind:** 



Abbreviating. 



**Compound Type Specifier Syntax:** 



(real [*lower-limit* [*upper-limit*]]) 







 



 



**Compound Type Specifier Arguments:** 



*lower-limit*, *upper-limit*—*interval designators* for *type* **real**. The defaults for each of *lower-limit* and *upper-limit* is the *symbol* **\***. 



**Compound Type Specifier Description:** 



This denotes the *reals* on the interval described by *lower-limit* and *upper-limit*. 




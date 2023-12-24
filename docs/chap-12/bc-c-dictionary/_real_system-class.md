**real** *System Class* 



**Class Precedence List:** 



<ClLinks styled={true} term={"real"}><b>real</b></ClLinks>, <ClLinks styled={true} term={"number"}><b>number</b></ClLinks>, <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> 



**Description:** 



The <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"real"}><b>real</b></ClLinks> includes all <ClLinks styled={true} term={"number"}><i>numbers</i></ClLinks> that represent mathematical real numbers, though there are mathematical real numbers (*e.g.*, irrational numbers) that do not have an exact representation in Common Lisp. Only *reals* can be ordered using the &lt;, &gt;, &lt;<ClLinks styled={true} term={"="}><b>=</b></ClLinks>, and &gt;<ClLinks styled={true} term={"="}><b>=</b></ClLinks> functions. 



The <ClLinks styled={true} term={"type"}><i>types</i></ClLinks> <ClLinks styled={true} term={"rational"}><b>rational</b></ClLinks> and <ClLinks styled={true} term={"float"}><b>float</b></ClLinks> are *disjoint subtypes* of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"real"}><b>real</b></ClLinks>. 



**Compound Type Specifier Kind:** 



Abbreviating. 



**Compound Type Specifier Syntax:** 



(real [*lower-limit* [*upper-limit*]]) 







 



 



**Compound Type Specifier Arguments:** 



*lower-limit*, *upper-limit*—*interval designators* for <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"real"}><b>real</b></ClLinks>. The defaults for each of *lower-limit* and *upper-limit* is the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> **\***. 



**Compound Type Specifier Description:** 



This denotes the *reals* on the interval described by *lower-limit* and *upper-limit*. 




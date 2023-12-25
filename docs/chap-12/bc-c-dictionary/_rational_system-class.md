**rational** *System Class* 



**Class Precedence List:** 



<ClLinks  term={"rational"}><b>rational</b></ClLinks>, <ClLinks  term={"real"}><b>real</b></ClLinks>, <ClLinks  term={"number"}><b>number</b></ClLinks>, <ClLinks  term={"t"}><b>t</b></ClLinks> 



**Description:** 



The canonical representation of a <ClLinks  term={"rational"}><i>rational</i></ClLinks> is as an *integer* if its value is integral, and otherwise as a <ClLinks  term={"ratio"}><i>ratio</i></ClLinks>. 



The <ClLinks  term={"type"}><i>types</i></ClLinks> <ClLinks  term={"integer"}><b>integer</b></ClLinks> and <ClLinks  term={"ratio"}><b>ratio</b></ClLinks> are *disjoint subtypes* of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"rational"}><b>rational</b></ClLinks>. 



**Compound Type Specifier Kind:** 



Abbreviating. 



**Compound Type Specifier Syntax:** 



(rational [*lower-limit* [*upper-limit*]]) 



**Compound Type Specifier Arguments:** 



*lower-limit*, *upper-limit*—*interval designators* for <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"rational"}><b>rational</b></ClLinks>. The defaults for each of *lower-limit* and *upper-limit* is the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> **\***. 



**Compound Type Specifier Description:** 



This denotes the <ClLinks  term={"rational"}><i>rationals</i></ClLinks> on the interval described by *lower-limit* and *upper-limit*. 




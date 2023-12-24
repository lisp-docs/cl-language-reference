**rational** *System Class* 



**Class Precedence List:** 



<ClLinks styled={true} term={"rational"}><b>rational</b></ClLinks>, <ClLinks styled={true} term={"real"}><b>real</b></ClLinks>, <ClLinks styled={true} term={"number"}><b>number</b></ClLinks>, <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> 



**Description:** 



The canonical representation of a <ClLinks styled={true} term={"rational"}><i>rational</i></ClLinks> is as an *integer* if its value is integral, and otherwise as a <ClLinks styled={true} term={"ratio"}><i>ratio</i></ClLinks>. 



The <ClLinks styled={true} term={"type"}><i>types</i></ClLinks> <ClLinks styled={true} term={"integer"}><b>integer</b></ClLinks> and <ClLinks styled={true} term={"ratio"}><b>ratio</b></ClLinks> are *disjoint subtypes* of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"rational"}><b>rational</b></ClLinks>. 



**Compound Type Specifier Kind:** 



Abbreviating. 



**Compound Type Specifier Syntax:** 



(rational [*lower-limit* [*upper-limit*]]) 



**Compound Type Specifier Arguments:** 



*lower-limit*, *upper-limit*—*interval designators* for <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"rational"}><b>rational</b></ClLinks>. The defaults for each of *lower-limit* and *upper-limit* is the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> **\***. 



**Compound Type Specifier Description:** 



This denotes the <ClLinks styled={true} term={"rational"}><i>rationals</i></ClLinks> on the interval described by *lower-limit* and *upper-limit*. 




**integer** *System Class* 



**Class Precedence List:** 



<ClLinks styled={true} term={"integer"}><b>integer</b></ClLinks>, <ClLinks styled={true} term={"rational"}><b>rational</b></ClLinks>, <ClLinks styled={true} term={"real"}><b>real</b></ClLinks>, <ClLinks styled={true} term={"number"}><b>number</b></ClLinks>, <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> 



**Description:** 



An *integer* is a mathematical integer. There is no limit on the magnitude of an *integer* . The <ClLinks styled={true} term={"type"}><i>types</i></ClLinks> <ClLinks styled={true} term={"fixnum"}><b>fixnum</b></ClLinks> and <ClLinks styled={true} term={"bignum"}><b>bignum</b></ClLinks> form an *exhaustive partition* of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"integer"}><b>integer</b></ClLinks>. 



**Compound Type Specifier Kind:** 



Abbreviating. 



**Compound Type Specifier Syntax:** 



(integer [*lower-limit* [*upper-limit*]]) 



**Compound Type Specifier Arguments:** 



*lower-limit*, *upper-limit*—*interval designators* for <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"integer"}><b>integer</b></ClLinks>. The defaults for each of *lower-limit* and *upper-limit* is the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> **\***. 



**Compound Type Specifier Description:** 



This denotes the *integers* on the interval described by *lower-limit* and *upper-limit*. 



**See Also:** 



Figure 2–9, Section 2.3.2 (Constructing Numbers from Tokens), Section 22.1.3.1.1 (Printing Integers) 



**Notes:** 



The <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> (integer *lower upper*), where *lower* and *upper* are <ClLinks styled={true} term={"most-negative-fixnum"}><b>most-negative-fixnum</b></ClLinks> and <ClLinks styled={true} term={"most-positive-fixnum"}><b>most-positive-fixnum</b></ClLinks>, respectively, is also called <ClLinks styled={true} term={"fixnum"}><b>fixnum</b></ClLinks>. 



The <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> (integer 0 1) is also called <ClLinks styled={true} term={"bit"}><b>bit</b></ClLinks>. The <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> (integer 0 \*) is also called <ClLinks styled={true} term={"unsigned-byte"}><b>unsigned-byte</b></ClLinks>. 
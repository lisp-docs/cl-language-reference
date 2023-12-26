**integer** <GlossaryTerm styled={true} term={"system class"}><i>System Class</i></GlossaryTerm> 



**Class Precedence List:** 



<ClLinks  term={"integer"}><b>integer</b></ClLinks>, <ClLinks  term={"rational"}><b>rational</b></ClLinks>, <ClLinks  term={"real"}><b>real</b></ClLinks>, <ClLinks  term={"number"}><b>number</b></ClLinks>, <ClLinks  term={"t"}><b>t</b></ClLinks> 



**Description:** 



An *integer* is a mathematical integer. There is no limit on the magnitude of an *integer* . The <ClLinks  term={"type"}><i>types</i></ClLinks> <ClLinks  term={"fixnum"}><b>fixnum</b></ClLinks> and <ClLinks  term={"bignum"}><b>bignum</b></ClLinks> form an <GlossaryTerm styled={true} term={"exhaustive partition"}><i>exhaustive partition</i></GlossaryTerm> of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"integer"}><b>integer</b></ClLinks>. 



**Compound Type Specifier Kind:** 



Abbreviating. 



**Compound Type Specifier Syntax:** 



(integer [*lower-limit* [*upper-limit*]]) 



**Compound Type Specifier Arguments:** 



*lower-limit*, *upper-limit*—<GlossaryTerm styled={true} term={"interval designator"}><i>interval designators</i></GlossaryTerm> for <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"integer"}><b>integer</b></ClLinks>. The defaults for each of *lower-limit* and *upper-limit* is the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> **\***. 



**Compound Type Specifier Description:** 



This denotes the *integers* on the interval described by *lower-limit* and *upper-limit*. 



**See Also:** 



Figure 2–9, Section 2.3.2 (Constructing Numbers from Tokens), Section 22.1.3.1.1 (Printing Integers) 



**Notes:** 



The <ClLinks  term={"type"}><i>type</i></ClLinks> (integer *lower upper*), where *lower* and *upper* are <ClLinks  term={"most-negative-fixnum"}><b>most-negative-fixnum</b></ClLinks> and <ClLinks  term={"most-positive-fixnum"}><b>most-positive-fixnum</b></ClLinks>, respectively, is also called <ClLinks  term={"fixnum"}><b>fixnum</b></ClLinks>. 



The <ClLinks  term={"type"}><i>type</i></ClLinks> (integer 0 1) is also called <ClLinks  term={"bit"}><b>bit</b></ClLinks>. The <ClLinks  term={"type"}><i>type</i></ClLinks> (integer 0 \*) is also called <ClLinks  term={"unsigned-byte"}><b>unsigned-byte</b></ClLinks>. 
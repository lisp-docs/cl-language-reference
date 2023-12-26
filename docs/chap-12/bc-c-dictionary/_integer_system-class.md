**integer** <GlossaryTerm styled={true} term={"system class"}><i>System Class</i></GlossaryTerm> 



**Class Precedence List:** 



<DictionaryLink  term={"integer"}><b>integer</b></DictionaryLink>, <DictionaryLink  term={"rational"}><b>rational</b></DictionaryLink>, <DictionaryLink  term={"real"}><b>real</b></DictionaryLink>, <DictionaryLink  term={"number"}><b>number</b></DictionaryLink>, <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



An *integer* is a mathematical integer. There is no limit on the magnitude of an *integer* . The <ClLinks  term={"type"}><i>types</i></ClLinks> <DictionaryLink  term={"fixnum"}><b>fixnum</b></DictionaryLink> and <DictionaryLink  term={"bignum"}><b>bignum</b></DictionaryLink> form an <GlossaryTerm styled={true} term={"exhaustive partition"}><i>exhaustive partition</i></GlossaryTerm> of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"integer"}><b>integer</b></DictionaryLink>. 



**Compound Type Specifier Kind:** 



Abbreviating. 



**Compound Type Specifier Syntax:** 



(integer [*lower-limit* [*upper-limit*]]) 



**Compound Type Specifier Arguments:** 



*lower-limit*, *upper-limit*—<GlossaryTerm styled={true} term={"interval designator"}><i>interval designators</i></GlossaryTerm> for <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"integer"}><b>integer</b></DictionaryLink>. The defaults for each of *lower-limit* and *upper-limit* is the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> **\***. 



**Compound Type Specifier Description:** 



This denotes the *integers* on the interval described by *lower-limit* and *upper-limit*. 



**See Also:** 



Figure 2–9, Section 2.3.2 (Constructing Numbers from Tokens), Section 22.1.3.1.1 (Printing Integers) 



**Notes:** 



The <ClLinks  term={"type"}><i>type</i></ClLinks> (integer *lower upper*), where *lower* and *upper* are <DictionaryLink  term={"most-negative-fixnum"}><b>most-negative-fixnum</b></DictionaryLink> and <DictionaryLink  term={"most-positive-fixnum"}><b>most-positive-fixnum</b></DictionaryLink>, respectively, is also called <DictionaryLink  term={"fixnum"}><b>fixnum</b></DictionaryLink>. 



The <ClLinks  term={"type"}><i>type</i></ClLinks> (integer 0 1) is also called <DictionaryLink  term={"bit"}><b>bit</b></DictionaryLink>. The <ClLinks  term={"type"}><i>type</i></ClLinks> (integer 0 \*) is also called <DictionaryLink  term={"unsigned-byte"}><b>unsigned-byte</b></DictionaryLink>. 
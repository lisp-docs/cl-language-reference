**integer** *System Class* 



**Class Precedence List:** 



<DictionaryLink styled={true} term={"integer"}><b>integer</b></DictionaryLink>, <DictionaryLink styled={true} term={"rational"}><b>rational</b></DictionaryLink>, <DictionaryLink styled={true} term={"real"}><b>real</b></DictionaryLink>, <DictionaryLink styled={true} term={"number"}><b>number</b></DictionaryLink>, <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



An *integer* is a mathematical integer. There is no limit on the magnitude of an *integer* . The <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm> <DictionaryLink styled={true} term={"fixnum"}><b>fixnum</b></DictionaryLink> and <DictionaryLink styled={true} term={"bignum"}><b>bignum</b></DictionaryLink> form an *exhaustive partition* of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"integer"}><b>integer</b></DictionaryLink>. 



**Compound Type Specifier Kind:** 



Abbreviating. 



**Compound Type Specifier Syntax:** 



(integer [*lower-limit* [*upper-limit*]]) 



**Compound Type Specifier Arguments:** 



*lower-limit*, *upper-limit*—*interval designators* for <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"integer"}><b>integer</b></DictionaryLink>. The defaults for each of *lower-limit* and *upper-limit* is the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> **\***. 



**Compound Type Specifier Description:** 



This denotes the *integers* on the interval described by *lower-limit* and *upper-limit*. 



**See Also:** 



Figure 2–9, Section 2.3.2 (Constructing Numbers from Tokens), Section 22.1.3.1.1 (Printing Integers) 



**Notes:** 



The <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> (integer *lower upper*), where *lower* and *upper* are <DictionaryLink styled={true} term={"most-negative-fixnum"}><b>most-negative-fixnum</b></DictionaryLink> and <DictionaryLink styled={true} term={"most-positive-fixnum"}><b>most-positive-fixnum</b></DictionaryLink>, respectively, is also called <DictionaryLink styled={true} term={"fixnum"}><b>fixnum</b></DictionaryLink>. 



The <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> (integer 0 1) is also called <DictionaryLink styled={true} term={"bit"}><b>bit</b></DictionaryLink>. The <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> (integer 0 \*) is also called <DictionaryLink styled={true} term={"unsigned-byte"}><b>unsigned-byte</b></DictionaryLink>. 
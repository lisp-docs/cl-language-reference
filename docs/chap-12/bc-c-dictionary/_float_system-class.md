**float** <GlossaryTerm styled={true} term={"system class"}><i>System Class</i></GlossaryTerm> 



**Class Precedence List:** 



<DictionaryLink  term={"float"}><b>float</b></DictionaryLink>, <DictionaryLink  term={"real"}><b>real</b></DictionaryLink>, <DictionaryLink  term={"number"}><b>number</b></DictionaryLink>, <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



A <i>float</i> is a mathematical rational (but <i>not</i> a Common Lisp <i>rational</i>) of the form <i>s · f · b<sup>e−p</sup></i>, where <i>s</i> is +1 or <i>−</i>1, the <i>sign</i>; <i>b</i> is an <i>integer</i> greater than 1, the <i>base</i> or <i>radix</i> of the representation; <i>p</i> is a positive <i>integer</i> , the <i>precision</i> (in base-<i>b</i> digits) of the <i>float</i>; <i>f</i> is a positive <i>integer</i> between <i>b<sup>p−</sup></i>1 and <i>b<sup>p</sup> −</i> 1 (inclusive), the significand; and <i>e</i> is an <i>integer</i> , the exponent. The value of <i>p</i> and the 



range of *e* depends on the implementation and on the type of <GlossaryTerm  term={"float"}><i>float</i></GlossaryTerm> within that implementation. In addition, there is a floating-point zero; depending on the implementation, there can also be a “minus zero”. If there is no minus zero, then 0▷0 and *−*0▷0 are both interpreted as simply a floating-point zero. (= 0.0 -0.0) is always true. If there is a minus zero, (eql -0.0 0.0) is <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>, otherwise it is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm>. 



The <GlossaryTerm  term={"type"}><i>types</i></GlossaryTerm> <DictionaryLink  term={"short-float"}><b>short-float</b></DictionaryLink>, <DictionaryLink  term={"single-float"}><b>single-float</b></DictionaryLink>, <DictionaryLink  term={"double-float"}><b>double-float</b></DictionaryLink>, and <DictionaryLink  term={"long-float"}><b>long-float</b></DictionaryLink> are <GlossaryTerm  term={"subtype"}><i>subtypes</i></GlossaryTerm> of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"float"}><b>float</b></DictionaryLink>. Any two of them must be either *disjoint types* or the *same type*; if the *same type*, then any other <GlossaryTerm  term={"type"}><i>types</i></GlossaryTerm> between them in the above ordering must also be the *same type*. For example, if the <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"single-float"}><b>single-float</b></DictionaryLink> and the <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"long-float"}><b>long-float</b></DictionaryLink> are the *same type*, then the <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"double-float"}><b>double-float</b></DictionaryLink> must be the *same type* also. 



**Compound Type Specifier Kind:** 



Abbreviating. 



**Compound Type Specifier Syntax:** 



(float [*lower-limit* [*upper-limit*]]) 



**Compound Type Specifier Arguments:** 



*lower-limit*, *upper-limit*—<GlossaryTerm styled={true} term={"interval designator"}><i>interval designators</i></GlossaryTerm> for <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"float"}><b>float</b></DictionaryLink>. The defaults for each of *lower-limit* and *upper-limit* is the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> **\***. 



**Compound Type Specifier Description:** 



This denotes the <GlossaryTerm  term={"float"}><i>floats</i></GlossaryTerm> on the interval described by *lower-limit* and *upper-limit*. 







 



 



**See Also:** 



Figure 2–9, Section 2.3.2 (Constructing Numbers from Tokens), Section 22.1.3.1.3 (Printing Floats) 



**Notes:** 



Note that all mathematical integers are representable not only as Common Lisp *reals*, but also as <GlossaryTerm styled={true} term={"complex float"}><i>complex floats</i></GlossaryTerm>. For example, possible representations of the mathematical number 1 include the *integer* 1, the <GlossaryTerm  term={"float"}><i>float</i></GlossaryTerm> 1.0, or the <GlossaryTerm  term={"complex"}><i>complex</i></GlossaryTerm> #C(1.0 0.0). 




---
title: V
sidebar_position: 118
---

**V** 



**valid array dimension** *n.* a <ClLinks  term={"fixnum"}><i>fixnum</i></ClLinks> suitable for use as an *array dimension*. 



Such a <ClLinks  term={"fixnum"}><i>fixnum</i></ClLinks> must be greater than or equal to zero, and less than the <ClLinks  term={"value"}><i>value</i></ClLinks> of <ClLinks  term={"array-dimension-limit"}><b>array-dimension-limit</b></ClLinks>. When multiple *array dimensions* are to be used together to specify a multi-dimensional <ClLinks  term={"array"}><i>array</i></ClLinks>, there is also an implied constraint that the product of all of the <ClLinks  term={"dimension"}><i>dimensions</i></ClLinks> be less than the <ClLinks  term={"value"}><i>value</i></ClLinks> of <ClLinks  term={"array-total-size-limit"}><b>array-total-size-limit</b></ClLinks>. 



**valid array index** *n.* (of an <ClLinks  term={"array"}><i>array</i></ClLinks>) a <ClLinks  term={"fixnum"}><i>fixnum</i></ClLinks> suitable for use as one of possibly several indices needed to name an <ClLinks  term={"element"}><i>element</i></ClLinks> of the <ClLinks  term={"array"}><i>array</i></ClLinks> according to a multi-dimensional Cartesian coordinate system. Such a <ClLinks  term={"fixnum"}><i>fixnum</i></ClLinks> must be greater than or equal to zero, and must be less than the corresponding <ClLinks  term={"dimension"}><i>dimension</i></ClLinks><sub>1</sub> of the <ClLinks  term={"array"}><i>array</i></ClLinks>. (Unless otherwise explicitly specified, the phrase “a <ClLinks  term={"list"}><i>list</i></ClLinks> of *valid array indices*” further implies that the <ClLinks  term={"length"}><i>length</i></ClLinks> of the <ClLinks  term={"list"}><i>list</i></ClLinks> must be the same as the <ClLinks  term={"rank"}><i>rank</i></ClLinks> of the <ClLinks  term={"array"}><i>array</i></ClLinks>.) “For a 2 by 3 array, valid array indices for the first dimension are 0 and 1, and valid array indices for the second dimension are 0, 1 and 2.” 



**valid array row-major index** *n.* (of an <ClLinks  term={"array"}><i>array</i></ClLinks>, which might have any number of <ClLinks  term={"dimension"}><i>dimensions</i></ClLinks><sub>2</sub>) a single <ClLinks  term={"fixnum"}><i>fixnum</i></ClLinks> suitable for use in naming any <ClLinks  term={"element"}><i>element</i></ClLinks> of the <ClLinks  term={"array"}><i>array</i></ClLinks>, by viewing the array’s storage as a linear series of <ClLinks  term={"element"}><i>elements</i></ClLinks> in row-major order. Such a <ClLinks  term={"fixnum"}><i>fixnum</i></ClLinks> must be greater than or equal to zero, and less than the <GlossaryTerm styled={true} term={"array total size"}><i>array total size</i></GlossaryTerm> of the <ClLinks  term={"array"}><i>array</i></ClLinks>. 



**valid fill pointer** *n.* (of an <ClLinks  term={"array"}><i>array</i></ClLinks>) a <ClLinks  term={"fixnum"}><i>fixnum</i></ClLinks> suitable for use as a <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> for the <ClLinks  term={"array"}><i>array</i></ClLinks>. Such a <ClLinks  term={"fixnum"}><i>fixnum</i></ClLinks> must be greater than or equal to zero, and less than or equal to the <GlossaryTerm styled={true} term={"array total size"}><i>array total size</i></GlossaryTerm> of the <ClLinks  term={"array"}><i>array</i></ClLinks>. 



**valid logical pathname host** *n.* a <ClLinks  term={"string"}><i>string</i></ClLinks> that has been defined as the name of a <GlossaryTerm styled={true} term={"logical host"}><i>logical host</i></GlossaryTerm>. See the <ClLinks  term={"function"}><i>function</i></ClLinks> **load-logical-pathname-translations**. 







 



 



**valid pathname device** *n.* a <ClLinks  term={"string"}><i>string</i></ClLinks>, <ClLinks  term={"nil"}><b>nil</b></ClLinks>, :unspecific, or some other <ClLinks  term={"object"}><i>object</i></ClLinks> defined by the <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> to be a <GlossaryTerm styled={true} term={"valid pathname device"}><i>valid pathname device</i></GlossaryTerm>. 



**valid pathname directory** *n.* a <ClLinks  term={"string"}><i>string</i></ClLinks>, a <ClLinks  term={"list"}><i>list</i></ClLinks> of <ClLinks  term={"string"}><i>strings</i></ClLinks>, <ClLinks  term={"nil"}><b>nil</b></ClLinks>, :wild, :unspecific, or some other <ClLinks  term={"object"}><i>object</i></ClLinks> defined by the <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> to be a *valid directory component*. 



**valid pathname host** *n.* a <GlossaryTerm styled={true} term={"valid physical pathname host"}><i>valid physical pathname host</i></GlossaryTerm> or a <GlossaryTerm styled={true} term={"valid logical pathname host"}><i>valid logical pathname host</i></GlossaryTerm>. 



**valid pathname name** *n.* a <ClLinks  term={"string"}><i>string</i></ClLinks>, <ClLinks  term={"nil"}><b>nil</b></ClLinks>, :wild, :unspecific, or some other <ClLinks  term={"object"}><i>object</i></ClLinks> defined by the <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> to be a <GlossaryTerm styled={true} term={"valid pathname name"}><i>valid pathname name</i></GlossaryTerm>. 



**valid pathname type** *n.* a <ClLinks  term={"string"}><i>string</i></ClLinks>, <ClLinks  term={"nil"}><b>nil</b></ClLinks>, :wild, :unspecific. 



**valid pathname version** *n.* a non-negative *integer* , or one of :wild, :newest, 



:unspecific, or <ClLinks  term={"nil"}><b>nil</b></ClLinks>. The symbols :oldest, :previous, and :installed are *semi* 



*standard* special version symbols. 



**valid physical pathname host** *n.* any of a <ClLinks  term={"string"}><i>string</i></ClLinks>, a <ClLinks  term={"list"}><i>list</i></ClLinks> of <ClLinks  term={"string"}><i>strings</i></ClLinks>, or the symbol :unspecific, that is recognized by the implementation as the name of a host. 



**valid sequence index** *n.* (of a *sequence*) an *integer* suitable for use to name an <ClLinks  term={"element"}><i>element</i></ClLinks> of the *sequence*. Such an *integer* must be greater than or equal to zero, and must be less than the <ClLinks  term={"length"}><i>length</i></ClLinks> of the *sequence*. (If the *sequence* is an <ClLinks  term={"array"}><i>array</i></ClLinks>, the <GlossaryTerm styled={true} term={"valid sequence index"}><i>valid sequence index</i></GlossaryTerm> is further constrained to be a <ClLinks  term={"fixnum"}><i>fixnum</i></ClLinks>.) 



**value** *n.* 1. a. one of possibly several <ClLinks  term={"object"}><i>objects</i></ClLinks> that are the result of an <ClLinks  term={"evaluation"}><i>evaluation</i></ClLinks>. b. (in a situation where exactly one value is expected from the <ClLinks  term={"evaluation"}><i>evaluation</i></ClLinks> of a <ClLinks  term={"form"}><i>form</i></ClLinks>) the <GlossaryTerm styled={true} term={"primary value"}><i>primary value</i></GlossaryTerm> returned by the <ClLinks  term={"form"}><i>form</i></ClLinks>. c. (of <ClLinks  term={"form"}><i>forms</i></ClLinks> in an <GlossaryTerm styled={true} term={"implicit progn"}><i>implicit progn</i></GlossaryTerm>) one of possibly 



several <ClLinks  term={"object"}><i>objects</i></ClLinks> that result from the <ClLinks  term={"evaluation"}><i>evaluation</i></ClLinks> of the last <ClLinks  term={"form"}><i>form</i></ClLinks>, or <ClLinks  term={"nil"}><b>nil</b></ClLinks> if there are no <ClLinks  term={"form"}><i>forms</i></ClLinks>. 2. an <ClLinks  term={"object"}><i>object</i></ClLinks> associated with a <ClLinks  term={"name"}><i>name</i></ClLinks> in a <ClLinks  term={"binding"}><i>binding</i></ClLinks>. 3. (of a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>) the <ClLinks  term={"value"}><i>value</i></ClLinks> of the <GlossaryTerm styled={true} term={"dynamic variable"}><i>dynamic variable</i></GlossaryTerm> named by that symbol. 4. an <ClLinks  term={"object"}><i>object</i></ClLinks> associated with a <ClLinks  term={"key"}><i>key</i></ClLinks> in an <GlossaryTerm styled={true} term={"association list"}><i>association list</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"property list"}><i>property list</i></GlossaryTerm>, or a <GlossaryTerm styled={true} term={"hash table"}><i>hash table</i></GlossaryTerm>. 



**value cell** *n. Trad.* (of a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>) The <ClLinks  term={"place"}><i>place</i></ClLinks> which holds the <ClLinks  term={"value"}><i>value</i></ClLinks>, if any, of the <GlossaryTerm styled={true} term={"dynamic variable"}><i>dynamic variable</i></GlossaryTerm> named by that <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>, and which is *accessed* by <ClLinks  term={"symbol-value"}><b>symbol-value</b></ClLinks>. See <ClLinks  term={"cell"}><i>cell</i></ClLinks>. 



**variable** *n.* a <ClLinks  term={"binding"}><i>binding</i></ClLinks> in the “variable” <ClLinks  term={"namespace"}><i>namespace</i></ClLinks>. See Section 3.1.2.1.1 (Symbols as Forms). 



<ClLinks  term={"vector"}><b>vector</b></ClLinks> *n.* a one-dimensional <ClLinks  term={"array"}><i>array</i></ClLinks>. 



**vertical-bar** *n.* the <GlossaryTerm styled={true} term={"standard character"}><i>standard character</i></GlossaryTerm> that is called “vertical bar” (|). See Figure 2–5. 



 



 




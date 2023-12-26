---
title: V
sidebar_position: 118
---

**V** 



**valid array dimension** *n.* a <GlossaryTerm  term={"fixnum"}><i>fixnum</i></GlossaryTerm> suitable for use as an *array dimension*. 



Such a <GlossaryTerm  term={"fixnum"}><i>fixnum</i></GlossaryTerm> must be greater than or equal to zero, and less than the <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink  term={"array-dimension-limit"}><b>array-dimension-limit</b></DictionaryLink>. When multiple *array dimensions* are to be used together to specify a multi-dimensional <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>, there is also an implied constraint that the product of all of the <GlossaryTerm  term={"dimension"}><i>dimensions</i></GlossaryTerm> be less than the <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink  term={"array-total-size-limit"}><b>array-total-size-limit</b></DictionaryLink>. 



**valid array index** *n.* (of an <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>) a <GlossaryTerm  term={"fixnum"}><i>fixnum</i></GlossaryTerm> suitable for use as one of possibly several indices needed to name an <GlossaryTerm  term={"element"}><i>element</i></GlossaryTerm> of the <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> according to a multi-dimensional Cartesian coordinate system. Such a <GlossaryTerm  term={"fixnum"}><i>fixnum</i></GlossaryTerm> must be greater than or equal to zero, and must be less than the corresponding <GlossaryTerm  term={"dimension"}><i>dimension</i></GlossaryTerm><sub>1</sub> of the <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>. (Unless otherwise explicitly specified, the phrase “a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> of *valid array indices*” further implies that the <GlossaryTerm  term={"length"}><i>length</i></GlossaryTerm> of the <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> must be the same as the <GlossaryTerm  term={"rank"}><i>rank</i></GlossaryTerm> of the <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>.) “For a 2 by 3 array, valid array indices for the first dimension are 0 and 1, and valid array indices for the second dimension are 0, 1 and 2.” 



**valid array row-major index** *n.* (of an <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>, which might have any number of <GlossaryTerm  term={"dimension"}><i>dimensions</i></GlossaryTerm><sub>2</sub>) a single <GlossaryTerm  term={"fixnum"}><i>fixnum</i></GlossaryTerm> suitable for use in naming any <GlossaryTerm  term={"element"}><i>element</i></GlossaryTerm> of the <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>, by viewing the array’s storage as a linear series of <GlossaryTerm  term={"element"}><i>elements</i></GlossaryTerm> in row-major order. Such a <GlossaryTerm  term={"fixnum"}><i>fixnum</i></GlossaryTerm> must be greater than or equal to zero, and less than the <GlossaryTerm styled={true} term={"array total size"}><i>array total size</i></GlossaryTerm> of the <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>. 



**valid fill pointer** *n.* (of an <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>) a <GlossaryTerm  term={"fixnum"}><i>fixnum</i></GlossaryTerm> suitable for use as a <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> for the <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>. Such a <GlossaryTerm  term={"fixnum"}><i>fixnum</i></GlossaryTerm> must be greater than or equal to zero, and less than or equal to the <GlossaryTerm styled={true} term={"array total size"}><i>array total size</i></GlossaryTerm> of the <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>. 



**valid logical pathname host** *n.* a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> that has been defined as the name of a <GlossaryTerm styled={true} term={"logical host"}><i>logical host</i></GlossaryTerm>. See the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> **load-logical-pathname-translations**. 







 



 



**valid pathname device** *n.* a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>, <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>, :unspecific, or some other <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> defined by the <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm> to be a <GlossaryTerm styled={true} term={"valid pathname device"}><i>valid pathname device</i></GlossaryTerm>. 



**valid pathname directory** *n.* a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>, a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> of <GlossaryTerm  term={"string"}><i>strings</i></GlossaryTerm>, <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>, :wild, :unspecific, or some other <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> defined by the <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm> to be a *valid directory component*. 



**valid pathname host** *n.* a <GlossaryTerm styled={true} term={"valid physical pathname host"}><i>valid physical pathname host</i></GlossaryTerm> or a <GlossaryTerm styled={true} term={"valid logical pathname host"}><i>valid logical pathname host</i></GlossaryTerm>. 



**valid pathname name** *n.* a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>, <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>, :wild, :unspecific, or some other <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> defined by the <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm> to be a <GlossaryTerm styled={true} term={"valid pathname name"}><i>valid pathname name</i></GlossaryTerm>. 



**valid pathname type** *n.* a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>, <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>, :wild, :unspecific. 



**valid pathname version** *n.* a non-negative *integer* , or one of :wild, :newest, 



:unspecific, or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. The symbols :oldest, :previous, and :installed are *semi* 



*standard* special version symbols. 



**valid physical pathname host** *n.* any of a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>, a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> of <GlossaryTerm  term={"string"}><i>strings</i></GlossaryTerm>, or the symbol :unspecific, that is recognized by the implementation as the name of a host. 



**valid sequence index** *n.* (of a *sequence*) an *integer* suitable for use to name an <GlossaryTerm  term={"element"}><i>element</i></GlossaryTerm> of the *sequence*. Such an *integer* must be greater than or equal to zero, and must be less than the <GlossaryTerm  term={"length"}><i>length</i></GlossaryTerm> of the *sequence*. (If the *sequence* is an <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>, the <GlossaryTerm styled={true} term={"valid sequence index"}><i>valid sequence index</i></GlossaryTerm> is further constrained to be a <GlossaryTerm  term={"fixnum"}><i>fixnum</i></GlossaryTerm>.) 



**value** *n.* 1. a. one of possibly several <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> that are the result of an <GlossaryTerm  term={"evaluation"}><i>evaluation</i></GlossaryTerm>. b. (in a situation where exactly one value is expected from the <GlossaryTerm  term={"evaluation"}><i>evaluation</i></GlossaryTerm> of a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>) the <GlossaryTerm styled={true} term={"primary value"}><i>primary value</i></GlossaryTerm> returned by the <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. c. (of <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> in an <GlossaryTerm styled={true} term={"implicit progn"}><i>implicit progn</i></GlossaryTerm>) one of possibly 



several <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> that result from the <GlossaryTerm  term={"evaluation"}><i>evaluation</i></GlossaryTerm> of the last <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>, or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> if there are no <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm>. 2. an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> associated with a <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> in a <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm>. 3. (of a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>) the <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"dynamic variable"}><i>dynamic variable</i></GlossaryTerm> named by that symbol. 4. an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> associated with a <GlossaryTerm  term={"key"}><i>key</i></GlossaryTerm> in an <GlossaryTerm styled={true} term={"association list"}><i>association list</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"property list"}><i>property list</i></GlossaryTerm>, or a <GlossaryTerm styled={true} term={"hash table"}><i>hash table</i></GlossaryTerm>. 



**value cell** *n. Trad.* (of a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>) The <GlossaryTerm  term={"place"}><i>place</i></GlossaryTerm> which holds the <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm>, if any, of the <GlossaryTerm styled={true} term={"dynamic variable"}><i>dynamic variable</i></GlossaryTerm> named by that <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>, and which is *accessed* by <DictionaryLink  term={"symbol-value"}><b>symbol-value</b></DictionaryLink>. See <GlossaryTerm  term={"cell"}><i>cell</i></GlossaryTerm>. 



**variable** *n.* a <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm> in the “variable” <GlossaryTerm  term={"namespace"}><i>namespace</i></GlossaryTerm>. See Section 3.1.2.1.1 (Symbols as Forms). 



<DictionaryLink  term={"vector"}><b>vector</b></DictionaryLink> *n.* a one-dimensional <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>. 



**vertical-bar** *n.* the <GlossaryTerm styled={true} term={"standard character"}><i>standard character</i></GlossaryTerm> that is called “vertical bar” (|). See Figure 2–5. 



 



 




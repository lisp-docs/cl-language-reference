---
title: V
sidebar_position: 118
---

**V** 



**valid array dimension** *n.* a <GlossaryTerm styled={true} term={"fixnum"}><i>fixnum</i></GlossaryTerm> suitable for use as an *array dimension*. 



Such a <GlossaryTerm styled={true} term={"fixnum"}><i>fixnum</i></GlossaryTerm> must be greater than or equal to zero, and less than the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"array-dimension-limit"}><b>array-dimension-limit</b></DictionaryLink>. When multiple *array dimensions* are to be used together to specify a multi-dimensional <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>, there is also an implied constraint that the product of all of the <GlossaryTerm styled={true} term={"dimension"}><i>dimensions</i></GlossaryTerm> be less than the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"array-total-size-limit"}><b>array-total-size-limit</b></DictionaryLink>. 



**valid array index** *n.* (of an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>) a <GlossaryTerm styled={true} term={"fixnum"}><i>fixnum</i></GlossaryTerm> suitable for use as one of possibly several indices needed to name an <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> according to a multi-dimensional Cartesian coordinate system. Such a <GlossaryTerm styled={true} term={"fixnum"}><i>fixnum</i></GlossaryTerm> must be greater than or equal to zero, and must be less than the corresponding <GlossaryTerm styled={true} term={"dimension"}><i>dimension</i></GlossaryTerm><sub>1</sub> of the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. (Unless otherwise explicitly specified, the phrase “a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of *valid array indices*” further implies that the <GlossaryTerm styled={true} term={"length"}><i>length</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> must be the same as the <GlossaryTerm styled={true} term={"rank"}><i>rank</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>.) “For a 2 by 3 array, valid array indices for the first dimension are 0 and 1, and valid array indices for the second dimension are 0, 1 and 2.” 



**valid array row-major index** *n.* (of an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>, which might have any number of <GlossaryTerm styled={true} term={"dimension"}><i>dimensions</i></GlossaryTerm><sub>2</sub>) a single <GlossaryTerm styled={true} term={"fixnum"}><i>fixnum</i></GlossaryTerm> suitable for use in naming any <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>, by viewing the array’s storage as a linear series of <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm> in row-major order. Such a <GlossaryTerm styled={true} term={"fixnum"}><i>fixnum</i></GlossaryTerm> must be greater than or equal to zero, and less than the *array total size* of the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. 



**valid fill pointer** *n.* (of an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>) a <GlossaryTerm styled={true} term={"fixnum"}><i>fixnum</i></GlossaryTerm> suitable for use as a *fill pointer* for the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. Such a <GlossaryTerm styled={true} term={"fixnum"}><i>fixnum</i></GlossaryTerm> must be greater than or equal to zero, and less than or equal to the *array total size* of the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. 



**valid logical pathname host** *n.* a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> that has been defined as the name of a *logical host*. See the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> **load-logical-pathname-translations**. 







 



 



**valid pathname device** *n.* a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>, <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, :unspecific, or some other <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> defined by the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> to be a *valid pathname device*. 



**valid pathname directory** *n.* a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"string"}><i>strings</i></GlossaryTerm>, <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, :wild, :unspecific, or some other <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> defined by the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> to be a *valid directory component*. 



**valid pathname host** *n.* a *valid physical pathname host* or a *valid logical pathname host*. 



**valid pathname name** *n.* a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>, <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, :wild, :unspecific, or some other <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> defined by the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> to be a *valid pathname name*. 



**valid pathname type** *n.* a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>, <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, :wild, :unspecific. 



**valid pathname version** *n.* a non-negative *integer* , or one of :wild, :newest, 



:unspecific, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. The symbols :oldest, :previous, and :installed are *semi* 



*standard* special version symbols. 



**valid physical pathname host** *n.* any of a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"string"}><i>strings</i></GlossaryTerm>, or the symbol :unspecific, that is recognized by the implementation as the name of a host. 



**valid sequence index** *n.* (of a *sequence*) an *integer* suitable for use to name an <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm> of the *sequence*. Such an *integer* must be greater than or equal to zero, and must be less than the <GlossaryTerm styled={true} term={"length"}><i>length</i></GlossaryTerm> of the *sequence*. (If the *sequence* is an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>, the *valid sequence index* is further constrained to be a <GlossaryTerm styled={true} term={"fixnum"}><i>fixnum</i></GlossaryTerm>.) 



**value** *n.* 1. a. one of possibly several <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> that are the result of an <GlossaryTerm styled={true} term={"evaluation"}><i>evaluation</i></GlossaryTerm>. b. (in a situation where exactly one value is expected from the <GlossaryTerm styled={true} term={"evaluation"}><i>evaluation</i></GlossaryTerm> of a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>) the *primary value* returned by the <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. c. (of <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> in an *implicit progn*) one of possibly 



several <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> that result from the <GlossaryTerm styled={true} term={"evaluation"}><i>evaluation</i></GlossaryTerm> of the last <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> if there are no <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>. 2. an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> associated with a <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> in a <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm>. 3. (of a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>) the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of the *dynamic variable* named by that symbol. 4. an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> associated with a <GlossaryTerm styled={true} term={"key"}><i>key</i></GlossaryTerm> in an *association list*, a *property list*, or a *hash table*. 



**value cell** *n. Trad.* (of a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>) The <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> which holds the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm>, if any, of the *dynamic variable* named by that <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>, and which is *accessed* by <DictionaryLink styled={true} term={"symbol-value"}><b>symbol-value</b></DictionaryLink>. See <GlossaryTerm styled={true} term={"cell"}><i>cell</i></GlossaryTerm>. 



**variable** *n.* a <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> in the “variable” <GlossaryTerm styled={true} term={"namespace"}><i>namespace</i></GlossaryTerm>. See Section 3.1.2.1.1 (Symbols as Forms). 



<DictionaryLink styled={true} term={"vector"}><b>vector</b></DictionaryLink> *n.* a one-dimensional <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. 



**vertical-bar** *n.* the *standard character* that is called “vertical bar” (|). See Figure 2–5. 



 



 




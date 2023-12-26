**array** <GlossaryTerm styled={true} term={"system class"}><i>System Class</i></GlossaryTerm> 



**Class Precedence List:** 



<DictionaryLink  term={"array"}><b>array</b></DictionaryLink>, <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



An <i>array</i> contains <i>objects</i> arranged according to a Cartesian coordinate system. An <i>array</i> provides mappings from a set of <i>fixnums \{i</i><sub>0</sub><i>, i</i><sub>1</sub><i>, . . . , i<sub>r−</sub></i>1<i>\}</i> to corresponding <i>elements</i> of the <i>array</i>, where 0 <i>≤ i<sub>j</sub></i> &lt; <i>d<sub>j</sub></i> , <i>r</i> is the rank of the array, and <i>d<sub>j</sub></i> is the size of <i>dimension j</i> of the array. 



When an <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> is created, the program requesting its creation may declare that all <GlossaryTerm  term={"element"}><i>elements</i></GlossaryTerm> are of a particular <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm>, called the <GlossaryTerm styled={true} term={"expressed array element type"}><i>expressed array element type</i></GlossaryTerm>. The implementation is permitted to <GlossaryTerm  term={"upgrade"}><i>upgrade</i></GlossaryTerm> this type in order to produce the <GlossaryTerm styled={true} term={"actual array element type"}><i>actual array element type</i></GlossaryTerm>, which is the <GlossaryTerm styled={true} term={"element type"}><i>element type</i></GlossaryTerm> for the <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> is actually <GlossaryTerm  term={"specialized"}><i>specialized</i></GlossaryTerm>. See the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"upgraded-array-element-type"}><b>upgraded-array-element-type</b></DictionaryLink>. 



**Compound Type Specifier Kind:** 



Specializing. 



**Compound Type Specifier Syntax:** 



(array [*\{element-type |* **\****\}* [*dimension-spec*]]) 



*dimension-spec::*=*rank |* **\*** *|* (*\{dimension |* **\****\}*\*) 



**Compound Type Specifier Arguments:** 



<GlossaryTerm  term={"dimension"}><i>dimension</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"valid array dimension"}><i>valid array dimension</i></GlossaryTerm>. 



*element-type*—a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> . 



<GlossaryTerm  term={"rank"}><i>rank</i></GlossaryTerm>—a non-negative <GlossaryTerm  term={"fixnum"}><i>fixnum</i></GlossaryTerm>. 



**Compound Type Specifier Description:** 



This denotes the set of <GlossaryTerm  term={"array"}><i>arrays</i></GlossaryTerm> whose <GlossaryTerm styled={true} term={"element type"}><i>element type</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"rank"}><i>rank</i></GlossaryTerm>, and <GlossaryTerm  term={"dimension"}><i>dimensions</i></GlossaryTerm> match any given *element-type*, <GlossaryTerm  term={"rank"}><i>rank</i></GlossaryTerm>, and <GlossaryTerm  term={"dimension"}><i>dimensions</i></GlossaryTerm>. Specifically: 



If *element-type* is the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> **\***, <GlossaryTerm  term={"array"}><i>arrays</i></GlossaryTerm> are not excluded on the basis of their <GlossaryTerm styled={true} term={"element type"}><i>element type</i></GlossaryTerm>. Otherwise, only those <GlossaryTerm  term={"array"}><i>arrays</i></GlossaryTerm> are included whose <GlossaryTerm styled={true} term={"actual array element type"}><i>actual array element type</i></GlossaryTerm> is the result of *upgrading element-type*; see Section 15.1.2.1 (Array Upgrading). 



If the *dimension-spec* is a <GlossaryTerm  term={"rank"}><i>rank</i></GlossaryTerm>, the set includes only those <GlossaryTerm  term={"array"}><i>arrays</i></GlossaryTerm> having that <GlossaryTerm  term={"rank"}><i>rank</i></GlossaryTerm>. If the *dimension-spec* is a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> of <GlossaryTerm  term={"dimension"}><i>dimensions</i></GlossaryTerm>, the set includes only those <GlossaryTerm  term={"array"}><i>arrays</i></GlossaryTerm> having a <GlossaryTerm  term={"rank"}><i>rank</i></GlossaryTerm> given by the <GlossaryTerm  term={"length"}><i>length</i></GlossaryTerm> of the <GlossaryTerm  term={"dimension"}><i>dimensions</i></GlossaryTerm>, and having the indicated <GlossaryTerm  term={"dimension"}><i>dimensions</i></GlossaryTerm>; in this case, **\*** matches any value for the corresponding <GlossaryTerm  term={"dimension"}><i>dimension</i></GlossaryTerm>. If the *dimension-spec* is the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> **\***, the set is not restricted on the basis of <GlossaryTerm  term={"rank"}><i>rank</i></GlossaryTerm> or <GlossaryTerm  term={"dimension"}><i>dimension</i></GlossaryTerm>. 







 



 



**See Also:** 



<DictionaryLink  term={"print-array"}><b>\*print-array\*</b></DictionaryLink>, <DictionaryLink  term={"aref"}><b>aref</b></DictionaryLink>, <DictionaryLink  term={"make-array"}><b>make-array</b></DictionaryLink>, <DictionaryLink  term={"vector"}><b>vector</b></DictionaryLink>, Section 2.4.8.12 (Sharpsign A), Section 22.1.3.8 (Printing Other Arrays) 



**Notes:** 



Note that the type (array t) is a proper <GlossaryTerm  term={"subtype"}><i>subtype</i></GlossaryTerm> of the type (array \*). The reason is that the type (array t) is the set of <GlossaryTerm  term={"array"}><i>arrays</i></GlossaryTerm> that can hold any <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> (the <GlossaryTerm  term={"element"}><i>elements</i></GlossaryTerm> are of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"t"}><b>t</b></DictionaryLink>, which includes all <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm>). On the other hand, the type (array \*) is the set of all <GlossaryTerm  term={"array"}><i>arrays</i></GlossaryTerm> whatsoever, 



including for example <GlossaryTerm  term={"array"}><i>arrays</i></GlossaryTerm> that can hold only <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm>. The type (array character) is not a <GlossaryTerm  term={"subtype"}><i>subtype</i></GlossaryTerm> of the type (array t); the two sets are <GlossaryTerm  term={"disjoint"}><i>disjoint</i></GlossaryTerm> because the type (array character) is not the set of all <GlossaryTerm  term={"array"}><i>arrays</i></GlossaryTerm> that can hold <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm>, but rather the set of <GlossaryTerm  term={"array"}><i>arrays</i></GlossaryTerm> that are specialized to hold precisely <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm> and no other <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm>. 




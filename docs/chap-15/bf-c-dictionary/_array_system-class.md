**array** *System Class* 



**Class Precedence List:** 



<DictionaryLink styled={true} term={"array"}><b>array</b></DictionaryLink>, <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



An <i>array</i> contains <i>objects</i> arranged according to a Cartesian coordinate system. An <i>array</i> provides mappings from a set of <i>fixnums \{i</i><sub>0</sub><i>, i</i><sub>1</sub><i>, . . . , i<sub>r−</sub></i>1<i>\}</i> to corresponding <i>elements</i> of the <i>array</i>, where 0 <i>≤ i<sub>j</sub></i> &lt; <i>d<sub>j</sub></i> , <i>r</i> is the rank of the array, and <i>d<sub>j</sub></i> is the size of <i>dimension j</i> of the array. 



When an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> is created, the program requesting its creation may declare that all <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm> are of a particular <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>, called the *expressed array element type*. The implementation is permitted to <GlossaryTerm styled={true} term={"upgrade"}><i>upgrade</i></GlossaryTerm> this type in order to produce the *actual array element type*, which is the *element type* for the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> is actually <GlossaryTerm styled={true} term={"specialized"}><i>specialized</i></GlossaryTerm>. See the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"upgraded-array-element-type"}><b>upgraded-array-element-type</b></DictionaryLink>. 



**Compound Type Specifier Kind:** 



Specializing. 



**Compound Type Specifier Syntax:** 



(array [*\{element-type |* **\****\}* [*dimension-spec*]]) 



*dimension-spec::*=*rank |* **\*** *|* (*\{dimension |* **\****\}*\*) 



**Compound Type Specifier Arguments:** 



<GlossaryTerm styled={true} term={"dimension"}><i>dimension</i></GlossaryTerm>—a *valid array dimension*. 



*element-type*—a *type specifier* . 



<GlossaryTerm styled={true} term={"rank"}><i>rank</i></GlossaryTerm>—a non-negative <GlossaryTerm styled={true} term={"fixnum"}><i>fixnum</i></GlossaryTerm>. 



**Compound Type Specifier Description:** 



This denotes the set of <GlossaryTerm styled={true} term={"array"}><i>arrays</i></GlossaryTerm> whose *element type*, *rank*, and <GlossaryTerm styled={true} term={"dimension"}><i>dimensions</i></GlossaryTerm> match any given *element-type*, <GlossaryTerm styled={true} term={"rank"}><i>rank</i></GlossaryTerm>, and <GlossaryTerm styled={true} term={"dimension"}><i>dimensions</i></GlossaryTerm>. Specifically: 



If *element-type* is the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> **\***, <GlossaryTerm styled={true} term={"array"}><i>arrays</i></GlossaryTerm> are not excluded on the basis of their *element type*. Otherwise, only those <GlossaryTerm styled={true} term={"array"}><i>arrays</i></GlossaryTerm> are included whose *actual array element type* is the result of *upgrading element-type*; see Section 15.1.2.1 (Array Upgrading). 



If the *dimension-spec* is a <GlossaryTerm styled={true} term={"rank"}><i>rank</i></GlossaryTerm>, the set includes only those <GlossaryTerm styled={true} term={"array"}><i>arrays</i></GlossaryTerm> having that <GlossaryTerm styled={true} term={"rank"}><i>rank</i></GlossaryTerm>. If the *dimension-spec* is a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"dimension"}><i>dimensions</i></GlossaryTerm>, the set includes only those <GlossaryTerm styled={true} term={"array"}><i>arrays</i></GlossaryTerm> having a <GlossaryTerm styled={true} term={"rank"}><i>rank</i></GlossaryTerm> given by the <GlossaryTerm styled={true} term={"length"}><i>length</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"dimension"}><i>dimensions</i></GlossaryTerm>, and having the indicated <GlossaryTerm styled={true} term={"dimension"}><i>dimensions</i></GlossaryTerm>; in this case, **\*** matches any value for the corresponding <GlossaryTerm styled={true} term={"dimension"}><i>dimension</i></GlossaryTerm>. If the *dimension-spec* is the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> **\***, the set is not restricted on the basis of <GlossaryTerm styled={true} term={"rank"}><i>rank</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"dimension"}><i>dimension</i></GlossaryTerm>. 







 



 



**See Also:** 



<DictionaryLink styled={true} term={"print-array"}><b>\*print-array\*</b></DictionaryLink>, <DictionaryLink styled={true} term={"aref"}><b>aref</b></DictionaryLink>, <DictionaryLink styled={true} term={"make-array"}><b>make-array</b></DictionaryLink>, <DictionaryLink styled={true} term={"vector"}><b>vector</b></DictionaryLink>, Section 2.4.8.12 (Sharpsign A), Section 22.1.3.8 (Printing Other Arrays) 



**Notes:** 



Note that the type (array t) is a proper <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> of the type (array \*). The reason is that the type (array t) is the set of <GlossaryTerm styled={true} term={"array"}><i>arrays</i></GlossaryTerm> that can hold any <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> (the <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm> are of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink>, which includes all <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm>). On the other hand, the type (array \*) is the set of all <GlossaryTerm styled={true} term={"array"}><i>arrays</i></GlossaryTerm> whatsoever, 



including for example <GlossaryTerm styled={true} term={"array"}><i>arrays</i></GlossaryTerm> that can hold only <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm>. The type (array character) is not a <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> of the type (array t); the two sets are <GlossaryTerm styled={true} term={"disjoint"}><i>disjoint</i></GlossaryTerm> because the type (array character) is not the set of all <GlossaryTerm styled={true} term={"array"}><i>arrays</i></GlossaryTerm> that can hold <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm>, but rather the set of <GlossaryTerm styled={true} term={"array"}><i>arrays</i></GlossaryTerm> that are specialized to hold precisely <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> and no other <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm>. 




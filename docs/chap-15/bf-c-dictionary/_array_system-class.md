**array** *System Class* 



**Class Precedence List:** 



<ClLinks styled={true} term={"array"}><b>array</b></ClLinks>, <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> 



**Description:** 



An <i>array</i> contains <i>objects</i> arranged according to a Cartesian coordinate system. An <i>array</i> provides mappings from a set of <i>fixnums \{i</i><sub>0</sub><i>, i</i><sub>1</sub><i>, . . . , i<sub>r−</sub></i>1<i>\}</i> to corresponding <i>elements</i> of the <i>array</i>, where 0 <i>≤ i<sub>j</sub></i> &lt; <i>d<sub>j</sub></i> , <i>r</i> is the rank of the array, and <i>d<sub>j</sub></i> is the size of <i>dimension j</i> of the array. 



When an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> is created, the program requesting its creation may declare that all <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks> are of a particular <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>, called the *expressed array element type*. The implementation is permitted to <ClLinks styled={true} term={"upgrade"}><i>upgrade</i></ClLinks> this type in order to produce the *actual array element type*, which is the *element type* for the <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> is actually <ClLinks styled={true} term={"specialized"}><i>specialized</i></ClLinks>. See the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"upgraded-array-element-type"}><b>upgraded-array-element-type</b></ClLinks>. 



**Compound Type Specifier Kind:** 



Specializing. 



**Compound Type Specifier Syntax:** 



(array [*\{element-type |* **\****\}* [*dimension-spec*]]) 



*dimension-spec::*=*rank |* **\*** *|* (*\{dimension |* **\****\}*\*) 



**Compound Type Specifier Arguments:** 



<ClLinks styled={true} term={"dimension"}><i>dimension</i></ClLinks>—a *valid array dimension*. 



*element-type*—a *type specifier* . 



<ClLinks styled={true} term={"rank"}><i>rank</i></ClLinks>—a non-negative <ClLinks styled={true} term={"fixnum"}><i>fixnum</i></ClLinks>. 



**Compound Type Specifier Description:** 



This denotes the set of <ClLinks styled={true} term={"array"}><i>arrays</i></ClLinks> whose *element type*, *rank*, and <ClLinks styled={true} term={"dimension"}><i>dimensions</i></ClLinks> match any given *element-type*, <ClLinks styled={true} term={"rank"}><i>rank</i></ClLinks>, and <ClLinks styled={true} term={"dimension"}><i>dimensions</i></ClLinks>. Specifically: 



If *element-type* is the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> **\***, <ClLinks styled={true} term={"array"}><i>arrays</i></ClLinks> are not excluded on the basis of their *element type*. Otherwise, only those <ClLinks styled={true} term={"array"}><i>arrays</i></ClLinks> are included whose *actual array element type* is the result of *upgrading element-type*; see Section 15.1.2.1 (Array Upgrading). 



If the *dimension-spec* is a <ClLinks styled={true} term={"rank"}><i>rank</i></ClLinks>, the set includes only those <ClLinks styled={true} term={"array"}><i>arrays</i></ClLinks> having that <ClLinks styled={true} term={"rank"}><i>rank</i></ClLinks>. If the *dimension-spec* is a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of <ClLinks styled={true} term={"dimension"}><i>dimensions</i></ClLinks>, the set includes only those <ClLinks styled={true} term={"array"}><i>arrays</i></ClLinks> having a <ClLinks styled={true} term={"rank"}><i>rank</i></ClLinks> given by the <ClLinks styled={true} term={"length"}><i>length</i></ClLinks> of the <ClLinks styled={true} term={"dimension"}><i>dimensions</i></ClLinks>, and having the indicated <ClLinks styled={true} term={"dimension"}><i>dimensions</i></ClLinks>; in this case, **\*** matches any value for the corresponding <ClLinks styled={true} term={"dimension"}><i>dimension</i></ClLinks>. If the *dimension-spec* is the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> **\***, the set is not restricted on the basis of <ClLinks styled={true} term={"rank"}><i>rank</i></ClLinks> or <ClLinks styled={true} term={"dimension"}><i>dimension</i></ClLinks>. 







 



 



**See Also:** 



<ClLinks styled={true} term={"print-array"}><b>\*print-array\*</b></ClLinks>, <ClLinks styled={true} term={"aref"}><b>aref</b></ClLinks>, <ClLinks styled={true} term={"make-array"}><b>make-array</b></ClLinks>, <ClLinks styled={true} term={"vector"}><b>vector</b></ClLinks>, Section 2.4.8.12 (Sharpsign A), Section 22.1.3.8 (Printing Other Arrays) 



**Notes:** 



Note that the type (array t) is a proper <ClLinks styled={true} term={"subtype"}><i>subtype</i></ClLinks> of the type (array \*). The reason is that the type (array t) is the set of <ClLinks styled={true} term={"array"}><i>arrays</i></ClLinks> that can hold any <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> (the <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks> are of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"t"}><b>t</b></ClLinks>, which includes all <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks>). On the other hand, the type (array \*) is the set of all <ClLinks styled={true} term={"array"}><i>arrays</i></ClLinks> whatsoever, 



including for example <ClLinks styled={true} term={"array"}><i>arrays</i></ClLinks> that can hold only <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks>. The type (array character) is not a <ClLinks styled={true} term={"subtype"}><i>subtype</i></ClLinks> of the type (array t); the two sets are <ClLinks styled={true} term={"disjoint"}><i>disjoint</i></ClLinks> because the type (array character) is not the set of all <ClLinks styled={true} term={"array"}><i>arrays</i></ClLinks> that can hold <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks>, but rather the set of <ClLinks styled={true} term={"array"}><i>arrays</i></ClLinks> that are specialized to hold precisely <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks> and no other <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks>. 




 



*•* The <ClLinks  term={"type"}><i>types</i></ClLinks> <ClLinks  term={"cons"}><b>cons</b></ClLinks>, <ClLinks  term={"symbol"}><b>symbol</b></ClLinks>, <ClLinks  term={"array"}><b>array</b></ClLinks>, <ClLinks  term={"number"}><b>number</b></ClLinks>, <ClLinks  term={"character"}><b>character</b></ClLinks>, <ClLinks  term={"hash-table"}><b>hash-table</b></ClLinks>, <ClLinks  term={"function"}><b>function</b></ClLinks>, <ClLinks  term={"readtable"}><b>readtable</b></ClLinks>, <ClLinks  term={"package"}><b>package</b></ClLinks>, <ClLinks  term={"pathname"}><b>pathname</b></ClLinks>, <ClLinks  term={"stream"}><b>stream</b></ClLinks>, <ClLinks  term={"random-state"}><b>random-state</b></ClLinks>, <ClLinks  term={"condition"}><b>condition</b></ClLinks>, <ClLinks  term={"restart"}><b>restart</b></ClLinks>, and any single other <ClLinks  term={"type"}><i>type</i></ClLinks> created by <ClLinks  term={"defstruct"}><b>defstruct</b></ClLinks>, <ClLinks  term={"define-condition"}><b>define-condition</b></ClLinks>, or <ClLinks  term={"defclass"}><b>defclass</b></ClLinks> are *pairwise disjoint*, except for type relations explicitly established by specifying *superclasses* in <ClLinks  term={"defclass"}><b>defclass</b></ClLinks> or <ClLinks  term={"define-condition"}><b>define-condition</b></ClLinks> or the :include option of **destruct**. 



*•* Any two <ClLinks  term={"type"}><i>types</i></ClLinks> created by <ClLinks  term={"defstruct"}><b>defstruct</b></ClLinks> are <ClLinks  term={"disjoint"}><i>disjoint</i></ClLinks> unless one is a <ClLinks  term={"supertype"}><i>supertype</i></ClLinks> of the other by virtue of the <ClLinks  term={"defstruct"}><b>defstruct</b></ClLinks> :include option. 



*•* Any two *distinct classes* created by <ClLinks  term={"defclass"}><b>defclass</b></ClLinks> or <ClLinks  term={"define-condition"}><b>define-condition</b></ClLinks> are <ClLinks  term={"disjoint"}><i>disjoint</i></ClLinks> unless they have a common <ClLinks  term={"subclass"}><i>subclass</i></ClLinks> or one <ClLinks  term={"class"}><i>class</i></ClLinks> is a <ClLinks  term={"subclass"}><i>subclass</i></ClLinks> of the other. 



*•* An implementation may be extended to add other <ClLinks  term={"subtype"}><i>subtype</i></ClLinks> relationships between the specified <ClLinks  term={"type"}><i>types</i></ClLinks>, as long as they do not violate the type relationships and disjointness requirements specified here. An implementation may define additional <ClLinks  term={"type"}><i>types</i></ClLinks> that are <ClLinks  term={"subtype"}><i>subtypes</i></ClLinks> or <ClLinks  term={"supertype"}><i>supertypes</i></ClLinks> of any specified <ClLinks  term={"type"}><i>types</i></ClLinks>, as long as each additional <ClLinks  term={"type"}><i>type</i></ClLinks> is a <ClLinks  term={"subtype"}><i>subtype</i></ClLinks> of 



<ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"t"}><b>t</b></ClLinks> and a <ClLinks  term={"supertype"}><i>supertype</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"nil"}><b>nil</b></ClLinks> and the disjointness requirements are not violated. 











At the discretion of the implementation, either <ClLinks  term={"standard-object"}><b>standard-object</b></ClLinks> or <ClLinks  term={"structure-object"}><b>structure-object</b></ClLinks> might appear in any class precedence list for a *system class* that does not already specify either <ClLinks  term={"standard-object"}><b>standard-object</b></ClLinks> or <ClLinks  term={"structure-object"}><b>structure-object</b></ClLinks>. If it does, it must precede the <ClLinks  term={"class"}><i>class</i></ClLinks> <ClLinks  term={"t"}><b>t</b></ClLinks> and follow all other *standardized classes*. 




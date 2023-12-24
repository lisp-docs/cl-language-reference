 



*•* The <ClLinks styled={true} term={"type"}><i>types</i></ClLinks> <ClLinks styled={true} term={"cons"}><b>cons</b></ClLinks>, <ClLinks styled={true} term={"symbol"}><b>symbol</b></ClLinks>, <ClLinks styled={true} term={"array"}><b>array</b></ClLinks>, <ClLinks styled={true} term={"number"}><b>number</b></ClLinks>, <ClLinks styled={true} term={"character"}><b>character</b></ClLinks>, <ClLinks styled={true} term={"hash-table"}><b>hash-table</b></ClLinks>, <ClLinks styled={true} term={"function"}><b>function</b></ClLinks>, <ClLinks styled={true} term={"readtable"}><b>readtable</b></ClLinks>, <ClLinks styled={true} term={"package"}><b>package</b></ClLinks>, <ClLinks styled={true} term={"pathname"}><b>pathname</b></ClLinks>, <ClLinks styled={true} term={"stream"}><b>stream</b></ClLinks>, <ClLinks styled={true} term={"random-state"}><b>random-state</b></ClLinks>, <ClLinks styled={true} term={"condition"}><b>condition</b></ClLinks>, <ClLinks styled={true} term={"restart"}><b>restart</b></ClLinks>, and any single other <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> created by <ClLinks styled={true} term={"defstruct"}><b>defstruct</b></ClLinks>, <ClLinks styled={true} term={"define-condition"}><b>define-condition</b></ClLinks>, or <ClLinks styled={true} term={"defclass"}><b>defclass</b></ClLinks> are *pairwise disjoint*, except for type relations explicitly established by specifying *superclasses* in <ClLinks styled={true} term={"defclass"}><b>defclass</b></ClLinks> or <ClLinks styled={true} term={"define-condition"}><b>define-condition</b></ClLinks> or the :include option of **destruct**. 



*•* Any two <ClLinks styled={true} term={"type"}><i>types</i></ClLinks> created by <ClLinks styled={true} term={"defstruct"}><b>defstruct</b></ClLinks> are <ClLinks styled={true} term={"disjoint"}><i>disjoint</i></ClLinks> unless one is a <ClLinks styled={true} term={"supertype"}><i>supertype</i></ClLinks> of the other by virtue of the <ClLinks styled={true} term={"defstruct"}><b>defstruct</b></ClLinks> :include option. 



*•* Any two *distinct classes* created by <ClLinks styled={true} term={"defclass"}><b>defclass</b></ClLinks> or <ClLinks styled={true} term={"define-condition"}><b>define-condition</b></ClLinks> are <ClLinks styled={true} term={"disjoint"}><i>disjoint</i></ClLinks> unless they have a common <ClLinks styled={true} term={"subclass"}><i>subclass</i></ClLinks> or one <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> is a <ClLinks styled={true} term={"subclass"}><i>subclass</i></ClLinks> of the other. 



*•* An implementation may be extended to add other <ClLinks styled={true} term={"subtype"}><i>subtype</i></ClLinks> relationships between the specified <ClLinks styled={true} term={"type"}><i>types</i></ClLinks>, as long as they do not violate the type relationships and disjointness requirements specified here. An implementation may define additional <ClLinks styled={true} term={"type"}><i>types</i></ClLinks> that are <ClLinks styled={true} term={"subtype"}><i>subtypes</i></ClLinks> or <ClLinks styled={true} term={"supertype"}><i>supertypes</i></ClLinks> of any specified <ClLinks styled={true} term={"type"}><i>types</i></ClLinks>, as long as each additional <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> is a <ClLinks styled={true} term={"subtype"}><i>subtype</i></ClLinks> of 



<ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> and a <ClLinks styled={true} term={"supertype"}><i>supertype</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> and the disjointness requirements are not violated. 











At the discretion of the implementation, either <ClLinks styled={true} term={"standard-object"}><b>standard-object</b></ClLinks> or <ClLinks styled={true} term={"structure-object"}><b>structure-object</b></ClLinks> might appear in any class precedence list for a *system class* that does not already specify either <ClLinks styled={true} term={"standard-object"}><b>standard-object</b></ClLinks> or <ClLinks styled={true} term={"structure-object"}><b>structure-object</b></ClLinks>. If it does, it must precede the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> and follow all other *standardized classes*. 




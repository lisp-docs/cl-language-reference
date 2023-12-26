 



*•* The <ClLinks  term={"type"}><i>types</i></ClLinks> <DictionaryLink  term={"cons"}><b>cons</b></DictionaryLink>, <DictionaryLink  term={"symbol"}><b>symbol</b></DictionaryLink>, <DictionaryLink  term={"array"}><b>array</b></DictionaryLink>, <DictionaryLink  term={"number"}><b>number</b></DictionaryLink>, <DictionaryLink  term={"character"}><b>character</b></DictionaryLink>, <DictionaryLink  term={"hash-table"}><b>hash-table</b></DictionaryLink>, <DictionaryLink  term={"function"}><b>function</b></DictionaryLink>, <DictionaryLink  term={"readtable"}><b>readtable</b></DictionaryLink>, <DictionaryLink  term={"package"}><b>package</b></DictionaryLink>, <DictionaryLink  term={"pathname"}><b>pathname</b></DictionaryLink>, <DictionaryLink  term={"stream"}><b>stream</b></DictionaryLink>, <DictionaryLink  term={"random-state"}><b>random-state</b></DictionaryLink>, <DictionaryLink  term={"condition"}><b>condition</b></DictionaryLink>, <DictionaryLink  term={"restart"}><b>restart</b></DictionaryLink>, and any single other <ClLinks  term={"type"}><i>type</i></ClLinks> created by <DictionaryLink  term={"defstruct"}><b>defstruct</b></DictionaryLink>, <DictionaryLink  term={"define-condition"}><b>define-condition</b></DictionaryLink>, or <DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink> are *pairwise disjoint*, except for type relations explicitly established by specifying *superclasses* in <DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink> or <DictionaryLink  term={"define-condition"}><b>define-condition</b></DictionaryLink> or the :include option of **destruct**. 



*•* Any two <ClLinks  term={"type"}><i>types</i></ClLinks> created by <DictionaryLink  term={"defstruct"}><b>defstruct</b></DictionaryLink> are <ClLinks  term={"disjoint"}><i>disjoint</i></ClLinks> unless one is a <ClLinks  term={"supertype"}><i>supertype</i></ClLinks> of the other by virtue of the <DictionaryLink  term={"defstruct"}><b>defstruct</b></DictionaryLink> :include option. 



*•* Any two *distinct classes* created by <DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink> or <DictionaryLink  term={"define-condition"}><b>define-condition</b></DictionaryLink> are <ClLinks  term={"disjoint"}><i>disjoint</i></ClLinks> unless they have a common <ClLinks  term={"subclass"}><i>subclass</i></ClLinks> or one <ClLinks  term={"class"}><i>class</i></ClLinks> is a <ClLinks  term={"subclass"}><i>subclass</i></ClLinks> of the other. 



*•* An implementation may be extended to add other <ClLinks  term={"subtype"}><i>subtype</i></ClLinks> relationships between the specified <ClLinks  term={"type"}><i>types</i></ClLinks>, as long as they do not violate the type relationships and disjointness requirements specified here. An implementation may define additional <ClLinks  term={"type"}><i>types</i></ClLinks> that are <ClLinks  term={"subtype"}><i>subtypes</i></ClLinks> or <ClLinks  term={"supertype"}><i>supertypes</i></ClLinks> of any specified <ClLinks  term={"type"}><i>types</i></ClLinks>, as long as each additional <ClLinks  term={"type"}><i>type</i></ClLinks> is a <ClLinks  term={"subtype"}><i>subtype</i></ClLinks> of 



<ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> and a <ClLinks  term={"supertype"}><i>supertype</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> and the disjointness requirements are not violated. 











At the discretion of the implementation, either <DictionaryLink  term={"standard-object"}><b>standard-object</b></DictionaryLink> or <DictionaryLink  term={"structure-object"}><b>structure-object</b></DictionaryLink> might appear in any class precedence list for a <GlossaryTerm styled={true} term={"system class"}><i>system class</i></GlossaryTerm> that does not already specify either <DictionaryLink  term={"standard-object"}><b>standard-object</b></DictionaryLink> or <DictionaryLink  term={"structure-object"}><b>structure-object</b></DictionaryLink>. If it does, it must precede the <ClLinks  term={"class"}><i>class</i></ClLinks> <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> and follow all other *standardized classes*. 




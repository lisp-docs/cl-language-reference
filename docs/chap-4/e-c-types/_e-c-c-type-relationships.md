 



*•* The <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm> <DictionaryLink styled={true} term={"cons"}><b>cons</b></DictionaryLink>, <DictionaryLink styled={true} term={"symbol"}><b>symbol</b></DictionaryLink>, <DictionaryLink styled={true} term={"array"}><b>array</b></DictionaryLink>, <DictionaryLink styled={true} term={"number"}><b>number</b></DictionaryLink>, <DictionaryLink styled={true} term={"character"}><b>character</b></DictionaryLink>, <DictionaryLink styled={true} term={"hash-table"}><b>hash-table</b></DictionaryLink>, <DictionaryLink styled={true} term={"function"}><b>function</b></DictionaryLink>, <DictionaryLink styled={true} term={"readtable"}><b>readtable</b></DictionaryLink>, <DictionaryLink styled={true} term={"package"}><b>package</b></DictionaryLink>, <DictionaryLink styled={true} term={"pathname"}><b>pathname</b></DictionaryLink>, <DictionaryLink styled={true} term={"stream"}><b>stream</b></DictionaryLink>, <DictionaryLink styled={true} term={"random-state"}><b>random-state</b></DictionaryLink>, <DictionaryLink styled={true} term={"condition"}><b>condition</b></DictionaryLink>, <DictionaryLink styled={true} term={"restart"}><b>restart</b></DictionaryLink>, and any single other <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> created by <DictionaryLink styled={true} term={"defstruct"}><b>defstruct</b></DictionaryLink>, <DictionaryLink styled={true} term={"define-condition"}><b>define-condition</b></DictionaryLink>, or <DictionaryLink styled={true} term={"defclass"}><b>defclass</b></DictionaryLink> are *pairwise disjoint*, except for type relations explicitly established by specifying *superclasses* in <DictionaryLink styled={true} term={"defclass"}><b>defclass</b></DictionaryLink> or <DictionaryLink styled={true} term={"define-condition"}><b>define-condition</b></DictionaryLink> or the :include option of **destruct**. 



*•* Any two <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm> created by <DictionaryLink styled={true} term={"defstruct"}><b>defstruct</b></DictionaryLink> are <GlossaryTerm styled={true} term={"disjoint"}><i>disjoint</i></GlossaryTerm> unless one is a <GlossaryTerm styled={true} term={"supertype"}><i>supertype</i></GlossaryTerm> of the other by virtue of the <DictionaryLink styled={true} term={"defstruct"}><b>defstruct</b></DictionaryLink> :include option. 



*•* Any two *distinct classes* created by <DictionaryLink styled={true} term={"defclass"}><b>defclass</b></DictionaryLink> or <DictionaryLink styled={true} term={"define-condition"}><b>define-condition</b></DictionaryLink> are <GlossaryTerm styled={true} term={"disjoint"}><i>disjoint</i></GlossaryTerm> unless they have a common <GlossaryTerm styled={true} term={"subclass"}><i>subclass</i></GlossaryTerm> or one <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"subclass"}><i>subclass</i></GlossaryTerm> of the other. 



*•* An implementation may be extended to add other <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> relationships between the specified <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm>, as long as they do not violate the type relationships and disjointness requirements specified here. An implementation may define additional <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm> that are <GlossaryTerm styled={true} term={"subtype"}><i>subtypes</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"supertype"}><i>supertypes</i></GlossaryTerm> of any specified <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm>, as long as each additional <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> of 



<GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> and a <GlossaryTerm styled={true} term={"supertype"}><i>supertype</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> and the disjointness requirements are not violated. 











At the discretion of the implementation, either <DictionaryLink styled={true} term={"standard-object"}><b>standard-object</b></DictionaryLink> or <DictionaryLink styled={true} term={"structure-object"}><b>structure-object</b></DictionaryLink> might appear in any class precedence list for a *system class* that does not already specify either <DictionaryLink styled={true} term={"standard-object"}><b>standard-object</b></DictionaryLink> or <DictionaryLink styled={true} term={"structure-object"}><b>structure-object</b></DictionaryLink>. If it does, it must precede the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> and follow all other *standardized classes*. 




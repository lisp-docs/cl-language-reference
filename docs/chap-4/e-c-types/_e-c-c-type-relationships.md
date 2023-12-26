 



*•* The <GlossaryTerm  term={"type"}><i>types</i></GlossaryTerm> <DictionaryLink  term={"cons"}><b>cons</b></DictionaryLink>, <DictionaryLink  term={"symbol"}><b>symbol</b></DictionaryLink>, <DictionaryLink  term={"array"}><b>array</b></DictionaryLink>, <DictionaryLink  term={"number"}><b>number</b></DictionaryLink>, <DictionaryLink  term={"character"}><b>character</b></DictionaryLink>, <DictionaryLink  term={"hash-table"}><b>hash-table</b></DictionaryLink>, <DictionaryLink  term={"function"}><b>function</b></DictionaryLink>, <DictionaryLink  term={"readtable"}><b>readtable</b></DictionaryLink>, <DictionaryLink  term={"package"}><b>package</b></DictionaryLink>, <DictionaryLink  term={"pathname"}><b>pathname</b></DictionaryLink>, <DictionaryLink  term={"stream"}><b>stream</b></DictionaryLink>, <DictionaryLink  term={"random-state"}><b>random-state</b></DictionaryLink>, <DictionaryLink  term={"condition"}><b>condition</b></DictionaryLink>, <DictionaryLink  term={"restart"}><b>restart</b></DictionaryLink>, and any single other <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> created by <DictionaryLink  term={"defstruct"}><b>defstruct</b></DictionaryLink>, <DictionaryLink  term={"define-condition"}><b>define-condition</b></DictionaryLink>, or <DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink> are *pairwise disjoint*, except for type relations explicitly established by specifying *superclasses* in <DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink> or <DictionaryLink  term={"define-condition"}><b>define-condition</b></DictionaryLink> or the :include option of **destruct**. 



*•* Any two <GlossaryTerm  term={"type"}><i>types</i></GlossaryTerm> created by <DictionaryLink  term={"defstruct"}><b>defstruct</b></DictionaryLink> are <GlossaryTerm  term={"disjoint"}><i>disjoint</i></GlossaryTerm> unless one is a <GlossaryTerm  term={"supertype"}><i>supertype</i></GlossaryTerm> of the other by virtue of the <DictionaryLink  term={"defstruct"}><b>defstruct</b></DictionaryLink> :include option. 



*•* Any two *distinct classes* created by <DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink> or <DictionaryLink  term={"define-condition"}><b>define-condition</b></DictionaryLink> are <GlossaryTerm  term={"disjoint"}><i>disjoint</i></GlossaryTerm> unless they have a common <GlossaryTerm  term={"subclass"}><i>subclass</i></GlossaryTerm> or one <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> is a <GlossaryTerm  term={"subclass"}><i>subclass</i></GlossaryTerm> of the other. 



*•* An implementation may be extended to add other <GlossaryTerm  term={"subtype"}><i>subtype</i></GlossaryTerm> relationships between the specified <GlossaryTerm  term={"type"}><i>types</i></GlossaryTerm>, as long as they do not violate the type relationships and disjointness requirements specified here. An implementation may define additional <GlossaryTerm  term={"type"}><i>types</i></GlossaryTerm> that are <GlossaryTerm  term={"subtype"}><i>subtypes</i></GlossaryTerm> or <GlossaryTerm  term={"supertype"}><i>supertypes</i></GlossaryTerm> of any specified <GlossaryTerm  term={"type"}><i>types</i></GlossaryTerm>, as long as each additional <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> is a <GlossaryTerm  term={"subtype"}><i>subtype</i></GlossaryTerm> of 



<GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> and a <GlossaryTerm  term={"supertype"}><i>supertype</i></GlossaryTerm> of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> and the disjointness requirements are not violated. 











At the discretion of the implementation, either <DictionaryLink  term={"standard-object"}><b>standard-object</b></DictionaryLink> or <DictionaryLink  term={"structure-object"}><b>structure-object</b></DictionaryLink> might appear in any class precedence list for a <GlossaryTerm styled={true} term={"system class"}><i>system class</i></GlossaryTerm> that does not already specify either <DictionaryLink  term={"standard-object"}><b>standard-object</b></DictionaryLink> or <DictionaryLink  term={"structure-object"}><b>structure-object</b></DictionaryLink>. If it does, it must precede the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> and follow all other *standardized classes*. 




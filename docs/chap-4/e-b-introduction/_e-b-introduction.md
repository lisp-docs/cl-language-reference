 



A <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> is a (possibly infinite) set of <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm>. An <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> can belong to more than one <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>. <GlossaryTerm styled={true} term={"type"}><i>Types</i></GlossaryTerm> are never explicitly represented as <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> by Common Lisp. Instead, they are referred to indirectly by the use of *type specifiers*, which are <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> that denote <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm>. 



New <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm> can be defined using <DictionaryLink styled={true} term={"deftype"}><b>deftype</b></DictionaryLink>, <DictionaryLink styled={true} term={"defstruct"}><b>defstruct</b></DictionaryLink>, <DictionaryLink styled={true} term={"defclass"}><b>defclass</b></DictionaryLink>, and <DictionaryLink styled={true} term={"define-condition"}><b>define-condition</b></DictionaryLink>. 



The <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"typep"}><b>typep</b></DictionaryLink>, a set membership test, is used to determine whether a given <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is of a given <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>. The function <DictionaryLink styled={true} term={"subtypep"}><b>subtypep</b></DictionaryLink>, a subset test, is used to determine whether a given <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> of another given <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>. The function <DictionaryLink styled={true} term={"type-of"}><b>type-of</b></DictionaryLink> returns a particular <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> to which a given 



<GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> belongs, even though that <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> must belong to one or more other <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm> as well. (For example, every <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink>, but <DictionaryLink styled={true} term={"type-of"}><b>type-of</b></DictionaryLink> always returns a *type specifier* for a <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> more specific than <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink>.) 



<GlossaryTerm styled={true} term={"object"}><i>Objects</i></GlossaryTerm>, not <GlossaryTerm styled={true} term={"variable"}><i>variables</i></GlossaryTerm>, have <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm>. Normally, any <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm> can have any <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> as its <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm>. It is possible to declare that a <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm> takes on only values of a given <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> by making an explicit *type declaration*. *Types* are arranged in a directed acyclic graph, except for the presence of equivalences. 



<GlossaryTerm styled={true} term={"declaration"}><i>Declarations</i></GlossaryTerm> can be made about <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm> using <DictionaryLink styled={true} term={"declare"}><b>declare</b></DictionaryLink>, <DictionaryLink styled={true} term={"proclaim"}><b>proclaim</b></DictionaryLink>, <DictionaryLink styled={true} term={"declaim"}><b>declaim</b></DictionaryLink>, or <DictionaryLink styled={true} term={"the"}><b>the</b></DictionaryLink>. For more information about <GlossaryTerm styled={true} term={"declaration"}><i>declarations</i></GlossaryTerm>, see Section 3.3 (Declarations). 



Among the fundamental <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> of the object system are *classes*. A <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> determines the structure and behavior of a set of other <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm>, which are called its <GlossaryTerm styled={true} term={"instance"}><i>instances</i></GlossaryTerm>. Every <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is a *direct instance* of a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>. The <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> of an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> determines the set of operations that can be performed on the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. For more information, see Section 4.3 (Classes). 



It is possible to write <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm> that have behavior <GlossaryTerm styled={true} term={"specialized"}><i>specialized</i></GlossaryTerm> to the class of the <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> which are their <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm>. For more information, see Section 7.6 (Generic Functions and Methods). 



The <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> of an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is called its <GlossaryTerm styled={true} term={"metaclass"}><i>metaclass</i></GlossaryTerm>. For more information about *metaclasses*, see Section 7.4 (Meta-Objects).  








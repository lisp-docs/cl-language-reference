 



A <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> is a (possibly infinite) set of <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm>. An <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> can belong to more than one <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm>. <GlossaryTerm  term={"type"}><i>Types</i></GlossaryTerm> are never explicitly represented as <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> by Common Lisp. Instead, they are referred to indirectly by the use of <GlossaryTerm styled={true} term={"type specifier"}><i>type specifiers</i></GlossaryTerm>, which are <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> that denote <GlossaryTerm  term={"type"}><i>types</i></GlossaryTerm>. 



New <GlossaryTerm  term={"type"}><i>types</i></GlossaryTerm> can be defined using <DictionaryLink  term={"deftype"}><b>deftype</b></DictionaryLink>, <DictionaryLink  term={"defstruct"}><b>defstruct</b></DictionaryLink>, <DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink>, and <DictionaryLink  term={"define-condition"}><b>define-condition</b></DictionaryLink>. 



The <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"typep"}><b>typep</b></DictionaryLink>, a set membership test, is used to determine whether a given <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> is of a given <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm>. The function <DictionaryLink  term={"subtypep"}><b>subtypep</b></DictionaryLink>, a subset test, is used to determine whether a given <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> is a <GlossaryTerm  term={"subtype"}><i>subtype</i></GlossaryTerm> of another given <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm>. The function <DictionaryLink  term={"type-of"}><b>type-of</b></DictionaryLink> returns a particular <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> to which a given 



<GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> belongs, even though that <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> must belong to one or more other <GlossaryTerm  term={"type"}><i>types</i></GlossaryTerm> as well. (For example, every <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> is of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"t"}><b>t</b></DictionaryLink>, but <DictionaryLink  term={"type-of"}><b>type-of</b></DictionaryLink> always returns a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> for a <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> more specific than <DictionaryLink  term={"t"}><b>t</b></DictionaryLink>.) 



<GlossaryTerm  term={"object"}><i>Objects</i></GlossaryTerm>, not <GlossaryTerm  term={"variable"}><i>variables</i></GlossaryTerm>, have <GlossaryTerm  term={"type"}><i>types</i></GlossaryTerm>. Normally, any <GlossaryTerm  term={"variable"}><i>variable</i></GlossaryTerm> can have any <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> as its <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm>. It is possible to declare that a <GlossaryTerm  term={"variable"}><i>variable</i></GlossaryTerm> takes on only values of a given <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> by making an explicit <GlossaryTerm styled={true} term={"type declaration"}><i>type declaration</i></GlossaryTerm>. <GlossaryTerm styled={true} term={"type"}><i>Types</i></GlossaryTerm> are arranged in a directed acyclic graph, except for the presence of equivalences. 



<GlossaryTerm  term={"declaration"}><i>Declarations</i></GlossaryTerm> can be made about <GlossaryTerm  term={"type"}><i>types</i></GlossaryTerm> using <DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink>, <DictionaryLink  term={"proclaim"}><b>proclaim</b></DictionaryLink>, <DictionaryLink  term={"declaim"}><b>declaim</b></DictionaryLink>, or <DictionaryLink  term={"the"}><b>the</b></DictionaryLink>. For more information about <GlossaryTerm  term={"declaration"}><i>declarations</i></GlossaryTerm>, see Section 3.3 (Declarations). 



Among the fundamental <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> of the object system are *classes*. A <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> determines the structure and behavior of a set of other <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm>, which are called its <GlossaryTerm  term={"instance"}><i>instances</i></GlossaryTerm>. Every <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"direct instance"}><i>direct instance</i></GlossaryTerm> of a <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>. The <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> of an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> determines the set of operations that can be performed on the <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. For more information, see Section 4.3 (Classes). 



It is possible to write <GlossaryTerm  term={"function"}><i>functions</i></GlossaryTerm> that have behavior <GlossaryTerm  term={"specialized"}><i>specialized</i></GlossaryTerm> to the class of the <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> which are their <GlossaryTerm  term={"argument"}><i>arguments</i></GlossaryTerm>. For more information, see Section 7.6 (Generic Functions and Methods). 



The <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> of the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> of an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> is called its <GlossaryTerm  term={"metaclass"}><i>metaclass</i></GlossaryTerm>. For more information about *metaclasses*, see Section 7.4 (Meta-Objects).  








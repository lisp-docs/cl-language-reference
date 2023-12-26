 



A <ClLinks  term={"type"}><i>type</i></ClLinks> is a (possibly infinite) set of <ClLinks  term={"object"}><i>objects</i></ClLinks>. An <ClLinks  term={"object"}><i>object</i></ClLinks> can belong to more than one <ClLinks  term={"type"}><i>type</i></ClLinks>. <ClLinks  term={"type"}><i>Types</i></ClLinks> are never explicitly represented as <ClLinks  term={"object"}><i>objects</i></ClLinks> by Common Lisp. Instead, they are referred to indirectly by the use of <GlossaryTerm styled={true} term={"type specifier"}><i>type specifiers</i></GlossaryTerm>, which are <ClLinks  term={"object"}><i>objects</i></ClLinks> that denote <ClLinks  term={"type"}><i>types</i></ClLinks>. 



New <ClLinks  term={"type"}><i>types</i></ClLinks> can be defined using <DictionaryLink  term={"deftype"}><b>deftype</b></DictionaryLink>, <DictionaryLink  term={"defstruct"}><b>defstruct</b></DictionaryLink>, <DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink>, and <DictionaryLink  term={"define-condition"}><b>define-condition</b></DictionaryLink>. 



The <ClLinks  term={"function"}><i>function</i></ClLinks> <DictionaryLink  term={"typep"}><b>typep</b></DictionaryLink>, a set membership test, is used to determine whether a given <ClLinks  term={"object"}><i>object</i></ClLinks> is of a given <ClLinks  term={"type"}><i>type</i></ClLinks>. The function <DictionaryLink  term={"subtypep"}><b>subtypep</b></DictionaryLink>, a subset test, is used to determine whether a given <ClLinks  term={"type"}><i>type</i></ClLinks> is a <ClLinks  term={"subtype"}><i>subtype</i></ClLinks> of another given <ClLinks  term={"type"}><i>type</i></ClLinks>. The function <DictionaryLink  term={"type-of"}><b>type-of</b></DictionaryLink> returns a particular <ClLinks  term={"type"}><i>type</i></ClLinks> to which a given 



<ClLinks  term={"object"}><i>object</i></ClLinks> belongs, even though that <ClLinks  term={"object"}><i>object</i></ClLinks> must belong to one or more other <ClLinks  term={"type"}><i>types</i></ClLinks> as well. (For example, every <ClLinks  term={"object"}><i>object</i></ClLinks> is of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"t"}><b>t</b></DictionaryLink>, but <DictionaryLink  term={"type-of"}><b>type-of</b></DictionaryLink> always returns a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> for a <ClLinks  term={"type"}><i>type</i></ClLinks> more specific than <DictionaryLink  term={"t"}><b>t</b></DictionaryLink>.) 



<ClLinks  term={"object"}><i>Objects</i></ClLinks>, not <ClLinks  term={"variable"}><i>variables</i></ClLinks>, have <ClLinks  term={"type"}><i>types</i></ClLinks>. Normally, any <ClLinks  term={"variable"}><i>variable</i></ClLinks> can have any <ClLinks  term={"object"}><i>object</i></ClLinks> as its <ClLinks  term={"value"}><i>value</i></ClLinks>. It is possible to declare that a <ClLinks  term={"variable"}><i>variable</i></ClLinks> takes on only values of a given <ClLinks  term={"type"}><i>type</i></ClLinks> by making an explicit <GlossaryTerm styled={true} term={"type declaration"}><i>type declaration</i></GlossaryTerm>. <GlossaryTerm styled={true} term={"type"}><i>Types</i></GlossaryTerm> are arranged in a directed acyclic graph, except for the presence of equivalences. 



<ClLinks  term={"declaration"}><i>Declarations</i></ClLinks> can be made about <ClLinks  term={"type"}><i>types</i></ClLinks> using <DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink>, <DictionaryLink  term={"proclaim"}><b>proclaim</b></DictionaryLink>, <DictionaryLink  term={"declaim"}><b>declaim</b></DictionaryLink>, or <DictionaryLink  term={"the"}><b>the</b></DictionaryLink>. For more information about <ClLinks  term={"declaration"}><i>declarations</i></ClLinks>, see Section 3.3 (Declarations). 



Among the fundamental <ClLinks  term={"object"}><i>objects</i></ClLinks> of the object system are *classes*. A <ClLinks  term={"class"}><i>class</i></ClLinks> determines the structure and behavior of a set of other <ClLinks  term={"object"}><i>objects</i></ClLinks>, which are called its <ClLinks  term={"instance"}><i>instances</i></ClLinks>. Every <ClLinks  term={"object"}><i>object</i></ClLinks> is a <GlossaryTerm styled={true} term={"direct instance"}><i>direct instance</i></GlossaryTerm> of a <ClLinks  term={"class"}><i>class</i></ClLinks>. The <ClLinks  term={"class"}><i>class</i></ClLinks> of an <ClLinks  term={"object"}><i>object</i></ClLinks> determines the set of operations that can be performed on the <ClLinks  term={"object"}><i>object</i></ClLinks>. For more information, see Section 4.3 (Classes). 



It is possible to write <ClLinks  term={"function"}><i>functions</i></ClLinks> that have behavior <ClLinks  term={"specialized"}><i>specialized</i></ClLinks> to the class of the <ClLinks  term={"object"}><i>objects</i></ClLinks> which are their <ClLinks  term={"argument"}><i>arguments</i></ClLinks>. For more information, see Section 7.6 (Generic Functions and Methods). 



The <ClLinks  term={"class"}><i>class</i></ClLinks> of the <ClLinks  term={"class"}><i>class</i></ClLinks> of an <ClLinks  term={"object"}><i>object</i></ClLinks> is called its <ClLinks  term={"metaclass"}><i>metaclass</i></ClLinks>. For more information about *metaclasses*, see Section 7.4 (Meta-Objects).  








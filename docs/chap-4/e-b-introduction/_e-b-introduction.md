 



A <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> is a (possibly infinite) set of <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks>. An <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> can belong to more than one <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>. <ClLinks styled={true} term={"type"}><i>Types</i></ClLinks> are never explicitly represented as <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> by Common Lisp. Instead, they are referred to indirectly by the use of *type specifiers*, which are <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> that denote <ClLinks styled={true} term={"type"}><i>types</i></ClLinks>. 



New <ClLinks styled={true} term={"type"}><i>types</i></ClLinks> can be defined using <ClLinks styled={true} term={"deftype"}><b>deftype</b></ClLinks>, <ClLinks styled={true} term={"defstruct"}><b>defstruct</b></ClLinks>, <ClLinks styled={true} term={"defclass"}><b>defclass</b></ClLinks>, and <ClLinks styled={true} term={"define-condition"}><b>define-condition</b></ClLinks>. 



The <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"typep"}><b>typep</b></ClLinks>, a set membership test, is used to determine whether a given <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is of a given <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>. The function <ClLinks styled={true} term={"subtypep"}><b>subtypep</b></ClLinks>, a subset test, is used to determine whether a given <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> is a <ClLinks styled={true} term={"subtype"}><i>subtype</i></ClLinks> of another given <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>. The function <ClLinks styled={true} term={"type-of"}><b>type-of</b></ClLinks> returns a particular <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> to which a given 



<ClLinks styled={true} term={"object"}><i>object</i></ClLinks> belongs, even though that <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> must belong to one or more other <ClLinks styled={true} term={"type"}><i>types</i></ClLinks> as well. (For example, every <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"t"}><b>t</b></ClLinks>, but <ClLinks styled={true} term={"type-of"}><b>type-of</b></ClLinks> always returns a *type specifier* for a <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> more specific than <ClLinks styled={true} term={"t"}><b>t</b></ClLinks>.) 



<ClLinks styled={true} term={"object"}><i>Objects</i></ClLinks>, not <ClLinks styled={true} term={"variable"}><i>variables</i></ClLinks>, have <ClLinks styled={true} term={"type"}><i>types</i></ClLinks>. Normally, any <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks> can have any <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> as its <ClLinks styled={true} term={"value"}><i>value</i></ClLinks>. It is possible to declare that a <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks> takes on only values of a given <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> by making an explicit *type declaration*. *Types* are arranged in a directed acyclic graph, except for the presence of equivalences. 



<ClLinks styled={true} term={"declaration"}><i>Declarations</i></ClLinks> can be made about <ClLinks styled={true} term={"type"}><i>types</i></ClLinks> using <ClLinks styled={true} term={"declare"}><b>declare</b></ClLinks>, <ClLinks styled={true} term={"proclaim"}><b>proclaim</b></ClLinks>, <ClLinks styled={true} term={"declaim"}><b>declaim</b></ClLinks>, or <ClLinks styled={true} term={"the"}><b>the</b></ClLinks>. For more information about <ClLinks styled={true} term={"declaration"}><i>declarations</i></ClLinks>, see Section 3.3 (Declarations). 



Among the fundamental <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> of the object system are *classes*. A <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> determines the structure and behavior of a set of other <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks>, which are called its <ClLinks styled={true} term={"instance"}><i>instances</i></ClLinks>. Every <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is a *direct instance* of a <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>. The <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> of an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> determines the set of operations that can be performed on the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. For more information, see Section 4.3 (Classes). 



It is possible to write <ClLinks styled={true} term={"function"}><i>functions</i></ClLinks> that have behavior <ClLinks styled={true} term={"specialized"}><i>specialized</i></ClLinks> to the class of the <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> which are their <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks>. For more information, see Section 7.6 (Generic Functions and Methods). 



The <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> of the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> of an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is called its <ClLinks styled={true} term={"metaclass"}><i>metaclass</i></ClLinks>. For more information about *metaclasses*, see Section 7.4 (Meta-Objects).  








*∗<ClLinks styled={true} term={"features"}><b><ClLinks styled={true} term={"feature"}><i>features</i></ClLinks></b></ClLinks>∗ Variable* 



**Value Type:** 



a <GlossaryTerm styled={true} term={"proper list"}><i>proper list</i></GlossaryTerm>. 



**Initial Value:** 



<ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. 



**Description:** 



The <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"features"}><b>\*features\*</b></ClLinks> is called the <GlossaryTerm styled={true} term={"features list"}><i>features list</i></GlossaryTerm>. It is a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks>, called <ClLinks styled={true} term={"feature"}><i>features</i></ClLinks>, that correspond to some aspect of the <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> or <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks>. 



Most <ClLinks styled={true} term={"feature"}><i>features</i></ClLinks> have <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> meanings; The following meanings have been assigned to feature names: 



:cltl1 



If present, indicates that the LISP *package purports to conform* to the 1984 specification *Common Lisp: The Language*. It is possible, but not required, for a <GlossaryTerm styled={true} term={"conforming implementation"}><i>conforming implementation</i></GlossaryTerm> to have this feature because this specification specifies that its <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> are to be in the COMMON-LISP <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>, not the LISP package. 



:cltl2 



If present, indicates that the implementation <GlossaryTerm styled={true} term={"purports to conform"}><i>purports to conform</i></GlossaryTerm> to *Common Lisp: The Language, Second Edition*. This feature must not be present in any <GlossaryTerm styled={true} term={"conforming implementation"}><i>conforming implementation</i></GlossaryTerm>, since conformance to that document is not compatible with conformance to this specification. The name, however, is reserved by this specification in order to help programs distinguish implementations which conform to that document from implementations which conform to this specification. 



:ieee-floating-point 



If present, indicates that the implementation <GlossaryTerm styled={true} term={"purports to conform"}><i>purports to conform</i></GlossaryTerm> to the requirements of *IEEE Standard for Binary Floating-Point Arithmetic*. 



:x3j13 



If present, indicates that the implementation conforms to some particular working draft of this specification, or to some subset of features that approximates a belief about what this specification might turn out to contain. A <GlossaryTerm styled={true} term={"conforming implementation"}><i>conforming implementation</i></GlossaryTerm> might or might not contain such a feature. (This feature is intended primarily as a stopgap in order to provide implementors something to use prior to the availability of a draft standard, in order to 



discourage them from introducing the :draft-ansi-cl and :ansi-cl <ClLinks styled={true} term={"feature"}><i>features</i></ClLinks> prematurely.) :draft-ansi-cl 







 



 



*∗<ClLinks styled={true} term={"features"}><b><ClLinks styled={true} term={"feature"}><i>features</i></ClLinks></b></ClLinks>∗* 



If present, indicates that the *implementation purports to conform* to the first full draft of this specification, which went to public review in 1992. A <GlossaryTerm styled={true} term={"conforming implementation"}><i>conforming implementation</i></GlossaryTerm> which has the :draft-ansi-cl-2 or :ansi-cl <ClLinks styled={true} term={"feature"}><i>feature</i></ClLinks> is not permitted to retain the :draft-ansi-cl <ClLinks styled={true} term={"feature"}><i>feature</i></ClLinks> since incompatible changes were made subsequent to the first draft. 



:draft-ansi-cl-2 



If present, indicates that a second full draft of this specification has gone to public review, and that the *implementation purports to conform* to that specification. (If additional public review drafts are produced, this keyword will continue to refer to the second draft, and additional keywords will be added to identify conformance with such later drafts. As such, the meaning of this keyword can be relied upon not to change over time.) A <GlossaryTerm styled={true} term={"conforming implementation"}><i>conforming implementation</i></GlossaryTerm> which has the :ansi-cl <ClLinks styled={true} term={"feature"}><i>feature</i></ClLinks> is only permitted to retain the :draft-ansi-cl <ClLinks styled={true} term={"feature"}><i>feature</i></ClLinks> if the finally approved standard is not incompatible with the draft standard. 



:ansi-cl 



If present, indicates that this specification has been adopted by ANSI as an official standard, and that the *implementation purports to conform*. 



:common-lisp 



This feature must appear in <ClLinks styled={true} term={"features"}><b>\*features\*</b></ClLinks> for any implementation that has one or more of the features :x3j13, :draft-ansi-cl, or :ansi-cl. It is intended that it should also appear in implementations which have the features :cltl1 or :cltl2, but this specification cannot force such behavior. The intent is that this feature should identify the language family named “Common Lisp,” rather than some specific dialect within that family. 



**See Also:** 



Section 1.5.2.1.1 (Use of Read-Time Conditionals), Section 2.4 (Standard Macro Characters) 



**Notes:** 



The <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"features"}><b>\*features\*</b></ClLinks> is used by the #+ and #- reader syntax. 



<ClLinks styled={true} term={"symbol"}><i>Symbols</i></ClLinks> in the <GlossaryTerm styled={true} term={"features list"}><i>features list</i></GlossaryTerm> may be in any <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>, but in practice they are generally in the KEYWORD <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. This is because KEYWORD is the <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> used by default when *reading*<sub>2</sub> <GlossaryTerm styled={true} term={"feature expression"}><i>feature expressions</i></GlossaryTerm> in the #+ and #- <GlossaryTerm styled={true} term={"reader macro"}><i>reader macros</i></GlossaryTerm>. <GlossaryTerm styled={true} term={"code"}><i>Code</i></GlossaryTerm> that needs to name a <ClLinks styled={true} term={"feature"}><i>feature</i></ClLinks><sub>2</sub> in a *package P* (other than KEYWORD) can do so by making explicit use of a <GlossaryTerm styled={true} term={"package prefix"}><i>package prefix</i></GlossaryTerm> for *P*, but note that such <ClLinks styled={true} term={"code"}><i>code</i></ClLinks> must also assure that the *package P* exists in order for the <GlossaryTerm styled={true} term={"feature expression"}><i>feature expression</i></GlossaryTerm> to be <ClLinks styled={true} term={"read"}><i>read</i></ClLinks> <sub>2</sub>—even in cases where the <GlossaryTerm styled={true} term={"feature expression"}><i>feature expression</i></GlossaryTerm> is expected to fail. 



It is generally considered wise for an <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> to include one or more <ClLinks styled={true} term={"feature"}><i>features</i></ClLinks> identifying the specific <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks>, so that conditional expressions can be written which distinguish idiosyncrasies of one <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> from those of another. Since features are normally <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> in the KEYWORD <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> where name collisions might easily result, and since no uniquely defined 



System 



 



 



mechanism is designated for deciding who has the right to use which <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> for what reason, a conservative strategy is to prefer names derived from one’s own company or product name, since those names are often trademarked and are hence less likely to be used unwittingly by another <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks>. 



*∗<ClLinks styled={true} term={"compile-file-pathname"}><b>*compile-file-pathname*</b></ClLinks>∗***,** 
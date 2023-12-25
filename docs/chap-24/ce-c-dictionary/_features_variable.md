*∗<DictionaryLink styled={true} term={"features"}><b><GlossaryTerm styled={true} term={"feature"}><i>features</i></GlossaryTerm></b></DictionaryLink>∗ Variable* 



**Value Type:** 



a *proper list*. 



**Initial Value:** 



<GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. 



**Description:** 



The <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"features"}><b>\*features\*</b></DictionaryLink> is called the *features list*. It is a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm>, called <GlossaryTerm styled={true} term={"feature"}><i>features</i></GlossaryTerm>, that correspond to some aspect of the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm>. 



Most <GlossaryTerm styled={true} term={"feature"}><i>features</i></GlossaryTerm> have <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> meanings; The following meanings have been assigned to feature names: 



:cltl1 



If present, indicates that the LISP *package purports to conform* to the 1984 specification *Common Lisp: The Language*. It is possible, but not required, for a *conforming implementation* to have this feature because this specification specifies that its <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> are to be in the COMMON-LISP <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>, not the LISP package. 



:cltl2 



If present, indicates that the implementation *purports to conform* to *Common Lisp: The Language, Second Edition*. This feature must not be present in any *conforming implementation*, since conformance to that document is not compatible with conformance to this specification. The name, however, is reserved by this specification in order to help programs distinguish implementations which conform to that document from implementations which conform to this specification. 



:ieee-floating-point 



If present, indicates that the implementation *purports to conform* to the requirements of *IEEE Standard for Binary Floating-Point Arithmetic*. 



:x3j13 



If present, indicates that the implementation conforms to some particular working draft of this specification, or to some subset of features that approximates a belief about what this specification might turn out to contain. A *conforming implementation* might or might not contain such a feature. (This feature is intended primarily as a stopgap in order to provide implementors something to use prior to the availability of a draft standard, in order to 



discourage them from introducing the :draft-ansi-cl and :ansi-cl <GlossaryTerm styled={true} term={"feature"}><i>features</i></GlossaryTerm> prematurely.) :draft-ansi-cl 







 



 



*∗<DictionaryLink styled={true} term={"features"}><b><GlossaryTerm styled={true} term={"feature"}><i>features</i></GlossaryTerm></b></DictionaryLink>∗* 



If present, indicates that the *implementation purports to conform* to the first full draft of this specification, which went to public review in 1992. A *conforming implementation* which has the :draft-ansi-cl-2 or :ansi-cl <GlossaryTerm styled={true} term={"feature"}><i>feature</i></GlossaryTerm> is not permitted to retain the :draft-ansi-cl <GlossaryTerm styled={true} term={"feature"}><i>feature</i></GlossaryTerm> since incompatible changes were made subsequent to the first draft. 



:draft-ansi-cl-2 



If present, indicates that a second full draft of this specification has gone to public review, and that the *implementation purports to conform* to that specification. (If additional public review drafts are produced, this keyword will continue to refer to the second draft, and additional keywords will be added to identify conformance with such later drafts. As such, the meaning of this keyword can be relied upon not to change over time.) A *conforming implementation* which has the :ansi-cl <GlossaryTerm styled={true} term={"feature"}><i>feature</i></GlossaryTerm> is only permitted to retain the :draft-ansi-cl <GlossaryTerm styled={true} term={"feature"}><i>feature</i></GlossaryTerm> if the finally approved standard is not incompatible with the draft standard. 



:ansi-cl 



If present, indicates that this specification has been adopted by ANSI as an official standard, and that the *implementation purports to conform*. 



:common-lisp 



This feature must appear in <DictionaryLink styled={true} term={"features"}><b>\*features\*</b></DictionaryLink> for any implementation that has one or more of the features :x3j13, :draft-ansi-cl, or :ansi-cl. It is intended that it should also appear in implementations which have the features :cltl1 or :cltl2, but this specification cannot force such behavior. The intent is that this feature should identify the language family named “Common Lisp,” rather than some specific dialect within that family. 



**See Also:** 



Section 1.5.2.1.1 (Use of Read-Time Conditionals), Section 2.4 (Standard Macro Characters) 



**Notes:** 



The <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"features"}><b>\*features\*</b></DictionaryLink> is used by the #+ and #- reader syntax. 



<GlossaryTerm styled={true} term={"symbol"}><i>Symbols</i></GlossaryTerm> in the *features list* may be in any <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>, but in practice they are generally in the KEYWORD <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. This is because KEYWORD is the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> used by default when *reading*<sub>2</sub> *feature expressions* in the #+ and #- *reader macros*. *Code* that needs to name a <GlossaryTerm styled={true} term={"feature"}><i>feature</i></GlossaryTerm><sub>2</sub> in a *package P* (other than KEYWORD) can do so by making explicit use of a *package prefix* for *P*, but note that such <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm> must also assure that the *package P* exists in order for the *feature expression* to be <GlossaryTerm styled={true} term={"read"}><i>read</i></GlossaryTerm> <sub>2</sub>—even in cases where the *feature expression* is expected to fail. 



It is generally considered wise for an <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> to include one or more <GlossaryTerm styled={true} term={"feature"}><i>features</i></GlossaryTerm> identifying the specific <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm>, so that conditional expressions can be written which distinguish idiosyncrasies of one <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> from those of another. Since features are normally <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> in the KEYWORD <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> where name collisions might easily result, and since no uniquely defined 



System 



 



 



mechanism is designated for deciding who has the right to use which <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> for what reason, a conservative strategy is to prefer names derived from one’s own company or product name, since those names are often trademarked and are hence less likely to be used unwittingly by another <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm>. 



*∗<DictionaryLink styled={true} term={"compile-file-pathname"}><b>*compile-file-pathname*</b></DictionaryLink>∗***,** 
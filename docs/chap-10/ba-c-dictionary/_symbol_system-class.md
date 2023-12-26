**symbol** <GlossaryTerm styled={true} term={"system class"}><i>System Class</i></GlossaryTerm> 



**Class Precedence List:** 



<DictionaryLink  term={"symbol"}><b>symbol</b></DictionaryLink>, <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



<ClLinks  term={"symbol"}><i>Symbols</i></ClLinks> are used for their <ClLinks  term={"object"}><i>object</i></ClLinks> identity to name various entities in Common Lisp, including (but not limited to) linguistic entities such as <ClLinks  term={"variable"}><i>variables</i></ClLinks> and <ClLinks  term={"function"}><i>functions</i></ClLinks>. 



<ClLinks  term={"symbol"}><i>Symbols</i></ClLinks> can be collected together into <ClLinks  term={"package"}><i>packages</i></ClLinks>. A <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is said to be <ClLinks  term={"interned"}><i>interned</i></ClLinks> in a <ClLinks  term={"package"}><i>package</i></ClLinks> if it is <ClLinks  term={"accessible"}><i>accessible</i></ClLinks> in that <ClLinks  term={"package"}><i>package</i></ClLinks>; the same <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> can be <ClLinks  term={"interned"}><i>interned</i></ClLinks> in more than one <ClLinks  term={"package"}><i>package</i></ClLinks>. If a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is not <ClLinks  term={"interned"}><i>interned</i></ClLinks> in any <ClLinks  term={"package"}><i>package</i></ClLinks>, it is called <ClLinks  term={"uninterned"}><i>uninterned</i></ClLinks>. 



An *interned symbol* is uniquely identifiable by its <ClLinks  term={"name"}><i>name</i></ClLinks> from any <ClLinks  term={"package"}><i>package</i></ClLinks> in which it is <ClLinks  term={"accessible"}><i>accessible</i></ClLinks>. 



<ClLinks  term={"symbol"}><i>Symbols</i></ClLinks> have the following attributes. For historical reasons, these are sometimes referred to as <ClLinks  term={"cell"}><i>cells</i></ClLinks>, although the actual internal representation of <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> and their attributes is <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. 



**Name** 



The <ClLinks  term={"name"}><i>name</i></ClLinks> of a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is a <ClLinks  term={"string"}><i>string</i></ClLinks> used to identify the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. Every <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> has a <ClLinks  term={"name"}><i>name</i></ClLinks>, and the consequences are undefined if that <ClLinks  term={"name"}><i>name</i></ClLinks> is altered. The <ClLinks  term={"name"}><i>name</i></ClLinks> is used as part of the external, printed representation of the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>; see Section 2.1 (Character Syntax). The <ClLinks  term={"function"}><i>function</i></ClLinks> <DictionaryLink  term={"symbol-name"}><b>symbol-name</b></DictionaryLink> returns the <ClLinks  term={"name"}><i>name</i></ClLinks> of a given <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. A <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> may have any <ClLinks  term={"character"}><i>character</i></ClLinks> in its <ClLinks  term={"name"}><i>name</i></ClLinks>. 



**Package** 



The <ClLinks  term={"object"}><i>object</i></ClLinks> in this <ClLinks  term={"cell"}><i>cell</i></ClLinks> is called the <GlossaryTerm styled={true} term={"home package"}><i>home package</i></GlossaryTerm> of the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. If the <GlossaryTerm styled={true} term={"home package"}><i>home package</i></GlossaryTerm> is <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>, the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is sometimes said to have no <GlossaryTerm styled={true} term={"home package"}><i>home package</i></GlossaryTerm>. 



When a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is first created, it has no <GlossaryTerm styled={true} term={"home package"}><i>home package</i></GlossaryTerm>. When it is first <ClLinks  term={"interned"}><i>interned</i></ClLinks>, the <ClLinks  term={"package"}><i>package</i></ClLinks> in which it is initially <ClLinks  term={"interned"}><i>interned</i></ClLinks> becomes its <GlossaryTerm styled={true} term={"home package"}><i>home package</i></GlossaryTerm>. The <GlossaryTerm styled={true} term={"home package"}><i>home package</i></GlossaryTerm> of a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> can be *accessed* by using the <ClLinks  term={"function"}><i>function</i></ClLinks> <DictionaryLink  term={"symbol-package"}><b>symbol-package</b></DictionaryLink>. 



If a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is <ClLinks  term={"uninterned"}><i>uninterned</i></ClLinks> from the <ClLinks  term={"package"}><i>package</i></ClLinks> which is its <GlossaryTerm styled={true} term={"home package"}><i>home package</i></GlossaryTerm>, its <GlossaryTerm styled={true} term={"home package"}><i>home package</i></GlossaryTerm> is set to <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. Depending on whether there is another <ClLinks  term={"package"}><i>package</i></ClLinks> in which the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is <ClLinks  term={"interned"}><i>interned</i></ClLinks>, the symbol might or might not really be an *uninterned symbol*. A <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> with no <GlossaryTerm styled={true} term={"home package"}><i>home package</i></GlossaryTerm> is therefore called <GlossaryTerm styled={true} term={"apparently uninterned"}><i>apparently uninterned</i></GlossaryTerm>. 



The consequences are undefined if an attempt is made to alter the <GlossaryTerm styled={true} term={"home package"}><i>home package</i></GlossaryTerm> of a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> external in the COMMON-LISP <ClLinks  term={"package"}><i>package</i></ClLinks> or the KEYWORD <ClLinks  term={"package"}><i>package</i></ClLinks>. 



**Property list** 



The <GlossaryTerm styled={true} term={"property list"}><i>property list</i></GlossaryTerm> of a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> provides a mechanism for associating named attributes 



 



 



with that <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. The operations for adding and removing entries are <ClLinks  term={"destructive"}><i>destructive</i></ClLinks> to the <GlossaryTerm styled={true} term={"property list"}><i>property list</i></GlossaryTerm>. Common Lisp provides <ClLinks  term={"operator"}><i>operators</i></ClLinks> both for direct manipulation of *property list objects* (*e.g.*, see <DictionaryLink  term={"getf"}><b>getf</b></DictionaryLink>, <DictionaryLink  term={"remf"}><b>remf</b></DictionaryLink>, and <DictionaryLink  term={"symbol-plist"}><b>symbol-plist</b></DictionaryLink>) and for implicit manipulation of a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>’s <GlossaryTerm styled={true} term={"property list"}><i>property list</i></GlossaryTerm> by reference to the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> (*e.g.*, see <DictionaryLink  term={"get"}><b>get</b></DictionaryLink> and <DictionaryLink  term={"remprop"}><b>remprop</b></DictionaryLink>). The <GlossaryTerm styled={true} term={"property list"}><i>property list</i></GlossaryTerm> associated with a *fresh symbol* is initially <ClLinks  term={"null"}><i>null</i></ClLinks>. 



**Value** 



If a symbol has a value attribute, it is said to be <ClLinks  term={"bound"}><i>bound</i></ClLinks>, and that fact can be detected by the <ClLinks  term={"function"}><i>function</i></ClLinks> <DictionaryLink  term={"boundp"}><b>boundp</b></DictionaryLink>. The <ClLinks  term={"object"}><i>object</i></ClLinks> contained in the <GlossaryTerm styled={true} term={"value cell"}><i>value cell</i></GlossaryTerm> of a *bound symbol* is the <ClLinks  term={"value"}><i>value</i></ClLinks> of the <GlossaryTerm styled={true} term={"global variable"}><i>global variable</i></GlossaryTerm> named by that <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>, and can be *accessed* by the <ClLinks  term={"function"}><i>function</i></ClLinks> <DictionaryLink  term={"symbol-value"}><b>symbol-value</b></DictionaryLink>. A <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> can be made to be <ClLinks  term={"unbound"}><i>unbound</i></ClLinks> by the <ClLinks  term={"function"}><i>function</i></ClLinks> <DictionaryLink  term={"makunbound"}><b>makunbound</b></DictionaryLink>. 



The consequences are undefined if an attempt is made to change the <ClLinks  term={"value"}><i>value</i></ClLinks> of a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> that names a <GlossaryTerm styled={true} term={"constant variable"}><i>constant variable</i></GlossaryTerm>, or to make such a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> be <ClLinks  term={"unbound"}><i>unbound</i></ClLinks>. 



**Function** 



If a symbol has a function attribute, it is said to be <ClLinks  term={"fbound"}><i>fbound</i></ClLinks>, and that fact can be detected by the <ClLinks  term={"function"}><i>function</i></ClLinks> <DictionaryLink  term={"fboundp"}><b>fboundp</b></DictionaryLink>. If the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is the <ClLinks  term={"name"}><i>name</i></ClLinks> of a <ClLinks  term={"function"}><i>function</i></ClLinks> in the <GlossaryTerm styled={true} term={"global environment"}><i>global environment</i></GlossaryTerm>, the <GlossaryTerm styled={true} term={"function cell"}><i>function cell</i></GlossaryTerm> contains the <ClLinks  term={"function"}><i>function</i></ClLinks>, and can be *accessed* by the <ClLinks  term={"function"}><i>function</i></ClLinks> <DictionaryLink  term={"symbol-function"}><b>symbol-function</b></DictionaryLink>. If the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is the <ClLinks  term={"name"}><i>name</i></ClLinks> of either a <ClLinks  term={"macro"}><i>macro</i></ClLinks> in the <GlossaryTerm styled={true} term={"global environment"}><i>global environment</i></GlossaryTerm> (see <DictionaryLink  term={"macro-function"}><b>macro-function</b></DictionaryLink>) or a <GlossaryTerm styled={true} term={"special operator"}><i>special operator</i></GlossaryTerm> (see <DictionaryLink  term={"special-operator-p"}><b>special-operator-p</b></DictionaryLink>), the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is <ClLinks  term={"fbound"}><i>fbound</i></ClLinks>, and can be *accessed* by the <ClLinks  term={"function"}><i>function</i></ClLinks> <DictionaryLink  term={"symbol-function"}><b>symbol-function</b></DictionaryLink>, but the <ClLinks  term={"object"}><i>object</i></ClLinks> which the <GlossaryTerm styled={true} term={"function cell"}><i>function cell</i></GlossaryTerm> contains is of *implementation-dependent type* and purpose. A <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> can be made to be <ClLinks  term={"funbound"}><i>funbound</i></ClLinks> by the <ClLinks  term={"function"}><i>function</i></ClLinks> <DictionaryLink  term={"fmakunbound"}><b>fmakunbound</b></DictionaryLink>. 



The consequences are undefined if an attempt is made to change the <GlossaryTerm styled={true} term={"functional value"}><i>functional value</i></GlossaryTerm> of a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> that names a <GlossaryTerm styled={true} term={"special form"}><i>special form</i></GlossaryTerm>. 



Operations on a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>’s <GlossaryTerm styled={true} term={"value cell"}><i>value cell</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"function cell"}><i>function cell</i></GlossaryTerm> are sometimes described in terms of their effect on the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> itself, but the user should keep in mind that there is an intimate relationship between the contents of those <ClLinks  term={"cell"}><i>cells</i></ClLinks> and the <GlossaryTerm styled={true} term={"global variable"}><i>global variable</i></GlossaryTerm> or global <ClLinks  term={"function"}><i>function</i></ClLinks> definition, respectively. 



<ClLinks  term={"symbol"}><i>Symbols</i></ClLinks> are used as identifiers for <GlossaryTerm styled={true} term={"lexical variable"}><i>lexical variables</i></GlossaryTerm> and lexical <ClLinks  term={"function"}><i>function</i></ClLinks> definitions, but in that role, only their <ClLinks  term={"object"}><i>object</i></ClLinks> identity is significant. Common Lisp provides no operation on a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> that can have any effect on a <GlossaryTerm styled={true} term={"lexical variable"}><i>lexical variable</i></GlossaryTerm> or on a lexical <ClLinks  term={"function"}><i>function</i></ClLinks> definition. 



**See Also:** 



Section 2.3.4 (Symbols as Tokens), Section 2.3.1.1 (Potential Numbers as Tokens), Section 22.1.3.3 (Printing Symbols) 







 



 




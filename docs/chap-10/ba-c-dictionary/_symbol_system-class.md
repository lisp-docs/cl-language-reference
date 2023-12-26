**symbol** <GlossaryTerm styled={true} term={"system class"}><i>System Class</i></GlossaryTerm> 



**Class Precedence List:** 



<DictionaryLink  term={"symbol"}><b>symbol</b></DictionaryLink>, <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



<GlossaryTerm  term={"symbol"}><i>Symbols</i></GlossaryTerm> are used for their <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> identity to name various entities in Common Lisp, including (but not limited to) linguistic entities such as <GlossaryTerm  term={"variable"}><i>variables</i></GlossaryTerm> and <GlossaryTerm  term={"function"}><i>functions</i></GlossaryTerm>. 



<GlossaryTerm  term={"symbol"}><i>Symbols</i></GlossaryTerm> can be collected together into <GlossaryTerm  term={"package"}><i>packages</i></GlossaryTerm>. A <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> is said to be <GlossaryTerm  term={"interned"}><i>interned</i></GlossaryTerm> in a <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> if it is <GlossaryTerm  term={"accessible"}><i>accessible</i></GlossaryTerm> in that <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>; the same <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> can be <GlossaryTerm  term={"interned"}><i>interned</i></GlossaryTerm> in more than one <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>. If a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> is not <GlossaryTerm  term={"interned"}><i>interned</i></GlossaryTerm> in any <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>, it is called <GlossaryTerm  term={"uninterned"}><i>uninterned</i></GlossaryTerm>. 



An *interned symbol* is uniquely identifiable by its <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> from any <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> in which it is <GlossaryTerm  term={"accessible"}><i>accessible</i></GlossaryTerm>. 



<GlossaryTerm  term={"symbol"}><i>Symbols</i></GlossaryTerm> have the following attributes. For historical reasons, these are sometimes referred to as <GlossaryTerm  term={"cell"}><i>cells</i></GlossaryTerm>, although the actual internal representation of <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> and their attributes is <GlossaryTerm  term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. 



**Name** 



The <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> of a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> is a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> used to identify the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>. Every <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> has a <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm>, and the consequences are undefined if that <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> is altered. The <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> is used as part of the external, printed representation of the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>; see Section 2.1 (Character Syntax). The <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"symbol-name"}><b>symbol-name</b></DictionaryLink> returns the <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> of a given <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>. A <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> may have any <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> in its <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm>. 



**Package** 



The <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> in this <GlossaryTerm  term={"cell"}><i>cell</i></GlossaryTerm> is called the <GlossaryTerm styled={true} term={"home package"}><i>home package</i></GlossaryTerm> of the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>. If the <GlossaryTerm styled={true} term={"home package"}><i>home package</i></GlossaryTerm> is <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>, the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> is sometimes said to have no <GlossaryTerm styled={true} term={"home package"}><i>home package</i></GlossaryTerm>. 



When a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> is first created, it has no <GlossaryTerm styled={true} term={"home package"}><i>home package</i></GlossaryTerm>. When it is first <GlossaryTerm  term={"interned"}><i>interned</i></GlossaryTerm>, the <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> in which it is initially <GlossaryTerm  term={"interned"}><i>interned</i></GlossaryTerm> becomes its <GlossaryTerm styled={true} term={"home package"}><i>home package</i></GlossaryTerm>. The <GlossaryTerm styled={true} term={"home package"}><i>home package</i></GlossaryTerm> of a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> can be *accessed* by using the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"symbol-package"}><b>symbol-package</b></DictionaryLink>. 



If a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> is <GlossaryTerm  term={"uninterned"}><i>uninterned</i></GlossaryTerm> from the <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> which is its <GlossaryTerm styled={true} term={"home package"}><i>home package</i></GlossaryTerm>, its <GlossaryTerm styled={true} term={"home package"}><i>home package</i></GlossaryTerm> is set to <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. Depending on whether there is another <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> in which the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> is <GlossaryTerm  term={"interned"}><i>interned</i></GlossaryTerm>, the symbol might or might not really be an *uninterned symbol*. A <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> with no <GlossaryTerm styled={true} term={"home package"}><i>home package</i></GlossaryTerm> is therefore called <GlossaryTerm styled={true} term={"apparently uninterned"}><i>apparently uninterned</i></GlossaryTerm>. 



The consequences are undefined if an attempt is made to alter the <GlossaryTerm styled={true} term={"home package"}><i>home package</i></GlossaryTerm> of a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> external in the COMMON-LISP <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> or the KEYWORD <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>. 



**Property list** 



The <GlossaryTerm styled={true} term={"property list"}><i>property list</i></GlossaryTerm> of a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> provides a mechanism for associating named attributes 



 



 



with that <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>. The operations for adding and removing entries are <GlossaryTerm  term={"destructive"}><i>destructive</i></GlossaryTerm> to the <GlossaryTerm styled={true} term={"property list"}><i>property list</i></GlossaryTerm>. Common Lisp provides <GlossaryTerm  term={"operator"}><i>operators</i></GlossaryTerm> both for direct manipulation of *property list objects* (*e.g.*, see <DictionaryLink  term={"getf"}><b>getf</b></DictionaryLink>, <DictionaryLink  term={"remf"}><b>remf</b></DictionaryLink>, and <DictionaryLink  term={"symbol-plist"}><b>symbol-plist</b></DictionaryLink>) and for implicit manipulation of a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>’s <GlossaryTerm styled={true} term={"property list"}><i>property list</i></GlossaryTerm> by reference to the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> (*e.g.*, see <DictionaryLink  term={"get"}><b>get</b></DictionaryLink> and <DictionaryLink  term={"remprop"}><b>remprop</b></DictionaryLink>). The <GlossaryTerm styled={true} term={"property list"}><i>property list</i></GlossaryTerm> associated with a *fresh symbol* is initially <GlossaryTerm  term={"null"}><i>null</i></GlossaryTerm>. 



**Value** 



If a symbol has a value attribute, it is said to be <GlossaryTerm  term={"bound"}><i>bound</i></GlossaryTerm>, and that fact can be detected by the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"boundp"}><b>boundp</b></DictionaryLink>. The <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> contained in the <GlossaryTerm styled={true} term={"value cell"}><i>value cell</i></GlossaryTerm> of a *bound symbol* is the <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"global variable"}><i>global variable</i></GlossaryTerm> named by that <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>, and can be *accessed* by the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"symbol-value"}><b>symbol-value</b></DictionaryLink>. A <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> can be made to be <GlossaryTerm  term={"unbound"}><i>unbound</i></GlossaryTerm> by the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"makunbound"}><b>makunbound</b></DictionaryLink>. 



The consequences are undefined if an attempt is made to change the <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> that names a <GlossaryTerm styled={true} term={"constant variable"}><i>constant variable</i></GlossaryTerm>, or to make such a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> be <GlossaryTerm  term={"unbound"}><i>unbound</i></GlossaryTerm>. 



**Function** 



If a symbol has a function attribute, it is said to be <GlossaryTerm  term={"fbound"}><i>fbound</i></GlossaryTerm>, and that fact can be detected by the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"fboundp"}><b>fboundp</b></DictionaryLink>. If the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> is the <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> of a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"global environment"}><i>global environment</i></GlossaryTerm>, the <GlossaryTerm styled={true} term={"function cell"}><i>function cell</i></GlossaryTerm> contains the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm>, and can be *accessed* by the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"symbol-function"}><b>symbol-function</b></DictionaryLink>. If the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> is the <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> of either a <GlossaryTerm  term={"macro"}><i>macro</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"global environment"}><i>global environment</i></GlossaryTerm> (see <DictionaryLink  term={"macro-function"}><b>macro-function</b></DictionaryLink>) or a <GlossaryTerm styled={true} term={"special operator"}><i>special operator</i></GlossaryTerm> (see <DictionaryLink  term={"special-operator-p"}><b>special-operator-p</b></DictionaryLink>), the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> is <GlossaryTerm  term={"fbound"}><i>fbound</i></GlossaryTerm>, and can be *accessed* by the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"symbol-function"}><b>symbol-function</b></DictionaryLink>, but the <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> which the <GlossaryTerm styled={true} term={"function cell"}><i>function cell</i></GlossaryTerm> contains is of *implementation-dependent type* and purpose. A <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> can be made to be <GlossaryTerm  term={"funbound"}><i>funbound</i></GlossaryTerm> by the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"fmakunbound"}><b>fmakunbound</b></DictionaryLink>. 



The consequences are undefined if an attempt is made to change the <GlossaryTerm styled={true} term={"functional value"}><i>functional value</i></GlossaryTerm> of a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> that names a <GlossaryTerm styled={true} term={"special form"}><i>special form</i></GlossaryTerm>. 



Operations on a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>’s <GlossaryTerm styled={true} term={"value cell"}><i>value cell</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"function cell"}><i>function cell</i></GlossaryTerm> are sometimes described in terms of their effect on the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> itself, but the user should keep in mind that there is an intimate relationship between the contents of those <GlossaryTerm  term={"cell"}><i>cells</i></GlossaryTerm> and the <GlossaryTerm styled={true} term={"global variable"}><i>global variable</i></GlossaryTerm> or global <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> definition, respectively. 



<GlossaryTerm  term={"symbol"}><i>Symbols</i></GlossaryTerm> are used as identifiers for <GlossaryTerm styled={true} term={"lexical variable"}><i>lexical variables</i></GlossaryTerm> and lexical <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> definitions, but in that role, only their <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> identity is significant. Common Lisp provides no operation on a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> that can have any effect on a <GlossaryTerm styled={true} term={"lexical variable"}><i>lexical variable</i></GlossaryTerm> or on a lexical <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> definition. 



**See Also:** 



Section 2.3.4 (Symbols as Tokens), Section 2.3.1.1 (Potential Numbers as Tokens), Section 22.1.3.3 (Printing Symbols) 







 



 




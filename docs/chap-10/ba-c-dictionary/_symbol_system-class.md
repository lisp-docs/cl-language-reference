**symbol** *System Class* 



**Class Precedence List:** 



<DictionaryLink styled={true} term={"symbol"}><b>symbol</b></DictionaryLink>, <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



<GlossaryTerm styled={true} term={"symbol"}><i>Symbols</i></GlossaryTerm> are used for their <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> identity to name various entities in Common Lisp, including (but not limited to) linguistic entities such as <GlossaryTerm styled={true} term={"variable"}><i>variables</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"symbol"}><i>Symbols</i></GlossaryTerm> can be collected together into <GlossaryTerm styled={true} term={"package"}><i>packages</i></GlossaryTerm>. A <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is said to be <GlossaryTerm styled={true} term={"interned"}><i>interned</i></GlossaryTerm> in a <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> if it is <GlossaryTerm styled={true} term={"accessible"}><i>accessible</i></GlossaryTerm> in that <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>; the same <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> can be <GlossaryTerm styled={true} term={"interned"}><i>interned</i></GlossaryTerm> in more than one <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. If a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is not <GlossaryTerm styled={true} term={"interned"}><i>interned</i></GlossaryTerm> in any <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>, it is called <GlossaryTerm styled={true} term={"uninterned"}><i>uninterned</i></GlossaryTerm>. 



An *interned symbol* is uniquely identifiable by its <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> from any <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> in which it is <GlossaryTerm styled={true} term={"accessible"}><i>accessible</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"symbol"}><i>Symbols</i></GlossaryTerm> have the following attributes. For historical reasons, these are sometimes referred to as <GlossaryTerm styled={true} term={"cell"}><i>cells</i></GlossaryTerm>, although the actual internal representation of <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> and their attributes is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. 



**Name** 



The <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> of a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> used to identify the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. Every <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> has a <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>, and the consequences are undefined if that <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> is altered. The <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> is used as part of the external, printed representation of the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>; see Section 2.1 (Character Syntax). The <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"symbol-name"}><b>symbol-name</b></DictionaryLink> returns the <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> of a given <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. A <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> may have any <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> in its <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>. 



**Package** 



The <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> in this <GlossaryTerm styled={true} term={"cell"}><i>cell</i></GlossaryTerm> is called the *home package* of the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. If the *home package* is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is sometimes said to have no *home package*. 



When a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is first created, it has no *home package*. When it is first <GlossaryTerm styled={true} term={"interned"}><i>interned</i></GlossaryTerm>, the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> in which it is initially <GlossaryTerm styled={true} term={"interned"}><i>interned</i></GlossaryTerm> becomes its *home package*. The *home package* of a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> can be *accessed* by using the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"symbol-package"}><b>symbol-package</b></DictionaryLink>. 



If a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"uninterned"}><i>uninterned</i></GlossaryTerm> from the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> which is its *home package*, its *home package* is set to <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. Depending on whether there is another <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> in which the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"interned"}><i>interned</i></GlossaryTerm>, the symbol might or might not really be an *uninterned symbol*. A <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> with no *home package* is therefore called *apparently uninterned*. 



The consequences are undefined if an attempt is made to alter the *home package* of a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> external in the COMMON-LISP <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> or the KEYWORD <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. 



**Property list** 



The *property list* of a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> provides a mechanism for associating named attributes 



 



 



with that <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. The operations for adding and removing entries are <GlossaryTerm styled={true} term={"destructive"}><i>destructive</i></GlossaryTerm> to the *property list*. Common Lisp provides <GlossaryTerm styled={true} term={"operator"}><i>operators</i></GlossaryTerm> both for direct manipulation of *property list objects* (*e.g.*, see <DictionaryLink styled={true} term={"getf"}><b>getf</b></DictionaryLink>, <DictionaryLink styled={true} term={"remf"}><b>remf</b></DictionaryLink>, and <DictionaryLink styled={true} term={"symbol-plist"}><b>symbol-plist</b></DictionaryLink>) and for implicit manipulation of a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>’s *property list* by reference to the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> (*e.g.*, see <DictionaryLink styled={true} term={"get"}><b>get</b></DictionaryLink> and <DictionaryLink styled={true} term={"remprop"}><b>remprop</b></DictionaryLink>). The *property list* associated with a *fresh symbol* is initially <GlossaryTerm styled={true} term={"null"}><i>null</i></GlossaryTerm>. 



**Value** 



If a symbol has a value attribute, it is said to be <GlossaryTerm styled={true} term={"bound"}><i>bound</i></GlossaryTerm>, and that fact can be detected by the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"boundp"}><b>boundp</b></DictionaryLink>. The <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> contained in the *value cell* of a *bound symbol* is the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of the *global variable* named by that <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>, and can be *accessed* by the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"symbol-value"}><b>symbol-value</b></DictionaryLink>. A <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> can be made to be <GlossaryTerm styled={true} term={"unbound"}><i>unbound</i></GlossaryTerm> by the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"makunbound"}><b>makunbound</b></DictionaryLink>. 



The consequences are undefined if an attempt is made to change the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> that names a *constant variable*, or to make such a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> be <GlossaryTerm styled={true} term={"unbound"}><i>unbound</i></GlossaryTerm>. 



**Function** 



If a symbol has a function attribute, it is said to be <GlossaryTerm styled={true} term={"fbound"}><i>fbound</i></GlossaryTerm>, and that fact can be detected by the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"fboundp"}><b>fboundp</b></DictionaryLink>. If the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is the <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> of a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> in the *global environment*, the *function cell* contains the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>, and can be *accessed* by the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"symbol-function"}><b>symbol-function</b></DictionaryLink>. If the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is the <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> of either a <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm> in the *global environment* (see <DictionaryLink styled={true} term={"macro-function"}><b>macro-function</b></DictionaryLink>) or a *special operator* (see <DictionaryLink styled={true} term={"special-operator-p"}><b>special-operator-p</b></DictionaryLink>), the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"fbound"}><i>fbound</i></GlossaryTerm>, and can be *accessed* by the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"symbol-function"}><b>symbol-function</b></DictionaryLink>, but the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> which the *function cell* contains is of *implementation-dependent type* and purpose. A <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> can be made to be <GlossaryTerm styled={true} term={"funbound"}><i>funbound</i></GlossaryTerm> by the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"fmakunbound"}><b>fmakunbound</b></DictionaryLink>. 



The consequences are undefined if an attempt is made to change the *functional value* of a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> that names a *special form*. 



Operations on a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>’s *value cell* and *function cell* are sometimes described in terms of their effect on the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> itself, but the user should keep in mind that there is an intimate relationship between the contents of those <GlossaryTerm styled={true} term={"cell"}><i>cells</i></GlossaryTerm> and the *global variable* or global <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> definition, respectively. 



<GlossaryTerm styled={true} term={"symbol"}><i>Symbols</i></GlossaryTerm> are used as identifiers for *lexical variables* and lexical <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> definitions, but in that role, only their <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> identity is significant. Common Lisp provides no operation on a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> that can have any effect on a *lexical variable* or on a lexical <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> definition. 



**See Also:** 



Section 2.3.4 (Symbols as Tokens), Section 2.3.1.1 (Potential Numbers as Tokens), Section 22.1.3.3 (Printing Symbols) 







 



 




**symbol** *System Class* 



**Class Precedence List:** 



<ClLinks styled={true} term={"symbol"}><b>symbol</b></ClLinks>, <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> 



**Description:** 



<ClLinks styled={true} term={"symbol"}><i>Symbols</i></ClLinks> are used for their <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> identity to name various entities in Common Lisp, including (but not limited to) linguistic entities such as <ClLinks styled={true} term={"variable"}><i>variables</i></ClLinks> and <ClLinks styled={true} term={"function"}><i>functions</i></ClLinks>. 



<ClLinks styled={true} term={"symbol"}><i>Symbols</i></ClLinks> can be collected together into <ClLinks styled={true} term={"package"}><i>packages</i></ClLinks>. A <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is said to be <ClLinks styled={true} term={"interned"}><i>interned</i></ClLinks> in a <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> if it is <ClLinks styled={true} term={"accessible"}><i>accessible</i></ClLinks> in that <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>; the same <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> can be <ClLinks styled={true} term={"interned"}><i>interned</i></ClLinks> in more than one <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. If a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is not <ClLinks styled={true} term={"interned"}><i>interned</i></ClLinks> in any <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>, it is called <ClLinks styled={true} term={"uninterned"}><i>uninterned</i></ClLinks>. 



An *interned symbol* is uniquely identifiable by its <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> from any <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> in which it is <ClLinks styled={true} term={"accessible"}><i>accessible</i></ClLinks>. 



<ClLinks styled={true} term={"symbol"}><i>Symbols</i></ClLinks> have the following attributes. For historical reasons, these are sometimes referred to as <ClLinks styled={true} term={"cell"}><i>cells</i></ClLinks>, although the actual internal representation of <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> and their attributes is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. 



**Name** 



The <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> of a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> used to identify the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. Every <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> has a <ClLinks styled={true} term={"name"}><i>name</i></ClLinks>, and the consequences are undefined if that <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> is altered. The <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> is used as part of the external, printed representation of the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>; see Section 2.1 (Character Syntax). The <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"symbol-name"}><b>symbol-name</b></ClLinks> returns the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> of a given <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. A <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> may have any <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> in its <ClLinks styled={true} term={"name"}><i>name</i></ClLinks>. 



**Package** 



The <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> in this <ClLinks styled={true} term={"cell"}><i>cell</i></ClLinks> is called the *home package* of the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. If the *home package* is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is sometimes said to have no *home package*. 



When a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is first created, it has no *home package*. When it is first <ClLinks styled={true} term={"interned"}><i>interned</i></ClLinks>, the <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> in which it is initially <ClLinks styled={true} term={"interned"}><i>interned</i></ClLinks> becomes its *home package*. The *home package* of a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> can be *accessed* by using the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"symbol-package"}><b>symbol-package</b></ClLinks>. 



If a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is <ClLinks styled={true} term={"uninterned"}><i>uninterned</i></ClLinks> from the <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> which is its *home package*, its *home package* is set to <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. Depending on whether there is another <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> in which the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is <ClLinks styled={true} term={"interned"}><i>interned</i></ClLinks>, the symbol might or might not really be an *uninterned symbol*. A <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> with no *home package* is therefore called *apparently uninterned*. 



The consequences are undefined if an attempt is made to alter the *home package* of a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> external in the COMMON-LISP <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> or the KEYWORD <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. 



**Property list** 



The *property list* of a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> provides a mechanism for associating named attributes 



 



 



with that <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. The operations for adding and removing entries are <ClLinks styled={true} term={"destructive"}><i>destructive</i></ClLinks> to the *property list*. Common Lisp provides <ClLinks styled={true} term={"operator"}><i>operators</i></ClLinks> both for direct manipulation of *property list objects* (*e.g.*, see <ClLinks styled={true} term={"getf"}><b>getf</b></ClLinks>, <ClLinks styled={true} term={"remf"}><b>remf</b></ClLinks>, and <ClLinks styled={true} term={"symbol-plist"}><b>symbol-plist</b></ClLinks>) and for implicit manipulation of a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>’s *property list* by reference to the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> (*e.g.*, see <ClLinks styled={true} term={"get"}><b>get</b></ClLinks> and <ClLinks styled={true} term={"remprop"}><b>remprop</b></ClLinks>). The *property list* associated with a *fresh symbol* is initially <ClLinks styled={true} term={"null"}><i>null</i></ClLinks>. 



**Value** 



If a symbol has a value attribute, it is said to be <ClLinks styled={true} term={"bound"}><i>bound</i></ClLinks>, and that fact can be detected by the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"boundp"}><b>boundp</b></ClLinks>. The <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> contained in the *value cell* of a *bound symbol* is the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of the *global variable* named by that <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>, and can be *accessed* by the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"symbol-value"}><b>symbol-value</b></ClLinks>. A <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> can be made to be <ClLinks styled={true} term={"unbound"}><i>unbound</i></ClLinks> by the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"makunbound"}><b>makunbound</b></ClLinks>. 



The consequences are undefined if an attempt is made to change the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> that names a *constant variable*, or to make such a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> be <ClLinks styled={true} term={"unbound"}><i>unbound</i></ClLinks>. 



**Function** 



If a symbol has a function attribute, it is said to be <ClLinks styled={true} term={"fbound"}><i>fbound</i></ClLinks>, and that fact can be detected by the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"fboundp"}><b>fboundp</b></ClLinks>. If the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> of a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> in the *global environment*, the *function cell* contains the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>, and can be *accessed* by the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"symbol-function"}><b>symbol-function</b></ClLinks>. If the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> of either a <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks> in the *global environment* (see <ClLinks styled={true} term={"macro-function"}><b>macro-function</b></ClLinks>) or a *special operator* (see <ClLinks styled={true} term={"special-operator-p"}><b>special-operator-p</b></ClLinks>), the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is <ClLinks styled={true} term={"fbound"}><i>fbound</i></ClLinks>, and can be *accessed* by the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"symbol-function"}><b>symbol-function</b></ClLinks>, but the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> which the *function cell* contains is of *implementation-dependent type* and purpose. A <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> can be made to be <ClLinks styled={true} term={"funbound"}><i>funbound</i></ClLinks> by the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"fmakunbound"}><b>fmakunbound</b></ClLinks>. 



The consequences are undefined if an attempt is made to change the *functional value* of a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> that names a *special form*. 



Operations on a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>’s *value cell* and *function cell* are sometimes described in terms of their effect on the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> itself, but the user should keep in mind that there is an intimate relationship between the contents of those <ClLinks styled={true} term={"cell"}><i>cells</i></ClLinks> and the *global variable* or global <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> definition, respectively. 



<ClLinks styled={true} term={"symbol"}><i>Symbols</i></ClLinks> are used as identifiers for *lexical variables* and lexical <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> definitions, but in that role, only their <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> identity is significant. Common Lisp provides no operation on a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> that can have any effect on a *lexical variable* or on a lexical <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> definition. 



**See Also:** 



Section 2.3.4 (Symbols as Tokens), Section 2.3.1.1 (Potential Numbers as Tokens), Section 22.1.3.3 (Printing Symbols) 







 



 




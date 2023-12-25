**apropos, apropos-list** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"apropos"}><b>apropos</b></DictionaryLink> <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> &amp;optional *package → hno valuesi* 



<DictionaryLink styled={true} term={"apropos-list"}><b>apropos-list</b></DictionaryLink> <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> &amp;optional *package → symbols* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>—a *string designator* . 



<GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>—a *package designator* or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. The default is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



<GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm>. 



**Description:** 



These functions search for *interned symbols* whose <GlossaryTerm styled={true} term={"name"}><i>names</i></GlossaryTerm> contain the substring <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>. 



 



 



For <DictionaryLink styled={true} term={"apropos"}><b>apropos</b></DictionaryLink>, as each such <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is found, its name is printed on *standard output*. In addition, if such a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is defined as a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> or *dynamic variable*, information about those definitions might also be printed. 



For <DictionaryLink styled={true} term={"apropos-list"}><b>apropos-list</b></DictionaryLink>, no output occurs as the search proceeds; instead a list of the matching <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> is returned when the search is complete. 



If <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"non-nil"}><i>non-nil</i></GlossaryTerm>, only the *symbols accessible* in that <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> are searched; otherwise all *symbols accessible* in any <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> are searched. 



Because a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> might be available by way of more than one inheritance path, <DictionaryLink styled={true} term={"apropos"}><b>apropos</b></DictionaryLink> might print information about the *same symbol* more than once, or <DictionaryLink styled={true} term={"apropos-list"}><b>apropos-list</b></DictionaryLink> might return a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> containing duplicate <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm>. 



Whether or not the search is case-sensitive is <GlossaryTerm styled={true} term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm>. 



**Affected By:** 



The set of <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> which are currently <GlossaryTerm styled={true} term={"interned"}><i>interned</i></GlossaryTerm> in any <GlossaryTerm styled={true} term={"package"}><i>packages</i></GlossaryTerm> being searched. 



<DictionaryLink styled={true} term={"apropos"}><b>apropos</b></DictionaryLink> is also affected by **\*standard-output\***. 




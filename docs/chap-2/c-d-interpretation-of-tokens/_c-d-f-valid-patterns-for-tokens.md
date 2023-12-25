 



The valid patterns for <GlossaryTerm styled={true} term={"token"}><i>tokens</i></GlossaryTerm> are summarized in Figure 2–17.  







|<p>*nnnnn* a <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> </p><p>*xxxxx* a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> in the *current package* </p><p>:*xxxxx* a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> in the the KEYWORD <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> </p><p>*ppppp*:*xxxxx* an *external symbol* in the *ppppp package* </p><p>*ppppp*::*xxxxx* a (possibly internal) <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> in the *ppppp package* :*nnnnn* undefined </p><p>*ppppp*:*nnnnn* undefined </p><p>*ppppp*::*nnnnn* undefined </p><p>::*aaaaa* undefined </p><p>*aaaaa*: undefined </p><p>*aaaaa*:*aaaaa*:*aaaaa* undefined</p>|

| :- |





**Figure 2–17. Valid patterns for tokens** 



Note that *nnnnn* has number syntax, neither *xxxxx* nor *ppppp* has number syntax, and *aaaaa* has any syntax. 



A summary of rules concerning *package markers* follows. In each case, examples are offered to illustrate the case; for presentational simplicity, the examples assume that the *readtable case* of the *current readtable* is :upcase. 



1\. If there is a single *package marker* , and it occurs at the beginning of the <GlossaryTerm styled={true} term={"token"}><i>token</i></GlossaryTerm>, then the <GlossaryTerm styled={true} term={"token"}><i>token</i></GlossaryTerm> is interpreted as a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> in the KEYWORD <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. It also sets the <DictionaryLink styled={true} term={"symbol-value"}><b>symbol-value</b></DictionaryLink> of the newly-created <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> to that same <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> so that the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> will self-evaluate. 



For example, :bar, when read, interns BAR as an *external symbol* in the KEYWORD <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. 



2\. If there is a single *package marker* not at the beginning or end of the <GlossaryTerm styled={true} term={"token"}><i>token</i></GlossaryTerm>, then it divides the <GlossaryTerm styled={true} term={"token"}><i>token</i></GlossaryTerm> into two parts. The first part specifies a <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>; the second part is the name of an *external symbol* available in that package. 



For example, foo:bar, when read, looks up BAR among the *external symbols* of the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> named FOO. 



3\. If there are two adjacent *package markers* not at the beginning or end of the <GlossaryTerm styled={true} term={"token"}><i>token</i></GlossaryTerm>, then they divide the <GlossaryTerm styled={true} term={"token"}><i>token</i></GlossaryTerm> into two parts. The first part specifies a <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>; the second part is the name of a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> within that <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> (possibly an *internal symbol*). 



For example, foo::bar, when read, interns BAR in the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> named FOO. 



4\. If the <GlossaryTerm styled={true} term={"token"}><i>token</i></GlossaryTerm> contains no *package markers*, and does not have *potential number* syntax, then the entire <GlossaryTerm styled={true} term={"token"}><i>token</i></GlossaryTerm> is the name of the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. The <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is looked up in the *current package*. 



For example, bar, when read, interns BAR in the *current package*.  







5\. The consequences are unspecified if any other pattern of *package markers* in a <GlossaryTerm styled={true} term={"token"}><i>token</i></GlossaryTerm> is used. All other uses of *package markers* within names of <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> are not defined by this standard but are reserved for <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> use. 



For example, assuming the *readtable case* of the *current readtable* is :upcase, editor:buffer refers to the *external symbol* named BUFFER present in the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> named editor, regardless of whether there is a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> named BUFFER in the *current package*. If there is no <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> named editor, or if 



no <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> named BUFFER is present in editor, or if BUFFER is not exported by editor, the reader signals a correctable error. If editor::buffer is seen, the effect is exactly the same as reading buffer with the EDITOR <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> being the *current package*. 




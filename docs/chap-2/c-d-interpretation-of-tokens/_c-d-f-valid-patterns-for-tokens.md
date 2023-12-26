 



The valid patterns for <GlossaryTerm  term={"token"}><i>tokens</i></GlossaryTerm> are summarized in Figure 2–17.  







|<p>*nnnnn* a <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> </p><p>*xxxxx* a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm> </p><p>:*xxxxx* a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> in the the KEYWORD <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> </p><p>*ppppp*:*xxxxx* an <GlossaryTerm styled={true} term={"external symbol"}><i>external symbol</i></GlossaryTerm> in the *ppppp package* </p><p>*ppppp*::*xxxxx* a (possibly internal) <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> in the *ppppp package* :*nnnnn* undefined </p><p>*ppppp*:*nnnnn* undefined </p><p>*ppppp*::*nnnnn* undefined </p><p>::*aaaaa* undefined </p><p>*aaaaa*: undefined </p><p>*aaaaa*:*aaaaa*:*aaaaa* undefined</p>|

| :- |





**Figure 2–17. Valid patterns for tokens** 



Note that *nnnnn* has number syntax, neither *xxxxx* nor *ppppp* has number syntax, and *aaaaa* has any syntax. 



A summary of rules concerning <GlossaryTerm styled={true} term={"package marker"}><i>package markers</i></GlossaryTerm> follows. In each case, examples are offered to illustrate the case; for presentational simplicity, the examples assume that the <GlossaryTerm styled={true} term={"readtable case"}><i>readtable case</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"current readtable"}><i>current readtable</i></GlossaryTerm> is :upcase. 



1\. If there is a single <GlossaryTerm styled={true} term={"package marker"}><i>package marker</i></GlossaryTerm> , and it occurs at the beginning of the <GlossaryTerm  term={"token"}><i>token</i></GlossaryTerm>, then the <GlossaryTerm  term={"token"}><i>token</i></GlossaryTerm> is interpreted as a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> in the KEYWORD <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>. It also sets the <DictionaryLink  term={"symbol-value"}><b>symbol-value</b></DictionaryLink> of the newly-created <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> to that same <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> so that the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> will self-evaluate. 



For example, :bar, when read, interns BAR as an <GlossaryTerm styled={true} term={"external symbol"}><i>external symbol</i></GlossaryTerm> in the KEYWORD <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>. 



2\. If there is a single <GlossaryTerm styled={true} term={"package marker"}><i>package marker</i></GlossaryTerm> not at the beginning or end of the <GlossaryTerm  term={"token"}><i>token</i></GlossaryTerm>, then it divides the <GlossaryTerm  term={"token"}><i>token</i></GlossaryTerm> into two parts. The first part specifies a <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>; the second part is the name of an <GlossaryTerm styled={true} term={"external symbol"}><i>external symbol</i></GlossaryTerm> available in that package. 



For example, foo:bar, when read, looks up BAR among the <GlossaryTerm styled={true} term={"external symbol"}><i>external symbols</i></GlossaryTerm> of the <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> named FOO. 



3\. If there are two adjacent <GlossaryTerm styled={true} term={"package marker"}><i>package markers</i></GlossaryTerm> not at the beginning or end of the <GlossaryTerm  term={"token"}><i>token</i></GlossaryTerm>, then they divide the <GlossaryTerm  term={"token"}><i>token</i></GlossaryTerm> into two parts. The first part specifies a <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>; the second part is the name of a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> within that <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> (possibly an <GlossaryTerm styled={true} term={"internal symbol"}><i>internal symbol</i></GlossaryTerm>). 



For example, foo::bar, when read, interns BAR in the <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> named FOO. 



4\. If the <GlossaryTerm  term={"token"}><i>token</i></GlossaryTerm> contains no <GlossaryTerm styled={true} term={"package marker"}><i>package markers</i></GlossaryTerm>, and does not have <GlossaryTerm styled={true} term={"potential number"}><i>potential number</i></GlossaryTerm> syntax, then the entire <GlossaryTerm  term={"token"}><i>token</i></GlossaryTerm> is the name of the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>. The <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> is looked up in the <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm>. 



For example, bar, when read, interns BAR in the <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm>.  







5\. The consequences are unspecified if any other pattern of <GlossaryTerm styled={true} term={"package marker"}><i>package markers</i></GlossaryTerm> in a <GlossaryTerm  term={"token"}><i>token</i></GlossaryTerm> is used. All other uses of <GlossaryTerm styled={true} term={"package marker"}><i>package markers</i></GlossaryTerm> within names of <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> are not defined by this standard but are reserved for <GlossaryTerm  term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> use. 



For example, assuming the <GlossaryTerm styled={true} term={"readtable case"}><i>readtable case</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"current readtable"}><i>current readtable</i></GlossaryTerm> is :upcase, editor:buffer refers to the <GlossaryTerm styled={true} term={"external symbol"}><i>external symbol</i></GlossaryTerm> named BUFFER present in the <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> named editor, regardless of whether there is a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> named BUFFER in the <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm>. If there is no <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> named editor, or if 



no <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> named BUFFER is present in editor, or if BUFFER is not exported by editor, the reader signals a correctable error. If editor::buffer is seen, the effect is exactly the same as reading buffer with the EDITOR <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> being the <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm>. 




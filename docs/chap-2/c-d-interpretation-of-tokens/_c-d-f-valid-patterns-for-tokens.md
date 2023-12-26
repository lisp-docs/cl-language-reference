 



The valid patterns for <ClLinks  term={"token"}><i>tokens</i></ClLinks> are summarized in Figure 2–17.  







|<p>*nnnnn* a <ClLinks  term={"number"}><i>number</i></ClLinks> </p><p>*xxxxx* a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> in the <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm> </p><p>:*xxxxx* a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> in the the KEYWORD <ClLinks  term={"package"}><i>package</i></ClLinks> </p><p>*ppppp*:*xxxxx* an <GlossaryTerm styled={true} term={"external symbol"}><i>external symbol</i></GlossaryTerm> in the *ppppp package* </p><p>*ppppp*::*xxxxx* a (possibly internal) <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> in the *ppppp package* :*nnnnn* undefined </p><p>*ppppp*:*nnnnn* undefined </p><p>*ppppp*::*nnnnn* undefined </p><p>::*aaaaa* undefined </p><p>*aaaaa*: undefined </p><p>*aaaaa*:*aaaaa*:*aaaaa* undefined</p>|

| :- |





**Figure 2–17. Valid patterns for tokens** 



Note that *nnnnn* has number syntax, neither *xxxxx* nor *ppppp* has number syntax, and *aaaaa* has any syntax. 



A summary of rules concerning <GlossaryTerm styled={true} term={"package marker"}><i>package markers</i></GlossaryTerm> follows. In each case, examples are offered to illustrate the case; for presentational simplicity, the examples assume that the <GlossaryTerm styled={true} term={"readtable case"}><i>readtable case</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"current readtable"}><i>current readtable</i></GlossaryTerm> is :upcase. 



1\. If there is a single <GlossaryTerm styled={true} term={"package marker"}><i>package marker</i></GlossaryTerm> , and it occurs at the beginning of the <ClLinks  term={"token"}><i>token</i></ClLinks>, then the <ClLinks  term={"token"}><i>token</i></ClLinks> is interpreted as a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> in the KEYWORD <ClLinks  term={"package"}><i>package</i></ClLinks>. It also sets the <DictionaryLink  term={"symbol-value"}><b>symbol-value</b></DictionaryLink> of the newly-created <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> to that same <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> so that the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> will self-evaluate. 



For example, :bar, when read, interns BAR as an <GlossaryTerm styled={true} term={"external symbol"}><i>external symbol</i></GlossaryTerm> in the KEYWORD <ClLinks  term={"package"}><i>package</i></ClLinks>. 



2\. If there is a single <GlossaryTerm styled={true} term={"package marker"}><i>package marker</i></GlossaryTerm> not at the beginning or end of the <ClLinks  term={"token"}><i>token</i></ClLinks>, then it divides the <ClLinks  term={"token"}><i>token</i></ClLinks> into two parts. The first part specifies a <ClLinks  term={"package"}><i>package</i></ClLinks>; the second part is the name of an <GlossaryTerm styled={true} term={"external symbol"}><i>external symbol</i></GlossaryTerm> available in that package. 



For example, foo:bar, when read, looks up BAR among the <GlossaryTerm styled={true} term={"external symbol"}><i>external symbols</i></GlossaryTerm> of the <ClLinks  term={"package"}><i>package</i></ClLinks> named FOO. 



3\. If there are two adjacent <GlossaryTerm styled={true} term={"package marker"}><i>package markers</i></GlossaryTerm> not at the beginning or end of the <ClLinks  term={"token"}><i>token</i></ClLinks>, then they divide the <ClLinks  term={"token"}><i>token</i></ClLinks> into two parts. The first part specifies a <ClLinks  term={"package"}><i>package</i></ClLinks>; the second part is the name of a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> within that <ClLinks  term={"package"}><i>package</i></ClLinks> (possibly an <GlossaryTerm styled={true} term={"internal symbol"}><i>internal symbol</i></GlossaryTerm>). 



For example, foo::bar, when read, interns BAR in the <ClLinks  term={"package"}><i>package</i></ClLinks> named FOO. 



4\. If the <ClLinks  term={"token"}><i>token</i></ClLinks> contains no <GlossaryTerm styled={true} term={"package marker"}><i>package markers</i></GlossaryTerm>, and does not have <GlossaryTerm styled={true} term={"potential number"}><i>potential number</i></GlossaryTerm> syntax, then the entire <ClLinks  term={"token"}><i>token</i></ClLinks> is the name of the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. The <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is looked up in the <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm>. 



For example, bar, when read, interns BAR in the <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm>.  







5\. The consequences are unspecified if any other pattern of <GlossaryTerm styled={true} term={"package marker"}><i>package markers</i></GlossaryTerm> in a <ClLinks  term={"token"}><i>token</i></ClLinks> is used. All other uses of <GlossaryTerm styled={true} term={"package marker"}><i>package markers</i></GlossaryTerm> within names of <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> are not defined by this standard but are reserved for <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> use. 



For example, assuming the <GlossaryTerm styled={true} term={"readtable case"}><i>readtable case</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"current readtable"}><i>current readtable</i></GlossaryTerm> is :upcase, editor:buffer refers to the <GlossaryTerm styled={true} term={"external symbol"}><i>external symbol</i></GlossaryTerm> named BUFFER present in the <ClLinks  term={"package"}><i>package</i></ClLinks> named editor, regardless of whether there is a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> named BUFFER in the <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm>. If there is no <ClLinks  term={"package"}><i>package</i></ClLinks> named editor, or if 



no <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> named BUFFER is present in editor, or if BUFFER is not exported by editor, the reader signals a correctable error. If editor::buffer is seen, the effect is exactly the same as reading buffer with the EDITOR <ClLinks  term={"package"}><i>package</i></ClLinks> being the <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm>. 




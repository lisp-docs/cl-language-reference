**list** *System Class* 



**Class Precedence List:** 



<DictionaryLink styled={true} term={"list"}><b>list</b></DictionaryLink>, <DictionaryLink styled={true} term={"sequence"}><b>sequence</b></DictionaryLink>, <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



A <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> is a chain of *conses* in which the <GlossaryTerm styled={true} term={"car"}><i>car</i></GlossaryTerm> of each <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm> is an <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>, and the <GlossaryTerm styled={true} term={"cdr"}><i>cdr</i></GlossaryTerm> of each <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm> is either the next link in the chain or a terminating <GlossaryTerm styled={true} term={"atom"}><i>atom</i></GlossaryTerm>. 



A *proper list* is a chain of *conses* terminated by the *empty list*, (), which is itself a *proper list*. A *dotted list* is a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> which has a terminating <GlossaryTerm styled={true} term={"atom"}><i>atom</i></GlossaryTerm> that is not the *empty list*. A *circular list* is a chain of *conses* that has no termination because some <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm> in the chain is the <GlossaryTerm styled={true} term={"cdr"}><i>cdr</i></GlossaryTerm> of a later <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm>. 



*Dotted lists* and *circular lists* are also <GlossaryTerm styled={true} term={"list"}><i>lists</i></GlossaryTerm>, but usually the unqualified term “list” within this specification means *proper list*. Nevertheless, the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"list"}><b>list</b></DictionaryLink> unambiguously includes *dotted lists* and *circular lists*. 



For each <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm> of a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> there is a <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm>. The *empty list* has no <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm> and is not a <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm>. The <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm> <DictionaryLink styled={true} term={"cons"}><b>cons</b></DictionaryLink> and <DictionaryLink styled={true} term={"null"}><b>null</b></DictionaryLink> form an *exhaustive partition* of the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"list"}><b>list</b></DictionaryLink>. 



**See Also:** 



Section 2.4.1 (Left-Parenthesis), Section 22.1.3.5 (Printing Lists and Conses) 




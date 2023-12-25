 



A <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> is a chain of *conses* in which the <GlossaryTerm styled={true} term={"car"}><i>car</i></GlossaryTerm> of each <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm> is an <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>, and the <GlossaryTerm styled={true} term={"cdr"}><i>cdr</i></GlossaryTerm> of each <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm> is either the next link in the chain or a terminating <GlossaryTerm styled={true} term={"atom"}><i>atom</i></GlossaryTerm>. 



A *proper list* is a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> terminated by the *empty list*. The *empty list* is a *proper list*, but is not a <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm>. 



An *improper list* is a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> that is not a *proper list*; that is, it is a *circular list* or a *dotted list*. 



A *dotted list* is a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> that has a terminating <GlossaryTerm styled={true} term={"atom"}><i>atom</i></GlossaryTerm> that is not the *empty list*. A *non-nil atom* by itself is not considered to be a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of any kind—not even a *dotted list*. 



A *circular list* is a chain of *conses* that has no termination because some <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm> in the chain is the <GlossaryTerm styled={true} term={"cdr"}><i>cdr</i></GlossaryTerm> of a later <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm>. 



|<p>**append last nbutlast rest** </p><p>**butlast ldiff nconc revappend copy-alist list ninth second copy-list list\* nreconc seventh eighth list-length nth sixth endp make-list nthcdr tailp** </p><p>**fifth member pop tenth first member-if push third fourth member-if-not pushnew**</p>|

| :- |





**Figure 14–3. Some defined names relating to lists.** 




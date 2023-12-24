 



A <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> is a chain of *conses* in which the <ClLinks styled={true} term={"car"}><i>car</i></ClLinks> of each <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks> is an <ClLinks styled={true} term={"element"}><i>element</i></ClLinks> of the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>, and the <ClLinks styled={true} term={"cdr"}><i>cdr</i></ClLinks> of each <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks> is either the next link in the chain or a terminating <ClLinks styled={true} term={"atom"}><i>atom</i></ClLinks>. 



A *proper list* is a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> terminated by the *empty list*. The *empty list* is a *proper list*, but is not a <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks>. 



An *improper list* is a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> that is not a *proper list*; that is, it is a *circular list* or a *dotted list*. 



A *dotted list* is a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> that has a terminating <ClLinks styled={true} term={"atom"}><i>atom</i></ClLinks> that is not the *empty list*. A *non-nil atom* by itself is not considered to be a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of any kind—not even a *dotted list*. 



A *circular list* is a chain of *conses* that has no termination because some <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks> in the chain is the <ClLinks styled={true} term={"cdr"}><i>cdr</i></ClLinks> of a later <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks>. 



|<p>**append last nbutlast rest** </p><p>**butlast ldiff nconc revappend copy-alist list ninth second copy-list list\* nreconc seventh eighth list-length nth sixth endp make-list nthcdr tailp** </p><p>**fifth member pop tenth first member-if push third fourth member-if-not pushnew**</p>|

| :- |





**Figure 14–3. Some defined names relating to lists.** 




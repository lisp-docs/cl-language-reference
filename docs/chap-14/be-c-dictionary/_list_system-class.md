**list** *System Class* 



**Class Precedence List:** 



<ClLinks styled={true} term={"list"}><b>list</b></ClLinks>, <ClLinks styled={true} term={"sequence"}><b>sequence</b></ClLinks>, <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> 



**Description:** 



A <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> is a chain of *conses* in which the <ClLinks styled={true} term={"car"}><i>car</i></ClLinks> of each <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks> is an <ClLinks styled={true} term={"element"}><i>element</i></ClLinks> of the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>, and the <ClLinks styled={true} term={"cdr"}><i>cdr</i></ClLinks> of each <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks> is either the next link in the chain or a terminating <ClLinks styled={true} term={"atom"}><i>atom</i></ClLinks>. 



A *proper list* is a chain of *conses* terminated by the *empty list*, (), which is itself a *proper list*. A *dotted list* is a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> which has a terminating <ClLinks styled={true} term={"atom"}><i>atom</i></ClLinks> that is not the *empty list*. A *circular list* is a chain of *conses* that has no termination because some <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks> in the chain is the <ClLinks styled={true} term={"cdr"}><i>cdr</i></ClLinks> of a later <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks>. 



*Dotted lists* and *circular lists* are also <ClLinks styled={true} term={"list"}><i>lists</i></ClLinks>, but usually the unqualified term “list” within this specification means *proper list*. Nevertheless, the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"list"}><b>list</b></ClLinks> unambiguously includes *dotted lists* and *circular lists*. 



For each <ClLinks styled={true} term={"element"}><i>element</i></ClLinks> of a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> there is a <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks>. The *empty list* has no <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks> and is not a <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks>. The <ClLinks styled={true} term={"type"}><i>types</i></ClLinks> <ClLinks styled={true} term={"cons"}><b>cons</b></ClLinks> and <ClLinks styled={true} term={"null"}><b>null</b></ClLinks> form an *exhaustive partition* of the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"list"}><b>list</b></ClLinks>. 



**See Also:** 



Section 2.4.1 (Left-Parenthesis), Section 22.1.3.5 (Printing Lists and Conses) 




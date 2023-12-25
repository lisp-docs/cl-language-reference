**apropos, apropos-list** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"apropos"}><b>apropos</b></ClLinks> <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> &amp;optional *package → ⟨no values⟩* 



<ClLinks styled={true} term={"apropos-list"}><b>apropos-list</b></ClLinks> <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> &amp;optional *package → symbols* 



**Arguments and Values:** 



<ClLinks styled={true} term={"string"}><i>string</i></ClLinks>—a *string designator* . 



<ClLinks styled={true} term={"package"}><i>package</i></ClLinks>—a *package designator* or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. The default is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



<ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks>—a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks>. 



**Description:** 



These functions search for *interned symbols* whose <ClLinks styled={true} term={"name"}><i>names</i></ClLinks> contain the substring <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>. 



 



 



For <ClLinks styled={true} term={"apropos"}><b>apropos</b></ClLinks>, as each such <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is found, its name is printed on *standard output*. In addition, if such a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is defined as a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> or *dynamic variable*, information about those definitions might also be printed. 



For <ClLinks styled={true} term={"apropos-list"}><b>apropos-list</b></ClLinks>, no output occurs as the search proceeds; instead a list of the matching <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> is returned when the search is complete. 



If <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> is <ClLinks styled={true} term={"non-nil"}><i>non-nil</i></ClLinks>, only the *symbols accessible* in that <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> are searched; otherwise all *symbols accessible* in any <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> are searched. 



Because a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> might be available by way of more than one inheritance path, <ClLinks styled={true} term={"apropos"}><b>apropos</b></ClLinks> might print information about the *same symbol* more than once, or <ClLinks styled={true} term={"apropos-list"}><b>apropos-list</b></ClLinks> might return a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> containing duplicate <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks>. 



Whether or not the search is case-sensitive is <ClLinks styled={true} term={"implementation-defined"}><i>implementation-defined</i></ClLinks>. 



**Affected By:** 



The set of <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> which are currently <ClLinks styled={true} term={"interned"}><i>interned</i></ClLinks> in any <ClLinks styled={true} term={"package"}><i>packages</i></ClLinks> being searched. 



<ClLinks styled={true} term={"apropos"}><b>apropos</b></ClLinks> is also affected by **\*standard-output\***. 




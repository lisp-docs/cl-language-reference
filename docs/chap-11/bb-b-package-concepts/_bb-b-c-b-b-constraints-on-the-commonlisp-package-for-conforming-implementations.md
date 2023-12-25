 



In a *conforming implementation*, an *external symbol* of the COMMON-LISP <ClLinks  term={"package"}><i>package</i></ClLinks> can have a <ClLinks  term={"function"}><i>function</i></ClLinks>, <ClLinks  term={"macro"}><i>macro</i></ClLinks>, or *special operator* definition, a *global variable* definition (or other status as a *dynamic variable* due to a <ClLinks  term={"special"}><b>special</b></ClLinks> <ClLinks  term={"proclamation"}><i>proclamation</i></ClLinks>), or a <ClLinks  term={"type"}><i>type</i></ClLinks> definition only if explicitly permitted in this standard. For example, <ClLinks  term={"fboundp"}><b>fboundp</b></ClLinks> *yields false* for any *external symbol* of the COMMON-LISP <ClLinks  term={"package"}><i>package</i></ClLinks> that is not the <ClLinks  term={"name"}><i>name</i></ClLinks> of a *standardized function*, *macro* or *special operator* , and <ClLinks  term={"boundp"}><b>boundp</b></ClLinks> returns <ClLinks  term={"false"}><i>false</i></ClLinks> for any *external symbol* of the COMMON-LISP <ClLinks  term={"package"}><i>package</i></ClLinks> that is not the <ClLinks  term={"name"}><i>name</i></ClLinks> of a *standardized global variable*. It also follows that *conforming programs* can use *external symbols* of the COMMON-LISP <ClLinks  term={"package"}><i>package</i></ClLinks> as the <ClLinks  term={"name"}><i>names</i></ClLinks> of local *lexical variables* with confidence that those <ClLinks  term={"name"}><i>names</i></ClLinks> have not been *proclaimed* <ClLinks  term={"special"}><b>special</b></ClLinks> by the <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> unless those <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> are <ClLinks  term={"name"}><i>names</i></ClLinks> of *standardized global variables*. 



A *conforming implementation* must not place any <ClLinks  term={"property"}><i>property</i></ClLinks> on an *external symbol* of the COMMON-LISP <ClLinks  term={"package"}><i>package</i></ClLinks> using a *property indicator* that is either an *external symbol* of any *standardized package* or a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> that is otherwise <ClLinks  term={"accessible"}><i>accessible</i></ClLinks> in the COMMON-LISP-USER <ClLinks  term={"package"}><i>package</i></ClLinks>. 




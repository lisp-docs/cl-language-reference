 



A <ClLinks styled={true} term={"namestring"}><i>namestring</i></ClLinks> is a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> that represents a <ClLinks styled={true} term={"filename"}><i>filename</i></ClLinks>. 



In general, the syntax of <ClLinks styled={true} term={"namestring"}><i>namestrings</i></ClLinks> involves the use of <ClLinks styled={true} term={"implementation-defined"}><i>implementation-defined</i></ClLinks> conventions, usually those customary for the *file system* in which the named <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> resides. The only exception is the syntax of a *logical pathname namestring*, which is defined in this specification; see Section 19.3.1 (Syntax of Logical Pathname Namestrings). 



A *conforming program* must never unconditionally use a *literal namestring* other than a *logical pathname namestring* because Common Lisp does not define any <ClLinks styled={true} term={"namestring"}><i>namestring</i></ClLinks> syntax other than that for *logical pathnames* that would be guaranteed to be portable. However, a *conforming program* can, if it is careful, successfully manipulate user-supplied data which contains or refers to non-portable <ClLinks styled={true} term={"namestring"}><i>namestrings</i></ClLinks>. 



A <ClLinks styled={true} term={"namestring"}><i>namestring</i></ClLinks> can be *coerced* to a <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> by the <ClLinks styled={true} term={"function"}><i>functions</i></ClLinks> <ClLinks styled={true} term={"pathname"}><b>pathname</b></ClLinks> or <ClLinks styled={true} term={"parse-namestring"}><b>parse-namestring</b></ClLinks>.
 
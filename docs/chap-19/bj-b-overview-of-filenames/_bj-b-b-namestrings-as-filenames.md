 



A <ClLinks  term={"namestring"}><i>namestring</i></ClLinks> is a <ClLinks  term={"string"}><i>string</i></ClLinks> that represents a <ClLinks  term={"filename"}><i>filename</i></ClLinks>. 



In general, the syntax of <ClLinks  term={"namestring"}><i>namestrings</i></ClLinks> involves the use of <ClLinks  term={"implementation-defined"}><i>implementation-defined</i></ClLinks> conventions, usually those customary for the <GlossaryTerm styled={true} term={"file system"}><i>file system</i></GlossaryTerm> in which the named <ClLinks  term={"file"}><i>file</i></ClLinks> resides. The only exception is the syntax of a *logical pathname namestring*, which is defined in this specification; see Section 19.3.1 (Syntax of Logical Pathname Namestrings). 



A <GlossaryTerm styled={true} term={"conforming program"}><i>conforming program</i></GlossaryTerm> must never unconditionally use a *literal namestring* other than a *logical pathname namestring* because Common Lisp does not define any <ClLinks  term={"namestring"}><i>namestring</i></ClLinks> syntax other than that for <GlossaryTerm styled={true} term={"logical pathname"}><i>logical pathnames</i></GlossaryTerm> that would be guaranteed to be portable. However, a <GlossaryTerm styled={true} term={"conforming program"}><i>conforming program</i></GlossaryTerm> can, if it is careful, successfully manipulate user-supplied data which contains or refers to non-portable <ClLinks  term={"namestring"}><i>namestrings</i></ClLinks>. 



A <ClLinks  term={"namestring"}><i>namestring</i></ClLinks> can be *coerced* to a <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> by the <ClLinks  term={"function"}><i>functions</i></ClLinks> <ClLinks  term={"pathname"}><b>pathname</b></ClLinks> or <ClLinks  term={"parse-namestring"}><b>parse-namestring</b></ClLinks>.
 
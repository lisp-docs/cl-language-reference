 



A <GlossaryTerm styled={true} term={"namestring"}><i>namestring</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> that represents a <GlossaryTerm styled={true} term={"filename"}><i>filename</i></GlossaryTerm>. 



In general, the syntax of <GlossaryTerm styled={true} term={"namestring"}><i>namestrings</i></GlossaryTerm> involves the use of <GlossaryTerm styled={true} term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm> conventions, usually those customary for the *file system* in which the named <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm> resides. The only exception is the syntax of a *logical pathname namestring*, which is defined in this specification; see Section 19.3.1 (Syntax of Logical Pathname Namestrings). 



A *conforming program* must never unconditionally use a *literal namestring* other than a *logical pathname namestring* because Common Lisp does not define any <GlossaryTerm styled={true} term={"namestring"}><i>namestring</i></GlossaryTerm> syntax other than that for *logical pathnames* that would be guaranteed to be portable. However, a *conforming program* can, if it is careful, successfully manipulate user-supplied data which contains or refers to non-portable <GlossaryTerm styled={true} term={"namestring"}><i>namestrings</i></GlossaryTerm>. 



A <GlossaryTerm styled={true} term={"namestring"}><i>namestring</i></GlossaryTerm> can be *coerced* to a <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> by the <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm> <DictionaryLink styled={true} term={"pathname"}><b>pathname</b></DictionaryLink> or <DictionaryLink styled={true} term={"parse-namestring"}><b>parse-namestring</b></DictionaryLink>.
 
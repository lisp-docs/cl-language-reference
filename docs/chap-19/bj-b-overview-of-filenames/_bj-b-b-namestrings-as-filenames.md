 



A <GlossaryTerm  term={"namestring"}><i>namestring</i></GlossaryTerm> is a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> that represents a <GlossaryTerm  term={"filename"}><i>filename</i></GlossaryTerm>. 



In general, the syntax of <GlossaryTerm  term={"namestring"}><i>namestrings</i></GlossaryTerm> involves the use of <GlossaryTerm  term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm> conventions, usually those customary for the <GlossaryTerm styled={true} term={"file system"}><i>file system</i></GlossaryTerm> in which the named <GlossaryTerm  term={"file"}><i>file</i></GlossaryTerm> resides. The only exception is the syntax of a *logical pathname namestring*, which is defined in this specification; see Section 19.3.1 (Syntax of Logical Pathname Namestrings). 



A <GlossaryTerm styled={true} term={"conforming program"}><i>conforming program</i></GlossaryTerm> must never unconditionally use a *literal namestring* other than a *logical pathname namestring* because Common Lisp does not define any <GlossaryTerm  term={"namestring"}><i>namestring</i></GlossaryTerm> syntax other than that for <GlossaryTerm styled={true} term={"logical pathname"}><i>logical pathnames</i></GlossaryTerm> that would be guaranteed to be portable. However, a <GlossaryTerm styled={true} term={"conforming program"}><i>conforming program</i></GlossaryTerm> can, if it is careful, successfully manipulate user-supplied data which contains or refers to non-portable <GlossaryTerm  term={"namestring"}><i>namestrings</i></GlossaryTerm>. 



A <GlossaryTerm  term={"namestring"}><i>namestring</i></GlossaryTerm> can be *coerced* to a <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> by the <GlossaryTerm  term={"function"}><i>functions</i></GlossaryTerm> <DictionaryLink  term={"pathname"}><b>pathname</b></DictionaryLink> or <DictionaryLink  term={"parse-namestring"}><b>parse-namestring</b></DictionaryLink>.
 
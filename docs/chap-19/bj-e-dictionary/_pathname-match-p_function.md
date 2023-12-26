**pathname-match-p** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"pathname-match-p"}><b>pathname-match-p</b></DictionaryLink> *pathname wildcard → generalized-boolean* 



**Arguments and Values:** 



<GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"pathname designator"}><i>pathname designator</i></GlossaryTerm> . 



*wildcard*—a <GlossaryTerm  term={"designator"}><i>designator</i></GlossaryTerm> for a *wild pathname*. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink  term={"pathname-match-p"}><b>pathname-match-p</b></DictionaryLink> returns true if <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> matches *wildcard*, otherwise <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. The matching rules are <GlossaryTerm  term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm> but should be consistent with <DictionaryLink  term={"directory"}><b>directory</b></DictionaryLink>. Missing components of *wildcard* default to :wild. 



It is valid for <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> to be a wild <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm>; a wildcard field in <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> only matches a wildcard field in *wildcard* (*i.e.*, <DictionaryLink  term={"pathname-match-p"}><b>pathname-match-p</b></DictionaryLink> is not commutative). It is valid for *wildcard* to be a non-wild <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm>. 



**Exceptional Situations:** 



If <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> or *wildcard* is not a <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm>, <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>, or <GlossaryTerm styled={true} term={"stream associated with a file"}><i>stream associated with a file</i></GlossaryTerm> an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> is signaled. 



**See Also:** 



<DictionaryLink  term={"directory"}><b>directory</b></DictionaryLink>, <DictionaryLink  term={"pathname"}><b>pathname</b></DictionaryLink>, <DictionaryLink  term={"logical-pathname"}><b>logical-pathname</b></DictionaryLink>, Section 20.1 (File System Concepts), Section 19.1.2 (Pathnames as Filenames) 







 



 



<DictionaryLink  term={"translate-logical-pathname"}><b>translate-logical-pathname</b></DictionaryLink> 




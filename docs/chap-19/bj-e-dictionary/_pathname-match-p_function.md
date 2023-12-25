**pathname-match-p** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"pathname-match-p"}><b>pathname-match-p</b></DictionaryLink> *pathname wildcard → generalized-boolean* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm>—a *pathname designator* . 



*wildcard*—a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a *wild pathname*. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



<DictionaryLink styled={true} term={"pathname-match-p"}><b>pathname-match-p</b></DictionaryLink> returns true if <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> matches *wildcard*, otherwise <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. The matching rules are <GlossaryTerm styled={true} term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm> but should be consistent with <DictionaryLink styled={true} term={"directory"}><b>directory</b></DictionaryLink>. Missing components of *wildcard* default to :wild. 



It is valid for <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> to be a wild <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm>; a wildcard field in <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> only matches a wildcard field in *wildcard* (*i.e.*, <DictionaryLink styled={true} term={"pathname-match-p"}><b>pathname-match-p</b></DictionaryLink> is not commutative). It is valid for *wildcard* to be a non-wild <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm>. 



**Exceptional Situations:** 



If <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> or *wildcard* is not a <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>, or *stream associated with a file* an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> is signaled. 



**See Also:** 



<DictionaryLink styled={true} term={"directory"}><b>directory</b></DictionaryLink>, <DictionaryLink styled={true} term={"pathname"}><b>pathname</b></DictionaryLink>, <DictionaryLink styled={true} term={"logical-pathname"}><b>logical-pathname</b></DictionaryLink>, Section 20.1 (File System Concepts), Section 19.1.2 (Pathnames as Filenames) 







 



 



<DictionaryLink styled={true} term={"translate-logical-pathname"}><b>translate-logical-pathname</b></DictionaryLink> 




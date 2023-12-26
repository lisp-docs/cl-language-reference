**pathname-match-p** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"pathname-match-p"}><b>pathname-match-p</b></DictionaryLink> *pathname wildcard → generalized-boolean* 



**Arguments and Values:** 



<ClLinks  term={"pathname"}><i>pathname</i></ClLinks>—a <GlossaryTerm styled={true} term={"pathname designator"}><i>pathname designator</i></GlossaryTerm> . 



*wildcard*—a <ClLinks  term={"designator"}><i>designator</i></ClLinks> for a *wild pathname*. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink  term={"pathname-match-p"}><b>pathname-match-p</b></DictionaryLink> returns true if <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> matches *wildcard*, otherwise <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. The matching rules are <ClLinks  term={"implementation-defined"}><i>implementation-defined</i></ClLinks> but should be consistent with <DictionaryLink  term={"directory"}><b>directory</b></DictionaryLink>. Missing components of *wildcard* default to :wild. 



It is valid for <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> to be a wild <ClLinks  term={"pathname"}><i>pathname</i></ClLinks>; a wildcard field in <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> only matches a wildcard field in *wildcard* (*i.e.*, <DictionaryLink  term={"pathname-match-p"}><b>pathname-match-p</b></DictionaryLink> is not commutative). It is valid for *wildcard* to be a non-wild <ClLinks  term={"pathname"}><i>pathname</i></ClLinks>. 



**Exceptional Situations:** 



If <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> or *wildcard* is not a <ClLinks  term={"pathname"}><i>pathname</i></ClLinks>, <ClLinks  term={"string"}><i>string</i></ClLinks>, or <GlossaryTerm styled={true} term={"stream associated with a file"}><i>stream associated with a file</i></GlossaryTerm> an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> is signaled. 



**See Also:** 



<DictionaryLink  term={"directory"}><b>directory</b></DictionaryLink>, <DictionaryLink  term={"pathname"}><b>pathname</b></DictionaryLink>, <DictionaryLink  term={"logical-pathname"}><b>logical-pathname</b></DictionaryLink>, Section 20.1 (File System Concepts), Section 19.1.2 (Pathnames as Filenames) 







 



 



<DictionaryLink  term={"translate-logical-pathname"}><b>translate-logical-pathname</b></DictionaryLink> 




**pathname-match-p** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"pathname-match-p"}><b>pathname-match-p</b></ClLinks> *pathname wildcard → generalized-boolean* 



**Arguments and Values:** 



<ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks>—a *pathname designator* . 



*wildcard*—a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a *wild pathname*. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



<ClLinks styled={true} term={"pathname-match-p"}><b>pathname-match-p</b></ClLinks> returns true if <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> matches *wildcard*, otherwise <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. The matching rules are <ClLinks styled={true} term={"implementation-defined"}><i>implementation-defined</i></ClLinks> but should be consistent with <ClLinks styled={true} term={"directory"}><b>directory</b></ClLinks>. Missing components of *wildcard* default to :wild. 



It is valid for <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> to be a wild <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks>; a wildcard field in <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> only matches a wildcard field in *wildcard* (*i.e.*, <ClLinks styled={true} term={"pathname-match-p"}><b>pathname-match-p</b></ClLinks> is not commutative). It is valid for *wildcard* to be a non-wild <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks>. 



**Exceptional Situations:** 



If <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> or *wildcard* is not a <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks>, <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>, or *stream associated with a file* an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> is signaled. 



**See Also:** 



<ClLinks styled={true} term={"directory"}><b>directory</b></ClLinks>, <ClLinks styled={true} term={"pathname"}><b>pathname</b></ClLinks>, <ClLinks styled={true} term={"logical-pathname"}><b>logical-pathname</b></ClLinks>, Section 20.1 (File System Concepts), Section 19.1.2 (Pathnames as Filenames) 







 



 



<ClLinks styled={true} term={"translate-logical-pathname"}><b>translate-logical-pathname</b></ClLinks> 




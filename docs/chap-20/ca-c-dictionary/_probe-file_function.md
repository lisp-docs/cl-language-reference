**probe-file** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"probe-file"}><b>probe-file</b></DictionaryLink> *pathspec → truename* 



**Arguments and Values:** 



*pathspec*—a *pathname designator* . 







 



 



<GlossaryTerm styled={true} term={"truename"}><i>truename</i></GlossaryTerm>—a *physical pathname* or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



**Description:** 



<DictionaryLink styled={true} term={"probe-file"}><b>probe-file</b></DictionaryLink> tests whether a file exists. 



<DictionaryLink styled={true} term={"probe-file"}><b>probe-file</b></DictionaryLink> returns <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm> if there is no file named *pathspec*, and otherwise returns the <GlossaryTerm styled={true} term={"truename"}><i>truename</i></GlossaryTerm> of *pathspec*. 



If the *pathspec designator* is an open <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>, then <DictionaryLink styled={true} term={"probe-file"}><b>probe-file</b></DictionaryLink> produces the <GlossaryTerm styled={true} term={"truename"}><i>truename</i></GlossaryTerm> of its associated <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm>. If *pathspec* is a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>, whether open or closed, it is coerced to a <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> as if by the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"pathname"}><b>pathname</b></DictionaryLink>. 



**Affected By:** 



The host computer’s file system. 



**Exceptional Situations:** 



An error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"file-error"}><b>file-error</b></DictionaryLink> is signaled if *pathspec* is <GlossaryTerm styled={true} term={"wild"}><i>wild</i></GlossaryTerm>. 



An error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"file-error"}><b>file-error</b></DictionaryLink> is signaled if the *file system* cannot perform the requested operation. 



**See Also:** 



<DictionaryLink styled={true} term={"truename"}><b>truename</b></DictionaryLink>, <DictionaryLink styled={true} term={"open"}><b>open</b></DictionaryLink>, <DictionaryLink styled={true} term={"ensure-directories-exist"}><b>ensure-directories-exist</b></DictionaryLink>, <DictionaryLink styled={true} term={"pathname"}><b>pathname</b></DictionaryLink>, <DictionaryLink styled={true} term={"logical-pathname"}><b>logical-pathname</b></DictionaryLink>, Section 20.1 (File System Concepts), Section 21.1.1.1.2 (Open and Closed Streams), Section 19.1.2 (Pathnames as Filenames) 




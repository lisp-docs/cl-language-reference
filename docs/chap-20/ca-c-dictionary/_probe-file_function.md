**probe-file** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"probe-file"}><b>probe-file</b></DictionaryLink> *pathspec → truename* 



**Arguments and Values:** 



*pathspec*—a <GlossaryTerm styled={true} term={"pathname designator"}><i>pathname designator</i></GlossaryTerm> . 







 



 



<GlossaryTerm  term={"truename"}><i>truename</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"physical pathname"}><i>physical pathname</i></GlossaryTerm> or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



**Description:** 



<DictionaryLink  term={"probe-file"}><b>probe-file</b></DictionaryLink> tests whether a file exists. 



<DictionaryLink  term={"probe-file"}><b>probe-file</b></DictionaryLink> returns <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm> if there is no file named *pathspec*, and otherwise returns the <GlossaryTerm  term={"truename"}><i>truename</i></GlossaryTerm> of *pathspec*. 



If the *pathspec designator* is an open <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>, then <DictionaryLink  term={"probe-file"}><b>probe-file</b></DictionaryLink> produces the <GlossaryTerm  term={"truename"}><i>truename</i></GlossaryTerm> of its associated <GlossaryTerm  term={"file"}><i>file</i></GlossaryTerm>. If *pathspec* is a <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>, whether open or closed, it is coerced to a <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> as if by the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"pathname"}><b>pathname</b></DictionaryLink>. 



**Affected By:** 



The host computer’s file system. 



**Exceptional Situations:** 



An error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"file-error"}><b>file-error</b></DictionaryLink> is signaled if *pathspec* is <GlossaryTerm  term={"wild"}><i>wild</i></GlossaryTerm>. 



An error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"file-error"}><b>file-error</b></DictionaryLink> is signaled if the <GlossaryTerm styled={true} term={"file system"}><i>file system</i></GlossaryTerm> cannot perform the requested operation. 



**See Also:** 



<DictionaryLink  term={"truename"}><b>truename</b></DictionaryLink>, <DictionaryLink  term={"open"}><b>open</b></DictionaryLink>, <DictionaryLink  term={"ensure-directories-exist"}><b>ensure-directories-exist</b></DictionaryLink>, <DictionaryLink  term={"pathname"}><b>pathname</b></DictionaryLink>, <DictionaryLink  term={"logical-pathname"}><b>logical-pathname</b></DictionaryLink>, Section 20.1 (File System Concepts), Section 21.1.1.1.2 (Open and Closed Streams), Section 19.1.2 (Pathnames as Filenames) 




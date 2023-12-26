**probe-file** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"probe-file"}><b>probe-file</b></DictionaryLink> *pathspec → truename* 



**Arguments and Values:** 



*pathspec*—a <GlossaryTerm styled={true} term={"pathname designator"}><i>pathname designator</i></GlossaryTerm> . 







 



 



<ClLinks  term={"truename"}><i>truename</i></ClLinks>—a <GlossaryTerm styled={true} term={"physical pathname"}><i>physical pathname</i></GlossaryTerm> or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



**Description:** 



<DictionaryLink  term={"probe-file"}><b>probe-file</b></DictionaryLink> tests whether a file exists. 



<DictionaryLink  term={"probe-file"}><b>probe-file</b></DictionaryLink> returns <ClLinks  term={"false"}><i>false</i></ClLinks> if there is no file named *pathspec*, and otherwise returns the <ClLinks  term={"truename"}><i>truename</i></ClLinks> of *pathspec*. 



If the *pathspec designator* is an open <ClLinks  term={"stream"}><i>stream</i></ClLinks>, then <DictionaryLink  term={"probe-file"}><b>probe-file</b></DictionaryLink> produces the <ClLinks  term={"truename"}><i>truename</i></ClLinks> of its associated <ClLinks  term={"file"}><i>file</i></ClLinks>. If *pathspec* is a <ClLinks  term={"stream"}><i>stream</i></ClLinks>, whether open or closed, it is coerced to a <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> as if by the <ClLinks  term={"function"}><i>function</i></ClLinks> <DictionaryLink  term={"pathname"}><b>pathname</b></DictionaryLink>. 



**Affected By:** 



The host computer’s file system. 



**Exceptional Situations:** 



An error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"file-error"}><b>file-error</b></DictionaryLink> is signaled if *pathspec* is <ClLinks  term={"wild"}><i>wild</i></ClLinks>. 



An error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"file-error"}><b>file-error</b></DictionaryLink> is signaled if the <GlossaryTerm styled={true} term={"file system"}><i>file system</i></GlossaryTerm> cannot perform the requested operation. 



**See Also:** 



<DictionaryLink  term={"truename"}><b>truename</b></DictionaryLink>, <DictionaryLink  term={"open"}><b>open</b></DictionaryLink>, <DictionaryLink  term={"ensure-directories-exist"}><b>ensure-directories-exist</b></DictionaryLink>, <DictionaryLink  term={"pathname"}><b>pathname</b></DictionaryLink>, <DictionaryLink  term={"logical-pathname"}><b>logical-pathname</b></DictionaryLink>, Section 20.1 (File System Concepts), Section 21.1.1.1.2 (Open and Closed Streams), Section 19.1.2 (Pathnames as Filenames) 




**probe-file** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"probe-file"}><b>probe-file</b></ClLinks> *pathspec → truename* 



**Arguments and Values:** 



*pathspec*—a *pathname designator* . 







 



 



<ClLinks styled={true} term={"truename"}><i>truename</i></ClLinks>—a *physical pathname* or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



**Description:** 



<ClLinks styled={true} term={"probe-file"}><b>probe-file</b></ClLinks> tests whether a file exists. 



<ClLinks styled={true} term={"probe-file"}><b>probe-file</b></ClLinks> returns <ClLinks styled={true} term={"false"}><i>false</i></ClLinks> if there is no file named *pathspec*, and otherwise returns the <ClLinks styled={true} term={"truename"}><i>truename</i></ClLinks> of *pathspec*. 



If the *pathspec designator* is an open <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>, then <ClLinks styled={true} term={"probe-file"}><b>probe-file</b></ClLinks> produces the <ClLinks styled={true} term={"truename"}><i>truename</i></ClLinks> of its associated <ClLinks styled={true} term={"file"}><i>file</i></ClLinks>. If *pathspec* is a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>, whether open or closed, it is coerced to a <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> as if by the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"pathname"}><b>pathname</b></ClLinks>. 



**Affected By:** 



The host computer’s file system. 



**Exceptional Situations:** 



An error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"file-error"}><b>file-error</b></ClLinks> is signaled if *pathspec* is <ClLinks styled={true} term={"wild"}><i>wild</i></ClLinks>. 



An error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"file-error"}><b>file-error</b></ClLinks> is signaled if the *file system* cannot perform the requested operation. 



**See Also:** 



<ClLinks styled={true} term={"truename"}><b>truename</b></ClLinks>, <ClLinks styled={true} term={"open"}><b>open</b></ClLinks>, <ClLinks styled={true} term={"ensure-directories-exist"}><b>ensure-directories-exist</b></ClLinks>, <ClLinks styled={true} term={"pathname"}><b>pathname</b></ClLinks>, <ClLinks styled={true} term={"logical-pathname"}><b>logical-pathname</b></ClLinks>, Section 20.1 (File System Concepts), Section 21.1.1.1.2 (Open and Closed Streams), Section 19.1.2 (Pathnames as Filenames) 




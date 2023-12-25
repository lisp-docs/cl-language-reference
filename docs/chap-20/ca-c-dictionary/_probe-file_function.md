**probe-file** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"probe-file"}><b>probe-file</b></ClLinks> *pathspec → truename* 



**Arguments and Values:** 



*pathspec*—a *pathname designator* . 







 



 



<ClLinks  term={"truename"}><i>truename</i></ClLinks>—a *physical pathname* or <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 



**Description:** 



<ClLinks  term={"probe-file"}><b>probe-file</b></ClLinks> tests whether a file exists. 



<ClLinks  term={"probe-file"}><b>probe-file</b></ClLinks> returns <ClLinks  term={"false"}><i>false</i></ClLinks> if there is no file named *pathspec*, and otherwise returns the <ClLinks  term={"truename"}><i>truename</i></ClLinks> of *pathspec*. 



If the *pathspec designator* is an open <ClLinks  term={"stream"}><i>stream</i></ClLinks>, then <ClLinks  term={"probe-file"}><b>probe-file</b></ClLinks> produces the <ClLinks  term={"truename"}><i>truename</i></ClLinks> of its associated <ClLinks  term={"file"}><i>file</i></ClLinks>. If *pathspec* is a <ClLinks  term={"stream"}><i>stream</i></ClLinks>, whether open or closed, it is coerced to a <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> as if by the <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"pathname"}><b>pathname</b></ClLinks>. 



**Affected By:** 



The host computer’s file system. 



**Exceptional Situations:** 



An error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"file-error"}><b>file-error</b></ClLinks> is signaled if *pathspec* is <ClLinks  term={"wild"}><i>wild</i></ClLinks>. 



An error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"file-error"}><b>file-error</b></ClLinks> is signaled if the *file system* cannot perform the requested operation. 



**See Also:** 



<ClLinks  term={"truename"}><b>truename</b></ClLinks>, <ClLinks  term={"open"}><b>open</b></ClLinks>, <ClLinks  term={"ensure-directories-exist"}><b>ensure-directories-exist</b></ClLinks>, <ClLinks  term={"pathname"}><b>pathname</b></ClLinks>, <ClLinks  term={"logical-pathname"}><b>logical-pathname</b></ClLinks>, Section 20.1 (File System Concepts), Section 21.1.1.1.2 (Open and Closed Streams), Section 19.1.2 (Pathnames as Filenames) 




**directory** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"directory"}><b>directory</b></ClLinks> *pathspec* &amp;key → pathnames 



**Arguments and Values:** 



*pathspec*—a *pathname designator* , which may contain <ClLinks styled={true} term={"wild"}><i>wild</i></ClLinks> components. 



<ClLinks styled={true} term={"pathname"}><i>pathnames</i></ClLinks>—a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of *physical pathnames*. 



**Description:** 



Determines which, if any, <ClLinks styled={true} term={"file"}><i>files</i></ClLinks> that are present in the file system have names matching *pathspec*, and returns a *fresh list* of <ClLinks styled={true} term={"pathname"}><i>pathnames</i></ClLinks> corresponding to the <ClLinks styled={true} term={"truename"}><i>truenames</i></ClLinks> of those <ClLinks styled={true} term={"file"}><i>files</i></ClLinks>. 



An <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> may be extended to accept <ClLinks styled={true} term={"implementation-defined"}><i>implementation-defined</i></ClLinks> keyword arguments to <ClLinks styled={true} term={"directory"}><b>directory</b></ClLinks>. 



**Affected By:** 



The host computer’s file system. 



**Exceptional Situations:** 



If the attempt to obtain a directory listing is not successful, an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"file-error"}><b>file-error</b></ClLinks> is signaled. 



**See Also:** 



<ClLinks styled={true} term={"pathname"}><b>pathname</b></ClLinks>, <ClLinks styled={true} term={"logical-pathname"}><b>logical-pathname</b></ClLinks>, <ClLinks styled={true} term={"ensure-directories-exist"}><b>ensure-directories-exist</b></ClLinks>, Section 20.1 (File System Concepts), Section 21.1.1.1.2 (Open and Closed Streams), Section 19.1.2 (Pathnames as Filenames) 



**Notes:** 



If the *pathspec* is not <ClLinks styled={true} term={"wild"}><i>wild</i></ClLinks>, the resulting list will contain either zero or one elements. 



Common Lisp specifies “&amp;key” in the argument list to <ClLinks styled={true} term={"directory"}><b>directory</b></ClLinks> even though no <ClLinks styled={true} term={"standardized"}><i>standardized</i></ClLinks> keyword arguments to <ClLinks styled={true} term={"directory"}><b>directory</b></ClLinks> are defined. “:allow-other-keys t” may be used in *conforming programs* in order to quietly ignore any additional keywords which are passed by the program but not supported by the <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks>. 




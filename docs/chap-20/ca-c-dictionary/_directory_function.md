**directory** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"directory"}><b>directory</b></ClLinks> *pathspec* &amp;key → pathnames 



**Arguments and Values:** 



*pathspec*—a <GlossaryTerm styled={true} term={"pathname designator"}><i>pathname designator</i></GlossaryTerm> , which may contain <ClLinks  term={"wild"}><i>wild</i></ClLinks> components. 



<ClLinks  term={"pathname"}><i>pathnames</i></ClLinks>—a <ClLinks  term={"list"}><i>list</i></ClLinks> of <GlossaryTerm styled={true} term={"physical pathname"}><i>physical pathnames</i></GlossaryTerm>. 



**Description:** 



Determines which, if any, <ClLinks  term={"file"}><i>files</i></ClLinks> that are present in the file system have names matching *pathspec*, and returns a *fresh list* of <ClLinks  term={"pathname"}><i>pathnames</i></ClLinks> corresponding to the <ClLinks  term={"truename"}><i>truenames</i></ClLinks> of those <ClLinks  term={"file"}><i>files</i></ClLinks>. 



An <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> may be extended to accept <ClLinks  term={"implementation-defined"}><i>implementation-defined</i></ClLinks> keyword arguments to <ClLinks  term={"directory"}><b>directory</b></ClLinks>. 



**Affected By:** 



The host computer’s file system. 



**Exceptional Situations:** 



If the attempt to obtain a directory listing is not successful, an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"file-error"}><b>file-error</b></ClLinks> is signaled. 



**See Also:** 



<ClLinks  term={"pathname"}><b>pathname</b></ClLinks>, <ClLinks  term={"logical-pathname"}><b>logical-pathname</b></ClLinks>, <ClLinks  term={"ensure-directories-exist"}><b>ensure-directories-exist</b></ClLinks>, Section 20.1 (File System Concepts), Section 21.1.1.1.2 (Open and Closed Streams), Section 19.1.2 (Pathnames as Filenames) 



**Notes:** 



If the *pathspec* is not <ClLinks  term={"wild"}><i>wild</i></ClLinks>, the resulting list will contain either zero or one elements. 



Common Lisp specifies “&amp;key” in the argument list to <ClLinks  term={"directory"}><b>directory</b></ClLinks> even though no <ClLinks  term={"standardized"}><i>standardized</i></ClLinks> keyword arguments to <ClLinks  term={"directory"}><b>directory</b></ClLinks> are defined. “:allow-other-keys t” may be used in <GlossaryTerm styled={true} term={"conforming program"}><i>conforming programs</i></GlossaryTerm> in order to quietly ignore any additional keywords which are passed by the program but not supported by the <ClLinks  term={"implementation"}><i>implementation</i></ClLinks>. 




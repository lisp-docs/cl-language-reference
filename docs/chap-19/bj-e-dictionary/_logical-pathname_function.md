**logical-pathname** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"logical-pathname"}><b>logical-pathname</b></ClLinks> *pathspec → logical-pathname* 



**Arguments and Values:** 



*pathspec*—a *logical pathname*, a *logical pathname namestring*, or a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>. 



*logical-pathname*—a *logical pathname*. 



**Description:** 



<ClLinks styled={true} term={"logical-pathname"}><b>logical-pathname</b></ClLinks> converts *pathspec* to a *logical pathname* and returns the new *logical pathname*. If *pathspec* is a *logical pathname namestring*, it should contain a host component and its following <ClLinks styled={true} term={"colon"}><i>colon</i></ClLinks>. If *pathspec* is a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>, it should be one for which <ClLinks styled={true} term={"pathname"}><b>pathname</b></ClLinks> returns a *logical pathname*. 



If *pathspec* is a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>, the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> can be either open or closed. <ClLinks styled={true} term={"logical-pathname"}><b>logical-pathname</b></ClLinks> returns the same *logical pathname* after a file is closed as it did when the file was open. It is an error if *pathspec* is a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> that is created with <ClLinks styled={true} term={"make-two-way-stream"}><b>make-two-way-stream</b></ClLinks>, <ClLinks styled={true} term={"make-echo-stream"}><b>make-echo-stream</b></ClLinks>, <ClLinks styled={true} term={"make-broadcast-stream"}><b>make-broadcast-stream</b></ClLinks>, <ClLinks styled={true} term={"make-concatenated-stream"}><b>make-concatenated-stream</b></ClLinks>, <ClLinks styled={true} term={"make-string-input-stream"}><b>make-string-input-stream</b></ClLinks>, or <ClLinks styled={true} term={"make-string-output-stream"}><b>make-string-output-stream</b></ClLinks>. 



**Exceptional Situations:** 



Signals an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if *pathspec* isn’t supplied correctly. 



**See Also:** 



<ClLinks styled={true} term={"logical-pathname"}><b>logical-pathname</b></ClLinks>, <ClLinks styled={true} term={"translate-logical-pathname"}><b>translate-logical-pathname</b></ClLinks>, Section 19.3 (Logical Pathnames) 



 



 




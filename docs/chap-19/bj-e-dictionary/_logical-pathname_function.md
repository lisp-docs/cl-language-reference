**logical-pathname** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"logical-pathname"}><b>logical-pathname</b></ClLinks> *pathspec → logical-pathname* 



**Arguments and Values:** 



*pathspec*—a <GlossaryTerm styled={true} term={"logical pathname"}><i>logical pathname</i></GlossaryTerm>, a *logical pathname namestring*, or a <ClLinks  term={"stream"}><i>stream</i></ClLinks>. 



*logical-pathname*—a <GlossaryTerm styled={true} term={"logical pathname"}><i>logical pathname</i></GlossaryTerm>. 



**Description:** 



<ClLinks  term={"logical-pathname"}><b>logical-pathname</b></ClLinks> converts *pathspec* to a <GlossaryTerm styled={true} term={"logical pathname"}><i>logical pathname</i></GlossaryTerm> and returns the new <GlossaryTerm styled={true} term={"logical pathname"}><i>logical pathname</i></GlossaryTerm>. If *pathspec* is a *logical pathname namestring*, it should contain a host component and its following <ClLinks  term={"colon"}><i>colon</i></ClLinks>. If *pathspec* is a <ClLinks  term={"stream"}><i>stream</i></ClLinks>, it should be one for which <ClLinks  term={"pathname"}><b>pathname</b></ClLinks> returns a <GlossaryTerm styled={true} term={"logical pathname"}><i>logical pathname</i></GlossaryTerm>. 



If *pathspec* is a <ClLinks  term={"stream"}><i>stream</i></ClLinks>, the <ClLinks  term={"stream"}><i>stream</i></ClLinks> can be either open or closed. <ClLinks  term={"logical-pathname"}><b>logical-pathname</b></ClLinks> returns the same <GlossaryTerm styled={true} term={"logical pathname"}><i>logical pathname</i></GlossaryTerm> after a file is closed as it did when the file was open. It is an error if *pathspec* is a <ClLinks  term={"stream"}><i>stream</i></ClLinks> that is created with <ClLinks  term={"make-two-way-stream"}><b>make-two-way-stream</b></ClLinks>, <ClLinks  term={"make-echo-stream"}><b>make-echo-stream</b></ClLinks>, <ClLinks  term={"make-broadcast-stream"}><b>make-broadcast-stream</b></ClLinks>, <ClLinks  term={"make-concatenated-stream"}><b>make-concatenated-stream</b></ClLinks>, <ClLinks  term={"make-string-input-stream"}><b>make-string-input-stream</b></ClLinks>, or <ClLinks  term={"make-string-output-stream"}><b>make-string-output-stream</b></ClLinks>. 



**Exceptional Situations:** 



Signals an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> if *pathspec* isn’t supplied correctly. 



**See Also:** 



<ClLinks  term={"logical-pathname"}><b>logical-pathname</b></ClLinks>, <ClLinks  term={"translate-logical-pathname"}><b>translate-logical-pathname</b></ClLinks>, Section 19.3 (Logical Pathnames) 



 



 




**logical-pathname** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"logical-pathname"}><b>logical-pathname</b></DictionaryLink> *pathspec → logical-pathname* 



**Arguments and Values:** 



*pathspec*—a *logical pathname*, a *logical pathname namestring*, or a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. 



*logical-pathname*—a *logical pathname*. 



**Description:** 



<DictionaryLink styled={true} term={"logical-pathname"}><b>logical-pathname</b></DictionaryLink> converts *pathspec* to a *logical pathname* and returns the new *logical pathname*. If *pathspec* is a *logical pathname namestring*, it should contain a host component and its following <GlossaryTerm styled={true} term={"colon"}><i>colon</i></GlossaryTerm>. If *pathspec* is a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>, it should be one for which <DictionaryLink styled={true} term={"pathname"}><b>pathname</b></DictionaryLink> returns a *logical pathname*. 



If *pathspec* is a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>, the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> can be either open or closed. <DictionaryLink styled={true} term={"logical-pathname"}><b>logical-pathname</b></DictionaryLink> returns the same *logical pathname* after a file is closed as it did when the file was open. It is an error if *pathspec* is a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> that is created with <DictionaryLink styled={true} term={"make-two-way-stream"}><b>make-two-way-stream</b></DictionaryLink>, <DictionaryLink styled={true} term={"make-echo-stream"}><b>make-echo-stream</b></DictionaryLink>, <DictionaryLink styled={true} term={"make-broadcast-stream"}><b>make-broadcast-stream</b></DictionaryLink>, <DictionaryLink styled={true} term={"make-concatenated-stream"}><b>make-concatenated-stream</b></DictionaryLink>, <DictionaryLink styled={true} term={"make-string-input-stream"}><b>make-string-input-stream</b></DictionaryLink>, or <DictionaryLink styled={true} term={"make-string-output-stream"}><b>make-string-output-stream</b></DictionaryLink>. 



**Exceptional Situations:** 



Signals an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if *pathspec* isn’t supplied correctly. 



**See Also:** 



<DictionaryLink styled={true} term={"logical-pathname"}><b>logical-pathname</b></DictionaryLink>, <DictionaryLink styled={true} term={"translate-logical-pathname"}><b>translate-logical-pathname</b></DictionaryLink>, Section 19.3 (Logical Pathnames) 



 



 




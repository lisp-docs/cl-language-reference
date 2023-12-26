**logical-pathname** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"logical-pathname"}><b>logical-pathname</b></DictionaryLink> *pathspec → logical-pathname* 



**Arguments and Values:** 



*pathspec*—a <GlossaryTerm styled={true} term={"logical pathname"}><i>logical pathname</i></GlossaryTerm>, a *logical pathname namestring*, or a <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>. 



*logical-pathname*—a <GlossaryTerm styled={true} term={"logical pathname"}><i>logical pathname</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink  term={"logical-pathname"}><b>logical-pathname</b></DictionaryLink> converts *pathspec* to a <GlossaryTerm styled={true} term={"logical pathname"}><i>logical pathname</i></GlossaryTerm> and returns the new <GlossaryTerm styled={true} term={"logical pathname"}><i>logical pathname</i></GlossaryTerm>. If *pathspec* is a *logical pathname namestring*, it should contain a host component and its following <GlossaryTerm  term={"colon"}><i>colon</i></GlossaryTerm>. If *pathspec* is a <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>, it should be one for which <DictionaryLink  term={"pathname"}><b>pathname</b></DictionaryLink> returns a <GlossaryTerm styled={true} term={"logical pathname"}><i>logical pathname</i></GlossaryTerm>. 



If *pathspec* is a <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>, the <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> can be either open or closed. <DictionaryLink  term={"logical-pathname"}><b>logical-pathname</b></DictionaryLink> returns the same <GlossaryTerm styled={true} term={"logical pathname"}><i>logical pathname</i></GlossaryTerm> after a file is closed as it did when the file was open. It is an error if *pathspec* is a <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> that is created with <DictionaryLink  term={"make-two-way-stream"}><b>make-two-way-stream</b></DictionaryLink>, <DictionaryLink  term={"make-echo-stream"}><b>make-echo-stream</b></DictionaryLink>, <DictionaryLink  term={"make-broadcast-stream"}><b>make-broadcast-stream</b></DictionaryLink>, <DictionaryLink  term={"make-concatenated-stream"}><b>make-concatenated-stream</b></DictionaryLink>, <DictionaryLink  term={"make-string-input-stream"}><b>make-string-input-stream</b></DictionaryLink>, or <DictionaryLink  term={"make-string-output-stream"}><b>make-string-output-stream</b></DictionaryLink>. 



**Exceptional Situations:** 



Signals an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if *pathspec* isn’t supplied correctly. 



**See Also:** 



<DictionaryLink  term={"logical-pathname"}><b>logical-pathname</b></DictionaryLink>, <DictionaryLink  term={"translate-logical-pathname"}><b>translate-logical-pathname</b></DictionaryLink>, Section 19.3 (Logical Pathnames) 



 



 




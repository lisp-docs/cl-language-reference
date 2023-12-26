**compile-file-pathname** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"compile-file-pathname"}><b>compile-file-pathname</b></ClLinks> *input-file* &amp;key *output-file* &amp;allow-other-keys → pathname 



**Arguments and Values:** 



*input-file*—a <GlossaryTerm styled={true} term={"pathname designator"}><i>pathname designator</i></GlossaryTerm> . (Default fillers for unspecified components are taken from <ClLinks  term={"default-pathname-defaults"}><b>\*default-pathname-defaults\*</b></ClLinks>.) 



*output-file*—a <GlossaryTerm styled={true} term={"pathname designator"}><i>pathname designator</i></GlossaryTerm> . The default is <ClLinks  term={"implementation-defined"}><i>implementation-defined</i></ClLinks>. 



<ClLinks  term={"pathname"}><i>pathname</i></ClLinks>—a <ClLinks  term={"pathname"}><i>pathname</i></ClLinks>. 



**Description:** 



Returns the <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> that <ClLinks  term={"compile-file"}><b>compile-file</b></ClLinks> would write into, if given the same arguments. 



The defaults for the *output-file* are taken from the <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> that results from merging the *input-file* with the <ClLinks  term={"value"}><i>value</i></ClLinks> of <ClLinks  term={"default-pathname-defaults"}><b>\*default-pathname-defaults\*</b></ClLinks>, except that the type component should default to the appropriate <ClLinks  term={"implementation-defined"}><i>implementation-defined</i></ClLinks> default type for <GlossaryTerm styled={true} term={"compiled file"}><i>compiled files</i></GlossaryTerm>. 



If *input-file* is a <GlossaryTerm styled={true} term={"logical pathname"}><i>logical pathname</i></GlossaryTerm> and *output-file* is unsupplied, the result is a <GlossaryTerm styled={true} term={"logical pathname"}><i>logical pathname</i></GlossaryTerm>. If *input-file* is a <GlossaryTerm styled={true} term={"logical pathname"}><i>logical pathname</i></GlossaryTerm>, it is translated into a physical pathname as if by calling <ClLinks  term={"translate-logical-pathname"}><b>translate-logical-pathname</b></ClLinks>. If *input-file* is a <ClLinks  term={"stream"}><i>stream</i></ClLinks>, the <ClLinks  term={"stream"}><i>stream</i></ClLinks> can be either open or closed. <ClLinks  term={"compile-file-pathname"}><b>compile-file-pathname</b></ClLinks> returns the same <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> after a file is closed as it did when the file was open. It is an error if *input-file* is a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> that is created with <ClLinks styled={true} term={"make-two-way-stream"}><b>make-two-way-stream</b></ClLinks>, <ClLinks styled={true} term={"make-echo-stream"}><b>make-echo-stream</b></ClLinks>, <ClLinks styled={true} term={"make-broadcast-stream"}><b>make-broadcast-stream</b></ClLinks>, <ClLinks styled={true} term={"make-concatenated-stream"}><b>make-concatenated-stream</b></ClLinks>, <ClLinks styled={true} term={"make-string-input-stream"}><b>make-string-input-stream</b></ClLinks>, <ClLinks styled={true} term={"make-string-output-stream"}><b>make-string-output-stream</b></ClLinks>. 



If an implementation supports additional keyword arguments to <ClLinks styled={true} term={"compile-file"}><b>compile-file</b></ClLinks>, <ClLinks styled={true} term={"compile-file-pathname"}><b>compile-file-pathname</b></ClLinks> must accept the same arguments. 



**Examples:**
```lisp
See **logical-pathname-translations**. 
```
**Exceptional Situations:** 



An error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"file-error"}><b>file-error</b></ClLinks> might be signaled if either *input-file* or *output-file* is <ClLinks styled={true} term={"wild"}><i>wild</i></ClLinks>. **See Also:** 



System 



 



 



<ClLinks styled={true} term={"compile-file"}><b>compile-file</b></ClLinks>, <ClLinks styled={true} term={"pathname"}><b>pathname</b></ClLinks>, <ClLinks styled={true} term={"logical-pathname"}><b>logical-pathname</b></ClLinks>, Section 20.1 (File System Concepts), Section 19.1.2 (Pathnames as Filenames) 




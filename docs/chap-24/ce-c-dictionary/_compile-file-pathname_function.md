**compile-file-pathname** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"compile-file-pathname"}><b>compile-file-pathname</b></DictionaryLink> *input-file* &amp;key *output-file* &amp;allow-other-keys *→ pathname* 



**Arguments and Values:** 



*input-file*—a *pathname designator* . (Default fillers for unspecified components are taken from <DictionaryLink styled={true} term={"default-pathname-defaults"}><b>\*default-pathname-defaults\*</b></DictionaryLink>.) 



*output-file*—a *pathname designator* . The default is <GlossaryTerm styled={true} term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm>. 



**Description:** 



Returns the <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> that <DictionaryLink styled={true} term={"compile-file"}><b>compile-file</b></DictionaryLink> would write into, if given the same arguments. 



The defaults for the *output-file* are taken from the <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> that results from merging the *input-file* with the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"default-pathname-defaults"}><b>\*default-pathname-defaults\*</b></DictionaryLink>, except that the type component should default to the appropriate <GlossaryTerm styled={true} term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm> default type for *compiled files*. 



If *input-file* is a *logical pathname* and *output-file* is unsupplied, the result is a *logical pathname*. If *input-file* is a *logical pathname*, it is translated into a physical pathname as if by calling <DictionaryLink styled={true} term={"translate-logical-pathname"}><b>translate-logical-pathname</b></DictionaryLink>. If *input-file* is a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>, the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> can be either open or closed. <DictionaryLink styled={true} term={"compile-file-pathname"}><b>compile-file-pathname</b></DictionaryLink> returns the same <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> after a file is closed as it did when the file was open. It is an error if *input-file* is a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> that is created with <DictionaryLink styled={true} term={"make-two-way-stream"}><b>make-two-way-stream</b></DictionaryLink>, <DictionaryLink styled={true} term={"make-echo-stream"}><b>make-echo-stream</b></DictionaryLink>, <DictionaryLink styled={true} term={"make-broadcast-stream"}><b>make-broadcast-stream</b></DictionaryLink>, <DictionaryLink styled={true} term={"make-concatenated-stream"}><b>make-concatenated-stream</b></DictionaryLink>, <DictionaryLink styled={true} term={"make-string-input-stream"}><b>make-string-input-stream</b></DictionaryLink>, <DictionaryLink styled={true} term={"make-string-output-stream"}><b>make-string-output-stream</b></DictionaryLink>. 



If an implementation supports additional keyword arguments to <DictionaryLink styled={true} term={"compile-file"}><b>compile-file</b></DictionaryLink>, <DictionaryLink styled={true} term={"compile-file-pathname"}><b>compile-file-pathname</b></DictionaryLink> must accept the same arguments. 



**Examples:**
```lisp

See **logical-pathname-translations**. 

```
**Exceptional Situations:** 



An error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"file-error"}><b>file-error</b></DictionaryLink> might be signaled if either *input-file* or *output-file* is <GlossaryTerm styled={true} term={"wild"}><i>wild</i></GlossaryTerm>. **See Also:** 



System 



 



 



<DictionaryLink styled={true} term={"compile-file"}><b>compile-file</b></DictionaryLink>, <DictionaryLink styled={true} term={"pathname"}><b>pathname</b></DictionaryLink>, <DictionaryLink styled={true} term={"logical-pathname"}><b>logical-pathname</b></DictionaryLink>, Section 20.1 (File System Concepts), Section 19.1.2 (Pathnames as Filenames) 




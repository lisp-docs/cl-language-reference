**translate-logical-pathname** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"translate-logical-pathname"}><b>translate-logical-pathname</b></DictionaryLink> <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> &amp;key *→ physical-pathname* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm>—a *pathname designator* , or a *logical pathname namestring*. 



*physical-pathname*—a *physical pathname*. 



**Description:** 



Translates <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> to a *physical pathname*, which it returns. 



If <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>, the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> can be either open or closed. <DictionaryLink styled={true} term={"translate-logical-pathname"}><b>translate-logical-pathname</b></DictionaryLink> returns the same physical pathname after a file is closed as it did when the file was open. It is an er ror if <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> that is created with <DictionaryLink styled={true} term={"make-two-way-stream"}><b>make-two-way-stream</b></DictionaryLink>, <DictionaryLink styled={true} term={"make-echo-stream"}><b>make-echo-stream</b></DictionaryLink>, <DictionaryLink styled={true} term={"make-broadcast-stream"}><b>make-broadcast-stream</b></DictionaryLink>, <DictionaryLink styled={true} term={"make-concatenated-stream"}><b>make-concatenated-stream</b></DictionaryLink>, <DictionaryLink styled={true} term={"make-string-input-stream"}><b>make-string-input-stream</b></DictionaryLink>, <DictionaryLink styled={true} term={"make-string-output-stream"}><b>make-string-output-stream</b></DictionaryLink>. 



If <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> is a *logical pathname* namestring, the host portion of the *logical pathname* namestring and its following <GlossaryTerm styled={true} term={"colon"}><i>colon</i></GlossaryTerm> are required. 



<GlossaryTerm styled={true} term={"pathname"}><i>Pathname</i></GlossaryTerm> is first coerced to a <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm>. If the coerced <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> is a physical pathname, it is returned. If the coerced <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> is a *logical pathname*, the first matching translation (according to <DictionaryLink styled={true} term={"pathname-match-p"}><b>pathname-match-p</b></DictionaryLink>) of the *logical pathname* host is applied, as if by calling <DictionaryLink styled={true} term={"translate-pathname"}><b>translate-pathname</b></DictionaryLink>. If the result is a *logical pathname*, this process is repeated. When the result is finally a physical pathname, it is returned. If no translation matches, an error is signaled. 



<DictionaryLink styled={true} term={"translate-logical-pathname"}><b>translate-logical-pathname</b></DictionaryLink> might perform additional translations, typically to provide translation of file types to local naming conventions, to accomodate physical file systems with limited length names, or to deal with special character requirements such as translating hyphens to underscores or uppercase letters to lowercase. Any such additional translations are <GlossaryTerm styled={true} term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm>. Some implementations do no additional translations. 



There are no specified keyword arguments for <DictionaryLink styled={true} term={"translate-logical-pathname"}><b>translate-logical-pathname</b></DictionaryLink>, but implementations are permitted to extend it by adding keyword arguments. 



**Examples:**
```lisp

See **logical-pathname-translations**. 

```
**Exceptional Situations:** 



If <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> is incorrectly supplied, an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> is signaled. 



If no translation matches, an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"file-error"}><b>file-error</b></DictionaryLink> is signaled. 







 



 



**See Also:** 



<DictionaryLink styled={true} term={"logical-pathname"}><b>logical-pathname</b></DictionaryLink>, <DictionaryLink styled={true} term={"logical-pathname-translations"}><b>logical-pathname-translations</b></DictionaryLink>, <DictionaryLink styled={true} term={"logical-pathname"}><b>logical-pathname</b></DictionaryLink>, Section 20.1 (File System Concepts), Section 19.1.2 (Pathnames as Filenames) 




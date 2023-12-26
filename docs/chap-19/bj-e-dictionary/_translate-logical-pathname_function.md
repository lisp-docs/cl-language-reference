**translate-logical-pathname** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"translate-logical-pathname"}><b>translate-logical-pathname</b></DictionaryLink> <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> &amp;key → physical-pathname 



**Arguments and Values:** 



<GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"pathname designator"}><i>pathname designator</i></GlossaryTerm> , or a *logical pathname namestring*. 



*physical-pathname*—a <GlossaryTerm styled={true} term={"physical pathname"}><i>physical pathname</i></GlossaryTerm>. 



**Description:** 



Translates <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> to a <GlossaryTerm styled={true} term={"physical pathname"}><i>physical pathname</i></GlossaryTerm>, which it returns. 



If <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> is a <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>, the <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> can be either open or closed. <DictionaryLink  term={"translate-logical-pathname"}><b>translate-logical-pathname</b></DictionaryLink> returns the same physical pathname after a file is closed as it did when the file was open. It is an er ror if <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> is a <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> that is created with <DictionaryLink  term={"make-two-way-stream"}><b>make-two-way-stream</b></DictionaryLink>, <DictionaryLink  term={"make-echo-stream"}><b>make-echo-stream</b></DictionaryLink>, <DictionaryLink  term={"make-broadcast-stream"}><b>make-broadcast-stream</b></DictionaryLink>, <DictionaryLink  term={"make-concatenated-stream"}><b>make-concatenated-stream</b></DictionaryLink>, <DictionaryLink  term={"make-string-input-stream"}><b>make-string-input-stream</b></DictionaryLink>, <DictionaryLink  term={"make-string-output-stream"}><b>make-string-output-stream</b></DictionaryLink>. 



If <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"logical pathname"}><i>logical pathname</i></GlossaryTerm> namestring, the host portion of the <GlossaryTerm styled={true} term={"logical pathname"}><i>logical pathname</i></GlossaryTerm> namestring and its following <GlossaryTerm  term={"colon"}><i>colon</i></GlossaryTerm> are required. 



<GlossaryTerm  term={"pathname"}><i>Pathname</i></GlossaryTerm> is first coerced to a <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm>. If the coerced <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> is a physical pathname, it is returned. If the coerced <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"logical pathname"}><i>logical pathname</i></GlossaryTerm>, the first matching translation (according to <DictionaryLink  term={"pathname-match-p"}><b>pathname-match-p</b></DictionaryLink>) of the <GlossaryTerm styled={true} term={"logical pathname"}><i>logical pathname</i></GlossaryTerm> host is applied, as if by calling <DictionaryLink  term={"translate-pathname"}><b>translate-pathname</b></DictionaryLink>. If the result is a <GlossaryTerm styled={true} term={"logical pathname"}><i>logical pathname</i></GlossaryTerm>, this process is repeated. When the result is finally a physical pathname, it is returned. If no translation matches, an error is signaled. 



<DictionaryLink  term={"translate-logical-pathname"}><b>translate-logical-pathname</b></DictionaryLink> might perform additional translations, typically to provide translation of file types to local naming conventions, to accomodate physical file systems with limited length names, or to deal with special character requirements such as translating hyphens to underscores or uppercase letters to lowercase. Any such additional translations are <GlossaryTerm  term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm>. Some implementations do no additional translations. 



There are no specified keyword arguments for <DictionaryLink  term={"translate-logical-pathname"}><b>translate-logical-pathname</b></DictionaryLink>, but implementations are permitted to extend it by adding keyword arguments. 



**Examples:**
```lisp
See **logical-pathname-translations**. 
```
**Exceptional Situations:** 



If <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> is incorrectly supplied, an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> is signaled. 



If no translation matches, an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"file-error"}><b>file-error</b></DictionaryLink> is signaled. 







 



 



**See Also:** 



<DictionaryLink  term={"logical-pathname"}><b>logical-pathname</b></DictionaryLink>, <DictionaryLink  term={"logical-pathname-translations"}><b>logical-pathname-translations</b></DictionaryLink>, <DictionaryLink  term={"logical-pathname"}><b>logical-pathname</b></DictionaryLink>, Section 20.1 (File System Concepts), Section 19.1.2 (Pathnames as Filenames) 




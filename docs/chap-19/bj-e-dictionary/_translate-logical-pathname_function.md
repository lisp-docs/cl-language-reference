**translate-logical-pathname** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"translate-logical-pathname"}><b>translate-logical-pathname</b></ClLinks> <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> &amp;key → physical-pathname 



**Arguments and Values:** 



<ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks>—a *pathname designator* , or a *logical pathname namestring*. 



*physical-pathname*—a *physical pathname*. 



**Description:** 



Translates <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> to a *physical pathname*, which it returns. 



If <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> is a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>, the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> can be either open or closed. <ClLinks styled={true} term={"translate-logical-pathname"}><b>translate-logical-pathname</b></ClLinks> returns the same physical pathname after a file is closed as it did when the file was open. It is an er ror if <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> is a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> that is created with <ClLinks styled={true} term={"make-two-way-stream"}><b>make-two-way-stream</b></ClLinks>, <ClLinks styled={true} term={"make-echo-stream"}><b>make-echo-stream</b></ClLinks>, <ClLinks styled={true} term={"make-broadcast-stream"}><b>make-broadcast-stream</b></ClLinks>, <ClLinks styled={true} term={"make-concatenated-stream"}><b>make-concatenated-stream</b></ClLinks>, <ClLinks styled={true} term={"make-string-input-stream"}><b>make-string-input-stream</b></ClLinks>, <ClLinks styled={true} term={"make-string-output-stream"}><b>make-string-output-stream</b></ClLinks>. 



If <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> is a *logical pathname* namestring, the host portion of the *logical pathname* namestring and its following <ClLinks styled={true} term={"colon"}><i>colon</i></ClLinks> are required. 



<ClLinks styled={true} term={"pathname"}><i>Pathname</i></ClLinks> is first coerced to a <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks>. If the coerced <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> is a physical pathname, it is returned. If the coerced <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> is a *logical pathname*, the first matching translation (according to <ClLinks styled={true} term={"pathname-match-p"}><b>pathname-match-p</b></ClLinks>) of the *logical pathname* host is applied, as if by calling <ClLinks styled={true} term={"translate-pathname"}><b>translate-pathname</b></ClLinks>. If the result is a *logical pathname*, this process is repeated. When the result is finally a physical pathname, it is returned. If no translation matches, an error is signaled. 



<ClLinks styled={true} term={"translate-logical-pathname"}><b>translate-logical-pathname</b></ClLinks> might perform additional translations, typically to provide translation of file types to local naming conventions, to accomodate physical file systems with limited length names, or to deal with special character requirements such as translating hyphens to underscores or uppercase letters to lowercase. Any such additional translations are <ClLinks styled={true} term={"implementation-defined"}><i>implementation-defined</i></ClLinks>. Some implementations do no additional translations. 



There are no specified keyword arguments for <ClLinks styled={true} term={"translate-logical-pathname"}><b>translate-logical-pathname</b></ClLinks>, but implementations are permitted to extend it by adding keyword arguments. 



**Examples:**
```lisp
See **logical-pathname-translations**. 
```
**Exceptional Situations:** 



If <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> is incorrectly supplied, an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> is signaled. 



If no translation matches, an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"file-error"}><b>file-error</b></ClLinks> is signaled. 







 



 



**See Also:** 



<ClLinks styled={true} term={"logical-pathname"}><b>logical-pathname</b></ClLinks>, <ClLinks styled={true} term={"logical-pathname-translations"}><b>logical-pathname-translations</b></ClLinks>, <ClLinks styled={true} term={"logical-pathname"}><b>logical-pathname</b></ClLinks>, Section 20.1 (File System Concepts), Section 19.1.2 (Pathnames as Filenames) 




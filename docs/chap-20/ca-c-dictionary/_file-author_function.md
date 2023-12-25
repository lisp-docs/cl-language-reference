**file-author** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"file-author"}><b>file-author</b></DictionaryLink> *pathspec → author* 



**Arguments and Values:** 



*pathspec*—a *pathname designator* . 



*author*—a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 







 



 



**Description:** 



Returns a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> naming the author of the <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm> specified by *pathspec*, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> if the author’s name cannot be determined. 



**Examples:**
```lisp

(with-open-file (stream ">relativity>general.text") 
  (file-author s)) 
*→* "albert" 

```
**Affected By:** 



The host computer’s file system. 



Other users of the <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm> named by *pathspec*. 



**Exceptional Situations:** 



An error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"file-error"}><b>file-error</b></DictionaryLink> is signaled if *pathspec* is <GlossaryTerm styled={true} term={"wild"}><i>wild</i></GlossaryTerm>. 



An error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"file-error"}><b>file-error</b></DictionaryLink> is signaled if the *file system* cannot perform the requested operation. 



**See Also:** 



<DictionaryLink styled={true} term={"pathname"}><b>pathname</b></DictionaryLink>, <DictionaryLink styled={true} term={"logical-pathname"}><b>logical-pathname</b></DictionaryLink>, Section 20.1 (File System Concepts), Section 19.1.2 (Pathnames as Filenames) 




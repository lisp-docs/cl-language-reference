**file-author** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"file-author"}><b>file-author</b></DictionaryLink> *pathspec → author* 



**Arguments and Values:** 



*pathspec*—a <GlossaryTerm styled={true} term={"pathname designator"}><i>pathname designator</i></GlossaryTerm> . 



*author*—a <ClLinks  term={"string"}><i>string</i></ClLinks> or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 







 



 



**Description:** 



Returns a <ClLinks  term={"string"}><i>string</i></ClLinks> naming the author of the <ClLinks  term={"file"}><i>file</i></ClLinks> specified by *pathspec*, or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> if the author’s name cannot be determined. 



**Examples:**
```lisp
(with-open-file (stream ">relativity>general.text") 
  (file-author s)) 
→ "albert" 
```
**Affected By:** 



The host computer’s file system. 



Other users of the <ClLinks  term={"file"}><i>file</i></ClLinks> named by *pathspec*. 



**Exceptional Situations:** 



An error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"file-error"}><b>file-error</b></DictionaryLink> is signaled if *pathspec* is <ClLinks  term={"wild"}><i>wild</i></ClLinks>. 



An error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"file-error"}><b>file-error</b></DictionaryLink> is signaled if the <GlossaryTerm styled={true} term={"file system"}><i>file system</i></GlossaryTerm> cannot perform the requested operation. 



**See Also:** 



<DictionaryLink  term={"pathname"}><b>pathname</b></DictionaryLink>, <DictionaryLink  term={"logical-pathname"}><b>logical-pathname</b></DictionaryLink>, Section 20.1 (File System Concepts), Section 19.1.2 (Pathnames as Filenames) 




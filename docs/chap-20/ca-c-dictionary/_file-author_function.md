**file-author** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"file-author"}><b>file-author</b></DictionaryLink> *pathspec → author* 



**Arguments and Values:** 



*pathspec*—a <GlossaryTerm styled={true} term={"pathname designator"}><i>pathname designator</i></GlossaryTerm> . 



*author*—a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 







 



 



**Description:** 



Returns a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> naming the author of the <GlossaryTerm  term={"file"}><i>file</i></GlossaryTerm> specified by *pathspec*, or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> if the author’s name cannot be determined. 



**Examples:**
```lisp
(with-open-file (stream ">relativity>general.text") 
  (file-author s)) 
→ "albert" 
```
**Affected By:** 



The host computer’s file system. 



Other users of the <GlossaryTerm  term={"file"}><i>file</i></GlossaryTerm> named by *pathspec*. 



**Exceptional Situations:** 



An error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"file-error"}><b>file-error</b></DictionaryLink> is signaled if *pathspec* is <GlossaryTerm  term={"wild"}><i>wild</i></GlossaryTerm>. 



An error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"file-error"}><b>file-error</b></DictionaryLink> is signaled if the <GlossaryTerm styled={true} term={"file system"}><i>file system</i></GlossaryTerm> cannot perform the requested operation. 



**See Also:** 



<DictionaryLink  term={"pathname"}><b>pathname</b></DictionaryLink>, <DictionaryLink  term={"logical-pathname"}><b>logical-pathname</b></DictionaryLink>, Section 20.1 (File System Concepts), Section 19.1.2 (Pathnames as Filenames) 




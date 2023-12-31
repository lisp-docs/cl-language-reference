**delete-file** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"delete-file"}><b>delete-file</b></DictionaryLink> *filespec →* <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> 



**Arguments and Values:** 



*filespec*—a <GlossaryTerm styled={true} term={"pathname designator"}><i>pathname designator</i></GlossaryTerm> . 



**Description:** 



Deletes the <GlossaryTerm  term={"file"}><i>file</i></GlossaryTerm> specified by *filespec*. 



If the *filespec designator* is an open <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>, then *filespec* and the file associated with it are affected (if the file system permits), in which case *filespec* might be closed immediately, and the deletion 







 



 



might be immediate or delayed until *filespec* is explicitly closed, depending on the requirements of the file system. 



It is <GlossaryTerm  term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> whether an attempt to delete a nonexistent file is considered to be successful. 



<DictionaryLink  term={"delete-file"}><b>delete-file</b></DictionaryLink> returns <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> if it succeeds, or signals an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"file-error"}><b>file-error</b></DictionaryLink> if it does not. 



The consequences are undefined if *filespec* has a <GlossaryTerm  term={"wild"}><i>wild</i></GlossaryTerm> component, or if *filespec* has a <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> component and the file system does not permit a <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> component. 



**Examples:**
```lisp
(with-open-file (s "delete-me.text" :direction :output :if-exists :error)) 
→ NIL 
(setq p (probe-file "delete-me.text")) → #P"R:>fred>delete-me.text.1" 
(delete-file p) → T 
(probe-file "delete-me.text") → false 
(with-open-file (s "delete-me.text" :direction :output :if-exists :error) 
  (delete-file s)) 
→ T 
(probe-file "delete-me.text") → false 
```
**Exceptional Situations:** 



If the deletion operation is not successful, an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"file-error"}><b>file-error</b></DictionaryLink> is signaled. 



An error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"file-error"}><b>file-error</b></DictionaryLink> might be signaled if *filespec* is <GlossaryTerm  term={"wild"}><i>wild</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink  term={"pathname"}><b>pathname</b></DictionaryLink>, <DictionaryLink  term={"logical-pathname"}><b>logical-pathname</b></DictionaryLink>, Section 20.1 (File System Concepts), Section 19.1.2 (Pathnames as Filenames) 




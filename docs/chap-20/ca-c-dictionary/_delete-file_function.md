**delete-file** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"delete-file"}><b>delete-file</b></ClLinks> *filespec →* <ClLinks  term={"t"}><b>t</b></ClLinks> 



**Arguments and Values:** 



*filespec*—a *pathname designator* . 



**Description:** 



Deletes the <ClLinks  term={"file"}><i>file</i></ClLinks> specified by *filespec*. 



If the *filespec designator* is an open <ClLinks  term={"stream"}><i>stream</i></ClLinks>, then *filespec* and the file associated with it are affected (if the file system permits), in which case *filespec* might be closed immediately, and the deletion 







 



 



might be immediate or delayed until *filespec* is explicitly closed, depending on the requirements of the file system. 



It is <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> whether an attempt to delete a nonexistent file is considered to be successful. 



<ClLinks  term={"delete-file"}><b>delete-file</b></ClLinks> returns <ClLinks  term={"true"}><i>true</i></ClLinks> if it succeeds, or signals an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"file-error"}><b>file-error</b></ClLinks> if it does not. 



The consequences are undefined if *filespec* has a <ClLinks  term={"wild"}><i>wild</i></ClLinks> component, or if *filespec* has a <ClLinks  term={"nil"}><b>nil</b></ClLinks> component and the file system does not permit a <ClLinks  term={"nil"}><b>nil</b></ClLinks> component. 



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



If the deletion operation is not successful, an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"file-error"}><b>file-error</b></ClLinks> is signaled. 



An error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"file-error"}><b>file-error</b></ClLinks> might be signaled if *filespec* is <ClLinks  term={"wild"}><i>wild</i></ClLinks>. 



**See Also:** 



<ClLinks  term={"pathname"}><b>pathname</b></ClLinks>, <ClLinks  term={"logical-pathname"}><b>logical-pathname</b></ClLinks>, Section 20.1 (File System Concepts), Section 19.1.2 (Pathnames as Filenames) 




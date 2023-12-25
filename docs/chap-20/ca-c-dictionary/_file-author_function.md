**file-author** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"file-author"}><b>file-author</b></ClLinks> *pathspec → author* 



**Arguments and Values:** 



*pathspec*—a *pathname designator* . 



*author*—a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 







 



 



**Description:** 



Returns a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> naming the author of the <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> specified by *pathspec*, or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> if the author’s name cannot be determined. 



**Examples:**
```lisp
(with-open-file (stream ">relativity>general.text") 
  (file-author s)) 
→ "albert" 
```
**Affected By:** 



The host computer’s file system. 



Other users of the <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> named by *pathspec*. 



**Exceptional Situations:** 



An error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"file-error"}><b>file-error</b></ClLinks> is signaled if *pathspec* is <ClLinks styled={true} term={"wild"}><i>wild</i></ClLinks>. 



An error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"file-error"}><b>file-error</b></ClLinks> is signaled if the *file system* cannot perform the requested operation. 



**See Also:** 



<ClLinks styled={true} term={"pathname"}><b>pathname</b></ClLinks>, <ClLinks styled={true} term={"logical-pathname"}><b>logical-pathname</b></ClLinks>, Section 20.1 (File System Concepts), Section 19.1.2 (Pathnames as Filenames) 




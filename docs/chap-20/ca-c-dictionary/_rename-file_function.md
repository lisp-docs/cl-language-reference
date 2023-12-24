**rename-file** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"rename-file"}><b>rename-file</b></ClLinks> *filespec new-name → defaulted-new-name, old-truename, new-truename* 



**Arguments and Values:** 



*filespec*—a *pathname designator* . 



*new-name*—a *pathname designator* other than a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>. 



*defaulted-new-name*—a <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> 



*old-truename*—a *physical pathname*. 



*new-truename*—a *physical pathname*. 



**Description:** 



<ClLinks styled={true} term={"rename-file"}><b>rename-file</b></ClLinks> modifies the file system in such a way that the file indicated by *filespec* is renamed to *defaulted-new-name*. 



It is an error to specify a filename containing a <ClLinks styled={true} term={"wild"}><i>wild</i></ClLinks> component, for *filespec* to contain a <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> component where the file system does not permit a <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> component, or for the result of defaulting missing components of *new-name* from *filespec* to contain a <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> component where the file system does not permit a <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> component. 



If *new-name* is a *logical pathname*, <ClLinks styled={true} term={"rename-file"}><b>rename-file</b></ClLinks> returns a *logical pathname* as its *primary value*. 



 



 



<ClLinks styled={true} term={"rename-file"}><b>rename-file</b></ClLinks> returns three values if successful. The *primary value*, *defaulted-new-name*, is the resulting name which is composed of *new-name* with any missing components filled in by performing a <ClLinks styled={true} term={"merge-pathnames"}><b>merge-pathnames</b></ClLinks> operation using *filespec* as the defaults. The *secondary value*, *old-truename*, is the <ClLinks styled={true} term={"truename"}><i>truename</i></ClLinks> of the <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> before it was renamed. The *tertiary value*, *new-truename*, is the <ClLinks styled={true} term={"truename"}><i>truename</i></ClLinks> of the <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> after it was renamed. 



If the *filespec designator* is an open <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>, then the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> itself and the file associated with it are affected (if the *file system* permits). 



**Examples:**
```lisp

;; An example involving logical pathnames. 
(with-open-file (stream "sys:chemistry;lead.text" 
			:direction :output :if-exists :error) 
  (princ "eureka" stream) 
  (values (pathname stream) (truename stream))) 
→ #P"SYS:CHEMISTRY;LEAD.TEXT.NEWEST", #P"Q:>sys>chem>lead.text.1" 
(rename-file "sys:chemistry;lead.text" "gold.text") 
→ #P"SYS:CHEMISTRY;GOLD.TEXT.NEWEST", 
#P"Q:>sys>chem>lead.text.1", 
#P"Q:>sys>chem>gold.text.1" 

```
**Exceptional Situations:** 



If the renaming operation is not successful, an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"file-error"}><b>file-error</b></ClLinks> is signaled. 



An error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"file-error"}><b>file-error</b></ClLinks> might be signaled if *filespec* is <ClLinks styled={true} term={"wild"}><i>wild</i></ClLinks>. 



**See Also:** 



<ClLinks styled={true} term={"truename"}><b>truename</b></ClLinks>, <ClLinks styled={true} term={"pathname"}><b>pathname</b></ClLinks>, <ClLinks styled={true} term={"logical-pathname"}><b>logical-pathname</b></ClLinks>, Section 20.1 (File System Concepts), Section 19.1.2 (Pathnames as Filenames) 




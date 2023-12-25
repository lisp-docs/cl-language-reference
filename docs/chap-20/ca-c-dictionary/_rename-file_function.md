**rename-file** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"rename-file"}><b>rename-file</b></DictionaryLink> *filespec new-name → defaulted-new-name, old-truename, new-truename* 



**Arguments and Values:** 



*filespec*—a *pathname designator* . 



*new-name*—a *pathname designator* other than a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. 



*defaulted-new-name*—a <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> 



*old-truename*—a *physical pathname*. 



*new-truename*—a *physical pathname*. 



**Description:** 



<DictionaryLink styled={true} term={"rename-file"}><b>rename-file</b></DictionaryLink> modifies the file system in such a way that the file indicated by *filespec* is renamed to *defaulted-new-name*. 



It is an error to specify a filename containing a <GlossaryTerm styled={true} term={"wild"}><i>wild</i></GlossaryTerm> component, for *filespec* to contain a <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> component where the file system does not permit a <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> component, or for the result of defaulting missing components of *new-name* from *filespec* to contain a <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> component where the file system does not permit a <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> component. 



If *new-name* is a *logical pathname*, <DictionaryLink styled={true} term={"rename-file"}><b>rename-file</b></DictionaryLink> returns a *logical pathname* as its *primary value*. 



 



 



<DictionaryLink styled={true} term={"rename-file"}><b>rename-file</b></DictionaryLink> returns three values if successful. The *primary value*, *defaulted-new-name*, is the resulting name which is composed of *new-name* with any missing components filled in by performing a <DictionaryLink styled={true} term={"merge-pathnames"}><b>merge-pathnames</b></DictionaryLink> operation using *filespec* as the defaults. The *secondary value*, *old-truename*, is the <GlossaryTerm styled={true} term={"truename"}><i>truename</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm> before it was renamed. The *tertiary value*, *new-truename*, is the <GlossaryTerm styled={true} term={"truename"}><i>truename</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm> after it was renamed. 



If the *filespec designator* is an open <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>, then the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> itself and the file associated with it are affected (if the *file system* permits). 



**Examples:**
```lisp

;; An example involving logical pathnames. 
(with-open-file (stream "sys:chemistry;lead.text" 
			:direction :output :if-exists :error) 
  (princ "eureka" stream) 
  (values (pathname stream) (truename stream))) 
*→* #P"SYS:CHEMISTRY;LEAD.TEXT.NEWEST", #P"Q:>sys>chem>lead.text.1" 
(rename-file "sys:chemistry;lead.text" "gold.text") 
*→* #P"SYS:CHEMISTRY;GOLD.TEXT.NEWEST", 
#P"Q:>sys>chem>lead.text.1", 
#P"Q:>sys>chem>gold.text.1" 

```
**Exceptional Situations:** 



If the renaming operation is not successful, an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"file-error"}><b>file-error</b></DictionaryLink> is signaled. 



An error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"file-error"}><b>file-error</b></DictionaryLink> might be signaled if *filespec* is <GlossaryTerm styled={true} term={"wild"}><i>wild</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink styled={true} term={"truename"}><b>truename</b></DictionaryLink>, <DictionaryLink styled={true} term={"pathname"}><b>pathname</b></DictionaryLink>, <DictionaryLink styled={true} term={"logical-pathname"}><b>logical-pathname</b></DictionaryLink>, Section 20.1 (File System Concepts), Section 19.1.2 (Pathnames as Filenames) 




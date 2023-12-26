**rename-file** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"rename-file"}><b>rename-file</b></DictionaryLink> *filespec new-name → defaulted-new-name, old-truename, new-truename* 



**Arguments and Values:** 



*filespec*—a <GlossaryTerm styled={true} term={"pathname designator"}><i>pathname designator</i></GlossaryTerm> . 



*new-name*—a <GlossaryTerm styled={true} term={"pathname designator"}><i>pathname designator</i></GlossaryTerm> other than a <ClLinks  term={"stream"}><i>stream</i></ClLinks>. 



*defaulted-new-name*—a <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> 



*old-truename*—a <GlossaryTerm styled={true} term={"physical pathname"}><i>physical pathname</i></GlossaryTerm>. 



*new-truename*—a <GlossaryTerm styled={true} term={"physical pathname"}><i>physical pathname</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink  term={"rename-file"}><b>rename-file</b></DictionaryLink> modifies the file system in such a way that the file indicated by *filespec* is renamed to *defaulted-new-name*. 



It is an error to specify a filename containing a <ClLinks  term={"wild"}><i>wild</i></ClLinks> component, for *filespec* to contain a <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> component where the file system does not permit a <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> component, or for the result of defaulting missing components of *new-name* from *filespec* to contain a <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> component where the file system does not permit a <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> component. 



If *new-name* is a <GlossaryTerm styled={true} term={"logical pathname"}><i>logical pathname</i></GlossaryTerm>, <DictionaryLink  term={"rename-file"}><b>rename-file</b></DictionaryLink> returns a <GlossaryTerm styled={true} term={"logical pathname"}><i>logical pathname</i></GlossaryTerm> as its <GlossaryTerm styled={true} term={"primary value"}><i>primary value</i></GlossaryTerm>. 



 



 



<DictionaryLink  term={"rename-file"}><b>rename-file</b></DictionaryLink> returns three values if successful. The <GlossaryTerm styled={true} term={"primary value"}><i>primary value</i></GlossaryTerm>, *defaulted-new-name*, is the resulting name which is composed of *new-name* with any missing components filled in by performing a <DictionaryLink  term={"merge-pathnames"}><b>merge-pathnames</b></DictionaryLink> operation using *filespec* as the defaults. The <GlossaryTerm styled={true} term={"secondary value"}><i>secondary value</i></GlossaryTerm>, *old-truename*, is the <ClLinks  term={"truename"}><i>truename</i></ClLinks> of the <ClLinks  term={"file"}><i>file</i></ClLinks> before it was renamed. The <GlossaryTerm styled={true} term={"tertiary value"}><i>tertiary value</i></GlossaryTerm>, *new-truename*, is the <ClLinks  term={"truename"}><i>truename</i></ClLinks> of the <ClLinks  term={"file"}><i>file</i></ClLinks> after it was renamed. 



If the *filespec designator* is an open <ClLinks  term={"stream"}><i>stream</i></ClLinks>, then the <ClLinks  term={"stream"}><i>stream</i></ClLinks> itself and the file associated with it are affected (if the <GlossaryTerm styled={true} term={"file system"}><i>file system</i></GlossaryTerm> permits). 



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



If the renaming operation is not successful, an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"file-error"}><b>file-error</b></DictionaryLink> is signaled. 



An error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"file-error"}><b>file-error</b></DictionaryLink> might be signaled if *filespec* is <ClLinks  term={"wild"}><i>wild</i></ClLinks>. 



**See Also:** 



<DictionaryLink  term={"truename"}><b>truename</b></DictionaryLink>, <DictionaryLink  term={"pathname"}><b>pathname</b></DictionaryLink>, <DictionaryLink  term={"logical-pathname"}><b>logical-pathname</b></DictionaryLink>, Section 20.1 (File System Concepts), Section 19.1.2 (Pathnames as Filenames) 




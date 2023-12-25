**namestring, file-namestring, directory-namestring, host-namestring, enough-namestring** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"namestring"}><b>namestring</b></DictionaryLink> *pathname → namestring* 



<DictionaryLink styled={true} term={"file-namestring"}><b>file-namestring</b></DictionaryLink> *pathname → namestring* 



<DictionaryLink styled={true} term={"directory-namestring"}><b>directory-namestring</b></DictionaryLink> *pathname → namestring* 



<DictionaryLink styled={true} term={"host-namestring"}><b>host-namestring</b></DictionaryLink> *pathname → namestring* 



<DictionaryLink styled={true} term={"enough-namestring"}><b>enough-namestring</b></DictionaryLink> <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> &amp;optional *defaults → namestring* 







 



 



**namestring, file-namestring, directory-namestring,** *. . .* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm>—a *pathname designator* . 



*defaults*—a *pathname designator* . The default is the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"default-pathname-defaults"}><b>\*default-pathname-defaults\*</b></DictionaryLink>. <GlossaryTerm styled={true} term={"namestring"}><i>namestring</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



**Description:** 



These functions convert <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> into a namestring. The name represented by <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> is returned as a <GlossaryTerm styled={true} term={"namestring"}><i>namestring</i></GlossaryTerm> in an <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> canonical form. 



<DictionaryLink styled={true} term={"namestring"}><b>namestring</b></DictionaryLink> returns the full form of <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm>. 



<DictionaryLink styled={true} term={"file-namestring"}><b>file-namestring</b></DictionaryLink> returns just the name, type, and version components of <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm>. <DictionaryLink styled={true} term={"directory-namestring"}><b>directory-namestring</b></DictionaryLink> returns the directory name portion. 



<DictionaryLink styled={true} term={"host-namestring"}><b>host-namestring</b></DictionaryLink> returns the host name. 



<DictionaryLink styled={true} term={"enough-namestring"}><b>enough-namestring</b></DictionaryLink> returns an abbreviated namestring that is just sufficient to identify the file named by <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> when considered relative to the *defaults*. It is required that 



(merge-pathnames (enough-namestring pathname defaults) defaults) 



*≡* (merge-pathnames (parse-namestring pathname nil defaults) defaults) 



in all cases, and the result of <DictionaryLink styled={true} term={"enough-namestring"}><b>enough-namestring</b></DictionaryLink> is the shortest reasonable <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> that will satisfy this criterion. 



It is not necessarily possible to construct a valid <GlossaryTerm styled={true} term={"namestring"}><i>namestring</i></GlossaryTerm> by concatenating some of the three shorter <GlossaryTerm styled={true} term={"namestring"}><i>namestrings</i></GlossaryTerm> in some order. 



**Examples:**
```lisp

(namestring "getty") 
*→* "getty" 
(setq q (make-pathname :host "kathy" 
		       :directory 
		       (pathname-directory \*default-pathname-defaults\*) 
		       :name "getty")) 
*→* #S(PATHNAME :HOST "kathy" :DEVICE NIL :DIRECTORY *directory-name* 
		:NAME "getty" :TYPE NIL :VERSION NIL) 
(file-namestring q) *→* "getty" 
(directory-namestring q) *→ directory-name* 
(host-namestring q) *→* "kathy" 
;;;Using Unix syntax and the wildcard conventions used by the 
;;;particular version of Unix on which this example was created: 



(namestring 
 (translate-pathname "/usr/dmr/hacks/frob.l" 
		     "/usr/d\*/hacks/\*.l" 
		     "/usr/d\*/backup/hacks/backup-\*.\*")) 
*→* "/usr/dmr/backup/hacks/backup-frob.l" 
(namestring 
 (translate-pathname "/usr/dmr/hacks/frob.l" 
		     "/usr/d\*/hacks/fr\*.l" 
		     "/usr/d\*/backup/hacks/backup-\*.\*")) 
*→* "/usr/dmr/backup/hacks/backup-ob.l" 
;;;This is similar to the above example but uses two different hosts, 
;;;U: which is a Unix and V: which is a VMS. Note the translation 
;;;of file type and alphabetic case conventions. 
(namestring 
 (translate-pathname "U:/usr/dmr/hacks/frob.l" 
		     "U:/usr/d\*/hacks/\*.l" 
		     "V:SYS$DISK:[D\*.BACKUP.HACKS]BACKUP-\*.\*")) 
*→* "V:SYS$DISK:[DMR.BACKUP.HACKS]BACKUP-FROB.LSP" 
(namestring 
 (translate-pathname "U:/usr/dmr/hacks/frob.l" 
		     "U:/usr/d\*/hacks/fr\*.l" 
		     "V:SYS$DISK:[D\*.BACKUP.HACKS]BACKUP-\*.\*")) 
*→* "V:SYS$DISK:[DMR.BACKUP.HACKS]BACKUP-OB.LSP" 

```
**See Also:** 



<DictionaryLink styled={true} term={"truename"}><b>truename</b></DictionaryLink>, <DictionaryLink styled={true} term={"merge-pathnames"}><b>merge-pathnames</b></DictionaryLink>, <DictionaryLink styled={true} term={"pathname"}><b>pathname</b></DictionaryLink>, <DictionaryLink styled={true} term={"logical-pathname"}><b>logical-pathname</b></DictionaryLink>, Section 20.1 (File System Concepts), Section 19.1.2 (Pathnames as Filenames) 




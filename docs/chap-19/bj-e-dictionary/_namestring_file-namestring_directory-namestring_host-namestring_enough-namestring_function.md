**namestring, file-namestring, directory-namestring, host-namestring, enough-namestring** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"namestring"}><b>namestring</b></DictionaryLink> *pathname → namestring* 



<DictionaryLink  term={"file-namestring"}><b>file-namestring</b></DictionaryLink> *pathname → namestring* 



<DictionaryLink  term={"directory-namestring"}><b>directory-namestring</b></DictionaryLink> *pathname → namestring* 



<DictionaryLink  term={"host-namestring"}><b>host-namestring</b></DictionaryLink> *pathname → namestring* 



<DictionaryLink  term={"enough-namestring"}><b>enough-namestring</b></DictionaryLink> <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> &amp;optional *defaults → namestring* 







 



 



**namestring, file-namestring, directory-namestring,** *. . .* 



**Arguments and Values:** 



<ClLinks  term={"pathname"}><i>pathname</i></ClLinks>—a <GlossaryTerm styled={true} term={"pathname designator"}><i>pathname designator</i></GlossaryTerm> . 



*defaults*—a <GlossaryTerm styled={true} term={"pathname designator"}><i>pathname designator</i></GlossaryTerm> . The default is the <ClLinks  term={"value"}><i>value</i></ClLinks> of <DictionaryLink  term={"default-pathname-defaults"}><b>\*default-pathname-defaults\*</b></DictionaryLink>. <ClLinks  term={"namestring"}><i>namestring</i></ClLinks>—a <ClLinks  term={"string"}><i>string</i></ClLinks> or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



**Description:** 



These functions convert <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> into a namestring. The name represented by <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> is returned as a <ClLinks  term={"namestring"}><i>namestring</i></ClLinks> in an <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> canonical form. 



<DictionaryLink  term={"namestring"}><b>namestring</b></DictionaryLink> returns the full form of <ClLinks  term={"pathname"}><i>pathname</i></ClLinks>. 



<DictionaryLink  term={"file-namestring"}><b>file-namestring</b></DictionaryLink> returns just the name, type, and version components of <ClLinks  term={"pathname"}><i>pathname</i></ClLinks>. <DictionaryLink  term={"directory-namestring"}><b>directory-namestring</b></DictionaryLink> returns the directory name portion. 



<DictionaryLink  term={"host-namestring"}><b>host-namestring</b></DictionaryLink> returns the host name. 



<DictionaryLink  term={"enough-namestring"}><b>enough-namestring</b></DictionaryLink> returns an abbreviated namestring that is just sufficient to identify the file named by <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> when considered relative to the *defaults*. It is required that 



(merge-pathnames (enough-namestring pathname defaults) defaults) 



*≡* (merge-pathnames (parse-namestring pathname nil defaults) defaults) 



in all cases, and the result of <DictionaryLink  term={"enough-namestring"}><b>enough-namestring</b></DictionaryLink> is the shortest reasonable <ClLinks  term={"string"}><i>string</i></ClLinks> that will satisfy this criterion. 



It is not necessarily possible to construct a valid <ClLinks  term={"namestring"}><i>namestring</i></ClLinks> by concatenating some of the three shorter <ClLinks  term={"namestring"}><i>namestrings</i></ClLinks> in some order. 



**Examples:**
```lisp
(namestring "getty") 
→ "getty" 
(setq q (make-pathname :host "kathy" 
		       :directory 
		       (pathname-directory \*default-pathname-defaults\*) 
		       :name "getty")) 
→ #S(PATHNAME :HOST "kathy" :DEVICE NIL :DIRECTORY *directory-name* 
	      :NAME "getty" :TYPE NIL :VERSION NIL) 
(file-namestring q) → "getty" 
(directory-namestring q) → directory-name 
(host-namestring q) → "kathy" 
;;;Using Unix syntax and the wildcard conventions used by the 
;;;particular version of Unix on which this example was created: 

(namestring 
 (translate-pathname "/usr/dmr/hacks/frob.l" 
		     "/usr/d\*/hacks/\*.l" 
		     "/usr/d\*/backup/hacks/backup-\*.\*")) 
→ "/usr/dmr/backup/hacks/backup-frob.l" 
(namestring 
 (translate-pathname "/usr/dmr/hacks/frob.l" 
		     "/usr/d\*/hacks/fr\*.l" 
		     "/usr/d\*/backup/hacks/backup-\*.\*")) 
→ "/usr/dmr/backup/hacks/backup-ob.l" 
;;;This is similar to the above example but uses two different hosts, 
;;;U: which is a Unix and V: which is a VMS. Note the translation 
;;;of file type and alphabetic case conventions. 
(namestring 
 (translate-pathname "U:/usr/dmr/hacks/frob.l" 
		     "U:/usr/d\*/hacks/\*.l" 
		     "V:SYS$DISK:[D\*.BACKUP.HACKS]BACKUP-\*.\*")) 
→ "V:SYS$DISK:[DMR.BACKUP.HACKS]BACKUP-FROB.LSP" 
(namestring 
 (translate-pathname "U:/usr/dmr/hacks/frob.l" 
		     "U:/usr/d\*/hacks/fr\*.l" 
		     "V:SYS$DISK:[D\*.BACKUP.HACKS]BACKUP-\*.\*")) 
→ "V:SYS$DISK:[DMR.BACKUP.HACKS]BACKUP-OB.LSP" 
```
**See Also:** 



<DictionaryLink  term={"truename"}><b>truename</b></DictionaryLink>, <DictionaryLink  term={"merge-pathnames"}><b>merge-pathnames</b></DictionaryLink>, <DictionaryLink  term={"pathname"}><b>pathname</b></DictionaryLink>, <DictionaryLink  term={"logical-pathname"}><b>logical-pathname</b></DictionaryLink>, Section 20.1 (File System Concepts), Section 19.1.2 (Pathnames as Filenames) 




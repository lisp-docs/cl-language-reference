**namestring, file-namestring, directory-namestring, host-namestring, enough-namestring** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"namestring"}><b>namestring</b></ClLinks> *pathname → namestring* 



<ClLinks styled={true} term={"file-namestring"}><b>file-namestring</b></ClLinks> *pathname → namestring* 



<ClLinks styled={true} term={"directory-namestring"}><b>directory-namestring</b></ClLinks> *pathname → namestring* 



<ClLinks styled={true} term={"host-namestring"}><b>host-namestring</b></ClLinks> *pathname → namestring* 



<ClLinks styled={true} term={"enough-namestring"}><b>enough-namestring</b></ClLinks> <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> &amp;optional *defaults → namestring* 







 



 



**namestring, file-namestring, directory-namestring,** *. . .* 



**Arguments and Values:** 



<ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks>—a *pathname designator* . 



*defaults*—a *pathname designator* . The default is the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"default-pathname-defaults"}><b>\*default-pathname-defaults\*</b></ClLinks>. <ClLinks styled={true} term={"namestring"}><i>namestring</i></ClLinks>—a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



**Description:** 



These functions convert <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> into a namestring. The name represented by <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> is returned as a <ClLinks styled={true} term={"namestring"}><i>namestring</i></ClLinks> in an <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> canonical form. 



<ClLinks styled={true} term={"namestring"}><b>namestring</b></ClLinks> returns the full form of <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks>. 



<ClLinks styled={true} term={"file-namestring"}><b>file-namestring</b></ClLinks> returns just the name, type, and version components of <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks>. <ClLinks styled={true} term={"directory-namestring"}><b>directory-namestring</b></ClLinks> returns the directory name portion. 



<ClLinks styled={true} term={"host-namestring"}><b>host-namestring</b></ClLinks> returns the host name. 



<ClLinks styled={true} term={"enough-namestring"}><b>enough-namestring</b></ClLinks> returns an abbreviated namestring that is just sufficient to identify the file named by <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> when considered relative to the *defaults*. It is required that 



(merge-pathnames (enough-namestring pathname defaults) defaults) 



*≡* (merge-pathnames (parse-namestring pathname nil defaults) defaults) 



in all cases, and the result of <ClLinks styled={true} term={"enough-namestring"}><b>enough-namestring</b></ClLinks> is the shortest reasonable <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> that will satisfy this criterion. 



It is not necessarily possible to construct a valid <ClLinks styled={true} term={"namestring"}><i>namestring</i></ClLinks> by concatenating some of the three shorter <ClLinks styled={true} term={"namestring"}><i>namestrings</i></ClLinks> in some order. 



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



<ClLinks styled={true} term={"truename"}><b>truename</b></ClLinks>, <ClLinks styled={true} term={"merge-pathnames"}><b>merge-pathnames</b></ClLinks>, <ClLinks styled={true} term={"pathname"}><b>pathname</b></ClLinks>, <ClLinks styled={true} term={"logical-pathname"}><b>logical-pathname</b></ClLinks>, Section 20.1 (File System Concepts), Section 19.1.2 (Pathnames as Filenames) 




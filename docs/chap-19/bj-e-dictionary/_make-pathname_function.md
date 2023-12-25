**make-pathname** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"make-pathname"}><b>make-pathname</b></DictionaryLink> &amp;key *host device directory name type version defaults case* 



*→ pathname* 



**Arguments and Values:** 



*host*—a *valid physical pathname host*. Complicated defaulting behavior; see below. *device*—a *valid pathname device*. Complicated defaulting behavior; see below. 



*directory*—a *valid pathname directory*. Complicated defaulting behavior; see below. <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>—a *valid pathname name*. Complicated defaulting behavior; see below. 



<GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>—a *valid pathname type*. Complicated defaulting behavior; see below. 



*version*—a *valid pathname version*. Complicated defaulting behavior; see below. 



*defaults*—a *pathname designator* . The default is a <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> whose host component is the same as the host component of the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"default-pathname-defaults"}><b>\*default-pathname-defaults\*</b></DictionaryLink>, and whose other components are all <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



<GlossaryTerm styled={true} term={"case"}><i>case</i></GlossaryTerm>—one of :common or :local. The default is :local. 



<GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm>. 



**Description:** 



Constructs and returns a <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> from the supplied keyword arguments. 



After the components supplied explicitly by *host*, *device*, *directory*, <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>, and *version* are filled in, the merging rules used by <DictionaryLink styled={true} term={"merge-pathnames"}><b>merge-pathnames</b></DictionaryLink> are used to fill in any unsupplied components from the defaults supplied by *defaults*. 



Whenever a <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> is constructed the components may be canonicalized if appropriate. For the explanation of the arguments that can be supplied for each component, see Section 19.2.1 (Pathname Components). 



If <GlossaryTerm styled={true} term={"case"}><i>case</i></GlossaryTerm> is supplied, it is treated as described in Section 19.2.2.1.2 (Case in Pathname Components). 



The resulting <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> is a *logical pathname* if and only its host component is a *logical host* or a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> that names a defined *logical host*. 







 



 



<DictionaryLink styled={true} term={"make-pathname"}><b>make-pathname</b></DictionaryLink> 



If the *directory* is a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>, it should be the name of a top level directory, and should not contain any punctuation characters; that is, specifying a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>, *str*, is equivalent to specifying the list (:absolute *str*). Specifying the symbol :wild is equivalent to specifying the list (:absolute :wild-inferiors), or (:absolute :wild) in a file system that does not support :wild-inferiors. 



**Examples:**
```lisp

;; Implementation A – an implementation with access to a single 
;; Unix file system. This implementation happens to never display 
;; the ‘host’ information in a namestring, since there is only one host. 
(make-pathname :directory ’(:absolute "public" "games") 
	       :name "chess" :type "db") 
*→* #P"/public/games/chess.db" 
;; Implementation B – an implementation with access to one or more 
;; VMS file systems. This implementation displays ‘host’ information 
;; in the namestring only when the host is not the local host. 
;; It uses a double colon to separate a host name from the host’s local 
;; file name. 
(make-pathname :directory ’(:absolute "PUBLIC" "GAMES") 
	       :name "CHESS" :type "DB") 
*→* #P"SYS$DISK:[PUBLIC.GAMES]CHESS.DB" 
(make-pathname :host "BOBBY" 
	       :directory ’(:absolute "PUBLIC" "GAMES") 
	       :name "CHESS" :type "DB") 
*→* #P"BOBBY::SYS$DISK:[PUBLIC.GAMES]CHESS.DB" 
;; Implementation C – an implementation with simultaneous access to 
;; multiple file systems from the same Lisp image. In this 
;; implementation, there is a convention that any text preceding the 
;; first colon in a pathname namestring is a host name. 
(dolist (case ’(:common :local)) 
  (dolist (host ’("MY-LISPM" "MY-VAX" "MY-UNIX")) 
    (print (make-pathname :host host :case case 
			  :directory ’(:absolute "PUBLIC" "GAMES") 
			  :name "CHESS" :type "DB")))) 
▷ #P"MY-LISPM:>public>games>chess.db" 
▷ #P"MY-VAX:SYS$DISK:[PUBLIC.GAMES]CHESS.DB" 
▷ #P"MY-UNIX:/public/games/chess.db" 
▷ #P"MY-LISPM:>public>games>chess.db" 
▷ #P"MY-VAX:SYS$DISK:[PUBLIC.GAMES]CHESS.DB" 



▷ #P"MY-UNIX:/PUBLIC/GAMES/CHESS.DB" 
*→* NIL 

```
**Affected By:** 



The *file system*. 



**See Also:** 



<DictionaryLink styled={true} term={"merge-pathnames"}><b>merge-pathnames</b></DictionaryLink>, <DictionaryLink styled={true} term={"pathname"}><b>pathname</b></DictionaryLink>, <DictionaryLink styled={true} term={"logical-pathname"}><b>logical-pathname</b></DictionaryLink>, Section 20.1 (File System Concepts), Section 19.1.2 (Pathnames as Filenames) 



**Notes:** 



Portable programs should not supply :unspecific for any component. See Section 19.2.2.2.3 (:UNSPECIFIC as a Component Value). 




**make-pathname** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"make-pathname"}><b>make-pathname</b></ClLinks> &amp;key *host device directory name type version defaults case* 



→ pathname 



**Arguments and Values:** 



*host*—a *valid physical pathname host*. Complicated defaulting behavior; see below. *device*—a *valid pathname device*. Complicated defaulting behavior; see below. 



*directory*—a *valid pathname directory*. Complicated defaulting behavior; see below. <ClLinks styled={true} term={"name"}><i>name</i></ClLinks>—a *valid pathname name*. Complicated defaulting behavior; see below. 



<ClLinks styled={true} term={"type"}><i>type</i></ClLinks>—a *valid pathname type*. Complicated defaulting behavior; see below. 



*version*—a *valid pathname version*. Complicated defaulting behavior; see below. 



*defaults*—a *pathname designator* . The default is a <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> whose host component is the same as the host component of the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"default-pathname-defaults"}><b>\*default-pathname-defaults\*</b></ClLinks>, and whose other components are all <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



<ClLinks styled={true} term={"case"}><i>case</i></ClLinks>—one of :common or :local. The default is :local. 



<ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks>—a <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks>. 



**Description:** 



Constructs and returns a <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> from the supplied keyword arguments. 



After the components supplied explicitly by *host*, *device*, *directory*, <ClLinks styled={true} term={"name"}><i>name</i></ClLinks>, <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>, and *version* are filled in, the merging rules used by <ClLinks styled={true} term={"merge-pathnames"}><b>merge-pathnames</b></ClLinks> are used to fill in any unsupplied components from the defaults supplied by *defaults*. 



Whenever a <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> is constructed the components may be canonicalized if appropriate. For the explanation of the arguments that can be supplied for each component, see Section 19.2.1 (Pathname Components). 



If <ClLinks styled={true} term={"case"}><i>case</i></ClLinks> is supplied, it is treated as described in Section 19.2.2.1.2 (Case in Pathname Components). 



The resulting <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> is a *logical pathname* if and only its host component is a *logical host* or a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> that names a defined *logical host*. 







 



 



<ClLinks styled={true} term={"make-pathname"}><b>make-pathname</b></ClLinks> 



If the *directory* is a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>, it should be the name of a top level directory, and should not contain any punctuation characters; that is, specifying a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>, *str*, is equivalent to specifying the list (:absolute *str*). Specifying the symbol :wild is equivalent to specifying the list (:absolute :wild-inferiors), or (:absolute :wild) in a file system that does not support :wild-inferiors. 



**Examples:**
```lisp
;; Implementation A – an implementation with access to a single 
;; Unix file system. This implementation happens to never display 
;; the ‘host’ information in a namestring, since there is only one host. 
(make-pathname :directory ’(:absolute "public" "games") 
	       :name "chess" :type "db") 
→ #P"/public/games/chess.db" 
;; Implementation B – an implementation with access to one or more 
;; VMS file systems. This implementation displays ‘host’ information 
;; in the namestring only when the host is not the local host. 
;; It uses a double colon to separate a host name from the host’s local 
;; file name. 
(make-pathname :directory ’(:absolute "PUBLIC" "GAMES") 
	       :name "CHESS" :type "DB") 
→ #P"SYS$DISK:[PUBLIC.GAMES]CHESS.DB" 
(make-pathname :host "BOBBY" 
	       :directory ’(:absolute "PUBLIC" "GAMES") 
	       :name "CHESS" :type "DB") 
→ #P"BOBBY::SYS$DISK:[PUBLIC.GAMES]CHESS.DB" 
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
→ NIL 
```
**Affected By:** 



The *file system*. 



**See Also:** 



<ClLinks styled={true} term={"merge-pathnames"}><b>merge-pathnames</b></ClLinks>, <ClLinks styled={true} term={"pathname"}><b>pathname</b></ClLinks>, <ClLinks styled={true} term={"logical-pathname"}><b>logical-pathname</b></ClLinks>, Section 20.1 (File System Concepts), Section 19.1.2 (Pathnames as Filenames) 



**Notes:** 



Portable programs should not supply :unspecific for any component. See Section 19.2.2.2.3 (:UNSPECIFIC as a Component Value). 




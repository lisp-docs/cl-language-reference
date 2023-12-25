**pathnamep** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"pathnamep"}><b>pathnamep</b></DictionaryLink> *object → generalized-boolean* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"pathname"}><b>pathname</b></DictionaryLink>; otherwise, returns <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 



**Examples:**
```lisp
 
(setq q "test") *→* "test" 
(pathnamep q) *→ false* 
(setq q (pathname "test")) 
*→* #S(PATHNAME :HOST NIL :DEVICE NIL :DIRECTORY NIL :NAME "test" :TYPE NIL 
:VERSION NIL) 
(pathnamep q) *→ true* 
(setq q (logical-pathname "SYS:SITE;FOO.SYSTEM")) 
*→* #P"SYS:SITE;FOO.SYSTEM" 
(pathnamep q) *→ true* 

```
**Notes:** 



(pathnamep <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>) *≡* (typep <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> ’pathname) 







 



 



<b><sup>pathname-host, pathname-device, pathname</sup> directory, pathname-name, pathname-type, pathname-version</b> <i>Function</i> 



**Syntax:** 



**pathname-host** <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> &amp;key *case → host* 



**pathname-device** <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> &amp;key *case → device* 



**pathname-directory** <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> &amp;key *case → directory* 



**pathname-name** <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> &amp;key *case → name* 



**pathname-type** <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> &amp;key *case → type* 



**pathname-version** *pathname → version* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm>—a *pathname designator* . 



<GlossaryTerm styled={true} term={"case"}><i>case</i></GlossaryTerm>—one of :local or :common. The default is :local. 



*host*—a *valid pathname host*. 



*device*—a *valid pathname device*. 



*directory*—a *valid pathname directory*. 



<GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>—a *valid pathname name*. 



<GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>—a *valid pathname type*. 



*version*—a *valid pathname version*. 



**Description:** 



These functions return the components of <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm>. 



If the *pathname designator* is a <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm>, it represents the name used to open the file. This may be, but is not required to be, the actual name of the file. 



If <GlossaryTerm styled={true} term={"case"}><i>case</i></GlossaryTerm> is supplied, it is treated as described in Section 19.2.2.1.2 (Case in Pathname Components). **Examples:**
```lisp




**pathname-host, pathname-device,** *. . .* 
(setq q (make-pathname :host "KATHY" 
		       :directory "CHAPMAN" 
		       :name "LOGIN" :type "COM")) 
*→* #P"KATHY::[CHAPMAN]LOGIN.COM" 
(pathname-host q) *→* "KATHY" 
(pathname-name q) *→* "LOGIN" 
(pathname-type q) *→* "COM" 
;; Because namestrings are used, the results shown in the remaining 
;; examples are not necessarily the only possible results. Mappings 
;; from namestring representation to pathname representation are 
;; dependent both on the file system involved and on the implementation 
;; (since there may be several implementations which can manipulate the 
;; the same file system, and those implementations are not constrained 
;; to agree on all details). Consult the documentation for each 
;; implementation for specific information on how namestrings are treated 
;; that implementation. 
;; VMS 
(pathname-directory (parse-namestring "[FOO.\*.BAR]BAZ.LSP")) 
*→* (:ABSOLUTE "FOO" "BAR") 
(pathname-directory (parse-namestring "[FOO.\*.BAR]BAZ.LSP") :case :common) 
*→* (:ABSOLUTE "FOO" "BAR") 
;; Unix 
(pathname-directory "foo.l") *→* NIL 
(pathname-device "foo.l") *→* :UNSPECIFIC 
(pathname-name "foo.l") *→* "foo" 
(pathname-name "foo.l" :case :local) *→* "foo" 
(pathname-name "foo.l" :case :common) *→* "FOO" 
(pathname-type "foo.l") *→* "l" 
(pathname-type "foo.l" :case :local) *→* "l" 
(pathname-type "foo.l" :case :common) *→* "L" 
(pathname-type "foo") *→* :UNSPECIFIC 
(pathname-type "foo" :case :common) *→* :UNSPECIFIC 
(pathname-type "foo.") *→* "" 
(pathname-type "foo." :case :common) *→* "" 
(pathname-directory (parse-namestring "/foo/bar/baz.lisp") :case :local) 
*→* (:ABSOLUTE "foo" "bar") 
(pathname-directory (parse-namestring "/foo/bar/baz.lisp") :case :local) 
*→* (:ABSOLUTE "FOO" "BAR") 
(pathname-directory (parse-namestring "../baz.lisp")) 
*→* (:RELATIVE :UP) 
(PATHNAME-DIRECTORY (PARSE-NAMESTRING "/foo/BAR/../Mum/baz")) 
*→* (:ABSOLUTE "foo" "BAR" :UP "Mum") 



(PATHNAME-DIRECTORY (PARSE-NAMESTRING "/foo/BAR/../Mum/baz") :case :common) 
*→* (:ABSOLUTE "FOO" "bar" :UP "Mum") 
(PATHNAME-DIRECTORY (PARSE-NAMESTRING "/foo/\*/bar/baz.l")) 
*→* (:ABSOLUTE "foo" :WILD "bar") 
(PATHNAME-DIRECTORY (PARSE-NAMESTRING "/foo/\*/bar/baz.l") :case :common) 
*→* (:ABSOLUTE "FOO" :WILD "BAR") 
;; Symbolics LMFS 
(pathname-directory (parse-namestring ">foo>\*\*>bar>baz.lisp")) 
*→* (:ABSOLUTE "foo" :WILD-INFERIORS "bar") 
(pathname-directory (parse-namestring ">foo>\*>bar>baz.lisp")) 
*→* (:ABSOLUTE "foo" :WILD "bar") 
(pathname-directory (parse-namestring ">foo>\*>bar>baz.lisp") :case :common) 
*→* (:ABSOLUTE "FOO" :WILD "BAR") 
(pathname-device (parse-namestring ">foo>baz.lisp")) *→* :UNSPECIFIC 

```
**Affected By:** 



The <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> and the host *file system*. 



**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if its first argument is not a <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink styled={true} term={"pathname"}><b>pathname</b></DictionaryLink>, <DictionaryLink styled={true} term={"logical-pathname"}><b>logical-pathname</b></DictionaryLink>, Section 20.1 (File System Concepts), Section 19.1.2 (Pathnames as Filenames) 




**pathnamep** *Function* 



**Syntax:** 



**pathnamep** *object → generalized-boolean* 



**Arguments and Values:** 



*object*—an *object*. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns *true* if *object* is of *type* **pathname**; otherwise, returns *false*. 



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



(pathnamep *object*) *≡* (typep *object* ’pathname) 







 



 



<b><sup>pathname-host, pathname-device, pathname</sup> directory, pathname-name, pathname-type, pathname-version</b> <i>Function</i> 



**Syntax:** 



**pathname-host** *pathname* &amp;key *case → host* 



**pathname-device** *pathname* &amp;key *case → device* 



**pathname-directory** *pathname* &amp;key *case → directory* 



**pathname-name** *pathname* &amp;key *case → name* 



**pathname-type** *pathname* &amp;key *case → type* 



**pathname-version** *pathname → version* 



**Arguments and Values:** 



*pathname*—a *pathname designator* . 



*case*—one of :local or :common. The default is :local. 



*host*—a *valid pathname host*. 



*device*—a *valid pathname device*. 



*directory*—a *valid pathname directory*. 



*name*—a *valid pathname name*. 



*type*—a *valid pathname type*. 



*version*—a *valid pathname version*. 



**Description:** 



These functions return the components of *pathname*. 



If the *pathname designator* is a *pathname*, it represents the name used to open the file. This may be, but is not required to be, the actual name of the file. 



If *case* is supplied, it is treated as described in Section 19.2.2.1.2 (Case in Pathname Components). **Examples:**
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



(pathname-directory (parse-namestring "&gt;foo&gt;\*\*&gt;bar&gt;baz.lisp")) 



*→* (:ABSOLUTE "foo" :WILD-INFERIORS "bar") 



(pathname-directory (parse-namestring "&gt;foo&gt;\*&gt;bar&gt;baz.lisp")) 



*→* (:ABSOLUTE "foo" :WILD "bar") 



(pathname-directory (parse-namestring "&gt;foo&gt;\*&gt;bar&gt;baz.lisp") :case :common) 



*→* (:ABSOLUTE "FOO" :WILD "BAR") 



(pathname-device (parse-namestring "&gt;foo&gt;baz.lisp")) *→* :UNSPECIFIC 




```
**Affected By:** 



The *implementation* and the host *file system*. 



**Exceptional Situations:** 



Should signal an error of *type* **type-error** if its first argument is not a *pathname*. 



**See Also:** 



**pathname**, **logical-pathname**, Section 20.1 (File System Concepts), Section 19.1.2 (Pathnames as Filenames) 




**19.3.2.2 Null Strings as Components of a Logical Pathname** The null string, "", is not a valid value for any component of a *logical pathname*. 



 

 

**pathname** *System Class* 

**Class Precedence List:** 

**pathname**, **t** 

**Description:** 

A *pathname* is a structured *object* which represents a *filename*. 

There are two kinds of *pathnames*—*physical pathnames* and *logical pathnames*. 

**logical-pathname** *System Class* 

**Class Precedence List:** 

**logical-pathname**, **pathname**, **t** 

**Description:** 

A *pathname* that uses a *namestring* syntax that is *implementation-independent*, and that has component values that are *implementation-independent*. *Logical pathnames* do not refer directly to *filenames* 

**See Also:** 

Section 20.1 (File System Concepts), Section 2.4.8.14 (Sharpsign P), Section 22.1.3.11 (Printing Pathnames) 

**pathname** *Function* 

**Syntax:** 

**pathname** *pathspec → pathname* 

**Arguments and Values:** 

*pathspec*—a *pathname designator* . 

*pathname*—a *pathname*. 

**Description:** 

Returns the *pathname* denoted by *pathspec*. 

Filenames **19–15**

 

 

**pathname** 

If the *pathspec designator* is a *stream*, the *stream* can be either open or closed; in both cases, the **pathname** returned corresponds to the *filename* used to open the *file*. **pathname** returns the same *pathname* for a *file stream* after it is closed as it did when it was open. 

If the *pathspec designator* is a *file stream* created by opening a *logical pathname*, a *logical pathname* is returned. 

**Examples:** 

;; There is a great degree of variability permitted here. The next 

;; several examples are intended to illustrate just a few of the many 

;; possibilities. Whether the name is canonicalized to a particular 

;; case (either upper or lower) depends on both the file system and the 

;; implementation since two different implementations using the same 

;; file system might differ on many issues. How information is stored 

;; internally (and possibly presented in #S notation) might vary, 

;; possibly requiring ‘accessors’ such as PATHNAME-NAME to perform case 

;; conversion upon access. The format of a namestring is dependent both 

;; on the file system and the implementation since, for example, one 

;; implementation might include the host name in a namestring, and 

;; another might not. #S notation would generally only be used in a 

;; situation where no appropriate namestring could be constructed for use 

;; with #P. 

(setq p1 (pathname "test")) 

*→* #P"CHOCOLATE:TEST" ; with case canonicalization (e.g., VMS) 

\<i\>\<sup\>or\</sup\>→\</i\> #P"VANILLA:test" ; without case canonicalization (e.g., Unix) 

\<i\>\<sup\>or\</sup\>→\</i\> #P"test" 

\<i\>\<sup\>or\</sup\>→\</i\> #S(PATHNAME :HOST "STRAWBERRY" :NAME "TEST") 

\<i\>\<sup\>or\</sup\>→\</i\> #S(PATHNAME :HOST "BELGIAN-CHOCOLATE" :NAME "test") 

(setq p2 (pathname "test")) 

*→* #P"CHOCOLATE:TEST" 

\<i\>\<sup\>or\</sup\>→\</i\> #P"VANILLA:test" 

\<i\>\<sup\>or\</sup\>→\</i\> #P"test" 

\<i\>\<sup\>or\</sup\>→\</i\> #S(PATHNAME :HOST "STRAWBERRY" :NAME "TEST") 

\<i\>\<sup\>or\</sup\>→\</i\> #S(PATHNAME :HOST "BELGIAN-CHOCOLATE" :NAME "test") 

(pathnamep p1) *→ true* 

(eq p1 (pathname p1)) *→ true* 

(eq p1 p2) 

*→ true* 

\<i\>\<sup\>or\</sup\>→ false\</i\> 

(with-open-file (stream "test" :direction :output) 

(pathname stream)) 

*→* #P"ORANGE-CHOCOLATE:\>Gus\>test.lisp.newest" 

**See Also:** 

**pathname**, **logical-pathname**, Section 20.1 (File System Concepts), Section 19.1.2 (Pathnames as 

 

 

Filenames) 

**make-pathname** *Function* 

**Syntax:** 

**make-pathname** &key *host device directory name type version defaults case* 

*→ pathname* 

**Arguments and Values:** 

*host*—a *valid physical pathname host*. Complicated defaulting behavior; see below. *device*—a *valid pathname device*. Complicated defaulting behavior; see below. 

*directory*—a *valid pathname directory*. Complicated defaulting behavior; see below. *name*—a *valid pathname name*. Complicated defaulting behavior; see below. 

*type*—a *valid pathname type*. Complicated defaulting behavior; see below. 

*version*—a *valid pathname version*. Complicated defaulting behavior; see below. 

*defaults*—a *pathname designator* . The default is a *pathname* whose host component is the same as the host component of the *value* of **\*default-pathname-defaults\***, and whose other components are all **nil**. 

*case*—one of :common or :local. The default is :local. 

*pathname*—a *pathname*. 

**Description:** 

Constructs and returns a *pathname* from the supplied keyword arguments. 

After the components supplied explicitly by *host*, *device*, *directory*, *name*, *type*, and *version* are filled in, the merging rules used by **merge-pathnames** are used to fill in any unsupplied components from the defaults supplied by *defaults*. 

Whenever a *pathname* is constructed the components may be canonicalized if appropriate. For the explanation of the arguments that can be supplied for each component, see Section 19.2.1 (Pathname Components). 

If *case* is supplied, it is treated as described in Section 19.2.2.1.2 (Case in Pathname Components). 

The resulting *pathname* is a *logical pathname* if and only its host component is a *logical host* or a *string* that names a defined *logical host*. 

Filenames **19–17**

 

 

**make-pathname** 

If the *directory* is a *string*, it should be the name of a top level directory, and should not contain any punctuation characters; that is, specifying a *string*, *str*, is equivalent to specifying the list (:absolute *str*). Specifying the symbol :wild is equivalent to specifying the list (:absolute :wild-inferiors), or (:absolute :wild) in a file system that does not support :wild-inferiors. 

**Examples:** 

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

&#9655; #P"MY-LISPM:\>public\>games\>chess.db" 

&#9655; #P"MY-VAX:SYS$DISK:[PUBLIC.GAMES]CHESS.DB" 

&#9655; #P"MY-UNIX:/public/games/chess.db" 

&#9655; #P"MY-LISPM:\>public\>games\>chess.db" 

&#9655; #P"MY-VAX:SYS$DISK:[PUBLIC.GAMES]CHESS.DB" 



 

 

&#9655; #P"MY-UNIX:/PUBLIC/GAMES/CHESS.DB" 

*→* NIL 

**Affected By:** 

The *file system*. 

**See Also:** 

**merge-pathnames**, **pathname**, **logical-pathname**, Section 20.1 (File System Concepts), Section 19.1.2 (Pathnames as Filenames) 

**Notes:** 

Portable programs should not supply :unspecific for any component. See Section 19.2.2.2.3 (:UNSPECIFIC as a Component Value). 

**pathnamep** *Function* 

**Syntax:** 

**pathnamep** *object → generalized-boolean* 

**Arguments and Values:** 

*object*—an *object*. 

*generalized-boolean*—a *generalized boolean*. 

**Description:** 

Returns *true* if *object* is of *type* **pathname**; otherwise, returns *false*. 

**Examples:** 

(setq q "test") *→* "test" 

(pathnamep q) *→ false* 

(setq q (pathname "test")) 

*→* #S(PATHNAME :HOST NIL :DEVICE NIL :DIRECTORY NIL :NAME "test" :TYPE NIL 

:VERSION NIL) 

(pathnamep q) *→ true* 

(setq q (logical-pathname "SYS:SITE;FOO.SYSTEM")) 

*→* #P"SYS:SITE;FOO.SYSTEM" 

(pathnamep q) *→ true* 

**Notes:** 

(pathnamep *object*) *≡* (typep *object* ’pathname) 

Filenames **19–19**

 

 

\<b\>\<sup\>pathname-host, pathname-device, pathname\</sup\> directory, pathname-name, pathname-type, pathname-version\</b\> \<i\>Function\</i\> 

**Syntax:** 

**pathname-host** *pathname* &key *case → host* 

**pathname-device** *pathname* &key *case → device* 

**pathname-directory** *pathname* &key *case → directory* 

**pathname-name** *pathname* &key *case → name* 

**pathname-type** *pathname* &key *case → type* 

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

Filenames **19–21**

 

 

(PATHNAME-DIRECTORY (PARSE-NAMESTRING "/foo/BAR/../Mum/baz") :case :common) 

*→* (:ABSOLUTE "FOO" "bar" :UP "Mum") 

(PATHNAME-DIRECTORY (PARSE-NAMESTRING "/foo/\*/bar/baz.l")) 

*→* (:ABSOLUTE "foo" :WILD "bar") 

(PATHNAME-DIRECTORY (PARSE-NAMESTRING "/foo/\*/bar/baz.l") :case :common) 

*→* (:ABSOLUTE "FOO" :WILD "BAR") 

;; Symbolics LMFS 

(pathname-directory (parse-namestring "\>foo\>\*\*\>bar\>baz.lisp")) 

*→* (:ABSOLUTE "foo" :WILD-INFERIORS "bar") 

(pathname-directory (parse-namestring "\>foo\>\*\>bar\>baz.lisp")) 

*→* (:ABSOLUTE "foo" :WILD "bar") 

(pathname-directory (parse-namestring "\>foo\>\*\>bar\>baz.lisp") :case :common) 

*→* (:ABSOLUTE "FOO" :WILD "BAR") 

(pathname-device (parse-namestring "\>foo\>baz.lisp")) *→* :UNSPECIFIC 

**Affected By:** 

The *implementation* and the host *file system*. 

**Exceptional Situations:** 

Should signal an error of *type* **type-error** if its first argument is not a *pathname*. 

**See Also:** 

**pathname**, **logical-pathname**, Section 20.1 (File System Concepts), Section 19.1.2 (Pathnames as Filenames) 

**load-logical-pathname-translations** *Function* 

**Syntax:** 

**load-logical-pathname-translations** *host → just-loaded* 

**Arguments and Values:** 

*host*—a *string*. 

*just-loaded*—a *generalized boolean*. 

**Description:** 

Searches for and loads the definition of a *logical host* named *host*, if it is not already defined. The specific nature of the search is *implementation-defined*. 



 

 

If the *host* is already defined, no attempt to find or load a definition is attempted, and *false* is returned. If the *host* is not already defined, but a definition is successfully found and loaded, *true* is returned. Otherwise, an error is signaled. 

**Examples:** 

(translate-logical-pathname "hacks:weather;barometer.lisp.newest") 

&#9655; Error: The logical host HACKS is not defined. 

(load-logical-pathname-translations "HACKS") 

&#9655; ;; Loading SYS:SITE;HACKS.TRANSLATIONS 

&#9655; ;; Loading done. 

*→ true* 

(translate-logical-pathname "hacks:weather;barometer.lisp.newest") 

*→* #P"HELIUM:[SHARED.HACKS.WEATHER]BAROMETER.LSP;0" 

(load-logical-pathname-translations "HACKS") 

*→ false* 

**Exceptional Situations:** 

If no definition is found, an error of *type* **error** is signaled. 

**See Also:** 

**logical-pathname** 

**Notes:** 

*Logical pathname* definitions will be created not just by *implementors* but also by *programmers*. As such, it is important that the search strategy be documented. For example, an *implementation* might define that the definition of a *host* is to be found in a file called “*host*.translations” in some specifically named directory. 

**logical-pathname-translations** *Accessor* 

**Syntax:** 

**logical-pathname-translations** *host → translations* 

**(setf (logical-pathname-translations** *host***)** *new-translations***)** 

**Arguments and Values:** 

*host*–a *logical host designator* . 

*translations*, *new-translations*—a *list*. 

Filenames **19–23**

 

 

**logical-pathname-translations** 

**Description:** 

Returns the host’s *list* of translations. Each translation is a *list* of at least two elements: *from-wildcard* and *to-wildcard*. Any additional elements are *implementation-defined*. *From-wildcard* is a *logical pathname* whose host is *host*. *To-wildcard* is a *pathname*. 

(setf (logical-pathname-translations *host*) *translations*) sets a *logical pathname* host’s *list* of *translations*. If *host* is a *string* that has not been previously used as a *logical pathname* host, a new *logical pathname* host is defined; otherwise an existing host’s translations are replaced. *logical pathname* host names are compared with **string-equal**. 

When setting the translations list, each *from-wildcard* can be a *logical pathname* whose host is *host* or a *logical pathname* namestring parseable by (parse-namestring *string host*), where *host* represents the appropriate *object* as defined by **parse-namestring**. Each *to-wildcard* can be anything coercible to a *pathname* by (pathname *to-wildcard*). If *to-wildcard* coerces to a *logical pathname*, **translate-logical-pathname** will perform repeated translation steps when it uses it. 

*host* is either the host component of a *logical pathname* or a *string* that has been defined as a *logical pathname* host name by **setf** of **logical-pathname-translations**. 

**Examples:** 

;;;A very simple example of setting up a logical pathname host. No 

;;;translations are necessary to get around file system restrictions, so 

;;;all that is necessary is to specify the root of the physical directory 

;;;tree that contains the logical file system. 

;;;The namestring syntax on the right-hand side is implementation-dependent. 

(setf (logical-pathname-translations "foo") 

’(("\*\*;\*.\*.\*" "MY-LISPM:\>library\>foo\>\*\*\>"))) 

;;;Sample use of that logical pathname. The return value 

;;;is implementation-dependent. 

(translate-logical-pathname "foo:bar;baz;mum.quux.3") 

*→* #P"MY-LISPM:\>library\>foo\>bar\>baz\>mum.quux.3" 

;;;A more complex example, dividing the files among two file servers 

;;;and several different directories. This Unix doesn’t support 

;;;:WILD-INFERIORS in the directory, so each directory level must 

;;;be translated individually. No file name or type translations 

;;;are required except for .MAIL to .MBX. 

;;;The namestring syntax on the right-hand side is implementation-dependent. 

(setf (logical-pathname-translations "prog") 

’(("RELEASED;\*.\*.\*" "MY-UNIX:/sys/bin/my-prog/") 

("RELEASED;\*;\*.\*.\*" "MY-UNIX:/sys/bin/my-prog/\*/") 

("EXPERIMENTAL;\*.\*.\*" "MY-UNIX:/usr/Joe/development/prog/") 



 

 

**logical-pathname-translations** 

("EXPERIMENTAL;DOCUMENTATION;\*.\*.\*" 

"MY-VAX:SYS$DISK:[JOE.DOC]") 

("EXPERIMENTAL;\*;\*.\*.\*" "MY-UNIX:/usr/Joe/development/prog/\*/") 

("MAIL;\*\*;\*.MAIL" "MY-VAX:SYS$DISK:[JOE.MAIL.PROG...]\*.MBX"))) 

;;;Sample use of that logical pathname. The return value 

;;;is implementation-dependent. 

(translate-logical-pathname "prog:mail;save;ideas.mail.3") 

*→* #P"MY-VAX:SYS$DISK:[JOE.MAIL.PROG.SAVE]IDEAS.MBX.3" 

;;;Example translations for a program that uses three files main.lisp, 

;;;auxiliary.lisp, and documentation.lisp. These translations might be 

;;;supplied by a software supplier as examples. 

;;;For Unix with long file names 

(setf (logical-pathname-translations "prog") 

’(("CODE;\*.\*.\*" "/lib/prog/"))) 

;;;Sample use of that logical pathname. The return value 

;;;is implementation-dependent. 

(translate-logical-pathname "prog:code;documentation.lisp") 

*→* #P"/lib/prog/documentation.lisp" 

;;;For Unix with 14-character file names, using .lisp as the type 

(setf (logical-pathname-translations "prog") 

’(("CODE;DOCUMENTATION.\*.\*" "/lib/prog/docum.\*") 

("CODE;\*.\*.\*" "/lib/prog/"))) 

;;;Sample use of that logical pathname. The return value 

;;;is implementation-dependent. 

(translate-logical-pathname "prog:code;documentation.lisp") 

*→* #P"/lib/prog/docum.lisp" 

;;;For Unix with 14-character file names, using .l as the type 

;;;The second translation shortens the compiled file type to .b 

(setf (logical-pathname-translations "prog") 

‘(("\*\*;\*.LISP.\*" ,(logical-pathname "PROG:\*\*;\*.L.\*")) 

(,(compile-file-pathname (logical-pathname "PROG:\*\*;\*.LISP.\*")) 

Filenames **19–25**

 

 

**logical-pathname-translations** 

,(logical-pathname "PROG:\*\*;\*.B.\*")) 

("CODE;DOCUMENTATION.\*.\*" "/lib/prog/documentatio.\*") 

("CODE;\*.\*.\*" "/lib/prog/"))) 

;;;Sample use of that logical pathname. The return value 

;;;is implementation-dependent. 

(translate-logical-pathname "prog:code;documentation.lisp") 

*→* #P"/lib/prog/documentatio.l" 

;;;For a Cray with 6 character names and no directories, types, or versions. (setf (logical-pathname-translations "prog") 

(let ((l ’(("MAIN" "PGMN") 

("AUXILIARY" "PGAUX") 

("DOCUMENTATION" "PGDOC"))) 

(logpath (logical-pathname "prog:code;")) 

(phypath (pathname "XXX"))) 

(append 

;; Translations for source files 

(mapcar #’(lambda (x) 

(let ((log (first x)) 

(phy (second x))) 

(list (make-pathname :name log 

:type "LISP" 

:version :wild 

:defaults logpath) 

(make-pathname :name phy 

:defaults phypath)))) 

l) 

;; Translations for compiled files 

(mapcar #’(lambda (x) 

(let\* ((log (first x)) 

(phy (second x)) 

(com (compile-file-pathname 

(make-pathname :name log 

:type "LISP" 

:version :wild 

:defaults logpath)))) 

(setq phy (concatenate ’string phy "B")) 

(list com 

(make-pathname :name phy 

:defaults phypath)))) 

l)))) 



 

 

;;;Sample use of that logical pathname. The return value 

;;;is implementation-dependent. 

(translate-logical-pathname "prog:code;documentation.lisp") 

*→* #P"PGDOC" 

**Exceptional Situations:** 

If *host* is incorrectly supplied, an error of *type* **type-error** is signaled. 

**See Also:** 

**logical-pathname**, Section 19.1.2 (Pathnames as Filenames) 

**Notes:** 

Implementations can define additional *functions* that operate on *logical pathname* hosts, for example to specify additional translation rules or options. 

**logical-pathname** *Function* 

**Syntax:** 

**logical-pathname** *pathspec → logical-pathname* 

**Arguments and Values:** 

*pathspec*—a *logical pathname*, a *logical pathname namestring*, or a *stream*. 

*logical-pathname*—a *logical pathname*. 

**Description:** 

**logical-pathname** converts *pathspec* to a *logical pathname* and returns the new *logical pathname*. If *pathspec* is a *logical pathname namestring*, it should contain a host component and its following *colon*. If *pathspec* is a *stream*, it should be one for which **pathname** returns a *logical pathname*. 

If *pathspec* is a *stream*, the *stream* can be either open or closed. **logical-pathname** returns the same *logical pathname* after a file is closed as it did when the file was open. It is an error if *pathspec* is a *stream* that is created with **make-two-way-stream**, **make-echo-stream**, **make-broadcast-stream**, **make-concatenated-stream**, **make-string-input-stream**, or **make-string-output-stream**. 

**Exceptional Situations:** 

Signals an error of *type* **type-error** if *pathspec* isn’t supplied correctly. 

**See Also:** 

**logical-pathname**, **translate-logical-pathname**, Section 19.3 (Logical Pathnames) Filenames **19–27**

 

 

*∗***default-pathname-defaults***∗ Variable* 

**Value Type:** 

a *pathname object*. 

**Initial Value:** 

An *implementation-dependent pathname*, typically in the working directory that was current when Common Lisp was started up. 

**Description:** 

a *pathname*, used as the default whenever a *function* needs a default *pathname* and one is not supplied. 

**Examples:** 

;; This example illustrates a possible usage for a hypothetical Lisp running on a ;; DEC TOPS-20 file system. Since pathname conventions vary between Lisp 

;; implementations and host file system types, it is not possible to provide a ;; general-purpose, conforming example. 

\*default-pathname-defaults\* *→* #P"PS:\<FRED\>" 

(merge-pathnames (make-pathname :name "CALENDAR")) 

*→* #P"PS:\<FRED\>CALENDAR" 

(let ((\*default-pathname-defaults\* (pathname "\<MARY\>"))) 

(merge-pathnames (make-pathname :name "CALENDAR"))) 

*→* #P"\<MARY\>CALENDAR" 

**Affected By:** 

The *implementation*. 

**namestring, file-namestring, directory-namestring, host-namestring, enough-namestring** *Function* 

**Syntax:** 

**namestring** *pathname → namestring* 

**file-namestring** *pathname → namestring* 

**directory-namestring** *pathname → namestring* 

**host-namestring** *pathname → namestring* 

**enough-namestring** *pathname* &optional *defaults → namestring* 



 

 

**namestring, file-namestring, directory-namestring,** *. . .* 

**Arguments and Values:** 

*pathname*—a *pathname designator* . 

*defaults*—a *pathname designator* . The default is the *value* of **\*default-pathname-defaults\***. *namestring*—a *string* or **nil**. 

**Description:** 

These functions convert *pathname* into a namestring. The name represented by *pathname* is returned as a *namestring* in an *implementation-dependent* canonical form. 

**namestring** returns the full form of *pathname*. 

**file-namestring** returns just the name, type, and version components of *pathname*. **directory-namestring** returns the directory name portion. 

**host-namestring** returns the host name. 

**enough-namestring** returns an abbreviated namestring that is just sufficient to identify the file named by *pathname* when considered relative to the *defaults*. It is required that 

(merge-pathnames (enough-namestring pathname defaults) defaults) 

*≡* (merge-pathnames (parse-namestring pathname nil defaults) defaults) 

in all cases, and the result of **enough-namestring** is the shortest reasonable *string* that will satisfy this criterion. 

It is not necessarily possible to construct a valid *namestring* by concatenating some of the three shorter *namestrings* in some order. 

**Examples:** 

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

Filenames **19–29**

 

 

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

**See Also:** 

**truename**, **merge-pathnames**, **pathname**, **logical-pathname**, Section 20.1 (File System Concepts), Section 19.1.2 (Pathnames as Filenames) 

**parse-namestring** *Function* 

**Syntax:** 

**parse-namestring** *thing* &optional *host default-pathname* &key *start end junk-allowed → pathname, position* 

**Arguments and Values:** 

*thing*—a *string*, a *pathname*, or a *stream associated with a file*. 

*host*—a *valid pathname host*, a *logical host*, or **nil**. 

*default-pathname*—a *pathname designator* . The default is the *value* of 

**\*default-pathname-defaults\***. 



 

 

**parse-namestring** 

*start*, *end*—*bounding index designators* of *thing*. The defaults for *start* and *end* are 0 and **nil**, respectively. 

*junk-allowed*—a *generalized boolean*. The default is *false*. 

*pathname*—a *pathname*, or **nil**. 

*position*—a *bounding index designator* for *thing*. 

**Description:** 

Converts *thing* into a *pathname*. 

The *host* supplies a host name with respect to which the parsing occurs. 

If *thing* is a *stream associated with a file*, processing proceeds as if the *pathname* used to open that *file* had been supplied instead. 

If *thing* is a *pathname*, the *host* and the host component of *thing* are compared. If they match, two values are immediately returned: *thing* and *start*; otherwise (if they do not match), an error is signaled. 

Otherwise (if *thing* is a *string*), **parse-namestring** parses the name of a *file* within the substring of *thing* bounded by *start* and *end*. 

If *thing* is a *string* then the substring of *thing bounded* by *start* and *end* is parsed into a *pathname* as follows: 

*•* If *host* is a *logical host* then *thing* is parsed as a *logical pathname namestring* on the *host*. 

*•* If *host* is **nil** and *thing* is a syntactically valid *logical pathname namestring* containing an explicit host, then it is parsed as a *logical pathname namestring*. 

*•* If *host* is **nil**, *default-pathname* is a *logical pathname*, and *thing* is a syntactically valid *logical pathname namestring* without an explicit host, then it is parsed as a *logical pathname namestring* on the host that is the host component of *default-pathname*. 

*•* Otherwise, the parsing of *thing* is *implementation-defined*. 

In the first of these cases, the host portion of the *logical pathname* namestring and its following *colon* are optional. 

If the host portion of the namestring and *host* are both present and do not match, an error is signaled. 

If *junk-allowed* is *true*, then the *primary value* is the *pathname* parsed or, if no syntactically correct *pathname* was seen, **nil**. If *junk-allowed* is *false*, then the entire substring is scanned, and the *primary value* is the *pathname* parsed. 

In either case, the *secondary value* is the index into *thing* of the delimiter that terminated the Filenames **19–31**

 

 

parse, or the index beyond the substring if the parse terminated at the end of the substring (as will always be the case if *junk-allowed* is *false*). 

Parsing a *null string* always succeeds, producing a *pathname* with all components (except the host) equal to **nil**. 

If *thing* contains an explicit host name and no explicit device name, then it is *implementation defined* whether **parse-namestring** will supply the standard default device for that host as the device component of the resulting *pathname*. 

**Examples:** 

(setq q (parse-namestring "test")) 

*→* #S(PATHNAME :HOST NIL :DEVICE NIL :DIRECTORY NIL :NAME "test" 

:TYPE NIL :VERSION NIL) 

(pathnamep q) *→ true* 

(parse-namestring "test") 

*→* #S(PATHNAME :HOST NIL :DEVICE NIL :DIRECTORY NIL :NAME "test" 

:TYPE NIL :VERSION NIL), 4 

(setq s (open *xxx*)) *→* #\<Input File Stream...\> 

(parse-namestring s) 

*→* #S(PATHNAME :HOST NIL :DEVICE NIL :DIRECTORY NIL :NAME *xxx* 

:TYPE NIL :VERSION NIL), 0 

(parse-namestring "test" nil nil :start 2 :end 4 ) 

*→* #S(PATHNAME ...), 15 

(parse-namestring "foo.lisp") 

*→* #P"foo.lisp" 

**Exceptional Situations:** 

If *junk-allowed* is *false*, an error of *type* **parse-error** is signaled if *thing* does not consist entirely of the representation of a *pathname*, possibly surrounded on either side by *whitespace*\<sub\>1\</sub\> characters if that is appropriate to the cultural conventions of the implementation. 

If *host* is supplied and not **nil**, and *thing* contains a manifest host name, an error of *type* **error** is signaled if the hosts do not match. 

If *thing* is a *logical pathname* namestring and if the host portion of the namestring and *host* are both present and do not match, an error of *type* **error** is signaled. 

**See Also:** 

**pathname**, **logical-pathname**, Section 20.1 (File System Concepts), Section 19.2.2.2.3 (:UNSPE CIFIC as a Component Value), Section 19.1.2 (Pathnames as Filenames) 



 

 

**wild-pathname-p** 

**wild-pathname-p** *Function* 

**Syntax:** 

**wild-pathname-p** *pathname* &optional *field-key → generalized-boolean* 

**Arguments and Values:** 

*pathname*—a *pathname designator* . 

*Field-key*—one of :host, :device :directory, :name, :type, :version, or **nil**. 

*generalized-boolean*—a *generalized boolean*. 

**Description:** 

**wild-pathname-p** tests *pathname* for the presence of wildcard components. 

If *pathname* is a *pathname* (as returned by **pathname**) it represents the name used to open the file. This may be, but is not required to be, the actual name of the file. 

If *field-key* is not supplied or **nil**, **wild-pathname-p** returns true if *pathname* has any wildcard components, **nil** if *pathname* has none. If *field-key* is *non-nil*, **wild-pathname-p** returns true if the indicated component of *pathname* is a wildcard, **nil** if the component is not a wildcard. 

**Examples:** 

;;;The following examples are not portable. They are written to run 

;;;with particular file systems and particular wildcard conventions. 

;;;Other implementations will behave differently. These examples are 

;;;intended to be illustrative, not to be prescriptive. 

(wild-pathname-p (make-pathname :name :wild)) *→ true* 

(wild-pathname-p (make-pathname :name :wild) :name) *→ true* 

(wild-pathname-p (make-pathname :name :wild) :type) *→ false* 

(wild-pathname-p (pathname "s:\>foo\>\*\*\>")) *→ true* ;Lispm 

(wild-pathname-p (pathname :name "F\*O")) *→ true* ;Most places 

**Exceptional Situations:** 

If *pathname* is not a *pathname*, a *string*, or a *stream associated with a file* an error of *type* **type-error** is signaled. 

**See Also:** 

**pathname**, **logical-pathname**, Section 20.1 (File System Concepts), Section 19.1.2 (Pathnames as Filenames) 

**Notes:** 

Not all implementations support wildcards in all fields. See Section 19.2.2.2.2 (:WILD as a Filenames **19–33**

 

 

Component Value) and Section 19.2.2.3 (Restrictions on Wildcard Pathnames). 

**pathname-match-p** *Function* 

**Syntax:** 

**pathname-match-p** *pathname wildcard → generalized-boolean* 

**Arguments and Values:** 

*pathname*—a *pathname designator* . 

*wildcard*—a *designator* for a *wild pathname*. 

*generalized-boolean*—a *generalized boolean*. 

**Description:** 

**pathname-match-p** returns true if *pathname* matches *wildcard*, otherwise **nil**. The matching rules are *implementation-defined* but should be consistent with **directory**. Missing components of *wildcard* default to :wild. 

It is valid for *pathname* to be a wild *pathname*; a wildcard field in *pathname* only matches a wildcard field in *wildcard* (*i.e.*, **pathname-match-p** is not commutative). It is valid for *wildcard* to be a non-wild *pathname*. 

**Exceptional Situations:** 

If *pathname* or *wildcard* is not a *pathname*, *string*, or *stream associated with a file* an error of *type* **type-error** is signaled. 

**See Also:** 

**directory**, **pathname**, **logical-pathname**, Section 20.1 (File System Concepts), Section 19.1.2 (Pathnames as Filenames) 



 

 

**translate-logical-pathname** 

**translate-logical-pathname** *Function* 

**Syntax:** 

**translate-logical-pathname** *pathname* &key *→ physical-pathname* 

**Arguments and Values:** 

*pathname*—a *pathname designator* , or a *logical pathname namestring*. 

*physical-pathname*—a *physical pathname*. 

**Description:** 

Translates *pathname* to a *physical pathname*, which it returns. 

If *pathname* is a *stream*, the *stream* can be either open or closed. **translate-logical-pathname** returns the same physical pathname after a file is closed as it did when the file was open. It is an er ror if *pathname* is a *stream* that is created with **make-two-way-stream**, **make-echo-stream**, **make-broadcast-stream**, **make-concatenated-stream**, **make-string-input-stream**, **make-string-output-stream**. 

If *pathname* is a *logical pathname* namestring, the host portion of the *logical pathname* namestring and its following *colon* are required. 

*Pathname* is first coerced to a *pathname*. If the coerced *pathname* is a physical pathname, it is returned. If the coerced *pathname* is a *logical pathname*, the first matching translation (according to **pathname-match-p**) of the *logical pathname* host is applied, as if by calling **translate-pathname**. If the result is a *logical pathname*, this process is repeated. When the result is finally a physical pathname, it is returned. If no translation matches, an error is signaled. 

**translate-logical-pathname** might perform additional translations, typically to provide translation of file types to local naming conventions, to accomodate physical file systems with limited length names, or to deal with special character requirements such as translating hyphens to underscores or uppercase letters to lowercase. Any such additional translations are *implementation-defined*. Some implementations do no additional translations. 

There are no specified keyword arguments for **translate-logical-pathname**, but implementations are permitted to extend it by adding keyword arguments. 

**Examples:** 

See **logical-pathname-translations**. 

**Exceptional Situations:** 

If *pathname* is incorrectly supplied, an error of *type* **type-error** is signaled. 

If no translation matches, an error of *type* **file-error** is signaled. 

Filenames **19–35**

 

 

**See Also:** 

**logical-pathname**, **logical-pathname-translations**, **logical-pathname**, Section 20.1 (File System Concepts), Section 19.1.2 (Pathnames as Filenames) 

**translate-pathname** *Function* 

**Syntax:** 

**translate-pathname** *source from-wildcard to-wildcard* &key 

*→ translated-pathname* 

**Arguments and Values:** 

*source*—a *pathname designator* . 

*from-wildcard*—a *pathname designator* . 

*to-wildcard*—a *pathname designator* . 

*translated-pathname*—a *pathname*. 

**Description:** 

**translate-pathname** translates *source* (that matches *from-wildcard*) into a corresponding *pathname* that matches *to-wildcard*, and returns the corresponding *pathname*. 

The resulting *pathname* is *to-wildcard* with each wildcard or missing field replaced by a portion of *source*. A “wildcard field” is a *pathname* component with a value of :wild, a :wild element of a *list*-valued directory component, or an *implementation-defined* portion of a component, such as the "\*" in the complex wildcard string "foo\*bar" that some implementations support. An implementation that adds other wildcard features, such as regular expressions, must define how **translate-pathname** extends to those features. A “missing field” is a *pathname* component with a value of **nil**. 

The portion of *source* that is copied into the resulting *pathname* is *implementation-defined*. Typically it is determined by the user interface conventions of the file systems involved. Usually it is the portion of *source* that matches a wildcard field of *from-wildcard* that is in the same position as the wildcard or missing field of *to-wildcard*. If there is no wildcard field in *from-wildcard* at that position, then usually it is the entire corresponding *pathname* component of *source*, or in the case of a *list*-valued directory component, the entire corresponding *list* element. 

During the copying of a portion of *source* into the resulting *pathname*, additional *implementation defined* translations of *case* or file naming conventions might occur, especially when *from-wildcard* and *to-wildcard* are for different hosts. 

It is valid for *source* to be a wild *pathname*; in general this will produce a wild result. It is valid for *from-wildcard* and/or *to-wildcard* to be non-wild *pathnames*. 



 

 

**translate-pathname** 

There are no specified keyword arguments for **translate-pathname**, but implementations are permitted to extend it by adding keyword arguments. 

**translate-pathname** maps customary case in *source* into customary case in the output *pathname*. **Examples:** 

;; The results of the following five forms are all implementation-dependent. 

;; The second item in particular is shown with multiple results just to 

;; emphasize one of many particular variations which commonly occurs. 

(pathname-name (translate-pathname "foobar" "foo\*" "\*baz")) *→* "barbaz" 

(pathname-name (translate-pathname "foobar" "foo\*" "\*")) 

*→* "foobar" 

\<i\>\<sup\>or\</sup\>→\</i\> "bar" 

(pathname-name (translate-pathname "foobar" "\*" "foo\*")) *→* "foofoobar" 

(pathname-name (translate-pathname "bar" "\*" "foo\*")) *→* "foobar" 

(pathname-name (translate-pathname "foobar" "foo\*" "baz\*")) *→* "bazbar" 

(defun translate-logical-pathname-1 (pathname rules) 

(let ((rule (assoc pathname rules :test #’pathname-match-p))) 

(unless rule (error "No translation rule for ~A" pathname)) 

(translate-pathname pathname (first rule) (second rule)))) 

(translate-logical-pathname-1 "FOO:CODE;BASIC.LISP" 

’(("FOO:DOCUMENTATION;" "MY-UNIX:/doc/foo/") 

("FOO:CODE;" "MY-UNIX:/lib/foo/") 

("FOO:PATCHES;\*;" "MY-UNIX:/lib/foo/patch/\*/"))) 

*→* #P"MY-UNIX:/lib/foo/basic.l" 

;;;This example assumes one particular set of wildcard conventions 

;;;Not all file systems will run this example exactly as written 

(defun rename-files (from to) 

(dolist (file (directory from)) 

(rename-file file (translate-pathname file from to)))) 

(rename-files "/usr/me/\*.lisp" "/dev/her/\*.l") 

;Renames /usr/me/init.lisp to /dev/her/init.l 

(rename-files "/usr/me/pcl\*/\*" "/sys/pcl/\*/") 

;Renames /usr/me/pcl-5-may/low.lisp to /sys/pcl/pcl-5-may/low.lisp 

;In some file systems the result might be /sys/pcl/5-may/low.lisp 

(rename-files "/usr/me/pcl\*/\*" "/sys/library/\*/") 

;Renames /usr/me/pcl-5-may/low.lisp to /sys/library/pcl-5-may/low.lisp 

;In some file systems the result might be /sys/library/5-may/low.lisp 

(rename-files "/usr/me/foo.bar" "/usr/me2/") 

;Renames /usr/me/foo.bar to /usr/me2/foo.bar 

(rename-files "/usr/joe/\*-recipes.text" "/usr/jim/cookbook/joe’s-\*-rec.text") ;Renames /usr/joe/lamb-recipes.text to /usr/jim/cookbook/joe’s-lamb-rec.text 

;Renames /usr/joe/pork-recipes.text to /usr/jim/cookbook/joe’s-pork-rec.text 

Filenames **19–37**

 

 

;Renames /usr/joe/veg-recipes.text to /usr/jim/cookbook/joe’s-veg-rec.text 

**Exceptional Situations:** 

If any of *source*, *from-wildcard*, or *to-wildcard* is not a *pathname*, a *string*, or a *stream associated with a file* an error of *type* **type-error** is signaled. 

(pathname-match-p *source from-wildcard*) must be true or an error of *type* **error** is signaled. 

**See Also:** 

**namestring**, **pathname-host**, **pathname**, **logical-pathname**, Section 20.1 (File System Concepts), Section 19.1.2 (Pathnames as Filenames) 

**Notes:** 

The exact behavior of **translate-pathname** cannot be dictated by the Common Lisp language and must be allowed to vary, depending on the user interface conventions of the file systems involved. 

The following is an implementation guideline. One file system performs this operation by examining each piece of the three *pathnames* in turn, where a piece is a *pathname* component or a *list* element of a structured component such as a hierarchical directory. Hierarchical directory elements in *from-wildcard* and *to-wildcard* are matched by whether they are wildcards, not by depth in the directory hierarchy. If the piece in *to-wildcard* is present and not wild, it is copied into the result. If the piece in *to-wildcard* is :wild or **nil**, the piece in *source* is copied into the result. Otherwise, the piece in *to-wildcard* might be a complex wildcard such as "foo\*bar" and the piece in *from-wildcard* should be wild; the portion of the piece in *source* that matches the wildcard portion of the piece in *from-wildcard* replaces the wildcard portion of the piece in *to-wildcard* and the value produced is used in the result. 

**merge-pathnames** *Function* 

**Syntax:** 

**merge-pathnames** *pathname* &optional *default-pathname default-version* 

*→ merged-pathname* 

**Arguments and Values:** 

*pathname*—a *pathname designator* . 

*default-pathname*—a *pathname designator* . The default is the *value* of 

**\*default-pathname-defaults\***. 

*default-version*—a *valid pathname version*. The default is :newest. 

*merged-pathname*—a *pathname*. 



 

 

**merge-pathnames** 

**Description:** 

Constructs a *pathname* from *pathname* by filling in any unsupplied components with the corresponding values from *default-pathname* and *default-version*. 

Defaulting of pathname components is done by filling in components taken from another *pathname*. This is especially useful for cases such as a program that has an input file and an output file. Unspecified components of the output pathname will come from the input pathname, except that the type should not default to the type of the input pathname but rather to the appropriate default type for output from the program; for example, see the *function* **compile-file-pathname**. 

If no version is supplied, *default-version* is used. If *default-version* is **nil**, the version component will remain unchanged. 

If *pathname* explicitly specifies a host and not a device, and if the host component of *default-pathname* matches the host component of *pathname*, then the device is taken from the *default-pathname*; otherwise the device will be the default file device for that host. If *pathname* does not specify a host, device, directory, name, or type, each such component is copied from *default-pathname*. If *pathname* does not specify a name, then the version, if not provided, will come from *default-pathname*, just like the other components. If *pathname* does specify a name, then the version is not affected by *default-pathname*. If this process leaves the version missing, the *default-version* is used. If the host’s file name syntax provides a way to input a version without a name or type, the user can let the name and type default but supply a version different from the one in *default-pathname*. 

If *pathname* is a *stream*, *pathname* effectively becomes (pathname *pathname*). **merge-pathnames** can be used on either an open or a closed *stream*. 

If *pathname* is a *pathname* it represents the name used to open the file. This may be, but is not required to be, the actual name of the file. 

**merge-pathnames** recognizes a *logical pathname namestring* when *default-pathname* is a *logical pathname*, or when the *namestring* begins with the name of a defined *logical host* followed by a *colon*. In the first of these two cases, the host portion of the *logical pathname namestring* and its following *colon* are optional. 

**merge-pathnames** returns a *logical pathname* if and only if its first argument is a *logical pathname*, or its first argument is a *logical pathname namestring* with an explicit host, or its first argument does not specify a host and the *default-pathname* is a *logical pathname*. 

*Pathname* merging treats a relative directory specially. If (pathname-directory *pathname*) is a *list* whose *car* is :relative, and (pathname-directory *default-pathname*) is a *list*, then the merged directory is the value of 

(append (pathname-directory *default-pathname*) 

(cdr ;remove :relative from the front 

(pathname-directory *pathname*))) 

except that if the resulting *list* contains a *string* or :wild immediately followed by :back, Filenames **19–39**

 

 

**merge-pathnames** 

both of them are removed. This removal of redundant :back *keywords* is repeated as many times as possible. If (pathname-directory *default-pathname*) is not a *list* or (pathname-directory *pathname*) is not a *list* whose *car* is :relative, the merged directory is (or (pathname-directory *pathname*) (pathname-directory *default-pathname*)) 

**merge-pathnames** maps customary case in *pathname* into customary case in the output *pathname*. 

**Examples:** 

(merge-pathnames "CMUC::FORMAT" 

"CMUC::PS:\<LISPIO\>.FASL") 

*→* #P"CMUC::PS:\<LISPIO\>FORMAT.FASL.0" 

**See Also:** 

**\*default-pathname-defaults\***, **pathname**, **logical-pathname**, Section 20.1 (File System Concepts), Section 19.1.2 (Pathnames as Filenames) 

**Notes:** 

The net effect is that if just a name is supplied, the host, device, directory, and type will come from *default-pathname*, but the version will come from *default-version*. If nothing or just a directory is supplied, the name, type, and version will come from *default-pathname* together. 



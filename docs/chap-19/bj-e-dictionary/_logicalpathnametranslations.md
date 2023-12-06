**logical-pathname-translations** *Accessor* 



**Syntax:** 



**logical-pathname-translations** *host → translations* 



**(setf (logical-pathname-translations** *host***)** *new-translations***)** 



**Arguments and Values:** 



*host*–a *logical host designator* . 



*translations*, *new-translations*—a *list*. 







 



 



**logical-pathname-translations** 



**Description:** 



Returns the host’s *list* of translations. Each translation is a *list* of at least two elements: *from-wildcard* and *to-wildcard*. Any additional elements are *implementation-defined*. *From-wildcard* is a *logical pathname* whose host is *host*. *To-wildcard* is a *pathname*. 



(setf (logical-pathname-translations *host*) *translations*) sets a *logical pathname* host’s *list* of *translations*. If *host* is a *string* that has not been previously used as a *logical pathname* host, a new *logical pathname* host is defined; otherwise an existing host’s translations are replaced. *logical pathname* host names are compared with **string-equal**. 



When setting the translations list, each *from-wildcard* can be a *logical pathname* whose host is *host* or a *logical pathname* namestring parseable by (parse-namestring *string host*), where *host* represents the appropriate *object* as defined by **parse-namestring**. Each *to-wildcard* can be anything coercible to a *pathname* by (pathname *to-wildcard*). If *to-wildcard* coerces to a *logical pathname*, **translate-logical-pathname** will perform repeated translation steps when it uses it. 



*host* is either the host component of a *logical pathname* or a *string* that has been defined as a *logical pathname* host name by **setf** of **logical-pathname-translations**. 



**Examples:**
```lisp
 

;;;A very simple example of setting up a logical pathname host. No 

;;;translations are necessary to get around file system restrictions, so 

;;;all that is necessary is to specify the root of the physical directory 

;;;tree that contains the logical file system. 

;;;The namestring syntax on the right-hand side is implementation-dependent. 

(setf (logical-pathname-translations "foo") 

’(("\*\*;\*.\*.\*" "MY-LISPM:&gt;library&gt;foo&gt;\*\*&gt;"))) 

;;;Sample use of that logical pathname. The return value 

;;;is implementation-dependent. 

(translate-logical-pathname "foo:bar;baz;mum.quux.3") 

*→* #P"MY-LISPM:&gt;library&gt;foo&gt;bar&gt;baz&gt;mum.quux.3" 

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


```
**Exceptional Situations:** 



If *host* is incorrectly supplied, an error of *type* **type-error** is signaled. 



**See Also:** 



**logical-pathname**, Section 19.1.2 (Pathnames as Filenames) 



**Notes:** 



Implementations can define additional *functions* that operate on *logical pathname* hosts, for example to specify additional translation rules or options. 



